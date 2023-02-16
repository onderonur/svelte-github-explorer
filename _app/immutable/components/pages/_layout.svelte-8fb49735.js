import{S as V,i as y,s as z,R,T as U,m as p,h as u,n as l,b as M,U as m,V as N,k as v,a as H,x as B,l as x,c as L,y as D,z as I,W as Z,f as w,t as b,A,X as J,q as G,r as P,Y as Q,Z as ee,_ as te}from"../../chunks/singletons-17689f61.js";import{L as X}from"../../chunks/Link-05a31a84.js";import{B as se,g as ae}from"../../chunks/Button-69b3ec48.js";import{r as Y}from"../../chunks/RoutingUtils-f9a2c730.js";import{H as re}from"../../chunks/Head-751ec862.js";function ne(n){let e,s;return{c(){e=R("svg"),s=R("path"),this.h()},l(t){e=U(t,"svg",{viewBox:!0,class:!0});var a=p(e);s=U(a,"path",{d:!0}),p(s).forEach(u),a.forEach(u),this.h()},h(){l(s,"d","M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"),l(e,"viewBox","0 0 24 24"),l(e,"class",n[0])},m(t,a){M(t,e,a),m(e,s)},p(t,[a]){a&1&&l(e,"class",t[0])},i:N,o:N,d(t){t&&u(e)}}}function le(n,e,s){let{class:t=""}=e;return n.$$set=a=>{"class"in a&&s(0,t=a.class)},[t]}class oe extends V{constructor(e){super(),y(this,e,le,ne,z,{class:0})}}function ce(n){let e,s;return e=new oe({props:{class:"h-6 w-6 fill-emerald-800"}}),{c(){B(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,a){I(e,t,a),s=!0},p:N,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function fe(n){let e,s,t,a,o,_,h,T;return o=new se({props:{type:"submit",class:"rounded-l-none ",$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){e=v("form"),s=v("div"),t=v("input"),a=H(),B(o.$$.fragment),this.h()},l(c){e=x(c,"FORM",{class:!0,autocomplete:!0});var i=p(e);s=x(i,"DIV",{class:!0});var d=p(s);t=x(d,"INPUT",{class:!0,name:!0,placeholder:!0}),a=L(d),D(o.$$.fragment,d),d.forEach(u),i.forEach(u),this.h()},h(){l(t,"class","flex-1 p-2 px-3 md:text-lg rounded-md rounded-r-none border border-r-0"),l(t,"name","username"),l(t,"placeholder","Type a username to search..."),l(s,"class","flex"),l(e,"class","max-w-2xl w-full mx-auto"),e.noValidate=!0,l(e,"autocomplete","off")},m(c,i){M(c,e,i),m(e,s),m(s,t),m(s,a),I(o,s,null),_=!0,h||(T=Z(e,"submit",n[0]),h=!0)},p(c,[i]){const d={};i&2&&(d.$$scope={dirty:i,ctx:c}),o.$set(d)},i(c){_||(w(o.$$.fragment,c),_=!0)},o(c){b(o.$$.fragment,c),_=!1},d(c){c&&u(e),A(o),h=!1,T()}}}function ue(n){function e(s){s.preventDefault();const a=new FormData(s.currentTarget).get("username");ae(Y.home({username:a}))}return[e]}class ie extends V{constructor(e){super(),y(this,e,ue,fe,z,{})}}function me(n){let e,s;return{c(){e=R("svg"),s=R("path"),this.h()},l(t){e=U(t,"svg",{viewBox:!0,class:!0});var a=p(e);s=U(a,"path",{d:!0}),p(s).forEach(u),a.forEach(u),this.h()},h(){l(s,"d","M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"),l(e,"viewBox","0 0 24 24"),l(e,"class",n[0])},m(t,a){M(t,e,a),m(e,s)},p(t,[a]){a&1&&l(e,"class",t[0])},i:N,o:N,d(t){t&&u(e)}}}function $e(n,e,s){let{class:t=""}=e;return n.$$set=a=>{"class"in a&&s(0,t=a.class)},[t]}class he extends V{constructor(e){super(),y(this,e,$e,me,z,{class:0})}}function de(n){let e;return{c(){e=G("svelte-github-explorer")},l(s){e=P(s,"svelte-github-explorer")},m(s,t){M(s,e,t)},d(s){s&&u(e)}}}function pe(n){let e,s;return e=new he({}),{c(){B(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,a){I(e,t,a),s=!0},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function ge(n){let e,s,t,a,o,_,h,T,c,i,d,C,E,O,g,q,F;e=new re({}),o=new X({props:{href:Y.home(),class:"text-white font-semibold text-xl md:text-2xl",$$slots:{default:[de]},$$scope:{ctx:n}}}),h=new X({props:{href:"https://github.com/onderonur/svelte-github-explorer",target:"_blank",rel:"noopener noreferrer",class:"h-7 w-7 md:h-8 md:w-8 fill-white",$$slots:{default:[pe]},$$scope:{ctx:n}}}),i=new ie({});const K=n[0].default,$=J(K,n,n[1],null);return{c(){B(e.$$.fragment),s=H(),t=v("div"),a=v("header"),B(o.$$.fragment),_=H(),B(h.$$.fragment),T=H(),c=v("main"),B(i.$$.fragment),d=H(),$&&$.c(),C=H(),E=v("footer"),O=G(`Built with
		`),g=v("a"),q=G("SvelteKit"),this.h()},l(r){D(e.$$.fragment,r),s=L(r),t=x(r,"DIV",{class:!0});var f=p(t);a=x(f,"HEADER",{class:!0});var k=p(a);D(o.$$.fragment,k),_=L(k),D(h.$$.fragment,k),k.forEach(u),T=L(f),c=x(f,"MAIN",{class:!0});var S=p(c);D(i.$$.fragment,S),d=L(S),$&&$.l(S),S.forEach(u),C=L(f),E=x(f,"FOOTER",{class:!0});var j=p(E);O=P(j,`Built with
		`),g=x(j,"A",{href:!0,target:!0,rel:!0,class:!0});var W=p(g);q=P(W,"SvelteKit"),W.forEach(u),j.forEach(u),f.forEach(u),this.h()},h(){l(a,"class","h-12 md:h-14 bg-slate-700 flex items-center justify-between gap-4 p-4"),l(c,"class","max-w-screen-xl mx-auto p-2 md:p-3 w-full flex flex-col gap-2 md:gap-3"),l(g,"href","https://kit.svelte.dev/"),l(g,"target","_blank"),l(g,"rel","noopener noreferrer"),l(g,"class","underline ml-1"),l(E,"class","h-14 md:h-16 mt-8 bg-slate-200 flex items-center p-4 text-slate-600 text-sm md:text-base"),l(t,"class","min-h-screen grid grid-rows-[auto_1fr_auto]")},m(r,f){I(e,r,f),M(r,s,f),M(r,t,f),m(t,a),I(o,a,null),m(a,_),I(h,a,null),m(t,T),m(t,c),I(i,c,null),m(c,d),$&&$.m(c,null),m(t,C),m(t,E),m(E,O),m(E,g),m(g,q),F=!0},p(r,[f]){const k={};f&2&&(k.$$scope={dirty:f,ctx:r}),o.$set(k);const S={};f&2&&(S.$$scope={dirty:f,ctx:r}),h.$set(S),$&&$.p&&(!F||f&2)&&Q($,K,r,r[1],F?te(K,r[1],f,null):ee(r[1]),null)},i(r){F||(w(e.$$.fragment,r),w(o.$$.fragment,r),w(h.$$.fragment,r),w(i.$$.fragment,r),w($,r),F=!0)},o(r){b(e.$$.fragment,r),b(o.$$.fragment,r),b(h.$$.fragment,r),b(i.$$.fragment,r),b($,r),F=!1},d(r){A(e,r),r&&u(s),r&&u(t),A(o),A(h),A(i),$&&$.d(r)}}}function _e(n,e,s){let{$$slots:t={},$$scope:a}=e;return n.$$set=o=>{"$$scope"in o&&s(1,a=o.$$scope)},[t,a]}class ke extends V{constructor(e){super(),y(this,e,_e,ge,z,{})}}export{ke as default};
