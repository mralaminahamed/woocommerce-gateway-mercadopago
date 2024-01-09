/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/blocks/custom.block.js":
/*!*******************************************************!*\
  !*** ./assets/js/blocks/custom.block.js + 12 modules ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: external \"React\"\nconst external_React_namespaceObject = window[\"React\"];\n;// CONCATENATED MODULE: external [\"wp\",\"element\"]\nconst external_wp_element_namespaceObject = window[\"wp\"][\"element\"];\n;// CONCATENATED MODULE: external [\"wc\",\"wcBlocksRegistry\"]\nconst external_wc_wcBlocksRegistry_namespaceObject = window[\"wc\"][\"wcBlocksRegistry\"];\n;// CONCATENATED MODULE: external [\"wp\",\"htmlEntities\"]\nconst external_wp_htmlEntities_namespaceObject = window[\"wp\"][\"htmlEntities\"];\n;// CONCATENATED MODULE: external [\"wc\",\"wcSettings\"]\nconst external_wc_wcSettings_namespaceObject = window[\"wc\"][\"wcSettings\"];\n;// CONCATENATED MODULE: ./assets/js/blocks/helpers/cart-update.helper.js\nconst namespace = 'mercadopago_blocks_update_cart';\nconst addDiscountAndCommission = (callback, paymentMethodName) => {\n  callback({\n    namespace,\n    data: {\n      action: 'add',\n      gateway: paymentMethodName\n    }\n  });\n};\nconst removeDiscountAndCommission = (callback, paymentMethodName) => {\n  callback({\n    namespace,\n    data: {\n      action: 'remove',\n      gateway: paymentMethodName\n    }\n  });\n};\n\n;// CONCATENATED MODULE: ./assets/js/blocks/components/TestMode.js\n\nconst TestMode = ({\n  title,\n  description,\n  linkText,\n  linkSrc\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: \"mp-checkout-pro-test-mode\"\n}, (0,external_React_namespaceObject.createElement)(\"test-mode\", {\n  title: title,\n  description: description,\n  \"link-text\": linkText,\n  \"link-src\": linkSrc\n}));\n/* harmony default export */ const components_TestMode = (TestMode);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/InputLabel.js\n\nconst InputLabel = ({\n  isOptinal,\n  message,\n  forId\n}) => (0,external_React_namespaceObject.createElement)(\"input-label\", {\n  isOptinal: isOptinal,\n  message: message,\n  for: forId\n});\n/* harmony default export */ const components_InputLabel = (InputLabel);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/InputHelper.js\n\nconst InputHelper = ({\n  isVisible,\n  message,\n  inputId,\n  id,\n  dataMain\n}) => (0,external_React_namespaceObject.createElement)(\"input-helper\", {\n  isVisible: isVisible,\n  message: message,\n  \"input-id\": inputId,\n  id: id,\n  \"data-main\": dataMain\n});\n/* harmony default export */ const components_InputHelper = (InputHelper);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/InputDocument.js\n\nconst InputDocument = ({\n  labelMessage,\n  helperMessage,\n  inputName,\n  hiddenId,\n  inputDataCheckout,\n  selectId,\n  selectName,\n  selectDataCheckout,\n  flagError,\n  documents,\n  validate\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: \"mp-checkout-ticket-input-document\"\n}, (0,external_React_namespaceObject.createElement)(\"input-document\", {\n  \"label-message\": labelMessage,\n  \"helper-message\": helperMessage,\n  \"input-name\": inputName,\n  \"hidden-id\": hiddenId,\n  \"input-data-checkout\": inputDataCheckout,\n  \"select-id\": selectId,\n  \"select-name\": selectName,\n  \"select-data-checkout\": selectDataCheckout,\n  \"flag-error\": flagError,\n  documents: documents,\n  validate: validate\n}));\n/* harmony default export */ const components_InputDocument = (InputDocument);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/PaymentMethods.js\n\nconst PaymentMethods = ({\n  methods\n}) => (0,external_React_namespaceObject.createElement)(\"payment-methods\", {\n  methods: methods\n});\n/* harmony default export */ const components_PaymentMethods = (PaymentMethods);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/TermsAndConditions.js\n\nconst TermsAndConditions = ({\n  description,\n  linkText,\n  linkSrc,\n  checkoutClass = 'pro'\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: `mp-checkout-${checkoutClass}-terms-and-conditions`\n}, (0,external_React_namespaceObject.createElement)(\"terms-and-conditions\", {\n  description: description,\n  \"link-text\": linkText,\n  \"link-src\": linkSrc\n}));\n/* harmony default export */ const components_TermsAndConditions = (TermsAndConditions);\n// EXTERNAL MODULE: ./assets/js/clients/metrics.js\nvar metrics = __webpack_require__(\"./assets/js/clients/metrics.js\");\nvar metrics_default = /*#__PURE__*/__webpack_require__.n(metrics);\n;// CONCATENATED MODULE: ./assets/js/blocks/custom.block.js\nvar _settings$supports;\n\n/* globals wc_mercadopago_custom_blocks_params */\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst targetName = \"mp_checkout_blocks_custom\";\nconst paymentMethodName = 'woo-mercado-pago-custom';\nconst settings = (0,external_wc_wcSettings_namespaceObject.getSetting)(`woo-mercado-pago-custom_data`, {});\nconst defaultLabel = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(settings.title) || 'Checkout Custom';\nconst updateCart = props => {\n  const {\n    extensionCartUpdate\n  } = wc.blocksCheckout;\n  const {\n    eventRegistration,\n    emitResponse\n  } = props;\n  const {\n    onPaymentSetup\n  } = eventRegistration;\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    addDiscountAndCommission(extensionCartUpdate, paymentMethodName);\n    const unsubscribe = onPaymentSetup(() => {\n      return {\n        type: emitResponse.responseTypes.SUCCESS\n      };\n    });\n    return () => {\n      removeDiscountAndCommission(extensionCartUpdate, paymentMethodName);\n      return unsubscribe();\n    };\n  }, [onPaymentSetup]);\n};\nconst Label = props => {\n  const {\n    PaymentMethodLabel\n  } = props.components;\n  const feeTitle = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(settings?.params?.fee_title || '');\n  const text = `${defaultLabel} ${feeTitle}`;\n  return (0,external_React_namespaceObject.createElement)(PaymentMethodLabel, {\n    text: text\n  });\n};\nconst Content = props => {\n  updateCart(props);\n  const {\n    test_mode,\n    test_mode_title,\n    test_mode_description,\n    test_mode_link_text,\n    test_mode_link_src,\n    wallet_button,\n    wallet_button_image,\n    wallet_button_title,\n    wallet_button_description,\n    wallet_button_button_text,\n    available_payments_title_icon,\n    available_payments_title,\n    available_payments_image,\n    payment_methods_items,\n    payment_methods_promotion_link,\n    payment_methods_promotion_text,\n    site_id,\n    card_form_title,\n    card_number_input_label,\n    card_number_input_helper,\n    card_holder_name_input_label,\n    card_holder_name_input_helper,\n    card_expiration_input_label,\n    card_expiration_input_helper,\n    card_security_code_input_label,\n    card_security_code_input_helper,\n    card_document_input_label,\n    card_document_input_helper,\n    card_installments_title,\n    card_issuer_input_label,\n    card_installments_input_helper,\n    terms_and_conditions_description,\n    terms_and_conditions_link_text,\n    terms_and_conditions_link_src,\n    amount,\n    currency_ratio\n  } = settings.params;\n  const ref = (0,external_wp_element_namespaceObject.useRef)(null);\n  const [checkoutType, setCheckoutType] = (0,external_wp_element_namespaceObject.useState)('custom');\n  const {\n    eventRegistration,\n    emitResponse,\n    onSubmit\n  } = props;\n  const {\n    onPaymentSetup,\n    onCheckoutSuccess,\n    onCheckoutFail\n  } = eventRegistration;\n  window.mpFormId = 'blocks_checkout_form';\n  window.mpCheckoutForm = document.querySelector('.wc-block-components-form.wc-block-checkout__form');\n  jQuery(window.mpCheckoutForm).prop('id', mpFormId);\n  const submitWalletButton = event => {\n    event.preventDefault();\n    setCheckoutType('wallet_button');\n    onSubmit();\n  };\n  const collapsibleEvent = () => {\n    const availablePayment = document.getElementsByClassName('mp-checkout-custom-available-payments')[0];\n    const collapsible = availablePayment.getElementsByClassName('mp-checkout-custom-available-payments-header')[0];\n    const icon = collapsible.getElementsByClassName('mp-checkout-custom-available-payments-collapsible')[0];\n    const content = availablePayment.getElementsByClassName('mp-checkout-custom-available-payments-content')[0];\n    if (content.style.maxHeight) {\n      icon.src = settings.params.available_payments_chevron_down;\n      content.style.maxHeight = null;\n      content.style.padding = '0px';\n    } else {\n      let hg = content.scrollHeight + 15 + 'px';\n      icon.src = settings.params.available_payments_chevron_up;\n      content.style.setProperty('max-height', hg, 'important');\n      content.style.setProperty('padding', '24px 0px 0px', 'important');\n    }\n  };\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    if (cardFormMounted) {\n      cardForm.unmount();\n    }\n    initCardForm();\n    const unsubscribe = onPaymentSetup(async () => {\n      if (document.querySelector('#mp_checkout_type').value !== 'wallet_button') {\n        try {\n          if (CheckoutPage.validateInputsCreateToken()) {\n            const cardToken = await cardForm.createCardToken();\n            document.querySelector('#cardTokenId').value = cardToken.token;\n          } else {\n            return {\n              type: emitResponse.responseTypes.ERROR\n            };\n          }\n        } catch (error) {\n          console.warn('Token creation error: ', error);\n        }\n      }\n      const checkoutInputs = ref.current;\n      const paymentMethodData = {};\n      checkoutInputs.childNodes.forEach(input => {\n        if (input.tagName === 'INPUT' && input.name) {\n          paymentMethodData[input.name] = input.value;\n        }\n      });\n\n      // asserting that next submit will be \"custom\", unless the submitWalletButton function is fired\n      setCheckoutType('custom');\n      return {\n        type: emitResponse.responseTypes.SUCCESS,\n        meta: {\n          paymentMethodData\n        }\n      };\n    });\n    return () => unsubscribe();\n  }, [onPaymentSetup, emitResponse.responseTypes.ERROR, emitResponse.responseTypes.SUCCESS]);\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    const handle3ds = onCheckoutSuccess(async checkoutResponse => {\n      const paymentDetails = checkoutResponse.processingResponse.paymentDetails;\n      if (paymentDetails.three_ds_flow) {\n        const threeDsPromise = new Promise((resolve, reject) => {\n          window.addEventListener('completed_3ds', e => {\n            if (e.detail.error) {\n              console.log('rejecting with ' + e.detail.error);\n              reject(e.detail.error);\n            }\n            resolve();\n          });\n        });\n        load3DSFlow(paymentDetails.last_four_digits);\n\n        // await for completed_3ds response\n        return await threeDsPromise.then(() => {\n          return {\n            type: emitResponse.responseTypes.SUCCESS\n          };\n        }).catch(error => {\n          return {\n            type: emitResponse.responseTypes.FAIL,\n            message: error\n          };\n        });\n      }\n      metrics_default()(\"MP_CUSTOM_BLOCKS_SUCCESS\", \"Payment success\", targetName);\n      return {\n        type: emitResponse.responseTypes.SUCCESS\n      };\n    });\n    return () => handle3ds();\n  }, [onCheckoutSuccess]);\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    const unsubscribe = onCheckoutFail(checkoutResponse => {\n      const paymentDetails = checkoutResponse.processingResponse.paymentDetails;\n      metrics_default()(\"MP_CUSTOM_BLOCKS_ERROR\", paymentDetails.message, targetName);\n      return {\n        type: emitResponse.responseTypes.FAIL,\n        message: paymentDetails.message,\n        messageContext: emitResponse.noticeContexts.PAYMENTS\n      };\n    });\n    return () => unsubscribe();\n  }, [onCheckoutFail]);\n  return (0,external_React_namespaceObject.createElement)(\"div\", null, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-load'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'spinner-card-form'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-container'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-container'\n  }, test_mode ? (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-pro-test-mode'\n  }, (0,external_React_namespaceObject.createElement)(components_TestMode, {\n    title: test_mode_title,\n    description: test_mode_description,\n    linkText: test_mode_link_text,\n    linkSrc: test_mode_link_src\n  })) : null, wallet_button === 'yes' ? (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-wallet-button-container'\n  }, (0,external_React_namespaceObject.createElement)(\"img\", {\n    src: wallet_button_image\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-wallet-button-title'\n  }, (0,external_React_namespaceObject.createElement)(\"span\", null, wallet_button_title)), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-wallet-button-description'\n  }, wallet_button_description), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-wallet-button-button'\n  }, (0,external_React_namespaceObject.createElement)(\"button\", {\n    id: 'mp-wallet-button',\n    type: 'button',\n    onClick: submitWalletButton\n  }, wallet_button_button_text))) : null, (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-custom-checkout-form-container'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-available-payments'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-available-payments-header',\n    onClick: collapsibleEvent\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-available-payments-title'\n  }, (0,external_React_namespaceObject.createElement)(\"img\", {\n    src: available_payments_title_icon,\n    class: 'mp-icon'\n  }), (0,external_React_namespaceObject.createElement)(\"p\", {\n    class: 'mp-checkout-custom-available-payments-text'\n  }, available_payments_title)), (0,external_React_namespaceObject.createElement)(\"img\", {\n    src: available_payments_image,\n    class: 'mp-checkout-custom-available-payments-collapsible'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-available-payments-content'\n  }, (0,external_React_namespaceObject.createElement)(components_PaymentMethods, {\n    methods: payment_methods_items\n  }), site_id === 'MLA' ? (0,external_React_namespaceObject.createElement)(external_React_namespaceObject.Fragment, null, (0,external_React_namespaceObject.createElement)(\"span\", {\n    id: 'mp_promotion_link'\n  }, \" | \"), (0,external_React_namespaceObject.createElement)(\"a\", {\n    href: payment_methods_promotion_link,\n    id: 'mp_checkout_link',\n    class: 'mp-checkout-link mp-pl-10',\n    target: '_blank'\n  }, payment_methods_promotion_text)) : null, (0,external_React_namespaceObject.createElement)(\"hr\", null))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-form'\n  }, (0,external_React_namespaceObject.createElement)(\"p\", {\n    class: 'mp-checkout-custom-card-form-title'\n  }, card_form_title), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-row'\n  }, (0,external_React_namespaceObject.createElement)(components_InputLabel, {\n    isOptinal: false,\n    message: card_number_input_label,\n    forId: 'mp-card-number'\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-input',\n    id: 'form-checkout__cardNumber-container'\n  }), (0,external_React_namespaceObject.createElement)(components_InputHelper, {\n    isVisible: false,\n    message: card_number_input_helper,\n    inputId: 'mp-card-number-helper'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-row',\n    id: 'mp-card-holder-div'\n  }, (0,external_React_namespaceObject.createElement)(components_InputLabel, {\n    message: card_holder_name_input_label,\n    isOptinal: false\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    class: 'mp-checkout-custom-card-input mp-card-holder-name',\n    placeholder: 'Ex.: María López',\n    id: 'form-checkout__cardholderName',\n    name: 'mp-card-holder-name',\n    \"data-checkout\": 'cardholderName'\n  }), (0,external_React_namespaceObject.createElement)(components_InputHelper, {\n    isVisible: false,\n    message: card_holder_name_input_helper,\n    inputId: 'mp-card-holder-name-helper',\n    dataMain: 'mp-card-holder-name'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-row mp-checkout-custom-dual-column-row'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-column'\n  }, (0,external_React_namespaceObject.createElement)(components_InputLabel, {\n    message: card_expiration_input_label,\n    isOptinal: false\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'form-checkout__expirationDate-container',\n    class: 'mp-checkout-custom-card-input mp-checkout-custom-left-card-input'\n  }), (0,external_React_namespaceObject.createElement)(components_InputHelper, {\n    isVisible: false,\n    message: card_expiration_input_helper,\n    inputId: 'mp-expiration-date-helper'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-column'\n  }, (0,external_React_namespaceObject.createElement)(components_InputLabel, {\n    message: card_security_code_input_label,\n    isOptinal: false\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'form-checkout__securityCode-container',\n    class: 'mp-checkout-custom-card-input'\n  }), (0,external_React_namespaceObject.createElement)(\"p\", {\n    id: 'mp-security-code-info',\n    class: 'mp-checkout-custom-info-text'\n  }), (0,external_React_namespaceObject.createElement)(components_InputHelper, {\n    isVisible: false,\n    message: card_security_code_input_helper,\n    inputId: 'mp-security-code-helper'\n  }))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-doc-div',\n    class: 'mp-checkout-custom-input-document',\n    style: {\n      display: 'none'\n    }\n  }, (0,external_React_namespaceObject.createElement)(components_InputDocument, {\n    labelMessage: card_document_input_label,\n    helperMessage: card_document_input_helper,\n    inputName: 'identificationNumber',\n    hiddenId: 'form-checkout__identificationNumber',\n    inputDataCheckout: 'docNumber',\n    selectId: 'form-checkout__identificationType',\n    selectName: 'identificationType',\n    selectDataCheckout: 'docType',\n    flagError: 'docNumberError'\n  }))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-installments',\n    class: 'mp-checkout-custom-installments-display-none'\n  }, (0,external_React_namespaceObject.createElement)(\"p\", {\n    class: 'mp-checkout-custom-card-form-title'\n  }, card_installments_title), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-issuers-container',\n    class: 'mp-checkout-custom-issuers-container'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-card-row'\n  }, (0,external_React_namespaceObject.createElement)(components_InputLabel, {\n    isOptinal: false,\n    message: card_issuer_input_label,\n    forId: 'mp-issuer'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-input-select-input'\n  }, (0,external_React_namespaceObject.createElement)(\"select\", {\n    name: 'issuer',\n    id: 'form-checkout__issuer',\n    class: 'mp-input-select-select'\n  }))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-installments-container',\n    class: 'mp-checkout-custom-installments-container'\n  }), (0,external_React_namespaceObject.createElement)(components_InputHelper, {\n    isVisible: false,\n    message: card_installments_input_helper,\n    inputId: 'mp-installments-helper'\n  }), (0,external_React_namespaceObject.createElement)(\"select\", {\n    style: {\n      display: 'none'\n    },\n    \"data-checkout\": 'installments',\n    name: 'installments',\n    id: 'form-checkout__installments',\n    class: 'mp-input-select-select'\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-box-input-tax-cft'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-box-input-tax-tea'\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-tax-tea-text'\n  })), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: 'mp-checkout-custom-tax-cft-text'\n  }))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    class: 'mp-checkout-custom-terms-and-conditions'\n  }, (0,external_React_namespaceObject.createElement)(components_TermsAndConditions, {\n    description: terms_and_conditions_description,\n    linkText: terms_and_conditions_link_text,\n    linkSrc: terms_and_conditions_link_src,\n    checkoutClass: 'custom'\n  }))))), (0,external_React_namespaceObject.createElement)(\"div\", {\n    ref: ref,\n    id: 'mercadopago-utilities',\n    style: {\n      display: 'none'\n    }\n  }, (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'cardTokenId',\n    name: 'mercadopago_custom[token]'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'mpCardSessionId',\n    name: 'mercadopago_custom[session_id]'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'cardExpirationYear',\n    \"data-checkout\": 'cardExpirationYear'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'cardExpirationMonth',\n    \"data-checkout\": 'cardExpirationMonth'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'cardInstallments',\n    name: 'mercadopago_custom[installments]'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'paymentMethodId',\n    name: 'mercadopago_custom[payment_method_id]'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'mp-amount',\n    defaultValue: amount,\n    name: 'mercadopago_custom[amount]'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'currency_ratio',\n    defaultValue: currency_ratio,\n    name: 'mercadopago_custom[currency_ratio]'\n  }), (0,external_React_namespaceObject.createElement)(\"input\", {\n    type: 'hidden',\n    id: 'mp_checkout_type',\n    name: 'mercadopago_custom[checkout_type]',\n    value: checkoutType\n  })));\n};\nconst mercadopagoPaymentMethod = {\n  name: paymentMethodName,\n  label: (0,external_React_namespaceObject.createElement)(Label, null),\n  content: (0,external_React_namespaceObject.createElement)(Content, null),\n  edit: (0,external_React_namespaceObject.createElement)(Content, null),\n  canMakePayment: () => true,\n  ariaLabel: defaultLabel,\n  supports: {\n    features: (_settings$supports = settings?.supports) !== null && _settings$supports !== void 0 ? _settings$supports : []\n  }\n};\n(0,external_wc_wcBlocksRegistry_namespaceObject.registerPaymentMethod)(mercadopagoPaymentMethod);\n\n//# sourceURL=webpack://woocommerce-mercadopago/./assets/js/blocks/custom.block.js_+_12_modules?");

/***/ }),

/***/ "./assets/js/clients/metrics.js":
/*!**************************************!*\
  !*** ./assets/js/clients/metrics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function sendMetric(name, message, target) {\n  const url = 'https://api.mercadopago.com/v1/plugins/melidata/errors';\n  const payload = {\n    name,\n    message,\n    target: target,\n    plugin: {\n      version: wc_mercadopago_custom_checkout_params.plugin_version\n    },\n    platform: {\n      name: 'woocommerce',\n      uri: window.location.href,\n      version: wc_mercadopago_custom_checkout_params.platform_version,\n      location: `${wc_mercadopago_custom_checkout_params.location}_${wc_mercadopago_custom_checkout_params.theme}`\n    }\n  };\n  navigator.sendBeacon(url, JSON.stringify(payload));\n}\nexports = {\n  sendMetric: sendMetric\n};\n\n//# sourceURL=webpack://woocommerce-mercadopago/./assets/js/clients/metrics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/blocks/custom.block.js");
/******/ 	
/******/ })()
;