import{S as ee,i as te,s as re,x as h,y as d,z as v,f as $,t as c,C as w,l as N,a as D,u as Q,e as le,m as z,p as B,c as L,v as W,h as p,q as J,b as k,N as F,w as A,g as K,d as T,V as me,Q as he}from"../../chunks/index-e1d4c8bd.js";import{F as de,p as ve}from"../../chunks/Fetcher-41eae558.js";import{C as we,a as ke,b as Y,c as be}from"../../chunks/Count-0e8ac63b.js";import{L as _e}from"../../chunks/Link-f6be4c17.js";import{L as P,C as ge}from"../../chunks/ListItem-4da1b803.js";function fe(n,t,s){const e=n.slice();return e[1]=t[s],e}function Re(n){let t=n[0].name+"",s;return{c(){s=Q(t)},l(e){s=W(e,t)},m(e,r){k(e,s,r)},p(e,r){r&1&&t!==(t=e[0].name+"")&&A(s,t)},d(e){e&&p(s)}}}function oe(n){let t,s=n[0].description+"",e;return{c(){t=N("p"),e=Q(s)},l(r){t=z(r,"P",{});var l=B(t);e=W(l,s),l.forEach(p)},m(r,l){k(r,t,l),F(t,e)},p(r,l){l&1&&s!==(s=r[0].description+"")&&A(e,s)},d(r){r&&p(t)}}}function ae(n){let t,s;return t=new _e({props:{href:n[0].homepage,target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Ce]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&1&&(l.href=e[0].homepage),r&17&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Ce(n){let t=n[0].homepage+"",s;return{c(){s=Q(t)},l(e){s=W(e,t)},m(e,r){k(e,s,r)},p(e,r){r&1&&t!==(t=e[0].homepage+"")&&A(s,t)},d(e){e&&p(s)}}}function De(n){let t,s;return t=new Y({props:{count:n[0].stargazers_count,suffix:"Stars"}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&1&&(l.count=e[0].stargazers_count),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Le(n){let t,s;return t=new Y({props:{count:n[0].forks_count,suffix:"Forks"}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&1&&(l.count=e[0].forks_count),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Ee(n){let t,s;return t=new Y({props:{count:n[0].watchers,suffix:"Watchers"}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&1&&(l.count=e[0].watchers),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Fe(n){let t,s;return t=new Y({props:{count:n[0].open_issues,suffix:"Open Issues"}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&1&&(l.count=e[0].open_issues),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function ie(n){let t,s,e=n[0].topics,r=[];for(let f=0;f<e.length;f+=1)r[f]=ue(fe(n,e,f));const l=f=>c(r[f],1,1,()=>{r[f]=null});return{c(){t=N("ul");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){t=z(f,"UL",{class:!0});var i=B(t);for(let a=0;a<r.length;a+=1)r[a].l(i);i.forEach(p),this.h()},h(){J(t,"class","flex flex-wrap gap-1")},m(f,i){k(f,t,i);for(let a=0;a<r.length;a+=1)r[a].m(t,null);s=!0},p(f,i){if(i&1){e=f[0].topics;let a;for(a=0;a<e.length;a+=1){const E=fe(f,e,a);r[a]?(r[a].p(E,i),$(r[a],1)):(r[a]=ue(E),r[a].c(),$(r[a],1),r[a].m(t,null))}for(K(),a=e.length;a<r.length;a+=1)l(a);T()}},i(f){if(!s){for(let i=0;i<e.length;i+=1)$(r[i]);s=!0}},o(f){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)c(r[i]);s=!1},d(f){f&&p(t),me(r,f)}}}function Ie(n){let t=n[1]+"",s;return{c(){s=Q(t)},l(e){s=W(e,t)},m(e,r){k(e,s,r)},p(e,r){r&1&&t!==(t=e[1]+"")&&A(s,t)},d(e){e&&p(s)}}}function Ue(n){let t,s,e;return t=new ge({props:{$$slots:{default:[Ie]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment),s=D()},l(r){d(t.$$.fragment,r),s=L(r)},m(r,l){v(t,r,l),k(r,s,l),e=!0},p(r,l){const f={};l&17&&(f.$$scope={dirty:l,ctx:r}),t.$set(f)},i(r){e||($(t.$$.fragment,r),e=!0)},o(r){c(t.$$.fragment,r),e=!1},d(r){w(t,r),r&&p(s)}}}function ue(n){let t,s;return t=new P({props:{$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&17&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function $e(n){let t,s,e;return s=new ge({props:{color:"blue",$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){t=N("div"),h(s.$$.fragment)},l(r){t=z(r,"DIV",{});var l=B(t);d(s.$$.fragment,l),l.forEach(p)},m(r,l){k(r,t,l),v(s,t,null),e=!0},p(r,l){const f={};l&17&&(f.$$scope={dirty:l,ctx:r}),s.$set(f)},i(r){e||($(s.$$.fragment,r),e=!0)},o(r){c(s.$$.fragment,r),e=!1},d(r){r&&p(t),w(s)}}}function Se(n){let t=n[0].language+"",s;return{c(){s=Q(t)},l(e){s=W(e,t)},m(e,r){k(e,s,r)},p(e,r){r&1&&t!==(t=e[0].language+"")&&A(s,t)},d(e){e&&p(s)}}}function Ve(n){let t,s,e,r,l,f=new Date(n[0].created_at).toLocaleDateString()+"",i,a,E,q,R,I,Z,U,x,S,y,V,X,j,O,G;e=new _e({props:{href:`/${n[0].full_name}`,class:"font-semibold text-lg",$$slots:{default:[Re]},$$scope:{ctx:n}}});let b=n[0].description&&oe(n),m=n[0].homepage&&ae(n);I=new P({props:{hasMiddot:!0,$$slots:{default:[De]},$$scope:{ctx:n}}}),U=new P({props:{hasMiddot:!0,$$slots:{default:[Le]},$$scope:{ctx:n}}}),S=new P({props:{hasMiddot:!0,$$slots:{default:[Ee]},$$scope:{ctx:n}}}),V=new P({props:{hasMiddot:!0,$$slots:{default:[Fe]},$$scope:{ctx:n}}});let _=n[0].topics.length&&ie(n),g=n[0].language&&$e(n);return{c(){t=N("div"),s=N("div"),h(e.$$.fragment),r=D(),l=N("div"),i=Q(f),a=D(),b&&b.c(),E=D(),m&&m.c(),q=D(),R=N("ul"),h(I.$$.fragment),Z=D(),h(U.$$.fragment),x=D(),h(S.$$.fragment),y=D(),h(V.$$.fragment),X=D(),_&&_.c(),j=D(),g&&g.c(),O=le(),this.h()},l(o){t=z(o,"DIV",{});var u=B(t);s=z(u,"DIV",{class:!0});var M=B(s);d(e.$$.fragment,M),r=L(M),l=z(M,"DIV",{class:!0});var H=B(l);i=W(H,f),H.forEach(p),M.forEach(p),a=L(u),b&&b.l(u),u.forEach(p),E=L(o),m&&m.l(o),q=L(o),R=z(o,"UL",{class:!0});var C=B(R);d(I.$$.fragment,C),Z=L(C),d(U.$$.fragment,C),x=L(C),d(S.$$.fragment,C),y=L(C),d(V.$$.fragment,C),C.forEach(p),X=L(o),_&&_.l(o),j=L(o),g&&g.l(o),O=le(),this.h()},h(){J(l,"class","text-slate-400 text-sm"),J(s,"class","flex justify-between gap-2"),J(R,"class","flex flex-wrap gap-2 items-center")},m(o,u){k(o,t,u),F(t,s),v(e,s,null),F(s,r),F(s,l),F(l,i),F(t,a),b&&b.m(t,null),k(o,E,u),m&&m.m(o,u),k(o,q,u),k(o,R,u),v(I,R,null),F(R,Z),v(U,R,null),F(R,x),v(S,R,null),F(R,y),v(V,R,null),k(o,X,u),_&&_.m(o,u),k(o,j,u),g&&g.m(o,u),k(o,O,u),G=!0},p(o,u){const M={};u&1&&(M.href=`/${o[0].full_name}`),u&17&&(M.$$scope={dirty:u,ctx:o}),e.$set(M),(!G||u&1)&&f!==(f=new Date(o[0].created_at).toLocaleDateString()+"")&&A(i,f),o[0].description?b?b.p(o,u):(b=oe(o),b.c(),b.m(t,null)):b&&(b.d(1),b=null),o[0].homepage?m?(m.p(o,u),u&1&&$(m,1)):(m=ae(o),m.c(),$(m,1),m.m(q.parentNode,q)):m&&(K(),c(m,1,1,()=>{m=null}),T());const H={};u&17&&(H.$$scope={dirty:u,ctx:o}),I.$set(H);const C={};u&17&&(C.$$scope={dirty:u,ctx:o}),U.$set(C);const se={};u&17&&(se.$$scope={dirty:u,ctx:o}),S.$set(se);const ne={};u&17&&(ne.$$scope={dirty:u,ctx:o}),V.$set(ne),o[0].topics.length?_?(_.p(o,u),u&1&&$(_,1)):(_=ie(o),_.c(),$(_,1),_.m(j.parentNode,j)):_&&(K(),c(_,1,1,()=>{_=null}),T()),o[0].language?g?(g.p(o,u),u&1&&$(g,1)):(g=$e(o),g.c(),$(g,1),g.m(O.parentNode,O)):g&&(K(),c(g,1,1,()=>{g=null}),T())},i(o){G||($(e.$$.fragment,o),$(m),$(I.$$.fragment,o),$(U.$$.fragment,o),$(S.$$.fragment,o),$(V.$$.fragment,o),$(_),$(g),G=!0)},o(o){c(e.$$.fragment,o),c(m),c(I.$$.fragment,o),c(U.$$.fragment,o),c(S.$$.fragment,o),c(V.$$.fragment,o),c(_),c(g),G=!1},d(o){o&&p(t),w(e),b&&b.d(),o&&p(E),m&&m.d(o),o&&p(q),o&&p(R),w(I),w(U),w(S),w(V),o&&p(X),_&&_.d(o),o&&p(j),g&&g.d(o),o&&p(O)}}}function Me(n){let t,s;return t=new ke({props:{class:"flex flex-col gap-2",$$slots:{default:[Ve]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&17&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Ne(n){let t,s;return t=new we({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,[r]){const l={};r&17&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function ze(n,t,s){let{userRepository:e}=t;return n.$$set=r=>{"userRepository"in r&&s(0,e=r.userRepository)},[e]}class Be extends ee{constructor(t){super(),te(this,t,ze,Ne,re,{userRepository:0})}}function ce(n,t,s){const e=n.slice();return e[1]=t[s],e}function qe(n){let t,s,e;return t=new Be({props:{userRepository:n[1]}}),{c(){h(t.$$.fragment),s=D()},l(r){d(t.$$.fragment,r),s=L(r)},m(r,l){v(t,r,l),k(r,s,l),e=!0},p(r,l){const f={};l&1&&(f.userRepository=r[1]),t.$set(f)},i(r){e||($(t.$$.fragment,r),e=!0)},o(r){c(t.$$.fragment,r),e=!1},d(r){w(t,r),r&&p(s)}}}function pe(n){let t,s;return t=new P({props:{$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&17&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function je(n){let t,s,e=n[0],r=[];for(let f=0;f<e.length;f+=1)r[f]=pe(ce(n,e,f));const l=f=>c(r[f],1,1,()=>{r[f]=null});return{c(){t=N("ul");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){t=z(f,"UL",{class:!0});var i=B(t);for(let a=0;a<r.length;a+=1)r[a].l(i);i.forEach(p),this.h()},h(){J(t,"class","flex flex-col gap-3")},m(f,i){k(f,t,i);for(let a=0;a<r.length;a+=1)r[a].m(t,null);s=!0},p(f,[i]){if(i&1){e=f[0];let a;for(a=0;a<e.length;a+=1){const E=ce(f,e,a);r[a]?(r[a].p(E,i),$(r[a],1)):(r[a]=pe(E),r[a].c(),$(r[a],1),r[a].m(t,null))}for(K(),a=e.length;a<r.length;a+=1)l(a);T()}},i(f){if(!s){for(let i=0;i<e.length;i+=1)$(r[i]);s=!0}},o(f){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)c(r[i]);s=!1},d(f){f&&p(t),me(r,f)}}}function Oe(n,t,s){let{userRepositories:e}=t;return n.$$set=r=>{"userRepositories"in r&&s(0,e=r.userRepositories)},[e]}class Pe extends ee{constructor(t){super(),te(this,t,Oe,je,re,{userRepositories:0})}}function Qe(n){let t,s;return t=new Pe({props:{userRepositories:n[3]}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,r){const l={};r&8&&(l.userRepositories=e[3]),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function We(n){let t,s;return t=new de({props:{fetcherFn:n[0],$$slots:{default:[Qe,({data:e})=>({3:e}),({data:e})=>e?8:0]},$$scope:{ctx:n}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){v(t,e,r),s=!0},p(e,[r]){const l={};r&1&&(l.fetcherFn=e[0]),r&24&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Ae(n,t,s){let e;he(n,ve,f=>s(2,e=f));let r,l;return n.$$.update=()=>{n.$$.dirty&6&&(s(1,r=e.params.username),s(0,l=be(r)))},[l,r,e]}class Xe extends ee{constructor(t){super(),te(this,t,Ae,We,re,{})}}export{Xe as default};