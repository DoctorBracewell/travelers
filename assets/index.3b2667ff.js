var pe=Object.defineProperty;var ge=(l,e,t)=>e in l?pe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var Q=(l,e,t)=>(ge(l,typeof e!="symbol"?e+"":e,t),t);import{w as ee,S as M,i as S,s as V,e as h,a as m,b as x,l as H,n as w,d as y,c as I,f as N,m as T,t as k,g as $,h as C,j as O,k as U,o as j,p as d,q as R,r as te,u as q,v as ne,x as he,y as _e,z as re,A as le,B as se,C as ke,D as $e,E as we,F as ae,G as ve,H as be}from"./vendor.0af4f602.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};ye();const ie=ee(!1);function xe(l){let e,t,n;return{c(){e=h("div"),e.innerHTML='<p class="text-5xl md:text-9xl m-auto cursor-pointer">Click To Start</p>',m(e,"class","flex h-screen w-full")},m(r,s){x(r,e,s),t||(n=H(e,"click",l[0]),t=!0)},p:w,i:w,o:w,d(r){r&&y(e),t=!1,n()}}}function Ne(l){return[()=>ie.set(!0)]}class Te extends M{constructor(e){super();S(this,e,Ne,xe,V,{})}}const Ce=l=>{const e=new FileReader;return e.readAsDataURL(l),new Promise((t,n)=>{e.addEventListener("loadend",()=>t(e.result)),e.addEventListener("error",()=>n("Unable to read sound files!"))})},ce=async l=>new Promise(e=>setTimeout(e,l)),W=async(l,e)=>await Promise.all(l.map(async t=>e(t)));function Le(l){let e,t;return{c(){e=h("img"),m(e,"alt",l[0]),I(e.src,t=`img/icons/${l[0]}.png`)||m(e,"src",t),m(e,"class","control-button cursor-pointer h-9")},m(n,r){x(n,e,r)},p(n,[r]){r&1&&m(e,"alt",n[0]),r&1&&!I(e.src,t=`img/icons/${n[0]}.png`)&&m(e,"src",t)},i:w,o:w,d(n){n&&y(e)}}}function Pe(l,e,t){let{iconName:n}=e;return l.$$set=r=>{"iconName"in r&&t(0,n=r.iconName)},[n]}class X extends M{constructor(e){super();S(this,e,Pe,Le,V,{iconName:0})}}function Me(l){let e,t,n,r,s;return t=new X({props:{iconName:l[0]?"unmute":"mute"}}),{c(){e=h("div"),N(t.$$.fragment)},m(a,c){x(a,e,c),T(t,e,null),n=!0,r||(s=H(e,"click",l[1]),r=!0)},p(a,[c]){const i={};c&1&&(i.iconName=a[0]?"unmute":"mute"),t.$set(i)},i(a){n||(k(t.$$.fragment,a),n=!0)},o(a){$(t.$$.fragment,a),n=!1},d(a){a&&y(e),C(t),r=!1,s()}}}function Se(l,e,t){let{tracks:n}=e,r=!1,s;const a=async()=>{r||(r=!0,await W(n,async c=>await c.toggle({muting:!s})),r=!1,t(2,n))};return l.$$set=c=>{"tracks"in c&&t(2,n=c.tracks)},l.$$.update=()=>{l.$$.dirty&4&&t(0,s=n.every(c=>c.muted))},[s,a,n]}class Ve extends M{constructor(e){super();S(this,e,Se,Me,V,{tracks:2})}}function je(l){let e,t,n,r,s;return t=new X({props:{iconName:l[0].every(oe)?"pause":"play"}}),{c(){e=h("div"),N(t.$$.fragment)},m(a,c){x(a,e,c),T(t,e,null),n=!0,r||(s=H(e,"click",l[1]),r=!0)},p(a,[c]){const i={};c&1&&(i.iconName=a[0].every(oe)?"pause":"play"),t.$set(i)},i(a){n||(k(t.$$.fragment,a),n=!0)},o(a){$(t.$$.fragment,a),n=!1},d(a){a&&y(e),C(t),r=!1,s()}}}const oe=l=>l.playing;function Fe(l,e,t){let{tracks:n}=e;const r=()=>{W(n,s=>s.togglePlaying()),t(0,n)};return l.$$set=s=>{"tracks"in s&&t(0,n=s.tracks)},[n,r]}class Ee extends M{constructor(e){super();S(this,e,Fe,je,V,{tracks:0})}}function Be(l){let e,t,n,r,s;return t=new X({props:{iconName:"shuffle"}}),{c(){e=h("div"),N(t.$$.fragment)},m(a,c){x(a,e,c),T(t,e,null),n=!0,r||(s=H(e,"click",l[0]),r=!0)},p:w,i(a){n||(k(t.$$.fragment,a),n=!0)},o(a){$(t.$$.fragment,a),n=!1},d(a){a&&y(e),C(t),r=!1,s()}}}function De(l,e,t){let{tracks:n}=e;const r=()=>W(n,s=>s.toggle({random:!0}));return l.$$set=s=>{"tracks"in s&&t(1,n=s.tracks)},[r,n]}class Ae extends M{constructor(e){super();S(this,e,De,Be,V,{tracks:1})}}function qe(l){let e,t,n,r,s;return t=new X({props:{iconName:"switch"}}),{c(){e=h("div"),N(t.$$.fragment)},m(a,c){x(a,e,c),T(t,e,null),n=!0,r||(s=H(e,"click",l[0]),r=!0)},p:w,i(a){n||(k(t.$$.fragment,a),n=!0)},o(a){$(t.$$.fragment,a),n=!1},d(a){a&&y(e),C(t),r=!1,s()}}}function ze(l,e,t){let{tracks:n}=e;const r=()=>W(n,s=>s.toggle());return l.$$set=s=>{"tracks"in s&&t(1,n=s.tracks)},[r,n]}class He extends M{constructor(e){super();S(this,e,ze,qe,V,{tracks:1})}}function Ie(l){let e,t,n,r,s,a,c,i,f,o,g,u,p;function P(_){l[1](_)}let v={};l[0]!==void 0&&(v.tracks=l[0]),t=new Ee({props:v}),O.push(()=>U(t,"tracks",P));function b(_){l[2](_)}let F={};l[0]!==void 0&&(F.tracks=l[0]),s=new Ae({props:F}),O.push(()=>U(s,"tracks",b));function E(_){l[3](_)}let B={};l[0]!==void 0&&(B.tracks=l[0]),i=new He({props:B}),O.push(()=>U(i,"tracks",E));function K(_){l[4](_)}let Y={};return l[0]!==void 0&&(Y.tracks=l[0]),g=new Ve({props:Y}),O.push(()=>U(g,"tracks",K)),{c(){e=h("div"),N(t.$$.fragment),r=j(),N(s.$$.fragment),c=j(),N(i.$$.fragment),o=j(),N(g.$$.fragment),m(e,"class","mx-auto my-2 flex w-5/6 md:w-1/2 justify-evenly")},m(_,D){x(_,e,D),T(t,e,null),d(e,r),T(s,e,null),d(e,c),T(i,e,null),d(e,o),T(g,e,null),p=!0},p(_,[D]){const A={};!n&&D&1&&(n=!0,A.tracks=_[0],R(()=>n=!1)),t.$set(A);const z={};!a&&D&1&&(a=!0,z.tracks=_[0],R(()=>a=!1)),s.$set(z);const L={};!f&&D&1&&(f=!0,L.tracks=_[0],R(()=>f=!1)),i.$set(L);const J={};!u&&D&1&&(u=!0,J.tracks=_[0],R(()=>u=!1)),g.$set(J)},i(_){p||(k(t.$$.fragment,_),k(s.$$.fragment,_),k(i.$$.fragment,_),k(g.$$.fragment,_),p=!0)},o(_){$(t.$$.fragment,_),$(s.$$.fragment,_),$(i.$$.fragment,_),$(g.$$.fragment,_),p=!1},d(_){_&&y(e),C(t),C(s),C(i),C(g)}}}function Oe(l,e,t){let{tracks:n}=e;function r(i){n=i,t(0,n)}function s(i){n=i,t(0,n)}function a(i){n=i,t(0,n)}function c(i){n=i,t(0,n)}return l.$$set=i=>{"tracks"in i&&t(0,n=i.tracks)},[n,r,s,a,c]}class Ue extends M{constructor(e){super();S(this,e,Oe,Ie,V,{tracks:0})}}function Re(l){let e,t,n,r,s;return{c(){e=h("img"),n=j(),r=h("img"),I(e.src,t=`img/outline/${l[0]}.png`)||m(e,"src",t),m(e,"alt",l[0]),m(e,"class","w-60 h-60 cursor-pointer absolute"),I(r.src,s=`img/solid/${l[0]}.png`)||m(r,"src",s),m(r,"alt",l[0]),m(r,"class","w-60 h-60 cursor-pointer absolute"),te(r,"opacity",l[1]*2,!1)},m(a,c){x(a,e,c),x(a,n,c),x(a,r,c)},p(a,[c]){c&1&&!I(e.src,t=`img/outline/${a[0]}.png`)&&m(e,"src",t),c&1&&m(e,"alt",a[0]),c&1&&!I(r.src,s=`img/solid/${a[0]}.png`)&&m(r,"src",s),c&1&&m(r,"alt",a[0]),c&2&&te(r,"opacity",a[1]*2,!1)},i:w,o:w,d(a){a&&y(e),a&&y(n),a&&y(r)}}}function Ge(l,e,t){let{name:n}=e,{volume:r}=e;return l.$$set=s=>{"name"in s&&t(0,n=s.name),"volume"in s&&t(1,r=s.volume)},[n,r]}class Ke extends M{constructor(e){super();S(this,e,Ge,Re,V,{name:0,volume:1})}}function Ye(l){let e,t,n,r,s,a,c,i,f,o=Math.round(l[1]*100)+"",g,u,p,P,v;return r=new Ke({props:{name:l[0].name,volume:l[1]}}),{c(){e=h("div"),t=h("div"),n=h("div"),N(r.$$.fragment),s=j(),a=h("div"),c=h("input"),i=j(),f=h("span"),g=q(o),u=q("%"),m(n,"class","relative top-0 left-0 h-60 w-60"),m(c,"class","mx-auto w-11/12 appearance-none h-[5px] rounded-md m-auto bg-white range-slider cursor-pointer"),m(c,"type","range"),m(c,"min","0"),m(c,"max","1"),m(c,"step","0.01"),c.value=l[1],m(f,"class","pl-3 w-10"),m(a,"class","flex flex-row mx-auto"),m(t,"class","m-auto"),m(e,"class","flex h-full w-full justify-start")},m(b,F){x(b,e,F),d(e,t),d(t,n),T(r,n,null),d(t,s),d(t,a),d(a,c),d(a,i),d(a,f),d(f,g),d(f,u),p=!0,P||(v=[H(n,"click",l[3]),H(c,"input",l[2])],P=!0)},p(b,[F]){const E={};F&1&&(E.name=b[0].name),F&2&&(E.volume=b[1]),r.$set(E),(!p||F&2)&&(c.value=b[1]),(!p||F&2)&&o!==(o=Math.round(b[1]*100)+"")&&ne(g,o)},i(b){p||(k(r.$$.fragment,b),p=!0)},o(b){$(r.$$.fragment,b),p=!1},d(b){b&&y(e),C(r),P=!1,he(v)}}}function Je(l,e,t){let{track:n}=e;n.togglePlaying();let r;const s=n.volumeStore.subscribe(i=>t(1,r=i));_e(()=>{s&&s()});const a=i=>{const f=i.target;t(0,n.volume=parseFloat(f.value),n),t(0,n)},c=async()=>{await n.toggle(),t(0,n)};return l.$$set=i=>{"track"in i&&t(0,n=i.track)},[n,r,a,c]}class Qe extends M{constructor(e){super();S(this,e,Je,Ye,V,{track:0})}}function ue(l,e,t){const n=l.slice();return n[3]=e[t],n[4]=e,n[5]=t,n}function fe(l){let e,t,n,r,s;function a(i){l[2](i,l[3],l[4],l[5])}let c={};return l[3]!==void 0&&(c.track=l[3]),t=new Qe({props:c}),O.push(()=>U(t,"track",a)),{c(){e=h("div"),N(t.$$.fragment),r=j(),m(e,"class","inline-block justify-self-center p-10")},m(i,f){x(i,e,f),T(t,e,null),d(e,r),s=!0},p(i,f){l=i;const o={};!n&&f&1&&(n=!0,o.track=l[3],R(()=>n=!1)),t.$set(o)},i(i){s||(k(t.$$.fragment,i),s=!0)},o(i){$(t.$$.fragment,i),s=!1},d(i){i&&y(e),C(t)}}}function We(l){let e,t,n,r,s,a;function c(u){l[1](u)}let i={};l[0]!==void 0&&(i.tracks=l[0]),t=new Ue({props:i}),O.push(()=>U(t,"tracks",c));let f=l[0],o=[];for(let u=0;u<f.length;u+=1)o[u]=fe(ue(l,f,u));const g=u=>$(o[u],1,1,()=>{o[u]=null});return{c(){e=h("div"),N(t.$$.fragment),r=j(),s=h("div");for(let u=0;u<o.length;u+=1)o[u].c();m(s,"class","flex-wrap flex justify-center flex-grow"),m(e,"class","p-10 h-full w-full flex flex-col")},m(u,p){x(u,e,p),T(t,e,null),d(e,r),d(e,s);for(let P=0;P<o.length;P+=1)o[P].m(s,null);a=!0},p(u,[p]){const P={};if(!n&&p&1&&(n=!0,P.tracks=u[0],R(()=>n=!1)),t.$set(P),p&1){f=u[0];let v;for(v=0;v<f.length;v+=1){const b=ue(u,f,v);o[v]?(o[v].p(b,p),k(o[v],1)):(o[v]=fe(b),o[v].c(),k(o[v],1),o[v].m(s,null))}for(re(),v=f.length;v<o.length;v+=1)g(v);le()}},i(u){if(!a){k(t.$$.fragment,u);for(let p=0;p<f.length;p+=1)k(o[p]);a=!0}},o(u){$(t.$$.fragment,u),o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)$(o[p]);a=!1},d(u){u&&y(e),C(t),se(o,u)}}}function Xe(l,e,t){let{tracks:n}=e;function r(a){n=a,t(0,n)}function s(a,c,i,f){i[f]=a,t(0,n)}return l.$$set=a=>{"tracks"in a&&t(0,n=a.tracks)},[n,r,s]}class Ze extends M{constructor(e){super();S(this,e,Xe,We,V,{tracks:0})}}class et{constructor(e,t,n,r){Q(this,"howl");Q(this,"_volume");Q(this,"previousVolume");this.name=e,this.playing=n,this.muted=r,this.name=e,this.howl=new ke.Howl({src:t,loop:!0}),this.playing=n,this.muted=r,this._volume=ee(0),this.volume=Math.round(Math.random())/2}set volume(e){this.howl.volume(e),this._volume.set(e),this.muted=e===0}get volumeStore(){return this._volume}togglePlaying(){this.playing?this.howl.pause():this.howl.play(),this.playing=!this.playing}async interpolateVolume(e,t){const n=t>e;let r=e;if(n)for(;r<t;)r+=.01,this.volume=r,await ce(5);else for(;r>t;)r-=.01,this.volume=r,await ce(5);this.volume=t}async toggle(e){const t=$e(this.volumeStore),n=this.decideEndVolume(t,e);this.previousVolume=t,await this.interpolateVolume(t,n)}decideEndVolume(e,t){var n,r,s;return((n=t==null?void 0:t.muting)!=null?n:!0)?((r=t==null?void 0:t.muting)!=null?r:!1)?0:(t==null?void 0:t.random)?Math.random()>.6?0:Math.random():e>0?0:this.previousVolume===0?.5:(s=this.previousVolume)!=null?s:.5:this.previousVolume}}class tt{constructor(e,t){this.name=e,this.file=t,this.name=e,this.file=t}}async function nt(){return(await Promise.all(Z.map(async e=>new tt(e,await fetch(`https://static.brace.dev/travellers/${e}.wav`).then(t=>t.blob()).then(Ce))))).map(({name:e,file:t})=>new et(e,t,!1,!1))}const Z=["drums","whistling","banjo","flute","harmonica","piano","stranger"];function rt(l){let e;return{c(){e=h("div"),e.innerHTML=`<p class="text-3xl md:text-9xl m-auto flex flex-col max-w-[80%]"><span class="text-center">Loading Tracks</span> 
    <span class="text-base md:text-lg block m-auto mt-7 text-center">This may take a short while on your first visit or after you have cleared
      your cache.</span> 
    <span class="loader"></span></p>`,m(e,"class","flex h-screen w-full")},m(t,n){x(t,e,n)},p:w,i:w,o:w,d(t){t&&y(e)}}}class lt extends M{constructor(e){super();S(this,e,null,rt,V,{})}}function st(l){let e,t;return{c(){e=h("a"),t=q(l[0]),m(e,"href",l[1]),m(e,"class","underline decoration-transparent hover:decoration-white transition-[text-decoration] h-fit z-50")},m(n,r){x(n,e,r),d(e,t)},p(n,[r]){r&1&&ne(t,n[0]),r&2&&m(e,"href",n[1])},i:w,o:w,d(n){n&&y(e)}}}function at(l,e,t){let{display:n}=e,{url:r}=e;return l.$$set=s=>{"display"in s&&t(0,n=s.display),"url"in s&&t(1,r=s.url)},[n,r]}class G extends M{constructor(e){super();S(this,e,at,st,V,{display:0,url:1})}}function it(l){let e,t,n,r,s,a,c,i,f,o,g,u,p,P,v,b,F,E,B,K,Y=new Date().getFullYear()+"",_,D,A,z;return s=new G({props:{display:"source",url:"https://github.com/DoctorBracewell/travelers"}}),c=new G({props:{display:"svelte",url:"https://svelte.dev/"}}),f=new G({props:{display:"tailwindcss",url:"https://tailwindcss.com/"}}),g=new G({props:{display:"howler",url:"https://howlerjs.com/"}}),b=new G({props:{display:"Andrew Prahlow",url:"http://www.andrewprahlow.com/"}}),A=new G({props:{display:"DrBracewell",url:"https://brace.dev"}}),{c(){e=h("footer"),t=h("div"),n=h("div"),r=h("p"),N(s.$$.fragment),a=q(`\r
        \u2502\r
        `),N(c.$$.fragment),i=q(` +\r
        `),N(f.$$.fragment),o=q(` +\r
        `),N(g.$$.fragment),u=j(),p=h("div"),P=h("p"),v=q("Music by "),N(b.$$.fragment),F=j(),E=h("div"),B=h("p"),K=q("\xA9 "),_=q(Y),D=j(),N(A.$$.fragment),m(r,"class","mt-auto text-sm md:text-base"),m(n,"class","flex z-50 mx-auto mt-3 md:m-0 md:p-5"),m(P,"class","mt-auto mx-auto text-base md:text-2xl"),m(p,"class","flex w-full mx-auto mt-3 md:m-0 md:absolute md:bottom-0 md:pb-5"),m(B,"class","mt-auto text-sm md:text-base"),m(E,"class","flex z-50 mx-auto mt-3 pb-5 md:m-0 md:p-5"),m(t,"class","flex flex-col md:flex-row w-full justify-between"),m(e,"class","absolute -bottom-24 md:bottom-0 w-full")},m(L,J){x(L,e,J),d(e,t),d(t,n),d(n,r),T(s,r,null),d(r,a),T(c,r,null),d(r,i),T(f,r,null),d(r,o),T(g,r,null),d(t,u),d(t,p),d(p,P),d(P,v),T(b,P,null),d(t,F),d(t,E),d(E,B),d(B,K),d(B,_),d(B,D),T(A,B,null),z=!0},p:w,i(L){z||(k(s.$$.fragment,L),k(c.$$.fragment,L),k(f.$$.fragment,L),k(g.$$.fragment,L),k(b.$$.fragment,L),k(A.$$.fragment,L),z=!0)},o(L){$(s.$$.fragment,L),$(c.$$.fragment,L),$(f.$$.fragment,L),$(g.$$.fragment,L),$(b.$$.fragment,L),$(A.$$.fragment,L),z=!1},d(L){L&&y(e),C(s),C(c),C(f),C(g),C(b),C(A)}}}class ct extends M{constructor(e){super();S(this,e,null,it,V,{})}}function me(l,e,t){const n=l.slice();return n[2]=e[t],n}function de(l){let e,t,n,r,s;return{c(){e=h("link"),n=j(),r=h("link"),m(e,"rel","preload"),m(e,"as","image"),m(e,"href",t=`img/solid/${l[2]}.png`),m(r,"rel","preload"),m(r,"as","image"),m(r,"href",s=`img/outline/${l[2]}.png`)},m(a,c){x(a,e,c),x(a,n,c),x(a,r,c)},p:w,d(a){a&&y(e),a&&y(n),a&&y(r)}}}function ot(l){return{c:w,m:w,p:w,i:w,o:w,d:w}}function ut(l){let e,t,n,r;const s=[mt,ft],a=[];function c(i,f){return i[0]?0:1}return e=c(l),t=a[e]=s[e](l),{c(){t.c(),n=ae()},m(i,f){a[e].m(i,f),x(i,n,f),r=!0},p(i,f){let o=e;e=c(i),e===o?a[e].p(i,f):(re(),$(a[o],1,1,()=>{a[o]=null}),le(),t=a[e],t?t.p(i,f):(t=a[e]=s[e](i),t.c()),k(t,1),t.m(n.parentNode,n))},i(i){r||(k(t),r=!0)},o(i){$(t),r=!1},d(i){a[e].d(i),i&&y(n)}}}function ft(l){let e,t;return e=new Te({}),{c(){N(e.$$.fragment)},m(n,r){T(e,n,r),t=!0},p:w,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function mt(l){let e,t;return e=new Ze({props:{tracks:l[1]}}),{c(){N(e.$$.fragment)},m(n,r){T(e,n,r),t=!0},p:w,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function dt(l){let e,t;return e=new lt({}),{c(){N(e.$$.fragment)},m(n,r){T(e,n,r),t=!0},p:w,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function pt(l){let e,t,n,r,s,a,c=Z,i=[];for(let o=0;o<c.length;o+=1)i[o]=de(me(l,c,o));let f={ctx:l,current:null,token:null,hasCatch:!1,pending:dt,then:ut,catch:ot,value:1,blocks:[,,,]};return we(nt(),f),s=new ct({}),{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=ae(),t=j(),n=h("main"),f.block.c(),r=j(),N(s.$$.fragment),m(n,"class","bg-black h-fit min-h-screen relative")},m(o,g){for(let u=0;u<i.length;u+=1)i[u].m(document.head,null);d(document.head,e),x(o,t,g),x(o,n,g),f.block.m(n,f.anchor=null),f.mount=()=>n,f.anchor=r,d(n,r),T(s,n,null),a=!0},p(o,[g]){if(l=o,g&0){c=Z;let u;for(u=0;u<c.length;u+=1){const p=me(l,c,u);i[u]?i[u].p(p,g):(i[u]=de(p),i[u].c(),i[u].m(e.parentNode,e))}for(;u<i.length;u+=1)i[u].d(1);i.length=c.length}ve(f,l,g)},i(o){a||(k(f.block),k(s.$$.fragment,o),a=!0)},o(o){for(let g=0;g<3;g+=1){const u=f.blocks[g];$(u)}$(s.$$.fragment,o),a=!1},d(o){se(i,o),y(e),o&&y(t),o&&y(n),f.block.d(),f.token=null,f=null,C(s)}}}function gt(l,e,t){let n;return be(l,ie,r=>t(0,n=r)),[n]}class ht extends M{constructor(e){super();S(this,e,gt,pt,V,{})}}new ht({target:document.getElementById("app")});