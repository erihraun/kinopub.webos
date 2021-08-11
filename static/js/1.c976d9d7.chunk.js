(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[1],{895:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(2),i=r.n(n),s=r(25);function o(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var u=i.a.createContext(o()),a=r(257);function c(t,e){var r=i.a.useRef(!1),n=i.a.useState(0)[1],o=Object(a.b)(),c=i.a.useContext(u),l=o.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=s.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=s.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=s.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(c.isReset()||(l.retryOnMount=!1));var h=i.a.useState((function(){return new e(o,l)}))[0],d=h.getOptimisticResult(l);if(i.a.useEffect((function(){r.current=!0,c.clearReset();var t=h.subscribe(s.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return h.updateResult(),function(){r.current=!1,t()}}),[c,h]),i.a.useEffect((function(){h.setOptions(l,{listeners:!1})}),[l,h]),l.suspense&&d.isLoading)throw h.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){c.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&d.isError&&!d.isFetching)throw d.error;return"tracked"===l.notifyOnChangeProps&&(d=h.trackResult(d)),d}},907:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(10),i=r(66),s=r(5),o=r(25),u=r(107),a=r(68),c=r(152),l=r(72),h=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(i.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),d(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&p(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&p(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(s.i)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!s.e&&!this.currentResult.isStale&&Object(s.f)(this.options.staleTime)){var e=Object(s.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!s.e&&!1!==this.options.enabled&&Object(s.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||u.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n=this.currentQuery,i=this.options,o=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,l=t!==n,h=l?t.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,y=t.state,b=y.dataUpdatedAt,m=y.error,O=y.errorUpdatedAt,R=y.isFetching,S=y.status,g=!1,E=!1;if(e.optimisticResults){var w=this.hasListeners(),I=!w&&d(t,e),Q=w&&f(t,n,e,i);(I||Q)&&(R=!0,b||(S="loading"))}if(e.keepPreviousData&&!y.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==S)r=v.data,b=v.dataUpdatedAt,S=v.status,g=!0;else if(e.select&&"undefined"!==typeof y.data)if(o&&y.data===(null==u?void 0:u.data)&&e.select===(null==a?void 0:a.select)&&!this.previousSelectError)r=o.data;else try{r=e.select(y.data),!1!==e.structuralSharing&&(r=Object(s.n)(null==o?void 0:o.data,r)),this.previousSelectError=null}catch(C){Object(c.a)().error(C),m=C,this.previousSelectError=C,O=Date.now(),S="error"}else r=y.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&("loading"===S||"idle"===S)){var T;if((null==o?void 0:o.isPlaceholderData)&&e.placeholderData===(null==a?void 0:a.placeholderData))T=o.data;else if(T="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof T)try{T=e.select(T),!1!==e.structuralSharing&&(T=Object(s.n)(null==o?void 0:o.data,T)),this.previousSelectError=null}catch(C){Object(c.a)().error(C),m=C,this.previousSelectError=C,O=Date.now(),S="error"}"undefined"!==typeof T&&(S="success",r=T,E=!0)}return{status:S,isLoading:"loading"===S,isSuccess:"success"===S,isError:"error"===S,isIdle:"idle"===S,data:r,dataUpdatedAt:b,error:m,errorUpdatedAt:O,failureCount:y.fetchFailureCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>h.dataUpdateCount||y.errorUpdateCount>h.errorUpdateCount,isFetching:R,isLoadingError:"error"===S&&0===y.dataUpdatedAt,isPlaceholderData:E,isPreviousData:g,isRefetchError:"error"===S&&0!==y.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,i=r.notifyOnChangePropsExclusions;if(!n&&!i)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var s="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,o=t[n]!==e[n],u=null==s?void 0:s.some((function(t){return t===r})),a=null==i?void 0:i.some((function(t){return t===r}));return o&&!a&&(!s||u)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(s.p)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;o.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(a.a);function d(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&p(t,e))}(t,e)}function f(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}},910:function(t,e,r){"use strict";var n=r(986),i=r(30),s=i.mark(a);Object.defineProperty(e,"__esModule",{value:!0}),e.millify=void 0;var o=r(989),u=r(990);function a(t){var e,r;return i.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=1e3;case 1:if(!((r=t/e)<1)){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,r;case 7:e*=1e3,n.next=1;break;case 10:case"end":return n.stop()}}),s)}function c(t,e){var r,i=e?Object.assign(Object.assign({},o.defaultOptions),e):o.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");var s=u.parseValue(t),c=s<0?"-":"";s=Math.abs(s);var l,h=0,d=n(a(s));try{for(d.s();!(l=d.n()).done;){s=l.value,h+=1}}catch(R){d.e(R)}finally{d.f()}if(h>=i.units.length)return t.toString();var f,p=u.roundTo(s,i.precision),v=n(a(p));try{for(v.s();!(f=v.n()).done;){p=f.value,h+=1}}catch(R){v.e(R)}finally{v.f()}var y=null!==(r=i.units[h])&&void 0!==r?r:"",b=i.lowercase?y.toLowerCase():y,m=i.space?" ":"",O=p.toString().replace(o.defaultOptions.decimalSeparator,i.decimalSeparator);return"".concat(c).concat(O).concat(m).concat(b)}e.millify=c,e.default=c},986:function(t,e,r){var n=r(987);t.exports=function(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw o}}}}},987:function(t,e,r){var n=r(988);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},988:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},989:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultOptions=void 0,e.defaultOptions={decimalSeparator:".",lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]}},990:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.roundTo=e.parseValue=void 0,e.parseValue=function(t){var e=parseFloat(t.toString());if(isNaN(e))throw new Error("Input value is not a number");if(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return e},e.roundTo=function(t,e){if(!Number.isFinite(t))throw new Error("Input value is not a finite number");if(!Number.isInteger(e)||e<0)throw new Error("Precision is not a positive integer");return Number.isInteger(t)?t:parseFloat(t.toFixed(e))}}}]);
//# sourceMappingURL=1.c976d9d7.chunk.js.map