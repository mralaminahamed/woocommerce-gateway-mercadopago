(()=>{"use strict";const e=window.React,t=window.wc.wcBlocksRegistry,a=window.wc.wcSettings,c=window.wp.element,n=window.wp.htmlEntities,o="mercadopago_blocks_update_cart";const m=({labelMessage:t,helperMessage:a,inputName:c,hiddenId:n,inputDataCheckout:o,selectId:m,selectName:s,selectDataCheckout:i,flagError:r,documents:l,validate:d})=>(0,e.createElement)("div",{className:"mp-checkout-ticket-input-document"},(0,e.createElement)("input-document",{"label-message":t,"helper-message":a,"input-name":c,"hidden-id":n,"input-data-checkout":o,"select-id":m,"select-name":s,"select-data-checkout":i,"flag-error":r,documents:l,validate:d})),s=({isVisible:t,message:a,inputId:c,id:n,dataMain:o})=>(0,e.createElement)("input-helper",{isVisible:t,message:a,"input-id":c,id:n,"data-main":o}),i=({isOptinal:t,message:a,forId:c})=>(0,e.createElement)("input-label",{isOptinal:t,message:a,for:c}),r=({methods:t})=>(0,e.createElement)("payment-methods",{methods:t}),l=({description:t,linkText:a,linkSrc:c,checkoutClass:n="pro"})=>(0,e.createElement)("div",{className:`mp-checkout-${n}-terms-and-conditions`},(0,e.createElement)("terms-and-conditions",{description:t,"link-text":a,"link-src":c})),d=({title:t,description:a,linkText:c,linkSrc:n})=>(0,e.createElement)("div",{className:"mp-checkout-pro-test-mode"},(0,e.createElement)("test-mode",{title:t,description:a,"link-text":c,"link-src":n})),p=(e,t,a)=>{const c={name:e,message:t,target:a,plugin:{version:wc_mercadopago_custom_checkout_params.plugin_version},platform:{name:"woocommerce",uri:window.location.href,version:wc_mercadopago_custom_checkout_params.platform_version,location:`${wc_mercadopago_custom_checkout_params.location}_${wc_mercadopago_custom_checkout_params.theme}`}};navigator.sendBeacon("https://api.mercadopago.com/v1/plugins/melidata/errors",JSON.stringify(c))};var u;const _="mp_checkout_blocks",h="woo-mercado-pago-custom",k=(0,a.getSetting)("woo-mercado-pago-custom_data",{}),E=(0,n.decodeEntities)(k.title)||"Checkout Custom",y=t=>{(e=>{const{extensionCartUpdate:t}=wc.blocksCheckout,{eventRegistration:a,emitResponse:n}=e,{onPaymentSetup:m}=a;(0,c.useEffect)((()=>{((e,t)=>{e({namespace:o,data:{action:"add",gateway:t}})})(t,h);const e=m((()=>({type:n.responseTypes.SUCCESS})));return()=>(((e,t)=>{e({namespace:o,data:{action:"remove",gateway:t}})})(t,h),e())}),[m])})(t);const{test_mode:a,test_mode_title:n,test_mode_description:u,test_mode_link_text:E,test_mode_link_src:y,wallet_button:g,wallet_button_image:v,wallet_button_title:b,wallet_button_description:f,wallet_button_button_text:w,available_payments_title_icon:N,available_payments_title:C,available_payments_image:x,payment_methods_items:S,payment_methods_promotion_link:T,payment_methods_promotion_text:I,site_id:M,card_form_title:R,card_number_input_label:F,card_number_input_helper:O,card_holder_name_input_label:P,card_holder_name_input_helper:U,card_expiration_input_label:D,card_expiration_input_helper:L,card_security_code_input_label:V,card_security_code_input_helper:B,card_document_input_label:$,card_document_input_helper:q,card_installments_title:A,card_issuer_input_label:Y,card_installments_input_helper:j,terms_and_conditions_description:H,terms_and_conditions_link_text:K,terms_and_conditions_link_src:z,amount:J,currency_ratio:Q}=k.params,G=(0,c.useRef)(null),[W,X]=(0,c.useState)("custom"),{eventRegistration:Z,emitResponse:ee,onSubmit:te}=t,{onPaymentSetup:ae,onCheckoutSuccess:ce,onCheckoutFail:ne}=Z;return window.mpFormId="blocks_checkout_form",window.mpCheckoutForm=document.querySelector(".wc-block-components-form.wc-block-checkout__form"),jQuery(window.mpCheckoutForm).prop("id",mpFormId),(0,c.useEffect)((()=>{var e,a;e=t.billing.cartTotal.value,a=t.billing.currency,cardFormMounted&&cardForm.unmount(),initCardForm(function(e,t){if(!Number.isInteger(e)||"object"!=typeof t)throw new Error("Invalid input");const a=(e/Math.pow(10,t.minorUnit)).toFixed(t.minorUnit).split(".");return`${a[0]}.${a[1]}`}(e,a))}),[t.billing.cartTotal.value]),(0,c.useEffect)((()=>{cardFormMounted&&cardForm.unmount(),initCardForm();const e=ae((async()=>{const e=document.querySelector("#form-checkout__cardholderName"),t=document.querySelector("#mp-card-holder-name-helper");var a;if(""==e.value&&("flex",(a=t)&&a.style&&(a.style.display="flex")),"wallet_button"!==document.querySelector("#mp_checkout_type").value)try{if(!CheckoutPage.validateInputsCreateToken())return{type:ee.responseTypes.ERROR};{const e=await cardForm.createCardToken();document.querySelector("#cardTokenId").value=e.token}}catch(e){console.warn("Token creation error: ",e)}const c=G.current,n={};return c.childNodes.forEach((e=>{"INPUT"===e.tagName&&e.name&&(n[e.name]=e.value)})),X("custom"),{type:ee.responseTypes.SUCCESS,meta:{paymentMethodData:n}}}));return()=>e()}),[ae,ee.responseTypes.ERROR,ee.responseTypes.SUCCESS]),(0,c.useEffect)((()=>{const e=ce((async e=>{const t=e.processingResponse,a=e.processingResponse.paymentDetails;if(a.three_ds_flow){const e=new Promise(((e,t)=>{window.addEventListener("completed_3ds",(a=>{a.detail.error&&(console.log("rejecting with "+a.detail.error),t(a.detail.error)),e()}))}));return load3DSFlow(a.last_four_digits),await e.then((()=>({type:ee.responseTypes.SUCCESS}))).catch((e=>({type:ee.responseTypes.FAIL,message:e,messageContext:ee.noticeContexts.PAYMENTS})))}return p("MP_CUSTOM_BLOCKS_SUCCESS",t.paymentStatus,_),{type:ee.responseTypes.SUCCESS}}));return()=>e()}),[ce]),(0,c.useEffect)((()=>{const e=ne((e=>{const t=e.processingResponse;return p("MP_CUSTOM_BLOCKS_ERROR",t.paymentStatus,_),{type:ee.responseTypes.FAIL,messageContext:ee.noticeContexts.PAYMENTS,message:t.paymentDetails.message}}));return()=>e()}),[ne]),(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"mp-checkout-custom-load"},(0,e.createElement)("div",{className:"spinner-card-form"})),(0,e.createElement)("div",{className:"mp-checkout-container"},(0,e.createElement)("div",{className:"mp-checkout-custom-container"},a?(0,e.createElement)("div",{className:"mp-checkout-pro-test-mode"},(0,e.createElement)(d,{title:n,description:u,linkText:E,linkSrc:y})):null,"yes"===g?(0,e.createElement)("div",{className:"mp-wallet-button-container"},(0,e.createElement)("img",{src:v}),(0,e.createElement)("div",{className:"mp-wallet-button-title"},(0,e.createElement)("span",null,b)),(0,e.createElement)("div",{className:"mp-wallet-button-description"},f),(0,e.createElement)("div",{className:"mp-wallet-button-button"},(0,e.createElement)("button",{id:"mp-wallet-button",type:"button",onClick:e=>{e.preventDefault(),X("wallet_button"),te()}},w))):null,(0,e.createElement)("div",{id:"mp-custom-checkout-form-container"},(0,e.createElement)("div",{className:"mp-checkout-custom-available-payments"},(0,e.createElement)("div",{className:"mp-checkout-custom-available-payments-header",onClick:()=>{const e=document.getElementsByClassName("mp-checkout-custom-available-payments")[0],t=e.getElementsByClassName("mp-checkout-custom-available-payments-header")[0].getElementsByClassName("mp-checkout-custom-available-payments-collapsible")[0],a=e.getElementsByClassName("mp-checkout-custom-available-payments-content")[0];if(a.style.maxHeight)t.src=k.params.available_payments_chevron_down,a.style.maxHeight=null,a.style.padding="0px";else{let e=a.scrollHeight+15+"px";t.src=k.params.available_payments_chevron_up,a.style.setProperty("max-height",e,"important"),a.style.setProperty("padding","24px 0px 0px","important")}}},(0,e.createElement)("div",{className:"mp-checkout-custom-available-payments-title"},(0,e.createElement)("img",{src:N,className:"mp-icon"}),(0,e.createElement)("p",{className:"mp-checkout-custom-available-payments-text"},C)),(0,e.createElement)("img",{src:x,className:"mp-checkout-custom-available-payments-collapsible"})),(0,e.createElement)("div",{className:"mp-checkout-custom-available-payments-content"},(0,e.createElement)(r,{methods:S}),"MLA"===M?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{id:"mp_promotion_link"}," | "),(0,e.createElement)("a",{href:T,id:"mp_checkout_link",className:"mp-checkout-link mp-pl-10",target:"_blank"},I)):null,(0,e.createElement)("hr",null))),(0,e.createElement)("div",{className:"mp-checkout-custom-card-form"},(0,e.createElement)("p",{className:"mp-checkout-custom-card-form-title"},R),(0,e.createElement)("div",{className:"mp-checkout-custom-card-row"},(0,e.createElement)(i,{isOptinal:!1,message:F,forId:"mp-card-number"}),(0,e.createElement)("div",{className:"mp-checkout-custom-card-input",id:"form-checkout__cardNumber-container"}),(0,e.createElement)(s,{isVisible:!1,message:O,inputId:"mp-card-number-helper"})),(0,e.createElement)("div",{className:"mp-checkout-custom-card-row",id:"mp-card-holder-div"},(0,e.createElement)(i,{message:P,isOptinal:!1}),(0,e.createElement)("input",{className:"mp-checkout-custom-card-input mp-card-holder-name",placeholder:"Ex.: María López",id:"form-checkout__cardholderName",name:"mp-card-holder-name","data-checkout":"cardholderName"}),(0,e.createElement)(s,{isVisible:!1,message:U,inputId:"mp-card-holder-name-helper",dataMain:"mp-card-holder-name"})),(0,e.createElement)("div",{className:"mp-checkout-custom-card-row mp-checkout-custom-dual-column-row"},(0,e.createElement)("div",{className:"mp-checkout-custom-card-column"},(0,e.createElement)(i,{message:D,isOptinal:!1}),(0,e.createElement)("div",{id:"form-checkout__expirationDate-container",className:"mp-checkout-custom-card-input mp-checkout-custom-left-card-input"}),(0,e.createElement)(s,{isVisible:!1,message:L,inputId:"mp-expiration-date-helper"})),(0,e.createElement)("div",{className:"mp-checkout-custom-card-column"},(0,e.createElement)(i,{message:V,isOptinal:!1}),(0,e.createElement)("div",{id:"form-checkout__securityCode-container",className:"mp-checkout-custom-card-input"}),(0,e.createElement)("p",{id:"mp-security-code-info",className:"mp-checkout-custom-info-text"}),(0,e.createElement)(s,{isVisible:!1,message:B,inputId:"mp-security-code-helper"}))),(0,e.createElement)("div",{id:"mp-doc-div",className:"mp-checkout-custom-input-document",style:{display:"none"}},(0,e.createElement)(m,{labelMessage:$,helperMessage:q,inputName:"identificationNumber",hiddenId:"form-checkout__identificationNumber",inputDataCheckout:"docNumber",selectId:"form-checkout__identificationType",selectName:"identificationType",selectDataCheckout:"docType",flagError:"docNumberError"}))),(0,e.createElement)("div",{id:"mp-checkout-custom-installments",className:"mp-checkout-custom-installments-display-none"},(0,e.createElement)("p",{className:"mp-checkout-custom-card-form-title"},A),(0,e.createElement)("div",{id:"mp-checkout-custom-issuers-container",className:"mp-checkout-custom-issuers-container"},(0,e.createElement)("div",{className:"mp-checkout-custom-card-row"},(0,e.createElement)(i,{isOptinal:!1,message:Y,forId:"mp-issuer"})),(0,e.createElement)("div",{className:"mp-input-select-input"},(0,e.createElement)("select",{name:"issuer",id:"form-checkout__issuer",className:"mp-input-select-select"}))),(0,e.createElement)("div",{id:"mp-checkout-custom-installments-container",className:"mp-checkout-custom-installments-container"}),(0,e.createElement)(s,{isVisible:!1,message:j,inputId:"mp-installments-helper"}),(0,e.createElement)("select",{style:{display:"none"},"data-checkout":"installments",name:"installments",id:"form-checkout__installments",className:"mp-input-select-select"}),(0,e.createElement)("div",{id:"mp-checkout-custom-box-input-tax-cft"},(0,e.createElement)("div",{id:"mp-checkout-custom-box-input-tax-tea"},(0,e.createElement)("div",{id:"mp-checkout-custom-tax-tea-text"})),(0,e.createElement)("div",{id:"mp-checkout-custom-tax-cft-text"}))),(0,e.createElement)("div",{className:"mp-checkout-custom-terms-and-conditions"},(0,e.createElement)(l,{description:H,linkText:K,linkSrc:z,checkoutClass:"custom"}))))),(0,e.createElement)("div",{ref:G,id:"mercadopago-utilities",style:{display:"none"}},(0,e.createElement)("input",{type:"hidden",id:"cardTokenId",name:"mercadopago_custom[token]"}),(0,e.createElement)("input",{type:"hidden",id:"mpCardSessionId",name:"mercadopago_custom[session_id]"}),(0,e.createElement)("input",{type:"hidden",id:"cardExpirationYear","data-checkout":"cardExpirationYear"}),(0,e.createElement)("input",{type:"hidden",id:"cardExpirationMonth","data-checkout":"cardExpirationMonth"}),(0,e.createElement)("input",{type:"hidden",id:"cardInstallments",name:"mercadopago_custom[installments]"}),(0,e.createElement)("input",{type:"hidden",id:"paymentMethodId",name:"mercadopago_custom[payment_method_id]"}),(0,e.createElement)("input",{type:"hidden",id:"mp-amount",defaultValue:J,name:"mercadopago_custom[amount]"}),(0,e.createElement)("input",{type:"hidden",id:"currency_ratio",defaultValue:Q,name:"mercadopago_custom[currency_ratio]"}),(0,e.createElement)("input",{type:"hidden",id:"mp_checkout_type",name:"mercadopago_custom[checkout_type]",value:W})))},g={name:h,label:(0,e.createElement)((t=>{const{PaymentMethodLabel:a}=t.components,c=(0,n.decodeEntities)(k?.params?.fee_title||""),o=`${E} ${c}`;return(0,e.createElement)(a,{text:o})}),null),content:(0,e.createElement)(y,null),edit:(0,e.createElement)(y,null),canMakePayment:()=>!0,ariaLabel:E,supports:{features:null!==(u=k?.supports)&&void 0!==u?u:[]}};(0,t.registerPaymentMethod)(g)})();