import{S as U,i as V,s as q,x as w,a as E,y as b,c as H,z as F,b as I,f as p,t as _,C,h as c,P as y,J as S,l as $,m as d,p as h,q as g,H as v,K as z,L as J,M as K}from"../../chunks/index-7c1eec55.js";import{F as L,p as M}from"../../chunks/Fetcher-44012c4c.js";import{f as P,U as j}from"../../chunks/UserCard-8bed8593.js";import{H as k}from"../../chunks/Head-5c090a06.js";import"../../chunks/CardContent-f988c71d.js";import"../../chunks/Link-b77aab88.js";function x(l){let t,o,a,f,e,r;a=new j({props:{user:l[5]}});const m=l[3].default,s=S(m,l,l[4],null);return{c(){t=$("div"),o=$("div"),w(a.$$.fragment),f=E(),e=$("div"),s&&s.c(),this.h()},l(n){t=d(n,"DIV",{class:!0});var i=h(t);o=d(i,"DIV",{class:!0});var u=h(o);b(a.$$.fragment,u),u.forEach(c),f=H(i),e=d(i,"DIV",{class:!0});var D=h(e);s&&s.l(D),D.forEach(c),i.forEach(c),this.h()},h(){g(o,"class","mx-auto basis-72 flex-none w-full max-w-xs"),g(e,"class","flex-1 min-w-0"),g(t,"class","flex gap-4 flex-col md:flex-row")},m(n,i){I(n,t,i),v(t,o),F(a,o,null),v(t,f),v(t,e),s&&s.m(e,null),r=!0},p(n,i){const u={};i&32&&(u.user=n[5]),a.$set(u),s&&s.p&&(!r||i&16)&&z(s,m,n,n[4],r?K(m,n[4],i,null):J(n[4]),null)},i(n){r||(p(a.$$.fragment,n),p(s,n),r=!0)},o(n){_(a.$$.fragment,n),_(s,n),r=!1},d(n){n&&c(t),C(a),s&&s.d(n)}}}function A(l){let t,o,a,f;return t=new k({props:{title:l[0]}}),a=new L({props:{fetcherFn:l[1],$$slots:{default:[x,({data:e})=>({5:e}),({data:e})=>e?32:0]},$$scope:{ctx:l}}}),{c(){w(t.$$.fragment),o=E(),w(a.$$.fragment)},l(e){b(t.$$.fragment,e),o=H(e),b(a.$$.fragment,e)},m(e,r){F(t,e,r),I(e,o,r),F(a,e,r),f=!0},p(e,[r]){const m={};r&1&&(m.title=e[0]),t.$set(m);const s={};r&2&&(s.fetcherFn=e[1]),r&48&&(s.$$scope={dirty:r,ctx:e}),a.$set(s)},i(e){f||(p(t.$$.fragment,e),p(a.$$.fragment,e),f=!0)},o(e){_(t.$$.fragment,e),_(a.$$.fragment,e),f=!1},d(e){C(t,e),e&&c(o),C(a,e)}}}function B(l,t,o){let a;y(l,M,s=>o(2,a=s));let{$$slots:f={},$$scope:e}=t,r,m;return l.$$set=s=>{"$$scope"in s&&o(4,e=s.$$scope)},l.$$.update=()=>{l.$$.dirty&5&&(o(0,r=a.params.username),o(1,m=P(r)))},[r,m,a,f,e]}class W extends U{constructor(t){super(),V(this,t,B,A,q,{})}}export{W as default};
