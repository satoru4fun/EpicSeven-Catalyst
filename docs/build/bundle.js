var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}let i;function l(t){i=t}const d=[],$=[],p=[],h=[],m=Promise.resolve();let g=!1;function y(t){p.push(t)}let b=!1;const _=new Set;function x(){if(!b){b=!0;do{for(let t=0;t<d.length;t+=1){const n=d[t];l(n),k(n.$$)}for(l(null),d.length=0;$.length;)$.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];_.has(n)||(_.add(n),n())}p.length=0}while(d.length);for(;h.length;)h.pop()();g=!1,b=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;function v(t,n){t&&t.i&&(w.delete(t),t.i(n))}function E(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),undefined.c.push((()=>{w.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function C(t){t&&t.c()}function j(t,e,c){const{fragment:u,on_mount:s,on_destroy:f,after_update:a}=t.$$;u&&u.m(e,c),y((()=>{const e=s.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(y)}function N(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,m.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(n,r,c,u,f,a,d=[-1]){const $=i;l(n);const p=r.props||{},h=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let m=!1;if(h.ctx=c?c(n,p,((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&f(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&O(n,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();r.intro&&v(n.$$.fragment),j(n,r.target,r.anchor),x()}l($)}class M{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(n){let e;return{c(){e=f("h1"),e.textContent="Epic Seven Catalyst Database"},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}class A extends M{constructor(t){super(),S(this,t,null,q,c,{})}}function B(n){let e;return{c(){e=f("h1"),e.textContent="Main content"},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}class D extends M{constructor(t){super(),S(this,t,null,B,c,{})}}function P(n){let e,o,r,c;return e=new A({}),r=new D({}),{c(){C(e.$$.fragment),o=a(),C(r.$$.fragment)},m(t,n){j(e,t,n),u(t,o,n),j(r,t,n),c=!0},p:t,i(t){c||(v(e.$$.fragment,t),v(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){N(e,t),t&&s(o),N(r,t)}}}return new class extends M{constructor(t){super(),S(this,t,null,P,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
