(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,r){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__18L2N",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__3QLzS"}},12:function(e,t,r){e.exports={error:"ErrorQuery_error__2RU-E",text:"ErrorQuery_text__1HpKe"}},13:function(e,t,r){e.exports={text:"Idel_text__1z2dN",icon:"Idel_icon__2_6Fi"}},14:function(e,t,r){e.exports={overlay:"Modal_overlay__11rIq",modal:"Modal_modal__3_xjx"}},16:function(e,t,r){e.exports={Style:"App_Style__2E_j-"}},18:function(e,t,r){e.exports={loader:"Loader_loader__LYZxK"}},20:function(e,t,r){e.exports={imageGallery:"ImageGallery_imageGallery__3LR8w"}},21:function(e,t,r){e.exports={button:"Button_button__wRZ6d"}},26:function(e,t,r){},5:function(e,t,r){e.exports={searchbar:"Searchbar_searchbar__3UNB6",searchForm:"Searchbar_searchForm__3lCs2",searchFormButton:"Searchbar_searchFormButton__3-214",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3WC8V",searchFormInput:"Searchbar_searchFormInput__2yEfa"}},58:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(4),l=r.n(c),o=(r(26),r(15)),s=r(3),i=r(16),u=r(9),m=(r(27),r(28),r(5)),b=r.n(m),j=r(1),g=function(e){var t=e.onSubmit,r=Object(a.useState)(""),n=Object(s.a)(r,2),c=n[0],l=n[1];return Object(j.jsx)("header",{className:b.a.searchbar,children:Object(j.jsxs)("form",{className:b.a.searchForm,onSubmit:function(e){e.preventDefault(),t(c),l("")},children:[Object(j.jsx)("button",{type:"submit",className:b.a.searchFormButton,children:Object(j.jsx)("span",{className:b.a.searchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){l(e.currentTarget.value)},value:c})]})})},d=r(11),h=r.n(d);function f(e){var t=e.id,r=e.largeImageURL,a=e.webformatURL,n=e.tags,c=e.toggleModal,l=e.onImgClick;return Object(j.jsx)("li",{className:h.a.imageGalleryItem,onClick:l,"data-action":r,children:Object(j.jsx)("img",{src:a,alt:n,className:h.a.imageGalleryItemImage,onClick:c})},t)}var p=r(12),O=r.p+"static/media/sadcat.3fe9e899.jpg";function x(e){var t=e.message;return Object(j.jsxs)("div",{role:"alert",className:p.error,children:[Object(j.jsx)("p",{className:p.text,children:t}),Object(j.jsx)("img",{src:O,width:"240",alt:"bad query"})]})}var _,v,y,E,w,I,S,N,L,C,k,F,R,B,G,M,P=r(17),U=r.n(P),T=r(18),Y=function(){return Object(j.jsx)("div",{className:T.loader,children:Object(j.jsx)(U.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})},q=["title","titleId"];function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function A(e,t){var r=e.title,n=e.titleId,c=K(e,q);return a.createElement("svg",z({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 155.139 155.139",style:{enableBackground:"new 0 0 155.139 155.139"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,_||(_=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M114.588,45.42h28.17L97.338,0l-45.42,45.42h28.516C76.4,98.937,48.529,142.173,12.381,152.686 c5.513,1.605,11.224,2.452,17.071,2.452C73.601,155.139,109.94,107.111,114.588,45.42z"})))),v||(v=a.createElement("g",null)),y||(y=a.createElement("g",null)),E||(E=a.createElement("g",null)),w||(w=a.createElement("g",null)),I||(I=a.createElement("g",null)),S||(S=a.createElement("g",null)),N||(N=a.createElement("g",null)),L||(L=a.createElement("g",null)),C||(C=a.createElement("g",null)),k||(k=a.createElement("g",null)),F||(F=a.createElement("g",null)),R||(R=a.createElement("g",null)),B||(B=a.createElement("g",null)),G||(G=a.createElement("g",null)),M||(M=a.createElement("g",null)))}var Q=a.forwardRef(A),H=(r.p,r(13)),J=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(Q,{width:"40",fill:"red",className:H.icon}),Object(j.jsx)("p",{className:H.text,children:"Please, enter your search"})]})},Z=r(19),D=r.n(Z),V=r(20);function W(e){var t=e.status,r=e.imgArr,a=e.toggleModal,n=e.onImgClick,c=e.error;return"idle"===t?Object(j.jsx)(J,{}):"pending"===t?Object(j.jsx)(Y,{}):"rejected"===t?Object(j.jsx)(x,{message:c}):"resolved"===t?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:V.imageGallery,children:r.map((function(e){var t=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(j.jsx)(f,{toggleModal:a,onImgClick:n,id:D.a.generate(),webformatURL:t,largeImageURL:r,tags:c})}))})}):void 0}var X=r(14),$=document.querySelector("#modal-root"),ee=function(e){var t=e.children,r=e.onClose;Object(a.useEffect)((function(){var e=function(e){"Escape"===e.code&&r()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));return Object(c.createPortal)(Object(j.jsx)("div",{className:X.overlay,onClick:function(e){e.currentTarget===e.target&&r()},children:Object(j.jsx)("div",{className:X.modal,children:t})}),$)},te=r(21);function re(e){var t=e.onLoadMore;return Object(j.jsx)("button",{type:"button",onClick:t,className:te.button,children:"Load more"})}var ae={pageNumber:1,KEY:"22290426-07a1b6b21ce6d6b5919cefbe3",URL:"https://pixabay.com/api/",TYPE_PIC:"image_type=photo&orientation=horizontal"};var ne={fetchImg:function(e){return fetch("".concat(ae.URL,"?q=").concat(e,"&page=").concat(ae.pageNumber,"&key=").concat(ae.KEY,"&").concat(ae.TYPE_PIC,"&per_page=12\n")).then((function(e){return e.json()}))}},ce=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(!1),l=Object(s.a)(c,2),m=l[0],b=l[1],d=Object(a.useState)(null),h=Object(s.a)(d,2),f=h[0],p=h[1],O=Object(a.useState)(null),x=Object(s.a)(O,2),_=x[0],v=x[1],y=Object(a.useState)("idle"),E=Object(s.a)(y,2),w=E[0],I=E[1],S=Object(a.useState)([]),N=Object(s.a)(S,2),L=N[0],C=N[1],k=Object(a.useState)(null),F=Object(s.a)(k,2),R=F[0],B=F[1],G=Object(a.useRef)(!0);Object(a.useEffect)((function(){G.current?G.current=!1:""!==r.trim()?(I("pending"),M(),C([])):u.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441")}),[r]);var M=function(){ne.fetchImg(r).then((function(e){C((function(t){!function(e,t){0===t.hits.length?(I("rejected"),B("\u041a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(r," \u043d\u0435\u0442"))):(C([].concat(Object(o.a)(e),Object(o.a)(t.hits))),I("resolved"),ae.pageNumber+=1)}(t,e)}))})).catch((function(e){return B(e)})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},P=function(){b(!m)};return Object(j.jsxs)("div",{className:i.Style,children:[Object(j.jsx)(g,{onSubmit:function(e){n(e)}}),Object(j.jsx)(W,{error:R,status:w,imgArr:L,toggleModal:P,onImgClick:function(e){var t=e.currentTarget.dataset.action,r=e.target.alt;p(t),v(r)}}),"resolved"===w&&Object(j.jsx)(re,{onLoadMore:M}),m&&Object(j.jsx)(ee,{onClose:P,children:Object(j.jsx)("img",{src:f,alt:_})}),Object(j.jsx)(u.a,{position:"top-center",autoClose:2e3})]})};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(ce,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.fdaaf2fc.chunk.js.map