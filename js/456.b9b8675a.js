(self["webpackChunkchitter"]=self["webpackChunkchitter"]||[]).push([[456],{6077:function(t,e,n){var s=n(614),r=String,i=TypeError;t.exports=function(t){if("object"==typeof t||s(t))return t;throw i("Can't set "+r(t)+" as a prototype")}},5787:function(t,e,n){var s=n(7976),r=TypeError;t.exports=function(t,e){if(s(e,t))return t;throw r("Incorrect invocation")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var s,r,i,o=n(3013),a=n(9781),c=n(7854),u=n(614),h=n(111),l=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(3070).f,y=n(7976),v=n(9518),w=n(7674),E=n(5112),T=n(9711),b=n(9909),I=b.enforce,C=b.get,S=c.Int8Array,A=S&&S.prototype,_=c.Uint8ClampedArray,D=_&&_.prototype,N=S&&v(S),k=A&&v(A),R=Object.prototype,L=c.TypeError,O=E("toStringTag"),x=T("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",V=o&&!!w&&"Opera"!==d(c.opera),P=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},B=function(t){if(!h(t))return!1;var e=d(t);return"DataView"===e||l(U,e)||l(F,e)},j=function(t){var e=v(t);if(h(e)){var n=C(e);return n&&l(n,M)?n[M]:j(e)}},q=function(t){if(!h(t))return!1;var e=d(t);return l(U,e)||l(F,e)},K=function(t){if(q(t))return t;throw L("Target is not a typed array")},H=function(t){if(u(t)&&(!w||y(N,t)))return t;throw L(f(t)+" is not a typed array constructor")},z=function(t,e,n,s){if(a){if(n)for(var r in U){var i=c[r];if(i&&l(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:V&&A[t]||e,s)}},G=function(t,e,n){var s,r;if(a){if(w){if(n)for(s in U)if(r=c[s],r&&l(r,t))try{delete r[t]}catch(i){}if(N[t]&&!n)return;try{return g(N,t,n?e:V&&N[t]||e)}catch(i){}}for(s in U)r=c[s],!r||r[t]&&!n||g(r,t,e)}};for(s in U)r=c[s],i=r&&r.prototype,i?I(i)[M]=r:V=!1;for(s in F)r=c[s],i=r&&r.prototype,i&&(I(i)[M]=r);if((!V||!u(N)||N===Function.prototype)&&(N=function(){throw L("Incorrect invocation")},V))for(s in U)c[s]&&w(c[s],N);if((!V||!k||k===R)&&(k=N.prototype,V))for(s in U)c[s]&&w(c[s].prototype,k);if(V&&v(D)!==k&&w(D,k),a&&!l(k,O))for(s in P=!0,m(k,O,{get:function(){return h(this)?this[x]:void 0}}),U)c[s]&&p(c[s],x,s);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:V,TYPED_ARRAY_TAG:P&&x,aTypedArray:K,aTypedArrayConstructor:H,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:j,isView:B,isTypedArray:q,TypedArray:N,TypedArrayPrototype:k}},9671:function(t,e,n){var s=n(9974),r=n(8361),i=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,h,l=i(n),d=r(l),f=s(a,c),p=o(d);while(p-- >0)if(u=d[p],h=f(u,p,l),h)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},648:function(t,e,n){var s=n(1694),r=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=s?i:function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=c(t),a))?n:u?i(e):"Object"==(s=i(e))&&r(e.callee)?"Arguments":s}},8544:function(t,e,n){var s=n(7293);t.exports=!s((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,n){var s=n(1702),r=Error,i=s("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9974:function(t,e,n){var s=n(1702),r=n(9662),i=n(4374),o=s(s.bind);t.exports=function(t,e){return r(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},9587:function(t,e,n){var s=n(614),r=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&s(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},6277:function(t,e,n){var s=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:s(t)}},9518:function(t,e,n){var s=n(2597),r=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,h=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(s(e,c))return e[c];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7674:function(t,e,n){var s=n(1702),r=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=s(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,s){return r(n),i(s),e?t(n,s):n.__proto__=s,n}}():void 0)},1694:function(t,e,n){var s=n(5112),r=s("toStringTag"),i={};i[r]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var s=n(648),r=String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},4590:function(t,e,n){"use strict";var s=n(260),r=n(9671).findLastIndex,i=s.aTypedArray,o=s.exportTypedArrayMethod;o("findLastIndex",(function(t){return r(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var s=n(260),r=n(9671).findLast,i=s.aTypedArray,o=s.exportTypedArrayMethod;o("findLast",(function(t){return r(i(this),t,arguments.length>1?arguments[1]:void 0)}))},2801:function(t,e,n){"use strict";var s=n(2109),r=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),h=n(9587),l=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",y=i("Error"),v=i(m),w=function(){u(this,E);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),s=new v(e,n),r=y(e);return r.name=m,a(s,"stack",o(1,f(r.stack,1))),h(s,this,w),s},E=w.prototype=v.prototype,T="stack"in y(m),b="stack"in new v(1,2),I=v&&p&&Object.getOwnPropertyDescriptor(r,m),C=!!I&&!(I.writable&&I.configurable),S=T&&!C&&!b;s({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var A=i(m),_=A.prototype;if(_.constructor!==A)for(var D in g||a(_,"constructor",o(1,A)),d)if(c(d,D)){var N=d[D],k=N.s;c(A,k)||a(A,k,o(6,N.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return w},L:function(){return a},LL:function(){return I},P0:function(){return y},Sg:function(){return E},ZR:function(){return b},aH:function(){return v},eu:function(){return h},hl:function(){return u},m9:function(){return D},vZ:function(){return A}});n(2801),n(7658);
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
const s=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,s=0;while(n<t.length){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(s.push(l),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==h){const t=c<<6&192|h;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=s(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function u(){return"object"===typeof indexedDB}function h(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const d=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/chitter/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},g=()=>{try{return d()||f()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},v=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
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
 */const T="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?C(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`,a=new b(s,o,n);return a}}function C(t,e){return t.replace(S,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
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
 */function A(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(_(n)&&_(i)){if(!A(n,i))return!1}else if(n!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function _(t){return null!==t&&"object"===typeof t}
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
function D(t){return t&&t._delegate?t._delegate:t}},6035:function(t,e,n){"use strict";n.d(e,{hJ:function(){return Cu},PL:function(){return eh},ad:function(){return Mu}});n(3408),n(4590),n(7658),n(2801);var s,r=n(7077),i=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},h=h||{},l=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function I(){this.s=this.s,this.o=this.o}var C=0,S={};I.prototype.s=!1,I.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=g(this);delete S[t]}},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function D(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function N(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}var L=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return t<e?-1:t>e?1:0}function x(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return-1!=x().indexOf(t)}function V(t){return V[" "](t),t}function P(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=d;var U,F=M("Opera"),B=M("Trident")||M("MSIE"),j=M("Edge"),q=j||B,K=M("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),H=-1!=x().toLowerCase().indexOf("webkit")&&!M("Edge");function z(){var t=l.document;return t?t.documentMode:void 0}t:{var G="",$=function(){var t=x();return K?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if($&&(G=$?$[1]:""),B){var Q=z();if(null!=Q&&Q>parseFloat(G)){U=String(Q);break t}}U=G}var W,X={};function Y(){return P((function(){let t=0;const e=L(String(U)).split("."),n=L("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=O(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||O(0==r[2].length,0==i[2].length)||O(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(l.document&&B){var J=z();W=J||(parseInt(U,10)||void 0)}else W=void 0;var Z=W;function tt(t,e){if(N.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{V(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}b(tt,N);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),st=0;function rt(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++st,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=A(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}ht.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dt(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rt(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,s,r){if(s&&s.once)return vt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,s,r);return null}return n=St(n),t&&t[nt]?t.N(e,n,p(s)?!!s.capture:!!s,r):mt(t,e,n,!1,s,r)}function mt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=It(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)k||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Tt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}const e=bt;return t}function vt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,s,r);return null}return n=St(n),t&&t[nt]?t.O(e,n,p(s)?!!s.capture:!!s,r):mt(t,e,n,!0,s,r)}function wt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,s,r);else s=p(s)?!!s.capture:!!s,n=St(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dt(i,n,s,r),-1<n&&(it(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,s,r)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):it(t)}}}function Tt(t){return t in pt?pt[t]:pt[t]="on"+t}function bt(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Et(t),t=n.call(s,e)}return t}function It(t){return t=t[ft],t instanceof ht?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function At(){I.call(this),this.i=new ht(this),this.P=this,this.I=null}function _t(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new N(e,t);else if(e instanceof N)e.target=e.target||t;else{var r=e;e=new N(s,t),ut(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Dt(o,s,!0,e)&&r}if(o=e.g=t,r=Dt(o,s,!0,e)&&r,r=Dt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Dt(o,s,!1,e)&&r}function Dt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&lt(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}b(At,I),At.prototype[nt]=!0,At.prototype.removeEventListener=function(t,e,n,s){wt(this,t,e,n,s)},At.prototype.M=function(){if(At.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)it(n[s]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},At.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Nt=l.JSON.stringify;function kt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Ot.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Lt,Ot=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new xt),(t=>t.reset()));class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){l.setTimeout((()=>{throw t}),0)}function Vt(t,e){Lt||Pt(),Ut||(Lt(),Ut=!0),Ft.add(t,e)}function Pt(){var t=l.Promise.resolve(void 0);Lt=function(){t.then(Bt)}}var Ut=!1,Ft=new Rt;function Bt(){for(var t;t=kt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Ot;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function jt(t,e){At.call(this),this.h=t||1,this.g=e||l,this.j=E(this.lb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Ht(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Ht(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(jt,At),s=jt.prototype,s.ca=!1,s.R=null,s.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(qt(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){jt.X.M.call(this),qt(this),delete this.g};class zt extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){I.call(this),this.h=t,this.g={}}b(Gt,I);var $t=[];function Qt(t,e,n,s){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var r=0;r<n.length;r++){var i=gt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Nt(n)}catch(a){return e}}Gt.prototype.M=function(){Gt.X.M.call(this),Wt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},se=null;function re(){return se=se||new At}function ie(t){N.call(this,ne.Pa,t)}function oe(t){const e=re();_t(e,new ie(e,t))}function ae(t,e){N.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=re();_t(e,new ae(e,t))}function ue(t,e){N.call(this,ne.Qa,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}ne.Pa="serverreachability",b(ie,N),ne.STAT_EVENT="statevent",b(ae,N),ne.Qa="timingevent",b(ue,N);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},de={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){N.call(this,"d")}function we(){N.call(this,"c")}function Ee(){}function Te(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Gt(this),this.O=Ie,t=q?125:void 0,this.T=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}b(ve,N),b(we,N),b(Ee,fe),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},me=new Ee;var Ie=45e3,Ce={},Se={};function Ae(t,e,n){t.K=1,t.v=Qe(Ke(e)),t.s=n,t.P=!0,_e(t,null)}function _e(t,e){t.F=Date.now(),Re(t),t.A=Ke(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),cn(n.i,"t",s),t.C=0,n=t.l.H,t.h=new be,t.g=ds(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zt(E(t.La,t,t.g),t.N)),Qt(t.S,t.g,"readystatechange",t.ib),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.U,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ne(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=ke(t,n),s==Se){4==e&&(t.o=4,ce(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ce){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zt(t.j,t.m,s,null),Ve(t,s)}De(t)&&s!=Se&&s!=Ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rs(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),xe(t))}function ke(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Se:(n=Number(e.substring(n,s)),isNaN(n)?Ce:(s+=1,s+n>e.length?Se:(e=e.substr(s,n),t.C=s+n,e)))}function Re(t){t.V=Date.now()+t.O,Le(t,t.O)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(E(t.gb,t),e)}function Oe(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||as(t.l,t)}function Me(t){Oe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Wt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;os(n),Wn(n)}ss(n),ce(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=he(E(n.cb,n),6e3));if(1>=gn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else us(n,11)}else if((t.J||n.g==t)&&os(n),!R(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(yn(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,$e(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ls(s,s.H?s.ka:null,s.V),o.J){vn(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Oe(a),Re(a)),s.g=o}else ns(s);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||us(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?us(n,7):Qn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Pe(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Ue(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ue(t),s=Pe(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}s=Te.prototype,s.setTimeout=function(t){this.O=t},s.ib=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.La(t)},s.La=function(t){try{if(t==this.g)t:{const h=qn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(3!=h||q||this.g&&(this.h.h||this.g.fa()||Kn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Oe(this);var n=this.g.aa();this.Y=n;e:if(De(this)){var s=Kn(this.g);t="";var r=s.length,i=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),xe(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Me(this),xe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.P?(Ne(this,h,o),q&&this.i&&3==h&&(Qt(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,o,null),Ve(this,o)),4==h&&Me(this),this.i&&!this.I&&(4==h?as(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),xe(this)}}}catch(h){}},s.hb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Oe(this),Ne(this,t,e),this.i&&4!=t&&Re(this))}},s.cancel=function(){this.I=!0,Me(this)},s.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Me(this),this.o=2,xe(this)):Le(this,this.V-t)};var Be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,He(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new sn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ge(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.h=!!e,He(this,n[1]||"",!0),this.s=We(n[2]||""),this.g=We(n[3]||"",!0),ze(this,n[4]),this.l=We(n[5]||"",!0),Ge(this,n[6]||"",!0),this.o=We(n[7]||"")):(this.h=!!e,this.i=new sn(null,this.h))}function Ke(t){return new qe(t)}function He(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ge(t,e,n){e instanceof sn?(t.i=e,hn(t.i,t.h)):(n||(e=Xe(e,en)),t.i=new sn(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function Qe(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ye(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xe(e,Je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Xe(e,Je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Xe(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xe(n,nn)),t.join("")};var Je=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function sn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){rn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return rn(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),_(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hn(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}s=sn.prototype,s.add=function(t,e){rn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){rn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},s.W=function(t){rn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return rn(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function dn(t){this.l=t||fn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ga&&l.g.Ga()&&l.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _(t.i)}function En(){}function Tn(){this.g=new En}function bn(t,e,n){const s=n||"";try{Fe(t,(function(t,n){let r=t;p(t)&&(r=Nt(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function In(t,e){const n=new Xt;if(l.Image){const s=new Image;s.onload=T(Cn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=T(Cn,n,s,"TestLoadImage: error",!1,e),s.onabort=T(Cn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=T(Cn,n,s,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Cn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function Sn(t){this.l=t.ac||null,this.j=t.jb||!1}function An(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_n,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},En.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},En.prototype.parse=function(t){return l.JSON.parse(t,void 0)},b(Sn,fe),Sn.prototype.g=function(){return new An(this.l,this.j)},Sn.prototype.i=function(t){return function(){return t}}({}),b(An,At);var _n=0;function Dn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Nn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kn(t)}function kn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=An.prototype,s.open=function(t,e){if(this.readyState!=_n)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nn(this)),this.readyState=_n},s.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nn(this):kn(this),3==this.readyState&&Dn(this)}},s.Va=function(t){this.g&&(this.response=this.responseText=t,Nn(this))},s.Ua=function(t){this.g&&(this.response=t,Nn(this))},s.ga=function(){this.g&&Nn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(An.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Rn=l.JSON.parse;function Ln(t){At.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}b(Ln,At);var On="",xn=/^https?$/i,Mn=["POST","PUT"];function Vn(t){return B&&Y()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),Bn(t)}function Un(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}function Fn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))Kt(t.Ha,0,t);else if(_t(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var r=String(t.H).match(Be)[1]||null;if(!r&&l.self&&l.self.location){var i=l.self.location.protocol;r=i.substr(0,i.length-1)}s=!xn.test(r?r.toLowerCase():"")}n=s}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Un(t)}}finally{Bn(t)}}}function Bn(t,e){if(t.g){jn(t);const s=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||_t(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function Kn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case On:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ds){return null}}function Hn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):$e(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $n(t){this.Ca=0,this.i=[],this.j=new Xt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(t&&t.concurrentRequestLimit),this.Fa=new Tn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Qn(t){if(Xn(t),3==t.G){var e=t.U++,n=Ke(t.F);$e(n,"SID",t.I),$e(n,"RID",e),$e(n,"TYPE","terminate"),ts(t,n),e=new Te(t,t.j,e,void 0),e.K=2,e.v=Qe(Ke(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=ds(e.l,null),e.g.da(e.v)),e.F=Date.now(),Re(e)}hs(t)}function Wn(t){t.g&&(rs(t),t.g.cancel(),t.g=null)}function Xn(t){Wn(t),t.u&&(l.clearTimeout(t.u),t.u=null),os(t),t.h.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function Yn(t){pn(t.h)||t.m||(t.m=!0,Vt(t.Ja,t),t.C=0)}function Jn(t,e){return!(gn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=he(E(t.Ja,t,e),cs(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const s=Ke(t.F);$e(s,"SID",t.I),$e(s,"RID",n),$e(s,"AID",t.T),ts(t,s),t.o&&t.s&&zn(s,t.o,t.s),n=new Te(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=es(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yn(t.h,n),Ae(n,s,e)}function ts(t,e){t.ia&&ot(t.ia,(function(t,n){$e(e,n,t)})),t.l&&Fe({},(function(t,n){$e(e,n,t)}))}function es(t,e,n){n=Math.min(t.i.length,n);var s=t.l?E(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{bn(c,t,"req"+n+"_")}catch(i){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function ns(t){t.g||t.u||(t.Z=1,Vt(t.Ia,t),t.A=0)}function ss(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=he(E(t.Ia,t),cs(t,t.A)),t.A++,!0)}function rs(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function is(t){t.g=new Te(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ke(t.sa);$e(e,"RID","rpc"),$e(e,"SID",t.I),$e(e,"CI",t.L?"0":"1"),$e(e,"AID",t.T),$e(e,"TYPE","xmlhttp"),ts(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qe(Ke(e)),n.s=null,n.P=!0,_e(n,t)}function os(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function as(t,e){var n=null;if(t.g==e){os(t),rs(t),t.g=null;var s=2}else{if(!mn(t.h,e))return;n=e.D,vn(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=re(),_t(s,new ue(s,n,e,r)),Yn(t)}else ns(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==s&&Jn(t,e)||2==s&&ss(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}function cs(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=E(t.kb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||He(n,"https"),Qe(n)),In(n.toString(),s)}else ce(2);t.G=0,t.l&&t.l.va(e),hs(t),Xn(t)}function hs(t){if(t.G=0,t.la=[],t.l){const e=wn(t.h);0==e.length&&0==t.i.length||(D(t.la,e),D(t.la,t.i),t.h.i.length=0,_(t.i),t.i.length=0),t.l.ua()}}function ls(t,e,n){var s=n instanceof qe?Ke(n):new qe(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),ze(s,s.m);else{var r=l.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new qe(null,void 0);s&&He(i,s),e&&(i.g=e),r&&ze(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&$e(s,n,e),$e(s,"VER",t.ma),ts(t,s),s}function ds(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ln(new Sn({jb:!0})):new Ln(t.ra),e.Ka(t.H),e}function fs(){}function ps(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function gs(t,e){At.call(this),this.g=new $n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}function ms(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ys(){we.call(this),this.status=1}function vs(t){this.g=t}s=Ln.prototype,s.Ka=function(t){this.L=t},s.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=E(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Pn(this,i)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=l.FormData&&t instanceof l.FormData,!(0<=A(Mn,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Vn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.qa,this)):this.A=Kt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pn(this,i)}},s.qa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Bn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),Ln.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?Fn(this):this.fb())},s.fb=function(){Fn(this)},s.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rn(e)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=$n.prototype,s.ma=8,s.G=1,s.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Te(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=at(i),ut(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=es(this,r,e),n=Ke(this.F),$e(n,"RID",t),$e(n,"CVER",22),this.D&&$e(n,"X-HTTP-Session-Id",this.D),ts(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Hn(i)))+"&"+e:this.o&&zn(n,this.o,i)),yn(this.h,r),this.Ya&&$e(n,"TYPE","init"),this.O?($e(n,"$req",e),$e(n,"SID","null"),r.Z=!0,Ae(r,n,null)):Ae(r,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},s.Ia=function(){if(this.u=null,is(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=he(E(this.eb,this),t)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Wn(this),is(this))},s.cb=function(){null!=this.v&&(this.v=null,Wn(this),ss(this),ce(19))},s.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},s=fs.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},ps.prototype.g=function(t,e){return new gs(t,e)},b(gs,At),gs.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ls(t,null,t.V),Yn(t)},gs.prototype.close=function(){Qn(this.g)},gs.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Nt(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Yn(e)},gs.prototype.M=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,gs.X.M.call(this)},b(ms,ve),b(ys,we),b(vs,fs),vs.prototype.xa=function(){_t(this.g,"a")},vs.prototype.wa=function(t){_t(this.g,new ms(t))},vs.prototype.va=function(t){_t(this.g,new ys(t))},vs.prototype.ua=function(){_t(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,gs.prototype.send=gs.prototype.u,gs.prototype.open=gs.prototype.m,gs.prototype.close=gs.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",At.prototype.listen=At.prototype.N,Ln.prototype.listenOnce=Ln.prototype.O,Ln.prototype.getLastError=Ln.prototype.Oa,Ln.prototype.getLastErrorCode=Ln.prototype.Ea,Ln.prototype.getStatus=Ln.prototype.aa,Ln.prototype.getResponseJson=Ln.prototype.Sa,Ln.prototype.getResponseText=Ln.prototype.fa,Ln.prototype.send=Ln.prototype.da,Ln.prototype.setWithCredentials=Ln.prototype.Ka;var ws=u.createWebChannelTransport=function(){return new ps},Es=u.getStatEventTarget=function(){return re()},Ts=u.ErrorCode=le,bs=u.EventType=de,Is=u.Event=ne,Cs=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ss=u.FetchXmlHttpFactory=Sn,As=u.WebChannel=ge,_s=u.XhrIo=Ln;const Ds="@firebase/firestore";
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
 */class Ns{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ns.UNAUTHENTICATED=new Ns(null),Ns.GOOGLE_CREDENTIALS=new Ns("google-credentials-uid"),Ns.FIRST_PARTY=new Ns("first-party-uid"),Ns.MOCK_USER=new Ns("mock-user");
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
let ks="9.12.1";
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
 */const Rs=new o.Yd("@firebase/firestore");function Ls(){return Rs.logLevel}function Os(t,...e){if(Rs.logLevel<=o["in"].DEBUG){const n=e.map(Vs);Rs.debug(`Firestore (${ks}): ${t}`,...n)}}function xs(t,...e){if(Rs.logLevel<=o["in"].ERROR){const n=e.map(Vs);Rs.error(`Firestore (${ks}): ${t}`,...n)}}function Ms(t,...e){if(Rs.logLevel<=o["in"].WARN){const n=e.map(Vs);Rs.warn(`Firestore (${ks}): ${t}`,...n)}}function Vs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Ps(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw xs(e),new Error(e)}function Us(t,e){t||Ps()}function Fs(t,e){return t}
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
 */const Bs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class js extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class qs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Ks{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ns.UNAUTHENTICATED)))}shutdown(){}}class zs{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gs{constructor(t){this.t=t,this.currentUser=Ns.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qs,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Os("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Os("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qs)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Os("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Us("string"==typeof e.accessToken),new Ks(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Us(null===t||"string"==typeof t),new Ns(t)}}class $s{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Ns.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Us(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Qs{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new $s(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ns.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ws{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xs{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Os("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Os("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Os("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):Os("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Us("string"==typeof t.token),this.A=t.token,new Ws(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Ys(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
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
 */class Js{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ys(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function Zs(t,e){return t<e?-1:t>e?1:0}function tr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class er{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new js(Bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new js(Bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new js(Bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new js(Bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return er.fromMillis(Date.now())}static fromDate(t){return er.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new er(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Zs(this.nanoseconds,t.nanoseconds):Zs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class nr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new nr(t)}static min(){return new nr(new er(0,0))}static max(){return new nr(new er(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class sr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ps(),void 0===n?n=t.length-e:n>t.length-e&&Ps(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===sr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rr extends sr{construct(t,e,n){return new rr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new js(Bs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new rr(e)}static emptyPath(){return new rr([])}}const ir=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class or extends sr{construct(t,e,n){return new or(t,e,n)}static isValidIdentifier(t){return ir.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),or.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new or(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new js(Bs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new js(Bs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new js(Bs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new js(Bs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new or(e)}static emptyPath(){return new or([])}}
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
 */class ar{constructor(t){this.path=t}static fromPath(t){return new ar(rr.fromString(t))}static fromName(t){return new ar(rr.fromString(t).popFirst(5))}static empty(){return new ar(rr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ar(new rr(t.slice()))}}
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
 */class cr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}cr.UNKNOWN_ID=-1;function ur(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=nr.fromTimestamp(1e9===s?new er(n+1,0):new er(n,s));return new lr(r,ar.empty(),e)}function hr(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new lr(nr.min(),ar.empty(),-1)}static max(){return new lr(nr.max(),ar.empty(),-1)}}function dr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ar.comparator(t.documentKey,e.documentKey),0!==n?n:Zs(t.largestBatchId,e.largestBatchId))}
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
 */const fr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function gr(t){if(t.code!==Bs.FAILED_PRECONDITION||t.message!==fr)throw t;Os("LocalStore","Unexpectedly lost primary lease")}
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
 */class mr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ps(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof mr?e:mr.resolve(e)}catch(t){return mr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mr.reject(e)}static resolve(t){return new mr(((e,n)=>{e(t)}))}static reject(t){return new mr(((e,n)=>{n(t)}))}static waitFor(t){return new mr(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=mr.resolve(!1);for(const n of t)e=e.next((t=>t?mr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new mr(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new mr(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
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
 */function yr(t){return"IndexedDbTransactionError"===t.name}
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
class vr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
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
 */function wr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */vr.at=-1;class br{constructor(t,e){this.comparator=t,this.root=e||Cr.EMPTY}insert(t,e){return new br(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Cr.BLACK,null,null))}remove(t){return new br(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Cr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ir(this.root,t,this.comparator,!0)}}class Ir{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Cr{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Cr.RED,this.left=null!=s?s:Cr.EMPTY,this.right=null!=r?r:Cr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Cr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Cr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Cr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Cr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Cr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ps();if(this.right.isRed())throw Ps();const t=this.left.check();if(t!==this.right.check())throw Ps();return t+(this.isRed()?0:1)}}Cr.EMPTY=null,Cr.RED=!0,Cr.BLACK=!1,Cr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ps()}get value(){throw Ps()}get color(){throw Ps()}get left(){throw Ps()}get right(){throw Ps()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Cr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Sr{constructor(t){this.comparator=t,this.data=new br(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ar(this.data.getIterator())}getIteratorFrom(t){return new Ar(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Sr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Sr(this.comparator);return e.data=t,e}}class Ar{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class _r{constructor(t){this.fields=t,t.sort(or.comparator)}static empty(){return new _r([])}unionWith(t){let e=new Sr(or.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new _r(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return tr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class Dr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Dr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Dr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Zs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dr.EMPTY_BYTE_STRING=new Dr("");const Nr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Us(!!t),"string"==typeof t){let e=0;const n=Nr.exec(t);if(Us(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rr(t.seconds),nanos:Rr(t.nanos)}}function Rr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Lr(t){return"string"==typeof t?Dr.fromBase64String(t):Dr.fromUint8Array(t)}
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
 */function Or(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function xr(t){const e=t.mapValue.fields.__previous_value__;return Or(e)?xr(e):e}function Mr(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new er(e.seconds,e.nanos)}
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
 */class Vr{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Pr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Pr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Pr&&t.projectId===this.projectId&&t.database===this.database}}function Ur(t){return null==t}function Fr(t){return 0===t&&1/t==-1/0}
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
const Br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Or(t)?4:ti(t)?9007199254740991:10:Ps()}function qr(t,e){if(t===e)return!0;const n=jr(t);if(n!==jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mr(t).isEqual(Mr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=kr(t.timestampValue),s=kr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Lr(t.bytesValue).isEqual(Lr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Rr(t.geoPointValue.latitude)===Rr(e.geoPointValue.latitude)&&Rr(t.geoPointValue.longitude)===Rr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Rr(t.integerValue)===Rr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Rr(t.doubleValue),s=Rr(e.doubleValue);return n===s?Fr(n)===Fr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return tr(t.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(wr(n)!==wr(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!qr(n[r],s[r])))return!1;return!0}(t,e);default:return Ps()}}function Kr(t,e){return void 0!==(t.values||[]).find((t=>qr(t,e)))}function Hr(t,e){if(t===e)return 0;const n=jr(t),s=jr(e);if(n!==s)return Zs(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Rr(t.integerValue||t.doubleValue),s=Rr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return zr(t.timestampValue,e.timestampValue);case 4:return zr(Mr(t),Mr(e));case 5:return Zs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Lr(t),s=Lr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=Zs(n[r],s[r]);if(0!==t)return t}return Zs(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Zs(Rr(t.latitude),Rr(e.latitude));return 0!==n?n:Zs(Rr(t.longitude),Rr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=Hr(n[r],s[r]);if(t)return t}return Zs(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Br.mapValue&&e===Br.mapValue)return 0;if(t===Br.mapValue)return 1;if(e===Br.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=Zs(s[o],i[o]);if(0!==t)return t;const e=Hr(n[s[o]],r[i[o]]);if(0!==e)return e}return Zs(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Ps()}}function zr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Zs(t,e);const n=kr(t),s=kr(e),r=Zs(n.seconds,s.seconds);return 0!==r?r:Zs(n.nanos,s.nanos)}function Gr(t){return $r(t)}function $r(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=kr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Lr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ar.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=$r(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${$r(t.fields[r])}`;return n+"}"}(t.mapValue):Ps();var e,n}function Qr(t){return!!t&&"integerValue"in t}function Wr(t){return!!t&&"arrayValue"in t}function Xr(t){return!!t&&"nullValue"in t}function Yr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jr(t){return!!t&&"mapValue"in t}function Zr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ti(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class ei{constructor(t){this.value=t}static empty(){return new ei({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Jr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zr(e)}setAll(t){let e=or.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Zr(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());Jr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Jr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Er(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new ei(Zr(this.value))}}
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
class ni{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new ni(t,0,nr.min(),nr.min(),ei.empty(),0)}static newFoundDocument(t,e,n){return new ni(t,1,e,nr.min(),n,0)}static newNoDocument(t,e){return new ni(t,2,e,nr.min(),ei.empty(),0)}static newUnknownDocument(t,e){return new ni(t,3,e,nr.min(),ei.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ei.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ei.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ni&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ni(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class si{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ht=null}}function ri(t,e=null,n=[],s=[],r=null,i=null,o=null){return new si(t,e,n,s,r,i,o)}function ii(t){const e=Fs(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Gr(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ur(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gr(t))).join(",")),e.ht=t}return e.ht}function oi(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Gr(e.value)}`;var e})).join(", ")}]`),Ur(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gr(t))).join(",")),`Target(${e})`}function ai(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ei(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!qr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bi(t.startAt,e.startAt)&&bi(t.endAt,e.endAt)}function ci(t){return ar.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ui extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new hi(t,e,n):"array-contains"===e?new pi(t,n):"in"===e?new gi(t,n):"not-in"===e?new mi(t,n):"array-contains-any"===e?new yi(t,n):new ui(t,e,n)}static lt(t,e,n){return"in"===e?new li(t,n):new di(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Hr(e,this.value)):null!==e&&jr(this.value)===jr(e)&&this.ft(Hr(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ps()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hi extends ui{constructor(t,e,n){super(t,e,n),this.key=ar.fromName(n.referenceValue)}matches(t){const e=ar.comparator(t.key,this.key);return this.ft(e)}}class li extends ui{constructor(t,e){super(t,"in",e),this.keys=fi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class di extends ui{constructor(t,e){super(t,"not-in",e),this.keys=fi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function fi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ar.fromName(t.referenceValue)))}class pi extends ui{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wr(e)&&Kr(e.arrayValue,this.value)}}class gi extends ui{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Kr(this.value.arrayValue,e)}}class mi extends ui{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Kr(this.value.arrayValue,e)}}class yi extends ui{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Kr(this.value.arrayValue,t)))}}class vi{constructor(t,e){this.position=t,this.inclusive=e}}class wi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ei(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ti(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?ar.comparator(ar.fromName(o.referenceValue),n.key):Hr(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function bi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qr(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ii{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ci(t,e,n,s,r,i,o,a){return new Ii(t,e,n,s,r,i,o,a)}function Si(t){return new Ii(t)}function Ai(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function _i(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Di(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ni(t){return null!==t.collectionGroup}function ki(t){const e=Fs(t);if(null===e._t){e._t=[];const t=Di(e),n=_i(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new wi(t)),e._t.push(new wi(or.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new wi(or.keyField(),t))}}}return e._t}function Ri(t){const e=Fs(t);if(!e.wt)if("F"===e.limitType)e.wt=ri(e.path,e.collectionGroup,ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of ki(e)){const e="desc"===r.dir?"asc":"desc";t.push(new wi(r.field,e))}const n=e.endAt?new vi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new vi(e.startAt.position,e.startAt.inclusive):null;e.wt=ri(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Li(t,e,n){return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oi(t,e){return ai(Ri(t),Ri(e))&&t.limitType===e.limitType}function xi(t){return`${ii(Ri(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${oi(Ri(t))}; limitType=${t.limitType})`}function Vi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ar.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ti(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,ki(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ti(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,ki(t),e))}(t,e)}function Pi(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ui(t){return(e,n)=>{let s=!1;for(const r of ki(t)){const t=Fi(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Fi(t,e,n){const s=t.field.isKeyField()?ar.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?Hr(s,r):Ps()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ps()}}
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
 */function Bi(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function ji(t){return{integerValue:""+t}}
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
 */class qi{constructor(){this._=void 0}}function Ki(t,e,n){return t instanceof Gi?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof $i?Qi(t,e):t instanceof Wi?Xi(t,e):function(t,e){const n=zi(t,e),s=Ji(n)+Ji(t.yt);return Qr(n)&&Qr(t.yt)?ji(s):Bi(t.It,s)}(t,e)}function Hi(t,e,n){return t instanceof $i?Qi(t,e):t instanceof Wi?Xi(t,e):n}function zi(t,e){return t instanceof Yi?Qr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Gi extends qi{}class $i extends qi{constructor(t){super(),this.elements=t}}function Qi(t,e){const n=Zi(e);for(const s of t.elements)n.some((t=>qr(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Wi extends qi{constructor(t){super(),this.elements=t}}function Xi(t,e){let n=Zi(e);for(const s of t.elements)n=n.filter((t=>!qr(t,s)));return{arrayValue:{values:n}}}class Yi extends qi{constructor(t,e){super(),this.It=t,this.yt=e}}function Ji(t){return Rr(t.integerValue||t.doubleValue)}function Zi(t){return Wr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function to(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof $i&&e instanceof $i||t instanceof Wi&&e instanceof Wi?tr(t.elements,e.elements,qr):t instanceof Yi&&e instanceof Yi?qr(t.yt,e.yt):t instanceof Gi&&e instanceof Gi}(t.transform,e.transform)}class eo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new eo}static exists(t){return new eo(void 0,t)}static updateTime(t){return new eo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function no(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class so{}function ro(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new po(t.key,eo.none()):new co(t.key,t.data,eo.none());{const n=t.data,s=ei.empty();let r=new Sr(or.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new uo(t.key,s,new _r(r.toArray()),eo.none())}}function io(t,e,n){t instanceof co?function(t,e,n){const s=t.value.clone(),r=lo(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof uo?function(t,e,n){if(!no(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=lo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(ho(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,s){return t instanceof co?function(t,e,n,s){if(!no(t.precondition,e))return n;const r=t.value.clone(),i=fo(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof uo?function(t,e,n,s){if(!no(t.precondition,e))return n;const r=fo(t.fieldTransforms,s,e),i=e.data;return i.setAll(ho(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return no(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ao(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&tr(t,e,((t,e)=>to(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends so{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class uo extends so{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ho(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function lo(t,e,n){const s=new Map;Us(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Hi(o,a,n[r]))}return s}function fo(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Ki(t,i,e))}return s}class po extends so{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
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
class go{constructor(t){this.count=t}}
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
 */var mo,yo;function vo(t){if(void 0===t)return xs("GRPC error has no .code"),Bs.UNKNOWN;switch(t){case mo.OK:return Bs.OK;case mo.CANCELLED:return Bs.CANCELLED;case mo.UNKNOWN:return Bs.UNKNOWN;case mo.DEADLINE_EXCEEDED:return Bs.DEADLINE_EXCEEDED;case mo.RESOURCE_EXHAUSTED:return Bs.RESOURCE_EXHAUSTED;case mo.INTERNAL:return Bs.INTERNAL;case mo.UNAVAILABLE:return Bs.UNAVAILABLE;case mo.UNAUTHENTICATED:return Bs.UNAUTHENTICATED;case mo.INVALID_ARGUMENT:return Bs.INVALID_ARGUMENT;case mo.NOT_FOUND:return Bs.NOT_FOUND;case mo.ALREADY_EXISTS:return Bs.ALREADY_EXISTS;case mo.PERMISSION_DENIED:return Bs.PERMISSION_DENIED;case mo.FAILED_PRECONDITION:return Bs.FAILED_PRECONDITION;case mo.ABORTED:return Bs.ABORTED;case mo.OUT_OF_RANGE:return Bs.OUT_OF_RANGE;case mo.UNIMPLEMENTED:return Bs.UNIMPLEMENTED;case mo.DATA_LOSS:return Bs.DATA_LOSS;default:return Ps()}}(yo=mo||(mo={}))[yo.OK=0]="OK",yo[yo.CANCELLED=1]="CANCELLED",yo[yo.UNKNOWN=2]="UNKNOWN",yo[yo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yo[yo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yo[yo.NOT_FOUND=5]="NOT_FOUND",yo[yo.ALREADY_EXISTS=6]="ALREADY_EXISTS",yo[yo.PERMISSION_DENIED=7]="PERMISSION_DENIED",yo[yo.UNAUTHENTICATED=16]="UNAUTHENTICATED",yo[yo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yo[yo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yo[yo.ABORTED=10]="ABORTED",yo[yo.OUT_OF_RANGE=11]="OUT_OF_RANGE",yo[yo.UNIMPLEMENTED=12]="UNIMPLEMENTED",yo[yo.INTERNAL=13]="INTERNAL",yo[yo.UNAVAILABLE=14]="UNAVAILABLE",yo[yo.DATA_LOSS=15]="DATA_LOSS";
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
class wo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Er(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return Tr(this.inner)}size(){return this.innerSize}}
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
 */const Eo=new br(ar.comparator);function To(){return Eo}const bo=new br(ar.comparator);function Io(...t){let e=bo;for(const n of t)e=e.insert(n.key,n);return e}function Co(t){let e=bo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function So(){return _o()}function Ao(){return _o()}function _o(){return new wo((t=>t.toString()),((t,e)=>t.isEqual(e)))}new br(ar.comparator);const Do=new Sr(ar.comparator);function No(...t){let e=Do;for(const n of t)e=e.add(n);return e}const ko=new Sr(Zs);function Ro(){return ko}
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
 */class Lo{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Oo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Lo(nr.min(),s,Ro(),To(),No())}}class Oo{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Oo(n,e,No(),No(),No())}}
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
 */class xo{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class Mo{constructor(t,e){this.targetId=t,this.At=e}}class Vo{constructor(t,e,n=Dr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Po{constructor(){this.Rt=0,this.bt=Bo(),this.Pt=Dr.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=No(),e=No(),n=No();return this.bt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ps()}})),new Oo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Bo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Uo{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=To(),this.qt=Fo(),this.Kt=new Sr(Zs)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Ps()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(ci(t))if(0===n){const n=new ar(t.path);this.jt(e,n,ni.newNoDocument(n,nr.min()))}else Us(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const r=this.Xt(s);if(r){if(n.current&&ci(r.target)){const e=new ar(r.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,ni.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=No();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new Lo(t,e,this.Kt,this.Ut,n);return this.Ut=To(),this.qt=Fo(),this.Kt=new Sr(Zs),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Po,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Sr(Zs),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Os("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Po),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Fo(){return new br(ar.comparator)}function Bo(){return new br(ar.comparator)}
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
 */const jo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Ko{constructor(t,e){this.databaseId=t,this.gt=e}}function Ho(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Go(t){return Us(!!t),nr.fromTimestamp(function(t){const e=kr(t);return new er(e.seconds,e.nanos)}(t))}function $o(t,e){return function(t){return new rr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qo(t){const e=rr.fromString(t);return Us(da(e)),e}function Wo(t,e){const n=Qo(e);if(n.get(1)!==t.databaseId.projectId)throw new js(Bs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new js(Bs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ar(Zo(n))}function Xo(t,e){return $o(t.databaseId,e)}function Yo(t){const e=Qo(t);return 4===e.length?rr.emptyPath():Zo(e)}function Jo(t){return new rr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zo(t){return Us(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ta(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ps()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(Us(void 0===e||"string"==typeof e),Dr.fromBase64String(e||"")):(Us(void 0===e||e instanceof Uint8Array),Dr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Bs.UNKNOWN:vo(t.code);return new js(e,t.message||"")}(o);n=new Vo(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Wo(t,s.document.name),i=Go(s.document.updateTime),o=new ei({mapValue:{fields:s.document.fields}}),a=ni.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new xo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Wo(t,s.document),i=s.readTime?Go(s.readTime):nr.min(),o=ni.newNoDocument(r,i),a=s.removedTargetIds||[];n=new xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Wo(t,s.document),i=s.removedTargetIds||[];n=new xo([],i,r,null)}else{if(!("filter"in e))return Ps();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new go(s),i=t.targetId;n=new Mo(i,r)}}return n}function ea(t,e){return{documents:[Xo(t,e.path)]}}function na(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Xo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Yr(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NAN"}};if(Xr(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Yr(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NOT_NAN"}};if(Xr(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ca(t.field),op:aa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ca(t.field),direction:oa(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||Ur(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function sa(t){let e=Yo(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Us(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=ia(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new wi(ua(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ur(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new vi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new vi(n,e)}(n.endAt)),Ci(e,r,o,i,a,"F",c,u)}function ra(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ps()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ia(t){return t?void 0!==t.unaryFilter?[la(t)]:void 0!==t.fieldFilter?[ha(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ia(t))).reduce(((t,e)=>t.concat(e))):Ps():[]}function oa(t){return jo[t]}function aa(t){return qo[t]}function ca(t){return{fieldPath:t.canonicalString()}}function ua(t){return or.fromServerFormat(t.fieldPath)}function ha(t){return ui.create(ua(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ps()}}(t.fieldFilter.op),t.fieldFilter.value)}function la(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ua(t.unaryFilter.field);return ui.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ua(t.unaryFilter.field);return ui.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ua(t.unaryFilter.field);return ui.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ua(t.unaryFilter.field);return ui.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ps()}}function da(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const fa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ga=pa;
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
class ma{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&io(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=oo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=oo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ao();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=ro(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(nr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),No())}isEqual(t){return this.batchId===t.batchId&&tr(this.mutations,t.mutations,((t,e)=>ao(t,e)))&&tr(this.baseMutations,t.baseMutations,((t,e)=>ao(t,e)))}}
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
class ya{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class va{constructor(t,e,n,s,r=nr.min(),i=nr.min(),o=Dr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class wa{constructor(t){this.re=t}}function Ea(t){const e=sa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Li(e,e.limit,"L"):e}
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
 */class Ta{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Rr(t.integerValue));else if("doubleValue"in t){const n=Rr(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Fr(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Lr(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?ti(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Ps()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const s of Object.keys(n))this._e(s,e),this.ae(n[s],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const s of n)this.ae(s,e)}ge(t,e){this.le(e,37),ar.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Ta.Te=new Ta;
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
class ba{constructor(){this.Ye=new Ia}addToCollectionParentIndex(t,e){return this.Ye.add(e),mr.resolve()}getCollectionParents(t,e){return mr.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return mr.resolve()}deleteFieldIndex(t,e){return mr.resolve()}getDocumentsMatchingTarget(t,e){return mr.resolve(null)}getIndexType(t,e){return mr.resolve(0)}getFieldIndexes(t,e){return mr.resolve([])}getNextCollectionGroupToUpdate(t){return mr.resolve(null)}getMinOffset(t,e){return mr.resolve(lr.min())}getMinOffsetFromCollectionGroup(t,e){return mr.resolve(lr.min())}updateCollectionGroup(t,e,n){return mr.resolve()}updateIndexEntries(t,e){return mr.resolve()}}class Ia{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Sr(rr.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Sr(rr.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ca{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ca(t,Ca.DEFAULT_COLLECTION_PERCENTILE,Ca.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ca.DEFAULT_COLLECTION_PERCENTILE=10,Ca.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ca.DEFAULT=new Ca(41943040,Ca.DEFAULT_COLLECTION_PERCENTILE,Ca.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ca.DISABLED=new Ca(-1,0,0);
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
class Sa{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Sa(0)}static vn(){return new Sa(-1)}}
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
class Aa{constructor(){this.changes=new wo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ni.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class _a{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Da{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&oo(n.mutation,t,_r.empty(),er.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,No()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=No()){const s=So();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Io();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=So();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,No())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=To();const i=_o(),o=_o();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof uo)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),oo(o.mutation,e,o.mutation.getFieldMask(),er.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new _a(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=_o();let s=new br(((t,e)=>t-e)),r=No();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||_r.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||No()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Ao();c.forEach((t=>{if(!r.has(t)){const s=ro(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return mr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ar.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ni(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):mr.resolve(So());let o=-1,a=r;return i.next((e=>mr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?mr.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,No()))).next((t=>({batchId:o,changes:Co(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ar(e)).next((t=>{let e=Io();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=Io();return this.indexManager.getCollectionParents(t,s).next((i=>mr.forEach(i,(i=>{const o=function(t,e){return new Ii(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,ni.newInvalidDocument(n)))}));let n=Io();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&oo(i.mutation,r,_r.empty(),er.now()),Vi(e,r)&&(n=n.insert(s,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):mr.resolve(ni.newInvalidDocument(e))}}
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
 */class Na{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return mr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Go(n.createTime)}),mr.resolve()}getNamedQuery(t,e){return mr.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ea(t.bundledQuery),readTime:Go(t.readTime)}}(e)),mr.resolve()}}
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
 */class ka{constructor(){this.overlays=new br(ar.comparator),this.es=new Map}getOverlay(t,e){return mr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=So();return mr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),mr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),mr.resolve()}getOverlaysForCollection(t,e,n){const s=So(),r=e.length+1,i=new ar(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return mr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new br(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=So(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=So(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return mr.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ya(e,n));let r=this.es.get(e);void 0===r&&(r=No(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
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
 */class Ra{constructor(){this.ns=new Sr(La.ss),this.rs=new Sr(La.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new La(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new La(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new ar(new rr([])),n=new La(e,t),s=new La(e,t+1),r=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new ar(new rr([])),n=new La(e,t),s=new La(e,t+1);let r=No();return this.rs.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new La(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class La{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return ar.comparator(t.key,e.key)||Zs(t._s,e._s)}static os(t,e){return Zs(t._s,e._s)||ar.comparator(t.key,e.key)}}
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
 */class Oa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Sr(La.ss)}checkEmpty(t){return mr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ma(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.gs=this.gs.add(new La(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return mr.resolve(i)}lookupMutationBatch(t,e){return mr.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),r=s<0?0:s;return mr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return mr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return mr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new La(e,0),s=new La(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);r.push(e)})),mr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Sr(Zs);return e.forEach((t=>{const e=new La(t,0),s=new La(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),mr.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;ar.isDocumentKey(r)||(r=r.child(""));const i=new La(new ar(r),0);let o=new Sr(Zs);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),i),mr.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Us(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mr.forEach(e.mutations,(s=>{const r=new La(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new La(e,0),s=this.gs.firstAfterOrEqual(n);return mr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,mr.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class xa{constructor(t){this.Es=t,this.docs=new br(ar.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return mr.resolve(n?n.document.mutableCopy():ni.newInvalidDocument(e))}getEntries(t,e){let n=To();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ni.newInvalidDocument(t))})),mr.resolve(n)}getAllFromCollection(t,e,n){let s=To();const r=new ar(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||dr(hr(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return mr.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Ps()}As(t,e){return mr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ma(this)}getSize(t){return mr.resolve(this.size)}}class Ma extends Aa{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),mr.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
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
 */class Va{constructor(t){this.persistence=t,this.Rs=new wo((t=>ii(t)),ai),this.lastRemoteSnapshotVersion=nr.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ra,this.targetCount=0,this.vs=Sa.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),mr.resolve()}getLastRemoteSnapshotVersion(t){return mr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mr.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),mr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),mr.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Sa(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,mr.resolve()}updateTargetData(t,e){return this.Dn(e),mr.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,mr.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),mr.waitFor(r).next((()=>s))}getTargetCount(t){return mr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return mr.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),mr.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),mr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),mr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return mr.resolve(n)}containsKey(t,e){return mr.resolve(this.Ps.containsKey(e))}}
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
 */class Pa{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new vr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Va(this),this.indexManager=new ba,this.remoteDocumentCache=function(t){return new xa(t)}((t=>this.referenceDelegate.xs(t))),this.It=new wa(e),this.Ns=new Na(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Oa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Os("MemoryPersistence","Starting transaction:",t);const s=new Ua(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return mr.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Ua extends pr{constructor(t){super(),this.currentSequenceNumber=t}}class Fa{constructor(t){this.persistence=t,this.Fs=new Ra,this.$s=null}static Bs(t){return new Fa(t)}get Ls(){if(this.$s)return this.$s;throw Ps()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),mr.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),mr.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),mr.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mr.forEach(this.Ls,(n=>{const s=ar.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,nr.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return mr.or([()=>mr.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
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
class Ba{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=No(),s=No();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ba(t,e.fromCache,n,s)}}
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
 */class ja{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((r=>r||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(Ai(e))return mr.resolve(null);let n=Ri(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Li(e,null,"F"),n=Ri(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=No(...s);return this.Ni.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,s);return this.$i(e,i,r,n.readTime)?this.ki(t,Li(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Oi(t,e,n,s){return Ai(e)||s.isEqual(nr.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((r=>{const i=this.Fi(e,r);return this.$i(e,i,n,s)?this.Mi(t,e):(Ls()<=o["in"].DEBUG&&Os("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mi(e)),this.Bi(t,i,e,ur(s,-1)))}))}Fi(t,e){let n=new Sr(Ui(t));return e.forEach(((e,s)=>{Vi(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,e){return Ls()<=o["in"].DEBUG&&Os("QueryEngine","Using full collection scan to execute query:",Mi(e)),this.Ni.getDocumentsMatchingQuery(t,e,lr.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class qa{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new br(Zs),this.qi=new wo((t=>ii(t)),ai),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Da(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function Ka(t,e,n,s){return new qa(t,e,n,s)}async function Ha(t,e){const n=Fs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=No();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function za(t){const e=Fs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Ga(t,e){const n=Fs(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Dr.EMPTY_BYTE_STRING,nr.min()).withLastLimboFreeSnapshotVersion(nr.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))}));let a=To(),c=No();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push($a(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(nr.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return mr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=r,t)))}function $a(t,e,n){let s=No(),r=No();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=To();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(nr.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Os("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:s,zi:r}}))}function Qa(t,e){const n=Fs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((r=>r?(s=r,mr.resolve(s)):n.Cs.allocateTargetId(t).next((r=>(s=new va(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Wa(t,e,n){const s=Fs(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!yr(t))throw t;Os("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Xa(t,e,n){const s=Fs(t);let r=nr.min(),i=No();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Fs(t),r=s.qi.get(n);return void 0!==r?mr.resolve(s.Ui.get(r)):s.Cs.getTargetData(e,n)}(s,t,Ri(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?r:nr.min(),n?i:No()))).next((t=>(Ya(s,Pi(e),t),{documents:t,Hi:i})))))}function Ya(t,e,n){let s=t.Ki.get(e)||nr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class Ja{constructor(){this.activeTargetIds=Ro()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Za{constructor(){this.Lr=new Ja,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Ja,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class tc{qr(t){}shutdown(){}}
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
 */class ec{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Os("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Os("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const nc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class sc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
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
 */class rc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,r){const i=this.ho(t,e);Os("RestConnection","Sending: ",i,n);const o={};return this.lo(o,s,r),this.fo(t,i,o,n).then((t=>(Os("RestConnection","Received: ",t),t)),(e=>{throw Ms("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,s,r,i){return this.ao(t,e,n,s,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ks,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=nc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise(((r,i)=>{const o=new _s;o.setWithCredentials(!0),o.listenOnce(bs.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ts.NO_ERROR:const e=o.getResponseJson();Os("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Ts.TIMEOUT:Os("Connection",'RPC "'+t+'" timed out'),i(new js(Bs.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const n=o.getStatus();if(Os("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Bs).indexOf(e)>=0?e:Bs.UNKNOWN}(t.status);i(new js(e,t.message))}else i(new js(Bs.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new js(Bs.UNAVAILABLE,"Connection failed."));break;default:Ps()}}finally{Os("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=ws(),i=Es(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ss({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");Os("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,h=!1;const l=new sc({Hr:t=>{h?Os("Connection","Not sending because WebChannel is closed:",t):(u||(Os("Connection","Opening WebChannel transport."),c.open(),u=!0),Os("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,As.EventType.OPEN,(()=>{h||Os("Connection","WebChannel transport opened.")})),d(c,As.EventType.CLOSE,(()=>{h||(h=!0,Os("Connection","WebChannel transport closed"),l.io())})),d(c,As.EventType.ERROR,(t=>{h||(h=!0,Ms("Connection","WebChannel transport errored:",t),l.io(new js(Bs.UNAVAILABLE,"The operation could not be completed")))})),d(c,As.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Us(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){Os("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=mo[t];if(void 0!==e)return vo(e)}(t),n=r.message;void 0===e&&(e=Bs.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,l.io(new js(e,n)),c.close()}else Os("Connection","WebChannel received:",n),l.ro(n)}})),d(i,Is.STAT_EVENT,(t=>{t.stat===Cs.PROXY?Os("Connection","Detected buffering proxy"):t.stat===Cs.NOPROXY&&Os("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
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
 */function ic(){return"undefined"!=typeof document?document:null}
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
 */function oc(t){return new Ko(t,!0)}class ac{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&Os("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class cc{constructor(t,e,n,s,r,i,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.So=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new ac(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===Bs.RESOURCE_EXHAUSTED?(xs(e.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===Bs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new js(Bs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Os("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget((()=>this.Do===t?e():(Os("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uc extends cc{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.It=r}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=ta(this.It,t),n=function(t){if(!("targetChange"in t))return nr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?nr.min():e.readTime?Go(e.readTime):nr.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Jo(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=ci(s)?{documents:ea(t,s)}:{query:na(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=zo(t,e.resumeToken):e.snapshotVersion.compareTo(nr.min())>0&&(n.readTime=Ho(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ra(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Jo(this.It),e.removeTarget=t,this.Lo(e)}}
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
class hc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=s,this.su=!1}iu(){if(this.su)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.So.ao(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new js(Bs.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So._o(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new js(Bs.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class lc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(xs(e),this.uu=!1):Os("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
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
 */class dc{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr((t=>{n.enqueueAndForget((async()=>{Tc(this)&&(Os("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Fs(t);e.wu.add(4),await pc(e),e.yu.set("Unknown"),e.wu.delete(4),await fc(e)}(this))}))})),this.yu=new lc(n,s)}}async function fc(t){if(Tc(t))for(const e of t.mu)await e(!0)}async function pc(t){for(const e of t.mu)await e(!1)}function gc(t,e){const n=Fs(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Ec(n)?wc(n):Nc(n).Oo()&&yc(n,e))}function mc(t,e){const n=Fs(t),s=Nc(n);n._u.delete(e),s.Oo()&&vc(n,e),0===n._u.size&&(s.Oo()?s.$o():Tc(n)&&n.yu.set("Unknown"))}function yc(t,e){t.pu.Mt(e.targetId),Nc(t).Ho(e)}function vc(t,e){t.pu.Mt(e),Nc(t).Jo(e)}function wc(t){t.pu=new Uo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Nc(t).start(),t.yu.cu()}function Ec(t){return Tc(t)&&!Nc(t).ko()&&t._u.size>0}function Tc(t){return 0===Fs(t).wu.size}function bc(t){t.pu=void 0}async function Ic(t){t._u.forEach(((e,n)=>{yc(t,e)}))}async function Cc(t,e){bc(t),Ec(t)?(t.yu.lu(e),wc(t)):t.yu.set("Unknown")}async function Sc(t,e,n){if(t.yu.set("Online"),e instanceof Vo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t._u.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t._u.delete(s),t.pu.removeTarget(s))}(t,e)}catch(n){Os("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ac(t,n)}else if(e instanceof xo?t.pu.Gt(e):e instanceof Mo?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(nr.min()))try{const e=await za(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t._u.get(s);r&&t._u.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Dr.EMPTY_BYTE_STRING,n.snapshotVersion)),vc(t,e);const s=new va(n.target,e,1,n.sequenceNumber);yc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Os("RemoteStore","Failed to raise snapshot:",e),await Ac(t,e)}}async function Ac(t,e,n){if(!yr(e))throw e;t.wu.add(1),await pc(t),t.yu.set("Offline"),n||(n=()=>za(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Os("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await fc(t)}))}async function _c(t,e){const n=Fs(t);n.asyncQueue.verifyOperationInProgress(),Os("RemoteStore","RemoteStore received new credentials");const s=Tc(n);n.wu.add(3),await pc(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await fc(n)}async function Dc(t,e){const n=Fs(t);e?(n.wu.delete(2),await fc(n)):e||(n.wu.add(2),await pc(n),n.yu.set("Unknown"))}function Nc(t){return t.Iu||(t.Iu=function(t,e,n){const s=Fs(t);return s.iu(),new uc(e,s.So,s.authCredentials,s.appCheckCredentials,s.It,n)
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
 */}(t.datastore,t.asyncQueue,{Yr:Ic.bind(null,t),Zr:Cc.bind(null,t),zo:Sc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),Ec(t)?wc(t):t.yu.set("Unknown")):(await t.Iu.stop(),bc(t))}))),t.Iu}
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
class kc{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new kc(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new js(Bs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rc(t,e){if(xs("AsyncQueue",`${e}: ${t}`),yr(t))return new js(Bs.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Lc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ar.comparator(e.key,n.key):(t,e)=>ar.comparator(t.key,e.key),this.keyedMap=Io(),this.sortedSet=new br(this.comparator)}static emptySet(t){return new Lc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Lc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Lc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Oc{constructor(){this.Eu=new br(ar.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Ps():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xc{constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new xc(t,e,Lc.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
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
 */class Mc{constructor(){this.Ru=void 0,this.listeners=[]}}class Vc{constructor(){this.queries=new wo((t=>xi(t)),Oi),this.onlineState="Unknown",this.bu=new Set}}async function Pc(t,e){const n=Fs(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Mc),r)try{i.Ru=await n.onListen(s)}catch(t){const n=Rc(t,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&jc(n)}async function Uc(t,e){const n=Fs(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Fc(t,e){const n=Fs(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(r)&&(s=!0);e.Ru=r}}s&&jc(n)}function Bc(t,e,n){const s=Fs(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function jc(t){t.bu.forEach((t=>{t.next()}))}class qc{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=xc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
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
class Kc{constructor(t){this.key=t}}class Hc{constructor(t){this.key=t}}class zc{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=No(),this.mutatedKeys=No(),this.Gu=Ui(t),this.Qu=new Lc(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Oc,s=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=Vi(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Au();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ps()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new xc(this.query,t.Qu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Oc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=No(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Hc(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Kc(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=No();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return xc.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Gc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class $c{constructor(t){this.key=t,this.nc=!1}}class Qc{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new wo((t=>xi(t)),Oi),this.rc=new Map,this.oc=new Set,this.uc=new br(ar.comparator),this.cc=new Map,this.ac=new Ra,this.hc={},this.lc=new Map,this.fc=Sa.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Wc(t,e){const n=uu(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const t=await Qa(n.localStore,Ri(e));n.isPrimaryClient&&gc(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await Xc(n,e,s,"current"===i,t.resumeToken)}return r}async function Xc(t,e,n,s,r){t._c=(e,n,s)=>async function(t,e,n,s){let r=e.view.Wu(n);r.$i&&(r=await Xa(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return su(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const i=await Xa(t.localStore,e,!0),o=new zc(e,i.Hi),a=o.Wu(i.documents),c=Oo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);su(t,n,u.Xu);const h=new Gc(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Yc(t,e){const n=Fs(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter((t=>!Oi(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Wa(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),mc(n.remoteStore,s.targetId),eu(n,s.targetId)})).catch(gr)):(eu(n,s.targetId),await Wa(n.localStore,s.targetId,!0))}async function Jc(t,e){const n=Fs(t);try{const t=await Ga(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(Us(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?Us(s.nc):t.removedDocuments.size>0&&(Us(s.nc),s.nc=!1))})),await ou(n,t,e)}catch(t){await gr(t)}}function Zc(t,e,n){const s=Fs(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const r=s.view.Pu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Fs(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Pu(e)&&(s=!0)})),s&&jc(n)}(s.eventManager,e),t.length&&s.sc.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tu(t,e,n){const s=Fs(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let t=new br(ar.comparator);t=t.insert(i,ni.newNoDocument(i,nr.min()));const n=No().add(i),r=new Lo(nr.min(),new Map,new Sr(Zs),t,n);await Jc(s,r),s.uc=s.uc.remove(i),s.cc.delete(e),iu(s)}else await Wa(s.localStore,e,!1).then((()=>eu(s,e,n))).catch(gr)}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||nu(t,e)}))}function nu(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(mc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),iu(t))}function su(t,e,n){for(const s of n)s instanceof Kc?(t.ac.addReference(s.key,e),ru(t,s)):s instanceof Hc?(Os("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||nu(t,s.key)):Ps()}function ru(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(Os("SyncEngine","New document in limbo: "+n),t.oc.add(s),iu(t))}function iu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ar(rr.fromString(e)),s=t.fc.next();t.cc.set(s,new $c(n)),t.uc=t.uc.insert(n,s),gc(t.remoteStore,new va(Ri(Si(n.path)),s,2,vr.at))}}async function ou(t,e,n){const s=Fs(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Ba.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.sc.zo(r),await async function(t,e){const n=Fs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mr.forEach(e,(e=>mr.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>mr.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!yr(t))throw t;Os("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ui.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(t,r)}}}(s.localStore,i))}async function au(t,e){const n=Fs(t);if(!n.currentUser.isEqual(e)){Os("SyncEngine","User change. New user:",e.toKey());const t=await Ha(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new js(Bs.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ou(n,t.ji)}}function cu(t,e){const n=Fs(t),s=n.cc.get(e);if(s&&s.nc)return No().add(s.key);{let t=No();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function uu(t){const e=Fs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tu.bind(null,e),e.sc.zo=Fc.bind(null,e.eventManager),e.sc.wc=Bc.bind(null,e.eventManager),e}class hu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=oc(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Ka(this.persistence,new ja,t.initialUser,this.It)}yc(t){return new Pa(Fa.Bs,this.It)}gc(t){return new Za}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Zc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=au.bind(null,this.syncEngine),await Dc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Vc}createDatastore(t){const e=oc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new rc(s));var s;return function(t,e,n,s){return new hc(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Zc(this.syncEngine,t,0),i=ec.C()?new ec:new tc,new dc(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Qc(t,e,n,s,r,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Fs(t);Os("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await pc(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
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
 */function du(t,e,n){if(!n)throw new js(Bs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fu(t,e,n,s){if(!0===e&&!0===s)throw new js(Bs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pu(t){if(ar.isDocumentKey(t))throw new js(Bs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ps()}function mu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new js(Bs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gu(t);throw new js(Bs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const yu=new Map;class vu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new js(Bs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new js(Bs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,fu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class wu{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new js(Bs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new js(Bs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hs;switch(t.type){case"gapi":const e=t.client;return new Qs(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new js(Bs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=yu.get(t);e&&(Os("ComponentProvider","Removing Datastore"),yu.delete(t),e.terminate())}(this),Promise.resolve()}}function Eu(t,e,n,s={}){var r;const i=(t=mu(t,wu))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&Ms("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ns.MOCK_USER;else{e=(0,a.Sg)(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new js(Bs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ns(i)}t._authCredentials=new zs(new Ks(e,n))}}
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
 */class Tu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tu(this.firestore,t,this._key)}}class bu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new bu(this.firestore,t,this._query)}}class Iu extends bu{constructor(t,e,n){super(t,e,Si(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tu(this.firestore,null,new ar(t))}withConverter(t){return new Iu(this.firestore,t,this._path)}}function Cu(t,e,...n){if(t=(0,a.m9)(t),du("collection","path",e),t instanceof wu){const s=rr.fromString(e,...n);return pu(s),new Iu(t,null,s)}{if(!(t instanceof Tu||t instanceof Iu))throw new js(Bs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rr.fromString(e,...n));return pu(s),new Iu(t.firestore,null,s)}}
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
class Su{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):xs("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Au{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ns.UNAUTHENTICATED,this.clientId=Js.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Os("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Os("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Rc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function _u(t,e){t.asyncQueue.verifyOperationInProgress(),Os("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Ha(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Du(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nu(t);Os("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>_c(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>_c(e.remoteStore,n))),t.onlineComponents=e}async function Nu(t){return t.offlineComponents||(Os("FirestoreClient","Using default OfflineComponentProvider"),await _u(t,new hu)),t.offlineComponents}async function ku(t){return t.onlineComponents||(Os("FirestoreClient","Using default OnlineComponentProvider"),await Du(t,new lu)),t.onlineComponents}async function Ru(t){const e=await ku(t),n=e.eventManager;return n.onListen=Wc.bind(null,e.syncEngine),n.onUnlisten=Yc.bind(null,e.syncEngine),n}function Lu(t,e,n={}){const s=new qs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new Su({next:n=>{e.enqueueAndForget((()=>Uc(t,o))),n.fromCache&&"server"===s.source?r.reject(new js(Bs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new qc(n,i,{includeMetadataChanges:!0,ku:!0});return Pc(t,o)}(await Ru(t),t.asyncQueue,e,n,s))),s.promise}class Ou{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new ac(this,"async_queue_retry"),this.Wc=()=>{const t=ic();t&&Os("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=ic();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=ic();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new qs;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(b){if(!yr(b))throw b;Os("AsyncQueue","Operation failed with retryable error: "+b)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw xs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=kc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(s),s}zc(){this.Kc&&Ps()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class xu extends wu{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ou,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pu(this),this._firestoreClient.terminate()}}function Mu(t,e){const n="object"==typeof t?t:(0,r.Mq)(),s="string"==typeof t?t:e||"(default)",i=(0,r.qX)(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=(0,a.P0)("firestore");t&&Eu(i,...t)}return i}function Vu(t){return t._firestoreClient||Pu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pu(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Vr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
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
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Au(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class Uu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Uu(Dr.fromBase64String(t))}catch(t){throw new js(Bs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Uu(Dr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Fu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new js(Bs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new or(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Bu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new js(Bs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new js(Bs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Zs(this._lat,t._lat)||Zs(this._long,t._long)}}
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
 */const ju=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(ju)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch(s){throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ku(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new js(Bs.INVALID_ARGUMENT,a+t+c)}
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
class Hu{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class zu extends Hu{data(){return super.data()}}function Gu(t,e){return"string"==typeof e?qu(t,e):e instanceof Fu?e._internalPath:e._delegate._internalPath}
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
 */function $u(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new js(Bs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
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
class Qu{convertValue(t,e="none"){switch(jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Lr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ps()}}convertObject(t,e){const n={};return Er(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Bu(Rr(t.latitude),Rr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Mr(t));default:return null}}convertTimestamp(t){const e=kr(t);return new er(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=rr.fromString(t);Us(da(n));const s=new Pr(n.get(1),n.get(3)),r=new ar(n.popFirst(5));return s.isEqual(e)||xs(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
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
class Wu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xu extends Hu{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Gu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Yu extends Xu{data(t={}){return super.data(t)}}class Ju{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Wu(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Yu(this._firestore,this._userDataWriter,n.key,n,new Wu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new js(Bs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Yu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Wu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Yu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Wu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Zu(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ps()}}class th extends Qu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Uu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tu(this.firestore,null,e)}}function eh(t){t=mu(t,bu);const e=mu(t.firestore,xu),n=Vu(e),s=new th(e);return $u(t._query),Lu(n,t._query).then((n=>new Ju(e,s,t,n)))}!function(t,e=!0){!function(t){ks=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new xu(new Gs(t.getProvider("auth-internal")),new Xs(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new js(Bs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pr(t.options.projectId,e)}
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
 */(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Ds,"3.7.1",t),(0,r.KN)(Ds,"3.7.1","esm2017")}()},9456:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var s=n(7077),r="firebase",i="9.12.1";
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
(0,s.KN)(r,i,"app");var o=n(6035);const a={apiKey:"AIzaSyD6efB2gVxJok3yarnDM0tgxjUkK8VWPquFqdA",authDomain:"chitter-f923a.firebaseapp.com",projectId:"chitter-f923a",storageBucket:"chitter-f923a.appspot.com",messagingSenderId:"348242830403",appId:"1:348242830403:web:8dfacbe7d847ad5c2820f6"};s.ZF(a);var c=(0,o.ad)()},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return lt},Xd:function(){return ht},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});n(7658);var s=n(7142),r=n(5168),i=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(b(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function E(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(I(this),e),b(l.get(this))}:function(...e){return b(t.apply(I(this),e))}:function(e,...n){const s=t.call(I(this),e,...n);return f.set(s,e.sort?e.sort():[e]),b(s)}}function T(t){return"function"===typeof t?E(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function b(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=T(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function C(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=b(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(b(o.result),t.oldVersion,t.newVersion,b(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],_=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(_.get(e))return _.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=A.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return _.set(e,i),i}w((t=>({...t,get:(e,n,s)=>D(e,n)||t.get(e,n,s),has:(e,n)=>!!D(e,n)||t.has(e,n)})));
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
class N{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",L="0.8.2",O=new r.Yd("@firebase/app"),x="@firebase/app-compat",M="@firebase/analytics-compat",V="@firebase/analytics",P="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",K="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",$="@firebase/messaging",Q="@firebase/messaging-compat",W="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",st="firebase",rt="9.12.1",it="[DEFAULT]",ot={[R]:"fire-core",[x]:"fire-core-compat",[V]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[P]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[K]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[$]:"fire-fcm",[Q]:"fire-fcm-compat",[W]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[st]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new i.LL("app","Firebase",dt);
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
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
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
 */const gt=rt;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(r,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new s.H0(o);for(const s of ct.values())c.addComponent(s);const u=new pt(n,r,c);return at.set(o,u),u}function yt(t=it){const e=at.get(t);if(!e&&t===it)return mt();if(!e)throw ft.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ht(new s.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const wt="firebase-heartbeat-database",Et=1,Tt="firebase-heartbeat-store";let bt=null;function It(){return bt||(bt=C(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),bt}async function Ct(t){var e;try{const e=await It();return e.transaction(Tt).objectStore(Tt).get(At(t))}catch(n){if(n instanceof i.ZR)O.warn(n.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});O.warn(t.message)}}}async function St(t,e){var n;try{const n=await It(),s=n.transaction(Tt,"readwrite"),r=s.objectStore(Tt);return await r.put(e,At(t)),s.done}catch(s){if(s instanceof i.ZR)O.warn(s.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message});O.warn(t.message)}}}function At(t){return`${t.name}!${t.options.appId}`}
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
 */const _t=1024,Dt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=kt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=kt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),s=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=_t){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ot(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function xt(t){ht(new s.wA("platform-logger",(t=>new N(t)),"PRIVATE")),ht(new s.wA("heartbeat",(t=>new Nt(t)),"PRIVATE")),vt(R,L,t),vt(R,L,"esm2017"),vt("fire-js","")}xt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return r}});var s=n(223);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const i="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return r}});n(7658);
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
 */const s=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=456.b9b8675a.js.map