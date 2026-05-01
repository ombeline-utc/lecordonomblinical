(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function $n(e,s){const t=Object.create(null),n=e.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return s?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function le(e){if(B(e)){const s={};for(let t=0;t<e.length;t++){const n=e[t],r=ce(n)?eo(n):le(n);if(r)for(const i in r)s[i]=r[i]}return s}else{if(ce(e))return e;if(ie(e))return e}}const Xa=/;(?![^(]*\))/g,Ga=/:([^]+)/,Za=/\/\*.*?\*\//gs;function eo(e){const s={};return e.replace(Za,"").split(Xa).forEach(t=>{if(t){const n=t.split(Ga);n.length>1&&(s[n[0].trim()]=n[1].trim())}}),s}function Un(e){let s="";if(ce(e))s=e;else if(B(e))for(let t=0;t<e.length;t++){const n=Un(e[t]);n&&(s+=n+" ")}else if(ie(e))for(const t in e)e[t]&&(s+=t+" ");return s.trim()}const so="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",to=$n(so);function ji(e){return!!e||e===""}const Pe=e=>ce(e)?e:e==null?"":B(e)||ie(e)&&(e.toString===_i||!k(e.toString))?JSON.stringify(e,Ei,2):String(e),Ei=(e,s)=>s&&s.__v_isRef?Ei(e,s.value):Us(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:yi(s)?{[`Set(${s.size})`]:[...s.values()]}:ie(s)&&!B(s)&&!Ri(s)?String(s):s,re={},$s=[],Fe=()=>{},no=()=>!1,ro=/^on[^a-z]/,Bt=e=>ro.test(e),Bn=e=>e.startsWith("onUpdate:"),qe=Object.assign,zn=(e,s)=>{const t=e.indexOf(s);t>-1&&e.splice(t,1)},io=Object.prototype.hasOwnProperty,W=(e,s)=>io.call(e,s),B=Array.isArray,Us=e=>zt(e)==="[object Map]",yi=e=>zt(e)==="[object Set]",k=e=>typeof e=="function",ce=e=>typeof e=="string",kn=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",xi=e=>ie(e)&&k(e.then)&&k(e.catch),_i=Object.prototype.toString,zt=e=>_i.call(e),ao=e=>zt(e).slice(8,-1),Ri=e=>zt(e)==="[object Object]",Fn=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ct=$n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kt=e=>{const s=Object.create(null);return t=>s[t]||(s[t]=e(t))},oo=/-(\w)/g,Ge=kt(e=>e.replace(oo,(s,t)=>t?t.toUpperCase():"")),lo=/\B([A-Z])/g,Qs=kt(e=>e.replace(lo,"-$1").toLowerCase()),Ft=kt(e=>e.charAt(0).toUpperCase()+e.slice(1)),nn=kt(e=>e?`on${Ft(e)}`:""),ct=(e,s)=>!Object.is(e,s),rn=(e,s)=>{for(let t=0;t<e.length;t++)e[t](s)},Mt=(e,s,t)=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value:t})},uo=e=>{const s=parseFloat(e);return isNaN(s)?e:s};let qr;const co=()=>qr||(qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class po{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!s&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const t=Ue;try{return Ue=this,s()}finally{Ue=t}}}on(){Ue=this}off(){Ue=this.parent}stop(s){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!s){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function mo(e,s=Ue){s&&s.active&&s.effects.push(e)}function fo(){return Ue}const Hn=e=>{const s=new Set(e);return s.w=0,s.n=0,s},Ci=e=>(e.w&vs)>0,Ai=e=>(e.n&vs)>0,ho=({deps:e})=>{if(e.length)for(let s=0;s<e.length;s++)e[s].w|=vs},vo=e=>{const{deps:s}=e;if(s.length){let t=0;for(let n=0;n<s.length;n++){const r=s[n];Ci(r)&&!Ai(r)?r.delete(e):s[t++]=r,r.w&=~vs,r.n&=~vs}s.length=t}},qn=new WeakMap;let it=0,vs=1;const jn=30;let ze;const Cs=Symbol(""),En=Symbol("");class Vn{constructor(s,t=null,n){this.fn=s,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,mo(this,n)}run(){if(!this.active)return this.fn();let s=ze,t=fs;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=ze,ze=this,fs=!0,vs=1<<++it,it<=jn?ho(this):jr(this),this.fn()}finally{it<=jn&&vo(this),vs=1<<--it,ze=this.parent,fs=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(jr(this),this.onStop&&this.onStop(),this.active=!1)}}function jr(e){const{deps:s}=e;if(s.length){for(let t=0;t<s.length;t++)s[t].delete(e);s.length=0}}let fs=!0;const Si=[];function Ys(){Si.push(fs),fs=!1}function Xs(){const e=Si.pop();fs=e===void 0?!0:e}function Ce(e,s,t){if(fs&&ze){let n=qn.get(e);n||qn.set(e,n=new Map);let r=n.get(t);r||n.set(t,r=Hn()),Ii(r)}}function Ii(e,s){let t=!1;it<=jn?Ai(e)||(e.n|=vs,t=!Ci(e)):t=!e.has(ze),t&&(e.add(ze),ze.deps.push(e))}function ns(e,s,t,n,r,i){const a=qn.get(e);if(!a)return;let o=[];if(s==="clear")o=[...a.values()];else if(t==="length"&&B(e)){const l=Number(n);a.forEach((d,u)=>{(u==="length"||u>=l)&&o.push(d)})}else switch(t!==void 0&&o.push(a.get(t)),s){case"add":B(e)?Fn(t)&&o.push(a.get("length")):(o.push(a.get(Cs)),Us(e)&&o.push(a.get(En)));break;case"delete":B(e)||(o.push(a.get(Cs)),Us(e)&&o.push(a.get(En)));break;case"set":Us(e)&&o.push(a.get(Cs));break}if(o.length===1)o[0]&&yn(o[0]);else{const l=[];for(const d of o)d&&l.push(...d);yn(Hn(l))}}function yn(e,s){const t=B(e)?e:[...e];for(const n of t)n.computed&&Er(n);for(const n of t)n.computed||Er(n)}function Er(e,s){(e!==ze||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const go=$n("__proto__,__v_isRef,__isVue"),Ti=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(kn)),bo=Wn(),qo=Wn(!1,!0),jo=Wn(!0),yr=Eo();function Eo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(s=>{e[s]=function(...t){const n=J(this);for(let i=0,a=this.length;i<a;i++)Ce(n,"get",i+"");const r=n[s](...t);return r===-1||r===!1?n[s](...t.map(J)):r}}),["push","pop","shift","unshift","splice"].forEach(s=>{e[s]=function(...t){Ys();const n=J(this)[s].apply(this,t);return Xs(),n}}),e}function yo(e){const s=J(this);return Ce(s,"has",e),s.hasOwnProperty(e)}function Wn(e=!1,s=!1){return function(n,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return s;if(r==="__v_raw"&&i===(e?s?$o:Li:s?Mi:wi).get(n))return n;const a=B(n);if(!e){if(a&&W(yr,r))return Reflect.get(yr,r,i);if(r==="hasOwnProperty")return yo}const o=Reflect.get(n,r,i);return(kn(r)?Ti.has(r):go(r))||(e||Ce(n,"get",r),s)?o:be(o)?a&&Fn(r)?o:o.value:ie(o)?e?Di(o):gt(o):o}}const xo=Pi(),_o=Pi(!0);function Pi(e=!1){return function(t,n,r,i){let a=t[n];if(ks(a)&&be(a)&&!be(r))return!1;if(!e&&(!Lt(r)&&!ks(r)&&(a=J(a),r=J(r)),!B(t)&&be(a)&&!be(r)))return a.value=r,!0;const o=B(t)&&Fn(n)?Number(n)<t.length:W(t,n),l=Reflect.set(t,n,r,i);return t===J(i)&&(o?ct(r,a)&&ns(t,"set",n,r):ns(t,"add",n,r)),l}}function Ro(e,s){const t=W(e,s);e[s];const n=Reflect.deleteProperty(e,s);return n&&t&&ns(e,"delete",s,void 0),n}function Co(e,s){const t=Reflect.has(e,s);return(!kn(s)||!Ti.has(s))&&Ce(e,"has",s),t}function Ao(e){return Ce(e,"iterate",B(e)?"length":Cs),Reflect.ownKeys(e)}const Oi={get:bo,set:xo,deleteProperty:Ro,has:Co,ownKeys:Ao},So={get:jo,set(e,s){return!0},deleteProperty(e,s){return!0}},Io=qe({},Oi,{get:qo,set:_o}),Jn=e=>e,Ht=e=>Reflect.getPrototypeOf(e);function qt(e,s,t=!1,n=!1){e=e.__v_raw;const r=J(e),i=J(s);t||(s!==i&&Ce(r,"get",s),Ce(r,"get",i));const{has:a}=Ht(r),o=n?Jn:t?Yn:dt;if(a.call(r,s))return o(e.get(s));if(a.call(r,i))return o(e.get(i));e!==r&&e.get(s)}function jt(e,s=!1){const t=this.__v_raw,n=J(t),r=J(e);return s||(e!==r&&Ce(n,"has",e),Ce(n,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)}function Et(e,s=!1){return e=e.__v_raw,!s&&Ce(J(e),"iterate",Cs),Reflect.get(e,"size",e)}function xr(e){e=J(e);const s=J(this);return Ht(s).has.call(s,e)||(s.add(e),ns(s,"add",e,e)),this}function _r(e,s){s=J(s);const t=J(this),{has:n,get:r}=Ht(t);let i=n.call(t,e);i||(e=J(e),i=n.call(t,e));const a=r.call(t,e);return t.set(e,s),i?ct(s,a)&&ns(t,"set",e,s):ns(t,"add",e,s),this}function Rr(e){const s=J(this),{has:t,get:n}=Ht(s);let r=t.call(s,e);r||(e=J(e),r=t.call(s,e)),n&&n.call(s,e);const i=s.delete(e);return r&&ns(s,"delete",e,void 0),i}function Cr(){const e=J(this),s=e.size!==0,t=e.clear();return s&&ns(e,"clear",void 0,void 0),t}function yt(e,s){return function(n,r){const i=this,a=i.__v_raw,o=J(a),l=s?Jn:e?Yn:dt;return!e&&Ce(o,"iterate",Cs),a.forEach((d,u)=>n.call(r,l(d),l(u),i))}}function xt(e,s,t){return function(...n){const r=this.__v_raw,i=J(r),a=Us(i),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=r[e](...n),u=t?Jn:s?Yn:dt;return!s&&Ce(i,"iterate",l?En:Cs),{next(){const{value:m,done:f}=d.next();return f?{value:m,done:f}:{value:o?[u(m[0]),u(m[1])]:u(m),done:f}},[Symbol.iterator](){return this}}}}function us(e){return function(...s){return e==="delete"?!1:this}}function To(){const e={get(i){return qt(this,i)},get size(){return Et(this)},has:jt,add:xr,set:_r,delete:Rr,clear:Cr,forEach:yt(!1,!1)},s={get(i){return qt(this,i,!1,!0)},get size(){return Et(this)},has:jt,add:xr,set:_r,delete:Rr,clear:Cr,forEach:yt(!1,!0)},t={get(i){return qt(this,i,!0)},get size(){return Et(this,!0)},has(i){return jt.call(this,i,!0)},add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear"),forEach:yt(!0,!1)},n={get(i){return qt(this,i,!0,!0)},get size(){return Et(this,!0)},has(i){return jt.call(this,i,!0)},add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear"),forEach:yt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xt(i,!1,!1),t[i]=xt(i,!0,!1),s[i]=xt(i,!1,!0),n[i]=xt(i,!0,!0)}),[e,t,s,n]}const[Po,Oo,wo,Mo]=To();function Kn(e,s){const t=s?e?Mo:wo:e?Oo:Po;return(n,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(W(t,r)&&r in n?t:n,r,i)}const Lo={get:Kn(!1,!1)},Do={get:Kn(!1,!0)},No={get:Kn(!0,!1)},wi=new WeakMap,Mi=new WeakMap,Li=new WeakMap,$o=new WeakMap;function Uo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bo(e){return e.__v_skip||!Object.isExtensible(e)?0:Uo(ao(e))}function gt(e){return ks(e)?e:Qn(e,!1,Oi,Lo,wi)}function zo(e){return Qn(e,!1,Io,Do,Mi)}function Di(e){return Qn(e,!0,So,No,Li)}function Qn(e,s,t,n,r){if(!ie(e)||e.__v_raw&&!(s&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=Bo(e);if(a===0)return e;const o=new Proxy(e,a===2?n:t);return r.set(e,o),o}function Bs(e){return ks(e)?Bs(e.__v_raw):!!(e&&e.__v_isReactive)}function ks(e){return!!(e&&e.__v_isReadonly)}function Lt(e){return!!(e&&e.__v_isShallow)}function Ni(e){return Bs(e)||ks(e)}function J(e){const s=e&&e.__v_raw;return s?J(s):e}function $i(e){return Mt(e,"__v_skip",!0),e}const dt=e=>ie(e)?gt(e):e,Yn=e=>ie(e)?Di(e):e;function Ui(e){fs&&ze&&(e=J(e),Ii(e.dep||(e.dep=Hn())))}function Bi(e,s){e=J(e);const t=e.dep;t&&yn(t)}function be(e){return!!(e&&e.__v_isRef===!0)}function Es(e){return zi(e,!1)}function ko(e){return zi(e,!0)}function zi(e,s){return be(e)?e:new Fo(e,s)}class Fo{constructor(s,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?s:J(s),this._value=t?s:dt(s)}get value(){return Ui(this),this._value}set value(s){const t=this.__v_isShallow||Lt(s)||ks(s);s=t?s:J(s),ct(s,this._rawValue)&&(this._rawValue=s,this._value=t?s:dt(s),Bi(this))}}function As(e){return be(e)?e.value:e}const Ho={get:(e,s,t)=>As(Reflect.get(e,s,t)),set:(e,s,t,n)=>{const r=e[s];return be(r)&&!be(t)?(r.value=t,!0):Reflect.set(e,s,t,n)}};function ki(e){return Bs(e)?e:new Proxy(e,Ho)}var Fi;class Vo{constructor(s,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Fi]=!1,this._dirty=!0,this.effect=new Vn(s,()=>{this._dirty||(this._dirty=!0,Bi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const s=J(this);return Ui(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}Fi="__v_isReadonly";function Wo(e,s,t=!1){let n,r;const i=k(e);return i?(n=e,r=Fe):(n=e.get,r=e.set),new Vo(n,r,i||!r,t)}function hs(e,s,t,n){let r;try{r=n?e(...n):e()}catch(i){Vt(i,s,t)}return r}function Le(e,s,t,n){if(k(e)){const i=hs(e,s,t,n);return i&&xi(i)&&i.catch(a=>{Vt(a,s,t)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Le(e[i],s,t,n));return r}function Vt(e,s,t,n=!0){const r=s?s.vnode:null;if(s){let i=s.parent;const a=s.proxy,o=t;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,a,o)===!1)return}i=i.parent}const l=s.appContext.config.errorHandler;if(l){hs(l,null,10,[e,a,o]);return}}Jo(e,t,r,n)}function Jo(e,s,t,n=!0){console.error(e)}let pt=!1,xn=!1;const ge=[];let Ye=0;const zs=[];let ts=null,xs=0;const Hi=Promise.resolve();let Xn=null;function Vi(e){const s=Xn||Hi;return e?s.then(this?e.bind(this):e):s}function Ko(e){let s=Ye+1,t=ge.length;for(;s<t;){const n=s+t>>>1;mt(ge[n])<e?s=n+1:t=n}return s}function Gn(e){(!ge.length||!ge.includes(e,pt&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?ge.push(e):ge.splice(Ko(e.id),0,e),Wi())}function Wi(){!pt&&!xn&&(xn=!0,Xn=Hi.then(Ki))}function Qo(e){const s=ge.indexOf(e);s>Ye&&ge.splice(s,1)}function Yo(e){B(e)?zs.push(...e):(!ts||!ts.includes(e,e.allowRecurse?xs+1:xs))&&zs.push(e),Wi()}function Ar(e,s=pt?Ye+1:0){for(;s<ge.length;s++){const t=ge[s];t&&t.pre&&(ge.splice(s,1),s--,t())}}function Ji(e){if(zs.length){const s=[...new Set(zs)];if(zs.length=0,ts){ts.push(...s);return}for(ts=s,ts.sort((t,n)=>mt(t)-mt(n)),xs=0;xs<ts.length;xs++)ts[xs]();ts=null,xs=0}}const mt=e=>e.id==null?1/0:e.id,Xo=(e,s)=>{const t=mt(e)-mt(s);if(t===0){if(e.pre&&!s.pre)return-1;if(s.pre&&!e.pre)return 1}return t};function Ki(e){xn=!1,pt=!0,ge.sort(Xo);const s=Fe;try{for(Ye=0;Ye<ge.length;Ye++){const t=ge[Ye];t&&t.active!==!1&&hs(t,null,14)}}finally{Ye=0,ge.length=0,Ji(),pt=!1,Xn=null,(ge.length||zs.length)&&Ki()}}function Go(e,s,...t){if(e.isUnmounted)return;const n=e.vnode.props||re;let r=t;const i=s.startsWith("update:"),a=i&&s.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:f}=n[u]||re;f&&(r=t.map(v=>ce(v)?v.trim():v)),m&&(r=t.map(uo))}let o,l=n[o=nn(s)]||n[o=nn(Ge(s))];!l&&i&&(l=n[o=nn(Qs(s))]),l&&Le(l,e,6,r);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Le(d,e,6,r)}}function Qi(e,s,t=!1){const n=s.emitsCache,r=n.get(e);if(r!==void 0)return r;const i=e.emits;let a={},o=!1;if(!k(e)){const l=d=>{const u=Qi(d,s,!0);u&&(o=!0,qe(a,u))};!t&&s.mixins.length&&s.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(ie(e)&&n.set(e,null),null):(B(i)?i.forEach(l=>a[l]=null):qe(a,i),ie(e)&&n.set(e,a),a)}function Wt(e,s){return!e||!Bt(s)?!1:(s=s.slice(2).replace(/Once$/,""),W(e,s[0].toLowerCase()+s.slice(1))||W(e,Qs(s))||W(e,s))}let Me=null,Yi=null;function Dt(e){const s=Me;return Me=e,Yi=e&&e.type.__scopeId||null,s}function Be(e,s=Me,t){if(!s||e._n)return e;const n=(...r)=>{n._d&&Nr(-1);const i=Dt(s);let a;try{a=e(...r)}finally{Dt(i),n._d&&Nr(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function an(e){const{type:s,vnode:t,proxy:n,withProxy:r,props:i,propsOptions:[a],slots:o,attrs:l,emit:d,render:u,renderCache:m,data:f,setupState:v,ctx:I,inheritAttrs:A}=e;let N,C;const D=Dt(e);try{if(t.shapeFlag&4){const H=r||n;N=Qe(u.call(H,H,m,i,v,f,I)),C=l}else{const H=s;N=Qe(H.length>1?H(i,{attrs:l,slots:o,emit:d}):H(i,null)),C=s.props?l:Zo(l)}}catch(H){ot.length=0,Vt(H,e,1),N=ee(He)}let P=N;if(C&&A!==!1){const H=Object.keys(C),{shapeFlag:X}=P;H.length&&X&7&&(a&&H.some(Bn)&&(C=el(C,a)),P=gs(P,C))}return t.dirs&&(P=gs(P),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition&&(P.transition=t.transition),N=P,Dt(D),N}const Zo=e=>{let s;for(const t in e)(t==="class"||t==="style"||Bt(t))&&((s||(s={}))[t]=e[t]);return s},el=(e,s)=>{const t={};for(const n in e)(!Bn(n)||!(n.slice(9)in s))&&(t[n]=e[n]);return t};function sl(e,s,t){const{props:n,children:r,component:i}=e,{props:a,children:o,patchFlag:l}=s,d=i.emitsOptions;if(s.dirs||s.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Sr(n,a,d):!!a;if(l&8){const u=s.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(a[f]!==n[f]&&!Wt(d,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Sr(n,a,d):!0:!!a;return!1}function Sr(e,s,t){const n=Object.keys(s);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(s[i]!==e[i]&&!Wt(t,i))return!0}return!1}function tl({vnode:e,parent:s},t){for(;s&&s.subTree===e;)(e=s.vnode).el=t,s=s.parent}const nl=e=>e.__isSuspense;function rl(e,s){s&&s.pendingBranch?B(e)?s.effects.push(...e):s.effects.push(e):Yo(e)}function At(e,s){if(oe){let t=oe.provides;const n=oe.parent&&oe.parent.provides;n===t&&(t=oe.provides=Object.create(n)),t[e]=s}}function Xe(e,s,t=!1){const n=oe||Me;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&k(s)?s.call(n.proxy):s}}const _t={};function St(e,s,t){return Xi(e,s,t)}function Xi(e,s,{immediate:t,deep:n,flush:r,onTrack:i,onTrigger:a}=re){const o=fo()===(oe==null?void 0:oe.scope)?oe:null;let l,d=!1,u=!1;if(be(e)?(l=()=>e.value,d=Lt(e)):Bs(e)?(l=()=>e,n=!0):B(e)?(u=!0,d=e.some(P=>Bs(P)||Lt(P)),l=()=>e.map(P=>{if(be(P))return P.value;if(Bs(P))return Ns(P);if(k(P))return hs(P,o,2)})):k(e)?s?l=()=>hs(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return m&&m(),Le(e,o,3,[f])}:l=Fe,s&&n){const P=l;l=()=>Ns(P())}let m,f=P=>{m=C.onStop=()=>{hs(P,o,4)}},v;if(ht)if(f=Fe,s?t&&Le(s,o,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const P=Zl();v=P.__watcherHandles||(P.__watcherHandles=[])}else return Fe;let I=u?new Array(e.length).fill(_t):_t;const A=()=>{if(C.active)if(s){const P=C.run();(n||d||(u?P.some((H,X)=>ct(H,I[X])):ct(P,I)))&&(m&&m(),Le(s,o,3,[P,I===_t?void 0:u&&I[0]===_t?[]:I,f]),I=P)}else C.run()};A.allowRecurse=!!s;let N;r==="sync"?N=A:r==="post"?N=()=>_e(A,o&&o.suspense):(A.pre=!0,o&&(A.id=o.uid),N=()=>Gn(A));const C=new Vn(l,N);s?t?A():I=C.run():r==="post"?_e(C.run.bind(C),o&&o.suspense):C.run();const D=()=>{C.stop(),o&&o.scope&&zn(o.scope.effects,C)};return v&&v.push(D),D}function il(e,s,t){const n=this.proxy,r=ce(e)?e.includes(".")?Gi(n,e):()=>n[e]:e.bind(n,n);let i;k(s)?i=s:(i=s.handler,t=s);const a=oe;Fs(this);const o=Xi(r,i.bind(n),t);return a?Fs(a):Ss(),o}function Gi(e,s){const t=s.split(".");return()=>{let n=e;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ns(e,s){if(!ie(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),be(e))Ns(e.value,s);else if(B(e))for(let t=0;t<e.length;t++)Ns(e[t],s);else if(yi(e)||Us(e))e.forEach(t=>{Ns(t,s)});else if(Ri(e))for(const t in e)Ns(e[t],s);return e}function al(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zn(()=>{e.isMounted=!0}),na(()=>{e.isUnmounting=!0}),e}const we=[Function,Array],ol={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:we,onEnter:we,onAfterEnter:we,onEnterCancelled:we,onBeforeLeave:we,onLeave:we,onAfterLeave:we,onLeaveCancelled:we,onBeforeAppear:we,onAppear:we,onAfterAppear:we,onAppearCancelled:we},setup(e,{slots:s}){const t=Vl(),n=al();let r;return()=>{const i=s.default&&ea(s.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const A of i)if(A.type!==He){a=A;break}}const o=J(e),{mode:l}=o;if(n.isLeaving)return on(a);const d=Ir(a);if(!d)return on(a);const u=_n(d,o,n,t);Rn(d,u);const m=t.subTree,f=m&&Ir(m);let v=!1;const{getTransitionKey:I}=d.type;if(I){const A=I();r===void 0?r=A:A!==r&&(r=A,v=!0)}if(f&&f.type!==He&&(!_s(d,f)||v)){const A=_n(f,o,n,t);if(Rn(f,A),l==="out-in")return n.isLeaving=!0,A.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},on(a);l==="in-out"&&d.type!==He&&(A.delayLeave=(N,C,D)=>{const P=Zi(n,f);P[String(f.key)]=f,N._leaveCb=()=>{C(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return a}}},ll=ol;function Zi(e,s){const{leavingVNodes:t}=e;let n=t.get(s.type);return n||(n=Object.create(null),t.set(s.type,n)),n}function _n(e,s,t,n){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:m,onLeave:f,onAfterLeave:v,onLeaveCancelled:I,onBeforeAppear:A,onAppear:N,onAfterAppear:C,onAppearCancelled:D}=s,P=String(e.key),H=Zi(t,e),X=(F,ae)=>{F&&Le(F,n,9,ae)},fe=(F,ae)=>{const ne=ae[1];X(F,ae),B(F)?F.every(he=>he.length<=1)&&ne():F.length<=1&&ne()},ye={mode:i,persisted:a,beforeEnter(F){let ae=o;if(!t.isMounted)if(r)ae=A||o;else return;F._leaveCb&&F._leaveCb(!0);const ne=H[P];ne&&_s(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),X(ae,[F])},enter(F){let ae=l,ne=d,he=u;if(!t.isMounted)if(r)ae=N||l,ne=C||d,he=D||u;else return;let Se=!1;const je=F._enterCb=bs=>{Se||(Se=!0,bs?X(he,[F]):X(ne,[F]),ye.delayedLeave&&ye.delayedLeave(),F._enterCb=void 0)};ae?fe(ae,[F,je]):je()},leave(F,ae){const ne=String(e.key);if(F._enterCb&&F._enterCb(!0),t.isUnmounting)return ae();X(m,[F]);let he=!1;const Se=F._leaveCb=je=>{he||(he=!0,ae(),je?X(I,[F]):X(v,[F]),F._leaveCb=void 0,H[ne]===e&&delete H[ne])};H[ne]=e,f?fe(f,[F,Se]):Se()},clone(F){return _n(F,s,t,n)}};return ye}function on(e){if(Jt(e))return e=gs(e),e.children=null,e}function Ir(e){return Jt(e)?e.children?e.children[0]:void 0:e}function Rn(e,s){e.shapeFlag&6&&e.component?Rn(e.component.subTree,s):e.shapeFlag&128?(e.ssContent.transition=s.clone(e.ssContent),e.ssFallback.transition=s.clone(e.ssFallback)):e.transition=s}function ea(e,s=!1,t){let n=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===se?(a.patchFlag&128&&r++,n=n.concat(ea(a.children,s,o))):(s||a.type!==He)&&n.push(o!=null?gs(a,{key:o}):a)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function sa(e){return k(e)?{setup:e,name:e.name}:e}const It=e=>!!e.type.__asyncLoader,Jt=e=>e.type.__isKeepAlive;function ul(e,s){ta(e,"a",s)}function cl(e,s){ta(e,"da",s)}function ta(e,s,t=oe){const n=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Kt(s,n,t),t){let r=t.parent;for(;r&&r.parent;)Jt(r.parent.vnode)&&dl(n,s,t,r),r=r.parent}}function dl(e,s,t,n){const r=Kt(s,e,n,!0);ra(()=>{zn(n[s],r)},t)}function Kt(e,s,t=oe,n=!1){if(t){const r=t[e]||(t[e]=[]),i=s.__weh||(s.__weh=(...a)=>{if(t.isUnmounted)return;Ys(),Fs(t);const o=Le(s,t,e,a);return Ss(),Xs(),o});return n?r.unshift(i):r.push(i),i}}const is=e=>(s,t=oe)=>(!ht||e==="sp")&&Kt(e,(...n)=>s(...n),t),pl=is("bm"),Zn=is("m"),ml=is("bu"),fl=is("u"),na=is("bum"),ra=is("um"),hl=is("sp"),vl=is("rtg"),gl=is("rtc");function bl(e,s=oe){Kt("ec",e,s)}function qs(e,s,t,n){const r=e.dirs,i=s&&s.dirs;for(let a=0;a<r.length;a++){const o=r[a];i&&(o.oldValue=i[a].value);let l=o.dir[n];l&&(Ys(),Le(l,t,8,[e.el,o,e,s]),Xs())}}const ia="components";function rs(e,s){return jl(ia,e,!0,s)||e}const ql=Symbol();function jl(e,s,t=!0,n=!1){const r=Me||oe;if(r){const i=r.type;if(e===ia){const o=Yl(i,!1);if(o&&(o===s||o===Ge(s)||o===Ft(Ge(s))))return i}const a=Tr(r[e]||i[e],s)||Tr(r.appContext[e],s);return!a&&n?i:a}}function Tr(e,s){return e&&(e[s]||e[Ge(s)]||e[Ft(Ge(s))])}function as(e,s,t,n){let r;const i=t&&t[n];if(B(e)||ce(e)){r=new Array(e.length);for(let a=0,o=e.length;a<o;a++)r[a]=s(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=s(a+1,a,void 0,i&&i[a])}else if(ie(e))if(e[Symbol.iterator])r=Array.from(e,(a,o)=>s(a,o,void 0,i&&i[o]));else{const a=Object.keys(e);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const d=a[o];r[o]=s(e[d],d,o,i&&i[o])}}else r=[];return t&&(t[n]=r),r}const Cn=e=>e?ga(e)?nr(e)||e.proxy:Cn(e.parent):null,at=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cn(e.parent),$root:e=>Cn(e.root),$emit:e=>e.emit,$options:e=>er(e),$forceUpdate:e=>e.f||(e.f=()=>Gn(e.update)),$nextTick:e=>e.n||(e.n=Vi.bind(e.proxy)),$watch:e=>il.bind(e)}),ln=(e,s)=>e!==re&&!e.__isScriptSetup&&W(e,s),El={get({_:e},s){const{ctx:t,setupState:n,data:r,props:i,accessCache:a,type:o,appContext:l}=e;let d;if(s[0]!=="$"){const v=a[s];if(v!==void 0)switch(v){case 1:return n[s];case 2:return r[s];case 4:return t[s];case 3:return i[s]}else{if(ln(n,s))return a[s]=1,n[s];if(r!==re&&W(r,s))return a[s]=2,r[s];if((d=e.propsOptions[0])&&W(d,s))return a[s]=3,i[s];if(t!==re&&W(t,s))return a[s]=4,t[s];An&&(a[s]=0)}}const u=at[s];let m,f;if(u)return s==="$attrs"&&Ce(e,"get",s),u(e);if((m=o.__cssModules)&&(m=m[s]))return m;if(t!==re&&W(t,s))return a[s]=4,t[s];if(f=l.config.globalProperties,W(f,s))return f[s]},set({_:e},s,t){const{data:n,setupState:r,ctx:i}=e;return ln(r,s)?(r[s]=t,!0):n!==re&&W(n,s)?(n[s]=t,!0):W(e.props,s)||s[0]==="$"&&s.slice(1)in e?!1:(i[s]=t,!0)},has({_:{data:e,setupState:s,accessCache:t,ctx:n,appContext:r,propsOptions:i}},a){let o;return!!t[a]||e!==re&&W(e,a)||ln(s,a)||(o=i[0])&&W(o,a)||W(n,a)||W(at,a)||W(r.config.globalProperties,a)},defineProperty(e,s,t){return t.get!=null?e._.accessCache[s]=0:W(t,"value")&&this.set(e,s,t.value,null),Reflect.defineProperty(e,s,t)}};let An=!0;function yl(e){const s=er(e),t=e.proxy,n=e.ctx;An=!1,s.beforeCreate&&Pr(s.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:o,provide:l,inject:d,created:u,beforeMount:m,mounted:f,beforeUpdate:v,updated:I,activated:A,deactivated:N,beforeDestroy:C,beforeUnmount:D,destroyed:P,unmounted:H,render:X,renderTracked:fe,renderTriggered:ye,errorCaptured:F,serverPrefetch:ae,expose:ne,inheritAttrs:he,components:Se,directives:je,filters:bs}=s;if(d&&xl(d,n,null,e.appContext.config.unwrapInjectedRef),a)for(const Z in a){const K=a[Z];k(K)&&(n[Z]=K.bind(t))}if(r){const Z=r.call(t,t);ie(Z)&&(e.data=gt(Z))}if(An=!0,i)for(const Z in i){const K=i[Z],Ze=k(K)?K.bind(t,t):k(K.get)?K.get.bind(t,t):Fe,ls=!k(K)&&k(K.set)?K.set.bind(t):Fe,We=Re({get:Ze,set:ls});Object.defineProperty(n,Z,{enumerable:!0,configurable:!0,get:()=>We.value,set:xe=>We.value=xe})}if(o)for(const Z in o)aa(o[Z],n,t,Z);if(l){const Z=k(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(K=>{At(K,Z[K])})}u&&Pr(u,e,"c");function de(Z,K){B(K)?K.forEach(Ze=>Z(Ze.bind(t))):K&&Z(K.bind(t))}if(de(pl,m),de(Zn,f),de(ml,v),de(fl,I),de(ul,A),de(cl,N),de(bl,F),de(gl,fe),de(vl,ye),de(na,D),de(ra,H),de(hl,ae),B(ne))if(ne.length){const Z=e.exposed||(e.exposed={});ne.forEach(K=>{Object.defineProperty(Z,K,{get:()=>t[K],set:Ze=>t[K]=Ze})})}else e.exposed||(e.exposed={});X&&e.render===Fe&&(e.render=X),he!=null&&(e.inheritAttrs=he),Se&&(e.components=Se),je&&(e.directives=je)}function xl(e,s,t=Fe,n=!1){B(e)&&(e=Sn(e));for(const r in e){const i=e[r];let a;ie(i)?"default"in i?a=Xe(i.from||r,i.default,!0):a=Xe(i.from||r):a=Xe(i),be(a)&&n?Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):s[r]=a}}function Pr(e,s,t){Le(B(e)?e.map(n=>n.bind(s.proxy)):e.bind(s.proxy),s,t)}function aa(e,s,t,n){const r=n.includes(".")?Gi(t,n):()=>t[n];if(ce(e)){const i=s[e];k(i)&&St(r,i)}else if(k(e))St(r,e.bind(t));else if(ie(e))if(B(e))e.forEach(i=>aa(i,s,t,n));else{const i=k(e.handler)?e.handler.bind(t):s[e.handler];k(i)&&St(r,i,e)}}function er(e){const s=e.type,{mixins:t,extends:n}=s,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,o=i.get(s);let l;return o?l=o:!r.length&&!t&&!n?l=s:(l={},r.length&&r.forEach(d=>Nt(l,d,a,!0)),Nt(l,s,a)),ie(s)&&i.set(s,l),l}function Nt(e,s,t,n=!1){const{mixins:r,extends:i}=s;i&&Nt(e,i,t,!0),r&&r.forEach(a=>Nt(e,a,t,!0));for(const a in s)if(!(n&&a==="expose")){const o=_l[a]||t&&t[a];e[a]=o?o(e[a],s[a]):s[a]}return e}const _l={data:Or,props:ys,emits:ys,methods:ys,computed:ys,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:ys,directives:ys,watch:Cl,provide:Or,inject:Rl};function Or(e,s){return s?e?function(){return qe(k(e)?e.call(this,this):e,k(s)?s.call(this,this):s)}:s:e}function Rl(e,s){return ys(Sn(e),Sn(s))}function Sn(e){if(B(e)){const s={};for(let t=0;t<e.length;t++)s[e[t]]=e[t];return s}return e}function Ee(e,s){return e?[...new Set([].concat(e,s))]:s}function ys(e,s){return e?qe(qe(Object.create(null),e),s):s}function Cl(e,s){if(!e)return s;if(!s)return e;const t=qe(Object.create(null),e);for(const n in s)t[n]=Ee(e[n],s[n]);return t}function Al(e,s,t,n=!1){const r={},i={};Mt(i,Yt,1),e.propsDefaults=Object.create(null),oa(e,s,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);t?e.props=n?r:zo(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Sl(e,s,t,n){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,o=J(r),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];if(Wt(e.emitsOptions,f))continue;const v=s[f];if(l)if(W(i,f))v!==i[f]&&(i[f]=v,d=!0);else{const I=Ge(f);r[I]=In(l,o,I,v,e,!1)}else v!==i[f]&&(i[f]=v,d=!0)}}}else{oa(e,s,r,i)&&(d=!0);let u;for(const m in o)(!s||!W(s,m)&&((u=Qs(m))===m||!W(s,u)))&&(l?t&&(t[m]!==void 0||t[u]!==void 0)&&(r[m]=In(l,o,m,void 0,e,!0)):delete r[m]);if(i!==o)for(const m in i)(!s||!W(s,m))&&(delete i[m],d=!0)}d&&ns(e,"set","$attrs")}function oa(e,s,t,n){const[r,i]=e.propsOptions;let a=!1,o;if(s)for(let l in s){if(Ct(l))continue;const d=s[l];let u;r&&W(r,u=Ge(l))?!i||!i.includes(u)?t[u]=d:(o||(o={}))[u]=d:Wt(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(i){const l=J(t),d=o||re;for(let u=0;u<i.length;u++){const m=i[u];t[m]=In(r,l,m,d[m],e,!W(d,m))}}return a}function In(e,s,t,n,r,i){const a=e[t];if(a!=null){const o=W(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&k(l)){const{propsDefaults:d}=r;t in d?n=d[t]:(Fs(r),n=d[t]=l.call(null,s),Ss())}else n=l}a[0]&&(i&&!o?n=!1:a[1]&&(n===""||n===Qs(t))&&(n=!0))}return n}function la(e,s,t=!1){const n=s.propsCache,r=n.get(e);if(r)return r;const i=e.props,a={},o=[];let l=!1;if(!k(e)){const u=m=>{l=!0;const[f,v]=la(m,s,!0);qe(a,f),v&&o.push(...v)};!t&&s.mixins.length&&s.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ie(e)&&n.set(e,$s),$s;if(B(i))for(let u=0;u<i.length;u++){const m=Ge(i[u]);wr(m)&&(a[m]=re)}else if(i)for(const u in i){const m=Ge(u);if(wr(m)){const f=i[u],v=a[m]=B(f)||k(f)?{type:f}:Object.assign({},f);if(v){const I=Dr(Boolean,v.type),A=Dr(String,v.type);v[0]=I>-1,v[1]=A<0||I<A,(I>-1||W(v,"default"))&&o.push(m)}}}const d=[a,o];return ie(e)&&n.set(e,d),d}function wr(e){return e[0]!=="$"}function Mr(e){const s=e&&e.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:e===null?"null":""}function Lr(e,s){return Mr(e)===Mr(s)}function Dr(e,s){return B(s)?s.findIndex(t=>Lr(t,e)):k(s)&&Lr(s,e)?0:-1}const ua=e=>e[0]==="_"||e==="$stable",sr=e=>B(e)?e.map(Qe):[Qe(e)],Il=(e,s,t)=>{if(s._n)return s;const n=Be((...r)=>sr(s(...r)),t);return n._c=!1,n},ca=(e,s,t)=>{const n=e._ctx;for(const r in e){if(ua(r))continue;const i=e[r];if(k(i))s[r]=Il(r,i,n);else if(i!=null){const a=sr(i);s[r]=()=>a}}},da=(e,s)=>{const t=sr(s);e.slots.default=()=>t},Tl=(e,s)=>{if(e.vnode.shapeFlag&32){const t=s._;t?(e.slots=J(s),Mt(s,"_",t)):ca(s,e.slots={})}else e.slots={},s&&da(e,s);Mt(e.slots,Yt,1)},Pl=(e,s,t)=>{const{vnode:n,slots:r}=e;let i=!0,a=re;if(n.shapeFlag&32){const o=s._;o?t&&o===1?i=!1:(qe(r,s),!t&&o===1&&delete r._):(i=!s.$stable,ca(s,r)),a=s}else s&&(da(e,s),a={default:1});if(i)for(const o in r)!ua(o)&&!(o in a)&&delete r[o]};function pa(){return{app:null,config:{isNativeTag:no,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function wl(e,s){return function(n,r=null){k(n)||(n=Object.assign({},n)),r!=null&&!ie(r)&&(r=null);const i=pa(),a=new Set;let o=!1;const l=i.app={_uid:Ol++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:eu,get config(){return i.config},set config(d){},use(d,...u){return a.has(d)||(d&&k(d.install)?(a.add(d),d.install(l,...u)):k(d)&&(a.add(d),d(l,...u))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,u){return u?(i.components[d]=u,l):i.components[d]},directive(d,u){return u?(i.directives[d]=u,l):i.directives[d]},mount(d,u,m){if(!o){const f=ee(n,r);return f.appContext=i,u&&s?s(f,d):e(f,d,m),o=!0,l._container=d,d.__vue_app__=l,nr(f.component)||f.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(d,u){return i.provides[d]=u,l}};return l}}function Tn(e,s,t,n,r=!1){if(B(e)){e.forEach((f,v)=>Tn(f,s&&(B(s)?s[v]:s),t,n,r));return}if(It(n)&&!r)return;const i=n.shapeFlag&4?nr(n.component)||n.component.proxy:n.el,a=r?null:i,{i:o,r:l}=e,d=s&&s.r,u=o.refs===re?o.refs={}:o.refs,m=o.setupState;if(d!=null&&d!==l&&(ce(d)?(u[d]=null,W(m,d)&&(m[d]=null)):be(d)&&(d.value=null)),k(l))hs(l,o,12,[a,u]);else{const f=ce(l),v=be(l);if(f||v){const I=()=>{if(e.f){const A=f?W(m,l)?m[l]:u[l]:l.value;r?B(A)&&zn(A,i):B(A)?A.includes(i)||A.push(i):f?(u[l]=[i],W(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else f?(u[l]=a,W(m,l)&&(m[l]=a)):v&&(l.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,_e(I,t)):I()}}}const _e=rl;function Ml(e){return Ll(e)}function Ll(e,s){const t=co();t.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:a,createText:o,createComment:l,setText:d,setElementText:u,parentNode:m,nextSibling:f,setScopeId:v=Fe,insertStaticContent:I}=e,A=(c,p,h,g=null,j=null,E=null,S=!1,x=null,_=!!p.dynamicChildren)=>{if(c===p)return;c&&!_s(c,p)&&(g=q(c),xe(c,j,E,!0),c=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:y,ref:M,shapeFlag:O}=p;switch(y){case Qt:N(c,p,h,g);break;case He:C(c,p,h,g);break;case un:c==null&&D(p,h,g,S);break;case se:Se(c,p,h,g,j,E,S,x,_);break;default:O&1?X(c,p,h,g,j,E,S,x,_):O&6?je(c,p,h,g,j,E,S,x,_):(O&64||O&128)&&y.process(c,p,h,g,j,E,S,x,_,R)}M!=null&&j&&Tn(M,c&&c.ref,E,p||c,!p)},N=(c,p,h,g)=>{if(c==null)n(p.el=o(p.children),h,g);else{const j=p.el=c.el;p.children!==c.children&&d(j,p.children)}},C=(c,p,h,g)=>{c==null?n(p.el=l(p.children||""),h,g):p.el=c.el},D=(c,p,h,g)=>{[c.el,c.anchor]=I(c.children,p,h,g,c.el,c.anchor)},P=({el:c,anchor:p},h,g)=>{let j;for(;c&&c!==p;)j=f(c),n(c,h,g),c=j;n(p,h,g)},H=({el:c,anchor:p})=>{let h;for(;c&&c!==p;)h=f(c),r(c),c=h;r(p)},X=(c,p,h,g,j,E,S,x,_)=>{S=S||p.type==="svg",c==null?fe(p,h,g,j,E,S,x,_):ae(c,p,j,E,S,x,_)},fe=(c,p,h,g,j,E,S,x)=>{let _,y;const{type:M,props:O,shapeFlag:L,transition:$,dirs:V}=c;if(_=c.el=a(c.type,E,O&&O.is,O),L&8?u(_,c.children):L&16&&F(c.children,_,null,g,j,E&&M!=="foreignObject",S,x),V&&qs(c,null,g,"created"),ye(_,c,c.scopeId,S,g),O){for(const G in O)G!=="value"&&!Ct(G)&&i(_,G,null,O[G],E,c.children,g,j,ve);"value"in O&&i(_,"value",null,O.value),(y=O.onVnodeBeforeMount)&&Ke(y,g,c)}V&&qs(c,null,g,"beforeMount");const te=(!j||j&&!j.pendingBranch)&&$&&!$.persisted;te&&$.beforeEnter(_),n(_,p,h),((y=O&&O.onVnodeMounted)||te||V)&&_e(()=>{y&&Ke(y,g,c),te&&$.enter(_),V&&qs(c,null,g,"mounted")},j)},ye=(c,p,h,g,j)=>{if(h&&v(c,h),g)for(let E=0;E<g.length;E++)v(c,g[E]);if(j){let E=j.subTree;if(p===E){const S=j.vnode;ye(c,S,S.scopeId,S.slotScopeIds,j.parent)}}},F=(c,p,h,g,j,E,S,x,_=0)=>{for(let y=_;y<c.length;y++){const M=c[y]=x?ds(c[y]):Qe(c[y]);A(null,M,p,h,g,j,E,S,x)}},ae=(c,p,h,g,j,E,S)=>{const x=p.el=c.el;let{patchFlag:_,dynamicChildren:y,dirs:M}=p;_|=c.patchFlag&16;const O=c.props||re,L=p.props||re;let $;h&&js(h,!1),($=L.onVnodeBeforeUpdate)&&Ke($,h,p,c),M&&qs(p,c,h,"beforeUpdate"),h&&js(h,!0);const V=j&&p.type!=="foreignObject";if(y?ne(c.dynamicChildren,y,x,h,g,V,E):S||K(c,p,x,null,h,g,V,E,!1),_>0){if(_&16)he(x,p,O,L,h,g,j);else if(_&2&&O.class!==L.class&&i(x,"class",null,L.class,j),_&4&&i(x,"style",O.style,L.style,j),_&8){const te=p.dynamicProps;for(let G=0;G<te.length;G++){const ue=te[G],Ne=O[ue],ws=L[ue];(ws!==Ne||ue==="value")&&i(x,ue,Ne,ws,j,c.children,h,g,ve)}}_&1&&c.children!==p.children&&u(x,p.children)}else!S&&y==null&&he(x,p,O,L,h,g,j);(($=L.onVnodeUpdated)||M)&&_e(()=>{$&&Ke($,h,p,c),M&&qs(p,c,h,"updated")},g)},ne=(c,p,h,g,j,E,S)=>{for(let x=0;x<p.length;x++){const _=c[x],y=p[x],M=_.el&&(_.type===se||!_s(_,y)||_.shapeFlag&70)?m(_.el):h;A(_,y,M,null,g,j,E,S,!0)}},he=(c,p,h,g,j,E,S)=>{if(h!==g){if(h!==re)for(const x in h)!Ct(x)&&!(x in g)&&i(c,x,h[x],null,S,p.children,j,E,ve);for(const x in g){if(Ct(x))continue;const _=g[x],y=h[x];_!==y&&x!=="value"&&i(c,x,y,_,S,p.children,j,E,ve)}"value"in g&&i(c,"value",h.value,g.value)}},Se=(c,p,h,g,j,E,S,x,_)=>{const y=p.el=c?c.el:o(""),M=p.anchor=c?c.anchor:o("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:$}=p;$&&(x=x?x.concat($):$),c==null?(n(y,h,g),n(M,h,g),F(p.children,h,M,j,E,S,x,_)):O>0&&O&64&&L&&c.dynamicChildren?(ne(c.dynamicChildren,L,h,j,E,S,x),(p.key!=null||j&&p===j.subTree)&&ma(c,p,!0)):K(c,p,h,M,j,E,S,x,_)},je=(c,p,h,g,j,E,S,x,_)=>{p.slotScopeIds=x,c==null?p.shapeFlag&512?j.ctx.activate(p,h,g,S,_):bs(p,h,g,j,E,S,_):Ts(c,p,_)},bs=(c,p,h,g,j,E,S)=>{const x=c.component=Hl(c,g,j);if(Jt(c)&&(x.ctx.renderer=R),Wl(x),x.asyncDep){if(j&&j.registerDep(x,de),!c.el){const _=x.subTree=ee(He);C(null,_,p,h)}return}de(x,c,p,h,j,E,S)},Ts=(c,p,h)=>{const g=p.component=c.component;if(sl(c,p,h))if(g.asyncDep&&!g.asyncResolved){Z(g,p,h);return}else g.next=p,Qo(g.update),g.update();else p.el=c.el,g.vnode=p},de=(c,p,h,g,j,E,S)=>{const x=()=>{if(c.isMounted){let{next:M,bu:O,u:L,parent:$,vnode:V}=c,te=M,G;js(c,!1),M?(M.el=V.el,Z(c,M,S)):M=V,O&&rn(O),(G=M.props&&M.props.onVnodeBeforeUpdate)&&Ke(G,$,M,V),js(c,!0);const ue=an(c),Ne=c.subTree;c.subTree=ue,A(Ne,ue,m(Ne.el),q(Ne),c,j,E),M.el=ue.el,te===null&&tl(c,ue.el),L&&_e(L,j),(G=M.props&&M.props.onVnodeUpdated)&&_e(()=>Ke(G,$,M,V),j)}else{let M;const{el:O,props:L}=p,{bm:$,m:V,parent:te}=c,G=It(p);if(js(c,!1),$&&rn($),!G&&(M=L&&L.onVnodeBeforeMount)&&Ke(M,te,p),js(c,!0),O&&Q){const ue=()=>{c.subTree=an(c),Q(O,c.subTree,c,j,null)};G?p.type.__asyncLoader().then(()=>!c.isUnmounted&&ue()):ue()}else{const ue=c.subTree=an(c);A(null,ue,h,g,c,j,E),p.el=ue.el}if(V&&_e(V,j),!G&&(M=L&&L.onVnodeMounted)){const ue=p;_e(()=>Ke(M,te,ue),j)}(p.shapeFlag&256||te&&It(te.vnode)&&te.vnode.shapeFlag&256)&&c.a&&_e(c.a,j),c.isMounted=!0,p=h=g=null}},_=c.effect=new Vn(x,()=>Gn(y),c.scope),y=c.update=()=>_.run();y.id=c.uid,js(c,!0),y()},Z=(c,p,h)=>{p.component=c;const g=c.vnode.props;c.vnode=p,c.next=null,Sl(c,p.props,g,h),Pl(c,p.children,h),Ys(),Ar(),Xs()},K=(c,p,h,g,j,E,S,x,_=!1)=>{const y=c&&c.children,M=c?c.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:$}=p;if(L>0){if(L&128){ls(y,O,h,g,j,E,S,x,_);return}else if(L&256){Ze(y,O,h,g,j,E,S,x,_);return}}$&8?(M&16&&ve(y,j,E),O!==y&&u(h,O)):M&16?$&16?ls(y,O,h,g,j,E,S,x,_):ve(y,j,E,!0):(M&8&&u(h,""),$&16&&F(O,h,g,j,E,S,x,_))},Ze=(c,p,h,g,j,E,S,x,_)=>{c=c||$s,p=p||$s;const y=c.length,M=p.length,O=Math.min(y,M);let L;for(L=0;L<O;L++){const $=p[L]=_?ds(p[L]):Qe(p[L]);A(c[L],$,h,null,j,E,S,x,_)}y>M?ve(c,j,E,!0,!1,O):F(p,h,g,j,E,S,x,_,O)},ls=(c,p,h,g,j,E,S,x,_)=>{let y=0;const M=p.length;let O=c.length-1,L=M-1;for(;y<=O&&y<=L;){const $=c[y],V=p[y]=_?ds(p[y]):Qe(p[y]);if(_s($,V))A($,V,h,null,j,E,S,x,_);else break;y++}for(;y<=O&&y<=L;){const $=c[O],V=p[L]=_?ds(p[L]):Qe(p[L]);if(_s($,V))A($,V,h,null,j,E,S,x,_);else break;O--,L--}if(y>O){if(y<=L){const $=L+1,V=$<M?p[$].el:g;for(;y<=L;)A(null,p[y]=_?ds(p[y]):Qe(p[y]),h,V,j,E,S,x,_),y++}}else if(y>L)for(;y<=O;)xe(c[y],j,E,!0),y++;else{const $=y,V=y,te=new Map;for(y=V;y<=L;y++){const Ie=p[y]=_?ds(p[y]):Qe(p[y]);Ie.key!=null&&te.set(Ie.key,y)}let G,ue=0;const Ne=L-V+1;let ws=!1,vr=0;const tt=new Array(Ne);for(y=0;y<Ne;y++)tt[y]=0;for(y=$;y<=O;y++){const Ie=c[y];if(ue>=Ne){xe(Ie,j,E,!0);continue}let Je;if(Ie.key!=null)Je=te.get(Ie.key);else for(G=V;G<=L;G++)if(tt[G-V]===0&&_s(Ie,p[G])){Je=G;break}Je===void 0?xe(Ie,j,E,!0):(tt[Je-V]=y+1,Je>=vr?vr=Je:ws=!0,A(Ie,p[Je],h,null,j,E,S,x,_),ue++)}const gr=ws?Dl(tt):$s;for(G=gr.length-1,y=Ne-1;y>=0;y--){const Ie=V+y,Je=p[Ie],br=Ie+1<M?p[Ie+1].el:g;tt[y]===0?A(null,Je,h,br,j,E,S,x,_):ws&&(G<0||y!==gr[G]?We(Je,h,br,2):G--)}}},We=(c,p,h,g,j=null)=>{const{el:E,type:S,transition:x,children:_,shapeFlag:y}=c;if(y&6){We(c.component.subTree,p,h,g);return}if(y&128){c.suspense.move(p,h,g);return}if(y&64){S.move(c,p,h,R);return}if(S===se){n(E,p,h);for(let O=0;O<_.length;O++)We(_[O],p,h,g);n(c.anchor,p,h);return}if(S===un){P(c,p,h);return}if(g!==2&&y&1&&x)if(g===0)x.beforeEnter(E),n(E,p,h),_e(()=>x.enter(E),j);else{const{leave:O,delayLeave:L,afterLeave:$}=x,V=()=>n(E,p,h),te=()=>{O(E,()=>{V(),$&&$()})};L?L(E,V,te):te()}else n(E,p,h)},xe=(c,p,h,g=!1,j=!1)=>{const{type:E,props:S,ref:x,children:_,dynamicChildren:y,shapeFlag:M,patchFlag:O,dirs:L}=c;if(x!=null&&Tn(x,null,h,c,!0),M&256){p.ctx.deactivate(c);return}const $=M&1&&L,V=!It(c);let te;if(V&&(te=S&&S.onVnodeBeforeUnmount)&&Ke(te,p,c),M&6)bt(c.component,h,g);else{if(M&128){c.suspense.unmount(h,g);return}$&&qs(c,null,p,"beforeUnmount"),M&64?c.type.remove(c,p,h,j,R,g):y&&(E!==se||O>0&&O&64)?ve(y,p,h,!1,!0):(E===se&&O&384||!j&&M&16)&&ve(_,p,h),g&&Ps(c)}(V&&(te=S&&S.onVnodeUnmounted)||$)&&_e(()=>{te&&Ke(te,p,c),$&&qs(c,null,p,"unmounted")},h)},Ps=c=>{const{type:p,el:h,anchor:g,transition:j}=c;if(p===se){Os(h,g);return}if(p===un){H(c);return}const E=()=>{r(h),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(c.shapeFlag&1&&j&&!j.persisted){const{leave:S,delayLeave:x}=j,_=()=>S(h,E);x?x(c.el,E,_):_()}else E()},Os=(c,p)=>{let h;for(;c!==p;)h=f(c),r(c),c=h;r(p)},bt=(c,p,h)=>{const{bum:g,scope:j,update:E,subTree:S,um:x}=c;g&&rn(g),j.stop(),E&&(E.active=!1,xe(S,c,p,h)),x&&_e(x,p),_e(()=>{c.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ve=(c,p,h,g=!1,j=!1,E=0)=>{for(let S=E;S<c.length;S++)xe(c[S],p,h,g,j)},q=c=>c.shapeFlag&6?q(c.component.subTree):c.shapeFlag&128?c.suspense.next():f(c.anchor||c.el),T=(c,p,h)=>{c==null?p._vnode&&xe(p._vnode,null,null,!0):A(p._vnode||null,c,p,null,null,null,h),Ar(),Ji(),p._vnode=c},R={p:A,um:xe,m:We,r:Ps,mt:bs,mc:F,pc:K,pbc:ne,n:q,o:e};let w,Q;return s&&([w,Q]=s(R)),{render:T,hydrate:w,createApp:wl(T,w)}}function js({effect:e,update:s},t){e.allowRecurse=s.allowRecurse=t}function ma(e,s,t=!1){const n=e.children,r=s.children;if(B(n)&&B(r))for(let i=0;i<n.length;i++){const a=n[i];let o=r[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[i]=ds(r[i]),o.el=a.el),t||ma(a,o)),o.type===Qt&&(o.el=a.el)}}function Dl(e){const s=e.slice(),t=[0];let n,r,i,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(r=t[t.length-1],e[r]<d){s[n]=r,t.push(n);continue}for(i=0,a=t.length-1;i<a;)o=i+a>>1,e[t[o]]<d?i=o+1:a=o;d<e[t[i]]&&(i>0&&(s[n]=t[i-1]),t[i]=n)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=s[a];return t}const Nl=e=>e.__isTeleport,se=Symbol(void 0),Qt=Symbol(void 0),He=Symbol(void 0),un=Symbol(void 0),ot=[];let ke=null;function U(e=!1){ot.push(ke=e?null:[])}function $l(){ot.pop(),ke=ot[ot.length-1]||null}let ft=1;function Nr(e){ft+=e}function fa(e){return e.dynamicChildren=ft>0?ke||$s:null,$l(),ft>0&&ke&&ke.push(e),e}function z(e,s,t,n,r,i){return fa(b(e,s,t,n,r,i,!0))}function ha(e,s,t,n,r){return fa(ee(e,s,t,n,r,!0))}function Pn(e){return e?e.__v_isVNode===!0:!1}function _s(e,s){return e.type===s.type&&e.key===s.key}const Yt="__vInternal",va=({key:e})=>e??null,Tt=({ref:e,ref_key:s,ref_for:t})=>e!=null?ce(e)||be(e)||k(e)?{i:Me,r:e,k:s,f:!!t}:e:null;function b(e,s=null,t=null,n=0,r=null,i=e===se?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:s,key:s&&va(s),ref:s&&Tt(s),scopeId:Yi,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Me};return o?(tr(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=ce(t)?8:16),ft>0&&!a&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const ee=Ul;function Ul(e,s=null,t=null,n=0,r=null,i=!1){if((!e||e===ql)&&(e=He),Pn(e)){const o=gs(e,s,!0);return t&&tr(o,t),ft>0&&!i&&ke&&(o.shapeFlag&6?ke[ke.indexOf(e)]=o:ke.push(o)),o.patchFlag|=-2,o}if(Xl(e)&&(e=e.__vccOpts),s){s=Bl(s);let{class:o,style:l}=s;o&&!ce(o)&&(s.class=Un(o)),ie(l)&&(Ni(l)&&!B(l)&&(l=qe({},l)),s.style=le(l))}const a=ce(e)?1:nl(e)?128:Nl(e)?64:ie(e)?4:k(e)?2:0;return b(e,s,t,n,r,a,i,!0)}function Bl(e){return e?Ni(e)||Yt in e?qe({},e):e:null}function gs(e,s,t=!1){const{props:n,ref:r,patchFlag:i,children:a}=e,o=s?zl(n||{},s):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&va(o),ref:s&&s.ref?t&&r?B(r)?r.concat(Tt(s)):[r,Tt(s)]:Tt(s):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:s&&e.type!==se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gs(e.ssContent),ssFallback:e.ssFallback&&gs(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Xt(e=" ",s=0){return ee(Qt,null,e,s)}function Pt(e="",s=!1){return s?(U(),ha(He,null,e)):ee(He,null,e)}function Qe(e){return e==null||typeof e=="boolean"?ee(He):B(e)?ee(se,null,e.slice()):typeof e=="object"?ds(e):ee(Qt,null,String(e))}function ds(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gs(e)}function tr(e,s){let t=0;const{shapeFlag:n}=e;if(s==null)s=null;else if(B(s))t=16;else if(typeof s=="object")if(n&65){const r=s.default;r&&(r._c&&(r._d=!1),tr(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=s._;!r&&!(Yt in s)?s._ctx=Me:r===3&&Me&&(Me.slots._===1?s._=1:(s._=2,e.patchFlag|=1024))}else k(s)?(s={default:s,_ctx:Me},t=32):(s=String(s),n&64?(t=16,s=[Xt(s)]):t=8);e.children=s,e.shapeFlag|=t}function zl(...e){const s={};for(let t=0;t<e.length;t++){const n=e[t];for(const r in n)if(r==="class")s.class!==n.class&&(s.class=Un([s.class,n.class]));else if(r==="style")s.style=le([s.style,n.style]);else if(Bt(r)){const i=s[r],a=n[r];a&&i!==a&&!(B(i)&&i.includes(a))&&(s[r]=i?[].concat(i,a):a)}else r!==""&&(s[r]=n[r])}return s}function Ke(e,s,t,n=null){Le(e,s,7,[t,n])}const kl=pa();let Fl=0;function Hl(e,s,t){const n=e.type,r=(s?s.appContext:e.appContext)||kl,i={uid:Fl++,vnode:e,type:n,parent:s,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:la(n,r),emitsOptions:Qi(n,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:n.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=s?s.root:i,i.emit=Go.bind(null,i),e.ce&&e.ce(i),i}let oe=null;const Vl=()=>oe||Me,Fs=e=>{oe=e,e.scope.on()},Ss=()=>{oe&&oe.scope.off(),oe=null};function ga(e){return e.vnode.shapeFlag&4}let ht=!1;function Wl(e,s=!1){ht=s;const{props:t,children:n}=e.vnode,r=ga(e);Al(e,t,r,s),Tl(e,n);const i=r?Jl(e,s):void 0;return ht=!1,i}function Jl(e,s){const t=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,El));const{setup:n}=t;if(n){const r=e.setupContext=n.length>1?Ql(e):null;Fs(e),Ys();const i=hs(n,e,0,[e.props,r]);if(Xs(),Ss(),xi(i)){if(i.then(Ss,Ss),s)return i.then(a=>{$r(e,a,s)}).catch(a=>{Vt(a,e,0)});e.asyncDep=i}else $r(e,i,s)}else ba(e,s)}function $r(e,s,t){k(s)?e.type.__ssrInlineRender?e.ssrRender=s:e.render=s:ie(s)&&(e.setupState=ki(s)),ba(e,t)}let Ur;function ba(e,s,t){const n=e.type;if(!e.render){if(!s&&Ur&&!n.render){const r=n.template||er(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=n,d=qe(qe({isCustomElement:i,delimiters:o},a),l);n.render=Ur(r,d)}}e.render=n.render||Fe}Fs(e),Ys(),yl(e),Xs(),Ss()}function Kl(e){return new Proxy(e.attrs,{get(s,t){return Ce(e,"get","$attrs"),s[t]}})}function Ql(e){const s=n=>{e.exposed=n||{}};let t;return{get attrs(){return t||(t=Kl(e))},slots:e.slots,emit:e.emit,expose:s}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ki($i(e.exposed)),{get(s,t){if(t in s)return s[t];if(t in at)return at[t](e)},has(s,t){return t in s||t in at}}))}function Yl(e,s=!0){return k(e)?e.displayName||e.name:e.name||s&&e.__name}function Xl(e){return k(e)&&"__vccOpts"in e}const Re=(e,s)=>Wo(e,s,ht);function qa(e,s,t){const n=arguments.length;return n===2?ie(s)&&!B(s)?Pn(s)?ee(e,null,[s]):ee(e,s):ee(e,null,s):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Pn(t)&&(t=[t]),ee(e,s,t))}const Gl=Symbol(""),Zl=()=>Xe(Gl),eu="3.2.47",su="http://www.w3.org/2000/svg",Rs=typeof document<"u"?document:null,Br=Rs&&Rs.createElement("template"),tu={insert:(e,s,t)=>{s.insertBefore(e,t||null)},remove:e=>{const s=e.parentNode;s&&s.removeChild(e)},createElement:(e,s,t,n)=>{const r=s?Rs.createElementNS(su,e):Rs.createElement(e,t?{is:t}:void 0);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Rs.createTextNode(e),createComment:e=>Rs.createComment(e),setText:(e,s)=>{e.nodeValue=s},setElementText:(e,s)=>{e.textContent=s},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rs.querySelector(e),setScopeId(e,s){e.setAttribute(s,"")},insertStaticContent(e,s,t,n,r,i){const a=t?t.previousSibling:s.lastChild;if(r&&(r===i||r.nextSibling))for(;s.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{Br.innerHTML=n?`<svg>${e}</svg>`:e;const o=Br.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}s.insertBefore(o,t)}return[a?a.nextSibling:s.firstChild,t?t.previousSibling:s.lastChild]}};function nu(e,s,t){const n=e._vtc;n&&(s=(s?[s,...n]:[...n]).join(" ")),s==null?e.removeAttribute("class"):t?e.setAttribute("class",s):e.className=s}function ru(e,s,t){const n=e.style,r=ce(t);if(t&&!r){if(s&&!ce(s))for(const i in s)t[i]==null&&On(n,i,"");for(const i in t)On(n,i,t[i])}else{const i=n.display;r?s!==t&&(n.cssText=t):s&&e.removeAttribute("style"),"_vod"in e&&(n.display=i)}}const zr=/\s*!important$/;function On(e,s,t){if(B(t))t.forEach(n=>On(e,s,n));else if(t==null&&(t=""),s.startsWith("--"))e.setProperty(s,t);else{const n=iu(e,s);zr.test(t)?e.setProperty(Qs(n),t.replace(zr,""),"important"):e[n]=t}}const kr=["Webkit","Moz","ms"],cn={};function iu(e,s){const t=cn[s];if(t)return t;let n=Ge(s);if(n!=="filter"&&n in e)return cn[s]=n;n=Ft(n);for(let r=0;r<kr.length;r++){const i=kr[r]+n;if(i in e)return cn[s]=i}return s}const Fr="http://www.w3.org/1999/xlink";function au(e,s,t,n,r){if(n&&s.startsWith("xlink:"))t==null?e.removeAttributeNS(Fr,s.slice(6,s.length)):e.setAttributeNS(Fr,s,t);else{const i=to(s);t==null||i&&!ji(t)?e.removeAttribute(s):e.setAttribute(s,i?"":t)}}function ou(e,s,t,n,r,i,a){if(s==="innerHTML"||s==="textContent"){n&&a(n,r,i),e[s]=t??"";return}if(s==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(s);return}let o=!1;if(t===""||t==null){const l=typeof e[s];l==="boolean"?t=ji(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{e[s]=t}catch{}o&&e.removeAttribute(s)}function lu(e,s,t,n){e.addEventListener(s,t,n)}function uu(e,s,t,n){e.removeEventListener(s,t,n)}function cu(e,s,t,n,r=null){const i=e._vei||(e._vei={}),a=i[s];if(n&&a)a.value=n;else{const[o,l]=du(s);if(n){const d=i[s]=fu(n,r);lu(e,o,d,l)}else a&&(uu(e,o,a,l),i[s]=void 0)}}const Hr=/(?:Once|Passive|Capture)$/;function du(e){let s;if(Hr.test(e)){s={};let n;for(;n=e.match(Hr);)e=e.slice(0,e.length-n[0].length),s[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qs(e.slice(2)),s]}let dn=0;const pu=Promise.resolve(),mu=()=>dn||(pu.then(()=>dn=0),dn=Date.now());function fu(e,s){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Le(hu(n,t.value),s,5,[n])};return t.value=e,t.attached=mu(),t}function hu(e,s){if(B(s)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},s.map(n=>r=>!r._stopped&&n&&n(r))}else return s}const Vr=/^on[a-z]/,vu=(e,s,t,n,r=!1,i,a,o,l)=>{s==="class"?nu(e,n,r):s==="style"?ru(e,t,n):Bt(s)?Bn(s)||cu(e,s,t,n,a):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):gu(e,s,n,r))?ou(e,s,n,i,a,o,l):(s==="true-value"?e._trueValue=n:s==="false-value"&&(e._falseValue=n),au(e,s,n,r))};function gu(e,s,t,n){return n?!!(s==="innerHTML"||s==="textContent"||s in e&&Vr.test(s)&&k(t)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&e.tagName==="INPUT"||s==="type"&&e.tagName==="TEXTAREA"||Vr.test(s)&&ce(t)?!1:s in e}const bu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ll.props;const qu=qe({patchProp:vu},tu);let Wr;function ju(){return Wr||(Wr=Ml(qu))}const Eu=(...e)=>{const s=ju().createApp(...e),{mount:t}=s;return s.mount=n=>{const r=yu(n);if(!r)return;const i=s._component;!k(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},s};function yu(e){return ce(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ds=typeof window<"u";function xu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Y=Object.assign;function pn(e,s){const t={};for(const n in s){const r=s[n];t[n]=Ve(r)?r.map(e):e(r)}return t}const lt=()=>{},Ve=Array.isArray,_u=/\/$/,Ru=e=>e.replace(_u,"");function mn(e,s,t="/"){let n,r={},i="",a="";const o=s.indexOf("#");let l=s.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(n=s.slice(0,l),i=s.slice(l+1,o>-1?o:s.length),r=e(i)),o>-1&&(n=n||s.slice(0,o),a=s.slice(o,s.length)),n=Iu(n??s,t),{fullPath:n+(i&&"?")+i+a,path:n,query:r,hash:a}}function Cu(e,s){const t=s.query?e(s.query):"";return s.path+(t&&"?")+t+(s.hash||"")}function Jr(e,s){return!s||!e.toLowerCase().startsWith(s.toLowerCase())?e:e.slice(s.length)||"/"}function Au(e,s,t){const n=s.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Hs(s.matched[n],t.matched[r])&&ja(s.params,t.params)&&e(s.query)===e(t.query)&&s.hash===t.hash}function Hs(e,s){return(e.aliasOf||e)===(s.aliasOf||s)}function ja(e,s){if(Object.keys(e).length!==Object.keys(s).length)return!1;for(const t in e)if(!Su(e[t],s[t]))return!1;return!0}function Su(e,s){return Ve(e)?Kr(e,s):Ve(s)?Kr(s,e):e===s}function Kr(e,s){return Ve(s)?e.length===s.length&&e.every((t,n)=>t===s[n]):e.length===1&&e[0]===s}function Iu(e,s){if(e.startsWith("/"))return e;if(!e)return s;const t=s.split("/"),n=e.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let i=t.length-1,a,o;for(a=0;a<n.length;a++)if(o=n[a],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}var vt;(function(e){e.pop="pop",e.push="push"})(vt||(vt={}));var ut;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ut||(ut={}));function Tu(e){if(!e)if(Ds){const s=document.querySelector("base");e=s&&s.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ru(e)}const Pu=/^[^#]+#/;function Ou(e,s){return e.replace(Pu,"#")+s}function wu(e,s){const t=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:s.behavior,left:n.left-t.left-(s.left||0),top:n.top-t.top-(s.top||0)}}const Gt=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mu(e){let s;if("el"in e){const t=e.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;s=wu(r,e)}else s=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function Qr(e,s){return(history.state?history.state.position-s:-1)+e}const wn=new Map;function Lu(e,s){wn.set(e,s)}function Du(e){const s=wn.get(e);return wn.delete(e),s}let Nu=()=>location.protocol+"//"+location.host;function Ea(e,s){const{pathname:t,search:n,hash:r}=s,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Jr(l,"")}return Jr(t,e)+n+r}function $u(e,s,t,n){let r=[],i=[],a=null;const o=({state:f})=>{const v=Ea(e,location),I=t.value,A=s.value;let N=0;if(f){if(t.value=v,s.value=f,a&&a===I){a=null;return}N=A?f.position-A.position:0}else n(v);r.forEach(C=>{C(t.value,I,{delta:N,type:vt.pop,direction:N?N>0?ut.forward:ut.back:ut.unknown})})};function l(){a=t.value}function d(f){r.push(f);const v=()=>{const I=r.indexOf(f);I>-1&&r.splice(I,1)};return i.push(v),v}function u(){const{history:f}=window;f.state&&f.replaceState(Y({},f.state,{scroll:Gt()}),"")}function m(){for(const f of i)f();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:d,destroy:m}}function Yr(e,s,t,n=!1,r=!1){return{back:e,current:s,forward:t,replaced:n,position:window.history.length,scroll:r?Gt():null}}function Uu(e){const{history:s,location:t}=window,n={value:Ea(e,t)},r={value:s.state};r.value||i(n.value,{back:null,current:n.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function i(l,d,u){const m=e.indexOf("#"),f=m>-1?(t.host&&document.querySelector("base")?e:e.slice(m))+l:Nu()+e+l;try{s[u?"replaceState":"pushState"](d,"",f),r.value=d}catch(v){console.error(v),t[u?"replace":"assign"](f)}}function a(l,d){const u=Y({},s.state,Yr(r.value.back,l,r.value.forward,!0),d,{position:r.value.position});i(l,u,!0),n.value=l}function o(l,d){const u=Y({},r.value,s.state,{forward:l,scroll:Gt()});i(u.current,u,!0);const m=Y({},Yr(n.value,l,null),{position:u.position+1},d);i(l,m,!1),n.value=l}return{location:n,state:r,push:o,replace:a}}function Bu(e){e=Tu(e);const s=Uu(e),t=$u(e,s.state,s.location,s.replace);function n(i,a=!0){a||t.pauseListeners(),history.go(i)}const r=Y({location:"",base:e,go:n,createHref:Ou.bind(null,e)},s,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>s.state.value}),r}function zu(e){return typeof e=="string"||e&&typeof e=="object"}function ya(e){return typeof e=="string"||typeof e=="symbol"}const cs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=Symbol("");var Xr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xr||(Xr={}));function Vs(e,s){return Y(new Error,{type:e,[xa]:!0},s)}function es(e,s){return e instanceof Error&&xa in e&&(s==null||!!(e.type&s))}const Gr="[^/]+?",ku={sensitive:!1,strict:!1,start:!0,end:!0},Fu=/[.+*?^${}()[\]/\\]/g;function Hu(e,s){const t=Y({},ku,s),n=[];let r=t.start?"^":"";const i=[];for(const d of e){const u=d.length?[]:[90];t.strict&&!d.length&&(r+="/");for(let m=0;m<d.length;m++){const f=d[m];let v=40+(t.sensitive?.25:0);if(f.type===0)m||(r+="/"),r+=f.value.replace(Fu,"\\$&"),v+=40;else if(f.type===1){const{value:I,repeatable:A,optional:N,regexp:C}=f;i.push({name:I,repeatable:A,optional:N});const D=C||Gr;if(D!==Gr){v+=10;try{new RegExp(`(${D})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${I}" (${D}): `+H.message)}}let P=A?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;m||(P=N&&d.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),r+=P,v+=20,N&&(v+=-8),A&&(v+=-20),D===".*"&&(v+=-50)}u.push(v)}n.push(u)}if(t.strict&&t.end){const d=n.length-1;n[d][n[d].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(d){const u=d.match(a),m={};if(!u)return null;for(let f=1;f<u.length;f++){const v=u[f]||"",I=i[f-1];m[I.name]=v&&I.repeatable?v.split("/"):v}return m}function l(d){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const v of f)if(v.type===0)u+=v.value;else if(v.type===1){const{value:I,repeatable:A,optional:N}=v,C=I in d?d[I]:"";if(Ve(C)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const D=Ve(C)?C.join("/"):C;if(!D)if(N)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${I}"`);u+=D}}return u||"/"}return{re:a,score:n,keys:i,parse:o,stringify:l}}function Vu(e,s){let t=0;for(;t<e.length&&t<s.length;){const n=s[t]-e[t];if(n)return n;t++}return e.length<s.length?e.length===1&&e[0]===40+40?-1:1:e.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Wu(e,s){let t=0;const n=e.score,r=s.score;for(;t<n.length&&t<r.length;){const i=Vu(n[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-n.length)===1){if(Zr(n))return 1;if(Zr(r))return-1}return r.length-n.length}function Zr(e){const s=e[e.length-1];return e.length>0&&s[s.length-1]<0}const Ju={type:0,value:""},Ku=/[a-zA-Z0-9_]/;function Qu(e){if(!e)return[[]];if(e==="/")return[[Ju]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function s(v){throw new Error(`ERR (${t})/"${d}": ${v}`)}let t=0,n=t;const r=[];let i;function a(){i&&r.push(i),i=[]}let o=0,l,d="",u="";function m(){d&&(t===0?i.push({type:0,value:d}):t===1||t===2||t===3?(i.length>1&&(l==="*"||l==="+")&&s(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):s("Invalid state to consume buffer"),d="")}function f(){d+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(d&&m(),a()):l===":"?(m(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:Ku.test(l)?f():(m(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:m(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:s("Unknown state");break}}return t===2&&s(`Unfinished custom RegExp for param "${d}"`),m(),a(),r}function Yu(e,s,t){const n=Hu(Qu(e.path),t),r=Y(n,{record:e,parent:s,children:[],alias:[]});return s&&!r.record.aliasOf==!s.record.aliasOf&&s.children.push(r),r}function Xu(e,s){const t=[],n=new Map;s=ti({strict:!1,end:!0,sensitive:!1},s);function r(u){return n.get(u)}function i(u,m,f){const v=!f,I=Gu(u);I.aliasOf=f&&f.record;const A=ti(s,u),N=[I];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of P)N.push(Y({},I,{components:f?f.record.components:I.components,path:H,aliasOf:f?f.record:I}))}let C,D;for(const P of N){const{path:H}=P;if(m&&H[0]!=="/"){const X=m.record.path,fe=X[X.length-1]==="/"?"":"/";P.path=m.record.path+(H&&fe+H)}if(C=Yu(P,m,A),f?f.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),v&&u.name&&!si(C)&&a(u.name)),I.children){const X=I.children;for(let fe=0;fe<X.length;fe++)i(X[fe],C,f&&f.children[fe])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return D?()=>{a(D)}:lt}function a(u){if(ya(u)){const m=n.get(u);m&&(n.delete(u),t.splice(t.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=t.indexOf(u);m>-1&&(t.splice(m,1),u.record.name&&n.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let m=0;for(;m<t.length&&Wu(u,t[m])>=0&&(u.record.path!==t[m].record.path||!_a(u,t[m]));)m++;t.splice(m,0,u),u.record.name&&!si(u)&&n.set(u.record.name,u)}function d(u,m){let f,v={},I,A;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Vs(1,{location:u});A=f.record.name,v=Y(ei(m.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&ei(u.params,f.keys.map(D=>D.name))),I=f.stringify(v)}else if("path"in u)I=u.path,f=t.find(D=>D.re.test(I)),f&&(v=f.parse(I),A=f.record.name);else{if(f=m.name?n.get(m.name):t.find(D=>D.re.test(m.path)),!f)throw Vs(1,{location:u,currentLocation:m});A=f.record.name,v=Y({},m.params,u.params),I=f.stringify(v)}const N=[];let C=f;for(;C;)N.unshift(C.record),C=C.parent;return{name:A,path:I,params:v,matched:N,meta:ec(N)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:d,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function ei(e,s){const t={};for(const n of s)n in e&&(t[n]=e[n]);return t}function Gu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Zu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Zu(e){const s={},t=e.props||!1;if("component"in e)s.default=t;else for(const n in e.components)s[n]=typeof t=="boolean"?t:t[n];return s}function si(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ec(e){return e.reduce((s,t)=>Y(s,t.meta),{})}function ti(e,s){const t={};for(const n in e)t[n]=n in s?s[n]:e[n];return t}function _a(e,s){return s.children.some(t=>t===e||_a(e,t))}const Ra=/#/g,sc=/&/g,tc=/\//g,nc=/=/g,rc=/\?/g,Ca=/\+/g,ic=/%5B/g,ac=/%5D/g,Aa=/%5E/g,oc=/%60/g,Sa=/%7B/g,lc=/%7C/g,Ia=/%7D/g,uc=/%20/g;function rr(e){return encodeURI(""+e).replace(lc,"|").replace(ic,"[").replace(ac,"]")}function cc(e){return rr(e).replace(Sa,"{").replace(Ia,"}").replace(Aa,"^")}function Mn(e){return rr(e).replace(Ca,"%2B").replace(uc,"+").replace(Ra,"%23").replace(sc,"%26").replace(oc,"`").replace(Sa,"{").replace(Ia,"}").replace(Aa,"^")}function dc(e){return Mn(e).replace(nc,"%3D")}function pc(e){return rr(e).replace(Ra,"%23").replace(rc,"%3F")}function mc(e){return e==null?"":pc(e).replace(tc,"%2F")}function $t(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function fc(e){const s={};if(e===""||e==="?")return s;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Ca," "),a=i.indexOf("="),o=$t(a<0?i:i.slice(0,a)),l=a<0?null:$t(i.slice(a+1));if(o in s){let d=s[o];Ve(d)||(d=s[o]=[d]),d.push(l)}else s[o]=l}return s}function ni(e){let s="";for(let t in e){const n=e[t];if(t=dc(t),n==null){n!==void 0&&(s+=(s.length?"&":"")+t);continue}(Ve(n)?n.map(i=>i&&Mn(i)):[n&&Mn(n)]).forEach(i=>{i!==void 0&&(s+=(s.length?"&":"")+t,i!=null&&(s+="="+i))})}return s}function hc(e){const s={};for(const t in e){const n=e[t];n!==void 0&&(s[t]=Ve(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return s}const vc=Symbol(""),ri=Symbol(""),ir=Symbol(""),ar=Symbol(""),Ln=Symbol("");function nt(){let e=[];function s(n){return e.push(n),()=>{const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:s,list:()=>e,reset:t}}function ps(e,s,t,n,r){const i=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=m=>{m===!1?o(Vs(4,{from:t,to:s})):m instanceof Error?o(m):zu(m)?o(Vs(2,{from:s,to:m})):(i&&n.enterCallbacks[r]===i&&typeof m=="function"&&i.push(m),a())},d=e.call(n&&n.instances[r],s,t,l);let u=Promise.resolve(d);e.length<3&&(u=u.then(l)),u.catch(m=>o(m))})}function fn(e,s,t,n){const r=[];for(const i of e)for(const a in i.components){let o=i.components[a];if(!(s!=="beforeRouteEnter"&&!i.instances[a]))if(gc(o)){const d=(o.__vccOpts||o)[s];d&&r.push(ps(d,t,n,i,a))}else{let l=o();r.push(()=>l.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const u=xu(d)?d.default:d;i.components[a]=u;const f=(u.__vccOpts||u)[s];return f&&ps(f,t,n,i,a)()}))}}return r}function gc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ii(e){const s=Xe(ir),t=Xe(ar),n=Re(()=>s.resolve(As(e.to))),r=Re(()=>{const{matched:l}=n.value,{length:d}=l,u=l[d-1],m=t.matched;if(!u||!m.length)return-1;const f=m.findIndex(Hs.bind(null,u));if(f>-1)return f;const v=ai(l[d-2]);return d>1&&ai(u)===v&&m[m.length-1].path!==v?m.findIndex(Hs.bind(null,l[d-2])):f}),i=Re(()=>r.value>-1&&jc(t.params,n.value.params)),a=Re(()=>r.value>-1&&r.value===t.matched.length-1&&ja(t.params,n.value.params));function o(l={}){return qc(l)?s[As(e.replace)?"replace":"push"](As(e.to)).catch(lt):Promise.resolve()}return{route:n,href:Re(()=>n.value.href),isActive:i,isExactActive:a,navigate:o}}const bc=sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ii,setup(e,{slots:s}){const t=gt(ii(e)),{options:n}=Xe(ir),r=Re(()=>({[oi(e.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[oi(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=s.default&&s.default(t);return e.custom?i:qa("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),os=bc;function qc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const s=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return e.preventDefault&&e.preventDefault(),!0}}function jc(e,s){for(const t in s){const n=s[t],r=e[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Ve(r)||r.length!==n.length||n.some((i,a)=>i!==r[a]))return!1}return!0}function ai(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oi=(e,s,t)=>e??s??t,Ec=sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:s,slots:t}){const n=Xe(Ln),r=Re(()=>e.route||n.value),i=Xe(ri,0),a=Re(()=>{let d=As(i);const{matched:u}=r.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),o=Re(()=>r.value.matched[a.value]);At(ri,Re(()=>a.value+1)),At(vc,o),At(Ln,r);const l=Es();return St(()=>[l.value,o.value,e.name],([d,u,m],[f,v,I])=>{u&&(u.instances[m]=d,v&&v!==u&&d&&d===f&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),d&&u&&(!v||!Hs(u,v)||!f)&&(u.enterCallbacks[m]||[]).forEach(A=>A(d))},{flush:"post"}),()=>{const d=r.value,u=e.name,m=o.value,f=m&&m.components[u];if(!f)return li(t.default,{Component:f,route:d});const v=m.props[u],I=v?v===!0?d.params:typeof v=="function"?v(d):v:null,N=qa(f,Y({},I,s,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(m.instances[u]=null)},ref:l}));return li(t.default,{Component:N,route:d})||N}}});function li(e,s){if(!e)return null;const t=e(s);return t.length===1?t[0]:t}const Ta=Ec;function yc(e){const s=Xu(e.routes,e),t=e.parseQuery||fc,n=e.stringifyQuery||ni,r=e.history,i=nt(),a=nt(),o=nt(),l=ko(cs);let d=cs;Ds&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pn.bind(null,q=>""+q),m=pn.bind(null,mc),f=pn.bind(null,$t);function v(q,T){let R,w;return ya(q)?(R=s.getRecordMatcher(q),w=T):w=q,s.addRoute(w,R)}function I(q){const T=s.getRecordMatcher(q);T&&s.removeRoute(T)}function A(){return s.getRoutes().map(q=>q.record)}function N(q){return!!s.getRecordMatcher(q)}function C(q,T){if(T=Y({},T||l.value),typeof q=="string"){const h=mn(t,q,T.path),g=s.resolve({path:h.path},T),j=r.createHref(h.fullPath);return Y(h,g,{params:f(g.params),hash:$t(h.hash),redirectedFrom:void 0,href:j})}let R;if("path"in q)R=Y({},q,{path:mn(t,q.path,T.path).path});else{const h=Y({},q.params);for(const g in h)h[g]==null&&delete h[g];R=Y({},q,{params:m(h)}),T.params=m(T.params)}const w=s.resolve(R,T),Q=q.hash||"";w.params=u(f(w.params));const c=Cu(n,Y({},q,{hash:cc(Q),path:w.path})),p=r.createHref(c);return Y({fullPath:c,hash:Q,query:n===ni?hc(q.query):q.query||{}},w,{redirectedFrom:void 0,href:p})}function D(q){return typeof q=="string"?mn(t,q,l.value.path):Y({},q)}function P(q,T){if(d!==q)return Vs(8,{from:T,to:q})}function H(q){return ye(q)}function X(q){return H(Y(D(q),{replace:!0}))}function fe(q){const T=q.matched[q.matched.length-1];if(T&&T.redirect){const{redirect:R}=T;let w=typeof R=="function"?R(q):R;return typeof w=="string"&&(w=w.includes("?")||w.includes("#")?w=D(w):{path:w},w.params={}),Y({query:q.query,hash:q.hash,params:"path"in w?{}:q.params},w)}}function ye(q,T){const R=d=C(q),w=l.value,Q=q.state,c=q.force,p=q.replace===!0,h=fe(R);if(h)return ye(Y(D(h),{state:typeof h=="object"?Y({},Q,h.state):Q,force:c,replace:p}),T||R);const g=R;g.redirectedFrom=T;let j;return!c&&Au(n,w,R)&&(j=Vs(16,{to:g,from:w}),We(w,w,!0,!1)),(j?Promise.resolve(j):ne(g,w)).catch(E=>es(E)?es(E,2)?E:ls(E):K(E,g,w)).then(E=>{if(E){if(es(E,2))return ye(Y({replace:p},D(E.to),{state:typeof E.to=="object"?Y({},Q,E.to.state):Q,force:c}),T||g)}else E=Se(g,w,!0,p,Q);return he(g,w,E),E})}function F(q,T){const R=P(q,T);return R?Promise.reject(R):Promise.resolve()}function ae(q){const T=Os.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(q):q()}function ne(q,T){let R;const[w,Q,c]=xc(q,T);R=fn(w.reverse(),"beforeRouteLeave",q,T);for(const h of w)h.leaveGuards.forEach(g=>{R.push(ps(g,q,T))});const p=F.bind(null,q,T);return R.push(p),ve(R).then(()=>{R=[];for(const h of i.list())R.push(ps(h,q,T));return R.push(p),ve(R)}).then(()=>{R=fn(Q,"beforeRouteUpdate",q,T);for(const h of Q)h.updateGuards.forEach(g=>{R.push(ps(g,q,T))});return R.push(p),ve(R)}).then(()=>{R=[];for(const h of q.matched)if(h.beforeEnter&&!T.matched.includes(h))if(Ve(h.beforeEnter))for(const g of h.beforeEnter)R.push(ps(g,q,T));else R.push(ps(h.beforeEnter,q,T));return R.push(p),ve(R)}).then(()=>(q.matched.forEach(h=>h.enterCallbacks={}),R=fn(c,"beforeRouteEnter",q,T),R.push(p),ve(R))).then(()=>{R=[];for(const h of a.list())R.push(ps(h,q,T));return R.push(p),ve(R)}).catch(h=>es(h,8)?h:Promise.reject(h))}function he(q,T,R){for(const w of o.list())ae(()=>w(q,T,R))}function Se(q,T,R,w,Q){const c=P(q,T);if(c)return c;const p=T===cs,h=Ds?history.state:{};R&&(w||p?r.replace(q.fullPath,Y({scroll:p&&h&&h.scroll},Q)):r.push(q.fullPath,Q)),l.value=q,We(q,T,R,p),ls()}let je;function bs(){je||(je=r.listen((q,T,R)=>{if(!bt.listening)return;const w=C(q),Q=fe(w);if(Q){ye(Y(Q,{replace:!0}),w).catch(lt);return}d=w;const c=l.value;Ds&&Lu(Qr(c.fullPath,R.delta),Gt()),ne(w,c).catch(p=>es(p,12)?p:es(p,2)?(ye(p.to,w).then(h=>{es(h,20)&&!R.delta&&R.type===vt.pop&&r.go(-1,!1)}).catch(lt),Promise.reject()):(R.delta&&r.go(-R.delta,!1),K(p,w,c))).then(p=>{p=p||Se(w,c,!1),p&&(R.delta&&!es(p,8)?r.go(-R.delta,!1):R.type===vt.pop&&es(p,20)&&r.go(-1,!1)),he(w,c,p)}).catch(lt)}))}let Ts=nt(),de=nt(),Z;function K(q,T,R){ls(q);const w=de.list();return w.length?w.forEach(Q=>Q(q,T,R)):console.error(q),Promise.reject(q)}function Ze(){return Z&&l.value!==cs?Promise.resolve():new Promise((q,T)=>{Ts.add([q,T])})}function ls(q){return Z||(Z=!q,bs(),Ts.list().forEach(([T,R])=>q?R(q):T()),Ts.reset()),q}function We(q,T,R,w){const{scrollBehavior:Q}=e;if(!Ds||!Q)return Promise.resolve();const c=!R&&Du(Qr(q.fullPath,0))||(w||!R)&&history.state&&history.state.scroll||null;return Vi().then(()=>Q(q,T,c)).then(p=>p&&Mu(p)).catch(p=>K(p,q,T))}const xe=q=>r.go(q);let Ps;const Os=new Set,bt={currentRoute:l,listening:!0,addRoute:v,removeRoute:I,hasRoute:N,getRoutes:A,resolve:C,options:e,push:H,replace:X,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:o.add,onError:de.add,isReady:Ze,install(q){const T=this;q.component("RouterLink",os),q.component("RouterView",Ta),q.config.globalProperties.$router=T,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>As(l)}),Ds&&!Ps&&l.value===cs&&(Ps=!0,H(r.location).catch(Q=>{}));const R={};for(const Q in cs)R[Q]=Re(()=>l.value[Q]);q.provide(ir,T),q.provide(ar,gt(R)),q.provide(Ln,l);const w=q.unmount;Os.add(q),q.unmount=function(){Os.delete(q),Os.size<1&&(d=cs,je&&je(),je=null,l.value=cs,Ps=!1,Z=!1),w()}}};function ve(q){return q.reduce((T,R)=>T.then(()=>ae(R)),Promise.resolve())}return bt}function xc(e,s){const t=[],n=[],r=[],i=Math.max(s.matched.length,e.matched.length);for(let a=0;a<i;a++){const o=s.matched[a];o&&(e.matched.find(d=>Hs(d,o))?n.push(o):t.push(o));const l=e.matched[a];l&&(s.matched.find(d=>Hs(d,l))||r.push(l))}return[t,n,r]}function Pa(){return Xe(ar)}const _c="/assets/copiIcon-1fd67572.png",Rc="/assets/erocystite icon-64b4489e.png",Cc="/assets/puzzle pathogene icon-1aa2ffae.png",Ac="/assets/rougeglotte icon-08c7132b.png",Sc="/assets/strate icon-361af0e4.png",De=(e,s)=>{const t=e.__vccOpts||e;for(const[n,r]of s)t[n]=r;return t},Ic={components:{RouterLink:os},data(){return{hoveredId:null,links:[{id:1,icon:Rc,text:"Erocystite",path:"/erocystite/projets"},{id:2,icon:_c,text:"Coleoptere pirouette",path:"/copi"},{id:3,icon:Ac,text:"Rouge glotte",path:"/rougeglotte"},{id:4,icon:Sc,text:"Strate, hydrate-moi",path:"/strate"},{id:5,icon:Cc,text:"Puzzle pathogene",path:"/puzzlepathogene"}]}},watch:{$route(e,s){console.log(e.path)}}},Tc={class:"navContainer"},Pc={class:"siteTitle"},Oc=b("h1",null," OMBRE ",-1),wc={class:"navBar"},Mc=["onMouseover"],Lc=["src"],Dc={key:0,class:"iconText"};function Nc(e,s,t,n,r,i){const a=rs("RouterLink");return U(),z("div",Tc,[b("ul",Pc,[ee(a,{to:"/",class:"titleLink"},{default:Be(()=>[Oc]),_:1})]),b("ul",wc,[(U(!0),z(se,null,as(r.links,o=>(U(),z("li",{class:"menu-item",key:o.id,onMouseover:l=>r.hoveredId=o.id,onMouseleave:s[0]||(s[0]=l=>r.hoveredId=null)},[ee(a,{to:o.path,class:"menu-link"},{default:Be(()=>[b("img",{class:"menu-icon",src:o.icon},null,8,Lc),r.hoveredId===o.id||e.$route.path.startsWith(o.path)?(U(),z("div",Dc,Pe(o.text),1)):Pt("",!0)]),_:2},1032,["to"])],40,Mc))),128))])])}const $c=De(Ic,[["render",Nc]]),Uc={name:"App",components:{Navigation:$c,RouterView:Ta}},Bc={class:"container"};function zc(e,s,t,n,r,i){const a=rs("Navigation"),o=rs("router-view");return U(),z("div",Bc,[ee(a),ee(o)])}const kc=De(Uc,[["render",zc]]),Fc="/assets/entrailles de l'enfance-03f76779.mp4",Hc={data(){return{video:Fc}}},Vc={class:"pageWrapper"},Wc={class:"hostVideoWrapper"},Jc={class:"hostVideo",autoplay:"",muted:"",preload:"auto",loop:"",id:"hostVideo"},Kc=["src"];function Qc(e,s,t,n,r,i){const a=rs("navigation");return U(),z("div",Vc,[ee(a),b("div",Wc,[b("video",Jc,[b("source",{src:r.video,type:"video/mp4"},null,8,Kc),Xt(" Votre navigateur ne supporte pas la lecture vidéo. ")])])])}const Yc=De(Hc,[["render",Qc]]);const Xc={class:"video-wrapper"},Gc=["src"],Oa={__name:"YoutubeVideo",props:{videoId:String},setup(e){const s=e,t=Re(()=>`https://www.youtube.com/embed/${s.videoId}`);return(n,r)=>(U(),z("div",Xc,[b("iframe",{src:As(t),frameborder:"0",allow:"accelerometer; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},`\r
        `,8,Gc)]))}},wa=[{name:"Le scarabée et le lièvre",slug:"scarabée-lièvre",n:0,id:"H-sNGRE7xTQ",vignette:new URL("/assets/vignette-scarabéeLièvre-278e5879.png",self.location).href,description:`Il grésillait, creusant la nuit
Il perçait ses non-dits
Dévoilant le bruit, alarmant les paisibles
Car sous l’ombre viennent des chants
Et des petits ventres naissent les légendes
Mon lièvre a une aigreur au goût de cendre qui se demande si un massacre on peut en comprendre mille
Si par un coup de fusil on a vraiment dépeuplé cent familles
Un choc videra la place
Un battement d’ailes pour tant d’oiseaux
Ce matin le malheur s’est levé tôt
Et rien, jamais, ne les remplaçera 
Alors le scarabée porte ses plaintes à la nuit
Elle s’agenouille et lui dit : « vas-y crie mon ami
Je ne saurai pas te protéger mais je verrai tout et le porterai jusqu’au prochain siècle.
J’acculerai le sang d’avoir été vidé de ton éternité
Vous serez la meute que j’éclairerai »
Mon lièvre fend la vitesse, il la répète en une rage à une promesse
Celle de lutter pour que ta voix hurle encore
Que tu fus vivant
Et que ta vie nous donnait un sens

|| musique par Dhafer Youssef - Cantus Lamentus`},{name:"La fugitive",slug:"la-fugitive",n:-1,id:"pKOWmAf9HgM",vignette:new URL("/assets/vignette-laFugitive-30813fd5.png",self.location).href,description:`Parfois, fuir c’est se choisir.
Prendre son indépendance, tant pour une femme qu’une folle, c’est décider d’où nous sommes et où nous ne serons plus.
Quand les figures de l’urbain se font creuses nous disons : chantons à l’unisson du déraisonnable, partons.

|| musique : Stefan Levin - La nuit

    - -


Nous sommes trois femmes s’ayant rencontrées par le hasard d’une évidence. Nous avons atterries toutes trois dans une maison avec une âme envoûtante, qui nous a dit « voilà un refuge » où se retirer des eaux tempétueuses du cours de nos vies respectives. Alors nous avons créé, chaque jour, chacune, ce qui nous permettait de renouer avec notre parole, nos rêves, nos conséquences. Et de coups d’oeil sur le travail de l’autre à des moments de symbiose à parler de nos errances, de nos voyages, de notre vécu de femme, d’émancipation, des névralgies d’un monde douloureux pour beaucoup, injuste et vidé de ce qui nous fait vivre. Voilà que rapidement, de simples co-habitantes nous sommes devenues soeurs, sensibles à nos réalités partagées et individuelles et puissantes de se réunir et se reconnaître. Alors sur une fulgurance de vouloir raconter quelque chose qui nous parlait à chacune, un après-midi tout s’est constellé très vite, à la tombée du jour nous animions notre jardin d’un décor où promener les songes, la nuit nous filmions, dansions, riions, chantions et dans la foulée nous avons fait le montage : nous étions transportées.`},{name:"Onda su onda cazzo",slug:"onda-su-onda",n:1,id:"Xpp-jK-onp4",vignette:new URL("/assets/vignette-ondaSuOnda-8a2929e1.png",self.location).href,description:`sans contrefaçon, je ne veux pas de glaçon.

        || musique par Paolo Conte - Onda sur onda`},{name:"La dorade qui pêchait le frioul",slug:"la-dorade",n:2,id:"YxCrm9gJyP0",vignette:new URL("/assets/vignette-laDorade-9472a9bb.png",self.location).href,description:`L'homme dorade fait beaucoup de bulles quand il respire. Ces bulles brillent comme les mouettes quand elles touchent le soleil. Elles ont le goût du Sud et le cœur sur les mains.

Alors quand l'étang devient océan, quand je suis perdue par les récits du ciel, il m'offre une bulle. Il nous sourit, à moi et la vie. Si nous y sommes, c'est pour rire. Alors petite crevette, prends confiance. 

Car un chalutier ivre de légumes et de bébés pigeons nous attend au port. 

Tu me diras qu'une dorade n'aime pas fréquenter les ports, qu'elle peine à s'arrêter sentir la certitude de la terre ferme. Je te crois, l'eau fugitive est douce sous les vents insomniaques du large. 

|| musiques par 
° Vangelis - La petite fille de la mer
° Idir - A Vava Inouva`},{name:"La dorade qui pêchait le frioul",slug:"la-dorade",n:2,id:"YxCrm9gJyP0",vignette:new URL("/assets/vignette-laDorade-9472a9bb.png",self.location).href,description:`L'homme dorade fait beaucoup de bulles quand il respire. Ces bulles brillent comme les mouettes quand elles touchent le soleil. Elles ont le goût du Sud et le cœur sur les mains.

Alors quand l'étang devient océan, quand je suis perdue par les récits du ciel, il m'offre une bulle. Il nous sourit, à moi et la vie. Si nous y sommes, c'est pour rire. Alors petite crevette, prends confiance. 

Car un chalutier ivre de légumes et de bébés pigeons nous attend au port. 

Tu me diras qu'une dorade n'aime pas fréquenter les ports, qu'elle peine à s'arrêter sentir la certitude de la terre ferme. Je te crois, l'eau fugitive est douce sous les vents insomniaques du large. 

|| musiques par 
° Vangelis - La petite fille de la mer
° Idir - A Vava Inouva`},{name:"Ombres et paix",slug:"ombres-paix",n:3,id:"tJXVSPe6f6w",vignette:new URL("/assets/vignette-ombresPaix-29bc03a8.png",self.location).href,description:`je ne suis rien. rien qu'une fatigue de collecter des preuves que je suis. je ne suis rien. je n'ai plus de passé. plus rien depuis lequel inventer.
plus aucun passé.
alors accablée des acclaments du classement, j'entoure et fore la mer aux plaintes Khmer. 
je ne suis pas encore
je suis trop encore
pour honorer mes discours
je ne dois plus créer.
je dois me désentir.
plutôt que me rapatrier en un corps, je dois n'en avoir pas. reculer de mes constellations. oublier mon prénom. 

être la paix sous les ombres des peupliers.

|| musiques par Andrea Lazlo de Simone - album Amour et Guerre`},{name:"L'oxygène du loup noir",slug:"oxygène-loup-noir",n:4,id:"_r2JV5vynfI",vignette:new URL("/assets/vignette-oxygèneLoupNoir-2629c429.png",self.location).href,description:`Il se fait tard
Le loup range les placards
avare de mes secrets
Laissez-moi seule avec le loup s’il-vous-plait

J’hésite à passer les marches
je lévite sous leurs arches
alcoolisées par les tremblements de l’été
Il ne faudra qu’un coup de collier
pour qu’il puisse me parler

Lire plus haut que l’Iran
plus bas que l’Orient
entre les deux presses d’un même cadran solaire.
Vers une ère où je me jette
comme les arêtes 
des mains des poissonniers

J’irai boire l’eau lasse 
du cran à marée basse
d’un seigneur sans violon
mais avec un grand menton
comme une fourchette
qui pique dans les mangeoires
des plus grosses gargouilles
des plus petits ventres
des plus éclatantes des hirondelles
ô mes belles 

j’ai l’élan gorgé de sel
Un délit qui n’a pas attendu que la nuit
nous murmure une pluie
chaude
sous les lampadaires
frêle 
sous les cœurs austères
aimante
sous les pôles épaulés
par des oiseaux que ni le jour
ni son absence
n’affaiblissent les reflets.

J’aimerais danser une chorale macabre
telle un tronc étanche
alors maman prépare une pissaladière
J’y ajoute cette fois le sel
avant que de saluer un cimetière 
de granit et d’âmes centrifuges
sachant parmi tout aux ondes que je deviens déjà ;
une femme de l’au-delà.

Fossile d’une larme brune,
ma tasse en veut encore.
Cafetier, un billet s’il-vous-plait.
 
Les éreintés saignent le plancher
il leur semble élégant de cavaler 
les boues étanches et épuisées
d’un été qu’on a pas vu venir
qu’on aurait adoré embellir
d’un amour flamboyant. 

A qui bon le dire
je nous veux un navire 
qui vire la dialyse 
qui nous tétanise
donc pourquoi pas un navire
qui me fera partir.

creuse 
creuse 
et tombe
épiée par les meuleuses 
tu t’entends tomber
la ville s’adoucit lors des aubes roses. Mais je n’oublie pas
que je suis le matin et mourante ; le vide est creux creux rapporte tes bottes au temple
non je ne vendrai pas l’Estaque

le vent prend et détend l’enfant. Puis l’évident étend le vent, l’enfant l’entend et le détend. 
L’évident est dans le vent
l’enfance lui demande une délivrance. 
Ils s’entendent sur un coup de tête
maladroit
ils s’effleurent du bout des doigts
mais ne se rattrapent hélas pas. 

Là- haut sur la montagne
se cache un château
où le topaze côtoie l’ébène

les héritiers, irrités, veinent leur capot d’astre
et charment les astres

virulents devant le désastre du là-bas

mer de Socratiens 
elle nait des tsars martiens
sel en gorge-tribu, Tibulle repose leur cavale.
Aimerions-nous les aimants d’idéaux 
si nous ne nous perchions pas si haut ? 

Ajourner les tintes des couches qu’ils portent
Vérinner leurs bals contemporains
Hydrolat d’un écueil sans parlotte

Vomir le soir
Lui qui pourtant amène l’espoir par l’explore.

Coulent coulent les étendards
tapent tapent les nerfs du bois
vrillent vrillent les oriflammes
j’aimerais qu’on éteigne l’infâme

Loup noir , draine ton poil 
serre les cales 
chavire la loi
plus que toi et moi

goudrons l’or bas
plus bas que le soir, plus bas que l’orient
sois ma joie
qui baise les cendres

sentir flasque
l’air nous remarque 
point de groseille
dans ce vase noir

alors je prends le départ 
des marée loirs
d’un autre repos
celui de l’infante

L’infâme n’a qu’à se tenir 
et ne pas dépasser delà
du cellier fort bien scellé
maigre j’étais 
quantique je serai

Mon ami le loup m’a dit 
d’écouter minuit d’étirer la nuit
Être vivant a ses soucis
mais la lune en a aussi
elle qui me donne la vie.

|| musiques par Khaled Mouzanar

    Kyrié Allah
    Zaghloul El Hamam
    Deuil de Nassim`},{name:"L'herbe noire, les cloches et le condamné",slug:"herbe-cloches-condamné",n:5,id:"_r2JV5vynfI",vignette:new URL("/assets/vignette-condamné-84035c71.png",self.location).href,description:`Le ciel parle des hauteurs si aiguës que même quand les hirondelles se prépareront à le pourchasser il n’y aura que lui qui aura les pieds sur terre. 

Vire la marée à tribord comme on vire un salarié à son sort, comme on l’enivre à la mort. Car la tempête est rageuse. L’orage l’a trop rouspétée. 
Exaspéré, le voilà exalté par la pitié. 

Vous ne me trouverez pas chantant des berceuses, mais poinçonnant les chants des prisonniers. 

Il faut mieux raidir l’ordinaire car les fourchettes ont déjà piqué toutes les rides de mon passé. Effacez ce trop grand tableau. L’école n’y amorce plus que des grands ducs ou des suicidaires. Héritage de l’hérisson qui, mort sous ce pneu, aurait souhaité une trêve du rallye métro boulot dodo. 

Charivari 
d’un 
condamné à mort. 

Les grilles. Épaisses comme une tombe. Le blanc. Opaque comme une tombe. Les néons. Écrivains d’une fin de vie. Et moi, je m’y évanouis. Et tombe. 

|| musiques par Babx

    ° Jean Genet 
    ° Merveille dans la pirogue`},{name:"Un deuil",slug:"un-deuil",n:6,id:"ab2BnQp7Cuo",vignette:new URL("/assets/vignette-unDeuil-5193cd2d.png",self.location).href,description:`Quand je respire, je fais entrer plus de temps en moi.

Et c'est pas grand chose mais je t'emmènerai au bord de la mer, promis. 

|| musique de Clara Ysé - Le monde s'est dédoublé`},{name:"Le ciel la chante",slug:"le-ciel-la-chante",n:7,id:"dU0r83mK0Zg",vignette:new URL("/assets/vignette-cielChante-ea7e1c29.png",self.location).href,description:`Et malgré les bousculades, elle continua de chanter. Alors que la foule la piétinait, alors que sa voix tremblait, les vagues l’emportaient. Elle chantait autant que la promène l’audace des rafales, des chamades de l’hiver. L’eau glacée ne cessait de chavirer son épine toute cassée. Brisée en cendres, elle s’envola et ne repris prise que devant le givre, cette immensité cristallisée. Elle chantait à en perdre la terre. Elle s’envolait à en gagner l’éther. 

Quand soudain, apportés par les flots, lui revint un souvenir. D’un lointain désir, d’un long soupir, d’un certain vertige. Celui de son avenir. Tiré d’entre les rides du crapeau-cadenas, celui qu’on ne regarda pas quand le ciel s’est ouvert, laissant à découvert les séismes d’outre-mer. Elle chantait à en perdre tous les reflets du passé, entre-chassé entre nos effrois esclaffés et cette rivière automatique, assoiffée par le givre. Ivre de tempo elle chantera un mot sur deux, le souffle congestionné. Mais, qui vient ? C’est l’attaque des tringles à rideaux qui lui soutiennent son manteau ; manteau déchu là voilà nue, en tête à tête avec l’hiver et la rivière. C’est l’appel de la prière. 

Évidemment, il y a déjà le soleil qui lui brûle les écailles et les dorades qui lui écartent les sens. Elle ressent, son chant dorénavant. L’automne moissonne les bribes d’un sonar ensorcelé, qui pulse autant que vente l’amer. Le rugueux reprend son souffle et le merveilleux lui sert une coupe. C’est l’incidence de la lumière, merveille amère. Merveille amère, ainsi veille la mer. Sur son repos. Elle peut baisser la garde, dorénavant. Son silence est celui des mouettes qui planent au loin sur les collines de coquilles vides, qui s’en émancipent avides des aiguës du ciel. Alors elle chante une dernière fois sa peur d’autrefois. Le ciel la chante, elle plane, lucide et paisible. 

|| musique d'une réinterprétation de Vivaldi par Max Richter - Été III`},{name:"Haut, haut, autrement",slug:"haut-haut-autrement",n:8,id:"Y3d6P28nBMk",vignette:new URL("/assets/vignette-hautHaut-ad3c7aab.png",self.location).href,description:`alors toutes firent leurs bagages
et s’en allèrent vers l’azur
soulever des tas de coques
aimer de nombreux ports.

l’hameçon leur pend à la glotte
mais qu’y faire, puisque le bleu
nous veut le bleu. 

certaines de leur cueillette
elles se vêtirent de quelques épaulettes
les machettes sont prêtes
je ne le suis pas

elles savent que la houle a le luxe du temps lent. 
que ce monde est trop grand, les murs trop blancs, l’héritier insolent.

larguez les déboires 
le sel m’est une fresque
digne des plus belles gorges.

essayé, elles ont essayé
d’y aller par la pointe des pieds.
mais ce qu’un coup de nez a de la vertu…
donc elles plient le linge, déplient l’attente,
s’efforcent d’arroser la menthe
je n’y vois plus qu’une attente

de sortir les machettes.
rendre bêtes les arrosoirs
couper les herbes perchées
haut, haut, autrement. 

déposer la garde, sur un quai de gare, bien assommée par un goudron intransigeant et chaud.

un bagage, oublié sous un banc. 
un air frais, le temps d’un instant.
descendre la rue sans jamais descendre le regard.

crier sur un decrescendo du vent.
elles ne veulent pas d’enfant.
pourquoi agir comme des enfants ; 
sans conscience
gésiers de démence
de sueurs froides et de brouillard.

|| musique par Caleb Arredondo - Echo Sax End`},{name:"La noyée",slug:"la-noyée",n:9,id:"2C3LtM5Y2wE",vignette:new URL("/assets/vignette-laNoyée-64598220.png",self.location).href,description:`la lune est obscure dans les dents de la scie.
je m’y défie le front liquide, les tempes esseulées.

mes noyés nés avant l’arbre se réunissent un à un, seuls.
qu’un plongeur leur éponge un livre creux et c’est l’un qui a une peur, bleue, pendant que l’autre convoite l’unité des siens. « à demain ! » 
deux, les voilà deux désormais. 
on me dira que c’est chacun pour soi sur cette route de la soie, mais pas pour eux. trois pommes tombent de la commode et ceux sont six mains qui leur retrouvent un goût à la mode. les bouches font ce qu’elles ont à faire, et moi je rêve de n’être plus une, mais noyée par la foule. 
 foule sentimentale, 
  on a soif 
  d’idées noires… 

|| musiques par Yann Tiersen 

    ° Tempelhof
    ° La noyée`},{name:"Bouhliwood",slug:"bouhliwood",n:10,id:"nGHpTfJnKLs",vignette:new URL("/assets/vignette-bouhliwood-03fd3267.png",self.location).href,description:`électrochoc, je brise le pare-choc
j’accoste un pylône, arrimé au bas-côté
de mes angoisses, de mon passé.

le pylône me dresse comme un poteau. je suis son drône.
avec lui, il n’y aura ni môme ni neurone. 
que de la détresse, qu’il porte en tresses sur son front.
son front de patron.

qu’on me surveille, qu’on me capture
moi seule veillerai
à courir
peu importe les points de côté 
puisque c’est sur le bas-côté que je l’ai rencontré, anesthésiée.

courir courir souffrir mourir
je n’en ai pas le droit
il sédate tout en moi
épie mes moindres épithètes
écrit mes maladresses.
1000 0011
ton algorithme fait un vacarme
ça y est, tu as pris mon âme

couler couler rouler fouler 
la terre humide par mes peurs
1101 0010
tu me connais par cœur
mais où as-tu caché le mien ?

les baleines prennent des somnifères
c’est la sentence de Lucifer. 

échappe-moi
écharpe-toi
car l’hiver s’annonce immortel
c’est écrit dans leurs ram
pendant que moi je rame
perdue dans les flots de l’amnésie.
amenez-y moi mes tortionnaires.
soyez des légions de fantassins pilonnés. 
venez m’attraper

échappe-moi
échardez-vous

éreinte-moi
poignardons-nous.

et ce tunnel m’entraîne de plus belle.
il m’évide tous mes évitements
j’esquive, il salive
car seul lui sait 
qu’il n’y a qu’une entrée 
celle de mon passé.

se laisser transporter 
par un porte-conteneurs ou un vautour blessé

aimer son tyran,
marcher dans le néant
qui à son tour perd espoir 
dans ce tunnel noir

il ne servira à rien de nier
que je leur appartiens
de l’amygdale jusqu’aux baisers
putain, ce que je me fais baiser. 

tarir tarir pétrir vomir
vos entreprises de contrôle
je suis la fièvre du moulin
buvez mon eau sacrée
0110 1001
c’est la rivière glacée 
qui coule dans vos veines
celles qui échafaudent mon tunnel.

sentinelle, ma belle sentinelle
pourquoi, mais pourquoi m’as-tu mise dans ce tunnel ?

 || musique par Afx - gwarek2`}],Zc={name:"App",components:{YoutubeVideo:Oa},data(){return{videos:wa}}},ed=b("h2",{class:"copiIntro"}," CoPi est un petit colEoptEre qui pirouette jusqu’A ce que lui tourne la tEte. Danseuse Emotionnelle, je barbote quelques mouvements pour me sentir vivante et possEdEe. ",-1),sd={class:"videosContainer"},td={class:"vignetteWrapper"},nd=["src"],rd={class:"videoTitle"};function id(e,s,t,n,r,i){const a=rs("router-link");return U(),z(se,null,[ed,b("div",sd,[(U(!0),z(se,null,as(r.videos,o=>(U(),ha(a,{key:o.n,to:`/copi/${o.slug}`,class:"videoCard"},{default:Be(()=>[Xt(" c "),b("div",td,[b("img",{src:o.vignette,alt:"vignette",class:"videoVignette"},null,8,nd)]),b("h3",rd,Pe(o.name),1)]),_:2},1032,["to"]))),128))])],64)}const ad=De(Zc,[["render",id]]),Oe="/assets/PPPrecedent-04da90ac.png",od={components:{YoutubeVideo:Oa},setup(){const e=Pa();return{thisVideo:Re(()=>wa.find(t=>t.slug===e.params.slug))}},data(){return{imgPrev:Oe}}},ld={class:"videoPage"},ud={key:0},cd={class:"videoHeader"},dd={class:"videoItemTitle"},pd={class:"videoFullWidth"},md={class:"videoDescriptionContainer"},fd=["innerHTML"],hd={key:1},vd=b("p",null,"Vidéo introuvable",-1),gd=[vd],bd={class:"controls"},qd=["src"];function jd(e,s,t,n,r,i){const a=rs("YoutubeVideo"),o=rs("RouterLink");return U(),z("div",ld,[n.thisVideo?(U(),z("div",ud,[b("div",cd,[b("h1",dd,Pe(n.thisVideo.name),1)]),b("div",pd,[ee(a,{videoId:n.thisVideo.id},null,8,["videoId"])]),b("div",md,[b("pre",{class:"videoDescriptionWrapper",innerHTML:n.thisVideo.description},null,8,fd)])])):(U(),z("div",hd,gd)),b("div",bd,[ee(o,{to:"/copi"},{default:Be(()=>[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...l)=>e.prev&&e.prev(...l))},null,8,qd)]),_:1})])])}const Ed=De(od,[["render",jd]]),yd="/assets/PPTimeline-52ca53a3.png",xd={components:{RouterLink:os},setup(){Pa()},watch:{$route(e,s){console.log(e.path)}}},_d={class:"timeline-container"},Rd=b("img",{class:"timeline-img",src:yd,alt:"frise de mes carnets"},null,-1),Cd=b("div",{class:"click-zone",style:{top:"28%",left:"4%",width:"15%",height:"40%"}},null,-1),Ad=b("div",{class:"click-zone",style:{top:"5%",left:"20%",width:"12%",height:"44%"}},null,-1);function Sd(e,s,t,n,r,i){const a=rs("router-view"),o=rs("RouterLink");return U(),z(se,null,[ee(a),b("div",_d,[Rd,ee(o,{to:"/puzzlepathogene/2020"},{default:Be(()=>[Cd]),_:1}),ee(o,{to:"/puzzlepathogene/2021"},{default:Be(()=>[Ad]),_:1}),ee(o,{to:"/puzzlepathogene/2022"},{default:Be(()=>[b("div",{class:"click-zone",style:{top:"46%",left:"33%",width:"17%",height:"30%"},onClick:s[0]||(s[0]=l=>e.goTo("2022"))})]),_:1}),ee(o,{to:"/puzzlepathogene/2023"},{default:Be(()=>[b("div",{class:"click-zone",style:{top:"10%",left:"48%",width:"23%",height:"31%"},onClick:s[1]||(s[1]=l=>e.goTo("2023"))})]),_:1}),ee(o,{to:"/puzzlepathogene/2024"},{default:Be(()=>[b("div",{class:"click-zone",style:{top:"60%",left:"68%",width:"15%",height:"35%"},onClick:s[2]||(s[2]=l=>e.goTo("2024"))})]),_:1}),ee(o,{to:"/puzzlepathogene/2025"},{default:Be(()=>[b("div",{class:"click-zone",style:{top:"14%",left:"85%",width:"15%",height:"47%"},onClick:s[3]||(s[3]=l=>e.goTo("2025"))})]),_:1})])],64)}const Id=De(xd,[["render",Sd]]),Td=[{texte:`<div class="mois" id="septembre"> SEPTEMBRE </div>
<span  class="jour">MARDI   15   SEPTEMBRE</span>

On ne comprend rien
		il fait CHAUUUUUUUD

					
				

				s’exécuter au silence 
				à écouter l’autre
				comme on regarde par la fenêtre d’un train.
TAPENADE

sous-priser les barreaux éjectés de l’oeil de quelques autres

			sentir le grillon vivre dans sa gorge
			cramponner du pneu en caoutchouc d’au moins 3 de mes dents

<span  class="jour">MERCREDI   16   SEPTEMBRE</span>

chaxXx plâtre
sarcophage de mes phalanges, j’en appelle au placenta natal 
pour rire pèle mêle de mes douleurs d’argent. 
Quoi, j’ai oublié l’accent ? Carglass PITRE pracktr

des petits canetons partis en moisson
s’acharnent le menton à gaspiller ton nom
ils le mâchent mâchent avec panache
espèrent que leur père te regarde dans la glace. 

je suis de la patafix fondue qui ventouse en lassos épais les murs de leur société. 

				les globes boites à oeufs pour yeux 
				crépitent clapotent à 27 VOLTS.

<span  class="jour">JEUDI   17   SEPTEMBRE</span>

CATAPULTE
	pétrir ses enfants dans de la colle à bois,
		les recoiffer, doucement
		redresser leurs tibias, précautionneusement.
j’ouvre la fenêtre , la lasagne entre
elle est encore dure, mais elle est fraîche
jaune pâle, elle s’est faite coquette ce matin.
merci d’être entrée dans ma chambre.

chapenauder le retard par claques de tiroirs 
s’asseoir dans une limonade le réveiller dans un kangoo 
où partir cueillir le raisin fou ? 

(SOIR)
je me sens le lit coulisse en acoups brosse l’oreiller
brage la tourque sel d’attrape corps chargé en sepre 
qui semoulent d’arderu je deviens triste le bocal devient
colycosée servir d’ermade par trique à douloureuh
bégayer dans le vif c’est le lit qui devient mon coeur 
et son quartier qui se charge s’agite s’abrite dans l’inquiet 
car progressant vers peur varitrène changement d’activation

édredonc
	s’éclipser du bruit clic
			vite 	s’y hisser y tomber ?

résister à la résistance
se laisser tracter par des sons profonds comme le battement palpé d’un loukoum.
		

	j’aic je crois que 
			????
chchchchcchchchch
			traquer sard lourd
				deur
	cyprès je couleur grand
	des cyprès tout est bien val-aller
			sarc

j’ai le coeur en pendentif,
il est très cadenassé, très métal lourd brun foncé de la
taule rouillée très déterminée, lourde dans sa place elle y 
reste et elle serre très fort ses mains

bour en boule
	ne pas casser 
		ne pas cisailler le céramique sinon redindon

je/lui est en train d’apprendre. plus lui que elle
parce que plus mauve dans cavité qui ressemble
à un fond de capuchon de stabilo long.
jourdain j’arrive au jardin il y a des clous qui 
respirent je ne sais pas leur façon de le faire mais ils
font ce mot assez étrangement. je capitule juste
pour voir ce que c’est de l’écrire.
	je vide un souffle qui est plusieurs en latéral.
	le crayon que fait l’ombre est très joli un peu 
	funambuliste indienne qui recoud des joues. elles sont
	jumelles, juste deux et à deux treu treu treu ole

tête bobine tapenade méduse.
	vous voyez cette couleur c’est cette manière d’en
	dire les grumeaux se lever stop

une araignée vient de courir sur mon lit elle s’en est 
enfuie a du se sentir coupable d’arbres. 

		LA MUSIQUE REND L’ÉCRIRE TRÈS DIFFICILE
		RÉSISTE REMET LES PIERRES EN BANCS
		REBOUCHE LES MURS ILS DEVIENNENT OBSTRUES
		FONT CROIRE QU’ILS N’ONT JAMAIS ÉTÉ 



PULSE
			chouillée dans mon haricot gris
			je ne veux rien en savoir de ce qui
	ULSE		va plus long que le bras qui pend
		ULSE	lui sent très peu le vent d’au-delà

car il married to a lazy lover sucre des couches de laine sur l’épiderme		il sent très peu le froid

qui vit avec moi ? qui
		êtes  
			vous ? Avez-vous faim ? j’ai fait
				un dahl sans l’aspect
				dahl si vous voulez

<span  class="jour"> VENDREDI 18 SEPTEMBRE </span>

me tartiner le crâne (soucoupe) de marmelade orange
tu tapes du pied te décale à droite tape du pied droit cela lance
la balançoire ton mollet balaie s’arrête tape balaie tape s’arrête
s’hérissonne liacre il est liacre

	je deviens mécaniquabsurde



	lerdir 
		verdir
			verdict
				sans mot sans regard
					sans lancer

	je suis dans mes pieds je dans mes pieds 
		et n’est que là
			patatra


<span  class="jour"> LUNDI 21 SEPTEMBRE </span>

des très journées pâquerettes les lunes dernières ! 
merci ! un petit peu cheville entorsée pour tout ce qu’il faut 
exécuter prochainement, j’espère être réalisatrice bien en place:)
quelques turbos jets pour m’élancer sur scènes, j’y vais,
avec tous mes amis souffleurs d’artichauds lève-tôt & beaux !

HOP 			attrapé par un chat,
			rattrapé par un fou, 
			troquer le grand agenda,
			des hommes devenir flous.
un ver éclaté,		
peau de l’ongle sur		
le ciel
	atmosphère mi-figue 
		mi-raisin

espérer au combat,
		y déposer les genoux

<span  class="jour"> MARDI 22 SEPTEMBRE 2020 </span>

je ne sais pas ce qui m’émiette

(SOIRÉE CHEZ MARLEY <3) [couloir clair entouré d’activité embrumée,
			impracticable là où je suis, ce la 
			à ma portée je n’arrive pas à 
			l’utiliser, je respire un autre bain,
			les pensées sont climatisées
						PARTIR
						DORMIR
						VEUILLEZ LAISSER 	
						UN MESSAGE
						je ne manquerai
						pas de ne pas 
						vous rappeler


<span  class="jour"> MERCREDI 23 SEPTEMBRE 2020 </span>

	conquérir le relief, c’est bien tout ce qu’il reste à faire
		résonne dans ma tête qui se réveille encore sous
		l’eau, sous son reflet, sous le silence.


<span  class="jour"> VENDREDI 25 SEPTEMBRE 2020 </span>

		madame
				je bouse MADAME
				de circonstances


<span  class="jour"> MERCREDI 29 SEPTEMBRE </span>

(BIENTÔT 3H30) 
j’en craquelle les os des sols déserts, mendiants l’assez de brume
pour servir à ceux-ci de la semoule à midi. des billes rondes et
dodues, douces et molles, violons et tambourins sans refrain.
j’ermine l’absolute fuite de leurs permis de poche les nuggets
cuisent je n’arrive plus à ressentir l’amour n’arrive plus à mes
récents tirs. je les fais minces et dessinés, nés pour être saisis,
ils ont des ancêtres qui ont frémi sous l’implosion. on dit je dis
qu’elle était ce que la guerilla de colle à bois n’est pas. elle
était mille pétales de pollen qui neigent leurs espoirs dans la
rosée qu’a déposée l’oiseau, ce 15h, plus tôt. 

là je suis dépouillée [IL EST 03H32] de ce qui a donné
du son à mes cordes. elles tissent sans autre corde amie le
silence de leurs boyaux. les miens sont frêles frissonnants ils
ont perdu la recette qui permet d’éclater la flamme

une plaque en action est un chat qui ronronne et est 
manager d’une chichanerie

les moi antérieurs ont de cela en commun avec moi-même
			qu’ils ont été seul.es
			avec moi-mêmes
			

		une soirée, 
		de compagnonnage en travail


chacaux maladroits et choqués 
soupre yuze virgule tle mobile clarbutchère couvres lents
tant emps prend toi m mismant j’ai des choses à te dire
une poix avez les fenêtres

<div class="mois" id="octobre"> OCTOBRE </div>
<span  class="jour"> DIMANCHE 11 OCTOBRE </span>

	Po est survenu.  











		allez, pousser prolonger les doigts de mes songes ____________
	je vis les vies d’extasie péniblement. c’est-à-dire que j’ai de la labeur 

me gaver à la chapelure jusqu’à ce que tout l’espace soit comblé

<span  class="jour"> MERCREDI 21 OCTOBRE </span>

je piétine dans ma pelouse, les coudes des doigts
solidement agrippés à la falaise du carnet. 
	j’ocre des aller et retour en profondeur de 	
	mon cerveau monde, je m’y sens une fidélité
à vivre cette mare troublée comme me faisant 
fidélité j’haisxpire mes abandons.
	j’ai la tête molletonnée, comme une 
	mâchoire anesthésiée.
	je ne suis pas encore tentiste pour me réveiller 
	mais j’essaie, j’étudie, je vis.
j’espérais avoir plein de biscuits épais,
	j’ai le coeur en coucou qui fait 
du saut à l’élastique vitre train boomerang très véloce. 

Féroce trocité > essayer de déblayer
	les feuilles nuages
	du bocal.

	les cervicales bégaient un petit peu,
	grelottent là venir.


Félix est comme des apparitions brume buccale,
	et j’ai sans cesse (peu de cesse) envie de 
me réconforter dans l’océan velours violet de l’entrejambes 

	je mets mes prochaines nuits à crédit,
	mes prochains jours à course, mais n’est-ce
	pas déjà un énorme cross qui emprisonne les
	divagations en coups de crosse de la déraison ?


je fais ma propre incompréhension. 
		héberger la question sans lui
	donner le point de son interrogation


il faudrait, il faudrait	
	que j’épouse le mouvement par force
	de prudence
pour ne pas mourir
pour ne pas quitter
pour ne pas ligaturer les moments dansés à créer


<span  class="jour"> MARDI 27 OCTOBRE </span>
		POURQUOI me clapier à l’UTC
	dans mon idée de mes prochaines idées-années

je ne suis pas heureuse dans mon champ de vie.sion
	je suis malheureuse dans ce champ de vision

je n’ai plus la même capacité d’absorption du mou mal colorié
qu’autre fois 		dois-je persister ? pourquoi ? 

		il n’y a plus la périphérie foraine car c’est
		la colère du pangolin qui s’aboie sur la couche d’ozone
		c’est OK mais pourquoi continuer sur ce corps à 
		la peau grumelée s’il est à vif et c’est ce qu’il y reste
		à manger ? autant s’adapter à la météo et migrer
		comme une oie là où la danse du vent me va ?

POUR 
- me préserver avant que ça ne chavire trop et que j’oublie encore pourquoi avoir la conscience de vivre
→ pouvoir me faire confiance
→ ne pas accepter de me zombifier

CONTRE 
- apprendre, sans doute me reste-t-il à apprendre de moi qui survit à des situations de travail avec chaque fois un nouveau travers de discipline

- mieux connaître mes ami.es, laisser le temps au brasero de revenir déposer ses vêtements et réchauffer le grenier
→ rapidement seule, dans le « et après ça ? »

POUR
- la lumière m’ENERVE. elle m’encerceau en un capiton sourd qui respire par intubation au sucre.
je me dissous les neurones dans l’acide de l’abrutissement. 

CONTRE 
- mais c’est moi qui n’arrive pas à me régir de sorte à jouir d’excitation sur ce que je fabrique entremêlé à ces UVs. je ne me donne pas les moyens de faire grand dans cette arène en noir et blanc.

POUR
- c’est comme si ça me posait une feuille de papier qui cisaille en lame de sécateur ma capacité de perspective et d’espaces grands, longs, respiratoires, des bras de danseurs qui s’étendent avec toute la place du ciel sur des ongles bien nourris. je suis embourbée dans une tranchée du petit fait.

CONTRE
- papa et maman ont payé des loyers et des repas qui mettent à crédit ma capacité à surpasser leur aide
→ je dois pouvoir me financer.

POUR 
- ça me grande gorgerait l’espoir
ANIMAUX	HUMIDE
	TERRE		AIR FRAIS
CHEVRES VACHES 		SPORGIR, GENSMOUR

CONTRE
- le diplôme m’aiderait à être surclassé dans des jobs conventionnels alimentaires ; réhaussade du social maussade

POUR
- j’ai peur des stages je n’en ai maintenant pas la force

CONTRE
- je peux apprendre et comprendre pas mal de choses dans les stages

<div class="mois" id="novembre"> NOVEMBRE
</div>
<span  class="jour"> SAMEDI 14 NOVEMBRE </span>

Salut petit objet, ça fait un petit moment qu’on a pas parlé toi et moi. on n’a même jamais discuté je crois, ça a été une vie spasmique jusque là. j’ai peur de prendre mon temps chez toi, de laisser aux lettres dans ma tête la place de former des mots, déplier les trains, libérer les bancs. 
Divertir, divertir, être le chat et espérer le laser, bondir au moindre rayon.

<div class="mois" id="décembre"> DECEMBRE
</div>
<span  class="jour"> DIMANCHE 8 DÉCEMBRE </span>

liquides


<span  class="jour"> LUNDI 9 DÉCEMBRE </span>

j’ai tout oublié de la séance
ça s’est assoupi dans une tranchée de ce qui ondule dans le plan du ciel quand on parle d’oasis, mais à l’horizontal. 
j’ai écorché tartine qui zou spère soubassements sel sort font acresse.
j’amètre l’en dehors qui soulève l’appétit par ta sansa gine mar des lois res etival de ses corbeques.

					comment se mettre
					en un si seule au flagolle
					et avec on zapetiser


			j’ai aimé assez cet espace mais maintenant
			j’en ressens un besoin océan,
			j’ai besoin de pouvoir m’asseoir à cette chaise tout le temps.

C’est torticaire de sortir le fil lui lancer la braise puis de l’abandonner, nu froid figé, de me laisser seule faire le travail sans me dire que c’est à moi de le faire, de me dire que c’est bon maintenant que l’on va m’aider, mais qu’on me pince et m’étire la peau sur rendez vous, par cloche d’intermittence, une trébuchant ensuite seule dans ces cabrioles elliptiques, il n’y a pas de milieu – univers qui l’héberge, pas d’univers d’eau de forêt de noce de connu.

juste du que ça cesse
	qui 	reste ?


c 
o
	N 	P
	  M 	   ENT


<span  class="jour"> LUNDI 14 DÉCEMBRE </span>

Felix a bougé la table la table est devant le piano je ne suis plus devant le piano.

C’est et je sont stupides.
	Glisser d’un halo de sarcophage à l’aube, 
	d’une perception de tout l’autour
	à une complète immense autre, passée
	huit fois au bistouri raclette et neuf
	fois au gaufrier avant les dernières touches de retouches.

		1er état

		le musqueux
		l’embourbé
		l’enfermé
		dans une pièce où il y a toujours 
			des biscuits au placard, et les
biscuits c’est le temps, et leur horreur c’est qu’ils sont margés en glouton-vorace-ronchon
						ron ron ron



ET CA NE 
 
TIENT PAS
 
EN PLACE


place					sorcière j’ai
					besoin de me 
					rattacher
					à de la sorcière 
					parce quelques							déraper de décor
					en décor, c’est 
					le plus incompréhensible
					des tours de magie
					que j’ai rencontré. 
					et j’en ai rencontré peu,
					et c’est pas de la magie.
					c’est de la boue qui bouille.	

ma table n’est plus à sa place et mon torse intubé à mes doigts n’est plus à sa place

ça flanche 

Arrête d’appeler ça réalité ce n’est pas forcément toi qui n’y arrive pas 

		On s’éponge à la pression atmosphérique, décibélique de notre autour.


mon autour dépend de moi maintenant
je crois, et c’est d’un flasque. 

que je ne sortirai pas de ce …

					ça balance très serré là haut

Et ces murs et ces choses et leurs boursouflures

heureusement je ne regarde pas mon corps pas encore. il n’est pas encore objet 
il n’est pas en question c’est tout. 

aucun aller
	juste mon corps et mon poste de vision qui se rétractent


rien n’ira sauver ça
aucun lien, aucun homme 
seulement l’oubli

						sans hâbîtât



vivre ici
qu’est-ce que ça 
veut dire
pour moi _______


pas le sens 
mais moi quelque part
le quelque part sur moi


ce n’est pas moi qui fais les gestes, ce n’est pas moi qui ouvre le frigo, me sers un verre, décide de l’écrire,
perd le monde

si ça c’est moi-même


est-ce que je l’éteins ou 
	est-ce 

il n’y a pas d’autre endroit
	pas d’autre habitat

juste une déplorée
	qui échappe à tout
	ce qui lui déplaît, n’est pas 
		facile.


à quoi ça sert d’être avec un cerveau qui peut tout changer en quelques sauts de marelle ? 

que l’autour soit des problèmes à résoudre, passons, mais que je sois un problème à résoudre, le problème à résoudre, ça tu vas devoir le prendre en charge 
Ombeline

	Hey
		Hey… 				tout ça 
						peut devenir hyper
						excitant, à condition que
					j’accepte que le rang initial de la réalité,
					c’est celui autour. celui des autres. 
					celui des mails et des discours.


			sauf si ? 
	
					o k
					deux lettres 
					une pour le ventre et le cur et la tête
					l’autre pour les jambes, les bras et le nez

			ça va aller. ok. 


vous voulez  savoir l’humeur de quelqu’un ?
	le regarder se brosser les dents.


l’humeur
	tumeur du petit quotidien
	parasite qui file devant le projecteur le décampe avant que la lumière n’ait le temps de dire qu’il est là.

on est bourrées d’hormones
bourrées d’humeurs 		s’enivrer c’est être sobre. 


<span  class="jour"> MARDI 15 DÉCEMBRE </span>

On est juste des bourrins
à persister tête intubée à un parfum vomitif ce n’est pas l’effet secondaire c’est le fait même. 

Pour que ça continuent, les rendez-vous, le ___
je ne peux pas faire le projet
trop imprévisible
	moi
	ça 
	le phare
	ce qu’il montre


est-ce que je serai comme ça aussi avec eux ? dans des camps de pur humain abîmé, de plein d’inquiétudes, d’un futur qu’on ne peut trop voir délabré
et que je ne peux même
	voir un futur
	voir un présent sans qu’il ne se désintègre en choses trop trop trop intégrées le coup de brame sonné. 

(SOIR)

c’est beaucoup plus insinueux. 

des boites biscornues.
				je ne sais pas contenir 
					arrêter
					les âmes de lave dans ma tête 

			je ne sais pas ce que je trace


T R A C E
	les lieux 
	ça a définitivement à voir avec les lieux

intellectuellement lampé, ça fait que ça va de la maison, des mesons 
					mes – on 
						là où on habite à plusieurs je

des maisons des chambres des chambres des salons salons salons aux lieux blancs où chaque cheminée objet est toujours identiquement disposée, et où on me laisse dans ce lieu.

					faire des tracés c’est
					abandonner fuir l’activité 
					de l’avant rivière ou c’est l’inciser la 					découvrir ? je crois que c’est fuir 

écrire le mail,
		on me veut
		ça bizdonne par là où lance l’oreille droite
		et ça continue sur mes tempes même s’’il s’est tu 
		un battement cette fois
		peut-être un appel à l’aide, à amour, à avant-bras
		je ne suis pas là pour d’autres, pourtant ils sont bien là quelque part 
		je ne veux pas aller voir cette cloque veilleuse
					elle vous met le poste sur une totale 							autre amitié

partout, 	des booteurs de cervelle
	des réinitialisateurs de gestes
	des déclencheurs d’automatons 


là j’abandonne 
ma 4ème ligne je 
ne sais pas si je 
vais y retourner est-ce
que être c’est vraiment enchaîner
les faire les réussites les compétences
les choses à faire ?	ouvrir un livre,
recopier un cours, 
suivre un bombé de couture abdominale sur youtube,
faire à manger, 
regarder la télé,
aller en réunion,
apprendre un morceau

j’ai encore trop peur de quoi ça va venir j’espère dans quatre lignes mais donc j’ai peur connecteurs logiques pour se garder la pensée en bracelet. 

J’ai peur de ne pas me trouver pour me créer ma vie

le sommeil me kidnappe les épaules
il vient me dire chut
ne reviens pas sur ce que tu as
à peine dégazé, sur ce que tu n’as 
pas donné à boire de la briquette de ta pensée 
	je vais répondre à ce foutu téléFAUNE


<span  class="jour"> VENDREDI 19 DÉCEMBRE </span>

je jouais lentement assez pour voir les notes se distribuer, tomber les unes après les autres (c’est moins propre que ça en a l’air) dans les colis des touches. 
	et ce fa dièse
	je n’en sais rien si c’est un fa dièse 
	mais ça serait un fa si ça devait être une humaine. 
	à l’intérieur du hall on a posé la question on a remarqué la madame du tutoriel


j’ai du mal à rester concentrée pour écrire si j’ai l’idée de ce que je veux écrire, comme pour les gribouillis. c’est pour ça que ça reste des gribouillis. et que produire en se croyant aux commandes est si difficile. si j’entends la phrase que je vais écrire juste après je suis fatiguée de l’écrire et je ne l’écris pas comme si tout ce que je pensais ou construisais devait être oublié. 

c’est difficile de rester sur une fichue petite histoire de siamoiserie en pots de yaourt cellulaires temporels
voilà
	dès que l’idée est 	visible
			audible
			connue

	elle disparaît
	         ou 	je mets tout en oubliettes pour le désintégrer, le disparaître, l’oublier
		ça met
		
		comme pour anéantir tout 
			paraître 

comme pour n’être quelque chose de molle visqueuse subjuguée à la semelle de mon sens de la réalité je voulais dire subordonnée

FAIRE DEUX FOIS
	pourquoi ça me dérange de le faire DEUX fois
	de l’entendre,
	de me l’entendre dire,
	puis de l’écrire
	pourquoi je ne veux pas apprendre
	pourquoi je veux que tout reste passant, opaque comme un nuage honnête 


je suis bloquée dans 
	un effleurement
tout le reste n’est que surgissement

		incontrôlé aléatoire ça arrive au fur à la mesure que le stylo coulisse.

j’espère que je me souviendrai de 
l’histoire balluchonnée à ce fa 
je l’aimais bien. c’est pour ça que je suis venue (vouloir) l’écrire
le son était plus fort. Le son du piano. 
et j’étais plus proche de moi-même, de la petite ombeline, ébahie de savoir qu’un jour une ombeline lirait les mêmes notes, en 2020. 
un écriture
	quelqu’un qui la dépose et elle qui vous encrasse.
de vous prouver que c’est elle qui se dépose seule. 

comment font les gens pour 
se préparer ? sans s’ennuyer  
sitôt pressentis prêts ? 

comment font-ils pour parvenir à cette prise 	de mur	et y rester. 
				d’escalade
				vert grumeleux
				elle ressort
				pas d’autres autour

le processus pour chercher l’idée est excitant. mais une fois qu’elle est là. qu’on croit pouvoir l’avoir en matière grigri (plusieurs objets un peu modelés, pas un bloc/une boule indiscontinue de matière)

comment pincer et faire crier le processus
qui la met en forme, de manière organisée,
pour la police Helvetica polyforme du monde extérieur, du milieu ? 

					parce que j’y suis
parce que le milieu a de ma mémoire, il a certains (beaucoup?) de mes mécanismes de penser. 
et donc ne pas savoir le faire, c’est ne pas pouvoir accéder aux autres, aux rendus du milieu et à une partie de moi-même.


<span  class="jour"> LUNDI 21 DÉCEMBRE </span>
	
un relent de vomi mouillé qui pousse, ne demande qu’à arracher le papier peau et jaillir s’enrouler sur le détachant, tout l’envers, vert si clair. 

la plante
on ne demande pas à la plante de faire autre chose qu’exister
	après on ne lui dem
			… je ne peux pas me poser

j’ai peur de la seconde
qui déboule
celle d’après
le jour d’après 
les bottes dans le meuble à l’entrée
je suis si triste
	ça s’avalanche de ma gorge à plus bas, quand c’est plus bas. 


et je n’arrive pas à pleurer
	ça reste à quai
			comme si on me disait que maintenant 
			je devais avancer
			je devais faire, maintenant
			aller mieux, maintenant

et j’ai très peu d’idées de par quels terriers sortir

<span  class="jour"> LUNDI 28 DÉCEMBRE </span>

Qu’aussi vrai que la terre est ronde. 

je te voulais rester un ami de la ligne, de l’écrit seul à seul avec le cadre, qui fait patienter l’annonce mocalisée dans le hall pour l’avoir assez tempérée sur papier. 
apprendre à gérer le stock de l’entendu, du prévu, dégoulinant en crépitements des phalanges sur le suppositoire bleu, qui agite des lettres, un peu lui-même surpris de les avoir déjà sorties, qui regarde transforme la tension du poignet en mots en phrases et voilà déjà un bout de la pensée regardable
			la voilà aimable, la voilà saisissable.

et me voilà qui m’enfuit 

je ne sais pourquoi je te crains 	temps 
			tant
		pourquoi tu m’énerves.
pourquoi je ne te vois pas comme matière excitante, comme chance.

tu dis trop en fait
	et je suis trop fatiguée
	c’est difficile de suivre ton rythme, de rester concentrée, d’accepter que je départis totalement en quelques tapements


il faut que je reste là j’ai des choses à te dire toi qui dit tant. je pourrai par ailleurs découvrir ce que ça veut dire quand je mets que tu dis, beaucoup


	je n’ai pas trouvé mon C O M M U T A    TE UR

ok hello world

	écrire ne va pas au pas de valse des mots-gens dans mon hall.

souvent ça fond 
	ça part juste sans formulation
		dissout en neige



g
   l
     oup 
	je suis obligée de vous parler en collégiade de sons lettrés


Des fois c’est un petit monde
	et la fois d’après c’est un autre petit monde. 


					
et c’est à moi de faire l’effort connecter tous les petits mondes entre eux 

					dans la colonne
							de la conedu 
							du gnou
		ruban (vis sans fin)
				additionner les gâteaux de 
	matelas



c’est là que je vais à la conquête d’une foreuse

		jambes qui se prolongent et se confondent en neige


quand n’être qu’une aquerlie de moi-mêmes
	
	aporie aqueuse écarlate 
			Herlies éboulis écarlates

					liqueur

vous votre voix et et votre dièse de coupe


bâtissez une ossature dans laquelle je me sens bien

surtout je ne me sens plus, au porte et au sortir. 

                `}],Gs="/assets/PPSuivant-e851b806.png",Zs="/assets/PPLunes - bg-af45c2e2.png",et="/assets/PPLunes - couleurs-1a000ec7.png",Pd="/assets/PP2020-f5e5bd01.png",Od={components:{RouterLink:os},watch:{$route(e,s){console.log("2020!"),console.log(Oe)}},data(){return{blocs:Td,currentScroll:0,currentIndex:0,columnWidth:400,imgPrev:Oe,imgNext:Gs,friseBg:Zs,friseColors:et,progress:0,moisDisponibles:[],img2020:Pd}},computed:{fullText(){return this.blocs.map(e=>e.texte).join(`

---

`)},clipStyle(){return{clipPath:`inset(0 ${100-this.progress}% 0 0)`,WebkitClipPath:`inset(0 ${100-this.progress}% 0 0)`}},fadeStyle(){return{left:`${this.progress-6}%`}}},methods:{next(){const e=this.$refs.journalContainer,s=e.scrollWidth-e.clientWidth;this.currentScroll=Math.min(this.currentScroll+this.columnWidth,s),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},prev(){const e=this.$refs.journalContainer;this.currentScroll=Math.max(this.currentScroll-this.columnWidth,0),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},updateProgressFromScroll(){const e=this.$refs.journalContainer,s=e.scrollLeft,t=e.scrollWidth-e.clientWidth;this.progress=t>0?s/t*100:0},scrollToMois(e){const s=this.$refs.journalContainer,t=s.querySelector(`#${e}`);if(t){const n=t.offsetLeft-20;s.scrollTo({left:n,behavior:"smooth"})}}},mounted(){const e=this.$refs.journalContainer;e.addEventListener("scroll",this.updateProgressFromScroll),this.updateProgressFromScroll(),this.$nextTick(()=>{const s=e.querySelectorAll(".mois");this.moisDisponibles=Array.from(s).map(t=>(t.getBoundingClientRect(),e.getBoundingClientRect(),{id:t.id,label:t.textContent.trim(),offsetLeft:t.offsetLeft,position:t.offsetLeft/(e.scrollWidth-e.clientWidth)*100}))})}},wd={class:"annee-container"},Md=["src"],Ld={class:"frise-lunaire"},Dd={class:"repere-mois-container"},Nd=["onClick"],$d=["src"],Ud=["src"],Bd={class:"journal-container",ref:"journalContainer"},zd={class:"journal-columns"},kd=["innerHTML"],Fd={class:"controls"},Hd=["src"],Vd=["src"];function Wd(e,s,t,n,r,i){return U(),z(se,null,[b("div",wd,[b("img",{class:"annee-img",src:r.img2020,alt:"2020"},null,8,Md)]),b("div",Ld,[b("div",Dd,[(U(!0),z(se,null,as(r.moisDisponibles,(a,o)=>(U(),z("div",{key:a.id,class:"repere-mois",style:le({left:a.position+"%",top:o%2===0?"9rem":"0.5rem"}),onClick:l=>i.scrollToMois(a.id)},Pe(a.label),13,Nd))),128))]),b("img",{src:r.friseBg,alt:"Frise Background",class:"frise-image"},null,8,$d),b("img",{src:r.friseColors,alt:"Frise Couleurs",class:"frise-image frise-mask",style:le(i.clipStyle)},null,12,Ud),b("div",{class:"frise-fade",style:le(i.fadeStyle)},null,4)]),b("div",Bd,[b("div",zd,[b("pre",{class:"journal-pre",innerHTML:i.fullText},null,8,kd)])],512),b("div",Fd,[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...a)=>i.prev&&i.prev(...a))},null,8,Hd),b("img",{src:r.imgNext,alt:"Suivant",class:"nav-button",onClick:s[1]||(s[1]=(...a)=>i.next&&i.next(...a))},null,8,Vd)])],64)}const Jd=De(Od,[["render",Wd]]),Kd=[{texte:`<div class="mois" id="mars"> MARS </div>
<span  class="jour"> MARDI   9   MARS </span>

ce qui appartient à MON PRE (près)

La QUESTION : où arrive-t-on à s’appartenir ? 


<span  class="jour"> MERCREDI   31   MARS </span>


bonne question omb

je suis engraissée dans une raie de CD
bloquée j’y bégaie, deux murs et moi qui n’y mûris pas

qui n’avance pas ne réfléchis pas, cernée par ma nature en sur-place. Quand j’ai le choix, d’instinct je fais celui de ne pas en faire ? De laisser les jours me débouler dessus, laissant des petites sculptures de matière dans la chambre, mais sans jamais de planification-invention du moi, qui me redonne le sentiment de la singularité d’être
écrire, par exemple.
à d’autres, à soi, faire ses temples. 

<div class="mois" id="avril"> AVRIL </div>
<span  class="jour"> LUNDI   5   AVRIL </span>

		ça m’a l’air en formation

l’air est en formation, étudiant des grands jours
	et l’ensemble croasse


De mon champs je dois trouver les sens d’argent qui co-avertissent les aimants en gens-chants.

ALTITUDE ALTIFLECHE

	     			en tant que quelques unes de nos 						activités  familières règnent quelques 					chênes qui ont perdu l’entente de leurs 			ancêtres 
             décomplifier
	plexer
	plexifier
            LE CORPS 
         ET L’ESPRIT
                   AMEN



nous nous retrouverons lèvres au fourgon
de nos passés aphories de l’épistolaire
		qui deviennent antenne solaire 


	fatigant


					éclaire mes sentinelles d’escapade


<span  class="jour"> MARDI   6   AVRIL </span>

J’ai fait patte blanche, 
	ai tout tondu sur la place poivrée,
	ai libéré les nuques



<span  class="jour"> VENDREDI   16   AVRIL </span>
 
Avoir l’Envie d’être aux côtés de quelqu’un qui rayonne.
Passer la soirée sur le lit d’une autre aura. 


<div class="mois" id="mai"> MAI </div>
<span  class="jour"> SAMEDI   1er   MAI </span>

les autres ils ont tout compris à comment on fait les chambres. 
	aspire d’autres, aspire à fond
	prospère, sentiers d’esseulés
	danse la largue tirée

oiseaux ; balayeurs du ciel, leur meute est un ballet, agriculteurs de l’air

quand grince la porte te voilà bien proche


<div class="mois" id="juillet"> JUILLET </div>
<span  class="jour"> DIMANCHE   18   JUILLET </span>

stabilisée sur le pont extérieur, les ailes du hamac balaient le fond feuillu comme un pendule règle l’horloge de l’homme ivre. J’ai beaucoup de coins ombragés à mon regard, je ne sais pas encore me lire, me faire parler. Les enfants me touchent, c’est la chose la plus bruyante qu’ils font dans mon monde d’adulte : ils me rappellent sans cesse que mon corps appartient à leur sauna, que je leur fais du bien, que nous sommes des interfaces magnétiques comme les poils du chat sur mon repas.

PORCUPINE
cours cours, attrape
le serpent
avant que ton dos ne 
s’arque sous l’effet de la
faim


					et je n’ai pas beaucoup de mots en tête,
					mais beaucoup de mouches sur les pieds.




je n’ai jamais vu de chiens
avoir des vêtements de meute auparavant,
ils ont l’air d’avoir leur propre réalité ludique. `}],Qd="/assets/PP2021-adb1266b.png",Yd={components:{RouterLink:os},watch:{$route(e,s){console.log("2020!"),console.log(Oe)}},data(){return{blocs:Kd,currentScroll:0,currentIndex:0,columnWidth:400,imgPrev:Oe,imgNext:Gs,friseBg:Zs,friseColors:et,progress:0,moisDisponibles:[],img2021:Qd}},computed:{fullText(){return this.blocs.map(e=>e.texte).join(`

---

`)},clipStyle(){return{clipPath:`inset(0 ${100-this.progress}% 0 0)`,WebkitClipPath:`inset(0 ${100-this.progress}% 0 0)`}},fadeStyle(){return{left:`${this.progress-6}%`}}},methods:{next(){const e=this.$refs.journalContainer,s=e.scrollWidth-e.clientWidth;this.currentScroll=Math.min(this.currentScroll+this.columnWidth,s),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},prev(){const e=this.$refs.journalContainer;this.currentScroll=Math.max(this.currentScroll-this.columnWidth,0),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},updateProgressFromScroll(){const e=this.$refs.journalContainer,s=e.scrollLeft,t=e.scrollWidth-e.clientWidth;this.progress=t>0?s/t*100:0},scrollToMois(e){const s=this.$refs.journalContainer,t=s.querySelector(`#${e}`);if(t){const n=t.offsetLeft-20;s.scrollTo({left:n,behavior:"smooth"})}}},mounted(){const e=this.$refs.journalContainer;e.addEventListener("scroll",this.updateProgressFromScroll),this.updateProgressFromScroll(),this.$nextTick(()=>{const s=e.querySelectorAll(".mois");this.moisDisponibles=Array.from(s).map(t=>(t.getBoundingClientRect(),e.getBoundingClientRect(),{id:t.id,label:t.textContent.trim(),offsetLeft:t.offsetLeft,position:t.offsetLeft/(e.scrollWidth-e.clientWidth)*100}))})}},Xd={class:"annee-container"},Gd=["src"],Zd={class:"frise-lunaire"},ep={class:"repere-mois-container"},sp=["onClick"],tp=["src"],np=["src"],rp={class:"journal-container",ref:"journalContainer"},ip={class:"journal-columns"},ap=["innerHTML"],op={class:"controls"},lp=["src"],up=["src"];function cp(e,s,t,n,r,i){return U(),z(se,null,[b("div",Xd,[b("img",{class:"annee-img",style:{width:"50%"},src:r.img2021,alt:"2021"},null,8,Gd)]),b("div",Zd,[b("div",ep,[(U(!0),z(se,null,as(r.moisDisponibles,(a,o)=>(U(),z("div",{key:a.id,class:"repere-mois",style:le({left:a.position+"%",top:o%2===0?"9rem":"0.5rem"}),onClick:l=>i.scrollToMois(a.id)},Pe(a.label),13,sp))),128))]),b("img",{src:r.friseBg,alt:"Frise Background",class:"frise-image"},null,8,tp),b("img",{src:r.friseColors,alt:"Frise Couleurs",class:"frise-image frise-mask",style:le(i.clipStyle)},null,12,np),b("div",{class:"frise-fade",style:le(i.fadeStyle)},null,4)]),b("div",rp,[b("div",ip,[b("pre",{class:"journal-pre",innerHTML:i.fullText},null,8,ap)])],512),b("div",op,[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...a)=>i.prev&&i.prev(...a))},null,8,lp),b("img",{src:r.imgNext,alt:"Suivant",class:"nav-button",onClick:s[1]||(s[1]=(...a)=>i.next&&i.next(...a))},null,8,up)])],64)}const dp=De(Yd,[["render",cp]]),pp=[{texte:`<div class="mois" id="janvier"> JANVIER </div>
<span  class="jour">LUNDI   31   JANVIER</span>

joviale
	que ce toboggan dévale la pente


(PLUS TARD, LE SOIR)

d’avoir écrit ce mot me rappelle que cette lumière a épousé ma fenêtre plus tôt dans la journée.

j’ai une envie qui me ponctionne en pulsations ces derniers temps. elle me taraude, me fore, elle est vilace, acerbe. Celle de me faire du mal. 
dans l’intérieur de moi-même, dans quelque chose qui ne m’appartient pas mais qui me tient en mains tout à fait. 
	dans mes cellules. les électro-choquer. non par peur de les sentir. plus pour les endolorir. 

		donc je fume. je me consume, rouge vif par a-coup de rouge vif. j’allume mon extinction. je ne sais pas si c’est un choix, étant donné que je suis au chevet de sensations doucement, funestement pulsionnelles. mais je choisis de les assouvir, de décider de ma moisissure en l’État présent.

fumer me constitue une présence.
j’écoute féminine de Julius Eastman et je vois des brins d’herbe vermillons courir sur le vent. un vent doux, endolori. un vent lié, bas, homogène, celui d’une fumée qui parle à voix basse. d’un manteau bleu terre clair. 

qu’on me donne un ami ce soir. 
j’en fais la demande. s’il-vous-plaît. qu’on me donne un ami avec qui échanger nos cous, ce soir. 

au moins, j’ai une nouvelle bougie d’eau. elle est longue. je peux y boire ce que j’ai envie de couler d’eau en ma trachée. 
alors je bois. et je fume. sur cette colline d’herbes flûtistes. 

		bonne nuit ombeline. bonne nuit petite cerise. et bonne nuit l’air froid. je t’aime, toi. 

<div class="mois" id="février"> FEVRIER </div>
<span  class="jour">SAMEDI   5   FEVRIER</span>

	je comprends. 
		mais ça me ramène à une pièce qui défile dans un train duquel je n’ai aucune idée d’où il 		m’emmène. 
ça recalibre tous les indices que j’ai appris avec l’autre. en fait ça met dans une boue étrange où je ne sais pas si je suis seule ou avec quelqu’un. 
	avec toi. 


<span  class="jour">DIMANCHE   6   FEVRIER</span>

la pluie tousse des sifflets de perles, et mes hanches de bocal s’assoient sur le trépied de la fenêtre
pendant que carambeau vit ses cinq dernières années. 

ça emporte le plexus en bains remous
même les pingouins peuvent glisser. 


<span  class="jour">JEUDI   10   FEVRIER</span>

salut toi.
	coucou ombeline !

j’ai, tu as, nous avons deux sentiments amoureux. c’est se jeter dans Niko, dans Felix, et vouloir leur bien. qu’iels aient des collines d’étoiles en chapeau. ne l’oublie pas, cela, quand tu cherches leur présence. il faut les aimer, très fort. 
	car tu les aimes, plus que du roquefort argilant un terril de tagliatelles. 

Félix, c’est ton armure. elle est sur toi, au bord de toi, et en vagin épais et gouttelant dans, à l’intérieur, à la frontière de ce qui fait dessin avec ton corps. 
et il est au fin fond de ton épicentre, émanant un feufollet incandescent au creux de tes artères.
		il est ton univers,
				ton lac lacté aux prémisses de ton origine. 

mais tu es accrochée à eux. 
ils t’emportent 
tu veux les enlacer par le dos, être, se déposer en parachute. 
et les fondre sur l’humus.
les faire soupirer jusqu’à adopter l’écume. 


<span  class="jour">MARDI   22   FEVRIER</span>

marcher à en décaper les siècles. 
	partir, loin d’ici, n’en jamais finir de marcher. 

stoppée par une serre pesante d’étoiles, qui me demande avec sa paume de rester sur Terre, de savoir tout ce qui me précède et succède, tout ce qui m’encapsule, me tient en place.


<div class="mois" id="avril"> AVRIL </div>
<span  class="jour">SAMEDI   23   AVRIL</span>

je me retrouve dans cette soute à soigner.
ces souterrains habillés d’esprits malades, abîmés d’aspirine-pommade, aspirés par des pôles chamades.
tous ces ouvriers qui s’acharnent, l’humanité qui glisse de box en box, à remplir de temps la fiole vide du temps déchu. 
	des seringues en plastique, des liquides mazouts et gluants, quel terrain glissant quand on va 	transfuser l’hystérie ! 


calme calme calme le tambour
tu ne mourras pas à la tombée du jour
tu ne tomberas pas sans la joie de leur amour

je sens que j’ai de l’angoisse à n’y que simple penser que je dois retourner sur les fronts quotidiens.
je sais pourtant que ton visage est doux étrange loup de métallurgie. 
mais tu m’angoisses, tu m’entres en gorge, tu me sors en échasses assoiffées, tu m’affectes, bel insecte.


									écurie d’étalons fracturés

pulvérulence
imposable


<span  class="jour">LUNDI   25   AVRIL</span>

- Pourquoi je suis ici : phosphorer les contours du problème
- Être sincère sur ce qui m’angoisse


<span  class="jour">MARDI   26   AVRIL</span>

il y a cet effroi d’y retourner
ce musellement qui me sectionne la parole 
au réveil.
la peur s’est réveillée au réveil.

j’ai la jugulaire qui manque d’air
le thorax qui pourrait être batteur dans un groupe de métal. 

(UN PEU APRÈS)

j’ai fondamentalement peur que le cirque rallume sa piste. que le monde s’hétéroclite de nouveau et m’abandonne dans ce non-lieu, ce bassin de néant, d’entre-double fond de l’espace, où mon seul oxygène est l’isolement de tout mon amour du vivant incarné. de toutes ces personnes qui glorifient le diaphragme de mes projecteurs, qui scintillent d’évidence que je dois endosser le baudrier. 
	et pourtant. pourtant j’ai toutes ces accroches, toutes ces portes fermées à clé, tous ces barrages de feutrine. 

Mais comme j’ai peur d’y retourner, sur cette planète-éponge… (instrument flûte de paon)

Je veux vivre dans le milieu. 

C’est la première fois que je le sais et je suis convaincue que c’est une grande étape dans mon processus d’apaisement, de cohabitation. 
Mais une condition pour retourner dans le milieu est de l’aménager, de déplacer les meubles, recalibrer les aiguilles des pendules, changer les pêcheurs des parterres de fleurs, leur donner d’autres engrais, leur engrainer d’autres hameçons, me laisser de la placer, m’accorder une place, m’offrir ma place. 

(L’APRÈS-MIDI)

j’ai peur d’y retourner
cela me paraît si
complexe si incompressible
totalement total.
et je n’aime pas le total.
ce que j’aime, c’est les failles.
les brèches, les pulvérulences, 
les gondoles, les frivoles.


toutes les oreilles d’air où le vent peut chanter
où le flux peut s’engouffrer
où les magnésies savent traire l’orgue pour l’assemblée de prêcheurs. 
							

j’aimerais tant vivre dans une flûtopie. 

Aux ordures tous les lieux que je connaissais.
je ne veux plus y retourner
je ne veux que le mariage de mes amies, 
dans une prairie, dans une longère, sous un flot vert, aux prémisses de l’océan. 

s’il-te-plaît grand cerf blanc, redonne moi des enfants.						


<span  class="jour">MERCREDI   27   AVRIL</span>

	jenvénile esterpande quoulu
	cerfeuilles chérantrope espér


(SOIR)

je commence 	à décrocher
		à m’ébouillanter
		j’aimerais tant que tout s’éteigne 
					que le plafond 
					joue du piano
					profond, qu’il
				tombe en bpm,
				touche par touche


je pense avoir appris à me libérer du grand arceau, de l’étau totalitaire. je n’ai pas à tout expliquer, tout faire, tout dire. je peux choisir le mince, le jeté, la partie, le gressel plutôt que la plage de sel. 


<span  class="jour">JEUDI   28   AVRIL</span>

tout va très bien aujourd’hui. hier aussi ! 
		youpi !

ici, les résidents sont d’une expiation affective extraordinaire. ils vivent intensément, authentiquement, d’une générosité lampadairienne. 

- compost cimetière mercure
- Sofia enfant Jana.


<span  class="jour">VENDREDI   29   AVRIL</span>

Christopher se sucre les cheveux.
Sylvie a des cheveux ondulés magnifiques. 

							Jourdain se promène dans le jardin. 


<div class="mois" id="octobre"> OCTOBRE </div>
<span  class="jour">VENDREDI   21   OCTOBRE</span>

Le vertige me guette. Il me toise de ses tours de grues vitrées et je suis à sa merci, nue, sur les graviers qui s’étendent au chevet des collines. J’attends l’opprobre, le châtiment de l’oiseau à échasses qui m’emportera sous ses toiles ; et je finirai crue, chair qui flamboie sous les graviers d’au automne alien. Me laisseras-tu un jour un scaphandre oxygéné à la latitude du corps social ? 

l’aimer lui, dans un nouvel espace. 
j’ai besoin de me grandir en sequoia d’abord. 
nous ne sommes plus qu’en chorale duophonique, et j’ai du mal à mélodier en harmonie avec lui.
peut-être est-ce parce qu’il fait intrusion. 
La méta-stabilité me métamorphose en illisibilité… je le trouve formidable, mais de loin. c’est une petite tragédie, incisive et épaisse, qui s’abat sur moi. j’ai tant envie de le retrouver, de chercher ses bras d’un élan viscéral. 


<span  class="jour">DIMANCHE   30   OCTOBRE</span>

RÊVE NOCTAL

3 classes, sociales. immeuble appartient à tonton Pascal et tata Nathalie. Je vis dans les bas-fonds ; milite pour ++ conditions de vie. Suis enceinte, dois partir. Vol de Louis-Pierre avec des dragons petits rouge, vert et jaune . J’insiste pour qu’on prenne mes céramiques amies. C’est laborieux. J’enfile un train en perles et saute dans le wagon. Attraction où il faut se tenir le plus longtemps possible. Maxence est recherché par son père. Professeur de chinois à l’université. J’arrive dans un chapiteau. Felix jongle dans un dessin-animé. Hugo recouvre la voix de la salle de rires. M’éloigne de Niko, panique, suis toujours enceinte. Arrive devant la scène par tourbillon de cercles humains, m’excuse fastement. Déboule dans coulisses pour aller aux toilettes et entraîner mes contractions selon maman. Hugo et        m’accueillent. Leur parle de Felix, que je lui souhaite le meilleur et aimerait le revoir, se figent. Repars seule avec mes filets pour le marché. Suis dévastée. 


<span  class="jour">DIMANCHE   31   OCTOBRE</span>

C’est Halloween !! Et quoi de plus machiavélique me jette des bonbons et un sort à chaque sillon de vide qui me pourfend ? La petite allumette… Je veux que notre relation cesse, petite allumette. C’est délicat car tout le bal costumé te porte au bec. Je commence cette liste avec moi pour espérer te voir partir au large. Que le tabagisme passif imbibe mes alvéoles désormais, et non mon geste ! 

- la clope me fatigue le matin. elle m’aspire mon excitation et la luminosité du jour.
- je ne suis jamais contente après avoir fumé… toujours cette vile brise amère d’un remord.


<div class="mois" id="décembre"> DECEMBRE </div>
<span  class="jour">DIMANCHE   11   DECEMBRE</span>

Bigorneaux fêlés le dimanche venu. Tombent en acoustique farfelue sur le dos des dauphins nus. Que comblent de langoustes les porosités du bois. Car déjà ce matin le froid les dorlotait. Qu’oublient-ils quand le sceptre de l’amnésie les bénit ? Qu’on ne peut mourir d’amour, mais que de clivage oui. On ne peut mourir d’amour, mais l’on peut le faire ! Alors ce soir ils dirent… 


<span  class="jour">JEUDI   15   DECEMBRE</span>

Retour sur une semaine radieuse, euphorisante de cerfs-volants à six mats. LUNDI je retrouvai Radi & Che et décidâmes de nous marier. Notre trouple pourfend les cieux de ses nuées de grues migratoires. MARDI la ville, j’y appartiens, elle m’à part-tient. son odeur coule à flots et Notre Mère roule ses sauts, de passerelles en plâtrées de bâtisses bariolées. Pan et je tournicotons des oculaires de marmimouette avec allégresse. je me sens paisiblement sereine avec elle. MERCREDI pierrot vient casser la croûte avec Pan à la maisonnée. Que c’est bon de le revoir, de ressentir son idioaltérité. à la nuit tombée POUF Pan et je marchons à demi-mot sur des tisserandes de spidedredon, pour individu prématuré. je dors chez elle, nous nous laçons les poignets. JEUDI je me faufile jusqu’au Cofor, bénédiction d’avoir trouvé un eldorado où faire cuire sa retraite. je m’autoportraite, fusillant les « je suis » à cette petite fourmi en moi qui ne sait toujours pas tout à fait où loger, chez qui pourquoi, dans le mili-ondes. Je radio-galère puis vais boire une jakobienne bière, avant que de me faire la malle au vestiaire de l’AAE ; techno syrienne me donne une gigote nébuleuse et épouse des saccades douces du vent (long wagon celui-ci). des allemands proclament la paix aux toxines dans mon logis. j’enlace jakob et il m’étreint le dos, c’est un ami, vraiment, merci de me donner des amis, Madame toupie-sourires. 


<span  class="jour">VENDREDI   23   DECEMBRE</span>

sourde je n’empiète sur aucun hélicoptère. 
les oies-hauts sont des tresses
		et mes pieds des palmipèdes. 
j’aimerais leur soutenir que le temps sera un cargo. mais les écrevisses filent et jamais les argots n’ont été autant d’actualité. 
	que siègent les automates
	que croupissent les saunas…


je n’en puis plus de me frigorifier dans cet étang nu. la famille est derrière des riveraines, quand sous la mer craint l’automne. de nos jeunes années il n’en reste que des débris. Des hydrocarbures à ciels ouverts, des pétroliers à liège rancé, des grues par cimetières et parsemées, que ni le vent ni l’empire éolien ne sauront rassurer. 

oublions l’éparse semé. oublions les lanternes au tein blanchi par les traîtres. oublions les émanations des émailles encore trop jeunes pour habiller. oublions les. recouvrons de jaune les orphelins du pays qui ne tenait plus sur ses six jambes. essuyons de cendre les ors fêlés de ces parcs qui jamais ne verront de chat. flamboyons les estomacs rouillés et mélangeons de suie les porcinets vêtus d’été puis, arrêtons de faire. arrêtons de vénérer les faisons et les faisans. ne sois plus qu’à un cil svelte d’être loi. 

	chapiteau							chafallet
	chapeau de paille						chatitré
	chamoisan							chapiteau
	chamanique							quel piteux chapson


<span  class="jour">MARDI   27   DECEMBRE</span>

les submodules tambourinent à mon cirque.
ils synthétisent une cacophonie organisée, propre sur elle, mais insoutenable. ils envahissent mes jardins printaniers. ça y est, ils ont orchestré un repli. 

	les revoilà. 

c’est la tête de lecture dynamique qui va scrubber le sample. Soit.

je réalise que je suis bien plus structurée que je ne pus l’être. je résous mes infirmités par plus de glue-attache au mili-ondes. 
									que manger liminal ?
									quel contondant m’assène ?

parallélisme du jus de chaussette. 
je soubresaut en cliquetis votes municipaux médians. 

comment chercher le chat poté dans cette botte de groins ? je me sens éludée. un bouillon de circuits électroniques, harcelée de discrets OP AMP qui détonnent des magies noires veloutées. 

je suis assise. dans mon quotidien, mes relations, mes révélations. je ne suis ni funambule à 27 mètres d’altitude, ni carapatée à quatre pattes le ventre glissant sur les sous-sols. 
je suis gestionnée, une bureaucratie de comédiens intermittents. j’ai des repères, un père et même des pairs. je ne manque par de jugeote. 
je suis le père-noël avec la hotte. 
PACK ALL INCLUSIVE. 


(RÊVE NOCTAL)

l’escale en plus bariolé. je bois dans mes chaussons. Sorcière me demande si je peux lui injecter un peu de bruit dans la tête, un soupçon de schizophrénie. me donne quatre fioles, deux par deux (bonheur, sérénité et schizophrénie, bipolarité). 
vais au Janicolo. dans salles de classe et toilettes, des sans-vie - dégoulinant des lassos de morve de leurs naseaux - nous attaquent. fuis dehors. 
énorme vacarme spatial de la corniche. énorme. je ne raconterai pas. je verrai. tribu des 40 soeurs m’accueille, petits têtards dans aquarium lave-vaisselle. et rebelote. un jour supplémentaire pour tout changer. 


`}],mp="/assets/PP2022-6275518c.png",fp={components:{RouterLink:os},watch:{$route(e,s){console.log("2022!"),console.log(Oe)}},data(){return{blocs:pp,currentScroll:0,currentIndex:0,columnWidth:400,imgPrev:Oe,imgNext:Gs,friseBg:Zs,friseColors:et,progress:0,moisDisponibles:[],img2022:mp}},computed:{fullText(){return this.blocs.map(e=>e.texte).join(`

---

`)},clipStyle(){return{clipPath:`inset(0 ${100-this.progress}% 0 0)`,WebkitClipPath:`inset(0 ${100-this.progress}% 0 0)`}},fadeStyle(){return{left:`${this.progress-6}%`}}},methods:{next(){const e=this.$refs.journalContainer,s=e.scrollWidth-e.clientWidth;this.currentScroll=Math.min(this.currentScroll+this.columnWidth,s),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},prev(){const e=this.$refs.journalContainer;this.currentScroll=Math.max(this.currentScroll-this.columnWidth,0),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},updateProgressFromScroll(){const e=this.$refs.journalContainer,s=e.scrollLeft,t=e.scrollWidth-e.clientWidth;this.progress=t>0?s/t*100:0},scrollToMois(e){const s=this.$refs.journalContainer,t=s.querySelector(`#${e}`);if(t){const n=t.offsetLeft-20;s.scrollTo({left:n,behavior:"smooth"})}}},mounted(){const e=this.$refs.journalContainer;e.addEventListener("scroll",this.updateProgressFromScroll),this.updateProgressFromScroll(),this.$nextTick(()=>{const s=e.querySelectorAll(".mois");this.moisDisponibles=Array.from(s).map(t=>(t.getBoundingClientRect(),e.getBoundingClientRect(),{id:t.id,label:t.textContent.trim(),offsetLeft:t.offsetLeft,position:t.offsetLeft/(e.scrollWidth-e.clientWidth)*100}))})}},hp={class:"annee-container"},vp=["src"],gp={class:"frise-lunaire"},bp={class:"repere-mois-container"},qp=["onClick"],jp=["src"],Ep=["src"],yp={class:"journal-container",ref:"journalContainer"},xp={class:"journal-columns"},_p=["innerHTML"],Rp={class:"controls"},Cp=["src"],Ap=["src"];function Sp(e,s,t,n,r,i){return U(),z(se,null,[b("div",hp,[b("img",{class:"annee-img",style:{width:"50%"},src:r.img2022,alt:"2022"},null,8,vp),b("div",null,Pe(r.img2022),1)]),b("div",gp,[b("div",bp,[(U(!0),z(se,null,as(r.moisDisponibles,(a,o)=>(U(),z("div",{key:a.id,class:"repere-mois",style:le({left:a.position+"%",top:o%2===0?"9rem":"0.5rem"}),onClick:l=>i.scrollToMois(a.id)},Pe(a.label),13,qp))),128))]),b("img",{src:r.friseBg,alt:"Frise Background",class:"frise-image"},null,8,jp),b("img",{src:r.friseColors,alt:"Frise Couleurs",class:"frise-image frise-mask",style:le(i.clipStyle)},null,12,Ep),b("div",{class:"frise-fade",style:le(i.fadeStyle)},null,4)]),b("div",yp,[b("div",xp,[b("pre",{class:"journal-pre",innerHTML:i.fullText},null,8,_p)])],512),b("div",Rp,[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...a)=>i.prev&&i.prev(...a))},null,8,Cp),b("img",{src:r.imgNext,alt:"Suivant",class:"nav-button",onClick:s[1]||(s[1]=(...a)=>i.next&&i.next(...a))},null,8,Ap)])],64)}const Ip=De(fp,[["render",Sp]]),Tp=[{texte:`<div class="mois" id="janvier"> JANVIER </div>
<span  class="jour">MERCREDI   04   JANVIER</span>

les strates pleuvent sur mes hydrophilies célestes… je 
							    suis 
						   	         folle. et j’adore nager dans cette matière 
									réticul’air. 


schizofrénésie me donne un toit au royaume des fous. 
un repas à partager, virevoltante, vagabonde, sur les odyssées des sentiers de l’air compressé. 

il y a une otite
dans mon couple mille-i-ondes, 
une terrible sardine prête à déraciner la moindre allégresse du beurre mou de l’a-pesanteur. 

je suis une nymphe de l’eau. un aqua-ballet, 
				une hydro-danseuse, 
				une aéro-anémone, 
				un souffle d’hippocampe. 

allô la terre, ici je plane de lune en lune. 
je me sens fille du vent-re. 
je navigue de ciel en ciel, la fraîcheur du bleuet pour seul capitaine. 
je suis un enfant des satellites à la rosée guérie par la DOUCEUR. 

				la somptueuse douceur du 	BLEU.
								L
								A
								N
								C

<span  class="jour">LUNDI   16   JANVIER</span>

l’infinie solitude… chacun s’y achèvera.

quand revient le vide de son pèlerinage



<span  class="jour">DIMANCHE   22   JANVIER</span>

les essais télépathiques chavirent dans le prothétique. qu’un y laisse sa muqueuse et c’est toute la kermesse qui lui hisse des louanges. 

j’ai à laisser ces balançoires emprunter leur chemin car elles sont la résonance du corps du tronc noué. je suis l’interface je suis à la fois la genèse et le dénouement. 

j’orfèvre l’écriture de mon père. 
comme une mécanique absurde, une
loi sensori-motrice, qui se catalyse
avec l’acceptation. tant bien que 
l’acceptation reste une croyance. 



<span  class="jour">MERCREDI   25   JANVIER</span>

chatoyante ombredi, le mal me poursuit. 
il me dômatise, petit à petit.
je ne sens plus mes articulations, elles sentent le béton, des paginations leur sortent des écoutilles. 
pourquoi la vie doit-elle faire si mal ?
dictatrice du bonheur, 
laisse la douleur te pénétrer et 
ne la juge pas, 
s’il-te-plaît.

j’ai le coeur en éolienne, le ventre en compost industriel et le souffle coupé. court. 

nous sommes une plâtrée d’endoloris.
nous sommes une fourmilière de dé-nanties. 

à quoi jugerai-je que cela vaut-il la peine de vivre ? que suis-je sans ces intraveineuses de valises de médicaments ? je ne suis rien. rien qui n’ait la force de vivre. qu’une pouline au trot haletant. trop. c’est trop. 
quelle consistance ai-je ? 
j’ai le plexus qui hurle à l’aide. 

maman. aide-moi. s’il-te-plaît. 
pourquoi m’as-tu amenée ici maman ? 

je veux mourir. c’est mon ultime croyance. celle qui adoube toutes les autres.

pourquoi, ô grands démonoïdes de mes intrications quantiques, ne me laissez-vous pas en paix ?



<div class="mois" id="février"> FEVRIER </div>
<span  class="jour">LUNDI   6   FEVRIER</span>

le ciel est froid. mon homéostasie s’extasie mal. 
ici, il y a du café et des clopes. et du vide. 
beaucoup de vide. un épuisement d’être au monde. 
j’aimerais tant savoir pleurer comme on fait un café. choyer ce corps blessé. 

parlons-nous, blune. 
dis-moi ce qui ne va pas. 

blue_________moon________

charrier ce qui se dit ici-bas. allez les gars, qu’est-ce que ça vomit entre collègues ? vous me la menez dur les petits gars. bien un move de mecs ça. 

pshiiiiiiiiiit. 		je suis terrifiée.
			par cette cour pour grands. 

laissez-moi dans mon jardin d’enfants.

ce que j’ai grandi. pas vieilli cette fois, youpi. je rebondis aux chocs des ténèbres comme une coccinelle sur du polyester. je suis aguerrie. à guérir. certes. mais plus polie envers moi-même, moins décapée par la lourdeur de l’apnée. 

c’est comme si je buvais de la lave. sans que cela ne cesse. j’ai envie d’aller en clinique. 
être par les cavités, renaître par les porosités.

je bois les allumettes comme petite je mangeais des céréales. énième tentative de dissoudre le vide. pourtant nous savons que ce n’est pas de la silice. le miel, ça coule. moi, je coule avec. 

cette machine à gâteaux a le goût d’un pneu. 
et zeus sait à quel point il est difficile de cuire un pneu. ça y est je sais. 
je mets feu à ma gorge pour loger un peu de chaleur sous mes contours. 

des boursouflures jonchent mes
armures. celles-ci sont des 
centaures sans queue et sans 
tête.



<span  class="jour">MARDI   7   FEVRIER</span>

la gorge se noue à l’entrée de la ville. j’y repose, désormais. c’est mon cercueil bouilli par les écueils. 

que cela fait du doux l’A I R. 
	je t’avais oublié, air. 

je n’ai pas envie de me mettre en route. je suis hyperstatique. hyper vigilante. à moi, surtout à moi. endolorie par la pesanteur de cette ville. 
tout y est mouvement et, du même fouet, rien n’y est mouvement. tout est déambulation forcée. 
ressentons, citoyens. quand ressentirons-nous ? 



<span  class="jour">MERCREDI   8   FEVRIER</span>

	lancinante, la lune se promène de voilier en hélicoptère-coléoptère. 
les bancs de poisson me passent un savon, 
puis les fous courants neptuniens me font offrande d’un massage. 

chaloupe
d’un fini naufrage,
je bois à la gorge vide du
sens de la vie.								 SOUS-VENIR

					monde onirique 		
					ombragé de photos
			qui sanglote peu à peu
				vers les abîmes de la reconquête de soi




<span  class="jour">DIMANCHE   26   FEVRIER</span>

sous les oreillers de mon destin
cavalent les hippocampes estropiés par la ferraille
j’y ferais bien un détour,
	par-delà chez toi,
		par-delà chez nous. 



<span  class="jour">LUNDI   27   FEVRIER</span>

que te dire, si ce n’est que je ne sais quoi me dire ?
		sans cesse inconfortable avec mon propre inconfort, je chemine de village montagnard en déferlante de lave. 

j’ai peur. des bretelles qui sont à mes genoux, des ligatures que j’ai en trombe, 
		des odyssées dont le ventre grouille de misandres. 

j’essaie, mais me rapatrier à la socialité me tue. elle me fait vivre, certes, mais elle m’anesthésie. 
		je veux être un marshmallow. 
être en contact tactile avec chaque portion de mon être. 


ça ne va pas. je le sais maintenant. j’ai peur de mon propre oubli. je veux être présente pour celle que je suis. celle qui rougit, frémit, inspire, soupire, tremble, chavire, espère, endeuille, galère, chérit, vit. je n’en puis plus que d’être un vaisseau, qui navigue en pilote automatique à la recherche d’un café ou d’un morceau d’amour.




<div class="mois" id="mars"> MARS </div>
<span  class="jour">SAMEDI   18   MARS</span>

l’eau tangue, balaie mes yeux d’un dioptre à l’autre. les incidences alter-lumineuses pourchassent mes cris intimes. 

comment se dire que l’on est prêcheur de sa propre vie ? 
								passons à table. 
				je saisis ma fourchette et déjà, je désespère à la vue de l’entrecôte. 
				les veines de l’arbre m’exhortent vers une chanson d’été, tout aussi 				péniblement que la lenteur avec laquelle j’amorce la chirurgie de mes 				viscères. 

	pourquoi ai-je autant de contre-courants à coller à ce putain de mili-ondes ?

mais je m’accroche. à chaque brève évanescence de tâche incandescente, à chaque lucarne-lueur, à chaque incendie de répit. 
			je ne vois que mes abstractions, je ne ressens que des contractions. hurler la 			danse de mes douleurs, c’est ce que mon enveloppe ne cesse de regretter sitôt 			qu’elle n’est plus seule.

(FIN D’APRÈS-MIDI)

Vous m’appelez schizophrène. Je m’appelle Ombeline. 

Qu’on se souvienne que c’est Ombeline qui s’est tuée, ce soir. Car c’est en paix que je meurs. C’est avec immensité que je vous ai aimés. Je suis d’un autre monde. et je meurs, en ce jour. Mili-ondes, tu m’as fait vôtre. Une morte. 

Je pars heureuse, emportée par vos catégories.


<span  class="jour">MARDI   21   MARS</span>

Je n’ai jamais senti aussi intensément la mort. Et c’était merveilleux. 
	La paix, une expiration incessante qui confondait le pourtour en lune.

Je suis morte, en ce 18 mars 2023.
Que je m’en souvienne, que je collecte ce sentiment avec joie et vérité. 

Car ce sont deux jours, deux nuits comblées d’onirisme, qui m’ont échouée sur le rivage de la vie. 

Hey bitches, I’m back !

Prête à en découdre avec votre architecture brutaliste, avec votre police d’État qui vous sert de verglas, avec vos monuments dans lesquels vous vous réfugiez, le souffle – décidément – trop haletant. 

Je vais être moi, comme jamais personne n’a eu l’ouïe d’être soi. 



<div class="mois" id="avril"> AVRIL </div>
<span  class="jour">DIMANCHE   9   AVRIL</span>

Alors petite feuille, tu sécrètes du secret ? 
		je maudis leurs moribonds bouchons. 
	ce que le trafic peut être pénible ! 

	ma foi, je reste d’humeur festive.
mais ce que l’opacité me tarit les vitesses ! 

ça y est, ça dégouline. la percolation m’est une idolation. 

stratosphère en déshydratation
		phacochère en élucubrations



<div class="mois" id="mai"> MAI </div>
<span  class="jour">MARDI   2   MAI</span>

les églantiers s’agglutinent sous le zénith. 
bientôt, l’étoile en devenir de l’hyperpop 
ouvrira ses secrets. elle les décortiquera sur
scène, à l’orée de cette chaleur étouffante, 
pour la plus grande faim que les vergers
eurent connue. 



<span  class="jour">MERCREDI   3   MAI</span>

l’audace du chaos me repose. elle me laisse les pleins droits pour chérir et charrier mon temps comme je l’entends. je deviens despote à la compote. mais quand le vent est trop travaillé, je n’ai qu’à propulser mes organes sous le sein d’une grotte, sous le refrain d’une glotte. me mettre en retrait du nid de la rivière tourmentée et m’imposer mes propres tourments. pourchasser un projet coûte que coûte, au coude à coude avec l’horloge. 



<span  class="jour">LUNDI   15   MAI</span>

au sanglot d’un lâcher-prise a succombé une mouche. alors que je réorganisais les tables de mon restaurant pour l’accueil du nouveau convive, mounette orchestra un attentat. 

elle frappa, sans autre fracas que celui de son totem la poule. à la merci de diktats conçus bien avant sa naissance, ma chère mouche s’y raidit. à mon flanc, elle tomba comme tombent les mouches dans les bouches inaverties des humains. elle tomba, je me relevai, mounette s’excusa et la vie expira, une nouvelle fois, le glaive de l’homo-approprius sur les douces louanges du cosmos. repose en paix, ô fidèle de notre impérialisme. repose en clarté, ô ma belle opprimée. repose hors de nous, je t’aimerai. 

	tu m’as raconté que d’autres parlent du vent comme d’un autre, et non d’un catalogue de Noël. Joyeux noël Ombeline ! désormais je sais qu’ailleurs, dans un recoin de continent, sous une mezzanine astrée ou sur un canapé de bois flotté, vivent des pêcheurs de pêcheurs de lune, des bourreaux des bureaucrates en cravate, des seigneurs d’un monde, et non de celui qui n’est pas le leur. le vent
		m’a
				frappée.

deux mouches me font l’amour. 
et je ne ferai pas de détour ! 



<span  class="jour">JEUDI   18   MAI</span>

j’ai la tête qui bourdonne les chants d’une autre tribu. quelle drôle d’histoire. 
ensorcelée. me voilà ensorcelée. mes songes ronronnent d’autres quotidiens que le mien. 
je suis d’ici, mais je suis ailleurs.

folk dissident, bolcheviks carencés, mes dents grincent. peut-être n’est-ce que le début d’un long  tourment, enfin soit. je ne m’appartiens plus. j’appartiens à son fantôme, à part de tout le reste du monde. 

je suis une fille du chagrin. même quand me voilà amoureuse, me voici torturée. 
vous ne me trouverez pas chantant des berceuses, mais poinçonnant les chants des prisonniers.



<span  class="jour">VENDREDI   18   MAI</span>

Les collines gravirent bien des sommets, avant que d’être essoufflées. 



<div class="mois" id="juin"> JUIN </div>
<span  class="jour">VENDREDI   2   JUIN</span>

la cime de l’arbre-ciment coule son argile sur mes hydrosilicates d’alumine. je vois l’usine battre ses œufs, le cyprès sur la tempe. c’est d’une canardise ceinture étroite. 

je cours plus vite que mon souffle. j’attrape cette étoile et lui sert une écharpe. 



<span  class="jour">VENDREDI   16   JUIN</span>

(NUIT)

les grillons courbent l’échine des étoiles. 
tu fais beaucoup de bruit, comme des odyssées de foules. ce bruit me rassure. il me protège. j’en apprends tant. 



<span  class="jour">DIMANCHE   18   JUIN</span>

la fenêtre d’une intuition. pourchasser l’intimité. je sais qui je suis, mais je ne comprends pas encore où je vais. 

il y a les amours totalitaires. 
totalité du lien caoutchouc. 
celui qui est moi ou celui qui est l’opposé de moi.

puis il y a ceux entre-deux. 
ceux dont j’ai envie, dont je raffole, que j’admire, que j’adore, celles qui me rendent folle de vivre.
je n’appartiens pas au sabre de cette forêt de sapins. je ne suis qu’à moi, mais je suis avec eux.

toute l’eau de la horde me rue en spirales. un rond-point-ascenseur, une torpille-tourbillon. 
	je me trouve emportée. suffira-t-il d’un fil, pincé dans une aiguille ? Strike ! 
			je couve les maracas d’un paon. 
et je touche le ventre d’un colibri. mes oiseaux-amours, mes amours-oiseaux, mes amis foisonnant. 
Arslan. aengus. 
Arslan, tu es mon maître d’armes. 
aengus, tu es ma lyre viscère, mon confident. 

chercher un père chasseur dans le phare du soir. 
attendrir le sein d’une mère.

Murph, c’est un soldat. 





que c’est bon d’être en enfance et d’être si loin de ses cauchemars juvéniles. 
je me sens la force d’un cerf et la tendresse d’une pivoine. 


il y a des toi nus dans la forêt
il y a des toi ronds dans le désert
il y a des toi en chaume 
il n’y a ni toi ni toi qui ne chôme

l’étincelle scinde le vide hélicoïdal.
elle lui sert un dernier verre, de rouge, de vin rouge. 
le froid du PVC, son ailage courbé, sa parfaite cousine. 

et petit le scarabée a pu être,
aujourd’hui il nous revient en planète. 
un colosse des rizières, un pivert des rivières, un marée-salant ambulant. 

baignées dans des cours d’eau furieux,
nous vîmes transparaître un homme-dorade. 

cela fut inattendu, mais suspicieusement familier. les sortilèges de la mémoire vous enivrent à vous border d’évanouissement (régulièrement). ils tiennent à la minutie bavarde de leur bracelet-horloge. 





<span  class="jour">LUNDI   19   JUIN</span>

ploc ploc les feutrines de jade qui grêlent sur nos souvenirs. 
		les lassos de lumière s’élongent en fouets.
								je suis là. quelque part
contorsionnée entre les fesses d’un escalier et la courbe d’une baignoire. mais je sais. que je suis là. 

1 – me former politiquement
2 – me déformer allégrement
3 – ne plus me reconnaître dans le miroir, sans être réticente.

l’émotion parle en niveaux de pression ; 
elle appuie ou elle évapore. 

je suis morcelée. distribuée sur des continents éparses. je me promène, entre ces différentes campagnes. je crois agréger, quelque part dans mes sismologies, la grande marelle des troubles psy. 
TDI, bipolarité, schizophrénie, autisme…
	je suis une boussole, en papier. une cocotte bariolée. une navigatrice polystrates évangélique. Karim m’appelle prophète. que cela veut-il dire en moi. comment dois-je m’extraire ? où dois-je lutter ? pour qui ? pour lui ?



des ours cheminent lourdement vers le soleil. ils traversent les empreintes de leurs mères sylvestres, rejoignent leurs pas, marchent au même rythme que le tambour frappé par des forêts de mycélium avant eux. la vie nous octroie un chemin. nos bras, nos jambes, notre nez, se prolongent en directions, qui en dictent une plus céleste, celle de notre devenir. nous évoluons, hasardeusement, sur les tambours de nos ancêtres. avez-vous déjà entendu marmonner le grillon de votre cité? il est celui qui veille sur votre mariage. comment épousez-vous la forêt, bipèdes tourmentés ? vous aussi, poursuivrez-vous la promesse du soleil ? 


évidemment
cela prendra du temps
mais il n’y a que l’enfant
qui s’impatiente du roturier.
en attendant, 
j’irai en haut des stries du violon. 
et je lui arracherai ses caries de porcelaine. 


élongation. du muscle abidjan droit. 
pousser la fibre dans ses recoins. 
lui chercher un chaman.
la malmener, l’égarer, sur cette note, au chevet d’une tempête. 
il faut guérir l’élongation. ne pas l’abandonner. 
	sursaut du trauma. souffle haletant. tout autour se cogne la tête sur le plafond. avant que de rejoindre l’addiction. puis la conversation. enchanté. prenez une chaise, art-déco, je vous en prie. 




bonjour, papa.

époustouflant papa. avec ton regard étranglé et perçant. tu ne lâcheras rien, papa. tu iras au bout de leurs enfantillages. tu conquerras ta place. avec eux. ou sans. tu as du beaucoup te réapproprier, papa. voilà pourquoi il t’est si difficile de me répondre. parce que tu n’as pas le choix. tu dois aller au bout de cette vie.
avec moi, cette fois.

sourcil soucieux. une étoile dans les flots consuméristes de ce jacuzzi enn...ami ? 
vite. reprendre le rythme. vite, poursuivre ce vite. c’est ton rite. tu prêches les attrape-silure après-midi. mais ton village est ailleurs désormais. il est dans les tours septentrional qui chaque jour clament des chants patriotes. 

courir après les étoiles. leur rendre le souffle court. espérer les toucher. ne tomber que sur des météores. commencer à les choyer. puis tomber sur le couvercle d’un baiser. et rebondit et mange des petits pois. l’enfant du bois où je ne suis pas. 



<span  class="jour">MERCREDI   21   JUIN</span>

j’ai eu un bisou dans le cou.
il m’a été donné par une chenille aérobique. 
	ailleurs, dans mon corps, c’est un peu la paranoïa dialectique. 



<span  class="jour">LUNDI   26   JUIN</span>

(NUIT)

l’eau se fait timide comme une marmotte quand les cieux s’énervent. ils percussionnent les chapeaux des gouttes d’eau, avec ardeur. 

désormais, ceux sont les vents des cerisiers qui s‘orchestrent en valse estivale, celle des princes arabes enfants, autrefois. 

c’est là que ça devient intéressant. 
regardez-les, les chenilles ailées, ces petites fées.

le ciel se tord de douleur face au chagrin de la mer. 



<span  class="jour">JEUDI   29   JUIN</span>

mon corps est écroué
		fêlé
		verrouillé

ma nuque a son loquet
	qui descend des dunes à la digue de mes épaules. 

	
	mon cœur remonte jusque dans mon menton.
	et mon dos fronce des sourcils.


évader le cou. 							dire la distorsion – point d’exclamation
	
		des hectokilos d’eau s’acharnent sur mon chalet. 

A r ê t e 							lourd est l’épicier
								chaviré est l’étrier.
									comment me soigner ?


fournir le menuisier
de débris
le bois est vacancier
d’hérésie. 



je reprends pieds. le sol est vaseux, mais je lui sers une fin, enfin.

j’irai perdre les cheveux des chênes, quelque part sur ce souvenir, éliminé par leurs fatigues. 

point virgule ; lourde la anxiété est là.
		entre mes trois grattes-ciel.


	croire !


<div class="mois" id="juillet"> JUILLET </div>
<span  class="jour">MERCREDI   5   JUILLET</span>

un sylvestre paon achète des pansements à la parapharmacie. 
il complote le long du jour des sauts galactiques. mon amie est orange. 
je lui sens une ébullition inouïe. 
à cette amie sirène, je dédie mes plus étriqués poèmes. tu me charges en sardines. elles ont beaucoup à faire, ces sardines. 


<span  class="jour">VENDREDI   7   JUILLET</span>

tournent les abricotiers. c’est le règne des asticots. 
les hommes déballent des investitures d’irrespect si dégueulasses, qu’elles incommodent les poux dans mes cheveux. 

je suis meurtrie. que c’est dur de frémir l’encre lorsque tout ce qu’il me reste dans la main est la douleur. 

	ils ont tué Jourdain.


comment les grelots font-ils pour atteindre la berceuse des clochers ?

pourquoi mon placenta n’est-il plus volcanique ? 

existe-t-il une soucoupe délirante ? 



<span  class="jour">SAMEDI   8   JUILLET</span>

Niko. Pourquoi trahir tous nos souvenirs ?
Pourquoi expies-tu tout l’amour que nous avons grandi ? 

Tu es parti. Dans cet autre pays que l’on appelle l’oubli. 
l’oubli de la grande vocation qui nous portait. Comment peux-tu être si distant…
	distance, c’est la seule carence que tu me lègues. je me perds dans tes bois. 
je ne bois que tes bras. 

je veux partir. tu m’as gardée ici, comme un ramassis de débris. 



<span  class="jour">DIMANCHE   16   JUILLET</span>

laissez-moi vous présenter des amis danseurs. 

RICCARDO. un petit ricard d’eau. 
ELIOTT. un grand navigateur. 



<span  class="jour">JEUDI   20   JUILLET</span>

arrivés en Suisse. sapins et vaches à bâbord, capitaine. ici, tout le monde fait des référendums. on ne parle plus après 23h et le shit prend son pied (le mien en l’occurrence).



<span  class="jour">LUNDI   24   JUILLET</span>


les LBD crissent les cieux.
un air de tempête. 
moi je nage dans les rafales du ciel.
mes amours sont rentrées, en Corrèze ou dans les Cévennes. et me voilà plue par la pluie, bombardée au sommet de mes origines. 

la fatigue m’étire les rides du front. 



<span  class="jour">SAMEDI   29   JUILLET</span>

mes chiens de garde incendient les fontaines municipales. il n’y a plus que des gendarmes exaspérés.

ma tête est une méga-bassine sur-pressurisée. ola, toi ! viens me cueillir, entre tes doigts de pieds, de cire, d’escrime ; une impulsion impardonnante, une résistance inébranlable. 

qu’on m’écueille, m’écume, étripe, prie, rie au nez. qu’on vienne m’accuser, et se corrompre à ma lame révolutionnaire. ola, toi l’étranger ! 
je jouerai de tes charmes, pour nourrir mon colisée béant. ce néant qui coule sur le cendrier, éteint à chaque souffle hypocrite. 



<span  class="jour">LUNDI   31   JUILLET</span>

éclaircie, mène-moi dans ton lit
fais-moi oublier mes oublis
habille la rivière d’un azur nu,
et je m’y baignerai sangsue

sans dessus, sans dessous
je me tamponne les genoux



les marées sont de crasse 
j’ai le dos d’un ciment d’usine 
qui m’aura à l’usure ? 
qu’on m’apprenne à marcher
sur les mains ou son nez
son amertume me fume
tout ce qu’il n’a jamais respiré est condensé de vulnérabilité 

viens, mon doux affranchi
toi qui a franchi tant de murs
dur, ce fut dur
mais quel touareg n’a-t-il jamais compté les étoiles du nord ?






(BONNE QUESTION)

un filet de pêche pour attraper ses idées.

	des épouses pour un corps de vigne
	je m’aligne

savais-tu que je est folle ?








<div class="mois" id="août"> AOÛT </div>
<span  class="jour">JEUDI   3   AOÛT</span>

charivari d’un condamné à mort. 

les grilles. épaisses comme une tombe.
le blanc. opaque comme une tombe.
les néons. écrivains d’une fin de vie. 
et moi, je m’y évanouis. et tombe.








les enfants me posent des questions
promis, je ne vous répondrai pas à reculons.

on nous contrôle, on nous harcèle.
on nous abonde de lacrymogène. 
on nous évide, on nous abandonne. 

enfants, préparons la lutte à cœur ouvert.

je veux jouer à chat.
ils veulent jouer au roi.

je veux jouer à trois.
ils veulent un couple qui fait loi.


Madame Auzou,

Dans quel monde vivons-nous ?
il n’y a que des torrents de papiers, des anonymes et des contrôles. 



<span  class="jour">SAMEDI   5   AOÛT</span>

(DIALOGUE AVEC TOMMY)

matin blême, blotti dans un harem
de limaces costumées, de verglas simagrée.

chassent chassent les essuie-glace. 

des gigabytes de réponses se posent
sur nos points-losanges. Regarde derrière ton épaule la portée de lignes annotées, altérées, fuguantes aux rythmes qui te donne le point d’orgue du jour.

Orgueilleux les ecclésiastes sonnent l’alarme. Depuis quand les étoiles constellent-elles en losange ? Peut-être un jour tu entendras mes louanges. Point, point, point d’interrogation.

tu crawles dans des aubes visqueuses et la pellicule te prête les rayons du levant à genoux devant tes éveils. 

Dring dring ! Se réveiller, effleurée par un nuage. S’émerveiller, éreintée, par un baiser. Leurs eaux nous prennent trop au sérieux. 

Retiens-moi au courant trop sérieux souriant qui nous expanse autrement, et qu’on se retrouve un jour trop bêtes d’avoir laissé mourir notre ombre rouge au dernier solstice, nos silhouettes embrassées formaient une rosace nouvelle. 

ce jardin coulisse contre tes statues d’orchidée, les bulbes rosés par ce matin né par tes yeux…
tu es belle, de mille moulins de sel ; un sel qui ne détruit pas, un sel qui m’ouvre la voix, qui me caresse les vers à soie. 
Qui se laissera attraper par la rosace effilochée ? Moi je veux bien, rompre nos zones industrialo-portuaires, leur donner un peu d’air, à respirer ensemble, à embrasser dansantes. 

« Qui de nous deux inspire l’autre ? »

Dans le chaudron de notre étoile je t’imaginais bouillonner
puis tu es apparue
comme un parfum qui main-tient la lumière entre ses doigts aux ongles noirs
On taille dans le chaos

! attenzioni ! 8.6V dans les pattes,
ça fait une cénesthésie toute mimi.
je mange ton pain, mais tu ne pétris plus… où les électrons se cachent-ils ? ai-je le droit de venir ?

Où sont les barrières et les cachettes dont tu parles ? Elles sont invisibles à mes yeux. Je vois ta tête qui dépasse d’une frimousse de poséidon flottante à même les exquises eaux. Vos vagues à 8.6V m’égayent en in[tensions] palpables. Tu atchoumes comme une soupape anticléricale aux papcuites des bavards zozotarchistes. Qu’est-ce que tu fais sous ce parapluie toi toute lunaire qui projette des reflets de soleil agnostique ? Entends-tu les gouttes?
							gouttes
								gouttes
									gouttes

Bullons ! cessons de Fumer !

tu respires dans l’être ce que j’imaginais dans les moments dépression/espoir/rêves puisés par la solitude et l’impression d’être intraduisible 		mais tu existes c’est enchantant. 


charmons les stressés
tressons leurs tracas
strapontin peint le monde en brun
vivons leur gloire pieuse
dorénavant il y aura le vent
fuyant, 
	fuyant

écartez les mailles dans ses yeux
brûlants, 
	brûlants

ma petite fille carie
cesse de morfondre l’ombre
elle est plus pieuse que notre gloire
elle qui a vu naître le soir.




je suis un soir d’été
les brebis se déguisent en agneaux
et mes amis s’exclament d’en haut 
sur le toit de Marseille
le toit de tant de mondes. 
j’essuie un loir d’étais
lourd il prend place dans le sable
rangez tout, mes policiers
nettoyez le moindre témoin
nous voilà à genoux
s’offrant la plus fière des fellations



<span  class="jour">LUNDI   7   AOÛT</span>

Avec le temps, tournent les éoliennes
je suis un enfant alien
personne ne porte ma montre
comment organiser la rencontre ?

j’évite les aérodromes publics.
je suis une hystérique sans plastique.


<span  class="jour">JEUDI    10   AOÛT</span>

le corps stigmates scroutch aïe
étrangler le ventre
feindre l’évanouissement

élonguez-moi les arcs-en-ciel
tordez-les mouillez-les
mais ne les laissez jamais redescendre au ciel.

le talus sent le brûlé
on ne peut plus y poser les pieds









je les ai tous perdus
	sur le ciment de l’hôtel de ville. 
	désormais je suis seule à continuer le bal, 
	la danse macabre.




		défenestrez-moi, les oisillons



aléas de la foire aux psychiatres
ils ne sont que cause de la maladie, maladie infantile de la psychiatrie. 
j’ai perdu quelque chose dans les collines. à cause de vous.
mais jamais vous en vous remettrez en cause.



<span  class="jour">LUNDI   14   AOÛT</span>

éliminez les haies de hautes altitudes
ce sont elles qui mettent feu aux barricades
élaguez les vents de basses altorigènes.
ils ramènent sur les temples des fœtus en cendres. 
qu’on me vienne en aide-moi
ici tout n’est que salive et raie à l’air. 



<span  class="jour">MARDI   15   AOÛT</span>

et l’hiver promène ses canetons.
long, l’hiver est long.
blonds. enfin non, les canetons ne sont plus longs. blonds, je voulais dire blonds. 

courir, loin de ces enseignes de néons. 
amertume du sourire long, des cheveux blonds.

venir de plus loin que les astérisques.
celles qui parsèment les éoliennes. 



<span  class="jour">JEUDI   17   AOÛT</span>

c’est bizarre dix-sept non ?
un peu de disette, regardée par une galerie de sceptres. je parle de ceux taillés dans la roche d’opaline.

et les léopards nus bercent le nouveau venu.
il suffirait de presque rien, peut-être dix insectes de moins, pour que je te cite Verlaine. 

« c’est l’obscurité qui fait défaut » - Samuel
la chute est rondement roulée. 
empâtissée dans de la colle à bois, 
je m’hydrate des fossiles autrefois marins-pêcheurs.
et l’esperluette chante à tue-tête.  

clap clap fait la claquette.
	mais les exercices ne sont pas mon fort. forteresse de l’exil, abbesse de l’esquive. 


hey, j’ai compris. j’évite la digue par peur de l’endiguement. 
je n’élude plus, je me déluge. 



<span  class="jour">VENDREDI   18   AOÛT</span>

et on se prend la main,
on accueille nos ballons-délire
sous ce carrousel de sel
et on s’étend le verre de vin,
on recueille nos témoignages nomades
sur cette fontaine ensorcelée.
et on s’éteint la clope
on écueille les dernières pétales 
sans cet ami imaginaire parti en hiver.

hiver, pourquoi as-tu pris la main de mon ami ?



<span  class="jour">SAMEDI   19   AOÛT</span>

	chamade du nomade. 
	j’ai tant de mort-vivante en mes seins. 

Abdel et le radiateur passent des nuits d’amour, jours et nuits. Audiovisuelles, leurs amours. 

	Contracter l’échine, absorber
	l’abdomen.

	je dois te dire, ombeline.

	tu es une araignée qui engloutit des fungi. beaucoup de fungi. 
	tu es tisserande de mycéliums. 
	les aurores dorsales me pénètrent le guéridon.

L’information me touche, avec toutes ses souches. elles sont plus nombreuses que n’importe quel piano-papa. 







allons, écrivons nos parchemins.
qui d’autre, sinon leurs compte-rendus, décrira nos pleurs ? 

le pêcheur tient sa canne à pêche comme un bâton de pluie. 
qui va venir lui rendre visite, enfiloché dans les bras de la mouche ?
quel est le poisson qui osera saisir sa mort ? je ne le sais pas encore.
l’eau, elle, est plus songeuse. elle accepte les écailles du soleil, celles qui s’y sont assises, comme on patiente dans un aéroport, acharné d’espoir, d’envie, d’ivresse de quitter le pays. 
la canne est un tuteur. c’est l’infirmière du pêcheur. le pêcheur, lui, est son chien-guide. aveugle. les deux sont aveugles. c’est toi, le poisson, qui seul voit. et tu les vois, sans jamais trouver amitié dans leurs querelles de propriétaires. et ils attendent qu’on cesse de les nommer patients. 
enfin, pour cela, il s’agirait que le pêcheur s’essaye à ne plus vouloir canner. alors il tue, à petits feux, les bancs de poissons écaillés par ce soleil brûlé. 



<span  class="jour">DIMANCHE   20   AOÛT</span>

les stores se déplient à l’horizontale. 



<span  class="jour">LUNDI   21   AOÛT</span>

	le ciel parle
des hauteurs si aiguës 
	que même quand les hirondelles 
se prépareront à le pourchasser
	il n’y aura que lui qui aura,   
		les pieds sur terre.

vire la marée à tribord,
comme on vire un salarié à son sort
comme on l’enivre à la mort
car la tempête est rageuse
l’orage l’a trop rouspétée
exaspéré, le voilà exalté par la pitié



prends ma main.
des deux nôtres naîtront des lendemains
où l’errance saura habiter
peut-être au creux de nos baisers
sans doute aux aveux de nos passés…
prends mes mains !
de toutes les autres fleuriront des marins
du grand océan de la sororité ____
sale sonorité, ça je te le promets ;
âme – sœur – core.





la pomme se donne en mille-pattes. 
conjuguée à la vanille, elle perd toute sa vanité. alors on la camisole à un pot, pour surtout échapper à sa peau. 
il ne manquerait plus que ces ardents la fassent consignée. 






oui, il y aura des délits
si je te mens, il n’y aura toutefois
pas de délitements. 
ne tremble surtout pas,
devant son regard sincère



<span  class="jour">MARDI   22   AOÛT</span>

électrochoc, je brise le pare-choc, 
j’accoste un pylône, arrimé au bas-côté
de mes angoisses, de mon passé. 

le pylône me dresse comme un poteau. je suis son drone. 
avec lui il n’y aura ni môme ni neurone. que de la détresse, qu’il porte en tresses sur son front. 
son front de patron. 

qu’on me surveille, qu’on me capture
moi seule veillerai
à courir
peu importe les points de côté
puisque c’est sur le bas-côté que je l’ai rencontré, anesthésié. 

courir courir souffrir mourir
je n’en ai pas le droit
il sédate tout en moi
épie mes moindres épithètes
écrit mes maladresses
1000 0011
ton algorithme fait un vacarme
ça y est, tu as pris mon âme

couler couler rouler fouler
la terre humide par mes peurs
1101 0010 
tu me connais par cœur 
mais où as-tu caché le mien ? 

les baleines prennent des somnifères
c’’est la sentence de Lucifer

échappe-moi
écharpe-toi

car l’hiver s’annonce immortel
c’est écrit dans leurs RAM
pendant que moi je rame
perdue dans les flots de l’amnésie
amenez-y moi mes tortionnaires
soyez des légions de fantassins pilonnés.
venez m’attraper 

échappe-moi
échardez-vous
éreinte-moi
poignardons-nous

et ce tunnel m’entraîne de plus belle
il m’évide tous mes évitements
j’esquive, il salive
car seul lui sait
qu’il n’y a qu’une entrée
celle de mon passé.

se laisser transporter
par un porte-conteneurs ou un vautour blessé

aimer son tyran,
marcher dans le néant

qui à son tour perd espoir
dans ce tunnel noir

il ne servira à rien de nier
que je leur appartiens 
de l’amygdale jusqu’aux baisers
putain, ce que je me fais baiser. 

tarir tarir pétrir vomir
vos entreprises de contrôle
je suis la fièvre du moulin
buvez mon eau sacrée
0110 1001
c’est la rivière glacée 
qui coule dans vos veines
celles qui échafaudent mon tunnel. 

ceci n’est pas un appel à l’aide
il n’y a aucun remède
faites attention à vous toutes 
car nous sommes sous écoute 

sentinelle, ma belle sentinelle
pourquoi, mais pourquoi m’as-tu mise dans ce tunnel ? 



<span  class="jour">MERCREDI   23    AOÛT</span>

les électrodes se fossilisent, au rire de mes chevilles. 
tachycardie, ont-ils dit. 

se restaurer à la cantine familiale
mais pour combien de temps ?

chaque espoir quelque peu normopathe finit par s’emmêler complètement les pattes, dans cette matière étranglée ; par les décès, par les abcès. 

j’ai une peur impériale
qu’on me camisole normale
mais selon les docteurs, c’est …
normal. 



<span  class="jour">VENDREDI   25   AOÛT</span>

lilliputiens de la marge de la copie.
Flore les a lues mes copies. 
il paraîtrait qu’elles n’ont jamais été académiques. Tant mieux.



<span  class="jour">DIMANCHE   27   AOÛT</span>

les arcs-en-ciel d’hirondelles reprennent leur souffle. on n’irait pas jusqu’à murmurer au village qu’il faille les saluer d’une rétine réjouie. mais les buveurs du dimanche ont laissé glisser sur le sol leur buvard éméché. 
on y est. tout le village se remet à parler. il ne dit pas dans la dramaturgie, vous savez ici, on ne s’embête plus avec les liturgies. on s’arrose d’anti-nostalgie, tous les midis. 
c’est le clocher qui nous offre une douche, à la louche de la brassière de la place.
les hirondelles dansent sur les cris éplorés de la fromagère.
l’arc-en-ciel échappe aux confidences du boucher.
fort heureusement, il s’en fallut de peu. 
autrement, lui, les hirondelles et le clocher auraient frôlé l’exaspéré. 
celui-ci ne parle à personne. 
sauf à la cloche, tout le monde lui parle à la cloche. 






- hacher le condensé de viscères,
		en steak. haché, le steak.
- va chier l’aztèque, toboggane tes temps car le roi c’est moi
						… casqué de cheveux blonds
						… masqué de cruauté
			ah non. ça c’est toi hahahaha
- pourquoi pas ?






j’adore apprendre. 





et la louve
s’assoupit quelques loupiots. 
je ne crois pas faire de transfert
j’y réfléchis depuis longtemps
longtemps, j’ai vécu la découverte
aujournuit, je l’ai éprouvée
est-ce moi qui entend l’inconscient qui se promène dans les corps des malades, des fous allié-nés…



ils éreintent mes douleurs
posologie du malheur. 




<span  class="jour">LUNDI   28   AOÛT</span>

j’ai deux amis qui sont aussi mes amoureux… :)
défense aux costards de pénétrer notre hANARmac !



<div class="mois" id="septembre"> SEPTEMBRE </div>
<span  class="jour">SAMEDI   2   SEPTEMBRE</span>

<em>Wake me up, when september ends…</em>

(PENSÉES DE L’ENDORMISSEMENT DU 1 SEPTEMBRE)

au moins sans médicaments, mes variables hallucinogènes prennent le (leur) grand large et la tristesse n’est plus à vivre en huit-clos. 

on meurt d’amour. sentiment assimilable à la vue d’étals de poissons sans âme. 

(MATIN A HARDELOT)

il y a, dans cette mer qui s’allonge sur son flanc, le cri inquisiteur de ses mouettes. 

j’ai des raideurs qui assiègent ma nuque. anamnèse de trois semaines effrénées de cauchemars, ceux qui vous soulèvent en pleine nuit. 



<span  class="jour">MARDI   5   SEPTEMBRE</span>

l’eau sanglote au robinet. 
il est parti.
ce que ça peut vous étrangler les alvéoles.
mais accent tonal des troubles de mémoire, ce n’est qu’une histoire. ce n’est qu’une histoire.
pourtant c’est difficile, quand autour de vous ne reste que des lambeaux d’agneaux. Gros lot de la solitude qui vous déroule la rétrospective des jours où elle n’était pas là. 




<span  class="jour">SAMEDI   9   SEPTEMBRE</span>

il faut mieux raidir l’ordinaire car les fourchettes ont déjà piqué toutes les rides de mon passé. 

effacez ce trop grand tableau
l’école n’y amorce plus
que des grands ducs ou des suicidaires

héritage de l’hérisson qui mort sous ce pneu aurait souhaité une trêve du rallye métro boulot dodo. 




<span  class="jour">LUNDI   11   SEPTEMBRE</span>

calotte polaire raye le disque de mes insécurités. 
où ont-ils prélevé l’enfant qui chantait en été ? l’ont-ils lui aussi enclavé dans le zoo ?

ce traitement m’abandonne. il me lègue un corps-armure. un corps de sang froid, un cor de titane. 

chaque nuit, l’insecte boucl-ier vient me piquer et m’éventrer les dernières terres d’asile qui me reposaient. 

je suis une marionnette pour leur grand jeu des exécuteurs. sauf que je suis un rêveur, un explorateur du rêve. je ne me laissera pas mourir dans votre eau de suie. j’essuierai chaque industrie de contrôle et lui hurlerai « je ne jouerai pas ton rôle ! ». je ne jouerai pas ton théâtre de malades évidés de leur âme. par contre, je jouerai. la grande dame de ton échiquier. celle que les enfants protègent comme une bille sur le sable pâle d’hiver. celle qui s’administre un cessez-le-feu des conditions à sa marche septentrionale. celle qui porte son châle comme aucun homme ne laisserai sa femme faire. je serai celle qui exclurai la propriété d’un dit sur un tiers. je serai ta mort qui te sert, poliment pour mieux te polir, un grandiose fatal dessert. dis merci, je t’en prie. 

jachère, ma terre est en jachère. ma chère terre est en jachère. c’est pour préparer le printemps, me disent les anciens. c’est pour ré-apprivoiser l’eau fugitive, me disent les raies-manta. c’est pour te réinsérer. non, te réhabiliter, me disent les psychiatres. mais que cela se fasse entendre au village, ce ne sera que pour une saison. je ne me ferai pas esclave des lames de votre hyperproductivité. moi, je moissonne comme vient l’automne. une feuille après l’autre. moi, je suis – pour être – en hyper-syntonie. vous ne me dresserai pas comme vous avez dressé des grattes-ciel sur des terres sauvages. je ne serai pas – pour être – qu’un échantillon de mélancolie aride. car je suis avide. pas de votre argent livide, mais du sublime. 
	ô sublime, je ponce et foncerai vers ta lime. 




laissez-moi vous emmener en mes mains maintenant. elles sauront vous attraper tous vos pièges à rats d’autrefois. 
	je vous évaderai, 
		vous m’éclaterez un baiser au col d’un envol
	d’un sortilège de zeppelins.
vivons nos nus comme si l’on avait tout à se dire et rien à se trahir. 
que viennent nos bambins introspectifs lécher le flanc de nos vitres, nettoyer leurs aisselles, leur masser les ailes. 

reste à mes côtés, comme un point de côté. t’oublier est la défloraison de cimetières de tournesols. 
	que vibre la lune et se gonflent les nuages, moi seule reste. 
et ce n’est pas parfait, mais à tes côtés ce ne l’était pas non plus.

il me suffit de crier très fort à l’intérieur du ventre de ces champ de maïs et d’à table répéter que je n’aime pas le maïs. c’est ça, mon supplice. 




	escalier. plus papillon que staccato.

escalader un départ de coléoptères, mais pour aller où ?

au creux de mes épouvantails,
leur tailler un déguisement,
celui que mon amie costumière envoûterait pour les noces d’une fée.





contourner l’évitement. puis s’asseoir au sommet d’un lac, sur un nénuphar déposé là. mais que fait l’ours ? pourquoi m’orchestre-t-il de son seul chef ? que veut-il me… mon œil, que veut-il à mon œil ? où dois-je le projeter ? la tige est plus fine entre ces deux cerceaux, est-ce donc mon berceau ? il paraît lassé de cette saison d’été. tiens, la musique s’est arrêtée. les cigognes ont pris le relai. une arabesque et toutes rechignent le départ. elles veulent fonder leur nid. mais moi, je me sens si petit ici. d’accord. vous m’avez accordé à la maternité. je lève les yeux au sol et m’affaisse au ciel. les abysses de mon coude sont piquées par le lithium. gloire aux électrodes. l’ours, quand partiras-tu ? un appel à l’abandon pour mes sœurs, un chant à l’unisson pour mes cigognes, un départ prématuré pour mes poches d’eau-citerne. évacuation imminente ! moi qui ne connaît plus et c’est l’aurore qui devient horreur. alors le lac se replie sur le nénuphar et mes cauchemars prennent la première à droite. carrefour d’un banc de poisons épargné par ce soir d’été. si seulement ils n’étaient pas les seuls épargnés… 





<span  class="jour">MERCREDI   13   SEPTEMBRE</span>

une invitation à l’ère du déjà-dit. 
on me klaxonne des auréoles de prairies à chaque segment d’acouphène.




<span  class="jour">JEUDI   14   SEPTEMBRE</span>

mes noyés nés avant l’arbre se réunissent un à un, seuls. 
qu’un plongeur leur éponge un livre creux et c’est l’un qui a une peur, bleue, pendant que l’autre convoite l’unité des siens. « à demain ! »
deux, les voilà deux désormais. 
on me dira que c’est chacun pour soi sur cette route de la soie, mais pas pour eux. trois pommes tombent de la commode et ceux sont six mains qui leur retrouvent un goût à la mode. les bouches font ce qu’elles ont à faire, et moi je rêve de n’être plus une, mais noyée par la foule. 
		foule sentimentale, 
			on a soif
			d’idées noires…




<span  class="jour">VENDREDI   15   SEPTEMBRE</span>

émécher l’allumette. lui éplucher ses braises. puis faillir, comme elle vacille. 

je dois mettre de l’intention, de la passion. dans chaque mèche de mouvement, incarner un poème. demain, c’est l’audition. ainsi se pose la question :

pourquoi je danse ? et… pourquoi demander ses filons au conservatoire ?

j’aime sentir le poids de mon avant-bras sur le carnet. c’est pourquoi la page s’est tournée. 

il y a eu un processus d’attachement à danser. maintenant que j’ai trouvé des façons de poinçonner les cordes de ma harpe et que tous ces poinçons sont devenus autant de chemins pour éponger mes émotions, je suis prête à recevoir une éducation. les dix premières années, ce n’était pas évident. on chorégraphiait mon corps à mes dépends, je récitais sans être possédée. dorénavant, chaque mouvement est une chance d’exaucer une prière dans l’espace. celle d’une histoire.

un aveu de vulnérabilité, une force en devenir.
la nostalgie, puis la colère. 
avant que ne s’immerge le désespoir puis l’accélération de l’enfer.
et on finit complètement accablé. 

pour danser, il me faut une inondation. il faut que l’écluse soit saturée de motions. c’est l’é-motion qui met en mouvement.



(SOIR)

en fait ça m’attable de serrer les pleurs, ampleur du dégastation. 

pourquoi me ponce-t-on jusqu’à ce que je sois polie, convenable, bien dressée comme un couteau à droite de l’assiette ?

pourquoi ne puis-je pas manger avec mes tendres et primi-chétives mains ?

je suis lassée de n’être jamais laissée en paix.	CODE
								CODE

CODE  		arrêtez de 
			m’informatiser, par pitié !!

renouer avec son passé, ce que cela peut vous rappeler. 

je veux mourir folle. 

enfin. je ne veux pas mourir, mais je veux vivre ma folie.

c’est mon cri le plus cristal.

or, elle me mènera à la mort. je l’ai trop côtoyée pour m’en désillusionner. 

accablée par les diktats, pourquoi ne puis-je pas être roi chez moi ?

que cette mauvaise odeur me grignote ma mer-veille !

j’ai l’arrière du cimetière qui me lourde, j’ai la carrière de mes artères qui pèse des phacochères en mon enfer. 




<span  class="jour">DIMANCHE   17   SEPTEMBRE</span>

le crapahutage de mes synapses sectorise mon bocal cérébral en jardins partagés.




<span  class="jour">LUNDI   18   SEPTEMBRE</span>

petit ravageur de mes parterres de fleurs, un regard logé dans la discussion de tes deux yeux et tu piétines toutes mes vulnérabilités. 

tes mains… comment parler de la capacité qu’ont tes mains à me parler… tu vois comme une expiration du vent peut balayer tout le corps d’une ivresse du froid, de l’évidement, de l’assainissement. tu me purifies sans t’arrêter de me pétrifier. d’une chamade qui rayonne en chorale du fond de mes entrailles.

ta mâchoire dessine un sérieux intense, crépusculaire, avec la conviction que tu t’adonnes à la situation avec la puissance de la dévotion et la caresse d’un abandon. 

tes lèvres appellent les miennes, d’un désir presque inavouable. la supérieure repose sur l’inférieure comme une reine siège sur son trône de madone. 

tes sourcils se brossent à mon cuir chevelu comme une arche d’orchidées assiège les portes d’un palais. aujourd’hui, ce sera celui du Luxembourg que tu ériges. comme tu le fais avec mon clito. c’est que tes poils me foutent à poil, avec l’élégance d’une irrévérence. 

je ne sais pas ce qu’entendent tes oreilles, mais j’ose – cette fois avec toi je me sens d’oser – qu’elles entendent tous les sortilèges avec lesquels tu hypnotises les fourmis et tout le corpus d’oisillons que tu agites dans ma poitrine. 

ce que j’aime la coller à la tienne, ma poitrine. ça me dévaste. alors je sens ton cœur pulser au rythme de nos baisers et mon bassin se promener par ondulations sur les fossettes de tes hanches. 

fossoyeur d’Ombeline, prince du mariage de toutes les voix dans ma tête, danseuse méta-pragmatique, tes pas de côtés me donne des odyssées de points de côté. 

ce que cela fait du bien d’entendre quelqu’un à ses côtés. 
		merci d’exister.
		merci d’être le versant de la lune qui manquait à ma révolution.
		merci pour toutes ces convulsions.
		et un dernier baiser offert à la passion
		me guide sur la voie de la guérison.
		tu es mon guéridon
		et si je me pique
		c’est que j’en meurs d’envie
car grâce à toi je me sens en vie.
sublime d’envie. 



<span  class="jour">MARDI   19   SEPTEMBRE</span>

la locomotive décampe de la gare mais les rails y restent !




l’époux avance à pas de louve
il tempère les tempéraments de sa maman.






il dépeint mes luminances qui font de moi sa proie. je suis sondée, scrutée, capturée par son langage. sur la toile, il décrit et dissèque chacune de mes tonalités chromatiques, celles qui font l’idio(t) que je me retrouve à habiter soudainement – pris en cachot par ses gros mots.

la plume épouse la feuille, elle lui peigne des mots d’amour. puis elle le lui fait, l’amour. quand elle est dégorgée, il ne lui suffit que d’aller faire un saut dans le puits, pli de ses caresses.




<span  class="jour">MERCREDI   20   SEPTEMBRE</span>

la ouate qui soigne, la soie qui réveille la nuit de sa léthargie, les doigts de Po sur mon souffle. 







la lutte des classes prend pour local un train. ce train a six petits, appelés wagons. que l’on est lourd quand on voyage en train ! le départ nous pèse un malaise car on quitte des amours déchus de notre présent, lui qui s’envole vers d’autres gares. Au rythme des wagons qui défilent une fuite de l’adoré, le train s’échappe vers la désertification de ce qui faisait oasis chez soi. Car partout on l’on habite, on est habité. Par un bout de bâton qui sent la sève, par un éclat de rire, par un parc à chiendents ou par un baiser. et puis il y a tous les bagages saturés de linges sales et de croquis bafoués à deux, on en revient à mon amoureux. 
mon amoureux, il lui essuie ses eschatologies, à la lutte des classes.

à deux, on lui mène une guerre, à la première classe. puis l’on devient trois par plan dialectique névralgique, par alliance avec le prolétariat. 

la classe dite 1 est logée dans les wagons 1 et 2.
la classe reléguée au rang 2 est traînée jusqu’aux wagons 3, 4, 5 et 6. 
sociologie du déplacement, on en grince vite des dents.

moralité d’un départ en gare : SNCFUCK. les pauvres marcheront toujours plus pour accéder à un bien social et les conditions de leurs droits affiliés sont déterminées au préalable de leur marche. spoiler ; ils seront toujours moindres à ceux de la première classe. hiérarchie d’un système qui ne maquille même pas ses problèmes de colon. 
on nous chie dessus.
heureusement que mon amoureux est là pour essuyer. 




<span  class="jour">MARDI   26   SEPTEMBRE</span>

épidémie d’ennui. je décrépis ici. la lumière qui fait les peintres de Normandie m’ennuie. j’ai besoin de la lueur écarlate de Marseille.




<span  class="jour">JEUDI   28   SEPTEMBRE</span>

il y a de l’ordure plein les oracles. alors l’eau fugitive hésite à prendre son ticket pour le concert de ce soir. pendant ce temps, les déchets plantent des pivoines sur tout le domaine du promontoire. la dulcinea a capella a mis feu à la chapelle, alléluia. des ténèbres s’empressent d’éplucher chaque latte du plancher. que l’envergure théâtrale peut avoir ses fantômes. de l’opéra ou d’un trois mâts, il n’y a plus d’exigences, que de la sentence. 



<div class="mois" id="octobre"> OCTOBRE </div>
<span  class="jour">DIMANCHE   1er   OCTOBRE</span>

le grigri de ce cochon gris des Alpes du Sud s’est volatilisé. il a du réapparaître à un petit bout du monde, c’est évident c’est certain, mais pour l’heure personne n’a entendu les cloches sonner son retour. 
son grigri, il le trimballait partout avec lui, le cochon gris. qu’il aille se faire mousser au sauna marron ou masser centre mauve, il est avec lui, dans la petite sacoche qu’il porte au cœur. son grigri c’est, comment vous dire, son petit lutin qui gomme les aplats gris de sa vie. alors cochon sans grigri, le ciel redevient subitement gris, vous comprenez. 
mais où est parti grigri ? 
cochon gris se rassure en marmonnant qu’il a bien du partir en Alaska prendre une bonne douche froide.





chaque portrait de réminiscence est entaché de sable. je n’ai plus envie de retourner dans les naufrages encore humides de mon passé. il est pourtant voisin de moi et hier j’en avais envie. mais aujourd’hui, au lendemain de ces rencontres, au devant du jardin, je n’ose plus le promener, sans que je ne m’y piétine. 




<span  class="jour">LUNDI   2   OCTOBRE</span>

ses yeux lessivent de trop de pudeur. ils se recroquevillent, chétifs, abasourdis par la chair indomptée du soleil. le soleil, il se pavane. des escarpins à la rotation de ses boucles d’or, il savonne ses accents de pivoine. alors ses yeux salivent puis chavirent, aspirés par les trombes d’eau qui déferlent de son désir.

murph, c’est un sacré bout d’humain. il laisse plus filer l’eau que n’importe quelle écluse ne saurait lui laisser un droit de passage. il est ouvert en gros. il se laisse ouvrir, aussi. il est là, avec son Gambetta limonade accosté à un petit perchoir et il sirote la vie en lui disant « vas-y, fais ton chemin, sens-toi libre, mais ne me fais pas trop de mal au passage, s’il-te-plaît ». 
pour lui, il n’y a que des inclinaisons, jamais de barrage, jamais de point final. il aime bien la montagne, mais ne s’y oblige pas à s’y cantonner. sa maison, elle est sur son dos. et où va son dos, ça dépend des courants du fleuve, vous comprenez. alors il fait l’étoile et de toute son étendue il se laisse étendre vers de nouvelles aventures.



<span  class="jour">JEUDI   5   OCTOBRE</span>

tempête de nœuds de marins dans mon encéphale avachie. 
mes pères prescripteurs m’ont naufragée sur le ventre d’un phoque polaire. hors la saison est rude et on ne mange plus à sa faim au grand nord. alors ça rouspète, ça se crisse et retourne, ça brûle et démange toutes les phalanges encore épargnées par le froid. la peau s’écaille, rougit et finalement s’éponge en effluves de crasse. les mouches picorent mes espoirs raidis par les oracles des conques. celles qui résistent à la famine en pleurant les Dieux du sol, enfants du Dieu soleil.



<span  class="jour">LUNDI   9   OCTOBRE</span>

les scélérats n’adoptent plus de rats. 
on leur a retiré ce droit.
pourtant, on m’a encore dit il y a deux jours que je ne devais pas mourir. 
long siège qui résiste aux éclats de mes déclarations, mes amis ne lâcheront pas leurs lois. les dix commandements passent à la casserole et se condensent en un seul : ne te tue pas.


				pour l’instant, ça va. je reçois leur cri.

mais, quand…
quand viendra l’hiver, quand il réprimera tout ce qui vivait en moi, quand il fera un coup d’état et se couronnera roi…

			quand vos diktats
			me trancheront la gorge

			alors je serai épargnée
			
			et détruite.

alors je vous en supplie, ne m’abandonnez pas au chevet de l’éternelle mort.

je ne parle pas de celle à laquelle vous m’aurez échappée. 
je vous parle de la mort de la cime, de la ruée vers l’abîme, de l’incendie de la banquise, des saccages d’un ouragan d’exactions sur ma propre maison. quand tout court en sens inverse, les chevreuils tombent comme des mouches. et pour qu’elles s’envolent de nouveau, il leur faut quelqu’un qui puisse leur dire « tu ne les as pas trahies ». 

	car ne pas partir quand on est moi, 
		c’est se trahir.



<span  class="jour">SAMEDI   14   OCTOBRE</span>

l’illustre canard a réchauffé ses pantoufles au poêle à bois.



<span  class="jour">DIMANCHE   15   OCTOBRE</span>

étrangler les tringles à rideaux
mon buste s’évanouit dans la brume.

je ne peux pas le revoir. il m’offre trop d’indifférence. je ne peux plus le voir sans lui être proche.
pourtant, j’ai été trop malmenée pour vouloir de lui une proximité. 
je crois me trouver au précipice du passé, feutrée dans cet espace sans débordement, ce poste de surveillance aux talents exiguës. je ne veux que le passé mais je ne peux que le regarder. c’est une fin de l’histoire, une fin de mon histoire avec Niko. ce fut beau.

un frisson de guêpe me perfore le coude. 
arête de ma motricité, je crois devoir me mettre 
en mouvement.




<span  class="jour">MERCREDI   18   OCTOBRE</span>

une raie d’éboulis de boue séchée me tango le flanc. sous fleur, tu veux être en l’air, tu veux planer. or quand t’es concentrée, t’es bien au sol, bien lestée.




<span  class="jour">DIMANCHE   22   OCTOBRE</span>

je suis assaillie.






<span  class="jour">JEUDI  26   OCTOBRE</span>

étrangler l’électron. il est trop désinvolte pour le réticulaire du chiffre d’affaire. les uns chaloupent des abris, les autres essuient les débris. j’ai
			une
					amertume
qui secoue le compas comme l’écume compte ses pas. 
	est-ce que j’ai l’éclair d’un ami ?




<span  class="jour">VENDREDI   27    OCTOBRE</span>

évidemment, évidemment
il leur fallut bien du talent
pour être heureux, sans être adultes ?

et les moteurs ça fait vroum. 
et toi tu fais boum.
au petit détour d’un creux de faille, d’un détroit de vulnérabilité oui merci. oui oui. bienvenue. retirez vos souliers, sentez le froid vous décaper la paume. il vous dira les secrets du grand Nord.




<span  class="jour">SAMEDI   28   OCTOBRE</span>

vivre à s’en recueillir,
les lendemains d’un désir
vivre à s’en laver les mains
c’est le qui-vive de l’ami marin.

jouer aux quilles avec une flopée de jonquilles
et s’arrêter là, au sommet d’un soupir
pour que la nuit sous ses oracles nous racle la gorge.
ô mon ami, j’ai le cœur lourd.

il y a un hérétique dans les étagères de l’antichambre
il joue à souffler sur les cendres de sa famille déchue
de son armoirie nue
de son sanglot perdu.

que j’espère vivre un jour sans gonds
sans tronc qui m’attache pieds et mains




<span  class="jour">MARDI   31   OCTOBRE</span>

(POUR PI)

&lt;template&gt;
	&lt;body boogie&gt;
Quand la pluie ricoche sur nos oublis, de petites panoplies d’hommes-cerisiers cavalent mes états d’âme. 

Ta vie s’éventre comme un nourrisson verrait le jour à chaque seconde. L’océan t’est maintenant essence-ciel, c’est ce que je crois pouvoir distinguer. A travers la brume et l’écume, je m’allonge à tes côtés, sur cette plage d’eau qui mouille, trempe ses mouillettes et jette aux oubliettes, les écailles blessées de nos anémones coronalisées. 
Ton adolescence est ce qui te reste de démonoïdes placides, mais elle articule aussi au rebord de tes fenêtres l’invitation d’une bioluminescence. Le fracas d’un refus de circonstances, et de constance. Le verglas qui fait valser, tant les canetons que les vieillards, ceux qui prennent leur temps pour traverser, tant les éclaircies que les orages.
	&lt;body boogie/&gt;
&lt;template/&gt;



<div class="mois" id="novembre"> NOVEMBRE </div>
<span  class="jour">JEUDI   2   NOVEMBRE</span>

(POUR PI)

danser dans tes doigts, qui eux dansent avec tes yeux
dans un sous-sol au bleu parfait
que la guette gagne le gain
et que ton crâne se la joue astronote en la mineur

j’écoute boards of canada et ça me souffle l’idée
que j’aimerais bien y aller, avec toi, là-bas, 
au Canada.

tes doigts magiques
me conseillent
de ne pas trop accumuler
d’objets ou d’anxiété
mais de se laisser ricocher
au chevet de cet instant parfaite



<span  class="jour">DIMANCHE   5   NOVEMBRE</span>

je ne pourrai pas devenir ce que je fais pour survivre, mais ce qui me garde en vie. 

					AUTRUI

					ART



sa grosse bécane s’approche, arrogante, de la ronde de pins. 
évitée de peu, je la regarde s’arrondir
ses pneus n’ont plus besoin de crème de jour, 
et à sa vue cavale le jour.
celui que je me permettais de partager avec lui.

!!!!!! venez dans mon attraction
préparez vos peurs, qu’elles soient neuves
quand j’arriverai
maquillée d’éternité.




<span  class="jour">SAMEDI   11   NOVEMBRE</span>

des enzymes de la forêt de cailloux a surgi une imprimante. elle a un cheveu sur la langue.






<span  class="jour">LUNDI   13   NOVEMBRE</span>

	il y a un problème.





<span  class="jour">MARDI   14   NOVEMBRE</span>

c’est un cauchemar. le jour élève à peine mes paupières que je refuse ce monde. 
il faut toujours y faire. l’entretenir. s’exposer. or mes veines sont si pales, 
ma peau déjà toute corrosée. 





<span  class="jour">MERCREDI   15   NOVEMBRE</span>

Ma vie m’échappe. Ça ne va pas.
Ai-je fomenté ce cirque ?

			ANXIETE → PEUR D’Y RETOURNER
					sensation de faiblesse, 
					lévitation dans mon	
					jardin suspendu


					JE DÉCOLLE
					j’essuie la glue
					avec la pierre ponce de la fleur
					qui de la ponce se lave en miel.

				c’en est fini, je m’évapore

					je perds consistance.
							il y a un problème.


vous voyez quand on dit d’un petit qu’il s’ennuie en classe ?
quel est le plus difficile ?
le cours en soi ou bien le suivre ? 

			

				p é t r i f i é e 




et merde. j’adore me sentir sans uniforme.

a s p é r i t é 
			m ’ é g a r e r 
					faire été


l’hiver a des reflets d’été.
c’est son pêché mignon.


		HIVER 
FRAGMENT D’ÉTÉ 	CLIVAGE = ma came


au matin de l’hiver, il y a les trombones.

quel instrument plus orgueilleux – et donc anxiogène – qu’un trombone ?

au matin de l’automne, il y a l’ennui.


je prends la fleur pour accélérer le processus.



CLIVAGE
inéluctablement
APPRENTISSAGE
par moi
CRÉATION

éteindre les voix des patrons








n’en parle à personne…
n’en parle à personne

je suis plus fou que toi moi,
alors assieds-toi et écoute
écoute-moi te regarder

puis figes-toi et pleure
pleure ta confiance que j’engloutis

tu as des yeux magnifiques…
	deux brèches vers l’océan de ta crédulité

allez, sens tes yeux nous bercer et observe ma canne à pêche qui plonge dans l’abîme
celle qui te creuse pendant que tes yeux de poupée m’harcèlent à te déshabiller.

je suis plus fou que toi moi-même

hahahahaha

viens à moi, tiens toi proche
pour que mes ailes estompent toute éclaircies
pour que mon bras te saute à la gorge
comme une étincelle d’huile sur ton front humide
oups, tu t’es brûlée ? hahaha









tu es l’estompe de mon mal-être
tu es beaucoup trop méfiant.
allons, tu sais que tu peux calmer les barricades de l’écluse.
leur dire « n’ayez plus peur, laissez-vous exiler à l’océan, sentez-vous petites ».








écartons-nous
des reflets de ce vampire
qui chaque fois que nous nous hasardons à le traverser
au recoin d’un miroir
au revoir mon bourreaux

et je m’aspire
dans ce tombeau qui jamais
n’a connu ni la lumière ni les rires.

l’autre est un étrange printemps
moi qui n’ai connu que l’hiver
qui n’ai pas de quoi te plaire





<span  class="jour">LUNDI   20   NOVEMBRE</span>

étrange sonar, tu pulses dans mon oreille comme un géant ballonné d’abeilles.

j’hésite à me voiler d’un grand large, c’est la première fois que le rétablissement me fait glisser autant.

certes, j’ai perdu le championnat de l’attraction envers les autres. chaque interaction me tire les rides, d’une différence qui pourrait faire faculté, mais qui pour l’instant n’arrive pas à s’accrocher.

je glisse, d’une région boisée à un étang bulleux, d’un continent plat à ces dames de roche-arabesque. 






et il suffit de lever la tête
pour que les idées-cuvettes s’évaporent
pour que la jolie vue nous aborde.




je vais me ruer sur cette vie
et dézinguer chaque cyclone




<span  class="jour">MERCREDI   22   NOVEMBRE</span>

éloignez-vous, humains sans syllabes !
je suis en sevrage.
sans nuage qui puisse m’apaiser.
les discussions m’irritent,
	du coup je lévite.




<span  class="jour">VENDREDI   25   NOVEMBRE</span>

un arbre courbé. raide mort. une corde. fendue en ses deux flancs, prête à dresser une jument. 
un western pour le coup à l’ouest.





<span  class="jour">SAMEDI   26   NOVEMBRE</span>

quelques pierres pour délivrer un corps.
une voûte terrestre qui vous soigne un traumatisme. des bougies qui vous éclairent cent étoiles.
timidement, les gouttes atterrissent avec une tendre familiarité. je les laisse m’épouser, elles qui m’ont tant précédé, elles qui jouent leur chant d’oiseau-pluie. 

et ça tourne la tête. la lune ricoche quelques enfants. un sanctuaire pour toutes nos âmes ridées.

chaque arête d’éclat lunaire me prend en tête, sans cesser de m’assurer. 
de me rassurer.

espérance d’une vie éclose, à la porte de cette grotte.



<span  class="jour">MARDI   28   NOVEMBRE</span>

ventre en ratatouille.
la musique rétrécit mon esprit.
elle le met au fond de la classe, agenouillé contre le jugement du tempo.
j’ai la tête en rocade, mais les yeux en écailles de jade. je touche la vie comme sta fait un câlin à l’olivier.

karcher de mes intentions qui condensent le miliondes à un balcon. j’ai buté à presque écrire monde. on y est. ce que ça trempe les chocottes en mouillettes. d’y être. j’ai peur de la stabilité. la mer est trop calme pour être décrite sans y plonger.

et si je n’avais plus rien à apporter au port avec ces conteneurs de médocs ? 
de la contenance, mon ego m’en électrise les deltas de mes fleuves, désormais. 
je crois pouvoir changer ce monde. mais maintenant que j’y suis, saurais-je le raconter ? saurais-je être digne de la strate ambiante ? 
				le bocal est strié 
				mon ego chancelier perd en luminosité

que c’est
dérou t a n t 
d’être un voyageur

des gommettes de pluie poussent un long soupir. on leur a depuis longtemps dit qu’une fois avachies sur le sable, la neige prendrait le relai. il n’y a que les enfants qui aiment le sable mouillé. alors elles suspendent leur vertige, colonne vertébrale de leur renaissance. 

sta chasse les mouches. étrangement, je n’en fais plus un plaidoyer comme je condamnais l’hasard impact qu’a eu mounette. 					je me suis
									habitumée.

la dune couve ses œufs. des reflets écarlates mais timides lui chantent au nez. 
un cheval monte ses escaliers de poussière. il découvre à ses flancs les palpitations du nouveau jour. il n’ose plus galoper, par peur de la sédimenter. elle qui pleure en criant, elle qui se lamente en élans. la dune n’est pas qu’une nappe, qu’on cesse de lui servir des couverts ! à découvert, te voilà stupéfait devant sa danse-cité. et ses larmes deviennent tes armes pour la protéger ; c’est-à-dire la projeter, au corps à corps avec l’olivier.

me rassurer,
	lasure futile d’un envol de montgolfières 
cette architecture en suspension comme le sourire d’un maton.
bâtie par les hommes, je m’acharne contre les brumes.
maquillée par les ombres, je m’attelle à encaisser chaque bourrasque.
me rassurer
me rattraper
me raccrocher
										ou raccrocher ?
`}],Pp="/assets/PP2023-c1e9d6d8.png",Op={components:{RouterLink:os},watch:{$route(e,s){console.log("2023!"),console.log(Oe)}},data(){return{blocs:Tp,currentScroll:0,currentIndex:0,columnWidth:400,imgPrev:Oe,imgNext:Gs,friseBg:Zs,friseColors:et,progress:0,moisDisponibles:[],img2023:Pp}},computed:{fullText(){return this.blocs.map(e=>e.texte).join(`

---

`)},clipStyle(){return{clipPath:`inset(0 ${100-this.progress}% 0 0)`,WebkitClipPath:`inset(0 ${100-this.progress}% 0 0)`}},fadeStyle(){return{left:`${this.progress-6}%`}}},methods:{next(){const e=this.$refs.journalContainer,s=e.scrollWidth-e.clientWidth;this.currentScroll=Math.min(this.currentScroll+this.columnWidth,s),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},prev(){const e=this.$refs.journalContainer;this.currentScroll=Math.max(this.currentScroll-this.columnWidth,0),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},updateProgressFromScroll(){const e=this.$refs.journalContainer,s=e.scrollLeft,t=e.scrollWidth-e.clientWidth;this.progress=t>0?s/t*100:0},scrollToMois(e){const s=this.$refs.journalContainer,t=s.querySelector(`#${e}`);if(t){const n=t.offsetLeft-20;s.scrollTo({left:n,behavior:"smooth"})}}},mounted(){const e=this.$refs.journalContainer;e.addEventListener("scroll",this.updateProgressFromScroll),this.updateProgressFromScroll(),this.$nextTick(()=>{const s=e.querySelectorAll(".mois");this.moisDisponibles=Array.from(s).map(t=>(t.getBoundingClientRect(),e.getBoundingClientRect(),{id:t.id,label:t.textContent.trim(),offsetLeft:t.offsetLeft,position:t.offsetLeft/(e.scrollWidth-e.clientWidth)*100}))})}},wp={class:"annee-container"},Mp=["src"],Lp={class:"frise-lunaire"},Dp={class:"repere-mois-container"},Np=["onClick"],$p=["src"],Up=["src"],Bp=b("br",null,null,-1),zp=b("br",null,null,-1),kp={class:"journal-container",ref:"journalContainer"},Fp={class:"journal-columns"},Hp=["innerHTML"],Vp={class:"controls"},Wp=["src"],Jp=["src"];function Kp(e,s,t,n,r,i){return U(),z(se,null,[b("div",wp,[b("img",{class:"annee-img",style:{width:"50%"},src:r.img2023,alt:"2023"},null,8,Mp),b("div",null,Pe(r.img2023),1)]),b("div",Lp,[b("div",Dp,[(U(!0),z(se,null,as(r.moisDisponibles,(a,o)=>(U(),z("div",{key:a.id,class:"repere-mois",style:le({left:a.position+"%",top:o%2===0?"9rem":"0.5rem"}),onClick:l=>i.scrollToMois(a.id)},Pe(a.label),13,Np))),128))]),b("img",{src:r.friseBg,alt:"Frise Background",class:"frise-image"},null,8,$p),b("img",{src:r.friseColors,alt:"Frise Couleurs",class:"frise-image frise-mask",style:le(i.clipStyle)},null,12,Up),b("div",{class:"frise-fade",style:le(i.fadeStyle)},null,4)]),Bp,Xt(),zp,b("div",kp,[b("div",Fp,[b("pre",{class:"journal-pre",innerHTML:i.fullText},null,8,Hp)])],512),b("div",Vp,[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...a)=>i.prev&&i.prev(...a))},null,8,Wp),b("img",{src:r.imgNext,alt:"Suivant",class:"nav-button",onClick:s[1]||(s[1]=(...a)=>i.next&&i.next(...a))},null,8,Jp)])],64)}const Qp=De(Op,[["render",Kp]]),Yp=[{texte:`<div class="mois" id="mars"> MARS </div>
<span  class="jour">VENDREDI   15   MARS</span>

Moduler le flux horaire, celui du volume qui brûle, à chaque seconde.

le film est une brûlure, enfin non, 
une posture. 
je l’adopte régulièrement. 

****

Les eaux de Mars, mielleuses et gourmandes, m’emmènent sourire au soleil. il est fleuri, pianiste et lutin.

apprentie ébéniste
je dévale les rues
sur une planche à roulette 
de ma confection

****

je te veux rougir à mes rires,
je te veux
roussir le mirage
ravir le Sud qui prend de l’âge
équilibrer les fortunes – et les couleurs dans les arbres à barbes.
je nous veux vibrer fortissimo
se laisser
avaler par des tas de crescendo
roussir le mirage
écrire beaucoup de pages. 
devenir nuages.
rencontrer un ou deux rois mages.
puis frapper fort dans ses mains à la fin d’un spectacle
je te vois miraculer ma réjouissance du quotidien.
fleurir un Carpe à la gauche du Diem
pour toustes celles qu’on aime


<span  class="jour">MARDI   26   MARS</span>

je respire. pourtant, je pensais que c’était inconcrétisable ici. à Rouen. chez mes parents. auprès de mes grands-parents. 1 étage – segmenté en 2 escaliers – au dessus. 
avec Edith, on se laisse charmer par les piafs. et je respire. sourires !
`}],Xp="/assets/PP2024-2aea113f.png",Gp={components:{RouterLink:os},watch:{$route(e,s){console.log("2024!"),console.log(Oe)}},data(){return{blocs:Yp,currentScroll:0,currentIndex:0,columnWidth:400,imgPrev:Oe,imgNext:Gs,friseBg:Zs,friseColors:et,progress:0,moisDisponibles:[],img2024:Xp}},computed:{fullText(){return this.blocs.map(e=>e.texte).join(`

---

`)},clipStyle(){return{clipPath:`inset(0 ${100-this.progress}% 0 0)`,WebkitClipPath:`inset(0 ${100-this.progress}% 0 0)`}},fadeStyle(){return{left:`${this.progress-6}%`}}},methods:{next(){const e=this.$refs.journalContainer,s=e.scrollWidth-e.clientWidth;this.currentScroll=Math.min(this.currentScroll+this.columnWidth,s),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},prev(){const e=this.$refs.journalContainer;this.currentScroll=Math.max(this.currentScroll-this.columnWidth,0),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},updateProgressFromScroll(){const e=this.$refs.journalContainer,s=e.scrollLeft,t=e.scrollWidth-e.clientWidth;this.progress=t>0?s/t*100:0},scrollToMois(e){const s=this.$refs.journalContainer,t=s.querySelector(`#${e}`);if(t){const n=t.offsetLeft-20;s.scrollTo({left:n,behavior:"smooth"})}}},mounted(){const e=this.$refs.journalContainer;e.addEventListener("scroll",this.updateProgressFromScroll),this.updateProgressFromScroll(),this.$nextTick(()=>{const s=e.querySelectorAll(".mois");this.moisDisponibles=Array.from(s).map(t=>(t.getBoundingClientRect(),e.getBoundingClientRect(),{id:t.id,label:t.textContent.trim(),offsetLeft:t.offsetLeft,position:t.offsetLeft/(e.scrollWidth-e.clientWidth)*100}))})}},Zp={class:"annee-container"},em=["src"],sm={class:"frise-lunaire"},tm={class:"repere-mois-container"},nm=["onClick"],rm=["src"],im=["src"],am={class:"journal-container",ref:"journalContainer"},om={class:"journal-columns"},lm=["innerHTML"],um={class:"controls"},cm=["src"],dm=["src"];function pm(e,s,t,n,r,i){return U(),z(se,null,[b("div",Zp,[b("img",{class:"annee-img",style:{width:"50%"},src:r.img2024,alt:"2024"},null,8,em),b("div",null,Pe(r.img2024),1)]),b("div",sm,[b("div",tm,[(U(!0),z(se,null,as(r.moisDisponibles,(a,o)=>(U(),z("div",{key:a.id,class:"repere-mois",style:le({left:a.position+"%",top:o%2===0?"9rem":"0.5rem"}),onClick:l=>i.scrollToMois(a.id)},Pe(a.label),13,nm))),128))]),b("img",{src:r.friseBg,alt:"Frise Background",class:"frise-image"},null,8,rm),b("img",{src:r.friseColors,alt:"Frise Couleurs",class:"frise-image frise-mask",style:le(i.clipStyle)},null,12,im),b("div",{class:"frise-fade",style:le(i.fadeStyle)},null,4)]),b("div",am,[b("div",om,[b("pre",{class:"journal-pre",innerHTML:i.fullText},null,8,lm)])],512),b("div",um,[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...a)=>i.prev&&i.prev(...a))},null,8,cm),b("img",{src:r.imgNext,alt:"Suivant",class:"nav-button",onClick:s[1]||(s[1]=(...a)=>i.next&&i.next(...a))},null,8,dm)])],64)}const mm=De(Gp,[["render",pm]]),fm=[{texte:`<div class="mois" id="mars"> MARS </div><span  class="prose"> LE PUITS </span>

et si la neige embrasse ton front 
si elle nappe tes rides et fond
des rivières vivront
descendront jusqu’à tes lèvres
et alors tu boiras une histoire plus vieille que tes souvenirs
puis un sourire
éclaircie aux joues roses
s’emparera des livres dans lesquels tu aimes gribouiller
te rappelant que le passé
s’épuise d’été en été
mais que personne n’a jamais pu le noyer
et la sève rejoint la neige
dans une espèce de cortège
où les piverts cognent à ta porte
que la brise les emporte
tu répondras trop tard
ta chambre sera un sous-sol sans essence
il neigera sur tes draps
tu croiras avoir manqué ta chance
tes doigts grinceront dans le vide
attrapant un énième néant.
pourtant que tes gestes arrosent le temps
d’un amour venu demain
pour l’aube tu seras grand
comme dans ces livres que tu aimes tant
ton histoire n’aura pas de héro
elle sera magnifique
simple et magnifique
coulant la neige dans des emporte-pièces
d’argent et de cristal
chaque cicatrice viendra à la tribune
révolutionner la justice
rendre bêtes les artifices
perds-toi mon amour perds-toi
et si tu te perds 
prends-moi dans tes bras
j’irai avec toi sur une terre sans loi sans roi
les fourmis tapisseront les toits
cheminées fourmilières
une famille où tu seras le père
et le frère et l’enfant
tu parleras des saisons
comme on prie l’horizon
avec ces putains d’yeux infinis
avec moi devant toi dans ce lit
perds-toi mon amour perds-toi
mais ne t’évade pas trop loin de ton passé
car tu ne peux devenir sans d’abord creuser le puits
d’un village amoureux de ce que c’est de vivre


<span  class="prose"> LES CRIS </span>

tous les jours un soleil
toutes les fois où je vois le ciel
tout à coup crier à s’en crever les sens
l’ordinaire mord les ambitieux
ils finissent rampant et creux
ils ont faim et rien autour n’est comestible
ils sont leur propre cible
et n’ont pas de peur quand ils tirent
pour rien contre quoi si ce n’est eux
l’ordinaire est mou, esquive leurs fourchettes
mais tous les jours un soleil
et toutes les fois où je vois le ciel
mon cœur est l’air qui vibre autour des ruches
car mon miel préfère aux fourchettes une énorme louche
qui dans son plongeon me montre des dizaines de mouches
que l’étang a fait naître
bon dieu que ma vie a de fenêtres
bon dieu comme c’est riche d’être
l’ordinaire je ne sais pas 
ce que cela veut dire
chez moi tout m’écrit
si vous saviez comme je suis une poésie
l’iris le bleu la lave le feu
l’oiseau l’espoir le sang l’odieux
le rire un vertige une vitesse et Dieu
que ce monde parle bien
que son silence peint des fresques
sur des pyramides ou l’Everest
moi je m’envole adieu vos lestes
je viens nue, pleine, comme une lumière sur un nuage

<span  class="prose"> UN SILENCE POUR UN CYCLOPE </span>

un cyclope enquête
les aller-venues des esthètes sous la pluie
il semble que leurs traces sont des réverbères
des épillets du chagrin des champs de ruines
alors
du sommeil à mon sommeil
le cyclope tournoie, lentement
ses bras forment une masse informe
vers le silence, silence, silence
s’il-te-plaît
ce jour ne peut lui aussi être pluvieux
si c’est ça moi je suis vieux
d’un rêve exsangue
d’actes manqués en bataille
monsieur le cyclope prenez-moi à vos pieds
rassurez mes pleurs sous la pluie
offrez-moi une lueur, rien qu’une seule
il m’en faut peu vous savez
pour prélever sa cloque au silence
silence silence
l’air envahira l’estuaire, de toute sa poigne et de tout son cran
mon avenir sera grand
mon avenir de vieux je le veux
j’ai sommeil mais je ne peux
épiler le maïs pour la dernière fois
moi je veux coucher les champs sur mes os
je veux cacher mes yeux sous les coquelicots
je veux vivre heureux et beaucoup plus vieux,
si vous savez m’écouter
si j’ai encore une voix pour chanter
cyclope au pied des passants, moi en-dessous 
je suis la flaque venue de la dernière claque
que le ciel donna aux hommes
héritage d’un brouillard incandescent
mon avenir sera grand
et moi petit
vieux
rabougri
humble parmi l’eau, audacieux pour parler peu
mais dire encore
que son corps charrie mon cœur 
que ce n’est pas encore l’heure
que ça ne le sera jamais
je me déplais mais j’aime aimer.

<span class="prose"> SAMEDI </span> 

samedi ça me dit
d’être nue sans te dire
que la voie lactée a tes yeux
et que le tissu épouse mes vœux 
d’être nue à chérir
l’avenue dans nos regards
tant pis s’il se fait tard
je veux que se perdent nos pas
dans cette ville dont je n’entends plus les voix
cette rue est infinie noyons-y l’indicible
d’un peuple qui ait une gratitude sereine
pour le soleil et ses sirènes
pour les cyprès et ses grelots
pour l’envol de tout oiseau
ceux qui se nichent dans tes cheveux
ou sous les bancs
de l’avenue qui irrigue ton cœur 
et ce malheur
de n’être que nue d’avoir encore un corps
car je souhaiterais voir en dehors
te serrer plus fort
qu’aucun bras ne peut étreindre
car ce feu je ne peux l’éteindre
car la ville ne peut s’endormir
car tu es le jour où ce monde est né
où mes yeux ont découvert ce que c’est de briller
j’aimerais n’être qu’en apnée
mais il faut bien respirer
et samedi doit déjà s’éloigner.


<span class="prose"> MON SORT ET SON PORT</span>

arriver à deux doigts du port
porter cinq coquillages
dans un vent qui s’engouffre au Nord
mordre l’eau, la décomposer en matelots
puis virer de bord, dans l’attente d’un autre sort

<div class="mois" id="avril"> AVRIL </div><span class="prose"> LA BEAUTE DE L'ETE NU </span>

agrippée à une égratignure bleutée
je vole le sens de la beauté
j’ai ôté ses vêtements à l’été
lui qui bouscule les hommes en aventures
qui les jette dans des rivières
éclabousse ce qui autrefois étaient leurs prières
éraflons nos peaux jusqu’à ce que grincent nos os
j’ai faim d’une folie chronique
que l’été se verse et enseigne à chaque jour
que l’amour c’est mille et un nains de jardin
dans mille et un jardins
îlots-miroirs des regards qui se trouvent
cela n’a pas de forme, si cela en a une c’est celle de l’été à poil
je te regarde la regarder
enfin je vois la liberté
ouvrir les pores des écaillées
envahir le port où vous êtes juste nées
juste là devant moi loin de tout
griffons nos joues cernons nos yeux
grattons nos corps sur chaque texture complexée
celles qui dérangent le lisse et le chiant
moi je veux aimer le moche et le fainéant
qui en face de ses yeux repeint les murs en des ciels
et les non en des oui
et qui s’enivre à la folie 
de se rappeler que l’on ne s’émerveille qu’en oubliant que
ce qu’on est a un sens
que ce qu’on fait a du sens
que ce qu’on pense est une essence
alors je le redis : je vole le sens de la beauté et ne le remplace pas. c’est comme ça que je suis. c’est ainsi que l’amour nide la vie.

<span class="prose"> LA SONNETTE </span>

il cherche une adresse
les rues s’enfilent rendent son corps maladroit
son pouls est une sonnette lors d’une soirée de fête
il regarde les noms sur les boîtes aux lettres
aimerait connaître la couleur autour des fenêtres
de ce père en noir et blanc
qui lui a depuis bien longtemps fait perdre son ton confiant
qu’il a eu jusqu’à six ans
depuis il cherche l’adresse
il a 27 ans et une flaque de vie
qui veut comprendre où se trouve le pont
la charpente le soutien le squelette des dernières années
qui ont balayé l’enfance pour laisser seul un adulte enrhumé

qu’est-ce qu’il dira ? Lui parlera-t-il ou se justifiera-t-il pour lui-même, pour s’assurer qu’il a fait ce qu’il fallait, qu’il a été ce qu’il pouvait être ? 
Un père n’en est plus un quand il devient tabou.

Dans cette rue il le sait, qu’il n’était qu’un CDD, que cet homme a préféré démissionner, qu’y penser il se l’interdit, se l’est interdit tant de nuits. La peur de devenir amer, rouge de rage, la haine qui crache, lui crache au visage. Il n’est pas en paix. Il aurait aimé s’aimer, être fier de s’être construit seul, mais quelle couleur ont ses volets ? Y a-t-il de l’éclat dans ses yeux ? A-t-il des jours heureux ? Qu’est-ce que ça lui fait de devenir vieux avec une vie abandonnée derrière lui ? Un fils oublié, disparu, de ses préoccupations, attentions, affections, obligations ? 

Il y a plus de réponses que de questions, parfois il ne sert à rien de comprendre, tout a déjà été dit et le voilà espérant devant une vieille photographie, où il sourit, où il semble presque gentil, où il a l’impression que dans un autre univers l’homme aurait été un bon père.

Mais ce n’est pas à lui de revenir, ce n’est pas lui qui est parti. Alors il part, il abandonne. Il choisit de ne pas sonner.

<span class="prose"> AU FEU LES ARTIFICES </span>

je ne me sens pas grandir moi je vieillis
j’observe la vie et m’entasse sans déni
dans mon petit corps mon infini
Marseille va vite j’aime m’y ralentir
comme la pluie assomme les marseillais
moi je veux être assommée par le poids du monde
en faire le tour vingt fois par seconde
maman me parle de ses jonquilles
je parle donc aux jonquilles
et les jonquilles parlent au silence
la science défait l’intuition
tout est désincarné désenchanté
partout par là ça se barricade dans idées mentales
ça prosélyte, comme pour survivre, sa propre morale
moi je m’en fous du bien ou du mal
je veux tout écouter tout regarder
l’odieux comme le banal
la douceur autant que l’horreur
parce qu’on peut pas compartimenter on est nés sur la même Terre
et tant pis si j’y perds la tête je veux ressentir ce qu’a de commun notre air
accueillir le chaos et le reposer
juger les juges éventrer les murs
mon chat aime les fessées ça fait pas de lui un chat facile
il y a dans chaque complexité une belle simplicité
et dans chaque simplicité une putain de complexité
la mer est bonne quand on y est
à chaque humain sa cohérence
la mienne est une danse
et sous ce caisson j’entends tes yeux
défibriller mes évidences
et sous ce caisson tout recommence
moi et la foule on réinvente le jeu
ni maître ni Dieu
ni diktat ni Lepen
ni guerre ni haine
on nique le capital on nie le système
sauf le sound system
on s’aime à trois à quatre à cent
avec ou sans mecs
libre de croire d’être de naître
encore et encore
sous un autre blaze un autre genre
les artifices c’est pas mon genre
même les feux d’artifices j’aime pas
les coccinelles j’aime bien
les escargots j’aime bien
les gabians j’aime bien
les gens bien j’aime bien
j’aime aimer j’aime les évidentes intimités
avec ce vieux au café ou mes sœurs révoltées
alors laissez-moi m’envoler laissez-nous rêver
libérez l’HP et les prisonniers
allions-nous soyons fous alliés
allons flamber l’Empire et tout ce qu’il y a de pire
c’est fini de voter pour des cyborgs agitons la mer jusqu’à ce que ça déborde
la nuit me flotte la lune me borde
être vivant a ses soucis
mais la lune en a aussi
elle qui nous donne la vie

<span class="prose"> JE SUIS UNE AUTRE QUI TE VEUT </span>

un serpent se fraye parmi les mots
courbant les herbes creusant les certitudes
le vent me parle d’une friche infinie
où chez elle je saurais pourquoi rester en vie
le serpent a chanté le ciel s’est dénudé
peu importe où je vivais désormais je deviens
plus loin que le refuge abrite d’égarés
je deviens la gorge assoiffée le menton levé
je n’ai plus peur du monde
je n’ai plus besoin de toi qui m’abonde
le serpent me prélève de tes bras je me lève au-delà
là où la sédition arrose les mœurs là où l’aurore n’est qu’un début
de l’habitude je n’ai plus notion je m’aventure dans une révolution
où je veux être ma propre fusion 
où comprendre sera une libération
me frotter au serpent fugitif, de ce quotidien qui rembourse sa propre logique
ce qui me manque je le serai
que tu me suives ou que tu me regrettes
et le temps nous fera tomber aux oubliettes
alors je me fraye parmi l’eau
qui ne dort plus un bateau
je goûte à mes doutes j’en crève seule
je découvre l’ombre fraîche de tant de tilleuls
j’ai des amitiés qui me trouvent
des amours qui simplement coulent
un or intense et toujours jeune
vieillir c’est grandir
apprendre à lire les équinoxes avec des équations azures
les herbes furent épineuses le sens était râleur
alors oui la vie me creuse mais elle m’allonge ailleurs
je suis enfin sûre
d’être quelqu’une plutôt deux fois qu’une
ce monde a sa place chez moi j’ai ma place chez lui
pourrais-je rêver d’une plus belle fortune ?
dans ce ciel constellé ma sueur luit
ravit la lune et son sourire
mais voilà je suis une autre en aventure
j’ai un désir
je suis une autre qui te veut
tout autant qu’avant maintenant je te veux
le temps t’a nettoyé de mes cieux
mais tes yeux font un bordel
un bordel
avec cette grâce de sirène que tu as
et cette fièvre de bouc qui te hisse
je nous veux partager mille malices
je veux respirer ton odeur et l’oublier
en être ivre puis l’oublier
qu’elle ne soit qu’une couleur
écarlate éclatante renversante
qu’elle ne soit qu’une couleur
et plus chaque vitrail d’une putain de cathédrale
prenons le temps du reste de nos vies
un feu étouffé qui gémit
tendrement de temps en temps
ne plus jamais nous consumer, plus aucune apnée
ne connaître que des étés
lents et nous déshabiller
les ongles terreux d’avoir bien jardiné
l’une sans l’autre puis de se trouver bouleversées
de se trouver
se retrouver
mon bien aimé 

<span class="prose"> PLACENTA </span>

il y a des guilis sur l’éclaircie
des grigris sur tes habits
tout tintinnabule au fond nous ne sommes que somnanbules
de cette caresse qu’un vent chaud nous livre
comme un rêve où nous sommes libres
et le rose sur les fenêtres et les reflets sur tes joues frêles
je nous vois clandestines d’un récit millénaire
abritées par des secrets tête-en-l’air
qu’il est chaud ce vent sans Sud ni Nord 
l’Ouest nous repose ici fleurissent les polypores
comme si sous nos songes un port grondait
qui pourrait nous faire naviguer à jamais
je me sens bien
les tracas ont un air de rien
viens on s’en va on part jusqu’à chez toi
l’hiver est un souvenir que la beauté videra

<span class="prose"> DEPENDANCE </span>

comme un besoin d’évacuer
la place incendiée
comme un refrain glacé
qui lui goutte au nez
au fond c’est vite fait les aiguilles sont vrillées
l’horloge fume le cadran fond
elle qui voulait régler les autres dans une même chanson
où chaque seconde aurait une chaise longue
où se confier pour éloigner la tombe
mais là voilà qui a flirté avec trop de monde
tous dansent une ronde et elle écartelée se demande
si son corps a bien tous ses organes
ou s’il lui reste à mandier aux passants de nouvelles membranes
être seule qu’est-ce d’autre qu’un vertige
effrayant
maintenant
c’est un vent qui ne fait pas de bruit
un vide bête, dépeuplé
c’est allé si vite l’eau s’est engouffrée
la laissant noyée pour toujours, à jamais
ce n’est pas un drame elle le sait
l’horloge est juste déréglée 
l’eau l’incendie le vent, le temps
tout se touche et transforme tacitement
ce qu’on peut être ce qu’on entend
quand des autres bruyants ne restent plus que des ombres
c’est effrayant
maintenant
c’est un jour lourd
jusqu’à quand ?
se sentira-t-elle entière sans ces gens ?
sans eux son ventre est vide
elle mange des rites acides
où on lui dit depuis petite que l’aimer est compliqué
alors elle se maquille devant un miroir opaque
et scelle ce pacte : les autres sont là et partent
moi je n’y suis pas mais reste

<span class="prose"> TOUCHER L'ECUME </span>

Dans cette grande roue je m’égaye,
l’écume gargarise la rive et se défait au large.
Je dis que si je touche je vis
que ressentir m’est une manie
Que la roue tourne je reste droite
quoique chancelante sur les gravats,
de petits segments d’un horizon en reconstruction,
l’avenir a des secrets en gestation.
J’ai chanté plus fort qu’on ne peut hurler son amitié,
je vogue jusqu’à un ciel poudré de filles émerveillées
Là l’écume irise la brume et ses passagers.
Le bonheur est une rencontre qui nous a accepté,
une liberté que l’on s’est accordé après avoir aimé
C’est un grandiose voyage de la racine au fruit,
c’est être quelque part et bientôt partout. 
Alors je vous en prie embarquez dans la grande roue
des secousses des remous qui hocquètent le vrai le doux
Oscillons aussi longtemps qu’il y a de fleurs à cueillir
C’est en nous touchant qu’on aura l’infini à ravir.

<div class="mois" id="mai"> MAI </div> <span class="prose"> REVENIR, TERNIR </span>

ornée de l’aube je m’affaisse sous l’horizon
il y a dans mes jambes les lazures d’un temps reporté.
Mes orteils poussent au loin un vent vers ailleurs
ici je suis ci-git ma vie.
Je dois être obstinée m’attacher à regarder
la lune moqueuse de mes égarements rouges
mais le ciel n’est pas rouge il n’a pour peine que quelques nuages
je ne suis pas où j’aimerais mais je décide que j’aimerai

le corps bat des cils un événement
qui paraît-il rebranche ce qui avant
n’était qu’une honte n’a été qu’une patience

de fuir l’événement oui le différer par clairvoyance
que ce lieu est ma malchance mais je veux revirer la danse

<span class="jour"> JEUDI 15 MARS </span>

j’aime pleurer.
j’aimerais pleurer.
l’irréelle envolée de mes tous petits souffles, toute l’eau qui lévite ses gouttes. 
j’ai le nez plein de poussières
j’ai des cernes et plus de ventre
j’ai du mal à me tenir debout
sous ces cernes et ce ventre mou
elle s’est remise à piailler
cette névrosée du disque rayé
ma tête déconcentre mon âme.
moi je voudrais déteindre
sur les voiles que le vent lève
sur les lèvres que nos gens aiment
sur les herbes que l’bonheur sème.
j’aimerais que la vie pleure sur moi
que mes doigts en deviennent froids
que je ne puisse plus rien prendre sans que je comprenne que ce que je prends est flagrant ;
que le temps qui se repose plante ses nénuphars.
et moi le corps accroupi dans un sourire
d’être lente pour une fortune,
là je suis bête par les stries
mon jus est acide et j’enchaîne les « si »
je ne suis pas avec toi pas avec moi
je condense des sauts de chat
dans le précipice d’une régression.
c’est que le minuteur inverse les occupations
on compte à rebours ça perce le réservoir
alors le grisou mouille ma mémoire.
je veux pleurer et après table rase
que le lierre ne croit plus tantôt qu’il est le mur
tantôt qu’il le dépasse
moi je veux être la brique et la mousse qui l’embrasse.

<span class="jour"> DIMANCHE 18 MAI </span>

les épis se perdent et en se perdant ils perdent la musique
elle qui joue avec le vent, qui danse avec les champs
et l’aurore renoue avec l’or, le tournis rejoue quelques notes
il y a des ami-es tempêtes, ils s’aiment, changent le vol des oiseaux
et les oiseaux chutent dans un fou rire
sous l’or le blé l’été
noyer l’âge en une brise à jamais libre
tu cries je ris ça swingue
dans tes yeux il y a ce jeu
avec lequel tu amuses les Dieux
brûlez l’écorce lancez la cendre
qu’on me consume je déguerpis comme aucun homme
qui décampe évasif
dans un brasier abrasif
l’histoire jaillit par idioties qui nous sont chères
nous cambrons la lenteur en une chatière
par laquelle nous glissons à moitié ou tout à fait nu-es
incendie d’un temps bien rangé
le bordel est une rime qui nous apprendra à aimer
`}],hm="/assets/PP2025-af89ff10.png",vm={components:{RouterLink:os},watch:{$route(e,s){console.log("2025!"),console.log(Oe)}},data(){return{blocs:fm,currentScroll:0,currentIndex:0,columnWidth:400,imgPrev:Oe,imgNext:Gs,friseBg:Zs,friseColors:et,progress:0,moisDisponibles:[],img2025:hm}},computed:{fullText(){return this.blocs.map(e=>e.texte).join(`

---

`)},clipStyle(){return{clipPath:`inset(0 ${100-this.progress}% 0 0)`,WebkitClipPath:`inset(0 ${100-this.progress}% 0 0)`}},fadeStyle(){return{left:`${this.progress-6}%`}}},methods:{next(){const e=this.$refs.journalContainer,s=e.scrollWidth-e.clientWidth;this.currentScroll=Math.min(this.currentScroll+this.columnWidth,s),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},prev(){const e=this.$refs.journalContainer;this.currentScroll=Math.max(this.currentScroll-this.columnWidth,0),e.scrollTo({left:this.currentScroll,behavior:"smooth"}),requestAnimationFrame(()=>{this.updateProgressFromScroll()}),console.log(this.progress)},updateProgressFromScroll(){const e=this.$refs.journalContainer,s=e.scrollLeft,t=e.scrollWidth-e.clientWidth;this.progress=t>0?s/t*100:0},scrollToMois(e){const s=this.$refs.journalContainer,t=s.querySelector(`#${e}`);if(t){const n=t.offsetLeft-20;s.scrollTo({left:n,behavior:"smooth"})}}},mounted(){const e=this.$refs.journalContainer;e.addEventListener("scroll",this.updateProgressFromScroll),this.updateProgressFromScroll(),this.$nextTick(()=>{const s=e.querySelectorAll(".mois");this.moisDisponibles=Array.from(s).map(t=>(t.getBoundingClientRect(),e.getBoundingClientRect(),{id:t.id,label:t.textContent.trim(),offsetLeft:t.offsetLeft,position:t.offsetLeft/(e.scrollWidth-e.clientWidth)*100}))})}},gm={class:"annee-container"},bm=["src"],qm={class:"frise-lunaire"},jm={class:"repere-mois-container"},Em=["onClick"],ym=["src"],xm=["src"],_m={class:"journal-container",ref:"journalContainer"},Rm={class:"journal-columns"},Cm=["innerHTML"],Am={class:"controls"},Sm=["src"],Im=["src"];function Tm(e,s,t,n,r,i){return U(),z(se,null,[b("div",gm,[b("img",{class:"annee-img",style:{width:"50%"},src:r.img2025,alt:"2025"},null,8,bm),b("div",null,Pe(r.img2025),1)]),b("div",qm,[b("div",jm,[(U(!0),z(se,null,as(r.moisDisponibles,(a,o)=>(U(),z("div",{key:a.id,class:"repere-mois",style:le({left:a.position+"%",top:o%2===0?"9rem":"0.5rem"}),onClick:l=>i.scrollToMois(a.id)},Pe(a.label),13,Em))),128))]),b("img",{src:r.friseBg,alt:"Frise Background",class:"frise-image"},null,8,ym),b("img",{src:r.friseColors,alt:"Frise Couleurs",class:"frise-image frise-mask",style:le(i.clipStyle)},null,12,xm),b("div",{class:"frise-fade",style:le(i.fadeStyle)},null,4)]),b("div",_m,[b("div",Rm,[b("pre",{class:"journal-pre",innerHTML:i.fullText},null,8,Cm)])],512),b("div",Am,[b("img",{src:r.imgPrev,alt:"Précédent",class:"nav-button",onClick:s[0]||(s[0]=(...a)=>i.prev&&i.prev(...a))},null,8,Sm),b("img",{src:r.imgNext,alt:"Suivant",class:"nav-button",onClick:s[1]||(s[1]=(...a)=>i.next&&i.next(...a))},null,8,Im)])],64)}const Pm=De(vm,[["render",Tm]]),Om=[{path:"/",name:"maison",component:Yc},{path:"/copi",name:"coléoptère pirouette",component:ad},{path:"/copi/:slug",name:"capsule coPi",component:Ed,props:!0},{path:"/puzzlepathogene",name:"puzzle pathogène",component:Id,children:[{path:"2020",name:"journal de 2020",component:Jd},{path:"2021",name:"journal de 2021",component:dp},{path:"2022",name:"journal de 2022",component:Ip},{path:"2023",name:"journal de 2023",component:Qp},{path:"2024",name:"journal de 2024",component:mm},{path:"2025",name:"journal de 2025",component:Pm}]}],wm=yc({history:Bu("/"),routes:Om,scrollBehavior(e,s,t){return{top:0}}});var or={exports:{}},Ma=function(s,t){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return s.apply(t,r)}},Mm=Ma,lr=Object.prototype.toString,ur=function(e){return function(s){var t=lr.call(s);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function Is(e){return e=e.toLowerCase(),function(t){return ur(t)===e}}function cr(e){return Array.isArray(e)}function Ut(e){return typeof e>"u"}function Lm(e){return e!==null&&!Ut(e)&&e.constructor!==null&&!Ut(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var La=Is("ArrayBuffer");function Dm(e){var s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(e):s=e&&e.buffer&&La(e.buffer),s}function Nm(e){return typeof e=="string"}function $m(e){return typeof e=="number"}function Da(e){return e!==null&&typeof e=="object"}function Ot(e){if(ur(e)!=="object")return!1;var s=Object.getPrototypeOf(e);return s===null||s===Object.prototype}var Um=Is("Date"),Bm=Is("File"),zm=Is("Blob"),km=Is("FileList");function dr(e){return lr.call(e)==="[object Function]"}function Fm(e){return Da(e)&&dr(e.pipe)}function Hm(e){var s="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||lr.call(e)===s||dr(e.toString)&&e.toString()===s)}var Vm=Is("URLSearchParams");function Wm(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Jm(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function pr(e,s){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),cr(e))for(var t=0,n=e.length;t<n;t++)s.call(null,e[t],t,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.call(null,e[r],r,e)}function Dn(){var e={};function s(r,i){Ot(e[i])&&Ot(r)?e[i]=Dn(e[i],r):Ot(r)?e[i]=Dn({},r):cr(r)?e[i]=r.slice():e[i]=r}for(var t=0,n=arguments.length;t<n;t++)pr(arguments[t],s);return e}function Km(e,s,t){return pr(s,function(r,i){t&&typeof r=="function"?e[i]=Mm(r,t):e[i]=r}),e}function Qm(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Ym(e,s,t,n){e.prototype=Object.create(s.prototype,n),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Xm(e,s,t){var n,r,i,a={};s=s||{};do{for(n=Object.getOwnPropertyNames(e),r=n.length;r-- >0;)i=n[r],a[i]||(s[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,s))&&e!==Object.prototype);return s}function Gm(e,s,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=s.length;var n=e.indexOf(s,t);return n!==-1&&n===t}function Zm(e){if(!e)return null;var s=e.length;if(Ut(s))return null;for(var t=new Array(s);s-- >0;)t[s]=e[s];return t}var ef=function(e){return function(s){return e&&s instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),me={isArray:cr,isArrayBuffer:La,isBuffer:Lm,isFormData:Hm,isArrayBufferView:Dm,isString:Nm,isNumber:$m,isObject:Da,isPlainObject:Ot,isUndefined:Ut,isDate:Um,isFile:Bm,isBlob:zm,isFunction:dr,isStream:Fm,isURLSearchParams:Vm,isStandardBrowserEnv:Jm,forEach:pr,merge:Dn,extend:Km,trim:Wm,stripBOM:Qm,inherits:Ym,toFlatObject:Xm,kindOf:ur,kindOfTest:Is,endsWith:Gm,toArray:Zm,isTypedArray:ef,isFileList:km},Ms=me;function ui(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Na=function(s,t,n){if(!t)return s;var r;if(n)r=n(t);else if(Ms.isURLSearchParams(t))r=t.toString();else{var i=[];Ms.forEach(t,function(l,d){l===null||typeof l>"u"||(Ms.isArray(l)?d=d+"[]":l=[l],Ms.forEach(l,function(m){Ms.isDate(m)?m=m.toISOString():Ms.isObject(m)&&(m=JSON.stringify(m)),i.push(ui(d)+"="+ui(m))}))}),r=i.join("&")}if(r){var a=s.indexOf("#");a!==-1&&(s=s.slice(0,a)),s+=(s.indexOf("?")===-1?"?":"&")+r}return s},sf=me;function Zt(){this.handlers=[]}Zt.prototype.use=function(s,t,n){return this.handlers.push({fulfilled:s,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};Zt.prototype.eject=function(s){this.handlers[s]&&(this.handlers[s]=null)};Zt.prototype.forEach=function(s){sf.forEach(this.handlers,function(n){n!==null&&s(n)})};var tf=Zt,nf=me,rf=function(s,t){nf.forEach(s,function(r,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(s[t]=r,delete s[i])})},$a=me;function Ws(e,s,t,n,r){Error.call(this),this.message=e,this.name="AxiosError",s&&(this.code=s),t&&(this.config=t),n&&(this.request=n),r&&(this.response=r)}$a.inherits(Ws,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ua=Ws.prototype,Ba={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ba[e]={value:e}});Object.defineProperties(Ws,Ba);Object.defineProperty(Ua,"isAxiosError",{value:!0});Ws.from=function(e,s,t,n,r,i){var a=Object.create(Ua);return $a.toFlatObject(e,a,function(l){return l!==Error.prototype}),Ws.call(a,e.message,s,t,n,r),a.name=e.name,i&&Object.assign(a,i),a};var st=Ws,za={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$e=me;function af(e,s){s=s||new FormData;var t=[];function n(i){return i===null?"":$e.isDate(i)?i.toISOString():$e.isArrayBuffer(i)||$e.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function r(i,a){if($e.isPlainObject(i)||$e.isArray(i)){if(t.indexOf(i)!==-1)throw Error("Circular reference detected in "+a);t.push(i),$e.forEach(i,function(l,d){if(!$e.isUndefined(l)){var u=a?a+"."+d:d,m;if(l&&!a&&typeof l=="object"){if($e.endsWith(d,"{}"))l=JSON.stringify(l);else if($e.endsWith(d,"[]")&&(m=$e.toArray(l))){m.forEach(function(f){!$e.isUndefined(f)&&s.append(u,n(f))});return}}r(l,u)}}),t.pop()}else s.append(a,n(i))}return r(e),s}var ka=af,hn=st,of=function(s,t,n){var r=n.config.validateStatus;!n.status||!r||r(n.status)?s(n):t(new hn("Request failed with status code "+n.status,[hn.ERR_BAD_REQUEST,hn.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},Rt=me,lf=Rt.isStandardBrowserEnv()?function(){return{write:function(t,n,r,i,a,o){var l=[];l.push(t+"="+encodeURIComponent(n)),Rt.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),Rt.isString(i)&&l.push("path="+i),Rt.isString(a)&&l.push("domain="+a),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),uf=function(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)},cf=function(s,t){return t?s.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):s},df=uf,pf=cf,Fa=function(s,t){return s&&!df(t)?pf(s,t):t},vn=me,mf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ff=function(s){var t={},n,r,i;return s&&vn.forEach(s.split(`
`),function(o){if(i=o.indexOf(":"),n=vn.trim(o.substr(0,i)).toLowerCase(),r=vn.trim(o.substr(i+1)),n){if(t[n]&&mf.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([r]):t[n]=t[n]?t[n]+", "+r:r}}),t},ci=me,hf=ci.isStandardBrowserEnv()?function(){var s=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function r(i){var a=i;return s&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(a){var o=ci.isString(a)?r(a):a;return o.protocol===n.protocol&&o.host===n.host}}():function(){return function(){return!0}}(),Nn=st,vf=me;function Ha(e){Nn.call(this,e??"canceled",Nn.ERR_CANCELED),this.name="CanceledError"}vf.inherits(Ha,Nn,{__CANCEL__:!0});var en=Ha,gf=function(s){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return t&&t[1]||""},rt=me,bf=of,qf=lf,jf=Na,Ef=Fa,yf=ff,xf=hf,_f=za,ss=st,Rf=en,Cf=gf,di=function(s){return new Promise(function(n,r){var i=s.data,a=s.headers,o=s.responseType,l;function d(){s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}rt.isFormData(i)&&rt.isStandardBrowserEnv()&&delete a["Content-Type"];var u=new XMLHttpRequest;if(s.auth){var m=s.auth.username||"",f=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";a.Authorization="Basic "+btoa(m+":"+f)}var v=Ef(s.baseURL,s.url);u.open(s.method.toUpperCase(),jf(v,s.params,s.paramsSerializer),!0),u.timeout=s.timeout;function I(){if(u){var C="getAllResponseHeaders"in u?yf(u.getAllResponseHeaders()):null,D=!o||o==="text"||o==="json"?u.responseText:u.response,P={data:D,status:u.status,statusText:u.statusText,headers:C,config:s,request:u};bf(function(X){n(X),d()},function(X){r(X),d()},P),u=null}}if("onloadend"in u?u.onloadend=I:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(I)},u.onabort=function(){u&&(r(new ss("Request aborted",ss.ECONNABORTED,s,u)),u=null)},u.onerror=function(){r(new ss("Network Error",ss.ERR_NETWORK,s,u,u)),u=null},u.ontimeout=function(){var D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded",P=s.transitional||_f;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new ss(D,P.clarifyTimeoutError?ss.ETIMEDOUT:ss.ECONNABORTED,s,u)),u=null},rt.isStandardBrowserEnv()){var A=(s.withCredentials||xf(v))&&s.xsrfCookieName?qf.read(s.xsrfCookieName):void 0;A&&(a[s.xsrfHeaderName]=A)}"setRequestHeader"in u&&rt.forEach(a,function(D,P){typeof i>"u"&&P.toLowerCase()==="content-type"?delete a[P]:u.setRequestHeader(P,D)}),rt.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),o&&o!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",s.onDownloadProgress),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",s.onUploadProgress),(s.cancelToken||s.signal)&&(l=function(C){u&&(r(!C||C&&C.type?new Rf:C),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l))),i||(i=null);var N=Cf(v);if(N&&["http","https","file"].indexOf(N)===-1){r(new ss("Unsupported protocol "+N+":",ss.ERR_BAD_REQUEST,s));return}u.send(i)})},Af=null,pe=me,pi=rf,mi=st,Sf=za,If=ka,Tf={"Content-Type":"application/x-www-form-urlencoded"};function fi(e,s){!pe.isUndefined(e)&&pe.isUndefined(e["Content-Type"])&&(e["Content-Type"]=s)}function Pf(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=di),e}function Of(e,s,t){if(pe.isString(e))try{return(s||JSON.parse)(e),pe.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(e)}var sn={transitional:Sf,adapter:Pf(),transformRequest:[function(s,t){if(pi(t,"Accept"),pi(t,"Content-Type"),pe.isFormData(s)||pe.isArrayBuffer(s)||pe.isBuffer(s)||pe.isStream(s)||pe.isFile(s)||pe.isBlob(s))return s;if(pe.isArrayBufferView(s))return s.buffer;if(pe.isURLSearchParams(s))return fi(t,"application/x-www-form-urlencoded;charset=utf-8"),s.toString();var n=pe.isObject(s),r=t&&t["Content-Type"],i;if((i=pe.isFileList(s))||n&&r==="multipart/form-data"){var a=this.env&&this.env.FormData;return If(i?{"files[]":s}:s,a&&new a)}else if(n||r==="application/json")return fi(t,"application/json"),Of(s);return s}],transformResponse:[function(s){var t=this.transitional||sn.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||r&&pe.isString(s)&&s.length)try{return JSON.parse(s)}catch(a){if(i)throw a.name==="SyntaxError"?mi.from(a,mi.ERR_BAD_RESPONSE,this,null,this.response):a}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Af},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};pe.forEach(["delete","get","head"],function(s){sn.headers[s]={}});pe.forEach(["post","put","patch"],function(s){sn.headers[s]=pe.merge(Tf)});var mr=sn,wf=me,Mf=mr,Lf=function(s,t,n){var r=this||Mf;return wf.forEach(n,function(a){s=a.call(r,s,t)}),s},Va=function(s){return!!(s&&s.__CANCEL__)},hi=me,gn=Lf,Df=Va,Nf=mr,$f=en;function bn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $f}var Uf=function(s){bn(s),s.headers=s.headers||{},s.data=gn.call(s,s.data,s.headers,s.transformRequest),s.headers=hi.merge(s.headers.common||{},s.headers[s.method]||{},s.headers),hi.forEach(["delete","get","head","post","put","patch","common"],function(r){delete s.headers[r]});var t=s.adapter||Nf.adapter;return t(s).then(function(r){return bn(s),r.data=gn.call(s,r.data,r.headers,s.transformResponse),r},function(r){return Df(r)||(bn(s),r&&r.response&&(r.response.data=gn.call(s,r.response.data,r.response.headers,s.transformResponse))),Promise.reject(r)})},Te=me,Wa=function(s,t){t=t||{};var n={};function r(u,m){return Te.isPlainObject(u)&&Te.isPlainObject(m)?Te.merge(u,m):Te.isPlainObject(m)?Te.merge({},m):Te.isArray(m)?m.slice():m}function i(u){if(Te.isUndefined(t[u])){if(!Te.isUndefined(s[u]))return r(void 0,s[u])}else return r(s[u],t[u])}function a(u){if(!Te.isUndefined(t[u]))return r(void 0,t[u])}function o(u){if(Te.isUndefined(t[u])){if(!Te.isUndefined(s[u]))return r(void 0,s[u])}else return r(void 0,t[u])}function l(u){if(u in t)return r(s[u],t[u]);if(u in s)return r(void 0,s[u])}var d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return Te.forEach(Object.keys(s).concat(Object.keys(t)),function(m){var f=d[m]||i,v=f(m);Te.isUndefined(v)&&f!==l||(n[m]=v)}),n},Ja={version:"0.27.2"},Bf=Ja.version,ms=st,fr={};["object","boolean","number","function","string","symbol"].forEach(function(e,s){fr[e]=function(n){return typeof n===e||"a"+(s<1?"n ":" ")+e}});var vi={};fr.transitional=function(s,t,n){function r(i,a){return"[Axios v"+Bf+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return function(i,a,o){if(s===!1)throw new ms(r(a," has been removed"+(t?" in "+t:"")),ms.ERR_DEPRECATED);return t&&!vi[a]&&(vi[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),s?s(i,a,o):!0}};function zf(e,s,t){if(typeof e!="object")throw new ms("options must be an object",ms.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),r=n.length;r-- >0;){var i=n[r],a=s[i];if(a){var o=e[i],l=o===void 0||a(o,i,e);if(l!==!0)throw new ms("option "+i+" must be "+l,ms.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ms("Unknown option "+i,ms.ERR_BAD_OPTION)}}var kf={assertOptions:zf,validators:fr},Ka=me,Ff=Na,gi=tf,bi=Uf,tn=Wa,Hf=Fa,Qa=kf,Ls=Qa.validators;function Js(e){this.defaults=e,this.interceptors={request:new gi,response:new gi}}Js.prototype.request=function(s,t){typeof s=="string"?(t=t||{},t.url=s):t=s||{},t=tn(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&Qa.assertOptions(n,{silentJSONParsing:Ls.transitional(Ls.boolean),forcedJSONParsing:Ls.transitional(Ls.boolean),clarifyTimeoutError:Ls.transitional(Ls.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(t)===!1||(i=i&&v.synchronous,r.unshift(v.fulfilled,v.rejected))});var a=[];this.interceptors.response.forEach(function(v){a.push(v.fulfilled,v.rejected)});var o;if(!i){var l=[bi,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(a),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=t;r.length;){var u=r.shift(),m=r.shift();try{d=u(d)}catch(f){m(f);break}}try{o=bi(d)}catch(f){return Promise.reject(f)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};Js.prototype.getUri=function(s){s=tn(this.defaults,s);var t=Hf(s.baseURL,s.url);return Ff(t,s.params,s.paramsSerializer)};Ka.forEach(["delete","get","head","options"],function(s){Js.prototype[s]=function(t,n){return this.request(tn(n||{},{method:s,url:t,data:(n||{}).data}))}});Ka.forEach(["post","put","patch"],function(s){function t(n){return function(i,a,o){return this.request(tn(o||{},{method:s,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Js.prototype[s]=t(),Js.prototype[s+"Form"]=t(!0)});var Vf=Js,Wf=en;function Ks(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(r){s=r});var t=this;this.promise.then(function(n){if(t._listeners){var r,i=t._listeners.length;for(r=0;r<i;r++)t._listeners[r](n);t._listeners=null}}),this.promise.then=function(n){var r,i=new Promise(function(a){t.subscribe(a),r=a}).then(n);return i.cancel=function(){t.unsubscribe(r)},i},e(function(r){t.reason||(t.reason=new Wf(r),s(t.reason))})}Ks.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Ks.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]};Ks.prototype.unsubscribe=function(s){if(this._listeners){var t=this._listeners.indexOf(s);t!==-1&&this._listeners.splice(t,1)}};Ks.source=function(){var s,t=new Ks(function(r){s=r});return{token:t,cancel:s}};var Jf=Ks,Kf=function(s){return function(n){return s.apply(null,n)}},Qf=me,Yf=function(s){return Qf.isObject(s)&&s.isAxiosError===!0},qi=me,Xf=Ma,wt=Vf,Gf=Wa,Zf=mr;function Ya(e){var s=new wt(e),t=Xf(wt.prototype.request,s);return qi.extend(t,wt.prototype,s),qi.extend(t,s),t.create=function(r){return Ya(Gf(e,r))},t}var Ae=Ya(Zf);Ae.Axios=wt;Ae.CanceledError=en;Ae.CancelToken=Jf;Ae.isCancel=Va;Ae.VERSION=Ja.version;Ae.toFormData=ka;Ae.AxiosError=st;Ae.Cancel=Ae.CanceledError;Ae.all=function(s){return Promise.all(s)};Ae.spread=Kf;Ae.isAxiosError=Yf;or.exports=Ae;or.exports.default=Ae;var eh=or.exports,sh=(e,s)=>{const t=e.__vccOpts||e;for(const[n,r]of s)t[n]=r;return t};const th={class:"instagram-wrapper"},nh={key:0},rh={key:2,class:"instagram-gallery"},ih=["href"],ah=["src","alt"],oh=["src"],lh={key:3},uh={key:0},ch={key:1},dh={props:{accessToken:String,count:Number,pagination:Boolean},setup(e){const s=e,t=Es(!0),n=Es(!1),r=Es(null),i=Es(!1),a=Es(""),o=Es(""),l=m=>{eh.get(m).then(f=>{f.hasOwnProperty("error")?(t.value=!1,n.value=!0):(r.value=f.data,r!==null&&(a.value=r._rawValue.paging.next,o.value=r._rawValue.paging.previous),t.value=!1)}).then(()=>{s.pagination&&(i.value=s.pagination)}).catch(f=>{console.log("Error:",f),n.value=!0,t.value=!1})};Zn(()=>{const m=`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${s.count}&access_token=${s.accessToken}`;l(m)});const d=()=>{l(a.value)},u=()=>{l(o.value)};return(m,f)=>(U(),z("div",th,[t.value?(U(),z("h1",nh,"LOADING...")):(U(),z("div",rh,[(U(!0),z(se,null,as(r.value.data,v=>(U(),z("div",{key:v.id,class:"instagram-gallery-item"},[(U(),z("a",{href:v.permalink,key:v.id,target:"_blank",rel:"noreferrer"},[v.media_type==="IMAGE"||v.media_type==="CAROUSEL_ALBUM"?(U(),z("img",{src:v.media_url,alt:v.caption,key:v.id,class:"instagram-gallery-image"},null,8,ah)):(U(),z("video",{key:v.id,class:"instagram-gallery-image"},[b("source",{src:v.media_url,type:"video/mp4"},null,8,oh)]))],8,ih))]))),128))])),i.value?(U(),z("div",lh,[o.value?(U(),z("div",uh,[b("button",{class:"",type:"button",onClick:u}," Previous ")])):Pt("",!0),a.value?(U(),z("div",ch,[b("button",{class:"",type:"button",onClick:d}," Next ")])):Pt("",!0)])):Pt("",!0)]))}};var ph=sh(dh,[["__scopeId","data-v-e9a28cfa"]]),mh={install:(e,s)=>{e.component("InstagramFeed",ph)}};const hr=Eu(kc);hr.use(wm);hr.use(mh);hr.mount("#app");
