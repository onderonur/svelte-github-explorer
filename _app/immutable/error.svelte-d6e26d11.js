import{S as y,i as z,s as A,l as v,u as E,a as N,e as w,m as b,p as d,v as P,h as o,c as S,b as u,H as R,w as H,n as C}from"./chunks/index-7c1eec55.js";function h(r){let l,t=r[1].frame+"",a;return{c(){l=v("pre"),a=E(t)},l(f){l=b(f,"PRE",{});var s=d(l);a=P(s,t),s.forEach(o)},m(f,s){u(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&H(a,t)},d(f){f&&o(l)}}}function j(r){let l,t=r[1].stack+"",a;return{c(){l=v("pre"),a=E(t)},l(f){l=b(f,"PRE",{});var s=d(l);a=P(s,t),s.forEach(o)},m(f,s){u(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&H(a,t)},d(f){f&&o(l)}}}function B(r){let l,t,a,f,s=r[1].message+"",c,k,n,p,i=r[1].frame&&h(r),_=r[1].stack&&j(r);return{c(){l=v("h1"),t=E(r[0]),a=N(),f=v("pre"),c=E(s),k=N(),i&&i.c(),n=N(),_&&_.c(),p=w()},l(e){l=b(e,"H1",{});var m=d(l);t=P(m,r[0]),m.forEach(o),a=S(e),f=b(e,"PRE",{});var q=d(f);c=P(q,s),q.forEach(o),k=S(e),i&&i.l(e),n=S(e),_&&_.l(e),p=w()},m(e,m){u(e,l,m),R(l,t),u(e,a,m),u(e,f,m),R(f,c),u(e,k,m),i&&i.m(e,m),u(e,n,m),_&&_.m(e,m),u(e,p,m)},p(e,[m]){m&1&&H(t,e[0]),m&2&&s!==(s=e[1].message+"")&&H(c,s),e[1].frame?i?i.p(e,m):(i=h(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,m):(_=j(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:C,o:C,d(e){e&&o(l),e&&o(a),e&&o(f),e&&o(k),i&&i.d(e),e&&o(n),_&&_.d(e),e&&o(p)}}}function G({error:r,status:l}){return{props:{error:r,status:l}}}function D(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class I extends y{constructor(l){super(),z(this,l,D,B,A,{status:0,error:1})}}export{I as default,G as load};
