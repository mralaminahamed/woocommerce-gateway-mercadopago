<?php

namespace MercadoPago\Woocommerce\Gateways;

use MercadoPago\Woocommerce\Helpers\Form;
use MercadoPago\Woocommerce\Helpers\Numbers;
use MercadoPago\Woocommerce\Transactions\PixTransaction;

if (!defined('ABSPATH')) {
    exit;
}

class PixGateway extends AbstractGateway
{
    /**
     * @const
     */
    public const ID = 'woo-mercado-pago-pix';

    /**
     * @const
     */
    public const CHECKOUT_NAME = 'checkout-pix';

    /**
     * @const
     */
    public const WEBHOOK_API_NAME = 'WC_WooMercadoPago_Pix_Gateway';

    /**
     * @const
     */
    public const LOG_SOURCE = 'MercadoPago_PixGateway';

    /**
     * @const
     */
    public const PIX_IMAGE_ENDPOINT = 'mp_pix_image';

    /**
     * PixGateway constructor
     */
    public function __construct()
    {
        parent::__construct();

        $this->adminTranslations = $this->mercadopago->adminTranslations->pixGatewaySettings;
        $this->storeTranslations = $this->mercadopago->storeTranslations->pixCheckout;

        $this->id    = self::ID;
        $this->icon  = $this->mercadopago->gateway->getGatewayIcon('icon-pix-blue');
        $this->title = $this->mercadopago->store->getGatewayTitle($this, $this->adminTranslations['gateway_title']);

        $this->init_settings();
        $this->init_form_fields();
        $this->payment_scripts($this->id);

        $this->description        = $this->adminTranslations['gateway_description'];
        $this->method_title       = $this->adminTranslations['gateway_method_title'];
        $this->method_description = $this->adminTranslations['gateway_method_description'];
        $this->discount           = $this->getActionableValue('discount', 0);
        $this->commission         = $this->getActionableValue('commission', 0);
        $this->expirationDate     = (int) $this->mercadopago->store->getCheckoutDateExpirationPix($this, '1');

        $this->mercadopago->gateway->registerUpdateOptions($this);
        $this->mercadopago->gateway->registerGatewayTitle($this);
        $this->mercadopago->gateway->registerThankYouPage($this->id, [$this, 'renderThankYouPage']);

        $this->mercadopago->order->registerEmailBeforeOrderTable([$this, 'renderOrderReceivedTemplate']);
        $this->mercadopago->order->registerOrderDetailsAfterOrderTable([$this, 'renderOrderReceivedTemplate']);
        $this->mercadopago->order->registerAdminOrderTotalsAfterTotal([$this, 'registerCommissionAndDiscountOnAdminOrder']);

        $this->mercadopago->endpoints->registerApiEndpoint(self::WEBHOOK_API_NAME, [$this, 'webhook']);
        $this->mercadopago->endpoints->registerApiEndpoint(self::PIX_IMAGE_ENDPOINT, [$this, 'generatePixImage']);

        $this->mercadopago->currency->handleCurrencyNotices($this);
    }

    /**
     * Init form fields for checkout configuration
     *
     * @return void
     */
    public function init_form_fields(): void
    {
        if($this->addMissingCredentialsNoticeAsFormField()){
            return;
        }
        parent::init_form_fields();

        if (!empty($this->mercadopago->store->getCheckoutCountry()) &&
            !empty($this->mercadopago->seller->getCredentialsPublicKey()) &&
            !empty($this->mercadopago->seller->getCredentialsAccessToken())
        ) {
            $paymentMethodPix = $this->mercadopago->seller->getCheckoutPixPaymentMethods();

            if (empty($paymentMethodPix)) {
                $this->form_fields = array_merge($this->form_fields, $this->sellerWithoutPixFields());
                return;
            }

            $this->form_fields = array_merge($this->form_fields, $this->sellerWithPixFields());
        }
    }

    /**
     * Added gateway scripts
     *
     * @param string $gatewaySection
     *
     * @return void
     */
    public function payment_scripts(string $gatewaySection): void
    {
        parent::payment_scripts($gatewaySection);
    }

    /**
     * Render gateway checkout template
     *
     * @return void
     */
    public function payment_fields(): void
    {
        $this->mercadopago->template->getWoocommerceTemplate(
            'public/checkouts/pix-checkout.php',
            [
                'test_mode'                        => $this->mercadopago->store->isTestMode(),
                'test_mode_title'                  => $this->storeTranslations['test_mode_title'],
                'test_mode_description'            => $this->storeTranslations['test_mode_description'],
                'pix_template_title'               => $this->storeTranslations['pix_template_title'],
                'pix_template_subtitle'            => $this->storeTranslations['pix_template_subtitle'],
                'pix_template_alt'                 => $this->storeTranslations['pix_template_alt'],
                'pix_template_src'                 => $this->mercadopago->url->getPluginFileUrl('/assets/images/checkouts/pix/pix', '.png', true),
                'terms_and_conditions_description' => $this->storeTranslations['terms_and_conditions_description'],
                'terms_and_conditions_link_text'   => $this->storeTranslations['terms_and_conditions_link_text'],
                'terms_and_conditions_link_src'    => $this->links['mercadopago_terms_and_conditions'],
            ]
        );
    }

