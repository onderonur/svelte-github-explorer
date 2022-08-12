import{o as te,a as se,C as j}from"./Fetcher-44012c4c.js";import{S as ne,i as ie,s as ae,x as S,y as U,z,f as g,t as w,C as G,l as k,a as D,m as E,p as C,h as c,c as V,U as O,q as I,b as h,H as b,u as F,e as Q,v as R,w as T,g as B,d as J}from"./index-7c1eec55.js";import{C as re,a as fe}from"./CardContent-f988c71d.js";import{L as le}from"./Link-b77aab88.js";async function ge(i){return(await te.request("GET /users/{username}",{username:i})).data}async function we(i,e){const s=await te.request(`GET /search/users?q=${encodeURIComponent(`${i} in:login type:user`)}&page=${e}&per_page=${30}`),t=e>se,n=e*30<s.data.total_count;return{...s.data,hasPreviousPage:t,hasNextPage:n}}function W(i){let e,l=i[0].name+"",s;return{c(){e=k("div"),s=F(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=C(e);s=R(n,l),n.forEach(c),this.h()},h(){I(e,"class","text-lg text-slate-500")},m(t,n){h(t,e,n),b(e,s)},p(t,n){n&1&&l!==(l=t[0].name+"")&&T(s,l)},d(t){t&&c(e)}}}function X(i){let e,l=i[0].bio+"",s;return{c(){e=k("p"),s=F(l)},l(t){e=E(t,"P",{});var n=C(e);s=R(n,l),n.forEach(c)},m(t,n){h(t,e,n),b(e,s)},p(t,n){n&1&&l!==(l=t[0].bio+"")&&T(s,l)},d(t){t&&c(e)}}}function Y(i){let e,l,s,t,n,o=i[0].company&&Z(i),u=i[0].location&&y(i),a=i[0].blog&&x(i),f=i[0].twitter_username&&ee(i);return{c(){e=k("div"),o&&o.c(),l=D(),u&&u.c(),s=D(),a&&a.c(),t=D(),f&&f.c()},l(m){e=E(m,"DIV",{});var _=C(e);o&&o.l(_),l=V(_),u&&u.l(_),s=V(_),a&&a.l(_),t=V(_),f&&f.l(_),_.forEach(c)},m(m,_){h(m,e,_),o&&o.m(e,null),b(e,l),u&&u.m(e,null),b(e,s),a&&a.m(e,null),b(e,t),f&&f.m(e,null),n=!0},p(m,_){m[0].company?o?o.p(m,_):(o=Z(m),o.c(),o.m(e,l)):o&&(o.d(1),o=null),m[0].location?u?u.p(m,_):(u=y(m),u.c(),u.m(e,s)):u&&(u.d(1),u=null),m[0].blog?a?(a.p(m,_),_&1&&g(a,1)):(a=x(m),a.c(),g(a,1),a.m(e,t)):a&&(B(),w(a,1,1,()=>{a=null}),J()),m[0].twitter_username?f?(f.p(m,_),_&1&&g(f,1)):(f=ee(m),f.c(),g(f,1),f.m(e,null)):f&&(B(),w(f,1,1,()=>{f=null}),J())},i(m){n||(g(a),g(f),n=!0)},o(m){w(a),w(f),n=!1},d(m){m&&c(e),o&&o.d(),u&&u.d(),a&&a.d(),f&&f.d()}}}function Z(i){let e,l=i[0].company+"",s;return{c(){e=k("div"),s=F(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=C(e);s=R(n,l),n.forEach(c),this.h()},h(){I(e,"class","text-sm whitespace-nowrap text-slate-500")},m(t,n){h(t,e,n),b(e,s)},p(t,n){n&1&&l!==(l=t[0].company+"")&&T(s,l)},d(t){t&&c(e)}}}function y(i){let e,l=i[0].location+"",s;return{c(){e=k("div"),s=F(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=C(e);s=R(n,l),n.forEach(c),this.h()},h(){I(e,"class","text-sm whitespace-nowrap text-slate-500")},m(t,n){h(t,e,n),b(e,s)},p(t,n){n&1&&l!==(l=t[0].location+"")&&T(s,l)},d(t){t&&c(e)}}}function x(i){let e,l,s;return l=new le({props:{href:i[0].blog,target:"_blank",rel:"noopener noreferrer",$$slots:{default:[oe]},$$scope:{ctx:i}}}),{c(){e=k("div"),S(l.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=C(e);U(l.$$.fragment,n),n.forEach(c),this.h()},h(){I(e,"class","text-sm whitespace-nowrap")},m(t,n){h(t,e,n),z(l,e,null),s=!0},p(t,n){const o={};n&1&&(o.href=t[0].blog),n&3&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){s||(g(l.$$.fragment,t),s=!0)},o(t){w(l.$$.fragment,t),s=!1},d(t){t&&c(e),G(l)}}}function oe(i){let e=i[0].blog+"",l;return{c(){l=F(e)},l(s){l=R(s,e)},m(s,t){h(s,l,t)},p(s,t){t&1&&e!==(e=s[0].blog+"")&&T(l,e)},d(s){s&&c(l)}}}function ee(i){let e,l,s;return l=new le({props:{href:`https://twitter.com/${i[0].twitter_username}`,target:"_blank",rel:"noopener noreferrer",$$slots:{default:[ue]},$$scope:{ctx:i}}}),{c(){e=k("div"),S(l.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=C(e);U(l.$$.fragment,n),n.forEach(c),this.h()},h(){I(e,"class","text-sm whitespace-nowrap")},m(t,n){h(t,e,n),z(l,e,null),s=!0},p(t,n){const o={};n&1&&(o.href=`https://twitter.com/${t[0].twitter_username}`),n&3&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){s||(g(l.$$.fragment,t),s=!0)},o(t){w(l.$$.fragment,t),s=!1},d(t){t&&c(e),G(l)}}}function ue(i){let e=i[0].twitter_username+"",l;return{c(){l=F(e)},l(s){l=R(s,e)},m(s,t){h(s,l,t)},p(s,t){t&1&&e!==(e=s[0].twitter_username+"")&&T(l,e)},d(s){s&&c(l)}}}function ce(i){let e,l,s=i[0].login+"",t,n,o,u,a,f,m,_,N,P,M,H,L,d=i[0].name&&W(i),v=i[0].bio&&X(i);f=new j({props:{count:i[0].followers,suffix:"Followers"}}),_=new j({props:{count:i[0].following,suffix:"Following"}}),P=new j({props:{count:i[0].public_repos,suffix:"Public Repositories"}});let $=(i[0].company||i[0].location||i[0].blog||i[0].twitter_username)&&Y(i);return{c(){e=k("h1"),l=k("div"),t=F(s),n=D(),d&&d.c(),o=D(),v&&v.c(),u=D(),a=k("div"),S(f.$$.fragment),m=D(),S(_.$$.fragment),N=D(),S(P.$$.fragment),M=D(),$&&$.c(),H=Q(),this.h()},l(r){e=E(r,"H1",{});var p=C(e);l=E(p,"DIV",{class:!0});var A=C(l);t=R(A,s),A.forEach(c),n=V(p),d&&d.l(p),p.forEach(c),o=V(r),v&&v.l(r),u=V(r),a=E(r,"DIV",{});var q=C(a);U(f.$$.fragment,q),m=V(q),U(_.$$.fragment,q),N=V(q),U(P.$$.fragment,q),q.forEach(c),M=V(r),$&&$.l(r),H=Q(),this.h()},h(){I(l,"class","text-2xl font-bold")},m(r,p){h(r,e,p),b(e,l),b(l,t),b(e,n),d&&d.m(e,null),h(r,o,p),v&&v.m(r,p),h(r,u,p),h(r,a,p),z(f,a,null),b(a,m),z(_,a,null),b(a,N),z(P,a,null),h(r,M,p),$&&$.m(r,p),h(r,H,p),L=!0},p(r,p){(!L||p&1)&&s!==(s=r[0].login+"")&&T(t,s),r[0].name?d?d.p(r,p):(d=W(r),d.c(),d.m(e,null)):d&&(d.d(1),d=null),r[0].bio?v?v.p(r,p):(v=X(r),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null);const A={};p&1&&(A.count=r[0].followers),f.$set(A);const q={};p&1&&(q.count=r[0].following),_.$set(q);const K={};p&1&&(K.count=r[0].public_repos),P.$set(K),r[0].company||r[0].location||r[0].blog||r[0].twitter_username?$?($.p(r,p),p&1&&g($,1)):($=Y(r),$.c(),g($,1),$.m(H.parentNode,H)):$&&(B(),w($,1,1,()=>{$=null}),J())},i(r){L||(g(f.$$.fragment,r),g(_.$$.fragment,r),g(P.$$.fragment,r),g($),L=!0)},o(r){w(f.$$.fragment,r),w(_.$$.fragment,r),w(P.$$.fragment,r),w($),L=!1},d(r){r&&c(e),d&&d.d(),r&&c(o),v&&v.d(r),r&&c(u),r&&c(a),G(f),G(_),G(P),r&&c(M),$&&$.d(r),r&&c(H)}}}function me(i){let e,l,s,t,n,o,u;return o=new fe({props:{class:"flex flex-col gap-2",$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){e=k("div"),l=k("img"),n=D(),S(o.$$.fragment),this.h()},l(a){e=E(a,"DIV",{class:!0});var f=C(e);l=E(f,"IMG",{src:!0,alt:!0}),f.forEach(c),n=V(a),U(o.$$.fragment,a),this.h()},h(){O(l.src,s=i[0].avatar_url)||I(l,"src",s),I(l,"alt",t=i[0].login),I(e,"class","aspect-square overflow-hidden")},m(a,f){h(a,e,f),b(e,l),h(a,n,f),z(o,a,f),u=!0},p(a,f){(!u||f&1&&!O(l.src,s=a[0].avatar_url))&&I(l,"src",s),(!u||f&1&&t!==(t=a[0].login))&&I(l,"alt",t);const m={};f&3&&(m.$$scope={dirty:f,ctx:a}),o.$set(m)},i(a){u||(g(o.$$.fragment,a),u=!0)},o(a){w(o.$$.fragment,a),u=!1},d(a){a&&c(e),a&&c(n),G(o,a)}}}function _e(i){let e,l;return e=new re({props:{$$slots:{default:[me]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,t){z(e,s,t),l=!0},p(s,[t]){const n={};t&3&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){w(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function pe(i,e,l){let{user:s}=e;return i.$$set=t=>{"user"in t&&l(0,s=t.user)},[s]}class be extends ne{constructor(e){super(),ie(this,e,pe,_e,ae,{user:0})}}export{be as U,ge as f,we as s};
