(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Nn(e,t){const s=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function st(e){if(re(e)){const t={};for(let s=0;s<e.length;s++){const o=e[s],l=Ve(o)?$h(o):st(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(Ve(e))return e;if(Pe(e))return e}}const Bh=/;(?![^(]*\))/g,Dh=/:([^]+)/,Sh=/\/\*.*?\*\//gs;function $h(e){const t={};return e.replace(Sh,"").split(Bh).forEach(s=>{if(s){const o=s.split(Dh);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function qe(e){let t="";if(Ve(e))t=e;else if(re(e))for(let s=0;s<e.length;s++){const o=qe(e[s]);o&&(t+=o+" ")}else if(Pe(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Te(e){if(!e)return null;let{class:t,style:s}=e;return t&&!Ve(t)&&(e.class=qe(t)),s&&(e.style=st(s)),e}const Oh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Fh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",sp=Nn(Oh),Ph=Nn(Fh),Th="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ih=Nn(Th);function op(e){return!!e||e===""}const as=e=>Ve(e)?e:e==null?"":re(e)||Pe(e)&&(e.toString===ip||!ue(e.toString))?JSON.stringify(e,lp,2):String(e),lp=(e,t)=>t&&t.__v_isRef?lp(e,t.value):es(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:ap(t)?{[`Set(${t.size})`]:[...t.values()]}:Pe(t)&&!re(t)&&!cp(t)?String(t):t,Le=Object.freeze({}),Es=Object.freeze([]),_t=()=>{},rp=()=>!1,Mh=/^on[^a-z]/,Lo=e=>Mh.test(e),_l=e=>e.startsWith("onUpdate:"),We=Object.assign,Ra=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Lh=Object.prototype.hasOwnProperty,we=(e,t)=>Lh.call(e,t),re=Array.isArray,es=e=>Ro(e)==="[object Map]",ap=e=>Ro(e)==="[object Set]",Rh=e=>Ro(e)==="[object RegExp]",ue=e=>typeof e=="function",Ve=e=>typeof e=="string",Na=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",ja=e=>Pe(e)&&ue(e.then)&&ue(e.catch),ip=Object.prototype.toString,Ro=e=>ip.call(e),Va=e=>Ro(e).slice(8,-1),cp=e=>Ro(e)==="[object Object]",Ha=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cl=Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nh=Nn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Vl=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},jh=/-(\w)/g,en=Vl(e=>e.replace(jh,(t,s)=>s?s.toUpperCase():"")),Vh=/\B([A-Z])/g,fn=Vl(e=>e.replace(Vh,"-$1").toLowerCase()),is=Vl(e=>e.charAt(0).toUpperCase()+e.slice(1)),zn=Vl(e=>e?`on${is(e)}`:""),vo=(e,t)=>!Object.is(e,t),Cn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},bl=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Hh=e=>{const t=Ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Ni;const up=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wl(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let Ct;class pp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!t&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=Ct;try{return Ct=this,t()}finally{Ct=s}}else wl("cannot run an inactive effect scope.")}on(){Ct=this}off(){Ct=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function qh(e){return new pp(e)}function Wh(e,t=Ct){t&&t.active&&t.effects.push(e)}function qa(){return Ct}function dp(e){Ct?Ct.cleanups.push(e):wl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Wa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},fp=e=>(e.w&Mn)>0,hp=e=>(e.n&Mn)>0,zh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Mn},Uh=e=>{const{deps:t}=e;if(t.length){let s=0;for(let o=0;o<t.length;o++){const l=t[o];fp(l)&&!hp(l)?l.delete(e):t[s++]=l,l.w&=~Mn,l.n&=~Mn}t.length=s}},Al=new WeakMap;let Xs=0,Mn=1;const Hr=30;let ht;const ts=Symbol("iterate"),qr=Symbol("Map key iterate");class za{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Wh(this,o)}run(){if(!this.active)return this.fn();let t=ht,s=Sn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ht,ht=this,Sn=!0,Mn=1<<++Xs,Xs<=Hr?zh(this):ji(this),this.fn()}finally{Xs<=Hr&&Uh(this),Mn=1<<--Xs,ht=this.parent,Sn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(ji(this),this.onStop&&this.onStop(),this.active=!1)}}function ji(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let Sn=!0;const mp=[];function us(){mp.push(Sn),Sn=!1}function ps(){const e=mp.pop();Sn=e===void 0?!0:e}function wt(e,t,s){if(Sn&&ht){let o=Al.get(e);o||Al.set(e,o=new Map);let l=o.get(s);l||o.set(s,l=Wa()),yp(l,{effect:ht,target:e,type:t,key:s})}}function yp(e,t){let s=!1;Xs<=Hr?hp(e)||(e.n|=Mn,s=!fp(e)):s=!e.has(ht),s&&(e.add(ht),ht.deps.push(e),ht.onTrack&&ht.onTrack(Object.assign({effect:ht},t)))}function hn(e,t,s,o,l,r){const a=Al.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(s==="length"&&re(e)){const p=Number(o);a.forEach((d,f)=>{(f==="length"||f>=p)&&i.push(d)})}else switch(s!==void 0&&i.push(a.get(s)),t){case"add":re(e)?Ha(s)&&i.push(a.get("length")):(i.push(a.get(ts)),es(e)&&i.push(a.get(qr)));break;case"delete":re(e)||(i.push(a.get(ts)),es(e)&&i.push(a.get(qr)));break;case"set":es(e)&&i.push(a.get(ts));break}const c={target:e,type:t,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&Wr(i[0],c);else{const p=[];for(const d of i)d&&p.push(...d);Wr(Wa(p),c)}}function Wr(e,t){const s=re(e)?e:[...e];for(const o of s)o.computed&&Vi(o,t);for(const o of s)o.computed||Vi(o,t)}function Vi(e,t){(e!==ht||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(We({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Kh(e,t){var s;return(s=Al.get(e))===null||s===void 0?void 0:s.get(t)}const Yh=Nn("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Na)),Qh=Hl(),Gh=Hl(!1,!0),Zh=Hl(!0),Jh=Hl(!0,!0),Hi=Xh();function Xh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const o=pe(this);for(let r=0,a=this.length;r<a;r++)wt(o,"get",r+"");const l=o[t](...s);return l===-1||l===!1?o[t](...s.map(pe)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){us();const o=pe(this)[t].apply(this,s);return ps(),o}}),e}function em(e){const t=pe(this);return wt(t,"has",e),t.hasOwnProperty(e)}function Hl(e=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?Cp:xp:t?kp:Ap).get(o))return o;const a=re(o);if(!e){if(a&&we(Hi,l))return Reflect.get(Hi,l,r);if(l==="hasOwnProperty")return em}const i=Reflect.get(o,l,r);return(Na(l)?gp.has(l):Yh(l))||(e||wt(o,"get",l),t)?i:De(i)?a&&Ha(l)?i:i.value:Pe(i)?e?Zt(i):He(i):i}}const tm=vp(),nm=vp(!0);function vp(e=!1){return function(s,o,l,r){let a=s[o];if(Ln(a)&&De(a)&&!De(l))return!1;if(!e&&(!kl(l)&&!Ln(l)&&(a=pe(a),l=pe(l)),!re(s)&&De(a)&&!De(l)))return a.value=l,!0;const i=re(s)&&Ha(o)?Number(o)<s.length:we(s,o),c=Reflect.set(s,o,l,r);return s===pe(r)&&(i?vo(l,a)&&hn(s,"set",o,l,a):hn(s,"add",o,l)),c}}function sm(e,t){const s=we(e,t),o=e[t],l=Reflect.deleteProperty(e,t);return l&&s&&hn(e,"delete",t,void 0,o),l}function om(e,t){const s=Reflect.has(e,t);return(!Na(t)||!gp.has(t))&&wt(e,"has",t),s}function lm(e){return wt(e,"iterate",re(e)?"length":ts),Reflect.ownKeys(e)}const _p={get:Qh,set:tm,deleteProperty:sm,has:om,ownKeys:lm},bp={get:Zh,set(e,t){return wl(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return wl(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},rm=We({},_p,{get:Gh,set:nm}),am=We({},bp,{get:Jh}),Ua=e=>e,ql=e=>Reflect.getPrototypeOf(e);function Go(e,t,s=!1,o=!1){e=e.__v_raw;const l=pe(e),r=pe(t);s||(t!==r&&wt(l,"get",t),wt(l,"get",r));const{has:a}=ql(l),i=o?Ua:s?Ka:_o;if(a.call(l,t))return i(e.get(t));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(t)}function Zo(e,t=!1){const s=this.__v_raw,o=pe(s),l=pe(e);return t||(e!==l&&wt(o,"has",e),wt(o,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function Jo(e,t=!1){return e=e.__v_raw,!t&&wt(pe(e),"iterate",ts),Reflect.get(e,"size",e)}function qi(e){e=pe(e);const t=pe(this);return ql(t).has.call(t,e)||(t.add(e),hn(t,"add",e,e)),this}function Wi(e,t){t=pe(t);const s=pe(this),{has:o,get:l}=ql(s);let r=o.call(s,e);r?wp(s,o,e):(e=pe(e),r=o.call(s,e));const a=l.call(s,e);return s.set(e,t),r?vo(t,a)&&hn(s,"set",e,t,a):hn(s,"add",e,t),this}function zi(e){const t=pe(this),{has:s,get:o}=ql(t);let l=s.call(t,e);l?wp(t,s,e):(e=pe(e),l=s.call(t,e));const r=o?o.call(t,e):void 0,a=t.delete(e);return l&&hn(t,"delete",e,void 0,r),a}function Ui(){const e=pe(this),t=e.size!==0,s=es(e)?new Map(e):new Set(e),o=e.clear();return t&&hn(e,"clear",void 0,void 0,s),o}function Xo(e,t){return function(o,l){const r=this,a=r.__v_raw,i=pe(a),c=t?Ua:e?Ka:_o;return!e&&wt(i,"iterate",ts),a.forEach((p,d)=>o.call(l,c(p),c(d),r))}}function el(e,t,s){return function(...o){const l=this.__v_raw,r=pe(l),a=es(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=l[e](...o),d=s?Ua:t?Ka:_o;return!t&&wt(r,"iterate",c?qr:ts),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:i?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function vn(e){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${is(e)} operation ${s}failed: target is readonly.`,pe(this))}return e==="delete"?!1:this}}function im(){const e={get(r){return Go(this,r)},get size(){return Jo(this)},has:Zo,add:qi,set:Wi,delete:zi,clear:Ui,forEach:Xo(!1,!1)},t={get(r){return Go(this,r,!1,!0)},get size(){return Jo(this)},has:Zo,add:qi,set:Wi,delete:zi,clear:Ui,forEach:Xo(!1,!0)},s={get(r){return Go(this,r,!0)},get size(){return Jo(this,!0)},has(r){return Zo.call(this,r,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Xo(!0,!1)},o={get(r){return Go(this,r,!0,!0)},get size(){return Jo(this,!0)},has(r){return Zo.call(this,r,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=el(r,!1,!1),s[r]=el(r,!0,!1),t[r]=el(r,!1,!0),o[r]=el(r,!0,!0)}),[e,s,t,o]}const[cm,um,pm,dm]=im();function Wl(e,t){const s=t?e?dm:pm:e?um:cm;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(we(s,l)&&l in o?s:o,l,r)}const fm={get:Wl(!1,!1)},hm={get:Wl(!1,!0)},mm={get:Wl(!0,!1)},ym={get:Wl(!0,!0)};function wp(e,t,s){const o=pe(s);if(o!==s&&t.call(e,o)){const l=Va(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ap=new WeakMap,kp=new WeakMap,xp=new WeakMap,Cp=new WeakMap;function gm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vm(e){return e.__v_skip||!Object.isExtensible(e)?0:gm(Va(e))}function He(e){return Ln(e)?e:zl(e,!1,_p,fm,Ap)}function _m(e){return zl(e,!1,rm,hm,kp)}function Zt(e){return zl(e,!0,bp,mm,xp)}function xs(e){return zl(e,!0,am,ym,Cp)}function zl(e,t,s,o,l){if(!Pe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=vm(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return l.set(e,i),i}function ns(e){return Ln(e)?ns(e.__v_raw):!!(e&&e.__v_isReactive)}function Ln(e){return!!(e&&e.__v_isReadonly)}function kl(e){return!!(e&&e.__v_isShallow)}function xl(e){return ns(e)||Ln(e)}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function Ul(e){return bl(e,"__v_skip",!0),e}const _o=e=>Pe(e)?He(e):e,Ka=e=>Pe(e)?Zt(e):e;function Ya(e){Sn&&ht&&(e=pe(e),yp(e.dep||(e.dep=Wa()),{target:e,type:"get",key:"value"}))}function Qa(e,t){e=pe(e);const s=e.dep;s&&Wr(s,{target:e,type:"set",key:"value",newValue:t})}function De(e){return!!(e&&e.__v_isRef===!0)}function U(e){return Ep(e,!1)}function tn(e){return Ep(e,!0)}function Ep(e,t){return De(e)?e:new bm(e,t)}class bm{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:pe(t),this._value=s?t:_o(t)}get value(){return Ya(this),this._value}set value(t){const s=this.__v_isShallow||kl(t)||Ln(t);t=s?t:pe(t),vo(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:_o(t),Qa(this,t))}}function x(e){return De(e)?e.value:e}const wm={get:(e,t,s)=>x(Reflect.get(e,t,s)),set:(e,t,s,o)=>{const l=e[t];return De(l)&&!De(s)?(l.value=s,!0):Reflect.set(e,t,s,o)}};function Bp(e){return ns(e)?e:new Proxy(e,wm)}class Am{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>Ya(this),()=>Qa(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function Dp(e){return new Am(e)}function km(e){xl(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=re(e)?new Array(e.length):{};for(const s in e)t[s]=Cm(e,s);return t}class xm{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Kh(pe(this._object),this._key)}}function Cm(e,t,s){const o=e[t];return De(o)?o:new xm(e,t,s)}var Sp;class Em{constructor(t,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Sp]=!1,this._dirty=!0,this.effect=new za(t,()=>{this._dirty||(this._dirty=!0,Qa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=pe(this);return Ya(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Sp="__v_isReadonly";function Bm(e,t,s=!1){let o,l;const r=ue(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new Em(o,l,r||!l,s);return t&&!s&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const ss=[];function ul(e){ss.push(e)}function pl(){ss.pop()}function T(e,...t){us();const s=ss.length?ss[ss.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=Dm();if(o)dn(o,s,11,[e+t.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${nr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...t];l.length&&r.push(`
`,...Sm(l)),console.warn(...r)}ps()}function Dm(){let e=ss[ss.length-1];if(!e)return[];const t=[];for(;e;){const s=t[0];s&&s.vnode===e?s.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function Sm(e){const t=[];return e.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...$m(s))}),t}function $m({vnode:e,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${nr(e.component,e.type,o)}`,r=">"+s;return e.props?[l,...Om(e.props),r]:[l+r]}function Om(e){const t=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{t.push(...$p(o,e[o]))}),s.length>3&&t.push(" ..."),t}function $p(e,t,s){return Ve(t)?(t=JSON.stringify(t),s?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${e}=${t}`]:De(t)?(t=$p(e,pe(t.value),!0),s?t:[`${e}=Ref<`,t,">"]):ue(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=pe(t),s?t:[`${e}=`,t])}function Fm(e,t){e!==void 0&&(typeof e!="number"?T(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&T(`${t} is NaN - the duration expression might be incorrect.`))}const Ga={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function dn(e,t,s,o){let l;try{l=o?e(...o):e()}catch(r){Kl(r,t,s)}return l}function It(e,t,s,o){if(ue(e)){const r=dn(e,t,s,o);return r&&ja(r)&&r.catch(a=>{Kl(a,t,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(It(e[r],t,s,o));return l}function Kl(e,t,s,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,i=Ga[s];for(;r;){const p=r.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,a,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){dn(c,null,10,[e,a,i]);return}}Pm(e,s,l,o)}function Pm(e,t,s,o=!0){{const l=Ga[t];if(s&&ul(s),T(`Unhandled error${l?` during execution of ${l}`:""}`),s&&pl(),o)throw e;console.error(e)}}let bo=!1,zr=!1;const rt=[];let Qt=0;const Bs=[];let Yt=null,An=0;const Op=Promise.resolve();let Za=null;const Tm=100;function nt(e){const t=Za||Op;return e?t.then(this?e.bind(this):e):t}function Im(e){let t=Qt+1,s=rt.length;for(;t<s;){const o=t+s>>>1;wo(rt[o])<e?t=o+1:s=o}return t}function Yl(e){(!rt.length||!rt.includes(e,bo&&e.allowRecurse?Qt+1:Qt))&&(e.id==null?rt.push(e):rt.splice(Im(e.id),0,e),Fp())}function Fp(){!bo&&!zr&&(zr=!0,Za=Op.then(Ip))}function Mm(e){const t=rt.indexOf(e);t>Qt&&rt.splice(t,1)}function Pp(e){re(e)?Bs.push(...e):(!Yt||!Yt.includes(e,e.allowRecurse?An+1:An))&&Bs.push(e),Fp()}function Ki(e,t=bo?Qt+1:0){for(e=e||new Map;t<rt.length;t++){const s=rt[t];if(s&&s.pre){if(Ja(e,s))continue;rt.splice(t,1),t--,s()}}}function Tp(e){if(Bs.length){const t=[...new Set(Bs)];if(Bs.length=0,Yt){Yt.push(...t);return}for(Yt=t,e=e||new Map,Yt.sort((s,o)=>wo(s)-wo(o)),An=0;An<Yt.length;An++)Ja(e,Yt[An])||Yt[An]();Yt=null,An=0}}const wo=e=>e.id==null?1/0:e.id,Lm=(e,t)=>{const s=wo(e)-wo(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function Ip(e){zr=!1,bo=!0,e=e||new Map,rt.sort(Lm);const t=s=>Ja(e,s);try{for(Qt=0;Qt<rt.length;Qt++){const s=rt[Qt];if(s&&s.active!==!1){if(t(s))continue;dn(s,null,14)}}}finally{Qt=0,rt.length=0,Tp(e),bo=!1,Za=null,(rt.length||Bs.length)&&Ip(e)}}function Ja(e,t){if(!e.has(t))e.set(t,1);else{const s=e.get(t);if(s>Tm){const o=t.ownerInstance,l=o&&Co(o.type);return T(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,s+1)}}let $n=!1;const ws=new Set;up().__VUE_HMR_RUNTIME__={createRecord:cr(Mp),rerender:cr(jm),reload:cr(Vm)};const cs=new Map;function Rm(e){const t=e.type.__hmrId;let s=cs.get(t);s||(Mp(t,e.type),s=cs.get(t)),s.instances.add(e)}function Nm(e){cs.get(e.type.__hmrId).instances.delete(e)}function Mp(e,t){return cs.has(e)?!1:(cs.set(e,{initialDef:oo(t),instances:new Set}),!0)}function oo(e){return md(e)?e.__vccOpts:e}function jm(e,t){const s=cs.get(e);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,oo(o.type).render=t),o.renderCache=[],$n=!0,o.update(),$n=!1}))}function Vm(e,t){const s=cs.get(e);if(!s)return;t=oo(t),Yi(s.initialDef,t);const o=[...s.instances];for(const l of o){const r=oo(l.type);ws.has(r)||(r!==s.initialDef&&Yi(r,t),ws.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(ws.add(r),l.ceReload(t.styles),ws.delete(r)):l.parent?Yl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Pp(()=>{for(const l of o)ws.delete(oo(l.type))})}function Yi(e,t){We(e,t);for(const s in e)s!=="__file"&&!(s in t)&&delete e[s]}function cr(e){return(t,s)=>{try{return e(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Gt,eo=[],Ur=!1;function No(e,...t){Gt?Gt.emit(e,...t):Ur||eo.push({event:e,args:t})}function Lp(e,t){var s,o;Gt=e,Gt?(Gt.enabled=!0,eo.forEach(({event:l,args:r})=>Gt.emit(l,...r)),eo=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Lp(r,t)}),setTimeout(()=>{Gt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ur=!0,eo=[])},3e3)):(Ur=!0,eo=[])}function Hm(e,t){No("app:init",e,t,{Fragment:$e,Text:Wo,Comment:Xe,Static:dl})}function qm(e){No("app:unmount",e)}const Kr=Xa("component:added"),Rp=Xa("component:updated"),Wm=Xa("component:removed"),zm=e=>{Gt&&typeof Gt.cleanupBuffer=="function"&&!Gt.cleanupBuffer(e)&&Wm(e)};function Xa(e){return t=>{No(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Um=Np("perf:start"),Km=Np("perf:end");function Np(e){return(t,s,o)=>{No(e,t.appContext.app,t.uid,t,s,o)}}function Ym(e,t,s){No("component:emit",e.appContext.app,e,t,s)}function Qm(e,t,...s){if(e.isUnmounted)return;const o=e.vnode.props||Le;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(zn(t)in f))&&T(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${zn(t)}" prop.`);else{const h=d[t];ue(h)&&(h(...s)||T(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=s;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=o[d]||Le;h&&(l=s.map(y=>Ve(y)?y.trim():y)),f&&(l=s.map(Vr))}Ym(e,t,l);{const d=t.toLowerCase();d!==t&&o[zn(d)]&&T(`Event "${d}" is emitted in component ${nr(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${fn(t)}" instead of "${t}".`)}let i,c=o[i=zn(t)]||o[i=zn(en(t))];!c&&r&&(c=o[i=zn(fn(t))]),c&&It(c,e,6,l);const p=o[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,It(p,e,6,l)}}function jp(e,t,s=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!ue(e)){const c=p=>{const d=jp(p,t,!0);d&&(i=!0,We(a,d))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Pe(e)&&o.set(e,null),null):(re(r)?r.forEach(c=>a[c]=null):We(a,r),Pe(e)&&o.set(e,a),a)}function Ql(e,t){return!e||!Lo(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(e,t[0].toLowerCase()+t.slice(1))||we(e,fn(t))||we(e,t))}let Je=null,Gl=null;function Cl(e){const t=Je;return Je=e,Gl=e&&e.type.__scopeId||null,t}function MB(e){Gl=e}function LB(){Gl=null}function N(e,t=Je,s){if(!t||e._n)return e;const o=(...l)=>{o._d&&ac(-1);const r=Cl(t);let a;try{a=e(...l)}finally{Cl(r),o._d&&ac(1)}return Rp(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let Yr=!1;function El(){Yr=!0}function ur(e){const{type:t,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:p,render:d,renderCache:f,data:h,setupState:y,ctx:m,inheritAttrs:v}=e;let _,k;const w=Cl(e);Yr=!1;try{if(s.shapeFlag&4){const O=l||o;_=Ht(d.call(O,O,f,r,y,h,m)),k=c}else{const O=t;c===r&&El(),_=Ht(O.length>1?O(r,{get attrs(){return El(),c},slots:i,emit:p}):O(r,null)),k=t.props?c:Zm(c)}}catch(O){ro.length=0,Kl(O,e,1),_=I(Xe)}let A=_,C;if(_.patchFlag>0&&_.patchFlag&2048&&([A,C]=Gm(_)),k&&v!==!1){const O=Object.keys(k),{shapeFlag:M}=A;if(O.length){if(M&7)a&&O.some(_l)&&(k=Jm(k,a)),A=Wt(A,k);else if(!Yr&&A.type!==Xe){const q=Object.keys(c),$=[],V=[];for(let J=0,ie=q.length;J<ie;J++){const K=q[J];Lo(K)?_l(K)||$.push(K[2].toLowerCase()+K.slice(3)):V.push(K)}V.length&&T(`Extraneous non-props attributes (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),$.length&&T(`Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(Qi(A)||T("Runtime directive used on component with non-element root node. The directives will not function as intended."),A=Wt(A),A.dirs=A.dirs?A.dirs.concat(s.dirs):s.dirs),s.transition&&(Qi(A)||T("Component inside <Transition> renders non-element root node that cannot be animated."),A.transition=s.transition),C?C(A):_=A,Cl(w),_}const Gm=e=>{const t=e.children,s=e.dynamicChildren,o=Vp(t);if(!o)return[e,void 0];const l=t.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{t[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[Ht(o),a]};function Vp(e){let t;for(let s=0;s<e.length;s++){const o=e[s];if(mn(o)){if(o.type!==Xe||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Zm=e=>{let t;for(const s in e)(s==="class"||s==="style"||Lo(s))&&((t||(t={}))[s]=e[s]);return t},Jm=(e,t)=>{const s={};for(const o in e)(!_l(o)||!(o.slice(9)in t))&&(s[o]=e[o]);return s},Qi=e=>e.shapeFlag&7||e.type===Xe;function Xm(e,t,s){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=t,p=r.emitsOptions;if((l||i)&&$n||t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Gi(o,a,p):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(a[h]!==o[h]&&!Ql(p,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Gi(o,a,p):!0:!!a;return!1}function Gi(e,t,s){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==e[r]&&!Ql(s,r))return!0}return!1}function ey({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const Hp=e=>e.__isSuspense;function ty(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Pp(e)}function Et(e,t){if(!ze)T("provide() can only be used inside setup().");else{let s=ze.provides;const o=ze.parent&&ze.parent.provides;o===s&&(s=ze.provides=Object.create(o)),s[e]=t}}function Y(e,t,s=!1){const o=ze||Je;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&ue(t)?t.call(o.proxy):t;T(`injection "${String(e)}" not found.`)}else T("inject() can only be used inside setup() or functional components.")}function ds(e,t){return ei(e,null,t)}const tl={};function me(e,t,s){return ue(t)||T("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ei(e,t,s)}function ei(e,t,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Le){t||(s!==void 0&&T('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&T('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=C=>{T("Invalid watch source: ",C,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=qa()===(ze==null?void 0:ze.scope)?ze:null;let p,d=!1,f=!1;if(De(e)?(p=()=>e.value,d=kl(e)):ns(e)?(p=()=>e,o=!0):re(e)?(f=!0,d=e.some(C=>ns(C)||kl(C)),p=()=>e.map(C=>{if(De(C))return C.value;if(ns(C))return Zn(C);if(ue(C))return dn(C,c,2);i(C)})):ue(e)?t?p=()=>dn(e,c,2):p=()=>{if(!(c&&c.isUnmounted))return h&&h(),It(e,c,3,[y])}:(p=_t,i(e)),t&&o){const C=p;p=()=>Zn(C())}let h,y=C=>{h=w.onStop=()=>{dn(C,c,4)}},m;if(xo)if(y=_t,t?s&&It(t,c,3,[p(),f?[]:void 0,y]):p(),l==="sync"){const C=ag();m=C.__watcherHandles||(C.__watcherHandles=[])}else return _t;let v=f?new Array(e.length).fill(tl):tl;const _=()=>{if(w.active)if(t){const C=w.run();(o||d||(f?C.some((O,M)=>vo(O,v[M])):vo(C,v)))&&(h&&h(),It(t,c,3,[C,v===tl?void 0:f&&v[0]===tl?[]:v,y]),v=C)}else w.run()};_.allowRecurse=!!t;let k;l==="sync"?k=_:l==="post"?k=()=>tt(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),k=()=>Yl(_));const w=new za(p,k);w.onTrack=r,w.onTrigger=a,t?s?_():v=w.run():l==="post"?tt(w.run.bind(w),c&&c.suspense):w.run();const A=()=>{w.stop(),c&&c.scope&&Ra(c.scope.effects,w)};return m&&m.push(A),A}function ny(e,t,s){const o=this.proxy,l=Ve(e)?e.includes(".")?qp(o,e):()=>o[e]:e.bind(o,o);let r;ue(t)?r=t:(r=t.handler,s=t);const a=ze;Ts(this);const i=ei(l,r.bind(o),s);return a?Ts(a):ls(),i}function qp(e,t){const s=t.split(".");return()=>{let o=e;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function Zn(e,t){if(!Pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),De(e))Zn(e.value,t);else if(re(e))for(let s=0;s<e.length;s++)Zn(e[s],t);else if(ap(e)||es(e))e.forEach(s=>{Zn(s,t)});else if(cp(e))for(const s in e)Zn(e[s],t);return e}function Wp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fs(()=>{e.isMounted=!0}),Vo(()=>{e.isUnmounting=!0}),e}const Ot=[Function,Array],sy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ot,onEnter:Ot,onAfterEnter:Ot,onEnterCancelled:Ot,onBeforeLeave:Ot,onLeave:Ot,onAfterLeave:Ot,onLeaveCancelled:Ot,onBeforeAppear:Ot,onAppear:Ot,onAfterAppear:Ot,onAppearCancelled:Ot},setup(e,{slots:t}){const s=$t(),o=Wp();let l;return()=>{const r=t.default&&ti(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let v=!1;for(const _ of r)if(_.type!==Xe){if(v){T("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=_,v=!0}}const i=pe(e),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&T(`invalid <transition> mode: ${c}`),o.isLeaving)return pr(a);const p=Zi(a);if(!p)return pr(a);const d=Ao(p,i,o,s);Ps(p,d);const f=s.subTree,h=f&&Zi(f);let y=!1;const{getTransitionKey:m}=p.type;if(m){const v=m();l===void 0?l=v:v!==l&&(l=v,y=!0)}if(h&&h.type!==Xe&&(!Bn(p,h)||y)){const v=Ao(h,i,o,s);if(Ps(h,v),c==="out-in")return o.isLeaving=!0,v.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},pr(a);c==="in-out"&&p.type!==Xe&&(v.delayLeave=(_,k,w)=>{const A=zp(o,h);A[String(h.key)]=h,_._leaveCb=()=>{k(),_._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=w})}return a}}},oy=sy;function zp(e,t){const{leavingVNodes:s}=e;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function Ao(e,t,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:v,onAppear:_,onAfterAppear:k,onAppearCancelled:w}=t,A=String(e.key),C=zp(s,e),O=($,V)=>{$&&It($,o,9,V)},M=($,V)=>{const J=V[1];O($,V),re($)?$.every(ie=>ie.length<=1)&&J():$.length<=1&&J()},q={mode:r,persisted:a,beforeEnter($){let V=i;if(!s.isMounted)if(l)V=v||i;else return;$._leaveCb&&$._leaveCb(!0);const J=C[A];J&&Bn(e,J)&&J.el._leaveCb&&J.el._leaveCb(),O(V,[$])},enter($){let V=c,J=p,ie=d;if(!s.isMounted)if(l)V=_||c,J=k||p,ie=w||d;else return;let K=!1;const ve=$._enterCb=Se=>{K||(K=!0,Se?O(ie,[$]):O(J,[$]),q.delayedLeave&&q.delayedLeave(),$._enterCb=void 0)};V?M(V,[$,ve]):ve()},leave($,V){const J=String(e.key);if($._enterCb&&$._enterCb(!0),s.isUnmounting)return V();O(f,[$]);let ie=!1;const K=$._leaveCb=ve=>{ie||(ie=!0,V(),ve?O(m,[$]):O(y,[$]),$._leaveCb=void 0,C[J]===e&&delete C[J])};C[J]=e,h?M(h,[$,K]):K()},clone($){return Ao($,t,s,o)}};return q}function pr(e){if(jo(e))return e=Wt(e),e.children=null,e}function Zi(e){return jo(e)?e.children?e.children[0]:void 0:e}function Ps(e,t){e.shapeFlag&6&&e.component?Ps(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ti(e,t=!1,s){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===$e?(a.patchFlag&128&&l++,o=o.concat(ti(a.children,t,i))):(t||a.type!==Xe)&&o.push(i!=null?Wt(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Be(e){return ue(e)?{setup:e,name:e.name}:e}const Ds=e=>!!e.type.__asyncLoader,jo=e=>e.type.__isKeepAlive,ly={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=$t(),o=s.ctx;if(!o.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:p,um:d,o:{createElement:f}}}=o,h=f("div");o.activate=(w,A,C,O,M)=>{const q=w.component;p(w,A,C,0,i),c(q.vnode,w,A,C,q,i,O,w.slotScopeIds,M),tt(()=>{q.isDeactivated=!1,q.a&&Cn(q.a);const $=w.props&&w.props.onVnodeMounted;$&&Ft($,q.parent,w)},i),Kr(q)},o.deactivate=w=>{const A=w.component;p(w,h,null,1,i),tt(()=>{A.da&&Cn(A.da);const C=w.props&&w.props.onVnodeUnmounted;C&&Ft(C,A.parent,w),A.isDeactivated=!0},i),Kr(A)};function y(w){dr(w),d(w,s,i,!0)}function m(w){l.forEach((A,C)=>{const O=Co(A.type);O&&(!w||!w(O))&&v(C)})}function v(w){const A=l.get(w);!a||!Bn(A,a)?y(A):a&&dr(a),l.delete(w),r.delete(w)}me(()=>[e.include,e.exclude],([w,A])=>{w&&m(C=>to(w,C)),A&&m(C=>!to(A,C))},{flush:"post",deep:!0});let _=null;const k=()=>{_!=null&&l.set(_,fr(s.subTree))};return fs(k),Jl(k),Vo(()=>{l.forEach(w=>{const{subTree:A,suspense:C}=s,O=fr(A);if(w.type===O.type&&w.key===O.key){dr(O);const M=O.component.da;M&&tt(M,C);return}y(w)})}),()=>{if(_=null,!t.default)return null;const w=t.default(),A=w[0];if(w.length>1)return T("KeepAlive should contain exactly one component child."),a=null,w;if(!mn(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return a=null,A;let C=fr(A);const O=C.type,M=Co(Ds(C)?C.type.__asyncResolved||{}:O),{include:q,exclude:$,max:V}=e;if(q&&(!M||!to(q,M))||$&&M&&to($,M))return a=C,A;const J=C.key==null?O:C.key,ie=l.get(J);return C.el&&(C=Wt(C),A.shapeFlag&128&&(A.ssContent=C)),_=J,ie?(C.el=ie.el,C.component=ie.component,C.transition&&Ps(C,C.transition),C.shapeFlag|=512,r.delete(J),r.add(J)):(r.add(J),V&&r.size>parseInt(V,10)&&v(r.values().next().value)),C.shapeFlag|=256,a=C,Hp(A.type)?A:C}}},Up=ly;function to(e,t){return re(e)?e.some(s=>to(s,t)):Ve(e)?e.split(",").includes(t):Rh(e)?e.test(t):!1}function Kp(e,t){Qp(e,"a",t)}function Yp(e,t){Qp(e,"da",t)}function Qp(e,t,s=ze){const o=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Zl(t,o,s),s){let l=s.parent;for(;l&&l.parent;)jo(l.parent.vnode)&&ry(o,t,s,l),l=l.parent}}function ry(e,t,s,o){const l=Zl(t,e,o,!0);Xl(()=>{Ra(o[t],l)},s)}function dr(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function fr(e){return e.shapeFlag&128?e.ssContent:e}function Zl(e,t,s=ze,o=!1){if(s){const l=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;us(),Ts(s);const i=It(t,s,e,a);return ls(),ps(),i});return o?l.unshift(r):l.push(r),r}else{const l=zn(Ga[e].replace(/ hook$/,""));T(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const yn=e=>(t,s=ze)=>(!xo||e==="sp")&&Zl(e,(...o)=>t(...o),s),ay=yn("bm"),fs=yn("m"),iy=yn("bu"),Jl=yn("u"),Vo=yn("bum"),Xl=yn("um"),cy=yn("sp"),uy=yn("rtg"),py=yn("rtc");function dy(e,t=ze){Zl("ec",e,t)}function Gp(e){Nh(e)&&T("Do not use built-in directive ids as custom directive id: "+e)}function Ho(e,t){const s=Je;if(s===null)return T("withDirectives can only be used inside render functions."),e;const o=tr(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,i,c,p=Le]=t[r];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&Zn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:p}))}return e}function jn(e,t,s,o){const l=e.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(us(),It(c,s,8,[e.el,i,e,t]),ps())}}const Qr="components",fy="directives";function Bl(e,t){return Zp(Qr,e,!0,t)||e}const hy=Symbol();function Gr(e){return Zp(fy,e)}function Zp(e,t,s=!0,o=!1){const l=Je||ze;if(l){const r=l.type;if(e===Qr){const i=Co(r,!1);if(i&&(i===t||i===en(t)||i===is(en(t))))return r}const a=Ji(l[e]||r[e],t)||Ji(l.appContext[e],t);if(!a&&o)return r;if(s&&!a){const i=e===Qr?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";T(`Failed to resolve ${e.slice(0,-1)}: ${t}${i}`)}return a}else T(`resolve${is(e.slice(0,-1))} can only be used in render() or setup().`)}function Ji(e,t){return e&&(e[t]||e[en(t)]||e[is(en(t))])}function qo(e,t,s,o){let l;const r=s&&s[o];if(re(e)||Ve(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||T(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Pe(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>t(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const p=a[i];l[i]=t(e[p],p,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function Mt(e,t,s={},o,l){if(Je.isCE||Je.parent&&Ds(Je.parent)&&Je.parent.isCE)return t!=="default"&&(s.name=t),I("slot",s,o&&o());let r=e[t];r&&r.length>1&&(T("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),B();const a=r&&Jp(r(s)),i=te($e,{key:s.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Jp(e){return e.some(t=>mn(t)?!(t.type===Xe||t.type===$e&&!Jp(t.children)):!0)?e:null}const Zr=e=>e?dd(e)?tr(e)||e.proxy:Zr(e.parent):null,os=We(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>xs(e.props),$attrs:e=>xs(e.attrs),$slots:e=>xs(e.slots),$refs:e=>xs(e.refs),$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$emit:e=>e.emit,$options:e=>si(e),$forceUpdate:e=>e.f||(e.f=()=>Yl(e.update)),$nextTick:e=>e.n||(e.n=nt.bind(e.proxy)),$watch:e=>ny.bind(e)}),ni=e=>e==="_"||e==="$",hr=(e,t)=>e!==Le&&!e.__isScriptSetup&&we(e,t),Xp={get({_:e},t){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const y=a[t];if(y!==void 0)switch(y){case 1:return o[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(hr(o,t))return a[t]=1,o[t];if(l!==Le&&we(l,t))return a[t]=2,l[t];if((p=e.propsOptions[0])&&we(p,t))return a[t]=3,r[t];if(s!==Le&&we(s,t))return a[t]=4,s[t];Jr&&(a[t]=0)}}const d=os[t];let f,h;if(d)return t==="$attrs"&&(wt(e,"get",t),El()),d(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(s!==Le&&we(s,t))return a[t]=4,s[t];if(h=c.config.globalProperties,we(h,t))return h[t];Je&&(!Ve(t)||t.indexOf("__v")!==0)&&(l!==Le&&ni(t[0])&&we(l,t)?T(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Je&&T(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,s){const{data:o,setupState:l,ctx:r}=e;return hr(l,t)?(l[t]=s,!0):l.__isScriptSetup&&we(l,t)?(T(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Le&&we(o,t)?(o[t]=s,!0):we(e.props,t)?(T(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(T(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:s}):r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||e!==Le&&we(e,a)||hr(t,a)||(i=r[0])&&we(i,a)||we(o,a)||we(os,a)||we(l.config.globalProperties,a)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:we(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};Xp.ownKeys=e=>(T("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function my(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(os).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>os[s](e),set:_t})}),t}function yy(e){const{ctx:t,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:_t})})}function gy(e){const{ctx:t,setupState:s}=e;Object.keys(pe(s)).forEach(o=>{if(!s.__isScriptSetup){if(ni(o[0])){T(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:_t})}})}function vy(){const e=Object.create(null);return(t,s)=>{e[s]?T(`${t} property "${s}" is already defined in ${e[s]}.`):e[s]=t}}let Jr=!0;function _y(e){const t=si(e),s=e.proxy,o=e.ctx;Jr=!1,t.beforeCreate&&Xi(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:p,created:d,beforeMount:f,mounted:h,beforeUpdate:y,updated:m,activated:v,deactivated:_,beforeDestroy:k,beforeUnmount:w,destroyed:A,unmounted:C,render:O,renderTracked:M,renderTriggered:q,errorCaptured:$,serverPrefetch:V,expose:J,inheritAttrs:ie,components:K,directives:ve,filters:Se}=t,xe=vy();{const[Q]=e.propsOptions;if(Q)for(const ae in Q)xe("Props",ae)}if(p&&by(p,o,xe,e.appContext.config.unwrapInjectedRef),a)for(const Q in a){const ae=a[Q];ue(ae)?(Object.defineProperty(o,Q,{value:ae.bind(s),configurable:!0,enumerable:!0,writable:!0}),xe("Methods",Q)):T(`Method "${Q}" has type "${typeof ae}" in the component definition. Did you reference the function correctly?`)}if(l){ue(l)||T("The data option must be a function. Plain object usage is no longer supported.");const Q=l.call(s,s);if(ja(Q)&&T("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Pe(Q))T("data() should return an object.");else{e.data=He(Q);for(const ae in Q)xe("Data",ae),ni(ae[0])||Object.defineProperty(o,ae,{configurable:!0,enumerable:!0,get:()=>Q[ae],set:_t})}}if(Jr=!0,r)for(const Q in r){const ae=r[Q],ge=ue(ae)?ae.bind(s,s):ue(ae.get)?ae.get.bind(s,s):_t;ge===_t&&T(`Computed property "${Q}" has no getter.`);const Ie=!ue(ae)&&ue(ae.set)?ae.set.bind(s):()=>{T(`Write operation failed: computed property "${Q}" is readonly.`)},At=S({get:ge,set:Ie});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>At.value,set:ot=>At.value=ot}),xe("Computed",Q)}if(i)for(const Q in i)ed(i[Q],o,s,Q);if(c){const Q=ue(c)?c.call(s):c;Reflect.ownKeys(Q).forEach(ae=>{Et(ae,Q[ae])})}d&&Xi(d,e,"c");function Re(Q,ae){re(ae)?ae.forEach(ge=>Q(ge.bind(s))):ae&&Q(ae.bind(s))}if(Re(ay,f),Re(fs,h),Re(iy,y),Re(Jl,m),Re(Kp,v),Re(Yp,_),Re(dy,$),Re(py,M),Re(uy,q),Re(Vo,w),Re(Xl,C),Re(cy,V),re(J))if(J.length){const Q=e.exposed||(e.exposed={});J.forEach(ae=>{Object.defineProperty(Q,ae,{get:()=>s[ae],set:ge=>s[ae]=ge})})}else e.exposed||(e.exposed={});O&&e.render===_t&&(e.render=O),ie!=null&&(e.inheritAttrs=ie),K&&(e.components=K),ve&&(e.directives=ve)}function by(e,t,s=_t,o=!1){re(e)&&(e=Xr(e));for(const l in e){const r=e[l];let a;Pe(r)?"default"in r?a=Y(r.from||l,r.default,!0):a=Y(r.from||l):a=Y(r),De(a)?o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(T(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[l]=a):t[l]=a,s("Inject",l)}}function Xi(e,t,s){It(re(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,s)}function ed(e,t,s,o){const l=o.includes(".")?qp(s,o):()=>s[o];if(Ve(e)){const r=t[e];ue(r)?me(l,r):T(`Invalid watch handler specified by key "${e}"`,r)}else if(ue(e))me(l,e.bind(s));else if(Pe(e))if(re(e))e.forEach(r=>ed(r,t,s,o));else{const r=ue(e.handler)?e.handler.bind(s):t[e.handler];ue(r)?me(l,r,e):T(`Invalid watch handler specified by key "${e.handler}"`,r)}else T(`Invalid watch option: "${o}"`,e)}function si(e){const t=e.type,{mixins:s,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(t);let c;return i?c=i:!l.length&&!s&&!o?c=t:(c={},l.length&&l.forEach(p=>Dl(c,p,a,!0)),Dl(c,t,a)),Pe(t)&&r.set(t,c),c}function Dl(e,t,s,o=!1){const{mixins:l,extends:r}=t;r&&Dl(e,r,s,!0),l&&l.forEach(a=>Dl(e,a,s,!0));for(const a in t)if(o&&a==="expose")T('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=wy[a]||s&&s[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const wy={data:ec,props:Un,emits:Un,methods:Un,computed:Un,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Un,directives:Un,watch:ky,provide:ec,inject:Ay};function ec(e,t){return t?e?function(){return We(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function Ay(e,t){return Un(Xr(e),Xr(t))}function Xr(e){if(re(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function pt(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?We(We(Object.create(null),e),t):t}function ky(e,t){if(!e)return t;if(!t)return e;const s=We(Object.create(null),e);for(const o in t)s[o]=pt(e[o],t[o]);return s}function xy(e,t,s,o=!1){const l={},r={};bl(r,er,1),e.propsDefaults=Object.create(null),td(e,t,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);sd(t||{},l,e),s?e.props=o?l:_m(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function Cy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Ey(e,t,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=pe(l),[c]=e.propsOptions;let p=!1;if(!Cy(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Ql(e.emitsOptions,h))continue;const y=t[h];if(c)if(we(r,h))y!==r[h]&&(r[h]=y,p=!0);else{const m=en(h);l[m]=ea(c,i,m,y,e,!1)}else y!==r[h]&&(r[h]=y,p=!0)}}}else{td(e,t,l,r)&&(p=!0);let d;for(const f in i)(!t||!we(t,f)&&((d=fn(f))===f||!we(t,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=ea(c,i,f,void 0,e,!0)):delete l[f]);if(r!==i)for(const f in r)(!t||!we(t,f))&&(delete r[f],p=!0)}p&&hn(e,"set","$attrs"),sd(t||{},l,e)}function td(e,t,s,o){const[l,r]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(cl(c))continue;const p=t[c];let d;l&&we(l,d=en(c))?!r||!r.includes(d)?s[d]=p:(i||(i={}))[d]=p:Ql(e.emitsOptions,c)||(!(c in o)||p!==o[c])&&(o[c]=p,a=!0)}if(r){const c=pe(s),p=i||Le;for(let d=0;d<r.length;d++){const f=r[d];s[f]=ea(l,c,f,p[f],e,!we(p,f))}}return a}function ea(e,t,s,o,l,r){const a=e[s];if(a!=null){const i=we(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:p}=l;s in p?o=p[s]:(Ts(l),o=p[s]=c.call(null,t),ls())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===fn(s))&&(o=!0))}return o}function nd(e,t,s=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!ue(e)){const d=f=>{c=!0;const[h,y]=nd(f,t,!0);We(a,h),y&&i.push(...y)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Pe(e)&&o.set(e,Es),Es;if(re(r))for(let d=0;d<r.length;d++){Ve(r[d])||T("props must be strings when using array syntax.",r[d]);const f=en(r[d]);tc(f)&&(a[f]=Le)}else if(r){Pe(r)||T("invalid props options",r);for(const d in r){const f=en(d);if(tc(f)){const h=r[d],y=a[f]=re(h)||ue(h)?{type:h}:Object.assign({},h);if(y){const m=sc(Boolean,y.type),v=sc(String,y.type);y[0]=m>-1,y[1]=v<0||m<v,(m>-1||we(y,"default"))&&i.push(f)}}}}const p=[a,i];return Pe(e)&&o.set(e,p),p}function tc(e){return e[0]!=="$"?!0:(T(`Invalid prop name: "${e}" is a reserved property.`),!1)}function ta(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function nc(e,t){return ta(e)===ta(t)}function sc(e,t){return re(t)?t.findIndex(s=>nc(s,e)):ue(t)&&nc(t,e)?0:-1}function sd(e,t,s){const o=pe(t),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&By(r,o[r],a,!we(e,r)&&!we(e,fn(r)))}}function By(e,t,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){T('Missing required prop: "'+e+'"');return}if(!(t==null&&!s.required)){if(l!=null&&l!==!0){let i=!1;const c=re(l)?l:[l],p=[];for(let d=0;d<c.length&&!i;d++){const{valid:f,expectedType:h}=Sy(t,c[d]);p.push(h||""),i=f}if(!i){T($y(e,t,p));return}}a&&!a(t)&&T('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Dy=Nn("String,Number,Boolean,Function,Symbol,BigInt");function Sy(e,t){let s;const o=ta(t);if(Dy(o)){const l=typeof e;s=l===o.toLowerCase(),!s&&l==="object"&&(s=e instanceof t)}else o==="Object"?s=Pe(e):o==="Array"?s=re(e):o==="null"?s=e===null:s=e instanceof t;return{valid:s,expectedType:o}}function $y(e,t,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(is).join(" | ")}`;const l=s[0],r=Va(t),a=oc(t,l),i=oc(t,r);return s.length===1&&lc(l)&&!Oy(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,lc(r)&&(o+=`with value ${i}.`),o}function oc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function lc(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function Oy(...e){return e.some(t=>t.toLowerCase()==="boolean")}const od=e=>e[0]==="_"||e==="$stable",oi=e=>re(e)?e.map(Ht):[Ht(e)],Fy=(e,t,s)=>{if(t._n)return t;const o=N((...l)=>(ze&&T(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),oi(t(...l))),s);return o._c=!1,o},ld=(e,t,s)=>{const o=e._ctx;for(const l in e){if(od(l))continue;const r=e[l];if(ue(r))t[l]=Fy(l,r,o);else if(r!=null){T(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=oi(r);t[l]=()=>a}}},rd=(e,t)=>{jo(e.vnode)||T("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=oi(t);e.slots.default=()=>s},Py=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=pe(t),bl(t,"_",s)):ld(t,e.slots={})}else e.slots={},t&&rd(e,t);bl(e.slots,er,1)},Ty=(e,t,s)=>{const{vnode:o,slots:l}=e;let r=!0,a=Le;if(o.shapeFlag&32){const i=t._;i?$n?We(l,t):s&&i===1?r=!1:(We(l,t),!s&&i===1&&delete l._):(r=!t.$stable,ld(t,l)),a=t}else t&&(rd(e,t),a={default:1});if(r)for(const i in l)!od(i)&&!(i in a)&&delete l[i]};function ad(){return{app:null,config:{isNativeTag:rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iy=0;function My(e,t){return function(o,l=null){ue(o)||(o=Object.assign({},o)),l!=null&&!Pe(l)&&(T("root props passed to app.mount() must be an object."),l=null);const r=ad(),a=new Set;let i=!1;const c=r.app={_uid:Iy++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:$l,get config(){return r.config},set config(p){T("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return a.has(p)?T("Plugin has already been applied to target app."):p&&ue(p.install)?(a.add(p),p.install(c,...d)):ue(p)?(a.add(p),p(c,...d)):T('A plugin must either be a function or an object with an "install" function.'),c},mixin(p){return r.mixins.includes(p)?T("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),c},component(p,d){return oa(p,r.config),d?(r.components[p]&&T(`Component "${p}" has already been registered in target app.`),r.components[p]=d,c):r.components[p]},directive(p,d){return Gp(p),d?(r.directives[p]&&T(`Directive "${p}" has already been registered in target app.`),r.directives[p]=d,c):r.directives[p]},mount(p,d,f){if(i)T("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&T("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=I(o,l);return h.appContext=r,r.reload=()=>{e(Wt(h),p,f)},d&&t?t(h,p):e(h,p,f),i=!0,c._container=p,p.__vue_app__=c,c._instance=h.component,Hm(c,$l),tr(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,qm(c),delete c._container.__vue_app__):T("Cannot unmount an app that is not mounted.")},provide(p,d){return p in r.provides&&T(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=d,c}};return c}}function na(e,t,s,o,l=!1){if(re(e)){e.forEach((h,y)=>na(h,t&&(re(t)?t[y]:t),s,o,l));return}if(Ds(o)&&!l)return;const r=o.shapeFlag&4?tr(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){T("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=i.refs===Le?i.refs={}:i.refs,f=i.setupState;if(p!=null&&p!==c&&(Ve(p)?(d[p]=null,we(f,p)&&(f[p]=null)):De(p)&&(p.value=null)),ue(c))dn(c,i,12,[a,d]);else{const h=Ve(c),y=De(c);if(h||y){const m=()=>{if(e.f){const v=h?we(f,c)?f[c]:d[c]:c.value;l?re(v)&&Ra(v,r):re(v)?v.includes(r)||v.push(r):h?(d[c]=[r],we(f,c)&&(f[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else h?(d[c]=a,we(f,c)&&(f[c]=a)):y?(c.value=a,e.k&&(d[e.k]=a)):T("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,tt(m,s)):m()}else T("Invalid template ref type:",c,`(${typeof c})`)}}let Vs,En;function on(e,t){e.appContext.config.performance&&Sl()&&En.mark(`vue-${t}-${e.uid}`),Um(e,t,Sl()?En.now():Date.now())}function ln(e,t){if(e.appContext.config.performance&&Sl()){const s=`vue-${t}-${e.uid}`,o=s+":end";En.mark(o),En.measure(`<${nr(e,e.type)}> ${t}`,s,o),En.clearMarks(s),En.clearMarks(o)}Km(e,t,Sl()?En.now():Date.now())}function Sl(){return Vs!==void 0||(typeof window<"u"&&window.performance?(Vs=!0,En=window.performance):Vs=!1),Vs}function Ly(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const tt=ty;function Ry(e){return Ny(e)}function Ny(e,t){Ly();const s=up();s.__VUE__=!0,Lp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:p,setElementText:d,parentNode:f,nextSibling:h,setScopeId:y=_t,insertStaticContent:m}=e,v=(g,b,E,P=null,F=null,j=null,z=!1,R=null,H=$n?!1:!!b.dynamicChildren)=>{if(g===b)return;g&&!Bn(g,b)&&(P=X(g),yt(g,F,j,!0),g=null),b.patchFlag===-2&&(H=!1,b.dynamicChildren=null);const{type:L,ref:ne,shapeFlag:ee}=b;switch(L){case Wo:_(g,b,E,P);break;case Xe:k(g,b,E,P);break;case dl:g==null?w(b,E,P,z):A(g,b,E,z);break;case $e:ve(g,b,E,P,F,j,z,R,H);break;default:ee&1?M(g,b,E,P,F,j,z,R,H):ee&6?Se(g,b,E,P,F,j,z,R,H):ee&64||ee&128?L.process(g,b,E,P,F,j,z,R,H,ke):T("Invalid VNode type:",L,`(${typeof L})`)}ne!=null&&F&&na(ne,g&&g.ref,j,b||g,!b)},_=(g,b,E,P)=>{if(g==null)o(b.el=i(b.children),E,P);else{const F=b.el=g.el;b.children!==g.children&&p(F,b.children)}},k=(g,b,E,P)=>{g==null?o(b.el=c(b.children||""),E,P):b.el=g.el},w=(g,b,E,P)=>{[g.el,g.anchor]=m(g.children,b,E,P,g.el,g.anchor)},A=(g,b,E,P)=>{if(b.children!==g.children){const F=h(g.anchor);O(g),[b.el,b.anchor]=m(b.children,E,F,P)}else b.el=g.el,b.anchor=g.anchor},C=({el:g,anchor:b},E,P)=>{let F;for(;g&&g!==b;)F=h(g),o(g,E,P),g=F;o(b,E,P)},O=({el:g,anchor:b})=>{let E;for(;g&&g!==b;)E=h(g),l(g),g=E;l(b)},M=(g,b,E,P,F,j,z,R,H)=>{z=z||b.type==="svg",g==null?q(b,E,P,F,j,z,R,H):J(g,b,F,j,z,R,H)},q=(g,b,E,P,F,j,z,R)=>{let H,L;const{type:ne,props:ee,shapeFlag:le,transition:fe,dirs:Ae}=g;if(H=g.el=a(g.type,j,ee&&ee.is,ee),le&8?d(H,g.children):le&16&&V(g.children,H,null,P,F,j&&ne!=="foreignObject",z,R),Ae&&jn(g,null,P,"created"),$(H,g,g.scopeId,z,P),ee){for(const Me in ee)Me!=="value"&&!cl(Me)&&r(H,Me,null,ee[Me],j,g.children,P,F,W);"value"in ee&&r(H,"value",null,ee.value),(L=ee.onVnodeBeforeMount)&&Ft(L,P,g)}Object.defineProperty(H,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(H,"__vueParentComponent",{value:P,enumerable:!1}),Ae&&jn(g,null,P,"beforeMount");const Ne=(!F||F&&!F.pendingBranch)&&fe&&!fe.persisted;Ne&&fe.beforeEnter(H),o(H,b,E),((L=ee&&ee.onVnodeMounted)||Ne||Ae)&&tt(()=>{L&&Ft(L,P,g),Ne&&fe.enter(H),Ae&&jn(g,null,P,"mounted")},F)},$=(g,b,E,P,F)=>{if(E&&y(g,E),P)for(let j=0;j<P.length;j++)y(g,P[j]);if(F){let j=F.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=Vp(j.children)||j),b===j){const z=F.vnode;$(g,z,z.scopeId,z.slotScopeIds,F.parent)}}},V=(g,b,E,P,F,j,z,R,H=0)=>{for(let L=H;L<g.length;L++){const ne=g[L]=R?kn(g[L]):Ht(g[L]);v(null,ne,b,E,P,F,j,z,R)}},J=(g,b,E,P,F,j,z)=>{const R=b.el=g.el;let{patchFlag:H,dynamicChildren:L,dirs:ne}=b;H|=g.patchFlag&16;const ee=g.props||Le,le=b.props||Le;let fe;E&&Vn(E,!1),(fe=le.onVnodeBeforeUpdate)&&Ft(fe,E,b,g),ne&&jn(b,g,E,"beforeUpdate"),E&&Vn(E,!0),$n&&(H=0,z=!1,L=null);const Ae=F&&b.type!=="foreignObject";if(L?(ie(g.dynamicChildren,L,R,E,P,Ae,j),E&&E.type.__hmrId&&lo(g,b)):z||ge(g,b,R,null,E,P,Ae,j,!1),H>0){if(H&16)K(R,b,ee,le,E,P,F);else if(H&2&&ee.class!==le.class&&r(R,"class",null,le.class,F),H&4&&r(R,"style",ee.style,le.style,F),H&8){const Ne=b.dynamicProps;for(let Me=0;Me<Ne.length;Me++){const Qe=Ne[Me],Nt=ee[Qe],ys=le[Qe];(ys!==Nt||Qe==="value")&&r(R,Qe,Nt,ys,F,g.children,E,P,W)}}H&1&&g.children!==b.children&&d(R,b.children)}else!z&&L==null&&K(R,b,ee,le,E,P,F);((fe=le.onVnodeUpdated)||ne)&&tt(()=>{fe&&Ft(fe,E,b,g),ne&&jn(b,g,E,"updated")},P)},ie=(g,b,E,P,F,j,z)=>{for(let R=0;R<b.length;R++){const H=g[R],L=b[R],ne=H.el&&(H.type===$e||!Bn(H,L)||H.shapeFlag&70)?f(H.el):E;v(H,L,ne,null,P,F,j,z,!0)}},K=(g,b,E,P,F,j,z)=>{if(E!==P){if(E!==Le)for(const R in E)!cl(R)&&!(R in P)&&r(g,R,E[R],null,z,b.children,F,j,W);for(const R in P){if(cl(R))continue;const H=P[R],L=E[R];H!==L&&R!=="value"&&r(g,R,L,H,z,b.children,F,j,W)}"value"in P&&r(g,"value",E.value,P.value)}},ve=(g,b,E,P,F,j,z,R,H)=>{const L=b.el=g?g.el:i(""),ne=b.anchor=g?g.anchor:i("");let{patchFlag:ee,dynamicChildren:le,slotScopeIds:fe}=b;($n||ee&2048)&&(ee=0,H=!1,le=null),fe&&(R=R?R.concat(fe):fe),g==null?(o(L,E,P),o(ne,E,P),V(b.children,E,ne,F,j,z,R,H)):ee>0&&ee&64&&le&&g.dynamicChildren?(ie(g.dynamicChildren,le,E,F,j,z,R),F&&F.type.__hmrId?lo(g,b):(b.key!=null||F&&b===F.subTree)&&lo(g,b,!0)):ge(g,b,E,ne,F,j,z,R,H)},Se=(g,b,E,P,F,j,z,R,H)=>{b.slotScopeIds=R,g==null?b.shapeFlag&512?F.ctx.activate(b,E,P,z,H):xe(b,E,P,F,j,z,H):Re(g,b,H)},xe=(g,b,E,P,F,j,z)=>{const R=g.component=Gy(g,P,F);if(R.type.__hmrId&&Rm(R),ul(g),on(R,"mount"),jo(g)&&(R.ctx.renderer=ke),on(R,"init"),Jy(R),ln(R,"init"),R.asyncDep){if(F&&F.registerDep(R,Q),!g.el){const H=R.subTree=I(Xe);k(null,H,b,E)}return}Q(R,g,b,E,F,j,z),pl(),ln(R,"mount")},Re=(g,b,E)=>{const P=b.component=g.component;if(Xm(g,b,E))if(P.asyncDep&&!P.asyncResolved){ul(b),ae(P,b,E),pl();return}else P.next=b,Mm(P.update),P.update();else b.el=g.el,P.vnode=b},Q=(g,b,E,P,F,j,z)=>{const R=()=>{if(g.isMounted){let{next:ne,bu:ee,u:le,parent:fe,vnode:Ae}=g,Ne=ne,Me;ul(ne||g.vnode),Vn(g,!1),ne?(ne.el=Ae.el,ae(g,ne,z)):ne=Ae,ee&&Cn(ee),(Me=ne.props&&ne.props.onVnodeBeforeUpdate)&&Ft(Me,fe,ne,Ae),Vn(g,!0),on(g,"render");const Qe=ur(g);ln(g,"render");const Nt=g.subTree;g.subTree=Qe,on(g,"patch"),v(Nt,Qe,f(Nt.el),X(Nt),g,F,j),ln(g,"patch"),ne.el=Qe.el,Ne===null&&ey(g,Qe.el),le&&tt(le,F),(Me=ne.props&&ne.props.onVnodeUpdated)&&tt(()=>Ft(Me,fe,ne,Ae),F),Rp(g),pl()}else{let ne;const{el:ee,props:le}=b,{bm:fe,m:Ae,parent:Ne}=g,Me=Ds(b);if(Vn(g,!1),fe&&Cn(fe),!Me&&(ne=le&&le.onVnodeBeforeMount)&&Ft(ne,Ne,b),Vn(g,!0),ee&&ce){const Qe=()=>{on(g,"render"),g.subTree=ur(g),ln(g,"render"),on(g,"hydrate"),ce(ee,g.subTree,g,F,null),ln(g,"hydrate")};Me?b.type.__asyncLoader().then(()=>!g.isUnmounted&&Qe()):Qe()}else{on(g,"render");const Qe=g.subTree=ur(g);ln(g,"render"),on(g,"patch"),v(null,Qe,E,P,g,F,j),ln(g,"patch"),b.el=Qe.el}if(Ae&&tt(Ae,F),!Me&&(ne=le&&le.onVnodeMounted)){const Qe=b;tt(()=>Ft(ne,Ne,Qe),F)}(b.shapeFlag&256||Ne&&Ds(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&tt(g.a,F),g.isMounted=!0,Kr(g),b=E=P=null}},H=g.effect=new za(R,()=>Yl(L),g.scope),L=g.update=()=>H.run();L.id=g.uid,Vn(g,!0),H.onTrack=g.rtc?ne=>Cn(g.rtc,ne):void 0,H.onTrigger=g.rtg?ne=>Cn(g.rtg,ne):void 0,L.ownerInstance=g,L()},ae=(g,b,E)=>{b.component=g;const P=g.vnode.props;g.vnode=b,g.next=null,Ey(g,b.props,P,E),Ty(g,b.children,E),us(),Ki(),ps()},ge=(g,b,E,P,F,j,z,R,H=!1)=>{const L=g&&g.children,ne=g?g.shapeFlag:0,ee=b.children,{patchFlag:le,shapeFlag:fe}=b;if(le>0){if(le&128){At(L,ee,E,P,F,j,z,R,H);return}else if(le&256){Ie(L,ee,E,P,F,j,z,R,H);return}}fe&8?(ne&16&&W(L,F,j),ee!==L&&d(E,ee)):ne&16?fe&16?At(L,ee,E,P,F,j,z,R,H):W(L,F,j,!0):(ne&8&&d(E,""),fe&16&&V(ee,E,P,F,j,z,R,H))},Ie=(g,b,E,P,F,j,z,R,H)=>{g=g||Es,b=b||Es;const L=g.length,ne=b.length,ee=Math.min(L,ne);let le;for(le=0;le<ee;le++){const fe=b[le]=H?kn(b[le]):Ht(b[le]);v(g[le],fe,E,null,F,j,z,R,H)}L>ne?W(g,F,j,!0,!1,ee):V(b,E,P,F,j,z,R,H,ee)},At=(g,b,E,P,F,j,z,R,H)=>{let L=0;const ne=b.length;let ee=g.length-1,le=ne-1;for(;L<=ee&&L<=le;){const fe=g[L],Ae=b[L]=H?kn(b[L]):Ht(b[L]);if(Bn(fe,Ae))v(fe,Ae,E,null,F,j,z,R,H);else break;L++}for(;L<=ee&&L<=le;){const fe=g[ee],Ae=b[le]=H?kn(b[le]):Ht(b[le]);if(Bn(fe,Ae))v(fe,Ae,E,null,F,j,z,R,H);else break;ee--,le--}if(L>ee){if(L<=le){const fe=le+1,Ae=fe<ne?b[fe].el:P;for(;L<=le;)v(null,b[L]=H?kn(b[L]):Ht(b[L]),E,Ae,F,j,z,R,H),L++}}else if(L>le)for(;L<=ee;)yt(g[L],F,j,!0),L++;else{const fe=L,Ae=L,Ne=new Map;for(L=Ae;L<=le;L++){const ut=b[L]=H?kn(b[L]):Ht(b[L]);ut.key!=null&&(Ne.has(ut.key)&&T("Duplicate keys found during update:",JSON.stringify(ut.key),"Make sure keys are unique."),Ne.set(ut.key,L))}let Me,Qe=0;const Nt=le-Ae+1;let ys=!1,Mi=0;const js=new Array(Nt);for(L=0;L<Nt;L++)js[L]=0;for(L=fe;L<=ee;L++){const ut=g[L];if(Qe>=Nt){yt(ut,F,j,!0);continue}let Kt;if(ut.key!=null)Kt=Ne.get(ut.key);else for(Me=Ae;Me<=le;Me++)if(js[Me-Ae]===0&&Bn(ut,b[Me])){Kt=Me;break}Kt===void 0?yt(ut,F,j,!0):(js[Kt-Ae]=L+1,Kt>=Mi?Mi=Kt:ys=!0,v(ut,b[Kt],E,null,F,j,z,R,H),Qe++)}const Li=ys?jy(js):Es;for(Me=Li.length-1,L=Nt-1;L>=0;L--){const ut=Ae+L,Kt=b[ut],Ri=ut+1<ne?b[ut+1].el:P;js[L]===0?v(null,Kt,E,Ri,F,j,z,R,H):ys&&(Me<0||L!==Li[Me]?ot(Kt,E,Ri,2):Me--)}}},ot=(g,b,E,P,F=null)=>{const{el:j,type:z,transition:R,children:H,shapeFlag:L}=g;if(L&6){ot(g.component.subTree,b,E,P);return}if(L&128){g.suspense.move(b,E,P);return}if(L&64){z.move(g,b,E,ke);return}if(z===$e){o(j,b,E);for(let ee=0;ee<H.length;ee++)ot(H[ee],b,E,P);o(g.anchor,b,E);return}if(z===dl){C(g,b,E);return}if(P!==2&&L&1&&R)if(P===0)R.beforeEnter(j),o(j,b,E),tt(()=>R.enter(j),F);else{const{leave:ee,delayLeave:le,afterLeave:fe}=R,Ae=()=>o(j,b,E),Ne=()=>{ee(j,()=>{Ae(),fe&&fe()})};le?le(j,Ae,Ne):Ne()}else o(j,b,E)},yt=(g,b,E,P=!1,F=!1)=>{const{type:j,props:z,ref:R,children:H,dynamicChildren:L,shapeFlag:ne,patchFlag:ee,dirs:le}=g;if(R!=null&&na(R,null,E,g,!0),ne&256){b.ctx.deactivate(g);return}const fe=ne&1&&le,Ae=!Ds(g);let Ne;if(Ae&&(Ne=z&&z.onVnodeBeforeUnmount)&&Ft(Ne,b,g),ne&6)G(g.component,E,P);else{if(ne&128){g.suspense.unmount(E,P);return}fe&&jn(g,null,b,"beforeUnmount"),ne&64?g.type.remove(g,b,E,F,ke,P):L&&(j!==$e||ee>0&&ee&64)?W(L,b,E,!1,!0):(j===$e&&ee&384||!F&&ne&16)&&W(H,b,E),P&&gn(g)}(Ae&&(Ne=z&&z.onVnodeUnmounted)||fe)&&tt(()=>{Ne&&Ft(Ne,b,g),fe&&jn(g,null,b,"unmounted")},E)},gn=g=>{const{type:b,el:E,anchor:P,transition:F}=g;if(b===$e){g.patchFlag>0&&g.patchFlag&2048&&F&&!F.persisted?g.children.forEach(z=>{z.type===Xe?l(z.el):gn(z)}):D(E,P);return}if(b===dl){O(g);return}const j=()=>{l(E),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(g.shapeFlag&1&&F&&!F.persisted){const{leave:z,delayLeave:R}=F,H=()=>z(E,j);R?R(g.el,j,H):H()}else j()},D=(g,b)=>{let E;for(;g!==b;)E=h(g),l(g),g=E;l(b)},G=(g,b,E)=>{g.type.__hmrId&&Nm(g);const{bum:P,scope:F,update:j,subTree:z,um:R}=g;P&&Cn(P),F.stop(),j&&(j.active=!1,yt(z,g,b,E)),R&&tt(R,b),tt(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),zm(g)},W=(g,b,E,P=!1,F=!1,j=0)=>{for(let z=j;z<g.length;z++)yt(g[z],b,E,P,F)},X=g=>g.shapeFlag&6?X(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),_e=(g,b,E)=>{g==null?b._vnode&&yt(b._vnode,null,null,!0):v(b._vnode||null,g,b,null,null,null,E),Ki(),Tp(),b._vnode=g},ke={p:v,um:yt,m:ot,r:gn,mt:xe,mc:V,pc:ge,pbc:ie,n:X,o:e};let de,ce;return t&&([de,ce]=t(ke)),{render:_e,hydrate:de,createApp:My(_e,de)}}function Vn({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function lo(e,t,s=!1){const o=e.children,l=t.children;if(re(o)&&re(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=kn(l[r]),i.el=a.el),s||lo(a,i)),i.type===Wo&&(i.el=a.el),i.type===Xe&&!i.el&&(i.el=a.el)}}function jy(e){const t=e.slice(),s=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const p=e[o];if(p!==0){if(l=s[s.length-1],e[l]<p){t[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,e[s[i]]<p?r=i+1:a=i;p<e[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=t[a];return s}const Vy=e=>e.__isTeleport,Ss=e=>e&&(e.disabled||e.disabled===""),rc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sa=(e,t)=>{const s=e&&e.to;if(Ve(s))if(t){const o=t(s);return o||T(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return T("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ss(e)&&T(`Invalid Teleport target: ${s}`),s},Hy={__isTeleport:!0,process(e,t,s,o,l,r,a,i,c,p){const{mc:d,pc:f,pbc:h,o:{insert:y,querySelector:m,createText:v,createComment:_}}=p,k=Ss(t.props);let{shapeFlag:w,children:A,dynamicChildren:C}=t;if($n&&(c=!1,C=null),e==null){const O=t.el=_("teleport start"),M=t.anchor=_("teleport end");y(O,s,o),y(M,s,o);const q=t.target=sa(t.props,m),$=t.targetAnchor=v("");q?(y($,q),a=a||rc(q)):k||T("Invalid Teleport target on mount:",q,`(${typeof q})`);const V=(J,ie)=>{w&16&&d(A,J,ie,l,r,a,i,c)};k?V(s,M):q&&V(q,$)}else{t.el=e.el;const O=t.anchor=e.anchor,M=t.target=e.target,q=t.targetAnchor=e.targetAnchor,$=Ss(e.props),V=$?s:M,J=$?O:q;if(a=a||rc(M),C?(h(e.dynamicChildren,C,V,l,r,a,i),lo(e,t,!0)):c||f(e,t,V,J,l,r,a,i,!1),k)$||nl(t,s,O,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ie=t.target=sa(t.props,m);ie?nl(t,ie,null,p,0):T("Invalid Teleport target on update:",M,`(${typeof M})`)}else $&&nl(t,M,q,p,1)}id(t)},remove(e,t,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:p,targetAnchor:d,target:f,props:h}=e;if(f&&r(d),(a||!Ss(h))&&(r(p),i&16))for(let y=0;y<c.length;y++){const m=c[y];l(m,t,s,!0,!!m.dynamicChildren)}},move:nl,hydrate:qy};function nl(e,t,s,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,t,s);const{el:a,anchor:i,shapeFlag:c,children:p,props:d}=e,f=r===2;if(f&&o(a,t,s),(!f||Ss(d))&&c&16)for(let h=0;h<p.length;h++)l(p[h],t,s,2);f&&o(i,t,s)}function qy(e,t,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},p){const d=t.target=sa(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ss(t.props))t.anchor=p(a(e),t,i(e),s,o,l,r),t.targetAnchor=f;else{t.anchor=a(e);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}p(f,t,d,s,o,l,r)}id(t)}return t.anchor&&a(t.anchor)}const Wy=Hy;function id(e){const t=e.ctx;if(t&&t.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const $e=Symbol("Fragment"),Wo=Symbol("Text"),Xe=Symbol("Comment"),dl=Symbol("Static"),ro=[];let qt=null;function B(e=!1){ro.push(qt=e?null:[])}function zy(){ro.pop(),qt=ro[ro.length-1]||null}let ko=1;function ac(e){ko+=e}function cd(e){return e.dynamicChildren=ko>0?qt||Es:null,zy(),ko>0&&qt&&qt.push(e),e}function Z(e,t,s,o,l,r){return cd(n(e,t,s,o,l,r,!0))}function te(e,t,s,o,l){return cd(I(e,t,s,o,l,!0))}function mn(e){return e?e.__v_isVNode===!0:!1}function Bn(e,t){return t.shapeFlag&6&&ws.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Uy=(...e)=>Ky(...e),er="__vInternal",ud=({key:e})=>e??null,fl=({ref:e,ref_key:t,ref_for:s})=>e!=null?Ve(e)||De(e)||ue(e)?{i:Je,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,o=0,l=null,r=e===$e?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ud(t),ref:t&&fl(t),scopeId:Gl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Je};return i?(li(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=Ve(s)?8:16),c.key!==c.key&&T("VNode created with invalid key (NaN). VNode type:",c.type),ko>0&&!a&&qt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&qt.push(c),c}const I=Uy;function Ky(e,t=null,s=null,o=0,l=null,r=!1){if((!e||e===hy)&&(e||T(`Invalid vnode type when creating vnode: ${e}.`),e=Xe),mn(e)){const i=Wt(e,t,!0);return s&&li(i,s),ko>0&&!r&&qt&&(i.shapeFlag&6?qt[qt.indexOf(e)]=i:qt.push(i)),i.patchFlag|=-2,i}if(md(e)&&(e=e.__vccOpts),t){t=Oe(t);let{class:i,style:c}=t;i&&!Ve(i)&&(t.class=qe(i)),Pe(c)&&(xl(c)&&!re(c)&&(c=We({},c)),t.style=st(c))}const a=Ve(e)?1:Hp(e)?128:Vy(e)?64:Pe(e)?4:ue(e)?2:0;return a&4&&xl(e)&&(e=pe(e),T("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,s,o,l,a,r,!0)}function Oe(e){return e?xl(e)||er in e?We({},e):e:null}function Wt(e,t,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=t?Ke(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&ud(i),ref:t&&t.ref?s&&l?re(l)?l.concat(fl(t)):[l,fl(t)]:fl(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&re(a)?a.map(pd):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function pd(e){const t=Wt(e);return re(e.children)&&(t.children=e.children.map(pd)),t}function u(e=" ",t=0){return I(Wo,null,e,t)}function be(e="",t=!1){return t?(B(),te(Xe,null,e)):I(Xe,null,e)}function Ht(e){return e==null||typeof e=="boolean"?I(Xe):re(e)?I($e,null,e.slice()):typeof e=="object"?kn(e):I(Wo,null,String(e))}function kn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function li(e,t){let s=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(re(t))s=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),li(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(er in t)?t._ctx=Je:l===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Je},s=32):(t=String(t),o&64?(s=16,t=[u(t)]):s=8);e.children=t,e.shapeFlag|=s}function Ke(...e){const t={};for(let s=0;s<e.length;s++){const o=e[s];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=qe([t.class,o.class]));else if(l==="style")t.style=st([t.style,o.style]);else if(Lo(l)){const r=t[l],a=o[l];a&&r!==a&&!(re(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function Ft(e,t,s,o=null){It(e,t,7,[s,o])}const Yy=ad();let Qy=0;function Gy(e,t,s){const o=e.type,l=(t?t.appContext:e.appContext)||Yy,r={uid:Qy++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nd(o,l),emitsOptions:jp(o,l),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:o.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=my(r),r.root=t?t.root:r,r.emit=Qm.bind(null,r),e.ce&&e.ce(r),r}let ze=null;const $t=()=>ze||Je,Ts=e=>{ze=e,e.scope.on()},ls=()=>{ze&&ze.scope.off(),ze=null},Zy=Nn("slot,component");function oa(e,t){const s=t.isNativeTag||rp;(Zy(e)||s(e))&&T("Do not use built-in or reserved HTML elements as component id: "+e)}function dd(e){return e.vnode.shapeFlag&4}let xo=!1;function Jy(e,t=!1){xo=t;const{props:s,children:o}=e.vnode,l=dd(e);xy(e,s,l,t),Py(e,o);const r=l?Xy(e,t):void 0;return xo=!1,r}function Xy(e,t){var s;const o=e.type;{if(o.name&&oa(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)oa(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)Gp(r[a])}o.compilerOptions&&eg()&&T('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ul(new Proxy(e.ctx,Xp)),yy(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?hd(e):null;Ts(e),us();const a=dn(l,e,0,[xs(e.props),r]);if(ps(),ls(),ja(a)){if(a.then(ls,ls),t)return a.then(i=>{ic(e,i,t)}).catch(i=>{Kl(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!==null&&s!==void 0?s:"Anonymous";T(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ic(e,a,t)}else fd(e,t)}function ic(e,t,s){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)?(mn(t)&&T("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Bp(t),gy(e)):t!==void 0&&T(`setup() should return an object. Received: ${t===null?"null":typeof t}`),fd(e,s)}let la;const eg=()=>!la;function fd(e,t,s){const o=e.type;if(!e.render){if(!t&&la&&!o.render){const l=o.template||si(e).template;if(l){on(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,p=We(We({isCustomElement:r,delimiters:i},a),c);o.render=la(l,p),ln(e,"compile")}}e.render=o.render||_t}Ts(e),us(),_y(e),ps(),ls(),!o.render&&e.render===_t&&!t&&(o.template?T('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):T("Component is missing template or render function."))}function tg(e){return new Proxy(e.attrs,{get(t,s){return El(),wt(e,"get","$attrs"),t[s]},set(){return T("setupContext.attrs is readonly."),!1},deleteProperty(){return T("setupContext.attrs is readonly."),!1}})}function hd(e){const t=o=>{if(e.exposed&&T("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(re(o)?l="array":De(o)&&(l="ref")),l!=="object"&&T(`expose() should be passed a plain object, received ${l}.`)}e.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=tg(e))},get slots(){return xs(e.slots)},get emit(){return(o,...l)=>e.emit(o,...l)},expose:t})}function tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Bp(Ul(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in os)return os[s](e)},has(t,s){return s in t||s in os}}))}const ng=/(?:^|[-_])(\w)/g,sg=e=>e.replace(ng,t=>t.toUpperCase()).replace(/[-_]/g,"");function Co(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function nr(e,t,s=!1){let o=Co(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?sg(o):s?"App":"Anonymous"}function md(e){return ue(e)&&"__vccOpts"in e}const S=(e,t)=>Bm(e,t,xo);function og(){return lg().slots}function lg(){const e=$t();return e||T("useContext() called without active instance."),e.setupContext||(e.setupContext=hd(e))}function at(e,t,s){const o=arguments.length;return o===2?Pe(t)&&!re(t)?mn(t)?I(e,null,[t]):I(e,t):I(e,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&mn(s)&&(s=[s]),I(e,t,s))}const rg=Symbol("ssrContext"),ag=()=>{{const e=Y(rg);return e||T("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function mr(e){return!!(e&&e.__v_isShallow)}function ig(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Pe(f)?f.__isVue?["div",e,"VueInstance"]:De(f)?["div",{},["span",e,d(f)],"<",i(f.value),">"]:ns(f)?["div",{},["span",e,mr(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Ln(f)?" (readonly)":""}`]:Ln(f)?["div",{},["span",e,mr(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const h=[];f.type.props&&f.props&&h.push(a("props",pe(f.props))),f.setupState!==Le&&h.push(a("setup",f.setupState)),f.data!==Le&&h.push(a("data",pe(f.data)));const y=c(f,"computed");y&&h.push(a("computed",y));const m=c(f,"inject");return m&&h.push(a("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function a(f,h){return h=We({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(y=>["div",{},["span",o,y+": "],i(h[y],!1)])]]:["span",{}]}function i(f,h=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Pe(f)?["object",{object:h?pe(f):f}]:["span",s,String(f)]}function c(f,h){const y=f.type;if(ue(y))return;const m={};for(const v in f.ctx)p(y,v,h)&&(m[v]=f.ctx[v]);return m}function p(f,h,y){const m=f[y];if(re(m)&&m.includes(h)||Pe(m)&&h in m||f.extends&&p(f.extends,h,y)||f.mixins&&f.mixins.some(v=>p(v,h,y)))return!0}function d(f){return mr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const $l="3.2.47",cg="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,cc=Yn&&Yn.createElement("template"),ug={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,o)=>{const l=t?Yn.createElementNS(cg,e):Yn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>Yn.createTextNode(e),createComment:e=>Yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,o,l,r){const a=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{cc.innerHTML=o?`<svg>${e}</svg>`:e;const i=cc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function pg(e,t,s){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function dg(e,t,s){const o=e.style,l=Ve(s);if(s&&!l){if(t&&!Ve(t))for(const r in t)s[r]==null&&ra(o,r,"");for(const r in s)ra(o,r,s[r])}else{const r=o.display;l?t!==s&&(o.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const fg=/[^\\];\s*$/,uc=/\s*!important$/;function ra(e,t,s){if(re(s))s.forEach(o=>ra(e,t,o));else if(s==null&&(s=""),fg.test(s)&&T(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))e.setProperty(t,s);else{const o=hg(e,t);uc.test(s)?e.setProperty(fn(o),s.replace(uc,""),"important"):e[o]=s}}const pc=["Webkit","Moz","ms"],yr={};function hg(e,t){const s=yr[t];if(s)return s;let o=en(t);if(o!=="filter"&&o in e)return yr[t]=o;o=is(o);for(let l=0;l<pc.length;l++){const r=pc[l]+o;if(r in e)return yr[t]=r}return t}const dc="http://www.w3.org/1999/xlink";function mg(e,t,s,o,l){if(o&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(dc,t.slice(6,t.length)):e.setAttributeNS(dc,t,s);else{const r=Ih(t);s==null||r&&!op(s)?e.removeAttribute(t):e.setAttribute(t,r?"":s)}}function yg(e,t,s,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),e[t]=s??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(t);return}let i=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=op(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[t]=s}catch(c){i||T(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&e.removeAttribute(t)}function As(e,t,s,o){e.addEventListener(t,s,o)}function gg(e,t,s,o){e.removeEventListener(t,s,o)}function vg(e,t,s,o,l=null){const r=e._vei||(e._vei={}),a=r[t];if(o&&a)a.value=o;else{const[i,c]=_g(t);if(o){const p=r[t]=Ag(o,l);As(e,i,p,c)}else a&&(gg(e,i,a,c),r[t]=void 0)}}const fc=/(?:Once|Passive|Capture)$/;function _g(e){let t;if(fc.test(e)){t={};let o;for(;o=e.match(fc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let gr=0;const bg=Promise.resolve(),wg=()=>gr||(bg.then(()=>gr=0),gr=Date.now());function Ag(e,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;It(kg(o,s.value),t,5,[o])};return s.value=e,s.attached=wg(),s}function kg(e,t){if(re(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const hc=/^on[a-z]/,xg=(e,t,s,o,l=!1,r,a,i,c)=>{t==="class"?pg(e,o,l):t==="style"?dg(e,s,o):Lo(t)?_l(t)||vg(e,t,s,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cg(e,t,o,l))?yg(e,t,o,r,a,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),mg(e,t,o,l))};function Cg(e,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&hc.test(t)&&ue(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hc.test(t)&&Ve(s)?!1:t in e}const _n="transition",Hs="animation",yd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Eg=We({},oy.props,yd),Hn=(e,t=[])=>{re(e)?e.forEach(s=>s(...t)):e&&e(...t)},mc=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function Bg(e){const t={};for(const K in e)K in yd||(t[K]=e[K]);if(e.css===!1)return t;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:d=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=e,m=Dg(l),v=m&&m[0],_=m&&m[1],{onBeforeEnter:k,onEnter:w,onEnterCancelled:A,onLeave:C,onLeaveCancelled:O,onBeforeAppear:M=k,onAppear:q=w,onAppearCancelled:$=A}=t,V=(K,ve,Se)=>{wn(K,ve?d:i),wn(K,ve?p:a),Se&&Se()},J=(K,ve)=>{K._isLeaving=!1,wn(K,f),wn(K,y),wn(K,h),ve&&ve()},ie=K=>(ve,Se)=>{const xe=K?q:w,Re=()=>V(ve,K,Se);Hn(xe,[ve,Re]),yc(()=>{wn(ve,K?c:r),rn(ve,K?d:i),mc(xe)||gc(ve,o,v,Re)})};return We(t,{onBeforeEnter(K){Hn(k,[K]),rn(K,r),rn(K,a)},onBeforeAppear(K){Hn(M,[K]),rn(K,c),rn(K,p)},onEnter:ie(!1),onAppear:ie(!0),onLeave(K,ve){K._isLeaving=!0;const Se=()=>J(K,ve);rn(K,f),vd(),rn(K,h),yc(()=>{K._isLeaving&&(wn(K,f),rn(K,y),mc(C)||gc(K,o,_,Se))}),Hn(C,[K,Se])},onEnterCancelled(K){V(K,!1),Hn(A,[K])},onAppearCancelled(K){V(K,!0),Hn($,[K])},onLeaveCancelled(K){J(K),Hn(O,[K])}})}function Dg(e){if(e==null)return null;if(Pe(e))return[vr(e.enter),vr(e.leave)];{const t=vr(e);return[t,t]}}function vr(e){const t=Hh(e);return Fm(t,"<transition> explicit duration"),t}function rn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(t)}function wn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(t),s.size||(e._vtc=void 0))}function yc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sg=0;function gc(e,t,s,o){const l=e._endId=++Sg,r=()=>{l===e._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=gd(e,t);if(!a)return o();const p=a+"end";let d=0;const f=()=>{e.removeEventListener(p,h),r()},h=y=>{y.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},i+1),e.addEventListener(p,h)}function gd(e,t){const s=window.getComputedStyle(e),o=m=>(s[m]||"").split(", "),l=o(`${_n}Delay`),r=o(`${_n}Duration`),a=vc(l,r),i=o(`${Hs}Delay`),c=o(`${Hs}Duration`),p=vc(i,c);let d=null,f=0,h=0;t===_n?a>0&&(d=_n,f=a,h=r.length):t===Hs?p>0&&(d=Hs,f=p,h=c.length):(f=Math.max(a,p),d=f>0?a>p?_n:Hs:null,h=d?d===_n?r.length:c.length:0);const y=d===_n&&/\b(transform|all)(,|$)/.test(o(`${_n}Property`).toString());return{type:d,timeout:f,propCount:h,hasTransform:y}}function vc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,o)=>_c(s)+_c(e[o])))}function _c(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function vd(){return document.body.offsetHeight}const _d=new WeakMap,bd=new WeakMap,wd={name:"TransitionGroup",props:We({},Eg,{tag:String,moveClass:String}),setup(e,{slots:t}){const s=$t(),o=Wp();let l,r;return Jl(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Ig(l[0].el,s.vnode.el,a))return;l.forEach(Fg),l.forEach(Pg);const i=l.filter(Tg);vd(),i.forEach(c=>{const p=c.el,d=p.style;rn(p,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,wn(p,a))};p.addEventListener("transitionend",f)})}),()=>{const a=pe(e),i=Bg(a);let c=a.tag||$e;l=r,r=t.default?ti(t.default()):[];for(let p=0;p<r.length;p++){const d=r[p];d.key!=null?Ps(d,Ao(d,i,o,s)):T("<TransitionGroup> children must be keyed.")}if(l)for(let p=0;p<l.length;p++){const d=l[p];Ps(d,Ao(d,i,o,s)),_d.set(d,d.el.getBoundingClientRect())}return I(c,null,r)}}},$g=e=>delete e.mode;wd.props;const Og=wd;function Fg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Pg(e){bd.set(e,e.el.getBoundingClientRect())}function Tg(e){const t=_d.get(e),s=bd.get(e),o=t.left-s.left,l=t.top-s.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function Ig(e,t,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=gd(o);return l.removeChild(o),r}const bc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return re(t)?s=>Cn(t,s):t};function Mg(e){e.target.composing=!0}function wc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Lg={created(e,{modifiers:{lazy:t,trim:s,number:o}},l){e._assign=bc(l);const r=o||l.props&&l.props.type==="number";As(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),r&&(i=Vr(i)),e._assign(i)}),s&&As(e,"change",()=>{e.value=e.value.trim()}),t||(As(e,"compositionstart",Mg),As(e,"compositionend",wc),As(e,"change",wc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:o,number:l}},r){if(e._assign=bc(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===t||(l||e.type==="number")&&Vr(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},Rg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ac=(e,t)=>s=>{if(!("key"in s))return;const o=fn(s.key);if(t.some(l=>l===o||Rg[l]===o))return e(s)},Ad={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):qs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(e),qs(e,!0),o.enter(e)):o.leave(e,()=>{qs(e,!1)}):qs(e,t))},beforeUnmount(e,{value:t}){qs(e,t)}};function qs(e,t){e.style.display=t?e._vod:"none"}const Ng=We({patchProp:xg},ug);let kc;function jg(){return kc||(kc=Ry(Ng))}const Vg=(...e)=>{const t=jg().createApp(...e);Hg(t),qg(t);const{mount:s}=t;return t.mount=o=>{const l=Wg(o);if(!l)return;const r=t._component;!ue(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function Hg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>sp(t)||Ph(t),writable:!1})}function qg(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){T("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return T(o),s},set(){T(o)}})}}function Wg(e){if(Ve(e)){const t=document.querySelector(e);return t||T(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&T('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function zg(){ig()}zg();function aa(e,t={},s){for(const o in e){const l=e[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?aa(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const Ug={run:e=>e()},Kg=()=>Ug,kd=typeof console.createTask<"u"?console.createTask:Kg;function Yg(e,t){const s=t.shift(),o=kd(s);return e.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function Qg(e,t){const s=t.shift(),o=kd(s);return Promise.all(e.map(l=>o.run(()=>l(...t))))}function _r(e,t){for(const s of e)s(t)}class Gg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,s,o={}){if(!t||typeof s!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(s),()=>{s&&(this.removeHook(t,s),s=void 0)}}hookOnce(t,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(t,l),o}removeHook(t,s){if(this._hooks[t]){const o=this._hooks[t].indexOf(s);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,s){this._deprecatedHooks[t]=typeof s=="string"?{to:s}:s;const o=this._hooks[t]||[];this._hooks[t]=void 0;for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const s in t)this.deprecateHook(s,t[s])}addHooks(t){const s=aa(t),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const s=aa(t);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...s){return s.unshift(t),this.callHookWith(Yg,t,...s)}callHookParallel(t,...s){return s.unshift(t),this.callHookWith(Qg,t,...s)}callHookWith(t,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&_r(this._before,l);const r=t(this._hooks[s]||[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&_r(this._after,l)}):(this._after&&l&&_r(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const s=this._before.indexOf(t);s!==-1&&this._before.splice(s,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const s=this._after.indexOf(t);s!==-1&&this._after.splice(s,1)}}}function Zg(){return new Gg}function Jg(e){return Array.isArray(e)?e:[e]}const xd=["title","script","style","noscript"],ri=["base","meta","link","style","script","noscript"],Xg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],ev=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],tv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Cd(e){let t=9;for(let s=0;s<e.length;)t=Math.imul(t^e.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ol(e){return Cd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,s])=>`${t}:${String(s)}`).join(",")}`)}function nv(e){let t=9;for(const s of e)for(let o=0;o<s.length;)t=Math.imul(t^s.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ed(e,t){const{props:s,tag:o}=e;if(ev.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}const xc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e,sl=(e,t=!1,s)=>{const{tag:o,$el:l}=e;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const p=`${i}:${c}`;s&&s(e,p,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(e,i,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),xd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))};let Ws=!1;async function Bd(e,t={}){var h,y;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,l=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(Ws=Ws||e._hash||!1,Ws)){const m=nv(l.map(v=>v.tag._h));if(Ws===m)return;Ws=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([v,_])=>{r[v]=_})});const a=(m,v,_)=>{v=`${m.renderId}:${v}`,m.entry&&(m.entry._sde[v]=_),delete r[v]};function i(m){const v=e.headEntries().find(k=>k._i===m._e),_={renderId:m._d||Ol(m),$el:null,shouldRender:!0,tag:m,entry:v,markSideEffect:(k,w)=>a(_,k,w)};return _}const c=[],p={body:[],head:[]},d=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var v;(v=m.$el)==null||v.remove(),delete e._elMap[m.renderId]})};for(const m of l){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:v}=m;if(v.tag==="title"){o.title=v.textContent||"",c.push(m);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){m.$el=o[v.tag==="htmlAttrs"?"documentElement":"body"],sl(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&v.key&&(m.$el=o.querySelector(`${(h=v.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),m.$el){m.tag._d&&sl(m),d(m);continue}p[(y=v.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([m,v])=>{var k;if(!v.length)return;const _=(k=o==null?void 0:o[m])==null?void 0:k.children;if(_){for(const w of[..._].reverse()){const A=w.tagName.toLowerCase();if(!ri.includes(A))continue;const C=w.getAttributeNames().reduce(($,V)=>({...$,[V]:w.getAttribute(V)}),{}),O={tag:A,props:C};w.innerHTML&&(O.innerHTML=w.innerHTML);const M=Ol(O);let q=v.findIndex($=>($==null?void 0:$.renderId)===M);if(q===-1){const $=Ed(O);q=v.findIndex(V=>(V==null?void 0:V.tag._d)&&V.tag._d===$)}if(q!==-1){const $=v[q];$.$el=w,sl($),d($),delete v[q]}}v.forEach(w=>{const A=w.tag.tagPosition||"head";f[A]=f[A]||o.createDocumentFragment(),w.$el||(w.$el=o.createElement(w.tag.tag),sl(w,!0)),f[A].appendChild(w.$el),d(w)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let br=null;async function Dd(e,t={}){function s(){return br=null,Bd(e,t)}const o=t.delayFn||(l=>setTimeout(l,10));return br=br||new Promise(l=>o(()=>l(s())))}const sv=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Dd(t,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}});function ov(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Cc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Ec(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in Cc?Cc[t]:10}const lv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function rv(){return{hooks:{"tags:resolve":e=>{const t=s=>{var o;return(o=e.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of lv)for(const l of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=t(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}e.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>Ec(s)-Ec(o))}}}}const av=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let s=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=xc(t[s].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(s!==-1){const l=xc(t[s].textContent);l!==null&&(t[s].textContent=l,t[s].tag="title",s=-1)}s!==-1&&delete t[s],e.tags=t.filter(Boolean)}}}),iv=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),Sd=typeof window<"u",cv=()=>({hooks:{"tag:normalise":e=>{var r,a;const{tag:t,entry:s,resolvedOptions:o}=e;o.experimentalHashHydration===!0&&(t._h=Ol(t));const l=typeof t.props._dynamic<"u";!ri.includes(t.tag)||!t.key||Sd||(a=(r=Od())==null?void 0:r.resolvedOptions)!=null&&a.document||(s._m==="server"||l)&&(t._h=t._h||Ol(t),t.props[`data-h-${t._h}`]="")},"tags:resolve":e=>{e.tags=e.tags.map(t=>(delete t.props._dynamic,t))}}}),Bc=["script","link","bodyAttrs"],uv=()=>{const e=(t,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return t==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(s=>(!Bc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(t){if(!Bc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=s,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const s=t.$el;if(!t.tag._eventHandlers||!s)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const a=`${t.tag._d||t.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(t.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const p=r;s.setAttribute(c,""),o.addEventListener(i,p),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(i,p),s.removeAttribute(c)})}),t.tag._delayedSrc&&s.setAttribute("src",t.tag._delayedSrc)}}}},pv=["templateParams","htmlAttrs","bodyAttrs"],dv=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const t=e.key?`${e.tag}:${e.key}`:Ed(e);t&&(e._d=t)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const l=o._d||o._p,r=t[l];if(r){let a=o==null?void 0:o.tagDuplicateStrategy;if(!a&&pv.includes(o.tag)&&(a="merge"),a==="merge"){const c=r.props;["class","style"].forEach(p=>{o.props[p]&&c[p]&&(p==="style"&&!c[p].endsWith(";")&&(c[p]+=";"),o.props[p]=`${c[p]} ${o.props[p]}`)}),t[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}const i=Object.keys(o.props).length;if((i===0||i===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete t[l];return}}t[l]=o});const s=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),e.tags=s}}});function wr(e,t){function s(r){let a="";return["s","pageTitle"].includes(r)?a=t.pageTitle:r.includes(".")&&(a=r.split(".").reduce((i,c)=>i[c]||"",t)),a||t[r]||""}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{e=e.replaceAll(r,s(r.slice(1))).trim()}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function fv(){return{hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,s=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(a=>a.tag==="templateParams"),l=o!==-1?t[o].textContent:{};l.pageTitle=l.pageTitle||s||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=wr(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=wr(a.props.content,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?wr(c,l):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}let $d;const hv=e=>$d=e,Od=()=>$d;async function mv(e,t){const s={tag:e,props:{}};return["title","titleTemplate","templateParams"].includes(e)?(s.textContent=t instanceof Promise?await t:t,s):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?s.props.src=t:(s.innerHTML=t,s.key=Cd(t)),s):!1:(s.props=await gv(e,{...t}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>tv.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||xd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=yv(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function yv(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function gv(e,t){for(const s of Object.keys(t)){const o=s.startsWith("data-");t[s]instanceof Promise&&(t[s]=await t[s]),String(t[s])==="true"?t[s]=o?"true":"":String(t[s])==="false"&&(o?t[s]="false":delete t[s])}return t}const vv=10;async function _v(e){const t=[];return Object.entries(e.resolvedInput).filter(([s,o])=>typeof o<"u"&&Xg.includes(s)).forEach(([s,o])=>{const l=Jg(o);t.push(...l.map(r=>mv(s,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((s,o)=>(s._e=e._i,s._p=(e._i<<vv)+o,s))}const bv=()=>[dv(),rv(),fv(),av(),cv(),uv(),iv()],wv=(e={})=>[sv({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function Av(e={}){const t=kv({...e,plugins:[...wv(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=ov(t.resolvedOptions.document)),hv(t),t}function kv(e={}){let t=[],s={},o=0;const l=Zg();e!=null&&e.hooks&&l.addHooks(e.hooks),e.plugins=[...bv(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),e.document=e.document||(Sd?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const p={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(p._m=c==null?void 0:c.mode),c!=null&&c.transform&&(p._t=c==null?void 0:c.transform),t.push(p),r(),{dispose(){t=t.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(f=>(f._i===p._i&&(p.input=f.input=d,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...t]};await l.callHook("entries:resolve",i);for(const c of i.entries){const p=c._t||(d=>d);c.resolvedInput=p(c.resolvedInput||c.input);for(const d of await _v(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function xv(e){return typeof e=="function"?e():x(e)}function Fl(e,t=""){if(e instanceof Promise)return e;const s=xv(e);if(!e||!s)return s;if(Array.isArray(s))return s.map(o=>Fl(o,t));if(typeof s=="object"){let o=!1;const l=Object.fromEntries(Object.entries(s).map(([r,a])=>r==="titleTemplate"||r.startsWith("on")?[r,x(a)]:((typeof a=="function"||De(a))&&(o=!0),[r,Fl(a,r)])));return o&&ri.includes(String(t))&&(l._dynamic=!0),l}return s}const Cv=$l.startsWith("3"),Ev=typeof window<"u",Fd="usehead";function ai(){return $t()&&Y(Fd)||Od()}function Bv(e){return{install(s){Cv&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(Fd,e))}}.install}function Dv(e={}){const t=Av({...e,domDelayFn:s=>setTimeout(()=>nt(()=>s()),10),plugins:[Sv(),...(e==null?void 0:e.plugins)||[]]});return t.install=Bv(t),t}const Sv=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Fl(t.input)}}});function $v(e,t={}){const s=ai(),o=U(!1),l=U({});ds(()=>{l.value=o.value?{}:Fl(e)});const r=s.push(l.value,t);return me(l,i=>{r.patch(i)}),$t()&&(Vo(()=>{r.dispose()}),Yp(()=>{o.value=!0}),Kp(()=>{o.value=!1})),r}function Ov(e,t={}){return ai().push(e,t)}function ii(e,t={}){var o;const s=ai();if(s){const l=Ev||!!((o=s.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?$v(e,t):Ov(e,t)}}const Fv=e=>ii({htmlAttrs:e});function Pv(e,t){const s=Dv(t||{}),o={unhead:s,install(l){$l.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=ii(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?Bd(s,{document:l}):Dd(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const ao=Symbol("v-click-clicks"),Qn=Symbol("v-click-clicks-elements"),ia=Symbol("v-click-clicks-order-map"),io=Symbol("v-click-clicks-disabled"),Pd=Symbol("slidev-slide-scale"),se=Symbol("slidev-slidev-context"),Tv=Symbol("slidev-route"),Iv=Symbol("slidev-slide-context"),Kn="slidev-vclick-target",Ar="slidev-vclick-hidden",Mv="slidev-vclick-fade",kr="slidev-vclick-hidden-explicitly",zs="slidev-vclick-current",ol="slidev-vclick-prior",Lv=["localhost","127.0.0.1"];let Rv=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Td(e){return e=e??[],Array.isArray(e)?e:[e]}function ca(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Nv(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function jv(e){return e!=null}function Vv(e,t){return Object.fromEntries(Object.entries(e).map(([s,o])=>t(s,o)).filter(jv))}const no={theme:"default",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},layout:"cover"},Ee=no,On=Ee.aspectRatio??16/9,Fn=Ee.canvasWidth??980,ci=Math.ceil(Fn/On),ui=S(()=>Vv(Ee.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Rt(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const hs=He({page:0,clicks:0});let Hv=[],qv=[];Rt(hs,"$syncUp",!0);Rt(hs,"$syncDown",!0);Rt(hs,"$paused",!1);Rt(hs,"$onSet",e=>Hv.push(e));Rt(hs,"$onPatch",e=>qv.push(e));Rt(hs,"$patch",async()=>!1);function Id(e,t,s=!1){const o=[];let l=!1,r=!1,a,i;const c=He(t);function p(y){o.push(y)}function d(y,m){c[y]!==m&&(clearTimeout(a),l=!0,c[y]=m,a=setTimeout(()=>l=!1,0))}function f(y){l||(clearTimeout(i),r=!0,Object.entries(y).forEach(([m,v])=>{c[m]=v}),i=setTimeout(()=>r=!1,0))}function h(y){let m;s?s&&window.addEventListener("storage",_=>{_&&_.key===y&&_.newValue&&f(JSON.parse(_.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",_=>f(_.data)));function v(){!s&&m&&!r?m.postMessage(pe(c)):s&&!r&&window.localStorage.setItem(y,JSON.stringify(c)),l||o.forEach(_=>_(c))}if(me(c,v,{deep:!0}),s){const _=window.localStorage.getItem(y);_&&f(JSON.parse(_))}}return{init:h,onPatch:p,patch:d,state:c}}const{init:Wv,onPatch:zv,patch:Us,state:xr}=Id(hs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ms=He({});let Uv=[],Kv=[];Rt(ms,"$syncUp",!0);Rt(ms,"$syncDown",!0);Rt(ms,"$paused",!1);Rt(ms,"$onSet",e=>Uv.push(e));Rt(ms,"$onPatch",e=>Kv.push(e));Rt(ms,"$patch",async()=>!1);const{init:Yv,onPatch:Qv,patch:Md,state:Pl}=Id(ms,{},!1),Gv="modulepreload",Zv=function(e){return"/pymi-polars/"+e},Dc={},Pn=function(t,s,o){if(!s||s.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Zv(r),r in Dc)return;Dc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":Gv,a||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),a)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Sc;const zt=typeof window<"u",Jv=e=>typeof e<"u",Xv=Object.prototype.toString,Eo=e=>typeof e=="function",e_=e=>typeof e=="number",Ld=e=>typeof e=="string",ua=e=>Xv.call(e)==="[object Object]",pa=()=>+Date.now(),$s=()=>{},t_=zt&&((Sc=window==null?void 0:window.navigator)==null?void 0:Sc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(e){return typeof e=="function"?e():x(e)}function n_(e,t){function s(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return s}const Rd=e=>e();function s_(e=Rd){const t=U(!0);function s(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&e(...r)};return{isActive:Zt(t),pause:s,resume:o,eventFilter:l}}function o_(e){return e}function l_(e,t){var s;if(typeof e=="number")return e+t;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?e:r+l}function r_(e,t){let s,o,l;const r=U(!0),a=()=>{r.value=!0,l()};me(e,a,{flush:"sync"});const i=Eo(t)?t:t.get,c=Eo(t)?void 0:t.set,p=Dp((d,f)=>(o=d,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(p)&&(p.trigger=a),p}function nn(e){return qa()?(dp(e),!0):!1}function a_(e){if(!De(e))return He(e);const t=new Proxy({},{get(s,o,l){return x(Reflect.get(e.value,o,l))},set(s,o,l){return De(e.value[o])&&!De(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return He(t)}function Nd(e){return typeof e=="function"?S(e):U(e)}var i_=Object.defineProperty,c_=Object.defineProperties,u_=Object.getOwnPropertyDescriptors,$c=Object.getOwnPropertySymbols,p_=Object.prototype.hasOwnProperty,d_=Object.prototype.propertyIsEnumerable,Oc=(e,t,s)=>t in e?i_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f_=(e,t)=>{for(var s in t||(t={}))p_.call(t,s)&&Oc(e,s,t[s]);if($c)for(var s of $c(t))d_.call(t,s)&&Oc(e,s,t[s]);return e},h_=(e,t)=>c_(e,u_(t));function m_(e){if(!De(e))return km(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=Dp(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[s]=o,e.value=l}else{const l=h_(f_({},e.value),{[s]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return t}function pi(e,t=!0){$t()?fs(e):t?e():nt(e)}function y_(e){$t()&&Xl(e)}function g_(e,t=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=U(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function p(){const d=lt(t);d<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,d))}if(o&&zt&&p(),De(t)||Eo(t)){const d=me(t,()=>{a.value&&zt&&p()});nn(d)}return nn(c),{isActive:a,pause:c,resume:p}}function v_(e,t,s={}){const{immediate:o=!0}=s,l=U(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...p){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...p)},lt(t))}return o&&(l.value=!0,zt&&c()),nn(i),{isPending:Zt(l),start:c,stop:i}}function jd(e=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,l=De(e),r=U(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=lt(s);return r.value=r.value===c?lt(o):c,r.value}}return l?a:[r,a]}var Fc=Object.getOwnPropertySymbols,__=Object.prototype.hasOwnProperty,b_=Object.prototype.propertyIsEnumerable,w_=(e,t)=>{var s={};for(var o in e)__.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Fc)for(var o of Fc(e))t.indexOf(o)<0&&b_.call(e,o)&&(s[o]=e[o]);return s};function A_(e,t,s={}){const o=s,{eventFilter:l=Rd}=o,r=w_(o,["eventFilter"]);return me(e,n_(l,t),r)}var k_=Object.defineProperty,x_=Object.defineProperties,C_=Object.getOwnPropertyDescriptors,Tl=Object.getOwnPropertySymbols,Vd=Object.prototype.hasOwnProperty,Hd=Object.prototype.propertyIsEnumerable,Pc=(e,t,s)=>t in e?k_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,E_=(e,t)=>{for(var s in t||(t={}))Vd.call(t,s)&&Pc(e,s,t[s]);if(Tl)for(var s of Tl(t))Hd.call(t,s)&&Pc(e,s,t[s]);return e},B_=(e,t)=>x_(e,C_(t)),D_=(e,t)=>{var s={};for(var o in e)Vd.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Tl)for(var o of Tl(e))t.indexOf(o)<0&&Hd.call(e,o)&&(s[o]=e[o]);return s};function S_(e,t,s={}){const o=s,{eventFilter:l}=o,r=D_(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:p}=s_(l);return{stop:A_(e,t,B_(E_({},r),{eventFilter:a})),pause:i,resume:c,isActive:p}}function Bt(e){var t;const s=lt(e);return(t=s==null?void 0:s.$el)!=null?t:s}const et=zt?window:void 0,qd=zt?window.document:void 0,$_=zt?window.navigator:void 0;function ye(...e){let t,s,o,l;if(Ld(e[0])||Array.isArray(e[0])?([s,o,l]=e,t=et):[t,s,o,l]=e,!t)return $s;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,h,y)=>(d.addEventListener(f,h,y),()=>d.removeEventListener(f,h,y)),c=me(()=>[Bt(t),lt(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(h=>o.map(y=>i(d,h,y,f))))},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return nn(p),p}let Tc=!1;function O_(e,t,s={}){const{window:o=et,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;t_&&!Tc&&(Tc=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",$s)));let i=!0;const c=h=>l.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(m=>m===h.target||h.composedPath().includes(m));{const m=Bt(y);return m&&(h.target===m||h.composedPath().includes(m))}}),d=[ye(o,"click",h=>{const y=Bt(e);if(!(!y||y===h.target||h.composedPath().includes(y))){if(h.detail===0&&(i=!c(h)),!i){i=!0;return}t(h)}},{passive:!0,capture:r}),ye(o,"pointerdown",h=>{const y=Bt(e);y&&(i=!h.composedPath().includes(y)&&!c(h))},{passive:!0}),a&&ye(o,"blur",h=>{var y;const m=Bt(e);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(h)})].filter(Boolean);return()=>d.forEach(h=>h())}const F_=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function P_(...e){let t,s,o={};e.length===3?(t=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,s=e[0],o=e[1]):(t=e[0],s=e[1]):(t=!0,s=e[0]);const{target:l=et,eventName:r="keydown",passive:a=!1}=o,i=F_(t);return ye(l,r,p=>{i(p)&&s(p)},a)}function T_(e={}){var t;const{window:s=et}=e,o=(t=e.document)!=null?t:s==null?void 0:s.document,l=r_(()=>null,()=>o==null?void 0:o.activeElement);return s&&(ye(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),ye(s,"focus",l.trigger,!0)),l}function zo(e,t=!1){const s=U(),o=()=>s.value=Boolean(e());return o(),pi(o,t),s}function ks(e,t={}){const{window:s=et}=t,o=zo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=U(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(Nd(e).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return ds(i),nn(()=>a()),r}const I_={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var M_=Object.defineProperty,Ic=Object.getOwnPropertySymbols,L_=Object.prototype.hasOwnProperty,R_=Object.prototype.propertyIsEnumerable,Mc=(e,t,s)=>t in e?M_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,N_=(e,t)=>{for(var s in t||(t={}))L_.call(t,s)&&Mc(e,s,t[s]);if(Ic)for(var s of Ic(t))R_.call(t,s)&&Mc(e,s,t[s]);return e};function j_(e,t={}){function s(i,c){let p=e[i];return c!=null&&(p=l_(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=et}=t;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>ks(`(min-width: ${s(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return N_({greater(i){return ks(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return ks(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return ks(`(max-width: ${s(i)})`,t)},between(i,c){return ks(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function V_(e={}){const{navigator:t=$_,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=zo(()=>t&&"clipboard"in t),c=S(()=>i.value||r),p=U(""),d=U(!1),f=v_(()=>d.value=!1,l);function h(){i.value?t.clipboard.readText().then(_=>{p.value=_}):p.value=v()}if(c.value&&s)for(const _ of a)ye(_,h);async function y(_=lt(o)){c.value&&_!=null&&(i.value?await t.clipboard.writeText(_):m(_),p.value=_,d.value=!0,f.start())}function m(_){const k=document.createElement("textarea");k.value=_??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function v(){var _,k,w;return(w=(k=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:k.toString())!=null?w:""}return{isSupported:c,text:p,copied:d,copy:y}}function H_(e){return JSON.parse(JSON.stringify(e))}const da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fa="__vueuse_ssr_handlers__";da[fa]=da[fa]||{};const q_=da[fa];function W_(e,t){return q_[e]||t}function z_(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var U_=Object.defineProperty,Lc=Object.getOwnPropertySymbols,K_=Object.prototype.hasOwnProperty,Y_=Object.prototype.propertyIsEnumerable,Rc=(e,t,s)=>t in e?U_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Nc=(e,t)=>{for(var s in t||(t={}))K_.call(t,s)&&Rc(e,s,t[s]);if(Lc)for(var s of Lc(t))Y_.call(t,s)&&Rc(e,s,t[s]);return e};const Q_={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},jc="vueuse-storage";function G_(e,t,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:d,window:f=et,eventFilter:h,onError:y=$=>{console.error($)}}=o,m=(d?tn:U)(t);if(!s)try{s=W_("getDefaultStorage",()=>{var $;return($=et)==null?void 0:$.localStorage})()}catch($){y($)}if(!s)return m;const v=lt(t),_=z_(v),k=(l=o.serializer)!=null?l:Q_[_],{pause:w,resume:A}=S_(m,()=>C(m.value),{flush:r,deep:a,eventFilter:h});return f&&i&&(ye(f,"storage",q),ye(f,jc,M)),q(),m;function C($){try{if($==null)s.removeItem(e);else{const V=k.write($),J=s.getItem(e);J!==V&&(s.setItem(e,V),f&&f.dispatchEvent(new CustomEvent(jc,{detail:{key:e,oldValue:J,newValue:V,storageArea:s}})))}}catch(V){y(V)}}function O($){const V=$?$.newValue:s.getItem(e);if(V==null)return c&&v!==null&&s.setItem(e,k.write(v)),v;if(!$&&p){const J=k.read(V);return Eo(p)?p(J,v):_==="object"&&!Array.isArray(J)?Nc(Nc({},v),J):J}else return typeof V!="string"?V:k.read(V)}function M($){q($.detail)}function q($){if(!($&&$.storageArea!==s)){if($&&$.key==null){m.value=v;return}if(!($&&$.key!==e)){w();try{m.value=O($)}catch(V){y(V)}finally{$?nt(A):A()}}}}}function Z_(e){return ks("(prefers-color-scheme: dark)",e)}var J_=Object.defineProperty,X_=Object.defineProperties,e0=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,t0=Object.prototype.hasOwnProperty,n0=Object.prototype.propertyIsEnumerable,Hc=(e,t,s)=>t in e?J_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,s0=(e,t)=>{for(var s in t||(t={}))t0.call(t,s)&&Hc(e,s,t[s]);if(Vc)for(var s of Vc(t))n0.call(t,s)&&Hc(e,s,t[s]);return e},o0=(e,t)=>X_(e,e0(t));function RB(e,t={}){var s,o,l;const r=(s=t.draggingElement)!=null?s:et,a=(o=t.handle)!=null?o:e,i=U((l=lt(t.initialValue))!=null?l:{x:0,y:0}),c=U(),p=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,d=m=>{lt(t.preventDefault)&&m.preventDefault(),lt(t.stopPropagation)&&m.stopPropagation()},f=m=>{var v;if(!p(m)||lt(t.exact)&&m.target!==lt(e))return;const _=lt(e).getBoundingClientRect(),k={x:m.clientX-_.left,y:m.clientY-_.top};((v=t.onStart)==null?void 0:v.call(t,k,m))!==!1&&(c.value=k,d(m))},h=m=>{var v;p(m)&&c.value&&(i.value={x:m.clientX-c.value.x,y:m.clientY-c.value.y},(v=t.onMove)==null||v.call(t,i.value,m),d(m))},y=m=>{var v;p(m)&&c.value&&(c.value=void 0,(v=t.onEnd)==null||v.call(t,i.value,m),d(m))};return zt&&(ye(a,"pointerdown",f,!0),ye(r,"pointermove",h,!0),ye(r,"pointerup",y,!0)),o0(s0({},m_(i)),{position:i,isDragging:S(()=>!!c.value),style:S(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var qc=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,r0=Object.prototype.propertyIsEnumerable,a0=(e,t)=>{var s={};for(var o in e)l0.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&qc)for(var o of qc(e))t.indexOf(o)<0&&r0.call(e,o)&&(s[o]=e[o]);return s};function i0(e,t,s={}){const o=s,{window:l=et}=o,r=a0(o,["window"]);let a;const i=zo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},p=me(()=>Bt(e),f=>{c(),i.value&&l&&f&&(a=new ResizeObserver(t),a.observe(f,r))},{immediate:!0,flush:"post"}),d=()=>{c(),p()};return nn(d),{isSupported:i,stop:d}}function c0(e,t={}){const{immediate:s=!0,window:o=et}=t,l=U(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const f=d-r;e({delta:f,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),nn(p),{isActive:Zt(l),pause:p,resume:c}}function u0(e,t={width:0,height:0},s={}){const{window:o=et,box:l="content-box"}=s,r=S(()=>{var c,p;return(p=(c=Bt(e))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),a=U(t.width),i=U(t.height);return i0(e,([c])=>{const p=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=Bt(e);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];a.value=d.reduce((f,{inlineSize:h})=>f+h,0),i.value=d.reduce((f,{blockSize:h})=>f+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),me(()=>Bt(e),c=>{a.value=c?t.width:0,i.value=c?t.height:0}),{width:a,height:i}}const Wc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function p0(e,t={}){const{document:s=qd,autoExit:o=!1}=t,l=e||(s==null?void 0:s.querySelector("html")),r=U(!1);let a=Wc[0];const i=zo(()=>{if(s){for(const v of Wc)if(v[1]in s)return a=v,!0}else return!1;return!1}),[c,p,d,,f]=a;async function h(){i.value&&(s!=null&&s[d]&&await s[p](),r.value=!1)}async function y(){if(!i.value)return;await h();const v=Bt(l);v&&(await v[c](),r.value=!0)}async function m(){r.value?await h():await y()}return s&&ye(s,f,()=>{r.value=!!(s!=null&&s[d])},!1),o&&nn(h),{isSupported:i,isFullscreen:r,enter:y,exit:h,toggle:m}}function d0(e,t,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=et}=s,i=zo(()=>a&&"IntersectionObserver"in a);let c=$s;const p=i.value?me(()=>({el:Bt(e),root:Bt(o)}),({el:f,root:h})=>{if(c(),!f)return;const y=new IntersectionObserver(t,{root:h,rootMargin:l,threshold:r});y.observe(f),c=()=>{y.disconnect(),c=$s}},{immediate:!0,flush:"post"}):$s,d=()=>{c(),p()};return nn(d),{isSupported:i,stop:d}}function Ut(e,t,s={}){const{window:o=et}=s;return G_(e,t,o==null?void 0:o.localStorage,s)}const f0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function h0(e={}){const{reactive:t=!1,target:s=et,aliasMap:o=f0,passive:l=!0,onEventFired:r=$s}=e,a=He(new Set),i={toJSON(){return{}},current:a},c=t?He(i):i,p=new Set,d=new Set;function f(v,_){v in c&&(t?c[v]=_:c[v].value=_)}function h(){a.clear();for(const v of d)f(v,!1)}function y(v,_){var k,w;const A=(k=v.key)==null?void 0:k.toLowerCase(),O=[(w=v.code)==null?void 0:w.toLowerCase(),A].filter(Boolean);A&&(_?a.add(A):a.delete(A));for(const M of O)d.add(M),f(M,_);A==="meta"&&!_?(p.forEach(M=>{a.delete(M),f(M,!1)}),p.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&_&&[...a,...O].forEach(M=>p.add(M))}ye(s,"keydown",v=>(y(v,!0),r(v)),{passive:l}),ye(s,"keyup",v=>(y(v,!1),r(v)),{passive:l}),ye("blur",h,{passive:!0}),ye("focus",h,{passive:!0});const m=new Proxy(c,{get(v,_,k){if(typeof _!="string")return Reflect.get(v,_,k);if(_=_.toLowerCase(),_ in o&&(_=o[_]),!(_ in c))if(/[+_-]/.test(_)){const A=_.split(/[+_-]/g).map(C=>C.trim());c[_]=S(()=>A.every(C=>x(m[C])))}else c[_]=U(!1);const w=Reflect.get(v,_,k);return t?x(w):w}});return m}function NB(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=et,eventFilter:a}=e,i=U(l.x),c=U(l.y),p=U(null),d=v=>{t==="page"?(i.value=v.pageX,c.value=v.pageY):t==="client"?(i.value=v.clientX,c.value=v.clientY):t==="movement"&&(i.value=v.movementX,c.value=v.movementY),p.value="mouse"},f=()=>{i.value=l.x,c.value=l.y},h=v=>{if(v.touches.length>0){const _=v.touches[0];t==="page"?(i.value=_.pageX,c.value=_.pageY):t==="client"&&(i.value=_.clientX,c.value=_.clientY),p.value="touch"}},y=v=>a===void 0?d(v):a(()=>d(v),{}),m=v=>a===void 0?h(v):a(()=>h(v),{});return r&&(ye(r,"mousemove",y,{passive:!0}),ye(r,"dragover",y,{passive:!0}),s&&t!=="movement"&&(ye(r,"touchstart",m,{passive:!0}),ye(r,"touchmove",m,{passive:!0}),o&&ye(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:p}}var pn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(pn||(pn={}));function m0(e,t={}){const s=Nd(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,i=He({x:0,y:0}),c=(M,q)=>{i.x=M,i.y=q},p=He({x:0,y:0}),d=(M,q)=>{p.x=M,p.y=q},f=S(()=>i.x-p.x),h=S(()=>i.y-p.y),{max:y,abs:m}=Math,v=S(()=>y(m(f.value),m(h.value))>=o),_=U(!1),k=U(!1),w=S(()=>v.value?m(f.value)>m(h.value)?f.value>0?pn.LEFT:pn.RIGHT:h.value>0?pn.UP:pn.DOWN:pn.NONE),A=M=>{var q,$,V;const J=M.buttons===0,ie=M.buttons===1;return(V=($=(q=t.pointerTypes)==null?void 0:q.includes(M.pointerType))!=null?$:J||ie)!=null?V:!0},C=[ye(e,"pointerdown",M=>{var q,$;if(!A(M))return;k.value=!0,($=(q=s.value)==null?void 0:q.style)==null||$.setProperty("touch-action","none");const V=M.target;V==null||V.setPointerCapture(M.pointerId);const{clientX:J,clientY:ie}=M;c(J,ie),d(J,ie),a==null||a(M)}),ye(e,"pointermove",M=>{if(!A(M)||!k.value)return;const{clientX:q,clientY:$}=M;d(q,$),!_.value&&v.value&&(_.value=!0),_.value&&(l==null||l(M))}),ye(e,"pointerup",M=>{var q,$;A(M)&&(_.value&&(r==null||r(M,w.value)),k.value=!1,_.value=!1,($=(q=s.value)==null?void 0:q.style)==null||$.setProperty("touch-action","initial"))})],O=()=>C.forEach(M=>M());return{isSwiping:Zt(_),direction:Zt(w),posStart:Zt(i),posEnd:Zt(p),distanceX:f,distanceY:h,stop:O}}let y0=0;function jB(e,t={}){const s=U(!1),{document:o=qd,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++y0}`}=t,i=U(e);let c=()=>{};const p=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),o.head.appendChild(f)),!s.value&&(c=me(i,h=>{f.textContent=h},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&pi(p),r||nn(d),{id:a,css:i,unload:d,load:p,isLoaded:Zt(s)}}var g0=Object.defineProperty,zc=Object.getOwnPropertySymbols,v0=Object.prototype.hasOwnProperty,_0=Object.prototype.propertyIsEnumerable,Uc=(e,t,s)=>t in e?g0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b0=(e,t)=>{for(var s in t||(t={}))v0.call(t,s)&&Uc(e,s,t[s]);if(zc)for(var s of zc(t))_0.call(t,s)&&Uc(e,s,t[s]);return e};function VB(e={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=U(pa()+s),i=()=>a.value=pa()+s,c=r?()=>{i(),r(a.value)}:i,p=l==="requestAnimationFrame"?c0(c,{immediate:o}):g_(c,l,{immediate:o});return t?b0({timestamp:a},p):a}var w0=Object.defineProperty,Kc=Object.getOwnPropertySymbols,A0=Object.prototype.hasOwnProperty,k0=Object.prototype.propertyIsEnumerable,Yc=(e,t,s)=>t in e?w0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x0=(e,t)=>{for(var s in t||(t={}))A0.call(t,s)&&Yc(e,s,t[s]);if(Kc)for(var s of Kc(t))k0.call(t,s)&&Yc(e,s,t[s]);return e};const C0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};x0({linear:o_},C0);function Jt(e,t,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:p,deep:d=!1,defaultValue:f}=o,h=$t(),y=s||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let m=p;t||(t="modelValue"),m=p||m||`update:${t.toString()}`;const v=k=>i?Eo(i)?i(k):H_(k):k,_=()=>Jv(e[t])?v(e[t]):f;if(c){const k=_(),w=U(k);return me(()=>e[t],A=>w.value=v(A)),me(w,A=>{(A!==e[t]||d)&&y(m,A)},{deep:d}),w}else return S({get(){return _()},set(k){y(m,k)}})}function HB({window:e=et}={}){if(!e)return U(!1);const t=U(e.document.hasFocus());return ye(e,"blur",()=>{t.value=!1}),ye(e,"focus",()=>{t.value=!0}),t}function E0(e={}){const{window:t=et,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=U(s),i=U(o),c=()=>{t&&(r?(a.value=t.innerWidth,i.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),pi(c),ye("resize",c,{passive:!0}),l&&ye("orientationchange",c,{passive:!0}),{width:a,height:i}}function B0(){return Wd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Wd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const D0=typeof Proxy=="function",S0="devtools-plugin:setup",$0="plugin:settings:set";let gs,ha;function O0(){var e;return gs!==void 0||(typeof window<"u"&&window.performance?(gs=!0,ha=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(gs=!0,ha=global.perf_hooks.performance):gs=!1),gs}function F0(){return O0()?ha.now():Date.now()}class P0{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const a in t.settings){const i=t.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return F0()}},s&&s.on($0,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(p=>{this.targetQueue.push({method:i,args:c,resolve:p})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function T0(e,t){const s=e,o=Wd(),l=B0(),r=D0&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(S0,e,t);else{const a=r?new P0(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const cn=typeof window<"u";function I0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Fe=Object.assign;function Cr(e,t){const s={};for(const o in t){const l=t[o];s[o]=St(l)?l.map(e):e(l)}return s}const co=()=>{},St=Array.isArray;function Ce(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const M0=/\/$/,L0=e=>e.replace(M0,"");function Er(e,t,s="/"){let o,l={},r="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),l=e(r)),i>-1&&(o=o||t.slice(0,i),a=t.slice(i,t.length)),o=j0(o??t,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function R0(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Qc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gc(e,t,s){const o=t.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Rn(t.matched[o],s.matched[l])&&zd(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!N0(e[s],t[s]))return!1;return!0}function N0(e,t){return St(e)?Zc(e,t):St(t)?Zc(t,e):e===t}function Zc(e,t){return St(t)?e.length===t.length&&e.every((s,o)=>s===t[o]):e.length===1&&e[0]===t}function j0(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const s=t.split("/"),o=e.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Bo;(function(e){e.pop="pop",e.push="push"})(Bo||(Bo={}));var uo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(uo||(uo={}));function V0(e){if(!e)if(cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),L0(e)}const H0=/^[^#]+#/;function q0(e,t){return e.replace(H0,"#")+t}function W0(e,t){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function z0(e){let t;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=W0(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Jc(e,t){return(history.state?history.state.position-t:-1)+e}const ma=new Map;function U0(e,t){ma.set(e,t)}function K0(e){const t=ma.get(e);return ma.delete(e),t}let Y0=()=>location.protocol+"//"+location.host;function Ud(e,t){const{pathname:s,search:o,hash:l}=t,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),Qc(c,"")}return Qc(s,e)+o+l}function Q0(e,t,s,o){let l=[],r=[],a=null;const i=({state:h})=>{const y=Ud(e,location),m=s.value,v=t.value;let _=0;if(h){if(s.value=y,t.value=h,a&&a===m){a=null;return}_=v?h.position-v.position:0}else o(y);l.forEach(k=>{k(s.value,m,{delta:_,type:Bo.pop,direction:_?_>0?uo.forward:uo.back:uo.unknown})})};function c(){a=s.value}function p(h){l.push(h);const y=()=>{const m=l.indexOf(h);m>-1&&l.splice(m,1)};return r.push(y),y}function d(){const{history:h}=window;h.state&&h.replaceState(Fe({},h.state,{scroll:sr()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:p,destroy:f}}function Xc(e,t,s,o=!1,l=!1){return{back:e,current:t,forward:s,replaced:o,position:window.history.length,scroll:l?sr():null}}function G0(e){const{history:t,location:s}=window,o={value:Ud(e,s)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,p,d){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:Y0()+e+c;try{t[d?"replaceState":"pushState"](p,"",h),l.value=p}catch(y){Ce("Error with push/replace State",y),s[d?"replace":"assign"](h)}}function a(c,p){const d=Fe({},t.state,Xc(l.value.back,c,l.value.forward,!0),p,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,p){const d=Fe({},l.value,t.state,{forward:c,scroll:sr()});t.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Fe({},Xc(o.value,c,null),{position:d.position+1},p);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function Z0(e){e=V0(e);const t=G0(e),s=Q0(e,t.state,t.location,t.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Fe({location:"",base:e,go:o,createHref:q0.bind(null,e)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function J0(e){return typeof e=="string"||e&&typeof e=="object"}function Kd(e){return typeof e=="string"||typeof e=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yd=Symbol("navigation failure");var eu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(eu||(eu={}));const X0={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${t8(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Is(e,t){return Fe(new Error(X0[e](t)),{type:e,[Yd]:!0},t)}function sn(e,t){return e instanceof Error&&Yd in e&&(t==null||!!(e.type&t))}const e8=["params","query","hash"];function t8(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const s of e8)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const tu="[^/]+?",n8={sensitive:!1,strict:!1,start:!0,end:!0},s8=/[.+*?^${}()[\]/\\]/g;function o8(e,t){const s=Fe({},n8,t),o=[];let l=s.start?"^":"";const r=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(l+="/");for(let f=0;f<p.length;f++){const h=p[f];let y=40+(s.sensitive?.25:0);if(h.type===0)f||(l+="/"),l+=h.value.replace(s8,"\\$&"),y+=40;else if(h.type===1){const{value:m,repeatable:v,optional:_,regexp:k}=h;r.push({name:m,repeatable:v,optional:_});const w=k||tu;if(w!==tu){y+=10;try{new RegExp(`(${w})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+C.message)}}let A=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(A=_&&p.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),l+=A,y+=20,_&&(y+=-8),v&&(y+=-20),w===".*"&&(y+=-50)}d.push(y)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(p){const d=p.match(a),f={};if(!d)return null;for(let h=1;h<d.length;h++){const y=d[h]||"",m=r[h-1];f[m.name]=y&&m.repeatable?y.split("/"):y}return f}function c(p){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const y of h)if(y.type===0)d+=y.value;else if(y.type===1){const{value:m,repeatable:v,optional:_}=y,k=m in p?p[m]:"";if(St(k)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=St(k)?k.join("/"):k;if(!w)if(_)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=w}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function l8(e,t){let s=0;for(;s<e.length&&s<t.length;){const o=t[s]-e[s];if(o)return o;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function r8(e,t){let s=0;const o=e.score,l=t.score;for(;s<o.length&&s<l.length;){const r=l8(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(nu(o))return 1;if(nu(l))return-1}return l.length-o.length}function nu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const a8={type:0,value:""},i8=/[a-zA-Z0-9_]/;function c8(e){if(!e)return[[]];if(e==="/")return[[a8]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(y){throw new Error(`ERR (${s})/"${p}": ${y}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,p="",d="";function f(){p&&(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(p&&f(),a()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:i8.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),a(),l}function u8(e,t,s){const o=o8(c8(e.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Ce(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Fe(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function p8(e,t){const s=[],o=new Map;t=lu({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,f,h){const y=!h,m=d8(d);y8(m,f),m.aliasOf=h&&h.record;const v=lu(t,d),_=[m];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of A)_.push(Fe({},m,{components:h?h.record.components:m.components,path:C,aliasOf:h?h.record:m}))}let k,w;for(const A of _){const{path:C}=A;if(f&&C[0]!=="/"){const O=f.record.path,M=O[O.length-1]==="/"?"":"/";A.path=f.record.path+(C&&M+C)}if(A.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=u8(A,f,v),f&&C[0]==="/"&&g8(k,f),h?(h.alias.push(k),m8(h,k)):(w=w||k,w!==k&&w.alias.push(k),y&&d.name&&!ou(k)&&a(d.name)),m.children){const O=m.children;for(let M=0;M<O.length;M++)r(O[M],k,h&&h.children[M])}h=h||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return w?()=>{a(w)}:co}function a(d){if(Kd(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&r8(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Qd(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!ou(d)&&o.set(d.record.name,d)}function p(d,f){let h,y={},m,v;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw Is(1,{location:d});{const w=Object.keys(d.params||{}).filter(A=>!h.keys.find(C=>C.name===A));w.length&&Ce(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=h.record.name,y=Fe(su(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),d.params&&su(d.params,h.keys.map(w=>w.name))),m=h.stringify(y)}else if("path"in d)m=d.path,m.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(w=>w.re.test(m)),h&&(y=h.parse(m),v=h.record.name);else{if(h=f.name?o.get(f.name):s.find(w=>w.re.test(f.path)),!h)throw Is(1,{location:d,currentLocation:f});v=h.record.name,y=Fe({},f.params,d.params),m=h.stringify(y)}const _=[];let k=h;for(;k;)_.unshift(k.record),k=k.parent;return{name:v,path:m,params:y,matched:_,meta:h8(_)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:p,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function su(e,t){const s={};for(const o of t)o in e&&(s[o]=e[o]);return s}function d8(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:f8(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function f8(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const o in e.components)t[o]=typeof s=="boolean"?s:s[o];return t}function ou(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function h8(e){return e.reduce((t,s)=>Fe(t,s.meta),{})}function lu(e,t){const s={};for(const o in e)s[o]=o in t?t[o]:e[o];return s}function ya(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function m8(e,t){for(const s of e.keys)if(!s.optional&&!t.keys.find(ya.bind(null,s)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!e.keys.find(ya.bind(null,s)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function y8(e,t){t&&t.record.name&&!e.name&&!e.path&&Ce(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function g8(e,t){for(const s of t.keys)if(!e.keys.find(ya.bind(null,s)))return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function Qd(e,t){return t.children.some(s=>s===e||Qd(e,s))}const Gd=/#/g,v8=/&/g,_8=/\//g,b8=/=/g,w8=/\?/g,Zd=/\+/g,A8=/%5B/g,k8=/%5D/g,Jd=/%5E/g,x8=/%60/g,Xd=/%7B/g,C8=/%7C/g,ef=/%7D/g,E8=/%20/g;function di(e){return encodeURI(""+e).replace(C8,"|").replace(A8,"[").replace(k8,"]")}function B8(e){return di(e).replace(Xd,"{").replace(ef,"}").replace(Jd,"^")}function ga(e){return di(e).replace(Zd,"%2B").replace(E8,"+").replace(Gd,"%23").replace(v8,"%26").replace(x8,"`").replace(Xd,"{").replace(ef,"}").replace(Jd,"^")}function D8(e){return ga(e).replace(b8,"%3D")}function S8(e){return di(e).replace(Gd,"%23").replace(w8,"%3F")}function $8(e){return e==null?"":S8(e).replace(_8,"%2F")}function Do(e){try{return decodeURIComponent(""+e)}catch{Ce(`Error decoding "${e}". Using original value`)}return""+e}function O8(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Zd," "),a=r.indexOf("="),i=Do(a<0?r:r.slice(0,a)),c=a<0?null:Do(r.slice(a+1));if(i in t){let p=t[i];St(p)||(p=t[i]=[p]),p.push(c)}else t[i]=c}return t}function ru(e){let t="";for(let s in e){const o=e[s];if(s=D8(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(St(o)?o.map(r=>r&&ga(r)):[o&&ga(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function F8(e){const t={};for(const s in e){const o=e[s];o!==void 0&&(t[s]=St(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const P8=Symbol("router view location matched"),au=Symbol("router view depth"),fi=Symbol("router"),tf=Symbol("route location"),va=Symbol("router view location");function Ks(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function xn(e,t,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Is(4,{from:s,to:t})):f instanceof Error?i(f):J0(f)?i(Is(2,{from:t,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},p=e.call(o&&o.instances[l],t,s,T8(c,t,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(h=>c._called?h:(Ce(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!c._called){Ce(f),i(new Error("Invalid navigation guard"));return}}d.catch(f=>i(f))})}function T8(e,t,s){let o=0;return function(){o++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Br(e,t,s,o){const l=[];for(const r of e){!r.components&&!r.children.length&&Ce(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Ce(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Ce(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Ce(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(I8(i)){const p=(i.__vccOpts||i)[t];p&&l.push(xn(p,s,o,r,a))}else{let c=i();"catch"in c||(Ce(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=I0(p)?p.default:p;r.components[a]=d;const h=(d.__vccOpts||d)[t];return h&&xn(h,s,o,r,a)()}))}}}return l}function I8(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function iu(e){const t=Y(fi),s=Y(tf),o=S(()=>t.resolve(x(e.to))),l=S(()=>{const{matched:c}=o.value,{length:p}=c,d=c[p-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(Rn.bind(null,d));if(h>-1)return h;const y=cu(c[p-2]);return p>1&&cu(d)===y&&f[f.length-1].path!==y?f.findIndex(Rn.bind(null,c[p-2])):h}),r=S(()=>l.value>-1&&N8(s.params,o.value.params)),a=S(()=>l.value>-1&&l.value===s.matched.length-1&&zd(s.params,o.value.params));function i(c={}){return R8(c)?t[x(e.replace)?"replace":"push"](x(e.to)).catch(co):Promise.resolve()}if(cn){const c=$t();if(c){const p={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(p),ds(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=a.value},{flush:"post"})}}return{route:o,href:S(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const M8=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:iu,setup(e,{slots:t}){const s=He(iu(e)),{options:o}=Y(fi),l=S(()=>({[uu(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[uu(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return e.custom?r:at("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),L8=M8;function R8(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function N8(e,t){for(const s in t){const o=t[s],l=e[s];if(typeof o=="string"){if(o!==l)return!1}else if(!St(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function cu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const uu=(e,t,s)=>e??t??s,j8=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){H8();const o=Y(va),l=S(()=>e.route||o.value),r=Y(au,0),a=S(()=>{let p=x(r);const{matched:d}=l.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),i=S(()=>l.value.matched[a.value]);Et(au,S(()=>a.value+1)),Et(P8,i),Et(va,l);const c=U();return me(()=>[c.value,i.value,e.name],([p,d,f],[h,y,m])=>{d&&(d.instances[f]=p,y&&y!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),p&&d&&(!y||!Rn(d,y)||!h)&&(d.enterCallbacks[f]||[]).forEach(v=>v(p))},{flush:"post"}),()=>{const p=l.value,d=e.name,f=i.value,h=f&&f.components[d];if(!h)return pu(s.default,{Component:h,route:p});const y=f.props[d],m=y?y===!0?p.params:typeof y=="function"?y(p):y:null,_=at(h,Fe({},m,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(cn&&_.ref){const k={depth:a.value,name:f.name,path:f.path,meta:f.meta};(St(_.ref)?_.ref.map(A=>A.i):[_.ref.i]).forEach(A=>{A.__vrv_devtools=k})}return pu(s.default,{Component:_,route:p})||_}}});function pu(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const V8=j8;function H8(){const e=$t(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ys(e,t){const s=Fe({},e,{matched:e.matched.map(o=>Z8(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:s}}}function ll(e){return{_custom:{display:e}}}let q8=0;function W8(e,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=q8++;T0({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ys(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:nf})}St(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(h=>{let y=lf,m="";h.isExactActive?(y=of,m="This is exactly active"):h.isActive&&(y=sf,m="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:y})}))}),me(t.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const h={guard:ll("beforeEach"),from:Ys(f,"Current Location during this navigation"),to:Ys(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,h)=>{const y={guard:ll("afterEach")};h?(y.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},y.status=ll("❌")):y.status=ll("✅"),y.from=Ys(f,"Current Location during this navigation"),y.to=Ys(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:y,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!p)return;const d=p;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(cf),d.filter&&(f=f.filter(h=>_a(h,d.filter.toLowerCase()))),f.forEach(h=>af(h,t.currentRoute.value)),d.rootNodes=f.map(rf)}let p;l.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===i){const h=s.getRoutes().find(y=>y.record.__vd_id===d.nodeId);h&&(d.state={options:U8(h)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function z8(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function U8(e){const{record:t}=e,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${z8(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const nf=15485081,sf=2450411,of=8702998,K8=2282478,lf=16486972,Y8=6710886;function rf(e){const t=[],{record:s}=e;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:K8}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:lf}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:nf}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:of}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:sf}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Y8});let o=s.__vd_id;return o==null&&(o=String(Q8++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:e.children.map(rf)}}let Q8=0;const G8=/^\/(.*)\/([a-z]*)$/;function af(e,t){const s=t.matched.length&&Rn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=t.matched.some(o=>Rn(o,e.record))),e.children.forEach(o=>af(o,t))}function cf(e){e.__vd_match=!1,e.children.forEach(cf)}function _a(e,t){const s=String(e.re).match(G8);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return e.children.forEach(a=>_a(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const l=e.record.path.toLowerCase(),r=Do(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>_a(a,t))}function Z8(e,t){const s={};for(const o in e)t.includes(o)||(s[o]=e[o]);return s}function J8(e){const t=p8(e.routes,e),s=e.parseQuery||O8,o=e.stringifyQuery||ru,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Ks(),a=Ks(),i=Ks(),c=tn(bn);let p=bn;cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Cr.bind(null,D=>""+D),f=Cr.bind(null,$8),h=Cr.bind(null,Do);function y(D,G){let W,X;return Kd(D)?(W=t.getRecordMatcher(D),X=G):X=D,t.addRoute(X,W)}function m(D){const G=t.getRecordMatcher(D);G?t.removeRoute(G):Ce(`Cannot remove non-existent route "${String(D)}"`)}function v(){return t.getRoutes().map(D=>D.record)}function _(D){return!!t.getRecordMatcher(D)}function k(D,G){if(G=Fe({},G||c.value),typeof D=="string"){const ce=Er(s,D,G.path),g=t.resolve({path:ce.path},G),b=l.createHref(ce.fullPath);return b.startsWith("//")?Ce(`Location "${D}" resolved to "${b}". A resolved location cannot start with multiple slashes.`):g.matched.length||Ce(`No match found for location with path "${D}"`),Fe(ce,g,{params:h(g.params),hash:Do(ce.hash),redirectedFrom:void 0,href:b})}let W;if("path"in D)"params"in D&&!("name"in D)&&Object.keys(D.params).length&&Ce(`Path "${D.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),W=Fe({},D,{path:Er(s,D.path,G.path).path});else{const ce=Fe({},D.params);for(const g in ce)ce[g]==null&&delete ce[g];W=Fe({},D,{params:f(D.params)}),G.params=f(G.params)}const X=t.resolve(W,G),_e=D.hash||"";_e&&!_e.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${_e}" with "#${_e}".`),X.params=d(h(X.params));const ke=R0(o,Fe({},D,{hash:B8(_e),path:X.path})),de=l.createHref(ke);return de.startsWith("//")?Ce(`Location "${D}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):X.matched.length||Ce(`No match found for location with path "${"path"in D?D.path:D}"`),Fe({fullPath:ke,hash:_e,query:o===ru?F8(D.query):D.query||{}},X,{redirectedFrom:void 0,href:de})}function w(D){return typeof D=="string"?Er(s,D,c.value.path):Fe({},D)}function A(D,G){if(p!==D)return Is(8,{from:G,to:D})}function C(D){return q(D)}function O(D){return C(Fe(w(D),{replace:!0}))}function M(D){const G=D.matched[D.matched.length-1];if(G&&G.redirect){const{redirect:W}=G;let X=typeof W=="function"?W(D):W;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=w(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw Ce(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${D.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Fe({query:D.query,hash:D.hash,params:"path"in X?{}:D.params},X)}}function q(D,G){const W=p=k(D),X=c.value,_e=D.state,ke=D.force,de=D.replace===!0,ce=M(W);if(ce)return q(Fe(w(ce),{state:typeof ce=="object"?Fe({},_e,ce.state):_e,force:ke,replace:de}),G||W);const g=W;g.redirectedFrom=G;let b;return!ke&&Gc(o,X,W)&&(b=Is(16,{to:g,from:X}),Ie(X,X,!0,!1)),(b?Promise.resolve(b):V(g,X)).catch(E=>sn(E)?sn(E,2)?E:ge(E):Q(E,g,X)).then(E=>{if(E){if(sn(E,2))return Gc(o,k(E.to),g)&&G&&(G._count=G._count?G._count+1:1)>10?(Ce(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):q(Fe({replace:de},w(E.to),{state:typeof E.to=="object"?Fe({},_e,E.to.state):_e,force:ke}),G||g)}else E=ie(g,X,!0,de,_e);return J(g,X,E),E})}function $(D,G){const W=A(D,G);return W?Promise.reject(W):Promise.resolve()}function V(D,G){let W;const[X,_e,ke]=X8(D,G);W=Br(X.reverse(),"beforeRouteLeave",D,G);for(const ce of X)ce.leaveGuards.forEach(g=>{W.push(xn(g,D,G))});const de=$.bind(null,D,G);return W.push(de),vs(W).then(()=>{W=[];for(const ce of r.list())W.push(xn(ce,D,G));return W.push(de),vs(W)}).then(()=>{W=Br(_e,"beforeRouteUpdate",D,G);for(const ce of _e)ce.updateGuards.forEach(g=>{W.push(xn(g,D,G))});return W.push(de),vs(W)}).then(()=>{W=[];for(const ce of D.matched)if(ce.beforeEnter&&!G.matched.includes(ce))if(St(ce.beforeEnter))for(const g of ce.beforeEnter)W.push(xn(g,D,G));else W.push(xn(ce.beforeEnter,D,G));return W.push(de),vs(W)}).then(()=>(D.matched.forEach(ce=>ce.enterCallbacks={}),W=Br(ke,"beforeRouteEnter",D,G),W.push(de),vs(W))).then(()=>{W=[];for(const ce of a.list())W.push(xn(ce,D,G));return W.push(de),vs(W)}).catch(ce=>sn(ce,8)?ce:Promise.reject(ce))}function J(D,G,W){for(const X of i.list())X(D,G,W)}function ie(D,G,W,X,_e){const ke=A(D,G);if(ke)return ke;const de=G===bn,ce=cn?history.state:{};W&&(X||de?l.replace(D.fullPath,Fe({scroll:de&&ce&&ce.scroll},_e)):l.push(D.fullPath,_e)),c.value=D,Ie(D,G,W,de),ge()}let K;function ve(){K||(K=l.listen((D,G,W)=>{if(!gn.listening)return;const X=k(D),_e=M(X);if(_e){q(Fe(_e,{replace:!0}),X).catch(co);return}p=X;const ke=c.value;cn&&U0(Jc(ke.fullPath,W.delta),sr()),V(X,ke).catch(de=>sn(de,12)?de:sn(de,2)?(q(de.to,X).then(ce=>{sn(ce,20)&&!W.delta&&W.type===Bo.pop&&l.go(-1,!1)}).catch(co),Promise.reject()):(W.delta&&l.go(-W.delta,!1),Q(de,X,ke))).then(de=>{de=de||ie(X,ke,!1),de&&(W.delta&&!sn(de,8)?l.go(-W.delta,!1):W.type===Bo.pop&&sn(de,20)&&l.go(-1,!1)),J(X,ke,de)}).catch(co)}))}let Se=Ks(),xe=Ks(),Re;function Q(D,G,W){ge(D);const X=xe.list();return X.length?X.forEach(_e=>_e(D,G,W)):(Ce("uncaught error during route navigation:"),console.error(D)),Promise.reject(D)}function ae(){return Re&&c.value!==bn?Promise.resolve():new Promise((D,G)=>{Se.add([D,G])})}function ge(D){return Re||(Re=!D,ve(),Se.list().forEach(([G,W])=>D?W(D):G()),Se.reset()),D}function Ie(D,G,W,X){const{scrollBehavior:_e}=e;if(!cn||!_e)return Promise.resolve();const ke=!W&&K0(Jc(D.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return nt().then(()=>_e(D,G,ke)).then(de=>de&&z0(de)).catch(de=>Q(de,D,G))}const At=D=>l.go(D);let ot;const yt=new Set,gn={currentRoute:c,listening:!0,addRoute:y,removeRoute:m,hasRoute:_,getRoutes:v,resolve:k,options:e,push:C,replace:O,go:At,back:()=>At(-1),forward:()=>At(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:xe.add,isReady:ae,install(D){const G=this;D.component("RouterLink",L8),D.component("RouterView",V8),D.config.globalProperties.$router=G,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>x(c)}),cn&&!ot&&c.value===bn&&(ot=!0,C(l.location).catch(_e=>{Ce("Unexpected error when starting the router:",_e)}));const W={};for(const _e in bn)W[_e]=S(()=>c.value[_e]);D.provide(fi,G),D.provide(tf,He(W)),D.provide(va,c);const X=D.unmount;yt.add(D),D.unmount=function(){yt.delete(D),yt.size<1&&(p=bn,K&&K(),K=null,c.value=bn,ot=!1,Re=!1),X()},cn&&W8(D,G,t)}};return gn}function vs(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function X8(e,t){const s=[],o=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=t.matched[a];i&&(e.matched.find(p=>Rn(p,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(t.matched.find(p=>Rn(p,c))||l.push(c))}return[s,o,l]}const Dr=U(!1),po=U(!1),Cs=U(!1),e1=U(!0),ba=j_({xs:460,...I_}),rs=E0(),uf=h0(),t1=S(()=>rs.height.value-rs.width.value/On>180),pf=p0(zt?document.body:null),Os=T_(),n1=S(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Os.value)==null?void 0:e.tagName)||"")||((t=Os.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),s1=S(()=>{var e;return["BUTTON","A"].includes(((e=Os.value)==null?void 0:e.tagName)||"")});Ut("slidev-camera","default");Ut("slidev-mic","default");const hl=Ut("slidev-scale",0),dt=Ut("slidev-show-overview",!1),Sr=Ut("slidev-presenter-cursor",!0),du=Ut("slidev-show-editor",!1);Ut("slidev-editor-width",zt?window.innerWidth*.4:100);const df=jd(dt);function fu(e,t,s,o=l=>l){return e*o(.5-t*(.5-s))}function o1(e){return[-e[0],-e[1]]}function Vt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Pt(e,t){return[e[0]-t[0],e[1]-t[1]]}function jt(e,t){return[e[0]*t,e[1]*t]}function l1(e,t){return[e[0]/t,e[1]/t]}function Qs(e){return[e[1],-e[0]]}function hu(e,t){return e[0]*t[0]+e[1]*t[1]}function r1(e,t){return e[0]===t[0]&&e[1]===t[1]}function a1(e){return Math.hypot(e[0],e[1])}function i1(e){return e[0]*e[0]+e[1]*e[1]}function mu(e,t){return i1(Pt(e,t))}function ff(e){return l1(e,a1(e))}function c1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Gs(e,t,s){let o=Math.sin(s),l=Math.cos(s),r=e[0]-t[0],a=e[1]-t[1],i=r*l-a*o,c=r*o+a*l;return[i+t[0],c+t[1]]}function wa(e,t,s){return Vt(e,jt(Pt(t,e),s))}function yu(e,t,s){return Vt(e,jt(t,s))}var{min:_s,PI:u1}=Math,gu=.275,Zs=u1+1e-4;function p1(e,t={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=Q=>Q,start:i={},end:c={},last:p=!1}=t,{cap:d=!0,easing:f=Q=>Q*(2-Q)}=i,{cap:h=!0,easing:y=Q=>--Q*Q*Q+1}=c;if(e.length===0||s<=0)return[];let m=e[e.length-1].runningLength,v=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,_=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,k=Math.pow(s*o,2),w=[],A=[],C=e.slice(0,10).reduce((Q,ae)=>{let ge=ae.pressure;if(r){let Ie=_s(1,ae.distance/s),At=_s(1,1-Ie);ge=_s(1,Q+(At-Q)*(Ie*gu))}return(Q+ge)/2},e[0].pressure),O=fu(s,l,e[e.length-1].pressure,a),M,q=e[0].vector,$=e[0].point,V=$,J=$,ie=V,K=!1;for(let Q=0;Q<e.length;Q++){let{pressure:ae}=e[Q],{point:ge,vector:Ie,distance:At,runningLength:ot}=e[Q];if(Q<e.length-1&&m-ot<3)continue;if(l){if(r){let ke=_s(1,At/s),de=_s(1,1-ke);ae=_s(1,C+(de-C)*(ke*gu))}O=fu(s,l,ae,a)}else O=s/2;M===void 0&&(M=O);let yt=ot<v?f(ot/v):1,gn=m-ot<_?y((m-ot)/_):1;O=Math.max(.01,O*Math.min(yt,gn));let D=(Q<e.length-1?e[Q+1]:e[Q]).vector,G=Q<e.length-1?hu(Ie,D):1,W=hu(Ie,q)<0&&!K,X=G!==null&&G<0;if(W||X){let ke=jt(Qs(q),O);for(let de=1/13,ce=0;ce<=1;ce+=de)J=Gs(Pt(ge,ke),ge,Zs*ce),w.push(J),ie=Gs(Vt(ge,ke),ge,Zs*-ce),A.push(ie);$=J,V=ie,X&&(K=!0);continue}if(K=!1,Q===e.length-1){let ke=jt(Qs(Ie),O);w.push(Pt(ge,ke)),A.push(Vt(ge,ke));continue}let _e=jt(Qs(wa(D,Ie,G)),O);J=Pt(ge,_e),(Q<=1||mu($,J)>k)&&(w.push(J),$=J),ie=Vt(ge,_e),(Q<=1||mu(V,ie)>k)&&(A.push(ie),V=ie),C=ae,q=Ie}let ve=e[0].point.slice(0,2),Se=e.length>1?e[e.length-1].point.slice(0,2):Vt(e[0].point,[1,1]),xe=[],Re=[];if(e.length===1){if(!(v||_)||p){let Q=yu(ve,ff(Qs(Pt(ve,Se))),-(M||O)),ae=[];for(let ge=1/13,Ie=ge;Ie<=1;Ie+=ge)ae.push(Gs(Q,ve,Zs*2*Ie));return ae}}else{if(!(v||_&&e.length===1))if(d)for(let ae=1/13,ge=ae;ge<=1;ge+=ae){let Ie=Gs(A[0],ve,Zs*ge);xe.push(Ie)}else{let ae=Pt(w[0],A[0]),ge=jt(ae,.5),Ie=jt(ae,.51);xe.push(Pt(ve,ge),Pt(ve,Ie),Vt(ve,Ie),Vt(ve,ge))}let Q=Qs(o1(e[e.length-1].vector));if(_||v&&e.length===1)Re.push(Se);else if(h){let ae=yu(Se,Q,O);for(let ge=1/29,Ie=ge;Ie<1;Ie+=ge)Re.push(Gs(ae,Se,Zs*3*Ie))}else Re.push(Vt(Se,jt(Q,O)),Vt(Se,jt(Q,O*.99)),Pt(Se,jt(Q,O*.99)),Pt(Se,jt(Q,O)))}return w.concat(Re,A.reverse(),xe)}function d1(e,t={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:y,y:m,pressure:v=.5})=>[y,m,v]);if(i.length===2){let y=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(wa(i[0],y,m/4))}i.length===1&&(i=[...i,[...Vt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=c[0],h=i.length-1;for(let y=1;y<i.length;y++){let m=r&&y===h?i[y].slice(0,2):wa(f.point,i[y],a);if(r1(f.point,m))continue;let v=c1(m,f.point);if(d+=v,y<h&&!p){if(d<l)continue;p=!0}f={point:m,pressure:i[y][2]>=0?i[y][2]:.5,vector:ff(Pt(f.point,m)),distance:v,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function f1(e,t={}){return p1(d1(e,t),t)}var h1=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let o=0,l=s.length;o<l;o++)s[o](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>t!==l)}}});function Il(e,t){return e-t}function m1(e){return e<0?-1:1}function Ml(e){return[Math.abs(e),m1(e)]}function hf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var y1=2,un=y1,Rs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(un))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},g1=class extends Rs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=f1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[l,r],a,i)=>{const[c,p]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},v1=class extends Rs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ml(e.x-this.start.x),[o,l]=Ml(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Il),[i,c]=[this.start.y,this.start.y+o*l].sort(Il);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function mf(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var _1=class extends Rs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=hf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(mf(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},b1=class extends Rs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ml(e.x-this.start.x),[o,l]=Ml(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Il),[i,c]=[this.start.y,this.start.y+o*l].sort(Il);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function w1(e,t){const s=e.x-t.x,o=e.y-t.y;return s*s+o*o}function A1(e,t,s){let o=t.x,l=t.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function k1(e,t){let s=e[0];const o=[s];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],w1(l,s)>t&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Aa(e,t,s,o,l){let r=o,a=0;for(let i=t+1;i<s;i++){const c=A1(e[i],e[t],e[s]);c>r&&(a=i,r=c)}r>o&&(a-t>1&&Aa(e,t,a,o,l),l.push(e[a]),s-a>1&&Aa(e,a,s,o,l))}function x1(e,t){const s=e.length-1,o=[e[0]];return Aa(e,0,s,t,o),o.push(e[s]),o}function vu(e,t,s=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=s?e:k1(e,o),e=x1(e,o),e}var C1=class extends Rs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=hf();const t=mf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=vu(this.points,1,!0),this.count=0),this.attr("d",bu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",bu(vu(this.points,1,!0))),!e.getTotalLength()))}};function E1(e,t){const s=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function _u(e,t,s,o){const l=t||e,r=s||e,a=.2,i=E1(l,r),c=i.angle+(o?Math.PI:0),p=i.length*a,d=e.x+Math.cos(c)*p,f=e.y+Math.sin(c)*p;return{x:d,y:f}}function B1(e,t,s){const o=_u(s[t-1],s[t-2],e),l=_u(e,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(un)},${o.y.toFixed(un)} ${l.x.toFixed(un)},${l.y.toFixed(un)} ${e.x.toFixed(un)},${e.y.toFixed(un)}`}function bu(e){return e.reduce((t,s,o,l)=>o===0?`M ${s.x.toFixed(un)},${s.y.toFixed(un)}`:`${t} ${B1(s,o,l)}`,"")}var D1=class extends Rs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),p=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:o||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,o=e.x2,l=t.x1,r=t.x2,a=e.y1,i=e.y2,c=t.y1,p=t.y2,d=(s-o)*(c-p)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*p-c*r),h=(s*i-a*o)*(c-p)-(a-i)*(l*p-c*r),y=(m,v,_)=>m>=v&&m<=_?!0:m>=_&&m<=v;if(d===0)return!1;{const m={x:f/d,y:h/d};return y(m.x,s,o)&&y(m.y,a,i)&&y(m.x,l,r)&&y(m.y,c,p)}}};function S1(e){return{draw:new C1(e),stylus:new g1(e),line:new _1(e),rectangle:new b1(e),ellipse:new v1(e),eraseLine:new D1(e)}}var $1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=h1(),this._models=S1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function O1(e){return new $1(e)}const ka=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Xt=Ut("slidev-drawing-enabled",!1),qB=Ut("slidev-drawing-pinned",!1),F1=U(!1),P1=U(!1),T1=U(!1),So=U(!1),Jn=a_(Ut("slidev-drawing-brush",{color:ka[0],size:4,mode:"stylus"})),wu=U("stylus"),yf=S(()=>Ee.drawings.syncAll||vt.value);let $o=!1;const Js=S({get(){return wu.value},set(e){wu.value=e,e==="arrow"?(Jn.mode="line",Jn.arrowEnd=!0):(Jn.mode=e,Jn.arrowEnd=!1)}}),I1=He({brush:Jn,acceptsInputTypes:S(()=>Xt.value&&(!Ee.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),mt=Ul(O1(I1));function M1(){mt.clear(),yf.value&&Md(Ue.value,"")}function hi(){var e;P1.value=mt.canRedo(),F1.value=mt.canUndo(),T1.value=!!((e=mt.el)!=null&&e.children.length)}function L1(e){$o=!0;const t=Pl[e||Ue.value];t!=null?mt.load(t):mt.clear(),hi(),$o=!1}mt.on("changed",()=>{if(hi(),!$o){const e=mt.dump(),t=Ue.value;(Pl[t]||"")!==e&&yf.value&&Md(t,mt.dump())}});Qv(e=>{$o=!0,e[Ue.value]!=null&&mt.load(e[Ue.value]||""),$o=!1,hi()});nt(()=>{me(Ue,()=>{mt.mounted&&L1()},{immediate:!0})});mt.on("start",()=>So.value=!0);mt.on("end",()=>So.value=!1);window.addEventListener("keydown",e=>{if(!Xt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?mt.redo():mt.undo():e.code==="Escape"?Xt.value=!1:e.code==="KeyL"&&t?Js.value="line":e.code==="KeyA"&&t?Js.value="arrow":e.code==="KeyS"&&t?Js.value="stylus":e.code==="KeyR"&&t?Js.value="rectangle":e.code==="KeyE"&&t?Js.value="ellipse":e.code==="KeyC"&&t?M1():e.code.startsWith("Digit")&&t&&+e.code[5]<=ka.length?Jn.color=ka[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ze(...e){return S(()=>e.every(t=>lt(t)))}function xt(e){return S(()=>!lt(e))}const Au=Z_(),$r=Ut("slidev-color-schema","auto"),xa=S(()=>Ee.colorSchema!=="auto"),mi=S({get(){return xa.value?Ee.colorSchema==="dark":$r.value==="auto"?Au.value:$r.value==="dark"},set(e){xa.value||($r.value=e===Au.value?"auto":e?"dark":"light")}}),gf=jd(mi);zt&&me(mi,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ml=U(1),yl=S(()=>Ge.length-1),Dt=U(0),yi=U(0);function R1(){Dt.value>ml.value&&(Dt.value-=1)}function N1(){Dt.value<yl.value&&(Dt.value+=1)}function j1(){if(Dt.value>ml.value){let e=Dt.value-yi.value;e<ml.value&&(e=ml.value),Dt.value=e}}function V1(){if(Dt.value<yl.value){let e=Dt.value+yi.value;e>yl.value&&(e=yl.value),Dt.value=e}}function H1(){const{escape:e,space:t,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:p,o:d}=uf;let f=[{name:"next_space",key:Ze(t,xt(s)),fn:Tn,autoRepeat:!0},{name:"prev_space",key:Ze(t,s),fn:In,autoRepeat:!0},{name:"next_right",key:Ze(l,xt(s),xt(dt)),fn:Tn,autoRepeat:!0},{name:"prev_left",key:Ze(o,xt(s),xt(dt)),fn:In,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Tn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:In,autoRepeat:!0},{name:"next_down",key:Ze(a,xt(dt)),fn:Fo,autoRepeat:!0},{name:"prev_up",key:Ze(r,xt(dt)),fn:()=>Po(!1),autoRepeat:!0},{name:"next_shift",key:Ze(l,s),fn:Fo,autoRepeat:!0},{name:"prev_shift",key:Ze(o,s),fn:()=>Po(!1),autoRepeat:!0},{name:"toggle_dark",key:Ze(c,xt(Xt)),fn:gf},{name:"toggle_overview",key:Ze(d,xt(Xt)),fn:df},{name:"hide_overview",key:Ze(e,xt(Xt)),fn:()=>dt.value=!1},{name:"goto",key:Ze(p,xt(Xt)),fn:()=>Cs.value=!Cs.value},{name:"next_overview",key:Ze(l,dt),fn:N1},{name:"prev_overview",key:Ze(o,dt),fn:R1},{name:"up_overview",key:Ze(r,dt),fn:j1},{name:"down_overview",key:Ze(a,dt),fn:V1},{name:"goto_from_overview",key:Ze(i,dt),fn:()=>{Ls(Dt.value),dt.value=!1}}];const h=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const vf=Ze(xt(n1),xt(s1),e1);function q1(e,t,s=!1){typeof e=="string"&&(e=uf[e]);const o=Ze(e,vf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return me(o,a,{flush:"sync"})}function W1(e,t){return P_(e,s=>{vf.value&&(s.repeat||t())})}function z1(){const e=H1();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&q1(s.key,s.fn,s.autoRepeat)}),W1("f",()=>pf.toggle())}const U1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K1=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Y1=[K1];function Q1(e,t){return B(),Z("svg",U1,Y1)}const G1={name:"carbon-close",render:Q1};function gi(e,t=""){var l,r;const s=["slidev-page",t],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const Z1=Be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;Y(se);const s=U(),o=u0(s),l=S(()=>t.width?t.width:o.width.value),r=S(()=>t.width?t.width/On:o.height.value);t.width&&ds(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=S(()=>l.value/r.value),i=S(()=>t.scale&&!Ms.value?t.scale:a.value<On?l.value/Fn:r.value*On/Fn),c=S(()=>({height:`${ci}px`,width:`${Fn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=S(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return Et(Pd,i),(d,f)=>(B(),Z("div",{id:"slide-container",ref_key:"root",ref:s,class:qe(x(p))},[n("div",{id:"slide-content",style:st(x(c))},[Mt(d.$slots,"default")],4),Mt(d.$slots,"controls")],2))}});const oe=(e,t)=>{const s=e.__vccOpts||e;for(const[o,l]of t)s[o]=l;return s},_f=oe(Z1,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/SlideContainer.vue"]]),vi=Be({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Jt(e,"clicks",t),o=Jt(e,"clicksElements",t),l=Jt(e,"clicksDisabled",t),r=Jt(e,"clicksOrderMap",t);o.value.length=0,Et(Tv,e.route),Et(Iv,e.context),Et(ao,s),Et(io,l),Et(Qn,o),Et(ia,r)},render(){var e,t;return this.$props.is?at(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),J1=["innerHTML"],X1=Be({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return Y(se),(t,s)=>x(Pl)[e.page]?(B(),Z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Pl)[e.page]},null,8,J1)):be("v-if",!0)}}),bf=oe(X1,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),eb=Object.freeze(Object.defineProperty({__proto__:null,default:bf},Symbol.toStringTag,{value:"Module"})),tb={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},nb=["onClick"],sb=Be({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const s=e;Y(se);const o=Jt(s,"modelValue",t);function l(){o.value=!1}function r(y){Ls(y),l()}function a(y){return y===Dt.value}const i=ba.smaller("xs"),c=ba.smaller("sm"),p=4*16*2,d=2*16,f=S(()=>i.value?rs.width.value-p:c.value?(rs.width.value-p-d)/2:300),h=S(()=>Math.floor((rs.width.value-p)/(f.value+d)));return ds(()=>{Dt.value=Ue.value,yi.value=h.value}),(y,m)=>{const v=G1;return B(),Z($e,null,[Ho(n("div",tb,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:st(`grid-template-columns: repeat(auto-fit,minmax(${x(f)}px,1fr))`)},[(B(!0),Z($e,null,qo(x(Ge).slice(0,-1),(_,k)=>(B(),Z("div",{key:_.path,class:"relative"},[n("div",{class:qe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(k+1),"border-gray-400":!a(k+1)}]),style:st(x(ui)),onClick:w=>r(+_.path)},[(B(),te(_f,{key:_.path,width:x(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:N(()=>[I(x(vi),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:qe(x(gi)(_)),route:_,context:"overview"},null,8,["is","class","route"]),I(bf,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,nb),n("div",{class:"absolute top-0 opacity-50",style:st(`left: ${x(f)+5}px`)},as(k+1),5)]))),128))],4)],512),[[Ad,x(o)]]),x(o)?(B(),Z("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[I(v)])):be("v-if",!0)],64)}}});const ob=oe(sb,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),lb="/pymi-polars/assets/logo-b72bde5d.png",rb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ab=Be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;Y(se);const o=Jt(s,"modelValue",t);function l(){o.value=!1}return(r,a)=>(B(),te(Up,null,[x(o)?(B(),Z("div",rb,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),n("div",{class:qe(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Mt(r.$slots,"default")],2)])):be("v-if",!0)],1024))}}),ib=oe(ab,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/Modal.vue"]]),cb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ub=["innerHTML"],pb=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:lb,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),u("dev ")])])],-1),db=Be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;Y(se);const o=Jt(s,"modelValue",t),l=S(()=>typeof Ee.info=="string");return(r,a)=>(B(),te(ib,{modelValue:x(o),"onUpdate:modelValue":a[0]||(a[0]=i=>De(o)?o.value=i:null),class:"px-6 py-4"},{default:N(()=>[n("div",cb,[x(l)?(B(),Z("div",{key:0,class:"mb-4",innerHTML:x(Ee).info},null,8,ub)):be("v-if",!0),pb])]),_:1},8,["modelValue"]))}});const fb=oe(db,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/InfoDialog.vue"]]),hb=["disabled","onKeydown"],mb=Be({__name:"Goto",setup(e){Y(se);const t=U(),s=U(""),o=S(()=>{if(s.value.startsWith("/"))return!!Ge.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=If.value}});function l(){o.value&&(s.value.startsWith("/")?Ls(s.value.substring(1)):Ls(+s.value)),r()}function r(){Cs.value=!1}return me(Cs,async a=>{var i,c;a?(await nt(),s.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),me(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(B(),Z("div",{id:"slidev-goto-dialog",class:qe(["fixed right-5 bg-main transform transition-all",x(Cs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ho(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!x(Cs),class:qe(["outline-none bg-transparent",{"text-red-400":!x(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Ac(l,["enter"]),Ac(r,["escape"])],onBlur:r},null,42,hb),[[Lg,s.value]])],2))}}),yb=oe(mb,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/Goto.vue"]]),gb=Be({__name:"Controls",setup(e){Y(se);const t=tn(),s=tn();return(o,l)=>(B(),Z($e,null,[I(ob,{modelValue:x(dt),"onUpdate:modelValue":l[0]||(l[0]=r=>De(dt)?dt.value=r:null)},null,8,["modelValue"]),I(yb),x(t)?(B(),te(x(t),{key:0})):be("v-if",!0),x(s)?(B(),te(x(s),{key:1,modelValue:x(Dr),"onUpdate:modelValue":l[1]||(l[1]=r=>De(Dr)?Dr.value=r:null)},null,8,["modelValue"])):be("v-if",!0),x(Ee).info?(B(),te(fb,{key:2,modelValue:x(po),"onUpdate:modelValue":l[2]||(l[2]=r=>De(po)?po.value=r:null)},null,8,["modelValue"])):be("v-if",!0)],64))}}),vb=oe(gb,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/Controls.vue"]]),_b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bb=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),wb=[bb];function Ab(e,t){return B(),Z("svg",_b,wb)}const kb={name:"carbon-settings-adjust",render:Ab},xb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cb=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Eb=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Bb=[Cb,Eb];function Db(e,t){return B(),Z("svg",xb,Bb)}const Sb={name:"carbon-information",render:Db},$b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ob=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Fb=[Ob];function Pb(e,t){return B(),Z("svg",$b,Fb)}const Tb={name:"carbon-download",render:Pb},Ib={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mb=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Lb=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Rb=[Mb,Lb];function Nb(e,t){return B(),Z("svg",Ib,Rb)}const jb={name:"carbon-user-speaker",render:Nb},Vb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hb=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),qb=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Wb=[Hb,qb];function zb(e,t){return B(),Z("svg",Vb,Wb)}const Ub={name:"carbon-presentation-file",render:zb},Kb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yb=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Qb=[Yb];function Gb(e,t){return B(),Z("svg",Kb,Qb)}const Zb={name:"carbon-pen",render:Gb},Jb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Xb=n("g",{fill:"currentColor"},[n("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),n("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),e5=[Xb];function t5(e,t){return B(),Z("svg",Jb,e5)}const n5={name:"ph-cursor-duotone",render:t5},s5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},o5=n("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),l5=[o5];function r5(e,t){return B(),Z("svg",s5,l5)}const wf={name:"ph-cursor-fill",render:r5},a5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i5=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),c5=[i5];function u5(e,t){return B(),Z("svg",a5,c5)}const p5={name:"carbon-sun",render:u5},d5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f5=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),h5=[f5];function m5(e,t){return B(),Z("svg",d5,h5)}const y5={name:"carbon-moon",render:m5},g5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v5=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),_5=[v5];function b5(e,t){return B(),Z("svg",g5,_5)}const w5={name:"carbon-apps",render:b5},A5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k5=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),x5=[k5];function C5(e,t){return B(),Z("svg",A5,x5)}const E5={name:"carbon-arrow-right",render:C5},B5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D5=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),S5=[D5];function $5(e,t){return B(),Z("svg",B5,S5)}const O5={name:"carbon-arrow-left",render:$5},F5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P5=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),T5=[P5];function I5(e,t){return B(),Z("svg",F5,T5)}const M5={name:"carbon-maximize",render:I5},L5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R5=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),N5=[R5];function j5(e,t){return B(),Z("svg",L5,N5)}const V5={name:"carbon-minimize",render:j5},H5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q5=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),W5=[q5];function z5(e,t){return B(),Z("svg",H5,W5)}const U5={name:"carbon-checkmark",render:z5},K5={class:"select-list"},Y5={class:"title"},Q5={class:"items"},G5=["onClick"],Z5=Be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;Y(se);const o=Jt(s,"modelValue",t,{passive:!0});return(l,r)=>{const a=U5;return B(),Z("div",K5,[n("div",Y5,as(e.title),1),n("div",Q5,[(B(!0),Z($e,null,qo(e.items,i=>(B(),Z("div",{key:i.value,class:qe(["item",{active:x(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[I(a,{class:qe(["text-green-500",{"opacity-0":x(o)!==i.value}])},null,8,["class"]),u(" "+as(i.display||i.value),1)],10,G5))),128))])])}}});const J5=oe(Z5,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/SelectList.vue"]]),X5={class:"text-sm"},e3=Be({__name:"Settings",setup(e){Y(se);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(B(),Z("div",X5,[I(J5,{modelValue:x(hl),"onUpdate:modelValue":o[0]||(o[0]=l=>De(hl)?hl.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),t3=oe(e3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/Settings.vue"]]),n3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},s3=Be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;Y(se);const o=Jt(s,"modelValue",t,{passive:!0}),l=U();return O_(l,()=>{o.value=!1}),(r,a)=>(B(),Z("div",{ref_key:"el",ref:l,class:"flex relative"},[n("button",{class:qe({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!x(o))},[Mt(r.$slots,"button",{class:qe({disabled:e.disabled})})],2),(B(),te(Up,null,[x(o)?(B(),Z("div",n3,[Mt(r.$slots,"menu")])):be("v-if",!0)],1024))],512))}}),o3=oe(s3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/MenuButton.vue"]]),l3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},r3={__name:"VerticalDivider",setup(e){return Y(se),(t,s)=>(B(),Z("div",l3))}},rl=oe(r3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),a3={render(){return[]}},i3={class:"slidev-icon-btn"},c3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},u3={class:"my-auto"},p3={class:"opacity-50"},d3=Be({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;Y(se);const s=ba.smaller("md"),{isFullscreen:o,toggle:l}=pf,r=S(()=>Ea.value?`?password=${Ea.value}`:""),a=S(()=>`/presenter/${Ue.value}${r.value}`),i=S(()=>`/${Ue.value}${r.value}`),c=U(),p=()=>{c.value&&Os.value&&c.value.contains(Os.value)&&Os.value.blur()},d=S(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=tn(),h=tn();return Pn(()=>import("./DrawingControls-56609ae3.js"),[]).then(y=>h.value=y.default),(y,m)=>{const v=V5,_=M5,k=O5,w=E5,A=w5,C=y5,O=p5,M=wf,q=n5,$=Zb,V=Ub,J=Bl("RouterLink"),ie=jb,K=Tb,ve=Sb,Se=kb;return B(),Z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:qe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(d)]),onMouseleave:p},[x(an)?be("v-if",!0):(B(),Z("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...xe)=>x(l)&&x(l)(...xe))},[x(o)?(B(),te(v,{key:0})):(B(),te(_,{key:1}))])),n("button",{class:qe(["slidev-icon-btn",{disabled:!x(lC)}]),onClick:m[1]||(m[1]=(...xe)=>x(In)&&x(In)(...xe))},[I(k)],2),n("button",{class:qe(["slidev-icon-btn",{disabled:!x(oC)}]),title:"Next",onClick:m[2]||(m[2]=(...xe)=>x(Tn)&&x(Tn)(...xe))},[I(w)],2),x(an)?be("v-if",!0):(B(),Z("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=xe=>x(df)())},[I(A)])),x(xa)?be("v-if",!0):(B(),Z("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=xe=>x(gf)())},[x(mi)?(B(),te(C,{key:0})):(B(),te(O,{key:1}))])),I(rl),x(an)?be("v-if",!0):(B(),Z($e,{key:3},[!x(vt)&&!x(s)&&x(f)?(B(),Z($e,{key:0},[I(x(f)),I(rl)],64)):be("v-if",!0),x(vt)?(B(),Z("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=xe=>Sr.value=!x(Sr))},[x(Sr)?(B(),te(M,{key:0})):(B(),te(q,{key:1,class:"opacity-50"}))])):be("v-if",!0)],64)),(!x(Ee).drawings.presenterOnly||x(vt))&&!x(an)?(B(),Z($e,{key:4},[n("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=xe=>Xt.value=!x(Xt))},[I($),x(Xt)?(B(),Z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:st({background:x(Jn).color})},null,4)):be("v-if",!0)]),I(rl)],64)):be("v-if",!0),x(an)?be("v-if",!0):(B(),Z($e,{key:5},[x(vt)?(B(),te(J,{key:0,to:x(i),class:"slidev-icon-btn",title:"Play Mode"},{default:N(()=>[I(V)]),_:1},8,["to"])):be("v-if",!0),x(eC)?(B(),te(J,{key:1,to:x(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:N(()=>[I(ie)]),_:1},8,["to"])):be("v-if",!0),be("v-if",!0)],64)),(B(),Z($e,{key:6},[x(Ee).download?(B(),Z("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...xe)=>x(Ba)&&x(Ba)(...xe))},[I(K)])):be("v-if",!0)],64)),!x(vt)&&x(Ee).info&&!x(an)?(B(),Z("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=xe=>po.value=!x(po))},[I(ve)])):be("v-if",!0),!x(vt)&&!x(an)?(B(),te(o3,{key:8},{button:N(()=>[n("button",i3,[I(Se)])]),menu:N(()=>[I(t3)]),_:1})):be("v-if",!0),x(an)?be("v-if",!0):(B(),te(rl,{key:9})),n("div",c3,[n("div",u3,[u(as(x(Ue))+" ",1),n("span",p3,"/ "+as(x(If)),1)])]),I(x(a3))],34)],512)}}}),f3=oe(d3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/NavControls.vue"]]),Af={render(){return[]}},kf={render(){return[]}},h3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},m3=Be({__name:"PresenterMouse",setup(e){return Y(se),(t,s)=>{const o=wf;return x(xr).cursor?(B(),Z("div",h3,[I(o,{class:"absolute",style:st({left:`${x(xr).cursor.x}%`,top:`${x(xr).cursor.y}%`})},null,8,["style"])])):be("v-if",!0)}}}),y3=oe(m3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),g3=Be({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){Y(se),me(ft,()=>{var o,l;(o=ft.value)!=null&&o.meta&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),(l=Or.value)!=null&&l.meta&&Or.value.meta.preload!==!1&&(Or.value.meta.__preloaded=!0)},{immediate:!0});const t=tn();Pn(()=>import("./DrawingLayer-2bfa05c9.js"),[]).then(o=>t.value=o.default);const s=S(()=>Ge.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===ft.value}));return(o,l)=>(B(),Z($e,null,[be(" Global Bottom "),I(x(kf)),be(" Slides "),I(Og,Ke(x(iC),{id:"slideshow",tag:"div"}),{default:N(()=>[(B(!0),Z($e,null,qo(x(s),r=>{var a;return Ho((B(),te(x(vi),{key:r.path,is:r==null?void 0:r.component,clicks:r===x(ft)?x(Tt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:qe(x(gi)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ad,r===x(ft)]])}),128))]),_:1},16),be(" Global Top "),I(x(Af)),x(t)?(B(),te(x(t),{key:0})):be("v-if",!0),x(vt)?be("v-if",!0):(B(),te(y3,{key:1}))],64))}});const v3=oe(g3,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/SlidesShow.vue"]]),_3=Be({__name:"PrintStyle",setup(e){Y(se);function t(s,{slots:o}){if(o.default)return at("style",o.default())}return(s,o)=>(B(),te(t,null,{default:N(()=>[u(" @page { size: "+as(x(Fn))+"px "+as(x(ci))+"px; margin: 0px; } ",1)]),_:1}))}}),xf=oe(_3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/PrintStyle.vue"]]),b3=Be({__name:"Play",setup(e){Y(se),z1();const t=U();function s(r){var a;du.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Tn():In())}cC(t);const o=S(()=>t1.value||du.value);tn();const l=tn();return Pn(()=>import("./DrawingControls-56609ae3.js"),[]).then(r=>l.value=r.default),(r,a)=>(B(),Z($e,null,[x(Ms)?(B(),te(xf,{key:0})):be("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:st(x(ui))},[I(_f,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:x(Ms)?x(rs).width.value:void 0,scale:x(hl),onPointerdown:s},{default:N(()=>[I(v3,{context:"slide"})]),controls:N(()=>[n("div",{class:qe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(o)?"opacity-100 right-0":"opacity-0 p-2",x(So)?"pointer-events-none":""]])},[I(f3,{class:"m-auto",persist:x(o)},null,8,["persist"])],2),!x(Ee).drawings.presenterOnly&&!x(an)&&x(l)?(B(),te(x(l),{key:0,class:"ml-0"})):be("v-if",!0)]),_:1},8,["style","width","scale"]),be("v-if",!0)],4),I(vb)],64))}}),w3=oe(b3,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Cf(e){return typeof e>"u"||e===null}function A3(e){return typeof e=="object"&&e!==null}function k3(e){return Array.isArray(e)?e:Cf(e)?[]:[e]}function x3(e,t){var s,o,l,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)l=r[s],e[l]=t[l];return e}function C3(e,t){var s="",o;for(o=0;o<t;o+=1)s+=e;return s}function E3(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var B3=Cf,D3=A3,S3=k3,$3=C3,O3=E3,F3=x3,_i={isNothing:B3,isObject:D3,toArray:S3,repeat:$3,isNegativeZero:O3,extend:F3};function Ef(e,t){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Oo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Ef(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(t){return this.name+": "+Ef(this,t)};var Gn=Oo,P3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],T3=["scalar","sequence","mapping"];function I3(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){t[String(o)]=s})}),t}function M3(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(P3.indexOf(s)===-1)throw new Gn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=I3(t.styleAliases||null),T3.indexOf(this.kind)===-1)throw new Gn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var it=M3;function ku(e,t){var s=[];return e[t].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function L3(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return e}function Ca(e){return this.extend(e)}Ca.prototype.extend=function(t){var s=[],o=[];if(t instanceof it)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Gn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof it))throw new Gn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Gn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Gn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof it))throw new Gn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Ca.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=ku(l,"implicit"),l.compiledExplicit=ku(l,"explicit"),l.compiledTypeMap=L3(l.compiledImplicit,l.compiledExplicit),l};var R3=Ca,N3=new it("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),j3=new it("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),V3=new it("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),H3=new R3({explicit:[N3,j3,V3]});function q3(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function W3(){return null}function z3(e){return e===null}var U3=new it("tag:yaml.org,2002:null",{kind:"scalar",resolve:q3,construct:W3,predicate:z3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function K3(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Y3(e){return e==="true"||e==="True"||e==="TRUE"}function Q3(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var G3=new it("tag:yaml.org,2002:bool",{kind:"scalar",resolve:K3,construct:Y3,predicate:Q3,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Z3(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function J3(e){return 48<=e&&e<=55}function X3(e){return 48<=e&&e<=57}function ew(e){if(e===null)return!1;var t=e.length,s=0,o=!1,l;if(!t)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===t)return!0;if(l=e[++s],l==="b"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!Z3(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!J3(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=e[s],l!=="_"){if(!X3(e.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function tw(e){var t=e,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function nw(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!_i.isNegativeZero(e)}var sw=new it("tag:yaml.org,2002:int",{kind:"scalar",resolve:ew,construct:tw,predicate:nw,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),ow=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function lw(e){return!(e===null||!ow.test(e)||e[e.length-1]==="_")}function rw(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var aw=/^[-+]?[0-9]+e/;function iw(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(_i.isNegativeZero(e))return"-0.0";return s=e.toString(10),aw.test(s)?s.replace("e",".e"):s}function cw(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||_i.isNegativeZero(e))}var uw=new it("tag:yaml.org,2002:float",{kind:"scalar",resolve:lw,construct:rw,predicate:cw,represent:iw,defaultStyle:"lowercase"}),pw=H3.extend({implicit:[U3,G3,sw,uw]}),dw=pw,Bf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Df=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function fw(e){return e===null?!1:Bf.exec(e)!==null||Df.exec(e)!==null}function hw(e){var t,s,o,l,r,a,i,c=0,p=null,d,f,h;if(t=Bf.exec(e),t===null&&(t=Df.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,o,l));if(r=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),h=new Date(Date.UTC(s,o,l,r,a,i,c)),p&&h.setTime(h.getTime()-p),h}function mw(e){return e.toISOString()}var yw=new it("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:fw,construct:hw,instanceOf:Date,represent:mw});function gw(e){return e==="<<"||e===null}var vw=new it("tag:yaml.org,2002:merge",{kind:"scalar",resolve:gw}),bi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function _w(e){if(e===null)return!1;var t,s,o=0,l=e.length,r=bi;for(s=0;s<l;s++)if(t=r.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function bw(e){var t,s,o=e.replace(/[\r\n=]/g,""),l=o.length,r=bi,a=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function ww(e){var t="",s=0,o,l,r=e.length,a=bi;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]),s=(s<<8)+e[o];return l=r%3,l===0?(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]):l===2?(t+=a[s>>10&63],t+=a[s>>4&63],t+=a[s<<2&63],t+=a[64]):l===1&&(t+=a[s>>2&63],t+=a[s<<4&63],t+=a[64],t+=a[64]),t}function Aw(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var kw=new it("tag:yaml.org,2002:binary",{kind:"scalar",resolve:_w,construct:bw,predicate:Aw,represent:ww}),xw=Object.prototype.hasOwnProperty,Cw=Object.prototype.toString;function Ew(e){if(e===null)return!0;var t=[],s,o,l,r,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,Cw.call(l)!=="[object Object]")return!1;for(r in l)if(xw.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function Bw(e){return e!==null?e:[]}var Dw=new it("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Ew,construct:Bw}),Sw=Object.prototype.toString;function $w(e){if(e===null)return!0;var t,s,o,l,r,a=e;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1){if(o=a[t],Sw.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function Ow(e){if(e===null)return[];var t,s,o,l,r,a=e;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var Fw=new it("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:$w,construct:Ow}),Pw=Object.prototype.hasOwnProperty;function Tw(e){if(e===null)return!0;var t,s=e;for(t in s)if(Pw.call(s,t)&&s[t]!==null)return!1;return!0}function Iw(e){return e!==null?e:{}}var Mw=new it("tag:yaml.org,2002:set",{kind:"mapping",resolve:Tw,construct:Iw});dw.extend({implicit:[yw,vw],explicit:[kw,Dw,Fw,Mw]});function xu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Lw=new Array(256),Rw=new Array(256);for(var bs=0;bs<256;bs++)Lw[bs]=xu(bs)?1:0,Rw[bs]=xu(bs);function Nw(e){return Array.from(new Set(e))}function Cu(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function Sf(e,t){if(!t||t==="all"||t==="*")return Cu(1,e+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Cu(+l,r?+r+1:e+1))}return Nw(s).filter(o=>o<=e).sort((o,l)=>o-l)}function $f(e){const t=S(()=>e.value.path),s=S(()=>Ge.length-1),o=S(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=S(()=>lr(o.value)),r=S(()=>Ge.find(h=>h.path===`${o.value}`)),a=S(()=>{var h,y,m;return(m=(y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.slide)==null?void 0:m.id}),i=S(()=>{var h,y;return((y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=S(()=>Ge.find(h=>h.path===`${Math.min(Ge.length,o.value+1)}`)),p=S(()=>Ge.filter(h=>{var y,m;return(m=(y=h.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((h,y)=>(wi(h,y),h),[])),d=S(()=>Ai(p.value,r.value)),f=S(()=>ki(d.value));return{route:e,path:t,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:d,tree:f}}function Of(e,t,s){const o=U(0);nt(()=>{bt.afterEach(async()=>{await nt(),o.value+=1})});const l=S(()=>{var c,p;return o.value,((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=S(()=>{var c,p;return+(((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.clicks)??l.value.length)}),a=S(()=>s.value<Ge.length-1||e.value<r.value),i=S(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const jw=["id"],Vw=Be({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,o=Jt(s,"clicksElements",t),l=S(()=>({height:`${ci}px`,width:`${Fn}px`})),r=tn();Pn(()=>Promise.resolve().then(()=>eb),void 0).then(p=>r.value=p.default);const a=S(()=>s.clicks),i=Of(a,s.nav.currentRoute,s.nav.currentPage),c=S(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Et(se,He({nav:{...s.nav,...i},configs:Ee,themeConfigs:S(()=>Ee.themeConfig)})),(p,d)=>{var f;return B(),Z("div",{id:x(c),class:"print-slide-container",style:st(x(l))},[I(x(kf)),I(x(vi),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":x(o),"onUpdate:clicksElements":d[0]||(d[0]=h=>De(o)?o.value=h:null),clicks:x(a),"clicks-disabled":!1,class:qe(x(gi)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),x(r)?(B(),te(x(r),{key:0,page:+e.route.path},null,8,["page"])):be("v-if",!0),I(x(Af))],12,jw)}}}),Eu=oe(Vw,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Hw=Be({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;Y(se);const s=He(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=S(()=>t.route),l=$f(o);return(a,i)=>(B(),Z($e,null,[I(Eu,{"clicks-elements":s,"onUpdate:clicksElements":i[0]||(i[0]=c=>s=c),clicks:0,nav:x(l),route:x(o)},null,8,["clicks-elements","nav","route"]),x(fo)?be("v-if",!0):(B(!0),Z($e,{key:0},qo(s.length,c=>(B(),te(Eu,{key:c,clicks:c,nav:x(l),route:x(o)},null,8,["clicks","nav","route"]))),128))],64))}}),qw=oe(Hw,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Ww={id:"print-content"},zw=Be({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;Y(se);const s=S(()=>t.width),o=S(()=>t.width/On),l=S(()=>s.value/o.value),r=S(()=>l.value<On?s.value/Fn:o.value*On/Fn);let a=Ge.slice(0,-1);Lt.value.query.range&&(a=Sf(a.length,Lt.value.query.range).map(p=>a[p-1]));const i=S(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return Et(Pd,r),(c,p)=>(B(),Z("div",{id:"print-container",class:qe(x(i))},[n("div",Ww,[(B(!0),Z($e,null,qo(x(a),d=>(B(),te(qw,{key:d.path,route:d},null,8,["route"]))),128))]),Mt(c.$slots,"controls")],2))}});const Uw=oe(zw,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Kw=Be({__name:"Print",setup(e){return Y(se),ds(()=>{Ms?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(B(),Z($e,null,[x(Ms)?(B(),te(xf,{key:0})):be("v-if",!0),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:st(x(ui))},[I(Uw,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:x(rs).width.value},null,8,["style","width"])],4)],64))}});const Yw=oe(Kw,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/internals/Print.vue"]]);const Qw={class:"slidev-layout end"},Gw={__name:"end",setup(e){return Y(se),(t,s)=>(B(),Z("div",Qw," END "))}},Zw=oe(Gw,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/layouts/end.vue"]]),Jw="/pymi-polars/polars.svg";function Bu(e){return e.startsWith("/")?"/pymi-polars"+e.slice(1):e}function Xw(e,t=!1){const s=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Bu(e)})`:`url("${Bu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const eA={class:"my-auto w-full"},tA=Be({__name:"cover",props:{background:{default:""}},setup(e){const t=e;Y(se);const s=S(()=>Xw(t.background,!0));return(o,l)=>(B(),Z("div",{class:"slidev-layout cover",style:st(x(s))},[n("div",eA,[Mt(o.$slots,"default")])],4))}}),nA=oe(tA,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/theme-default/layouts/cover.vue"]]);const sA=n("div",{class:"absolute top-10"},[n("pre",null,[n("code",null,`👤 Luca Baggi, ML Engineer @Futura
🐍 Python Milano 📆 17/01/2022
`)])],-1),oA=n("div",{class:"absolute bottom-20"},[n("img",{src:Jw,width:"720"}),n("br"),n("pre",null,[n("code",null,`Fast multi-threaded, hybrid-streaming DataFrame library
with a blazingly fast query engine, written in rust 🦀
`)])],-1),lA=n("div",{class:"absolute bottom-5"},[n("a",{href:"github.com/baggiponte/pymi-cookiecutter"},[n("p",null,[n("img",{height:"25",width:"25",align:"left",style:{"margin-right":"0.5em"},src:"https://cdn.simpleicons.org/github"}),u(),n("u",null,[n("i",null,"source")])])])],-1),rA={__name:"1",setup(e){const t={theme:"default",layout:"cover",highlighter:"shiki",colorSchema:"light",favicon:"https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg"};return Y(se),(s,o)=>(B(),te(nA,Te(Oe(t)),{default:N(()=>[sA,oA,lA]),_:1},16))}},aA=oe(rA,[["__file","/@slidev/slides/1.md"]]),Ye=Be({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,a;const e=Gr("click"),t=Gr("after"),s=(i,c,p)=>Ho(i,[[c,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let o=(a=(r=this.$slots).default)==null?void 0:a.call(r);if(!o)return;o=Td(o);const l=i=>i.map((c,p)=>mn(c)?s(at(c),p%this.every===0?e:t,Math.floor(p/this.every)):c);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?at(o[0],{},[l(o[0].children)]):l(o)}}),iA={class:"slidev-layout default"},cA={__name:"default",setup(e){return Y(se),(t,s)=>(B(),Z("div",iA,[Mt(t.$slots,"default")]))}},je=oe(cA,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/layouts/default.vue"]]),uA=n("h1",null,"What we’ll cover",-1),pA=n("h2",null,[u("🐼 What are "),n("code",null,"pandas"),u(" limits?")],-1),dA=n("h2",null,"♻️ Data manipulation paradigms",-1),fA=n("h2",null,[u("❓ When should I replace "),n("code",null,"pandas"),u("?")],-1),hA=n("h2",null,[u("🐻‍❄️ Enter: "),n("code",null,"polars")],-1),mA=n("h2",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),yA=n("h2",null,"💤 Lazy execution",-1),gA=n("h2",null,"🔖 References",-1),vA={__name:"2",setup(e){const t={};return Y(se),(s,o)=>{const l=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[uA,I(l,null,{default:N(()=>[pA,dA,fA,hA,mA,yA,gA]),_:1})]),_:1},16)}}},_A=oe(vA,[["__file","/@slidev/slides/2.md"]]),bA=n("h1",null,[u("🐼 What are "),n("code",null,"pandas"),u(" limits?")],-1),wA=n("p",null,"Time for a little guessing game",-1),AA=n("blockquote",{style:{"font-size":"18px"}},[u(' "Nowadays, my rule of thumb for '),n("code",null,"pandas"),u(" is that you should have "),n("b",null,"5 to 10 times as much RAM as the size of your dataset"),u('" ')],-1),kA=n("p",{align:"right"},[n("i",null,[u("Wes McKinney, "),n("code",null,"pandas"),u(" creator and co-founder/CTO of Voltron Data")])],-1),xA=n("blockquote",{style:{"font-size":"18px"}},' "But first, it’s worth considering not using pandas [when scaling to large datasets]" ',-1),CA=n("p",{align:"right"},[n("i",null,[n("code",null,"pandas"),u(" documentation")])],-1),EA={__name:"3",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[bA,wA,I(l,null,{default:N(()=>[AA,kA,xA,CA]),_:1})]),_:1},16)}}},BA=oe(EA,[["__file","/@slidev/slides/3.md"]]),or=Be({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return I(Ye,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),DA=n("h1",null,[u("🐼 What are "),n("code",null,"pandas"),u(" limits?")],-1),SA=n("p",null,"A little rundown",-1),$A=n("ul",null,[n("li",null,[u("Single-threaded: cannot be natively parallelised (could be handy with "),n("code",null,"groupby"),u(" operations).")]),n("li",null,[u("Eager mode: "),n("ul",null,[n("li",null,[u("Must work with data in-memory (batching is not really an option: just "),n("a",{href:"https://pandas.pydata.org/docs/search.html?q=batch",target:"_blank",rel:"noopener"},"4 results"),u(" when scanning the docs).")]),n("li",null,"Code is executed line by line and cannot be optimised by a query engine.")])]),n("li",null,"Lots of expensive copies are created:")],-1),OA=n("blockquote",{style:{"font-size":"18px"}},[n("p",null,[u("When you write "),n("code",null,"df[df.c < 0].d.sum()"),u(", pandas creates a temporary DataFrame "),n("code",null,"df[df.c < 0]"),u(" then sums the d column of that temporary object. If df contains a lot of columns, this is ridiculously wasteful.")])],-1),FA=n("ul",null,[n("li",null,[u("Appending is costly because the "),n("code",null,"index"),u(" is rebuilt every time "),n("ul",null,[n("li",null,[u("use "),n("code",null,"pd.concat(list_of_small_dataframes)")])])])],-1),PA={__name:"4",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=Ye,r=or;return B(),te(je,Te(Oe(t)),{default:N(()=>[DA,SA,I(l,null,{default:N(()=>[$A]),_:1}),I(r,null,{default:N(()=>[OA]),_:1}),I(r,null,{default:N(()=>[FA]),_:1})]),_:1},16)}}},TA=oe(PA,[["__file","/@slidev/slides/4.md"]]),Ff=Be({render(){var o,l;const e=Gr("after");function t(r,a){return Ho(r,[[a]])}let s=(l=(o=this.$slots).default)==null?void 0:l.call(o);if(s)return s=Td(s),s.map(r=>t(at(r),e))}}),IA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},MA=n("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),LA=[MA];function RA(e,t){return B(),Z("svg",IA,LA)}const NA={name:"ph-clipboard",render:RA},jA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},VA=n("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),HA=[VA];function qA(e,t){return B(),Z("svg",jA,HA)}const WA={name:"ph-check-circle",render:qA},zA=["title"],UA=Be({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;Y(se);const s=Y(ao),o=Y(Qn),l=Y(io);function r(f=5){const h=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let v=0;v<f;v++)h.push(y.charAt(Math.floor(Math.random()*m)));return h.join("")}const a=U(),i=$t();fs(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,h=S(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),y=S(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),v=Nv(t.ranges.length-1).map(_=>m+_);o!=null&&o.value&&(o.value.push(...v),Xl(()=>v.forEach(_=>ca(o.value,_)),i))}ds(()=>{if(!a.value)return;const v=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const _ of v){const k=Array.from(_.querySelectorAll(".line")),w=Sf(k.length,y.value);if(k.forEach((A,C)=>{const O=w.includes(C+1);A.classList.toggle(Kn,!0),A.classList.toggle("highlighted",O),A.classList.toggle("dishonored",!O)}),t.maxHeight){const A=_.querySelector(".line.highlighted");A&&A.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=V_();function d(){var h,y;const f=(y=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:y.textContent;f&&p(f)}return(f,h)=>{const y=WA,m=NA;return B(),Z("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:st({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Mt(f.$slots,"default"),x(Ee).codeCopy?(B(),Z("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(c)?"Copied":"Copy",onClick:h[0]||(h[0]=v=>d())},[x(c)?(B(),te(y,{key:0,class:"p-2 w-8 h-8"})):(B(),te(m,{key:1,class:"p-2 w-8 h-8"}))],8,zA)):be("v-if",!0)],4)}}}),ct=oe(UA,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),KA=n("h1",null,[u("🐼 What are "),n("code",null,"pandas"),u(" limits?")],-1),YA=n("p",null,"A little rundown",-1),QA=n("ul",null,[n("li",null,"Really expressive syntax, but can be complex/non-intuitive/not-pythonic/inefficient."),n("li",null,[u("This is especially true of the functional, modern syntax: "),n("ul",null,[n("li",null,[u("must resort to "),n("code",null,"lambdas"),u(".")])])])],-1),GA=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," pandas "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," pd")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"data "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," pd"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"read_csv"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"path/to/my/file.csv"'),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"data"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"assign"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#B8A965"}},"new_col"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"lambda"),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#C98A7D"}},'"old_col"'),n("span",{style:{color:"#858585"}},"]."),n("span",{style:{color:"#DBD7CA"}},"apply"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"udf"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}},"args"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"**"),n("span",{style:{color:"#DBD7CA"}},"kwargs"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," pandas "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," pd")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"data "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," pd"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"read_csv"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"path/to/my/file.csv"'),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"data"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"assign"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8C862B"}},"new_col"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"lambda"),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#B56959"}},'"old_col"'),n("span",{style:{color:"#8E8F8B"}},"]."),n("span",{style:{color:"#393A34"}},"apply"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"udf"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}},"args"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"**"),n("span",{style:{color:"#393A34"}},"kwargs"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),ZA={__name:"5",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=Ye,r=ct,a=Ff;return B(),te(je,Te(Oe(t)),{default:N(()=>[KA,YA,I(l,null,{default:N(()=>[QA]),_:1}),I(a,null,{default:N(()=>[I(r,Ke({},{ranges:["5-7"]}),{default:N(()=>[GA]),_:1},16)]),_:1})]),_:1},16)}}},JA=oe(ZA,[["__file","/@slidev/slides/5.md"]]),XA=n("h1",null,[u("🎋 Bonus slide: modern "),n("code",null,"pandas")],-1),ek=n("p",null,[u("A lesson from the "),n("code",null,"R"),u(" crowd")],-1),tk=n("p",null,[u("Would always recommend the "),n("a",{href:"https://tomaugspurger.github.io/posts/method-chaining/",target:"_blank",rel:"noopener"},"method chaining"),u(", and use the object oriented one within UDF.")],-1),nk=n("ul",null,[n("li",null,"Elegant syntax with lots of nifty tricks"),n("li",null,"Visually helpful in isolating pipelines")],-1),sk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," matplotlib"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"pyplot "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," plt")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," seaborn "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," sns")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"plt"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"figure"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"figsize"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#6394BF"}},"15"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},"))")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"(["),n("span",{style:{color:"#C98A7D"}},"'fl_date'"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},"'tail_num'"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},"'dep_time'"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},"'dep_delay'"),n("span",{style:{color:"#858585"}},"])")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"dropna"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"assign"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"hour"),n("span",{style:{color:"#CB7676"}},"=lambda"),n("span",{style:{color:"#DBD7CA"}}," x"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," x"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"dep_time"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"dt"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"hour"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"query"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},"'5 < dep_delay < 600'"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"pipe"),n("span",{style:{color:"#858585"}},"(("),n("span",{style:{color:"#DBD7CA"}},"sns"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"boxplot"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},"'data'"),n("span",{style:{color:"#858585"}},"),"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},"'hour'"),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},"'dep_delay'"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"sns"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"despine"),n("span",{style:{color:"#858585"}},"()")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," matplotlib"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"pyplot "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," plt")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," seaborn "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," sns")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"plt"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"figure"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"figsize"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#296AA3"}},"15"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},"))")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"(["),n("span",{style:{color:"#B56959"}},"'fl_date'"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},"'tail_num'"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},"'dep_time'"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},"'dep_delay'"),n("span",{style:{color:"#8E8F8B"}},"])")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"dropna"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"assign"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"hour"),n("span",{style:{color:"#AB5959"}},"=lambda"),n("span",{style:{color:"#393A34"}}," x"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," x"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"dep_time"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"dt"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"hour"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"query"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},"'5 < dep_delay < 600'"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"pipe"),n("span",{style:{color:"#8E8F8B"}},"(("),n("span",{style:{color:"#393A34"}},"sns"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"boxplot"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},"'data'"),n("span",{style:{color:"#8E8F8B"}},"),"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},"'hour'"),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},"'dep_delay'"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"sns"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"despine"),n("span",{style:{color:"#8E8F8B"}},"()")])])])],-1),ok={__name:"6",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=Ye,r=ct,a=or;return B(),te(je,Te(Oe(t)),{default:N(()=>[XA,ek,I(l,null,{default:N(()=>[tk,nk]),_:1}),I(a,null,{default:N(()=>[I(r,Ke({},{ranges:["all","9-10","11"]}),{default:N(()=>[sk]),_:1},16)]),_:1})]),_:1},16)}}},lk=oe(ok,[["__file","/@slidev/slides/6.md"]]),rk=n("h1",null,"♻️ Data manipulation paradigms",-1),ak=n("p",null,"A small detour: the Apache Arrow ecosystem",-1),ik=n("p",null,"By now, we all know Apache Arrow. It’s a lot of things:",-1),ck=n("ol",null,[n("li",null,'"In-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in-memory".'),n("li",null,[u("Libraries to read and write to columnar storage formats (chief amongst all, "),n("code",null,"parquet"),u(").")]),n("li",null,"Libraries to perform (fast) computations on columnar data."),n("li",null,[u("Physically moving columnar through wires ("),n("em",null,"Arrow Flight RPC"),u(").")]),n("li",null,[u("A protocol to make "),n("em",null,"Arrow Flight RPC"),u(" talk to SQL databases ("),n("em",null,"Arrow Flight SQL"),u(").")]),n("li",null,[u("A novel database connector "),n("em",null,"à la"),u(" JDBC/ODBC to make columnar data storages talk to any user and perform conversion to/from row formats when needed ("),n("s",null,[n("em",null,"AC⚡DC")]),u(),n("em",null,"ADBC"),u(").")])],-1),uk={__name:"7",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[rk,ak,ik,I(l,null,{default:N(()=>[ck]),_:1})]),_:1},16)}}},pk=oe(uk,[["__file","/@slidev/slides/7.md"]]),dk=n("h1",null,"♻️ Data manipulation paradigms",-1),fk=n("p",null,"A small detour: the Apache Arrow ecosystem",-1),hk=n("p",null,[u("Why should we care? Because "),n("code",null,"pandas"),u(" creator, Wes McKinney, co-founded Apache Arrow because he understood it was the only way to "),n("strong",null,"unlock fast data processing"),u(" by enabling, among others:")],-1),mk=n("ul",null,[n("li",null,"Efficient data types."),n("li",null,"Mapping a dataset without needing to read it all into memory."),n("li",null,"Streaming processing."),n("li",null,[u("Zero-copy, i.e. a unique API layer to pass data across different libraries: from "),n("code",null,"pandas"),u(" to "),n("code",null,"polars"),u(" or any other dataframe library.")]),n("li",null,"Also working with hierarchical data.")],-1),yk=n("p",null,[u("Now we have a data format that enables fast processing. What are we missing? "),n("strong",null,"Query engines"),u(".")],-1),gk={__name:"8",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=or,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[dk,fk,I(l,null,{default:N(()=>[hk]),_:1}),I(r,null,{default:N(()=>[mk]),_:1}),I(l,null,{default:N(()=>[yk]),_:1})]),_:1},16)}}},vk=oe(gk,[["__file","/@slidev/slides/8.md"]]),_k=n("h1",null,"♻️ Data manipulation paradigms",-1),bk=n("p",null,"A comparison of dataframe libraries",-1),wk=n("table",null,[n("tr",null,[n("td",null,[n("b",null,[n("i",null,"library")])]),n("td",null,[n("b",null,[n("i",null,"type")])]),n("td",null,[n("b",null,[n("i",null,"arrow native")])]),n("td",null,[n("b",null,[n("i",null,"backends")])]),n("td",null,[n("b",null,[n("i",null,"notes")])])]),n("tr",null,[n("td",null,[n("code",null,"pandas")]),n("td",null,"in-memory"),n("td",null,"no"),n("td"),n("td")]),n("tr",null,[n("td",null,[n("code",null,"polars")]),n("td",null,"in-memory"),n("td",null,"yes"),n("td"),n("td",null,"lazy and out-of-core")]),n("tr",null,[n("td",null,[n("code",null,"vaex")]),n("td",null,"in-memory"),n("td",null,"no"),n("td"),n("td",null,"out-of-core")]),n("tr",null,[n("td",null,[n("code",null,"duckdb")]),n("td",null,"in-memory"),n("td",null,"yes"),n("td"),n("td",null,"SQL first")]),n("tr",null,[n("td",null,[n("code",null,"apache-spark")]),n("td",null,"distributed"),n("td",null,"no"),n("td"),n("td",null,[n("code",null,"pandas"),u("-like API")])]),n("tr",null,[n("td",null,[n("code",null,"cuPy"),u("/"),n("code",null,"cuDf"),u("/"),n("code",null,"RAPIDS")]),n("td",null,"distributed"),n("td",null,"yes"),n("td"),n("td",null,"GPU native; streaming processing")]),n("tr",null,[n("td",null,[n("code",null,"dask")]),n("td",null,"distributed"),n("td",null,"no"),n("td"),n("td",null,[u("parallel wrapper on top of "),n("code",null,"pandas")])])],-1),Ak={__name:"9",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>(B(),te(je,Te(Oe(t)),{default:N(()=>[_k,bk,wk]),_:1},16))}},kk=oe(Ak,[["__file","/@slidev/slides/9.md"]]),xk=n("h1",null,"♻️ Data manipulation paradigms",-1),Ck=n("p",null,"A comparison of dataframe libraries",-1),Ek=n("table",null,[n("tr",null,[n("td",null,[n("b",null,[n("i",null,"library")])]),n("td",null,[n("b",null,[n("i",null,"type")])]),n("td",null,[n("b",null,[n("i",null,"arrow native")])]),n("td",null,[n("b",null,[n("i",null,"backends")])]),n("td",null,[n("b",null,[n("i",null,"notes")])])]),n("tr",null,[n("td",null,[n("code",null,"datafusion")]),n("td",null,"distributed"),n("td",null,"yes"),n("td"),n("td",null,[n("code",null,"spark"),u(" on Arrow")])]),n("tr",null,[n("td",null,[n("code",null,"mars")]),n("td",null,"distributed"),n("td",null,"no"),n("td",null,[n("code",null,"ray"),u(", "),n("code",null,"kubernetes"),u(", "),n("code",null,"hadoop")]),n("td",null,[n("code",null,"pandas"),u("-like API")])]),n("tr",null,[n("td",null,[n("code",null,"xarray")]),n("td",null,"wrapper"),n("td",null,"no"),n("td",null,[n("code",null,"numpy"),u(", "),n("code",null,"pandas"),u(", "),n("code",null,"dask")]),n("td")]),n("tr",null,[n("td",null,[n("code",null,"fugue")]),n("td",null,"wrapper"),n("td",null,"no"),n("td",null,[n("code",null,"spark"),u(", "),n("code",null,"dask"),u(", "),n("code",null,"ray")]),n("td",null,[u("SQL/"),n("code",null,"pandas"),u("/python code")])]),n("tr",null,[n("td",null,[n("code",null,"modin")]),n("td",null,"wrapper"),n("td",null,"no"),n("td",null,[n("code",null,"ray"),u(", "),n("code",null,"dask"),u(", "),n("code",null,"unidist"),u(" (?!)")]),n("td",null,[n("code",null,"pandas"),u("-like API")])]),n("tr",null,[n("td",null,[n("code",null,"ibis")]),n("td",null,"wrapper"),n("td",null,"yes"),n("td"),n("td",null,"SQL first")])],-1),Bk=n("br",null,null,-1),Dk=n("p",null,[u("🔌 Shameless plug: check out my 🕶️ "),n("a",{href:"https://github.com/baggiponte/awesome-pandas-alternatives",target:"_blank",rel:"noopener"},[n("code",null,"awesome-pandas-alternatives")]),u(", where I collected these frameworks!")],-1),Sk={__name:"10",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>(B(),te(je,Te(Oe(t)),{default:N(()=>[xk,Ck,Ek,Bk,Dk]),_:1},16))}},$k=oe(Sk,[["__file","/@slidev/slides/10.md"]]),Ok=n("h1",null,[u("❓ When should I replace "),n("code",null,"pandas"),u("?")],-1),Fk=n("p",null,"A quick checklist",-1),Pk=n("ul",null,[n("li",null,[u("When the data becomes too big, or queries too complex to express with "),n("code",null,"pandas"),u(" syntax.")]),n("li",null,"When you need more processing capabilities to perform complex operations."),n("li",null,[u("If you need distributed computing, "),n("code",null,"apache-spark"),u(" is still popular. "),n("ul",null,[n("li",null,[n("code",null,"dask"),u(" is nice too, but is still just "),n("code",null,"pandas"),u(" with parallelism: no multithreaded, same memory issues.")]),n("li",null,[n("code",null,"datafusion"),u(" is being quickly developed (in rust, "),n("em",null,"by the way"),u(" 🦀)")]),n("li",null,"There are all the (closed) compute engines: databricks, snowflake…")])]),n("li",null,[u("But maybe setting up a bunch of clusters is a bit too much, and you would like to get away with a performant, in-memory solution… "),n("strong",null,[u("here is where "),n("code",null,"polars"),u(" shines")]),u(" 🐻‍❄️✨.")])],-1),Tk={__name:"11",setup(e){const t={srcSequence:"./pages/01-introduction.md"};return Y(se),(s,o)=>{const l=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[Ok,Fk,I(l,null,{default:N(()=>[Pk]),_:1})]),_:1},16)}}},Ik=oe(Tk,[["__file","/@slidev/slides/11.md"]]),Mk={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Lk=Be({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return Y(se),(s,o)=>(B(),Z("div",Mk,[n("div",{class:qe(["col-left",t.class])},[Mt(s.$slots,"default")],2),n("div",{class:qe(["col-right",t.class])},[Mt(s.$slots,"right")],2)]))}}),Rk=oe(Lk,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/layouts/two-cols.vue"]]),Nk=n("h1",null,[u("🐻‍❄️ Enter: "),n("code",null,"polars")],-1),jk=n("p",null,"Who is that Pokémon?",-1),Vk=n("ul",null,[n("li",null,"Arrow columnar format as the memory model."),n("li",null,"Eager and lazy execution."),n("li",null,"Hybrid Streaming (larger than RAM)."),n("li",null,"Multi-threaded."),n("li",null,"Powerful expression API."),n("li",null,"Query optimization."),n("li",null,[u("Implemented in "),n("em",null,"rust"),u(" 🦀")])],-1),Hk=n("iframe",{class:"absolute top-35",src:"https://giphy.com/embed/2dK0W3oUksQk0Xz8OK",width:"480",height:"204",frameBorder:"0"},null,-1),qk={__name:"12",setup(e){const t={layout:"two-cols",srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=Ye,r=Ff;return B(),te(Rk,Te(Oe(t)),{right:N(a=>[I(r,null,{default:N(()=>[Hk]),_:1})]),default:N(()=>[Nk,jk,I(l,null,{default:N(()=>[Vk]),_:1})]),_:1},16)}}},Wk=oe(qk,[["__file","/@slidev/slides/12.md"]]),zk=n("h1",null,[u("🐻‍❄️ Enter: "),n("code",null,"polars")],-1),Uk=n("p",null,"General features",-1),Kk=n("ul",null,[n("li",null,[u("Copy-on-write (COW) semantics "),n("ul",null,[n("li",null,'"Free" clones'),n("li",null,"Cheap appends")])]),n("li",null,"Appending without clones"),n("li",null,[u("Column oriented data storage "),n("ul",null,[n("li",null,"No block manager (i.e. predictable performance)")])]),n("li",null,[u("Missing values indicated with bitmask "),n("ul",null,[n("li",null,"NaN are different from missing"),n("li",null,"Bitmask optimizations")])]),n("li",null,"Efficient algorithms"),n("li",null,[u("Very fast IO "),n("ul",null,[n("li",null,"Its csv and parquet readers are among the fastest in existence")])])],-1),Yk={__name:"13",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[zk,Uk,I(l,null,{default:N(()=>[Kk]),_:1})]),_:1},16)}}},Qk=oe(Yk,[["__file","/@slidev/slides/13.md"]]),Gk=n("h1",null,[u("🐻‍❄️ Enter: "),n("code",null,"polars")],-1),Zk=n("p",null,"Query optimizations",-1),Jk=n("ul",null,[n("li",null,[u("Predicate pushdown "),n("ul",null,[n("li",null,[u("Filtering at scan level "),n("ul",null,[n("li",null,[u("e.g. lazy eval, i.e. dataset is "),n("em",null,"only"),u(" mapped into memory rather than read")])])])])]),n("li",null,[u("Projection pushdown "),n("ul",null,[n("li",null,"Projection at scan level")])]),n("li",null,[u("Aggregate pushdown "),n("ul",null,[n("li",null,"Aggregations at scan level")])]),n("li",null,"Simplify expressions"),n("li",null,"Parallel execution of physical plan"),n("li",null,[u("Cardinality based groupby dispatch "),n("ul",null,[n("li",null,"Different groupby strategies based on data cardinality")])]),n("li",null,"SIMD vectorization (single instruction multiple data)"),n("li",null,"NumPy universal functions")],-1),Xk={__name:"14",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[Gk,Zk,I(l,null,{default:N(()=>[Jk]),_:1})]),_:1},16)}}},ex=oe(Xk,[["__file","/@slidev/slides/14.md"]]),tx=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),nx=n("p",null,"Quick start",-1),sx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," polars "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"read_csv"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"https://j.mp/iriscsv"'),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"sepal_length"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},">"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"species"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"maintain_order"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#D4976C"}},"True"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"all"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," polars "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"read_csv"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"https://j.mp/iriscsv"'),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"sepal_length"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},">"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"species"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"maintain_order"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#A65E2B"}},"True"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"all"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},")")])])])],-1),ox=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (3, 5)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (3, 5)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘")])])])],-1),lx={__name:"15",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=or;return B(),te(je,Te(Oe(t)),{default:N(()=>[tx,nx,I(l,Ke({},{ranges:["all","4,8","5-8","5,7","all"]}),{default:N(()=>[sx]),_:1},16),I(r,null,{default:N(()=>[ox]),_:1})]),_:1},16)}}},rx=oe(lx,[["__file","/@slidev/slides/15.md"]]),ax=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),ix=n("p",null,[n("code",null,"polars"),u(" fundamentals: "),n("code",null,"contexts"),u(" and "),n("code",null,"expressions")],-1),cx=n("p",null,[n("code",null,"expressions"),u(" are an abstraction over simple column manipulations, as well as more complex ones such as groupbys and joins. Each expression maps a "),n("code",null,"Series"),u(" into another one.")],-1),ux=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"foo"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sort"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"head"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#6394BF"}},"2"),n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"foo"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sort"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"head"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#296AA3"}},"2"),n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),px=n("p",null,[n("code",null,"expressions"),u(" can only be used within "),n("code",null,"contexts"),u(' that are "opened" by three special verbs:')],-1),dx=n("ul",null,[n("li",null,[u("selection: "),n("code",null,"df.select([...])")]),n("li",null,[u("groupby aggregation: "),n("code",null,"df.groupby([...]).agg([...])")]),n("li",null,[u("hstack/adding columns: "),n("code",null,"df.with_columns([...])")])],-1),fx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"select"),n("span",{style:{color:"#858585"}},"([")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"foo"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sort"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"head"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#6394BF"}},"2"),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"bar"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"foo"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"=="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"1"),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"])")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"select"),n("span",{style:{color:"#8E8F8B"}},"([")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"foo"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sort"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"head"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#296AA3"}},"2"),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"bar"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"foo"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"=="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"1"),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"])")])])])],-1),hx={__name:"16",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[ax,ix,I(r,null,{default:N(()=>[cx,I(l,Ke({},{ranges:[""]}),{default:N(()=>[ux]),_:1},16),px,dx,I(l,Ke({},{ranges:[""]}),{default:N(()=>[fx]),_:1},16)]),_:1})]),_:1},16)}}},mx=oe(hx,[["__file","/@slidev/slides/16.md"]]),yx=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),gx=n("p",null,[n("code",null,"polars"),u(" fundamentals: "),n("code",null,"contexts"),u(" and "),n("code",null,"expressions")],-1),vx=n("p",null,[n("code",null,"expressions"),u(" heavily use method chaining to enable an expressive, procedural syntax:")],-1),_x=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# add new columns to the dataframe")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"with_columns"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"nrs"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"nrs_sum"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"count"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"count"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# add new columns to the dataframe")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"with_columns"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"nrs"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"nrs_sum"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"count"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"count"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),bx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (5, 6)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌──────┬───────┬──────────┬────────┬─────────┬───────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└──────┴───────┴──────────┴────────┴─────────┴───────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (5, 6)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌──────┬───────┬──────────┬────────┬─────────┬───────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└──────┴───────┴──────────┴────────┴─────────┴───────┘")])])])],-1),wx={__name:"17",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[yx,gx,vx,I(r,null,{default:N(()=>[I(l,Ke({},{ranges:[""]}),{default:N(()=>[_x]),_:1},16),bx]),_:1})]),_:1},16)}}},Ax=oe(wx,[["__file","/@slidev/slides/17.md"]]),kx=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),xx=n("p",null,[n("code",null,"polars"),u(" fundamentals: "),n("code",null,"contexts"),u(" and "),n("code",null,"expressions")],-1),Cx=n("p",null,[n("code",null,"expressions"),u(" heavily use method chaining to enable an expressive, procedural syntax:")],-1),Ex=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# expressions can be nested")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"out "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"select"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"names"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"names"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"str"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"contains"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#CB7676"}},"r"),n("span",{style:{color:"#C98A7D"}},'"'),n("span",{style:{color:"#C4704F"}},"am"),n("span",{style:{color:"#E0A569"}},"$"),n("span",{style:{color:"#C98A7D"}},'"'),n("span",{style:{color:"#858585"}},"))."),n("span",{style:{color:"#DBD7CA"}},"count"),n("span",{style:{color:"#858585"}},"(),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# expressions can be nested")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"out "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"select"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"names"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"names"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"str"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"contains"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#AB5959"}},"r"),n("span",{style:{color:"#B56959"}},'"'),n("span",{style:{color:"#AB5E3F"}},"am"),n("span",{style:{color:"#B58451"}},"$"),n("span",{style:{color:"#B56959"}},'"'),n("span",{style:{color:"#8E8F8B"}},"))."),n("span",{style:{color:"#393A34"}},"count"),n("span",{style:{color:"#8E8F8B"}},"(),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Bx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (1, 1)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌───────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ names │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ u32   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞═══════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└───────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (1, 1)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌───────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ names │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ u32   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞═══════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└───────┘")])])])],-1),Dx={__name:"18",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[kx,xx,Cx,I(r,null,{default:N(()=>[I(l,Ke({},{ranges:[""]}),{default:N(()=>[Ex]),_:1},16),Bx]),_:1})]),_:1},16)}}},Sx=oe(Dx,[["__file","/@slidev/slides/18.md"]]),$x=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),Ox=n("p",null,[n("code",null,"polars"),u(" fundamentals: "),n("code",null,"contexts"),u(" and "),n("code",null,"expressions")],-1),Fx=n("p",null,[n("code",null,"expressions"),u(" heavily use method chaining to enable an expressive, procedural syntax:")],-1),Px=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# you have a lot of syntactic sugar")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"out "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"select"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"when"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},">"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"0.5"),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"then"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#6394BF"}},"0"),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"otherwise"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},"))"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"*"),n("span",{style:{color:"#DBD7CA"}}," pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"nrs"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# you have a lot of syntactic sugar")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"out "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"select"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"when"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},">"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"0.5"),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"then"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#296AA3"}},"0"),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"otherwise"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},"))"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"*"),n("span",{style:{color:"#393A34"}}," pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"nrs"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Tx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (5, 1)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌──────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ literal  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ f64      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞══════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 1.695791 │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 0.0      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2.896465 │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 0.0      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 0.160325 │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└──────────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (5, 1)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌──────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ literal  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ f64      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞══════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 1.695791 │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 0.0      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2.896465 │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 0.0      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 0.160325 │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└──────────┘")])])])],-1),Ix={__name:"19",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[$x,Ox,Fx,I(r,null,{default:N(()=>[I(l,Ke({},{ranges:[""]}),{default:N(()=>[Px]),_:1},16),Tx]),_:1})]),_:1},16)}}},Mx=oe(Ix,[["__file","/@slidev/slides/19.md"]]),Lx=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),Rx=n("p",null,[n("code",null,"polars"),u(" fundamentals: "),n("code",null,"contexts"),u(" and "),n("code",null,"expressions")],-1),Nx=n("p",null,[n("code",null,"expressions"),u(" heavily use method chaining to enable an expressive, procedural syntax:")],-1),jx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# also window functions")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"select"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"*"'),n("span",{style:{color:"#858585"}},"),"),n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#758575"}},"# select all")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"over"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"groups"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"sum[random]/groups"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"list"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"over"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"names"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random/name"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# also window functions")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"select"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"*"'),n("span",{style:{color:"#8E8F8B"}},"),"),n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#A0ADA0"}},"# select all")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"over"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"groups"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"sum[random]/groups"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"list"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"over"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"names"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random/name"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Vx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (5, 6)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (5, 6)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘")])])])],-1),Hx={__name:"20",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[Lx,Rx,Nx,I(r,null,{default:N(()=>[I(l,Ke({},{ranges:[""]}),{default:N(()=>[jx]),_:1},16),Vx]),_:1})]),_:1},16)}}},qx=oe(Hx,[["__file","/@slidev/slides/20.md"]]),Wx=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),zx=n("p",null,[n("code",null,"polars"),u(" fundamentals: "),n("code",null,"contexts"),u(" and "),n("code",null,"expressions")],-1),Ux=n("p",null,[u("But you can do these with "),n("code",null,"pandas"),u(" too! Or, can you?")],-1),Kx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"out "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"groups"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"nrs"'),n("span",{style:{color:"#858585"}},"),"),n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#758575"}},"# sum nrs by groups")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"count"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"count"'),n("span",{style:{color:"#858585"}},"),"),n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#758575"}},"# count group members")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#758575"}},"# sum random where name != null")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"random"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"names"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"is_not_null"),n("span",{style:{color:"#858585"}},"())."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"suffix"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"_sum"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"names"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"reverse"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"(("),n("span",{style:{color:"#C98A7D"}},'"reversed names"'),n("span",{style:{color:"#858585"}},")),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"out "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"groups"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"nrs"'),n("span",{style:{color:"#8E8F8B"}},"),"),n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#A0ADA0"}},"# sum nrs by groups")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"count"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"count"'),n("span",{style:{color:"#8E8F8B"}},"),"),n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#A0ADA0"}},"# count group members")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A0ADA0"}},"# sum random where name != null")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"random"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"names"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"is_not_null"),n("span",{style:{color:"#8E8F8B"}},"())."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"suffix"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"_sum"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"names"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"reverse"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"(("),n("span",{style:{color:"#B56959"}},'"reversed names"'),n("span",{style:{color:"#8E8F8B"}},")),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Yx=n("p",null,[u("Certainly you can, but you might want to define functions to improve on readability and work around some limitations. Also, you would give up on the free optimisations that come with using "),n("code",null,"polars"),u(".")],-1),Qx={__name:"21",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[Wx,zx,Ux,I(r,null,{default:N(()=>[I(l,Ke({},{ranges:[""]}),{default:N(()=>[Kx]),_:1},16),Yx]),_:1})]),_:1},16)}}},Gx=oe(Qx,[["__file","/@slidev/slides/21.md"]]),Zx=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),Jx=n("p",null,"Tips and tricks",-1),Xx=n("ul",null,[n("li",null,[u("Do not use lambda functions inside "),n("code",null,"polars"),u(" expressions: they will kill the native parallelism! "),n("ul",null,[n("li",null,"Chances are, you won’t resort to them quite often as the expression syntax covers a lot of use cases.")])])],-1),e2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"q "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    dataset"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"lazy"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"state"'),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"party"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"=="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"Anti-Administration"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"anti"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"party"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"=="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"Pro-Administration"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"pro"'),n("span",{style:{color:"#858585"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"sort"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"pro"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"reverse"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#D4976C"}},"True"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"limit"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," q"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"collect"),n("span",{style:{color:"#858585"}},"()")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"q "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    dataset"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"lazy"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"state"'),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"party"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"=="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"Anti-Administration"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"anti"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"party"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"=="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"Pro-Administration"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"pro"'),n("span",{style:{color:"#8E8F8B"}},"),")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"sort"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"pro"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"reverse"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#A65E2B"}},"True"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"limit"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," q"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"collect"),n("span",{style:{color:"#8E8F8B"}},"()")])])])],-1),t2={__name:"22",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[Zx,Jx,I(r,null,{default:N(()=>[Xx,I(l,Ke({},{ranges:[""]}),{default:N(()=>[e2]),_:1},16)]),_:1})]),_:1},16)}}},n2=oe(t2,[["__file","/@slidev/slides/22.md"]]),s2=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),o2=n("p",null,"Tips and tricks",-1),l2=n("p",null,[u("If you didn’t notice: "),n("code",null,"polars"),u(),n("code",null,"DataFrame"),u("s have no indexes! But there are plenty of ways to work with time series data - "),n("code",null,"groupby_dynamic"),u(" and "),n("code",null,"groupby_rolling"),u(":")],-1),r2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"read_csv"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"data/appleStock.csv"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"parse_dates"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#D4976C"}},"True"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"annual_average_df "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby_dynamic"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Date"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"every"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#C98A7D"}},'"1y"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Close"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"mean"),n("span",{style:{color:"#858585"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df_with_year "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"with_column"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"Date"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"dt"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"year"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"alias"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"year"'),n("span",{style:{color:"#858585"}},"))")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"read_csv"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"data/appleStock.csv"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"parse_dates"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#A65E2B"}},"True"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"annual_average_df "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby_dynamic"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Date"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"every"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#B56959"}},'"1y"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Close"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"mean"),n("span",{style:{color:"#8E8F8B"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df_with_year "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"with_column"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"Date"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"dt"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"year"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"alias"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"year"'),n("span",{style:{color:"#8E8F8B"}},"))")])])])],-1),a2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (34, 2)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌────────────┬───────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ Date       ┆ Close     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---        ┆ ---       │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ date       ┆ f64       │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞════════════╪═══════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 1981-01-01 ┆ 23.5625   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 1982-01-01 ┆ 11.0      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ...        ┆ ...       │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2013-01-01 ┆ 464.955   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2014-01-01 ┆ 522.06    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└────────────┴───────────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (34, 2)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌────────────┬───────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ Date       ┆ Close     │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---        ┆ ---       │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ date       ┆ f64       │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞════════════╪═══════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 1981-01-01 ┆ 23.5625   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 1982-01-01 ┆ 11.0      │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ...        ┆ ...       │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2013-01-01 ┆ 464.955   │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2014-01-01 ┆ 522.06    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└────────────┴───────────┘")])])])],-1),i2={__name:"23",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[s2,o2,I(r,null,{default:N(()=>[l2,I(l,Ke({},{ranges:["all","3"]}),{default:N(()=>[r2]),_:1},16),a2]),_:1})]),_:1},16)}}},c2=oe(i2,[["__file","/@slidev/slides/23.md"]]),u2=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),p2=n("p",null,"Tips and tricks",-1),d2=n("p",null,[u("There’s also support for resampling, like "),n("code",null,"pandas.DataFrame.resample()"),u(":")],-1),f2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"upsample"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#B8A965"}},"time_column"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#C98A7D"}},'"time"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"every"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#C98A7D"}},'"15m"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"interpolate"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"fill_null"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"forward"'),n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"upsample"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#8C862B"}},"time_column"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#B56959"}},'"time"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"every"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#B56959"}},'"15m"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"interpolate"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"fill_null"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"forward"'),n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),h2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"shape: (13, 3)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"┌─────────────────────┬─────────┬────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ time                ┆ groups  ┆ values │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ---                 ┆ ---     ┆ ---    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ datetime[μs]        ┆ str     ┆ f64    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"╞═════════════════════╪═════════╪════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ ...                 ┆ ...     ┆ ...    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#dbd7ca"}},"└─────────────────────┴─────────┴────────┘")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"shape: (13, 3)")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"┌─────────────────────┬─────────┬────────┐")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ time                ┆ groups  ┆ values │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ---                 ┆ ---     ┆ ---    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ datetime[μs]        ┆ str     ┆ f64    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"╞═════════════════════╪═════════╪════════╡")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ ...                 ┆ ...     ┆ ...    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393a34"}},"└─────────────────────┴─────────┴────────┘")])])])],-1),m2={__name:"24",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[u2,p2,I(r,null,{default:N(()=>[d2,I(l,Ke({},{ranges:[""]}),{default:N(()=>[f2]),_:1},16),h2]),_:1})]),_:1},16)}}},y2=oe(m2,[["__file","/@slidev/slides/24.md"]]),g2=n("h1",null,[u("🔍 "),n("code",null,"polars"),u(" fundamentals")],-1),v2=n("p",null,"Tips and tricks",-1),_2=n("p",null,[u("Why is it necessary to use "),n("code",null,"expressions"),u(" inside of "),n("code",null,"contexts"),u("? Because they are actually syntactic sugar wrappers around the lazy API:")],-1),b2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"foo"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"(["),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"bar"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()])")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#758575"}},"# is actually running")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"lazy"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"foo"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"(["),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"bar"'),n("span",{style:{color:"#858585"}},")."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"()]))."),n("span",{style:{color:"#DBD7CA"}},"collect"),n("span",{style:{color:"#858585"}},"()")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"foo"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"(["),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"bar"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()])")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#A0ADA0"}},"# is actually running")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"lazy"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"foo"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"(["),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"bar"'),n("span",{style:{color:"#8E8F8B"}},")."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"()]))."),n("span",{style:{color:"#393A34"}},"collect"),n("span",{style:{color:"#8E8F8B"}},"()")])])])],-1),w2={__name:"25",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct,r=Ye;return B(),te(je,Te(Oe(t)),{default:N(()=>[g2,v2,I(r,null,{default:N(()=>[_2,I(l,Ke({},{ranges:[""]}),{default:N(()=>[b2]),_:1},16)]),_:1})]),_:1},16)}}},A2=oe(w2,[["__file","/@slidev/slides/25.md"]]),k2=n("h1",null,"💤 Lazy execution",-1),x2=n("p",null,"When the data is stored locally",-1),C2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," polars "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"scan_csv"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"https://j.mp/iriscsv"'),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"sepal_length"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},">"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"species"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"maintain_order"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#D4976C"}},"True"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"all"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"collect"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," polars "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"scan_csv"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"https://j.mp/iriscsv"'),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"sepal_length"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},">"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"species"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"maintain_order"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#A65E2B"}},"True"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"all"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"collect"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),E2={__name:"26",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct;return B(),te(je,Te(Oe(t)),{default:N(()=>[k2,x2,I(l,Ke({},{ranges:["all","4","5-7","8"]}),{default:N(()=>[C2]),_:1},16)]),_:1},16)}}},B2=oe(E2,[["__file","/@slidev/slides/26.md"]]),D2=n("h1",null,"💤 Lazy execution",-1),S2=n("p",null,[u("When the data is "),n("em",null,"not"),u(" stored locally")],-1),$2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," polars "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"read_csv"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"https://j.mp/iriscsv"'),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"lazy"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"sepal_length"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},">"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"species"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"maintain_order"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#D4976C"}},"True"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"all"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"collect"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," polars "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"read_csv"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"https://j.mp/iriscsv"'),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"lazy"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"sepal_length"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},">"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"species"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"maintain_order"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#A65E2B"}},"True"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"all"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"collect"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),O2={__name:"27",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct;return B(),te(je,Te(Oe(t)),{default:N(()=>[D2,S2,I(l,Ke({},{ranges:["all","4","5","6-8","9"]}),{default:N(()=>[$2]),_:1},16)]),_:1},16)}}},F2=oe(O2,[["__file","/@slidev/slides/27.md"]]),P2=n("h1",null,"💤 Lazy execution",-1),T2=n("p",null,"When alternating lazy and eager",-1),I2=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#4D9375"}},"import"),n("span",{style:{color:"#DBD7CA"}}," polars "),n("span",{style:{color:"#4D9375"}},"as"),n("span",{style:{color:"#DBD7CA"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    df"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"lazy"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"filter"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"col"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"sepal_length"'),n("span",{style:{color:"#858585"}},")"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},">"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"5"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"groupby"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#C98A7D"}},'"species"'),n("span",{style:{color:"#858585"}},","),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#B8A965"}},"maintain_order"),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#D4976C"}},"True"),n("span",{style:{color:"#858585"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"agg"),n("span",{style:{color:"#858585"}},"("),n("span",{style:{color:"#DBD7CA"}},"pl"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"all"),n("span",{style:{color:"#858585"}},"()."),n("span",{style:{color:"#DBD7CA"}},"sum"),n("span",{style:{color:"#858585"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#DBD7CA"}},"collect"),n("span",{style:{color:"#858585"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},")")])])]),n("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#1C6B48"}},"import"),n("span",{style:{color:"#393A34"}}," polars "),n("span",{style:{color:"#1C6B48"}},"as"),n("span",{style:{color:"#393A34"}}," pl")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"(")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    df"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"lazy"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"filter"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"col"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"sepal_length"'),n("span",{style:{color:"#8E8F8B"}},")"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},">"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"5"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"groupby"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#B56959"}},'"species"'),n("span",{style:{color:"#8E8F8B"}},","),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8C862B"}},"maintain_order"),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#A65E2B"}},"True"),n("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"agg"),n("span",{style:{color:"#8E8F8B"}},"("),n("span",{style:{color:"#393A34"}},"pl"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"all"),n("span",{style:{color:"#8E8F8B"}},"()."),n("span",{style:{color:"#393A34"}},"sum"),n("span",{style:{color:"#8E8F8B"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#393A34"}},"collect"),n("span",{style:{color:"#8E8F8B"}},"()")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},")")])])])],-1),M2={__name:"28",setup(e){const t={srcSequence:"./pages/02-tutorial.md"};return Y(se),(s,o)=>{const l=ct;return B(),te(je,Te(Oe(t)),{default:N(()=>[P2,T2,I(l,Ke({},{ranges:["all","4,8"]}),{default:N(()=>[I2]),_:1},16)]),_:1},16)}}},L2=oe(M2,[["__file","/@slidev/slides/28.md"]]),R2=n("h1",null,"🔖 References",-1),N2=n("ul",null,[n("li",null,[n("a",{href:"https://tomaugspurger.github.io/posts/modern-1-intro/",target:"_blank",rel:"noopener"},[u("Modern "),n("code",null,"pandas")]),u(" and "),n("a",{href:"https://kevinheavey.github.io/modern-polars/",target:"_blank",rel:"noopener"},[u("modern "),n("code",null,"polars")]),u(".")]),n("li",null,[n("code",null,"polars"),u("’s fantastic "),n("a",{href:"https://pola-rs.github.io/polars-book/user-guide/",target:"_blank",rel:"noopener"},[n("code",null,"docs")]),u(".")]),n("li",null,[u("Apache Arrow’s "),n("a",{href:"https://arrow.apache.org/blog/",target:"_blank",rel:"noopener"},"blog"),u(" and "),n("a",{href:"https://arrow.apache.org/docs/index.html",target:"_blank",rel:"noopener"},"docs"),u(". "),n("ul",null,[n("li",null,[u("Wes McKinney’s "),n("a",{href:"https://wesmckinney.com/archives.html",target:"_blank",rel:"noopener"},"blog"),u(" (and/or talks on YouTube).")])])]),n("li",null,[u("Voltron Data’s "),n("a",{href:"https://voltrondata.com/resources",target:"_blank",rel:"noopener"},"blog"),u(".")]),n("li",null,[u("Juan Luis Cano series on the "),n("a",{href:"https://www.orchest.io/blog/the-great-python-dataframe-showdown-part-1-demystifying-apache-arrow",target:"_blank",rel:"noopener"},"Great DataFrame Showdown"),u(" on Orchest’s blog.")]),n("li",null,[u("My decently-sized "),n("a",{href:"https://github.com/stars/baggiponte/lists/data-dataframes",target:"_blank",rel:"noopener"},[n("code",null,"Data & DataFrames")]),u(" list on GitHub.")]),n("li",null,[u("If you are interested in a proper course, check this one on "),n("a",{href:"https://www.udemy.com/course/data-analysis-with-polars/",target:"_blank",rel:"noopener"},"udemy"),u(" by Liam Brannigan.")])],-1),j2={__name:"29",setup(e){const t={};return Y(se),(s,o)=>(B(),te(je,Te(Oe(t)),{default:N(()=>[R2,N2]),_:1},16))}},V2=oe(j2,[["__file","/@slidev/slides/29.md"]]),H2={class:"slidev-layout intro"},q2={class:"my-auto"},W2={__name:"intro",setup(e){return Y(se),(t,s)=>(B(),Z("div",H2,[n("div",q2,[Mt(t.$slots,"default")])]))}},z2=oe(W2,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/theme-default/layouts/intro.vue"]]),U2=n("h1",null,"🙏 Thank you for your time!",-1),K2=n("h2",null,[u("🎉 Special thanks to "),n("a",{href:"https://www.futura.study/",target:"_blank",rel:"noopener"},"Futura"),u(" & "),n("a",{href:"http://milano.python.it/",target:"_blank",rel:"noopener"},"PyMi"),u("!")],-1),Y2={__name:"30",setup(e){const t={layout:"intro"};return Y(se),(s,o)=>(B(),te(z2,Te(Oe(t)),{default:N(()=>[U2,K2]),_:1},16))}},Q2=oe(Y2,[["__file","/@slidev/slides/30.md"]]),G2=[{path:"1",name:"page-1",component:aA,meta:{theme:"default",layout:"cover",highlighter:"shiki",colorSchema:"light",favicon:"https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg",slide:{raw:`---
theme: default
layout: cover
highlighter: shiki
colorSchema: light
favicon: >-
  https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg
---

<style>
h1 {
  font-weight: 600 !important;
}

h2 {
  font-weight: 450 !important;
  line-height: 1.8 !important;
}

blockquote {
  font-size: 20 !important;
}
</style>

<div class="absolute top-10">

    👤 Luca Baggi, ML Engineer @Futura
    🐍 Python Milano 📆 17/01/2022
</div>


<div class="absolute bottom-20">

  <img src="/polars.svg" width="720">
  <br>

    Fast multi-threaded, hybrid-streaming DataFrame library
    with a blazingly fast query engine, written in rust 🦀
</div>

<div class="absolute bottom-5">

<a href="github.com/baggiponte/pymi-cookiecutter">

<img height="25" width="25" align="left" style="margin-right:0.5em" src="https://cdn.simpleicons.org/github"> <u><i>source</i></u>

</a>

</div>
`,content:`<style>
h1 {
  font-weight: 600 !important;
}

h2 {
  font-weight: 450 !important;
  line-height: 1.8 !important;
}

blockquote {
  font-size: 20 !important;
}
</style>

<div class="absolute top-10">

    👤 Luca Baggi, ML Engineer @Futura
    🐍 Python Milano 📆 17/01/2022
</div>


<div class="absolute bottom-20">

  <img src="/polars.svg" width="720">
  <br>

    Fast multi-threaded, hybrid-streaming DataFrame library
    with a blazingly fast query engine, written in rust 🦀
</div>

<div class="absolute bottom-5">

<a href="github.com/baggiponte/pymi-cookiecutter">

<img height="25" width="25" align="left" style="margin-right:0.5em" src="https://cdn.simpleicons.org/github"> <u><i>source</i></u>

</a>

</div>`,frontmatter:{theme:"default",layout:"cover",highlighter:"shiki",colorSchema:"light",favicon:"https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg"},index:0,start:0,end:50,noteHTML:"",filepath:"/home/runner/work/pymi-polars/pymi-polars/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:_A,meta:{slide:{raw:`
# What we'll cover

<v-clicks>

## 🐼 What are \`pandas\` limits?

## ♻️ Data manipulation paradigms

## ❓ When should I replace \`pandas\`?

## 🐻‍❄️ Enter: \`polars\`

## 🔍 \`polars\` fundamentals

## 💤 Lazy execution

## 🔖 References

</v-clicks>

`,title:"What we'll cover",level:1,content:`# What we'll cover

<v-clicks>

## 🐼 What are \`pandas\` limits?

## ♻️ Data manipulation paradigms

## ❓ When should I replace \`pandas\`?

## 🐻‍❄️ Enter: \`polars\`

## 🔍 \`polars\` fundamentals

## 💤 Lazy execution

## 🔖 References

</v-clicks>`,frontmatter:{},index:1,start:51,end:73,noteHTML:"",filepath:"/home/runner/work/pymi-polars/pymi-polars/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:BA,meta:{title:"🐼 What are `pandas` limits?",srcSequence:"./pages/01-introduction.md",slide:{raw:null,title:"🐼 What are `pandas` limits?",level:1,content:`# 🐼 What are \`pandas\` limits?

Time for a little guessing game

<v-clicks>

<blockquote style='font-size:18px'>
"Nowadays, my rule of thumb for <code>pandas</code> is that you should have <b>5 to 10 times as much RAM as the size of your dataset</b>"
</blockquote>

<p align='right'><i>Wes McKinney, <code>pandas</code> creator and co-founder/CTO of Voltron Data</i></p>

<blockquote style='font-size:18px'>
"But first, it’s worth considering not using pandas [when scaling to large datasets]"
</blockquote>

<p align='right'><i><code>pandas</code> documentation</i></p>

</v-clicks>`,frontmatter:{title:"🐼 What are `pandas` limits?",srcSequence:"./pages/01-introduction.md"},index:2,start:0,end:25,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`---
title: 🐼 What are \`pandas\` limits?
---

# 🐼 What are \`pandas\` limits?

Time for a little guessing game

<v-clicks>

<blockquote style='font-size:18px'>
"Nowadays, my rule of thumb for <code>pandas</code> is that you should have <b>5 to 10 times as much RAM as the size of your dataset</b>"
</blockquote>

<p align='right'><i>Wes McKinney, <code>pandas</code> creator and co-founder/CTO of Voltron Data</i></p>

<blockquote style='font-size:18px'>
"But first, it’s worth considering not using pandas [when scaling to large datasets]"
</blockquote>

<p align='right'><i><code>pandas</code> documentation</i></p>

</v-clicks>

`,title:"🐼 What are `pandas` limits?",level:1,content:`# 🐼 What are \`pandas\` limits?

Time for a little guessing game

<v-clicks>

<blockquote style='font-size:18px'>
"Nowadays, my rule of thumb for <code>pandas</code> is that you should have <b>5 to 10 times as much RAM as the size of your dataset</b>"
</blockquote>

<p align='right'><i>Wes McKinney, <code>pandas</code> creator and co-founder/CTO of Voltron Data</i></p>

<blockquote style='font-size:18px'>
"But first, it’s worth considering not using pandas [when scaling to large datasets]"
</blockquote>

<p align='right'><i><code>pandas</code> documentation</i></p>

</v-clicks>`,frontmatter:{title:"🐼 What are `pandas` limits?"},index:0,start:0,end:25},inline:{raw:`---
src: ./pages/01-introduction.md
---
`,content:"",frontmatter:{},index:2,start:73,end:77},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:TA,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# 🐼 What are \`pandas\` limits?
A little rundown


<v-clicks>

* Single-threaded: cannot be natively parallelised (could be handy with \`groupby\` operations).
* Eager mode:
  * Must work with data in-memory (batching is not really an option: just [4 results](https://pandas.pydata.org/docs/search.html?q=batch) when scanning the docs).
  * Code is executed line by line and cannot be optimised by a query engine.
* Lots of expensive copies are created:

</v-clicks>

<v-click>

<blockquote style='font-size:18px'>

When you write \`df[df.c < 0].d.sum()\`, pandas creates a temporary DataFrame \`df[df.c < 0]\` then sums the d column of that temporary object. If df contains a lot of columns, this is ridiculously wasteful. 
</blockquote>
</v-click>

<v-click>

* Appending is costly because the \`index\` is rebuilt every time
  * use \`pd.concat(list_of_small_dataframes)\`
</v-click>

`,title:"🐼 What are `pandas` limits?",level:1,content:`# 🐼 What are \`pandas\` limits?
A little rundown


<v-clicks>

* Single-threaded: cannot be natively parallelised (could be handy with \`groupby\` operations).
* Eager mode:
  * Must work with data in-memory (batching is not really an option: just [4 results](https://pandas.pydata.org/docs/search.html?q=batch) when scanning the docs).
  * Code is executed line by line and cannot be optimised by a query engine.
* Lots of expensive copies are created:

</v-clicks>

<v-click>

<blockquote style='font-size:18px'>

When you write \`df[df.c < 0].d.sum()\`, pandas creates a temporary DataFrame \`df[df.c < 0]\` then sums the d column of that temporary object. If df contains a lot of columns, this is ridiculously wasteful. 
</blockquote>
</v-click>

<v-click>

* Appending is costly because the \`index\` is rebuilt every time
  * use \`pd.concat(list_of_small_dataframes)\`
</v-click>`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:3,start:26,end:56,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# 🐼 What are \`pandas\` limits?
A little rundown


<v-clicks>

* Single-threaded: cannot be natively parallelised (could be handy with \`groupby\` operations).
* Eager mode:
  * Must work with data in-memory (batching is not really an option: just [4 results](https://pandas.pydata.org/docs/search.html?q=batch) when scanning the docs).
  * Code is executed line by line and cannot be optimised by a query engine.
* Lots of expensive copies are created:

</v-clicks>

<v-click>

<blockquote style='font-size:18px'>

When you write \`df[df.c < 0].d.sum()\`, pandas creates a temporary DataFrame \`df[df.c < 0]\` then sums the d column of that temporary object. If df contains a lot of columns, this is ridiculously wasteful. 
</blockquote>
</v-click>

<v-click>

* Appending is costly because the \`index\` is rebuilt every time
  * use \`pd.concat(list_of_small_dataframes)\`
</v-click>

`,title:"🐼 What are `pandas` limits?",level:1,content:`# 🐼 What are \`pandas\` limits?
A little rundown


<v-clicks>

* Single-threaded: cannot be natively parallelised (could be handy with \`groupby\` operations).
* Eager mode:
  * Must work with data in-memory (batching is not really an option: just [4 results](https://pandas.pydata.org/docs/search.html?q=batch) when scanning the docs).
  * Code is executed line by line and cannot be optimised by a query engine.
* Lots of expensive copies are created:

</v-clicks>

<v-click>

<blockquote style='font-size:18px'>

When you write \`df[df.c < 0].d.sum()\`, pandas creates a temporary DataFrame \`df[df.c < 0]\` then sums the d column of that temporary object. If df contains a lot of columns, this is ridiculously wasteful. 
</blockquote>
</v-click>

<v-click>

* Appending is costly because the \`index\` is rebuilt every time
  * use \`pd.concat(list_of_small_dataframes)\`
</v-click>`,frontmatter:{},index:1,start:26,end:56},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:JA,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# 🐼 What are \`pandas\` limits?
A little rundown

<v-clicks>

* Really expressive syntax, but can be complex/non-intuitive/not-pythonic/inefficient.
* This is especially true of the functional, modern syntax:
  * must resort to \`lambdas\`.

</v-clicks>

<v-after>

\`\`\`python{5-7}
import pandas as pd

data = pd.read_csv("path/to/my/file.csv")

data.assign(
    new_col = lambda df: df["old_col"].apply(udf, *args, **kwargs)
)
\`\`\`

</v-after>

`,title:"🐼 What are `pandas` limits?",level:1,content:`# 🐼 What are \`pandas\` limits?
A little rundown

<v-clicks>

* Really expressive syntax, but can be complex/non-intuitive/not-pythonic/inefficient.
* This is especially true of the functional, modern syntax:
  * must resort to \`lambdas\`.

</v-clicks>

<v-after>

\`\`\`python{5-7}
import pandas as pd

data = pd.read_csv("path/to/my/file.csv")

data.assign(
    new_col = lambda df: df["old_col"].apply(udf, *args, **kwargs)
)
\`\`\`

</v-after>`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:4,start:57,end:84,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# 🐼 What are \`pandas\` limits?
A little rundown

<v-clicks>

* Really expressive syntax, but can be complex/non-intuitive/not-pythonic/inefficient.
* This is especially true of the functional, modern syntax:
  * must resort to \`lambdas\`.

</v-clicks>

<v-after>

\`\`\`python{5-7}
import pandas as pd

data = pd.read_csv("path/to/my/file.csv")

data.assign(
    new_col = lambda df: df["old_col"].apply(udf, *args, **kwargs)
)
\`\`\`

</v-after>

`,title:"🐼 What are `pandas` limits?",level:1,content:`# 🐼 What are \`pandas\` limits?
A little rundown

<v-clicks>

* Really expressive syntax, but can be complex/non-intuitive/not-pythonic/inefficient.
* This is especially true of the functional, modern syntax:
  * must resort to \`lambdas\`.

</v-clicks>

<v-after>

\`\`\`python{5-7}
import pandas as pd

data = pd.read_csv("path/to/my/file.csv")

data.assign(
    new_col = lambda df: df["old_col"].apply(udf, *args, **kwargs)
)
\`\`\`

</v-after>`,frontmatter:{},index:2,start:57,end:84},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:lk,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# 🎋 Bonus slide: modern \`pandas\`
A lesson from the \`R\` crowd

<v-clicks>

Would always recommend the [method chaining](https://tomaugspurger.github.io/posts/method-chaining/), and use the object oriented one within UDF.

* Elegant syntax with lots of nifty tricks
* Visually helpful in isolating pipelines
</v-clicks>


<v-click>

\`\`\`python{all|9-10|11}
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(15, 5))

(
    df.filter(['fl_date', 'tail_num', 'dep_time', 'dep_delay'])
      .dropna()
      .assign(hour=lambda x: x.dep_time.dt.hour)
      .query('5 < dep_delay < 600')
      .pipe((sns.boxplot, 'data'), 'hour', 'dep_delay')
)

sns.despine()
\`\`\`
</v-click>

`,title:"🎋 Bonus slide: modern `pandas`",level:1,content:`# 🎋 Bonus slide: modern \`pandas\`
A lesson from the \`R\` crowd

<v-clicks>

Would always recommend the [method chaining](https://tomaugspurger.github.io/posts/method-chaining/), and use the object oriented one within UDF.

* Elegant syntax with lots of nifty tricks
* Visually helpful in isolating pipelines
</v-clicks>


<v-click>

\`\`\`python{all|9-10|11}
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(15, 5))

(
    df.filter(['fl_date', 'tail_num', 'dep_time', 'dep_delay'])
      .dropna()
      .assign(hour=lambda x: x.dep_time.dt.hour)
      .query('5 < dep_delay < 600')
      .pipe((sns.boxplot, 'data'), 'hour', 'dep_delay')
)

sns.despine()
\`\`\`
</v-click>`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:5,start:85,end:119,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# 🎋 Bonus slide: modern \`pandas\`
A lesson from the \`R\` crowd

<v-clicks>

Would always recommend the [method chaining](https://tomaugspurger.github.io/posts/method-chaining/), and use the object oriented one within UDF.

* Elegant syntax with lots of nifty tricks
* Visually helpful in isolating pipelines
</v-clicks>


<v-click>

\`\`\`python{all|9-10|11}
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(15, 5))

(
    df.filter(['fl_date', 'tail_num', 'dep_time', 'dep_delay'])
      .dropna()
      .assign(hour=lambda x: x.dep_time.dt.hour)
      .query('5 < dep_delay < 600')
      .pipe((sns.boxplot, 'data'), 'hour', 'dep_delay')
)

sns.despine()
\`\`\`
</v-click>

`,title:"🎋 Bonus slide: modern `pandas`",level:1,content:`# 🎋 Bonus slide: modern \`pandas\`
A lesson from the \`R\` crowd

<v-clicks>

Would always recommend the [method chaining](https://tomaugspurger.github.io/posts/method-chaining/), and use the object oriented one within UDF.

* Elegant syntax with lots of nifty tricks
* Visually helpful in isolating pipelines
</v-clicks>


<v-click>

\`\`\`python{all|9-10|11}
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(15, 5))

(
    df.filter(['fl_date', 'tail_num', 'dep_time', 'dep_delay'])
      .dropna()
      .assign(hour=lambda x: x.dep_time.dt.hour)
      .query('5 < dep_delay < 600')
      .pipe((sns.boxplot, 'data'), 'hour', 'dep_delay')
)

sns.despine()
\`\`\`
</v-click>`,frontmatter:{},index:3,start:85,end:119},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:pk,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

By now, we all know Apache Arrow. It's a lot of things:

<v-clicks>

1. "In-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in-memory".
2. Libraries to read and write to columnar storage formats (chief amongst all, \`parquet\`).
3. Libraries to perform (fast) computations on columnar data.
4. Physically moving columnar through wires (*Arrow Flight RPC*).
5. A protocol to make *Arrow Flight RPC* talk to SQL databases (*Arrow Flight SQL*).
6. A novel database connector *à la* JDBC/ODBC to make columnar data storages talk to any user and perform conversion to/from row formats when needed (~~*AC⚡DC*~~ *ADBC*).
</v-clicks>

`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

By now, we all know Apache Arrow. It's a lot of things:

<v-clicks>

1. "In-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in-memory".
2. Libraries to read and write to columnar storage formats (chief amongst all, \`parquet\`).
3. Libraries to perform (fast) computations on columnar data.
4. Physically moving columnar through wires (*Arrow Flight RPC*).
5. A protocol to make *Arrow Flight RPC* talk to SQL databases (*Arrow Flight SQL*).
6. A novel database connector *à la* JDBC/ODBC to make columnar data storages talk to any user and perform conversion to/from row formats when needed (~~*AC⚡DC*~~ *ADBC*).
</v-clicks>`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:6,start:120,end:137,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

By now, we all know Apache Arrow. It's a lot of things:

<v-clicks>

1. "In-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in-memory".
2. Libraries to read and write to columnar storage formats (chief amongst all, \`parquet\`).
3. Libraries to perform (fast) computations on columnar data.
4. Physically moving columnar through wires (*Arrow Flight RPC*).
5. A protocol to make *Arrow Flight RPC* talk to SQL databases (*Arrow Flight SQL*).
6. A novel database connector *à la* JDBC/ODBC to make columnar data storages talk to any user and perform conversion to/from row formats when needed (~~*AC⚡DC*~~ *ADBC*).
</v-clicks>

`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

By now, we all know Apache Arrow. It's a lot of things:

<v-clicks>

1. "In-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in-memory".
2. Libraries to read and write to columnar storage formats (chief amongst all, \`parquet\`).
3. Libraries to perform (fast) computations on columnar data.
4. Physically moving columnar through wires (*Arrow Flight RPC*).
5. A protocol to make *Arrow Flight RPC* talk to SQL databases (*Arrow Flight SQL*).
6. A novel database connector *à la* JDBC/ODBC to make columnar data storages talk to any user and perform conversion to/from row formats when needed (~~*AC⚡DC*~~ *ADBC*).
</v-clicks>`,frontmatter:{},index:4,start:120,end:137},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:vk,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

<v-click>

Why should we care? Because \`pandas\` creator, Wes McKinney, co-founded Apache Arrow because he understood it was the only way to **unlock fast data processing** by enabling, among others:

</v-click>

<v-clicks>

* Efficient data types.
* Mapping a dataset without needing to read it all into memory.
* Streaming processing.
* Zero-copy, i.e. a unique API layer to pass data across different libraries: from \`pandas\` to \`polars\` or any other dataframe library.
* Also working with hierarchical data.
</v-clicks>

<v-click>

Now we have a data format that enables fast processing. What are we missing? **Query engines**.
</v-click>

`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

<v-click>

Why should we care? Because \`pandas\` creator, Wes McKinney, co-founded Apache Arrow because he understood it was the only way to **unlock fast data processing** by enabling, among others:

</v-click>

<v-clicks>

* Efficient data types.
* Mapping a dataset without needing to read it all into memory.
* Streaming processing.
* Zero-copy, i.e. a unique API layer to pass data across different libraries: from \`pandas\` to \`polars\` or any other dataframe library.
* Also working with hierarchical data.
</v-clicks>

<v-click>

Now we have a data format that enables fast processing. What are we missing? **Query engines**.
</v-click>`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:7,start:138,end:163,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

<v-click>

Why should we care? Because \`pandas\` creator, Wes McKinney, co-founded Apache Arrow because he understood it was the only way to **unlock fast data processing** by enabling, among others:

</v-click>

<v-clicks>

* Efficient data types.
* Mapping a dataset without needing to read it all into memory.
* Streaming processing.
* Zero-copy, i.e. a unique API layer to pass data across different libraries: from \`pandas\` to \`polars\` or any other dataframe library.
* Also working with hierarchical data.
</v-clicks>

<v-click>

Now we have a data format that enables fast processing. What are we missing? **Query engines**.
</v-click>

`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A small detour: the Apache Arrow ecosystem

<v-click>

Why should we care? Because \`pandas\` creator, Wes McKinney, co-founded Apache Arrow because he understood it was the only way to **unlock fast data processing** by enabling, among others:

</v-click>

<v-clicks>

* Efficient data types.
* Mapping a dataset without needing to read it all into memory.
* Streaming processing.
* Zero-copy, i.e. a unique API layer to pass data across different libraries: from \`pandas\` to \`polars\` or any other dataframe library.
* Also working with hierarchical data.
</v-clicks>

<v-click>

Now we have a data format that enables fast processing. What are we missing? **Query engines**.
</v-click>`,frontmatter:{},index:5,start:138,end:163},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:kk,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>pandas</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>polars</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>lazy and out-of-core</td>
    </tr>
    <tr>
        <td><code>vaex</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td>out-of-core</td>
    </tr>
    <tr>
        <td><code>duckdb</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
    <tr>
        <td><code>apache-spark</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>cuPy</code>/<code>cuDf</code>/<code>RAPIDS</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td>GPU native; streaming processing</td>
    </tr>
    <tr>
        <td><code>dask</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td>parallel wrapper on top of <code>pandas</code></td>
    </tr>
</table>
`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>pandas</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>polars</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>lazy and out-of-core</td>
    </tr>
    <tr>
        <td><code>vaex</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td>out-of-core</td>
    </tr>
    <tr>
        <td><code>duckdb</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
    <tr>
        <td><code>apache-spark</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>cuPy</code>/<code>cuDf</code>/<code>RAPIDS</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td>GPU native; streaming processing</td>
    </tr>
    <tr>
        <td><code>dask</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td>parallel wrapper on top of <code>pandas</code></td>
    </tr>
</table>`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:8,start:164,end:227,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>pandas</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>polars</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>lazy and out-of-core</td>
    </tr>
    <tr>
        <td><code>vaex</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td>out-of-core</td>
    </tr>
    <tr>
        <td><code>duckdb</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
    <tr>
        <td><code>apache-spark</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>cuPy</code>/<code>cuDf</code>/<code>RAPIDS</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td>GPU native; streaming processing</td>
    </tr>
    <tr>
        <td><code>dask</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td>parallel wrapper on top of <code>pandas</code></td>
    </tr>
</table>
`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>pandas</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><code>polars</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>lazy and out-of-core</td>
    </tr>
    <tr>
        <td><code>vaex</code></td>
        <td>in-memory</td>
        <td>no</td>
        <td></td>
        <td>out-of-core</td>
    </tr>
    <tr>
        <td><code>duckdb</code></td>
        <td>in-memory</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
    <tr>
        <td><code>apache-spark</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>cuPy</code>/<code>cuDf</code>/<code>RAPIDS</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td>GPU native; streaming processing</td>
    </tr>
    <tr>
        <td><code>dask</code></td>
        <td>distributed</td>
        <td>no</td>
        <td></td>
        <td>parallel wrapper on top of <code>pandas</code></td>
    </tr>
</table>`,frontmatter:{},index:6,start:164,end:227},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:$k,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>datafusion</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td><code>spark</code> on Arrow</td>
    </tr>
    <tr>
        <td><code>mars</code></td>
        <td>distributed</td>
        <td>no</td>
        <td><code>ray</code>, <code>kubernetes</code>, <code>hadoop</code></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>xarray</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>numpy</code>, <code>pandas</code>, <code>dask</code></td>
        <td></td>
    </tr>
    <tr>
        <td><code>fugue</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>spark</code>, <code>dask</code>, <code>ray</code></td>
        <td>SQL/<code>pandas</code>/python code</td>
    </tr>
    <tr>
        <td><code>modin</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>ray</code>, <code>dask</code>, <code>unidist</code> (?!)</td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>ibis</code></td>
        <td>wrapper</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
</table>

<br>

🔌 Shameless plug: check out my 🕶️ [\`awesome-pandas-alternatives\`](https://github.com/baggiponte/awesome-pandas-alternatives), where I collected these frameworks!
`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>datafusion</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td><code>spark</code> on Arrow</td>
    </tr>
    <tr>
        <td><code>mars</code></td>
        <td>distributed</td>
        <td>no</td>
        <td><code>ray</code>, <code>kubernetes</code>, <code>hadoop</code></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>xarray</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>numpy</code>, <code>pandas</code>, <code>dask</code></td>
        <td></td>
    </tr>
    <tr>
        <td><code>fugue</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>spark</code>, <code>dask</code>, <code>ray</code></td>
        <td>SQL/<code>pandas</code>/python code</td>
    </tr>
    <tr>
        <td><code>modin</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>ray</code>, <code>dask</code>, <code>unidist</code> (?!)</td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>ibis</code></td>
        <td>wrapper</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
</table>

<br>

🔌 Shameless plug: check out my 🕶️ [\`awesome-pandas-alternatives\`](https://github.com/baggiponte/awesome-pandas-alternatives), where I collected these frameworks!`,frontmatter:{srcSequence:"./pages/01-introduction.md"},index:9,start:228,end:288,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>datafusion</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td><code>spark</code> on Arrow</td>
    </tr>
    <tr>
        <td><code>mars</code></td>
        <td>distributed</td>
        <td>no</td>
        <td><code>ray</code>, <code>kubernetes</code>, <code>hadoop</code></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>xarray</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>numpy</code>, <code>pandas</code>, <code>dask</code></td>
        <td></td>
    </tr>
    <tr>
        <td><code>fugue</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>spark</code>, <code>dask</code>, <code>ray</code></td>
        <td>SQL/<code>pandas</code>/python code</td>
    </tr>
    <tr>
        <td><code>modin</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>ray</code>, <code>dask</code>, <code>unidist</code> (?!)</td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>ibis</code></td>
        <td>wrapper</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
</table>

<br>

🔌 Shameless plug: check out my 🕶️ [\`awesome-pandas-alternatives\`](https://github.com/baggiponte/awesome-pandas-alternatives), where I collected these frameworks!
`,title:"♻️ Data manipulation paradigms",level:1,content:`# ♻️ Data manipulation paradigms
A comparison of dataframe libraries

<table>
    <tr>
        <td><b><i>library</i></b></td>
        <td><b><i>type</i></b></td>
        <td><b><i>arrow native</i></b></td>
        <td><b><i>backends</i></b></td>
        <td><b><i>notes</i></b></td>
    </tr>
    <tr>
        <td><code>datafusion</code></td>
        <td>distributed</td>
        <td>yes</td>
        <td></td>
        <td><code>spark</code> on Arrow</td>
    </tr>
    <tr>
        <td><code>mars</code></td>
        <td>distributed</td>
        <td>no</td>
        <td><code>ray</code>, <code>kubernetes</code>, <code>hadoop</code></td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>xarray</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>numpy</code>, <code>pandas</code>, <code>dask</code></td>
        <td></td>
    </tr>
    <tr>
        <td><code>fugue</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>spark</code>, <code>dask</code>, <code>ray</code></td>
        <td>SQL/<code>pandas</code>/python code</td>
    </tr>
    <tr>
        <td><code>modin</code></td>
        <td>wrapper</td>
        <td>no</td>
        <td><code>ray</code>, <code>dask</code>, <code>unidist</code> (?!)</td>
        <td><code>pandas</code>-like API</td>
    </tr>
    <tr>
        <td><code>ibis</code></td>
        <td>wrapper</td>
        <td>yes</td>
        <td></td>
        <td>SQL first</td>
    </tr>
</table>

<br>

🔌 Shameless plug: check out my 🕶️ [\`awesome-pandas-alternatives\`](https://github.com/baggiponte/awesome-pandas-alternatives), where I collected these frameworks!`,frontmatter:{},index:7,start:228,end:288},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Ik,meta:{srcSequence:"./pages/01-introduction.md",slide:{raw:`
# ❓ When should I replace \`pandas\`?
A quick checklist

<v-clicks>

* When the data becomes too big, or queries too complex to express with \`pandas\` syntax.
* When you need more processing capabilities to perform complex operations.
* If you need distributed computing, \`apache-spark\` is still popular.
  * \`dask\` is nice too, but is still just \`pandas\` with parallelism: no multithreaded, same memory issues.
  * \`datafusion\` is being quickly developed (in rust, *by the way* 🦀)
  * There are all the (closed) compute engines: databricks, snowflake...
* But maybe setting up a bunch of clusters is a bit too much, and you would like to get away with a performant, in-memory solution... **here is where \`polars\` shines** 🐻‍❄️✨.

</v-clicks>

`,title:"❓ When should I replace `pandas`?",level:1,content:"# ❓ When should I replace `pandas`?\nA quick checklist\n\n<v-clicks>\n\n* When the data becomes too big, or queries too complex to express with `pandas` syntax.\n* When you need more processing capabilities to perform complex operations.\n* If you need distributed computing, `apache-spark` is still popular.\n  * `dask` is nice too, but is still just `pandas` with parallelism: no multithreaded, same memory issues.\n  * `datafusion` is being quickly developed (in rust, *by the way* 🦀)\n  * There are all the (closed) compute engines: databricks, snowflake...\n* But maybe setting up a bunch of clusters is a bit too much, and you would like to get away with a performant, in-memory solution... **here is where `polars` shines** 🐻‍❄️✨.\n\n</v-clicks>",frontmatter:{srcSequence:"./pages/01-introduction.md"},index:10,start:289,end:306,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",raw:`
# ❓ When should I replace \`pandas\`?
A quick checklist

<v-clicks>

* When the data becomes too big, or queries too complex to express with \`pandas\` syntax.
* When you need more processing capabilities to perform complex operations.
* If you need distributed computing, \`apache-spark\` is still popular.
  * \`dask\` is nice too, but is still just \`pandas\` with parallelism: no multithreaded, same memory issues.
  * \`datafusion\` is being quickly developed (in rust, *by the way* 🦀)
  * There are all the (closed) compute engines: databricks, snowflake...
* But maybe setting up a bunch of clusters is a bit too much, and you would like to get away with a performant, in-memory solution... **here is where \`polars\` shines** 🐻‍❄️✨.

</v-clicks>

`,title:"❓ When should I replace `pandas`?",level:1,content:"# ❓ When should I replace `pandas`?\nA quick checklist\n\n<v-clicks>\n\n* When the data becomes too big, or queries too complex to express with `pandas` syntax.\n* When you need more processing capabilities to perform complex operations.\n* If you need distributed computing, `apache-spark` is still popular.\n  * `dask` is nice too, but is still just `pandas` with parallelism: no multithreaded, same memory issues.\n  * `datafusion` is being quickly developed (in rust, *by the way* 🦀)\n  * There are all the (closed) compute engines: databricks, snowflake...\n* But maybe setting up a bunch of clusters is a bit too much, and you would like to get away with a performant, in-memory solution... **here is where `polars` shines** 🐻‍❄️✨.\n\n</v-clicks>",frontmatter:{},index:8,start:289,end:306},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/01-introduction.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Wk,meta:{title:"🐻‍❄️ Enter: `polars`",layout:"two-cols",srcSequence:"./pages/02-tutorial.md",slide:{raw:null,title:"🐻‍❄️ Enter: `polars`",level:1,content:`# 🐻‍❄️ Enter: \`polars\`
Who is that Pokémon? 

<v-clicks>

* Arrow columnar format as the memory model.
* Eager and lazy execution.
* Hybrid Streaming (larger than RAM).
* Multi-threaded.
* Powerful expression API.
* Query optimization.
* Implemented in *rust* 🦀
</v-clicks>

::right::

<v-after>
<iframe class="absolute top-35" src="https://giphy.com/embed/2dK0W3oUksQk0Xz8OK" width="480" height="204" frameBorder="0"></iframe>
</v-after>`,frontmatter:{title:"🐻‍❄️ Enter: `polars`",layout:"two-cols",srcSequence:"./pages/02-tutorial.md"},index:11,start:0,end:26,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`---
title: '🐻‍❄️ Enter: \`polars\`'
layout: two-cols
---

# 🐻‍❄️ Enter: \`polars\`
Who is that Pokémon? 

<v-clicks>

* Arrow columnar format as the memory model.
* Eager and lazy execution.
* Hybrid Streaming (larger than RAM).
* Multi-threaded.
* Powerful expression API.
* Query optimization.
* Implemented in *rust* 🦀
</v-clicks>

::right::

<v-after>
<iframe class="absolute top-35" src="https://giphy.com/embed/2dK0W3oUksQk0Xz8OK" width="480" height="204" frameBorder="0"></iframe>
</v-after>

`,title:"🐻‍❄️ Enter: `polars`",level:1,content:`# 🐻‍❄️ Enter: \`polars\`
Who is that Pokémon? 

<v-clicks>

* Arrow columnar format as the memory model.
* Eager and lazy execution.
* Hybrid Streaming (larger than RAM).
* Multi-threaded.
* Powerful expression API.
* Query optimization.
* Implemented in *rust* 🦀
</v-clicks>

::right::

<v-after>
<iframe class="absolute top-35" src="https://giphy.com/embed/2dK0W3oUksQk0Xz8OK" width="480" height="204" frameBorder="0"></iframe>
</v-after>`,frontmatter:{title:"🐻‍❄️ Enter: `polars`",layout:"two-cols"},index:0,start:0,end:26},inline:{raw:`---
src: ./pages/02-tutorial.md
---
`,content:"",frontmatter:{},index:3,start:77,end:81},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Qk,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🐻‍❄️ Enter: \`polars\`
General features

<v-clicks>

* Copy-on-write (COW) semantics
  * "Free" clones
  * Cheap appends
* Appending without clones
* Column oriented data storage
  * No block manager (i.e. predictable performance)
* Missing values indicated with bitmask
  * NaN are different from missing
  * Bitmask optimizations
* Efficient algorithms
* Very fast IO
  * Its csv and parquet readers are among the fastest in existence
</v-clicks>

`,title:"🐻‍❄️ Enter: `polars`",level:1,content:`# 🐻‍❄️ Enter: \`polars\`
General features

<v-clicks>

* Copy-on-write (COW) semantics
  * "Free" clones
  * Cheap appends
* Appending without clones
* Column oriented data storage
  * No block manager (i.e. predictable performance)
* Missing values indicated with bitmask
  * NaN are different from missing
  * Bitmask optimizations
* Efficient algorithms
* Very fast IO
  * Its csv and parquet readers are among the fastest in existence
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:12,start:27,end:48,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🐻‍❄️ Enter: \`polars\`
General features

<v-clicks>

* Copy-on-write (COW) semantics
  * "Free" clones
  * Cheap appends
* Appending without clones
* Column oriented data storage
  * No block manager (i.e. predictable performance)
* Missing values indicated with bitmask
  * NaN are different from missing
  * Bitmask optimizations
* Efficient algorithms
* Very fast IO
  * Its csv and parquet readers are among the fastest in existence
</v-clicks>

`,title:"🐻‍❄️ Enter: `polars`",level:1,content:`# 🐻‍❄️ Enter: \`polars\`
General features

<v-clicks>

* Copy-on-write (COW) semantics
  * "Free" clones
  * Cheap appends
* Appending without clones
* Column oriented data storage
  * No block manager (i.e. predictable performance)
* Missing values indicated with bitmask
  * NaN are different from missing
  * Bitmask optimizations
* Efficient algorithms
* Very fast IO
  * Its csv and parquet readers are among the fastest in existence
</v-clicks>`,frontmatter:{},index:1,start:27,end:48},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:ex,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🐻‍❄️ Enter: \`polars\`
Query optimizations

<v-clicks>

* Predicate pushdown
  * Filtering at scan level
    * e.g. lazy eval, i.e. dataset is *only* mapped into memory rather than read
* Projection pushdown
  * Projection at scan level
* Aggregate pushdown
  * Aggregations at scan level
* Simplify expressions
* Parallel execution of physical plan
* Cardinality based groupby dispatch
  * Different groupby strategies based on data cardinality
* SIMD vectorization (single instruction multiple data)
* NumPy universal functions

</v-clicks>

`,title:"🐻‍❄️ Enter: `polars`",level:1,content:`# 🐻‍❄️ Enter: \`polars\`
Query optimizations

<v-clicks>

* Predicate pushdown
  * Filtering at scan level
    * e.g. lazy eval, i.e. dataset is *only* mapped into memory rather than read
* Projection pushdown
  * Projection at scan level
* Aggregate pushdown
  * Aggregations at scan level
* Simplify expressions
* Parallel execution of physical plan
* Cardinality based groupby dispatch
  * Different groupby strategies based on data cardinality
* SIMD vectorization (single instruction multiple data)
* NumPy universal functions

</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:13,start:49,end:72,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🐻‍❄️ Enter: \`polars\`
Query optimizations

<v-clicks>

* Predicate pushdown
  * Filtering at scan level
    * e.g. lazy eval, i.e. dataset is *only* mapped into memory rather than read
* Projection pushdown
  * Projection at scan level
* Aggregate pushdown
  * Aggregations at scan level
* Simplify expressions
* Parallel execution of physical plan
* Cardinality based groupby dispatch
  * Different groupby strategies based on data cardinality
* SIMD vectorization (single instruction multiple data)
* NumPy universal functions

</v-clicks>

`,title:"🐻‍❄️ Enter: `polars`",level:1,content:`# 🐻‍❄️ Enter: \`polars\`
Query optimizations

<v-clicks>

* Predicate pushdown
  * Filtering at scan level
    * e.g. lazy eval, i.e. dataset is *only* mapped into memory rather than read
* Projection pushdown
  * Projection at scan level
* Aggregate pushdown
  * Aggregations at scan level
* Simplify expressions
* Parallel execution of physical plan
* Cardinality based groupby dispatch
  * Different groupby strategies based on data cardinality
* SIMD vectorization (single instruction multiple data)
* NumPy universal functions

</v-clicks>`,frontmatter:{},index:2,start:49,end:72},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:rx,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
Quick start

\`\`\`python{all|4,8|5-8|5,7|all}
import polars as pl

df = pl.read_csv("https://j.mp/iriscsv")
df.filter(
    pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
)
\`\`\`

<v-click>

\`\`\`
shape: (3, 5)
┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐
│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │
│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │
│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │
╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡
│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │
└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘
\`\`\`
</v-click>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Quick start

\`\`\`python{all|4,8|5-8|5,7|all}
import polars as pl

df = pl.read_csv("https://j.mp/iriscsv")
df.filter(
    pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
)
\`\`\`

<v-click>

\`\`\`
shape: (3, 5)
┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐
│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │
│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │
│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │
╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡
│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │
└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘
\`\`\`
</v-click>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:14,start:73,end:107,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
Quick start

\`\`\`python{all|4,8|5-8|5,7|all}
import polars as pl

df = pl.read_csv("https://j.mp/iriscsv")
df.filter(
    pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
)
\`\`\`

<v-click>

\`\`\`
shape: (3, 5)
┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐
│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │
│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │
│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │
╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡
│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │
└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘
\`\`\`
</v-click>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Quick start

\`\`\`python{all|4,8|5-8|5,7|all}
import polars as pl

df = pl.read_csv("https://j.mp/iriscsv")
df.filter(
    pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
)
\`\`\`

<v-click>

\`\`\`
shape: (3, 5)
┌────────────┬──────────────┬─────────────┬──────────────┬─────────────┐
│ species    ┆ sepal_length ┆ sepal_width ┆ petal_length ┆ petal_width │
│ ---        ┆ ---          ┆ ---         ┆ ---          ┆ ---         │
│ str        ┆ f64          ┆ f64         ┆ f64          ┆ f64         │
╞════════════╪══════════════╪═════════════╪══════════════╪═════════════╡
│ setosa     ┆ 116.9        ┆ 81.7        ┆ 33.2         ┆ 6.1         │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ versicolor ┆ 281.9        ┆ 131.8       ┆ 202.9        ┆ 63.3        │
├╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ virginica  ┆ 324.5        ┆ 146.2       ┆ 273.1        ┆ 99.6        │
└────────────┴──────────────┴─────────────┴──────────────┴─────────────┘
\`\`\`
</v-click>`,frontmatter:{},index:3,start:73,end:107},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:mx,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:'\n# 🔍 `polars` fundamentals \n`polars` fundamentals: `contexts` and `expressions`\n\n<v-clicks>\n\n`expressions` are an abstraction over simple column manipulations, as well as more complex ones such as groupbys and joins.\nEach expression maps a `Series` into another one.\n\n```python\npl.col("foo").sort().head(2)\n```\n\n`expressions` can only be used within `contexts` that are "opened" by three special verbs:\n\n* selection: `df.select([...])`\n* groupby aggregation: `df.groupby([...]).agg([...])`\n* hstack/adding columns: `df.with_columns([...])`\n\n```python\ndf.select([\n    pl.col("foo").sort().head(2),\n    pl.col("bar").filter(pl.col("foo") == 1).sum()\n])\n```\n</v-clicks>\n\n',title:"🔍 `polars` fundamentals",level:1,content:'# 🔍 `polars` fundamentals \n`polars` fundamentals: `contexts` and `expressions`\n\n<v-clicks>\n\n`expressions` are an abstraction over simple column manipulations, as well as more complex ones such as groupbys and joins.\nEach expression maps a `Series` into another one.\n\n```python\npl.col("foo").sort().head(2)\n```\n\n`expressions` can only be used within `contexts` that are "opened" by three special verbs:\n\n* selection: `df.select([...])`\n* groupby aggregation: `df.groupby([...]).agg([...])`\n* hstack/adding columns: `df.with_columns([...])`\n\n```python\ndf.select([\n    pl.col("foo").sort().head(2),\n    pl.col("bar").filter(pl.col("foo") == 1).sum()\n])\n```\n</v-clicks>',frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:15,start:108,end:136,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:'\n# 🔍 `polars` fundamentals \n`polars` fundamentals: `contexts` and `expressions`\n\n<v-clicks>\n\n`expressions` are an abstraction over simple column manipulations, as well as more complex ones such as groupbys and joins.\nEach expression maps a `Series` into another one.\n\n```python\npl.col("foo").sort().head(2)\n```\n\n`expressions` can only be used within `contexts` that are "opened" by three special verbs:\n\n* selection: `df.select([...])`\n* groupby aggregation: `df.groupby([...]).agg([...])`\n* hstack/adding columns: `df.with_columns([...])`\n\n```python\ndf.select([\n    pl.col("foo").sort().head(2),\n    pl.col("bar").filter(pl.col("foo") == 1).sum()\n])\n```\n</v-clicks>\n\n',title:"🔍 `polars` fundamentals",level:1,content:'# 🔍 `polars` fundamentals \n`polars` fundamentals: `contexts` and `expressions`\n\n<v-clicks>\n\n`expressions` are an abstraction over simple column manipulations, as well as more complex ones such as groupbys and joins.\nEach expression maps a `Series` into another one.\n\n```python\npl.col("foo").sort().head(2)\n```\n\n`expressions` can only be used within `contexts` that are "opened" by three special verbs:\n\n* selection: `df.select([...])`\n* groupby aggregation: `df.groupby([...]).agg([...])`\n* hstack/adding columns: `df.with_columns([...])`\n\n```python\ndf.select([\n    pl.col("foo").sort().head(2),\n    pl.col("bar").filter(pl.col("foo") == 1).sum()\n])\n```\n</v-clicks>',frontmatter:{},index:4,start:108,end:136},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Ax,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# add new columns to the dataframe
df = df.with_columns(
    [
        pl.sum("nrs").alias("nrs_sum"),
        pl.col("random").count().alias("count"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬─────────┬───────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │
╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │
└──────┴───────┴──────────┴────────┴─────────┴───────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# add new columns to the dataframe
df = df.with_columns(
    [
        pl.sum("nrs").alias("nrs_sum"),
        pl.col("random").count().alias("count"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬─────────┬───────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │
╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │
└──────┴───────┴──────────┴────────┴─────────┴───────┘
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:16,start:137,end:172,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# add new columns to the dataframe
df = df.with_columns(
    [
        pl.sum("nrs").alias("nrs_sum"),
        pl.col("random").count().alias("count"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬─────────┬───────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │
╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │
└──────┴───────┴──────────┴────────┴─────────┴───────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# add new columns to the dataframe
df = df.with_columns(
    [
        pl.sum("nrs").alias("nrs_sum"),
        pl.col("random").count().alias("count"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬─────────┬───────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ nrs_sum ┆ count │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---     ┆ ---   │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ i64     ┆ u32   │
╞══════╪═══════╪══════════╪════════╪═════════╪═══════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 11      ┆ 5     │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 11      ┆ 5     │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 11      ┆ 5     │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 11      ┆ 5     │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 11      ┆ 5     │
└──────┴───────┴──────────┴────────┴─────────┴───────┘
\`\`\`
</v-clicks>`,frontmatter:{},index:5,start:137,end:172},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Sx,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# expressions can be nested
out = df.select(
    [
        pl.col("names").filter(pl.col("names").str.contains(r"am$")).count(),
    ]
)
\`\`\`

\`\`\`
shape: (1, 1)
┌───────┐
│ names │
│ ---   │
│ u32   │
╞═══════╡
│ 2     │
└───────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# expressions can be nested
out = df.select(
    [
        pl.col("names").filter(pl.col("names").str.contains(r"am$")).count(),
    ]
)
\`\`\`

\`\`\`
shape: (1, 1)
┌───────┐
│ names │
│ ---   │
│ u32   │
╞═══════╡
│ 2     │
└───────┘
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:17,start:173,end:203,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# expressions can be nested
out = df.select(
    [
        pl.col("names").filter(pl.col("names").str.contains(r"am$")).count(),
    ]
)
\`\`\`

\`\`\`
shape: (1, 1)
┌───────┐
│ names │
│ ---   │
│ u32   │
╞═══════╡
│ 2     │
└───────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# expressions can be nested
out = df.select(
    [
        pl.col("names").filter(pl.col("names").str.contains(r"am$")).count(),
    ]
)
\`\`\`

\`\`\`
shape: (1, 1)
┌───────┐
│ names │
│ ---   │
│ u32   │
╞═══════╡
│ 2     │
└───────┘
\`\`\`
</v-clicks>`,frontmatter:{},index:6,start:173,end:203},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Mx,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# you have a lot of syntactic sugar
out = df.select(
    [
        pl.when(pl.col("random") > 0.5).then(0).otherwise(pl.col("random")) * pl.sum("nrs"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 1)
┌──────────┐
│ literal  │
│ ---      │
│ f64      │
╞══════════╡
│ 1.695791 │
│ 0.0      │
│ 2.896465 │
│ 0.0      │
│ 0.160325 │
└──────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# you have a lot of syntactic sugar
out = df.select(
    [
        pl.when(pl.col("random") > 0.5).then(0).otherwise(pl.col("random")) * pl.sum("nrs"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 1)
┌──────────┐
│ literal  │
│ ---      │
│ f64      │
╞══════════╡
│ 1.695791 │
│ 0.0      │
│ 2.896465 │
│ 0.0      │
│ 0.160325 │
└──────────┘
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:18,start:204,end:238,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# you have a lot of syntactic sugar
out = df.select(
    [
        pl.when(pl.col("random") > 0.5).then(0).otherwise(pl.col("random")) * pl.sum("nrs"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 1)
┌──────────┐
│ literal  │
│ ---      │
│ f64      │
╞══════════╡
│ 1.695791 │
│ 0.0      │
│ 2.896465 │
│ 0.0      │
│ 0.160325 │
└──────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# you have a lot of syntactic sugar
out = df.select(
    [
        pl.when(pl.col("random") > 0.5).then(0).otherwise(pl.col("random")) * pl.sum("nrs"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 1)
┌──────────┐
│ literal  │
│ ---      │
│ f64      │
╞══════════╡
│ 1.695791 │
│ 0.0      │
│ 2.896465 │
│ 0.0      │
│ 0.160325 │
└──────────┘
\`\`\`
</v-clicks>`,frontmatter:{},index:7,start:204,end:238},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:qx,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# also window functions
df = df.select(
    [
        pl.col("*"),  # select all
        pl.col("random").sum().over("groups").alias("sum[random]/groups"),
        pl.col("random").list().over("names").alias("random/name"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │
╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │
└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# also window functions
df = df.select(
    [
        pl.col("*"),  # select all
        pl.col("random").sum().over("groups").alias("sum[random]/groups"),
        pl.col("random").list().over("names").alias("random/name"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │
╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │
└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:19,start:239,end:275,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# also window functions
df = df.select(
    [
        pl.col("*"),  # select all
        pl.col("random").sum().over("groups").alias("sum[random]/groups"),
        pl.col("random").list().over("names").alias("random/name"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │
╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │
└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

\`expressions\` heavily use method chaining to enable an expressive, procedural syntax:

<v-clicks>

\`\`\`python
# also window functions
df = df.select(
    [
        pl.col("*"),  # select all
        pl.col("random").sum().over("groups").alias("sum[random]/groups"),
        pl.col("random").list().over("names").alias("random/name"),
    ]
)
\`\`\`

\`\`\`
shape: (5, 6)
┌──────┬───────┬──────────┬────────┬────────────────────┬─────────────┐
│ nrs  ┆ names ┆ random   ┆ groups ┆ sum[random]/groups ┆ random/name │
│ ---  ┆ ---   ┆ ---      ┆ ---    ┆ ---                ┆ ---         │
│ i64  ┆ str   ┆ f64      ┆ str    ┆ f64                ┆ list[f64]   │
╞══════╪═══════╪══════════╪════════╪════════════════════╪═════════════╡
│ 1    ┆ foo   ┆ 0.154163 ┆ A      ┆ 0.894213           ┆ [0.154163]  │
│ 2    ┆ ham   ┆ 0.74005  ┆ A      ┆ 0.894213           ┆ [0.74005]   │
│ 3    ┆ spam  ┆ 0.263315 ┆ B      ┆ 0.27789            ┆ [0.263315]  │
│ null ┆ egg   ┆ 0.533739 ┆ C      ┆ 0.533739           ┆ [0.533739]  │
│ 5    ┆ null  ┆ 0.014575 ┆ B      ┆ 0.27789            ┆ [0.014575]  │
└──────┴───────┴──────────┴────────┴────────────────────┴─────────────┘
\`\`\`
</v-clicks>`,frontmatter:{},index:8,start:239,end:275},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Gx,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

But you can do these with \`pandas\` too! Or, can you?

<v-clicks>

\`\`\`python
out = df.groupby("groups").agg(
    [
        pl.sum("nrs"),  # sum nrs by groups
        pl.col("random").count().alias("count"),  # count group members
        # sum random where name != null
        pl.col("random").filter(pl.col("names").is_not_null()).sum().suffix("_sum"),
        pl.col("names").reverse().alias(("reversed names")),
    ]
)
\`\`\`

Certainly you can, but you might want to define functions to improve on readability and work around some limitations.
Also, you would give up on the free optimisations that come with using \`polars\`.

</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

But you can do these with \`pandas\` too! Or, can you?

<v-clicks>

\`\`\`python
out = df.groupby("groups").agg(
    [
        pl.sum("nrs"),  # sum nrs by groups
        pl.col("random").count().alias("count"),  # count group members
        # sum random where name != null
        pl.col("random").filter(pl.col("names").is_not_null()).sum().suffix("_sum"),
        pl.col("names").reverse().alias(("reversed names")),
    ]
)
\`\`\`

Certainly you can, but you might want to define functions to improve on readability and work around some limitations.
Also, you would give up on the free optimisations that come with using \`polars\`.

</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:20,start:276,end:302,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

But you can do these with \`pandas\` too! Or, can you?

<v-clicks>

\`\`\`python
out = df.groupby("groups").agg(
    [
        pl.sum("nrs"),  # sum nrs by groups
        pl.col("random").count().alias("count"),  # count group members
        # sum random where name != null
        pl.col("random").filter(pl.col("names").is_not_null()).sum().suffix("_sum"),
        pl.col("names").reverse().alias(("reversed names")),
    ]
)
\`\`\`

Certainly you can, but you might want to define functions to improve on readability and work around some limitations.
Also, you would give up on the free optimisations that come with using \`polars\`.

</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
\`polars\` fundamentals: \`contexts\` and \`expressions\`

But you can do these with \`pandas\` too! Or, can you?

<v-clicks>

\`\`\`python
out = df.groupby("groups").agg(
    [
        pl.sum("nrs"),  # sum nrs by groups
        pl.col("random").count().alias("count"),  # count group members
        # sum random where name != null
        pl.col("random").filter(pl.col("names").is_not_null()).sum().suffix("_sum"),
        pl.col("names").reverse().alias(("reversed names")),
    ]
)
\`\`\`

Certainly you can, but you might want to define functions to improve on readability and work around some limitations.
Also, you would give up on the free optimisations that come with using \`polars\`.

</v-clicks>`,frontmatter:{},index:9,start:276,end:302},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:n2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

* Do not use lambda functions inside \`polars\` expressions: they will kill the native parallelism!
  * Chances are, you won't resort to them quite often as the expression syntax covers a lot of use cases.

\`\`\`python
q = (
    dataset.lazy()
    .groupby("state")
    .agg(
        [
            (pl.col("party") == "Anti-Administration").sum().alias("anti"),
            (pl.col("party") == "Pro-Administration").sum().alias("pro"),
        ]
    )
    .sort("pro", reverse=True)
    .limit(5)
)

df = q.collect()
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

* Do not use lambda functions inside \`polars\` expressions: they will kill the native parallelism!
  * Chances are, you won't resort to them quite often as the expression syntax covers a lot of use cases.

\`\`\`python
q = (
    dataset.lazy()
    .groupby("state")
    .agg(
        [
            (pl.col("party") == "Anti-Administration").sum().alias("anti"),
            (pl.col("party") == "Pro-Administration").sum().alias("pro"),
        ]
    )
    .sort("pro", reverse=True)
    .limit(5)
)

df = q.collect()
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:21,start:303,end:331,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

* Do not use lambda functions inside \`polars\` expressions: they will kill the native parallelism!
  * Chances are, you won't resort to them quite often as the expression syntax covers a lot of use cases.

\`\`\`python
q = (
    dataset.lazy()
    .groupby("state")
    .agg(
        [
            (pl.col("party") == "Anti-Administration").sum().alias("anti"),
            (pl.col("party") == "Pro-Administration").sum().alias("pro"),
        ]
    )
    .sort("pro", reverse=True)
    .limit(5)
)

df = q.collect()
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

* Do not use lambda functions inside \`polars\` expressions: they will kill the native parallelism!
  * Chances are, you won't resort to them quite often as the expression syntax covers a lot of use cases.

\`\`\`python
q = (
    dataset.lazy()
    .groupby("state")
    .agg(
        [
            (pl.col("party") == "Anti-Administration").sum().alias("anti"),
            (pl.col("party") == "Pro-Administration").sum().alias("pro"),
        ]
    )
    .sort("pro", reverse=True)
    .limit(5)
)

df = q.collect()
\`\`\`
</v-clicks>`,frontmatter:{},index:10,start:303,end:331},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:c2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

If you didn't notice: \`polars\` \`DataFrame\`s have no indexes!
But there are plenty of ways to work with time series data - \`groupby_dynamic\` and \`groupby_rolling\`:

\`\`\`python{all|3}
df = pl.read_csv("data/appleStock.csv", parse_dates=True)

annual_average_df = df.groupby_dynamic("Date", every="1y").agg(pl.col("Close").mean())
df_with_year = df.with_column(pl.col("Date").dt.year().alias("year"))
\`\`\`

\`\`\`
shape: (34, 2)
┌────────────┬───────────┐
│ Date       ┆ Close     │
│ ---        ┆ ---       │
│ date       ┆ f64       │
╞════════════╪═══════════╡
│ 1981-01-01 ┆ 23.5625   │
│ 1982-01-01 ┆ 11.0      │
│ ...        ┆ ...       │
│ 2013-01-01 ┆ 464.955   │
│ 2014-01-01 ┆ 522.06    │
└────────────┴───────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

If you didn't notice: \`polars\` \`DataFrame\`s have no indexes!
But there are plenty of ways to work with time series data - \`groupby_dynamic\` and \`groupby_rolling\`:

\`\`\`python{all|3}
df = pl.read_csv("data/appleStock.csv", parse_dates=True)

annual_average_df = df.groupby_dynamic("Date", every="1y").agg(pl.col("Close").mean())
df_with_year = df.with_column(pl.col("Date").dt.year().alias("year"))
\`\`\`

\`\`\`
shape: (34, 2)
┌────────────┬───────────┐
│ Date       ┆ Close     │
│ ---        ┆ ---       │
│ date       ┆ f64       │
╞════════════╪═══════════╡
│ 1981-01-01 ┆ 23.5625   │
│ 1982-01-01 ┆ 11.0      │
│ ...        ┆ ...       │
│ 2013-01-01 ┆ 464.955   │
│ 2014-01-01 ┆ 522.06    │
└────────────┴───────────┘
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:22,start:332,end:365,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

If you didn't notice: \`polars\` \`DataFrame\`s have no indexes!
But there are plenty of ways to work with time series data - \`groupby_dynamic\` and \`groupby_rolling\`:

\`\`\`python{all|3}
df = pl.read_csv("data/appleStock.csv", parse_dates=True)

annual_average_df = df.groupby_dynamic("Date", every="1y").agg(pl.col("Close").mean())
df_with_year = df.with_column(pl.col("Date").dt.year().alias("year"))
\`\`\`

\`\`\`
shape: (34, 2)
┌────────────┬───────────┐
│ Date       ┆ Close     │
│ ---        ┆ ---       │
│ date       ┆ f64       │
╞════════════╪═══════════╡
│ 1981-01-01 ┆ 23.5625   │
│ 1982-01-01 ┆ 11.0      │
│ ...        ┆ ...       │
│ 2013-01-01 ┆ 464.955   │
│ 2014-01-01 ┆ 522.06    │
└────────────┴───────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

If you didn't notice: \`polars\` \`DataFrame\`s have no indexes!
But there are plenty of ways to work with time series data - \`groupby_dynamic\` and \`groupby_rolling\`:

\`\`\`python{all|3}
df = pl.read_csv("data/appleStock.csv", parse_dates=True)

annual_average_df = df.groupby_dynamic("Date", every="1y").agg(pl.col("Close").mean())
df_with_year = df.with_column(pl.col("Date").dt.year().alias("year"))
\`\`\`

\`\`\`
shape: (34, 2)
┌────────────┬───────────┐
│ Date       ┆ Close     │
│ ---        ┆ ---       │
│ date       ┆ f64       │
╞════════════╪═══════════╡
│ 1981-01-01 ┆ 23.5625   │
│ 1982-01-01 ┆ 11.0      │
│ ...        ┆ ...       │
│ 2013-01-01 ┆ 464.955   │
│ 2014-01-01 ┆ 522.06    │
└────────────┴───────────┘
\`\`\`
</v-clicks>`,frontmatter:{},index:11,start:332,end:365},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:y2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

There's also support for resampling, like \`pandas.DataFrame.resample()\`:

\`\`\`python
df.upsample(time_column="time", every="15m").interpolate().fill_null("forward")
\`\`\`

\`\`\`
shape: (13, 3)
┌─────────────────────┬─────────┬────────┐
│ time                ┆ groups  ┆ values │
│ ---                 ┆ ---     ┆ ---    │
│ datetime[μs]        ┆ str     ┆ f64    │
╞═════════════════════╪═════════╪════════╡
│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │
│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │
│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │
│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │
│ ...                 ┆ ...     ┆ ...    │
│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │
│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │
│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │
│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │
└─────────────────────┴─────────┴────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

There's also support for resampling, like \`pandas.DataFrame.resample()\`:

\`\`\`python
df.upsample(time_column="time", every="15m").interpolate().fill_null("forward")
\`\`\`

\`\`\`
shape: (13, 3)
┌─────────────────────┬─────────┬────────┐
│ time                ┆ groups  ┆ values │
│ ---                 ┆ ---     ┆ ---    │
│ datetime[μs]        ┆ str     ┆ f64    │
╞═════════════════════╪═════════╪════════╡
│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │
│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │
│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │
│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │
│ ...                 ┆ ...     ┆ ...    │
│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │
│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │
│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │
│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │
└─────────────────────┴─────────┴────────┘
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:23,start:366,end:399,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

There's also support for resampling, like \`pandas.DataFrame.resample()\`:

\`\`\`python
df.upsample(time_column="time", every="15m").interpolate().fill_null("forward")
\`\`\`

\`\`\`
shape: (13, 3)
┌─────────────────────┬─────────┬────────┐
│ time                ┆ groups  ┆ values │
│ ---                 ┆ ---     ┆ ---    │
│ datetime[μs]        ┆ str     ┆ f64    │
╞═════════════════════╪═════════╪════════╡
│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │
│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │
│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │
│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │
│ ...                 ┆ ...     ┆ ...    │
│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │
│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │
│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │
│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │
└─────────────────────┴─────────┴────────┘
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

There's also support for resampling, like \`pandas.DataFrame.resample()\`:

\`\`\`python
df.upsample(time_column="time", every="15m").interpolate().fill_null("forward")
\`\`\`

\`\`\`
shape: (13, 3)
┌─────────────────────┬─────────┬────────┐
│ time                ┆ groups  ┆ values │
│ ---                 ┆ ---     ┆ ---    │
│ datetime[μs]        ┆ str     ┆ f64    │
╞═════════════════════╪═════════╪════════╡
│ 2021-12-16 00:00:00 ┆ a       ┆ 1.0    │
│ 2021-12-16 00:15:00 ┆ forward ┆ 1.5    │
│ 2021-12-16 00:30:00 ┆ a       ┆ 2.0    │
│ 2021-12-16 00:45:00 ┆ forward ┆ 2.5    │
│ ...                 ┆ ...     ┆ ...    │
│ 2021-12-16 02:15:00 ┆ forward ┆ 5.5    │
│ 2021-12-16 02:30:00 ┆ a       ┆ 6.0    │
│ 2021-12-16 02:45:00 ┆ forward ┆ 6.5    │
│ 2021-12-16 03:00:00 ┆ a       ┆ 7.0    │
└─────────────────────┴─────────┴────────┘
\`\`\`
</v-clicks>`,frontmatter:{},index:12,start:366,end:399},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:A2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

Why is it necessary to use \`expressions\` inside of \`contexts\`?
Because they are actually syntactic sugar wrappers around the lazy API:

\`\`\`python
df.groupby("foo").agg([pl.col("bar").sum()])
# is actually running
(df.lazy().groupby("foo").agg([pl.col("bar").sum()])).collect()
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

Why is it necessary to use \`expressions\` inside of \`contexts\`?
Because they are actually syntactic sugar wrappers around the lazy API:

\`\`\`python
df.groupby("foo").agg([pl.col("bar").sum()])
# is actually running
(df.lazy().groupby("foo").agg([pl.col("bar").sum()])).collect()
\`\`\`
</v-clicks>`,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:24,start:400,end:417,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

Why is it necessary to use \`expressions\` inside of \`contexts\`?
Because they are actually syntactic sugar wrappers around the lazy API:

\`\`\`python
df.groupby("foo").agg([pl.col("bar").sum()])
# is actually running
(df.lazy().groupby("foo").agg([pl.col("bar").sum()])).collect()
\`\`\`
</v-clicks>

`,title:"🔍 `polars` fundamentals",level:1,content:`# 🔍 \`polars\` fundamentals 
Tips and tricks

<v-clicks>

Why is it necessary to use \`expressions\` inside of \`contexts\`?
Because they are actually syntactic sugar wrappers around the lazy API:

\`\`\`python
df.groupby("foo").agg([pl.col("bar").sum()])
# is actually running
(df.lazy().groupby("foo").agg([pl.col("bar").sum()])).collect()
\`\`\`
</v-clicks>`,frontmatter:{},index:13,start:400,end:417},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:B2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 💤 Lazy execution
When the data is stored locally

\`\`\`python{all|4|5-7|8}
import polars as pl

( 
    pl.scan_csv("https://j.mp/iriscsv")
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\`

`,title:"💤 Lazy execution",level:1,content:`# 💤 Lazy execution
When the data is stored locally

\`\`\`python{all|4|5-7|8}
import polars as pl

( 
    pl.scan_csv("https://j.mp/iriscsv")
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\``,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:25,start:418,end:435,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 💤 Lazy execution
When the data is stored locally

\`\`\`python{all|4|5-7|8}
import polars as pl

( 
    pl.scan_csv("https://j.mp/iriscsv")
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\`

`,title:"💤 Lazy execution",level:1,content:`# 💤 Lazy execution
When the data is stored locally

\`\`\`python{all|4|5-7|8}
import polars as pl

( 
    pl.scan_csv("https://j.mp/iriscsv")
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\``,frontmatter:{},index:14,start:418,end:435},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:F2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 💤 Lazy execution
When the data is *not* stored locally

\`\`\`python{all|4|5|6-8|9}
import polars as pl

( 
    pl.read_csv("https://j.mp/iriscsv")
    .lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\`

`,title:"💤 Lazy execution",level:1,content:`# 💤 Lazy execution
When the data is *not* stored locally

\`\`\`python{all|4|5|6-8|9}
import polars as pl

( 
    pl.read_csv("https://j.mp/iriscsv")
    .lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\``,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:26,start:436,end:454,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 💤 Lazy execution
When the data is *not* stored locally

\`\`\`python{all|4|5|6-8|9}
import polars as pl

( 
    pl.read_csv("https://j.mp/iriscsv")
    .lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\`

`,title:"💤 Lazy execution",level:1,content:`# 💤 Lazy execution
When the data is *not* stored locally

\`\`\`python{all|4|5|6-8|9}
import polars as pl

( 
    pl.read_csv("https://j.mp/iriscsv")
    .lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\``,frontmatter:{},index:15,start:436,end:454},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:L2,meta:{srcSequence:"./pages/02-tutorial.md",slide:{raw:`
# 💤 Lazy execution
When alternating lazy and eager

\`\`\`python{all|4,8}
import polars as pl

(
    df.lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\`
`,title:"💤 Lazy execution",level:1,content:`# 💤 Lazy execution
When alternating lazy and eager

\`\`\`python{all|4,8}
import polars as pl

(
    df.lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\``,frontmatter:{srcSequence:"./pages/02-tutorial.md"},index:27,start:455,end:471,source:{filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",raw:`
# 💤 Lazy execution
When alternating lazy and eager

\`\`\`python{all|4,8}
import polars as pl

(
    df.lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\`
`,title:"💤 Lazy execution",level:1,content:`# 💤 Lazy execution
When alternating lazy and eager

\`\`\`python{all|4,8}
import polars as pl

(
    df.lazy()
    .filter(pl.col("sepal_length") > 5)
    .groupby("species", maintain_order=True)
    .agg(pl.all().sum())
    .collect()
)
\`\`\``,frontmatter:{},index:16,start:455,end:471},filepath:"/home/runner/work/pymi-polars/pymi-polars/pages/02-tutorial.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:V2,meta:{slide:{raw:`
# 🔖 References

* [Modern \`pandas\`](https://tomaugspurger.github.io/posts/modern-1-intro/) and [modern \`polars\`](https://kevinheavey.github.io/modern-polars/).
* \`polars\`'s fantastic [\`docs\`](https://pola-rs.github.io/polars-book/user-guide/).
* Apache Arrow's [blog](https://arrow.apache.org/blog/) and [docs](https://arrow.apache.org/docs/index.html).
  * Wes McKinney's [blog](https://wesmckinney.com/archives.html) (and/or talks on YouTube).
* Voltron Data's [blog](https://voltrondata.com/resources).
* Juan Luis Cano series on the [Great DataFrame Showdown](https://www.orchest.io/blog/the-great-python-dataframe-showdown-part-1-demystifying-apache-arrow) on Orchest's blog.
* My decently-sized [\`Data & DataFrames\`](https://github.com/stars/baggiponte/lists/data-dataframes) list on GitHub.
* If you are interested in a proper course, check this one on [udemy](https://www.udemy.com/course/data-analysis-with-polars/) by Liam Brannigan.
`,title:"🔖 References",level:1,content:"# 🔖 References\n\n* [Modern `pandas`](https://tomaugspurger.github.io/posts/modern-1-intro/) and [modern `polars`](https://kevinheavey.github.io/modern-polars/).\n* `polars`'s fantastic [`docs`](https://pola-rs.github.io/polars-book/user-guide/).\n* Apache Arrow's [blog](https://arrow.apache.org/blog/) and [docs](https://arrow.apache.org/docs/index.html).\n  * Wes McKinney's [blog](https://wesmckinney.com/archives.html) (and/or talks on YouTube).\n* Voltron Data's [blog](https://voltrondata.com/resources).\n* Juan Luis Cano series on the [Great DataFrame Showdown](https://www.orchest.io/blog/the-great-python-dataframe-showdown-part-1-demystifying-apache-arrow) on Orchest's blog.\n* My decently-sized [`Data & DataFrames`](https://github.com/stars/baggiponte/lists/data-dataframes) list on GitHub.\n* If you are interested in a proper course, check this one on [udemy](https://www.udemy.com/course/data-analysis-with-polars/) by Liam Brannigan.",frontmatter:{},index:28,start:82,end:94,noteHTML:"",filepath:"/home/runner/work/pymi-polars/pymi-polars/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Q2,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

# 🙏 Thank you for your time!
## 🎉 Special thanks to [Futura](https://www.futura.study/) & [PyMi](http://milano.python.it/)!
`,title:"🙏 Thank you for your time!",level:1,content:`# 🙏 Thank you for your time!
## 🎉 Special thanks to [Futura](https://www.futura.study/) & [PyMi](http://milano.python.it/)!`,frontmatter:{layout:"intro"},index:29,start:94,end:101,noteHTML:"",filepath:"/home/runner/work/pymi-polars/pymi-polars/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",component:Zw,meta:{layout:"end"}}],Ge=G2,so=[{name:"play",path:"/",component:w3,children:[...Ge]},{name:"print",path:"/print",component:Yw},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!no.remote||no.remote===t.query.password)return!0;if(no.remote&&t.query.password===void 0){const s=prompt("Enter password");if(no.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};so.push({path:"/presenter/print",component:()=>Pn(()=>import("./PresenterPrint-db8ecbea.js"),["assets/PresenterPrint-db8ecbea.js","assets/NoteDisplay-7c741933.js"])}),so.push({name:"notes",path:"/notes",component:()=>Pn(()=>import("./NotesView-a8387ca6.js"),["assets/NotesView-a8387ca6.js","assets/NoteDisplay-7c741933.js"]),beforeEnter:e}),so.push({name:"presenter",path:"/presenter/:no",component:()=>Pn(()=>import("./Presenter-24a1b85a.js"),["assets/Presenter-24a1b85a.js","assets/NoteDisplay-7c741933.js","assets/DrawingControls-56609ae3.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),so.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bt=J8({history:Z0("/pymi-polars"),routes:so});function Z2(e,t,{mode:s="replace"}={}){return S({get(){const o=bt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){nt(()=>{bt[x(s)]({query:{...bt.currentRoute.value.query,[e]:o}})})}})}const Pf=U(0);nt(()=>{bt.afterEach(async()=>{await nt(),Pf.value+=1})});const Tf=U(0),Lt=S(()=>bt.currentRoute.value),Ms=S(()=>Lt.value.query.print!==void 0),J2=S(()=>Lt.value.query.print==="clicks"),an=S(()=>Lt.value.query.embedded!==void 0),vt=S(()=>Lt.value.path.startsWith("/presenter")),X2=S(()=>Lt.value.path.startsWith("/notes")),fo=S(()=>Ms.value&&!J2.value),Ea=S(()=>Lt.value.query.password),eC=S(()=>!vt.value&&(!Ee.remote||Ea.value===Ee.remote)),Du=Z2("clicks","0"),If=S(()=>Ge.length-1),tC=S(()=>Lt.value.path),Ue=S(()=>parseInt(tC.value.split(/\//g).slice(-1)[0])||1);S(()=>lr(Ue.value));const ft=S(()=>Ge.find(e=>e.path===`${Ue.value}`));S(()=>{var e,t,s;return(s=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});S(()=>{var e,t;return((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ue.value===1?"cover":"default")});const Or=S(()=>Ge.find(e=>e.path===`${Math.min(Ge.length,Ue.value+1)}`)),nC=S(()=>Ge.find(e=>e.path===`${Math.max(1,Ue.value-1)}`)),sC=S(()=>{var e,t;return Pf.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Tt=S({get(){if(fo.value)return 99999;let e=+(Du.value||0);return isNaN(e)&&(e=0),e},set(e){Du.value=e.toString()}}),Ll=S(()=>{var e,t;return+(((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)??sC.value.length)}),oC=S(()=>Ue.value<Ge.length-1||Tt.value<Ll.value),lC=S(()=>Ue.value>1||Tt.value>0),rC=S(()=>Ge.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(wi(e,t),e),[])),aC=S(()=>Ai(rC.value,ft.value));S(()=>ki(aC.value));const iC=S(()=>fC(Tf.value,ft.value,nC.value));me(ft,(e,t)=>{Tf.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Tn(){Ll.value<=Tt.value?Fo():Tt.value+=1}async function In(){Tt.value<=0?await Po():Tt.value-=1}function lr(e){return vt.value?`/presenter/${e}`:`/${e}`}function Fo(){const e=Math.min(Ge.length,Ue.value+1);return Ls(e)}async function Po(e=!0){const t=Math.max(1,Ue.value-1);await Ls(t),e&&Ll.value&&bt.replace({query:{...Lt.value.query,clicks:Ll.value}})}function Ls(e,t){return bt.push({path:lr(e),query:{...Lt.value.query,clicks:t}})}function cC(e){const t=U(0),{direction:s,distanceX:o,distanceY:l}=m0(e,{onSwipeStart(r){r.pointerType==="touch"&&(So.value||(t.value=pa()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||So.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===pn.LEFT?Tn():In():(i/window.innerHeight>.4||i>200)&&(s.value===pn.DOWN?Po():Fo())}})}async function Ba(){const{saveAs:e}=await Pn(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(Ld(Ee.download)?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/pymi-polarsslidev-exported.pdf",`${Ee.title}.pdf`)}async function uC(e){var t,s;if(e==null){const o=(s=(t=ft.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function wi(e,t,s=1){var l,r,a,i,c;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&e.length>0?wi(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Ai(e,t,s=!1,o){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=Ai(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ki(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ki(s.children,t+1)}))}const pC={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function dC(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:pC[e.name]||e.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=t?l:o}if(s)return{...e,name:s}}function fC(e,t,s){var l,r;let o=e>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Ee.transition),dC(o,e<0)}function hC(){const e=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");ii({title:e}),Fv(Ee.htmlAttrs),Wv(`${e} - shared`),Yv(`${e} - drawings`);const t=`${location.origin}_${Rv()}`;function s(){X2.value||!vt.value&&!Lv.includes(location.host.split(":")[0])||(vt.value?(Us("page",+Ue.value),Us("clicks",Tt.value)):(Us("viewerPage",+Ue.value),Us("viewerClicks",Tt.value)),Us("lastUpdate",{id:t,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}bt.afterEach(s),me(Tt,s),zv(o=>{var r;bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ue.value||+Tt.value!=+o.clicks)&&bt.replace({path:lr(o.page),query:{...bt.currentRoute.value.query,clicks:o.clicks||0}})})}const mC=Be({__name:"App",setup(e){return Y(se),hC(),(t,s)=>{const o=Bl("RouterView"),l=Bl("StarportCarrier");return B(),Z($e,null,[I(o),I(l)],64)}}}),yC=oe(mC,[["__file","/home/runner/work/pymi-polars/pymi-polars/node_modules/@slidev/client/App.vue"]]);function Fr(e){return e!==null&&typeof e=="object"}function Da(e,t,s=".",o){if(!Fr(t))return Da(e,{},s,o);const l=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Fr(a)&&Fr(l[r])?l[r]=Da(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function gC(e){return(...t)=>t.reduce((s,o)=>Da(s,o,"",e),{})}const vC=gC(),Mf=1/60*1e3,_C=typeof performance<"u"?()=>performance.now():()=>Date.now(),Lf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(_C()),Mf);function bC(e){let t=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,p=!1,d=!1)=>{const f=d&&l,h=f?t:s;return p&&a.add(c),h.indexOf(c)===-1&&(h.push(c),f&&l&&(o=t.length)),c},cancel:c=>{const p=s.indexOf(c);p!==-1&&s.splice(p,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let p=0;p<o;p++){const d=t[p];d(c),a.has(d)&&(i.schedule(d),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const wC=40;let Sa=!0,To=!1,$a=!1;const Fs={delta:0,timestamp:0},Uo=["read","update","preRender","render","postRender"],rr=Uo.reduce((e,t)=>(e[t]=bC(()=>To=!0),e),{}),Oa=Uo.reduce((e,t)=>{const s=rr[t];return e[t]=(o,l=!1,r=!1)=>(To||xC(),s.schedule(o,l,r)),e},{}),AC=Uo.reduce((e,t)=>(e[t]=rr[t].cancel,e),{});Uo.reduce((e,t)=>(e[t]=()=>rr[t].process(Fs),e),{});const kC=e=>rr[e].process(Fs),Rf=e=>{To=!1,Fs.delta=Sa?Mf:Math.max(Math.min(e-Fs.timestamp,wC),1),Fs.timestamp=e,$a=!0,Uo.forEach(kC),$a=!1,To&&(Sa=!1,Lf(Rf))},xC=()=>{To=!0,Sa=!0,$a||Lf(Rf)},Nf=()=>Fs;function jf(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(s[o[l]]=e[o[l]]);return s}var xi=function(){},Io=function(){};xi=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Io=function(e,t){if(!e)throw new Error(t)};const Fa=(e,t,s)=>Math.min(Math.max(s,e),t),Pr=.001,CC=.01,Su=10,EC=.05,BC=1;function DC({duration:e=800,bounce:t=.25,velocity:s=0,mass:o=1}){let l,r;xi(e<=Su*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Fa(EC,BC,a),e=Fa(CC,Su,e/1e3),a<1?(l=p=>{const d=p*a,f=d*e,h=d-s,y=Pa(p,a),m=Math.exp(-f);return Pr-h/y*m},r=p=>{const f=p*a*e,h=f*s+s,y=Math.pow(a,2)*Math.pow(p,2)*e,m=Math.exp(-f),v=Pa(Math.pow(p,2),a);return(-l(p)+Pr>0?-1:1)*((h-y)*m)/v}):(l=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-Pr+d*f},r=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const i=5/e,c=$C(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(c,2)*o;return{stiffness:p,damping:a*2*Math.sqrt(o*p),duration:e}}}const SC=12;function $C(e,t,s){let o=s;for(let l=1;l<SC;l++)o=o-e(o)/t(o);return o}function Pa(e,t){return e*Math.sqrt(1-t*t)}const OC=["duration","bounce"],FC=["stiffness","damping","mass"];function $u(e,t){return t.some(s=>e[s]!==void 0)}function PC(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!$u(e,FC)&&$u(e,OC)){const s=DC(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Ci(e){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:l}=e,r=jf(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:p,velocity:d,duration:f,isResolvedFromDuration:h}=PC(r),y=Ou,m=Ou;function v(){const _=d?-(d/1e3):0,k=s-t,w=c/(2*Math.sqrt(i*p)),A=Math.sqrt(i/p)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),w<1){const C=Pa(A,w);y=O=>{const M=Math.exp(-w*A*O);return s-M*((_+w*A*k)/C*Math.sin(C*O)+k*Math.cos(C*O))},m=O=>{const M=Math.exp(-w*A*O);return w*A*M*(Math.sin(C*O)*(_+w*A*k)/C+k*Math.cos(C*O))-M*(Math.cos(C*O)*(_+w*A*k)-C*k*Math.sin(C*O))}}else if(w===1)y=C=>s-Math.exp(-A*C)*(k+(_+A*k)*C);else{const C=A*Math.sqrt(w*w-1);y=O=>{const M=Math.exp(-w*A*O),q=Math.min(C*O,300);return s-M*((_+w*A*k)*Math.sinh(q)+C*k*Math.cosh(q))/C}}}return v(),{next:_=>{const k=y(_);if(h)a.done=_>=f;else{const w=m(_)*1e3,A=Math.abs(w)<=o,C=Math.abs(s-k)<=l;a.done=A&&C}return a.value=a.done?s:k,a},flipTarget:()=>{d=-d,[t,s]=[s,t],v()}}}Ci.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Ou=e=>0,Vf=(e,t,s)=>{const o=t-e;return o===0?1:(s-e)/o},Ei=(e,t,s)=>-s*e+s*t+e,Hf=(e,t)=>s=>Math.max(Math.min(s,t),e),ho=e=>e%1?Number(e.toFixed(5)):e,Mo=/(-)?([\d]*\.?[\d])+/g,Ta=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,TC=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ko(e){return typeof e=="string"}const Yo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},mo=Object.assign(Object.assign({},Yo),{transform:Hf(0,1)}),al=Object.assign(Object.assign({},Yo),{default:1}),Bi=e=>({test:t=>Ko(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qn=Bi("deg"),yo=Bi("%"),he=Bi("px"),Fu=Object.assign(Object.assign({},yo),{parse:e=>yo.parse(e)/100,transform:e=>yo.transform(e*100)}),Di=(e,t)=>s=>Boolean(Ko(s)&&TC.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),qf=(e,t,s)=>o=>{if(!Ko(o))return o;const[l,r,a,i]=o.match(Mo);return{[e]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Xn={test:Di("hsl","hue"),parse:qf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+yo.transform(ho(t))+", "+yo.transform(ho(s))+", "+ho(mo.transform(o))+")"},IC=Hf(0,255),Tr=Object.assign(Object.assign({},Yo),{transform:e=>Math.round(IC(e))}),Dn={test:Di("rgb","red"),parse:qf("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:o=1})=>"rgba("+Tr.transform(e)+", "+Tr.transform(t)+", "+Tr.transform(s)+", "+ho(mo.transform(o))+")"};function MC(e){let t="",s="",o="",l="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),t+=t,s+=s,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ia={test:Di("#"),parse:MC,transform:Dn.transform},gt={test:e=>Dn.test(e)||Ia.test(e)||Xn.test(e),parse:e=>Dn.test(e)?Dn.parse(e):Xn.test(e)?Xn.parse(e):Ia.parse(e),transform:e=>Ko(e)?e:e.hasOwnProperty("red")?Dn.transform(e):Xn.transform(e)},Wf="${c}",zf="${n}";function LC(e){var t,s,o,l;return isNaN(e)&&Ko(e)&&((s=(t=e.match(Mo))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(o=e.match(Ta))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Uf(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const o=e.match(Ta);o&&(s=o.length,e=e.replace(Ta,Wf),t.push(...o.map(gt.parse)));const l=e.match(Mo);return l&&(e=e.replace(Mo,zf),t.push(...l.map(Yo.parse))),{values:t,numColors:s,tokenised:e}}function Kf(e){return Uf(e).values}function Yf(e){const{values:t,numColors:s,tokenised:o}=Uf(e),l=t.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?Wf:zf,i<s?gt.transform(r[i]):ho(r[i]));return a}}const RC=e=>typeof e=="number"?0:e;function NC(e){const t=Kf(e);return Yf(e)(t.map(RC))}const Qo={test:LC,parse:Kf,createTransformer:Yf,getAnimatableNone:NC},jC=new Set(["brightness","contrast","saturate","opacity"]);function VC(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=s.match(Mo)||[];if(!o)return e;const l=s.replace(o,"");let r=jC.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+l+")"}const HC=/([a-z-]*)\(.*?\)/g,Ma=Object.assign(Object.assign({},Qo),{getAnimatableNone:e=>{const t=e.match(HC);return t?t.map(VC).join(" "):e}});function Ir(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function Pu({hue:e,saturation:t,lightness:s,alpha:o}){e/=360,t/=100,s/=100;let l=0,r=0,a=0;if(!t)l=r=a=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;l=Ir(c,i,e+1/3),r=Ir(c,i,e),a=Ir(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const qC=(e,t,s)=>{const o=e*e,l=t*t;return Math.sqrt(Math.max(0,s*(l-o)+o))},WC=[Ia,Dn,Xn],Tu=e=>WC.find(t=>t.test(e)),Iu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Qf=(e,t)=>{let s=Tu(e),o=Tu(t);Io(!!s,Iu(e)),Io(!!o,Iu(t));let l=s.parse(e),r=o.parse(t);s===Xn&&(l=Pu(l),s=Dn),o===Xn&&(r=Pu(r),o=Dn);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=qC(l[c],r[c],i));return a.alpha=Ei(l.alpha,r.alpha,i),s.transform(a)}},zC=e=>typeof e=="number",UC=(e,t)=>s=>t(e(s)),Gf=(...e)=>e.reduce(UC);function Zf(e,t){return zC(e)?s=>Ei(e,t,s):gt.test(e)?Qf(e,t):Xf(e,t)}const Jf=(e,t)=>{const s=[...e],o=s.length,l=e.map((r,a)=>Zf(r,t[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},KC=(e,t)=>{const s=Object.assign(Object.assign({},e),t),o={};for(const l in s)e[l]!==void 0&&t[l]!==void 0&&(o[l]=Zf(e[l],t[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function Mu(e){const t=Qo.parse(e),s=t.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const Xf=(e,t)=>{const s=Qo.createTransformer(t),o=Mu(e),l=Mu(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Gf(Jf(o.parsed,l.parsed),s):(xi(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},YC=(e,t)=>s=>Ei(e,t,s);function QC(e){if(typeof e=="number")return YC;if(typeof e=="string")return gt.test(e)?Qf:Xf;if(Array.isArray(e))return Jf;if(typeof e=="object")return KC}function GC(e,t,s){const o=[],l=s||QC(e[0]),r=e.length-1;for(let a=0;a<r;a++){let i=l(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=Gf(c,i)}o.push(i)}return o}function ZC([e,t],[s]){return o=>s(Vf(e,t,o))}function JC(e,t){const s=e.length,o=s-1;return l=>{let r=0,a=!1;if(l<=e[0]?a=!0:l>=e[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>l||c===o);c++);r=c-1}const i=Vf(e[r],e[r+1],l);return t[r](i)}}function eh(e,t,{clamp:s=!0,ease:o,mixer:l}={}){const r=e.length;Io(r===t.length,"Both input and output ranges must be the same length"),Io(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=GC(t,o,l),i=r===2?ZC(e,a):JC(e,a);return s?c=>i(Fa(e[0],e[r-1],c)):i}const ar=e=>t=>1-e(1-t),Si=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,XC=e=>t=>Math.pow(t,e),th=e=>t=>t*t*((e+1)*t-e),eE=e=>{const t=th(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},nh=1.525,tE=4/11,nE=8/11,sE=9/10,sh=e=>e,$i=XC(2),oE=ar($i),oh=Si($i),lh=e=>1-Math.sin(Math.acos(e)),rh=ar(lh),lE=Si(rh),Oi=th(nh),rE=ar(Oi),aE=Si(Oi),iE=eE(nh),cE=4356/361,uE=35442/1805,pE=16061/1805,Rl=e=>{if(e===1||e===0)return e;const t=e*e;return e<tE?7.5625*t:e<nE?9.075*t-9.9*e+3.4:e<sE?cE*t-uE*e+pE:10.8*e*e-20.52*e+10.72},dE=ar(Rl),fE=e=>e<.5?.5*(1-Rl(1-e*2)):.5*Rl(e*2-1)+.5;function hE(e,t){return e.map(()=>t||oh).splice(0,e.length-1)}function mE(e){const t=e.length;return e.map((s,o)=>o!==0?o/(t-1):0)}function yE(e,t){return e.map(s=>s*t)}function gl({from:e=0,to:t=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=yE(o&&o.length===a.length?o:mE(a),l);function c(){return eh(i,a,{ease:Array.isArray(s)?s:hE(a,s)})}let p=c();return{next:d=>(r.value=p(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),p=c()}}}function gE({velocity:e=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let i=s*e;const c=t+i,p=r===void 0?c:r(c);return p!==c&&(i=p-t),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?p:p+f,a},flipTarget:()=>{}}}const Lu={keyframes:gl,spring:Ci,decay:gE};function vE(e){if(Array.isArray(e.to))return gl;if(Lu[e.type])return Lu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?gl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Ci:gl}function ah(e,t,s=0){return e-t-s}function _E(e,t,s=0,o=!0){return o?ah(t+-e,t,s):t-(e-t)+s}function bE(e,t,s,o){return o?e>=t+s:e<=-s}const wE=e=>{const t=({delta:s})=>e(s);return{start:()=>Oa.update(t,!0),stop:()=>AC.update(t)}};function ih(e){var t,s,{from:o,autoplay:l=!0,driver:r=wE,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:h,onRepeat:y,onUpdate:m}=e,v=jf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=v,k,w=0,A=v.duration,C,O=!1,M=!0,q;const $=vE(v);!((s=(t=$).needsInterpolation)===null||s===void 0)&&s.call(t,o,_)&&(q=eh([0,100],[o,_],{clamp:!1}),o=0,_=100);const V=$(Object.assign(Object.assign({},v),{from:o,to:_}));function J(){w++,c==="reverse"?(M=w%2===0,a=_E(a,A,p,M)):(a=ah(a,A,p),c==="mirror"&&V.flipTarget()),O=!1,y&&y()}function ie(){k.stop(),h&&h()}function K(Se){if(M||(Se=-Se),a+=Se,!O){const xe=V.next(Math.max(0,a));C=xe.value,q&&(C=q(C)),O=M?xe.done:a<=0}m==null||m(C),O&&(w===0&&(A??(A=a)),w<i?bE(a,A,p,M)&&J():ie())}function ve(){d==null||d(),k=r(K),k.start()}return l&&ve(),{stop:()=>{f==null||f(),k.stop()}}}function ch(e,t){return t?e*(1e3/t):0}function AE({from:e=0,velocity:t=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:h,onStop:y}){let m;function v(A){return s!==void 0&&A<s||o!==void 0&&A>o}function _(A){return s===void 0?o:o===void 0||Math.abs(s-A)<Math.abs(o-A)?s:o}function k(A){m==null||m.stop(),m=ih(Object.assign(Object.assign({},A),{driver:d,onUpdate:C=>{var O;f==null||f(C),(O=A.onUpdate)===null||O===void 0||O.call(A,C)},onComplete:h,onStop:y}))}function w(A){k(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},A))}if(v(e))w({from:e,velocity:t,to:_(e)});else{let A=l*t+e;typeof p<"u"&&(A=p(A));const C=_(A),O=C===s?-1:1;let M,q;const $=V=>{M=q,q=V,t=ch(V-M,Nf().delta),(O===1&&V>C||O===-1&&V<C)&&w({from:V,to:C,velocity:t})};k({type:"decay",from:e,velocity:t,timeConstant:r,power:l,restDelta:c,modifyTarget:p,onUpdate:v(A)?$:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const uh=(e,t)=>1-3*t+3*e,ph=(e,t)=>3*t-6*e,dh=e=>3*e,Nl=(e,t,s)=>((uh(t,s)*e+ph(t,s))*e+dh(t))*e,fh=(e,t,s)=>3*uh(t,s)*e*e+2*ph(t,s)*e+dh(t),kE=1e-7,xE=10;function CE(e,t,s,o,l){let r,a,i=0;do a=t+(s-t)/2,r=Nl(a,o,l)-e,r>0?s=a:t=a;while(Math.abs(r)>kE&&++i<xE);return a}const EE=8,BE=.001;function DE(e,t,s,o){for(let l=0;l<EE;++l){const r=fh(t,s,o);if(r===0)return t;const a=Nl(t,s,o)-e;t-=a/r}return t}const vl=11,il=1/(vl-1);function SE(e,t,s,o){if(e===t&&s===o)return sh;const l=new Float32Array(vl);for(let a=0;a<vl;++a)l[a]=Nl(a*il,e,s);function r(a){let i=0,c=1;const p=vl-1;for(;c!==p&&l[c]<=a;++c)i+=il;--c;const d=(a-l[c])/(l[c+1]-l[c]),f=i+d*il,h=fh(f,e,s);return h>=BE?DE(a,f,e,s):h===0?f:CE(a,i,i+il,e,s)}return a=>a===0||a===1?a:Nl(r(a),t,o)}const Mr={};class $E{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,s,o)}clear(){this.subscriptions.clear()}}const Ru=e=>!isNaN(parseFloat(e));class OE{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new $E,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=Nf();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Oa.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Oa.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Ru(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ru(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ch(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function FE(e){return new OE(e)}const{isArray:PE}=Array;function TE(){const e=U({}),t=o=>{const l=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};o?PE(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},s=(o,l,r)=>{if(e.value[o])return e.value[o];const a=FE(l);return a.onChange(i=>r[o]=i),e.value[o]=a,a};return y_(t),{motionValues:e,get:s,stop:t}}const IE=e=>Array.isArray(e),Wn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Lr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),ME=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Rr=()=>({type:"keyframes",ease:"linear",duration:300}),LE=e=>({type:"keyframes",duration:800,values:e}),Nu={default:ME,x:Wn,y:Wn,z:Wn,rotate:Wn,rotateX:Wn,rotateY:Wn,rotateZ:Wn,scaleX:Lr,scaleY:Lr,scale:Lr,backgroundColor:Rr,color:Rr,opacity:Rr},hh=(e,t)=>{let s;return IE(t)?s=LE:s=Nu[e]||Nu.default,{to:t,...s(t)}},ju={...Yo,transform:Math.round},mh={color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,size:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:qn,skewX:qn,skewY:qn,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:mo,originX:Fu,originY:Fu,originZ:he,zIndex:ju,filter:Ma,WebkitFilter:Ma,fillOpacity:mo,strokeOpacity:mo,numOctaves:ju},Fi=e=>mh[e],yh=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function RE(e,t){let s=Fi(e);return s!==Ma&&(s=Qo),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const NE={linear:sh,easeIn:$i,easeInOut:oh,easeOut:oE,circIn:lh,circInOut:lE,circOut:rh,backIn:Oi,backInOut:aE,backOut:rE,anticipate:iE,bounceIn:dE,bounceInOut:fE,bounceOut:Rl},Vu=e=>{if(Array.isArray(e)){const[t,s,o,l]=e;return SE(t,s,o,l)}else if(typeof e=="string")return NE[e];return e},jE=e=>Array.isArray(e)&&typeof e[0]!="number",Hu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Qo.test(t)&&!t.startsWith("url("));function VE(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function HE({ease:e,times:t,delay:s,...o}){const l={...o};return t&&(l.offset=t),e&&(l.ease=jE(e)?e.map(Vu):Vu(e)),s&&(l.elapsed=-s),l}function qE(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),VE(t),WE(e)||(e={...e,...hh(s,t.to)}),{...t,...HE(e)}}function WE({delay:e,repeat:t,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function zE(e,t){return e[t]||e.default||e}function UE(e,t,s,o,l){const r=zE(o,e);let a=r.from===null||r.from===void 0?t.get():r.from;const i=Hu(e,s);a==="none"&&i&&typeof s=="string"&&(a=RE(e,s));const c=Hu(e,a);function p(f){const h={from:a,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:y=>t.set(y)};return r.type==="inertia"||r.type==="decay"?AE({...h,...r}):ih({...qE(r,h,e),onUpdate:y=>{h.onUpdate(y),r.onUpdate&&r.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return t.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?d:p}function KE(){const{motionValues:e,stop:t,get:s}=TE();return{motionValues:e,stop:t,push:(l,r,a,i={},c)=>{const p=a[l],d=s(l,p,a);if(i&&i.immediate){d.set(r);return}const f=UE(l,d,r,i,c);d.start(f)}}}function YE(e,t={},{motionValues:s,push:o,stop:l}=KE()){const r=x(t),a=U(!1);me(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([h,y])=>{if(h!=="transition")return new Promise(m=>o(h,y,e,f.transition||hh(h,f[h]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const h=ua(f)?f:i(f);Object.entries(h).forEach(([y,m])=>{y!=="transition"&&o(y,m,e,{immediate:!0})})},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await c(h),f()},stop:l}}const Pi=typeof window<"u",QE=()=>Pi&&window.onpointerdown===null,GE=()=>Pi&&window.ontouchstart===null,ZE=()=>Pi&&window.onmousedown===null;function JE({target:e,state:t,variants:s,apply:o}){const l=x(s),r=U(!1),a=U(!1),i=U(!1),c=S(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),p=S(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});l.hovered&&(ye(e,"mouseenter",()=>r.value=!0),ye(e,"mouseleave",()=>{r.value=!1,a.value=!1}),ye(e,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(ZE()&&(ye(e,"mousedown",()=>a.value=!0),ye(e,"mouseup",()=>a.value=!1)),QE()&&(ye(e,"pointerdown",()=>a.value=!0),ye(e,"pointerup",()=>a.value=!1)),GE()&&(ye(e,"touchstart",()=>a.value=!0),ye(e,"touchend",()=>a.value=!1))),l.focused&&(ye(e,"focus",()=>i.value=!0),ye(e,"blur",()=>i.value=!1)),me(p,o)}function XE({set:e,target:t,apply:s,variants:o,variant:l}){const r=x(o);me(()=>t,()=>{r&&(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function e4({state:e,apply:t}){me(e,s=>{s&&t(s)},{immediate:!0})}function t4({target:e,variants:t,variant:s}){const o=x(t);o&&(o.visible||o.visibleOnce)&&d0(e,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function n4(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&XE(e),t.syncVariants&&e4(e),t.visibilityHooks&&t4(e),t.eventListeners&&JE(e)}function gh(e={}){const t=He({...e}),s=U({});return me(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=Fi(l),i=yh(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function Ti(e,t){me(()=>Bt(e),s=>{s&&t(s)},{immediate:!0})}const s4={x:"translateX",y:"translateY",z:"translateZ"};function vh(e={},t=!0){const s=He({...e}),o=U("");return me(s,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(he.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const p=Fi(i),d=yh(c,p);r+=`${s4[i]||i}(${d}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const o4=["","X","Y","Z"],l4=["perspective","translate","scale","rotate","skew"],_h=["transformPerspective","x","y","z"];l4.forEach(e=>{o4.forEach(t=>{const s=e+t;_h.push(s)})});const r4=new Set(_h);function Ii(e){return r4.has(e)}const a4=new Set(["originX","originY","originZ"]);function bh(e){return a4.has(e)}function i4(e){const t={},s={};return Object.entries(e).forEach(([o,l])=>{Ii(o)||bh(o)?t[o]=l:s[o]=l}),{transform:t,style:s}}function wh(e){const{transform:t,style:s}=i4(e),{transform:o}=vh(t),{style:l}=gh(s);return o.value&&(l.value.transform=o.value),l.value}function c4(e,t){let s,o;const{state:l,style:r}=gh();return Ti(e,a=>{o=a;for(const i of Object.keys(mh))a.style[i]===null||a.style[i]===""||Ii(i)||bh(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),t&&t(l)}),me(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function u4(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=c.length===1?c[0]:c;return{...o,[r]:p}},{})}function p4(e,t){Object.entries(u4(t)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>e[r]=0);return}o.forEach((r,a)=>e[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function d4(e,t){let s,o;const{state:l,transform:r}=vh();return Ti(e,a=>{o=a,a.style.transform&&p4(l,a.style.transform),s&&(a.style.transform=s),t&&t(l)}),me(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function f4(e,t){const s=He({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=c4(e,o),{transform:r}=d4(e,o);return me(s,a=>{Object.entries(a).forEach(([i,c])=>{const p=Ii(i)?r:l;p[i]&&p[i]===c||(p[i]=c)})},{immediate:!0,deep:!0}),Ti(e,()=>t&&o(t)),{motionProperties:s,style:l,transform:r}}function h4(e={}){const t=x(e),s=U();return{state:S(()=>{if(s.value)return t[s.value]}),variant:s}}function Ah(e,t={},s){const{motionProperties:o}=f4(e),{variant:l,state:r}=h4(t),a=YE(o,t),i={target:e,variant:l,variants:t,state:r,motionProperties:o,...a};return n4(i,s),i}const m4=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],y4=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&ua(s.variants)&&(t.value={...t.value,...s.variants}),m4.forEach(o=>{if(o==="delay"){if(s&&s[o]&&e_(s[o])){const l=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&ua(s[o])&&(t.value[o]=s[o])}))},Nr=e=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Mr[r]&&Mr[r].stop();const a=U(e||{});typeof o.value=="object"&&(a.value=o.value),y4(l,a);const i=Ah(s,a);s.motionInstance=i,r&&(Mr[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=x(l);const r=vC((e==null?void 0:e.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:wh(r)}}}),g4={initial:{opacity:0},enter:{opacity:1}},v4={initial:{opacity:0},visible:{opacity:1}},_4={initial:{opacity:0},visibleOnce:{opacity:1}},b4={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},w4={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},A4={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},k4={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},x4={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},C4={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},E4={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},B4={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},D4={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},S4={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},$4={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},O4={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},F4={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},P4={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},T4={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},I4={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},M4={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},L4={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},R4={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},N4={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},j4={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},V4={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},H4={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},q4={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},W4={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},z4={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},U4={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},La={__proto__:null,fade:g4,fadeVisible:v4,fadeVisibleOnce:_4,pop:b4,popVisible:w4,popVisibleOnce:A4,rollBottom:F4,rollLeft:k4,rollRight:E4,rollTop:S4,rollVisibleBottom:P4,rollVisibleLeft:x4,rollVisibleOnceBottom:T4,rollVisibleOnceLeft:C4,rollVisibleOnceRight:D4,rollVisibleOnceTop:O4,rollVisibleRight:B4,rollVisibleTop:$4,slideBottom:W4,slideLeft:I4,slideRight:R4,slideTop:V4,slideVisibleBottom:z4,slideVisibleLeft:M4,slideVisibleOnceBottom:U4,slideVisibleOnceLeft:L4,slideVisibleOnceRight:j4,slideVisibleOnceTop:q4,slideVisibleRight:N4,slideVisibleTop:H4},K4=Be({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=og(),s=He({});if(!e.is&&!t.default)return()=>at("div",{});const o=S(()=>{let c;return e.preset&&(c=La[e.preset]),c}),l=S(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=S(()=>{const c={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=S(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!sp(c)&&(c=Bl(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,h,y;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(h=p.variants)!=null&&h.visible&&p.apply("visible"),(y=p.variants)!=null&&y.visibleOnce&&p.apply("visibleOnce")},10)};Jl(()=>Object.entries(s).forEach(([p,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:s}},render({slots:e,motionConfig:t,instances:s,component:o}){var i;const l=wh(t.initial||{}),r=(c,p)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const f=Ah(d,t);s[p]=f},c);if(o){const c=at(o,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,p)=>r(c,p))}});function Y4(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Q4={install(e,t){if(e.directive("motion",Nr()),e.component("Motion",K4),!t||t&&!t.excludePresets)for(const s in La){const o=La[s];e.directive(`motion-${Y4(s)}`,Nr(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,e.directive(`motion-${s}`,Nr(o))}}};var qu;const go=typeof window<"u",G4=Object.prototype.toString,Z4=e=>G4.call(e)==="[object Object]";go&&((qu=window==null?void 0:window.navigator)!=null&&qu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function J4(e){return qa()?(dp(e),!0):!1}function X4(e){var t;const s=x(e);return(t=s==null?void 0:s.$el)!=null?t:s}const eB=go?window:void 0,Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zu="__vueuse_ssr_handlers__";Wu[zu]=Wu[zu]||{};function tB(e,t={}){const{immediate:s=!0,window:o=eB}=t,l=U(!1);let r=null;function a(){!l.value||!o||(e(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),J4(c),{isActive:l,pause:c,resume:i}}var Uu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Uu||(Uu={}));const ir="vue-starport-injection",kh="vue-starport-options",nB={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},xh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var sB=Object.defineProperty,jl=Object.getOwnPropertySymbols,Ch=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Ku=(e,t,s)=>t in e?sB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,oB=(e,t)=>{for(var s in t||(t={}))Ch.call(t,s)&&Ku(e,s,t[s]);if(jl)for(var s of jl(t))Eh.call(t,s)&&Ku(e,s,t[s]);return e},Yu=(e,t)=>{var s={};for(var o in e)Ch.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&jl)for(var o of jl(e))t.indexOf(o)<0&&Eh.call(e,o)&&(s[o]=e[o]);return s};const lB=Be({name:"StarportProxy",props:oB({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},xh),setup(e,t){const s=Y(ir),o=S(()=>s.getInstance(e.port,e.component)),l=U(),r=o.value.generateId(),a=U(!1);return o.value.isVisible||(o.value.land(),a.value=!0),fs(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await nt(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Vo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await nt(),await nt(),!o.value.el&&s.dispose(o.value.port))}),me(()=>e,async()=>{o.value.props&&await nt();const i=e,{props:c}=i,p=Yu(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:p}=i,d=Yu(i,["initialProps","mountedProps"]),f=Ke(d,(a.value?p:c)||{});return at("div",Ke(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?at(t.slots.default):void 0)}}});var rB=Object.defineProperty,aB=Object.defineProperties,iB=Object.getOwnPropertyDescriptors,Qu=Object.getOwnPropertySymbols,cB=Object.prototype.hasOwnProperty,uB=Object.prototype.propertyIsEnumerable,Gu=(e,t,s)=>t in e?rB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,pB=(e,t)=>{for(var s in t||(t={}))cB.call(t,s)&&Gu(e,s,t[s]);if(Qu)for(var s of Qu(t))uB.call(t,s)&&Gu(e,s,t[s]);return e},dB=(e,t)=>aB(e,iB(t));const fB=Be({name:"Starport",inheritAttrs:!0,props:xh,setup(e,t){const s=U(!1);return fs(()=>{if(s.value=!0,!Y(ir))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!Z4(r)||mn(r))&&(r={render(){return o}}),at(lB,dB(pB({},e),{key:e.port,component:Ul(r),props:l.props}))}}});function hB(e){const t=He({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=go?document.documentElement||document.body:void 0;function o(){if(!go)return;const i=X4(e);if(!i)return;const{height:c,width:p,left:d,top:f}=i.getBoundingClientRect(),h=window.getComputedStyle(i),y=h.margin,m=h.padding;Object.assign(t,{height:c,width:p,left:d,top:s.scrollTop+f,margin:y,padding:m})}const l=tB(o,{immediate:!1});function r(){go&&(o(),l.resume())}function a(){l.pause()}return t}let mB=(e,t=21)=>(s=t)=>{let o="",l=s;for(;l--;)o+=e[Math.random()*e.length|0];return o};const Zu=mB("abcdefghijklmnopqrstuvwxyz",5);function Ju(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function yB(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var gB=Object.defineProperty,Xu=Object.getOwnPropertySymbols,vB=Object.prototype.hasOwnProperty,_B=Object.prototype.propertyIsEnumerable,ep=(e,t,s)=>t in e?gB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,jr=(e,t)=>{for(var s in t||(t={}))vB.call(t,s)&&ep(e,s,t[s]);if(Xu)for(var s of Xu(t))_B.call(t,s)&&ep(e,s,t[s]);return e};function bB(e,t,s={}){const o=yB(t),l=Ju(o)||Zu(),r=U(),a=U(null),i=U(!1),c=U(!1),p=qh(!0),d=U({}),f=S(()=>jr(jr(jr({},nB),s),d.value)),h=U(0);let y;p.run(()=>{y=hB(r),me(r,async k=>{k&&(c.value=!0),await nt(),r.value||(c.value=!1)})});const m=Ju(e);function v(){return`starport-${l}-${m}-${Zu()}`}const _=v();return He({el:r,id:_,port:e,props:a,rect:y,scope:p,isLanded:i,isVisible:c,options:f,liftOffTime:h,component:t,componentName:o,componentId:l,generateId:v,setLocalOptions(k={}){d.value=JSON.parse(JSON.stringify(k))},elRef(){return r},liftOff(){i.value&&(i.value=!1,h.value=Date.now(),y.listen())},land(){i.value||(i.value=!0,y.pause())}})}function wB(e){const t=He(new Map);function s(l,r){let a=t.get(l);return a||(a=bB(l,r,e),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:s}}var AB=Object.defineProperty,kB=Object.defineProperties,xB=Object.getOwnPropertyDescriptors,tp=Object.getOwnPropertySymbols,CB=Object.prototype.hasOwnProperty,EB=Object.prototype.propertyIsEnumerable,np=(e,t,s)=>t in e?AB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,BB=(e,t)=>{for(var s in t||(t={}))CB.call(t,s)&&np(e,s,t[s]);if(tp)for(var s of tp(t))EB.call(t,s)&&np(e,s,t[s]);return e},DB=(e,t)=>kB(e,xB(t));const SB=Be({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=Y(ir);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=S(()=>t.getInstance(e.port,e.component)),o=S(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=S(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?DB(BB({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return at("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},at(Wy,{to:a?`#${o.value}`:"body",disabled:!a},at(s.value.component,Ke(r,s.value.props))))}}}),$B=Be({name:"StarportCarrier",setup(e,{slots:t}){const s=wB(Y(kh,{}));return $t().appContext.app.provide(ir,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:a}])=>at(SB,{key:r,port:r,component:a}))]}}});function OB(e={}){return{install(t){t.provide(kh,e),t.component("Starport",fB),t.component("StarportCarrier",$B)}}}function FB(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(Q4),e.app.use(OB({keepAlive:!0}))}function kt(e,t,s){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??s}function PB(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var d,f,h,y;if(fo.value||(d=kt(s,io))!=null&&d.value)return;const o=kt(s,Qn),l=kt(s,ao),r=kt(s,ia),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,p=i?Mv:Ar;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(t))&&o.value.push(t),s.value==null&&(s.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((y=r==null?void 0:r.value.get(s.value))!=null&&y.includes(t))){const m=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(m))}t==null||t.classList.toggle(Kn,!0),l&&me(l,()=>{const m=(l==null?void 0:l.value)??0,v=s.value!=null?m>=s.value:m>c;t.classList.contains(kr)||t.classList.toggle(p,!v),a!==!1&&a!==void 0&&t.classList.toggle(p,v),t.classList.toggle(zs,!1);const _=r==null?void 0:r.value.get(m);_==null||_.forEach((k,w)=>{k.classList.toggle(ol,!1),w===_.length-1?k.classList.toggle(zs,!0):k.classList.toggle(ol,!0)}),t.classList.contains(zs)||t.classList.toggle(ol,v)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(Kn,!1);const o=kt(s,Qn);o!=null&&o.value&&ca(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var i,c;if(fo.value||(i=kt(s,io))!=null&&i.value)return;const o=kt(s,Qn),l=kt(s,ao),r=kt(s,ia),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(Kn,!0),l&&me(l,()=>{const p=(l.value??0)>=(s.value??a??0);t.classList.contains(kr)||t.classList.toggle(Ar,!p),t.classList.toggle(zs,!1),t.classList.contains(zs)||t.classList.toggle(ol,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Kn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var a,i,c;if(fo.value||(a=kt(s,io))!=null&&a.value)return;const o=kt(s,Qn),l=kt(s,ao),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Kn,!0),l&&me(l,()=>{const p=(l==null?void 0:l.value)??0,d=s.value!=null?p>=s.value:p>r;t.classList.toggle(Ar,d),t.classList.toggle(kr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(Kn,!1);const o=kt(s,Qn);o!=null&&o.value&&ca(o.value,t)}})}}}function TB(e,t){const s=$f(e),o=Of(t,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:Ba,next:Tn,nextSlide:Fo,openInEditor:uC,prev:In,prevSlide:Po},configs:Ee,themeConfigs:S(()=>Ee.themeConfig)}}function IB(){return{install(e){const t=TB(Lt,Tt);e.provide(se,He(t))}}}const Ns=Vg(yC);Ns.use(bt);Ns.use(Pv());Ns.use(PB());Ns.use(IB());FB({app:Ns,router:bt});Ns.mount("#app");export{v3 as $,M5 as A,U as B,VB as C,ft as D,qe as E,$e as F,z1 as G,cC as H,Tt as I,Ll as J,oC as K,Or as L,fs as M,He as N,NB as O,HB as P,me as Q,N as R,_f as S,De as T,dt as U,ob as V,MB as W,LB as X,So as Y,Sr as Z,oe as _,se as a,gi as a0,vi as a1,f3 as a2,Ue as a3,yb as a4,RB as a5,Mt as a6,Js as a7,rl as a8,Jn as a9,Xt as aa,ka as ab,F1 as ac,P1 as ad,T1 as ae,M1 as af,Ho as ag,Ad as ah,qB as ai,mt as aj,Zb as ak,Pd as al,L1 as am,Vo as an,ii as b,Ee as c,Be as d,Bm as e,Z as f,n as g,x as h,Y as i,Ge as j,If as k,u as l,I as m,st as n,B as o,be as p,ui as q,qo as r,Ut as s,as as t,jB as u,S as v,xr as w,te as x,pf as y,V5 as z};
