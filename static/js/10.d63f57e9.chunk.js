(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[10],{1020:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var r=t(64),c=t(1),a=t(26),u=t(900),i=t.n(u),o=t(914),s=t(887),l=t(871),d=t(10),b={useHistoryReplace:!1,deserialize:function(e){return e},serialize:function(e){return String(e)}};var f=function(e,n,t){var r=Object(a.h)(),u=Object(c.useMemo)((function(){return Object(d.a)(Object(d.a)({},b),t)}),[t]),i=Object(c.useMemo)((function(){var t=new URLSearchParams(r.location.search).get(e);return t?u.deserialize(t):n}),[e,n,u,r.location.search]),o=Object(c.useCallback)((function(n,t){var c=r.location,a=c.search,i=new URLSearchParams(a),o=u.serialize(n);o?i.set(e,o):i.delete(e);var s="?".concat(i);a!==s&&(t||u.useHistoryReplace?r.replace:r.push)({search:s,hash:c.hash,pathname:c.pathname},c.state)}),[e,u,r]),s=Object(c.useCallback)((function(e){o(n,e)}),[n,o]);return[i,o,s]},v=t(2);function j(e){return i()(e,"year","desc")}var O=function(){var e,n,t=Object(a.i)(),u=f("q",""),i=Object(r.a)(u,2),d=i[0],b=i[1],O=Object(l.a)("itemsSearch",[{q:d,type:null===(e=t.state)||void 0===e?void 0:e.type,field:null===(n=t.state)||void 0===n?void 0:n.field}]),h=Object(c.useCallback)((function(e){b(e)}),[b]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"m-1 mb-3 mr-2",children:Object(v.jsx)(o.a,{autoFocus:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u0438\u043b\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0430...",value:d,onChange:h})}),d.length>=3&&Object(v.jsx)(s.a,{queryResult:O,processItems:j})]})}},855:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(10),c=t(49),a=t(1),u=t(44),i=t.n(u),o=t(64),s=t(91),l=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=n.onEnterViewport,u=n.onLeaveViewport,i=Object(a.useState)(),l=Object(o.a)(i,2),d=l[1],b=Object(a.useRef)(null),f=Object(a.useRef)(!1),v=Object(a.useRef)(!1),j=Object(a.useRef)(0),O=Object(a.useRef)(0),h=Object(a.useCallback)((function(){if(e.current&&b.current){var n=Object(s.findDOMNode)(e.current);n&&b.current.observe(n)}}),[e,b]),m=Object(a.useCallback)((function(){if(e.current&&b.current){var n=Object(s.findDOMNode)(e.current);n&&(b.current.unobserve(n),b.current.disconnect(),b.current=null)}}),[e,b]),p=Object(a.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,a=n.intersectionRatio,i="undefined"!==typeof t?t:a>0;if(!v.current&&i)return v.current=!0,null===c||void 0===c||c(),j.current+=1,f.current=i,void d(i);v.current&&!i&&(v.current=!1,null===u||void 0===u||u(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,f.current=i,d(i))}),[b,r.disconnectOnLeave,c,u]),x=Object(a.useCallback)((function(){b.current||(b.current=new IntersectionObserver(p,t))}),[b,t,p]);return Object(a.useEffect)((function(){return x(),h(),function(){m()}}),[x,h,m]),{inViewport:f.current,enterCount:j.current,leaveCount:O.current}},d=t(2),b=["children","className","onScrollToEnd"],f=function(e){var n=e.children,t=e.className,u=e.onScrollToEnd,o=Object(c.a)(e,b),s=Object(a.useRef)(null);return l(s,{onEnterViewport:u}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:i()("overflow-y-auto h-full",t)},o),{},{children:[n,Object(d.jsx)("div",{className:"h-40",ref:s})]}))}},856:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(10),c=t(49),a=t(44),u=t.n(a),i=t(227),o=t(2),s=["className","wrapperClassName","source","caption","children"],l=function(e){var n=e.className,t=e.wrapperClassName,a=e.source,l=e.caption,d=e.children,b=Object(c.a)(e,s);return Object(o.jsx)(i.a,Object(r.a)(Object(r.a)({},b),{},{className:u()("rounded-xl w-1/5",t),children:Object(o.jsxs)("div",{className:u()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",n),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:a,alt:l}),Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-primary text-sm text-center overflow-hidden whitespace-nowrap",children:l})}),d]})}))}},859:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var r=t(90),c=t(1),a=t(44),u=t.n(a),i=t(171),o=t.n(i),s=t(855),l=t(229),d=t(26),b=t(856),f=t(7),v=t(2),j=function(e){var n=e.item,t=e.className,r=Object(d.h)(),a=Object(c.useMemo)((function(){var e;return null===n||void 0===n||null===(e=n.title)||void 0===e?void 0:e.split("/")[0]}),[null===n||void 0===n?void 0:n.title]),i=Object(c.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&r.push(Object(f.b)(f.a.Item,{itemId:n.id}))}),[null===n||void 0===n?void 0:n.id,r]);return Object(v.jsx)(b.a,{onClick:i,source:null===n||void 0===n?void 0:n.posters.medium,caption:a,className:u()("h-72",t),children:(null===n||void 0===n?void 0:n.new)&&Object(v.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-primary px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===n||void 0===n?void 0:n.new})})},O=function(e){var n=e.title,t=e.items,c=e.loading,a=e.onScrollToEnd,i=e.scrollable,d=void 0===i||i,b=e.className,f=Object(v.jsxs)("div",{children:[n&&Object(v.jsx)(l.a,{className:"m-1 mb-3",children:n}),Object(v.jsxs)("div",{className:u()("flex flex-wrap",b),children:[o()(t,(function(e){return Object(v.jsx)(j,{item:e},e.id)})),c&&o()(Object(r.a)(new Array(15)),(function(e,n){return Object(v.jsx)(j,{},n)}))]})]});return d?Object(v.jsx)(s.a,{onScrollToEnd:a,children:f}):f}},868:function(e,n,t){"use strict";var r=t(64),c=t(1),a=t(860),u=t.n(a),i=t(873),o=t.n(i),s=t(870),l=t.n(s);n.a=function(e,n){var t=e.data,a=e.isLoading,i=e.isFetchingNextPage,s=e.fetchNextPage,d=Object(c.useState)(!1),b=Object(r.a)(d,2),f=b[0],v=b[1],j=Object(c.useMemo)((function(){return l()(u()(o()(null===t||void 0===t?void 0:t.pages,(function(e){return e.items}))),"id")}),[null===t||void 0===t?void 0:t.pages]),O=Object(c.useMemo)((function(){return n?n(j):j}),[j,n]),h=Object(c.useCallback)((function(){f&&(s(),v(!1))}),[f,s]);return Object(c.useEffect)((function(){v(!0)}),[j.length]),[O,a||i,h]}},871:function(e,n,t){"use strict";var r=t(10),c=t(90),a=t(1),u=t(935),i=t(226);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,o=Object(a.useMemo)((function(){return new i.c}),[]),s=Object(u.a)([e].concat(Object(c.a)(n)),(function(t){var r=t.pageParam;return o[e].apply(o,Object(c.a)(n).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var n;return(null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.current)+1||1}},t));return s}},887:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(64),c=t(859),a=t(868),u=t(2),i=function(e){var n=e.title,t=e.queryResult,i=e.processItems,o=Object(a.a)(t,i),s=Object(r.a)(o,3),l=s[0],d=s[1],b=s[2];return Object(u.jsx)(c.a,{title:n,items:l,loading:d,onScrollToEnd:b})}},900:function(e,n,t){var r=t(901),c=t(50);e.exports=function(e,n,t,a){return null==e?[]:(c(n)||(n=null==n?[]:[n]),c(t=a?void 0:t)||(t=null==t?[]:[t]),r(e,n,t))}},901:function(e,n,t){var r=t(237),c=t(238),a=t(349),u=t(366),i=t(902),o=t(364),s=t(903),l=t(365),d=t(50);e.exports=function(e,n,t){n=n.length?r(n,(function(e){return d(e)?function(n){return c(n,1===e.length?e[0]:e)}:e})):[l];var b=-1;n=r(n,o(a));var f=u(e,(function(e,t,c){return{criteria:r(n,(function(n){return n(e)})),index:++b,value:e}}));return i(f,(function(e,n){return s(e,n,t)}))}},902:function(e,n){e.exports=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}},903:function(e,n,t){var r=t(904);e.exports=function(e,n,t){for(var c=-1,a=e.criteria,u=n.criteria,i=a.length,o=t.length;++c<i;){var s=r(a[c],u[c]);if(s)return c>=o?s:s*("desc"==t[c]?-1:1)}return e.index-n.index}},904:function(e,n,t){var r=t(172);e.exports=function(e,n){if(e!==n){var t=void 0!==e,c=null===e,a=e===e,u=r(e),i=void 0!==n,o=null===n,s=n===n,l=r(n);if(!o&&!l&&!u&&e>n||u&&i&&s&&!o&&!l||c&&i&&s||!t&&s||!a)return 1;if(!c&&!u&&!l&&e<n||l&&t&&a&&!c&&!u||o&&t&&a||!i&&a||!s)return-1}return 0}},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(10),c=t(49),a=t(1),u=t(933),i=t.n(u),o=t(44),s=t.n(o),l=t(2),d=["className","onChange"],b=function(e){var n=e.className,t=e.onChange,u=Object(c.a)(e,d),o=Object(a.useCallback)((function(e){var n=e.value;null===t||void 0===t||t(n)}),[t]);return Object(l.jsx)(i.a,Object(r.a)(Object(r.a)({},u),{},{className:s()("w-full",n),onChange:o}))}}}]);
//# sourceMappingURL=10.d63f57e9.chunk.js.map