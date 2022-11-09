<?php

namespace MercadoPago\Woocommerce\Admin;

if (!defined('ABSPATH')) {
    exit;
}

class Translations
{
    /**
     * @const
     */
    private const DOMAIN = 'woocommerce-mercadopago';

    /**
     * @var array
     */
    public $notices = [];

    /**
     * @var array
     */
    public $pluginSettings = [];

    /**
     * @var array
     */
    public $headerSettings = [];

    /**
     * @var array
     */
    public $credentialsSettings = [];

    /**
     * @var array
     */
    public $storeSettings = [];

    /**
     * @var array
     */
    public $orderSettings = [];

    /**
     * @var array
     */
    public $gatewaysSettings = [];

    /**
     * @var array
     */
    public $testModeSettings = [];

    /**
     * @var array
     */
    public $configurationTips = [];

    /**
     * @var array
     */
    public $validateCredentials = [];

    /**
     * @var array
     */
    public $updateCredentials = [];

    /**
     * @var array
     */
    public $updateStore = [];

    /**
     * @var Translations
     */
    private static $instance = null;

    /**
     * Translations constructor
     */
    public function __construct()
    {
        $this->setNoticesTranslations();
        $this->setPluginSettingsTranslations();
        $this->setHeaderSettingsTranslations();
        $this->setCredentialsSettingsTranslations();
        $this->setStoreSettingsTranslations();
        $this->setOrderSettingsTranslations();
        $this->setGatewaysSettingsTranslations();
        $this->setTestModeSettingsTranslations();
        $this->setConfigurationTipsTranslations();
        $this->setUpdateCredentialsTranslations();
        $this->setValidateCredentialsTranslations();
        $this->setUpdateStoreTranslations();
    }

    /**
     * Get Translations instance
     *
     * @return Translations
     */
    public static function getInstance(): Translations
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Get translation
     *
     * @param string $text
     * @return string
     */
    private function translate(string $text): string
    {
        return __($text, self::DOMAIN);
    }

    /**
     * Set notices translations
     *
     * @return void
     */
    private function setNoticesTranslations(): void
    {
        $missWoocommerce = sprintf(
            $this->translate('The Mercado Pago module needs an active version of %s in order to work!'),
            '<a target="_blank" href="https://wordpress.org/extend/plugins/woocommerce/">WooCommerce</a>'
        );

        $this->notices = [
            'php_wrong_version'     => $this->translate('Mercado Pago payments for WooCommerce requires PHP version 7.2 or later. Please update your PHP version.'),
            'missing_curl'          => $this->translate('Mercado Pago Error: PHP Extension CURL is not installed.'),
            'missing_gd_extensions' => $this->translate('Mercado Pago Error: PHP Extension GD is not installed. Installation of GD extension is required to send QR Code Pix by email.'),
            'activate_woocommerce'  => $this->translate('Activate WooCommerce'),
            'install_woocommerce'   => $this->translate('Install WooCommerce'),
            'see_woocommerce'       => $this->translate('See WooCommerce'),
            'miss_woocommerce'      => $missWoocommerce,
        ];
    }

    /**
     * Set plugin settings translations
     *
     * @return void
     */
    private function setPluginSettingsTranslations(): void
    {
        $this->pluginSettings = [
            'set_plugin'     => $this->translate('Set plugin'),
            'payment_method' => $this->translate('Payment method'),
            'plugin_manual'  => $this->translate('Plugin manual'),
        ];
    }

    /**
     * Set order settings translations
     *
     * @return void
     */
    private function setOrderSettingsTranslations(): void
    {
        $this->orderSettings = [
            'cancel_order'  => $this->translate('Cancel order'),
        ];
    }

    /**
     * Set headers settings translations
     *
     * @return void
     */
    private function setHeaderSettingsTranslations(): void
    {
        $titleHeader = sprintf(
            '%s <b>%s</b> %s <br/> %s <b>%s</b> %s',
            $this->translate('Accept'),
            $this->translate('payments on the spot'),
            $this->translate('with'),
            $this->translate('the'),
            $this->translate('security'),
            $this->translate('from Mercado Pago')
        );

        $installmentsDescription = sprintf(
            '%s <b>%s</b> %s <b>%s</b> %s',
            $this->translate('Choose'),
            $this->translate('when you want to receive the money'),
            $this->translate('from your sales and if you want to offer'),
            $this->translate('interest-free installments'),
            $this->translate('to your clients.')
        );

        $questionsDescription = sprintf(
            '%s <b>%s</b> %s',
            $this->translate('Review the step-by-step of'),
            $this->translate('how to integrate the Mercado Pago Plugin'),
            $this->translate('on our website for developers.')
        );

        $this->headerSettings = [
            'ssl'                      => $this->translate('SSL'),
            'curl'                     => $this->translate('Curl'),
            'gd_extension'             => $this->translate('GD Extensions'),
            'title_header'             => $titleHeader,
            'title_requirements'       => $this->translate('Technical requirements'),
            'title_installments'       => $this->translate('Collections and installments'),
            'title_questions'          => $this->translate('Questions?'),
            'description_ssl'          => $this->translate('Implementation responsible for transmitting data to Mercado Pago in a secure and encrypted way.'),
            'description_curl'         => $this->translate('It is an extension responsible for making payments via requests from the plugin to Mercado Pago.'),
            'description_gd_extension' => $this->translate('These extensions are responsible for the implementation and operation of Pix in your store.'),
            'description_installments' => $installmentsDescription,
            'description_questions'    => $questionsDescription,
            'button_installments'      => $this->translate('Set deadlines and fees'),
            'button_questions'         => $this->translate('Plugin manual'),
        ];
    }

