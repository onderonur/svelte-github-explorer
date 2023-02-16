import{S as T,i as G,s as H,x as _,y as h,z as d,f as c,t as g,A as w,k as S,a as I,q as j,l as V,m as q,c as R,r as A,h as m,n as N,b as k,U as E,u as B,g as Y,d as Z,a6 as ee,a2 as te}from"../../../chunks/singletons-17689f61.js";import{p as re}from"../../../chunks/stores-2b73cdc5.js";import{R as se,a as oe,b as ne,f as ae}from"../../../chunks/RepositoryTopics-d604bc3c.js";import{L as x}from"../../../chunks/Link-05a31a84.js";import{C as fe,a as le}from"../../../chunks/CardContent-738693e6.js";import{r as M}from"../../../chunks/RoutingUtils-f9a2c730.js";import{L as ie}from"../../../chunks/ListItem-fffaab52.js";import{F as ue}from"../../../chunks/Fetcher-44ef44c2.js";function $e(n){let t=n[0].name+"",s;return{c(){s=j(t)},l(e){s=A(e,t)},m(e,r){k(e,s,r)},p(e,r){r&1&&t!==(t=e[0].name+"")&&B(s,t)},d(e){e&&m(s)}}}function O(n){let t,s=n[0].description+"",e;return{c(){t=S("p"),e=j(s)},l(r){t=V(r,"P",{});var a=q(t);e=A(a,s),a.forEach(m)},m(r,a){k(r,t,a),E(t,e)},p(r,a){a&1&&s!==(s=r[0].description+"")&&B(e,s)},d(r){r&&m(t)}}}function Q(n){let t,s;return t=new x({props:{href:n[0].homepage,target:"_blank",rel:"noopener noreferrer",$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){d(t,e,r),s=!0},p(e,r){const a={};r&1&&(a.href=e[0].homepage),r&3&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function ce(n){let t=n[0].homepage+"",s;return{c(){s=j(t)},l(e){s=A(e,t)},m(e,r){k(e,s,r)},p(e,r){r&1&&t!==(t=e[0].homepage+"")&&B(s,t)},d(e){e&&m(s)}}}function pe(n){let t,s,e,r,a,f=new Date(n[0].created_at).toLocaleDateString()+"",u,i,D,z,v,P,b,U,y,F;e=new x({props:{href:M.repository({username:n[0].owner.login,repository:n[0].name}),class:"font-semibold text-lg",$$slots:{default:[$e]},$$scope:{ctx:n}}});let p=n[0].description&&O(n),$=n[0].homepage&&Q(n);return v=new se({props:{stargazers:n[0].stargazers_count,forks:n[0].forks_count,watchers:n[0].watchers,openIssues:n[0].open_issues}}),b=new oe({props:{topics:n[0].topics}}),y=new ne({props:{language:n[0].language}}),{c(){t=S("div"),s=S("div"),_(e.$$.fragment),r=I(),a=S("div"),u=j(f),i=I(),p&&p.c(),D=I(),$&&$.c(),z=I(),_(v.$$.fragment),P=I(),_(b.$$.fragment),U=I(),_(y.$$.fragment),this.h()},l(o){t=V(o,"DIV",{});var l=q(t);s=V(l,"DIV",{class:!0});var L=q(s);h(e.$$.fragment,L),r=R(L),a=V(L,"DIV",{class:!0});var C=q(a);u=A(C,f),C.forEach(m),L.forEach(m),i=R(l),p&&p.l(l),l.forEach(m),D=R(o),$&&$.l(o),z=R(o),h(v.$$.fragment,o),P=R(o),h(b.$$.fragment,o),U=R(o),h(y.$$.fragment,o),this.h()},h(){N(a,"class","text-slate-400 text-sm"),N(s,"class","flex justify-between gap-2")},m(o,l){k(o,t,l),E(t,s),d(e,s,null),E(s,r),E(s,a),E(a,u),E(t,i),p&&p.m(t,null),k(o,D,l),$&&$.m(o,l),k(o,z,l),d(v,o,l),k(o,P,l),d(b,o,l),k(o,U,l),d(y,o,l),F=!0},p(o,l){const L={};l&1&&(L.href=M.repository({username:o[0].owner.login,repository:o[0].name})),l&3&&(L.$$scope={dirty:l,ctx:o}),e.$set(L),(!F||l&1)&&f!==(f=new Date(o[0].created_at).toLocaleDateString()+"")&&B(u,f),o[0].description?p?p.p(o,l):(p=O(o),p.c(),p.m(t,null)):p&&(p.d(1),p=null),o[0].homepage?$?($.p(o,l),l&1&&c($,1)):($=Q(o),$.c(),c($,1),$.m(z.parentNode,z)):$&&(Y(),g($,1,1,()=>{$=null}),Z());const C={};l&1&&(C.stargazers=o[0].stargazers_count),l&1&&(C.forks=o[0].forks_count),l&1&&(C.watchers=o[0].watchers),l&1&&(C.openIssues=o[0].open_issues),v.$set(C);const J={};l&1&&(J.topics=o[0].topics),b.$set(J);const K={};l&1&&(K.language=o[0].language),y.$set(K)},i(o){F||(c(e.$$.fragment,o),c($),c(v.$$.fragment,o),c(b.$$.fragment,o),c(y.$$.fragment,o),F=!0)},o(o){g(e.$$.fragment,o),g($),g(v.$$.fragment,o),g(b.$$.fragment,o),g(y.$$.fragment,o),F=!1},d(o){o&&m(t),w(e),p&&p.d(),o&&m(D),$&&$.d(o),o&&m(z),w(v,o),o&&m(P),w(b,o),o&&m(U),w(y,o)}}}function me(n){let t,s;return t=new le({props:{class:"flex flex-col gap-2",$$slots:{default:[pe]},$$scope:{ctx:n}}}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){d(t,e,r),s=!0},p(e,r){const a={};r&3&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function ge(n){let t,s;return t=new fe({props:{$$slots:{default:[me]},$$scope:{ctx:n}}}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){d(t,e,r),s=!0},p(e,[r]){const a={};r&3&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function _e(n,t,s){let{repository:e}=t;return n.$$set=r=>{"repository"in r&&s(0,e=r.repository)},[e]}class he extends T{constructor(t){super(),G(this,t,_e,ge,H,{repository:0})}}function W(n,t,s){const e=n.slice();return e[1]=t[s],e}function de(n){let t,s,e;return t=new he({props:{repository:n[1]}}),{c(){_(t.$$.fragment),s=I()},l(r){h(t.$$.fragment,r),s=R(r)},m(r,a){d(t,r,a),k(r,s,a),e=!0},p(r,a){const f={};a&1&&(f.repository=r[1]),t.$set(f)},i(r){e||(c(t.$$.fragment,r),e=!0)},o(r){g(t.$$.fragment,r),e=!1},d(r){w(t,r),r&&m(s)}}}function X(n){let t,s;return t=new ie({props:{$$slots:{default:[de]},$$scope:{ctx:n}}}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){d(t,e,r),s=!0},p(e,r){const a={};r&17&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function we(n){let t,s,e=n[0],r=[];for(let f=0;f<e.length;f+=1)r[f]=X(W(n,e,f));const a=f=>g(r[f],1,1,()=>{r[f]=null});return{c(){t=S("ul");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){t=V(f,"UL",{class:!0});var u=q(t);for(let i=0;i<r.length;i+=1)r[i].l(u);u.forEach(m),this.h()},h(){N(t,"class","flex flex-col gap-3")},m(f,u){k(f,t,u);for(let i=0;i<r.length;i+=1)r[i].m(t,null);s=!0},p(f,[u]){if(u&1){e=f[0];let i;for(i=0;i<e.length;i+=1){const D=W(f,e,i);r[i]?(r[i].p(D,u),c(r[i],1)):(r[i]=X(D),r[i].c(),c(r[i],1),r[i].m(t,null))}for(Y(),i=e.length;i<r.length;i+=1)a(i);Z()}},i(f){if(!s){for(let u=0;u<e.length;u+=1)c(r[u]);s=!0}},o(f){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)g(r[u]);s=!1},d(f){f&&m(t),ee(r,f)}}}function ke(n,t,s){let{repositories:e}=t;return n.$$set=r=>{"repositories"in r&&s(0,e=r.repositories)},[e]}class ve extends T{constructor(t){super(),G(this,t,ke,we,H,{repositories:0})}}function be(n){let t,s;return t=new ve({props:{repositories:n[3]}}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){d(t,e,r),s=!0},p(e,r){const a={};r&8&&(a.repositories=e[3]),t.$set(a)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function ye(n){let t,s;return t=new ue({props:{fetcherFn:n[0],$$slots:{default:[be,({data:e})=>({3:e}),({data:e})=>e?8:0]},$$scope:{ctx:n}}}),{c(){_(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,r){d(t,e,r),s=!0},p(e,[r]){const a={};r&1&&(a.fetcherFn=e[0]),r&24&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Le(n,t,s){let e;te(n,re,f=>s(2,e=f));let r,a;return n.$$.update=()=>{n.$$.dirty&6&&(s(1,r=e.params.username),s(0,a=ae(r)))},[a,r,e]}class Ve extends T{constructor(t){super(),G(this,t,Le,ye,H,{})}}export{Ve as default};
