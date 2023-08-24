import{m as te}from"./VSelect.1c93d99b.js";import{m as ae,u as ue}from"./filter.f2cd9070.js";import{m as ne}from"./VImg.bd5b1ee4.js";import{u as oe,t as A,V as ie,a as B}from"./VList.29ca595a.js";import{f as se}from"./forwardRefs.c003b6b8.js";import{$ as re,al as ce,k as x,S as M,O as C,a2 as ve,X as me,Q as P,a6 as U,I as fe,p as o,F as K,ae as E,z as de}from"./index.39cf7653.js";import{V as be}from"./VMenu.8d2b455b.js";import{V as he}from"./VCheckboxBtn.00ee6c99.js";import{V as pe}from"./router.ebc804bf.js";import{V as ke}from"./VChip.c13b5928.js";import{V as Ve}from"./VTextField.bbc6c137.js";function ge(l,d,y){if(Array.isArray(d))throw new Error("Multiple matches is not implemented");return typeof d=="number"&&~d?o(K,null,[o("span",{class:"v-combobox__unmask"},[l.substr(0,d)]),o("span",{class:"v-combobox__mask"},[l.substr(d,y)]),o("span",{class:"v-combobox__unmask"},[l.substr(d+y)])]):l}const Te=re()({name:"VCombobox",props:{delimiters:Array,...ae({filterKeys:["title"]}),...te({hideNoData:!0,returnObject:!0}),...ne({transition:!1})},emits:{"update:modelValue":l=>!0,"update:search":l=>!0,"update:menu":l=>!0},setup(l,d){var N;var y;let{emit:j,slots:s}=d;const{t:z}=ce(),b=x(),h=x(!1),p=x(!0),v=M(l,"menu"),a=x(-1),Q=C(()=>{var e;return(e=b.value)==null?void 0:e.color}),{items:S,transformIn:X,transformOut:q}=oe(l),{textColorClasses:G,textColorStyles:H}=ve(Q),i=M(l,"modelValue",[],e=>X(me(e||[])),e=>{var u;const t=q(e);return l.multiple?t:(u=t[0])!=null?u:null}),V=x(l.multiple?"":(N=(y=i.value[0])==null?void 0:y.title)!=null?N:""),r=C({get:()=>V.value,set:e=>{var t;if(V.value=e,l.multiple||(i.value=[A(l,e)]),e&&l.multiple&&(t=l.delimiters)!=null&&t.length){const u=e.split(new RegExp(`(?:${l.delimiters.join("|")})+`));u.length>1&&(u.forEach(m=>{m=m.trim(),m&&k(A(l,m))}),V.value="")}e||(a.value=-1),h.value&&(v.value=!0),p.value=!e}});P(V,e=>{j("update:search",e)}),P(i,e=>{var u;if(!l.multiple){var t;V.value=(u=(t=e[0])==null?void 0:t.title)!=null?u:""}});const{filteredItems:w}=ue(l,S,C(()=>p.value?void 0:r.value)),g=C(()=>i.value.map(e=>S.value.find(t=>t.value===e.value)||e)),T=C(()=>g.value.map(e=>e.props.value)),R=C(()=>g.value[a.value]),$=x();function J(e){i.value=[],l.openOnClear&&(v.value=!0)}function L(){l.hideNoData&&!S.value.length||l.readonly||(v.value=!0)}function W(e){if(l.readonly)return;const t=b.value.selectionStart,u=T.value.length;if(a.value>-1&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(v.value=!0),["Escape"].includes(e.key)&&(v.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(p.value=!0),e.key==="ArrowDown"){var m;(m=$.value)==null||m.focus("next")}else if(e.key==="ArrowUp"){var n;(n=$.value)==null||n.focus("prev")}if(!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(a.value<0){e.key==="Backspace"&&!r.value&&(a.value=u-1);return}k(R.value),U(()=>!R.value&&(a.value=u-2))}if(e.key==="ArrowLeft"){if(a.value<0&&t>0)return;const c=a.value>-1?a.value-1:u-1;g.value[c]?a.value=c:(a.value=-1,b.value.setSelectionRange(r.value.length,r.value.length))}if(e.key==="ArrowRight"){if(a.value<0)return;const c=a.value+1;g.value[c]?a.value=c:(a.value=-1,b.value.setSelectionRange(0,0))}e.key==="Enter"&&(k(A(l,r.value)),r.value="")}}function Y(){h.value&&(p.value=!0)}function k(e){if(l.multiple){const t=T.value.findIndex(u=>u===e.value);if(t===-1)i.value=[...i.value,e];else{const u=[...i.value];u.splice(t,1),i.value=u}r.value=""}else i.value=[e],V.value=e.title,U(()=>{v.value=!1,p.value=!0})}function Z(e){h.value=!0}function ee(e){if(e.relatedTarget==null){var t;(t=b.value)==null||t.focus()}}return P(w,e=>{!e.length&&l.hideNoData&&(v.value=!1)}),P(h,e=>{if(e)a.value=-1;else{if(v.value=!1,!l.multiple||!r.value)return;i.value=[...i.value,A(l,r.value)],r.value=""}}),fe(()=>{const e=!!(l.chips||s.chip);return o(Ve,{ref:b,modelValue:r.value,"onUpdate:modelValue":[t=>r.value=t,t=>{t==null&&(i.value=[])}],validationValue:i.externalValue,dirty:i.value.length>0,class:["v-combobox",{"v-combobox--active-menu":v.value,"v-combobox--chips":!!l.chips,"v-combobox--selecting-index":a.value>-1,[`v-combobox--${l.multiple?"multiple":"single"}`]:!0}],appendInnerIcon:l.items.length?l.menuIcon:void 0,readonly:l.readonly,"onClick:clear":J,"onClick:control":L,"onClick:input":L,onFocus:()=>h.value=!0,onBlur:()=>h.value=!1,onKeydown:W},{...s,default:()=>{var t,u,m;return o(K,null,[o(be,E({modelValue:v.value,"onUpdate:modelValue":n=>v.value=n,activator:"parent",contentClass:"v-combobox__content",eager:l.eager,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:Y},l.menuProps),{default:()=>[o(ie,{ref:$,selected:T.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onFocusin:Z,onFocusout:ee},{default:()=>{var n;return[!w.value.length&&!l.hideNoData&&((n=(t=s["no-data"])==null?void 0:t.call(s))!=null?n:o(B,{title:z(l.noDataText)},null)),(u=s["prepend-item"])==null?void 0:u.call(s),w.value.map((c,I)=>{var O;var _;let{item:f,matches:le}=c;return(O=(_=s.item)==null?void 0:_.call(s,{item:f,index:I,props:E(f.props,{onClick:()=>k(f)})}))!=null?O:o(B,E({key:I},f.props,{onClick:()=>k(f)}),{prepend:D=>{let{isSelected:F}=D;return l.multiple&&!l.hideSelected?o(he,{modelValue:F,ripple:!1},null):void 0},title:()=>{var F;var D;return p.value?f.title:ge(f.title,le.title,(F=(D=r.value)==null?void 0:D.length)!=null?F:0)}})}),(m=s["append-item"])==null?void 0:m.call(s)]}})]}),g.value.map((n,c)=>{function I(f){f.stopPropagation(),f.preventDefault(),k(n)}const _={"onClick:close":I,modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:n.value,class:["v-combobox__selection",c===a.value&&["v-combobox__selection--selected",G.value]],style:c===a.value?H.value:{}},[e?o(pe,{defaults:{VChip:{closable:l.closableChips,size:"small",text:n.title}}},{default:()=>[s.chip?s.chip({item:n,index:c,props:_}):o(ke,_,null)]}):s.selection?s.selection({item:n,index:c}):o("span",{class:"v-combobox__selection-text"},[n.title,l.multiple&&c<g.value.length-1&&o("span",{class:"v-combobox__selection-comma"},[de(",")])])])})])}})}),se({isFocused:h,isPristine:p,menu:v,search:r,selectionIndex:a,filteredItems:w,select:k},b)}});export{Te as V};