    /**
     * Process payment and create woocommerce order
     *
     * @param $order_id
     *
     * @return array
     */
    public function process_payment($order_id): array
    {
        parent::process_payment($order_id);

        $order    = wc_get_order($order_id);
        $checkout = Form::sanitizeFromData($_POST);

        if (!filter_var($order->get_billing_email(), FILTER_VALIDATE_EMAIL)) {
            return $this->processReturnFail(
                $this->mercadopago->storeTranslations->commonMessages['cho_default_error'],
                self::LOG_SOURCE
            );
        }

        $this->transaction = new PixTransaction($this, $order, $checkout);
        $response          = $this->transaction->createPayment();

        if (is_array($response) && array_key_exists('status', $response)) {
            $this->mercadopago->orderMetadata->updatePaymentsOrderMetadata($order, [$response['id']]);

            if ($response['status'] === 'pending' && (
                $response['status_detail'] === 'pending_waiting_payment' ||
                $response['status_detail'] === 'pending_waiting_transfer'
            )) {
                $this->mercadopago->woocommerce->cart->empty_cart();
                $this->mercadopago->order->setPixMetadata($this, $order, $response);
                $this->mercadopago->order->addOrderNote($order, $this->storeTranslations['customer_not_paid']);

                $urlReceived = esc_url($order->get_checkout_order_received_url());

                $description = "
                    <div style='text-align: justify;'>
                        <p>{$this->storeTranslations['congrats_title']}</p>
                        <small>{$this->storeTranslations['congrats_subtitle']}</small>
                    </div>
                ";

                $this->mercadopago->order->addOrderNote($order, $description, 1);

                return [
                    'result'   => 'success',
                    'redirect' => $urlReceived,
                ];
            }
        }

        return $this->processReturnFail(
            $this->mercadopago->storeTranslations->commonMessages['cho_form_error'],
            self::LOG_SOURCE
        );
    }

    /**
     * Verify if the gateway is available
     *
     * @return bool
     */
    public static function isAvailable(): bool
    {
        global $mercadopago;

        $siteId  = $mercadopago->seller->getSiteId();
        $country = $mercadopago->country->getWoocommerceDefaultCountry();

        if ($siteId === 'MLB' || ($siteId === '' && $country === 'BR')) {
            return true;
        }

        return false;
    }

