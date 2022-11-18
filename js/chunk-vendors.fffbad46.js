(self["webpackChunkchitter"]=self["webpackChunkchitter"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,v=n(7976),y=n(9518),b=n(7674),w=n(5112),_=n(9711),E=n(9909),T=E.enforce,S=E.get,I=c.Int8Array,k=I&&I.prototype,C=c.Uint8ClampedArray,x=C&&C.prototype,A=I&&y(I),O=k&&y(k),R=Object.prototype,D=c.TypeError,N=w("toStringTag"),L=_("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",M=o&&!!b&&"Opera"!==d(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(F,e)||h(j,e)},q=function(t){var e=y(t);if(l(e)){var n=S(e);return n&&h(n,P)?n[P]:q(e)}},B=function(t){if(!l(t))return!1;var e=d(t);return h(F,e)||h(j,e)},$=function(t){if(B(t))return t;throw D("Target is not a typed array")},z=function(t){if(u(t)&&(!b||v(A,t)))return t;throw D(f(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||m(O,t,n?e:M&&k[t]||e,r)}},G=function(t,e,n){var r,i;if(a){if(b){if(n)for(r in F)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(A[t]&&!n)return;try{return m(A,t,n?e:M&&A[t]||e)}catch(s){}}for(r in F)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[P]=i:M=!1;for(r in j)i=c[r],s=i&&i.prototype,s&&(T(s)[P]=i);if((!M||!u(A)||A===Function.prototype)&&(A=function(){throw D("Incorrect invocation")},M))for(r in F)c[r]&&b(c[r],A);if((!M||!O||O===R)&&(O=A.prototype,M))for(r in F)c[r]&&b(c[r].prototype,O);if(M&&y(x)!==O&&b(x,O),a&&!h(O,N))for(r in U=!0,g(O,N,{get:function(){return l(this)?this[L]:void 0}}),F)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&L,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:q,isView:V,isTypedArray:B,TypedArray:A,TypedArrayPrototype:O}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9671:function(t,e,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=s(n),d=i(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(84),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},9974:function(t,e,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=function(t){return r?o(t):function(){return s.apply(t,arguments)}}},1702:function(t,e,n){var r=n(4326),i=n(84);t.exports=function(t){if("Function"===r(t))return i(t)}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw m(p);return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},s=function(t){return b.has(t)}}else{var w=d("state");f[w]=!0,r=function(t,e){if(l(t,w))throw m(p);return e.facade=t,u(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return s(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(t){var e=i(this),n=s(e),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in e?e[l]=e[u]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return o(e,n+r)}})},4590:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return i(s(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return i(s(this),t,arguments.length>1?arguments[1]:void 0)}))},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",v=s("Error"),y=s(g),b=function(){u(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,b),r},w=b.prototype=y.prototype,_="stack"in v(g),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,g),S=!!T&&!(T.writable&&T.configurable),I=_&&!S&&!E;r({global:!0,constructor:!0,forced:m||I},{DOMException:I?b:y});var k=s(g),C=k.prototype;if(C.constructor!==k)for(var x in m||a(C,"constructor",o(1,k)),d)if(c(d,x)){var A=d[x],O=A.s;c(k,O)||a(k,O,o(6,A.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return I},L:function(){return a},LL:function(){return A},P0:function(){return E},Pz:function(){return S},Sg:function(){return k},ZR:function(){return x},aH:function(){return T},b$:function(){return d},eu:function(){return m},hl:function(){return p},m9:function(){return B},ne:function(){return F},pd:function(){return U},q4:function(){return _},ru:function(){return h},tV:function(){return c},uI:function(){return l},vZ:function(){return N},w1:function(){return f},xO:function(){return P},xb:function(){return D},z$:function(){return u},zd:function(){return M}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function p(){return"object"===typeof indexedDB}function m(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/chitter/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},b=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},w=()=>{try{return v()||y()||b()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},_=t=>{var e,n;return null===(n=null===(e=w())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T=()=>{var t;return null===(t=w())||void 0===t?void 0:t.config},S=t=>{var e;return null===(e=w())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="FirebaseError";class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=C,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new x(r,o,n);return a}}function O(t,e){return t.replace(R,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function N(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(L(n)&&L(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function M(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function U(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){const n=new j(t,e);return n.subscribe.bind(n)}class j{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=V(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function V(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{B:function(){return o},BK:function(){return $t},Bj:function(){return s},Fl:function(){return Wt},IU:function(){return At},Jd:function(){return S},PG:function(){return It},SU:function(){return Vt},Um:function(){return Et},WL:function(){return Bt},X$:function(){return x},X3:function(){return xt},XI:function(){return Ut},Xl:function(){return Ot},dq:function(){return Pt},iH:function(){return Mt},j:function(){return k},lk:function(){return I},qj:function(){return _t},qq:function(){return w},yT:function(){return Ct}});n(7658);var r=n(7139);let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&m)>0,l=t=>(t.n&m)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=m},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~m,i.n&=~m}e.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let v;const y=Symbol(""),b=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=v,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=v,v=this,E=!0,m=1<<++p,p<=g?h(this):_(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,v=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const T=[];function S(){T.push(E),E=!1}function I(){const t=T.pop();E=void 0===t||t}function k(t,e,n){if(E&&v){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=c());const i=void 0;C(r,i)}}function C(t,e){let n=!1;p<=g?l(t)||(t.n|=m,n=!u(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function x(t,e,n,i,s,o){const a=f.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t))a.forEach(((t,e)=>{("length"===e||e>=i)&&u.push(t)}));else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(y)),(0,r._N)(t)&&u.push(a.get(b)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(y)),(0,r._N)(t)&&u.push(a.get(b)));break;case"set":(0,r._N)(t)&&u.push(a.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);A(c(t))}}function A(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&O(r,e);for(const r of n)r.computed||O(r,e)}function O(t,e){(t!==v||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),N=F(),L=F(!1,!0),P=F(!0),M=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=At(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(At)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){S();const n=At(this)[e].apply(this,t);return I(),n}})),t}function F(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?yt:vt:e?gt:mt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?D.has(i):R(i))?a:(t||k(n,"get",i),e?a:Pt(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?Tt(a):_t(a):a)}}const j=q(),V=q(!0);function q(t=!1){return function(e,n,i,s){let o=e[n];if(kt(o)&&Pt(o)&&!Pt(i))return!1;if(!t&&(Ct(i)||kt(i)||(o=At(o),i=At(i)),!(0,r.kJ)(e)&&Pt(o)&&!Pt(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===At(s)&&(a?(0,r.aU)(i,o)&&x(e,"set",n,i,o):x(e,"add",n,i)),c}}function B(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&x(t,"delete",e,void 0,i),s}function $(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&D.has(e)||k(t,"has",e),n}function z(t){return k(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const H={get:N,set:j,deleteProperty:B,has:$,ownKeys:z},G={get:P,set(t,e){return!0},deleteProperty(t,e){return!0}},K=(0,r.l7)({},H,{get:L,set:V}),W=t=>t,X=t=>Reflect.getPrototypeOf(t);function J(t,e,n=!1,r=!1){t=t["__v_raw"];const i=At(t),s=At(e);n||(e!==s&&k(i,"get",e),k(i,"get",s));const{has:o}=X(i),a=r?W:n?Dt:Rt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function Y(t,e=!1){const n=this["__v_raw"],r=At(n),i=At(t);return e||(t!==i&&k(r,"has",t),k(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Q(t,e=!1){return t=t["__v_raw"],!e&&k(At(t),"iterate",y),Reflect.get(t,"size",t)}function Z(t){t=At(t);const e=At(this),n=X(e),r=n.has.call(e,t);return r||(e.add(t),x(e,"add",t,t)),this}function tt(t,e){e=At(e);const n=At(this),{has:i,get:s}=X(n);let o=i.call(n,t);o||(t=At(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&x(n,"set",t,e,a):x(n,"add",t,e),this}function et(t){const e=At(this),{has:n,get:r}=X(e);let i=n.call(e,t);i||(t=At(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&x(e,"delete",t,void 0,s),o}function nt(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&x(t,"clear",void 0,void 0,n),r}function rt(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=At(s),a=e?W:t?Dt:Rt;return!t&&k(o,"iterate",y),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function it(t,e,n){return function(...i){const s=this["__v_raw"],o=At(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?W:e?Dt:Rt;return!e&&k(o,"iterate",u?b:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function ot(){const t={get(t){return J(this,t)},get size(){return Q(this)},has:Y,add:Z,set:tt,delete:et,clear:nt,forEach:rt(!1,!1)},e={get(t){return J(this,t,!1,!0)},get size(){return Q(this)},has:Y,add:Z,set:tt,delete:et,clear:nt,forEach:rt(!1,!0)},n={get(t){return J(this,t,!0)},get size(){return Q(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:rt(!0,!1)},r={get(t){return J(this,t,!0,!0)},get size(){return Q(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:rt(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=it(i,!1,!1),n[i]=it(i,!0,!1),e[i]=it(i,!1,!0),r[i]=it(i,!0,!0)})),[t,n,e,r]}const[at,ct,ut,lt]=ot();function ht(t,e){const n=e?t?lt:ut:t?ct:at;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const dt={get:ht(!1,!1)},ft={get:ht(!1,!0)},pt={get:ht(!0,!1)};const mt=new WeakMap,gt=new WeakMap,vt=new WeakMap,yt=new WeakMap;function bt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:bt((0,r.W7)(t))}function _t(t){return kt(t)?t:St(t,!1,H,dt,mt)}function Et(t){return St(t,!1,K,ft,gt)}function Tt(t){return St(t,!0,G,pt,vt)}function St(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function It(t){return kt(t)?It(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function kt(t){return!(!t||!t["__v_isReadonly"])}function Ct(t){return!(!t||!t["__v_isShallow"])}function xt(t){return It(t)||kt(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function Ot(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Rt=t=>(0,r.Kn)(t)?_t(t):t,Dt=t=>(0,r.Kn)(t)?Tt(t):t;function Nt(t){E&&v&&(t=At(t),C(t.dep||(t.dep=c())))}function Lt(t,e){t=At(t),t.dep&&A(t.dep)}function Pt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Ft(t,!1)}function Ut(t){return Ft(t,!0)}function Ft(t,e){return Pt(t)?t:new jt(t,e)}class jt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:At(t),this._value=e?t:Rt(t)}get value(){return Nt(this),this._value}set value(t){const e=this.__v_isShallow||Ct(t)||kt(t);t=e?t:At(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Rt(t),Lt(this,t))}}function Vt(t){return Pt(t)?t.value:t}const qt={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Pt(i)&&!Pt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Bt(t){return It(t)?t:new Proxy(t,qt)}function $t(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=Ht(t,n);return e}class zt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ht(t,e,n){const r=t[e];return Pt(r)?r:new zt(t,e,n)}var Gt;class Kt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Gt]=!1,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Lt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=At(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Wt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Kt(i,s,o||!s,n);return a}Gt="__v_isReadonly"},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Ah:function(){return Ft},Cn:function(){return M},FN:function(){return Ln},Fl:function(){return Jn},HY:function(){return Qe},JJ:function(){return rt},Jd:function(){return Ut},Ko:function(){return Yt},LL:function(){return Wt},P$:function(){return pt},Q6:function(){return wt},U2:function(){return gt},Uk:function(){return En},Us:function(){return je},WI:function(){return Qt},Wm:function(){return yn},Xn:function(){return Pt},Y3:function(){return y},Y8:function(){return ht},YP:function(){return ot},_:function(){return vn},aZ:function(){return _t},bv:function(){return Lt},dD:function(){return P},f3:function(){return it},h:function(){return Qn},iD:function(){return ln},ic:function(){return Mt},j4:function(){return hn},kq:function(){return Sn},lR:function(){return Ye},mv:function(){return Yn},n4:function(){return K},nK:function(){return bt},uE:function(){return Tn},up:function(){return Gt},w5:function(){return U},wF:function(){return Nt},wg:function(){return sn},wy:function(){return $t}});n(7658),n(541);var r=n(4870),i=n(7139);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(t){const e=v||g;return t?e.then(this?t.bind(this):t):e}function b(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,i=k(h[r]);i<t?e=r+1:n=r}return e}function w(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||(null==t.id?h.push(t):h.splice(b(t.id),0,t),_())}function _(){u||l||(l=!0,v=g.then(x))}function E(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function T(t){(0,i.kJ)(t)?f.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||f.push(t),_()}function S(t,e=(u?d+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function I(t){if(f.length){const t=[...new Set(f)];if(f.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>k(t)-k(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=t=>null==t.id?1/0:t.id,C=(t,e)=>{const n=k(t)-k(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function x(t){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,I(t),u=!1,v=null,(h.length||f.length)&&x(t)}}new Set;new Map;function A(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>t.trim()))),e&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function O(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=O(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function R(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let D=null,N=null;function L(t){const e=D;return D=t,N=t&&t.type.__scopeId||null,e}function P(t){N=t}function M(){N=null}function U(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&cn(-1);const i=L(e),s=t(...n);return L(i),r._d&&cn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function F(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let y,b;const w=L(t);try{if(4&n.shapeFlag){const t=s||r;y=In(d.call(t,t,f,o,m,p,g)),b=l}else{const t=e;0,y=In(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),b=e.props?l:V(l)}}catch(E){nn.length=0,a(E,t,1),y=yn(tn)}let _=y;if(b&&!1!==v){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(c&&t.some(i.tR)&&(b=q(b,c)),_=_n(_,b))}return n.dirs&&(_=_n(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,L(w),y}function j(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(!dn(r))return;if(r.type!==tn||"v-if"===r.children){if(e)return;e=r}}return e}const V=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},q=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function B(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||$(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?$(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!R(u,n))return!0}}return!1}function $(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!R(n,s))return!0}return!1}function z({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const H=t=>t.__isSuspense,G={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,c,u){null==t?X(e,n,r,i,s,o,a,c,u):J(t,e,n,r,i,o,a,c,u)},hydrate:Q,create:Y,normalize:Z},K=G;function W(t,e){const n=t.props&&t.props[e];(0,i.mf)(n)&&n()}function X(t,e,n,r,i,s,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=Y(t,i,r,e,h,n,s,o,a,c);u(null,d.pendingBranch=t.ssContent,h,null,r,d,s,o),d.deps>0?(W(t,"onPending"),W(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,s,o),nt(d,t.ssFallback)):d.resolve()}function J(t,e,n,r,i,s,o,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:v}=h;if(m)h.pendingBranch=d,fn(d,m)?(c(m,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():g&&(c(p,f,n,r,i,null,s,o,a),nt(h,f))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=m):u(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),g?(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(c(p,f,n,r,i,null,s,o,a),nt(h,f))):p&&fn(d,p)?(c(p,d,n,r,i,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&fn(d,p))c(p,d,n,r,i,h,s,o,a),nt(h,d);else if(W(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:t,pendingId:e}=h;t>0?setTimeout((()=>{h.pendingId===e&&h.fallback(f)}),t):0===t&&h.fallback(f)}}function Y(t,e,n,r,s,o,c,u,l,h,d=!1){const{p:f,m:p,um:m,n:g,o:{parentNode:v,remove:y}}=h,b=(0,i.He)(t.props&&t.props.timeout),w={vnode:t,parent:e,parentComponent:n,isSVG:c,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(t=!1){const{vnode:e,activeBranch:n,pendingBranch:r,pendingId:i,effects:s,parentComponent:o,container:a}=w;if(w.isHydrating)w.isHydrating=!1;else if(!t){const t=n&&r.transition&&"out-in"===r.transition.mode;t&&(n.transition.afterLeave=()=>{i===w.pendingId&&p(r,a,e,0)});let{anchor:e}=w;n&&(e=g(n),m(n,o,w,!0)),t||p(r,a,e,0)}nt(w,r),w.pendingBranch=null,w.isInFallback=!1;let c=w.parent,u=!1;while(c){if(c.pendingBranch){c.effects.push(...s),u=!0;break}c=c.parent}u||T(s),w.effects=[],W(e,"onResolve")},fallback(t){if(!w.pendingBranch)return;const{vnode:e,activeBranch:n,parentComponent:r,container:i,isSVG:s}=w;W(e,"onFallback");const o=g(n),a=()=>{w.isInFallback&&(f(null,t,i,o,r,null,s,u,l),nt(w,t))},c=t.transition&&"out-in"===t.transition.mode;c&&(n.transition.afterLeave=a),w.isInFallback=!0,m(n,r,null,!0),c||a()},move(t,e,n){w.activeBranch&&p(w.activeBranch,t,e,n),w.container=t},next(){return w.activeBranch&&g(w.activeBranch)},registerDep(t,e){const n=!!w.pendingBranch;n&&w.deps++;const r=t.vnode.el;t.asyncDep.catch((e=>{a(e,t,0)})).then((i=>{if(t.isUnmounted||w.isUnmounted||w.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:s}=t;$n(t,i,!1),r&&(s.el=r);const o=!r&&t.subTree.el;e(t,s,v(r||t.subTree.el),r?null:g(t.subTree),w,c,l),o&&y(o),z(t,s.el),n&&0===--w.deps&&w.resolve()}))},unmount(t,e){w.isUnmounted=!0,w.activeBranch&&m(w.activeBranch,n,t,e),w.pendingBranch&&m(w.pendingBranch,n,t,e)}};return w}function Q(t,e,n,r,i,s,o,a,c){const u=e.suspense=Y(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,s,o);return 0===u.deps&&u.resolve(),l}function Z(t){const{shapeFlag:e,children:n}=t,r=32&e;t.ssContent=tt(r?n.default:n),t.ssFallback=r?tt(n.fallback):yn(tn)}function tt(t){let e;if((0,i.mf)(t)){const n=an&&t._c;n&&(t._d=!1,sn()),t=t(),n&&(t._d=!0,e=rn,on())}if((0,i.kJ)(t)){const e=j(t);0,t=e}return t=In(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter((e=>e!==t))),t}function et(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}function nt(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,z(r,i))}function rt(t,e){if(Nn){let n=Nn.provides;const r=Nn.parent&&Nn.parent.provides;r===n&&(n=Nn.provides=Object.create(r)),n[t]=e}else 0}function it(t,e,n=!1){const r=Nn||D;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}const st={};function ot(t,e,n){return at(t,e,n)}function at(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=Nn;let d,f,p=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(m=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?lt(t):(0,i.mf)(t)?s(t,h,2):void 0))):d=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[g])}:i.dG,e&&a){const t=d;d=()=>lt(t())}let g=t=>{f=_.onStop=()=>{s(t,h,4)}};if(Vn)return g=i.dG,e?n&&o(e,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let v=m?[]:st;const y=()=>{if(_.active)if(e){const t=_.run();(a||p||(m?t.some(((t,e)=>(0,i.aU)(t,v[e]))):(0,i.aU)(t,v)))&&(f&&f(),o(e,h,3,[t,v===st?void 0:v,g]),v=t)}else _.run()};let b;y.allowRecurse=!!e,"sync"===c?b=y:"post"===c?b=()=>Fe(y,h&&h.suspense):(y.pre=!0,h&&(y.id=h.uid),b=()=>w(y));const _=new r.qq(d,b);return e?n?y():v=_.run():"post"===c?Fe(_.run.bind(_),h&&h.suspense):_.run(),()=>{_.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,_)}}function ct(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?ut(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=Nn;Pn(this);const c=at(s,o.bind(r),n);return a?Pn(a):Mn(),c}function ut(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function lt(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))lt(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)lt(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{lt(t,e)}));else if((0,i.PO)(t))for(const n in t)lt(t[n],e);return t}function ht(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lt((()=>{t.isMounted=!0})),Ut((()=>{t.isUnmounting=!0})),t}const dt=[Function,Array],ft={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=Ln(),i=ht();let s;return()=>{const o=e.default&&wt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==tn){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return vt(a);const l=yt(a);if(!l)return vt(a);const h=gt(l,c,i,n);bt(l,h);const d=n.subTree,f=d&&yt(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==tn&&(!fn(l,f)||p)){const t=gt(f,c,i,n);if(bt(f,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},vt(a);"in-out"===u&&l.type!==tn&&(t.delayLeave=(t,e,n)=>{const r=mt(i,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},pt=ft;function mt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function gt(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=e,_=String(t.key),E=mt(n,t),T=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];T(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=v||u}e._leaveCb&&e._leaveCb(!0);const i=E[_];i&&fn(t,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,i=d;if(!n.isMounted){if(!s)return;e=y||l,r=b||h,i=w||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?i:r,[t]),I.delayedLeave&&I.delayedLeave(),t._enterCb=void 0)};e?S(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(f,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?S(p,[e,o]):o()},clone(t){return gt(t,e,n,r)}};return I}function vt(t){if(Tt(t))return t=_n(t),t.children=null,t}function yt(t){return Tt(t)?t.children?t.children[0]:void 0:t}function bt(t,e){6&t.shapeFlag&&t.component?bt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Qe?(128&o.patchFlag&&i++,r=r.concat(wt(o.children,e,a))):(e||o.type!==tn)&&r.push(null!=a?_n(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function _t(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const Et=t=>!!t.type.__asyncLoader;const Tt=t=>t.type.__isKeepAlive;RegExp,RegExp;function St(t,e){return(0,i.kJ)(t)?t.some((t=>St(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function It(t,e){Ct(t,"a",e)}function kt(t,e){Ct(t,"da",e)}function Ct(t,e,n=Nn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Rt(e,r,n),n){let t=n.parent;while(t&&t.parent)Tt(t.parent.vnode)&&xt(r,e,n,t),t=t.parent}}function xt(t,e,n,r){const s=Rt(e,t,r,!0);Ft((()=>{(0,i.Od)(r[e],s)}),n)}function At(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Ot(t){return 128&t.shapeFlag?t.ssContent:t}function Rt(t,e,n=Nn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Pn(n);const s=o(e,n,t,i);return Mn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Dt=t=>(e,n=Nn)=>(!Vn||"sp"===t)&&Rt(t,((...t)=>e(...t)),n),Nt=Dt("bm"),Lt=Dt("m"),Pt=Dt("bu"),Mt=Dt("u"),Ut=Dt("bum"),Ft=Dt("um"),jt=Dt("sp"),Vt=Dt("rtg"),qt=Dt("rtc");function Bt(t,e=Nn){Rt("ec",t,e)}function $t(t,e){const n=D;if(null===n)return t;const r=Kn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&lt(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function zt(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Ht="components";function Gt(t,e){return Xt(Ht,t,!0,e)||t}const Kt=Symbol();function Wt(t){return(0,i.HD)(t)?Xt(Ht,t,!1)||t:t||Kt}function Xt(t,e,n=!0,r=!1){const s=D||Nn;if(s){const n=s.type;if(t===Ht){const t=Wn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=Jt(s[t]||n[t],e)||Jt(s.appContext[t],e);return!o&&r?n:o}}function Jt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Yt(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function Qt(t,e,n={},r,i){if(D.isCE||D.parent&&Et(D.parent)&&D.parent.isCE)return yn("slot","default"===e?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),sn();const o=s&&Zt(s(n)),a=hn(Qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Zt(t){return t.some((t=>!dn(t)||t.type!==tn&&!(t.type===Qe&&!Zt(t.children))))?t:null}const te=t=>t?Un(t)?Kn(t)||t.proxy:te(t.parent):null,ee=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>te(t.parent),$root:t=>te(t.root),$emit:t=>t.emit,$options:t=>ce(t),$forceUpdate:t=>t.f||(t.f=()=>w(t.update)),$nextTick:t=>t.n||(t.n=y.bind(t.proxy)),$watch:t=>ct.bind(t)}),ne={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];re&&(c[e]=0)}}const d=ee[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.kT&&(0,i.RI)(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(ee,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let re=!0;function ie(t){const e=ce(t),n=t.proxy,s=t.ctx;re=!1,e.beforeCreate&&oe(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:k,serverPrefetch:C,expose:x,inheritAttrs:A,components:O,directives:R,filters:D}=e,N=null;if(h&&se(h,s,N,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(re=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Jn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)ae(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{rt(e,t[e])}))}function L(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&oe(d,t,"c"),L(Nt,f),L(Lt,p),L(Pt,m),L(Mt,g),L(It,v),L(kt,y),L(Bt,k),L(qt,S),L(Vt,I),L(Ut,w),L(Ft,E),L(jt,C),(0,i.kJ)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=A&&(t.inheritAttrs=A),O&&(t.components=O),R&&(t.directives=R)}function se(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=fe(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?it(n.from||o,n.default,!0):it(n.from||o):it(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function oe(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function ae(t,e,n,r){const s=r.includes(".")?ut(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&ot(s,n)}else if((0,i.mf)(t))ot(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>ae(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&ot(s,r,t)}else 0}function ce(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>ue(u,t,a,!0))),ue(u,e,a)):u=e,(0,i.Kn)(e)&&o.set(e,u),u}function ue(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ue(t,s,n,!0),i&&i.forEach((e=>ue(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=le[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const le={data:he,props:me,emits:me,methods:me,computed:me,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:me,directives:me,watch:ge,provide:he,inject:de};function he(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function de(t,e){return me(fe(t),fe(e))}function fe(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pe(t,e){return t?[...new Set([].concat(t,e))]:e}function me(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function ge(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=pe(t[r],e[r]);return n}function ve(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,pn,1),t.propsDefaults=Object.create(null),be(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ye(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;be(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=we(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(R(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=we(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function be(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:R(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=we(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function we(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(Pn(s),r=i[n]=t.call(null,e),Mn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function _e(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=_e(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);Ee(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(Ee(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=Ie(Boolean,r.type),n=Ie(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Kn)(t)&&r.set(t,l),l}function Ee(t){return"$"!==t[0]}function Te(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function Se(t,e){return Te(t)===Te(e)}function Ie(t,e){return(0,i.kJ)(e)?e.findIndex((e=>Se(e,t))):(0,i.mf)(e)&&Se(e,t)?0:-1}const ke=t=>"_"===t[0]||"$stable"===t,Ce=t=>(0,i.kJ)(t)?t.map(In):[In(t)],xe=(t,e,n)=>{if(e._n)return e;const r=U(((...t)=>Ce(e(...t))),n);return r._c=!1,r},Ae=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ke(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=xe(s,n,r);else if(null!=n){0;const t=Ce(n);e[s]=()=>t}}},Oe=(t,e)=>{const n=Ce(e);t.slots.default=()=>n},Re=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):Ae(e,t.slots={})}else t.slots={},e&&Oe(t,e);(0,i.Nj)(t.slots,pn,1)},De=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,Ae(e,s)),a=e}else e&&(Oe(t,e),a={default:1});if(o)for(const i in s)ke(i)||i in a||delete s[i]};function Ne(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Le=0;function Pe(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Ne(),o=new Set;let a=!1;const c=s.app={_uid:Le++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Zn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=yn(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Kn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function Me(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Me(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(Et(o)&&!a)return;const c=4&o.shapeFlag?Kn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(f[t.k]=u))};u?(r.id=-1,Fe(r,n)):r()}else 0}}function Ue(){}const Fe=et;function je(t){return Ve(t)}function Ve(t,e){Ue();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!fn(t,e)&&(r=Q(t),K(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ze:y(t,e,n,r);break;case tn:b(t,e,n,r);break;case en:null==t&&_(e,n,r,o);break;case Qe:L(t,e,n,r,i,s,o,a,c);break;default:1&h?C(t,e,n,r,i,s,o,a,c):6&h?P(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,tt)}null!=l&&i&&Me(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},k=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?x(e,n,r,i,s,o,a,c):R(t,e,i,s,o,a,c)},x=(t,e,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=t;if(f=t.el=c(t.type,u,g&&g.is,g),8&v?d(f,t.children):16&v&&O(t.children,f,null,r,o,u&&"foreignObject"!==m,l,h),b&&zt(t,null,r,"created"),g){for(const e in g)"value"===e||(0,i.Gg)(e)||a(f,e,null,g[e],u,t.children,r,o,Y);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&An(p,r,t)}A(f,t,t.scopeId,l,r),b&&zt(t,null,r,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),s(f,e,n),((p=g&&g.onVnodeMounted)||w||b)&&Fe((()=>{p&&An(p,r,t),w&&y.enter(f),b&&zt(t,null,r,"mounted")}),o)},A=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let s=0;s<r.length;s++)m(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;A(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},O=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?kn(t[u]):In(t[u]);v(null,c,e,n,r,i,s,o,a)}},R=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;n&&qe(n,!1),(g=m.onVnodeBeforeUpdate)&&An(g,n,e,t),f&&zt(e,t,n,"beforeUpdate"),n&&qe(n,!0);const v=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,u,n,r,v,o):c||q(t,e,u,null,n,r,v,o,!1),l>0){if(16&l)N(u,e,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,Y)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||N(u,e,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Fe((()=>{g&&An(g,n,e,t),f&&zt(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Qe||!fn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},N=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,Y);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,Y)}"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,r),s(d,n,r),O(e.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Be(t,e,!0)):q(t,e,n,d,i,o,a,c,l)},P=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):U(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=Dn(t,r,i);if(Tt(t)&&(a.ctx.renderer=tt),qn(a),a.asyncDep){if(i&&i.registerDep(a,j),!t.el){const t=a.subTree=yn(tn);b(null,t,e,n)}}else j(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(B(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,qe(t,!1),n?(n.el=l.el,V(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&An(e,u,n,l),qe(t,!0);const d=F(t);0;const p=t.subTree;t.subTree=d,v(p,d,f(p.el),Q(p),t,o,a),n.el=d.el,null===h&&z(t,d.el),s&&Fe(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Fe((()=>An(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=Et(e);if(qe(t,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&An(r,d,e),qe(t,!0),c&&nt){const n=()=>{t.subTree=F(t),nt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=F(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&Fe(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;Fe((()=>An(r,d,t)),o)}(256&e.shapeFlag||d&&Et(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&Fe(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>w(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,qe(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ye(t,e.props,i,n),De(t,e.children,n),(0,r.Jd)(),S(),(0,r.lk)()},q=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void H(u,h,n,r,i,s,o,a,c);if(256&f)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Y(u,i,s),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):Y(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},$=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?kn(e[f]):In(e[f]);v(t[f],r,n,null,s,o,a,c,u)}l>h?Y(t,s,o,!0,!1,d):O(e,n,r,s,o,a,c,u,d)},H=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?kn(e[l]):In(e[l]);if(!fn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?kn(e[f]):In(e[f]);if(!fn(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)v(null,e[l]=u?kn(e[l]):In(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const t=e[l]=u?kn(e[l]):In(e[l]);null!=t.key&&g.set(t.key,l)}let y,b=0;const w=f-m+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(b>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===T[y-m]&&fn(r,e[y])){i=y;break}void 0===i?K(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:_=!0,v(r,e[i],n,null,s,o,a,c,u),b++)}const S=_?$e(T):i.Z6;for(y=S.length-1,l=w-1;l>=0;l--){const t=m+l,i=e[t],d=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,d,s,o,a,c,u):_&&(y<0||l!==S[y]?G(i,n,d,2):y--)}}},G=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void G(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Qe){s(o,e,n);for(let t=0;t<u.length;t++)G(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===en)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),Fe((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},K=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&Me(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!Et(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&An(m,e,t),6&l)J(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&zt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,tt,r):u&&(s!==Qe||h>0&&64&h)?Y(u,e,n,!1,!0):(s===Qe&&384&h||!i&&16&l)&&Y(c,e,n),r&&W(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Fe((()=>{m&&An(m,e,t),f&&zt(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Qe)return void X(n,r);if(e===en)return void k(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,t,e,n)),c&&Fe(c,e),Fe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,r,i)},Q=t=>6&t.shapeFlag?Q(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),S(),I(),e._vnode=t},tt={p:v,um:K,m:G,r:W,mt:M,mc:O,pc:q,pbc:D,n:Q,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:Pe(Z,et)}}function qe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Be(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=kn(s[i]),e.el=t.el),n||Be(t,e))}}function $e(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const ze=t=>t.__isTeleport,He=t=>t&&(t.disabled||""===t.disabled),Ge=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,Ke=(t,e)=>{const n=t&&t.to;if((0,i.HD)(n)){if(e){const t=e(n);return t}return null}return n},We={__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,v=He(e.props);let{shapeFlag:y,children:b,dynamicChildren:w}=e;if(null==t){const t=e.el=m(""),u=e.anchor=m("");f(t,n,r),f(u,n,r);const h=e.target=Ke(e.props,p),d=e.targetAnchor=m("");h&&(f(d,h),o=o||Ge(h));const g=(t,e)=>{16&y&&l(b,t,e,i,s,o,a,c)};v?g(n,u):h&&g(h,d)}else{e.el=t.el;const r=e.anchor=t.anchor,l=e.target=t.target,f=e.targetAnchor=t.targetAnchor,m=He(t.props),g=m?n:l,y=m?r:f;if(o=o||Ge(l),w?(d(t.dynamicChildren,w,g,i,s,o,a),Be(t,e,!0)):c||h(t,e,g,y,i,s,o,a,!1),v)m||Xe(e,n,r,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=Ke(e.props,p);t&&Xe(e,t,null,u,0)}else m&&Xe(e,l,f,u,1)}},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&s(l),(o||!He(d))&&(s(u),16&a))for(let f=0;f<c.length;f++){const t=c[f];i(t,e,n,!0,!!t.dynamicChildren)}},move:Xe,hydrate:Je};function Xe(t,e,n,{o:{insert:r},m:i},s=2){0===s&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=2===s;if(h&&r(o,e,n),(!h||He(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],e,n,2);h&&r(a,e,n)}function Je(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=Ke(e.props,c);if(l){const c=l._lpa||l.firstChild;if(16&e.shapeFlag)if(He(e.props))e.anchor=u(o(t),e,a(t),n,r,i,s),e.targetAnchor=c;else{e.anchor=o(t);let a=c;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){e.targetAnchor=a,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(c,e,l,n,r,i,s)}}return e.anchor&&o(e.anchor)}const Ye=We,Qe=Symbol(void 0),Ze=Symbol(void 0),tn=Symbol(void 0),en=Symbol(void 0),nn=[];let rn=null;function sn(t=!1){nn.push(rn=t?null:[])}function on(){nn.pop(),rn=nn[nn.length-1]||null}let an=1;function cn(t){an+=t}function un(t){return t.dynamicChildren=an>0?rn||i.Z6:null,on(),an>0&&rn&&rn.push(t),t}function ln(t,e,n,r,i,s){return un(vn(t,e,n,r,i,s,!0))}function hn(t,e,n,r,i){return un(yn(t,e,n,r,i,!0))}function dn(t){return!!t&&!0===t.__v_isVNode}function fn(t,e){return t.type===e.type&&t.key===e.key}const pn="__vInternal",mn=({key:t})=>null!=t?t:null,gn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:D,r:t,k:e,f:!!n}:t:null;function vn(t,e=null,n=null,r=0,s=null,o=(t===Qe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mn(e),ref:e&&gn(e),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Cn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),an>0&&!a&&rn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&rn.push(u),u}const yn=bn;function bn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Kt||(t=tn),dn(t)){const r=_n(t,e,!0);return n&&Cn(r,n),an>0&&!a&&rn&&(6&r.shapeFlag?rn[rn.indexOf(t)]=r:rn.push(r)),r.patchFlag|=-2,r}if(Xn(t)&&(t=t.__vccOpts),e){e=wn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:H(t)?128:ze(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return vn(t,e,n,s,o,c,a,!0)}function wn(t){return t?(0,r.X3)(t)||pn in t?(0,i.l7)({},t):t:null}function _n(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?xn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&mn(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(gn(e)):[s,gn(e)]:gn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),el:t.el,anchor:t.anchor};return u}function En(t=" ",e=0){return yn(Ze,null,t,e)}function Tn(t,e){const n=yn(en,null,t);return n.staticCount=e,n}function Sn(t="",e=!1){return e?(sn(),hn(tn,null,t)):yn(tn,null,t)}function In(t){return null==t||"boolean"===typeof t?yn(tn):(0,i.kJ)(t)?yn(Qe,null,t.slice()):"object"===typeof t?kn(t):yn(Ze,null,String(t))}function kn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:_n(t)}function Cn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Cn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||pn in e?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.mf)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[En(e)]):n=8);t.children=e,t.shapeFlag|=n}function xn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function An(t,e,n,r=null){o(t,e,7,[n,r])}const On=Ne();let Rn=0;function Dn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||On,a={uid:Rn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_e(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=A.bind(null,a),t.ce&&t.ce(a),a}let Nn=null;const Ln=()=>Nn||D,Pn=t=>{Nn=t,t.scope.on()},Mn=()=>{Nn&&Nn.scope.off(),Nn=null};function Un(t){return 4&t.vnode.shapeFlag}let Fn,jn,Vn=!1;function qn(t,e=!1){Vn=e;const{props:n,children:r}=t.vnode,i=Un(t);ve(t,n,i,e),Re(t,r);const s=i?Bn(t,e):void 0;return Vn=!1,s}function Bn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,ne));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Gn(t):null;Pn(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),Mn(),(0,i.tI)(c)){if(c.then(Mn,Mn),e)return c.then((n=>{$n(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else $n(t,c,e)}else zn(t,e)}function $n(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),zn(t,n)}function zn(t,e,n){const s=t.type;if(!t.render){if(!e&&Fn&&!s.render){const e=s.template||ce(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Fn(e,c)}}t.render=s.render||i.dG,jn&&jn(t)}Pn(t),(0,r.Jd)(),ie(t),(0,r.lk)(),Mn()}function Hn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Gn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Hn(t))},slots:t.slots,emit:t.emit,expose:e}}function Kn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in ee?ee[n](t):void 0}}))}function Wn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Xn(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Jn=(t,e)=>(0,r.Fl)(t,e,Vn);function Yn(t){const e=Ln();let n=t();return Mn(),(0,i.tI)(n)&&(n=n.catch((t=>{throw Pn(e),t}))),[n,()=>Pn(e)]}function Qn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?dn(e)?yn(t,null,[e]):yn(t,e):yn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&dn(n)&&(n=[n]),yn(t,e,n))}Symbol("");const Zn="3.2.40"},9242:function(t,e,n){"use strict";n.d(e,{D2:function(){return vt},F8:function(){return yt},W3:function(){return it},iM:function(){return mt},nr:function(){return dt},ri:function(){return Tt},uT:function(){return F}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){for(const t in n)f(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const d=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);d.test(n)?t.setProperty((0,r.rs)(i),n.replace(d,""),"important"):t[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return m[e]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in t)return m[e]=n}return e}const v="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function b(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[w,_]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const T=Promise.resolve(),S=()=>{E=0},I=()=>E||(T.then(S),E=w());function k(t,e,n,r){t.addEventListener(e,n,r)}function C(t,e,n,r){t.removeEventListener(e,n,r)}function x(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=O(e);if(r){const o=s[e]=R(r,i);k(t,n,o,a)}else o&&(C(t,n,o,a),s[e]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function O(t){let e;if(A.test(t)){let n;e={};while(n=t.match(A))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}function R(t,e){const n=t=>{const r=t.timeStamp||w();(_||r>=n.attached-1)&&(0,i.$d)(D(t,n.value),e,5,[t])};return n.value=t,n.attached=I(),n}function D(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const N=/^on[a-z]/,L=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?l(t,i,s):"style"===e?h(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||x(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):P(t,e,i,s))?b(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function P(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&N.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!N.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",U="animation",F=(t,{slots:e})=>(0,i.h)(i.P$,$(t),e);F.displayName="Transition";const j={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=F.props=(0,r.l7)({},i.P$.props,j),q=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},B=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function $(t){const e={};for(const r in t)r in j||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=z(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:S=b,onAppearCancelled:I=w}=e,k=(t,e,n)=>{K(t,e?h:c),K(t,e?l:a),n&&n()},C=(t,e)=>{t._isLeaving=!1,K(t,d),K(t,p),K(t,f),e&&e()},x=t=>(e,n)=>{const r=t?S:b,s=()=>k(e,t,n);q(r,[e,s]),W((()=>{K(e,t?u:o),G(e,t?h:c),B(r)||J(e,i,g,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){q(y,[t]),G(t,o),G(t,a)},onBeforeAppear(t){q(T,[t]),G(t,u),G(t,l)},onEnter:x(!1),onAppear:x(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>C(t,e);G(t,d),tt(),G(t,f),W((()=>{t._isLeaving&&(K(t,d),G(t,p),B(_)||J(t,i,v,n))})),q(_,[t,n])},onEnterCancelled(t){k(t,!1),q(w,[t])},onAppearCancelled(t){k(t,!0),q(I,[t])},onLeaveCancelled(t){C(t),q(E,[t])}})}function z(t){if(null==t)return null;if((0,r.Kn)(t))return[H(t.enter),H(t.leave)];{const e=H(t);return[e,e]}}function H(t){const e=(0,r.He)(t);return e}function G(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function W(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let X=0;function J(t,e,n,r){const i=t._endId=++X,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Y(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function Y(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(M+"Delay"),s=r(M+"Duration"),o=Q(i,s),a=r(U+"Delay"),c=r(U+"Duration"),u=Q(a,c);let l=null,h=0,d=0;e===M?o>0&&(l=M,h=o,d=s.length):e===U?u>0&&(l=U,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?M:U:null,d=l?l===M?s.length:c.length:0);const f=l===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Z(e)+Z(t[n]))))}function Z(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function tt(){return document.body.offsetHeight}const et=new WeakMap,nt=new WeakMap,rt={name:"TransitionGroup",props:(0,r.l7)({},V,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ct(o[0].el,n.vnode.el,e))return;o.forEach(st),o.forEach(ot);const r=o.filter(at);tt(),r.forEach((t=>{const n=t.el,r=n.style;G(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,K(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(t),u=$(c);let l=c.tag||i.HY;o=a,a=e.default?(0,i.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.nK)(e,(0,i.U2)(e,u,r,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,i.nK)(e,(0,i.U2)(e,u,r,n)),et.set(e,e.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}},it=rt;function st(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ot(t){nt.set(t,t.el.getBoundingClientRect())}function at(t){const e=et.get(t),n=nt.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function ct(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=Y(r);return i.removeChild(r),s}const ut=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function lt(t){t.target.composing=!0}function ht(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ut(s);const o=i||s.props&&"number"===s.props.type;k(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.He)(i)),t._assign(i)})),n&&k(t,"change",(()=>{t.value=t.value.trim()})),e||(k(t,"compositionstart",lt),k(t,"compositionend",ht),k(t,"change",ht))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=ut(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const ft=["ctrl","shift","alt","meta"],pt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ft.some((n=>t[`${n}Key`]&&!e.includes(n)))},mt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=pt[e[t]];if(r&&r(n,e))return}return t(n,...r)},gt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vt=(t,e)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return e.some((t=>t===i||gt[t]===i))?t(n):void 0},yt={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):bt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),bt(t,!0),r.enter(t)):r.leave(t,(()=>{bt(t,!1)})):bt(t,e))},beforeUnmount(t,{value:e}){bt(t,e)}};function bt(t,e){t.style.display=e?t._vod:"none"}const wt=(0,r.l7)({patchProp:L},u);let _t;function Et(){return _t||(_t=(0,i.Us)(wt))}const Tt=(...t)=>{const e=Et().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=St(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function St(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";n.d(e,{C_:function(){return f},DM:function(){return D},E9:function(){return rt},F7:function(){return S},Gg:function(){return z},HD:function(){return P},He:function(){return et},Kn:function(){return U},NO:function(){return E},Nj:function(){return tt},Od:function(){return C},PO:function(){return B},Pq:function(){return a},RI:function(){return A},S0:function(){return $},W7:function(){return q},WV:function(){return m},Z6:function(){return w},_A:function(){return K},_N:function(){return R},aU:function(){return Q},dG:function(){return _},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return O},kT:function(){return b},l7:function(){return k},mf:function(){return L},rs:function(){return X},tI:function(){return F},tR:function(){return I},yA:function(){return c},yk:function(){return M},zw:function(){return v}});n(7658);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=P(r)?d(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return P(t)||U(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(P(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(U(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=m(t[r],e[r]);return n}function m(t,e){if(t===e)return!0;let n=N(t),r=N(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=M(t),r=M(e),n||r)return t===e;if(n=O(t),r=O(e),n||r)return!(!n||!r)&&p(t,e);if(n=U(t),r=U(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const v=t=>P(t)?t:null==t?"":O(t)||U(t)&&(t.toString===j||!L(t.toString))?JSON.stringify(t,y,2):String(t),y=(t,e)=>e&&e.__v_isRef?y(t,e.value):R(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!U(e)||O(e)||B(e)?e:String(e),b={},w=[],_=()=>{},E=()=>!1,T=/^on[^a-z]/,S=t=>T.test(t),I=t=>t.startsWith("onUpdate:"),k=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},x=Object.prototype.hasOwnProperty,A=(t,e)=>x.call(t,e),O=Array.isArray,R=t=>"[object Map]"===V(t),D=t=>"[object Set]"===V(t),N=t=>"[object Date]"===V(t),L=t=>"function"===typeof t,P=t=>"string"===typeof t,M=t=>"symbol"===typeof t,U=t=>null!==t&&"object"===typeof t,F=t=>U(t)&&L(t.then)&&L(t.catch),j=Object.prototype.toString,V=t=>j.call(t),q=t=>V(t).slice(8,-1),B=t=>"[object Object]"===V(t),$=t=>P(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},G=/-(\w)/g,K=H((t=>t.replace(G,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,X=H((t=>t.replace(W,"-$1").toLowerCase())),J=H((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=H((t=>t?`on${J(t)}`:"")),Q=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},5743:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,o=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:a,D:d,h:o,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=g;var _=function(t){return t instanceof I},E=function t(e,n,r){var i;if(!e)return b;if("string"==typeof e){var s=e.toLowerCase();w[s]&&(i=s),n&&(w[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;w[a]=e,i=a}return!r&&i&&(b=i),i||!r&&b},T=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new I(n)},S=y;S.l=E,S.i=_,S.w=function(t,e){return T(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var I=function(){function g(t){this.$L=E(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=T(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return T(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<T(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!S.u(e)||e,l=S.p(t),f=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},p=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case u:return r?f(1,g):f(0,g+1);case c:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?v-w:v+(6-w),g);case a:case d:return p(y+"Hours",0);case o:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,c=S.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[a]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[o]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===a?this.$D+(e-this.$W):e;if(c===u||c===h){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,l){var d,f=this;r=Number(r);var p=S.p(l),m=function(t){var e=T(f);return S.w(e.date(e.date()+Math.round(t*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===h)return this.set(h,this.$y+r);if(p===a)return m(1);if(p===c)return m(7);var g=(d={},d[s]=e,d[o]=n,d[i]=t,d)[p]||1,v=this.$d.getTime()+r*g;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,o=this.$m,a=this.$M,c=n.weekdays,u=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return S.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:l(n.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:S.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||p[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,f){var p,m=S.p(d),g=T(r),v=(g.utcOffset()-this.utcOffset())*e,y=this-g,b=S.m(this,g);return b=(p={},p[h]=b/12,p[u]=b,p[l]=b/3,p[c]=(y-v)/6048e5,p[a]=(y-v)/864e5,p[o]=y/n,p[s]=y/e,p[i]=y/t,p)[m]||y,f?b:S.a(b)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return w[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=E(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),k=I.prototype;return T.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",u],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),T.extend=function(t,e){return t.$i||(t(e,I,T),t.$i=!0),T},T.locale=E,T.isDayjs=_,T.unix=function(t){return T(1e3*t)},T.en=w[b],T.Ls=w,T.p={},T}))},1148:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){e.prototype.isToday=function(){var t="YYYY-MM-DD",e=n();return this.format(t)===e.format(t)}}}))},893:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,o,a){for(var c,u,l,h=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,p=0;p<f;p+=1){var m=d[p];m.d&&(c=o?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var g=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,g<=m.r||!m.r){g<=1&&p>0&&(m=d[p-1]);var v=h[m.l];a&&(g=a(""+g)),u="string"==typeof v?v.replace("%d",g):v(g,r,m.l,l);break}}if(r)return u;var y=l?h.future:h.past;return"function"==typeof y?y(u):y.replace("%s",u)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}}}))},976:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){n.updateLocale=function(t,e){var r=n.Ls[t];if(r)return(e?Object.keys(e):[]).forEach((function(t){r[t]=e[t]})),r}}}))},7669:function(t){"use strict";var e=function(t){return n(t)&&!r(t)};function n(t){return!!t&&"object"===typeof t}function r(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||o(t)}var i="function"===typeof Symbol&&Symbol.for,s=i?Symbol.for("react.element"):60103;function o(t){return t.$$typeof===s}function a(t){return Array.isArray(t)?[]:{}}function c(t,e){return!1!==e.clone&&e.isMergeableObject(t)?g(a(t),t,e):t}function u(t,e,n){return t.concat(e).map((function(t){return c(t,n)}))}function l(t,e){if(!e.customMerge)return g;var n=e.customMerge(t);return"function"===typeof n?n:g}function h(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}function d(t){return Object.keys(t).concat(h(t))}function f(t,e){try{return e in t}catch(n){return!1}}function p(t,e){return f(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function m(t,e,n){var r={};return n.isMergeableObject(t)&&d(t).forEach((function(e){r[e]=c(t[e],n)})),d(e).forEach((function(i){p(t,i)||(f(t,i)&&n.isMergeableObject(e[i])?r[i]=l(i,n)(t[i],e[i],n):r[i]=c(e[i],n))})),r}function g(t,n,r){r=r||{},r.arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||e,r.cloneUnlessOtherwiseSpecified=c;var i=Array.isArray(n),s=Array.isArray(t),o=i===s;return o?i?r.arrayMerge(t,n,r):m(t,n,r):c(n,r)}g.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return g(t,n,e)}),{})};var v=g;t.exports=v},4049:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.attributeNames=e.elementNames=void 0,e.elementNames=new Map([["altglyph","altGlyph"],["altglyphdef","altGlyphDef"],["altglyphitem","altGlyphItem"],["animatecolor","animateColor"],["animatemotion","animateMotion"],["animatetransform","animateTransform"],["clippath","clipPath"],["feblend","feBlend"],["fecolormatrix","feColorMatrix"],["fecomponenttransfer","feComponentTransfer"],["fecomposite","feComposite"],["feconvolvematrix","feConvolveMatrix"],["fediffuselighting","feDiffuseLighting"],["fedisplacementmap","feDisplacementMap"],["fedistantlight","feDistantLight"],["fedropshadow","feDropShadow"],["feflood","feFlood"],["fefunca","feFuncA"],["fefuncb","feFuncB"],["fefuncg","feFuncG"],["fefuncr","feFuncR"],["fegaussianblur","feGaussianBlur"],["feimage","feImage"],["femerge","feMerge"],["femergenode","feMergeNode"],["femorphology","feMorphology"],["feoffset","feOffset"],["fepointlight","fePointLight"],["fespecularlighting","feSpecularLighting"],["fespotlight","feSpotLight"],["fetile","feTile"],["feturbulence","feTurbulence"],["foreignobject","foreignObject"],["glyphref","glyphRef"],["lineargradient","linearGradient"],["radialgradient","radialGradient"],["textpath","textPath"]]),e.attributeNames=new Map([["definitionurl","definitionURL"],["attributename","attributeName"],["attributetype","attributeType"],["basefrequency","baseFrequency"],["baseprofile","baseProfile"],["calcmode","calcMode"],["clippathunits","clipPathUnits"],["diffuseconstant","diffuseConstant"],["edgemode","edgeMode"],["filterunits","filterUnits"],["glyphref","glyphRef"],["gradienttransform","gradientTransform"],["gradientunits","gradientUnits"],["kernelmatrix","kernelMatrix"],["kernelunitlength","kernelUnitLength"],["keypoints","keyPoints"],["keysplines","keySplines"],["keytimes","keyTimes"],["lengthadjust","lengthAdjust"],["limitingconeangle","limitingConeAngle"],["markerheight","markerHeight"],["markerunits","markerUnits"],["markerwidth","markerWidth"],["maskcontentunits","maskContentUnits"],["maskunits","maskUnits"],["numoctaves","numOctaves"],["pathlength","pathLength"],["patterncontentunits","patternContentUnits"],["patterntransform","patternTransform"],["patternunits","patternUnits"],["pointsatx","pointsAtX"],["pointsaty","pointsAtY"],["pointsatz","pointsAtZ"],["preservealpha","preserveAlpha"],["preserveaspectratio","preserveAspectRatio"],["primitiveunits","primitiveUnits"],["refx","refX"],["refy","refY"],["repeatcount","repeatCount"],["repeatdur","repeatDur"],["requiredextensions","requiredExtensions"],["requiredfeatures","requiredFeatures"],["specularconstant","specularConstant"],["specularexponent","specularExponent"],["spreadmethod","spreadMethod"],["startoffset","startOffset"],["stddeviation","stdDeviation"],["stitchtiles","stitchTiles"],["surfacescale","surfaceScale"],["systemlanguage","systemLanguage"],["tablevalues","tableValues"],["targetx","targetX"],["targety","targetY"],["textlength","textLength"],["viewbox","viewBox"],["viewtarget","viewTarget"],["xchannelselector","xChannelSelector"],["ychannelselector","yChannelSelector"],["zoomandpan","zoomAndPan"]])},2428:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return s(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(8761)),c=n(3246),u=n(4049),l=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]);function h(t,e){if(t)return Object.keys(t).map((function(n){var r,i,s=null!==(r=t[n])&&void 0!==r?r:"";return"foreign"===e.xmlMode&&(n=null!==(i=u.attributeNames.get(n))&&void 0!==i?i:n),e.emptyAttrs||e.xmlMode||""!==s?n+'="'+(!1!==e.decodeEntities?c.encodeXML(s):s.replace(/"/g,"&quot;"))+'"':n})).join(" ")}var d=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);function f(t,e){void 0===e&&(e={});for(var n=("length"in t?t:[t]),r="",i=0;i<n.length;i++)r+=p(n[i],e);return r}function p(t,e){switch(t.type){case a.Root:return f(t.children,e);case a.Directive:case a.Doctype:return y(t);case a.Comment:return _(t);case a.CDATA:return w(t);case a.Script:case a.Style:case a.Tag:return v(t,e);case a.Text:return b(t,e)}}e["default"]=f;var m=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),g=new Set(["svg","math"]);function v(t,e){var n;"foreign"===e.xmlMode&&(t.name=null!==(n=u.elementNames.get(t.name))&&void 0!==n?n:t.name,t.parent&&m.has(t.parent.name)&&(e=r(r({},e),{xmlMode:!1}))),!e.xmlMode&&g.has(t.name)&&(e=r(r({},e),{xmlMode:"foreign"}));var i="<"+t.name,s=h(t.attribs,e);return s&&(i+=" "+s),0===t.children.length&&(e.xmlMode?!1!==e.selfClosingTags:e.selfClosingTags&&d.has(t.name))?(e.xmlMode||(i+=" "),i+="/>"):(i+=">",t.children.length>0&&(i+=f(t.children,e)),!e.xmlMode&&d.has(t.name)||(i+="</"+t.name+">")),i}function y(t){return"<"+t.data+">"}function b(t,e){var n=t.data||"";return!1===e.decodeEntities||!e.xmlMode&&t.parent&&l.has(t.parent.name)||(n=c.encodeXML(n)),n}function w(t){return"<![CDATA["+t.children[0].data+"]]>"}function _(t){return"\x3c!--"+t.data+"--\x3e"}},8761:function(t,e){"use strict";var n;function r(t){return t.type===n.Tag||t.type===n.Script||t.type===n.Style}Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0,function(t){t["Root"]="root",t["Text"]="text",t["Directive"]="directive",t["Comment"]="comment",t["Script"]="script",t["Style"]="style",t["Tag"]="tag",t["CDATA"]="cdata",t["Doctype"]="doctype"}(n=e.ElementType||(e.ElementType={})),e.isTag=r,e.Root=n.Root,e.Text=n.Text,e.Directive=n.Directive,e.Comment=n.Comment,e.Script=n.Script,e.Style=n.Style,e.Tag=n.Tag,e.CDATA=n.CDATA,e.Doctype=n.Doctype},8717:function(t,e,n){"use strict";n(7658);var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var s=n(8761),o=n(21);i(n(21),e);var a=/\s+/g,c={normalizeWhitespace:!1,withStartIndices:!1,withEndIndices:!1,xmlMode:!1},u=function(){function t(t,e,n){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"===typeof e&&(n=e,e=c),"object"===typeof t&&(e=t,t=void 0),this.callback=null!==t&&void 0!==t?t:null,this.options=null!==e&&void 0!==e?e:c,this.elementCB=null!==n&&void 0!==n?n:null}return t.prototype.onparserinit=function(t){this.parser=t},t.prototype.onreset=function(){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},t.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},t.prototype.onerror=function(t){this.handleCallback(t)},t.prototype.onclosetag=function(){this.lastNode=null;var t=this.tagStack.pop();this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(t)},t.prototype.onopentag=function(t,e){var n=this.options.xmlMode?s.ElementType.Tag:void 0,r=new o.Element(t,e,void 0,n);this.addNode(r),this.tagStack.push(r)},t.prototype.ontext=function(t){var e=this.options.normalizeWhitespace,n=this.lastNode;if(n&&n.type===s.ElementType.Text)e?n.data=(n.data+t).replace(a," "):n.data+=t,this.options.withEndIndices&&(n.endIndex=this.parser.endIndex);else{e&&(t=t.replace(a," "));var r=new o.Text(t);this.addNode(r),this.lastNode=r}},t.prototype.oncomment=function(t){if(this.lastNode&&this.lastNode.type===s.ElementType.Comment)this.lastNode.data+=t;else{var e=new o.Comment(t);this.addNode(e),this.lastNode=e}},t.prototype.oncommentend=function(){this.lastNode=null},t.prototype.oncdatastart=function(){var t=new o.Text(""),e=new o.NodeWithChildren(s.ElementType.CDATA,[t]);this.addNode(e),t.parent=e,this.lastNode=t},t.prototype.oncdataend=function(){this.lastNode=null},t.prototype.onprocessinginstruction=function(t,e){var n=new o.ProcessingInstruction(t,e);this.addNode(n)},t.prototype.handleCallback=function(t){if("function"===typeof this.callback)this.callback(t,this.dom);else if(t)throw t},t.prototype.addNode=function(t){var e=this.tagStack[this.tagStack.length-1],n=e.children[e.children.length-1];this.options.withStartIndices&&(t.startIndex=this.parser.startIndex),this.options.withEndIndices&&(t.endIndex=this.parser.endIndex),e.children.push(t),n&&(t.prev=n,n.next=t),t.parent=e,this.lastNode=null},t}();e.DomHandler=u,e["default"]=u},21:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.cloneNode=e.hasChildren=e.isDocument=e.isDirective=e.isComment=e.isText=e.isCDATA=e.isTag=e.Element=e.Document=e.NodeWithChildren=e.ProcessingInstruction=e.Comment=e.Text=e.DataNode=e.Node=void 0;var s=n(8761),o=new Map([[s.ElementType.Tag,1],[s.ElementType.Script,1],[s.ElementType.Style,1],[s.ElementType.Directive,1],[s.ElementType.Text,3],[s.ElementType.CDATA,4],[s.ElementType.Comment,8],[s.ElementType.Root,9]]),a=function(){function t(t){this.type=t,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(t.prototype,"nodeType",{get:function(){var t;return null!==(t=o.get(this.type))&&void 0!==t?t:1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),t.prototype.cloneNode=function(t){return void 0===t&&(t=!1),E(this,t)},t}();e.Node=a;var c=function(t){function e(e,n){var r=t.call(this,e)||this;return r.data=n,r}return r(e,t),Object.defineProperty(e.prototype,"nodeValue",{get:function(){return this.data},set:function(t){this.data=t},enumerable:!1,configurable:!0}),e}(a);e.DataNode=c;var u=function(t){function e(e){return t.call(this,s.ElementType.Text,e)||this}return r(e,t),e}(c);e.Text=u;var l=function(t){function e(e){return t.call(this,s.ElementType.Comment,e)||this}return r(e,t),e}(c);e.Comment=l;var h=function(t){function e(e,n){var r=t.call(this,s.ElementType.Directive,n)||this;return r.name=e,r}return r(e,t),e}(c);e.ProcessingInstruction=h;var d=function(t){function e(e,n){var r=t.call(this,e)||this;return r.children=n,r}return r(e,t),Object.defineProperty(e.prototype,"firstChild",{get:function(){var t;return null!==(t=this.children[0])&&void 0!==t?t:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"childNodes",{get:function(){return this.children},set:function(t){this.children=t},enumerable:!1,configurable:!0}),e}(a);e.NodeWithChildren=d;var f=function(t){function e(e){return t.call(this,s.ElementType.Root,e)||this}return r(e,t),e}(d);e.Document=f;var p=function(t){function e(e,n,r,i){void 0===r&&(r=[]),void 0===i&&(i="script"===e?s.ElementType.Script:"style"===e?s.ElementType.Style:s.ElementType.Tag);var o=t.call(this,i,r)||this;return o.name=e,o.attribs=n,o}return r(e,t),Object.defineProperty(e.prototype,"tagName",{get:function(){return this.name},set:function(t){this.name=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"attributes",{get:function(){var t=this;return Object.keys(this.attribs).map((function(e){var n,r;return{name:e,value:t.attribs[e],namespace:null===(n=t["x-attribsNamespace"])||void 0===n?void 0:n[e],prefix:null===(r=t["x-attribsPrefix"])||void 0===r?void 0:r[e]}}))},enumerable:!1,configurable:!0}),e}(d);function m(t){return(0,s.isTag)(t)}function g(t){return t.type===s.ElementType.CDATA}function v(t){return t.type===s.ElementType.Text}function y(t){return t.type===s.ElementType.Comment}function b(t){return t.type===s.ElementType.Directive}function w(t){return t.type===s.ElementType.Root}function _(t){return Object.prototype.hasOwnProperty.call(t,"children")}function E(t,e){var n;if(void 0===e&&(e=!1),v(t))n=new u(t.data);else if(y(t))n=new l(t.data);else if(m(t)){var r=e?T(t.children):[],o=new p(t.name,i({},t.attribs),r);r.forEach((function(t){return t.parent=o})),null!=t.namespace&&(o.namespace=t.namespace),t["x-attribsNamespace"]&&(o["x-attribsNamespace"]=i({},t["x-attribsNamespace"])),t["x-attribsPrefix"]&&(o["x-attribsPrefix"]=i({},t["x-attribsPrefix"])),n=o}else if(g(t)){r=e?T(t.children):[];var a=new d(s.ElementType.CDATA,r);r.forEach((function(t){return t.parent=a})),n=a}else if(w(t)){r=e?T(t.children):[];var c=new f(r);r.forEach((function(t){return t.parent=c})),t["x-mode"]&&(c["x-mode"]=t["x-mode"]),n=c}else{if(!b(t))throw new Error("Not implemented yet: ".concat(t.type));var _=new h(t.name,t.data);null!=t["x-name"]&&(_["x-name"]=t["x-name"],_["x-publicId"]=t["x-publicId"],_["x-systemId"]=t["x-systemId"]),n=_}return n.startIndex=t.startIndex,n.endIndex=t.endIndex,null!=t.sourceCodeLocation&&(n.sourceCodeLocation=t.sourceCodeLocation),n}function T(t){for(var e=t.map((function(t){return E(t,!0)})),n=1;n<e.length;n++)e[n].prev=e[n-1],e[n-1].next=e[n];return e}e.Element=p,e.isTag=m,e.isCDATA=g,e.isText=v,e.isComment=y,e.isDirective=b,e.isDocument=w,e.hasChildren=_,e.cloneNode=E},4194:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getFeed=void 0;var r=n(2717),i=n(6768);function s(t){var e=h(p,t);return e?"feed"===e.name?o(e):a(e):null}function o(t){var e,n=t.children,r={type:"atom",items:(0,i.getElementsByTagName)("entry",n).map((function(t){var e,n=t.children,r={media:l(n)};f(r,"id","id",n),f(r,"title","title",n);var i=null===(e=h("link",n))||void 0===e?void 0:e.attribs.href;i&&(r.link=i);var s=d("summary",n)||d("content",n);s&&(r.description=s);var o=d("updated",n);return o&&(r.pubDate=new Date(o)),r}))};f(r,"id","id",n),f(r,"title","title",n);var s=null===(e=h("link",n))||void 0===e?void 0:e.attribs.href;s&&(r.link=s),f(r,"description","subtitle",n);var o=d("updated",n);return o&&(r.updated=new Date(o)),f(r,"author","email",n,!0),r}function a(t){var e,n,r=null!==(n=null===(e=h("channel",t.children))||void 0===e?void 0:e.children)&&void 0!==n?n:[],s={type:t.name.substr(0,3),id:"",items:(0,i.getElementsByTagName)("item",t.children).map((function(t){var e=t.children,n={media:l(e)};f(n,"id","guid",e),f(n,"title","title",e),f(n,"link","link",e),f(n,"description","description",e);var r=d("pubDate",e);return r&&(n.pubDate=new Date(r)),n}))};f(s,"title","title",r),f(s,"link","link",r),f(s,"description","description",r);var o=d("lastBuildDate",r);return o&&(s.updated=new Date(o)),f(s,"author","managingEditor",r,!0),s}e.getFeed=s;var c=["url","type","lang"],u=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function l(t){return(0,i.getElementsByTagName)("media:content",t).map((function(t){for(var e=t.attribs,n={medium:e.medium,isDefault:!!e.isDefault},r=0,i=c;r<i.length;r++){var s=i[r];e[s]&&(n[s]=e[s])}for(var o=0,a=u;o<a.length;o++){s=a[o];e[s]&&(n[s]=parseInt(e[s],10))}return e.expression&&(n.expression=e.expression),n}))}function h(t,e){return(0,i.getElementsByTagName)(t,e,!0,1)[0]}function d(t,e,n){return void 0===n&&(n=!1),(0,r.textContent)((0,i.getElementsByTagName)(t,e,n,1)).trim()}function f(t,e,n,r,i){void 0===i&&(i=!1);var s=d(n,r,i);s&&(t[e]=s)}function p(t){return"rss"===t||"feed"===t||"rdf:RDF"===t}},8244:function(t,e,n){"use strict";n(541),Object.defineProperty(e,"__esModule",{value:!0}),e.uniqueSort=e.compareDocumentPosition=e.removeSubsets=void 0;var r=n(8717);function i(t){var e=t.length;while(--e>=0){var n=t[e];if(e>0&&t.lastIndexOf(n,e-1)>=0)t.splice(e,1);else for(var r=n.parent;r;r=r.parent)if(t.includes(r)){t.splice(e,1);break}}return t}function s(t,e){var n=[],i=[];if(t===e)return 0;var s=(0,r.hasChildren)(t)?t:t.parent;while(s)n.unshift(s),s=s.parent;s=(0,r.hasChildren)(e)?e:e.parent;while(s)i.unshift(s),s=s.parent;var o=Math.min(n.length,i.length),a=0;while(a<o&&n[a]===i[a])a++;if(0===a)return 1;var c=n[a-1],u=c.children,l=n[a],h=i[a];return u.indexOf(l)>u.indexOf(h)?c===e?20:4:c===t?10:2}function o(t){return t=t.filter((function(t,e,n){return!n.includes(t,e+1)})),t.sort((function(t,e){var n=s(t,e);return 2&n?-1:4&n?1:0})),t}e.removeSubsets=i,e.compareDocumentPosition=s,e.uniqueSort=o},2165:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.hasChildren=e.isDocument=e.isComment=e.isText=e.isCDATA=e.isTag=void 0,i(n(2717),e),i(n(1050),e),i(n(1669),e),i(n(1418),e),i(n(6768),e),i(n(8244),e),i(n(4194),e);var s=n(8717);Object.defineProperty(e,"isTag",{enumerable:!0,get:function(){return s.isTag}}),Object.defineProperty(e,"isCDATA",{enumerable:!0,get:function(){return s.isCDATA}}),Object.defineProperty(e,"isText",{enumerable:!0,get:function(){return s.isText}}),Object.defineProperty(e,"isComment",{enumerable:!0,get:function(){return s.isComment}}),Object.defineProperty(e,"isDocument",{enumerable:!0,get:function(){return s.isDocument}}),Object.defineProperty(e,"hasChildren",{enumerable:!0,get:function(){return s.hasChildren}})},6768:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getElementsByTagType=e.getElementsByTagName=e.getElementById=e.getElements=e.testElement=void 0;var r=n(8717),i=n(1418),s={tag_name:function(t){return"function"===typeof t?function(e){return(0,r.isTag)(e)&&t(e.name)}:"*"===t?r.isTag:function(e){return(0,r.isTag)(e)&&e.name===t}},tag_type:function(t){return"function"===typeof t?function(e){return t(e.type)}:function(e){return e.type===t}},tag_contains:function(t){return"function"===typeof t?function(e){return(0,r.isText)(e)&&t(e.data)}:function(e){return(0,r.isText)(e)&&e.data===t}}};function o(t,e){return"function"===typeof e?function(n){return(0,r.isTag)(n)&&e(n.attribs[t])}:function(n){return(0,r.isTag)(n)&&n.attribs[t]===e}}function a(t,e){return function(n){return t(n)||e(n)}}function c(t){var e=Object.keys(t).map((function(e){var n=t[e];return Object.prototype.hasOwnProperty.call(s,e)?s[e](n):o(e,n)}));return 0===e.length?null:e.reduce(a)}function u(t,e){var n=c(t);return!n||n(e)}function l(t,e,n,r){void 0===r&&(r=1/0);var s=c(t);return s?(0,i.filter)(s,e,n,r):[]}function h(t,e,n){return void 0===n&&(n=!0),Array.isArray(e)||(e=[e]),(0,i.findOne)(o("id",t),e,n)}function d(t,e,n,r){return void 0===n&&(n=!0),void 0===r&&(r=1/0),(0,i.filter)(s.tag_name(t),e,n,r)}function f(t,e,n,r){return void 0===n&&(n=!0),void 0===r&&(r=1/0),(0,i.filter)(s.tag_type(t),e,n,r)}e.testElement=u,e.getElements=l,e.getElementById=h,e.getElementsByTagName=d,e.getElementsByTagType=f},1669:function(t,e,n){"use strict";function r(t){if(t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t.parent){var e=t.parent.children;e.splice(e.lastIndexOf(t),1)}}function i(t,e){var n=e.prev=t.prev;n&&(n.next=e);var r=e.next=t.next;r&&(r.prev=e);var i=e.parent=t.parent;if(i){var s=i.children;s[s.lastIndexOf(t)]=e}}function s(t,e){if(r(e),e.next=null,e.parent=t,t.children.push(e)>1){var n=t.children[t.children.length-2];n.next=e,e.prev=n}else e.prev=null}function o(t,e){r(e);var n=t.parent,i=t.next;if(e.next=i,e.prev=t,t.next=e,e.parent=n,i){if(i.prev=e,n){var s=n.children;s.splice(s.lastIndexOf(i),0,e)}}else n&&n.children.push(e)}function a(t,e){if(r(e),e.parent=t,e.prev=null,1!==t.children.unshift(e)){var n=t.children[1];n.prev=e,e.next=n}else e.next=null}function c(t,e){r(e);var n=t.parent;if(n){var i=n.children;i.splice(i.indexOf(t),0,e)}t.prev&&(t.prev.next=e),e.parent=n,e.prev=t.prev,e.next=t,t.prev=e}n(7658),n(541),Object.defineProperty(e,"__esModule",{value:!0}),e.prepend=e.prependChild=e.append=e.appendChild=e.replaceElement=e.removeElement=void 0,e.removeElement=r,e.replaceElement=i,e.appendChild=s,e.append=o,e.prependChild=a,e.prepend=c},1418:function(t,e,n){"use strict";n(7658),n(541),Object.defineProperty(e,"__esModule",{value:!0}),e.findAll=e.existsOne=e.findOne=e.findOneChild=e.find=e.filter=void 0;var r=n(8717);function i(t,e,n,r){return void 0===n&&(n=!0),void 0===r&&(r=1/0),Array.isArray(e)||(e=[e]),s(t,e,n,r)}function s(t,e,n,i){for(var o=[],a=0,c=e;a<c.length;a++){var u=c[a];if(t(u)&&(o.push(u),--i<=0))break;if(n&&(0,r.hasChildren)(u)&&u.children.length>0){var l=s(t,u.children,n,i);if(o.push.apply(o,l),i-=l.length,i<=0)break}}return o}function o(t,e){return e.find(t)}function a(t,e,n){void 0===n&&(n=!0);for(var i=null,s=0;s<e.length&&!i;s++){var o=e[s];(0,r.isTag)(o)&&(t(o)?i=o:n&&o.children.length>0&&(i=a(t,o.children)))}return i}function c(t,e){return e.some((function(e){return(0,r.isTag)(e)&&(t(e)||e.children.length>0&&c(t,e.children))}))}function u(t,e){var n,i,s=[],o=e.filter(r.isTag);while(i=o.shift()){var a=null===(n=i.children)||void 0===n?void 0:n.filter(r.isTag);a&&a.length>0&&o.unshift.apply(o,a),t(i)&&s.push(i)}return s}e.filter=i,e.find=s,e.findOneChild=o,e.findOne=a,e.existsOne=c,e.findAll=u},2717:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.innerText=e.textContent=e.getText=e.getInnerHTML=e.getOuterHTML=void 0;var i=n(8717),s=r(n(2428)),o=n(8761);function a(t,e){return(0,s.default)(t,e)}function c(t,e){return(0,i.hasChildren)(t)?t.children.map((function(t){return a(t,e)})).join(""):""}function u(t){return Array.isArray(t)?t.map(u).join(""):(0,i.isTag)(t)?"br"===t.name?"\n":u(t.children):(0,i.isCDATA)(t)?u(t.children):(0,i.isText)(t)?t.data:""}function l(t){return Array.isArray(t)?t.map(l).join(""):(0,i.hasChildren)(t)&&!(0,i.isComment)(t)?l(t.children):(0,i.isText)(t)?t.data:""}function h(t){return Array.isArray(t)?t.map(h).join(""):(0,i.hasChildren)(t)&&(t.type===o.ElementType.Tag||(0,i.isCDATA)(t))?h(t.children):(0,i.isText)(t)?t.data:""}e.getOuterHTML=a,e.getInnerHTML=c,e.getText=u,e.textContent=l,e.innerText=h},1050:function(t,e,n){"use strict";n(541),n(7658),Object.defineProperty(e,"__esModule",{value:!0}),e.prevElementSibling=e.nextElementSibling=e.getName=e.hasAttrib=e.getAttributeValue=e.getSiblings=e.getParent=e.getChildren=void 0;var r=n(8717),i=[];function s(t){var e;return null!==(e=t.children)&&void 0!==e?e:i}function o(t){return t.parent||null}function a(t){var e,n,r=o(t);if(null!=r)return s(r);var i=[t],a=t.prev,c=t.next;while(null!=a)i.unshift(a),e=a,a=e.prev;while(null!=c)i.push(c),n=c,c=n.next;return i}function c(t,e){var n;return null===(n=t.attribs)||void 0===n?void 0:n[e]}function u(t,e){return null!=t.attribs&&Object.prototype.hasOwnProperty.call(t.attribs,e)&&null!=t.attribs[e]}function l(t){return t.name}function h(t){var e,n=t.next;while(null!==n&&!(0,r.isTag)(n))e=n,n=e.next;return n}function d(t){var e,n=t.prev;while(null!==n&&!(0,r.isTag)(n))e=n,n=e.prev;return n}e.getChildren=s,e.getParent=o,e.getSiblings=a,e.getAttributeValue=c,e.hasAttrib=u,e.getName=l,e.nextElementSibling=h,e.prevElementSibling=d},9441:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.decodeHTML=e.decodeHTMLStrict=e.decodeXML=void 0;var i=r(n(9323)),s=r(n(9591)),o=r(n(2586)),a=r(n(8065)),c=/&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;function u(t){var e=h(t);return function(t){return String(t).replace(c,e)}}e.decodeXML=u(o.default),e.decodeHTMLStrict=u(i.default);var l=function(t,e){return t<e?1:-1};function h(t){return function(e){if("#"===e.charAt(1)){var n=e.charAt(2);return"X"===n||"x"===n?a.default(parseInt(e.substr(3),16)):a.default(parseInt(e.substr(2),10))}return t[e.slice(1,-1)]||e}}e.decodeHTML=function(){for(var t=Object.keys(s.default).sort(l),e=Object.keys(i.default).sort(l),n=0,r=0;n<e.length;n++)t[r]===e[n]?(e[n]+=";?",r++):e[n]+=";";var o=new RegExp("&(?:"+e.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),a=h(i.default);function c(t){return";"!==t.substr(-1)&&(t+=";"),a(t)}return function(t){return String(t).replace(o,c)}}()},8065:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(3600)),s=String.fromCodePoint||function(t){var e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t),e+=String.fromCharCode(t),e};function o(t){return t>=55296&&t<=57343||t>1114111?"�":(t in i.default&&(t=i.default[t]),s(t))}e["default"]=o},2336:function(t,e,n){"use strict";n(7658),n(541);var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.escapeUTF8=e.escape=e.encodeNonAsciiHTML=e.encodeHTML=e.encodeXML=void 0;var i=r(n(2586)),s=l(i.default),o=h(s);e.encodeXML=b(s);var a=r(n(9323)),c=l(a.default),u=h(c);function l(t){return Object.keys(t).sort().reduce((function(e,n){return e[t[n]]="&"+n+";",e}),{})}function h(t){for(var e=[],n=[],r=0,i=Object.keys(t);r<i.length;r++){var s=i[r];1===s.length?e.push("\\"+s):n.push(s)}e.sort();for(var o=0;o<e.length-1;o++){var a=o;while(a<e.length-1&&e[a].charCodeAt(1)+1===e[a+1].charCodeAt(1))a+=1;var c=1+a-o;c<3||e.splice(o,c,e[o]+"-"+e[a])}return n.unshift("["+e.join("")+"]"),new RegExp(n.join("|"),"g")}e.encodeHTML=m(c,u),e.encodeNonAsciiHTML=b(c);var d=/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,f=null!=String.prototype.codePointAt?function(t){return t.codePointAt(0)}:function(t){return 1024*(t.charCodeAt(0)-55296)+t.charCodeAt(1)-56320+65536};function p(t){return"&#x"+(t.length>1?f(t):t.charCodeAt(0)).toString(16).toUpperCase()+";"}function m(t,e){return function(n){return n.replace(e,(function(e){return t[e]})).replace(d,p)}}var g=new RegExp(o.source+"|"+d.source,"g");function v(t){return t.replace(g,p)}function y(t){return t.replace(o,p)}function b(t){return function(e){return e.replace(g,(function(e){return t[e]||p(e)}))}}e.escape=v,e.escapeUTF8=y},3246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.decodeXMLStrict=e.decodeHTML5Strict=e.decodeHTML4Strict=e.decodeHTML5=e.decodeHTML4=e.decodeHTMLStrict=e.decodeHTML=e.decodeXML=e.encodeHTML5=e.encodeHTML4=e.escapeUTF8=e.escape=e.encodeNonAsciiHTML=e.encodeHTML=e.encodeXML=e.encode=e.decodeStrict=e.decode=void 0;var r=n(9441),i=n(2336);function s(t,e){return(!e||e<=0?r.decodeXML:r.decodeHTML)(t)}function o(t,e){return(!e||e<=0?r.decodeXML:r.decodeHTMLStrict)(t)}function a(t,e){return(!e||e<=0?i.encodeXML:i.encodeHTML)(t)}e.decode=s,e.decodeStrict=o,e.encode=a;var c=n(2336);Object.defineProperty(e,"encodeXML",{enumerable:!0,get:function(){return c.encodeXML}}),Object.defineProperty(e,"encodeHTML",{enumerable:!0,get:function(){return c.encodeHTML}}),Object.defineProperty(e,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return c.encodeNonAsciiHTML}}),Object.defineProperty(e,"escape",{enumerable:!0,get:function(){return c.escape}}),Object.defineProperty(e,"escapeUTF8",{enumerable:!0,get:function(){return c.escapeUTF8}}),Object.defineProperty(e,"encodeHTML4",{enumerable:!0,get:function(){return c.encodeHTML}}),Object.defineProperty(e,"encodeHTML5",{enumerable:!0,get:function(){return c.encodeHTML}});var u=n(9441);Object.defineProperty(e,"decodeXML",{enumerable:!0,get:function(){return u.decodeXML}}),Object.defineProperty(e,"decodeHTML",{enumerable:!0,get:function(){return u.decodeHTML}}),Object.defineProperty(e,"decodeHTMLStrict",{enumerable:!0,get:function(){return u.decodeHTMLStrict}}),Object.defineProperty(e,"decodeHTML4",{enumerable:!0,get:function(){return u.decodeHTML}}),Object.defineProperty(e,"decodeHTML5",{enumerable:!0,get:function(){return u.decodeHTML}}),Object.defineProperty(e,"decodeHTML4Strict",{enumerable:!0,get:function(){return u.decodeHTMLStrict}}),Object.defineProperty(e,"decodeHTML5Strict",{enumerable:!0,get:function(){return u.decodeHTMLStrict}}),Object.defineProperty(e,"decodeXMLStrict",{enumerable:!0,get:function(){return u.decodeXML}})},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},6816:function(t,e,n){"use strict";n.d(e,{a$:function(){return xe},Xb:function(){return fe},v0:function(){return Er},Aj:function(){return ye},Fb:function(){return me},e5:function(){return pe},w7:function(){return be}});n(7658);var r=n(223),i=n(7077),s=n(5168);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(t,...e){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===k()||"https:"===k()}function k(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),R.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),e);try{const e=new j(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);f(t,a)}}catch(s){if(s instanceof r.ZR)throw s;f(t,"network-request-failed")}}async function U(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=G(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(H(s.auth_time)),issuedAtTime:$(H(s.iat)),expirationTime:$(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function G(t){var e;const[n,i,s]=t.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(i);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function K(t){const e=G(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return z(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,q(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:T}=e;v(b&&T,t,"internal-error");const S=rt.fromJSON(this.name,T);v("string"===typeof b,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(m,t.name),it(g,t.name),it(y,t.name);const I=new st({uid:b,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(_(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||_(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function vt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bt(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,r.w1)()&&10===document.documentMode}function _t(t=(0,r.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.beforeStateQueue=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Q(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function kt(t){return(0,r.m9)(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xt(t,e,n){const r=kt(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=At(e),{host:o,port:a}=Ot(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dt()}function At(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ot(t){const e=At(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Rt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Rt(e)}}}function Rt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Ut(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Nt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ft(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ft(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Pt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Lt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ut(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="http://localhost";class qt extends Nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new qt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new qt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,jt(t,e)}buildRequest(){const t={requestUri:Vt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function $t(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function zt(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Ht={["USER_NOT_FOUND"]:"user-not-found"};async function Gt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Ht)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Nt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Kt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Kt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return $t(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return zt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Gt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Kt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class Jt{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Wt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Xt(t);try{return new Jt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(){this.providerId=Yt.PROVIDER_ID}static credential(t,e){return Ft._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Jt.parseLink(e);return v(n,"argument-error"),Ft._fromEmailAndCode(t,n.code,n.tenantId)}}Yt.PROVIDER_ID="password",Yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Qt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends Zt{constructor(){super("facebook.com")}static credential(t){return qt._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return te.credential(t.oauthAccessToken)}catch(e){return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com",te.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return qt._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ee.credential(e,n)}catch(r){return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com",ee.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends Zt{constructor(){super("github.com")}static credential(t){return qt._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ne.credential(t.oauthAccessToken)}catch(e){return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com",ne.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends Zt{constructor(){super("twitter.com")}static credential(t,e){return qt._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return re.credentialFromTaggedObject(t)}static credentialFromError(t){return re.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return re.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e){return U(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.TWITTER_SIGN_IN_METHOD="twitter.com",re.PROVIDER_ID="twitter.com";class se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=oe(n),o=new se({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=oe(n);return new se({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function oe(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ae.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ae(t,e,n,r)}}function ce(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ae._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return se._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function le(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const r=await W(t,ce(i,s,e,t),n);v(r.idToken,i,"internal-error");const o=G(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),se._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e,n=!1){const r="signIn",i=await ce(t,r,e),s=await se._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function de(t,e){return he(kt(t),e)}async function fe(t,e,n){const r=kt(t),i=await ie(r,{returnSecureToken:!0,email:e,password:n}),s=await se._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function pe(t,e,n){return de((0,r.m9)(t),Yt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function me(t,e){return(0,r.m9)(t).setPersistence(e)}function ge(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function ve(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function ye(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function be(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function _e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const Ee="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ee,"1"),this.storage.removeItem(Ee),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){const t=(0,r.z$)();return dt(t)||yt(t)}const Ie=1e3,ke=10;class Ce extends Te{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Se()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ke):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ie)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ce.type="LOCAL";const xe=Ce;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Te{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ae.type="SESSION";const Oe=Ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new De(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Re(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.receivers=[];class Le{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ne("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function Me(t){Pe().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return"undefined"!==typeof Pe()["WorkerGlobalScope"]&&"function"===typeof Pe()["importScripts"]}async function Fe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function je(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ve(){return Ue()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="firebaseLocalStorageDb",Be=1,$e="firebaseLocalStorage",ze="fbase_key";class He{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ge(t,e){return t.transaction([$e],e?"readwrite":"readonly").objectStore($e)}function Ke(){const t=indexedDB.deleteDatabase(qe);return new He(t).toPromise()}function We(){const t=indexedDB.open(qe,Be);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore($e,{keyPath:ze})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains($e)?e(n):(n.close(),await Ke(),e(await We()))}))}))}async function Xe(t,e,n){const r=Ge(t,!0).put({[ze]:e,value:n});return new He(r).toPromise()}async function Je(t,e){const n=Ge(t,!1).get(e),r=await new He(n).toPromise();return void 0===r?null:r.value}function Ye(t,e){const n=Ge(t,!0).delete(e);return new He(n).toPromise()}const Qe=800,Ze=3;class tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await We()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ze)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ue()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=De._getInstance(Ve()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Fe(),!this.activeServiceWorker)return;this.sender=new Le(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&je()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await We();return await Xe(t,Ee,"1"),await Ye(t,Ee),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xe(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Je(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ye(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ge(t,!1).getAll();return new He(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tn.type="LOCAL";const en=tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function rn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function on(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",sn().appendChild(r)}))}function an(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
an("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn="recaptcha";async function un(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===cn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await we(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await nn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Bt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(t){this.providerId=ln.PROVIDER_ID,this.auth=kt(t)}verifyPhoneNumber(t,e){return un(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Kt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return ln.credentialFromTaggedObject(e)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Kt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(t,e){return e?_(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.PROVIDER_ID="phone",ln.PHONE_SIGN_IN_METHOD="phone";class dn extends Nt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fn(t){return he(t.auth,new dn(t),t.bypassAuthState)}function pn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),le(n,new dn(t),t.bypassAuthState)}async function mn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ue(n,new dn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return mn;case"reauthViaPopup":case"reauthViaRedirect":return pn;default:f(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new A(2e3,1e4);class yn extends gn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Ne();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,vn.get())};t()}}yn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn="pendingRedirect",wn=new Map;class _n extends gn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=wn.get(this.auth._key());if(!t){try{const e=await En(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}wn.set(this.auth._key(),t)}return this.bypassAuthState||wn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function En(t,e){const n=In(e),r=Sn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Tn(t,e){wn.set(t._key(),e)}function Sn(t){return _(t._redirectPersistence)}function In(t){return ct(bn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e,n=!1){const r=kt(t),i=hn(r,e),s=new _n(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn=6e5;class xn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Rn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!On(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(An(t))}saveEventToCache(t){this.cachedEventUids.add(An(t)),this.lastProcessedEventTime=Date.now()}}function An(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function On({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Rn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ln=/^https?/;async function Pn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dn(t);for(const r of e)try{if(Mn(r))return}catch(n){}f(t,"unauthorized-domain")}function Mn(t){const e=S(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ln.test(n))return!1;if(Nn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new A(3e4,6e4);function Fn(){const t=Pe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function jn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Fn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fn(),n(p(t,"network-request-failed"))},timeout:Un.get()})}if(null===(i=null===(r=Pe().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Pe().gapi)||void 0===s?void 0:s.load)){const e=an("iframefcb");return Pe()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},on(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Vn=null,t}))}let Vn=null;function qn(t){return Vn=Vn||jn(t),Vn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new A(5e3,15e3),$n="__/auth/iframe",zn="emulator/auth/iframe",Hn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,zn):`https://${t.config.authDomain}/${$n}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Gn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Wn(t){const e=await qn(t),n=Pe().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Kn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Pe().setTimeout((()=>{r(i)}),Bn.get());function o(){Pe().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Yn=600,Qn="_blank",Zn="http://localhost";class tr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function er(t,e,n,i=Jn,s=Yn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Xn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ft(l)?Qn:n),ht(l)&&(e=e||Zn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(bt(l)&&"_self"!==c)return nr(e||"",c),new tr(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new tr(d)}function nr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="__/auth/handler",ir="emulator/auth/handler";function sr(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof Qt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Zt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${or(t)}?${(0,r.xO)(u).slice(1)}`}function or({config:t}){return t.emulator?O(t,ir):`https://${t.authDomain}/${rr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="webStorageSupport";class cr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oe,this._completeRedirectFn=kn,this._overrideRedirectResult=Tn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=sr(t,e,n,S(),r);return er(t,s,Ne())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Me(sr(t,e,n,S(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Wn(t),n=new xn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ar,{type:ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ar];void 0!==i&&e(!!i),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Pn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||dt()||yt()}}const ur=cr;class lr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class hr extends lr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new hr(t)}_finalizeEnroll(t,e,n){return _e(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return rn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class dr{constructor(){}static assertion(t){return hr._fromCredential(t)}}dr.FACTOR_ID="phone";var fr="@firebase/auth",pr="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new It(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=kt(t.getProvider("auth").getImmediate());return(t=>new mr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(fr,pr,gr(t)),(0,i.KN)(fr,pr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=300,br=(0,r.Pz)("authIdTokenMaxAge")||yr;let wr=null;const _r=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>br)return;const i=null===n||void 0===n?void 0:n.token;wr!==i&&(wr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Er(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E(t,{popupRedirectResolver:ur,persistence:[en,xe,Oe]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const t=_r(s);ve(n,t,(()=>t(n.currentUser))),ge(n,(e=>t(e)))}const o=(0,r.q4)("auth");return o&&xt(n,`http://${o}`),n}vr("Browser")},6035:function(t,e,n){"use strict";n.d(e,{Ab:function(){return Ah},vr:function(){return xh},hJ:function(){return cl},oe:function(){return Sh},JU:function(){return ul},QT:function(){return bh},PL:function(){return _h},ad:function(){return Tl},nP:function(){return Oh},cf:function(){return Ih},IO:function(){return oh},pl:function(){return Eh},r7:function(){return Th},ar:function(){return ch}});n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var S=0,I={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=m(this);delete I[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function C(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}var D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return t<e?-1:t>e?1:0}function L(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=L().indexOf(t)}function M(t){return M[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}M[" "]=d;var F,j=P("Opera"),V=P("Trident")||P("MSIE"),q=P("Edge"),B=q||V,$=P("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),z=-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge");function H(){var t=h.document;return t?t.documentMode:void 0}t:{var G="",K=function(){var t=L();return $?/rv:([^\);]+)(\)|;)/.exec(t):q?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):j?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(G=K?K[1]:""),V){var W=H();if(null!=W&&W>parseFloat(G)){F=String(W);break t}}F=G}var X,J={};function Y(){return U((function(){let t=0;const e=D(String(F)).split("."),n=D("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&V){var Q=H();X=Q||(parseInt(F,10)||void 0)}else X=void 0;var Z=X;function tt(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{M(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}E(tt,A);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function it(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++rt,this.ba=this.ea=!1}function st(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=k(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(st(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new it(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);return null}return n=It(n),t&&t[nt]?t.N(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)O||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}const e=Et;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=It(n),t&&t[nt]?t.O(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=It(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(st(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):st(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof lt?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function kt(){T.call(this),this.i=new lt(this),this.P=this,this.I=null}function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),ut(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xt(o,r,!0,e)&&i}if(o=e.g=t,i=xt(o,r,!0,e)&&i,i=xt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xt(o,r,!1,e)&&i}function xt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(kt,T),kt.prototype[nt]=!0,kt.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},kt.prototype.M=function(){if(kt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)st(n[r]);delete e.g[t],e.h--}}this.I=null},kt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},kt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=h.JSON.stringify;function Ot(){var t=jt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){h.setTimeout((()=>{throw t}),0)}function Mt(t,e){Dt||Ut(),Ft||(Dt(),Ft=!0),jt.add(t,e)}function Ut(){var t=h.Promise.resolve(void 0);Dt=function(){t.then(Vt)}}var Ft=!1,jt=new Rt;function Vt(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function qt(t,e){kt.call(this),this.h=t||1,this.g=e||h,this.j=w(this.lb,this),this.l=Date.now()}function Bt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function zt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,zt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(qt,kt),r=qt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ct(this,"tick"),this.ca&&(Bt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.X.M.call(this),Bt(this),delete this.g};class Ht extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){T.call(this),this.h=t,this.g={}}E(Gt,T);var Kt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var s=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Jt(){this.g=!0}function Yt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.X.M.call(this),Xt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Aa=function(){this.g=!1},Jt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new kt}function se(t){A.call(this,ne.Pa,t)}function oe(t){const e=ie();Ct(e,new se(e,t))}function ae(t,e){A.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();Ct(e,new ae(e,t))}function ue(t,e){A.call(this,ne.Qa,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ne.Pa="serverreachability",E(se,A),ne.STAT_EVENT="statevent",E(ae,A),ne.Qa="timingevent",E(ue,A);var he={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},de={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function me(){}fe.prototype.h=null;var ge,ve={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ye(){A.call(this,"d")}function be(){A.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Gt(this),this.O=Te,t=B?125:void 0,this.T=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}E(ye,A),E(be,A),E(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ge=new we;var Te=45e3,Se={},Ie={};function ke(t,e,n){t.K=1,t.v=We($e(e)),t.s=n,t.P=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),Re(t),t.A=$e(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=dr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ht(w(t.La,t,t.g),t.N)),Wt(t.S,t.g,"readystatechange",t.ib),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.U,t.s)}function xe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Oe(t,n),r==Ie){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Se){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}xe(t)&&r!=Ie&&r!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ir(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Le(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ie:(n=Number(e.substring(n,r)),isNaN(n)?Se:(r+=1,r+n>e.length?Ie:(e=e.substr(r,n),t.C=r+n,e)))}function Re(t){t.V=Date.now()+t.O,De(t,t.O)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(w(t.gb,t),e)}function Ne(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||ar(t.l,t)}function Pe(t){Ne(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.T),Xt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;or(n),Xn(n)}rr(n),ce(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=le(w(n.cb,n),6e3));if(1>=mn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&or(n),!R(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ke(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=hr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ne(a),Re(a)),r.g=o}else nr(r);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Ue(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),r=Ue(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=_e.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Bn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=Bn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),Ne(this);var n=this.g.aa();this.Y=n;e:if(xe(this)){var r=$n(this.g);t="";var i=r.length,s=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Le(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Qt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Pe(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.P?(Ae(this,l,o),B&&this.i&&3==l&&(Wt(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==l&&Pe(this),this.i&&!this.I&&(4==l?ar(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),Le(this)}}}catch(l){}},r.hb=function(){if(this.g){var t=Bn(this.g),e=this.g.fa();this.C<e.length&&(Ne(this),Ae(this,t,e),this.i&&4!=t&&Re(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,Le(this)):De(this,this.V-t)};var Ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=void 0!==e?e:t.h,ze(this,t.j),this.s=t.s,this.g=t.g,He(this,t.m),this.l=t.l,e=t.i;var n=new rn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ge(this,n),this.o=t.o}else t&&(n=String(t).match(Ve))?(this.h=!!e,ze(this,n[1]||"",!0),this.s=Xe(n[2]||""),this.g=Xe(n[3]||"",!0),He(this,n[4]),this.l=Xe(n[5]||"",!0),Ge(this,n[6]||"",!0),this.o=Xe(n[7]||"")):(this.h=!!e,this.i=new rn(null,this.h))}function $e(t){return new Be(t)}function ze(t,e,n){t.j=n?Xe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ge(t,e,n){e instanceof rn?(t.i=e,ln(t.i,t.h)):(n||(e=Je(e,en)),t.i=new rn(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function We(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Je(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ye(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Je(e,Qe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Je(e,Qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Je(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Je(n,nn)),t.join("")};var Qe=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&qe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){sn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return sn(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),C(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}r=rn.prototype,r.add=function(t,e){sn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){sn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return sn(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function dn(t){this.l=t||fn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function mn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function vn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function bn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function wn(){}function _n(){this.g=new wn}function En(t,e,n){const r=n||"";try{je(t,(function(t,n){let i=t;p(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Tn(t,e){const n=new Jt;if(h.Image){const r=new Image;r.onload=_(Sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Sn,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Sn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function In(t){this.l=t.ac||null,this.j=t.jb||!1}function kn(t,e){kt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},wn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(In,fe),In.prototype.g=function(){return new kn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),E(kn,kt);var Cn=0;function xn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,On(t)}function On(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=kn.prototype,r.open=function(t,e){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,On(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Cn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):On(this),3==this.readyState&&xn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ua=function(t){this.g&&(this.response=t,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=h.JSON.parse;function Dn(t){kt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}E(Dn,kt);var Nn="",Ln=/^https?$/i,Pn=["POST","PUT"];function Mn(t){return V&&Y()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Un(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Vn(t)}function Fn(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function jn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Bn(t)||2!=t.aa()))if(t.v&&4==Bn(t))$t(t.Ha,0,t);else if(Ct(t,"readystatechange"),4==Bn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ve)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ln.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var o=2<Bn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fn(t)}}finally{Vn(t)}}}function Vn(t,e){if(t.g){qn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Bn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(xr){return null}}function zn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=zn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ca=0,this.i=[],this.j=new Jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(t&&t.concurrentRequestLimit),this.Fa=new _n,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(t){if(Jn(t),3==t.G){var e=t.U++,n=$e(t.F);Ke(n,"SID",t.I),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),tr(t,n),e=new _e(t,t.j,e,void 0),e.K=2,e.v=We($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=dr(e.l,null),e.g.da(e.v)),e.F=Date.now(),Re(e)}lr(t)}function Xn(t){t.g&&(ir(t),t.g.cancel(),t.g=null)}function Jn(t){Xn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Yn(t){pn(t.h)||t.m||(t.m=!0,Mt(t.Ja,t),t.C=0)}function Qn(t,e){return!(mn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=le(w(t.Ja,t,e),cr(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const r=$e(t.F);Ke(r,"SID",t.I),Ke(r,"RID",n),Ke(r,"AID",t.T),tr(t,r),t.o&&t.s&&Hn(r,t.o,t.s),n=new _e(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=er(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),vn(t.h,n),ke(n,r,e)}function tr(t,e){t.ia&&ot(t.ia,(function(t,n){Ke(e,n,t)})),t.l&&je({},(function(t,n){Ke(e,n,t)}))}function er(t,e,n){n=Math.min(t.i.length,n);var r=t.l?w(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{En(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function nr(t){t.g||t.u||(t.Z=1,Mt(t.Ia,t),t.A=0)}function rr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=le(w(t.Ia,t),cr(t,t.A)),t.A++,!0)}function ir(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function sr(t){t.g=new _e(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);Ke(e,"RID","rpc"),Ke(e,"SID",t.I),Ke(e,"CI",t.L?"0":"1"),Ke(e,"AID",t.T),Ke(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&Hn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=We($e(e)),n.s=null,n.P=!0,Ce(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ar(t,e){var n=null;if(t.g==e){or(t),ir(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.D,yn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),Ct(r,new ue(r,n,e,i)),Yn(t)}else nr(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Qn(t,e)||2==r&&rr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}function cr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ur(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=w(t.kb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||ze(n,"https"),We(n)),Tn(n.toString(),r)}else ce(2);t.G=0,t.l&&t.l.va(e),lr(t),Jn(t)}function lr(t){if(t.G=0,t.la=[],t.l){const e=bn(t.h);0==e.length&&0==t.i.length||(x(t.la,e),x(t.la,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ua()}}function hr(t,e,n){var r=n instanceof Be?$e(n):new Be(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),He(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Be(null,void 0);r&&ze(s,r),e&&(s.g=e),i&&He(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ke(r,n,e),Ke(r,"VER",t.ma),tr(t,r),r}function dr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Dn(new In({jb:!0})):new Dn(t.ra),e.Ka(t.H),e}function fr(){}function pr(){if(V&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(t,e){kt.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}function gr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function vr(){be.call(this),this.status=1}function yr(t){this.g=t}r=Dn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Un(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=k(Pn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qn(this),0<this.B&&((this.K=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Un(this,s)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Vn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Dn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?jn(this):this.fb())},r.fb=function(){jn(this)},r.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new _e(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=at(s),ut(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=er(this,i,e),n=$e(this.F),Ke(n,"RID",t),Ke(n,"CVER",22),this.D&&Ke(n,"X-HTTP-Session-Id",this.D),tr(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(zn(s)))+"&"+e:this.o&&Hn(n,this.o,s)),vn(this.h,i),this.Ya&&Ke(n,"TYPE","init"),this.O?(Ke(n,"$req",e),Ke(n,"SID","null"),i.Z=!0,ke(i,n,null)):ke(i,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,sr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=le(w(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Xn(this),sr(this))},r.cb=function(){null!=this.v&&(this.v=null,Xn(this),rr(this),ce(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},pr.prototype.g=function(t,e){return new mr(t,e)},E(mr,kt),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hr(t,null,t.V),Yn(t)},mr.prototype.close=function(){Wn(this.g)},mr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new hn(e.ab++,t)),3==e.G&&Yn(e)},mr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,mr.X.M.call(this)},E(gr,ye),E(vr,be),E(yr,fr),yr.prototype.xa=function(){Ct(this.g,"a")},yr.prototype.wa=function(t){Ct(this.g,new gr(t))},yr.prototype.va=function(t){Ct(this.g,new vr(t))},yr.prototype.ua=function(){Ct(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",me.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",kt.prototype.listen=kt.prototype.N,Dn.prototype.listenOnce=Dn.prototype.O,Dn.prototype.getLastError=Dn.prototype.Oa,Dn.prototype.getLastErrorCode=Dn.prototype.Ea,Dn.prototype.getStatus=Dn.prototype.aa,Dn.prototype.getResponseJson=Dn.prototype.Sa,Dn.prototype.getResponseText=Dn.prototype.fa,Dn.prototype.send=Dn.prototype.da,Dn.prototype.setWithCredentials=Dn.prototype.Ka;var br=u.createWebChannelTransport=function(){return new pr},wr=u.getStatEventTarget=function(){return ie()},_r=u.ErrorCode=he,Er=u.EventType=de,Tr=u.Event=ne,Sr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ir=u.FetchXmlHttpFactory=In,kr=u.WebChannel=me,Cr=u.XhrIo=Dn;const xr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Or="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new o.Yd("@firebase/firestore");function Dr(){return Rr.logLevel}function Nr(t,...e){if(Rr.logLevel<=o["in"].DEBUG){const n=e.map(Mr);Rr.debug(`Firestore (${Or}): ${t}`,...n)}}function Lr(t,...e){if(Rr.logLevel<=o["in"].ERROR){const n=e.map(Mr);Rr.error(`Firestore (${Or}): ${t}`,...n)}}function Pr(t,...e){if(Rr.logLevel<=o["in"].WARN){const n=e.map(Mr);Rr.warn(`Firestore (${Or}): ${t}`,...n)}}function Mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+t;throw Lr(e),new Error(e)}function Fr(t,e){t||Ur()}function jr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ar.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gr{constructor(t){this.t=t,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fr("string"==typeof e.accessToken),new $r(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fr(null===t||"string"==typeof t),new Ar(t)}}class Kr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fr("string"==typeof t.token),this.A=t.token,new Xr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Yr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Zr(t,e){return t<e?-1:t>e?1:0}function ti(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ei.fromMillis(Date.now())}static fromDate(t){return ei.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ei(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Zr(this.nanoseconds,t.nanoseconds):Zr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ni(t)}static min(){return new ni(new ei(0,0))}static max(){return new ni(new ei(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ur(),void 0===n?n=t.length-e:n>t.length-e&&Ur(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ri.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ri?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ii extends ri{construct(t,e,n){return new ii(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new qr(Vr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ii(e)}static emptyPath(){return new ii([])}}const si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oi extends ri{construct(t,e,n){return new oi(t,e,n)}static isValidIdentifier(t){return si.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new qr(Vr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new qr(Vr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new qr(Vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new qr(Vr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oi(e)}static emptyPath(){return new oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.path=t}static fromPath(t){return new ai(ii.fromString(t))}static fromName(t){return new ai(ii.fromString(t).popFirst(5))}static empty(){return new ai(ii.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ii.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ii.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ai(new ii(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ci.UNKNOWN_ID=-1;function ui(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ni.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new hi(i,ai.empty(),e)}function li(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new hi(ni.min(),ai.empty(),-1)}static max(){return new hi(ni.max(),ai.empty(),-1)}}function di(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ai.comparator(t.documentKey,e.documentKey),0!==n?n:Zr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t){if(t.code!==Vr.FAILED_PRECONDITION||t.message!==fi)throw t;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ur(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gi?e:gi.resolve(e)}catch(t){return gi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.reject(e)}static resolve(t){return new gi(((e,n)=>{e(t)}))}static reject(t){return new gi(((e,n)=>{n(t)}))}static waitFor(t){return new gi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=gi.resolve(!1);for(const n of t)e=e.next((t=>t?gi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new gi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new gi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _i(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi.at=-1;class Ei{constructor(t,e){this.comparator=t,this.root=e||Si.EMPTY}insert(t,e){return new Ei(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Si.BLACK,null,null))}remove(t){return new Ei(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Si.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ti(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ti(this.root,t,this.comparator,!0)}}class Ti{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Si{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Si.RED,this.left=null!=r?r:Si.EMPTY,this.right=null!=i?i:Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Si(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Si.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ur();if(this.right.isRed())throw Ur();const t=this.left.check();if(t!==this.right.check())throw Ur();return t+(this.isRed()?0:1)}}Si.EMPTY=null,Si.RED=!0,Si.BLACK=!1,Si.EMPTY=new class{constructor(){this.size=0}get key(){throw Ur()}get value(){throw Ur()}get color(){throw Ur()}get left(){throw Ur()}get right(){throw Ur()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Si(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(t){this.comparator=t,this.data=new Ei(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ki(this.data.getIterator())}getIteratorFrom(t){return new ki(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ii))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ii(this.comparator);return e.data=t,e}}class ki{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(t){this.fields=t,t.sort(oi.comparator)}static empty(){return new Ci([])}unionWith(t){let e=new Ii(oi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ci(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ti(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new xi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Zr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xi.EMPTY_BYTE_STRING=new xi("");const Ai=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(Fr(!!t),"string"==typeof t){let e=0;const n=Ai.exec(t);if(Fr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ri(t.seconds),nanos:Ri(t.nanos)}}function Ri(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Di(t){return"string"==typeof t?xi.fromBase64String(t):xi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Li(t){const e=t.mapValue.fields.__previous_value__;return Ni(e)?Li(e):e}function Pi(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new ei(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ui{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ui&&t.projectId===this.projectId&&t.database===this.database}}function Fi(t){return null==t}function ji(t){return 0===t&&1/t==-1/0}function Vi(t){return"number"==typeof t&&Number.isInteger(t)&&!ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ni(t)?4:ns(t)?9007199254740991:10:Ur()}function $i(t,e){if(t===e)return!0;const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Oi(t.timestampValue),r=Oi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Di(t.bytesValue).isEqual(Di(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ri(t.geoPointValue.latitude)===Ri(e.geoPointValue.latitude)&&Ri(t.geoPointValue.longitude)===Ri(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ri(t.integerValue)===Ri(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ri(t.doubleValue),r=Ri(e.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ti(t.arrayValue.values||[],e.arrayValue.values||[],$i);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(bi(n)!==bi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!$i(n[i],r[i])))return!1;return!0}(t,e);default:return Ur()}}function zi(t,e){return void 0!==(t.values||[]).find((t=>$i(t,e)))}function Hi(t,e){if(t===e)return 0;const n=Bi(t),r=Bi(e);if(n!==r)return Zr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ri(t.integerValue||t.doubleValue),r=Ri(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Gi(t.timestampValue,e.timestampValue);case 4:return Gi(Pi(t),Pi(e));case 5:return Zr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Di(t),r=Di(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Zr(n[i],r[i]);if(0!==t)return t}return Zr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Zr(Ri(t.latitude),Ri(e.latitude));return 0!==n?n:Zr(Ri(t.longitude),Ri(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Hi(n[i],r[i]);if(t)return t}return Zr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===qi.mapValue&&e===qi.mapValue)return 0;if(t===qi.mapValue)return 1;if(e===qi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Zr(r[o],s[o]);if(0!==t)return t;const e=Hi(n[r[o]],i[s[o]]);if(0!==e)return e}return Zr(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ur()}}function Gi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Zr(t,e);const n=Oi(t),r=Oi(e),i=Zr(n.seconds,r.seconds);return 0!==i?i:Zr(n.nanos,r.nanos)}function Ki(t){return Wi(t)}function Wi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Oi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ai.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Wi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Wi(t.fields[i])}`;return n+"}"}(t.mapValue):Ur();var e,n}function Xi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ji(t){return!!t&&"integerValue"in t}function Yi(t){return!!t&&"arrayValue"in t}function Qi(t){return!!t&&"nullValue"in t}function Zi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ts(t){return!!t&&"mapValue"in t}function es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=es(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ns(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t){this.value=t}static empty(){return new rs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=es(e)}setAll(t){let e=oi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=es(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $i(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){wi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new rs(es(this.value))}}function is(t){const e=[];return wi(t.fields,((t,n)=>{const r=new oi([t]);if(ts(n)){const t=is(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ci(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ss{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new ss(t,0,ni.min(),ni.min(),rs.empty(),0)}static newFoundDocument(t,e,n){return new ss(t,1,e,ni.min(),n,0)}static newNoDocument(t,e){return new ss(t,2,e,ni.min(),rs.empty(),0)}static newUnknownDocument(t,e){return new ss(t,3,e,ni.min(),rs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ni.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ss&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ss(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function as(t,e=null,n=[],r=[],i=null,s=null,o=null){return new os(t,e,n,r,i,s,o)}function cs(t){const e=jr(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ki(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ki(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ki(t))).join(",")),e.ht=t}return e.ht}function us(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ki(e.value)}`;var e})).join(", ")}]`),Fi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ki(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ki(t))).join(",")),`Target(${e})`}function ls(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ts(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!$i(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Is(t.startAt,e.startAt)&&Is(t.endAt,e.endAt)}function hs(t){return ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ds extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new fs(t,e,n):"array-contains"===e?new vs(t,n):"in"===e?new ys(t,n):"not-in"===e?new bs(t,n):"array-contains-any"===e?new ws(t,n):new ds(t,e,n)}static lt(t,e,n){return"in"===e?new ps(t,n):new ms(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Hi(e,this.value)):null!==e&&Bi(this.value)===Bi(e)&&this.ft(Hi(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ur()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fs extends ds{constructor(t,e,n){super(t,e,n),this.key=ai.fromName(n.referenceValue)}matches(t){const e=ai.comparator(t.key,this.key);return this.ft(e)}}class ps extends ds{constructor(t,e){super(t,"in",e),this.keys=gs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ms extends ds{constructor(t,e){super(t,"not-in",e),this.keys=gs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function gs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ai.fromName(t.referenceValue)))}class vs extends ds{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yi(e)&&zi(e.arrayValue,this.value)}}class ys extends ds{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zi(this.value.arrayValue,e)}}class bs extends ds{constructor(t,e){super(t,"not-in",e)}matches(t){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zi(this.value.arrayValue,e)}}class ws extends ds{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zi(this.value.arrayValue,t)))}}class _s{constructor(t,e){this.position=t,this.inclusive=e}}class Es{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ts(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ss(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?ai.comparator(ai.fromName(o.referenceValue),n.key):Hi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Is(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$i(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Cs(t,e,n,r,i,s,o,a){return new ks(t,e,n,r,i,s,o,a)}function xs(t){return new ks(t)}function As(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Os(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rs(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ds(t){return null!==t.collectionGroup}function Ns(t){const e=jr(t);if(null===e._t){e._t=[];const t=Rs(e),n=Os(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Es(t)),e._t.push(new Es(oi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Es(oi.keyField(),t))}}}return e._t}function Ls(t){const e=jr(t);if(!e.wt)if("F"===e.limitType)e.wt=as(e.path,e.collectionGroup,Ns(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ns(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Es(i.field,e))}const n=e.endAt?new _s(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new _s(e.startAt.position,e.startAt.inclusive):null;e.wt=as(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Ps(t,e,n){return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ms(t,e){return ls(Ls(t),Ls(e))&&t.limitType===e.limitType}function Us(t){return`${cs(Ls(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${us(Ls(t))}; limitType=${t.limitType})`}function js(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ai.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ss(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ns(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ss(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ns(t),e))}(t,e)}function Vs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qs(t){return(e,n)=>{let r=!1;for(const i of Ns(t)){const t=Bs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Bs(t,e,n){const r=t.field.isKeyField()?ai.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Hi(r,i):Ur()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ur()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function zs(t){return{integerValue:""+t}}function Hs(t,e){return Vi(e)?zs(e):$s(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this._=void 0}}function Ks(t,e,n){return t instanceof Js?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ys?Qs(t,e):t instanceof Zs?to(t,e):function(t,e){const n=Xs(t,e),r=no(n)+no(t.yt);return Ji(n)&&Ji(t.yt)?zs(r):$s(t.It,r)}(t,e)}function Ws(t,e,n){return t instanceof Ys?Qs(t,e):t instanceof Zs?to(t,e):n}function Xs(t,e){return t instanceof eo?Ji(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Js extends Gs{}class Ys extends Gs{constructor(t){super(),this.elements=t}}function Qs(t,e){const n=ro(e);for(const r of t.elements)n.some((t=>$i(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Gs{constructor(t){super(),this.elements=t}}function to(t,e){let n=ro(e);for(const r of t.elements)n=n.filter((t=>!$i(t,r)));return{arrayValue:{values:n}}}class eo extends Gs{constructor(t,e){super(),this.It=t,this.yt=e}}function no(t){return Ri(t.integerValue||t.doubleValue)}function ro(t){return Yi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e){this.field=t,this.transform=e}}function so(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ys&&e instanceof Ys||t instanceof Zs&&e instanceof Zs?ti(t.elements,e.elements,$i):t instanceof eo&&e instanceof eo?$i(t.yt,e.yt):t instanceof Js&&e instanceof Js}(t.transform,e.transform)}class oo{constructor(t,e){this.version=t,this.transformResults=e}}class ao{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ao}static exists(t){return new ao(void 0,t)}static updateTime(t){return new ao(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function co(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class uo{}function lo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new _o(t.key,ao.none()):new go(t.key,t.data,ao.none());{const n=t.data,r=rs.empty();let i=new Ii(oi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new vo(t.key,r,new Ci(i.toArray()),ao.none())}}function ho(t,e,n){t instanceof go?function(t,e,n){const r=t.value.clone(),i=bo(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof vo?function(t,e,n){if(!co(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=bo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(yo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n,r){return t instanceof go?function(t,e,n,r){if(!co(t.precondition,e))return n;const i=t.value.clone(),s=wo(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof vo?function(t,e,n,r){if(!co(t.precondition,e))return n;const i=wo(t.fieldTransforms,r,e),s=e.data;return s.setAll(yo(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return co(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function po(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Xs(r.transform,t||null);null!=i&&(null===n&&(n=rs.empty()),n.set(r.field,i))}return n||null}function mo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ti(t,e,((t,e)=>so(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends uo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vo extends uo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function bo(t,e,n){const r=new Map;Fr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ws(o,a,n[i]))}return r}function wo(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Ks(t,s,e))}return r}class _o extends uo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eo extends uo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var So,Io;function ko(t){switch(t){default:return Ur();case Vr.CANCELLED:case Vr.UNKNOWN:case Vr.DEADLINE_EXCEEDED:case Vr.RESOURCE_EXHAUSTED:case Vr.INTERNAL:case Vr.UNAVAILABLE:case Vr.UNAUTHENTICATED:return!1;case Vr.INVALID_ARGUMENT:case Vr.NOT_FOUND:case Vr.ALREADY_EXISTS:case Vr.PERMISSION_DENIED:case Vr.FAILED_PRECONDITION:case Vr.ABORTED:case Vr.OUT_OF_RANGE:case Vr.UNIMPLEMENTED:case Vr.DATA_LOSS:return!0}}function Co(t){if(void 0===t)return Lr("GRPC error has no .code"),Vr.UNKNOWN;switch(t){case So.OK:return Vr.OK;case So.CANCELLED:return Vr.CANCELLED;case So.UNKNOWN:return Vr.UNKNOWN;case So.DEADLINE_EXCEEDED:return Vr.DEADLINE_EXCEEDED;case So.RESOURCE_EXHAUSTED:return Vr.RESOURCE_EXHAUSTED;case So.INTERNAL:return Vr.INTERNAL;case So.UNAVAILABLE:return Vr.UNAVAILABLE;case So.UNAUTHENTICATED:return Vr.UNAUTHENTICATED;case So.INVALID_ARGUMENT:return Vr.INVALID_ARGUMENT;case So.NOT_FOUND:return Vr.NOT_FOUND;case So.ALREADY_EXISTS:return Vr.ALREADY_EXISTS;case So.PERMISSION_DENIED:return Vr.PERMISSION_DENIED;case So.FAILED_PRECONDITION:return Vr.FAILED_PRECONDITION;case So.ABORTED:return Vr.ABORTED;case So.OUT_OF_RANGE:return Vr.OUT_OF_RANGE;case So.UNIMPLEMENTED:return Vr.UNIMPLEMENTED;case So.DATA_LOSS:return Vr.DATA_LOSS;default:return Ur()}}(Io=So||(So={}))[Io.OK=0]="OK",Io[Io.CANCELLED=1]="CANCELLED",Io[Io.UNKNOWN=2]="UNKNOWN",Io[Io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Io[Io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Io[Io.NOT_FOUND=5]="NOT_FOUND",Io[Io.ALREADY_EXISTS=6]="ALREADY_EXISTS",Io[Io.PERMISSION_DENIED=7]="PERMISSION_DENIED",Io[Io.UNAUTHENTICATED=16]="UNAUTHENTICATED",Io[Io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Io[Io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Io[Io.ABORTED=10]="ABORTED",Io[Io.OUT_OF_RANGE=11]="OUT_OF_RANGE",Io[Io.UNIMPLEMENTED=12]="UNIMPLEMENTED",Io[Io.INTERNAL=13]="INTERNAL",Io[Io.UNAVAILABLE=14]="UNAVAILABLE",Io[Io.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){wi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return _i(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Ei(ai.comparator);function Oo(){return Ao}const Ro=new Ei(ai.comparator);function Do(...t){let e=Ro;for(const n of t)e=e.insert(n.key,n);return e}function No(t){let e=Ro;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Lo(){return Mo()}function Po(){return Mo()}function Mo(){return new xo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Uo=new Ei(ai.comparator),Fo=new Ii(ai.comparator);function jo(...t){let e=Fo;for(const n of t)e=e.add(n);return e}const Vo=new Ii(Zr);function qo(){return Vo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,$o.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Bo(ni.min(),r,qo(),Oo(),jo())}}class $o{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new $o(n,e,jo(),jo(),jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class Ho{constructor(t,e){this.targetId=t,this.At=e}}class Go{constructor(t,e,n=xi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ko{constructor(){this.Rt=0,this.bt=Jo(),this.Pt=xi.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=jo(),e=jo(),n=jo();return this.bt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ur()}})),new $o(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Jo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Wo{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Oo(),this.qt=Xo(),this.Kt=new Ii(Zr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Ur()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(hs(t))if(0===n){const n=new ai(t.path);this.jt(e,n,ss.newNoDocument(n,ni.min()))}else Fr(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&hs(i.target)){const e=new ai(i.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,ss.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=jo();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Bo(t,e,this.Kt,this.Ut,n);return this.Ut=Oo(),this.qt=Xo(),this.Kt=new Ii(Zr),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Ko,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Ii(Zr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Nr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ko),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Xo(){return new Ei(ai.comparator)}function Jo(){return new Ei(ai.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Zo{constructor(t,e){this.databaseId=t,this.gt=e}}function ta(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ea(t,e){return t.gt?e.toBase64():e.toUint8Array()}function na(t,e){return ta(t,e.toTimestamp())}function ra(t){return Fr(!!t),ni.fromTimestamp(function(t){const e=Oi(t);return new ei(e.seconds,e.nanos)}(t))}function ia(t,e){return function(t){return new ii(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function sa(t){const e=ii.fromString(t);return Fr(xa(e)),e}function oa(t,e){return ia(t.databaseId,e.path)}function aa(t,e){const n=sa(e);if(n.get(1)!==t.databaseId.projectId)throw new qr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new qr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ai(ha(n))}function ca(t,e){return ia(t.databaseId,e)}function ua(t){const e=sa(t);return 4===e.length?ii.emptyPath():ha(e)}function la(t){return new ii(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ha(t){return Fr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function da(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function fa(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ur()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.gt?(Fr(void 0===e||"string"==typeof e),xi.fromBase64String(e||"")):(Fr(void 0===e||e instanceof Uint8Array),xi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vr.UNKNOWN:Co(t.code);return new qr(e,t.message||"")}(o);n=new Go(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=aa(t,r.document.name),s=ra(r.document.updateTime),o=new rs({mapValue:{fields:r.document.fields}}),a=ss.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new zo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=aa(t,r.document),s=r.readTime?ra(r.readTime):ni.min(),o=ss.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=aa(t,r.document),s=r.removedTargetIds||[];n=new zo([],s,i,null)}else{if(!("filter"in e))return Ur();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new To(r),s=t.targetId;n=new Ho(s,i)}}return n}function pa(t,e){let n;if(e instanceof go)n={update:da(t,e.key,e.value)};else if(e instanceof _o)n={delete:oa(t,e.key)};else if(e instanceof vo)n={update:da(t,e.key,e.data),updateMask:Ca(e.fieldMask)};else{if(!(e instanceof Eo))return Ur();n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Js)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ys)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Ur()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:na(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ur()}(t,e.precondition)),n}function ma(t,e){return t&&t.length>0?(Fr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ra(t.updateTime):ra(e);return n.isEqual(ni.min())&&(n=ra(e)),new oo(n,t.transformResults||[])}(t,e)))):[]}function ga(t,e){return{documents:[ca(t,e.path)]}}function va(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ca(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ca(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Zi(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NAN"}};if(Qi(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Zi(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NOT_NAN"}};if(Qi(t.value))return{unaryFilter:{field:Ta(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ta(t.field),op:Ea(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ta(t.field),direction:_a(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.gt||Fi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ya(t){let e=ua(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=wa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Es(Sa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Fi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new _s(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new _s(n,e)}(n.endAt)),Cs(e,i,o,s,a,"F",c,u)}function ba(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ur()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function wa(t){return t?void 0!==t.unaryFilter?[ka(t)]:void 0!==t.fieldFilter?[Ia(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>wa(t))).reduce(((t,e)=>t.concat(e))):Ur():[]}function _a(t){return Yo[t]}function Ea(t){return Qo[t]}function Ta(t){return{fieldPath:t.canonicalString()}}function Sa(t){return oi.fromServerFormat(t.fieldPath)}function Ia(t){return ds.create(Sa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ur()}}(t.fieldFilter.op),t.fieldFilter.value)}function ka(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Sa(t.unaryFilter.field);return ds.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Sa(t.unaryFilter.field);return ds.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sa(t.unaryFilter.field);return ds.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sa(t.unaryFilter.field);return ds.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ur()}}function Ca(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function xa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ra=Oa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Da{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ho(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Po();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=lo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ni.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),jo())}isEqual(t){return this.batchId===t.batchId&&ti(this.mutations,t.mutations,((t,e)=>mo(t,e)))&&ti(this.baseMutations,t.baseMutations,((t,e)=>mo(t,e)))}}class Na{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Fr(t.mutations.length===n.length);let r=Uo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Na(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,n,r,i=ni.min(),s=ni.min(),o=xi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Pa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Pa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Pa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t){this.re=t}}function Ua(t){const e=ya({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ps(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Ri(t.integerValue));else if("doubleValue"in t){const n=Ri(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),ji(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Di(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?ns(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Ur()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),ai.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Fa.Te=new Fa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.Ye=new Va}addToCollectionParentIndex(t,e){return this.Ye.add(e),gi.resolve()}getCollectionParents(t,e){return gi.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return gi.resolve()}deleteFieldIndex(t,e){return gi.resolve()}getDocumentsMatchingTarget(t,e){return gi.resolve(null)}getIndexType(t,e){return gi.resolve(0)}getFieldIndexes(t,e){return gi.resolve([])}getNextCollectionGroupToUpdate(t){return gi.resolve(null)}getMinOffset(t,e){return gi.resolve(hi.min())}getMinOffsetFromCollectionGroup(t,e){return gi.resolve(hi.min())}updateCollectionGroup(t,e,n){return gi.resolve()}updateIndexEntries(t,e){return gi.resolve()}}class Va{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ii(ii.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ii(ii.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class qa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new qa(t,qa.DEFAULT_COLLECTION_PERCENTILE,qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qa.DEFAULT_COLLECTION_PERCENTILE=10,qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qa.DEFAULT=new qa(41943040,qa.DEFAULT_COLLECTION_PERCENTILE,qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qa.DISABLED=new qa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ba(0)}static vn(){return new Ba(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(){this.changes=new xo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ss.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&fo(n.mutation,t,Ci.empty(),ei.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,jo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=jo()){const r=Lo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Do();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Lo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,jo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Oo();const s=Mo(),o=Mo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof vo)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),fo(o.mutation,e,o.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new za(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Mo();let r=new Ei(((t,e)=>t-e)),i=jo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ci.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||jo()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Po();c.forEach((t=>{if(!i.has(t)){const r=lo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return gi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ds(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):gi.resolve(Lo());let o=-1,a=i;return s.next((e=>gi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?gi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,jo()))).next((t=>({batchId:o,changes:No(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ai(e)).next((t=>{let e=Do();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Do();return this.indexManager.getCollectionParents(t,r).next((s=>gi.forEach(s,(s=>{const o=function(t,e){return new ks(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ss.newInvalidDocument(n)))}));let n=Do();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&fo(s.mutation,i,Ci.empty(),ei.now()),js(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):gi.resolve(ss.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return gi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ra(n.createTime)}),gi.resolve()}getNamedQuery(t,e){return gi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ua(t.bundledQuery),readTime:ra(t.readTime)}}(e)),gi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.overlays=new Ei(ai.comparator),this.es=new Map}getOverlay(t,e){return gi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Lo();return gi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),gi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),gi.resolve()}getOverlaysForCollection(t,e,n){const r=Lo(),i=e.length+1,s=new ai(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return gi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ei(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Lo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Lo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return gi.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new La(e,n));let i=this.es.get(e);void 0===i&&(i=jo(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.ns=new Ii(Xa.ss),this.rs=new Ii(Xa.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Xa(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Xa(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new ai(new ii([])),n=new Xa(e,t),r=new Xa(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new ai(new ii([])),n=new Xa(e,t),r=new Xa(e,t+1);let i=jo();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Xa(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Xa{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return ai.comparator(t.key,e.key)||Zr(t._s,e._s)}static os(t,e){return Zr(t._s,e._s)||ai.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ii(Xa.ss)}checkEmpty(t){return gi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Da(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new Xa(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return gi.resolve(s)}lookupMutationBatch(t,e){return gi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Xa(e,0),r=new Xa(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ii(Zr);return e.forEach((t=>{const e=new Xa(t,0),r=new Xa(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),gi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ai.isDocumentKey(i)||(i=i.child(""));const s=new Xa(new ai(i),0);let o=new Ii(Zr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),s),gi.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fr(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gi.forEach(e.mutations,(r=>{const i=new Xa(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Xa(e,0),r=this.gs.firstAfterOrEqual(n);return gi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,gi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.Es=t,this.docs=new Ei(ai.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gi.resolve(n?n.document.mutableCopy():ss.newInvalidDocument(e))}getEntries(t,e){let n=Oo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ss.newInvalidDocument(t))})),gi.resolve(n)}getAllFromCollection(t,e,n){let r=Oo();const i=new ai(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||di(li(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return gi.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Ur()}As(t,e){return gi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qa(this)}getSize(t){return gi.resolve(this.size)}}class Qa extends $a{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),gi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.persistence=t,this.Rs=new xo((t=>cs(t)),ls),this.lastRemoteSnapshotVersion=ni.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wa,this.targetCount=0,this.vs=Ba.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),gi.resolve()}getLastRemoteSnapshotVersion(t){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),gi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ba(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,gi.resolve()}updateTargetData(t,e){return this.Dn(e),gi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,gi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),gi.waitFor(i).next((()=>r))}getTargetCount(t){return gi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return gi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),gi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),gi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),gi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return gi.resolve(n)}containsKey(t,e){return gi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new yi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Za(this),this.indexManager=new ja,this.remoteDocumentCache=function(t){return new Ya(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Ma(e),this.Ns=new Ga(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Ja(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Nr("MemoryPersistence","Starting transaction:",t);const r=new ec(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return gi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class ec extends pi{constructor(t){super(),this.currentSequenceNumber=t}}class nc{constructor(t){this.persistence=t,this.Fs=new Wa,this.$s=null}static Bs(t){return new nc(t)}get Ls(){if(this.$s)return this.$s;throw Ur()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),gi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),gi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),gi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Ls,(n=>{const r=ai.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,ni.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return gi.or([()=>gi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=jo(),r=jo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new rc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(As(e))return gi.resolve(null);let n=Ls(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ps(e,null,"F"),n=Ls(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=jo(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,r);return this.$i(e,s,i,n.readTime)?this.ki(t,Ps(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Oi(t,e,n,r){return As(e)||r.isEqual(ni.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const s=this.Fi(e,i);return this.$i(e,s,n,r)?this.Mi(t,e):(Dr()<=o["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fs(e)),this.Bi(t,s,e,ui(r,-1)))}))}Fi(t,e){let n=new Ii(qs(t));return e.forEach(((e,r)=>{js(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return Dr()<=o["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",Fs(e)),this.Ni.getDocumentsMatchingQuery(t,e,hi.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new Ei(Zr),this.qi=new xo((t=>cs(t)),ls),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ha(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function oc(t,e,n,r){return new sc(t,e,n,r)}async function ac(t,e){const n=jr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=jo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function cc(t,e){const n=jr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=gi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Fr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=jo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function uc(t){const e=jr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function lc(t,e){const n=jr(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(xi.EMPTY_BYTE_STRING,ni.min()).withLastLimboFreeSnapshotVersion(ni.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(t,u))}));let a=Oo(),c=jo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(hc(t,s,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!r.isEqual(ni.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return gi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=i,t)))}function hc(t,e,n){let r=jo(),i=jo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Oo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ni.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function dc(t,e){const n=jr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function fc(t,e){const n=jr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((i=>i?(r=i,gi.resolve(r)):n.Cs.allocateTargetId(t).next((i=>(r=new Pa(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function pc(t,e,n){const r=jr(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!vi(t))throw t;Nr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function mc(t,e,n){const r=jr(t);let i=ni.min(),s=jo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=jr(t),i=r.qi.get(n);return void 0!==i?gi.resolve(r.Ui.get(i)):r.Cs.getTargetData(e,n)}(r,t,Ls(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:ni.min(),n?s:jo()))).next((t=>(gc(r,Vs(e),t),{documents:t,Hi:s})))))}function gc(t,e,n){let r=t.Ki.get(e)||ni.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class vc{constructor(){this.activeTargetIds=qo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yc{constructor(){this.Lr=new vc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new vc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const s=this.ho(t,e);Nr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then((t=>(Nr("RestConnection","Received: ",t),t)),(e=>{throw Pr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,r,i,s){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Or,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=_c[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,s)=>{const o=new Cr;o.setWithCredentials(!0),o.listenOnce(Er.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case _r.NO_ERROR:const e=o.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case _r.TIMEOUT:Nr("Connection",'RPC "'+t+'" timed out'),s(new qr(Vr.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=o.getStatus();if(Nr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vr).indexOf(e)>=0?e:Vr.UNKNOWN}(t.status);s(new qr(e,t.message))}else s(new qr(Vr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new qr(Vr.UNAVAILABLE,"Connection failed."));break;default:Ur()}}finally{Nr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=br(),s=wr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ir({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new Ec({Hr:t=>{l?Nr("Connection","Not sending because WebChannel is closed:",t):(u||(Nr("Connection","Opening WebChannel transport."),c.open(),u=!0),Nr("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,kr.EventType.OPEN,(()=>{l||Nr("Connection","WebChannel transport opened.")})),d(c,kr.EventType.CLOSE,(()=>{l||(l=!0,Nr("Connection","WebChannel transport closed"),h.io())})),d(c,kr.EventType.ERROR,(t=>{l||(l=!0,Pr("Connection","WebChannel transport errored:",t),h.io(new qr(Vr.UNAVAILABLE,"The operation could not be completed")))})),d(c,kr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Fr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Nr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=So[t];if(void 0!==e)return Co(e)}(t),n=i.message;void 0===e&&(e=Vr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.io(new qr(e,n)),c.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Tr.STAT_EVENT,(t=>{t.stat===Sr.PROXY?Nr("Connection","Detected buffering proxy"):t.stat===Sr.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new Zo(t,!0)}class kc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,r,i,s,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new kc(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===Vr.RESOURCE_EXHAUSTED?(Lr(e.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===Vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new qr(Vr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Nr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget((()=>this.Do===t?e():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xc extends Cc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.It=i}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=fa(this.It,t),n=function(t){if(!("targetChange"in t))return ni.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ni.min():e.readTime?ra(e.readTime):ni.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=la(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=hs(r)?{documents:ga(t,r)}:{query:va(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ea(t,e.resumeToken):e.snapshotVersion.compareTo(ni.min())>0&&(n.readTime=ta(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ba(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=la(this.It),e.removeTarget=t,this.Lo(e)}}class Ac extends Cc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(Fr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=ma(t.writeResults,t.commitTime),n=ra(t.commitTime);return this.listener.tu(n,e)}return Fr(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=la(this.It),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>pa(this.It,t)))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new qr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new qr(Vr.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.So._o(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new qr(Vr.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class Rc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Lr(e),this.uu=!1):Nr("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr((t=>{n.enqueueAndForget((async()=>{qc(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=jr(t);e.wu.add(4),await Lc(e),e.yu.set("Unknown"),e.wu.delete(4),await Nc(e)}(this))}))})),this.yu=new Rc(n,r)}}async function Nc(t){if(qc(t))for(const e of t.mu)await e(!0)}async function Lc(t){for(const e of t.mu)await e(!1)}function Pc(t,e){const n=jr(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Vc(n)?jc(n):su(n).Oo()&&Uc(n,e))}function Mc(t,e){const n=jr(t),r=su(n);n._u.delete(e),r.Oo()&&Fc(n,e),0===n._u.size&&(r.Oo()?r.$o():qc(n)&&n.yu.set("Unknown"))}function Uc(t,e){t.pu.Mt(e.targetId),su(t).Ho(e)}function Fc(t,e){t.pu.Mt(e),su(t).Jo(e)}function jc(t){t.pu=new Wo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),su(t).start(),t.yu.cu()}function Vc(t){return qc(t)&&!su(t).ko()&&t._u.size>0}function qc(t){return 0===jr(t).wu.size}function Bc(t){t.pu=void 0}async function $c(t){t._u.forEach(((e,n)=>{Uc(t,e)}))}async function zc(t,e){Bc(t),Vc(t)?(t.yu.lu(e),jc(t)):t.yu.set("Unknown")}async function Hc(t,e,n){if(t.yu.set("Online"),e instanceof Go&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gc(t,n)}else if(e instanceof zo?t.pu.Gt(e):e instanceof Ho?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ni.min()))try{const e=await uc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(r);i&&t._u.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(xi.EMPTY_BYTE_STRING,n.snapshotVersion)),Fc(t,e);const r=new Pa(n.target,e,1,n.sequenceNumber);Uc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Nr("RemoteStore","Failed to raise snapshot:",e),await Gc(t,e)}}async function Gc(t,e,n){if(!vi(e))throw e;t.wu.add(1),await Lc(t),t.yu.set("Offline"),n||(n=()=>uc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Nc(t)}))}function Kc(t,e){return e().catch((n=>Gc(t,n,e)))}async function Wc(t){const e=jr(t),n=ou(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Xc(e);)try{const t=await dc(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,Jc(e,t)}catch(t){await Gc(e,t)}Yc(e)&&Qc(e)}function Xc(t){return qc(t)&&t.du.length<10}function Jc(t,e){t.du.push(e);const n=ou(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Yc(t){return qc(t)&&!ou(t).ko()&&t.du.length>0}function Qc(t){ou(t).start()}async function Zc(t){ou(t).nu()}async function tu(t){const e=ou(t);for(const n of t.du)e.Zo(n.mutations)}async function eu(t,e,n){const r=t.du.shift(),i=Na.from(r,e,n);await Kc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Wc(t)}async function nu(t,e){e&&ou(t).Xo&&await async function(t,e){if(n=e.code,ko(n)&&n!==Vr.ABORTED){const n=t.du.shift();ou(t).Fo(),await Kc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Wc(t)}var n}(t,e),Yc(t)&&Qc(t)}async function ru(t,e){const n=jr(t);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=qc(n);n.wu.add(3),await Lc(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Nc(n)}async function iu(t,e){const n=jr(t);e?(n.wu.delete(2),await Nc(n)):e||(n.wu.add(2),await Lc(n),n.yu.set("Unknown"))}function su(t){return t.Iu||(t.Iu=function(t,e,n){const r=jr(t);return r.iu(),new xc(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:$c.bind(null,t),Zr:zc.bind(null,t),zo:Hc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),Vc(t)?jc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Bc(t))}))),t.Iu}function ou(t){return t.Tu||(t.Tu=function(t,e,n){const r=jr(t);return r.iu(),new Ac(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Zc.bind(null,t),Zr:nu.bind(null,t),eu:tu.bind(null,t),tu:eu.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await Wc(t)):(await t.Tu.stop(),t.du.length>0&&(Nr("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class au{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new au(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new qr(Vr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(t,e){if(Lr("AsyncQueue",`${e}: ${t}`),vi(t))return new qr(Vr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ai.comparator(e.key,n.key):(t,e)=>ai.comparator(t.key,e.key),this.keyedMap=Do(),this.sortedSet=new Ei(this.comparator)}static emptySet(t){return new uu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof uu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new uu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Eu=new Ei(ai.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Ur():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class hu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new hu(t,e,uu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.Ru=void 0,this.listeners=[]}}class fu{constructor(){this.queries=new xo((t=>Us(t)),Ms),this.onlineState="Unknown",this.bu=new Set}}async function pu(t,e){const n=jr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new du),i)try{s.Ru=await n.onListen(r)}catch(t){const n=cu(t,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&yu(n)}async function mu(t,e){const n=jr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gu(t,e){const n=jr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(i)&&(r=!0);e.Ru=i}}r&&yu(n)}function vu(t,e,n){const r=jr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function yu(t){t.bu.forEach((t=>{t.next()}))}class bu{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new hu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=hu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(t){this.key=t}}class _u{constructor(t){this.key=t}}class Eu{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=jo(),this.mutatedKeys=jo(),this.Gu=qs(t),this.Qu=new uu(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new lu,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=js(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ur()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new hu(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=jo(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new _u(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new wu(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=jo();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return hu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Tu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Su{constructor(t){this.key=t,this.nc=!1}}class Iu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new xo((t=>Us(t)),Ms),this.rc=new Map,this.oc=new Set,this.uc=new Ei(ai.comparator),this.cc=new Map,this.ac=new Wa,this.hc={},this.lc=new Map,this.fc=Ba.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ku(t,e){const n=Hu(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const t=await fc(n.localStore,Ls(e));n.isPrimaryClient&&Pc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Cu(n,e,r,"current"===s,t.resumeToken)}return i}async function Cu(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await mc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return ju(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await mc(t.localStore,e,!0),o=new Eu(e,s.Hi),a=o.Wu(s.documents),c=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);ju(t,n,u.Xu);const l=new Tu(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function xu(t,e){const n=jr(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((t=>!Ms(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await pc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Mc(n.remoteStore,r.targetId),Uu(n,r.targetId)})).catch(mi)):(Uu(n,r.targetId),await pc(n.localStore,r.targetId,!0))}async function Au(t,e,n){const r=Gu(t);try{const t=await function(t,e){const n=jr(t),r=ei.now(),i=e.reduce(((t,e)=>t.add(e.key)),jo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Oo(),c=jo();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=po(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new vo(t.key,e,is(e.value.mapValue),ao.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:No(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new Ei(Zr)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Bu(r,t.changes),await Wc(r.remoteStore)}catch(t){const e=cu(t,"Failed to persist write");n.reject(e)}}async function Ou(t,e){const n=jr(t);try{const t=await lc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(Fr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?Fr(r.nc):t.removedDocuments.size>0&&(Fr(r.nc),r.nc=!1))})),await Bu(n,t,e)}catch(t){await mi(t)}}function Ru(t,e,n){const r=jr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=jr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Pu(e)&&(r=!0)})),r&&yu(n)}(r.eventManager,e),t.length&&r.sc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Du(t,e,n){const r=jr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let t=new Ei(ai.comparator);t=t.insert(s,ss.newNoDocument(s,ni.min()));const n=jo().add(s),i=new Bo(ni.min(),new Map,new Ii(Zr),t,n);await Ou(r,i),r.uc=r.uc.remove(s),r.cc.delete(e),qu(r)}else await pc(r.localStore,e,!1).then((()=>Uu(r,e,n))).catch(mi)}async function Nu(t,e){const n=jr(t),r=e.batch.batchId;try{const t=await cc(n.localStore,e);Mu(n,r,null),Pu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bu(n,t)}catch(t){await mi(t)}}async function Lu(t,e,n){const r=jr(t);try{const t=await function(t,e){const n=jr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Fr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Mu(r,e,n),Pu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bu(r,t)}catch(n){await mi(n)}}function Pu(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Mu(t,e,n){const r=jr(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Fu(t,e)}))}function Fu(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Mc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),qu(t))}function ju(t,e,n){for(const r of n)r instanceof wu?(t.ac.addReference(r.key,e),Vu(t,r)):r instanceof _u?(Nr("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Fu(t,r.key)):Ur()}function Vu(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),t.oc.add(r),qu(t))}function qu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ai(ii.fromString(e)),r=t.fc.next();t.cc.set(r,new Su(n)),t.uc=t.uc.insert(n,r),Pc(t.remoteStore,new Pa(Ls(xs(n.path)),r,2,yi.at))}}async function Bu(t,e,n){const r=jr(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{o.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=rc.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.sc.zo(i),await async function(t,e){const n=jr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gi.forEach(e,(e=>gi.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>gi.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!vi(t))throw t;Nr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,i)}}}(r.localStore,s))}async function $u(t,e){const n=jr(t);if(!n.currentUser.isEqual(e)){Nr("SyncEngine","User change. New user:",e.toKey());const t=await ac(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new qr(Vr.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Bu(n,t.ji)}}function zu(t,e){const n=jr(t),r=n.cc.get(e);if(r&&r.nc)return jo().add(r.key);{let t=jo();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function Hu(t){const e=jr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ou.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Du.bind(null,e),e.sc.zo=gu.bind(null,e.eventManager),e.sc.wc=vu.bind(null,e.eventManager),e}function Gu(t){const e=jr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lu.bind(null,e),e}class Ku{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Ic(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return oc(this.persistence,new ic,t.initialUser,this.It)}yc(t){return new tc(nc.Bs,this.It)}gc(t){return new yc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ru(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=$u.bind(null,this.syncEngine),await iu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fu}createDatastore(t){const e=Ic(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Tc(r));var r;return function(t,e,n,r){return new Oc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Ru(this.syncEngine,t,0),s=wc.C()?new wc:new bc,new Dc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Iu(t,e,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=jr(t);Nr("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Lc(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t,e,n){if(!n)throw new qr(Vr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ju(t,e,n,r){if(!0===e&&!0===r)throw new qr(Vr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yu(t){if(!ai.isDocumentKey(t))throw new qr(Vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(ai.isDocumentKey(t))throw new qr(Vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ur()}function tl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new qr(Vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new qr(Vr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const el=new Map;class nl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new qr(Vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new qr(Vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ju("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qr(Vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new qr(Vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new zr;switch(t.type){case"gapi":const e=t.client;return new Wr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new qr(Vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=el.get(t);e&&(Nr("ComponentProvider","Removing Datastore"),el.delete(t),e.terminate())}(this),Promise.resolve()}}function il(t,e,n,r={}){var i;const s=(t=tl(t,rl))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Ar.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new qr(Vr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(s)}t._authCredentials=new Hr(new $r(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new al(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sl(this.firestore,t,this._key)}}class ol{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ol(this.firestore,t,this._query)}}class al extends ol{constructor(t,e,n){super(t,e,xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sl(this.firestore,null,new ai(t))}withConverter(t){return new al(this.firestore,t,this._path)}}function cl(t,e,...n){if(t=(0,a.m9)(t),Xu("collection","path",e),t instanceof rl){const r=ii.fromString(e,...n);return Qu(r),new al(t,null,r)}{if(!(t instanceof sl||t instanceof al))throw new qr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ii.fromString(e,...n));return Qu(r),new al(t.firestore,null,r)}}function ul(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Qr.R()),Xu("doc","path",e),t instanceof rl){const r=ii.fromString(e,...n);return Yu(r),new sl(t,null,new ai(r))}{if(!(t instanceof sl||t instanceof al))throw new qr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ii.fromString(e,...n));return Yu(r),new sl(t.firestore,t instanceof al?t.converter:null,new ai(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Qr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Nr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Nr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function dl(t,e){t.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ac(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function fl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pl(t);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ru(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ru(e.remoteStore,n))),t.onlineComponents=e}async function pl(t){return t.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await dl(t,new Ku)),t.offlineComponents}async function ml(t){return t.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await fl(t,new Wu)),t.onlineComponents}function gl(t){return ml(t).then((t=>t.syncEngine))}async function vl(t){const e=await ml(t),n=e.eventManager;return n.onListen=ku.bind(null,e.syncEngine),n.onUnlisten=xu.bind(null,e.syncEngine),n}function yl(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new ll({next:s=>{e.enqueueAndForget((()=>mu(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new qr(Vr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new qr(Vr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new bu(xs(n.path),s,{includeMetadataChanges:!0,ku:!0});return pu(t,o)}(await vl(t),t.asyncQueue,e,n,r))),r.promise}function bl(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new ll({next:n=>{e.enqueueAndForget((()=>mu(t,o))),n.fromCache&&"server"===r.source?i.reject(new qr(Vr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new bu(n,s,{includeMetadataChanges:!0,ku:!0});return pu(t,o)}(await vl(t),t.asyncQueue,e,n,r))),r.promise}class wl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new kc(this,"async_queue_retry"),this.Wc=()=>{const t=Sc();t&&Nr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Sc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Sc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new Br;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(E){if(!vi(E))throw E;Nr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Lr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=au.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&Ur()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}function _l(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class El extends rl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new wl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Il(this),this._firestoreClient.terminate()}}function Tl(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&il(s,...t)}return s}function Sl(t){return t._firestoreClient||Il(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Il(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Mi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hl(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kl(xi.fromBase64String(t))}catch(t){throw new qr(Vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new kl(xi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new qr(Vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new qr(Vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new qr(Vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Zr(this._lat,t._lat)||Zr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=/^__.*__$/;class Rl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new vo(t,this.data,this.fieldMask,e,this.fieldTransforms):new go(t,this.data,e,this.fieldTransforms)}}class Dl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new vo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Nl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ur()}}class Ll{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Ll(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Zl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Nl(this.sa)&&Ol.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Pl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Ic(t)}da(t,e,n,r=!1){return new Ll({sa:t,methodName:e,fa:n,path:oi.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ml(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new Pl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ul(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Xl("Data must be an object, but it was:",o,r);const a=Kl(r,o);let c,u;if(s.merge)c=new Ci(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Jl(e,r,n);if(!o.contains(i))throw new qr(Vr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);th(t,i)||t.push(i)}c=new Ci(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Rl(new rs(a),c,u)}class Fl extends xl{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fl}}function jl(t,e,n){return new Ll({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Vl extends xl{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=jl(this,t,!0),n=this._a.map((t=>Gl(t,e))),r=new Ys(n);return new io(t.path,r)}isEqual(t){return this===t}}class ql extends xl{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=jl(this,t,!0),n=this._a.map((t=>Gl(t,e))),r=new Zs(n);return new io(t.path,r)}isEqual(t){return this===t}}class Bl extends xl{constructor(t,e){super(t),this.wa=e}_toFieldTransform(t){const e=new eo(t.It,Hs(t.It,this.wa));return new io(t.path,e)}isEqual(t){return this===t}}function $l(t,e,n,r){const i=t.da(1,e,n);Xl("Data must be an object, but it was:",i,r);const s=[],o=rs.empty();wi(r,((t,r)=>{const c=Ql(e,t,n);r=(0,a.m9)(r);const u=i.ca(c);if(r instanceof Fl)s.push(c);else{const t=Gl(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new Ci(s);return new Dl(o,c,i.fieldTransforms)}function zl(t,e,n,r,i,s){const o=t.da(1,e,n),c=[Jl(e,r,n)],u=[i];if(s.length%2!=0)throw new qr(Vr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Jl(e,s[a])),u.push(s[a+1]);const l=[],h=rs.empty();for(let f=c.length-1;f>=0;--f)if(!th(l,c[f])){const t=c[f];let e=u[f];e=(0,a.m9)(e);const n=o.ca(t);if(e instanceof Fl)l.push(t);else{const r=Gl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new Ci(l);return new Dl(h,d,o.fieldTransforms)}function Hl(t,e,n,r=!1){return Gl(n,t.da(r?4:3,e))}function Gl(t,e){if(Wl(t=(0,a.m9)(t)))return Xl("Unsupported field value:",e,t),Kl(t,e);if(t instanceof xl)return function(t,e){if(!Nl(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Gl(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Hs(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ei.fromDate(t);return{timestampValue:ta(e.It,n)}}if(t instanceof ei){const n=new ei(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ta(e.It,n)}}if(t instanceof Al)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof kl)return{bytesValue:ea(e.It,t._byteString)};if(t instanceof sl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ia(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Zu(t)}`)}(t,e)}function Kl(t,e){const n={};return _i(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wi(t,((t,r)=>{const i=Gl(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Wl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ei||t instanceof Al||t instanceof kl||t instanceof sl||t instanceof xl)}function Xl(t,e,n){if(!Wl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Zu(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Jl(t,e,n){if((e=(0,a.m9)(e))instanceof Cl)return e._internalPath;if("string"==typeof e)return Ql(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yl=new RegExp("[~\\*/\\[\\]]");function Ql(t,e,n){if(e.search(Yl)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cl(...e.split("."))._internalPath}catch(r){throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new qr(Vr.INVALID_ARGUMENT,a+t+c)}function th(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nh extends eh{data(){return super.data()}}function rh(t,e){return"string"==typeof e?Ql(t,e):e instanceof Cl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new qr(Vr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}function oh(t,...e){for(const n of e)t=n._apply(t);return t}class ah extends sh{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=Ml(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new qr(Vr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lh(o,s);const e=[];for(const n of o)e.push(uh(r,t,n));a={arrayValue:{values:e}}}else a=uh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lh(o,s),a=Hl(n,e,o,"in"===s||"not-in"===s);const c=ds.create(i,s,a);return function(t,e){if(e.dt()){const n=Rs(t);if(null!==n&&!n.isEqual(e.field))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Os(t);null!==r&&hh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new qr(Vr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new qr(Vr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new ol(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function ch(t,e,n){const r=e,i=rh("where",t);return new ah(i,r,n)}function uh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new qr(Vr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ds(e)&&-1!==n.indexOf("/"))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ii.fromString(n));if(!ai.isDocumentKey(r))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xi(t,new ai(r))}if(n instanceof sl)return Xi(t,n._key);throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)}function lh(t,e){if(!Array.isArray(t)||0===t.length)throw new qr(Vr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new qr(Vr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function hh(t,e,n){if(!n.isEqual(e))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{convertValue(t,e="none"){switch(Bi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ri(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Di(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ur()}}convertObject(t,e){const n={};return wi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Al(Ri(t.latitude),Ri(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Li(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Pi(t));default:return null}}convertTimestamp(t){const e=Oi(t);return new ei(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ii.fromString(t);Fr(xa(n));const r=new Ui(n.get(1),n.get(3)),i=new ai(n.popFirst(5));return r.isEqual(e)||Lr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mh extends eh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(rh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gh extends mh{data(t={}){return super.data(t)}}class vh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ph(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new gh(this._firestore,this._userDataWriter,n.key,n,new ph(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new qr(Vr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new gh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ph(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new gh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ph(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:yh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ur()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bh(t){t=tl(t,sl);const e=tl(t.firestore,El);return yl(Sl(e),t._key).then((n=>Ch(e,t,n)))}class wh extends dh{constructor(t){super(),this.firestore=t}convertBytes(t){return new kl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sl(this.firestore,null,e)}}function _h(t){t=tl(t,ol);const e=tl(t.firestore,El),n=Sl(e),r=new wh(e);return ih(t._query),bl(n,t._query).then((n=>new vh(e,r,t,n)))}function Eh(t,e,n){t=tl(t,sl);const r=tl(t.firestore,El),i=fh(t.converter,e,n);return kh(r,[Ul(Ml(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ao.none())])}function Th(t,e,n,...r){t=tl(t,sl);const i=tl(t.firestore,El),s=Ml(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Cl?zl(s,"updateDoc",t._key,e,n,r):$l(s,"updateDoc",t._key,e),kh(i,[o.toMutation(t._key,ao.exists(!0))])}function Sh(t){return kh(tl(t.firestore,El),[new _o(t._key,ao.none())])}function Ih(t,...e){var n,r,i;t=(0,a.m9)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||_l(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(_l(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof sl)l=tl(t.firestore,El),h=xs(t._key.path),u={next:n=>{e[o]&&e[o](Ch(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=tl(t,ol);l=tl(n.firestore,El),h=n._query;const r=new wh(l);u={next:t=>{e[o]&&e[o](new vh(l,r,n,t))},error:e[o+1],complete:e[o+2]},ih(t._query)}return function(t,e,n,r){const i=new ll(r),s=new bu(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>pu(await vl(t),s))),()=>{i.bc(),t.asyncQueue.enqueueAndForget((async()=>mu(await vl(t),s)))}}(Sl(l),h,c,u)}function kh(t,e){return function(t,e){const n=new Br;return t.asyncQueue.enqueueAndForget((async()=>Au(await gl(t),e,n))),n.promise}(Sl(t),e)}function Ch(t,e,n){const r=n.docs.get(e._key),i=new wh(t);return new mh(t,i,e._key,r,new ph(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(...t){return new Vl("arrayUnion",t)}function Ah(...t){return new ql("arrayRemove",t)}function Oh(t){return new Bl("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Or=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new El(new Gr(t.getProvider("auth-internal")),new Jr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new qr(Vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(xr,"3.7.1",t),(0,i.KN)(xr,"3.7.1","esm2017")}()},1992:function(t,e,n){"use strict";n.d(e,{oq:function(){return _e},Jt:function(){return we},cF:function(){return Te},iH:function(){return Ee},KV:function(){return ye},B0:function(){return be}});n(2801),n(7658),n(3408),n(4590);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5,l=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends i.ZR{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function m(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function v(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function E(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function T(){return new h("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function k(){return new h("no-download-url","The given file does not have any download URLs.")}function C(t){return new h("invalid-argument",t)}function x(){return new h("app-deleted","The Firebase app was deleted.")}function A(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function R(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=D.makeFromUrl(t,e)}catch(r){return new D(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<b.length;o++){const e=b[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new D(t,i),e.postModify(n);break}}if(null==n)throw _(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function P(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return void 0!==t}function U(t){return"function"===typeof t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function j(t){return"string"===typeof t||t instanceof String}function V(t){return q()&&t instanceof Blob}function q(){return"undefined"!==typeof Blob}function B(t,e,n,r){if(r<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));class K{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,i=n.getStatus();if((!e||G(i,this.additionalRetryCodes_))&&this.retry){const e=n.getErrorCode()===H.ABORT;return void t(!1,new W(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new W(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());M(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?x():w();r(t)}else{const t=b();r(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function X(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function J(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Z(t,e,n,r,i,s,o=!0){const a=z(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Y(u,e),X(u,n),J(u,s),Q(u,r),new K(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function et(...t){const e=tt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(q())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function nt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class st{constructor(t,e){this.data=t,this.contentType=e||null}}function ot(t,e){switch(t){case it.RAW:return new st(at(e));case it.BASE64:case it.BASE64URL:return new st(ut(t,e));case it.DATA_URL:return new st(ht(e),dt(e))}throw f()}function at(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function ct(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(it.DATA_URL,"Malformed data URL.")}return at(e)}function ut(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rt(e)}catch(i){throw O(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ft(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ht(t){const e=new lt(t);return e.base64?ut(it.BASE64,e.rest):ct(e.rest)}function dt(t){const e=new lt(t);return e.contentType}function ft(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e){let n=0,r="";V(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(V(this.data_)){const n=this.data_,r=nt(n,t,e);return null===r?null:new pt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new pt(n,!0)}}static getBlob(...t){if(q()){const e=t.map((t=>t instanceof pt?t.data_:t));return new pt(et.apply(null,e))}{const e=t.map((t=>j(t)?ot(it.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new pt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function vt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return e}class wt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||bt}}let _t=null;function Et(t){return!j(t)||t.length<2?t:yt(t)}function Tt(){if(_t)return _t;const t=[];function e(t,e){return Et(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),_t=t,_t}function St(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new D(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return St(r,t),r}function kt(t,e,n){const r=mt(e);if(null===r)return null;const i=r;return It(t,i,n)}function Ct(t,e,n,r){const i=mt(e);if(null===i)return null;if(!j(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=$(a,n,r),u=z({alt:"media",token:e});return c+u}));return c[0]}function xt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){if(!t)throw f()}function Rt(t,e){function n(n,r){const i=kt(t,r,e);return Ot(null!==i),i}return n}function Dt(t,e){function n(n,r){const i=kt(t,r,e);return Ot(null!==i),Ct(i,r,t.host,t._protocol)}return n}function Nt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():g():402===e.getStatus()?m(t.bucket):403===e.getStatus()?y(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Lt(t){const e=Nt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=p(t.path)),i.serverResponse=r.serverResponse,i}return n}function Pt(t,e,n){const r=e.fullServerUrl(),i=$(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new At(i,s,Rt(t,n),o);return a.errorHandler=Lt(e),a}function Mt(t,e,n){const r=e.fullServerUrl(),i=$(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new At(i,s,Dt(t,n),o);return a.errorHandler=Lt(e),a}function Ut(t,e){const n=e.fullServerUrl(),r=$(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new At(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Lt(e),a}function Ft(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function jt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Ft(null,e)),r}function Vt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=jt(e,r,i),l=xt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=pt.getBlob(h,r,d);if(null===f)throw S();const p={name:u["fullPath"]},m=$(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new At(m,g,Rt(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Nt(e),y}class qt{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Bt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){Ot(!1)}const r=e||["active"];return Ot(!!n&&-1!==r.indexOf(n)),n}function $t(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jt(e,r,i),a={name:o["fullPath"]},c=$(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=xt(o,n),d=t.maxUploadRetryTime;function f(t){let e;Bt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Ot(!1)}return Ot(j(e)),e}const p=new At(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Nt(e),p}function zt(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(t){const e=Bt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Ot(!1)}n||Ot(!1);const i=Number(n);return Ot(!isNaN(i)),new qt(i,r.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new At(n,o,s,a);return c.headers=i,c.errorHandler=Nt(e),c}const Ht=262144;function Gt(t,e,n,r,i,s,o,a){const c=new qt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw I();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,d);if(null===m)throw S();function g(t,n){const i=Bt(t,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Rt(e,s)(t,n):null,new qt(o,a,"final"===i,u)}const v="POST",y=e.maxUploadRetryTime,b=new At(n,v,g,y);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Nt(t),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wt(t){switch(t){case"running":case"pausing":case"canceling":return Kt.RUNNING;case"paused":return Kt.PAUSED;case"success":return Kt.SUCCESS;case"canceled":return Kt.CANCELED;case"error":return Kt.ERROR;default:return Kt.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,n){const r=U(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt=null;class Qt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Zt extends Qt{initXhr(){this.xhr_.responseType="text"}}function te(){return Yt?Yt():new Zt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=Tt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{if(this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const e=this.isExponentialBackoffExpired();if(G(t.status,[])){if(!e)return this.sleepTime=Math.max(2*this.sleepTime,l),this._needToFetchStatus=!0,void this.completeTransitions_();t=b()}this._error=t,this._transition("error")}},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=$t(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,te,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const r=zt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,te,e,n);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Ht*this._chunkMultiplier,e=new qt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=Gt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,te,r,i,!1);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Ht*this._chunkMultiplier;2*t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Pt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,te,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Vt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,te,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Wt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new Xt(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Wt(this._state)){case Kt.SUCCESS:Jt(this._resolve.bind(null,this.snapshot))();break;case Kt.CANCELED:case Kt.ERROR:const e=this._reject;Jt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Wt(this._state);switch(e){case Kt.RUNNING:case Kt.PAUSED:t.next&&Jt(t.next.bind(t,this.snapshot))();break;case Kt.SUCCESS:t.complete&&Jt(t.complete.bind(t))();break;case Kt.CANCELED:case Kt.ERROR:t.error&&Jt(t.error.bind(t,this._error))();break;default:t.error&&Jt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e){this._service=t,this._location=e instanceof D?e:D.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ne(t,e)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new D(this._location.bucket,t);return new ne(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function re(t,e,n){t._throwIfRoot("uploadBytes");const r=Vt(t.storage,t._location,Tt(),new pt(e,!0),n);return t.storage.makeRequestWithTokens(r,te).then((e=>({metadata:e,ref:t})))}function ie(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ee(t,new pt(e),n)}function se(t){t._throwIfRoot("getDownloadURL");const e=Mt(t.storage,t._location,Tt());return t.storage.makeRequestWithTokens(e,te).then((t=>{if(null===t)throw k();return t}))}function oe(t){t._throwIfRoot("deleteObject");const e=Ut(t.storage,t._location);return t.storage.makeRequestWithTokens(e,te)}function ae(t,e){const n=vt(t._location.path,e),r=new D(t._location.bucket,n);return new ne(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return/^[A-Za-z]+:\/\//.test(t)}function ue(t,e){return new ne(t,e)}function le(t,e){if(t instanceof pe){const n=t;if(null==n._bucket)throw T();const r=new ne(n,n._bucket);return null!=e?le(r,e):r}return void 0!==e?ae(t,e):t}function he(t,e){if(e&&ce(e)){if(t instanceof pe)return ue(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return le(t,e)}function de(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:D.makeFromBucketSpec(n,t)}function fe(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,t.app.options.projectId))}class pe{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?D.makeFromBucketSpec(r,this._host):de(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=de(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ne(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new N(x());{const s=Z(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const me="@firebase/storage",ge="0.9.12",ve="storage";function ye(t,e,n){return t=(0,i.m9)(t),re(t,e,n)}function be(t,e,n){return t=(0,i.m9)(t),ie(t,e,n)}function we(t){return t=(0,i.m9)(t),se(t)}function _e(t){return t=(0,i.m9)(t),oe(t)}function Ee(t,e){return t=(0,i.m9)(t),he(t,e)}function Te(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,ve),s=n.getImmediate({identifier:e}),o=(0,i.P0)("storage");return o&&Se(s,...o),s}function Se(t,e,n,r={}){fe(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new pe(n,i,s,e,r.Jn)}function ke(){(0,r.Xd)(new s.wA(ve,Ie,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(me,ge,""),(0,r.KN)(me,ge,"esm2017")}ke()},6987:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return s(e,t),e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.parseFeed=e.FeedHandler=void 0;var c,u,l=a(n(8717)),h=o(n(2165)),d=n(7699);(function(t){t[t["image"]=0]="image",t[t["audio"]=1]="audio",t[t["video"]=2]="video",t[t["document"]=3]="document",t[t["executable"]=4]="executable"})(c||(c={})),function(t){t[t["sample"]=0]="sample",t[t["full"]=1]="full",t[t["nonstop"]=2]="nonstop"}(u||(u={}));var f=function(t){function e(e,n){var r=this;return"object"===typeof e&&(e=void 0,n=e),r=t.call(this,e,n)||this,r}return r(e,t),e.prototype.onend=function(){var t,e,n=g(w,this.dom);if(n){var r={};if("feed"===n.name){var i=n.children;r.type="atom",b(r,"id","id",i),b(r,"title","title",i);var s=y("href",g("link",i));s&&(r.link=s),b(r,"description","subtitle",i);var o=v("updated",i);o&&(r.updated=new Date(o)),b(r,"author","email",i,!0),r.items=m("entry",i).map((function(t){var e={},n=t.children;b(e,"id","id",n),b(e,"title","title",n);var r=y("href",g("link",n));r&&(e.link=r);var i=v("summary",n)||v("content",n);i&&(e.description=i);var s=v("updated",n);return s&&(e.pubDate=new Date(s)),e.media=p(n),e}))}else{i=null!==(e=null===(t=g("channel",n.children))||void 0===t?void 0:t.children)&&void 0!==e?e:[];r.type=n.name.substr(0,3),r.id="",b(r,"title","title",i),b(r,"link","link",i),b(r,"description","description",i);o=v("lastBuildDate",i);o&&(r.updated=new Date(o)),b(r,"author","managingEditor",i,!0),r.items=m("item",n.children).map((function(t){var e={},n=t.children;b(e,"id","guid",n),b(e,"title","title",n),b(e,"link","link",n),b(e,"description","description",n);var r=v("pubDate",n);return r&&(e.pubDate=new Date(r)),e.media=p(n),e}))}this.feed=r,this.handleCallback(null)}else this.handleCallback(new Error("couldn't find root of feed"))},e}(l.default);function p(t){return m("media:content",t).map((function(t){var e={medium:t.attribs.medium,isDefault:!!t.attribs.isDefault};return t.attribs.url&&(e.url=t.attribs.url),t.attribs.fileSize&&(e.fileSize=parseInt(t.attribs.fileSize,10)),t.attribs.type&&(e.type=t.attribs.type),t.attribs.expression&&(e.expression=t.attribs.expression),t.attribs.bitrate&&(e.bitrate=parseInt(t.attribs.bitrate,10)),t.attribs.framerate&&(e.framerate=parseInt(t.attribs.framerate,10)),t.attribs.samplingrate&&(e.samplingrate=parseInt(t.attribs.samplingrate,10)),t.attribs.channels&&(e.channels=parseInt(t.attribs.channels,10)),t.attribs.duration&&(e.duration=parseInt(t.attribs.duration,10)),t.attribs.height&&(e.height=parseInt(t.attribs.height,10)),t.attribs.width&&(e.width=parseInt(t.attribs.width,10)),t.attribs.lang&&(e.lang=t.attribs.lang),e}))}function m(t,e){return h.getElementsByTagName(t,e,!0)}function g(t,e){return h.getElementsByTagName(t,e,!0,1)[0]}function v(t,e,n){return void 0===n&&(n=!1),h.getText(h.getElementsByTagName(t,e,n,1)).trim()}function y(t,e){if(!e)return null;var n=e.attribs;return n[t]}function b(t,e,n,r,i){void 0===i&&(i=!1);var s=v(n,r,i);s&&(t[e]=s)}function w(t){return"rss"===t||"feed"===t||"rdf:RDF"===t}function _(t,e){void 0===e&&(e={xmlMode:!0});var n=new f(e);return new d.Parser(n,e).end(t),n.feed}e.FeedHandler=f,e.parseFeed=_},7699:function(t,e,n){"use strict";n(7658);var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Parser=void 0;var i=r(n(1721)),s=new Set(["input","option","optgroup","select","button","datalist","textarea"]),o=new Set(["p"]),a={tr:new Set(["tr","th","td"]),th:new Set(["th"]),td:new Set(["thead","th","td"]),body:new Set(["head","link","script"]),li:new Set(["li"]),p:o,h1:o,h2:o,h3:o,h4:o,h5:o,h6:o,select:s,input:s,output:s,button:s,datalist:s,textarea:s,option:new Set(["option"]),optgroup:new Set(["optgroup","option"]),dd:new Set(["dt","dd"]),dt:new Set(["dt","dd"]),address:o,article:o,aside:o,blockquote:o,details:o,div:o,dl:o,fieldset:o,figcaption:o,figure:o,footer:o,form:o,header:o,hr:o,main:o,nav:o,ol:o,pre:o,section:o,table:o,ul:o,rt:new Set(["rt","rp"]),rp:new Set(["rt","rp"]),tbody:new Set(["thead","tbody"]),tfoot:new Set(["thead","tbody"])},c=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]),u=new Set(["math","svg"]),l=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),h=/\s|\//,d=function(){function t(t,e){var n,r,s,o,a;void 0===e&&(e={}),this.startIndex=0,this.endIndex=null,this.tagname="",this.attribname="",this.attribvalue="",this.attribs=null,this.stack=[],this.foreignContext=[],this.options=e,this.cbs=null!==t&&void 0!==t?t:{},this.lowerCaseTagNames=null!==(n=e.lowerCaseTags)&&void 0!==n?n:!e.xmlMode,this.lowerCaseAttributeNames=null!==(r=e.lowerCaseAttributeNames)&&void 0!==r?r:!e.xmlMode,this.tokenizer=new(null!==(s=e.Tokenizer)&&void 0!==s?s:i.default)(this.options,this),null===(a=(o=this.cbs).onparserinit)||void 0===a||a.call(o,this)}return t.prototype.updatePosition=function(t){null===this.endIndex?this.tokenizer.sectionStart<=t?this.startIndex=0:this.startIndex=this.tokenizer.sectionStart-t:this.startIndex=this.endIndex+1,this.endIndex=this.tokenizer.getAbsoluteIndex()},t.prototype.ontext=function(t){var e,n;this.updatePosition(1),this.endIndex--,null===(n=(e=this.cbs).ontext)||void 0===n||n.call(e,t)},t.prototype.onopentagname=function(t){var e,n;if(this.lowerCaseTagNames&&(t=t.toLowerCase()),this.tagname=t,!this.options.xmlMode&&Object.prototype.hasOwnProperty.call(a,t)){var r=void 0;while(this.stack.length>0&&a[t].has(r=this.stack[this.stack.length-1]))this.onclosetag(r)}!this.options.xmlMode&&c.has(t)||(this.stack.push(t),u.has(t)?this.foreignContext.push(!0):l.has(t)&&this.foreignContext.push(!1)),null===(n=(e=this.cbs).onopentagname)||void 0===n||n.call(e,t),this.cbs.onopentag&&(this.attribs={})},t.prototype.onopentagend=function(){var t,e;this.updatePosition(1),this.attribs&&(null===(e=(t=this.cbs).onopentag)||void 0===e||e.call(t,this.tagname,this.attribs),this.attribs=null),!this.options.xmlMode&&this.cbs.onclosetag&&c.has(this.tagname)&&this.cbs.onclosetag(this.tagname),this.tagname=""},t.prototype.onclosetag=function(t){if(this.updatePosition(1),this.lowerCaseTagNames&&(t=t.toLowerCase()),(u.has(t)||l.has(t))&&this.foreignContext.pop(),!this.stack.length||!this.options.xmlMode&&c.has(t))this.options.xmlMode||"br"!==t&&"p"!==t||(this.onopentagname(t),this.closeCurrentTag());else{var e=this.stack.lastIndexOf(t);if(-1!==e)if(this.cbs.onclosetag){e=this.stack.length-e;while(e--)this.cbs.onclosetag(this.stack.pop())}else this.stack.length=e;else"p"!==t||this.options.xmlMode||(this.onopentagname(t),this.closeCurrentTag())}},t.prototype.onselfclosingtag=function(){this.options.xmlMode||this.options.recognizeSelfClosing||this.foreignContext[this.foreignContext.length-1]?this.closeCurrentTag():this.onopentagend()},t.prototype.closeCurrentTag=function(){var t,e,n=this.tagname;this.onopentagend(),this.stack[this.stack.length-1]===n&&(null===(e=(t=this.cbs).onclosetag)||void 0===e||e.call(t,n),this.stack.pop())},t.prototype.onattribname=function(t){this.lowerCaseAttributeNames&&(t=t.toLowerCase()),this.attribname=t},t.prototype.onattribdata=function(t){this.attribvalue+=t},t.prototype.onattribend=function(t){var e,n;null===(n=(e=this.cbs).onattribute)||void 0===n||n.call(e,this.attribname,this.attribvalue,t),this.attribs&&!Object.prototype.hasOwnProperty.call(this.attribs,this.attribname)&&(this.attribs[this.attribname]=this.attribvalue),this.attribname="",this.attribvalue=""},t.prototype.getInstructionName=function(t){var e=t.search(h),n=e<0?t:t.substr(0,e);return this.lowerCaseTagNames&&(n=n.toLowerCase()),n},t.prototype.ondeclaration=function(t){if(this.cbs.onprocessinginstruction){var e=this.getInstructionName(t);this.cbs.onprocessinginstruction("!"+e,"!"+t)}},t.prototype.onprocessinginstruction=function(t){if(this.cbs.onprocessinginstruction){var e=this.getInstructionName(t);this.cbs.onprocessinginstruction("?"+e,"?"+t)}},t.prototype.oncomment=function(t){var e,n,r,i;this.updatePosition(4),null===(n=(e=this.cbs).oncomment)||void 0===n||n.call(e,t),null===(i=(r=this.cbs).oncommentend)||void 0===i||i.call(r)},t.prototype.oncdata=function(t){var e,n,r,i,s,o;this.updatePosition(1),this.options.xmlMode||this.options.recognizeCDATA?(null===(n=(e=this.cbs).oncdatastart)||void 0===n||n.call(e),null===(i=(r=this.cbs).ontext)||void 0===i||i.call(r,t),null===(o=(s=this.cbs).oncdataend)||void 0===o||o.call(s)):this.oncomment("[CDATA["+t+"]]")},t.prototype.onerror=function(t){var e,n;null===(n=(e=this.cbs).onerror)||void 0===n||n.call(e,t)},t.prototype.onend=function(){var t,e;if(this.cbs.onclosetag)for(var n=this.stack.length;n>0;this.cbs.onclosetag(this.stack[--n]));null===(e=(t=this.cbs).onend)||void 0===e||e.call(t)},t.prototype.reset=function(){var t,e,n,r;null===(e=(t=this.cbs).onreset)||void 0===e||e.call(t),this.tokenizer.reset(),this.tagname="",this.attribname="",this.attribs=null,this.stack=[],null===(r=(n=this.cbs).onparserinit)||void 0===r||r.call(n,this)},t.prototype.parseComplete=function(t){this.reset(),this.end(t)},t.prototype.write=function(t){this.tokenizer.write(t)},t.prototype.end=function(t){this.tokenizer.end(t)},t.prototype.pause=function(){this.tokenizer.pause()},t.prototype.resume=function(){this.tokenizer.resume()},t.prototype.parseChunk=function(t){this.write(t)},t.prototype.done=function(t){this.end(t)},t}();e.Parser=d},1721:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(8065)),s=r(n(9323)),o=r(n(9591)),a=r(n(2586));function c(t){return" "===t||"\n"===t||"\t"===t||"\f"===t||"\r"===t}function u(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}function l(t,e,n){var r=t.toLowerCase();return t===r?function(t,i){i===r?t._state=e:(t._state=n,t._index--)}:function(i,s){s===r||s===t?i._state=e:(i._state=n,i._index--)}}function h(t,e){var n=t.toLowerCase();return function(r,i){i===n||i===t?r._state=e:(r._state=3,r._index--)}}var d=l("C",24,16),f=l("D",25,16),p=l("A",26,16),m=l("T",27,16),g=l("A",28,16),v=h("R",35),y=h("I",36),b=h("P",37),w=h("T",38),_=l("R",40,1),E=l("I",41,1),T=l("P",42,1),S=l("T",43,1),I=h("Y",45),k=h("L",46),C=h("E",47),x=l("Y",49,1),A=l("L",50,1),O=l("E",51,1),R=h("I",54),D=h("T",55),N=h("L",56),L=h("E",57),P=l("I",58,1),M=l("T",59,1),U=l("L",60,1),F=l("E",61,1),j=l("#",63,64),V=l("X",66,65),q=function(){function t(t,e){var n;this._state=1,this.buffer="",this.sectionStart=0,this._index=0,this.bufferOffset=0,this.baseState=1,this.special=1,this.running=!0,this.ended=!1,this.cbs=e,this.xmlMode=!!(null===t||void 0===t?void 0:t.xmlMode),this.decodeEntities=null===(n=null===t||void 0===t?void 0:t.decodeEntities)||void 0===n||n}return t.prototype.reset=function(){this._state=1,this.buffer="",this.sectionStart=0,this._index=0,this.bufferOffset=0,this.baseState=1,this.special=1,this.running=!0,this.ended=!1},t.prototype.write=function(t){this.ended&&this.cbs.onerror(Error(".write() after done!")),this.buffer+=t,this.parse()},t.prototype.end=function(t){this.ended&&this.cbs.onerror(Error(".end() after done!")),t&&this.write(t),this.ended=!0,this.running&&this.finish()},t.prototype.pause=function(){this.running=!1},t.prototype.resume=function(){this.running=!0,this._index<this.buffer.length&&this.parse(),this.ended&&this.finish()},t.prototype.getAbsoluteIndex=function(){return this.bufferOffset+this._index},t.prototype.stateText=function(t){"<"===t?(this._index>this.sectionStart&&this.cbs.ontext(this.getSection()),this._state=2,this.sectionStart=this._index):!this.decodeEntities||"&"!==t||1!==this.special&&4!==this.special||(this._index>this.sectionStart&&this.cbs.ontext(this.getSection()),this.baseState=1,this._state=62,this.sectionStart=this._index)},t.prototype.isTagStartChar=function(t){return u(t)||this.xmlMode&&!c(t)&&"/"!==t&&">"!==t},t.prototype.stateBeforeTagName=function(t){"/"===t?this._state=5:"<"===t?(this.cbs.ontext(this.getSection()),this.sectionStart=this._index):">"===t||1!==this.special||c(t)?this._state=1:"!"===t?(this._state=15,this.sectionStart=this._index+1):"?"===t?(this._state=17,this.sectionStart=this._index+1):this.isTagStartChar(t)?(this._state=this.xmlMode||"s"!==t&&"S"!==t?this.xmlMode||"t"!==t&&"T"!==t?3:52:32,this.sectionStart=this._index):this._state=1},t.prototype.stateInTagName=function(t){("/"===t||">"===t||c(t))&&(this.emitToken("onopentagname"),this._state=8,this._index--)},t.prototype.stateBeforeClosingTagName=function(t){c(t)||(">"===t?this._state=1:1!==this.special?4===this.special||"s"!==t&&"S"!==t?4!==this.special||"t"!==t&&"T"!==t?(this._state=1,this._index--):this._state=53:this._state=33:this.isTagStartChar(t)?(this._state=6,this.sectionStart=this._index):(this._state=20,this.sectionStart=this._index))},t.prototype.stateInClosingTagName=function(t){(">"===t||c(t))&&(this.emitToken("onclosetag"),this._state=7,this._index--)},t.prototype.stateAfterClosingTagName=function(t){">"===t&&(this._state=1,this.sectionStart=this._index+1)},t.prototype.stateBeforeAttributeName=function(t){">"===t?(this.cbs.onopentagend(),this._state=1,this.sectionStart=this._index+1):"/"===t?this._state=4:c(t)||(this._state=9,this.sectionStart=this._index)},t.prototype.stateInSelfClosingTag=function(t){">"===t?(this.cbs.onselfclosingtag(),this._state=1,this.sectionStart=this._index+1,this.special=1):c(t)||(this._state=8,this._index--)},t.prototype.stateInAttributeName=function(t){("="===t||"/"===t||">"===t||c(t))&&(this.cbs.onattribname(this.getSection()),this.sectionStart=-1,this._state=10,this._index--)},t.prototype.stateAfterAttributeName=function(t){"="===t?this._state=11:"/"===t||">"===t?(this.cbs.onattribend(void 0),this._state=8,this._index--):c(t)||(this.cbs.onattribend(void 0),this._state=9,this.sectionStart=this._index)},t.prototype.stateBeforeAttributeValue=function(t){'"'===t?(this._state=12,this.sectionStart=this._index+1):"'"===t?(this._state=13,this.sectionStart=this._index+1):c(t)||(this._state=14,this.sectionStart=this._index,this._index--)},t.prototype.handleInAttributeValue=function(t,e){t===e?(this.emitToken("onattribdata"),this.cbs.onattribend(e),this._state=8):this.decodeEntities&&"&"===t&&(this.emitToken("onattribdata"),this.baseState=this._state,this._state=62,this.sectionStart=this._index)},t.prototype.stateInAttributeValueDoubleQuotes=function(t){this.handleInAttributeValue(t,'"')},t.prototype.stateInAttributeValueSingleQuotes=function(t){this.handleInAttributeValue(t,"'")},t.prototype.stateInAttributeValueNoQuotes=function(t){c(t)||">"===t?(this.emitToken("onattribdata"),this.cbs.onattribend(null),this._state=8,this._index--):this.decodeEntities&&"&"===t&&(this.emitToken("onattribdata"),this.baseState=this._state,this._state=62,this.sectionStart=this._index)},t.prototype.stateBeforeDeclaration=function(t){this._state="["===t?23:"-"===t?18:16},t.prototype.stateInDeclaration=function(t){">"===t&&(this.cbs.ondeclaration(this.getSection()),this._state=1,this.sectionStart=this._index+1)},t.prototype.stateInProcessingInstruction=function(t){">"===t&&(this.cbs.onprocessinginstruction(this.getSection()),this._state=1,this.sectionStart=this._index+1)},t.prototype.stateBeforeComment=function(t){"-"===t?(this._state=19,this.sectionStart=this._index+1):this._state=16},t.prototype.stateInComment=function(t){"-"===t&&(this._state=21)},t.prototype.stateInSpecialComment=function(t){">"===t&&(this.cbs.oncomment(this.buffer.substring(this.sectionStart,this._index)),this._state=1,this.sectionStart=this._index+1)},t.prototype.stateAfterComment1=function(t){this._state="-"===t?22:19},t.prototype.stateAfterComment2=function(t){">"===t?(this.cbs.oncomment(this.buffer.substring(this.sectionStart,this._index-2)),this._state=1,this.sectionStart=this._index+1):"-"!==t&&(this._state=19)},t.prototype.stateBeforeCdata6=function(t){"["===t?(this._state=29,this.sectionStart=this._index+1):(this._state=16,this._index--)},t.prototype.stateInCdata=function(t){"]"===t&&(this._state=30)},t.prototype.stateAfterCdata1=function(t){this._state="]"===t?31:29},t.prototype.stateAfterCdata2=function(t){">"===t?(this.cbs.oncdata(this.buffer.substring(this.sectionStart,this._index-2)),this._state=1,this.sectionStart=this._index+1):"]"!==t&&(this._state=29)},t.prototype.stateBeforeSpecialS=function(t){"c"===t||"C"===t?this._state=34:"t"===t||"T"===t?this._state=44:(this._state=3,this._index--)},t.prototype.stateBeforeSpecialSEnd=function(t){2!==this.special||"c"!==t&&"C"!==t?3!==this.special||"t"!==t&&"T"!==t?this._state=1:this._state=48:this._state=39},t.prototype.stateBeforeSpecialLast=function(t,e){("/"===t||">"===t||c(t))&&(this.special=e),this._state=3,this._index--},t.prototype.stateAfterSpecialLast=function(t,e){">"===t||c(t)?(this.special=1,this._state=6,this.sectionStart=this._index-e,this._index--):this._state=1},t.prototype.parseFixedEntity=function(t){if(void 0===t&&(t=this.xmlMode?a.default:s.default),this.sectionStart+1<this._index){var e=this.buffer.substring(this.sectionStart+1,this._index);Object.prototype.hasOwnProperty.call(t,e)&&(this.emitPartial(t[e]),this.sectionStart=this._index+1)}},t.prototype.parseLegacyEntity=function(){var t=this.sectionStart+1,e=Math.min(this._index-t,6);while(e>=2){var n=this.buffer.substr(t,e);if(Object.prototype.hasOwnProperty.call(o.default,n))return this.emitPartial(o.default[n]),void(this.sectionStart+=e+1);e--}},t.prototype.stateInNamedEntity=function(t){";"===t?(this.parseFixedEntity(),1===this.baseState&&this.sectionStart+1<this._index&&!this.xmlMode&&this.parseLegacyEntity(),this._state=this.baseState):(t<"0"||t>"9")&&!u(t)&&(this.xmlMode||this.sectionStart+1===this._index||(1!==this.baseState?"="!==t&&this.parseFixedEntity(o.default):this.parseLegacyEntity()),this._state=this.baseState,this._index--)},t.prototype.decodeNumericEntity=function(t,e,n){var r=this.sectionStart+t;if(r!==this._index){var s=this.buffer.substring(r,this._index),o=parseInt(s,e);this.emitPartial(i.default(o)),this.sectionStart=n?this._index+1:this._index}this._state=this.baseState},t.prototype.stateInNumericEntity=function(t){";"===t?this.decodeNumericEntity(2,10,!0):(t<"0"||t>"9")&&(this.xmlMode?this._state=this.baseState:this.decodeNumericEntity(2,10,!1),this._index--)},t.prototype.stateInHexEntity=function(t){";"===t?this.decodeNumericEntity(3,16,!0):(t<"a"||t>"f")&&(t<"A"||t>"F")&&(t<"0"||t>"9")&&(this.xmlMode?this._state=this.baseState:this.decodeNumericEntity(3,16,!1),this._index--)},t.prototype.cleanup=function(){this.sectionStart<0?(this.buffer="",this.bufferOffset+=this._index,this._index=0):this.running&&(1===this._state?(this.sectionStart!==this._index&&this.cbs.ontext(this.buffer.substr(this.sectionStart)),this.buffer="",this.bufferOffset+=this._index,this._index=0):this.sectionStart===this._index?(this.buffer="",this.bufferOffset+=this._index,this._index=0):(this.buffer=this.buffer.substr(this.sectionStart),this._index-=this.sectionStart,this.bufferOffset+=this.sectionStart),this.sectionStart=0)},t.prototype.parse=function(){while(this._index<this.buffer.length&&this.running){var t=this.buffer.charAt(this._index);1===this._state?this.stateText(t):12===this._state?this.stateInAttributeValueDoubleQuotes(t):9===this._state?this.stateInAttributeName(t):19===this._state?this.stateInComment(t):20===this._state?this.stateInSpecialComment(t):8===this._state?this.stateBeforeAttributeName(t):3===this._state?this.stateInTagName(t):6===this._state?this.stateInClosingTagName(t):2===this._state?this.stateBeforeTagName(t):10===this._state?this.stateAfterAttributeName(t):13===this._state?this.stateInAttributeValueSingleQuotes(t):11===this._state?this.stateBeforeAttributeValue(t):5===this._state?this.stateBeforeClosingTagName(t):7===this._state?this.stateAfterClosingTagName(t):32===this._state?this.stateBeforeSpecialS(t):21===this._state?this.stateAfterComment1(t):14===this._state?this.stateInAttributeValueNoQuotes(t):4===this._state?this.stateInSelfClosingTag(t):16===this._state?this.stateInDeclaration(t):15===this._state?this.stateBeforeDeclaration(t):22===this._state?this.stateAfterComment2(t):18===this._state?this.stateBeforeComment(t):33===this._state?this.stateBeforeSpecialSEnd(t):53===this._state?P(this,t):39===this._state?_(this,t):40===this._state?E(this,t):41===this._state?T(this,t):34===this._state?v(this,t):35===this._state?y(this,t):36===this._state?b(this,t):37===this._state?w(this,t):38===this._state?this.stateBeforeSpecialLast(t,2):42===this._state?S(this,t):43===this._state?this.stateAfterSpecialLast(t,6):44===this._state?I(this,t):29===this._state?this.stateInCdata(t):45===this._state?k(this,t):46===this._state?C(this,t):47===this._state?this.stateBeforeSpecialLast(t,3):48===this._state?x(this,t):49===this._state?A(this,t):50===this._state?O(this,t):51===this._state?this.stateAfterSpecialLast(t,5):52===this._state?R(this,t):54===this._state?D(this,t):55===this._state?N(this,t):56===this._state?L(this,t):57===this._state?this.stateBeforeSpecialLast(t,4):58===this._state?M(this,t):59===this._state?U(this,t):60===this._state?F(this,t):61===this._state?this.stateAfterSpecialLast(t,5):17===this._state?this.stateInProcessingInstruction(t):64===this._state?this.stateInNamedEntity(t):23===this._state?d(this,t):62===this._state?j(this,t):24===this._state?f(this,t):25===this._state?p(this,t):30===this._state?this.stateAfterCdata1(t):31===this._state?this.stateAfterCdata2(t):26===this._state?m(this,t):27===this._state?g(this,t):28===this._state?this.stateBeforeCdata6(t):66===this._state?this.stateInHexEntity(t):65===this._state?this.stateInNumericEntity(t):63===this._state?V(this,t):this.cbs.onerror(Error("unknown _state"),this._state),this._index++}this.cleanup()},t.prototype.finish=function(){this.sectionStart<this._index&&this.handleTrailingData(),this.cbs.onend()},t.prototype.handleTrailingData=function(){var t=this.buffer.substr(this.sectionStart);29===this._state||30===this._state||31===this._state?this.cbs.oncdata(t):19===this._state||21===this._state||22===this._state?this.cbs.oncomment(t):64!==this._state||this.xmlMode?65!==this._state||this.xmlMode?66!==this._state||this.xmlMode?3!==this._state&&8!==this._state&&11!==this._state&&10!==this._state&&9!==this._state&&13!==this._state&&12!==this._state&&14!==this._state&&6!==this._state&&this.cbs.ontext(t):(this.decodeNumericEntity(3,16,!1),this.sectionStart<this._index&&(this._state=this.baseState,this.handleTrailingData())):(this.decodeNumericEntity(2,10,!1),this.sectionStart<this._index&&(this._state=this.baseState,this.handleTrailingData())):(this.parseLegacyEntity(),this.sectionStart<this._index&&(this._state=this.baseState,this.handleTrailingData()))},t.prototype.getSection=function(){return this.buffer.substring(this.sectionStart,this._index)},t.prototype.emitToken=function(t){this.cbs[t](this.getSection()),this.sectionStart=-1},t.prototype.emitPartial=function(t){1!==this.baseState?this.cbs.onattribdata(t):this.cbs.ontext(t)},t}();e["default"]=q},7117:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return i(e,t),e},o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.RssHandler=e.DefaultHandler=e.DomUtils=e.ElementType=e.Tokenizer=e.createDomStream=e.parseDOM=e.parseDocument=e.DomHandler=e.Parser=void 0;var c=n(7699);Object.defineProperty(e,"Parser",{enumerable:!0,get:function(){return c.Parser}});var u=n(8717);function l(t,e){var n=new u.DomHandler(void 0,e);return new c.Parser(n,e).end(t),n.root}function h(t,e){return l(t,e).children}function d(t,e,n){var r=new u.DomHandler(t,e,n);return new c.Parser(r,e)}Object.defineProperty(e,"DomHandler",{enumerable:!0,get:function(){return u.DomHandler}}),Object.defineProperty(e,"DefaultHandler",{enumerable:!0,get:function(){return u.DomHandler}}),e.parseDocument=l,e.parseDOM=h,e.createDomStream=d;var f=n(1721);Object.defineProperty(e,"Tokenizer",{enumerable:!0,get:function(){return a(f).default}});var p=s(n(8761));e.ElementType=p,o(n(6987),e),e.DomUtils=s(n(2165));var m=n(6987);Object.defineProperty(e,"RssHandler",{enumerable:!0,get:function(){return m.FeedHandler}})},1042:function(t,e){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function n(t){return"[object Object]"===Object.prototype.toString.call(t)}function r(t){var e,r;return!1!==n(t)&&(e=t.constructor,void 0===e||(r=e.prototype,!1!==n(r)&&!1!==r.hasOwnProperty("isPrototypeOf")))}Object.defineProperty(e,"__esModule",{value:!0}),e.isPlainObject=r},4463:function(t,e,n){"use strict";n.d(e,{xt:function(){return f},Go:function(){return d}});n(7658);var r=n(3396),i=n(4870),s=!1;const o={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let a=0;var c=t=>t.replace(/[<>"&]/g,(t=>o[t]||t)),u=t=>t+a++;const l={},h=t=>{const{name:e,paths:n=[],d:r,polygons:i=[],points:s}=t;r&&n.push({d:r}),s&&i.push({points:s}),l[e]=Object.assign({},t,{paths:n,polygons:i}),l[e].minX||(l[e].minX=0),l[e].minY||(l[e].minY=0)},d=(...t)=>{for(const e of t)h(e)},f=(0,r.aZ)({name:"OhVueIcon",props:{name:{type:String,validator:t=>!t||t in l||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${t}".\nPlease make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:t=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(t)},hover:Boolean,flip:{validator:t=>["horizontal","vertical","both"].includes(t)},speed:{validator:t=>"fast"===t||"slow"===t},label:String,inverse:Boolean},setup(t){const e=(0,i.iH)([]),n=(0,i.qj)({outerScale:1.2,x:null,y:null}),s=(0,i.qj)({width:0,height:0}),o=(0,r.Fl)((()=>{const e=Number(t.scale);return isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),n.outerScale):e*n.outerScale})),a=(0,r.Fl)((()=>({"ov-icon":!0,"ov-inverse":t.inverse,"ov-flip-horizontal":"horizontal"===t.flip,"ov-flip-vertical":"vertical"===t.flip,"ov-flip-both":"both"===t.flip,"ov-spin":"spin"===t.animation,"ov-spin-pulse":"spin-pulse"===t.animation,"ov-wrench":"wrench"===t.animation,"ov-ring":"ring"===t.animation,"ov-pulse":"pulse"===t.animation,"ov-flash":"flash"===t.animation,"ov-float":"float"===t.animation,"ov-hover":t.hover,"ov-fast":"fast"===t.speed,"ov-slow":"slow"===t.speed}))),c=(0,r.Fl)((()=>t.name?l[t.name]:null)),h=(0,r.Fl)((()=>c.value?`${c.value.minX} ${c.value.minY} ${c.value.width} ${c.value.height}`:`0 0 ${f.value} ${p.value}`)),d=(0,r.Fl)((()=>{if(!c.value)return 1;const{width:t,height:e}=c.value;return Math.max(t,e)/16})),f=(0,r.Fl)((()=>s.width||c.value&&c.value.width/d.value*o.value||0)),p=(0,r.Fl)((()=>s.height||c.value&&c.value.height/d.value*o.value||0)),m=(0,r.Fl)((()=>1!==o.value&&{fontSize:o.value+"em"})),g=(0,r.Fl)((()=>{if(!c.value||!c.value.raw)return null;const t={};let e=c.value.raw;return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,((e,n,r)=>{const i=u("vat-");return t[r]=i,` id="${i}"`})),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((e,n,r,i)=>{const s=n||i;return s&&t[s]?`#${t[s]}`:e})),e})),v=(0,r.Fl)((()=>c.value&&c.value.attr?c.value.attr:{})),y=()=>{if(!t.name&&null!==t.name&&0===e.value.length)return void console.warn('Invalid prop: prop "name" is required.');if(c.value)return;let n=0,r=0;e.value.forEach((t=>{t.outerScale=o.value,n=Math.max(n,t.width),r=Math.max(r,t.height)})),s.width=n,s.height=r,e.value.forEach((t=>{t.x=(n-t.width)/2,t.y=(r-t.height)/2}))};return(0,r.bv)((()=>{y()})),(0,r.ic)((()=>{y()})),{...(0,i.BK)(n),children:e,icon:c,klass:a,style:m,width:f,height:p,box:h,attribs:v,raw:g}},created(){const t=this.$parent;t&&t.children&&t.children.push(this)},render(){const t=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?t.stroke=this.fill?this.fill:"currentColor":t.fill=this.fill?this.fill:"currentColor",this.x&&(t.x=this.x.toString()),this.y&&(t.y=this.y.toString());let e={class:this.klass,style:this.style};if(s?e.attrs=t:e=Object.assign(e,t),this.raw){const t=this.title?`<title>${c(this.title)}</title>${this.raw}`:this.raw;s?e.domProps={innerHTML:t}:e.innerHTML=t}const n=this.title?[(0,r.h)("title",this.title)]:[],i=(t,e,n)=>(0,r.h)(t,s?{attrs:e,key:`${t}-${n}`}:{...e,key:`${t}-${n}`});return(0,r.h)("svg",e,this.raw?void 0:n.concat([this.$slots.default?s?this.$slots.default:this.$slots.default():this.icon?[...this.icon.paths.map(((t,e)=>i("path",t,e))),...this.icon.polygons.map(((t,e)=>i("polygon",t,e)))]:[]]))}});function p(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}p(".ov-icon {\n  display: inline-block;\n  overflow: visible;\n  vertical-align: -0.2em;\n}\n"),p("/* ---------------- spin ---------------- */\n.ov-spin:not(.ov-hover),\n.ov-spin.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin {\n  animation: ov-spin 1s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-fast,\n.ov-spin.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-fast {\n  animation: ov-spin 0.7s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-slow,\n.ov-spin.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-slow {\n  animation: ov-spin 2s linear infinite;\n}\n\n/* ---------------- spin-pulse ---------------- */\n\n.ov-spin-pulse:not(.ov-hover),\n.ov-spin-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse {\n  animation: ov-spin 1s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-fast,\n.ov-spin-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {\n  animation: ov-spin 0.7s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-slow,\n.ov-spin-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {\n  animation: ov-spin 2s infinite steps(8);\n}\n\n@keyframes ov-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* ---------------- wrench ---------------- */\n.ov-wrench:not(.ov-hover),\n.ov-wrench.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-wrench {\n  animation: ov-wrench 2.5s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-fast,\n.ov-wrench.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {\n  animation: ov-wrench 1.2s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-slow,\n.ov-wrench.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {\n  animation: ov-wrench 3.7s ease infinite;\n}\n\n@keyframes ov-wrench {\n  0% {\n    transform: rotate(-12deg);\n  }\n\n  8% {\n    transform: rotate(12deg);\n  }\n\n  10%, 28%, 30%, 48%, 50%, 68% {\n    transform: rotate(24deg);\n  }\n\n  18%, 20%, 38%, 40%, 58%, 60% {\n    transform: rotate(-24deg);\n  }\n\n  75%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- ring ---------------- */\n.ov-ring:not(.ov-hover),\n.ov-ring.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-ring {\n  animation: ov-ring 2s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-fast,\n.ov-ring.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-fast {\n  animation: ov-ring 1s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-slow,\n.ov-ring.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-slow {\n  animation: ov-ring 3s ease infinite;\n}\n\n@keyframes ov-ring {\n  0% {\n    transform: rotate(-15deg);\n  }\n\n  2% {\n    transform: rotate(15deg);\n  }\n\n  4%, 12% {\n    transform: rotate(-18deg);\n  }\n\n  6% {\n    transform: rotate(18deg);\n  }\n\n  8% {\n    transform: rotate(-22deg);\n  }\n\n  10% {\n    transform: rotate(22deg);\n  }\n\n  12% {\n    transform: rotate(-18deg);\n  }\n\n  14% {\n    transform: rotate(18deg);\n  }\n\n  16% {\n    transform: rotate(-12deg);\n  }\n\n  18% {\n    transform: rotate(12deg);\n  }\n\n  20%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- pulse ---------------- */\n.ov-pulse:not(.ov-hover),\n.ov-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-pulse {\n  animation: ov-pulse 2s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-fast,\n.ov-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {\n  animation: ov-pulse 1s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-slow,\n.ov-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {\n  animation: ov-pulse 3s linear infinite;\n}\n\n@keyframes ov-pulse {\n  0% {\n    transform: scale(1.1);\n  }\n\n  50% {\n    transform: scale(0.8);\n  }\n\n  100% {\n    transform: scale(1.1);\n  }\n}\n\n/* ---------------- flash ---------------- */\n.ov-flash:not(.ov-hover),\n.ov-flash.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-flash {\n  animation: ov-flash 2s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-fast,\n.ov-flash.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-fast {\n  animation: ov-flash 1s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-slow,\n.ov-flash.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-slow {\n  animation: ov-flash 3s ease infinite;\n}\n\n@keyframes ov-flash {\n  0%, 100%, 50%{\n    opacity: 1;\n  }\n  25%, 75%{\n    opacity: 0;\n  }\n}\n\n/* ---------------- float ---------------- */\n.ov-float:not(.ov-hover),\n.ov-float.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-float {\n  animation: ov-float 2s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-fast,\n.ov-float.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-fast {\n  animation: ov-float 1s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-slow,\n.ov-float.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-slow {\n  animation: ov-float 3s linear infinite;\n}\n\n@keyframes ov-float {\n  0%, 100% {\n    transform: translateY(-3px);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n}\n"),p(".ov-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.ov-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.ov-flip-both {\n  transform: scale(-1, -1);\n}\n\n.ov-inverse {\n  color: #fff;\n}\n")},6564:function(t,e,n){"use strict";n.d(e,{Lok:function(){return r},R5Z:function(){return o},SW4:function(){return a},czh:function(){return u},npH:function(){return c},opd:function(){return i},v0M:function(){return s}});const r={name:"bi-bell",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zM8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"/>'},i={name:"bi-calendar3",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"/>'},s={name:"bi-heart-fill",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>'},o={name:"bi-person",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>'},a={name:"bi-trash",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>'},c={name:"bi-twitter",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z"/>'},u={name:"bi-x",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/>'}},2596:function(t,e,n){"use strict";n.d(e,{X81:function(){return i},ZcQ:function(){return r}});const r={name:"co-user-follow",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M208 16A112.127 112.127 0 0096 128v79.681a80.236 80.236 0 009.768 38.308l27.455 50.333L60.4 343.656A79.725 79.725 0 0024 410.732V496h288v-32H56v-53.268a47.836 47.836 0 0121.841-40.246l97.66-63.479-41.64-76.341A48.146 48.146 0 01128 207.681V128a80 80 0 01160 0v79.681a48.146 48.146 0 01-5.861 22.985L240.5 307.007l71.5 46.476v-38.166l-29.223-19 27.455-50.334A80.23 80.23 0 00320 207.681V128A112.127 112.127 0 00208 16zM424 400v-64h-32v64h-64v32h64v64h32v-64h64v-32h-64z" class="ci-primary"/>'},i={name:"co-user-unfollow",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M216 16a112.127 112.127 0 00-112 112v79.68a80.239 80.239 0 009.768 38.308l27.455 50.334L68.4 343.656A79.727 79.727 0 0032 410.732V496h280v-32H64v-53.268a47.838 47.838 0 0121.84-40.246l97.66-63.479-41.64-76.341A48.149 48.149 0 01136 207.68V128a80 80 0 01160 0v79.68a48.143 48.143 0 01-5.861 22.985L248.5 307.007l63.5 41.276v-38.166l-21.223-13.8 27.454-50.334A80.226 80.226 0 00328 207.68V128A112.127 112.127 0 00216 16zM483.314 355.314l-22.628-22.628L412 381.372l-48.686-48.686-22.628 22.628L389.372 404l-48.686 48.686 22.628 22.628L412 426.628l48.686 48.686 22.628-22.628L434.628 404l48.686-48.686z" class="ci-primary"/>'}},8422:function(t,e,n){"use strict";n.d(e,{WbZ:function(){return i},m4n:function(){return r}});const r={name:"fa-regular-comment",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/>'},i={name:"fa-regular-heart",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>'}},9422:function(t,e,n){"use strict";n.d(e,{HrR:function(){return s},MGj:function(){return i},dpH:function(){return r}});const r={name:"gi-bird-house",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M256 22.93L45.22 203.6l19.31 19.3L256 63.37 447.4 222.9l19.4-19.3zm0 63.86L113 206l54.2 230.1h177.6L399 206zm0 68.31c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80zm0 210c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-9 89v35h18v-35z"/>'},i={name:"gi-feather",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M470.7 20L368.2 49.81l41.5-28.09c-26.2 5.92-59.3 17.5-100.9 36.19l-67.9 70.79L265 79.25c-23.3 12.96-48 29.95-71.8 49.85l-15.8 64.3-3.4-47.6c-23.5 21.6-45.6 45.6-63.9 70.9-19.23 26.5-34.26 54.5-41.79 82.4l-28.12-18.8c2.52 23.7 10.31 44.3 23.09 63.2l-33.62-10.3c7.64 23.5 20.13 38.7 41.25 51-11.83 33.3-17.38 68.1-23.34 102.8l18.4 3.1C87.31 277.4 237.9 141.8 374 81.72l6.9 17.38c-121.7 54.5-216.3 146.5-265.8 279.1 18.1.1 35.8-2.1 52.2-6.3l4.9-60.9 13.1 55.5c10.9-4 20.9-8.8 29.8-14.4l-20.7-43.5 32.8 34.8c8-6.4 14.6-13.6 19.6-21.5 30.4-47.5 62.2-94.7 124.8-134.2l-45.7-16.2 70.1 2.1c11.4-5.8 23.4-12.9 32.5-19.6l-49.7-4 74.7-17.6c5.8-5.8 11.2-11.9 16.1-18 17.3-21.94 29-44.78 26.2-65.55-1.3-10.39-7.5-20.16-17.6-25.63-2.5-1.3-5.2-2.45-7.5-3.22z"/>'},s={name:"gi-share",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M384 64a64 64 0 00-64 64 64 64 0 001.1 11.3l-146.3 73.2A64 64 0 00128 192a64 64 0 00-64 64 64 64 0 0064 64 64 64 0 0046.8-20.5L321 372.7a64 64 0 00-1 11.3 64 64 0 0064 64 64 64 0 0064-64 64 64 0 00-64-64 64 64 0 00-46.8 20.5L191 267.4a64 64 0 001-11.4 64 64 0 00-1.1-11.4l146.3-73.1A64 64 0 00384 192a64 64 0 0064-64 64 64 0 00-64-64z"/>'}},1479:function(t,e,n){"use strict";n.d(e,{G4C:function(){return s},JEI:function(){return r},Ohp:function(){return i}});const r={name:"hi-dots-horizontal",minX:0,minY:0,width:24,height:24,raw:'<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>',attr:{fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"}},i={name:"hi-hashtag",minX:0,minY:0,width:24,height:24,raw:'<path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>',attr:{fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"}},s={name:"hi-search",minX:0,minY:0,width:24,height:24,raw:'<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',attr:{fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"}}},9235:function(t,e,n){"use strict";n.d(e,{J4e:function(){return r}});const r={name:"io-person",minX:0,minY:0,width:512,height:512,raw:'<path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"/>'}},3e3:function(t,e,n){"use strict";n.d(e,{S5t:function(){return r},eoI:function(){return i}});const r={name:"la-birthday-cake-solid",minX:0,minY:0,width:32,height:32,raw:'<path d="M16 1.25l-.813 1.188s-.539.753-1.062 1.656c-.262.453-.508.926-.719 1.406-.21.48-.406.922-.406 1.5 0 1.645 1.355 3 3 3s3-1.355 3-3c0-.578-.195-1.02-.406-1.5-.211-.48-.457-.953-.719-1.406-.523-.903-1.063-1.657-1.063-1.657zM16 10h-3v4H7c-2.21 0-4 1.79-4 4a4 4 0 001 2.656V28h24v-7.344A4 4 0 0029 18c0-2.21-1.79-4-4-4h-6v-4zm0-5.125c.066.11.059.102.125.219.238.41.492.847.656 1.218.164.372.219.715.219.688 0 .555-.445 1-1 1-.555 0-1-.445-1-1 0 .027.055-.316.219-.688.164-.37.418-.808.656-1.218.066-.117.059-.11.125-.219zM15 12h2v2h-2zm-8 4h18c1.191 0 2 .809 2 2 0 1.191-.809 2-2 2-1.191 0-2-.809-2-2h-2c0 1.191-.809 2-2 2-1.191 0-2-.809-2-2h-2c0 1.191-.809 2-2 2-1.191 0-2-.809-2-2H9c0 1.191-.809 2-2 2-1.191 0-2-.809-2-2 0-1.191.809-2 2-2zm3 4.656A3.99 3.99 0 0013 22a3.99 3.99 0 003-1.344A3.99 3.99 0 0019 22a3.99 3.99 0 003-1.344A3.99 3.99 0 0025 22c.348 0 .68-.074 1-.156V26H6v-4.156c.32.082.652.156 1 .156a3.99 3.99 0 003-1.344z"/>'},i={name:"la-retweet-solid",minX:0,minY:0,width:32,height:32,raw:'<path d="M5 7l-5 5h4v13h17l-2-2H6V12h4zm4 0l2 2h13v11h-4l5 5 5-5h-4V7z"/>'}},1799:function(t,e,n){"use strict";n.d(e,{P4y:function(){return i},est:function(){return r},p1b:function(){return s}});const r={name:"md-locationon-outlined",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/>'},i={name:"md-addaphoto-outlined",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"/>'},s={name:"md-arrowback",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>'}},3982:function(t,e,n){"use strict";n.d(e,{BR5:function(){return r}});const r={name:"oi-link",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/>'}},7053:function(t,e,n){"use strict";n.d(e,{EaH:function(){return r}});const r={name:"ri-image-add-line",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016zM8 7a2 2 0 110 4 2 2 0 010-4z"/>'}},8812:function(t,e,n){var r,i,s;n(7658),function(n,o){i=[],r=o,s="function"===typeof r?r.apply(e,i):r,void 0===s||(t.exports=s)}(0,(function(){return function(t){function e(t){return" "===t||"\t"===t||"\n"===t||"\f"===t||"\r"===t}function n(e){var n,r=e.exec(t.substring(m));if(r)return n=r[0],m+=n.length,n}var r,i,s,o,a,c=t.length,u=/^[ \t\n\r\u000c]+/,l=/^[, \t\n\r\u000c]+/,h=/^[^ \t\n\r\u000c]+/,d=/[,]+$/,f=/^\d+$/,p=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,m=0,g=[];while(1){if(n(l),m>=c)return g;r=n(h),i=[],","===r.slice(-1)?(r=r.replace(d,""),y()):v()}function v(){n(u),s="",o="in descriptor";while(1){if(a=t.charAt(m),"in descriptor"===o)if(e(a))s&&(i.push(s),s="",o="after descriptor");else{if(","===a)return m+=1,s&&i.push(s),void y();if("("===a)s+=a,o="in parens";else{if(""===a)return s&&i.push(s),void y();s+=a}}else if("in parens"===o)if(")"===a)s+=a,o="in descriptor";else{if(""===a)return i.push(s),void y();s+=a}else if("after descriptor"===o)if(e(a));else{if(""===a)return void y();o="in descriptor",m-=1}m+=1}}function y(){var e,n,s,o,a,c,u,l,h,d=!1,m={};for(o=0;o<i.length;o++)a=i[o],c=a[a.length-1],u=a.substring(0,a.length-1),l=parseInt(u,10),h=parseFloat(u),f.test(u)&&"w"===c?((e||n)&&(d=!0),0===l?d=!0:e=l):p.test(u)&&"x"===c?((e||n||s)&&(d=!0),h<0?d=!0:n=h):f.test(u)&&"h"===c?((s||n)&&(d=!0),0===l?d=!0:s=l):d=!0;d?console&&console.log&&console.log("Invalid srcset descriptor found in '"+t+"' at '"+a+"'."):(m.url=r,e&&(m.w=e),n&&(m.d=n),s&&(m.h=s),g.push(m))}}}))},2838:function(t){var e=String,n=function(){return{isColorSupported:!1,reset:e,bold:e,dim:e,italic:e,underline:e,inverse:e,hidden:e,strikethrough:e,black:e,red:e,green:e,yellow:e,blue:e,magenta:e,cyan:e,white:e,gray:e,bgBlack:e,bgRed:e,bgGreen:e,bgYellow:e,bgBlue:e,bgMagenta:e,bgCyan:e,bgWhite:e}};t.exports=n(),t.exports.createColors=n},5514:function(t,e,n){n(7658);const r=n(7117),i=n(1139),{isPlainObject:s}=n(1042),o=n(7669),a=n(8812),{parse:c}=n(9643),u=["img","audio","video","picture","svg","object","map","iframe","embed"],l=["script","style"];function h(t,e){t&&Object.keys(t).forEach((function(n){e(t[n],n)}))}function d(t,e){return{}.hasOwnProperty.call(t,e)}function f(t,e){const n=[];return h(t,(function(t){e(t)&&n.push(t)})),n}function p(t){for(const e in t)if(d(t,e))return!1;return!0}function m(t){return t.map((function(t){if(!t.url)throw new Error("URL missing");return t.url+(t.w?` ${t.w}w`:"")+(t.h?` ${t.h}h`:"")+(t.d?` ${t.d}x`:"")})).join(", ")}t.exports=v;const g=/^[^\0\t\n\f\r /<=>]+$/;function v(t,e,n){if(null==t)return"";let b="",w="";function _(t,e){const n=this;this.tag=t,this.attribs=e||{},this.tagPosition=b.length,this.text="",this.mediaChildren=[],this.updateParentNodeText=function(){if(R.length){const t=R[R.length-1];t.text+=n.text}},this.updateParentNodeMediaChildren=function(){if(R.length&&u.includes(this.tag)){const t=R[R.length-1];t.mediaChildren.push(this.tag)}}}e=Object.assign({},v.defaults,e),e.parser=Object.assign({},y,e.parser),l.forEach((function(t){!1!==e.allowedTags&&(e.allowedTags||[]).indexOf(t)>-1&&!e.allowVulnerableTags&&console.warn(`\n\n⚠️ Your \`allowedTags\` option includes, \`${t}\`, which is inherently\nvulnerable to XSS attacks. Please remove it from \`allowedTags\`.\nOr, to disable this warning, add the \`allowVulnerableTags\` option\nand ensure you are accounting for this risk.\n\n`)}));const E=e.nonTextTags||["script","style","textarea","option"];let T,S;e.allowedAttributes&&(T={},S={},h(e.allowedAttributes,(function(t,e){T[e]=[];const n=[];t.forEach((function(t){"string"===typeof t&&t.indexOf("*")>=0?n.push(i(t).replace(/\\\*/g,".*")):T[e].push(t)})),n.length&&(S[e]=new RegExp("^("+n.join("|")+")$"))})));const I={},k={},C={};h(e.allowedClasses,(function(t,e){T&&(d(T,e)||(T[e]=[]),T[e].push("class")),I[e]=[],C[e]=[];const n=[];t.forEach((function(t){"string"===typeof t&&t.indexOf("*")>=0?n.push(i(t).replace(/\\\*/g,".*")):t instanceof RegExp?C[e].push(t):I[e].push(t)})),n.length&&(k[e]=new RegExp("^("+n.join("|")+")$"))}));const x={};let A,O,R,D,N,L,P;h(e.transformTags,(function(t,e){let n;"function"===typeof t?n=t:"string"===typeof t&&(n=v.simpleTransform(t)),"*"===e?A=n:x[e]=n}));let M=!1;F();const U=new r.Parser({onopentag:function(t,n){if(e.enforceHtmlBoundary&&"html"===t&&F(),L)return void P++;const r=new _(t,n);R.push(r);let i=!1;const u=!!r.text;let l;if(d(x,t)&&(l=x[t](t,n),r.attribs=n=l.attribs,void 0!==l.text&&(r.innerText=l.text),t!==l.tagName&&(r.name=t=l.tagName,N[O]=l.tagName)),A&&(l=A(t,n),r.attribs=n=l.attribs,t!==l.tagName&&(r.name=t=l.tagName,N[O]=l.tagName)),(!1!==e.allowedTags&&-1===(e.allowedTags||[]).indexOf(t)||"recursiveEscape"===e.disallowedTagsMode&&!p(D)||null!=e.nestingLimit&&O>=e.nestingLimit)&&(i=!0,D[O]=!0,"discard"===e.disallowedTagsMode&&-1!==E.indexOf(t)&&(L=!0,P=1),D[O]=!0),O++,i){if("discard"===e.disallowedTagsMode)return;w=b,b=""}b+="<"+t,"script"===t&&(e.allowedScriptHostnames||e.allowedScriptDomains)&&(r.innerText=""),(!T||d(T,t)||T["*"])&&h(n,(function(n,i){if(!g.test(i))return void delete r.attribs[i];let u=!1;if(!T||d(T,t)&&-1!==T[t].indexOf(i)||T["*"]&&-1!==T["*"].indexOf(i)||d(S,t)&&S[t].test(i)||S["*"]&&S["*"].test(i))u=!0;else if(T&&T[t])for(const e of T[t])if(s(e)&&e.name&&e.name===i){u=!0;let t="";if(!0===e.multiple){const r=n.split(" ");for(const n of r)-1!==e.values.indexOf(n)&&(""===t?t=n:t+=" "+n)}else e.values.indexOf(n)>=0&&(t=n);n=t}if(u){if(-1!==e.allowedSchemesAppliedToAttributes.indexOf(i)&&V(t,n))return void delete r.attribs[i];if("script"===t&&"src"===i){let t=!0;try{const r=q(n);if(e.allowedScriptHostnames||e.allowedScriptDomains){const n=(e.allowedScriptHostnames||[]).find((function(t){return t===r.url.hostname})),i=(e.allowedScriptDomains||[]).find((function(t){return r.url.hostname===t||r.url.hostname.endsWith(`.${t}`)}));t=n||i}}catch(l){t=!1}if(!t)return void delete r.attribs[i]}if("iframe"===t&&"src"===i){let t=!0;try{const r=q(n);if(r.isRelativeUrl)t=d(e,"allowIframeRelativeUrls")?e.allowIframeRelativeUrls:!e.allowedIframeHostnames&&!e.allowedIframeDomains;else if(e.allowedIframeHostnames||e.allowedIframeDomains){const n=(e.allowedIframeHostnames||[]).find((function(t){return t===r.url.hostname})),i=(e.allowedIframeDomains||[]).find((function(t){return r.url.hostname===t||r.url.hostname.endsWith(`.${t}`)}));t=n||i}}catch(l){t=!1}if(!t)return void delete r.attribs[i]}if("srcset"===i)try{let t=a(n);if(t.forEach((function(t){V("srcset",t.url)&&(t.evil=!0)})),t=f(t,(function(t){return!t.evil})),!t.length)return void delete r.attribs[i];n=m(f(t,(function(t){return!t.evil}))),r.attribs[i]=n}catch(l){return void delete r.attribs[i]}if("class"===i){const e=I[t],s=I["*"],a=k[t],c=C[t],u=k["*"],l=[a,u].concat(c).filter((function(t){return t}));if(n=H(n,e&&s?o(e,s):e||s,l),!n.length)return void delete r.attribs[i]}if("style"===i)try{const s=c(t+" {"+n+"}"),o=B(s,e.allowedStyles);if(n=$(o),0===n.length)return void delete r.attribs[i]}catch(l){return void delete r.attribs[i]}b+=" "+i,n&&n.length&&(b+='="'+j(n,!0)+'"')}else delete r.attribs[i]})),-1!==e.selfClosing.indexOf(t)?b+=" />":(b+=">",!r.innerText||u||e.textFilter||(b+=j(r.innerText),M=!0)),i&&(b=w+j(b),w="")},ontext:function(t){if(L)return;const n=R[R.length-1];let r;if(n&&(r=n.tag,t=void 0!==n.innerText?n.innerText:t),"discard"!==e.disallowedTagsMode||"script"!==r&&"style"!==r){const n=j(t,!1);e.textFilter&&!M?b+=e.textFilter(n,r):M||(b+=n)}else b+=t;if(R.length){const e=R[R.length-1];e.text+=t}},onclosetag:function(t){if(L){if(P--,P)return;L=!1}const n=R.pop();if(!n)return;if(n.tag!==t)return void R.push(n);L=!!e.enforceHtmlBoundary&&"html"===t,O--;const r=D[O];if(r){if(delete D[O],"discard"===e.disallowedTagsMode)return void n.updateParentNodeText();w=b,b=""}N[O]&&(t=N[O],delete N[O]),e.exclusiveFilter&&e.exclusiveFilter(n)?b=b.substr(0,n.tagPosition):(n.updateParentNodeMediaChildren(),n.updateParentNodeText(),-1===e.selfClosing.indexOf(t)?(b+="</"+t+">",r&&(b=w+j(b),w=""),M=!1):r&&(b=w,w=""))}},e.parser);return U.write(t),U.end(),b;function F(){b="",O=0,R=[],D={},N={},L=!1,P=0}function j(t,n){return"string"!==typeof t&&(t+=""),e.parser.decodeEntities&&(t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),n&&(t=t.replace(/"/g,"&quot;"))),t=t.replace(/&(?![a-zA-Z0-9#]{1,20};)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),n&&(t=t.replace(/"/g,"&quot;")),t}function V(t,n){n=n.replace(/[\x00-\x20]+/g,"");while(1){const t=n.indexOf("\x3c!--");if(-1===t)break;const e=n.indexOf("--\x3e",t+4);if(-1===e)break;n=n.substring(0,t)+n.substring(e+3)}const r=n.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);if(!r)return!!n.match(/^[/\\]{2}/)&&!e.allowProtocolRelative;const i=r[1].toLowerCase();return d(e.allowedSchemesByTag,t)?-1===e.allowedSchemesByTag[t].indexOf(i):!e.allowedSchemes||-1===e.allowedSchemes.indexOf(i)}function q(t){if(t=t.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/,"$1//"),t.startsWith("relative:"))throw new Error("relative: exploit attempt");let e="relative://relative-site";for(let i=0;i<100;i++)e+=`/${i}`;const n=new URL(t,e),r=n&&"relative-site"===n.hostname&&"relative:"===n.protocol;return{isRelativeUrl:r,url:n}}function B(t,e){if(!e)return t;const n=t.nodes[0];let r;return r=e[n.selector]&&e["*"]?o(e[n.selector],e["*"]):e[n.selector]||e["*"],r&&(t.nodes[0].nodes=n.nodes.reduce(z(r),[])),t}function $(t){return t.nodes[0].nodes.reduce((function(t,e){return t.push(`${e.prop}:${e.value}${e.important?" !important":""}`),t}),[]).join(";")}function z(t){return function(e,n){if(d(t,n.prop)){const r=t[n.prop].some((function(t){return t.test(n.value)}));r&&e.push(n)}return e}}function H(t,e,n){return e?(t=t.split(/\s+/),t.filter((function(t){return-1!==e.indexOf(t)||n.some((function(e){return e.test(t)}))})).join(" ")):t}}const y={decodeEntities:!0};v.defaults={allowedTags:["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rb","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],disallowedTagsMode:"discard",allowedAttributes:{a:["href","name","target"],img:["src","srcset","alt","title","width","height","loading"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto","tel"],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:["href","src","cite"],allowProtocolRelative:!0,enforceHtmlBoundary:!1},v.simpleTransform=function(t,e,n){return n=void 0===n||n,e=e||{},function(r,i){let s;if(n)for(s in e)i[s]=e[s];else i=e;return{tagName:t,attribs:i}}}},1139:function(t){"use strict";t.exports=t=>{if("string"!==typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}},8329:function(t,e,n){"use strict";let r=n(311);class i extends r{constructor(t){super(t),this.type="atrule"}append(...t){return this.proxyOf.nodes||(this.nodes=[]),super.append(...t)}prepend(...t){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...t)}}t.exports=i,i.default=i,r.registerAtRule(i)},3909:function(t,e,n){"use strict";let r=n(832);class i extends r{constructor(t){super(t),this.type="comment"}}t.exports=i,i.default=i},311:function(t,e,n){"use strict";n(7658),n(541);let r,i,s,o,{isClean:a,my:c}=n(3190),u=n(5914),l=n(3909),h=n(832);function d(t){return t.map((t=>(t.nodes&&(t.nodes=d(t.nodes)),delete t.source,t)))}function f(t){if(t[a]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)f(e)}class p extends h{push(t){return t.parent=this,this.proxyOf.nodes.push(t),this}each(t){if(!this.proxyOf.nodes)return;let e,n,r=this.getIterator();while(this.indexes[r]<this.proxyOf.nodes.length){if(e=this.indexes[r],n=t(this.proxyOf.nodes[e],e),!1===n)break;this.indexes[r]+=1}return delete this.indexes[r],n}walk(t){return this.each(((e,n)=>{let r;try{r=t(e,n)}catch(i){throw e.addToError(i)}return!1!==r&&e.walk&&(r=e.walk(t)),r}))}walkDecls(t,e){return e?t instanceof RegExp?this.walk(((n,r)=>{if("decl"===n.type&&t.test(n.prop))return e(n,r)})):this.walk(((n,r)=>{if("decl"===n.type&&n.prop===t)return e(n,r)})):(e=t,this.walk(((t,n)=>{if("decl"===t.type)return e(t,n)})))}walkRules(t,e){return e?t instanceof RegExp?this.walk(((n,r)=>{if("rule"===n.type&&t.test(n.selector))return e(n,r)})):this.walk(((n,r)=>{if("rule"===n.type&&n.selector===t)return e(n,r)})):(e=t,this.walk(((t,n)=>{if("rule"===t.type)return e(t,n)})))}walkAtRules(t,e){return e?t instanceof RegExp?this.walk(((n,r)=>{if("atrule"===n.type&&t.test(n.name))return e(n,r)})):this.walk(((n,r)=>{if("atrule"===n.type&&n.name===t)return e(n,r)})):(e=t,this.walk(((t,n)=>{if("atrule"===t.type)return e(t,n)})))}walkComments(t){return this.walk(((e,n)=>{if("comment"===e.type)return t(e,n)}))}append(...t){for(let e of t){let t=this.normalize(e,this.last);for(let e of t)this.proxyOf.nodes.push(e)}return this.markDirty(),this}prepend(...t){t=t.reverse();for(let e of t){let t=this.normalize(e,this.first,"prepend").reverse();for(let e of t)this.proxyOf.nodes.unshift(e);for(let e in this.indexes)this.indexes[e]=this.indexes[e]+t.length}return this.markDirty(),this}cleanRaws(t){if(super.cleanRaws(t),this.nodes)for(let e of this.nodes)e.cleanRaws(t)}insertBefore(t,e){let n,r=this.index(t),i=0===r&&"prepend",s=this.normalize(e,this.proxyOf.nodes[r],i).reverse();r=this.index(t);for(let o of s)this.proxyOf.nodes.splice(r,0,o);for(let o in this.indexes)n=this.indexes[o],r<=n&&(this.indexes[o]=n+s.length);return this.markDirty(),this}insertAfter(t,e){let n,r=this.index(t),i=this.normalize(e,this.proxyOf.nodes[r]).reverse();r=this.index(t);for(let s of i)this.proxyOf.nodes.splice(r+1,0,s);for(let s in this.indexes)n=this.indexes[s],r<n&&(this.indexes[s]=n+i.length);return this.markDirty(),this}removeChild(t){let e;t=this.index(t),this.proxyOf.nodes[t].parent=void 0,this.proxyOf.nodes.splice(t,1);for(let n in this.indexes)e=this.indexes[n],e>=t&&(this.indexes[n]=e-1);return this.markDirty(),this}removeAll(){for(let t of this.proxyOf.nodes)t.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(t,e,n){return n||(n=e,e={}),this.walkDecls((r=>{e.props&&!e.props.includes(r.prop)||e.fast&&!r.value.includes(e.fast)||(r.value=r.value.replace(t,n))})),this.markDirty(),this}every(t){return this.nodes.every(t)}some(t){return this.nodes.some(t)}index(t){return"number"===typeof t?t:(t.proxyOf&&(t=t.proxyOf),this.proxyOf.nodes.indexOf(t))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(t,e){if("string"===typeof t)t=d(r(t).nodes);else if(Array.isArray(t)){t=t.slice(0);for(let e of t)e.parent&&e.parent.removeChild(e,"ignore")}else if("root"===t.type&&"document"!==this.type){t=t.nodes.slice(0);for(let e of t)e.parent&&e.parent.removeChild(e,"ignore")}else if(t.type)t=[t];else if(t.prop){if("undefined"===typeof t.value)throw new Error("Value field is missed in node creation");"string"!==typeof t.value&&(t.value=String(t.value)),t=[new u(t)]}else if(t.selector)t=[new i(t)];else if(t.name)t=[new s(t)];else{if(!t.text)throw new Error("Unknown node type in node creation");t=[new l(t)]}let n=t.map((t=>(t[c]||p.rebuild(t),t=t.proxyOf,t.parent&&t.parent.removeChild(t),t[a]&&f(t),"undefined"===typeof t.raws.before&&e&&"undefined"!==typeof e.raws.before&&(t.raws.before=e.raws.before.replace(/\S/g,"")),t.parent=this.proxyOf,t)));return n}getProxyProcessor(){return{set(t,e,n){return t[e]===n||(t[e]=n,"name"!==e&&"params"!==e&&"selector"!==e||t.markDirty()),!0},get(t,e){return"proxyOf"===e?t:t[e]?"each"===e||"string"===typeof e&&e.startsWith("walk")?(...n)=>t[e](...n.map((t=>"function"===typeof t?(e,n)=>t(e.toProxy(),n):t))):"every"===e||"some"===e?n=>t[e](((t,...e)=>n(t.toProxy(),...e))):"root"===e?()=>t.root().toProxy():"nodes"===e?t.nodes.map((t=>t.toProxy())):"first"===e||"last"===e?t[e].toProxy():t[e]:t[e]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let t=this.lastEach;return this.indexes[t]=0,t}}p.registerParse=t=>{r=t},p.registerRule=t=>{i=t},p.registerAtRule=t=>{s=t},p.registerRoot=t=>{o=t},t.exports=p,p.default=p,p.rebuild=t=>{"atrule"===t.type?Object.setPrototypeOf(t,s.prototype):"rule"===t.type?Object.setPrototypeOf(t,i.prototype):"decl"===t.type?Object.setPrototypeOf(t,u.prototype):"comment"===t.type?Object.setPrototypeOf(t,l.prototype):"root"===t.type&&Object.setPrototypeOf(t,o.prototype),t[c]=!0,t.nodes&&t.nodes.forEach((t=>{p.rebuild(t)}))}},7792:function(t,e,n){"use strict";let r=n(2838),i=n(5347);class s extends Error{constructor(t,e,n,r,i,o){super(t),this.name="CssSyntaxError",this.reason=t,i&&(this.file=i),r&&(this.source=r),o&&(this.plugin=o),"undefined"!==typeof e&&"undefined"!==typeof n&&("number"===typeof e?(this.line=e,this.column=n):(this.line=e.line,this.column=e.column,this.endLine=n.line,this.endColumn=n.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,s)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>","undefined"!==typeof this.line&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(t){if(!this.source)return"";let e=this.source;null==t&&(t=r.isColorSupported),i&&t&&(e=i(e));let n,s,o=e.split(/\r?\n/),a=Math.max(this.line-3,0),c=Math.min(this.line+2,o.length),u=String(c).length;if(t){let{bold:t,red:e,gray:i}=r.createColors(!0);n=n=>t(e(n)),s=t=>i(t)}else n=s=t=>t;return o.slice(a,c).map(((t,e)=>{let r=a+1+e,i=" "+(" "+r).slice(-u)+" | ";if(r===this.line){let e=s(i.replace(/\d/g," "))+t.slice(0,this.column-1).replace(/[^\t]/g," ");return n(">")+s(i)+t+"\n "+e+n("^")}return" "+s(i)+t})).join("\n")}toString(){let t=this.showSourceCode();return t&&(t="\n\n"+t+"\n"),this.name+": "+this.message+t}}t.exports=s,s.default=s},5914:function(t,e,n){"use strict";let r=n(832);class i extends r{constructor(t){t&&"undefined"!==typeof t.value&&"string"!==typeof t.value&&(t={...t,value:String(t.value)}),super(t),this.type="decl"}get variable(){return this.prop.startsWith("--")||"$"===this.prop[0]}}t.exports=i,i.default=i},3645:function(t,e,n){"use strict";let r,i,s=n(311);class o extends s{constructor(t){super({type:"document",...t}),this.nodes||(this.nodes=[])}toResult(t={}){let e=new r(new i,this,t);return e.stringify()}}o.registerLazyResult=t=>{r=t},o.registerProcessor=t=>{i=t},t.exports=o,o.default=o},7739:function(t,e,n){"use strict";n(7658);let r=n(5914),i=n(5146),s=n(3909),o=n(8329),a=n(3399),c=n(6227),u=n(1362);function l(t,e){if(Array.isArray(t))return t.map((t=>l(t)));let{inputs:n,...h}=t;if(n){e=[];for(let t of n){let n={...t,__proto__:a.prototype};n.map&&(n.map={...n.map,__proto__:i.prototype}),e.push(n)}}if(h.nodes&&(h.nodes=t.nodes.map((t=>l(t,e)))),h.source){let{inputId:t,...n}=h.source;h.source=n,null!=t&&(h.source.input=e[t])}if("root"===h.type)return new c(h);if("decl"===h.type)return new r(h);if("rule"===h.type)return new u(h);if("comment"===h.type)return new s(h);if("atrule"===h.type)return new o(h);throw new Error("Unknown node type: "+t.type)}t.exports=l,l.default=l},3399:function(t,e,n){"use strict";let{SourceMapConsumer:r,SourceMapGenerator:i}=n(9905),{fileURLToPath:s,pathToFileURL:o}=n(4604),{resolve:a,isAbsolute:c}=n(4017),{nanoid:u}=n(2961),l=n(5347),h=n(7792),d=n(5146),f=Symbol("fromOffsetCache"),p=Boolean(r&&i),m=Boolean(a&&c);class g{constructor(t,e={}){if(null===t||"undefined"===typeof t||"object"===typeof t&&!t.toString)throw new Error(`PostCSS received ${t} instead of CSS string`);if(this.css=t.toString(),"\ufeff"===this.css[0]||"￾"===this.css[0]?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,e.from&&(!m||/^\w+:\/\//.test(e.from)||c(e.from)?this.file=e.from:this.file=a(e.from)),m&&p){let t=new d(this.css,e);if(t.text){this.map=t;let e=t.consumer().file;!this.file&&e&&(this.file=this.mapResolve(e))}}this.file||(this.id="<input css "+u(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(t){let e,n;if(this[f])n=this[f];else{let t=this.css.split("\n");n=new Array(t.length);let e=0;for(let r=0,i=t.length;r<i;r++)n[r]=e,e+=t[r].length+1;this[f]=n}e=n[n.length-1];let r=0;if(t>=e)r=n.length-1;else{let e,i=n.length-2;while(r<i)if(e=r+(i-r>>1),t<n[e])i=e-1;else{if(!(t>=n[e+1])){r=e;break}r=e+1}}return{line:r+1,col:t-n[r]+1}}error(t,e,n,r={}){let i,s,a;if(e&&"object"===typeof e){let t=e,r=n;if("number"===typeof e.offset){let r=this.fromOffset(t.offset);e=r.line,n=r.col}else e=t.line,n=t.column;if("number"===typeof r.offset){let t=this.fromOffset(r.offset);s=t.line,a=t.col}else s=r.line,a=r.column}else if(!n){let t=this.fromOffset(e);e=t.line,n=t.col}let c=this.origin(e,n,s,a);return i=c?new h(t,void 0===c.endLine?c.line:{line:c.line,column:c.column},void 0===c.endLine?c.column:{line:c.endLine,column:c.endColumn},c.source,c.file,r.plugin):new h(t,void 0===s?e:{line:e,column:n},void 0===s?n:{line:s,column:a},this.css,this.file,r.plugin),i.input={line:e,column:n,endLine:s,endColumn:a,source:this.css},this.file&&(o&&(i.input.url=o(this.file).toString()),i.input.file=this.file),i}origin(t,e,n,r){if(!this.map)return!1;let i,a,u=this.map.consumer(),l=u.originalPositionFor({line:t,column:e});if(!l.source)return!1;"number"===typeof n&&(i=u.originalPositionFor({line:n,column:r})),a=c(l.source)?o(l.source):new URL(l.source,this.map.consumer().sourceRoot||o(this.map.mapFile));let h={url:a.toString(),line:l.line,column:l.column,endLine:i&&i.line,endColumn:i&&i.column};if("file:"===a.protocol){if(!s)throw new Error("file: protocol is not available in this PostCSS build");h.file=s(a)}let d=u.sourceContentFor(l.source);return d&&(h.source=d),h}mapResolve(t){return/^\w+:\/\//.test(t)?t:a(this.map.consumer().sourceRoot||this.map.root||".",t)}get from(){return this.file||this.id}toJSON(){let t={};for(let e of["hasBOM","css","file","id"])null!=this[e]&&(t[e]=this[e]);return this.map&&(t.map={...this.map},t.map.consumerCache&&(t.map.consumerCache=void 0)),t}}t.exports=g,g.default=g,l&&l.registerInput&&l.registerInput(g)},4075:function(t,e,n){"use strict";n(7658);let{isClean:r,my:i}=n(3190),s=n(4889),o=n(529),a=n(311),c=n(3645),u=(n(1686),n(8350)),l=n(8402),h=n(6227);const d={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},f={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},p={postcssPlugin:!0,prepare:!0,Once:!0},m=0;function g(t){return"object"===typeof t&&"function"===typeof t.then}function v(t){let e=!1,n=d[t.type];return"decl"===t.type?e=t.prop.toLowerCase():"atrule"===t.type&&(e=t.name.toLowerCase()),e&&t.append?[n,n+"-"+e,m,n+"Exit",n+"Exit-"+e]:e?[n,n+"-"+e,n+"Exit",n+"Exit-"+e]:t.append?[n,m,n+"Exit"]:[n,n+"Exit"]}function y(t){let e;return e="document"===t.type?["Document",m,"DocumentExit"]:"root"===t.type?["Root",m,"RootExit"]:v(t),{node:t,events:e,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function b(t){return t[r]=!1,t.nodes&&t.nodes.forEach((t=>b(t))),t}let w={};class _{constructor(t,e,n){let r;if(this.stringified=!1,this.processed=!1,"object"!==typeof e||null===e||"root"!==e.type&&"document"!==e.type)if(e instanceof _||e instanceof u)r=b(e.root),e.map&&("undefined"===typeof n.map&&(n.map={}),n.map.inline||(n.map.inline=!1),n.map.prev=e.map);else{let t=l;n.syntax&&(t=n.syntax.parse),n.parser&&(t=n.parser),t.parse&&(t=t.parse);try{r=t(e,n)}catch(s){this.processed=!0,this.error=s}r&&!r[i]&&a.rebuild(r)}else r=b(e);this.result=new u(t,r,n),this.helpers={...w,result:this.result,postcss:w},this.plugins=this.processor.plugins.map((t=>"object"===typeof t&&t.prepare?{...t,...t.prepare(this.result)}:t))}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(t,e){return this.async().then(t,e)}catch(t){return this.async().catch(t)}finally(t){return this.async().then(t,t)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let t of this.plugins){let e=this.runOnRoot(t);if(g(e))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let t=this.result.root;while(!t[r])t[r]=!0,this.walkSync(t);if(this.listeners.OnceExit)if("document"===t.type)for(let e of t.nodes)this.visitSync(this.listeners.OnceExit,e);else this.visitSync(this.listeners.OnceExit,t)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let t=this.result.opts,e=o;t.syntax&&(e=t.syntax.stringify),t.stringifier&&(e=t.stringifier),e.stringify&&(e=e.stringify);let n=new s(e,this.result.root,this.result.opts),r=n.generate();return this.result.css=r[0],this.result.map=r[1],this.result}walkSync(t){t[r]=!0;let e=v(t);for(let n of e)if(n===m)t.nodes&&t.each((t=>{t[r]||this.walkSync(t)}));else{let e=this.listeners[n];if(e&&this.visitSync(e,t.toProxy()))return}}visitSync(t,e){for(let[r,i]of t){let t;this.result.lastPlugin=r;try{t=i(e,this.helpers)}catch(n){throw this.handleError(n,e.proxyOf)}if("root"!==e.type&&"document"!==e.type&&!e.parent)return!0;if(g(t))throw this.getAsyncError()}}runOnRoot(t){this.result.lastPlugin=t;try{if("object"===typeof t&&t.Once){if("document"===this.result.root.type){let e=this.result.root.nodes.map((e=>t.Once(e,this.helpers)));return g(e[0])?Promise.all(e):e}return t.Once(this.result.root,this.helpers)}if("function"===typeof t)return t(this.result.root,this.result)}catch(e){throw this.handleError(e)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(t,e){let n=this.result.lastPlugin;try{e&&e.addToError(t),this.error=t,"CssSyntaxError"!==t.name||t.plugin?n.postcssVersion:(t.plugin=n.postcssPlugin,t.setMessage())}catch(r){console&&console.error&&console.error(r)}return t}async runAsync(){this.plugin=0;for(let n=0;n<this.plugins.length;n++){let e=this.plugins[n],r=this.runOnRoot(e);if(g(r))try{await r}catch(t){throw this.handleError(t)}}if(this.prepareVisitors(),this.hasListener){let t=this.result.root;while(!t[r]){t[r]=!0;let n=[y(t)];while(n.length>0){let t=this.visitTick(n);if(g(t))try{await t}catch(e){let t=n[n.length-1].node;throw this.handleError(e,t)}}}if(this.listeners.OnceExit)for(let[n,r]of this.listeners.OnceExit){this.result.lastPlugin=n;try{if("document"===t.type){let e=t.nodes.map((t=>r(t,this.helpers)));await Promise.all(e)}else await r(t,this.helpers)}catch(e){throw this.handleError(e)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let t=(t,e,n)=>{this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push([t,n])};for(let e of this.plugins)if("object"===typeof e)for(let n in e){if(!f[n]&&/^[A-Z]/.test(n))throw new Error(`Unknown event ${n} in ${e.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!p[n])if("object"===typeof e[n])for(let r in e[n])t(e,"*"===r?n:n+"-"+r.toLowerCase(),e[n][r]);else"function"===typeof e[n]&&t(e,n,e[n])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(t){let e=t[t.length-1],{node:n,visitors:i}=e;if("root"!==n.type&&"document"!==n.type&&!n.parent)return void t.pop();if(i.length>0&&e.visitorIndex<i.length){let[t,r]=i[e.visitorIndex];e.visitorIndex+=1,e.visitorIndex===i.length&&(e.visitors=[],e.visitorIndex=0),this.result.lastPlugin=t;try{return r(n.toProxy(),this.helpers)}catch(o){throw this.handleError(o,n)}}if(0!==e.iterator){let i,s=e.iterator;while(i=n.nodes[n.indexes[s]])if(n.indexes[s]+=1,!i[r])return i[r]=!0,void t.push(y(i));e.iterator=0,delete n.indexes[s]}let s=e.events;while(e.eventIndex<s.length){let t=s[e.eventIndex];if(e.eventIndex+=1,t===m)return void(n.nodes&&n.nodes.length&&(n[r]=!0,e.iterator=n.getIterator()));if(this.listeners[t])return void(e.visitors=this.listeners[t])}t.pop()}}_.registerPostcss=t=>{w=t},t.exports=_,_.default=_,h.registerLazyResult(_),c.registerLazyResult(_)},150:function(t,e,n){"use strict";n(7658);let r={split(t,e,n){let r=[],i="",s=!1,o=0,a=!1,c="",u=!1;for(let l of t)u?u=!1:"\\"===l?u=!0:a?l===c&&(a=!1):'"'===l||"'"===l?(a=!0,c=l):"("===l?o+=1:")"===l?o>0&&(o-=1):0===o&&e.includes(l)&&(s=!0),s?(""!==i&&r.push(i.trim()),i="",s=!1):i+=l;return(n||""!==i)&&r.push(i.trim()),r},space(t){let e=[" ","\n","\t"];return r.split(t,e)},comma(t){return r.split(t,[","],!0)}};t.exports=r,r.default=r},4889:function(t,e,n){"use strict";n(7658),n(2801);let{SourceMapConsumer:r,SourceMapGenerator:i}=n(9905),{dirname:s,resolve:o,relative:a,sep:c}=n(4017),{pathToFileURL:u}=n(4604),l=n(3399),h=Boolean(r&&i),d=Boolean(s&&o&&a&&c);class f{constructor(t,e,n,r){this.stringify=t,this.mapOpts=n.map||{},this.root=e,this.opts=n,this.css=r,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute}isMap(){return"undefined"!==typeof this.opts.map?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk((t=>{if(t.source&&t.source.input.map){let e=t.source.input.map;this.previousMaps.includes(e)||this.previousMaps.push(e)}}));else{let t=new l(this.css,this.opts);t.map&&this.previousMaps.push(t.map)}return this.previousMaps}isInline(){if("undefined"!==typeof this.mapOpts.inline)return this.mapOpts.inline;let t=this.mapOpts.annotation;return("undefined"===typeof t||!0===t)&&(!this.previous().length||this.previous().some((t=>t.inline)))}isSourcesContent(){return"undefined"!==typeof this.mapOpts.sourcesContent?this.mapOpts.sourcesContent:!this.previous().length||this.previous().some((t=>t.withContent()))}clearAnnotation(){if(!1!==this.mapOpts.annotation)if(this.root){let t;for(let e=this.root.nodes.length-1;e>=0;e--)t=this.root.nodes[e],"comment"===t.type&&0===t.text.indexOf("# sourceMappingURL=")&&this.root.removeChild(e)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let t={};if(this.root)this.root.walk((e=>{if(e.source){let n=e.source.input.from;if(n&&!t[n]){t[n]=!0;let r=this.usesFileUrls?this.toFileUrl(n):this.toUrl(this.path(n));this.map.setSourceContent(r,e.source.input.css)}}}));else if(this.css){let t=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(t,this.css)}}applyPrevMaps(){for(let t of this.previous()){let e,n=this.toUrl(this.path(t.file)),i=t.root||s(t.file);!1===this.mapOpts.sourcesContent?(e=new r(t.text),e.sourcesContent&&(e.sourcesContent=e.sourcesContent.map((()=>null)))):e=t.consumer(),this.map.applySourceMap(e,n,this.toUrl(this.path(i)))}}isAnnotation(){return!!this.isInline()||("undefined"!==typeof this.mapOpts.annotation?this.mapOpts.annotation:!this.previous().length||this.previous().some((t=>t.annotation)))}toBase64(t){return Buffer?Buffer.from(t).toString("base64"):window.btoa(unescape(encodeURIComponent(t)))}addAnnotation(){let t;t=this.isInline()?"data:application/json;base64,"+this.toBase64(this.map.toString()):"string"===typeof this.mapOpts.annotation?this.mapOpts.annotation:"function"===typeof this.mapOpts.annotation?this.mapOpts.annotation(this.opts.to,this.root):this.outputFile()+".map";let e="\n";this.css.includes("\r\n")&&(e="\r\n"),this.css+=e+"/*# sourceMappingURL="+t+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(1===this.previous().length){let t=this.previous()[0].consumer();t.file=this.outputFile(),this.map=i.fromSourceMap(t)}else this.map=new i({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(t){if(0===t.indexOf("<"))return t;if(/^\w+:\/\//.test(t))return t;if(this.mapOpts.absolute)return t;let e=this.opts.to?s(this.opts.to):".";return"string"===typeof this.mapOpts.annotation&&(e=s(o(e,this.mapOpts.annotation))),t=a(e,t),t}toUrl(t){return"\\"===c&&(t=t.replace(/\\/g,"/")),encodeURI(t).replace(/[#?]/g,encodeURIComponent)}toFileUrl(t){if(u)return u(t).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}sourcePath(t){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(t.source.input.from):this.toUrl(this.path(t.source.input.from))}generateString(){this.css="",this.map=new i({file:this.outputFile()});let t,e,n=1,r=1,s="<no source>",o={source:"",generated:{line:0,column:0},original:{line:0,column:0}};this.stringify(this.root,((i,a,c)=>{if(this.css+=i,a&&"end"!==c&&(o.generated.line=n,o.generated.column=r-1,a.source&&a.source.start?(o.source=this.sourcePath(a),o.original.line=a.source.start.line,o.original.column=a.source.start.column-1,this.map.addMapping(o)):(o.source=s,o.original.line=1,o.original.column=0,this.map.addMapping(o))),t=i.match(/\n/g),t?(n+=t.length,e=i.lastIndexOf("\n"),r=i.length-e):r+=i.length,a&&"start"!==c){let t=a.parent||{raws:{}};("decl"!==a.type||a!==t.last||t.raws.semicolon)&&(a.source&&a.source.end?(o.source=this.sourcePath(a),o.original.line=a.source.end.line,o.original.column=a.source.end.column-1,o.generated.line=n,o.generated.column=r-2,this.map.addMapping(o)):(o.source=s,o.original.line=1,o.original.column=0,o.generated.line=n,o.generated.column=r-1,this.map.addMapping(o)))}}))}generate(){if(this.clearAnnotation(),d&&h&&this.isMap())return this.generateMap();{let t="";return this.stringify(this.root,(e=>{t+=e})),[t]}}}t.exports=f},9191:function(t,e,n){"use strict";let r=n(4889),i=n(529),s=(n(1686),n(8402));const o=n(8350);class a{constructor(t,e,n){let s;e=e.toString(),this.stringified=!1,this._processor=t,this._css=e,this._opts=n,this._map=void 0;let a=i;this.result=new o(this._processor,s,this._opts),this.result.css=e;let c=this;Object.defineProperty(this.result,"root",{get(){return c.root}});let u=new r(a,s,this._opts,e);if(u.isMap()){let[t,e]=u.generate();t&&(this.result.css=t),e&&(this.result.map=e)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let t,e=s;try{t=e(this._css,this._opts)}catch(n){this.error=n}if(this.error)throw this.error;return this._root=t,t}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(t,e){return this.async().then(t,e)}catch(t){return this.async().catch(t)}finally(t){return this.async().then(t,t)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}}t.exports=a,a.default=a},832:function(t,e,n){"use strict";let{isClean:r,my:i}=n(3190),s=n(7792),o=n(5334),a=n(529);function c(t,e){let n=new t.constructor;for(let r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;if("proxyCache"===r)continue;let i=t[r],s=typeof i;"parent"===r&&"object"===s?e&&(n[r]=e):"source"===r?n[r]=i:Array.isArray(i)?n[r]=i.map((t=>c(t,n))):("object"===s&&null!==i&&(i=c(i)),n[r]=i)}return n}class u{constructor(t={}){this.raws={},this[r]=!1,this[i]=!0;for(let e in t)if("nodes"===e){this.nodes=[];for(let n of t[e])"function"===typeof n.clone?this.append(n.clone()):this.append(n)}else this[e]=t[e]}error(t,e={}){if(this.source){let{start:n,end:r}=this.rangeBy(e);return this.source.input.error(t,{line:n.line,column:n.column},{line:r.line,column:r.column},e)}return new s(t)}warn(t,e,n){let r={node:this};for(let i in n)r[i]=n[i];return t.warn(e,r)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(t=a){t.stringify&&(t=t.stringify);let e="";return t(this,(t=>{e+=t})),e}assign(t={}){for(let e in t)this[e]=t[e];return this}clone(t={}){let e=c(this);for(let n in t)e[n]=t[n];return e}cloneBefore(t={}){let e=this.clone(t);return this.parent.insertBefore(this,e),e}cloneAfter(t={}){let e=this.clone(t);return this.parent.insertAfter(this,e),e}replaceWith(...t){if(this.parent){let e=this,n=!1;for(let r of t)r===this?n=!0:n?(this.parent.insertAfter(e,r),e=r):this.parent.insertBefore(e,r);n||this.remove()}return this}next(){if(!this.parent)return;let t=this.parent.index(this);return this.parent.nodes[t+1]}prev(){if(!this.parent)return;let t=this.parent.index(this);return this.parent.nodes[t-1]}before(t){return this.parent.insertBefore(this,t),this}after(t){return this.parent.insertAfter(this,t),this}root(){let t=this;while(t.parent&&"document"!==t.parent.type)t=t.parent;return t}raw(t,e){let n=new o;return n.raw(this,t,e)}cleanRaws(t){delete this.raws.before,delete this.raws.after,t||delete this.raws.between}toJSON(t,e){let n={},r=null==e;e=e||new Map;let i=0;for(let s in this){if(!Object.prototype.hasOwnProperty.call(this,s))continue;if("parent"===s||"proxyCache"===s)continue;let t=this[s];if(Array.isArray(t))n[s]=t.map((t=>"object"===typeof t&&t.toJSON?t.toJSON(null,e):t));else if("object"===typeof t&&t.toJSON)n[s]=t.toJSON(null,e);else if("source"===s){let r=e.get(t.input);null==r&&(r=i,e.set(t.input,i),i++),n[s]={inputId:r,start:t.start,end:t.end}}else n[s]=t}return r&&(n.inputs=[...e.keys()].map((t=>t.toJSON()))),n}positionInside(t){let e=this.toString(),n=this.source.start.column,r=this.source.start.line;for(let i=0;i<t;i++)"\n"===e[i]?(n=1,r+=1):n+=1;return{line:r,column:n}}positionBy(t){let e=this.source.start;if(t.index)e=this.positionInside(t.index);else if(t.word){let n=this.toString().indexOf(t.word);-1!==n&&(e=this.positionInside(n))}return e}rangeBy(t){let e={line:this.source.start.line,column:this.source.start.column},n=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:e.line,column:e.column+1};if(t.word){let r=this.toString().indexOf(t.word);-1!==r&&(e=this.positionInside(r),n=this.positionInside(r+t.word.length))}else t.start?e={line:t.start.line,column:t.start.column}:t.index&&(e=this.positionInside(t.index)),t.end?n={line:t.end.line,column:t.end.column}:t.endIndex?n=this.positionInside(t.endIndex):t.index&&(n=this.positionInside(t.index+1));return(n.line<e.line||n.line===e.line&&n.column<=e.column)&&(n={line:e.line,column:e.column+1}),{start:e,end:n}}getProxyProcessor(){return{set(t,e,n){return t[e]===n||(t[e]=n,"prop"!==e&&"value"!==e&&"name"!==e&&"params"!==e&&"important"!==e&&"text"!==e||t.markDirty()),!0},get(t,e){return"proxyOf"===e?t:"root"===e?()=>t.root().toProxy():t[e]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(t){if(t.postcssNode=this,t.stack&&this.source&&/\n\s{4}at /.test(t.stack)){let e=this.source;t.stack=t.stack.replace(/\n\s{4}at /,`$&${e.input.from}:${e.start.line}:${e.start.column}$&`)}return t}markDirty(){if(this[r]){this[r]=!1;let t=this;while(t=t.parent)t[r]=!1}}get proxyOf(){return this}}t.exports=u,u.default=u},8402:function(t,e,n){"use strict";let r=n(311),i=n(6342),s=n(3399);function o(t,e){let n=new s(t,e),r=new i(n);try{r.parse()}catch(o){throw o}return r.root}t.exports=o,o.default=o,r.registerParse(o)},6342:function(t,e,n){"use strict";n(7658);let r=n(5914),i=n(3610),s=n(3909),o=n(8329),a=n(6227),c=n(1362);const u={empty:!0,space:!0};function l(t){for(let e=t.length-1;e>=0;e--){let n=t[e],r=n[3]||n[2];if(r)return r}}class h{constructor(t){this.input=t,this.root=new a,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:t,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=i(this.input)}parse(){let t;while(!this.tokenizer.endOfFile())switch(t=this.tokenizer.nextToken(),t[0]){case"space":this.spaces+=t[1];break;case";":this.freeSemicolon(t);break;case"}":this.end(t);break;case"comment":this.comment(t);break;case"at-word":this.atrule(t);break;case"{":this.emptyRule(t);break;default:this.other(t);break}this.endFile()}comment(t){let e=new s;this.init(e,t[2]),e.source.end=this.getPosition(t[3]||t[2]);let n=t[1].slice(2,-2);if(/^\s*$/.test(n))e.text="",e.raws.left=n,e.raws.right="";else{let t=n.match(/^(\s*)([^]*\S)(\s*)$/);e.text=t[2],e.raws.left=t[1],e.raws.right=t[3]}}emptyRule(t){let e=new c;this.init(e,t[2]),e.selector="",e.raws.between="",this.current=e}other(t){let e=!1,n=null,r=!1,i=null,s=[],o=t[1].startsWith("--"),a=[],c=t;while(c){if(n=c[0],a.push(c),"("===n||"["===n)i||(i=c),s.push("("===n?")":"]");else if(o&&r&&"{"===n)i||(i=c),s.push("}");else if(0===s.length){if(";"===n){if(r)return void this.decl(a,o);break}if("{"===n)return void this.rule(a);if("}"===n){this.tokenizer.back(a.pop()),e=!0;break}":"===n&&(r=!0)}else n===s[s.length-1]&&(s.pop(),0===s.length&&(i=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(e=!0),s.length>0&&this.unclosedBracket(i),e&&r){if(!o)while(a.length){if(c=a[a.length-1][0],"space"!==c&&"comment"!==c)break;this.tokenizer.back(a.pop())}this.decl(a,o)}else this.unknownWord(a)}rule(t){t.pop();let e=new c;this.init(e,t[0][2]),e.raws.between=this.spacesAndCommentsFromEnd(t),this.raw(e,"selector",t),this.current=e}decl(t,e){let n=new r;this.init(n,t[0][2]);let i,s=t[t.length-1];";"===s[0]&&(this.semicolon=!0,t.pop()),n.source.end=this.getPosition(s[3]||s[2]||l(t));while("word"!==t[0][0])1===t.length&&this.unknownWord(t),n.raws.before+=t.shift()[1];n.source.start=this.getPosition(t[0][2]),n.prop="";while(t.length){let e=t[0][0];if(":"===e||"space"===e||"comment"===e)break;n.prop+=t.shift()[1]}n.raws.between="";while(t.length){if(i=t.shift(),":"===i[0]){n.raws.between+=i[1];break}"word"===i[0]&&/\w/.test(i[1])&&this.unknownWord([i]),n.raws.between+=i[1]}"_"!==n.prop[0]&&"*"!==n.prop[0]||(n.raws.before+=n.prop[0],n.prop=n.prop.slice(1));let o,a=[];while(t.length){if(o=t[0][0],"space"!==o&&"comment"!==o)break;a.push(t.shift())}this.precheckMissedSemicolon(t);for(let r=t.length-1;r>=0;r--){if(i=t[r],"!important"===i[1].toLowerCase()){n.important=!0;let e=this.stringFrom(t,r);e=this.spacesFromEnd(t)+e," !important"!==e&&(n.raws.important=e);break}if("important"===i[1].toLowerCase()){let e=t.slice(0),i="";for(let t=r;t>0;t--){let n=e[t][0];if(0===i.trim().indexOf("!")&&"space"!==n)break;i=e.pop()[1]+i}0===i.trim().indexOf("!")&&(n.important=!0,n.raws.important=i,t=e)}if("space"!==i[0]&&"comment"!==i[0])break}let c=t.some((t=>"space"!==t[0]&&"comment"!==t[0]));c&&(n.raws.between+=a.map((t=>t[1])).join(""),a=[]),this.raw(n,"value",a.concat(t),e),n.value.includes(":")&&!e&&this.checkMissedSemicolon(t)}atrule(t){let e,n,r,i=new o;i.name=t[1].slice(1),""===i.name&&this.unnamedAtrule(i,t),this.init(i,t[2]);let s=!1,a=!1,c=[],u=[];while(!this.tokenizer.endOfFile()){if(t=this.tokenizer.nextToken(),e=t[0],"("===e||"["===e?u.push("("===e?")":"]"):"{"===e&&u.length>0?u.push("}"):e===u[u.length-1]&&u.pop(),0===u.length){if(";"===e){i.source.end=this.getPosition(t[2]),this.semicolon=!0;break}if("{"===e){a=!0;break}if("}"===e){if(c.length>0){r=c.length-1,n=c[r];while(n&&"space"===n[0])n=c[--r];n&&(i.source.end=this.getPosition(n[3]||n[2]))}this.end(t);break}c.push(t)}else c.push(t);if(this.tokenizer.endOfFile()){s=!0;break}}i.raws.between=this.spacesAndCommentsFromEnd(c),c.length?(i.raws.afterName=this.spacesAndCommentsFromStart(c),this.raw(i,"params",c),s&&(t=c[c.length-1],i.source.end=this.getPosition(t[3]||t[2]),this.spaces=i.raws.between,i.raws.between="")):(i.raws.afterName="",i.params=""),a&&(i.nodes=[],this.current=i)}end(t){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(t[2]),this.current=this.current.parent):this.unexpectedClose(t)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(t){if(this.spaces+=t[1],this.current.nodes){let t=this.current.nodes[this.current.nodes.length-1];t&&"rule"===t.type&&!t.raws.ownSemicolon&&(t.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(t){let e=this.input.fromOffset(t);return{offset:t,line:e.line,column:e.col}}init(t,e){this.current.push(t),t.source={start:this.getPosition(e),input:this.input},t.raws.before=this.spaces,this.spaces="","comment"!==t.type&&(this.semicolon=!1)}raw(t,e,n,r){let i,s,o,a,c=n.length,l="",h=!0;for(let d=0;d<c;d+=1)i=n[d],s=i[0],"space"!==s||d!==c-1||r?"comment"===s?(a=n[d-1]?n[d-1][0]:"empty",o=n[d+1]?n[d+1][0]:"empty",u[a]||u[o]||","===l.slice(-1)?h=!1:l+=i[1]):l+=i[1]:h=!1;if(!h){let r=n.reduce(((t,e)=>t+e[1]),"");t.raws[e]={value:l,raw:r}}t[e]=l}spacesAndCommentsFromEnd(t){let e,n="";while(t.length){if(e=t[t.length-1][0],"space"!==e&&"comment"!==e)break;n=t.pop()[1]+n}return n}spacesAndCommentsFromStart(t){let e,n="";while(t.length){if(e=t[0][0],"space"!==e&&"comment"!==e)break;n+=t.shift()[1]}return n}spacesFromEnd(t){let e,n="";while(t.length){if(e=t[t.length-1][0],"space"!==e)break;n=t.pop()[1]+n}return n}stringFrom(t,e){let n="";for(let r=e;r<t.length;r++)n+=t[r][1];return t.splice(e,t.length-e),n}colon(t){let e,n,r,i=0;for(let[s,o]of t.entries()){if(e=o,n=e[0],"("===n&&(i+=1),")"===n&&(i-=1),0===i&&":"===n){if(r){if("word"===r[0]&&"progid"===r[1])continue;return s}this.doubleColon(e)}r=e}return!1}unclosedBracket(t){throw this.input.error("Unclosed bracket",{offset:t[2]},{offset:t[2]+1})}unknownWord(t){throw this.input.error("Unknown word",{offset:t[0][2]},{offset:t[0][2]+t[0][1].length})}unexpectedClose(t){throw this.input.error("Unexpected }",{offset:t[2]},{offset:t[2]+1})}unclosedBlock(){let t=this.current.source.start;throw this.input.error("Unclosed block",t.line,t.column)}doubleColon(t){throw this.input.error("Double colon",{offset:t[2]},{offset:t[2]+t[1].length})}unnamedAtrule(t,e){throw this.input.error("At-rule without name",{offset:e[2]},{offset:e[2]+e[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(t){let e=this.colon(t);if(!1===e)return;let n,r=0;for(let i=e-1;i>=0;i--)if(n=t[i],"space"!==n[0]&&(r+=1,2===r))break;throw this.input.error("Missed semicolon","word"===n[0]?n[3]+1:n[2])}}t.exports=h},9643:function(t,e,n){"use strict";let r=n(7792),i=n(5914),s=n(4075),o=n(311),a=n(3466),c=n(529),u=n(7739),l=n(3645),h=n(6181),d=n(3909),f=n(8329),p=n(8350),m=n(3399),g=n(8402),v=n(150),y=n(1362),b=n(6227),w=n(832);function _(...t){return 1===t.length&&Array.isArray(t[0])&&(t=t[0]),new a(t)}_.plugin=function(t,e){let n,r=!1;function i(...n){console&&console.warn&&!r&&(r=!0,console.warn(t+": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"),{NODE_ENV:"production",BASE_URL:"/chitter/"}.LANG&&{NODE_ENV:"production",BASE_URL:"/chitter/"}.LANG.startsWith("cn")&&console.warn(t+": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"));let i=e(...n);return i.postcssPlugin=t,i.postcssVersion=(new a).version,i}return Object.defineProperty(i,"postcss",{get(){return n||(n=i()),n}}),i.process=function(t,e,n){return _([i(n)]).process(t,e)},i},_.stringify=c,_.parse=g,_.fromJSON=u,_.list=v,_.comment=t=>new d(t),_.atRule=t=>new f(t),_.decl=t=>new i(t),_.rule=t=>new y(t),_.root=t=>new b(t),_.document=t=>new l(t),_.CssSyntaxError=r,_.Declaration=i,_.Container=o,_.Processor=a,_.Document=l,_.Comment=d,_.Warning=h,_.AtRule=f,_.Result=p,_.Input=m,_.Rule=y,_.Root=b,_.Node=w,s.registerPostcss(_),t.exports=_,_.default=_},5146:function(t,e,n){"use strict";n(2801);let{SourceMapConsumer:r,SourceMapGenerator:i}=n(9905),{existsSync:s,readFileSync:o}=n(1777),{dirname:a,join:c}=n(4017);function u(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}class l{constructor(t,e){if(!1===e.map)return;this.loadAnnotation(t),this.inline=this.startWith(this.annotation,"data:");let n=e.map?e.map.prev:void 0,r=this.loadMap(e.from,n);!this.mapFile&&e.from&&(this.mapFile=e.from),this.mapFile&&(this.root=a(this.mapFile)),r&&(this.text=r)}consumer(){return this.consumerCache||(this.consumerCache=new r(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(t,e){return!!t&&t.substr(0,e.length)===e}getAnnotationURL(t){return t.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(t){let e=t.match(/\/\*\s*# sourceMappingURL=/gm);if(!e)return;let n=t.lastIndexOf(e.pop()),r=t.indexOf("*/",n);n>-1&&r>-1&&(this.annotation=this.getAnnotationURL(t.substring(n,r)))}decodeInline(t){let e=/^data:application\/json;charset=utf-?8;base64,/,n=/^data:application\/json;base64,/,r=/^data:application\/json;charset=utf-?8,/,i=/^data:application\/json,/;if(r.test(t)||i.test(t))return decodeURIComponent(t.substr(RegExp.lastMatch.length));if(e.test(t)||n.test(t))return u(t.substr(RegExp.lastMatch.length));let s=t.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+s)}loadFile(t){if(this.root=a(t),s(t))return this.mapFile=t,o(t,"utf-8").toString().trim()}loadMap(t,e){if(!1===e)return!1;if(e){if("string"===typeof e)return e;if("function"!==typeof e){if(e instanceof r)return i.fromSourceMap(e).toString();if(e instanceof i)return e.toString();if(this.isMap(e))return JSON.stringify(e);throw new Error("Unsupported previous source map format: "+e.toString())}{let n=e(t);if(n){let t=this.loadFile(n);if(!t)throw new Error("Unable to load previous source map: "+n.toString());return t}}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let e=this.annotation;return t&&(e=c(a(t),e)),this.loadFile(e)}}}isMap(t){return"object"===typeof t&&("string"===typeof t.mappings||"string"===typeof t._mappings||Array.isArray(t.sections))}}t.exports=l,l.default=l},3466:function(t,e,n){"use strict";n(7658);let r=n(9191),i=n(4075),s=n(3645),o=n(6227);class a{constructor(t=[]){this.version="8.4.19",this.plugins=this.normalize(t)}use(t){return this.plugins=this.plugins.concat(this.normalize([t])),this}process(t,e={}){return 0===this.plugins.length&&"undefined"===typeof e.parser&&"undefined"===typeof e.stringifier&&"undefined"===typeof e.syntax?new r(this,t,e):new i(this,t,e)}normalize(t){let e=[];for(let n of t)if(!0===n.postcss?n=n():n.postcss&&(n=n.postcss),"object"===typeof n&&Array.isArray(n.plugins))e=e.concat(n.plugins);else if("object"===typeof n&&n.postcssPlugin)e.push(n);else if("function"===typeof n)e.push(n);else{if("object"!==typeof n||!n.parse&&!n.stringify)throw new Error(n+" is not a PostCSS plugin")}return e}}t.exports=a,a.default=a,o.registerProcessor(a),s.registerProcessor(a)},8350:function(t,e,n){"use strict";n(7658);let r=n(6181);class i{constructor(t,e,n){this.processor=t,this.messages=[],this.root=e,this.opts=n,this.css=void 0,this.map=void 0}toString(){return this.css}warn(t,e={}){e.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(e.plugin=this.lastPlugin.postcssPlugin);let n=new r(t,e);return this.messages.push(n),n}warnings(){return this.messages.filter((t=>"warning"===t.type))}get content(){return this.css}}t.exports=i,i.default=i},6227:function(t,e,n){"use strict";let r,i,s=n(311);class o extends s{constructor(t){super(t),this.type="root",this.nodes||(this.nodes=[])}removeChild(t,e){let n=this.index(t);return!e&&0===n&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[n].raws.before),super.removeChild(t)}normalize(t,e,n){let r=super.normalize(t);if(e)if("prepend"===n)this.nodes.length>1?e.raws.before=this.nodes[1].raws.before:delete e.raws.before;else if(this.first!==e)for(let i of r)i.raws.before=e.raws.before;return r}toResult(t={}){let e=new r(new i,this,t);return e.stringify()}}o.registerLazyResult=t=>{r=t},o.registerProcessor=t=>{i=t},t.exports=o,o.default=o,s.registerRoot(o)},1362:function(t,e,n){"use strict";let r=n(311),i=n(150);class s extends r{constructor(t){super(t),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return i.comma(this.selector)}set selectors(t){let e=this.selector?this.selector.match(/,\s*/):null,n=e?e[0]:","+this.raw("between","beforeOpen");this.selector=t.join(n)}}t.exports=s,s.default=s,r.registerRule(s)},5334:function(t){"use strict";const e={colon:": ",indent:"    ",beforeDecl:"\n",beforeRule:"\n",beforeOpen:" ",beforeClose:"\n",beforeComment:"\n",after:"\n",emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function n(t){return t[0].toUpperCase()+t.slice(1)}class r{constructor(t){this.builder=t}stringify(t,e){if(!this[t.type])throw new Error("Unknown AST node type "+t.type+". Maybe you need to change PostCSS stringifier.");this[t.type](t,e)}document(t){this.body(t)}root(t){this.body(t),t.raws.after&&this.builder(t.raws.after)}comment(t){let e=this.raw(t,"left","commentLeft"),n=this.raw(t,"right","commentRight");this.builder("/*"+e+t.text+n+"*/",t)}decl(t,e){let n=this.raw(t,"between","colon"),r=t.prop+n+this.rawValue(t,"value");t.important&&(r+=t.raws.important||" !important"),e&&(r+=";"),this.builder(r,t)}rule(t){this.block(t,this.rawValue(t,"selector")),t.raws.ownSemicolon&&this.builder(t.raws.ownSemicolon,t,"end")}atrule(t,e){let n="@"+t.name,r=t.params?this.rawValue(t,"params"):"";if("undefined"!==typeof t.raws.afterName?n+=t.raws.afterName:r&&(n+=" "),t.nodes)this.block(t,n+r);else{let i=(t.raws.between||"")+(e?";":"");this.builder(n+r+i,t)}}body(t){let e=t.nodes.length-1;while(e>0){if("comment"!==t.nodes[e].type)break;e-=1}let n=this.raw(t,"semicolon");for(let r=0;r<t.nodes.length;r++){let i=t.nodes[r],s=this.raw(i,"before");s&&this.builder(s),this.stringify(i,e!==r||n)}}block(t,e){let n,r=this.raw(t,"between","beforeOpen");this.builder(e+r+"{",t,"start"),t.nodes&&t.nodes.length?(this.body(t),n=this.raw(t,"after")):n=this.raw(t,"after","emptyBody"),n&&this.builder(n),this.builder("}",t,"end")}raw(t,r,i){let s;if(i||(i=r),r&&(s=t.raws[r],"undefined"!==typeof s))return s;let o=t.parent;if("before"===i){if(!o||"root"===o.type&&o.first===t)return"";if(o&&"document"===o.type)return""}if(!o)return e[i];let a=t.root();if(a.rawCache||(a.rawCache={}),"undefined"!==typeof a.rawCache[i])return a.rawCache[i];if("before"===i||"after"===i)return this.beforeAfter(t,i);{let e="raw"+n(i);this[e]?s=this[e](a,t):a.walk((t=>{if(s=t.raws[r],"undefined"!==typeof s)return!1}))}return"undefined"===typeof s&&(s=e[i]),a.rawCache[i]=s,s}rawSemicolon(t){let e;return t.walk((t=>{if(t.nodes&&t.nodes.length&&"decl"===t.last.type&&(e=t.raws.semicolon,"undefined"!==typeof e))return!1})),e}rawEmptyBody(t){let e;return t.walk((t=>{if(t.nodes&&0===t.nodes.length&&(e=t.raws.after,"undefined"!==typeof e))return!1})),e}rawIndent(t){if(t.raws.indent)return t.raws.indent;let e;return t.walk((n=>{let r=n.parent;if(r&&r!==t&&r.parent&&r.parent===t&&"undefined"!==typeof n.raws.before){let t=n.raws.before.split("\n");return e=t[t.length-1],e=e.replace(/\S/g,""),!1}})),e}rawBeforeComment(t,e){let n;return t.walkComments((t=>{if("undefined"!==typeof t.raws.before)return n=t.raws.before,n.includes("\n")&&(n=n.replace(/[^\n]+$/,"")),!1})),"undefined"===typeof n?n=this.raw(e,null,"beforeDecl"):n&&(n=n.replace(/\S/g,"")),n}rawBeforeDecl(t,e){let n;return t.walkDecls((t=>{if("undefined"!==typeof t.raws.before)return n=t.raws.before,n.includes("\n")&&(n=n.replace(/[^\n]+$/,"")),!1})),"undefined"===typeof n?n=this.raw(e,null,"beforeRule"):n&&(n=n.replace(/\S/g,"")),n}rawBeforeRule(t){let e;return t.walk((n=>{if(n.nodes&&(n.parent!==t||t.first!==n)&&"undefined"!==typeof n.raws.before)return e=n.raws.before,e.includes("\n")&&(e=e.replace(/[^\n]+$/,"")),!1})),e&&(e=e.replace(/\S/g,"")),e}rawBeforeClose(t){let e;return t.walk((t=>{if(t.nodes&&t.nodes.length>0&&"undefined"!==typeof t.raws.after)return e=t.raws.after,e.includes("\n")&&(e=e.replace(/[^\n]+$/,"")),!1})),e&&(e=e.replace(/\S/g,"")),e}rawBeforeOpen(t){let e;return t.walk((t=>{if("decl"!==t.type&&(e=t.raws.between,"undefined"!==typeof e))return!1})),e}rawColon(t){let e;return t.walkDecls((t=>{if("undefined"!==typeof t.raws.between)return e=t.raws.between.replace(/[^\s:]/g,""),!1})),e}beforeAfter(t,e){let n;n="decl"===t.type?this.raw(t,null,"beforeDecl"):"comment"===t.type?this.raw(t,null,"beforeComment"):"before"===e?this.raw(t,null,"beforeRule"):this.raw(t,null,"beforeClose");let r=t.parent,i=0;while(r&&"root"!==r.type)i+=1,r=r.parent;if(n.includes("\n")){let e=this.raw(t,null,"indent");if(e.length)for(let t=0;t<i;t++)n+=e}return n}rawValue(t,e){let n=t[e],r=t.raws[e];return r&&r.value===n?r.raw:n}}t.exports=r,r.default=r},529:function(t,e,n){"use strict";let r=n(5334);function i(t,e){let n=new r(e);n.stringify(t)}t.exports=i,i.default=i},3190:function(t){"use strict";t.exports.isClean=Symbol("isClean"),t.exports.my=Symbol("my")},3610:function(t,e,n){"use strict";n(7658);const r="'".charCodeAt(0),i='"'.charCodeAt(0),s="\\".charCodeAt(0),o="/".charCodeAt(0),a="\n".charCodeAt(0),c=" ".charCodeAt(0),u="\f".charCodeAt(0),l="\t".charCodeAt(0),h="\r".charCodeAt(0),d="[".charCodeAt(0),f="]".charCodeAt(0),p="(".charCodeAt(0),m=")".charCodeAt(0),g="{".charCodeAt(0),v="}".charCodeAt(0),y=";".charCodeAt(0),b="*".charCodeAt(0),w=":".charCodeAt(0),_="@".charCodeAt(0),E=/[\t\n\f\r "#'()/;[\\\]{}]/g,T=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,S=/.[\n"'(/\\]/,I=/[\da-f]/i;t.exports=function(t,e={}){let n,k,C,x,A,O,R,D,N,L,P=t.css.valueOf(),M=e.ignoreErrors,U=P.length,F=0,j=[],V=[];function q(){return F}function B(e){throw t.error("Unclosed "+e,F)}function $(){return 0===V.length&&F>=U}function z(t){if(V.length)return V.pop();if(F>=U)return;let e=!!t&&t.ignoreUnclosed;switch(n=P.charCodeAt(F),n){case a:case c:case l:case h:case u:k=F;do{k+=1,n=P.charCodeAt(k)}while(n===c||n===a||n===l||n===h||n===u);L=["space",P.slice(F,k)],F=k-1;break;case d:case f:case g:case v:case w:case y:case m:{let t=String.fromCharCode(n);L=[t,t,F];break}case p:if(D=j.length?j.pop()[1]:"",N=P.charCodeAt(F+1),"url"===D&&N!==r&&N!==i&&N!==c&&N!==a&&N!==l&&N!==u&&N!==h){k=F;do{if(O=!1,k=P.indexOf(")",k+1),-1===k){if(M||e){k=F;break}B("bracket")}R=k;while(P.charCodeAt(R-1)===s)R-=1,O=!O}while(O);L=["brackets",P.slice(F,k+1),F,k],F=k}else k=P.indexOf(")",F+1),x=P.slice(F,k+1),-1===k||S.test(x)?L=["(","(",F]:(L=["brackets",x,F,k],F=k);break;case r:case i:C=n===r?"'":'"',k=F;do{if(O=!1,k=P.indexOf(C,k+1),-1===k){if(M||e){k=F+1;break}B("string")}R=k;while(P.charCodeAt(R-1)===s)R-=1,O=!O}while(O);L=["string",P.slice(F,k+1),F,k],F=k;break;case _:E.lastIndex=F+1,E.test(P),k=0===E.lastIndex?P.length-1:E.lastIndex-2,L=["at-word",P.slice(F,k+1),F,k],F=k;break;case s:k=F,A=!0;while(P.charCodeAt(k+1)===s)k+=1,A=!A;if(n=P.charCodeAt(k+1),A&&n!==o&&n!==c&&n!==a&&n!==l&&n!==h&&n!==u&&(k+=1,I.test(P.charAt(k)))){while(I.test(P.charAt(k+1)))k+=1;P.charCodeAt(k+1)===c&&(k+=1)}L=["word",P.slice(F,k+1),F,k],F=k;break;default:n===o&&P.charCodeAt(F+1)===b?(k=P.indexOf("*/",F+2)+1,0===k&&(M||e?k=P.length:B("comment")),L=["comment",P.slice(F,k+1),F,k],F=k):(T.lastIndex=F+1,T.test(P),k=0===T.lastIndex?P.length-1:T.lastIndex-2,L=["word",P.slice(F,k+1),F,k],j.push(L),F=k);break}return F++,L}function H(t){V.push(t)}return{back:H,nextToken:z,endOfFile:$,position:q}}},1686:function(t){"use strict";let e={};t.exports=function(t){e[t]||(e[t]=!0,"undefined"!==typeof console&&console.warn&&console.warn(t))}},6181:function(t){"use strict";class e{constructor(t,e={}){if(this.type="warning",this.text=t,e.node&&e.node.source){let t=e.node.rangeBy(e);this.line=t.start.line,this.column=t.start.column,this.endLine=t.end.line,this.endColumn=t.end.column}for(let n in e)this[n]=e[n]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}}t.exports=e,e.default=e},3301:function(t,e,n){n(7658);var r=(()=>{var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,s=(t,s)=>{for(var o in s||(s={}))n.call(s,o)&&i(t,o,s[o]);if(e)for(var o of e(s))r.call(s,o)&&i(t,o,s[o]);return t},o=e=>t(e,"__esModule",{value:!0}),a=(e,n)=>{for(var r in o(e),n)t(e,r,{get:n[r],enumerable:!0})},c={};a(c,{DEFAULT_UUID_LENGTH:()=>l,default:()=>f});var u="4.4.4",l=6,h={dictionary:"alphanum",shuffle:!0,debug:!1,length:l},d=class extends Function{constructor(t={}){super(),this.dictIndex=0,this.dictRange=[],this.lowerBound=0,this.upperBound=0,this.dictLength=0,this._digit_first_ascii=48,this._digit_last_ascii=58,this._alpha_lower_first_ascii=97,this._alpha_lower_last_ascii=123,this._hex_last_ascii=103,this._alpha_upper_first_ascii=65,this._alpha_upper_last_ascii=91,this._number_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii]},this._alpha_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alpha_lower_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alpha_upper_dict_ranges={upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_lower_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alphanum_upper_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._hex_dict_ranges={decDigits:[this._digit_first_ascii,this._digit_last_ascii],alphaDigits:[this._alpha_lower_first_ascii,this._hex_last_ascii]},this.log=(...t)=>{const e=[...t];if(e[0]=`[short-unique-id] ${t[0]}`,!0===this.debug&&"undefined"!==typeof console&&null!==console)return console.log(...e)},this.setDictionary=(t,e)=>{let n;if(t&&Array.isArray(t)&&t.length>1)n=t;else{let e;n=[],this.dictIndex=e=0;const r=`_${t}_dict_ranges`,i=this[r];Object.keys(i).forEach((t=>{const r=t;for(this.dictRange=i[r],this.lowerBound=this.dictRange[0],this.upperBound=this.dictRange[1],this.dictIndex=e=this.lowerBound;this.lowerBound<=this.upperBound?e<this.upperBound:e>this.upperBound;this.dictIndex=this.lowerBound<=this.upperBound?e+=1:e-=1)n.push(String.fromCharCode(this.dictIndex))}))}if(e){const t=.5;n=n.sort((()=>Math.random()-t))}this.dict=n,this.dictLength=this.dict.length,this.counter=0},this.seq=()=>this.sequentialUUID(),this.sequentialUUID=()=>{let t,e,n="";t=this.counter;do{e=t%this.dictLength,t=Math.trunc(t/this.dictLength),n+=this.dict[e]}while(0!==t);return this.counter+=1,n},this.randomUUID=(t=this.uuidLength||l)=>{let e,n,r;if(null===t||"undefined"===typeof t||t<1)throw new Error("Invalid UUID Length Provided");for(e="",r=0;r<t;r+=1)n=parseInt((Math.random()*this.dictLength).toFixed(0),10)%this.dictLength,e+=this.dict[n];return e},this.availableUUIDs=(t=this.uuidLength)=>parseFloat(Math.pow([...new Set(this.dict)].length,t).toFixed(0)),this.approxMaxBeforeCollision=(t=this.availableUUIDs(this.uuidLength))=>parseFloat(Math.sqrt(Math.PI/2*t).toFixed(20)),this.collisionProbability=(t=this.availableUUIDs(this.uuidLength),e=this.uuidLength)=>parseFloat((this.approxMaxBeforeCollision(t)/this.availableUUIDs(e)).toFixed(20)),this.uniqueness=(t=this.availableUUIDs(this.uuidLength))=>{const e=parseFloat((1-this.approxMaxBeforeCollision(t)/t).toFixed(20));return e>1?1:e<0?0:e},this.getVersion=()=>this.version,this.stamp=t=>{if("number"!==typeof t||t<10)throw new Error("Param finalLength must be number greater than 10");const e=Math.floor(+new Date/1e3).toString(16),n=t-9,r=Math.round(Math.random()*(n>15?15:n)),i=this.randomUUID(n);return`${i.substr(0,r)}${e}${i.substr(r)}${r.toString(16)}`},this.parseStamp=t=>{if(t.length<10)throw new Error("Stamp length invalid");const e=parseInt(t.substr(t.length-1,1),16);return new Date(1e3*parseInt(t.substr(e,8),16))};const e=s(s({},h),t);this.counter=0,this.debug=!1,this.dict=[],this.version=u;const{dictionary:n,shuffle:r,length:i}=e;return this.uuidLength=i,this.setDictionary(n,r),this.debug=e.debug,this.log(this.dict),this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`),new Proxy(this,{apply:(t,e,n)=>this.randomUUID(...n)})}},f=d;return f.default=d,c})();t.exports=r.default,"undefined"!=typeof window&&(r=r.default)},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1922:function(t,e,n){"use strict";
/*!
  * vuefire v2.2.5
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */
function r(t,e){return e.split(".").reduce((function(t,e){return t[e]}),t)}function i(t,e,n){var r=(""+e).split("."),i=r.pop(),s=r.reduce((function(t,e){return t[e]}),t);return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function s(t){return t&&"object"===typeof t}function o(t){return t.toDate}function a(t){return t&&t.onSnapshot}function c(t,e){var n=!1;return function(){if(!n)return n=!0,t(e())}}function u(t){var e=t.val(),n=s(e)?e:Object.defineProperty({},".value",{value:e});return Object.defineProperty(n,".key",{value:t.key}),n}n.d(e,{S:function(){return T}});var l={reset:!0,serialize:u,wait:!1};function h(t){return Object.defineProperty(t.data()||{},"id",{value:t.id})}function d(t,e,n){var r=[{},{}],i=Object.keys(n).reduce((function(t,e){var r=n[e];return t[r.path]=r.data(),t}),{});function c(t,e,n,r){e=e||{};var u=r[0],l=r[1];for(var h in Object.getOwnPropertyNames(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);n&&!n.enumerable&&Object.defineProperty(u,e,n)})),t){var d=t[h];if(null==d||d instanceof Date||o(d)||d.longitude&&d.latitude)u[h]=d;else if(a(d))u[h]="object"===typeof e&&h in e&&"string"!=typeof e[h]?e[h]:d.path,l[n+h]=d;else if(Array.isArray(d)){u[h]=Array(d.length);for(var f=0;f<d.length;f++){var p=d[f];p&&p.path in i&&(u[h][f]=i[p.path])}c(d,e[h]||u[h],n+h+".",[u[h],l])}else s(d)?(u[h]={},c(d,e[h],n+h+".",[u[h],l])):u[h]=d}}return c(t,e,"",r),r}var f={maxRefDepth:2,reset:!0,serialize:h,wait:!1};function p(t){for(var e in t)t[e].unsub()}function m(t,e,n,i,s,o,a,c){var u=d(t.serialize(i),r(e,n),s),l=u[0],h=u[1];o.set(e,n,l),v(t,e,n,s,h,o,a,c)}function g(t,e){var n=t.ref,r=t.target,i=t.path,s=t.depth,o=t.resolve,a=t.ops,c=Object.create(null),u=n.onSnapshot((function(t){t.exists?m(e,r,i,t,c,a,s,o):(a.set(r,i,null),o())}));return function(){u(),p(c)}}function v(t,e,n,i,s,o,a,c){var u=Object.keys(s),l=Object.keys(i).filter((function(t){return u.indexOf(t)<0}));if(l.forEach((function(t){i[t].unsub(),delete i[t]})),!u.length||++a>t.maxRefDepth)return c(n);var h=0,d=u.length,f=Object.create(null);function p(t){t in f&&++h>=d&&c(n)}u.forEach((function(c){var u=i[c],l=s[c],h=n+"."+c;if(f[h]=!0,u){if(u.path===l.path)return;u.unsub()}i[c]={data:function(){return r(e,h)},unsub:g({ref:l,target:e,path:h,depth:a,ops:o,resolve:p.bind(null,h)},t),path:l.path}}))}function y(t,e){var n=t.vm,r=t.key,i=t.collection,s=t.ops,o=t.resolve,a=t.reject;void 0===e&&(e=f);var c,u=Object.assign({},f,e),l=u.wait?[]:s.set(n,r,[]),h=o,m=[],g={added:function(t){var e=t.newIndex,n=t.doc;m.splice(e,0,Object.create(null));var r=m[e],i=d(u.serialize(n),void 0,r),a=i[0],c=i[1];s.add(l,e,a),v(u,l,e,r,c,s,0,o.bind(null,n))},modified:function(t){var e=t.oldIndex,n=t.newIndex,r=t.doc,i=m[e],a=l[e],c=d(u.serialize(r),a,i),h=c[0],f=c[1];m.splice(n,0,i),s.remove(l,e),s.add(l,n,h),v(u,l,n,i,f,s,0,o)},removed:function(t){var e=t.oldIndex;s.remove(l,e),p(m.splice(e,1)[0])}},y=i.onSnapshot((function(t){var e="function"===typeof t.docChanges?t.docChanges():t.docChanges;if(!c&&e.length){c=!0;for(var i=0,a=e.length,d=Object.create(null),f=0;f<a;f++)d[e[f].doc.id]=!0;o=function(t){var e=t.id;e in d&&++i>=a&&(u.wait&&s.set(n,r,l),h(n[r]),o=function(){})}}e.forEach((function(t){g[t.type](t)})),e.length||(u.wait&&s.set(n,r,l),o(l))}),a);return function(t){if(y(),!1!==t){var e="function"===typeof t?t():[];s.set(n,r,e)}m.forEach(p)}}function b(t,e){var n=t.vm,i=t.key,s=t.document,o=t.resolve,a=t.reject,u=t.ops;void 0===e&&(e=f);var l=Object.assign({},f,e),h=Object.create(null);o=c(o,(function(){return r(n,i)}));var d=s.onSnapshot((function(t){t.exists?m(l,n,i,t,h,u,0,o):(u.set(n,i,null),o(null))}),a);return function(t){if(d(),!1!==t){var e="function"===typeof t?t():null;u.set(n,i,e)}p(h)}}l.serialize,l.reset,l.wait;var w={set:function(t,e,n){return i(t,e,n)},add:function(t,e,n){return t.splice(e,0,n)},remove:function(t,e){return t.splice(e,1)}};function _(t,e,n,r,i){return new Promise((function(s,o){var a;a="where"in n?y({vm:t,key:e,ops:r,collection:n,resolve:s,reject:o},i):b({vm:t,key:e,ops:r,document:n,resolve:s,reject:o},i),t._firestoreUnbinds[e]=a}))}var E={bindName:"$bind",unbindName:"$unbind",serialize:f.serialize,reset:f.reset,wait:f.wait},T=function(t,e){void 0===e&&(e=E);var n=t.config.optionMergeStrategies;n.firestore=n.provide;var r=Object.assign({},E,e),i=r.bindName,s=r.unbindName;t.prototype[s]=function(t,e){this._firestoreUnbinds[t](e),delete this._firestoreUnbinds[t],delete this.$firestoreRefs[t]},t.prototype[i]=function(t,e,n){var i=Object.assign({},r,n);this._firestoreUnbinds[t]&&this[s](t,i.wait?"function"===typeof i.reset&&i.reset:i.reset);var o=_(this,t,e,w,i);return this.$firestoreRefs[t]=e,o},t.mixin({beforeCreate:function(){this._firestoreUnbinds=Object.create(null),this.$firestoreRefs=Object.create(null)},created:function(){var t=this.$options.firestore,e="function"===typeof t?t.call(this):t;if(e)for(var n in e)this[i](n,e[n],r)},beforeDestroy:function(){for(var t in this._firestoreUnbinds)this._firestoreUnbinds[t]();this._firestoreUnbinds=null,this.$firestoreRefs=null}})}},2961:function(t){let e="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",n=(t,e=21)=>(n=e)=>{let r="",i=n;while(i--)r+=t[Math.random()*t.length|0];return r},r=(t=21)=>{let n="",r=t;while(r--)n+=e[64*Math.random()|0];return n};t.exports={nanoid:r,customAlphabet:n}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return C.set(e,s),s}b((t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",D="0.8.2",N=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",q="@firebase/database",B="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",W="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.12.1",st="[DEFAULT]",ot={[R]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[q]:"fire-rtdb",[B]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[W]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new s.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=it;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function vt(t=st){const e=at.get(t);if(!e&&t===st)return gt();if(!e)throw ft.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",wt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=S(bt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function St(t){var e;try{const e=await Tt();return e.transaction(_t).objectStore(_t).get(kt(t))}catch(n){if(n instanceof s.ZR)N.warn(n.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});N.warn(t.message)}}}async function It(t,e){var n;try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);return await i.put(e,kt(t)),r.done}catch(r){if(r instanceof s.ZR)N.warn(r.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});N.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1024,xt=2592e6;class At{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=Ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Nt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Nt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new A(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new At(t)),"PRIVATE")),yt(R,D,t),yt(R,D,"esm2017"),yt("fire-js","")}Lt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},2578:function(t,e,n){"use strict";n.d(e,{WB:function(){return lt},Q_:function(){return Et}});n(7658),n(541);var r=n(4870),i=n(3396),s=!1;function o(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",h="plugin:settings:set";let d,f,p;function m(){var t;return void 0!==d||("undefined"!==typeof window&&window.performance?(d=!0,f=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(d=!0,f=n.g.perf_hooks.performance):d=!1),d}function g(){return m()?f.now():Date.now()}class v{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return g()}},e&&e.on(h,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function y(t,e){const n=t,r=c(),i=a(),s=u&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&s){const t=s?new v(n,i):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(l,t,e)}const b=t=>p=t,w=Symbol();function _(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var E;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(E||(E={}));const T="undefined"!==typeof window,S=!1,I=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function k(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function C(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){D(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function x(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function A(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const O="object"===typeof navigator?navigator:{userAgent:""},R=(()=>/Macintosh/.test(O.userAgent)&&/AppleWebKit/.test(O.userAgent)&&!/Safari/.test(O.userAgent))(),D=T?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!R?N:"msSaveOrOpenBlob"in O?L:P:()=>{};function N(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?x(r.href)?C(t,e,n):(r.target="_blank",A(r)):A(r)):(r.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){A(r)}),0))}function L(t,e="download",n){if("string"===typeof t)if(x(t))C(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){A(e)}))}else navigator.msSaveOrOpenBlob(k(t,n),e)}function P(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return C(t,e,n);const i="application/octet-stream"===t.type,s=/constructor/i.test(String(I.HTMLElement))||"safari"in I,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||R)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}function M(t,e){const n="🍍 "+t;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,e):"error"===e?console.error(n):"warn"===e?console.warn(n):console.log(n)}function U(t){return"_a"in t&&"install"in t}function F(){if(!("clipboard"in navigator))return M("Your browser doesn't support the Clipboard API","error"),!0}function j(t){return!!(t instanceof Error&&t.message.toLowerCase().includes("document is not focused"))&&(M('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function V(t){if(!F())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),M("Global state copied to clipboard.")}catch(e){if(j(e))return;M("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function q(t){if(!F())try{t.state.value=JSON.parse(await navigator.clipboard.readText()),M("Global state pasted from clipboard.")}catch(e){if(j(e))return;M("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function B(t){try{D(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let $;function z(){function t(){return new Promise(((t,e)=>{$.onchange=async()=>{const e=$.files;if(!e)return t(null);const n=e.item(0);return t(n?{text:await n.text(),file:n}:null)},$.oncancel=()=>t(null),$.onerror=e,$.click()}))}return $||($=document.createElement("input"),$.type="file",$.accept=".json"),t}async function H(t){try{const e=await z(),n=await e();if(!n)return;const{text:r,file:i}=n;t.state.value=JSON.parse(r),M(`Global state imported from "${i.name}".`)}catch(e){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}function G(t){return{_custom:{display:t}}}const K="🍍 Pinia (root)",W="_root";function X(t){return U(t)?{id:W,label:K}:{id:t.$id,label:t.$id}}function J(t){if(U(t)){const e=Array.from(t._s.keys()),n=t._s,r={state:e.map((e=>({editable:!0,key:e,value:t.state.value[e]}))),getters:e.filter((t=>n.get(t)._getters)).map((t=>{const e=n.get(t);return{editable:!1,key:t,value:e._getters.reduce(((t,n)=>(t[n]=e[n],t)),{})}}))};return r}const e={state:Object.keys(t.$state).map((e=>({editable:!0,key:e,value:t.$state[e]})))};return t._getters&&t._getters.length&&(e.getters=t._getters.map((e=>({editable:!1,key:e,value:t[e]})))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map((e=>({editable:!0,key:e,value:t[e]})))),e}function Y(t){return t?Array.isArray(t)?t.reduce(((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:G(t.type),key:G(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function Q(t){switch(t){case E.direct:return"mutation";case E.patchFunction:return"$patch";case E.patchObject:return"$patch";default:return"unknown"}}let Z=!0;const tt=[],et="pinia:mutations",nt="pinia",rt=t=>"🍍 "+t;function it(t,e){y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:tt,app:t},(n=>{"function"!==typeof n.now&&M("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:et,label:"Pinia 🍍",color:15064968}),n.addInspector({id:nt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{V(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await q(e),n.sendInspectorTree(nt),n.sendInspectorState(nt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{B(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await H(e),n.sendInspectorTree(nt),n.sendInspectorState(nt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:t=>{const n=e._s.get(t);n?n._isOptionsAPI?(n.$reset(),M(`Store "${t}" reset.`)):M(`Cannot reset "${t}" store because it's a setup store.`,"warn"):M(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((t,e)=>{const n=t.componentInstance&&t.componentInstance.proxy;if(n&&n._pStores){const e=t.componentInstance.proxy._pStores;Object.values(e).forEach((e=>{t.instanceData.state.push({type:rt(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,r.IU)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce(((t,n)=>(t[n]=e.$state[n],t)),{})}),e._getters&&e._getters.length&&t.instanceData.state.push({type:rt(e.$id),key:"getters",editable:!1,value:e._getters.reduce(((t,n)=>{try{t[n]=e[n]}catch(r){t[n]=r}return t}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===t&&n.inspectorId===nt){let t=[e];t=t.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?t.filter((t=>"$id"in t?t.$id.toLowerCase().includes(n.filter.toLowerCase()):K.toLowerCase().includes(n.filter.toLowerCase()))):t).map(X)}})),n.on.getInspectorState((n=>{if(n.app===t&&n.inspectorId===nt){const t=n.nodeId===W?e:e._s.get(n.nodeId);if(!t)return;t&&(n.state=J(t))}})),n.on.editInspectorState(((n,r)=>{if(n.app===t&&n.inspectorId===nt){const t=n.nodeId===W?e:e._s.get(n.nodeId);if(!t)return M(`store "${n.nodeId}" not found`,"error");const{path:r}=n;U(t)?r.unshift("state"):1===r.length&&t._customProperties.has(r[0])&&!(r[0]in t.$state)||r.unshift("$state"),Z=!1,n.set(t,r,n.state.value),Z=!0}})),n.on.editComponentState((t=>{if(t.type.startsWith("🍍")){const n=t.type.replace(/^🍍\s*/,""),r=e._s.get(n);if(!r)return M(`store "${n}" not found`,"error");const{path:i}=t;if("state"!==i[0])return M(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);i[0]="$state",Z=!1,t.set(r,i,t.state.value),Z=!0}}))}))}function st(t,e){tt.includes(rt(e.$id))||tt.push(rt(e.$id)),y({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:tt,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(t=>{const n="function"===typeof t.now?t.now.bind(t):Date.now;e.$onAction((({after:r,onError:i,name:s,args:o})=>{const a=at++;t.addTimelineEvent({layerId:et,event:{time:n(),title:"🛫 "+s,subtitle:"start",data:{store:G(e.$id),action:G(s),args:o},groupId:a}}),r((r=>{ot=void 0,t.addTimelineEvent({layerId:et,event:{time:n(),title:"🛬 "+s,subtitle:"end",data:{store:G(e.$id),action:G(s),args:o,result:r},groupId:a}})})),i((r=>{ot=void 0,t.addTimelineEvent({layerId:et,event:{time:n(),logType:"error",title:"💥 "+s,subtitle:"end",data:{store:G(e.$id),action:G(s),args:o,error:r},groupId:a}})}))}),!0),e._customProperties.forEach((s=>{(0,i.YP)((()=>(0,r.SU)(e[s])),((e,r)=>{t.notifyComponentUpdate(),t.sendInspectorState(nt),Z&&t.addTimelineEvent({layerId:et,event:{time:n(),title:"Change",subtitle:s,data:{newValue:e,oldValue:r},groupId:ot}})}),{deep:!0})})),e.$subscribe((({events:r,type:i},s)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(nt),!Z)return;const o={time:n(),title:Q(i),data:{store:G(e.$id),...Y(r)},groupId:ot};ot=void 0,i===E.patchFunction?o.subtitle="⤵️":i===E.patchObject?o.subtitle="🧩":r&&!Array.isArray(r)&&(o.subtitle=r.type),r&&(o.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),t.addTimelineEvent({layerId:et,event:o})}),{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=(0,r.Xl)((r=>{s(r),t.addTimelineEvent({layerId:et,event:{time:n(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:G(e.$id),info:G("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(nt),t.sendInspectorState(nt)}));const{$dispose:o}=e;e.$dispose=()=>{o(),t.notifyComponentUpdate(),t.sendInspectorTree(nt),t.sendInspectorState(nt),t.getSettings().logStoreChanges&&M(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(nt),t.sendInspectorState(nt),t.getSettings().logStoreChanges&&M(`"${e.$id}" store installed 🆕`)}))}let ot,at=0;function ct(t,e){const n=e.reduce(((e,n)=>(e[n]=(0,r.IU)(t)[n],e)),{});for(const r in n)t[r]=function(){const e=at,i=new Proxy(t,{get(...t){return ot=e,Reflect.get(...t)},set(...t){return ot=e,Reflect.set(...t)}});return n[r].apply(i,arguments)}}function ut({app:t,store:e,options:n}){if(!e.$id.startsWith("__hot:")){if(n.state&&(e._isOptionsAPI=!0),"function"===typeof n.state){ct(e,Object.keys(n.actions));const t=e._hotUpdate;(0,r.IU)(e)._hotUpdate=function(n){t.apply(this,arguments),ct(e,Object.keys(n._hmrPayload.actions))}}st(t,e)}}function lt(){const t=(0,r.B)(!0),e=t.run((()=>(0,r.iH)({})));let n=[],i=[];const o=(0,r.Xl)({install(t){b(o),s||(o._a=t,t.provide(w,o),t.config.globalProperties.$pinia=o,S&&it(t,o),i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||s?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return S&&"undefined"!==typeof Proxy&&o.use(ut),o}const ht=()=>{};function dt(t,e,n,r=ht){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),r())};return!n&&(0,i.FN)()&&(0,i.Ah)(s),s}function ft(t,...e){t.slice().forEach((t=>{t(...e)}))}function pt(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];_(s)&&_(i)&&t.hasOwnProperty(n)&&!(0,r.dq)(i)&&!(0,r.PG)(i)?t[n]=pt(s,i):t[n]=i}return t}const mt=Symbol(),gt=new WeakMap;function vt(t){return s?!gt.has(t):!_(t)||!t.hasOwnProperty(mt)}const{assign:yt}=Object;function bt(t){return!(!(0,r.dq)(t)||!t.effect)}function wt(t,e,n,a){const{state:c,actions:u,getters:l}=e,h=n.state.value[t];let d;function f(){h||(s?o(n.state.value,t,c?c():{}):n.state.value[t]=c?c():{});const e=(0,r.BK)(n.state.value[t]);return yt(e,u,Object.keys(l||{}).reduce(((e,o)=>(e[o]=(0,r.Xl)((0,i.Fl)((()=>{b(n);const e=n._s.get(t);if(!s||e._r)return l[o].call(e,e)}))),e)),{}))}return d=_t(t,f,e,n,a,!0),d.$reset=function(){const t=c?c():{};this.$patch((e=>{yt(e,t)}))},d}function _t(t,e,n={},a,c,u){let l;const h=yt({actions:{}},n);const d={deep:!0};let f,p;let m,g=(0,r.Xl)([]),v=(0,r.Xl)([]);const y=a.state.value[t];u||y||(s?o(a.state.value,t,{}):a.state.value[t]={});const w=(0,r.iH)({});let _;function T(e){let n;f=p=!1,"function"===typeof e?(e(a.state.value[t]),n={type:E.patchFunction,storeId:t,events:m}):(pt(a.state.value[t],e),n={type:E.patchObject,payload:e,storeId:t,events:m});const r=_=Symbol();(0,i.Y3)().then((()=>{_===r&&(f=!0)})),p=!0,ft(g,n,a.state.value[t])}const I=ht;function k(){l.stop(),g=[],v=[],a._s.delete(t)}function C(e,n){return function(){b(a);const r=Array.from(arguments),i=[],s=[];function o(t){i.push(t)}function c(t){s.push(t)}let u;ft(v,{args:r,name:e,store:O,after:o,onError:c});try{u=n.apply(this&&this.$id===t?this:O,r)}catch(l){throw ft(s,l),l}return u instanceof Promise?u.then((t=>(ft(i,t),t))).catch((t=>(ft(s,t),Promise.reject(t)))):(ft(i,u),u)}}const x=(0,r.Xl)({actions:{},getters:{},state:[],hotState:w}),A={_p:a,$id:t,$onAction:dt.bind(null,v),$patch:T,$reset:I,$subscribe(e,n={}){const r=dt(g,e,n.detached,(()=>s())),s=l.run((()=>(0,i.YP)((()=>a.state.value[t]),(r=>{("sync"===n.flush?p:f)&&e({storeId:t,type:E.direct,events:m},r)}),yt({},d,n))));return r},$dispose:k};s&&(A._r=!1);const O=(0,r.qj)(S?yt({_hmrPayload:x,_customProperties:(0,r.Xl)(new Set)},A):A);a._s.set(t,O);const R=a._e.run((()=>(l=(0,r.B)(),l.run((()=>e())))));for(const i in R){const e=R[i];if((0,r.dq)(e)&&!bt(e)||(0,r.PG)(e))u||(y&&vt(e)&&((0,r.dq)(e)?e.value=y[i]:pt(e,y[i])),s?o(a.state.value[t],i,e):a.state.value[t][i]=e);else if("function"===typeof e){const t=C(i,e);s?o(R,i,t):R[i]=t,h.actions[i]=e}else 0}if(s?Object.keys(R).forEach((t=>{o(O,t,R[t])})):(yt(O,R),yt((0,r.IU)(O),R)),Object.defineProperty(O,"$state",{get:()=>a.state.value[t],set:t=>{T((e=>{yt(e,t)}))}}),S){const t={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((e=>{Object.defineProperty(O,e,{value:O[e],...t})}))}return s&&(O._r=!0),a._p.forEach((t=>{if(S){const e=l.run((()=>t({store:O,app:a._a,pinia:a,options:h})));Object.keys(e||{}).forEach((t=>O._customProperties.add(t))),yt(O,e)}else yt(O,l.run((()=>t({store:O,app:a._a,pinia:a,options:h}))))})),y&&u&&n.hydrate&&n.hydrate(O.$state,y),f=!0,p=!0,O}function Et(t,e,n){let r,s;const o="function"===typeof e;function a(t,n){const a=(0,i.FN)();t=t||a&&(0,i.f3)(w),t&&b(t),t=p,t._s.has(r)||(o?_t(r,e,s,t):wt(r,s,t));const c=t._s.get(r);return c}return"string"===typeof t?(r=t,s=o?n:e):(s=t,r=t.id),a.$id=r,a}},2483:function(t,e,n){"use strict";n.d(e,{PO:function(){return j},p7:function(){return ee}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(e.matched[r],n.matched[i])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!b(t[n],e[n]))return!1;return!0}function b(t,e){return l(t)?w(t,e):l(e)?w(e,t):t===e}function w(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function _(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function S(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const I=/^[^#]+#/;function k(t,e){return t.replace(I,"#")+e}function C(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=C(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function D(t,e){R.set(t,e)}function N(t){const e=R.get(t);return R.delete(t),e}let L=()=>location.protocol+"//"+location.host;function P(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:x()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function U(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function F(t){const{history:e,location:n}=window,r={value:P(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,U(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:x()});s(o.current,o,!0);const c=a({},U(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function j(t){t=S(t);const e=F(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:k.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return"string"===typeof t||t&&"object"===typeof t}function q(t){return"string"===typeof t||"symbol"===typeof t}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var z;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(z||(z={}));function H(t,e){return a(new Error,{type:t,[$]:!0},e)}function G(t,e){return t instanceof Error&&$ in t&&(null==e||!!(t.type&e))}const K="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function J(t,e){const n=a({},W,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||K;if(l!==K){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Q(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function rt(t,e,n){const r=J(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=ot(t);c.aliasOf=r&&r.record;const h=lt(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(f=rt(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!ct(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],f,r&&r.children[e])}r=r||f,l(f)}return p?()=>{o(p)}:u}function o(t){if(q(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Q(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw H(1,{location:t});0,o=i.record.name,c=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&st(t.params,i.keys.map((t=>t.name)))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw H(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const dt=/#/g,ft=/&/g,pt=/\//g,mt=/=/g,gt=/\?/g,vt=/\+/g,yt=/%5B/g,bt=/%5D/g,wt=/%5E/g,_t=/%60/g,Et=/%7B/g,Tt=/%7C/g,St=/%7D/g,It=/%20/g;function kt(t){return encodeURI(""+t).replace(Tt,"|").replace(yt,"[").replace(bt,"]")}function Ct(t){return kt(t).replace(Et,"{").replace(St,"}").replace(wt,"^")}function xt(t){return kt(t).replace(vt,"%2B").replace(It,"+").replace(dt,"%23").replace(ft,"%26").replace(_t,"`").replace(Et,"{").replace(St,"}").replace(wt,"^")}function At(t){return xt(t).replace(mt,"%3D")}function Ot(t){return kt(t).replace(dt,"%23").replace(gt,"%3F")}function Rt(t){return null==t?"":Ot(t).replace(pt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Nt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(vt," "),n=t.indexOf("="),s=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=At(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&xt(t))):[r&&xt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Pt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Mt=Symbol(""),Ut=Symbol(""),Ft=Symbol(""),jt=Symbol(""),Vt=Symbol("");function qt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(H(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a(H(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function $t(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(zt(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push(Bt(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&Bt(u,n,r,s,t)()}))))}}}return i}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(Ft),n=(0,r.f3)(jt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Wt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Gt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.qj)(Ht(t)),{options:s}=(0,r.f3)(Ft),o=(0,r.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Kt=Gt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Qt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(Vt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Ut,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ut,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Mt,l),(0,r.JJ)(Vt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&v(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return Zt(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:m,route:i})||m}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Qt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||Nt,o=t.stringifyQuery||Lt,h=t.history;const d=qt(),m=qt(),v=qt(),y=(0,i.XI)(B);let b=B;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(t=>""+t)),_=c.bind(null,Rt),T=c.bind(null,Dt);function S(t,n){let r,i;return q(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function k(){return e.getRoutes().map((t=>t.record))}function C(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||y.value),"string"===typeof t){const i=f(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Dt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:f(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:_(t.params)}),r.params=_(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=w(T(s.params));const u=p(o,a({},t,{hash:Ct(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Lt?Pt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function L(t){return"string"===typeof t?f(n,t,y.value.path):a({},t)}function P(t,e){if(b!==t)return H(8,{from:e,to:t})}function M(t){return j(t)}function U(t){return M(a(L(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function j(t,e){const n=b=R(t),r=y.value,i=t.state,s=t.force,c=!0===t.replace,u=F(n);if(u)return j(a(L(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&g(o,r,n)&&(h=H(16,{to:l,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):$(l,r)).catch((t=>G(t)?G(t,2)?t:et(t):Z(t,l,r))).then((t=>{if(t){if(G(t,2))return j(a({replace:c},L(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=K(l,r,!0,c,i);return z(l,r,t),t}))}function V(t,e){const n=P(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,i,s]=re(t,e);n=$t(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Bt(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of d.list())n.push(Bt(r,t,e));return n.push(o),ne(n)})).then((()=>{n=$t(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(Bt(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Bt(i,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=$t(s,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of m.list())n.push(Bt(r,t,e));return n.push(o),ne(n)})).catch((t=>G(t,8)?t:Promise.reject(t)))}function z(t,e,n){for(const r of v.list())r(t,e,n)}function K(t,e,n,r,i){const o=P(t,e);if(o)return o;const c=e===B,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),y.value=t,nt(t,e,n,c),et()}let W;function X(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=R(t),i=F(r);if(i)return void j(a(i,{replace:!0}),r).catch(u);b=r;const o=y.value;s&&D(O(o.fullPath,n.delta),x()),$(r,o).catch((t=>G(t,12)?t:G(t,2)?(j(t.to,r).then((t=>{G(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||K(r,o,!1),t&&(n.delta&&!G(t,8)?h.go(-n.delta,!1):n.type===E.pop&&G(t,20)&&h.go(-1,!1)),z(r,o,t)})).catch(u)})))}let J,Y=qt(),Q=qt();function Z(t,e,n){et(t);const r=Q.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return J&&y.value!==B?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function et(t){return J||(J=!t,X(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function nt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&N(O(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&A(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let st;const ot=new Set,at={currentRoute:y,listening:!0,addRoute:S,removeRoute:I,hasRoute:C,getRoutes:k,resolve:R,options:t,push:M,replace:U,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:Q.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!st&&y.value===B&&(st=!0,M(h.location).catch((t=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>y.value[i]));t.provide(Ft,e),t.provide(jt,(0,i.qj)(n)),t.provide(Vt,y);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(b=B,W&&W(),W=null,y.value=B,st=!1,J=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>v(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>v(t,a)))||i.push(a))}return[n,r,i]}},3600:function(t){"use strict";t.exports=JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')},9323:function(t){"use strict";t.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},9591:function(t){"use strict";t.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')},2586:function(t){"use strict";t.exports=JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')}}]);
//# sourceMappingURL=chunk-vendors.fffbad46.js.map