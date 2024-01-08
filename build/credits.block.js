(()=>{"use strict";const e=window.React,t=window.wp.element,c=window.wc.wcBlocksRegistry,n=window.wp.htmlEntities,i=window.wc.wcSettings,s="mercadopago_blocks_update_cart",o=({title:t,description:c,linkText:n,linkSrc:i})=>(0,e.createElement)("div",{className:"mp-checkout-pro-test-mode"},(0,e.createElement)("test-mode",{title:t,description:c,"link-text":n,"link-src":i})),a=({text:t,src:c,alt:n})=>(0,e.createElement)("div",{className:"mp-checkout-pro-redirect"},(0,e.createElement)("checkout-redirect-v2",{text:t,src:c,alt:n})),r=({title:t,items:c,titleAlign:n="center",listMode:i="image"})=>(0,e.createElement)("checkout-benefits",{title:t,"title-align":n,items:c,"list-mode":i}),l=({description:t,linkText:c,linkSrc:n,checkoutClass:i="pro"})=>(0,e.createElement)("div",{className:`mp-checkout-${i}-terms-and-conditions`},(0,e.createElement)("terms-and-conditions",{description:t,"link-text":c,"link-src":n}));var d;const m="woo-mercado-pago-credits",p=(0,i.getSetting)("woo-mercado-pago-credits_data",{}),_=(0,n.decodeEntities)(p.title)||"Checkout Creditss",k=c=>{(e=>{const{extensionCartUpdate:c}=wc.blocksCheckout,{eventRegistration:n,emitResponse:i}=e,{onPaymentSetup:o}=n;(0,t.useEffect)((()=>{((e,t)=>{e({namespace:s,data:{action:"add",gateway:t}})})(c,m);const e=o((()=>({type:i.responseTypes.SUCCESS})));return()=>(((e,t)=>{e({namespace:s,data:{action:"remove",gateway:t}})})(c,m),e())}),[o])})(c);const{test_mode_title:n,test_mode_description:i,test_mode_link_text:d,test_mode_link_src:_,checkout_benefits_title:k,checkout_benefits_items:u,checkout_redirect_text:E,checkout_redirect_src:w,checkout_redirect_alt:h,terms_and_conditions_description:g,terms_and_conditions_link_text:x,terms_and_conditions_link_src:v,test_mode:S}=p.params;return(0,e.createElement)("div",{className:"mp-checkout-container"},(0,e.createElement)("div",{className:"mp-checkout-pro-container"},(0,e.createElement)("div",{className:"mp-checkout-pro-content"},S?(0,e.createElement)(o,{title:n,description:i,linkText:d,linkSrc:_}):null,(0,e.createElement)(r,{title:k,items:u,titleAlign:"left",listMode:"count"}),(0,e.createElement)(a,{text:E,src:w,alt:h}))),(0,e.createElement)(l,{description:g,linkText:x,linkSrc:v}))},u={name:m,label:(0,e.createElement)((t=>{const{PaymentMethodLabel:c}=t.components,i=(0,n.decodeEntities)(p?.params?.fee_title||""),s=`${_} ${i}`;return(0,e.createElement)(c,{text:s})}),null),content:(0,e.createElement)(k,null),edit:(0,e.createElement)(k,null),canMakePayment:()=>!0,ariaLabel:_,supports:{features:null!==(d=p?.supports)&&void 0!==d?d:[]}};(0,c.registerPaymentMethod)(u)})();