    /**
     * Mount fields for seller configure Pix
     *
     * @return array
     */
    public function sellerWithPixFields(): array
    {
        return [
            'header' => [
                'type'        => 'mp_config_title',
                'title'       => $this->adminTranslations['header_title'],
                'description' => $this->adminTranslations['header_description'],
            ],
            'card_homolog_validate' => $this->getHomologValidateNoticeOrHidden(),
            'card_settings'  => [
                'type'  => 'mp_card_info',
                'value' => [
                    'title'       => $this->adminTranslations['card_settings_title'],
                    'subtitle'    => $this->adminTranslations['card_settings_subtitle'],
                    'button_text' => $this->adminTranslations['card_settings_button_text'],
                    'button_url'  => $this->links['admin_settings_page'],
                    'icon'        => 'mp-icon-badge-info',
                    'color_card'  => 'mp-alert-color-success',
                    'size_card'   => 'mp-card-body-size',
                    'target'      => '_self',
                ],
            ],
            'enabled' => [
                'type'         => 'mp_toggle_switch',
                'title'        => $this->adminTranslations['enabled_title'],
                'subtitle'     => $this->adminTranslations['enabled_subtitle'],
                'default'      => 'no',
                'descriptions' => [
                    'enabled'  => $this->adminTranslations['enabled_descriptions_enabled'],
                    'disabled' => $this->adminTranslations['enabled_descriptions_disabled'],
                ],
            ],
            'title' => [
                'type'        => 'text',
                'title'       => $this->adminTranslations['title_title'],
                'description' => $this->adminTranslations['title_description'],
                'default'     => $this->adminTranslations['title_default'],
                'desc_tip'    => $this->adminTranslations['title_desc_tip'],
                'class'       => 'limit-title-max-length',
            ],
            'expiration_date' => [
                'type'        => 'select',
                'title'       => $this->adminTranslations['expiration_date_title'],
                'description' => $this->adminTranslations['expiration_date_description'],
                'default'     => '30 minutes',
                'options'     => [
                    '15 minutes' => $this->adminTranslations['expiration_date_options_15_minutes'],
                    '30 minutes' => $this->adminTranslations['expiration_date_options_30_minutes'],
                    '60 minutes' => $this->adminTranslations['expiration_date_options_60_minutes'],
                    '12 hours'   => $this->adminTranslations['expiration_date_options_12_hours'],
                    '24 hours'   => $this->adminTranslations['expiration_date_options_24_hours'],
                    '2 days'     => $this->adminTranslations['expiration_date_options_2_days'],
                    '3 days'     => $this->adminTranslations['expiration_date_options_3_days'],
                    '4 days'     => $this->adminTranslations['expiration_date_options_4_days'],
                    '5 days'     => $this->adminTranslations['expiration_date_options_5_days'],
                    '6 days'     => $this->adminTranslations['expiration_date_options_6_days'],
                    '7 days'     => $this->adminTranslations['expiration_date_options_7_days'],
                ]
            ],
            'currency_conversion' => [
                'type'         => 'mp_toggle_switch',
                'title'        => $this->adminTranslations['currency_conversion_title'],
                'subtitle'     => $this->adminTranslations['currency_conversion_subtitle'],
                'default'      => 'no',
                'descriptions' => [
                    'enabled'  => $this->adminTranslations['currency_conversion_descriptions_enabled'],
                    'disabled' => $this->adminTranslations['currency_conversion_descriptions_disabled'],
                ],
            ],
            'card_info_helper' => [
                'type'  => 'title',
                'value' => '',
            ],
            'card_info' => [
                'type'  => 'mp_card_info',
                'value' => [
                    'title'       => $this->adminTranslations['card_info_title'],
                    'subtitle'    => $this->adminTranslations['card_info_subtitle'],
                    'button_text' => $this->adminTranslations['card_info_button_text'],
                    'button_url'  => $this->links['mercadopago_pix'],
                    'icon'        => 'mp-icon-badge-info',
                    'color_card'  => 'mp-alert-color-success',
                    'size_card'   => 'mp-card-body-size',
                    'target'      => '_blank',
                ]
            ],
            'advanced_configuration_title' => [
                'type'  => 'title',
                'title' => $this->adminTranslations['advanced_configuration_title'],
                'class' => 'mp-subtitle-body',
            ],
            'advanced_configuration_description' => [
                'type'  => 'title',
                'title' => $this->adminTranslations['advanced_configuration_subtitle'],
                'class' => 'mp-small-text',
            ],
            'discount'   => $this->getDiscountField(),
            'commission' => $this->getCommissionField(),
        ];
    }

    /**
     * Mount fields to show the seller how to activate Pix
     *
     * @return array
     */
    public function sellerWithoutPixFields(): array
    {
        if ($this->mercadopago->url->getCurrentSection() == $this->id) {
            $this->mercadopago->notices->adminNoticeMissPix();
        }

        $stepsContent = $this->mercadopago->template->getWoocommerceTemplateHtml(
            'admin/settings/steps.php',
            [
                'title'             => $this->adminTranslations['steps_title'],
                'step_one_text'     => $this->adminTranslations['steps_step_one_text' ],
                'step_two_text'     => $this->adminTranslations['steps_step_two_text'],
                'step_three_text'   => $this->adminTranslations['steps_step_three_text'],
                'observation_one'   => $this->adminTranslations['steps_observation_one'],
                'observation_two'   => $this->adminTranslations['steps_observation_two'],
                'button_about_pix'  => $this->adminTranslations['steps_button_about_pix'],
                'observation_three' => $this->adminTranslations['steps_observation_three'],
                'link_title_one'    => $this->adminTranslations['steps_link_title_one'],
                'link_url_one'      => $this->links['mercadopago_pix'],
                'link_url_two'      => $this->links['mercadopago_support'],
            ]
        );

        return [
            'header' => [
                'type'        => 'mp_config_title',
                'title'       => $this->adminTranslations['header_title'],
                'description' => $this->adminTranslations['header_description'],
            ],
            'steps_content' => [
                'title' => $stepsContent,
                'type'  => 'title',
                'class' => 'mp_title_checkout',
            ],
        ];
    }

    /**
     * Generate pix image with gd_extension and fallback
     *
     * @return void
     */
    public function generatePixImage(): void
    {
        $orderId = Form::sanitizeTextFromGet('id');
        if (!$orderId) {
            $this->mercadopago->images->getErrorImage();
        }

        $order = wc_get_order($orderId);
        if (!$order) {
            $this->mercadopago->images->getErrorImage();
        }

        $qrCodeBase64 = $this->mercadopago->orderMetadata->getPixQrBase64Post($orderId);
        $qrCodeBase64 = array_pop($qrCodeBase64);

        if (!$qrCodeBase64) {
            $this->mercadopago->images->getErrorImage();
        }

        $this->mercadopago->images->getBase64Image($qrCodeBase64);
    }

