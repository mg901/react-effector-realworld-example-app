(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3OV0":function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return E}));var a=n("SugE"),r=n("dY8W"),c=n("eZyy"),l=n("/6P/"),o=Object(a.d)(),u=Object(a.c)((function(e){return c.a.get("profiles/".concat(e)).then((function(e){return e.data.profile}))})),i=Object(a.c)((function(e){return c.a.post("profiles/".concat(e,"/follow")).then((function(e){return e.data.profile}))})),f=Object(a.c)((function(e){return c.a.delete("profiles/".concat(e,"/follow")).then((function(e){return e.data.profile}))})),s=Object(r.a)(),m=Object(a.e)("").on(s.state,(function(e,t){var n=t.url;return null==n?void 0:n.replace(/\/@/,"")})),d=Object(a.i)(Object(a.h)([u.doneData,i.doneData,f.doneData]),{bio:"",following:!1,image:"",username:""}),b=d.map((function(e){return e.following})),p=Object(a.b)(d,l.a.$user,(function(e,t){return e.username===t.username})),E=p.map((function(e){return!e}));m.on(s.state,(function(e,t){var n=t.url;return null==n?void 0:n.replace(/\/@/,"")})),Object(a.f)({from:m,to:Object(a.a)({source:m,effect:u})}),Object(a.g)({source:o,filter:d.map((function(e){return!0===e.following})),target:Object(a.a)({source:m,effect:f})}),Object(a.g)({source:o,filter:d.map((function(e){return!1===e.following})),target:Object(a.a)({source:m,effect:i})})},fx3B:function(e,t,n){"use strict";n.r(t),n.d(t,"ProfilePage",(function(){return E}));var a=n("mXGw"),r=n.n(a),c=n("aPgI"),l=n("dY8W"),o=n("UYjC"),u=n("3OV0"),i=n("rPMT"),f=[{path:i.b.PROFILE,exact:!0,component:Object(a.lazy)((function(){return n.e(6).then(n.bind(null,"X4FF")).then((function(e){return{default:e.MyArticles}}))}))},{path:i.b.PROFILE_FAVORITES,exact:!0,component:Object(a.lazy)((function(){return n.e(5).then(n.bind(null,"KrpU")).then((function(e){return{default:e.FavoritedArticles}}))}))},{path:"*",component:Object(a.lazy)((function(){return n.e(0).then(n.bind(null,"C/cI")).then((function(e){return{default:e.NotMatchPage}}))}))}],s=function(e){var t=e.path,n=e.children;return r.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},r.a.createElement("ul",{className:"nav nav-pills outline-active articles-toggle"},r.a.createElement(o.j,null,r.a.createElement(o.k,{to:"".concat(t)},"My Articles")),r.a.createElement(o.j,null,r.a.createElement(o.k,{to:"".concat(t,"/favorites")},"Favorited Articles"))),n)},m=n("USb2"),d=function(){return Object(l.d)(u.c)?r.a.createElement(m.a,{to:"/settings"},r.a.createElement(o.b,{className:"btn-sm btn-outline-secondary action-btn"},r.a.createElement("i",{className:"ion-gear-a"})," Edit Profile Settings")):null},b=function(e){var t=e.username,n=Object(l.d)(u.a);return Object(l.d)(u.b)?r.a.createElement(o.b,{className:"btn-sm action-btn btn-secondary",onClick:u.g},r.a.createElement("i",{className:"ion-plus-round"})," ",n?"Unfollow":"Follow"," ",t):null},p=function(){var e=Object(l.d)(u.d),t=e.image,n=e.username,a=e.bio;return r.a.createElement("div",{className:"user-info"},r.a.createElement(o.c,null,r.a.createElement(o.n,null,r.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},r.a.createElement("img",{alt:n,className:"user-img",src:t}),r.a.createElement("h4",null,n),a&&r.a.createElement("p",null,a),r.a.createElement(d,null),r.a.createElement(b,{username:n})))))},E=function(e){var t=e.match.url;return Object(l.b)(u.f,{url:t}),r.a.createElement("div",{className:"profile-page"},r.a.createElement(p,null),r.a.createElement(o.c,null,r.a.createElement(o.n,null,r.a.createElement(s,{path:t},r.a.createElement("div",null,Object(c.a)(f))))))}}}]);