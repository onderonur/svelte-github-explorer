import{o as te,a as se,C as N}from"./Fetcher.4d542909.js";import{S as ne,i as ie,s as re,y as S,z as U,A as z,g as h,d as b,B as G,k,a as C,l as E,m as I,h as c,c as D,O as K,n as q,b as d,E as w,q as F,e as Q,r as R,u as T,v as O,f as j}from"./index.022d591a.js";import{C as ae,a as fe}from"./CardContent.dd70a5b7.js";import{L as le}from"./Link.78555902.js";async function he(i){return(await te.request("GET /users/{username}",{username:i})).data}async function be(i,e){const s=await te.request(`GET /search/users?q=${encodeURIComponent(`${i} in:login type:user`)}&page=${e}&per_page=30`),t=e>se,n=e*30<s.data.total_count;return{...s.data,hasPreviousPage:t,hasNextPage:n}}function W(i){let e,l=i[0].name+"",s;return{c(){e=k("div"),s=F(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=I(e);s=R(n,l),n.forEach(c),this.h()},h(){q(e,"class","text-lg text-slate-500")},m(t,n){d(t,e,n),w(e,s)},p(t,n){n&1&&l!==(l=t[0].name+"")&&T(s,l)},d(t){t&&c(e)}}}function X(i){let e,l=i[0].bio+"",s;return{c(){e=k("p"),s=F(l)},l(t){e=E(t,"P",{});var n=I(e);s=R(n,l),n.forEach(c)},m(t,n){d(t,e,n),w(e,s)},p(t,n){n&1&&l!==(l=t[0].bio+"")&&T(s,l)},d(t){t&&c(e)}}}function Y(i){let e,l,s,t,n,o=i[0].company&&Z(i),u=i[0].location&&y(i),r=i[0].blog&&x(i),f=i[0].twitter_username&&ee(i);return{c(){e=k("div"),o&&o.c(),l=C(),u&&u.c(),s=C(),r&&r.c(),t=C(),f&&f.c()},l(m){e=E(m,"DIV",{});var _=I(e);o&&o.l(_),l=D(_),u&&u.l(_),s=D(_),r&&r.l(_),t=D(_),f&&f.l(_),_.forEach(c)},m(m,_){d(m,e,_),o&&o.m(e,null),w(e,l),u&&u.m(e,null),w(e,s),r&&r.m(e,null),w(e,t),f&&f.m(e,null),n=!0},p(m,_){m[0].company?o?o.p(m,_):(o=Z(m),o.c(),o.m(e,l)):o&&(o.d(1),o=null),m[0].location?u?u.p(m,_):(u=y(m),u.c(),u.m(e,s)):u&&(u.d(1),u=null),m[0].blog?r?(r.p(m,_),_&1&&h(r,1)):(r=x(m),r.c(),h(r,1),r.m(e,t)):r&&(O(),b(r,1,1,()=>{r=null}),j()),m[0].twitter_username?f?(f.p(m,_),_&1&&h(f,1)):(f=ee(m),f.c(),h(f,1),f.m(e,null)):f&&(O(),b(f,1,1,()=>{f=null}),j())},i(m){n||(h(r),h(f),n=!0)},o(m){b(r),b(f),n=!1},d(m){m&&c(e),o&&o.d(),u&&u.d(),r&&r.d(),f&&f.d()}}}function Z(i){let e,l=i[0].company+"",s;return{c(){e=k("div"),s=F(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=I(e);s=R(n,l),n.forEach(c),this.h()},h(){q(e,"class","text-sm text-slate-500")},m(t,n){d(t,e,n),w(e,s)},p(t,n){n&1&&l!==(l=t[0].company+"")&&T(s,l)},d(t){t&&c(e)}}}function y(i){let e,l=i[0].location+"",s;return{c(){e=k("div"),s=F(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=I(e);s=R(n,l),n.forEach(c),this.h()},h(){q(e,"class","text-sm text-slate-500")},m(t,n){d(t,e,n),w(e,s)},p(t,n){n&1&&l!==(l=t[0].location+"")&&T(s,l)},d(t){t&&c(e)}}}function x(i){let e,l,s;return l=new le({props:{href:i[0].blog,target:"_blank",rel:"noopener noreferrer",class:"text-sm",$$slots:{default:[oe]},$$scope:{ctx:i}}}),{c(){e=k("div"),S(l.$$.fragment)},l(t){e=E(t,"DIV",{});var n=I(e);U(l.$$.fragment,n),n.forEach(c)},m(t,n){d(t,e,n),z(l,e,null),s=!0},p(t,n){const o={};n&1&&(o.href=t[0].blog),n&3&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){s||(h(l.$$.fragment,t),s=!0)},o(t){b(l.$$.fragment,t),s=!1},d(t){t&&c(e),G(l)}}}function oe(i){let e=i[0].blog+"",l;return{c(){l=F(e)},l(s){l=R(s,e)},m(s,t){d(s,l,t)},p(s,t){t&1&&e!==(e=s[0].blog+"")&&T(l,e)},d(s){s&&c(l)}}}function ee(i){let e,l,s;return l=new le({props:{href:`https://twitter.com/${i[0].twitter_username}`,target:"_blank",rel:"noopener noreferrer",class:"text-sm",$$slots:{default:[ue]},$$scope:{ctx:i}}}),{c(){e=k("div"),S(l.$$.fragment)},l(t){e=E(t,"DIV",{});var n=I(e);U(l.$$.fragment,n),n.forEach(c)},m(t,n){d(t,e,n),z(l,e,null),s=!0},p(t,n){const o={};n&1&&(o.href=`https://twitter.com/${t[0].twitter_username}`),n&3&&(o.$$scope={dirty:n,ctx:t}),l.$set(o)},i(t){s||(h(l.$$.fragment,t),s=!0)},o(t){b(l.$$.fragment,t),s=!1},d(t){t&&c(e),G(l)}}}function ue(i){let e=i[0].twitter_username+"",l;return{c(){l=F(e)},l(s){l=R(s,e)},m(s,t){d(s,l,t)},p(s,t){t&1&&e!==(e=s[0].twitter_username+"")&&T(l,e)},d(s){s&&c(l)}}}function ce(i){let e,l,s=i[0].login+"",t,n,o,u,r,f,m,_,M,P,H,A,L,v=i[0].name&&W(i),g=i[0].bio&&X(i);f=new N({props:{count:i[0].followers,suffix:"Followers"}}),_=new N({props:{count:i[0].following,suffix:"Following"}}),P=new N({props:{count:i[0].public_repos,suffix:"Public Repositories"}});let p=(i[0].company||i[0].location||i[0].blog||i[0].twitter_username)&&Y(i);return{c(){e=k("h1"),l=k("div"),t=F(s),n=C(),v&&v.c(),o=C(),g&&g.c(),u=C(),r=k("div"),S(f.$$.fragment),m=C(),S(_.$$.fragment),M=C(),S(P.$$.fragment),H=C(),p&&p.c(),A=Q(),this.h()},l(a){e=E(a,"H1",{});var $=I(e);l=E($,"DIV",{class:!0});var B=I(l);t=R(B,s),B.forEach(c),n=D($),v&&v.l($),$.forEach(c),o=D(a),g&&g.l(a),u=D(a),r=E(a,"DIV",{});var V=I(r);U(f.$$.fragment,V),m=D(V),U(_.$$.fragment,V),M=D(V),U(P.$$.fragment,V),V.forEach(c),H=D(a),p&&p.l(a),A=Q(),this.h()},h(){q(l,"class","text-2xl font-bold text-ellipsis overflow-hidden")},m(a,$){d(a,e,$),w(e,l),w(l,t),w(e,n),v&&v.m(e,null),d(a,o,$),g&&g.m(a,$),d(a,u,$),d(a,r,$),z(f,r,null),w(r,m),z(_,r,null),w(r,M),z(P,r,null),d(a,H,$),p&&p.m(a,$),d(a,A,$),L=!0},p(a,$){(!L||$&1)&&s!==(s=a[0].login+"")&&T(t,s),a[0].name?v?v.p(a,$):(v=W(a),v.c(),v.m(e,null)):v&&(v.d(1),v=null),a[0].bio?g?g.p(a,$):(g=X(a),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null);const B={};$&1&&(B.count=a[0].followers),f.$set(B);const V={};$&1&&(V.count=a[0].following),_.$set(V);const J={};$&1&&(J.count=a[0].public_repos),P.$set(J),a[0].company||a[0].location||a[0].blog||a[0].twitter_username?p?(p.p(a,$),$&1&&h(p,1)):(p=Y(a),p.c(),h(p,1),p.m(A.parentNode,A)):p&&(O(),b(p,1,1,()=>{p=null}),j())},i(a){L||(h(f.$$.fragment,a),h(_.$$.fragment,a),h(P.$$.fragment,a),h(p),L=!0)},o(a){b(f.$$.fragment,a),b(_.$$.fragment,a),b(P.$$.fragment,a),b(p),L=!1},d(a){a&&c(e),v&&v.d(),a&&c(o),g&&g.d(a),a&&c(u),a&&c(r),G(f),G(_),G(P),a&&c(H),p&&p.d(a),a&&c(A)}}}function me(i){let e,l,s,t,n,o,u;return o=new fe({props:{class:"space-y-2",$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){e=k("div"),l=k("img"),n=C(),S(o.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var f=I(e);l=E(f,"IMG",{src:!0,alt:!0}),f.forEach(c),n=D(r),U(o.$$.fragment,r),this.h()},h(){K(l.src,s=i[0].avatar_url)||q(l,"src",s),q(l,"alt",t=i[0].login),q(e,"class","aspect-square overflow-hidden")},m(r,f){d(r,e,f),w(e,l),d(r,n,f),z(o,r,f),u=!0},p(r,f){(!u||f&1&&!K(l.src,s=r[0].avatar_url))&&q(l,"src",s),(!u||f&1&&t!==(t=r[0].login))&&q(l,"alt",t);const m={};f&3&&(m.$$scope={dirty:f,ctx:r}),o.$set(m)},i(r){u||(h(o.$$.fragment,r),u=!0)},o(r){b(o.$$.fragment,r),u=!1},d(r){r&&c(e),r&&c(n),G(o,r)}}}function _e(i){let e,l;return e=new ae({props:{title:i[0].login,$$slots:{default:[me]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,t){z(e,s,t),l=!0},p(s,[t]){const n={};t&1&&(n.title=s[0].login),t&3&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){l||(h(e.$$.fragment,s),l=!0)},o(s){b(e.$$.fragment,s),l=!1},d(s){G(e,s)}}}function $e(i,e,l){let{user:s}=e;return i.$$set=t=>{"user"in t&&l(0,s=t.user)},[s]}class we extends ne{constructor(e){super(),ie(this,e,$e,_e,re,{user:0})}}export{we as U,he as f,be as s};