    /**
     * Set credentials settings translations
     *
     * @return void
     */
    private function setCredentialsSettingsTranslations(): void
    {
        $subtitleCredentials = sprintf(
            '%s <b>%s</b>',
            $this->translate('To enable orders, you must create and activate production credentials in your Mercado Pago Account.'),
            $this->translate('Copy and paste the credentials below.')
        );

        $this->credentialsSettings = [
            'public_key'                => $this->translate('Public Key'),
            'access_token'              => $this->translate('Access Token'),
            'title_credentials'         => $this->translate('1. Integrate your store with Mercado Pago'),
            'title_credentials_prod'    => $this->translate('Production credentials'),
            'title_credentials_test'    => $this->translate('Test credentials'),
            'subtitle_credentials'      => $subtitleCredentials,
            'subtitle_credentials_test' => $this->translate('Enable Mercado Pago checkouts for test purchases in the store.'),
            'subtitle_credentials_prod' => $this->translate('Enable Mercado Pago checkouts to receive real payments in the store.'),
            'placeholder_public_key'    => $this->translate('Paste your Public Key here'),
            'placeholder_access_token'  => $this->translate('Paste your Access Token here'),
            'button_link_credentials'   => $this->translate('Check credentials'),
            'button_credentials'        => $this->translate('Save and continue'),
        ];
    }

    /**
     * Set store settings translations
     *
     * @return void
     */
    private function setStoreSettingsTranslations(): void
    {
        $helperUrl = sprintf(
            '%s %s <a class="mp-settings-blue-text" target="_blank" href="%s">%s</a>.',
            $this->translate('Add the URL to receive payments notifications.'),
            $this->translate('Find out more information in the'),
            '#',
            $this->translate('guides')
        );

        $helperIntegrator = sprintf(
            '%s %s <a class="mp-settings-blue-text" target="_blank" href="%s">%s</a>.',
            $this->translate('If you are a Mercado Pago Certified Partner, make sure to add your integrator_id.'),
            $this->translate('If you do not have the code, please'),
            '#',
            $this->translate('request it now')
        );

        $this->storeSettings = [
            'title_store'                  => $this->translate('2. Customize your business'),
            'title_info_store'             => $this->translate('Your store information'),
            'title_advanced_store'         => $this->translate('Advanced integration options (optional)'),
            'title_debug'                  => $this->translate('Debug and Log Mode'),
            'subtitle_store'               => $this->translate('Fill out the following information to have a better experience and offer more information to your clients.'),
            'subtitle_name_store'          => $this->translate('Name of your store in your client\'s invoice'),
            'subtitle_activities_store'    => $this->translate('Identification in Activities of Mercado Pago'),
            'subtitle_advanced_store'      => $this->translate('For further integration of your store with Mercado Pago (IPN, Certified Partners, Debug Mode)'),
            'subtitle_category_store'      => $this->translate('Store category'),
            'subtitle_url'                 => $this->translate('URL for IPN'),
            'subtitle_integrator'          => $this->translate('Integrator ID'),
            'subtitle_debug'               => $this->translate('We record your store\'s actions in order to provide a better assistance.'),
            'placeholder_name_store'       => $this->translate('Ex: Mary\'s Store'),
            'placeholder_activities_store' => $this->translate('Ex: Mary Store'),
            'placeholder_category_store'   => $this->translate('Select'),
            'placeholder_url'              => $this->translate('Ex: https://examples.com/my-custom-ipn-url'),
            'placeholder_integrator'       => $this->translate('Ex: 14987126498'),
            'accordion_advanced_store'     => $this->translate('Show advanced options'),
            'button_store'                 => $this->translate('Save and continue'),
            'helper_name_store'            => $this->translate('If this field is empty, the purchase will be identified as Mercado Pago.'),
            'helper_activities_store'      => $this->translate('In Activities, you will view this term before the order number'),
            'helper_category_store'        => $this->translate('Select "Other" if you do not find the appropriate category.'),
            'helper_integrator_link'       => $this->translate('request it now.'),
            'helper_url'                   => $helperUrl,
            'helper_integrator'            => $helperIntegrator,
        ];
    }

