/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.38
*/
(function(e){if(void 0===e.fn.inputmask){var P=function(b){var e=document.createElement("input");b="on"+b;var c=b in e;c||(e.setAttribute(b,"return;"),c="function"==typeof e[b]);return c},C=function(b,d,c){return(b=c.aliases[b])?(b.alias&&C(b.alias,void 0,c),e.extend(!0,c,b),e.extend(!0,c,d),!0):!1},G=function(b){function d(c){function e(c,b,d,m){this.matches=[];this.isGroup=c||!1;this.isOptional=b||!1;this.isQuantifier=d||!1;this.isAlternator=m||!1;this.quantifier={min:1,max:1}}function d(c,e,m){var k=
b.definitions[e],S=0==c.matches.length;m=void 0!=m?m:c.matches.length;if(k&&!u){for(var f=k.prevalidator,s=f?f.length:0,w=1;w<k.cardinality;w++){var r=s>=w?f[w-1]:[],x=r.validator,r=r.cardinality;c.matches.splice(m++,0,{fn:x?"string"==typeof x?RegExp(x):new function(){this.test=x}:/./,cardinality:r?r:1,optionality:c.isOptional,newBlockMarker:S,casing:k.casing,def:k.definitionSymbol||e})}c.matches.splice(m++,0,{fn:k.validator?"string"==typeof k.validator?RegExp(k.validator):new function(){this.test=
k.validator}:/./,cardinality:k.cardinality,optionality:c.isOptional,newBlockMarker:S,casing:k.casing,def:k.definitionSymbol||e})}else c.matches.splice(m++,0,{fn:null,cardinality:0,optionality:c.isOptional,newBlockMarker:S,casing:null,def:e}),u=!1}for(var r=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,u=!1,x=new e,f,s=[],m=[];f=r.exec(c);)switch(f=f[0],f.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:var v=s.pop();0<s.length?s[s.length-1].matches.push(v):x.matches.push(v);
break;case b.optionalmarker.start:s.push(new e(!1,!0));break;case b.groupmarker.start:s.push(new e(!0));break;case b.quantifiermarker.start:v=new e(!1,!1,!0);f=f.replace(/[{}]/g,"");var A=f.split(",");f=isNaN(A[0])?A[0]:parseInt(A[0]);A=1==A.length?f:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"==A||"+"==A)f="*"==A?0:1;v.quantifier={min:f,max:A};if(0<s.length){A=s[s.length-1].matches;f=A.pop();if(!f.isGroup){var t=new e(!0);t.matches.push(f);f=t}A.push(f);A.push(v)}else f=x.matches.pop(),f.isGroup||(t=new e(!0),
t.matches.push(f),f=t),x.matches.push(f),x.matches.push(v);break;case b.escapeChar:u=!0;break;case b.alternatormarker:break;default:0<s.length?d(s[s.length-1],f):(0<x.matches.length&&(v=x.matches[x.matches.length-1],v.isGroup&&(v.isGroup=!1,d(v,b.groupmarker.start,0),d(v,b.groupmarker.end))),d(x,f))}0<x.matches.length&&(v=x.matches[x.matches.length-1],v.isGroup&&(v.isGroup=!1,d(v,b.groupmarker.start,0),d(v,b.groupmarker.end)),m.push(x));return m}function c(c,w){if(b.numericInput&&!0!==b.multi){c=
c.split("").reverse();for(var k=0;k<c.length;k++)c[k]==b.optionalmarker.start?c[k]=b.optionalmarker.end:c[k]==b.optionalmarker.end?c[k]=b.optionalmarker.start:c[k]==b.groupmarker.start?c[k]=b.groupmarker.end:c[k]==b.groupmarker.end&&(c[k]=b.groupmarker.start);c=c.join("")}if(void 0!=c&&""!=c){if(0<b.repeat||"*"==b.repeat||"+"==b.repeat)c=b.groupmarker.start+c+b.groupmarker.end+b.quantifiermarker.start+("*"==b.repeat?0:"+"==b.repeat?1:b.repeat)+","+b.repeat+b.quantifiermarker.end;void 0==e.inputmask.masksCache[c]&&
(e.inputmask.masksCache[c]={mask:c,maskToken:d(c),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:w});return e.extend(!0,{},e.inputmask.masksCache[c])}}var u=[];e.isFunction(b.mask)&&(b.mask=b.mask.call(this,b));e.isArray(b.mask)?e.each(b.mask,function(e,b){void 0!=b.mask?u.push(c(b.mask.toString(),b)):u.push(c(b.toString()))}):(1==b.mask.length&&!1==b.greedy&&0!=b.repeat&&(b.placeholder=""),u=void 0!=b.mask.mask?c(b.mask.mask.toString(),b.mask):c(b.mask.toString()));return u},ea=
"function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),t=navigator.userAgent,fa=null!==t.match(/iphone/i),ga=null!==t.match(/android.*safari.*/i),ha=null!==t.match(/android.*chrome.*/i),ia=null!==t.match(/android.*firefox.*/i),ja=/Kindle/i.test(t)||/Silk/i.test(t)||/KFTT/i.test(t)||/KFOT/i.test(t)||/KFJWA/i.test(t)||/KFJWI/i.test(t)||/KFSOWI/i.test(t)||/KFTHWA/i.test(t)||/KFTHWI/i.test(t)||/KFAPWA/i.test(t)||/KFAPWI/i.test(t),
T=P("paste")?"paste":P("input")?"input":"propertychange",D=function(b,d,c){function u(a,g,p){g=g||0;var e=[],b,h=0,q;do{if(!0===a&&d.validPositions[h]){var m=d.validPositions[h];q=m.match;b=m.locator.slice();e.push(null==q.fn?q.def:!0===p?m.input:c.placeholder.charAt(h%c.placeholder.length))}else b=g>h?f(h,b,h-1)[0]:r(h,b,h-1),q=b.match,b=b.locator.slice(),e.push(null==q.fn?q.def:c.placeholder.charAt(h%c.placeholder.length));h++}while((void 0==I||h-1<I)&&null!=q.fn||null==q.fn&&""!=q.def||g>=h);e.pop();
return e}function t(a){var c=d;c.buffer=void 0;c.tests={};!0!==a&&(c._buffer=void 0,c.validPositions={},c.p=-1)}function w(a){var g=d,p=-1,b=g.validPositions;if(e.isFunction(c.getLastValidPosition))p=c.getLastValidPosition.call(n,g,a,c);else{void 0==a&&(a=-1);var g=p,l;for(l in b){var h=parseInt(l);if(-1==a||null!=b[h].match.fn)h<a&&(g=h),h>=a&&(p=h)}p=1<a-g||p<a?g:p}return p}function k(a,g,p){if(c.insertMode&&void 0!=d.validPositions[a]&&void 0==p){p=e.extend(!0,{},d.validPositions);var b=w(),l;
for(l=a;l<=b;l++)delete d.validPositions[l];d.validPositions[a]=g;g=!0;for(l=a;l<=b;l++){a=p[l];if(void 0!=a){var h=null==a.match.fn?l+1:E(l);g=x(h,a.match.def)?g&&!1!==C(h,a.input,!0,!0):!1}if(!g)break}if(!g)return d.validPositions=e.extend(!0,{},p),!1}else d.validPositions[a]=g;return!0}function r(a,g,p){a=f(a,g,p);var b;for(g=0;g<a.length&&(b=a[g],!c.greedy&&(!b.match||!1!==b.match.optionality&&!1!==b.match.newBlockMarker||!0===b.match.optionalQuantifier));g++);return b}function X(a){return d.validPositions[a]?
d.validPositions[a].match:f(a)[0].match}function x(a,c){for(var p=!1,b=f(a),e=0;e<b.length;e++)if(b[e].match&&b[e].match.def==c){p=!0;break}return p}function f(a,g,p){function b(g,p,d,l){function k(d,l,f){if(h==a&&void 0==d.matches)return q.push({match:d,locator:l.reverse()}),!0;if(void 0!=d.matches)if(d.isGroup&&!0!==f){if(d=k(g.matches[n+1],l))return!0}else if(d.isOptional){var J=d;if(d=b(d,p,l,f))d=q[q.length-1].match,(d=0==e.inArray(d,J.matches))&&(m=!0),h=a}else{if(!d.isAlternator)if(d.isQuantifier&&
!0!==f)for(J=d,c.greedy=c.greedy&&isFinite(J.quantifier.max),f=0<p.length&&!0!==f?p.shift():0;f<(isNaN(J.quantifier.max)?f+1:J.quantifier.max)&&h<=a;f++){var s=g.matches[e.inArray(J,g.matches)-1];if(d=k(s,[f].concat(l),!0))if(d=q[q.length-1].match,d.optionalQuantifier=f>J.quantifier.min-1,d=0==e.inArray(d,s.matches))if(f>J.quantifier.min-1){m=!0;h=a;break}else return!0;else return!0}else if(d=b(d,p,l,f))return!0}else h++}for(var n=0<p.length?p.shift():0;n<g.matches.length;n++)if(!0!==g.matches[n].isQuantifier){var f=
k(g.matches[n],[n].concat(d),l);if(f&&h==a)return f;if(h>a)break}}var l=d.maskToken,h=g?p:0;p=g||[0];var q=[],m=!1;if(void 0==g){g=a-1;for(var k;void 0==(k=d.validPositions[g])&&-1<g;)g--;if(void 0!=k&&-1<g)h=g,p=k.locator.slice();else{for(g=a-1;void 0==(k=d.tests[g])&&-1<g;)g--;void 0!=k&&-1<g&&(h=g,p=k[0].locator.slice())}}for(g=p.shift();g<l.length&&!(b(l[g],p,[g])&&h==a||h>a);g++);(0==q.length||m)&&q.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return d.tests[a]=
q}function s(){void 0==d._buffer&&(d._buffer=u(!1,1));return d._buffer}function m(){void 0==d.buffer&&(d.buffer=u(!0,w(),!0));return d.buffer}function v(a,g){for(var p=m().slice(),b=a;b<g;b++)p[b]!=c.skipOptionalPartCharacter&&C(b,p[b],!0,!0)}function A(a,c){switch(c.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function C(a,g,p,b){function l(a,g,p,b){var h=!1;e.each(f(a),function(l,y){for(var q=y.match,n=g?1:0,f="",s=m(),r=q.cardinality;r>n;r--)f+=void 0==d.validPositions[a-
(r-1)]?R(a-(r-1)):d.validPositions[a-(r-1)].input;g&&(f+=g);h=null!=q.fn?q.fn.test(f,s,a,p,c):g!=q.def&&g!=c.skipOptionalPartCharacter||""==q.def?!1:{c:q.def,pos:a};if(!1!==h){n=void 0!=h.c?h.c:g;n=n==c.skipOptionalPartCharacter&&null===q.fn?q.def:n;f=a;if(h.refreshFromBuffer){f=h.refreshFromBuffer;p=!0;!0===f?(d.validPositions={},d.tests={},v(0,m().length)):v(f.start,f.end);if(void 0==h.pos&&void 0==h.c)return h.pos=w(),!1;f=void 0!=h.pos?h.pos:a;if(f!=a)return h=C(f,n,!0),!1}else if(!0!==h&&h.pos!=
a&&(f=h.pos,v(a,f),f!=a))return h=C(f,n,!0),!1;0<l&&t(!0);k(f,e.extend({},y,{input:A(n,q)}),b)||(h=!1);return!1}});return h}p=!0===p;if(a>=M())return!1;var h=l(a,g,p,b);if(!p&&!1===h){var q=d.validPositions[a];if(q&&null==q.match.fn&&(q.match.def==g||g==c.skipOptionalPartCharacter))h={caret:E(a)};else if((c.insertMode||void 0==d.validPositions[E(a)])&&!D(a))for(var q=a+1,n=E(a);q<=n;q++)if(h=l(q,g,p,b),!1!==h){a=q;break}}!0===h&&(h={pos:a});return h}function D(a){a=X(a);return null!=a.fn?a.fn:!1}
function M(){var a;I=n.prop("maxLength");-1==I&&(I=void 0);if(!1==c.greedy){var g;g=w();a=d.validPositions[g];var p=void 0!=a?a.locator.slice():void 0;for(g+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;g++)a=r(g,p,g-1),p=a.locator.slice();a=g}else a=m().length;return void 0==I||a<I?a:I}function E(a){var g=M();if(a>=g)return g;for(;++a<g&&!D(a)&&(!0!==c.nojumps||c.nojumpsThreshold>a););return a}function G(a){if(0>=a)return 0;for(;0<--a&&!D(a););return a}function F(a,c,p){a._valueSet(c.join(""));
void 0!=p&&z(a,p)}function R(a,g){g=g||X(a);return null==g.fn?g.def:c.placeholder.charAt(a%c.placeholder.length)}function N(a,c,p,b,l){b=void 0!=b?b.slice():da(a._valueGet()).split("");t();c&&a._valueSet("");e.each(b,function(c,g){if(!0===l){var b=d.p,b=-1==b?b:G(b),y=-1==b?c:E(b);-1==e.inArray(g,s().slice(b+1,y))&&U.call(a,void 0,!0,g.charCodeAt(0),!1,p,c)}else U.call(a,void 0,!0,g.charCodeAt(0),!1,p,c),p=p||0<c&&c>d.p});c&&F(a,m(),e(a).is(":focus")?E(w(0)):void 0)}function P(a){return e.inputmask.escapeRegex.call(this,
a)}function da(a){return a.replace(RegExp("("+P(s().join(""))+")*$"),"")}function Y(a,g){if(!a.data("_inputmask")||!0!==g&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var b=[],y=d.validPositions,l;for(l in y)y[l].match&&null!=y[l].match.fn&&b.push(y[l].input);b=(B?b.reverse():b).join("");y=(B?m().reverse():m()).join("");return e.isFunction(c.onUnMask)?c.onUnMask.call(a,y,b,c):b}function L(a){!B||"number"!=typeof a||c.greedy&&""==c.placeholder||(a=m().length-a);return a}function z(a,g,b){a=
a.jquery&&0<a.length?a[0]:a;if("number"==typeof g){g=L(g);b=L(b);b="number"==typeof b?b:g;var d=e(a).data("_inputmask")||{};d.caret={begin:g,end:b};e(a).data("_inputmask",d);e(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==c.insertMode&&g==b&&b++,a.setSelectionRange?(a.selectionStart=g,a.selectionEnd=b):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",b),a.moveStart("character",g),a.select()))}else return d=e(a).data("_inputmask"),!e(a).is(":visible")&&d&&void 0!=
d.caret?(g=d.caret.begin,b=d.caret.end):a.setSelectionRange?(g=a.selectionStart,b=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),g=0-a.duplicate().moveStart("character",-1E5),b=g+a.text.length),g=L(g),b=L(b),{begin:g,end:b}}function Z(a){var c=m(),b=c.length,y,l=w(),h={},q=void 0!=d.validPositions[l]?d.validPositions[l].locator.slice():void 0,f;for(y=l+1;y<c.length;y++)f=r(y,q,y-1),q=f.locator.slice(),h[y]=e.extend(!0,{},f);for(y=b-1;y>l;y--)if(f=
h[y].match,(f.optionality||f.optionalQuantifier)&&c[y]==R(y,f))b--;else break;return a?{l:b,def:h[b]?h[b].match:void 0}:b}function V(a){var c=m().slice(),b=Z();c.length=b;F(a,c)}function O(a){if(e.isFunction(c.isComplete))return c.isComplete.call(n,a,c);if("*"!=c.repeat){var b=!1,d=Z(!0),f=G(d.l);if(w()==f&&(void 0==d.def||d.def.newBlockMarker||d.def.optionalQuantifier))for(b=!0,d=0;d<=f;d++){var l=D(d);if(l&&(void 0==a[d]||a[d]==R(d))||!l&&a[d]!=R(d)){b=!1;break}}return b}}function ka(a){a=e._data(a).events;
e.each(a,function(a,c){e.each(c,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var b=c.handler;c.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return b.apply(this,arguments)}}})})}function la(a){function c(a){if(void 0==e.valHooks[a]||!0!=e.valHooks[a].inputmaskpatch){var b=e.valHooks[a]&&e.valHooks[a].get?e.valHooks[a].get:function(a){return a.value},g=e.valHooks[a]&&e.valHooks[a].set?e.valHooks[a].set:function(a,c){a.value=c;return a};e.valHooks[a]={get:function(a){var c=
e(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=b(a);c=(c=c.data("_inputmask").maskset._buffer)?c.join(""):"";return a!=c?a:""}return b(a)},set:function(a,c){var b=e(a),d=g(a,c);b.data("_inputmask")&&b.triggerHandler("setvalue.inputmask");return d},inputmaskpatch:!0}}}var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get){if(!a._valueGet){var d=b.get,l=b.set;a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):
d.call(this)};a._valueSet=function(a){l.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=e(this),c=e(this).data("_inputmask");return c?c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=s().join("")?d.call(this):"":d.call(this)},set:function(a){l.call(this,a);e(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(d=a.__lookupGetter__("value"),l=a.__lookupSetter__("value"),
a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){l.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=e(this),c=e(this).data("_inputmask");return c?c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=s().join("")?d.call(this):"":d.call(this)}),a.__defineSetter__("value",function(a){l.call(this,a);e(this).triggerHandler("setvalue.inputmask")})):(a._valueGet||(a._valueGet=function(){return B?
this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),c(a.type))}function $(a,b,e){if(c.numericInput||B){switch(b){case c.keyCode.BACKSPACE:b=c.keyCode.DELETE;break;case c.keyCode.DELETE:b=c.keyCode.BACKSPACE}B&&(a=e.end,e.end=e.begin,e.begin=a)}e.begin==e.end?b==c.keyCode.BACKSPACE?e.begin=G(e.begin):b==c.keyCode.DELETE&&e.end++:1!=e.end-e.begin||c.insertMode||b==c.keyCode.BACKSPACE&&e.begin--;a=e.begin;var f=e.end;for(b=a;a<f;a++)delete d.validPositions[a];
for(a=f;a<=w();){var f=d.validPositions[a],l=d.validPositions[b];void 0!=f&&void 0==l?(x(b,f.match.def)&&!1!==C(b,f.input,!0)&&(delete d.validPositions[a],a++),b++):a++}for(b=w();0<b&&(void 0==d.validPositions[b]||null==d.validPositions[b].match.fn);)delete d.validPositions[b],b--;t(!0);b=E(-1);w()<b?d.p=b:d.p=e.begin}function aa(a){W=!1;var b=this,p=e(b),f=a.keyCode,l=z(b);f==c.keyCode.BACKSPACE||f==c.keyCode.DELETE||fa&&127==f||a.ctrlKey&&88==f?(a.preventDefault(),88==f&&(H=m().join("")),$(b,f,
l),F(b,m(),d.p),b._valueGet()==s().join("")&&p.trigger("cleared"),c.showTooltip&&p.prop("title",d.mask)):f==c.keyCode.END||f==c.keyCode.PAGE_DOWN?setTimeout(function(){var d=E(w());c.insertMode||d!=M()||a.shiftKey||d--;z(b,a.shiftKey?l.begin:d,d)},0):f==c.keyCode.HOME&&!a.shiftKey||f==c.keyCode.PAGE_UP?z(b,0,a.shiftKey?l.begin:0):f==c.keyCode.ESCAPE||90==f&&a.ctrlKey?(N(b,!0,!1,H.split("")),p.click()):f!=c.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=c.insertMode||a.shiftKey||(f==c.keyCode.RIGHT?setTimeout(function(){var a=
z(b);z(b,a.begin)},0):f==c.keyCode.LEFT&&setTimeout(function(){var a=z(b);z(b,a.begin-1)},0)):(c.insertMode=!c.insertMode,z(b,c.insertMode||l.begin!=M()?l.begin:l.begin-1));var p=z(b),h=c.onKeyDown.call(this,a,m(),c);h&&!0===h.refreshFromBuffer&&(d.validPositions={},d.tests={},v(0,m().length),t(!0),F(b,m()),z(b,p.begin,p.end));ba=-1!=e.inArray(f,c.ignorables)}function U(a,b,f,n,l,h){if(void 0==f&&W)return!1;W=!0;var q=e(this);a=a||window.event;f=b?f:a.which||a.charCode||a.keyCode;if(!(!0===b||a.ctrlKey&&
a.altKey)&&(a.ctrlKey||a.metaKey||ba))return!0;if(f){!0!==b&&46==f&&!1==a.shiftKey&&","==c.radixPoint&&(f=44);var s;f=String.fromCharCode(f);b?(h=l?h:w()+1,h={begin:h,end:h}):h=z(this);var x=B?1<h.begin-h.end||1==h.begin-h.end&&c.insertMode:1<h.end-h.begin||1==h.end-h.begin&&c.insertMode;x&&(d.undoPositions=e.extend(!0,{},d.validPositions),$(this,c.keyCode.DELETE,h),c.insertMode||(c.insertMode=!c.insertMode,k(h.begin,l),c.insertMode=!c.insertMode),x=!c.multi);d.writeOutBuffer=!0;var v=h.begin,u=C(v,
f,l);!1!==u&&(!0!==u&&(v=void 0!=u.pos?u.pos:v,f=void 0!=u.c?u.c:f),t(!0),void 0!=u.caret?s=u.caret:(l=d.validPositions,s=void 0!=l[v+1]&&r(h+1,l[v].locator.slice(),v).match.def!=l[v+1].match.def?v+1:E(v)),d.p=s);if(!1!==n){var A=this;setTimeout(function(){c.onKeyValidation.call(A,u,c)},0);if(d.writeOutBuffer&&!1!==u){var D=m();F(this,D,b?void 0:c.numericInput?G(s):s);!0!==b&&setTimeout(function(){!0===O(D)&&q.trigger("complete");Q=!0;q.trigger("input")},0)}else x&&(d.buffer=void 0,d.validPositions=
d.undoPositions)}else x&&(d.buffer=void 0,d.validPositions=d.undoPositions);c.showTooltip&&q.prop("title",d.mask);a&&!0!=b&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}}function ma(a){var b=e(this),f=a.keyCode,k=m();(a=c.onKeyUp.call(this,a,k,c))&&!0===a.refreshFromBuffer&&(d.validPositions={},d.tests={},v(0,m().length),t(!0),F(this,m()));f==c.keyCode.TAB&&c.showMaskOnFocus&&(b.hasClass("focus.inputmask")&&0==this._valueGet().length?(t(),k=m(),F(this,k),z(this,0),H=m().join("")):(F(this,
k),z(this,L(0),L(M()))))}function ca(a){if(!0===Q&&"input"==a.type)return Q=!1,!0;var b=this,d=e(b);if("propertychange"==a.type&&b._valueGet().length<=M())return!0;setTimeout(function(){var a=e.isFunction(c.onBeforePaste)?c.onBeforePaste.call(b,b._valueGet(),c):b._valueGet();N(b,!0,!1,a.split(""),!0);!0===O(m())&&d.trigger("complete");d.click()},0)}function na(a){if(!0===Q&&"input"==a.type)return Q=!1,!0;var b=z(this),d=this._valueGet(),d=d.replace(RegExp("("+P(s().join(""))+")*"),"");b.begin>d.length&&
(z(this,d.length),b=z(this));1!=m().length-d.length||d.charAt(b.begin)==m()[b.begin]||d.charAt(b.begin+1)==m()[b.begin]||D(b.begin)||(a.keyCode=c.keyCode.BACKSPACE,aa.call(this,a));a.preventDefault()}function oa(a){n=e(a);if(n.is(":input")&&"number"!=n.attr("type")){n.data("_inputmask",{maskset:d,opts:c,isRTL:!1});c.showTooltip&&n.prop("title",d.mask);la(a);("rtl"==a.dir||c.rightAlign)&&n.css("text-align","right");if("rtl"==a.dir||c.numericInput){a.dir="ltr";n.removeAttr("dir");var b=n.data("_inputmask");
b.isRTL=!0;n.data("_inputmask",b);B=!0}n.unbind(".inputmask");n.removeClass("focus.inputmask");n.closest("form").bind("submit",function(){H!=m().join("")&&n.change()}).bind("reset",function(){setTimeout(function(){n.trigger("setvalue")},0)});n.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus.inputmask")&&c.showMaskOnHover&&this._valueGet()!=m().join("")&&F(this,m())}).bind("blur.inputmask",function(){var a=e(this);if(a.data("_inputmask")){var b=this._valueGet(),d=m();a.removeClass("focus.inputmask");
H!=m().join("")&&a.change();c.clearMaskOnLostFocus&&""!=b&&(b==s().join("")?this._valueSet(""):V(this));!1===O(d)&&(a.trigger("incomplete"),c.clearIncomplete&&(t(),c.clearMaskOnLostFocus?this._valueSet(""):(d=s().slice(),F(this,d))))}}).bind("focus.inputmask",function(){var a=e(this),b=this._valueGet();c.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!c.showMaskOnHover||c.showMaskOnHover&&""==b)&&this._valueGet()!=m().join("")&&F(this,m(),E(w()));a.addClass("focus.inputmask");H=m().join("")}).bind("mouseleave.inputmask",
function(){var a=e(this);c.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==s().join("")||""==this._valueGet()?this._valueSet(""):V(this)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=z(a);m();if(b.begin==b.end){var b=B?L(b.begin):b.begin,c=w(b),c=E(c);b<c?D(b)?z(a,b):z(a,E(b)):z(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){z(a,0,E(w()))},0)}).bind(T+".inputmask dragdrop.inputmask drop.inputmask",
ca).bind("setvalue.inputmask",function(){N(this,!0);H=m().join("");this._valueGet()==s().join("")&&this._valueSet("")}).bind("complete.inputmask",c.oncomplete).bind("incomplete.inputmask",c.onincomplete).bind("cleared.inputmask",c.oncleared);n.bind("keydown.inputmask",aa).bind("keypress.inputmask",U).bind("keyup.inputmask",ma);if(ga||ia||ha||ja)"input"==T&&n.unbind(T+".inputmask"),n.bind("input.inputmask",na);ea&&n.bind("input.inputmask",ca);b=e.isFunction(c.onBeforeMask)?c.onBeforeMask.call(a,a._valueGet(),
c):a._valueGet();N(a,!0,!1,b.split(""),!0);H=m().join("");var f;try{f=document.activeElement}catch(k){}f===a?(n.addClass("focus.inputmask"),z(a,E(w()))):(!1===O(m())&&c.clearIncomplete&&t(),c.clearMaskOnLostFocus?m().join("")==s().join("")?a._valueSet(""):V(a):F(a,m()));ka(a)}}var B=!1,H,n,W=!1,Q=!1,ba=!1,I;if(void 0!=b)switch(b.action){case "isComplete":return n=e(b.el),d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,O(b.buffer);case "unmaskedvalue":return n=b.$input,d=n.data("_inputmask").maskset,
c=n.data("_inputmask").opts,B=b.$input.data("_inputmask").isRTL,Y(b.$input,b.skipDatepickerCheck);case "mask":H=m().join("");oa(b.el);break;case "format":n=e({});n.data("_inputmask",{maskset:d,opts:c,isRTL:c.numericInput});c.numericInput&&(B=!0);var K=b.value.split("");N(n,!1,!1,B?K.reverse():K,!0);return B?m().reverse().join(""):m().join("");case "isValid":return n=e({}),n.data("_inputmask",{maskset:d,opts:c,isRTL:c.numericInput}),c.numericInput&&(B=!0),K=b.value.split(""),N(n,!1,!0,B?K.reverse():
K),O(m());case "getemptymask":return n=e(b.el),d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,s();case "remove":b=b.el;n=e(b);d=n.data("_inputmask").maskset;c=n.data("_inputmask").opts;b._valueSet(Y(n));n.unbind(".inputmask");n.removeClass("focus.inputmask");n.removeData("_inputmask");Object.getOwnPropertyDescriptor&&(K=Object.getOwnPropertyDescriptor(b,"value"));K&&K.get?b._valueGet&&Object.defineProperty(b,"value",{get:b._valueGet,set:b._valueSet}):document.__lookupGetter__&&b.__lookupGetter__("value")&&
b._valueGet&&(b.__defineGetter__("value",b._valueGet),b.__defineSetter__("value",b._valueSet));try{delete b._valueGet,delete b._valueSet}catch(pa){b._valueGet=void 0,b._valueSet=void 0}}};e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,
clearIncomplete:!1,aliases:{},alias:null,onKeyUp:e.noop,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,getLastValidPosition:void 0,rightAlign:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",
cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],
isComplete:void 0},masksCache:{},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(b,d){var c=e.extend(!0,{},e.inputmask.defaults,d);C(c.alias,d,c);return D({action:"format",value:b},G(c),c)},isValid:function(b,d){var c=e.extend(!0,{},e.inputmask.defaults,d);C(c.alias,d,c);return D({action:"isValid",value:b},G(c),c)}};e.fn.inputmask=function(b,d,c,u,t){function w(b,c){var d=e(b),k;for(k in c){var m=d.data("inputmask-"+
k.toLowerCase());void 0!=m&&(c[k]=m)}return c}c=c||D;u=u||"_inputmask";var k=e.extend(!0,{},e.inputmask.defaults,d),r;if("string"===typeof b)switch(b){case "mask":return C(k.alias,d,k),r=G(k),0==r.length?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(r)&&c===D?r[0]:r),w(this,k))});case "unmaskedvalue":return b=e(this),b.data(u)?c({action:"unmaskedvalue",$input:b}):b.val();case "remove":return this.each(function(){e(this).data(u)&&c({action:"remove",el:this})});case "getemptymask":return this.data(u)?
c({action:"getemptymask",el:this}):"";case "hasMaskedValue":return this.data(u)?!this.data(u).opts.autoUnmask:!1;case "isComplete":return this.data(u)?c({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case "getmetadata":if(this.data(u))return r=this.data(u).maskset,r.metadata;break;case "_detectScope":return C(k.alias,d,k),void 0==t||C(t,d,k)||-1!=e.inArray(t,"mask unmaskedvalue remove getemptymask hasMaskedValue isComplete getmetadata _detectScope".split(" "))||(k.mask=t),
e.isFunction(k.mask)&&(k.mask=k.mask.call(this,k)),e.isArray(k.mask);default:return C(b,d,k)||(k.mask=b),r=G(k),void 0==r?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(r)&&c===D?r[0]:r),w(this,k))})}else{if("object"==typeof b)return k=e.extend(!0,{},e.inputmask.defaults,b),C(k.alias,b,k),r=G(k),void 0==r?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(r)&&c===D?r[0]:r),w(this,k))});if(void 0==b)return this.each(function(){var b=e(this).attr("data-inputmask");
if(b&&""!=b)try{var b=b.replace(RegExp("'","g"),'"'),r=e.parseJSON("{"+b+"}");e.extend(!0,r,d);k=e.extend(!0,{},e.inputmask.defaults,r);C(k.alias,r,k);k.alias=void 0;e(this).inputmask("mask",k,c)}catch(f){}})}}}})(jQuery);
