(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{YzYS:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}},mzpR:function(e,t,n){"use strict";n.r(t);var c=n("dY8W"),r=n("rEH3"),a=n("UYjC"),o=n("SugE"),i=n("eZyy"),u=n("YzYS"),s=r.e(),f=s.Gate,g=s.currentPageWasSet,j=s.favoriteToggled,b=s.$currentPage,d=s.$articles,l=(s.$totalPages,s.$feed),p=s.$pageSize,O=s.useModel,S=Object(o.c)((function(e){var t=e.pageSize,n=e.page;return i.a.get("articles?".concat(Object(u.a)(t,n))).then((function(e){return e.data}))}));l.on(S.doneData,(function(e,t){return t})),Object(o.f)({from:[f.open,g],to:Object(o.a)({source:{pageSize:p,page:b},effect:S})});var z=n("oYCi");t.default=function(){Object(c.b)(f);var e=Object(c.d)(S.pending),t=O(),n=t.totalPages,o=t.currentPage,i=t.pageSize;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(r.c,{children:Object(c.c)(d,{getKey:function(e){return e.slug},fn:function(e){return Object(z.jsx)("li",{children:Object(z.jsx)(r.b,{data:e,onClick:function(){return j(e)}})})}})}),Object(z.jsx)(a.m,{current:o,pageSize:i,total:n,onItemClick:g}),Object(z.jsx)(a.o,{loading:e})]})}}}]);