    /**
     * Set gateway settings translations
     *
     * @return void
     */
    private function setGatewaysSettingsTranslations(): void
    {
        $this->gatewaysSettings = [
            'title_payments'    => $this->translate('3. Set payment methods'),
            'subtitle_payments' => $this->translate('To view more options, please select a payment method below'),
            'settings_payment'  => $this->translate('Settings'),
            'button_payment'    => $this->translate('Continue'),
        ];
    }

    /**
     * Set test mode settings translations
     *
     * @return void
     */
    private function setTestModeSettingsTranslations(): void
    {
        $testCredentialsHelper = sprintf(
            '%s, <a class="mp-settings-blue-text" id="mp-testmode-credentials-link" target="_blank" href="%s">%s</a> %s.',
            $this->translate('To enable test mode'),
            '#',
            $this->translate('copy your test credentials'),
            $this->translate('and paste them above in section 1 of this page')
        );

        $testSubtitleOne = sprintf(
            '1. %s <a class="mp-settings-blue-text" id="mp-testmode-testuser-link" target="_blank" href="%s">%s</a>, %s.',
            $this->translate('Create your'),
            '#',
            $this->translate('test user'),
            $this->translate('(Optional. Can be used in Production Mode and Test Mode, to test payments)')
        );

        $testSubtitleTwo = sprintf(
            '2. <a class="mp-settings-blue-text" id="mp-testmode-cardtest-link" target="_blank" href="%s">%s</a>, %s.',
            '#',
            $this->translate('Use our test cards'),
            $this->translate('never use real cards')
        );

        $testSubtitleThree = sprintf(
            '3. <a class="mp-settings-blue-text" id="mp-testmode-store-link" target="_blank" href="%s">%s</a> %s.',
            '#',
            $this->translate('Visit your store'),
            $this->translate('to test purchases')
        );

        $this->testModeSettings = [
            'title_test_mode'         => $this->translate('4. Test your store before you sell'),
            'title_mode'              => $this->translate('Choose how you want to operate your store:'),
            'title_test'              => $this->translate('Test Mode'),
            'title_prod'              => $this->translate('Sale Mode (Production)'),
            'title_message_prod'      => $this->translate('Mercado Pago payment methods in Production Mode'),
            'title_message_test'      => $this->translate('Mercado Pago payment methods in Test Mode'),
            'title_alert_test'        => $this->translate('Enter test credentials'),
            'subtitle_test_mode'      => $this->translate('Test the experience in Test Mode and then enable the Sale Mode (Production) to sell.'),
            'subtitle_test'           => $this->translate('Mercado Pago Checkouts disabled for real collections.'),
            'subtitle_test_link'      => $this->translate('Test Mode rules.'),
            'subtitle_prod'           => $this->translate('Mercado Pago Checkouts enabled for real collections.'),
            'subtitle_message_prod'   => $this->translate('The clients can make real purchases in your store.'),
            'subtitle_test_one'       => $testSubtitleOne,
            'subtitle_test_two'       => $testSubtitleTwo,
            'subtitle_test_three'     => $testSubtitleThree,
            'test_credentials_helper' => $testCredentialsHelper,
            'badge_mode'              => $this->translate('Store in sale mode (Production)'),
            'badge_test'              => $this->translate('Store under test'),
            'button_test_mode'        => $this->translate('Save changes'),
        ];
    }

    public function setConfigurationTipsTranslations(): void
    {
        $this->configurationTips = [
            'valid_store_tips'         => $this->translate('Store business fields are valid'),
            'invalid_store_tips'       => $this->translate('Store business fields could not be validated'),
            'valid_credentials_tips'   => $this->translate('Credentials fields are valid'),
            'invalid_credentials_tips' => $this->translate('Credentials fields could not be validated'),
        ];
    }

    /**
     * Set validate credentials translations
     *
     * @return void
     */
    public function setValidateCredentialsTranslations(): void
    {
        $this->validateCredentials = [
            'valid_public_key'     => $this->translate('Valid Public Key'),
            'invalid_public_key'   => $this->translate('Invalid Public Key'),
            'valid_access_token'   => $this->translate('Valid Access Token'),
            'invalid_access_token' => $this->translate('Invalid Access Token'),
        ];
    }

    /**
     * Set update credentials translations
     *
     * @return void
     */
    public function setUpdateCredentialsTranslations(): void
    {
        $this->updateCredentials = [
            'credentials_updated'              => $this->translate('Credentials were updated'),
            'no_test_mode_title'               => $this->translate('Your store has exited Test Mode and is making real sales in Production Mode.'),
            'no_test_mode_subtitle'            => $this->translate('To test the store, re-enter both test credentials.'),
            'invalid_credentials_title'        => $this->translate('Invalid credentials'),
            'invalid_credentials_subtitle'     => $this->translate('See our manual to learn '),
            'invalid_credentials_link_message' => $this->translate('how to enter the credentials the right way.'),
        ];
    }

    /**
     * Set update store translations
     *
     * @return void
     */
    public function setUpdateStoreTranslations(): void
    {
        $this->updateStore = [
            'valid_configuration' => $this->translate('Store information is valid'),
        ];
    }
}
