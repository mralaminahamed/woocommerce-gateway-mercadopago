<?php

namespace MercadoPago\Woocommerce\Configs;

use MercadoPago\Woocommerce\Helpers\Requester;

if (!defined('ABSPATH')) {
    exit;
}

class Seller
{
    /**
     * @const
     */
    private const SITE_ID = '_site_id_v1';

    /**
     * @const
     */
    private const CLIENT_ID = '_mp_client_id';

    /**
     * @const
     */
    private const CREDENTIALS_PUBLIC_KEY_PROD = '_mp_public_key_prod';

    /**
     * @const
     */
    private const CREDENTIALS_PUBLIC_KEY_TEST = '_mp_public_key_test';

    /**
     * @const
     */
    private const CREDENTIALS_ACCESS_TOKEN_PROD = '_mp_access_token_prod';

    /**
     * @const
     */
    private const CREDENTIALS_ACCESS_TOKEN_TEST = '_mp_access_token_test';

    /**
     * @const
     */
    private const APPLICATION_ID = 'mp_application_id';

    /**
     * @const
     */
    private const HOMOLOG_VALIDATE = 'homolog_validate';

    /**
     * @var Requester
     */
    private $requester;

    /**
     * @var Seller
     */
    private static $instance = '';

    /**
     * Credentials constructor
     */
    private function __construct()
    {
        $this->requester = Requester::getInstance();
    }

    /**
     * Get Store Configs instance
     *
     * @return Seller
     */
    public static function getInstance(): Seller
    {
        if ('' === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * @return string
     */
    public function getSiteId(): string
    {
        return get_option(self::SITE_ID, '');
    }

    /**
     * @param string $siteId
     */
    public function setSiteId(string $siteId): void
    {
        update_option(self::SITE_ID, $siteId);
    }

    /**
     * @return string
     */
    public function getClientId(): string
    {
        return get_option(self::CLIENT_ID, '');
    }

    /**
     * @param string $clientId
     */
    public function setClientId(string $clientId): void
    {
        update_option(self::CLIENT_ID, $clientId);
    }

    /**
     * @return string
     */
    public function getCredentialsPublicKeyProd(): string
    {
        return get_option(self::CREDENTIALS_PUBLIC_KEY_PROD, '');
    }

    /**
     * @param string $credentialsPublicKeyProd
     */
    public function setCredentialsPublicKeyProd(string $credentialsPublicKeyProd): void
    {
        update_option(self::CREDENTIALS_PUBLIC_KEY_PROD, $credentialsPublicKeyProd);
    }

    /**
     * @return string
     */
    public function getCredentialsPublicKeyTest(): string
    {
        return get_option(self::CREDENTIALS_PUBLIC_KEY_TEST, '');
    }

    /**
     * @param string $credentialsPublicKeyTest
     */
    public function setCredentialsPublicKeyTest(string $credentialsPublicKeyTest): void
    {
        update_option(self::CREDENTIALS_PUBLIC_KEY_TEST, $credentialsPublicKeyTest);
    }

    /**
     * @return string
     */
    public function getCredentialsAccessTokenProd(): string
    {
        return get_option(self::CREDENTIALS_ACCESS_TOKEN_PROD, '');
    }

    /**
     * @param string $credentialsAccessTokenProd
     */
    public function setCredentialsAccessTokenProd(string $credentialsAccessTokenProd): void
    {
        update_option(self::CREDENTIALS_ACCESS_TOKEN_PROD, $credentialsAccessTokenProd);
    }

    /**
     * @return string
     */
    public function getCredentialsAccessTokenTest(): string
    {
        return get_option(self::CREDENTIALS_ACCESS_TOKEN_TEST, '');
    }

    /**
     * @param string $credentialsAccessTokenTest
     */
    public function setCredentialsAccessTokenTest(string $credentialsAccessTokenTest): void
    {
        update_option(self::CREDENTIALS_ACCESS_TOKEN_TEST, $credentialsAccessTokenTest);
    }

    /**
     * @return string
     */
    public function getApplicationId(): string
    {
        return get_option(self::APPLICATION_ID, '');
    }

    /**
     * @param string $applicationId
     */
    public function setApplicationId(string $applicationId): void
    {
        update_option(self::APPLICATION_ID, $applicationId);
    }

    /**
     * @return string
     */
    public function getHomologValidate(): string
    {
        return get_option(self::HOMOLOG_VALIDATE, '');
    }

    /**
     * @param string $homologValidate
     */
    public function setHomologValidate(string $homologValidate): void
    {
        update_option(self::HOMOLOG_VALIDATE, $homologValidate);
    }

    /**
     * Get seller info with users credentials
     *
     * @param string $accessToken
     *
     * @return array
     */
    public function getSellerInfo(string $accessToken): array
    {
        try {
            $uri     = '/users/me';
            $headers = ['Authorization: Bearer ' . $accessToken];

            $response = $this->requester->get($uri, $headers);

            return [
                'data'   => $response->getData(),
                'status' => $response->getStatus(),
            ];
        } catch (\Exception $e) {
            return [
                'data'   => null,
                'status' => 500,
            ];
        }
    }

    /**
     * @param string $publicKey
     *
     * @return array
     */
    public function validatePublicKey(string $publicKey): array
    {
        return $this->validateCredentials(null, $publicKey);
    }

    /**
     * @param string $accessToken
     *
     * @return array
     */
    public function validateAccessToken(string $accessToken): array
    {
        return $this->validateCredentials($accessToken);
    }

    /**
     * Validate credentials with plugins wrapper credentials API
     *
     * @param string|null $accessToken
     * @param string|null $publicKey
     *
     * @return array
     */
    private function validateCredentials(string $accessToken = null, string $publicKey = null): array
    {
        try {
            $headers = [];
            $uri     = '/plugins-credentials-wrapper/credentials';

            if ($accessToken && !$publicKey) {
                $headers[] = 'Authorization: Bearer ' . $accessToken;
            }

            if ($publicKey && !$accessToken) {
                $uri = $uri . '?public_key=' . $publicKey;
            }

            $response = $this->requester->get($uri, $headers);

            return [
                'data'   => $response->getData(),
                'status' => $response->getStatus(),
            ];
        } catch (\Exception $e) {
            return [
                'data'   => null,
                'status' => 500,
            ];
        }
    }
}
