(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const s of f.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerpolicy&&(f.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?f.credentials="include":o.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(o){if(o.ep)return;o.ep=!0;const f=n(o);fetch(o.href,f)}})();function b(){}function R(e){return e()}function K(){return Object.create(null)}function E(e){e.forEach(R)}function W(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function g(){return C(" ")}function V(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function te(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let B;function k(e){B=e}const I=[],F=[],A=[],G=[],ne=Promise.resolve();let T=!1;function re(){T||(T=!0,ne.then(J))}function P(e){A.push(e)}const j=new Set;let L=0;function J(){const e=B;do{for(;L<I.length;){const t=I[L];L++,k(t),oe(t.$$)}for(k(null),I.length=0,L=0;F.length;)F.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];j.has(n)||(j.add(n),n())}A.length=0}while(I.length);for(;G.length;)G.pop()();T=!1,j.clear(),k(e)}function oe(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const N=new Set;let le;function Q(e,t){e&&e.i&&(N.delete(e),e.i(t))}function ie(e,t,n,r){if(e&&e.o){if(N.has(e))return;N.add(e),le.c.push(()=>{N.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function fe(e){e&&e.c()}function U(e,t,n,r){const{fragment:o,after_update:f}=e.$$;o&&o.m(t,n),r||P(()=>{const s=e.$$.on_mount.map(R).filter(W);e.$$.on_destroy?e.$$.on_destroy.push(...s):E(s),e.$$.on_mount=[]}),f.forEach(P)}function X(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(I.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,o,f,s,m=[-1]){const p=B;k(e);const i=e.$$={fragment:null,ctx:[],props:f,update:b,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:K(),dirty:m,skip_bound:!1,root:t.target||p.$$.root};s&&s(i.root);let y=!1;if(i.ctx=n?n(e,t.props||{},(a,v,...$)=>{const w=$.length?$[0]:v;return i.ctx&&o(i.ctx[a],i.ctx[a]=w)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](w),y&&se(e,a)),v}):[],i.update(),y=!0,E(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=te(t.target);i.fragment&&i.fragment.l(a),a.forEach(c)}else i.fragment&&i.fragment.c();t.intro&&Q(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),J()}k(p)}class Z{$destroy(){X(this,1),this.$destroy=b}$on(t,n){if(!W(n))return b;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t,n,r,o,f,s,m,p,i,y,a,v,$,w,x,O,S,M,H;return{c(){t=_("u"),t.innerHTML="<h1>Welcome to my amazing game!</h1>",n=g(),r=_("h2"),r.textContent="Click the button bellow to increment the number!",o=g(),f=_("h3"),f.textContent="If you get to some milestones, you may get a reward!",s=g(),m=_("p"),p=C("\u{1F9E0}: "),i=C(e[0]),y=g(),a=_("p"),v=C("Level: "),$=C(e[1]),w=g(),x=_("button"),x.textContent="\u{1F9E0}",O=g(),S=_("button"),S.textContent="Reset Game"},m(l,u){d(l,t,u),d(l,n,u),d(l,r,u),d(l,o,u),d(l,f,u),d(l,s,u),d(l,m,u),h(m,p),h(m,i),d(l,y,u),d(l,a,u),h(a,v),h(a,$),d(l,w,u),d(l,x,u),d(l,O,u),d(l,S,u),M||(H=[V(x,"click",e[2]),V(S,"click",ce)],M=!0)},p(l,[u]){u&1&&z(i,l[0]),u&2&&z($,l[1])},i:b,o:b,d(l){l&&c(t),l&&c(n),l&&c(r),l&&c(o),l&&c(f),l&&c(s),l&&c(m),l&&c(y),l&&c(a),l&&c(w),l&&c(x),l&&c(O),l&&c(S),M=!1,E(H)}}}function ce(){window.localStorage.setItem("number","0"),window.localStorage.setItem("level","0"),location.reload()}function ae(e,t,n){var r=1,o=0;window.onload=function(){n(0,r=parseInt(window.localStorage.getItem("number"))),n(1,o=parseInt(window.localStorage.getItem("level")))};function f(){n(0,r+=o),n(0,r+=Math.floor(Math.random()*6)),r>o*50&&n(0,r=o*50),r%50==0&&n(1,o++,o),window.localStorage.setItem("number",r.toString()),window.localStorage.setItem("level",o.toString())}return[r,o,f]}class de extends Z{constructor(t){super(),Y(this,t,ae,ue,D,{})}}function me(e){let t,n,r,o,f,s,m,p;return r=new de({}),{c(){t=_("main"),n=_("div"),fe(r.$$.fragment),o=g(),f=_("p"),f.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',s=g(),m=_("p"),m.textContent="Click on the Vite and Svelte logos to learn more",q(n,"class","card"),q(m,"class","read-the-docs svelte-f0ovr4")},m(i,y){d(i,t,y),h(t,n),U(r,n,null),h(t,o),h(t,f),h(t,s),h(t,m),p=!0},p:b,i(i){p||(Q(r.$$.fragment,i),p=!0)},o(i){ie(r.$$.fragment,i),p=!1},d(i){i&&c(t),X(r)}}}class pe extends Z{constructor(t){super(),Y(this,t,null,me,D,{})}}new pe({target:document.getElementById("app")});