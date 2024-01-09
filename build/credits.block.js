/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/blocks/credits.block.js":
/*!********************************************************!*\
  !*** ./assets/js/blocks/credits.block.js + 10 modules ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: external \"React\"\nconst external_React_namespaceObject = window[\"React\"];\n;// CONCATENATED MODULE: external [\"wp\",\"element\"]\nconst external_wp_element_namespaceObject = window[\"wp\"][\"element\"];\n;// CONCATENATED MODULE: external [\"wc\",\"wcBlocksRegistry\"]\nconst external_wc_wcBlocksRegistry_namespaceObject = window[\"wc\"][\"wcBlocksRegistry\"];\n;// CONCATENATED MODULE: external [\"wp\",\"htmlEntities\"]\nconst external_wp_htmlEntities_namespaceObject = window[\"wp\"][\"htmlEntities\"];\n;// CONCATENATED MODULE: external [\"wc\",\"wcSettings\"]\nconst external_wc_wcSettings_namespaceObject = window[\"wc\"][\"wcSettings\"];\n;// CONCATENATED MODULE: ./assets/js/blocks/helpers/cart-update.helper.js\nconst namespace = 'mercadopago_blocks_update_cart';\nconst addDiscountAndCommission = (callback, paymentMethodName) => {\n  callback({\n    namespace,\n    data: {\n      action: 'add',\n      gateway: paymentMethodName\n    }\n  });\n};\nconst removeDiscountAndCommission = (callback, paymentMethodName) => {\n  callback({\n    namespace,\n    data: {\n      action: 'remove',\n      gateway: paymentMethodName\n    }\n  });\n};\n\n;// CONCATENATED MODULE: ./assets/js/blocks/components/TestMode.js\n\nconst TestMode = ({\n  title,\n  description,\n  linkText,\n  linkSrc\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: \"mp-checkout-pro-test-mode\"\n}, (0,external_React_namespaceObject.createElement)(\"test-mode\", {\n  title: title,\n  description: description,\n  \"link-text\": linkText,\n  \"link-src\": linkSrc\n}));\n/* harmony default export */ const components_TestMode = (TestMode);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/ChoRedirectV2.js\n\nconst ChoRedirectV2 = ({\n  text,\n  src,\n  alt\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: \"mp-checkout-pro-redirect\"\n}, (0,external_React_namespaceObject.createElement)(\"checkout-redirect-v2\", {\n  text: text,\n  src: src,\n  alt: alt\n}));\n/* harmony default export */ const components_ChoRedirectV2 = (ChoRedirectV2);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/CheckoutBenefits.js\n\nconst CheckoutBenefits = ({\n  title,\n  items,\n  titleAlign = 'center',\n  listMode = 'image'\n}) => (0,external_React_namespaceObject.createElement)(\"checkout-benefits\", {\n  title: title,\n  \"title-align\": titleAlign,\n  items: items,\n  \"list-mode\": listMode\n});\n/* harmony default export */ const components_CheckoutBenefits = (CheckoutBenefits);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/TermsAndConditions.js\n\nconst TermsAndConditions = ({\n  description,\n  linkText,\n  linkSrc,\n  checkoutClass = 'pro'\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: `mp-checkout-${checkoutClass}-terms-and-conditions`\n}, (0,external_React_namespaceObject.createElement)(\"terms-and-conditions\", {\n  description: description,\n  \"link-text\": linkText,\n  \"link-src\": linkSrc\n}));\n/* harmony default export */ const components_TermsAndConditions = (TermsAndConditions);\n;// CONCATENATED MODULE: ./assets/js/blocks/credits.block.js\nvar _settings$supports;\n\n/* globals wc_mercadopago_credits_blocks_params */\n\n\n\n\n\n\n\n\n\n\nconst targetName = \"mp_checkout_blocks_credit\";\nconst paymentMethodName = 'woo-mercado-pago-credits';\nconst settings = (0,external_wc_wcSettings_namespaceObject.getSetting)(`woo-mercado-pago-credits_data`, {});\nconst defaultLabel = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(settings.title) || 'Checkout Creditss';\nconst updateCart = props => {\n  const {\n    extensionCartUpdate\n  } = wc.blocksCheckout;\n  const {\n    eventRegistration,\n    emitResponse\n  } = props;\n  const {\n    onPaymentSetup,\n    onCheckoutSuccess,\n    onCheckoutFail\n  } = eventRegistration;\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    addDiscountAndCommission(extensionCartUpdate, paymentMethodName);\n    const unsubscribe = onPaymentSetup(() => {\n      return {\n        type: emitResponse.responseTypes.SUCCESS\n      };\n    });\n    return () => {\n      removeDiscountAndCommission(extensionCartUpdate, paymentMethodName);\n      return unsubscribe();\n    };\n  }, [onPaymentSetup]);\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    onCheckoutSuccess(async checkoutResponse => {\n      const paymentDetails = checkoutResponse.processingResponse.paymentDetails;\n      sendMetric(\"MP_CREDITS_BLOCKS_SUCCESS\", paymentDetails, targetName);\n      return {\n        type: emitResponse.responseTypes.SUCCESS\n      };\n    });\n  }, [onCheckoutSuccess]);\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    const unsubscribe = onCheckoutFail(checkoutResponse => {\n      const paymentDetails = checkoutResponse.processingResponse.paymentDetails;\n      sendMetric(\"MP_CREDITS_BLOCKS_ERROR\", paymentDetails.message, targetName);\n      return {\n        type: emitResponse.responseTypes.FAIL,\n        message: paymentDetails.message,\n        messageContext: emitResponse.noticeContexts.PAYMENTS\n      };\n    });\n    return () => unsubscribe();\n  }, [onCheckoutFail]);\n};\nconst Label = props => {\n  const {\n    PaymentMethodLabel\n  } = props.components;\n  const feeTitle = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(settings?.params?.fee_title || '');\n  const text = `${defaultLabel} ${feeTitle}`;\n  return (0,external_React_namespaceObject.createElement)(PaymentMethodLabel, {\n    text: text\n  });\n};\nconst Content = props => {\n  updateCart(props);\n  const {\n    test_mode_title,\n    test_mode_description,\n    test_mode_link_text,\n    test_mode_link_src,\n    checkout_benefits_title,\n    checkout_benefits_items,\n    checkout_redirect_text,\n    checkout_redirect_src,\n    checkout_redirect_alt,\n    terms_and_conditions_description,\n    terms_and_conditions_link_text,\n    terms_and_conditions_link_src,\n    test_mode\n  } = settings.params;\n  return (0,external_React_namespaceObject.createElement)(\"div\", {\n    className: \"mp-checkout-container\"\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    className: \"mp-checkout-pro-container\"\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    className: \"mp-checkout-pro-content\"\n  }, test_mode ? (0,external_React_namespaceObject.createElement)(components_TestMode, {\n    title: test_mode_title,\n    description: test_mode_description,\n    linkText: test_mode_link_text,\n    linkSrc: test_mode_link_src\n  }) : null, (0,external_React_namespaceObject.createElement)(components_CheckoutBenefits, {\n    title: checkout_benefits_title,\n    items: checkout_benefits_items,\n    titleAlign: \"left\",\n    listMode: \"count\"\n  }), (0,external_React_namespaceObject.createElement)(components_ChoRedirectV2, {\n    text: checkout_redirect_text,\n    src: checkout_redirect_src,\n    alt: checkout_redirect_alt\n  }))), (0,external_React_namespaceObject.createElement)(components_TermsAndConditions, {\n    description: terms_and_conditions_description,\n    linkText: terms_and_conditions_link_text,\n    linkSrc: terms_and_conditions_link_src\n  }));\n};\nconst mercadopagoPaymentMethod = {\n  name: paymentMethodName,\n  label: (0,external_React_namespaceObject.createElement)(Label, null),\n  content: (0,external_React_namespaceObject.createElement)(Content, null),\n  edit: (0,external_React_namespaceObject.createElement)(Content, null),\n  canMakePayment: () => true,\n  ariaLabel: defaultLabel,\n  supports: {\n    features: (_settings$supports = settings?.supports) !== null && _settings$supports !== void 0 ? _settings$supports : []\n  }\n};\n(0,external_wc_wcBlocksRegistry_namespaceObject.registerPaymentMethod)(mercadopagoPaymentMethod);\n\n//# sourceURL=webpack://woocommerce-mercadopago/./assets/js/blocks/credits.block.js_+_10_modules?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/blocks/credits.block.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;