!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=n.parcelRequireab50;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){o[t]=n},n.parcelRequireab50=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.69a888b9.js","kxKJ3":"symbol-defs.6d91c32e.svg","2kw6b":"amazon@1x.626c9508.png","5iIId":"amazon@2x.104a65be.png","56TD2":"apple@1x.652b354e.png","jMKAr":"apple@2x.15632d7d.png","8ts9t":"books@1x.1d091ebd.png","1UaLq":"books@2x.1f77f032.png","9Jxmw":"index.f1b3391b.css","9ke9W":"shop-list.f6576dc7.js"}')),a("9ZZxa"),a("4Nugj");var r=a("4Nugj"),i=a("bpxeT"),c=a("2TvXO"),s=a("dIxxU"),l=(r=a("4Nugj"),"https://books-backend.p.goit.global/books/");function u(){return d.apply(this,arguments)}function d(){return(d=t(i)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.default.get("".concat(l,"top-books"));case 3:A(t.sent.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(t){return b.apply(this,arguments)}function b(){return(b=t(i)(t(c).mark((function n(e){var o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.default.get("".concat(l,"category?category=").concat(e));case 3:o=t.sent,console.log(o.data),R(o.data,e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(){return v.apply(this,arguments)}function v(){return v=t(i)(t(c).mark((function n(){var e,o,a=arguments;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t.next=3,s.default.get("".concat(l).concat(e));case 3:return o=t.sent,t.abrupt("return",o.data);case 5:case"end":return t.stop()}}),n)}))),v.apply(this,arguments)}function g(){return(g=t(i)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.get("".concat(l,"category-list"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)})))).apply(this,arguments)}u(),r.default.mainGalleryEl.addEventListener("click",(function(t){t.target.dataset.cat&&f(t.target.dataset.cat)}));var m,h=a("l5bVx"),y=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,L=/^0o[0-7]+$/i,_=parseInt,w="object"==typeof n&&n&&n.Object===Object&&n,x="object"==typeof self&&self&&self.Object===Object&&self,O=w||x||Function("return this")(),T=Object.prototype.toString,H=Math.max,j=Math.min,S=function(){return O.Date.now()};function N(n){var e=void 0===n?"undefined":t(h)(n);return!!n&&("object"==e||"function"==e)}function M(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(h)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==T.call(n)}(n))return NaN;if(N(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=N(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(y,"");var o=E.test(n);return o||L.test(n)?_(n.slice(2),o?2:8):k.test(n)?NaN:+n}function C(t){return t.map((function(t){return t.title.length<17?'<div class="book-card-wrapper js-target" data-idbook="'.concat(t._id,'"><a class="overlay " href="#">\n            <img class="js-target" src="').concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/>\n             <div class="overlay-field js-target">\n              <p class="overlay-text">QUICK VIEW</p>\n            </div> \n            <p class="book-name js-target" >').concat(t.title,'</p>\n            <p class="book-author js-target" >').concat(t.author,"</p>\n          </a></div>"):'<div class="book-card-wrapper js-target"  data-idbook="'.concat(t._id,'"><a class="overlay " href="#">\n            <img class="js-target" src="').concat(t.book_image,'" alt="').concat(t.title,'" height="256" loading="lazy"/> \n           <div class="overlay-field js-target">\n              <p class="overlay-text">QUICK VIEW</p>\n            </div>\n            <p class="book-name js-target" >').concat(t.title.split("").slice(0,17).join(""),'...</p>\n            <p class="book-author js-target" >').concat(t.author,"</p>\n          </a></div>")})).join("")}function R(t,n){r.default.mainGalleryEl.innerHTML="";var e=Math.trunc(n.split(" ").length/2);r.default.mainGalleryTitleEl.innerHTML="".concat(n.split(" ").splice(0,e).join(" "),' \n  <span class="category-title-span">').concat(n.split(" ").splice(e,e).join(" "),"</span>");var o;o=C(t),r.default.mainGalleryEl.classList.add("gal-category"),r.default.mainGalleryEl.insertAdjacentHTML("beforeend",o)}function A(t){r.default.mainGalleryEl.classList.remove("gal-category"),r.default.mainGalleryTitleEl.innerHTML="Best Sellers <span class='category-title-span'>Books</span>",r.default.mainGalleryEl.innerHTML="";var n;n=t.map((function(t){return window.innerWidth>=1440?'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul>\n            <li class="books__list">').concat(C(t.books),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>'):window.innerWidth>=768?'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul>\n            <li class="books__list">').concat(C(t.books.slice(0,3)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>'):'<div class="books-category">\n          <p class="books-category-title">'.concat(t.list_name,'</p>\n          <ul>\n            <li class="books__list">').concat(C(t.books.slice(0,1)),'</li>\n          </ul>\n          <button class="button-see-more" type="button" data-cat="').concat(t.list_name,'">SEE MORE</button>\n        </div>')})).join(""),r.default.mainGalleryEl.insertAdjacentHTML("beforeend",n)}m=function(t,n,e){var o,a,r,i,c,s,l=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=o,r=a;return o=a=void 0,l=n,i=t.apply(r,e)}function p(t){return l=t,c=setTimeout(g,n),u?b(t):i}function v(t){var e=t-s;return void 0===s||e>=n||e<0||d&&t-l>=r}function g(){var t=S();if(v(t))return m(t);c=setTimeout(g,function(t){var e=n-(t-s);return d?j(e,r-(t-l)):e}(t))}function m(t){return c=void 0,f&&o?b(t):(o=a=void 0,i)}function h(){var t=S(),e=v(t);if(o=arguments,a=this,s=t,e){if(void 0===c)return p(s);if(d)return c=setTimeout(g,n),b(s)}return void 0===c&&(c=setTimeout(g,n)),i}return n=M(n)||0,N(e)&&(u=!!e.leading,r=(d="maxWait"in e)?H(M(e.maxWait)||0,n):r,f="trailing"in e?!!e.trailing:f),h.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=s=a=c=void 0},h.flush=function(){return void 0===c?i:m(S())},h},window.addEventListener("resize",t(m)((function(){u()}),50));var I={};I=function t(n,e,o){function a(i,c){if(!e[i]){if(!n[i]){var s=void 0;if(!c&&s)return s(i,!0);if(r)return r(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=e[i]={exports:{}};n[i][0].call(u.exports,(function(t){return a(n[i][1][t]||t)}),u,u.exports,t,n,e,o)}return e[i].exports}for(var r=void 0,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(t,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var o=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=t.trim(),!0===n?e.children:e.firstChild},a=function(t,n){var e=t.children;return 1===e.length&&e[0].tagName===n},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};e.visible=r,e.create=function(t,n){var e=function(t,n){var e=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=e.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var i=a(r,"IMG"),c=a(r,"VIDEO"),s=a(r,"IFRAME");return!0===i&&e.classList.add("basicLightbox--img"),!0===c&&e.classList.add("basicLightbox--video"),!0===s&&e.classList.add("basicLightbox--iframe"),e}(t=function(t){var n="string"==typeof t,e=t instanceof HTMLElement==1;if(!1===n&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(n)),i=function(t){return!1!==n.onClose(c)&&function(t,n){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),n()}),410),!0}(e,(function(){if("function"==typeof t)return t(c)}))};!0===n.closable&&e.addEventListener("click",(function(t){t.target===e&&i()}));var c={element:function(){return e},visible:function(){return r(e)},show:function(t){return!1!==n.onShow(c)&&function(t,n){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),n()}))}),10),!0}(e,(function(){if("function"==typeof t)return t(c)}))},close:i};return c}},{}]},{},[1])(1);var F;r=a("4Nugj");F=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("2kw6b");var q;q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("5iIId");var G;G=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("56TD2");var P;P=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jMKAr");var U;U=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8ts9t");var B;B=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("1UaLq");var D;D=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("kxKJ3");var V=a("4WFAO");function J(n){var e=n._id,o=n.book_image,a=n.author,r=n.description,i=n.title,c=n.buy_links,s=(0,V.isBookInList)(e);return'\n    <div class="modal_book">\n      <button class="modal_book-btn-close" type="button" data-modal-close>\n      <svg width="28" height="28">\n      <use class="modal_book-svg" href="'.concat(t(D),'#icon-x""></use>\n    </svg>\n      \n      </button>\n      <div class="modal_book-detail">\n        <img class="modal_book-img" src="').concat(o,'" alt="').concat(i,'" />\n        <div class="modal_book-info">\n          <h2 class="modal_book-info-name">').concat(i,'</h2>\n          <p class="modal_book-info-author">').concat(a||"Coming soon",'</p>\n          <p class="modal_book-info-descrip">').concat(r||"Coming soon",'</p>\n\n          <div class="modal_book-icons">\n          <a href="').concat(c[0].url,'" class="modal_book-one-icon" target="_blank">\n            <img\n              srcset="').concat(t(F)," 1x, ").concat(t(q),' 2x"\n              src="').concat(t(F),'"\n              alt="Amazon"\n              class="modal-icons modal-icon-amazon"\n              width="62"\n              height="19"\n            />\n          </a>\n          <a href="').concat(c[1].url,'" class="modal_book-one-icon" target="_blank">\n            <img\n              srcset="').concat(t(G)," 1x, ").concat(t(P),' 2x"\n              src="').concat(t(G),'"\n              alt="Apple Books"\n              class="modal-icons"\n              width="33"\n              height="32"\n            />\n          </a>\n          <a href="').concat(c[4].url,'" class="modal_book-one-icon" target="_blank">\n            <img\n              srcset="').concat(t(U)," 1x, ").concat(t(B),' 2x"\n              src="').concat(t(U),'"\n              alt="Bookshop"\n              class="modal-icons"\n              width="38"\n              height="36"\n            />\n          </a>\n        </div>\n        </div>\n      </div>\n        <button class="modal_book-btn js-modal_book-btn ').concat(s?"in-list":"",'" type="button">\n        ').concat(s?"REMOVE FROM SHOPPING LIST":"ADD TO SHOPPING LIST",'\n      </button>\n\n      <p class="modal_book-note js-modal_book-note" ').concat(s?"":"hidden",">\n        Сongratulations! You have added the book to the shopping list. To delete,\n        press the button “Remove from the shopping list”.\n      </p>\n    </div>\n  ")}V=a("4WFAO");r.default.mainGalleryEl.addEventListener("click",(function(t){t.preventDefault();var n,e=t.target;if(!e.classList.contains("js-target"))return;p(null!==(n=e.dataset.idbook)&&void 0!==n?n:e.closest(".book-card-wrapper").dataset.idbook).then((function(t){return function(t){var n=I.create(J(t),{onShow:function(n){window.addEventListener("keydown",(function(t){"Escape"===t.key&&n.close()})),n.element().querySelector(".js-modal_book-btn").addEventListener("click",(function(n){var e=document.querySelector(".js-modal_book-note");n.target.classList.contains("in-list")?(n.target.textContent="REMOVE FROM SHOPPING LIST",(0,V.removeBookFromList)(t._id),n.target.classList.remove("in-list"),n.target.textContent="ADD TO SHOPPING LIST",e.hidden=!0):((0,V.addBookToList)(t._id),n.target.classList.add("in-list"),n.target.textContent="REMOVE FROM SHOPPING LIST",e.hidden=!1)}))},onClose:function(t){return window.removeEventListener("keydown",(function(n){"Escape"===n.key&&t.close()}))}});function e(){n.close()}n.show(),document.querySelector(".modal_book-btn-close").addEventListener("click",e)}(t)}))})),a("4WzvB");i=a("bpxeT");var W=a("8nrFW");c=a("2TvXO"),r=a("4Nugj");function z(t){return t.map((function(t){var n=t.list_name;return'<li class="category-list-item"><button type="button" class="category">'.concat(n,"</button></li>")})).join("")}var K,$='<li class="category-list-item"><p class="categories-err">The list of categories is empty</p></li>';function Q(t){t.parentNode.classList.add("active"),t.classList.add("category-active")}function Y(t){for(var n=0;n<t.length;n++)t[n].classList.contains("active")&&(t[n].classList.remove("active"),t[n].firstChild.classList.remove("category-active"))}(function(){return g.apply(this,arguments)})().then((K=t(i)(t(c).mark((function n(e){var o,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(o=e.data).length){t.next=4;break}return r.default.categoriesList.innerHTML=$,t.abrupt("return");case 4:a='<li class="category-list-item active"><button type="button" class="category category-active">All categories</button></li>'+z(o),r.default.categoriesList.innerHTML=a;case 6:case"end":return t.stop()}}),n)}))),function(t){return K.apply(this,arguments)})).catch((function(t){r.default.categoriesList.innerHTML=$})),r.default.categoriesList.addEventListener("click",(function(n){var e=n.target,o=t(W)(n.currentTarget.children);if(e.classList.contains("category")){if("All categories"===e.textContent)return Y(o),Q(e),void u();r.default.mainGalleryEl.innerHTML="",f(e.textContent)}e.classList.contains("category")&&(Y(o),Q(e))})),r.default.mainGalleryEl.addEventListener("click",(function(n){var e=n.target.dataset.cat,o=t(W)(r.default.categoriesList.children);if(e)for(var a=0;a<o.length;a++)o[a].firstChild.textContent===e&&(Y(o),Q(o[a].firstChild))})),a("i8Q71"),a("71iYL");var X=document.querySelector(".scrollup-button");X.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"}),X.hidden=!0})),X.hidden=!0,window.addEventListener("scroll",(function(){window.scrollY>812?X.hidden=!1:X.hidden=!0}))}();
//# sourceMappingURL=index.69a888b9.js.map
