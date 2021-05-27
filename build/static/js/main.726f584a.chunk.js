(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{59:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(26),i=c.n(n),o=c(8),a=(c(59),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("bdd96d5d43284fbeacf17b9b84fb5930","&redirect_uri=").concat("https://spotify-clone-b1476.web.app/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),r=c(1),l=function(){return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"spotify logo"}),Object(r.jsx)("a",{href:a,children:"LOGIN WITH SPOTIFY"})]})},j=(c(61),c(36)),d=c.n(j),b=(c(62),c(90)),u=(c(63),c(28)),O=c.n(u),x=Object(s.createContext)(),h=function(e){var t=e.initialState,c=e.reducer,n=e.children;return Object(r.jsx)(x.Provider,{value:Object(s.useReducer)(c,t),children:n})},f=function(){return Object(s.useContext)(x)},p=function(){var e,t=f(),c=Object(o.a)(t,2),s=c[0],n=s.user;s.token,c[1];return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"header__left",children:[Object(r.jsx)(O.a,{}),Object(r.jsx)("input",{placeholder:"Search for Artists, Songs or Podcasts",type:"text"})]}),Object(r.jsxs)("div",{className:"header__right",children:[Object(r.jsx)(b.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:"user icon"}),Object(r.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})},m=c(39),_=c.n(m),v=c(40),y=c.n(v),g=c(41),N=c.n(g),S=(c(69),function(e){var t=e.track,c=void 0===t?"text":t;return Object(r.jsxs)("div",{className:"songRow",children:[Object(r.jsx)("img",{className:"songRow__album",src:c.album.images[0].url,alt:"songs"}),Object(r.jsxs)("div",{className:"songRow__info",children:[Object(r.jsx)("h1",{children:c.name}),Object(r.jsx)("p",{children:c.artists.map((function(e){return e.name})).join(", ")}),c.album.name]})]})}),k=function(e){var t=e.spotify,c=f(),s=Object(o.a)(c,2),n=s[0].discover_weekly;s[1];return Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)(p,{spotify:t}),Object(r.jsxs)("div",{className:"body__info",children:[Object(r.jsx)("img",{src:null===n||void 0===n?void 0:n.images[0].url,alt:"weekly icon"}),Object(r.jsxs)("div",{className:"body__infoText",children:[Object(r.jsx)("strong",{children:"PLAYLIST"}),Object(r.jsx)("h2",{children:"Discover Weekly"}),Object(r.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})]}),Object(r.jsxs)("div",{className:"body__songs",children:[Object(r.jsxs)("div",{className:"body__icons",children:[Object(r.jsx)(_.a,{className:"body__shuffle"}),Object(r.jsx)(y.a,{fontSize:"large"}),Object(r.jsx)(N.a,{})]}),null===n||void 0===n?void 0:n.tracks.items.map((function(e){return Object(r.jsx)(S,{track:e.track})}))]})]})},w=(c(70),c(44)),E=c.n(w),T=c(43),I=c.n(T),L=c(45),R=c.n(L),A=c(42),P=c.n(A),Y=c(47),D=c.n(Y),C=c(48),U=c.n(C),K=c(46),W=c.n(K),z=c(88),H=c(89),B=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsxs)("div",{className:"footer__left",children:[Object(r.jsx)("img",{src:"https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=v2&px=999",alt:"album cover",className:"footer__albumLogo"}),Object(r.jsxs)("div",{className:"footer__songInfo",children:[Object(r.jsx)("h4",{children:"Yeah!"}),Object(r.jsx)("p",{children:"Usher"})]})]}),Object(r.jsxs)("div",{className:"footer__center",children:[Object(r.jsx)(P.a,{className:"footer__green"}),Object(r.jsx)(I.a,{className:"footer__icon"}),Object(r.jsx)(E.a,{fontSize:"large",className:"footer__icon"}),Object(r.jsx)(R.a,{className:"footer__icon"}),Object(r.jsx)(W.a,{className:"footer__icon footer__green "})]}),Object(r.jsx)("div",{className:"footer__right",children:Object(r.jsxs)(z.a,{container:!0,spacing:2,children:[Object(r.jsx)(z.a,{item:!0,children:Object(r.jsx)(D.a,{})}),Object(r.jsx)(z.a,{item:!0,children:Object(r.jsx)(U.a,{})}),Object(r.jsx)(z.a,{item:!0,xs:!0,children:Object(r.jsx)(H.a,{"aria-labelledby":"continuous-slider"})})]})})]})},J=(c(71),c(72),c(73),function(e){var t=e.title,c=e.Icon;return Object(r.jsxs)("div",{className:"sidebarOption",children:[c&&Object(r.jsx)(c,{className:"sidebarOption__icon"}),c?Object(r.jsx)("h4",{children:t}):Object(r.jsx)("p",{children:t})]})}),V=c(49),q=c.n(V),F=c(50),G=c.n(F),M=function(){var e,t=f(),c=Object(o.a)(t,2),s=c[0].playlists;c[1];return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"spotify logo"}),Object(r.jsx)(J,{title:"Home",Icon:q.a}),Object(r.jsx)(J,{title:"Search",Icon:O.a}),Object(r.jsx)(J,{title:"Your Library",Icon:G.a}),Object(r.jsx)("br",{}),Object(r.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(r.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)(J,{title:e.name})}))]})},Q=function(e){var t=e.spotify;return Object(r.jsxs)("div",{className:"player",children:[Object(r.jsxs)("div",{className:"player__body",children:[Object(r.jsx)(M,{}),Object(r.jsx)(k,{spotify:t})]}),Object(r.jsx)(B,{})]})},X=new d.a,Z=function(){var e=f(),t=Object(o.a)(e,2),c=t[0],n=c.user,i=c.token,a=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(a({type:"SET_TOKEN",token:t}),X.setAccessToken(t),X.getMe().then((function(e){a({type:"SET_USER",user:e})})).catch((function(e){console.log("Some error occured!",e)})),X.getUserPlaylists().then((function(e){console.log(e),a({type:"SET_PLAYLISTS",playlists:e})})),X.getPlaylist("0bD81Rwh7oWKLoDsIHU5Bc").then((function(e){a({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})).catch((function(){})))}),[]),console.log("DataLayer user",n),console.log("Token",i),Object(r.jsx)("div",{className:"app",children:i?Object(r.jsx)(Q,{spotify:X}):Object(r.jsx)(l,{})})},$=(c(74),c(14)),ee=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object($.a)(Object($.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object($.a)(Object($.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object($.a)(Object($.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};i.a.render(Object(r.jsx)(h,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null},reducer:ee,children:Object(r.jsx)(Z,{})}),document.querySelector("#root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.726f584a.chunk.js.map