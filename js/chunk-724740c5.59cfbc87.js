(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724740c5"],{"025a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"各大电商平台购物券",fixed:"true","left-text":"返回","right-text":"分享链接","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("iframe",{staticStyle:{"margin-top":"50px",border:"0px","padding-bottom":"30px"},attrs:{src:"http://www.tzbridge.cn/mall/?sign=1qCb3",width:t.width,height:t.height}})],1)},i=[],c=(n("28a5"),n("a481"),{name:"Mall",components:{},data:function(){return{videoEle:null,width:"500px",height:"800px"}},created:function(){this.width=window.innerWidth-10,this.height=window.innerHeight-80},methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){var t=window.location.href.replace("?from=singlemessage",""),e=t.split("#")[0]+"html/redirect.html?appRedirect="+encodeURIComponent(t);this.$copyText(e).then((function(t){Dialog.alert({title:"",message:"链接复制成功"}).then((function(){})),console.log(t)}),(function(t){alert("Can not copy"),console.log(t)}))}}}),o=c,a=n("2877"),l=Object(a["a"])(o,r,i,!1,null,"0cf573fc",null);e["default"]=l.exports},"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,o,a=String(i(e)),l=r(n),u=a.length;return l<0||l>=u?t?"":void 0:(c=a.charCodeAt(l),c<55296||c>56319||l+1===u||(o=a.charCodeAt(l+1))<56320||o>57343?t?a.charAt(l):c:t?a.slice(l,l+2):o-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),c=n("79e5"),o=n("be13"),a=n("2b4c"),l=n("520a"),u=a("species"),s=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=a(t),p=!c((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=p?!c((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[h](""),!e})):void 0;if(!p||!v||"replace"===t&&!s||"split"===t&&!f){var d=/./[h],g=n(o,h,""[t],(function(t,e,n,r,i){return e.exec===l?p&&!i?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),x=g[0],b=g[1];r(String.prototype,t,x),i(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),c=n("ebd6"),o=n("0390"),a=n("9def"),l=n("5f1b"),u=n("520a"),s=n("79e5"),f=Math.min,h=[].push,p="split",v="length",d="lastIndex",g=4294967295,x=!s((function(){RegExp(g,"y")}));n("214f")("split",2,(function(t,e,n,s){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[v]||2!="ab"[p](/(?:ab)*/)[v]||4!="."[p](/(.?)(.?)/)[v]||"."[p](/()()/)[v]>1||""[p](/.?/)[v]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var c,o,a,l=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===e?g:e>>>0,x=new RegExp(t.source,s+"g");while(c=u.call(x,i)){if(o=x[d],o>f&&(l.push(i.slice(f,c.index)),c[v]>1&&c.index<i[v]&&h.apply(l,c.slice(1)),a=c[0][v],f=o,l[v]>=p))break;x[d]===c.index&&x[d]++}return f===i[v]?!a&&x.test("")||l.push(""):l.push(i.slice(f)),l[v]>p?l.slice(0,p):l}:"0"[p](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):b.call(String(i),n,r)},function(t,e){var r=s(b,t,this,e,b!==n);if(r.done)return r.value;var u=i(t),h=String(this),p=c(u,RegExp),v=u.unicode,d=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(x?"y":"g"),w=new p(x?u:"^(?:"+u.source+")",d),m=void 0===e?g:e>>>0;if(0===m)return[];if(0===h.length)return null===l(w,h)?[h]:[];var y=0,k=0,E=[];while(k<h.length){w.lastIndex=x?k:0;var R,S=l(w,x?h:h.slice(k));if(null===S||(R=f(a(w.lastIndex+(x?0:k)),h.length))===y)k=o(h,k,v);else{if(E.push(h.slice(y,k)),E.length===m)return E;for(var C=1;C<=S.length-1;C++)if(E.push(S[C]),E.length===m)return E;k=y=R}}return E.push(h.slice(y)),E}]}))},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,o=i,a="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],s=l||u;s&&(o=function(t){var e,n,o,s,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),l&&(e=f[a]),o=i.call(f,t),l&&o&&(f[a]=f.global?o.index+o[0].length:e),u&&o&&o.length>1&&c.call(o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),c=n("9def"),o=n("4588"),a=n("0390"),l=n("5f1b"),u=Math.max,s=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,d){return[function(r,i){var c=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,c,i):n.call(String(c),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),h=String(this),p="function"===typeof e;p||(e=String(e));var x=f.global;if(x){var b=f.unicode;f.lastIndex=0}var w=[];while(1){var m=l(f,h);if(null===m)break;if(w.push(m),!x)break;var y=String(m[0]);""===y&&(f.lastIndex=a(h,c(f.lastIndex),b))}for(var k="",E=0,R=0;R<w.length;R++){m=w[R];for(var S=String(m[0]),C=u(s(o(m.index),h.length),0),$=[],I=1;I<m.length;I++)$.push(v(m[I]));var A=m.groups;if(p){var M=[S].concat($,C,h);void 0!==A&&M.push(A);var j=String(e.apply(void 0,M))}else j=g(S,h,C,$,A,e);C>=E&&(k+=h.slice(E,C)+j,E=C+S.length)}return k+h.slice(E)}];function g(t,e,r,c,o,a){var l=r+t.length,u=c.length,s=p;return void 0!==o&&(o=i(o),s=h),n.call(a,s,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":a=o[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>u){var h=f(s/10);return 0===h?n:h<=u?void 0===c[h-1]?i.charAt(1):c[h-1]+i.charAt(1):n}a=c[s-1]}return void 0===a?"":a}))}}))},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),c=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);