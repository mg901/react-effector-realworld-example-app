(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{utMG:function(e,r,t){"use strict";t.r(r);var n=t("7E9e"),o=t("UYjC"),i=t("dY8W"),a=t("SugE"),u=t("xArF"),s=t("eZyy"),l=t("6le1"),c=Object(a.d)();c.watch((function(e){return e.preventDefault()}));var d=Object(a.c)((function(e){return s.a.put("user",{user:e})})),f=Object(i.a)(),m=n.a.$user.map((function(e){return e})),v=Object(u.a)({fields:{image:{init:""},username:{init:""},bio:{init:""},email:{init:""},password:{init:""}}});Object(a.j)({source:m,clock:Object(a.h)([f.open,m.updates]),target:v.set}),Object(a.j)({source:v.$values,clock:c,target:d}),d.done.watch((function(){window.location.reload()})),n.a.loggedOutClicked.watch((function(){l.e.push("/")}));var b=Object(a.e)({errors:{}}).on(d.failData,(function(e,r){var t;return null===(t=r.response)||void 0===t?void 0:t.data})).reset(v.$values,f.close),j=t("oYCi"),h=function(){var e=Object(i.d)(b);return Object(j.jsx)(o.d,{errors:e})},O=function(){var e=Object(u.b)(v.fields.bio),r=e.value,t=e.name,n=e.onChange;return Object(j.jsx)(o.r,{className:"form-control-lg",name:t,placeholder:"Short bio about you",rows:8,value:r,onChange:function(e){return n(e.target.value)}})},p=function(){var e=Object(u.b)(v.fields.email),r=e.value,t=e.name,n=e.onChange;return Object(j.jsx)(o.h,{className:"form-control-lg",name:t,placeholder:"Email",type:"email",value:r,onChange:function(e){return n(e.target.value)}})},g=function(){var e=Object(u.b)(v.fields.image),r=e.value,t=e.name,n=e.onChange;return Object(j.jsx)(o.h,{name:t,placeholder:"URL of profile picture",value:r,onChange:function(e){return n(e.target.value)}})},x=function(){var e=Object(u.b)(v.fields.password),r=e.value,t=e.name,n=e.onChange;return Object(j.jsx)(o.h,{autoComplete:"current-password",className:"form-control-lg",name:t,placeholder:"New Password",type:"password",value:r,onChange:function(e){return n(e.target.value)}})},y=function(){var e=Object(i.d)(d.pending);return Object(j.jsx)(o.b,{className:"btn-lg btn-primary pull-xs-right",disabled:e,type:"submit",children:"Update Settings"})},E=function(){var e=Object(u.b)(v.fields.username),r=e.value,t=e.name,n=e.onChange;return Object(j.jsx)(o.h,{className:"form-control-lg",name:t,placeholder:"Username",value:r,onChange:function(e){return n(e.target.value)}})},V=function(){return Object(i.b)(f),Object(j.jsxs)(o.e,{onSubmit:c,children:[Object(j.jsx)(g,{}),Object(j.jsx)(E,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{}),Object(j.jsx)(x,{}),Object(j.jsx)(y,{})]})};r.default=function(){return Object(j.jsx)(o.l,{children:Object(j.jsx)(o.n,{children:Object(j.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(j.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),Object(j.jsx)(h,{}),Object(j.jsx)(V,{}),Object(j.jsx)("hr",{}),Object(j.jsx)(o.b,{className:"btn-outline-danger",onClick:n.a.loggedOutClicked,children:"Or click here to logout."})]})})})}},xArF:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return v})),t.d(r,"c",(function(){return b}));var n=t("YSF1"),o=t("dY8W");function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e){var r=e.init,t=e.domain;return e.existing||(t?t.store(r):Object(n.createStore)(r))},l=function(e){var r=e.domain;return e.existing||(r?r.event():Object(n.createEvent)())};function c(e,r,t){var o,i,a,u,c,d,f,m,v,b,j,h="function"==typeof r.init?r.init():r.init,O=s({domain:t,existing:null===(o=r.units)||void 0===o?void 0:o.$value,init:h}),p=s({domain:t,existing:null===(i=r.units)||void 0===i?void 0:i.$errors,init:[]}),g=p.map((function(e){return e[0]?e[0]:null})),x=O.map((function(e){return e!==h})),y=s({domain:t,existing:null===(a=r.units)||void 0===a?void 0:a.$isTouched,init:!1}),E=l({domain:t,existing:null===(u=r.units)||void 0===u?void 0:u.onChange}),V=l({domain:t,existing:null===(c=r.units)||void 0===c?void 0:c.onBlur}),$=l({domain:t,existing:null===(d=r.units)||void 0===d?void 0:d.changed}),w=l({domain:t,existing:null===(f=r.units)||void 0===f?void 0:f.addError}),S=l({domain:t,existing:null===(m=r.units)||void 0===m?void 0:m.validate}),C=l({domain:t,existing:null===(v=r.units)||void 0===v?void 0:v.resetErrors}),T=l({domain:t,existing:null===(b=r.units)||void 0===b?void 0:b.resetValue}),k=l({domain:t,existing:null===(j=r.units)||void 0===j?void 0:j.reset}),F=g.map((function(e){return null===e}));return{changed:$,name:e,$value:O,$errors:p,$firstError:g,$isValid:F,$isDirty:x,$isTouched:y,$touched:y,$field:Object(n.combine)({value:O,errors:p,firstError:g,isValid:F,isDirty:x,isTouched:y}),onChange:E,onBlur:V,addError:w,validate:S,set:E,reset:k,resetErrors:C,resetValue:T,filter:r.filter}}function d(e){var r,t=e.$form,o=e.validateFormEvent,a=e.submitEvent,s=e.resetFormEvent,l=e.resetValues,c=e.field,d=e.rules,f=e.resetErrors,m=e.formValidationEvents,v=e.fieldValidationEvents,b=c.$value,j=c.$errors,h=c.onBlur,O=c.changed,p=c.addError,g=c.validate,x=c.resetErrors,y=c.resetValue,E=c.reset,V="function"==typeof d?Object(n.createStore)([]):Object(n.combine)(d.map((function(e){return e.source||Object(n.createStore)(null)}))),$=(r=d,function(e,t,n){for(var o=[],i="function"==typeof r?r(e,t):r,a=0;a<i.length;a++){var s=i[a],l=n?n[a]:null,c=s.validator(e,t,l);"boolean"!=typeof c||c||o.push({rule:s.name,errorText:s.errorText,value:e}),"object"!=u(c)||c.isValid||o.push({rule:s.name,errorText:c.errorText,value:e})}return o}),w=[].concat(i(m),i(v)),S=[];if(w.includes("submit")){var C=Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:V}),clock:a});S.push(C)}w.includes("blur")&&S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:V}),clock:h})),w.includes("change")&&S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:V}),clock:Object(n.merge)([O,y,l])})),S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:V}),clock:g})),S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:V}),clock:o}));var T=Object(n.sample)({source:b,clock:p,fn:function(e,r){return{rule:r.rule,value:e,errorText:r.errorText}}});j.on(S,(function(e,r){var t=r.form,n=r.fieldValue,o=r.rulesSources;return $(n,t,o)})).on(T,(function(e,r){return[r].concat(i(e))})).reset(x,s,E,f),w.includes("change")||j.reset(O)}function f(e,r,t,o,i){var a=e.$value,u=e.$touched,s=e.onChange,l=e.changed,c=e.name,d=e.reset,f=e.resetValue,m=e.filter;u.on(l,(function(){return!0})).reset(d,t,o),Object(n.guard)({source:s,filter:m||function(){return!0},target:l}),a.on(l,(function(e,r){return r})).on(r,(function(e,r){return r.hasOwnProperty(c)?r[c]:e})).reset(d,f,i,t)}function m(e){var r=e.filter,t=e.domain,o=e.fields,i=e.validateOn,a=e.units,u={},s=[],m=[];for(var v in o)if(o.hasOwnProperty(v)){var b=c(v,o[v],t);u[v]=b,s.push(b.$isDirty),m.push(b.$touched)}var j=function(e){var r={};for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t].$value);return Object(n.combine)(r)}(u),h=function(e){var r=[];for(var t in e)if(e.hasOwnProperty(t)){var o=e[t].$firstError;r.push(o)}return Object(n.combine)(r).map((function(e){return e.every((function(e){return null===e}))}))}(u),O=r?Object(n.combine)(h,r,(function(e,r){return e&&r})):h,p=Object(n.combine)(s).map((function(e){return e.some(Boolean)})),g=Object(n.combine)(m).map((function(e){return e.some(Boolean)})),x=Object(n.combine)({isValid:h,isDirty:p,touched:g}),y=l({domain:t,existing:null==a?void 0:a.validate}),E=l({domain:t,existing:null==a?void 0:a.submit}),V=l({domain:t,existing:null==a?void 0:a.formValidated}),$=l({domain:t,existing:null==a?void 0:a.setForm}),w=l({domain:t,existing:null==a?void 0:a.reset}),S=l({domain:t,existing:null==a?void 0:a.resetValues}),C=l({domain:t,existing:null==a?void 0:a.resetErrors}),T=l({domain:t,existing:null==a?void 0:a.resetTouched}),k=Object(n.sample)(j,E),F=Object(n.sample)(j,y);for(var D in u)if(u.hasOwnProperty(D)){var A=o[D],N=u[D];f(N,$,w,T,S),A.rules&&d({$form:j,rules:A.rules,submitEvent:E,resetFormEvent:w,resetValues:S,resetErrors:C,validateFormEvent:y,field:N,formValidationEvents:i||["submit"],fieldValidationEvents:A.validateOn?A.validateOn:[]})}return Object(n.guard)({source:k,filter:O,target:V}),Object(n.guard)({source:F,filter:O,target:V}),{fields:u,$values:j,$eachValid:h,$isValid:h,$isDirty:p,$touched:g,$meta:x,submit:E,validate:y,resetTouched:T,reset:w,resetValues:S,resetErrors:C,setForm:$,set:$,formValidated:V}}function v(e){var r=Object(o.d)(e.$field),t=r.value,n=r.errors,i=r.firstError,a=r.isValid,u=r.isDirty,s=r.isTouched;return{name:e.name,value:t,errors:n,firstError:i,isValid:a,isDirty:u,touched:s,isTouched:s,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:function(){return null!==i},errorText:function(e){return i?e&&e[i.rule]?e[i.rule]:i.errorText||"":""}}}function b(e){var r={},t={};for(var n in e.fields)if(e.fields.hasOwnProperty(n)){var i=v(e.fields[n]);r[n]=i,t[n]=i.value}var a=Object(o.d)(e.$meta),u=a.isValid,s=a.isDirty,l=a.touched;return{fields:r,values:t,hasError:function(e){return e?!!r[e]&&Boolean(r[e].firstError):!u},eachValid:u,isValid:u,isDirty:s,isTouched:l,touched:l,errors:function(e){return r[e]?r[e].errors:[]},error:function(e){return r[e]?r[e].firstError:null},reset:e.reset,errorText:function(e,t){var n=r[e];return n&&n.firstError?t&&t[n.firstError.rule]?t[n.firstError.rule]:n.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}}}]);