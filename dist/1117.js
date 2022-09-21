/*! For license information please see 1117.js.LICENSE.txt */
(self.webpackChunk_web3os_core_kernel=self.webpackChunk_web3os_core_kernel||[]).push([[1117,7753,7076,2809,200],{81399:(t,r,e)=>{"use strict";e.r(r),e.d(r,{call:()=>N,description:()=>E,go:()=>T,help:()=>O,name:()=>x,read:()=>L,run:()=>Y,send:()=>C,spec:()=>j,version:()=>k,write:()=>A});var n=e(94654),o=e.n(n),i=e(52018),a=e.n(i),c=e(55481),u=e.n(c),s=e(50658),l=e.n(s),f=e(25105);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function v(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){m(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function m(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function b(){b=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof f?r:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function h(){}function d(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==r&&e.call(m,o)&&(v=m);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==p(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=d,c(g,"constructor",d),c(d,"constructor",h),h.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}function g(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))}}var x="contract",k="0.1.0",E="Smart Contract Utility",O="\n  ".concat(u().magenta.bold("Smart Contract Utility"),"\n  See sample scripts:\n    https://github.com/web3os-org/sample-scripts/tree/master/contract\n\n  Usage:\n    contract <command> [options]\n  \n  Examples:\n    contract call 0xDEADBEEFCAFE retrieve()\n    contract send 0xDEADBEEFCAFE store(12345)\n\n  Commands:\n    read <address> <method> [...args]        Call a method on a smart contract (call)\n    write <address> <method> [...args]        Send a tx to a smart contract (send)\n\n  Options:\n    --abi-file                               Path to the contract ABI JSON file\n    --abi-url                                Path to the contract ABI JSON url\n    --artifact-url                           Path to the contract artifact url\n    --help                                   Print this help message\n    --version                                Print the version information\n"),j={"--abi-file":String,"--abi-url":String,"--artifact-url":String,"--help":Boolean,"--version":Boolean},S=a().givenProvider,_=new(a())(S);function L(t){return P.apply(this,arguments)}function P(){return(P=w(b().mark((function t(r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return F.apply(this,arguments)}function F(){return(F=w(b().mark((function t(r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){return I.apply(this,arguments)}function I(){return(I=w(b().mark((function t(r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(y(y({},r),{},{cmd:"call"}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return D.apply(this,arguments)}function D(){return(D=w(b().mark((function t(r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(y(y({},r),{},{cmd:"send"}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t){return B.apply(this,arguments)}function B(){return(B=w(b().mark((function t(r){var e,n,o,i,a,c,u;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.cmd,n=r.address,o=r.method,i=r.abiFile,a=r.abiUrl,c=r.args,u={_:[e,n,o,{op:"("}].concat(h(void 0===c?[]:c),[{op:")"}])},i&&(u["--abi-file"]=i),a&&(u["--abi-url"]=a),t.prev=4,t.next=7,T(e,n,o,u);case 7:return t.abrupt("return",t.sent);case 10:return t.prev=10,t.t0=t.catch(4),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})))).apply(this,arguments)}function T(t,r,e,n){return U.apply(this,arguments)}function U(){return(U=w(b().mark((function t(r,e,n,o){var i,a,c,u,s,f,d,v,y,m,g,w,x;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(i=kernel.wallet.account)&&void 0!==i&&i.address){t.next=2;break}throw new Error("You must have a connected account");case 2:if("("!==(null===(a=o._)||void 0===a||null===(c=a[3])||void 0===c?void 0:c.op)){t.next=35;break}if(f=!1,d=o._.filter((function(t,r){return!(f||r<4||"object"===p(t)&&")"===t.op&&(f=!0))})).join("").split(",").filter((function(t){return""!==t})),o["--abi-url"]||o["--abi-file"]||[o["--artifact-url"]]){t.next=7;break}throw new Error("You must specify --abi-file, --abi-url, or --artifact-url");case 7:if(!o["--abi-url"]){t.next=16;break}return t.next=10,fetch(o["--abi-url"]);case 10:return m=t.sent,t.next=13,m.json();case 13:v=t.sent,t.next=29;break;case 16:if(!o["--abi-file"]){t.next=21;break}y={source:"fs"},v=JSON.parse(kernel.fs.readFileSync(o["--abi-file"]).toString()),t.next=29;break;case 21:if(!o["--artifact-url"]){t.next=29;break}return t.next=24,fetch(o["--artifact-url"]);case 24:return w=t.sent,t.next=27,w.json();case 27:y=t.sent,v=null===(g=y.output)||void 0===g?void 0:g.abi;case 29:if(v&&"object"===p(v)){t.next=31;break}throw new Error("Unable to load the ABI");case 31:return x=new(l())(v,e,{from:null===(u=kernel.wallet.account)||void 0===u?void 0:u.address}),t.next=34,null===(s=x.methods)||void 0===s?void 0:s[n].apply(s,h(d))[r]();case 34:return t.abrupt("return",t.sent);case 35:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(t){return J.apply(this,arguments)}function J(){return J=w(b().mark((function t(r){var e,n,i,a,c,u,s,l,p=arguments;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=p.length>1&&void 0!==p[1]?p[1]:"",!(s=o()(j,{argv:(0,f.Q)(u)}))["--version"]){t.next=4;break}return t.abrupt("return",r.log(k));case 4:if(!s["--help"]){t.next=6;break}return t.abrupt("return",r.log(O));case 6:if(!s["--network"]||["mainnet","goerli","kovan","rinkeby","ropsten"].includes(s["--network"])){t.next=8;break}throw new Error("Invalid network");case 8:l=null===(e=s._)||void 0===e?void 0:e[0],t.t0=l,t.next="call"===t.t0||"read"===t.t0?12:"send"===t.t0||"write"===t.t0?17:22;break;case 12:return t.t1=r,t.next=15,T("call",null===(n=s._)||void 0===n?void 0:n[1],null===(i=s._)||void 0===i?void 0:i[2],s);case 15:return t.t2=t.sent,t.abrupt("return",t.t1.log.call(t.t1,t.t2));case 17:return t.t3=r,t.next=20,T("send",null===(a=s._)||void 0===a?void 0:a[1],null===(c=s._)||void 0===c?void 0:c[2],s);case 20:return t.t4=t.sent,t.abrupt("return",t.t3.log.call(t.t3,t.t4));case 22:return t.abrupt("return",r.log(O));case 23:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}l().setProvider(_)},11314:()=>{},79391:()=>{},81388:()=>{},88941:()=>{},54504:()=>{}}]);
//# sourceMappingURL=1117.js.map