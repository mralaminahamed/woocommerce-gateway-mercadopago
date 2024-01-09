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

/***/ "./assets/js/blocks/ticket.block.js":
/*!*******************************************************!*\
  !*** ./assets/js/blocks/ticket.block.js + 11 modules ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: external \"React\"\nconst external_React_namespaceObject = window[\"React\"];\n;// CONCATENATED MODULE: external [\"wc\",\"wcBlocksRegistry\"]\nconst external_wc_wcBlocksRegistry_namespaceObject = window[\"wc\"][\"wcBlocksRegistry\"];\n;// CONCATENATED MODULE: external [\"wc\",\"wcSettings\"]\nconst external_wc_wcSettings_namespaceObject = window[\"wc\"][\"wcSettings\"];\n;// CONCATENATED MODULE: external [\"wp\",\"element\"]\nconst external_wp_element_namespaceObject = window[\"wp\"][\"element\"];\n;// CONCATENATED MODULE: external [\"wp\",\"htmlEntities\"]\nconst external_wp_htmlEntities_namespaceObject = window[\"wp\"][\"htmlEntities\"];\n;// CONCATENATED MODULE: ./assets/js/blocks/helpers/cart-update.helper.js\nconst namespace = 'mercadopago_blocks_update_cart';\nconst addDiscountAndCommission = (callback, paymentMethodName) => {\n  callback({\n    namespace,\n    data: {\n      action: 'add',\n      gateway: paymentMethodName\n    }\n  });\n};\nconst removeDiscountAndCommission = (callback, paymentMethodName) => {\n  callback({\n    namespace,\n    data: {\n      action: 'remove',\n      gateway: paymentMethodName\n    }\n  });\n};\n\n;// CONCATENATED MODULE: ./assets/js/blocks/components/InputDocument.js\n\nconst InputDocument = ({\n  labelMessage,\n  helperMessage,\n  inputName,\n  hiddenId,\n  inputDataCheckout,\n  selectId,\n  selectName,\n  selectDataCheckout,\n  flagError,\n  documents,\n  validate\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: \"mp-checkout-ticket-input-document\"\n}, (0,external_React_namespaceObject.createElement)(\"input-document\", {\n  \"label-message\": labelMessage,\n  \"helper-message\": helperMessage,\n  \"input-name\": inputName,\n  \"hidden-id\": hiddenId,\n  \"input-data-checkout\": inputDataCheckout,\n  \"select-id\": selectId,\n  \"select-name\": selectName,\n  \"select-data-checkout\": selectDataCheckout,\n  \"flag-error\": flagError,\n  documents: documents,\n  validate: validate\n}));\n/* harmony default export */ const components_InputDocument = (InputDocument);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/InputHelper.js\n\nconst InputHelper = ({\n  isVisible,\n  message,\n  inputId,\n  id,\n  dataMain\n}) => (0,external_React_namespaceObject.createElement)(\"input-helper\", {\n  isVisible: isVisible,\n  message: message,\n  \"input-id\": inputId,\n  id: id,\n  \"data-main\": dataMain\n});\n/* harmony default export */ const components_InputHelper = (InputHelper);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/InputTable.js\n\nconst InputTable = ({\n  name,\n  buttonName,\n  columns\n}) => (0,external_React_namespaceObject.createElement)(\"input-table\", {\n  name: name,\n  \"button-name\": buttonName,\n  columns: columns\n});\n/* harmony default export */ const components_InputTable = (InputTable);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/TermsAndConditions.js\n\nconst TermsAndConditions = ({\n  description,\n  linkText,\n  linkSrc,\n  checkoutClass = 'pro'\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: `mp-checkout-${checkoutClass}-terms-and-conditions`\n}, (0,external_React_namespaceObject.createElement)(\"terms-and-conditions\", {\n  description: description,\n  \"link-text\": linkText,\n  \"link-src\": linkSrc\n}));\n/* harmony default export */ const components_TermsAndConditions = (TermsAndConditions);\n;// CONCATENATED MODULE: ./assets/js/blocks/components/TestMode.js\n\nconst TestMode = ({\n  title,\n  description,\n  linkText,\n  linkSrc\n}) => (0,external_React_namespaceObject.createElement)(\"div\", {\n  className: \"mp-checkout-pro-test-mode\"\n}, (0,external_React_namespaceObject.createElement)(\"test-mode\", {\n  title: title,\n  description: description,\n  \"link-text\": linkText,\n  \"link-src\": linkSrc\n}));\n/* harmony default export */ const components_TestMode = (TestMode);\n// EXTERNAL MODULE: ./assets/js/clients/metrics.js\nvar metrics = __webpack_require__(\"./assets/js/clients/metrics.js\");\nvar metrics_default = /*#__PURE__*/__webpack_require__.n(metrics);\n;// CONCATENATED MODULE: ./assets/js/blocks/ticket.block.js\nvar _settings$supports;\n\n/* globals wc_mercadopago_ticket_blocks_params */\n\n\n\n\n\n\n\n\n\n\n\n\nconst targetName = \"mp_checkout_blocks_ticket\";\nconst paymentMethodName = 'woo-mercado-pago-ticket';\nconst settings = (0,external_wc_wcSettings_namespaceObject.getSetting)(`woo-mercado-pago-ticket_data`, {});\nconst defaultLabel = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(settings.title) || 'Checkout Ticket';\nconst updateCart = props => {\n  const {\n    extensionCartUpdate\n  } = wc.blocksCheckout;\n  const {\n    eventRegistration,\n    emitResponse\n  } = props;\n  const {\n    onPaymentSetup,\n    onCheckoutSuccess,\n    onCheckoutFail\n  } = eventRegistration;\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    addDiscountAndCommission(extensionCartUpdate, paymentMethodName);\n    const unsubscribe = onPaymentSetup(() => {\n      return {\n        type: emitResponse.responseTypes.SUCCESS\n      };\n    });\n    return () => {\n      removeDiscountAndCommission(extensionCartUpdate, paymentMethodName);\n      unsubscribe();\n    };\n  }, [onPaymentSetup]);\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    onCheckoutSuccess(async checkoutResponse => {\n      const paymentDetails = checkoutResponse.processingResponse.paymentDetails;\n      metrics_default()(\"MP_TICKET_BLOCKS_SUCCESS\", paymentDetails, targetName);\n      return {\n        type: emitResponse.responseTypes.SUCCESS\n      };\n    });\n  }, [onCheckoutSuccess]);\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    const unsubscribe = onCheckoutFail(checkoutResponse => {\n      const paymentDetails = checkoutResponse.processingResponse.paymentDetails;\n      metrics_default()(\"MP_TICKET_BLOCKS_ERROR\", paymentDetails.message, targetName);\n      return {\n        type: emitResponse.responseTypes.FAIL,\n        message: paymentDetails.message,\n        messageContext: emitResponse.noticeContexts.PAYMENTS\n      };\n    });\n    return () => unsubscribe();\n  }, [onCheckoutFail]);\n};\nconst Label = props => {\n  const {\n    PaymentMethodLabel\n  } = props.components;\n  const feeTitle = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(settings?.params?.fee_title || '');\n  const text = `${defaultLabel} ${feeTitle}`;\n  return (0,external_React_namespaceObject.createElement)(PaymentMethodLabel, {\n    text: text\n  });\n};\nconst Content = props => {\n  updateCart(props);\n  const {\n    test_mode_title,\n    test_mode_description,\n    test_mode_link_text,\n    test_mode_link_src,\n    input_document_label,\n    input_document_helper,\n    ticket_text_label,\n    input_table_button,\n    input_helper_label,\n    payment_methods,\n    amount,\n    site_id,\n    terms_and_conditions_description,\n    terms_and_conditions_link_text,\n    terms_and_conditions_link_src,\n    test_mode\n  } = settings.params;\n  const ref = (0,external_wp_element_namespaceObject.useRef)(null);\n  const {\n    eventRegistration,\n    emitResponse\n  } = props;\n  const {\n    onPaymentSetup\n  } = eventRegistration;\n  let inputDocumentConfig = {\n    labelMessage: input_document_label,\n    helperMessage: input_document_helper,\n    validate: 'true',\n    selectId: 'docType',\n    flagError: 'mercadopago_ticket[docNumberError]',\n    inputName: 'mercadopago_ticket[docNumber]',\n    selectName: 'mercadopago_ticket[docType]',\n    documents: getDocumentsBySiteId(site_id)\n  };\n  function getDocumentsBySiteId(siteId) {\n    switch (siteId) {\n      case 'MLB':\n        return '[\"CPF\",\"CNPJ\"]';\n      case 'MLU':\n        return '[\"CI\",\"OTRO\"]';\n      default:\n        return null;\n    }\n  }\n  (0,external_wp_element_namespaceObject.useEffect)(() => {\n    const unsubscribe = onPaymentSetup(async () => {\n      const inputDocHelper = document.getElementById('mp-doc-number-helper');\n      const inputPaymentMethod = document.getElementById('mp-payment-method-helper');\n      const paymentMethodData = {\n        'mercadopago_ticket[site_id]': site_id,\n        'mercadopago_ticket[amount]': amount.toString(),\n        'mercadopago_ticket[doc_type]': ref.current.querySelector('#docType')?.value,\n        'mercadopago_ticket[doc_number]': ref.current.querySelector('#form-checkout__identificationNumber-container > input')?.value\n      };\n      const checkedPaymentMethod = payment_methods.find(method => {\n        const selector = `#${method.id}`;\n        const element = ref.current.querySelector(selector);\n        return element && element.checked;\n      });\n      if (checkedPaymentMethod) {\n        paymentMethodData['mercadopago_ticket[payment_method_id]'] = ref.current.querySelector(`#${checkedPaymentMethod.id}`).value;\n        inputPaymentMethod.style.display = 'none';\n      }\n      if (inputDocumentConfig.documents && paymentMethodData['mercadopago_ticket[doc_number]'] === '') {\n        setInputDisplayStyle(inputDocHelper, 'flex');\n      }\n      if (!paymentMethodData['mercadopago_ticket[payment_method_id]']) {\n        setInputDisplayStyle(inputPaymentMethod, 'flex');\n      }\n      const hasErrorInForm = isInputDisplayFlex(inputDocHelper) || isInputDisplayFlex(inputPaymentMethod);\n      function setInputDisplayStyle(inputElement, displayValue) {\n        if (inputElement && inputElement.style) {\n          inputElement.style.display = displayValue;\n        }\n      }\n      function isInputDisplayFlex(inputElement) {\n        return inputElement && inputElement.style.display === 'flex';\n      }\n      return {\n        type: hasErrorInForm ? emitResponse.responseTypes.ERROR : emitResponse.responseTypes.SUCCESS,\n        meta: {\n          paymentMethodData\n        }\n      };\n    });\n    return () => unsubscribe();\n  }, [emitResponse.responseTypes.ERROR, emitResponse.responseTypes.SUCCESS, onPaymentSetup]);\n  return (0,external_React_namespaceObject.createElement)(\"div\", {\n    className: \"mp-checkout-container\"\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    className: \"mp-checkout-ticket-container\"\n  }, (0,external_React_namespaceObject.createElement)(\"div\", {\n    ref: ref,\n    className: \"mp-checkout-ticket-content\"\n  }, test_mode ? (0,external_React_namespaceObject.createElement)(components_TestMode, {\n    title: test_mode_title,\n    description: test_mode_description,\n    \"link-text\": test_mode_link_text,\n    \"link-src\": test_mode_link_src\n  }) : null, inputDocumentConfig.documents ? (0,external_React_namespaceObject.createElement)(components_InputDocument, {\n    ...inputDocumentConfig\n  }) : null, (0,external_React_namespaceObject.createElement)(\"p\", {\n    className: \"mp-checkout-ticket-text\"\n  }, ticket_text_label), (0,external_React_namespaceObject.createElement)(components_InputTable, {\n    name: 'mercadopago_ticket[payment_method_id]',\n    buttonName: input_table_button,\n    columns: JSON.stringify(payment_methods)\n  }), (0,external_React_namespaceObject.createElement)(components_InputHelper, {\n    isVisible: 'false',\n    message: input_helper_label,\n    inputId: 'mp-payment-method-helper',\n    id: 'payment-method-helper'\n  }), (0,external_React_namespaceObject.createElement)(\"div\", {\n    id: \"mp-box-loading\"\n  }))), (0,external_React_namespaceObject.createElement)(components_TermsAndConditions, {\n    description: terms_and_conditions_description,\n    linkText: terms_and_conditions_link_text,\n    linkSrc: terms_and_conditions_link_src,\n    checkoutClass: 'ticket'\n  }));\n};\nconst mercadopagoPaymentMethod = {\n  name: paymentMethodName,\n  label: (0,external_React_namespaceObject.createElement)(Label, null),\n  content: (0,external_React_namespaceObject.createElement)(Content, null),\n  edit: (0,external_React_namespaceObject.createElement)(Content, null),\n  canMakePayment: () => true,\n  ariaLabel: defaultLabel,\n  supports: {\n    features: (_settings$supports = settings?.supports) !== null && _settings$supports !== void 0 ? _settings$supports : []\n  }\n};\n(0,external_wc_wcBlocksRegistry_namespaceObject.registerPaymentMethod)(mercadopagoPaymentMethod);\n\n//# sourceURL=webpack://woocommerce-mercadopago/./assets/js/blocks/ticket.block.js_+_11_modules?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/blocks/ticket.block.js");
/******/ 	
/******/ })()
;