(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[18],{520:function(e,n,t){"use strict";t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return p}));var r=t(6),c=t(31),i=t(20),u=t(0),a=t(530),o=t.n(a),s=t(21),l=t(47),b=t(38),d=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=n.onEnterViewport,i=n.onLeaveViewport,a=Object(u.useState)(),o=Object(l.a)(a,2),s=o[1],d=Object(u.useRef)(null),j=Object(u.useRef)(!1),f=Object(u.useRef)(!1),O=Object(u.useRef)(0),v=Object(u.useRef)(0),h=Object(u.useCallback)((function(){if(e.current&&d.current){var n=Object(b.findDOMNode)(e.current);n&&d.current.observe(n)}}),[e,d]),m=Object(u.useCallback)((function(){if(e.current&&d.current){var n=Object(b.findDOMNode)(e.current);n&&(d.current.unobserve(n),d.current.disconnect(),d.current=null)}}),[e,d]),p=Object(u.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,u=n.intersectionRatio,a="undefined"!==typeof t?t:u>0;if(!f.current&&a)return f.current=!0,null===c||void 0===c||c(),O.current+=1,j.current=a,void s(a);f.current&&!a&&(f.current=!1,null===i||void 0===i||i(),r.disconnectOnLeave&&d.current&&d.current.disconnect(),v.current+=1,j.current=a,s(a))}),[d,r.disconnectOnLeave,c,i]),g=Object(u.useCallback)((function(){d.current||(d.current=new IntersectionObserver(p,t))}),[d,t,p]);return Object(u.useEffect)((function(){return g(),h(),function(){m()}}),[g,h,m]),{inViewport:j.current,enterCount:O.current,leaveCount:v.current}},j=t(729);var f,O=function(e){var n=Object(j.a)();return Object(u.useMemo)((function(){return"".concat(e,"-").concat(n)}),[e,n])},v=t(1),h=["children","onScrollToEnd"],m=s.b.div(f||(f=Object(i.a)(["\n  height: 5rem;\n"]))),p=Object(u.createContext)({}),g=function(e){var n=e.children,t=e.onScrollToEnd,i=Object(c.a)(e,h),a=Object(u.useRef)(null),s=O("scrollable"),l=Object(u.useMemo)((function(){return{id:s}}),[s]);return d(a,{onEnterViewport:t}),Object(v.jsxs)(o.a,Object(r.a)(Object(r.a)({id:s,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},i),{},{children:[Object(v.jsx)(p.Provider,{value:l,children:n}),Object(v.jsx)(m,{ref:a})]}))}},522:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(6),c=t(0),i=t(531),u=t.n(i),a=t(520),o=t(1),s=function(e){var n=Object(c.useContext)(a.a).id;return Object(o.jsx)(u.a,Object(r.a)({once:!0,offset:100,scrollContainer:n&&"#".concat(n)},e))};var l=s},526:function(e,n,t){"use strict";t.d(n,"a",(function(){return C}));var r,c,i,u=t(54),a=t(0),o=t(102),s=t.n(o),l=t(520),b=t(20),d=t(517),j=t(528),f=t.n(j),O=t(21),v=t(522),h=t(5),m=t(1),p=Object(O.b)(v.a)(r||(r=Object(b.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 20rem !important;\n  width: 20%;\n"]))),g=Object(O.b)(f.a)(c||(c=Object(b.a)(["\n  width: 100%;\n"]))),x=O.b.div(i||(i=Object(b.a)(["\n  position: absolute;\n  background: var(--main-color);\n  right: 0;\n  z-index: 1;\n  padding: 0 0.5em;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  margin-right: 0.25rem;\n"]))),w=function(e){var n=e.item,t=Object(d.e)(),r=Object(a.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&t.push(Object(h.b)(h.a.Item,{itemId:n.id}))}),[null===n||void 0===n?void 0:n.id,t]);return Object(m.jsxs)(p,{height:"20rem",children:[Object(m.jsx)(x,{children:null===n||void 0===n?void 0:n.new}),Object(m.jsx)(g,{source:null===n||void 0===n?void 0:n.posters.medium,caption:null===n||void 0===n?void 0:n.title,onClick:r})]})},C=function(e){var n=e.items,t=e.loading,r=e.onScrollToEnd,c=e.scrollable,i=void 0===c||c,a=Object(m.jsxs)(m.Fragment,{children:[s()(n,(function(e){return Object(m.jsx)(w,{item:e},e.id)})),t&&s()(Object(u.a)(new Array(15)),(function(e,n){return Object(m.jsx)(w,{},n)}))]});return i?Object(m.jsx)(l.b,{onScrollToEnd:r,children:a}):a}},542:function(e,n,t){"use strict";var r=t(47),c=t(0),i=t(527),u=t.n(i),a=t(555),o=t.n(a),s=t(532),l=t.n(s);n.a=function(e,n){var t=e.data,i=e.isLoading,a=e.isFetchingNextPage,s=e.fetchNextPage,b=Object(c.useState)(!1),d=Object(r.a)(b,2),j=d[0],f=d[1],O=Object(c.useMemo)((function(){return l()(u()(o()(null===t||void 0===t?void 0:t.pages,(function(e){return e.items}))),"id")}),[null===t||void 0===t?void 0:t.pages]),v=Object(c.useMemo)((function(){return n?n(O):O}),[O,n]),h=Object(c.useCallback)((function(){j&&(s(),f(!1))}),[j,s]);return Object(c.useEffect)((function(){f(!0)}),[O.length]),[v,i||a,h]}},550:function(e,n,t){"use strict";var r=t(6),c=t(54),i=t(0),u=t(610),a=t(142);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,o=Object(i.useMemo)((function(){return new a.c}),[]),s=Object(u.a)([e].concat(Object(c.a)(n)),(function(t){var r=t.pageParam;return o[e].apply(o,Object(c.a)(n).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var n;return(null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.current)+1||1}},t));return s}},567:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(47),c=t(526),i=t(542),u=t(1),a=function(e){var n=e.queryResult,t=e.processItems,a=Object(i.a)(n,t),o=Object(r.a)(a,3),s=o[0],l=o[1],b=o[2];return Object(u.jsx)(c.a,{items:s,loading:l,onScrollToEnd:b})}},589:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r,c=t(6),i=t(31),u=t(20),a=t(0),o=t(606),s=t.n(o),l=t(21),b=t(1),d=["autoFocus"],j=l.b.div(r||(r=Object(u.a)(["\n  display: inline-flex;\n\n  > div {\n    width: 100%;\n  }\n"]))),f=function(e){var n=e.autoFocus,t=Object(i.a)(e,d),r=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return n&&(e=requestAnimationFrame((function(){var e,n;null===(e=r.current)||void 0===e||null===(n=e.querySelector("input"))||void 0===n||n.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[r,n]),Object(b.jsx)(j,{ref:r,children:Object(b.jsx)(s.a,Object(c.a)({},t))})}},728:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var r=t(47),c=t(20),i=t(0),u=t(517),a=t(574),o=t.n(a),s=t(21),l=t(589),b=t(567),d=t(550),j=t(6),f={useHistoryReplace:!1,deserialize:function(e){return e},serialize:function(e){return String(e)}};var O,v=function(e,n,t){var r=Object(u.e)(),c=Object(i.useMemo)((function(){return Object(j.a)(Object(j.a)({},f),t)}),[t]),a=Object(i.useMemo)((function(){var t=new URLSearchParams(r.location.search).get(e);return t?c.deserialize(t):n}),[e,n,c,r.location.search]),o=Object(i.useCallback)((function(n,t){var i=r.location,u=i.search,a=new URLSearchParams(u),o=c.serialize(n);o?a.set(e,o):a.delete(e);var s="?".concat(a);u!==s&&(t||c.useHistoryReplace?r.replace:r.push)({search:s,hash:i.hash,pathname:i.pathname},i.state)}),[e,c,r]),s=Object(i.useCallback)((function(e){o(n,e)}),[n,o]);return[a,o,s]},h=t(1),m=Object(s.b)(l.a)(O||(O=Object(c.a)(["\n  margin-bottom: 1rem;\n"])));function p(e){return o()(e,"year","desc")}var g=function(){var e,n,t=Object(u.f)(),c=v("q",""),a=Object(r.a)(c,2),o=a[0],s=a[1],l=Object(d.a)("itemsSearch",[{q:o,type:null===(e=t.state)||void 0===e?void 0:e.type,field:null===(n=t.state)||void 0===n?void 0:n.field}]),j=Object(i.useCallback)((function(e){var n=e.value;s(n)}),[s]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u0438\u043b\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0430...",value:o,onChange:j}),o.length>=3&&Object(h.jsx)(b.a,{queryResult:l,processItems:p})]})}}}]);
//# sourceMappingURL=18.0e49a8a3.chunk.js.map