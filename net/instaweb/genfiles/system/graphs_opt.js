(function(){var aa=aa||{},k=this;function ba(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ca(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"string"==typeof a}function p(a){return"function"==m(a)}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return q.apply(null,arguments)}var ha=Date.now||function(){return+new Date};
function r(a,b){function c(){}c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function ia(a){ia[" "](a);return a}ia[" "]=ba;function ja(){0!=ka&&(this[da]||(this[da]=++ea));this.A=this.A;this.T=this.T}var ka=0;ja.prototype.A=!1;function la(){}la.prototype.a=null;function ma(a){var b;(b=a.a)||(b={},na(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};function oa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function pa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ra(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qa.length;f++)c=qa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function t(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(t,Error);t.prototype.name="CustomError";function sa(a,b,c,d,e){this.reset(a,b,c,d,e)}sa.prototype.a=null;var ta=0;sa.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ta++;d||ha();this.b=b;delete this.a};var u="closure_listenable_"+(1E6*Math.random()|0),ua=0;function w(a,b){this.type=a;this.a=this.target=b}w.prototype.b=function(){};function va(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.C=!!d;this.F=e;++ua;this.v=this.B=!1}function x(a){a.v=!0;a.listener=null;a.a=null;a.src=null;a.F=null};function wa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var xa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ya(a,b){return a<b?-1:a>b?1:0};function za(a,b){b.unshift(a);t.call(this,wa.apply(null,b));b.shift()}r(za,t);za.prototype.name="AssertionError";function Aa(a,b){throw new za("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ba;function Ca(){}r(Ca,la);function Da(a){return(a=na(a))?new ActiveXObject(a):new XMLHttpRequest}function na(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}Ba=new Ca;var y=Array.prototype,Ea=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Fa=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ga(a){var b;a:{b=Ha;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]}function Ia(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Ja(a){if("function"==typeof a.D)return a.D();if(n(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return oa(a)}
function Ka(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||n(a))Fa(a,b,void 0);else{var c;if("function"==typeof a.w)c=a.w();else if("function"!=typeof a.D)if(ca(a)||n(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=pa(a);else c=void 0;for(var d=Ja(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function z(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)B(this,arguments[d],arguments[d+1])}else if(a){a instanceof z?(c=a.w(),d=a.D()):(c=pa(a),d=oa(a));for(var e=0;e<c.length;e++)B(this,c[e],d[e])}}z.prototype.D=function(){La(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};z.prototype.w=function(){La(this);return this.a.concat()};
z.prototype.clear=function(){this.b={};this.g=this.f=this.a.length=0};function La(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}function B(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.f++,a.a.push(b),a.g++);a.b[b]=c}
z.prototype.forEach=function(a,b){for(var c=this.w(),d=0;d<c.length;d++){var e=c[d];a.call(b,Object.prototype.hasOwnProperty.call(this.b,e)?this.b[e]:void 0,e,this)}};z.prototype.clone=function(){return new z(this)};function C(a){this.src=a;this.a={};this.b=0}function Ma(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Na(b,c,d,e);-1<g?(a=b[g],a.B=!1):(a=new va(c,a.src,f,!!d,e),a.B=!1,b.push(a));return a}function Oa(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Ea(d,b),f;(f=0<=e)&&y.splice.call(d,e,1);f&&(x(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}
C.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,x(d[e]);delete this.a[c];this.b--}return b};function Na(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.v&&f.listener==b&&f.C==!!c&&f.F==d)return e}return-1};var D;a:{var Pa=k.navigator;if(Pa){var Qa=Pa.userAgent;if(Qa){D=Qa;break a}}D=""};var Ra=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),E=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),F=-1!=D.indexOf("Gecko")&&-1==D.toLowerCase().indexOf("webkit")&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE")),G=-1!=D.toLowerCase().indexOf("webkit");function Sa(){var a=k.document;return a?a.documentMode:void 0}
var Ta=function(){var a="",b;if(Ra&&k.opera)return a=k.opera.version,p(a)?a():a;F?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:G&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(D))?a[1]:"");return E&&(b=Sa(),b>parseFloat(a))?String(b):a}(),Ua={};
function H(a){var b;if(!(b=Ua[a])){b=0;for(var c=xa(String(Ta)).split("."),d=xa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),A=RegExp("(\\d*)(\\D*)","g");do{var v=l.exec(g)||["","",""],L=A.exec(h)||["","",""];if(0==v[0].length&&0==L[0].length)break;b=ya(0==v[1].length?0:parseInt(v[1],10),0==L[1].length?0:parseInt(L[1],10))||ya(0==v[2].length,0==L[2].length)||ya(v[2],L[2])}while(0==b)}b=Ua[a]=0<=b}return b}
var Va=k.document,Wa=Va&&E?Sa()||("CSS1Compat"==Va.compatMode?parseInt(Ta,10):5):void 0;var Xa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ya(a){if(Za){Za=!1;var b=k.location;if(b){var c=b.href;if(c&&(c=(c=Ya(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Za=!0,Error();}}return a.match(Xa)}var Za=G;var $a;($a=!E)||($a=E&&9<=Wa);var ab=$a,bb=E&&!H("9");!G||H("528");F&&H("1.9b")||E&&H("8")||Ra&&H("9.5")||G&&H("528");F&&!H("8")||E&&H("9");function I(a,b){w.call(this,a?a.type:"");this.f=this.state=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&F)try{ia(c.nodeName)}catch(d){}this.state=a.state;this.f=a;a.defaultPrevented&&this.b()}}r(I,w);I.prototype.b=function(){I.Z.b.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,bb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var cb="closure_lm_"+(1E6*Math.random()|0),db={},eb=0;function J(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)J(a,b[f],c,d,e);else if(c=fb(c),a&&a[u])Ma(a.m,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=K(a);g||(a[cb]=g=new C(a));c=Ma(g,b,c,d,e);c.a||(d=gb(),c.a=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(hb(b.toString()),d),eb++)}}
function gb(){var a=ib,b=ab?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function jb(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else(c=fb(c),a&&a[u])?(a=a.m,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Na(f,c,d,e),-1<c&&(x(f[c]),y.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=K(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Na(b,c,!!d,e)),(c=-1<a?b[a]:null)&&kb(c))}
function kb(a){if("number"!=typeof a&&a&&!a.v){var b=a.src;if(b&&b[u])Oa(b.m,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.C):b.detachEvent&&b.detachEvent(hb(c),d);eb--;(c=K(b))?(Oa(c,a),0==c.b&&(c.src=null,b[cb]=null)):x(a)}}}function hb(a){return a in db?db[a]:db[a]="on"+a}function lb(a,b,c,d){var e=!0;if(a=K(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.C==c&&!f.v&&(f=mb(f,d),e=e&&!1!==f)}return e}
function mb(a,b){var c=a.listener,d=a.F||a.src;a.B&&kb(a);return c.call(d,b)}
function ib(a,b){if(a.v)return!0;if(!ab){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new I(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;0<=h;h--){c.a=e[h];var l=lb(e[h],f,!0,c),d=d&&l}for(h=0;h<e.length;h++)c.a=e[h],l=lb(e[h],f,!1,c),
d=d&&l}return d}return mb(a,new I(b,this))}function K(a){a=a[cb];return a instanceof C?a:null}var nb="__closure_events_fn_"+(1E9*Math.random()>>>0);function fb(a){if(p(a))return a;a[nb]||(a[nb]=function(b){return a.handleEvent(b)});return a[nb]};function M(){ja.call(this);this.m=new C(this);this.O=this}r(M,ja);M.prototype[u]=!0;M.prototype.addEventListener=function(a,b,c,d){J(this,a,b,c,d)};M.prototype.removeEventListener=function(a,b,c,d){jb(this,a,b,c,d)};function N(a,b){var c=a.O,d=b,e=d.type||d;if(n(d))d=new w(d,c);else if(d instanceof w)d.target=d.target||c;else{var f=d,d=new w(e,c);ra(d,f)}c=d.a=c;ob(c,e,!0,d);ob(c,e,!1,d)}M.prototype.removeAllListeners=function(a){return this.m?this.m.removeAll(a):0};
function ob(a,b,c,d){if(b=a.m.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.v&&g.C==c){var h=g.listener,l=g.F||g.src;g.B&&Oa(a.m,g);e=!1!==h.call(l,d)&&e}}}};function pb(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:k.setTimeout(a,b||0)};function qb(a){this.g=a;this.b=this.f=this.a=null}function rb(a,b){this.name=a;this.value=b}rb.prototype.toString=function(){return this.name};var sb=new rb("SEVERE",1E3),tb=new rb("CONFIG",700),ub=new rb("FINE",500);function vb(a){if(a.f)return a.f;if(a.a)return vb(a.a);Aa("Root logger has no level set.");return null}
qb.prototype.log=function(a,b,c){if(a.value>=vb(this).value)for(p(b)&&(b=b()),a=new sa(a,String(b),this.g),c&&(a.a=c),c="log:"+a.b,k.console&&(k.console.timeStamp?k.console.timeStamp(c):k.console.markTimeline&&k.console.markTimeline(c)),k.msWriteProfilerMark&&k.msWriteProfilerMark(c),c=this;c;)c=c.a};var wb={},xb=null;
function yb(a){xb||(xb=new qb(""),wb[""]=xb,xb.f=tb);var b;if(!(b=wb[a])){b=new qb(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=yb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;wb[a]=b}return b};function O(a,b){a&&a.log(ub,b,void 0)};function P(a){M.call(this);this.S=new z;this.u=a||null;this.b=!1;this.s=this.c=null;this.a=this.M=this.j="";this.f=this.I=this.i=this.H=!1;this.g=0;this.l=null;this.J=zb;this.o=this.V=!1}r(P,M);var zb="",Ab=P.prototype,Bb=yb("goog.net.XhrIo");Ab.h=Bb;var Cb=/^https?$/i,Db=["POST","PUT"];
P.prototype.send=function(a,b,c,d){if(this.c)throw Error("[goog.net.XhrIo] Object is active with another request="+this.j+"; newUri="+a);b=b?b.toUpperCase():"GET";this.j=a;this.a="";this.M=b;this.H=!1;this.b=!0;this.c=this.u?Da(this.u):Da(Ba);this.s=this.u?ma(this.u):ma(Ba);this.c.onreadystatechange=q(this.N,this);try{O(this.h,Q(this,"Opening Xhr")),this.I=!0,this.c.open(b,String(a),!0),this.I=!1}catch(e){O(this.h,Q(this,"Error opening Xhr: "+e.message));Eb(this,e);return}a=c||"";var f=this.S.clone();
d&&Ka(d,function(a,b){B(f,b,a)});d=Ga(f.w());c=k.FormData&&a instanceof k.FormData;!(0<=Ea(Db,b))||d||c||B(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.c.setRequestHeader(b,a)},this);this.J&&(this.c.responseType=this.J);"withCredentials"in this.c&&(this.c.withCredentials=this.V);try{Fb(this),0<this.g&&(this.o=Gb(this.c),O(this.h,Q(this,"Will abort after "+this.g+"ms if incomplete, xhr2 "+this.o)),this.o?(this.c.timeout=this.g,this.c.ontimeout=q(this.K,
this)):this.l=pb(this.K,this.g,this)),O(this.h,Q(this,"Sending request")),this.i=!0,this.c.send(a),this.i=!1}catch(g){O(this.h,Q(this,"Send error: "+g.message)),Eb(this,g)}};function Gb(a){return E&&H(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ha(a){return"content-type"==a.toLowerCase()}
P.prototype.K=function(){"undefined"!=typeof aa&&this.c&&(this.a="Timed out after "+this.g+"ms, aborting",O(this.h,Q(this,this.a)),N(this,"timeout"),this.c&&this.b&&(O(this.h,Q(this,"Aborting")),this.b=!1,this.f=!0,this.c.abort(),this.f=!1,N(this,"complete"),N(this,"abort"),Hb(this)))};function Eb(a,b){a.b=!1;a.c&&(a.f=!0,a.c.abort(),a.f=!1);a.a=b;Ib(a);Hb(a)}function Ib(a){a.H||(a.H=!0,N(a,"complete"),N(a,"error"))}P.prototype.N=function(){this.A||(this.I||this.i||this.f?Jb(this):this.U())};
P.prototype.U=function(){Jb(this)};function Jb(a){if(a.b&&"undefined"!=typeof aa)if(a.s[1]&&4==R(a)&&2==Kb(a))O(a.h,Q(a,"Local request error detected and ignored"));else if(a.i&&4==R(a))pb(a.N,0,a);else if(N(a,"readystatechange"),4==R(a)){O(a.h,Q(a,"Request complete"));a.b=!1;try{if(Lb(a))N(a,"complete"),N(a,"success");else{var b;try{b=2<R(a)?a.c.statusText:""}catch(c){O(a.h,"Can not get status: "+c.message),b=""}a.a=b+" ["+Kb(a)+"]";Ib(a)}}finally{Hb(a)}}}
function Hb(a){if(a.c){Fb(a);var b=a.c,c=a.s[0]?ba:null;a.c=null;a.s=null;N(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.h)&&a.log(sb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Fb(a){a.c&&a.o&&(a.c.ontimeout=null);"number"==typeof a.l&&(k.clearTimeout(a.l),a.l=null)}
function Lb(a){var b=Kb(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Ya(String(a.j))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Cb.test(a?a.toLowerCase():"");c=b}return c}function R(a){return a.c?a.c.readyState:0}function Kb(a){try{return 2<R(a)?a.c.status:-1}catch(b){return-1}}function Q(a,b){return b+" ["+a.M+" "+a.j+" "+Kb(a)+"]"};google.load("visualization","1",{packages:["table","corechart","annotatedtimeline"]});
function S(a){this.b=a||new P;this.a=[];this.l=this.o=this.f=!1;this.g={};for(var b in T)document.getElementById(T[b]).className="pagespeed-hidden-offscreen";a=document.createElement("table");a.id="nav-bar";a.className="pagespeed-sub-tabs";a.innerHTML='<tr><td><a id="'+Mb+'" href="javascript:void(0);">Per application cache stats</a> - </td><td><a id="'+Nb+'" href="javascript:void(0);">Per type cache stats</a> - </td><td><a id="'+Ob+'" href="javascript:void(0);">IPRO status</a> - </td><td><a id="'+
Pb+'" href="javascript:void(0);">Image rewriting</a> - </td><td><a id="'+Qb+'" href="javascript:void(0);">Realtime</a></td></tr>';b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border=1 style="border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+(this.f?"checked":"")+"></td></tr></table>";document.body.insertBefore(b,document.getElementById(U));document.body.insertBefore(a,
document.getElementById("ui-div"))}S.prototype.i=function(a){for(var b in T){var c=T[b];document.getElementById(c).className=c==a?"":"pagespeed-hidden-offscreen"}c=document.getElementById(a+"_mode");for(b in Rb){var d=document.getElementById(Rb[b]);d.className=d==c?"pagespeed-underline-link":""}location.href=location.href.split("#")[0]+"#"+a};S.prototype.s=function(){var a=location.hash.substr(1);if(""==a)this.i(U);else{var b;a:{b=T;for(var c in b)if(b[c]==a){b=!0;break a}b=!1}b&&this.i(a)}};
var Mb="cache_applied_mode",Nb="cache_type_mode",Ob="ipro_mode",Pb="image_rewriting_mode",Qb="realtime_mode",Rb={P:Mb,R:Nb,W:Ob,Y:Pb,X:Qb},U="cache_applied",T={P:U,R:"cache_type",W:"ipro",Y:"image_rewriting",X:"realtime"};S.prototype.A=function(){this.f=!this.f};
S.prototype.j=function(){if(!this.b.c)if(!this.o){this.o=!0;var a=new Date,b;b="?json&start_time="+(new Date(a-864E5)).getTime();b+="&end_time="+a.getTime();this.b.send(b+"&granularity=5000")}else if(!this.l||this.f)this.l=!0,a=location.pathname,b=a.lastIndexOf("/",a.length-2),this.b.send(0<b?a.substring(0,b)+"/stats_json":a+"/stats_json")};
S.prototype.u=function(){if(Lb(this.b)){var a;var b=this.b;try{a=b.c?b.c.responseText:""}catch(c){O(b.h,"Can not get responseText: "+c.message),a=""}if(this.l){var d=JSON.parse(a).variables;a=[];for(var e in d)a.push({name:e,value:d[e]});this.a.push({G:a,L:new Date});17280<this.a.length&&this.a.shift();V(this,"pcache-cohorts-dom","Property cache dom cohorts",U);V(this,"pcache-cohorts-beacon","Property cache beacon cohorts",U);V(this,"rewrite_cached_output","Rewrite cached output",U);V(this,"url_input",
"URL Input",U);V(this,"cache","Cache","cache_type");V(this,"file_cache","File Cache","cache_type");V(this,"memcached","Memcached","cache_type");V(this,"lru_cache","LRU","cache_type");V(this,"shm_cache","Shared Memory","cache_type");V(this,"ipro","In place resource optimization","ipro");V(this,"image_rewrite","Image rewrite","image_rewriting");V(this,"image_rewrites_dropped","Image rewrites dropped","image_rewriting");W(this,"http","Http");W(this,"file_cache","File Cache RT");W(this,"lru_cache","LRU Cache RT");
W(this,"serf_fetch","Serf stats RT");W(this,"rewrite","Rewrite stats RT")}else{a=JSON.parse(a);e=a.timestamps;a=a.variables;for(b=0;b<e.length;++b){var f=[];for(d in a)f.push({name:d,value:a[d][b]});this.a.push({G:f,L:new Date(e[b])})}window.setTimeout(q(this.j,this),0)}}else d=this.b,console.log(n(d.a)?d.a:String(d.a))};
function Sb(a,b){var c=!0;0!=b.indexOf(a)?c=!1:0<=b.indexOf("cache_flush_timestamp_ms")?c=!1:0<=b.indexOf("cache_flush_count")?c=!1:0<=b.indexOf("cache_time_us")&&(c=!1);return c}
function Tb(a,b,c,d,e){if(a.g[c])d=a.g[c];else{e=document.getElementById(e);"Loading Charts..."==e.textContent&&(e.textContent="");var f=document.createElement("div");"AnnotatedTimeLine"==d&&(f.className="pagespeed-graphs-chart");f.id=b;b=document.createElement("p");b.textContent=c;b.className="pagespeed-graphs-title";e.appendChild(b);e.appendChild(f);d=new google.visualization[d](f);a.g[c]=d}return d}
function V(a,b,c,d){var e="pagespeed-graphs-"+b;b+="_";c=Tb(a,e,c,"BarChart",d);e=document.getElementById(e);d=[];for(var f=new google.visualization.DataTable,g=Ia(a.a[a.a.length-1].G),h=a=0;h<g.length;++h)if(Sb(b,g[h].name)){++a;var l=g[h].name.substring(b.length),l=l.replace(/_/g," ");d.push([l,Number(g[h].value)])}f.addColumn("string","Name");f.addColumn("number","Value");f.addRows(d);b=new google.visualization.DataView(f);b.setColumns([0,1,{calc:function(a,b){for(var c=0,d=0;d<a.getNumberOfRows();++d)c+=
a.getValue(d,1);d=a.getValue(b,1);return d.toString()+" ("+(100*d/(0==c?1:c)).toFixed(2).toString()+"%)"},type:"string",role:"annotation"}]);a=40*a+10;e.style.height=a+20;c.draw(b,{annotations:{alwaysOutside:!0,highContrast:!0,textStyle:{fontSize:12,color:"black"}},hAxis:{direction:1},vAxis:{textPosition:"out"},legend:{position:"none"},width:800,height:a,chartArea:{left:225,top:0,width:"60%",height:"80%"}})}
function W(a,b,c){var d=b+"_";b=Tb(a,"pagespeed-graphs-"+b,c,"AnnotatedTimeLine","realtime");c=[];var e=new google.visualization.DataTable;e.addColumn("datetime","Time");for(var f=!0,g=0;g<a.a.length;++g){var h=Ia(a.a[g].G),l=[];l.push(a.a[g].L);for(var A=0;A<h.length;++A)if(Sb(d,h[A].name)&&(l.push(Number(h[A].value)),f)){var v=h[A].name.substring(d.length),v=v.replace(/_/g," ");e.addColumn("number",v)}f=!1;c.push(l)}e.addRows(c);b.draw(e,Ub)}var Ub={thickness:1,displayExactValues:!0,legendPosition:"newRow"};
function Vb(){J(window,"load",function(){var a=new S;a.s();for(var b in T)J(document.getElementById(Rb[b]),"click",q(a.i,a,T[b]));J(window,"hashchange",q(a.s,a));J(document.getElementById("auto-refresh"),"change",q(a.A,a));J(a.b,"complete",q(a.u,a));setInterval(q(a.j,a),5E3);a.j()})}var X=["pagespeed","Graphs","Start"],Y=k;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Vb?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Vb;})();
