(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[7],{120:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(675),a=r.description,c="".concat(r.name," ").concat(r.version),i=r.version},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(51),a=n.n(r),c=n(3),i=function(e){var t=e.className;return Object(c.jsx)("div",{className:"fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center",children:Object(c.jsx)("i",{className:a()("animate-spin w-10 h-10 rounded-full border-t-4",t)})})}},197:function(e,t,n){"use strict";var r=n(94),a=n(104),c=n(2),i=n(884),o=n(252);t.a=function(e){var t,n=Object(c.useMemo)((function(){return new o.c}),[]),s=Object(i.a)([n,e],(function(t){return n[e].apply(n,Object(a.a)(t))}));return Object.assign({},s,(t={},Object(r.a)(t,e,s.mutate),Object(r.a)(t,"".concat(e,"Async"),s.mutateAsync),t))}},252:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(90),a=n(91),c=n(191),i=n(190),o=n(55),s=n(11),u=n(30),l=n.n(u),f=n(52),h=n(57),d=n.n(h),v=n(371);var p,b,m=function(e){return encodeURIComponent((n=e)!==Object(n)?e:(t=e,JSON.stringify(t,(function(e,t){if(null!==t&&""!==t)return t}))));var t,n},j=function(e){return Object.keys(e||{}).filter((function(t){return""!==(null===e||void 0===e?void 0:e[t])&&null!==(null===e||void 0===e?void 0:e[t])&&void 0!==(null===e||void 0===e?void 0:e[t])})).map((function(t){return d()(null===e||void 0===e?void 0:e[t])?function(e,t){return t.map((function(t,n){return"".concat(m("".concat(e,"[").concat(n,"]")),"=").concat(m(t))})).join("&")}(t,null===e||void 0===e?void 0:e[t]):"".concat(t,"=").concat(m(null===e||void 0===e?void 0:e[t]))})).join("&")},k=function(){function e(t){Object(r.a)(this,e),this.baseUrl=void 0,this.baseUrl=t.startsWith("http")?t:window.location.protocol.startsWith("http")?"".concat(window.location.protocol,"//").concat(t):"http://".concat(t)}return Object(a.a)(e,[{key:"request",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n,r,a){var c,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=this.getAccessToken())&&(r=Object(s.a)(Object(s.a)({},r),{},{access_token:c})),e.prev=2,e.next=5,fetch("".concat(this.baseUrl).concat(n,"?").concat(j(r)),{method:t,body:a&&Object(v.serialize)(a)});case 5:return 401===(i=e.sent).status&&this.clearTokens(),e.next=9,i.json();case 9:return o=e.sent,e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",{error:e.t0.toString()});case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){return this.request("GET",e,t)}},{key:"post",value:function(e,t,n){return this.request("POST",e,n,t)}},{key:"getAccessToken",value:function(){throw new Error("not implemented")}},{key:"getRefreshToken",value:function(){throw new Error("not implemented")}},{key:"saveTokens",value:function(e){e.access_token,e.refresh_token,e.expires_in;throw new Error("not implemented")}},{key:"clearTokens",value:function(){throw new Error("not implemented")}}]),e}();!function(e){e[e.True=1]="True",e[e.False=0]="False"}(p||(p={})),function(e){e[e.NoWatched=-1]="NoWatched",e[e.Watching=0]="Watching",e[e.Watched=1]="Watched"}(b||(b={}));var g=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_BASE_URL||"https://api.service-kp.com",O=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_ID||"xbmc",y=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_SECRET||"cgg3gtifu46urtfp2zp1nqtba0k2ezxh",_=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.call(this,"xbmc","cgg3gtifu46urtfp2zp1nqtba0k2ezxh","https://api.service-kp.com")}return Object(a.a)(n,[{key:"isLogged",value:function(){return o.a.getItem("is_logged")}},{key:"getAccessToken",value:function(){return o.a.getItem("access_token")}},{key:"getRefreshToken",value:function(){return o.a.getItem("refresh_token")}},{key:"saveTokens",value:function(e){var t=e.access_token,n=e.refresh_token,r=e.expires_in;o.a.setItem("is_logged",!0,2592e3),o.a.setItem("access_token",t,r),o.a.setItem("refresh_token",n,2592e3)}},{key:"clearTokens",value:function(){["is_logged","access_token","refresh_token"].forEach(o.a.removeItem)}}]),n}(function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return Object(r.a)(this,n),(e=t.call(this,i)).clientId=void 0,e.clientSecret=void 0,e.accessTokenCheckIntervaId=void 0,e.clientId=a,e.clientSecret=c,e}return Object(a.a)(n,[{key:"clearTimers",value:function(){clearInterval(this.accessTokenCheckIntervaId),this.accessTokenCheckIntervaId=null}},{key:"processTokensReponse",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clearTokens();case 2:e.t0=t.error,e.next="authorization_pending"===e.t0?5:void 0===e.t0?6:11;break;case 5:return e.abrupt("break",13);case 6:return this.clearTimers(),e.next=9,this.saveTokens(t);case 9:return null===n||void 0===n||n(),e.abrupt("return");case 11:throw this.clearTimers(),t.error;case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"requestTokens",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_token",client_id:this.clientId,client_secret:this.clientSecret,code:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshTokens",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/token",null,{grant_type:"refresh_token",client_id:this.clientId,client_secret:this.clientSecret,refresh_token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestDeviceCode",value:function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_code",client_id:this.clientId,client_secret:this.clientSecret});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deviceAuthorization",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,a,c,i,o,s,u=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this.getRefreshToken())){e.next=15;break}return e.prev=2,e.next=5,this.refreshTokens(n);case 5:return r=e.sent,e.next=8,this.processTokensReponse(r);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.clearTokens();case 13:e.next=25;break;case 15:return e.next=17,this.requestDeviceCode();case 17:return a=e.sent,c=a.interval,i=a.code,o=a.user_code,s=a.verification_uri,null===t||void 0===t||t(o,s),e.next=25,new Promise((function(e,t){u.clearTimers(),u.accessTokenCheckIntervaId=setInterval(Object(f.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.requestTokens(i);case 2:return r=n.sent,n.prev=3,n.next=6,u.processTokensReponse(r,e);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(3),t(n.t0);case 11:case"end":return n.stop()}}),n,null,[[3,8]])}))),1e3*(c||10))}));case 25:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deactivate",value:function(){this.deviceUnlink(),this.clearTokens(),this.clearTimers()}},{key:"user",value:function(){return this.get("/v1/user")}},{key:"serverLocations",value:function(){return this.get("/v1/references/server-location")}},{key:"streamingTypes",value:function(){return this.get("/v1/references/streaming-type")}},{key:"voiceoverTypes",value:function(){return this.get("/v1/references/voiceover-type")}},{key:"voiceoverAuthors",value:function(){return this.get("/v1/references/voiceover-author")}},{key:"videoQualities",value:function(){return this.get("/v1/references/video-quality")}},{key:"devices",value:function(){return this.get("/v1/device")}},{key:"deviceInfo",value:function(){return this.get("/v1/device/info")}},{key:"deviceInfoById",value:function(e){return this.get("/v1/device/".concat(e))}},{key:"deviceUnlink",value:function(){return this.post("/v1/device/unlink")}},{key:"deviceRemoveById",value:function(e){return this.post("/v1/device/".concat(e,"/remove"))}},{key:"deviceNotify",value:function(e){return this.post("/v1/device/notify",e)}},{key:"deviceSettings",value:function(e){return this.get("/v1/device/".concat(e,"/settings"))}},{key:"saveDeviceSettings",value:function(e,t){return this.post("/v1/device/".concat(e,"/settings"),t)}},{key:"types",value:function(){return this.get("/v1/types")}},{key:"genders",value:function(){return this.get("/v1/genres")}},{key:"countries",value:function(){return this.get("/v1/countries")}},{key:"items",value:function(e,t,n){return this.get("/v1/items",Object(s.a)(Object(s.a)({},e),{},{page:t,perpage:n}))}},{key:"itemsSearch",value:function(e,t,n){return this.get("/v1/items/search",Object(s.a)(Object(s.a)({},e),{},{page:t,perpage:n}))}},{key:"itemSmiliar",value:function(e){return this.get("/v1/items/similar",{id:e})}},{key:"itemMedia",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.True;return this.get("/v1/items/".concat(e),{nolinks:t})}},{key:"itemMediaLinks",value:function(e){return this.get("/v1/items/media-links",{mid:e})}},{key:"itemMediaFileLink",value:function(e,t){return this.get("/v1/items/media-video-link",{file:e,type:t})}},{key:"itemVote",value:function(e,t){return this.get("/v1/items/vote",{id:e,like:t})}},{key:"itemTrailer",value:function(e,t){return this.get("/v1/items/trailer",{id:e,sid:t})}},{key:"itemsFresh",value:function(e,t,n){return this.get("/v1/items/fresh",{type:e,page:t,perpage:n})}},{key:"itemsHot",value:function(e,t,n){return this.get("/v1/items/hot",{type:e,page:t,perpage:n})}},{key:"itemsPopular",value:function(e,t,n){return this.get("/v1/items/popular",{type:e,page:t,perpage:n})}},{key:"channels",value:function(){return this.get("/v1/tv")}},{key:"bookmarks",value:function(){return this.get("/v1/bookmarks")}},{key:"bookmarkItems",value:function(e,t,n){return this.get("/v1/bookmarks/".concat(e),{page:t,perpage:n})}},{key:"itemBookmarks",value:function(e){return this.get("/v1/bookmarks/get-item-folders",{item:e})}},{key:"bookmarkCreate",value:function(e){return this.post("/v1/bookmarks/create",{title:e})}},{key:"bookmarkRemove",value:function(e){return this.post("/v1/bookmarks/remove-folder",{folder:e})}},{key:"bookmarkAddItem",value:function(e,t){return this.post("/v1/bookmarks/add",{item:e,folder:t})}},{key:"bookmarkRemoveItem",value:function(e,t){return this.post("/v1/bookmarks/remove-item",{item:e,folder:t})}},{key:"bookmarkToggleItem",value:function(e,t){return this.post("/v1/bookmarks/toggle-item",{item:e,folder:t})}},{key:"watchingItem",value:function(e,t,n){return this.get("/v1/watching",{id:e,video:t,season:n})}},{key:"watchingMovies",value:function(){return this.get("/v1/watching/movies")}},{key:"watchingSerials",value:function(e){return this.get("/v1/watching/serials",{subscribed:e})}},{key:"watchingMarkTime",value:function(e,t,n,r){return this.get("/v1/watching/marktime",{id:e,time:t,video:n,season:r})}},{key:"watchingToggle",value:function(e,t,n){return this.get("/v1/watching/toggle",{id:e,video:t,season:n})}},{key:"watchingToggleWatchlist",value:function(e){return this.get("/v1/watching/togglewatchlist",{id:e})}},{key:"collections",value:function(e,t,n,r){return this.get("/v1/collections",{title:e,sort:t,page:n,perpage:r})}},{key:"collectionItems",value:function(e){return this.get("/v1/collections/view",{id:e})}},{key:"history",value:function(e,t){return this.get("/v1/history",{page:e,perpage:t})}},{key:"historyClearMedia",value:function(e){return this.post("/v1/history/clear-for-media",null,{id:e})}},{key:"historyClearSeason",value:function(e){return this.post("/v1/history/clear-for-season",null,{id:e})}},{key:"historyClearItem",value:function(e){return this.post("/v1/history/clear-for-item",null,{id:e})}}]),n}(k))},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),a=n(56),c=n(51),i=n.n(c),o=n(3),s=["className","as"],u=function(e){var t=e.className,n=e.as,c=void 0===n?"p":n,u=Object(a.a)(e,s);return Object(o.jsx)(c,Object(r.a)(Object(r.a)({},u),{},{className:i()("text-gray-200",t)}))}},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(153),a=n.n(r),c=n(369),i=n.n(c),o=a()(i.a)},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(11),a=n(56),c=n(51),i=n.n(c),o=(n(869),n(3)),s=["name","className"],u={notifications_active:Object(o.jsx)(o.Fragment,{children:"\ue7f7"}),new_releases:Object(o.jsx)(o.Fragment,{children:"\ue031"}),library_music:Object(o.jsx)(o.Fragment,{children:"\ue030"}),live_tv:Object(o.jsx)(o.Fragment,{children:"\ue639"}),play_arrow:Object(o.jsx)(o.Fragment,{children:"\ue037"}),play_circle_outline:Object(o.jsx)(o.Fragment,{children:"\ue039"}),sports_soccer:Object(o.jsx)(o.Fragment,{children:"\uea2f"}),expand_more:Object(o.jsx)(o.Fragment,{children:"\ue5cf"}),expand_less:Object(o.jsx)(o.Fragment,{children:"\ue5ce"}),emoji_emotions:Object(o.jsx)(o.Fragment,{children:"\uea22"}),auto_awesome:Object(o.jsx)(o.Fragment,{children:"\ue65f"}),visibility_off:Object(o.jsx)(o.Fragment,{children:"\ue8f5"}),closed_caption:Object(o.jsx)(o.Fragment,{children:"\ue01c"}),thumb_up:Object(o.jsx)(o.Fragment,{children:"\ue8dc"}),graphic_eq:Object(o.jsx)(o.Fragment,{children:"\ue1b8"})},l=function(e){var t=e.name,n=e.className,c=Object(a.a)(e,s);return Object(o.jsx)("i",Object(r.a)(Object(r.a)({},c),{},{className:i()("material-icons text-center",n),children:u[t]||t}))}},258:function(e,t,n){"use strict";var r=n(2),a=n(262);t.a=function(e,t){Object(r.useEffect)((function(){return Object(a.b)(e,t)}),[e,t])}},261:function(e,t,n){"use strict";var r=n(61),a=n(2),c=n(55);t.a=function(e){var t=Object(a.useState)(c.a.getItem(e)),n=Object(r.a)(t,2),i=n[0],o=n[1],s=Object(a.useCallback)((function(t,n){c.a.setItem(e,t,n)}),[e]);return Object(a.useEffect)((function(){var t=function(){o(c.a.getItem(e))},n=c.a.subscribe(t);return t(),n}),[e]),[i,s]}},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v}));var r,a=n(104),c=n(30),i=n.n(c),o=n(370),s=n(52),u=n(250),l=n.n(u),f={Enter:13,Play:[71,415],Pause:[19,74,413],PlayPause:[32,179],Back:[461,10009],Backspace:8,Escape:27,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Red:403,Green:404,Yellow:405,Blue:406,Settings:10133};function h(e,t){var n=l()(t),r=e.keyCode||e.which;return n.some((function(t){return e.key===t||l()(f[t]).some((function(e){return r===e}))}))}function d(e){return h(e,["Back","Backspace","Escape"])}function v(e,t){return r||(r=[],window.addEventListener("keydown",function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,c,s,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,d(t)&&(n=!0,t.preventDefault(),t.stopPropagation()),a=Object(o.a)(r),e.prev=3,a.s();case 5:if((c=a.n()).done){e.next=15;break}if(s=c.value,u=s.key,l=s.handler,!("Back"===u&&n||h(t,u))){e.next=13;break}return e.next=10,l(t);case 10:if(!1!==e.sent){e.next=13;break}return e.abrupt("break",15);case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(t){return e.apply(this,arguments)}}())),r=[{key:e,handler:t}].concat(Object(a.a)(r)),function(){r=r.filter((function(e){return e.handler!==t}))}}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),a=n(56),c=n(2),i=n(31),o=n(51),s=n.n(o),u=n(255),l=n(254),f=n(3),h=["href","state","children","icon","iconOnly","replace","active","className","onClick"],d=function(e){var t=e.href,n=e.state,o=e.children,d=e.icon,v=e.iconOnly,p=e.replace,b=e.active,m=e.className,j=e.onClick,k=Object(a.a)(e,h),g=Object(i.h)(),O=Object(c.useCallback)((function(){t&&(p?g.replace:g.push)(t,n),null===j||void 0===j||j()}),[t,n,p,j,g]);return Object(f.jsx)(l.a,Object(r.a)(Object(r.a)({},k),{},{className:s()("whitespace-nowrap cursor-pointer p-1",{"text-gray-200":!b,"text-red-600":b},m),onClick:O,role:"button",children:Object(f.jsxs)("div",{className:"flex items-center ",children:[d&&Object(f.jsx)(u.a,{className:s()({"mr-2":!v}),name:d}),!v&&o]})}))}},327:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=327},364:function(e,t,n){"use strict";var r=n(61),a=n(2),c=n(124),i=n(372),o=n(120);t.a=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],u=Object(a.useState)(""),l=Object(r.a)(u,2),f=l[0],h=l[1];return Object(a.useEffect)((function(){var e=Object(c.detect)();h(navigator.platform),s("".concat(e.platformName," (").concat(o.a,")")),Object(i.deviceinfo)((function(t){h("".concat(t.modelName).concat(t.version?" (".concat(t.version,")"):"")),s("".concat(e.platformName," ").concat(t.sdkVersion||e[e.platformName]," (").concat(o.a,")"))}))}),[]),Object(a.useMemo)((function(){return{software:n,hardware:f,title:o.b}}),[n,f])}},55:function(e,t,n){"use strict";var r=n(104),a=n(90),c=n(91),i=n(94),o=n(11);function s(e,t,n,r){var a=JSON.parse(window.localStorage.getItem(e)||"{}")||{};window.localStorage.setItem(e,JSON.stringify(Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t,"undefined"!==typeof n?{value:n,expire:r?Date.now()+1e3*r:void 0}:void 0))))}var u=function(){function e(t){var n=this;Object(a.a)(this,e),this.prefix=void 0,this.listeners=void 0,this.subscribe=function(e){return n.listeners=[].concat(Object(r.a)(n.listeners),[e]),function(){n.listeners=n.listeners.filter((function(t){return t!==e}))}},this.getItem=function(e){return function(e,t){var n=(JSON.parse(window.localStorage.getItem(e)||"{}")||{})[t]||{},r=n.value,a=n.expire;return a&&Date.now()>a?null:r}(n.prefix,e)},this.setItem=function(e,t,r){var a=s(n.prefix,e,t,r);return n.emit(),a},this.removeItem=function(e){!function(e,t){s(e,t)}(n.prefix,e),n.emit()},this.prefix=t,this.listeners=[]}return Object(c.a)(e,[{key:"emit",value:function(){var e=this;requestAnimationFrame((function(){e.listeners.forEach((function(e){return e()}))}))}}]),e}();t.a=new u("kinopub")},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(31),a={Index:"/",Home:"/home",Search:"/search",Watching:"/watching/:watchingType?",Releases:"/releases/:releaseType?",Category:"/category/:categoryId",Genre:"/genres/:genreId",Channels:"/channels",Channel:"/channels/:channelId",Bookmarks:"/bookmarks",Bookmark:"/bookmarks/:bookmarkId",Collections:"/collections/:collectionType?",Collection:"/collection/:collectionId",History:"/history",Item:"/item/:itemId",Video:"/video/:videoId",Trailer:"/trailer/:trailerId",Pair:"/pair",Donate:"/donate",Speed:"/speed",Settings:"/settings"};function c(e,t,n){var a=n?"?".concat(new URLSearchParams(n)):"";return Object(r.f)(e,t)+a}},675:function(e){e.exports=JSON.parse('{"name":"kinopub.webos","version":"1.0.20","description":"Kinopub WebOS","author":"Alexandr Dascal <alexandr.dascal@gmail.com>","repository":"https://github.com/adascal/kinopub.webos","main":"src/index.tsx","license":"MIT","scripts":{"start":"craco start","build":"craco build","postbuild":"dotenv-load node ./scripts/msx.js","package":"dotenv-load node ./scripts/package.js","test":"craco test","lint":"concurrently \\"yarn run eslint\\"","lint:fix":"concurrently \\"yarn run eslint:fix\\"","eslint":"eslint \'src/**/*.ts\' \'src/**/*.tsx\'","eslint:fix":"yarn run eslint --fix","postinstall":"husky install"},"dependencies":{"@babel/runtime":"7.15.3","@enact/core":"4.0.5","@enact/i18n":"4.0.5","@enact/moonstone":"4.0.2","@enact/spotlight":"4.0.5","@enact/ui":"4.0.5","@enact/webos":"4.0.5","@sentry/browser":"6.11.0","@sentry/tracing":"6.11.0","classnames":"2.3.1","core-js":"3.16.1","element-closest-polyfill":"1.0.4","format-duration":"1.4.0","hls.js":"1.0.9","ilib":"14.9.1","intersection-observer":"0.12.0","lodash":"4.17.21","millify":"4.0.0","object-to-formdata":"4.1.0","react":"17.0.2","react-dom":"17.0.2","react-helmet":"6.1.0","react-lazyload":"3.2.0","react-query":"3.19.6","react-router-dom":"5.2.0","use-debounce":"7.0.0","web-vitals":"2.1.0","whatwg-fetch":"3.6.2"},"devDependencies":{"@babel/core":"7.15.0","@babel/preset-env":"7.15.0","@babel/preset-react":"7.14.5","@babel/preset-typescript":"7.15.0","@craco/craco":"6.2.0","@enact/dev-utils":"4.1.1","@simbathesailor/use-what-changed":"2.0.0","@types/gtag.js":"0.0.7","@types/hls.js":"1.0.0","@types/lodash":"4.14.172","@types/react":"17.0.17","@types/react-dom":"17.0.9","@types/react-helmet":"6.1.2","@types/react-lazyload":"3.1.1","@types/react-router-dom":"5.1.8","@typescript-eslint/eslint-plugin":"4.29.1","@typescript-eslint/parser":"4.29.1","@webosose/ares-cli":"2.2.0","babel-eslint":"10.1.0","concurrently":"6.2.1","dotenv-load":"2.0.0","eslint":"7.32.0","eslint-config-prettier":"8.3.0","eslint-plugin-prettier":"3.4.0","http-proxy-middleware":"2.0.1","husky":"7.0.1","import-sort-style-vmv":"2.0.2","lint-staged":"11.1.2","prettier":"2.3.2","prettier-eslint":"13.0.0","prettier-plugin-import-sort":"0.0.7","react-scripts":"4.0.3","react-uid":"2.3.1","tailwindcss":"npm:@tailwindcss/postcss7-compat","typescript":"4.3.5"}}')},680:function(e,t,n){},869:function(e,t,n){},883:function(e,t,n){"use strict";n.r(t);n(411),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(438),n(439),n(160),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(453),n(454),n(222),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(490),n(492),n(493),n(497),n(498),n(499),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(508),n(509),n(510),n(511),n(305),n(514),n(515),n(307),n(516),n(517),n(518),n(519),n(308),n(520),n(521),n(522),n(523),n(524),n(525),n(526),n(528),n(529),n(530),n(531),n(532),n(533),n(539),n(540),n(541),n(542),n(543),n(544),n(545),n(546),n(547),n(548),n(549),n(550),n(553),n(554),n(555),n(556),n(557),n(558),n(559),n(560),n(561),n(562),n(563),n(564),n(565),n(566),n(567),n(568),n(569),n(570),n(571),n(231),n(572),n(573),n(575),n(576),n(577),n(578),n(579),n(581),n(582),n(583),n(584),n(585),n(586),n(587),n(588),n(590),n(591),n(592),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(608),n(609),n(611),n(612),n(613),n(615),n(616),n(618),n(620),n(621),n(622),n(623),n(624),n(625),n(626),n(627),n(628),n(629),n(630),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(649),n(650),n(652),n(654),n(655),n(656),n(657),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(666),n(667),n(668),n(669),n(671),n(322),n(672),n(673),n(674);var r=n(888),a=n(373),c=n(120);r.a({release:c.c,dsn:"https://d3a635962cb2440ca6754cdc6ff9af5b@o946544.ingest.sentry.io/5895550",integrations:[new a.a.BrowserTracing],tracesSampleRate:1});var i=n(105),o=n(11),s=(n(680),n(2)),u=n.n(s),l=n(889),f=n(265),h=n(367),d=n.n(h),v=n(81),p=n(31),b=window.location.origin.startsWith("http"),m=n(3),j=function(e){return b?Object(m.jsx)(v.a,Object(o.a)({},e)):Object(m.jsx)(p.a,Object(o.a)({},e))},k=n(56),g=n(187),O=function(e){var t=e.children;return Object(m.jsx)("div",{className:"w-screen h-screen",children:t})},y=n(194),_=n.n(y),x=n(264),w=n(6),T=[[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",icon:"home",href:w.a.Home},{name:"\u041f\u043e\u0438\u0441\u043a",icon:"search",href:w.a.Search},{name:"\u042f \u0441\u043c\u043e\u0442\u0440\u044e",icon:"notifications_active",href:Object(w.b)(w.a.Watching)},{name:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438",icon:"bookmark",href:w.a.Bookmarks},{name:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438",icon:"list",href:Object(w.b)(w.a.Collections)}].filter(Boolean),[{name:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438",icon:"new_releases",href:Object(w.b)(w.a.Releases)},{name:"\u0424\u0438\u043b\u044c\u043c\u044b",icon:"movie",href:Object(w.b)(w.a.Category,{categoryId:"movie"})},{name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",icon:"tv",href:Object(w.b)(w.a.Category,{categoryId:"serial"})},{name:"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b",icon:"toys",href:Object(w.b)(w.a.Genre,{genreId:"23"})},{name:"\u0410\u043d\u0438\u043c\u0435",icon:"auto_awesome",href:Object(w.b)(w.a.Genre,{genreId:"25"})},{name:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b",icon:"library_music",href:Object(w.b)(w.a.Category,{categoryId:"concert"})},{name:"\u0414\u043e\u043a\u0443\u0444\u0438\u043b\u044c\u043c\u044b",icon:"archive",href:Object(w.b)(w.a.Category,{categoryId:"documovie"})},{name:"\u0414\u043e\u043a\u0443\u0441\u0435\u0440\u0438\u0430\u043b\u044b",icon:"description",href:Object(w.b)(w.a.Category,{categoryId:"docuserial"})},{name:"\u0422\u0412 \u0428\u043e\u0443",icon:"live_tv",href:Object(w.b)(w.a.Category,{categoryId:"tvshow"})},{name:"\u0421\u043f\u043e\u0440\u0442",icon:"sports_soccer",href:Object(w.b)(w.a.Channels)}].filter(Boolean),["true"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).REACT_APP_HIDE_DONATE_MENU?null:{name:"\u0414\u043e\u043d\u0430\u0442",icon:"favorite",href:w.a.Donate},{name:"\u0421\u043f\u0438\u0434\u0442\u0435\u0441\u0442",icon:"speed",href:w.a.Speed},{name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",icon:"settings",href:w.a.Settings}].filter(Boolean)],I=function(e){var t=Object(p.i)();return Object(m.jsx)("nav",Object(o.a)(Object(o.a)({className:"group h-screen flex flex-col justify-between"},e),{},{children:_()(T,(function(e,n){return Object(m.jsx)("ul",{children:_()(e,(function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(x.a,{href:e.href,icon:e.icon,active:t.pathname.startsWith(e.href),className:"px-2 py-1 rounded-r",children:e.name})},e.href)}))},n)}))}))},P=["children"],E=function(e){var t=e.children,n=Object(k.a)(e,P);return Object(m.jsxs)("div",Object(o.a)(Object(o.a)({className:"flex h-screen w-screen overflow-hidden"},n),{},{children:[Object(m.jsx)(I,{}),Object(m.jsx)("div",{className:"w-full px-2",children:t})]}))},S=["component","layout"],C=function(e){var t=e.component,n=e.layout,r=Object(k.a)(e,S),a=Object(s.useMemo)((function(){return"fill"===n?O:E}),[n]),c=Object(s.useMemo)((function(){return function(e){return Object(m.jsx)(a,{children:Object(m.jsx)(s.Suspense,{fallback:Object(m.jsx)(g.a,{}),children:Object(s.createElement)(t,e)})})}}),[t,a]);return Object(m.jsx)(p.b,Object(o.a)(Object(o.a)({},r),{},{render:c}))},A=n(61),N=n(253),R=n(258),B=n(30),z=n.n(B),U=n(52),D=n(197),L=n(364),W=n(261);var F=function(e){var t=Object(p.h)(),n=Object(L.a)(),r=Object(D.a)("deviceAuthorization").deviceAuthorizationAsync,a=Object(D.a)("deviceNotify").deviceNotify,c=Object(W.a)("is_logged"),i=Object(A.a)(c,1)[0],o=Object(s.useCallback)((function(e,n){t.replace(w.a.Pair,{userCode:e,verificationUri:n})}),[t]);Object(s.useEffect)((function(){var t=setTimeout(Object(U.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===e||void 0===e||e(!1),t.next=3,r([o]);case 3:null===e||void 0===e||e(!0);case 4:case"end":return t.stop()}}),t)}))),500);return function(){clearTimeout(t)}}),[i,e,o,r]),Object(s.useEffect)((function(){var e=setTimeout((function(){i&&a([n])}),2e3);return function(){clearTimeout(e)}}),[i,n,a])},K=["children"],H=function(e){var t=e.children,n=Object(k.a)(e,K),r=Object(p.h)(),a=Object(s.useState)(!1),c=Object(A.a)(a,2),i=c[0],u=c[1],l=Object(s.useState)(!0),f=Object(A.a)(l,2),h=f[0],d=f[1],v=Object(s.useState)(!1),b=Object(A.a)(v,2),j=b[0],O=b[1],y=Object(s.useCallback)((function(){r.location.pathname!==w.a.Home?r.goBack():i?window.close():(u(!0),setTimeout((function(){u(!1)}),5e3))}),[r,i]),_=Object(s.useCallback)((function(e){O(e);var t=r.location.pathname;e&&(t!==w.a.Pair&&t!==w.a.Index||r.replace(w.a.Home))}),[r]);return Object(s.useEffect)((function(){var e=setTimeout((function(){d(!j&&r.location.pathname!==w.a.Pair)}),1e3);return function(){clearTimeout(e)}}),[j,r.location.pathname]),Object(R.a)("Back",y),F(_),h?Object(m.jsx)(g.a,{}):Object(m.jsxs)("div",Object(o.a)(Object(o.a)({},n),{},{children:[i&&Object(m.jsx)("div",{className:"fixed top-2 right-2 p-4 z-999 shadow-xl rounded-xl bg-gray-500 bg-opacity-70",children:Object(m.jsxs)(N.a,{children:["\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435,",Object(m.jsx)("br",{}),'\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u043d\u0430\u0437\u0430\u0434" \u0435\u0449\u0451 \u0440\u0430\u0437']})}),Object(m.jsx)(p.d,{children:t})]}))},q=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,1098))})),M=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(25)]).then(n.bind(null,1093))})),V=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,1099))})),J=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,1100))})),G=u.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(19)]).then(n.bind(null,1101))})),Q=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,1094))})),Y=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,1102))})),$=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(22)]).then(n.bind(null,1092))})),X=u.a.lazy((function(){return n.e(31).then(n.bind(null,1103))})),Z=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,1104))})),ee=u.a.lazy((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,1089))})),te=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(10)]).then(n.bind(null,1091))})),ne=u.a.lazy((function(){return n.e(32).then(n.bind(null,1105))})),re=u.a.lazy((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,1106))})),ae=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(16)]).then(n.bind(null,1096))})),ce=u.a.lazy((function(){return Promise.all([n.e(0),n.e(21),n.e(23)]).then(n.bind(null,1107))})),ie=u.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,1095))})),oe=u.a.lazy((function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,1108))})),se=u.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(20)]).then(n.bind(null,1109))})),ue=u.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(15)]).then(n.bind(null,1097))})),le=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(27)]).then(n.bind(null,1110))})),fe=u.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(14)]).then(n.bind(null,1111))})),he=new l.a({defaultOptions:{queries:{staleTime:3e5}}}),de=d()((function(e){return Object(m.jsx)(j,{children:Object(m.jsx)(f.a,{client:he,children:Object(m.jsxs)(H,Object(o.a)(Object(o.a)({},e),{},{children:[Object(m.jsx)(C,{path:w.a.Index,component:ee,layout:"fill",exact:!0}),Object(m.jsx)(C,{path:w.a.Home,component:Z}),Object(m.jsx)(C,{path:w.a.Search,component:ae}),Object(m.jsx)(C,{path:w.a.Category,component:V}),Object(m.jsx)(C,{path:w.a.Genre,component:J}),Object(m.jsx)(C,{path:w.a.Watching,component:le}),Object(m.jsx)(C,{path:w.a.Releases,component:fe}),Object(m.jsx)(C,{path:w.a.Bookmark,component:q}),Object(m.jsx)(C,{path:w.a.Bookmarks,component:M}),Object(m.jsx)(C,{path:w.a.Collection,component:Y}),Object(m.jsx)(C,{path:w.a.Collections,component:$}),Object(m.jsx)(C,{path:w.a.Channel,component:G,layout:"fill"}),Object(m.jsx)(C,{path:w.a.Channels,component:Q}),Object(m.jsx)(C,{path:w.a.History,component:X}),Object(m.jsx)(C,{path:w.a.Item,component:te,layout:"fill"}),Object(m.jsx)(C,{path:w.a.Video,component:ue,layout:"fill"}),Object(m.jsx)(C,{path:w.a.Trailer,component:se,layout:"fill"}),Object(m.jsx)(C,{path:w.a.Pair,component:re,layout:"fill"}),Object(m.jsx)(C,{path:w.a.Donate,component:ie}),Object(m.jsx)(C,{path:w.a.Speed,component:oe}),Object(m.jsx)(C,{path:w.a.Settings,component:ce}),Object(m.jsx)(C,{component:ne})]}))})})})),ve=function(e){e&&e instanceof Function&&n.e(33).then(n.bind(null,1090)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var me=Object(m.jsx)(de,{});"undefined"!==typeof window&&Object(i.render)(me,document.getElementById("root"));t.default=me;!function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(t,e)}))}}(),ve((function(e){var t,n=e.name,r=e.delta,a=e.value,c=e.id;null===(t=gtag)||void 0===t||t("event",n,{value:r,metric_id:c,metric_value:a,metric_delta:r})}))}},[[883,8,9]]]);
//# sourceMappingURL=main.82c4aa26.chunk.js.map