import{m as G}from"./VSelect.e14f290d.js";import{m as H,u as J}from"./filter.0f290163.js";import{m as W}from"./VImg.10863b21.js";import{f as Y}from"./forwardRefs.c003b6b8.js";import{u as Z,V as ee,a as L}from"./VList.41b2bbf9.js";import{$ as le,ac as te,k as h,S as P,X as ae,O as D,Q as O,a6 as M,I as ne,p as u,F as N,ag as b,z as ue}from"./index.e5c1e8e1.js";import{V as oe}from"./VMenu.0bbfb376.js";import{V as se}from"./VCheckboxBtn.3db128f5.js";import{V as ie}from"./router.0c602970.js";import{V as re}from"./VChip.4163bfd2.js";import{V as ce}from"./VTextField.8a91b29c.js";function ve(e,v,a){if(Array.isArray(v))throw new Error("Multiple matches is not implemented");return typeof v=="number"&&~v?u(N,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,v)]),u("span",{class:"v-autocomplete__mask"},[e.substr(v,a)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(v+a)])]):e}const Ie=le()({name:"VAutocomplete",props:{search:String,...H({filterKeys:["title"]}),...G(),...W({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:a}=v;const{t:U}=te(),I=h(),d=h(!1),m=h(!0),s=P(e,"menu"),{items:w,transformIn:K,transformOut:$}=Z(e),i=P(e,"search",""),r=P(e,"modelValue",[],l=>K(ae(l)),l=>{var n;const t=$(l);return e.multiple?t:(n=t[0])!=null?n:null}),{filteredItems:A}=J(e,w,D(()=>m.value?void 0:i.value)),k=D(()=>r.value.map(l=>w.value.find(t=>t.value===l.value)||l)),S=D(()=>k.value.map(l=>l.props.value)),F=h();function z(l){r.value=[],e.openOnClear&&(s.value=!0),i.value=""}function x(){e.hideNoData&&!w.value.length||e.readonly||(s.value=!0)}function B(l){if(!e.readonly){if(["Enter","ArrowDown"].includes(l.key)&&(s.value=!0),["Escape"].includes(l.key)&&(s.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(m.value=!0),l.key==="ArrowDown"){var t;(t=F.value)==null||t.focus("next")}else if(l.key==="ArrowUp"){var n;(n=F.value)==null||n.focus("prev")}}}function R(l){i.value=l.target.value}function Q(){d.value&&(m.value=!0)}function X(l){d.value=!0}function j(l){if(l.relatedTarget==null){var t;(t=I.value)==null||t.focus()}}const f=h(!1);function C(l){if(e.multiple){const t=S.value.findIndex(n=>n===l.value);if(t===-1)r.value=[...r.value,l],i.value="";else{const n=[...r.value];n.splice(t,1),r.value=n}}else r.value=[l],f.value=!0,a.selection||(i.value=l.title),s.value=!1,m.value=!0,M(()=>f.value=!1)}return O(d,l=>{var n;if(l){var t;f.value=!0,i.value=e.multiple||!!a.selection?"":String((n=(t=k.value.at(-1))==null?void 0:t.props.title)!=null?n:""),m.value=!0,M(()=>f.value=!1)}else s.value=!1,i.value=""}),O(i,l=>{!d.value||f.value||(l&&(s.value=!0),m.value=!l)}),ne(()=>{const l=!!(e.chips||a.chip);return u(ce,{ref:I,modelValue:i.value,"onUpdate:modelValue":t=>{t==null&&(r.value=[])},validationValue:r.externalValue,dirty:r.value.length>0,onInput:R,class:["v-autocomplete",{"v-autocomplete--active-menu":s.value,"v-autocomplete--chips":!!e.chips,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!a.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":z,"onClick:control":x,"onClick:input":x,onFocus:()=>d.value=!0,onBlur:()=>d.value=!1,onKeydown:B},{...a,default:()=>{var t,n,T;return u(N,null,[u(oe,b({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Q},e.menuProps),{default:()=>[u(ee,{ref:F,selected:S.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:X,onFocusout:j},{default:()=>{var o;return[!A.value.length&&!e.hideNoData&&((o=(t=a["no-data"])==null?void 0:t.call(a))!=null?o:u(L,{title:U(e.noDataText)},null)),(n=a["prepend-item"])==null?void 0:n.call(a),A.value.map((p,g)=>{var E;var V;let{item:c,matches:q}=p;return(E=(V=a.item)==null?void 0:V.call(a,{item:c,index:g,props:b(c.props,{onClick:()=>C(c)})}))!=null?E:u(L,b({key:g},c.props,{onClick:()=>C(c)}),{prepend:y=>{let{isSelected:_}=y;return e.multiple&&!e.hideSelected?u(se,{modelValue:_,ripple:!1},null):void 0},title:()=>{var _;var y;return m.value?c.title:ve(c.title,q.title,(_=(y=i.value)==null?void 0:y.length)!=null?_:0)}})}),(T=a["append-item"])==null?void 0:T.call(a)]}})]}),k.value.map((o,p)=>{function g(c){c.stopPropagation(),c.preventDefault(),C(o)}const V={"onClick:close":g,modelValue:!0,"onUpdate:modelValue":void 0};return u("div",{key:o.value,class:"v-autocomplete__selection"},[l?u(ie,{defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[a.chip?a.chip({item:o,index:p,props:V}):u(re,V,null)]}):a.selection?a.selection({item:o,index:p}):u("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&p<k.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[ue(",")])])])})])}})}),Y({isFocused:d,isPristine:m,menu:s,search:i,filteredItems:A,select:C},I)}});export{Ie as V};