    /**
     * Get pix order received template
     *
     * @param $order
     *
     * @return void
     */
    public function renderOrderReceivedTemplate($order): void
    {
        $orderId = $order->get_id();
        $pixOn   = $this->mercadopago->orderMetadata->getPixOnPost($orderId);
        $pixOn   = (bool) array_pop($pixOn);

        if ($pixOn && $order->get_status() === 'pending') {
            $qrCode = $this->mercadopago->orderMetadata->getPixQrCodePost($orderId);
            $qrCode = array_pop($qrCode);

            $qrCodeBase64 = $this->mercadopago->orderMetadata->getPixQrBase64Post($orderId);
            $qrCodeBase64 = array_pop($qrCodeBase64);

            $expirationDate = $this->mercadopago->orderMetadata->getPixExpirationDatePost($orderId);
            $expirationDate = array_pop($expirationDate);

            $siteUrl     = $this->mercadopago->options->get('siteurl');
            $qrCodeImage = !in_array('gd', get_loaded_extensions(), true)
                ? "data:image/jpeg;base64,$qrCodeBase64"
                : "$siteUrl/wc-api/". self::PIX_IMAGE_ENDPOINT ."?id=$orderId";

            $this->mercadopago->scripts->registerStoreStyle(
                'mp_pix_image',
                $this->mercadopago->url->getPluginFileUrl('assets/css/public/mp-pix-image', '.css')
            );

            $this->mercadopago->template->getWoocommerceTemplate(
                'public/order/pix-order-received-image.php',
                [
                    'qr_code'              => $qrCode,
                    'expiration_date'      => $expirationDate,
                    'expiration_date_text' => $this->storeTranslations['expiration_date_text'],
                    'qr_code_image'        => $qrCodeImage,
                ]
            );
        }
    }

    /**
     * Render thank you page
     *
     * @param $order_id
     */
    public function renderThankYouPage($order_id): void
    {
        $order = wc_get_order($order_id);

        $transactionAmount = $this->mercadopago->orderMetadata->getTransactionAmountMeta($order);
        $transactionAmount = Numbers::format($transactionAmount);

        $defaultValue      = $this->storeTranslations['expiration_30_minutes'];
        $expirationOption  = $this->mercadopago->store->getCheckoutDateExpirationPix($this, $defaultValue);

        $qrCode       = $this->mercadopago->orderMetadata->getPixQrCodeMeta($order);
        $qrCodeBase64 = $this->mercadopago->orderMetadata->getPixQrBase64Meta($order);

        if (empty($qrCodeBase64) && empty($qrCode)) {
            return;
        }

        $this->mercadopago->scripts->registerStoreStyle(
            'mp_pix_thankyou',
            $this->mercadopago->url->getPluginFileUrl('assets/css/public/mp-pix-thankyou', '.css')
        );

        $this->mercadopago->template->getWoocommerceTemplate(
            'public/order/pix-order-received.php',
            [
                'img_pix'             => $this->mercadopago->url->getPluginFileUrl('/assets/images/checkouts/pix/pix', '.png', true),
                'amount'              => number_format($transactionAmount, 2, ',', '.'),
                'qr_base64'           => $qrCodeBase64,
                'title_purchase_pix'  => $this->storeTranslations['title_purchase_pix'],
                'title_how_to_pay'    => $this->storeTranslations['title_how_to_pay'],
                'step_one'            => $this->storeTranslations['step_one'],
                'step_two'            => $this->storeTranslations['step_two'],
                'step_three'          => $this->storeTranslations['step_three'],
                'step_four'           => $this->storeTranslations['step_four'],
                'text_amount'         => $this->storeTranslations['text_amount'],
                'currency'            => $this->countryConfigs['currency_symbol'],
                'text_scan_qr'        => $this->storeTranslations['text_scan_qr'],
                'text_time_qr_one'    => $this->storeTranslations['expiration_date_text'],
                'qr_date_expiration'  => $expirationOption,
                'text_description_qr' => $this->storeTranslations['text_description_qr'],
                'qr_code'             => $qrCode,
                'text_button'         => $this->storeTranslations['text_button'],
            ]
        );
    }

    /**
     * Register commission and discount on admin order totals
     *
     * @param int $orderId
     *
     * @return void
     */
    public function registerCommissionAndDiscountOnAdminOrder(int $orderId): void
    {
        parent::registerCommissionAndDiscount($this, $orderId);
    }
}
