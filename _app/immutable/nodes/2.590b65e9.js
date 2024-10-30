import{S as se,i as fe,s as re,y as F,z as q,A as H,g,d as h,B as L,k,a as D,l as E,m as I,h as c,c as V,M as W,n as C,b as p,E as w,q as S,e as X,r as U,u as z,v as O,f as Q,L as ie,H as ae,I as oe,J as ue,K as me}from"../chunks/index.2b8aeec7.js";import{p as ce}from"../chunks/stores.14f9a157.js";import{f as $e}from"../chunks/UserUtils.6d895d26.js";import{C as _e,a as pe}from"../chunks/CardContent.18784206.js";import{C as j}from"../chunks/Count.4ec8eabf.js";import{L as ne}from"../chunks/Link.23221310.js";import{F as de}from"../chunks/Fetcher.46f489eb.js";import{H as ge}from"../chunks/Head.cea43cd1.js";function Y(n){let e,l=n[0].name+"",s;return{c(){e=k("div"),s=S(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var f=I(e);s=U(f,l),f.forEach(c),this.h()},h(){C(e,"class","text-lg text-slate-500")},m(t,f){p(t,e,f),w(e,s)},p(t,f){f&1&&l!==(l=t[0].name+"")&&z(s,l)},d(t){t&&c(e)}}}function Z(n){let e,l=n[0].bio+"",s;return{c(){e=k("p"),s=S(l)},l(t){e=E(t,"P",{});var f=I(e);s=U(f,l),f.forEach(c)},m(t,f){p(t,e,f),w(e,s)},p(t,f){f&1&&l!==(l=t[0].bio+"")&&z(s,l)},d(t){t&&c(e)}}}function y(n){let e,l,s,t,f,a=n[0].company&&x(n),u=n[0].location&&ee(n),r=n[0].blog&&te(n),o=n[0].twitter_username&&le(n);return{c(){e=k("div"),a&&a.c(),l=D(),u&&u.c(),s=D(),r&&r.c(),t=D(),o&&o.c()},l(m){e=E(m,"DIV",{});var $=I(e);a&&a.l($),l=V($),u&&u.l($),s=V($),r&&r.l($),t=V($),o&&o.l($),$.forEach(c)},m(m,$){p(m,e,$),a&&a.m(e,null),w(e,l),u&&u.m(e,null),w(e,s),r&&r.m(e,null),w(e,t),o&&o.m(e,null),f=!0},p(m,$){m[0].company?a?a.p(m,$):(a=x(m),a.c(),a.m(e,l)):a&&(a.d(1),a=null),m[0].location?u?u.p(m,$):(u=ee(m),u.c(),u.m(e,s)):u&&(u.d(1),u=null),m[0].blog?r?(r.p(m,$),$&1&&g(r,1)):(r=te(m),r.c(),g(r,1),r.m(e,t)):r&&(O(),h(r,1,1,()=>{r=null}),Q()),m[0].twitter_username?o?(o.p(m,$),$&1&&g(o,1)):(o=le(m),o.c(),g(o,1),o.m(e,null)):o&&(O(),h(o,1,1,()=>{o=null}),Q())},i(m){f||(g(r),g(o),f=!0)},o(m){h(r),h(o),f=!1},d(m){m&&c(e),a&&a.d(),u&&u.d(),r&&r.d(),o&&o.d()}}}function x(n){let e,l=n[0].company+"",s;return{c(){e=k("div"),s=S(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var f=I(e);s=U(f,l),f.forEach(c),this.h()},h(){C(e,"class","text-sm text-slate-500")},m(t,f){p(t,e,f),w(e,s)},p(t,f){f&1&&l!==(l=t[0].company+"")&&z(s,l)},d(t){t&&c(e)}}}function ee(n){let e,l=n[0].location+"",s;return{c(){e=k("div"),s=S(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var f=I(e);s=U(f,l),f.forEach(c),this.h()},h(){C(e,"class","text-sm text-slate-500")},m(t,f){p(t,e,f),w(e,s)},p(t,f){f&1&&l!==(l=t[0].location+"")&&z(s,l)},d(t){t&&c(e)}}}function te(n){let e,l,s;return l=new ne({props:{href:n[0].blog,target:"_blank",rel:"noopener noreferrer",class:"text-sm",$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){e=k("div"),F(l.$$.fragment)},l(t){e=E(t,"DIV",{});var f=I(e);q(l.$$.fragment,f),f.forEach(c)},m(t,f){p(t,e,f),H(l,e,null),s=!0},p(t,f){const a={};f&1&&(a.href=t[0].blog),f&3&&(a.$$scope={dirty:f,ctx:t}),l.$set(a)},i(t){s||(g(l.$$.fragment,t),s=!0)},o(t){h(l.$$.fragment,t),s=!1},d(t){t&&c(e),L(l)}}}function he(n){let e=n[0].blog+"",l;return{c(){l=S(e)},l(s){l=U(s,e)},m(s,t){p(s,l,t)},p(s,t){t&1&&e!==(e=s[0].blog+"")&&z(l,e)},d(s){s&&c(l)}}}function le(n){let e,l,s;return l=new ne({props:{href:`https://twitter.com/${n[0].twitter_username}`,target:"_blank",rel:"noopener noreferrer",class:"text-sm",$$slots:{default:[ve]},$$scope:{ctx:n}}}),{c(){e=k("div"),F(l.$$.fragment)},l(t){e=E(t,"DIV",{});var f=I(e);q(l.$$.fragment,f),f.forEach(c)},m(t,f){p(t,e,f),H(l,e,null),s=!0},p(t,f){const a={};f&1&&(a.href=`https://twitter.com/${t[0].twitter_username}`),f&3&&(a.$$scope={dirty:f,ctx:t}),l.$set(a)},i(t){s||(g(l.$$.fragment,t),s=!0)},o(t){h(l.$$.fragment,t),s=!1},d(t){t&&c(e),L(l)}}}function ve(n){let e=n[0].twitter_username+"",l;return{c(){l=S(e)},l(s){l=U(s,e)},m(s,t){p(s,l,t)},p(s,t){t&1&&e!==(e=s[0].twitter_username+"")&&z(l,e)},d(s){s&&c(l)}}}function be(n){let e,l,s=n[0].login+"",t,f,a,u,r,o,m,$,K,M,R,N,J,A,B,v=n[0].name&&Y(n),b=n[0].bio&&Z(n);$=new j({props:{count:n[0].followers,suffix:"Followers"}}),M=new j({props:{count:n[0].following,suffix:"Following"}}),N=new j({props:{count:n[0].public_repos,suffix:"Public Repositories"}});let d=(n[0].company||n[0].location||n[0].blog||n[0].twitter_username)&&y(n);return{c(){e=k("h1"),l=k("div"),t=S(s),f=D(),v&&v.c(),a=D(),u=k("p"),r=D(),b&&b.c(),o=D(),m=k("div"),F($.$$.fragment),K=D(),F(M.$$.fragment),R=D(),F(N.$$.fragment),J=D(),d&&d.c(),A=X(),this.h()},l(i){e=E(i,"H1",{});var _=I(e);l=E(_,"DIV",{class:!0});var G=I(l);t=U(G,s),G.forEach(c),f=V(_),v&&v.l(_),_.forEach(c),a=V(i),u=E(i,"P",{}),I(u).forEach(c),r=V(i),b&&b.l(i),o=V(i),m=E(i,"DIV",{});var P=I(m);q($.$$.fragment,P),K=V(P),q(M.$$.fragment,P),R=V(P),q(N.$$.fragment,P),P.forEach(c),J=V(i),d&&d.l(i),A=X(),this.h()},h(){C(l,"class","text-2xl font-bold text-ellipsis overflow-hidden")},m(i,_){p(i,e,_),w(e,l),w(l,t),w(e,f),v&&v.m(e,null),p(i,a,_),p(i,u,_),p(i,r,_),b&&b.m(i,_),p(i,o,_),p(i,m,_),H($,m,null),w(m,K),H(M,m,null),w(m,R),H(N,m,null),p(i,J,_),d&&d.m(i,_),p(i,A,_),B=!0},p(i,_){(!B||_&1)&&s!==(s=i[0].login+"")&&z(t,s),i[0].name?v?v.p(i,_):(v=Y(i),v.c(),v.m(e,null)):v&&(v.d(1),v=null),i[0].bio?b?b.p(i,_):(b=Z(i),b.c(),b.m(o.parentNode,o)):b&&(b.d(1),b=null);const G={};_&1&&(G.count=i[0].followers),$.$set(G);const P={};_&1&&(P.count=i[0].following),M.$set(P);const T={};_&1&&(T.count=i[0].public_repos),N.$set(T),i[0].company||i[0].location||i[0].blog||i[0].twitter_username?d?(d.p(i,_),_&1&&g(d,1)):(d=y(i),d.c(),g(d,1),d.m(A.parentNode,A)):d&&(O(),h(d,1,1,()=>{d=null}),Q())},i(i){B||(g($.$$.fragment,i),g(M.$$.fragment,i),g(N.$$.fragment,i),g(d),B=!0)},o(i){h($.$$.fragment,i),h(M.$$.fragment,i),h(N.$$.fragment,i),h(d),B=!1},d(i){i&&c(e),v&&v.d(),i&&c(a),i&&c(u),i&&c(r),b&&b.d(i),i&&c(o),i&&c(m),L($),L(M),L(N),i&&c(J),d&&d.d(i),i&&c(A)}}}function we(n){let e,l,s,t,f,a,u;return a=new pe({props:{class:"flex flex-col gap-2",$$slots:{default:[be]},$$scope:{ctx:n}}}),{c(){e=k("div"),l=k("img"),f=D(),F(a.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=I(e);l=E(o,"IMG",{src:!0,alt:!0}),o.forEach(c),f=V(r),q(a.$$.fragment,r),this.h()},h(){W(l.src,s=n[0].avatar_url)||C(l,"src",s),C(l,"alt",t=n[0].login),C(e,"class","aspect-square overflow-hidden")},m(r,o){p(r,e,o),w(e,l),p(r,f,o),H(a,r,o),u=!0},p(r,o){(!u||o&1&&!W(l.src,s=r[0].avatar_url))&&C(l,"src",s),(!u||o&1&&t!==(t=r[0].login))&&C(l,"alt",t);const m={};o&3&&(m.$$scope={dirty:o,ctx:r}),a.$set(m)},i(r){u||(g(a.$$.fragment,r),u=!0)},o(r){h(a.$$.fragment,r),u=!1},d(r){r&&c(e),r&&c(f),L(a,r)}}}function ke(n){let e,l;return e=new _e({props:{title:n[0].login,$$slots:{default:[we]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,t){H(e,s,t),l=!0},p(s,[t]){const f={};t&1&&(f.title=s[0].login),t&3&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){L(e,s)}}}function Ee(n,e,l){let{user:s}=e;return n.$$set=t=>{"user"in t&&l(0,s=t.user)},[s]}class Ie extends se{constructor(e){super(),fe(this,e,Ee,ke,re,{user:0})}}function De(n){let e,l,s,t,f;s=new Ie({props:{user:n[5]}});const a=n[3].default,u=ae(a,n,n[4],null);return{c(){e=k("div"),l=k("div"),F(s.$$.fragment),t=D(),u&&u.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=I(e);l=E(o,"DIV",{class:!0});var m=I(l);q(s.$$.fragment,m),m.forEach(c),t=V(o),u&&u.l(o),o.forEach(c),this.h()},h(){C(l,"class","mx-auto md:mx-0 max-w-xs md:max-w-none"),C(e,"class","grid md:grid-cols-[theme(spacing.72)_1fr] gap-4")},m(r,o){p(r,e,o),w(e,l),H(s,l,null),w(e,t),u&&u.m(e,null),f=!0},p(r,o){const m={};o&32&&(m.user=r[5]),s.$set(m),u&&u.p&&(!f||o&16)&&oe(u,a,r,r[4],f?me(a,r[4],o,null):ue(r[4]),null)},i(r){f||(g(s.$$.fragment,r),g(u,r),f=!0)},o(r){h(s.$$.fragment,r),h(u,r),f=!1},d(r){r&&c(e),L(s),u&&u.d(r)}}}function Ve(n){let e,l,s,t;return e=new ge({props:{title:n[0]}}),s=new de({props:{fetcherFn:n[1],$$slots:{default:[De,({data:f})=>({5:f}),({data:f})=>f?32:0]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment),l=D(),F(s.$$.fragment)},l(f){q(e.$$.fragment,f),l=V(f),q(s.$$.fragment,f)},m(f,a){H(e,f,a),p(f,l,a),H(s,f,a),t=!0},p(f,[a]){const u={};a&1&&(u.title=f[0]),e.$set(u);const r={};a&2&&(r.fetcherFn=f[1]),a&48&&(r.$$scope={dirty:a,ctx:f}),s.$set(r)},i(f){t||(g(e.$$.fragment,f),g(s.$$.fragment,f),t=!0)},o(f){h(e.$$.fragment,f),h(s.$$.fragment,f),t=!1},d(f){L(e,f),f&&c(l),L(s,f)}}}function Ce(n,e,l){let s;ie(n,ce,r=>l(2,s=r));let{$$slots:t={},$$scope:f}=e,a,u;return n.$$set=r=>{"$$scope"in r&&l(4,f=r.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&(l(0,a=s.params.username),l(1,u=$e(a)))},[a,u,s,t,f]}class Ue extends se{constructor(e){super(),fe(this,e,Ce,Ve,re,{})}}export{Ue as component};