!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/homepage/",n(n.s=325)}({0:function(e,t,n){"use strict";n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return r}));var r,o,u,l,c,_={},i=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var r,o=arguments,u={};for(r in t)"key"!==r&&"ref"!==r&&(u[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return p(e,u,t&&t.key,t&&t.ref)}function p(e,t,n,o){var u={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return r.vnode&&r.vnode(u),u}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function b(e,t){if(null==t)return e.__?b(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?b(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function y(e){(!e.__d&&(e.__d=!0)&&1===o.push(e)||l!==r.debounceRendering)&&((l=r.debounceRendering)||u)(g)}function g(){var e,t,n,r,u,l,c;for(o.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=o.pop();)e.__d&&(n=void 0,r=void 0,l=(u=(t=e).__v).__e,(c=t.__P)&&(n=[],r=N(c,u,s({},u),t.__n,void 0!==c.ownerSVGElement,null,n,null==l?b(u):l),S(n,u),r!=l&&m(u)))}function x(e,t,n,r,o,u,l,c,a){var s,d,p,h,v,m,y,g=n&&n.__k||i,x=g.length;if(c==_&&(c=null!=u?u[0]:x?b(n,0):null),s=0,t.__k=O(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=g[s])||p&&n.key==p.key&&n.type===p.type)g[s]=void 0;else for(d=0;d<x;d++){if((p=g[d])&&n.key==p.key&&n.type===p.type){g[d]=void 0;break}p=null}if(h=N(e,n,p=p||_,r,o,u,l,c,a),(d=n.ref)&&p.ref!=d&&(y||(y=[]),p.ref&&y.push(p.ref,null,n),y.push(d,n.__c||h,n)),null!=h){if(null==m&&(m=h),null!=n.__d)h=n.__d,n.__d=null;else if(u==p||h!=c||null==h.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(h);else{for(v=c,d=0;(v=v.nextSibling)&&d<x;d+=2)if(v==h)break e;e.insertBefore(h,c)}"option"==t.type&&(e.value="")}c=h.nextSibling,"function"==typeof t.type&&(t.__d=h)}}return s++,n})),t.__e=m,null!=u&&"function"!=typeof t.type)for(s=u.length;s--;)null!=u[s]&&f(u[s]);for(s=x;s--;)null!=g[s]&&C(g[s],g[s]);if(y)for(s=0;s<y.length;s++)E(y[s],y[++s],y[++s])}function O(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)O(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null):e):e);return n}function j(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===a.test(t)?n+"px":null==n?"":n}function k(e,t,n,r,o){var u,l,c,_,i;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(u=e.style,"string"==typeof n)u.cssText=n;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(l in r)n&&l in n||j(u,l,"");if(n)for(c in n)r&&n[c]===r[c]||j(u,c,n[c])}else"o"===t[0]&&"n"===t[1]?(_=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase(),t=(i in e?i:t).slice(2),n?(r||e.addEventListener(t,w,_),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,w,_)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function w(e){this.l[e.type](r.event?r.event(e):e)}function N(e,t,n,o,u,l,c,_,i){var a,f,d,p,b,m,y,g,j,k,w=t.type;if(void 0!==t.constructor)return null;(a=r.__b)&&a(t);try{e:if("function"==typeof w){if(g=t.props,j=(a=w.contextType)&&o[a.__c],k=a?j?j.props.value:a.__:o,n.__c?y=(f=t.__c=n.__c).__=f.__E:("prototype"in w&&w.prototype.render?t.__c=f=new w(g,k):(t.__c=f=new v(g,k),f.constructor=w,f.render=H),j&&j.sub(f),f.props=g,f.state||(f.state={}),f.context=k,f.__n=o,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=w.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,w.getDerivedStateFromProps(g,f.__s))),p=f.props,b=f.state,d)null==w.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==w.getDerivedStateFromProps&&g!==p&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,k),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,k)){for(f.props=g,f.state=f.__s,f.__d=!1,f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&c.push(f),a=0;a<t.__k.length;a++)t.__k[a]&&(t.__k[a].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,k),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(p,b,m)}))}f.context=k,f.props=g,f.state=f.__s,(a=r.__r)&&a(t),f.__d=!1,f.__v=t,f.__P=e,a=f.render(f.props,f.state,f.context),t.__k=O(null!=a&&a.type==h&&null==a.key?a.props.children:a),null!=f.getChildContext&&(o=s(s({},o),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(p,b)),x(e,t,n,o,u,l,c,_,i),f.base=t.__e,f.__h.length&&c.push(f),y&&(f.__E=f.__=null),f.__e=null}else t.__e=P(n.__e,t,n,o,u,l,c,i);(a=r.diffed)&&a(t)}catch(e){r.__e(e,t,n)}return t.__e}function S(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function P(e,t,n,r,o,u,l,c){var a,s,f,d,p,h=n.props,v=t.props;if(o="svg"===t.type||o,null==e&&null!=u)for(a=0;a<u.length;a++)if(null!=(s=u[a])&&(null===t.type?3===s.nodeType:s.localName===t.type)){e=s,u[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),u=null}if(null===t.type)null!=u&&(u[u.indexOf(e)]=null),h!==v&&(e.data=v);else if(t!==n){if(null!=u&&(u=i.slice.call(e.childNodes)),f=(h=n.props||_).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!c){if(h===_)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(d||f)&&(d&&f&&d.__html==f.__html||(e.innerHTML=d&&d.__html||""))}(function(e,t,n,r,o){var u;for(u in n)u in t||k(e,u,null,n[u],r);for(u in t)o&&"function"!=typeof t[u]||"value"===u||"checked"===u||n[u]===t[u]||k(e,u,t[u],n[u],r)})(e,v,h,o,c),t.__k=t.props.children,d||x(e,t,n,r,"foreignObject"!==t.type&&o,u,l,_,c),c||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function E(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function C(e,t,n){var o,u,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&E(o,null,t),n||"function"==typeof e.type||(n=null!=(u=e.__e)),e.__e=e.__d=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&C(o[l],t,n);null!=u&&f(u)}function H(e,t,n){return this.constructor(e,n)}function T(e,t,n){var o,u,l;r.__&&r.__(e,t),u=(o=n===c)?null:n&&n.__k||t.__k,e=d(h,null,[e]),l=[],N(t,(o?t:n||t).__k=e,u||_,_,void 0!==t.ownerSVGElement,n&&!o?[n]:u?null:i.slice.call(t.childNodes),l,n||_,o),S(l,e)}r={__e:function(e,t){for(var n;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return y(n.__E=n)}catch(t){e=t}throw e}},v.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&s(n,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),y(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},v.prototype.render=h,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=_},2:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return b}));var r,o,u,l=n(0),c=[],_=l.c.__r,i=l.c.diffed,a=l.c.__c,s=l.c.unmount;function f(e){l.c.__h&&l.c.__h(o);var t=o.__H||(o.__H={t:[],u:[]});return e>=t.t.length&&t.t.push({}),t.t[e]}function d(e){return function(e,t,n){var u=f(r++);return u.__c||(u.__c=o,u.i=[n?n(t):O(void 0,t),function(t){var n=e(u.i[0],t);u.i[0]!==n&&(u.i[0]=n,u.__c.setState({}))}]),u.i}(O,e)}function p(e,t){var n=f(r++);x(n.o,t)&&(n.i=e,n.o=t,o.__H.u.push(n))}function h(e){return v((function(){return{current:e}}),[])}function v(e,t){var n=f(r++);return x(n.o,t)?(n.o=t,n.v=e,n.i=e()):n.i}function b(e,t){return v((function(){return e}),t)}function m(){c.some((function(e){e.__P&&(e.__H.u.forEach(y),e.__H.u.forEach(g),e.__H.u=[])})),c=[]}function y(e){e.m&&e.m()}function g(e){var t=e.i();"function"==typeof t&&(e.m=t)}function x(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function O(e,t){return"function"==typeof t?t(e):t}l.c.__r=function(e){_&&_(e),r=0,(o=e.__c).__H&&(o.__H.u.forEach(y),o.__H.u.forEach(g),o.__H.u=[])},l.c.diffed=function(e){i&&i(e);var t=e.__c;if(t){var n=t.__H;n&&n.u.length&&(1!==c.push(t)&&u===l.c.requestAnimationFrame||((u=l.c.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(m))}},l.c.__c=function(e,t){t.some((function(e){e.__h.forEach(y),e.__h=e.__h.filter((function(e){return!e.i||g(e)}))})),a&&a(e,t)},l.c.unmount=function(e){s&&s(e);var t=e.__c;if(t){var n=t.__H;n&&n.t.forEach((function(e){return e.m&&e.m()}))}}},325:function(e,t,n){"use strict";n.r(t);var r=n(0),o={questions:[{text:"何色が好きですか？",answers:[{text:"赤",target:"ray",value:1},{text:"青",target:"rio",value:1},{text:"ピンク",target:"unchan",value:1}]},{text:"うんちを漏らしたことはありますか？",answers:[{text:"はい",target:"ray",value:2},{text:"いいえ",target:"none",value:0}]},{text:"好きなものはどれですか？",answers:[{text:"VRゴーグル",target:"ray",value:2},{text:"水",target:"unchan",value:2},{text:"マネーーー！！！",target:"rio",value:2},{text:"ハンバーガー",target:"none",value:0}]},{text:"墓地にはEXデッキから直接送られた「PSYフレームロード・Ω」が存在します。どうしますか？",answers:[{text:"死者蘇生を発動",target:"rio",value:1},{text:"リビングデッドの呼び声を発動",target:"unchan",value:1},{text:"カードを売ってマネーにする",target:"rio",value:2},{text:"何もせずターンエンド",target:"ray",value:2}]},{text:"「プルリク」ってなんの略？",answers:[{text:"プルデンシャル・リクルーティング",target:"unchan",value:1},{text:"プルリクエスト",target:"ray",value:1},{text:"プルリクって言わないで！！",target:"rio",value:1}]}],resultPages:{ray:"sindan_ray.html",rio:"sindan_rio.html",unchan:"sindan_unchan.html"}},u=n(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(){var e=l(Object(u.d)(!1),2),t=e[0],n=e[1],c=l(Object(u.d)(-1),2),_=c[0],i=c[1],a=l(Object(u.d)(0),2),s=a[0],f=a[1],d=l(Object(u.d)(""),2),p=d[0],h=d[1],v=l(Object(u.d)([]),2),b=v[0],m=v[1],y=l(Object(u.d)([]),2),g=y[0],x=y[1],O=l(Object(u.d)({ray:0,rio:0,unchan:0}),2),j=O[0],k=O[1];Object(u.b)((function(){if(!0===t)try{var e=o.questions;x(e),f(e.length),w(e,e.length,j)}catch(e){n(!1),alert("設定ファイルに問題があります。 ".concat(e))}}),[t]);var w=function(e,t,r){if(_+1<t)try{i(_+1);var u=e[_+1];h(u.text),m(u.answers)}catch(e){n(!1),i(-1),alert("設定ファイルに問題があります。 ".concat(e))}else{var l=Object.keys(r).reduce((function(e,t){return r[e]>r[t]?e:t}));try{var c=o.resultPages[l];c&&(window.location.href="./"+c)}catch(e){console.error("can not find result page ".concat(e))}}};return Object(r.b)("div",{className:"preact__container_for_sindan"},Object(r.b)("div",{className:"hero__container_for_sindan"},Object(r.b)("div",{className:"hero__logo_for_sindan"},0==t&&Object(r.b)("div",null,Object(r.b)("h1",{className:"logo"},"おめが診断"),Object(r.b)("h1",{className:"logo-sub"},"あなたはどのおめが？")),t&&Object(r.b)("div",null,Object(r.b)("h1",{className:"question-logo"},"Q",_+1),Object(r.b)("h1",{className:"question-text"},p)))),Object(r.b)("div",{className:"controle-box"},0==t&&Object(r.b)("div",{className:"start-button",onClick:function(){return n(!0)}},"はじめる"),Object(r.b)("div",{className:"controle-box__buttons"},b.map((function(e){return Object(r.b)("div",{className:"start-button",onClick:function(){return function(e){try{var t=e.target,r=j,o=r[t];o||(o=0),r[t]=o+e.value,k(r),w(g,s,r)}catch(e){n(!1),i(-1),alert("設定ファイルに問題があります。 ".concat(e))}}(e)}},e.text)})))),0==t&&Object(r.b)("a",{href:"/homepage",className:"c-unchan c-unchan--fixedBottom"},Object(r.b)("div",{className:"fukidashi",id:"unchan_fukidashi"},"ホームページに戻る"),Object(r.b)("div",{className:"c-unchan__inner"},Object(r.b)("div",{className:"c-unchan__tsuno"},Object(r.b)("div",{className:"c-unchan__tsuno__inner"})),Object(r.b)("div",{className:"c-unchan__toguro c-unchan__toguro--top"}),Object(r.b)("div",{className:"c-unchan__toguro c-unchan__toguro--middle"},Object(r.b)("div",{className:"c-unchan__eye c-unchan__eye--left"},Object(r.b)("div",null)),Object(r.b)("div",{className:"c-unchan__eye c-unchan__eye--right"},Object(r.b)("div",null))),Object(r.b)("div",{className:"c-unchan__toguro c-unchan__toguro--bottom"}),Object(r.b)("div",{className:"c-unchan__mouth"},Object(r.b)("div",{className:"c-unchan__mouth__inner"},Object(r.b)("div",null))))))},_=document.querySelector("#sindan");_&&Object(r.d)(Object(r.b)(c,null),_)}});
//# sourceMappingURL=sindan.js.map