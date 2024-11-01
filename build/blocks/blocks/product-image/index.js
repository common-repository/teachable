(()=>{"use strict";const e=window.wp.i18n,t=window.wp.blocks,r=window.React,a=window.wp.blockEditor,l=window.wp.data,n=window.wp.element,i=window.wp.components,o=()=>(0,r.createElement)(i.SVG,{width:"29",height:"29",viewBox:"0 0 29 29",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(i.Rect,{width:"29",height:"29",fill:"white"}),(0,r.createElement)(i.Circle,{cx:"14.5",cy:"14.5",r:"14",stroke:"black",fill:"white"}),(0,r.createElement)(i.Path,{d:"M19.9726 11.1289V13.2651H17.8516V11.1289H19.9726ZM19.9726 18.8847V20.9994H17.8516V18.8847H19.9726Z",fill:"black"}),(0,r.createElement)(i.Path,{d:"M12.9683 7V11.1315H15.9261V12.7762H12.9683V17.7105C12.9683 18.7678 13.5439 19.3552 14.5166 19.3552H15.9261V21H14.3578C12.333 21 11.0427 19.786 11.0427 17.7692V12.7762H8.99805V11.1315H11.0427V7H12.9683Z",fill:"black"})),c=({title:e="Teachable Buy Button",description:t="This block is encountering an unexpected error. Please try resolving it by resetting your API Key in the plugin settings."})=>(0,r.createElement)("div",{className:"teachable-error-notice"},(0,r.createElement)(o,null),(0,r.createElement)("h5",{className:"teachable-error-title"},e),(0,r.createElement)("p",{className:"teachable-error-description"},t)),s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"teachable/product-image","title":"Product Image","category":"embed","description":"A teachable product image block.","keywords":["teachable product image"],"version":"1.0.0","textdomain":"teachable","usesContext":["teachableBuyButton/productId"],"ancestor":["teachable/buy-button"],"example":{},"attributes":{"productId":{"type":"string","default":null}},"supports":{"color":{"border":true},"spacing":{"margin":true,"padding":true},"__experimentalBorder":{"radius":true,"color":true,"style":true,"width":true},"align":true},"editorScript":"file:./index.js","render":"file:./render.php"}'),{name:u}=s,d={...s,title:(0,e.__)("Teachable Image","teachable"),description:(0,e.__)("A teachable product image block.","teachable"),icon:"format-image",edit:function(t){const{attributes:o,clientId:s,setAttributes:u}=t,{productId:d}=o,{buyButtonData:m,description_classes:p}=teachable_buy_button||{},b=!1===m?[]:m,g=Array.isArray(b)?b.map((({id:e,name:t})=>({value:e.toString(),label:t.trim()}))):[],h=e=>{const t=b.some((t=>t.id.toString()===e));return!t&&b.length>0?b[0].id.toString():e};(0,n.useEffect)((()=>{u({productId:h(d)})}),[d]);const w=d?b.find((e=>e.id.toString()===h(d))):b.find((e=>e.id.toString()===(g.length>0?g[0].value:null))),[_,f]=(0,n.useState)(w),[y,E]=(0,n.useState)(null),[k,S]=(0,n.useState)(!0);(0,n.useEffect)((()=>{u(k&&d?{productId:d}:{productId:y}),S(!1)}),[k,y,E]);const v=(0,l.useSelect)((e=>{let t=s;for(;t;){const r=e("core/block-editor").getBlockRootClientId(t);if(!r)break;const a=e("core/block-editor").getBlockAttributes(r);if(a&&a.productId)return a.productId;t=r}if(Array.isArray(b)){const e=b.map((({id:e,name:t})=>({value:e.toString(),label:t})));return e.length>0?e[0].value:null}return null}),[s]);(0,n.useEffect)((()=>{f((e=>b.find((e=>e.id.toString()===v)))),E(h(v))}),[v]);const I=(0,a.useBlockProps)({className:`teachable-image ${p}`});return _&&_.image_url&&""!==_.image_url?(0,r.createElement)(n.Fragment,null,(0,r.createElement)(a.InspectorControls,{group:"settings"},(0,r.createElement)(i.PanelBody,{title:(0,e.__)("General","teachable"),initialOpen:!0},(0,r.createElement)("div",null,(0,r.createElement)(i.ComboboxControl,{label:(0,e.__)("Product","teachable"),value:y,options:g,onChange:e=>{y&&e&&e!==y&&(f(b.find((t=>t.id.toString()===e))),E(e))},help:(0,e.__)("Select a course or bundle.","teachable")})))),(0,r.createElement)("div",{...I},(0,r.createElement)("img",{key:_.image_url,src:_.image_url,alt:(0,e.__)("Product image","teachable"),title:(0,e.__)("Product image","teachable")}))):(0,r.createElement)("div",{...I},(0,r.createElement)(c,{title:(0,e.__)("Product Image","teachable"),description:(0,e.__)("Oops! No product image found. Please add one in your Teachable account, then return to WordPress and sync the data on the plugin settings page. After syncing, revisit this step.","teachable")}))},save:function(){return null}};(0,t.registerBlockType)(u,d),(0,t.registerBlockCollection)("teachable",{title:"Teachable"})})();