(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_setEventListeners",(function(){o.toggleButtonCondition(),o._inputElements.forEach((function(e){e.addEventListener("input",(function(){o._toggleErrorMessage(e),o.toggleButtonCondition()}))}))})),t(this,"_toggleErrorMessage",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e)})),t(this,"_showInputError",(function(e){var t=e.validationMessage,n=o._form.querySelector("#".concat(e.id,"-error"));e.classList.add(o._config.inputErrorClass),n.textContent=t,n.classList.add(o._config.errorClass)})),t(this,"_hideInputError",(function(e){var t=o._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(o._config.inputErrorClass),t.textContent="",t.classList.remove(o._config.errorClass)})),t(this,"_hasInvalidInput",(function(){return o._inputElements.some((function(e){return!e.validity.valid}))})),t(this,"_enableSubmitButton",(function(){o._buttonElement.classList.remove(o._config.inactiveButtonClass),o._buttonElement.disabled=!1})),t(this,"hideError",(function(){o._inputElements.forEach((function(e){o._hideInputError(e)}))})),t(this,"disableSubmitButton",(function(){o._buttonElement.classList.add(o._config.inactiveButtonClass),o._buttonElement.disabled=!0})),t(this,"toggleButtonCondition",(function(){o._hasInvalidInput()?o.disableSubmitButton():o._enableSubmitButton()})),t(this,"enableValidation",(function(){o._setEventListeners()})),this._config=e,this._form=r,this._inputElements=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._form.querySelector(this._config.submitButtonSelector)}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){this.hideError(),this.disableSubmitButton()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(),r=document.querySelector(".profile"),o=(r.querySelector(".profile__img"),r.querySelector(".profile__edit-btn")),i=r.querySelector(".profile__add-btn"),u=r.querySelector(".profile__img-changer"),c=document.querySelector(".popup_type_edit-form").querySelector(".popup__form"),a=c.querySelector("#name-field"),l=c.querySelector("#about-field"),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._token="e83bfb0b-39a4-4091-80ad-3cab13ababb8",this._api="https://mesto.nomoreparties.co/v1/cohort-43",this._contentType="application/json"}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("Получена ошибка, код: ".concat(e.status,", описание: ").concat(t.message))}))}},{key:"fetchUserInfo",value:function(){return fetch(this._api+"/users/me",{method:"GET",headers:{Authorization:this._token,"Content-type":this._contentType}}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e,t){return fetch(this._api+"/users/me",{method:"PATCH",headers:{Authorization:this._token,"Content-type":this._contentType},body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"patchAvatar",value:function(e){return fetch(this._api+"/users/me/avatar",{method:"PATCH",headers:{Authorization:this._token,"Content-type":this._contentType},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"fetchCardsList",value:function(){return fetch(this._api+"/cards",{method:"GET",headers:{Authorization:this._token,"Content-type":this._contentType}}).then(this._checkResponse)}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch(this._api+"/cards",{method:"POST",headers:{Authorization:this._token,"Content-type":this._contentType},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this._api+"/cards/".concat(e),{method:"DELETE",headers:{Authorization:this._token,"Content-type":this._contentType}}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch(this._api+"/cards/".concat(e,"/likes"),{method:"PUT",headers:{Authorization:this._token,"Content-type":this._contentType}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch(this._api+"/cards/".concat(e,"/likes"),{method:"DELETE",headers:{Authorization:this._token,"Content-type":this._contentType}}).then(this._checkResponse)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n,r,o,i,u){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_getTemplate",(function(){return document.querySelector(c._templateSelector).content.querySelector(".article").cloneNode(!0)})),y(this,"deleteCard",(function(){c._element.remove(),c._element=null})),y(this,"likeCard",(function(){c._likeBtn.classList.toggle("article__feedback_active"),c._isLiked=!c._isLiked})),y(this,"_setEventListeners",(function(){c._cardImage.addEventListener("click",c._handleCardClick),c._likeBtn.addEventListener("click",c._handleLikeCard),c._isOwner&&c._delBtn.addEventListener("click",c._hendleRemoveCard)})),y(this,"_createCard",(function(){c._element=c._getTemplate(),c._cardName=c._element.querySelector(".article__title"),c._cardImage=c._element.querySelector(".article__img"),c._likeBtn=c._element.querySelector(".article__feedback"),c._isLiked&&c._likeBtn.classList.add("article__feedback_active"),c._delBtn=c._element.querySelector(".article__del-btn"),c._isOwner||(c._delBtn.style.display="none"),c._likeCounter=c._element.querySelector(".article__like-counter"),c._cardName.textContent=c._name,c._cardImage.src=c._link,c._cardImage.alt=c._alt,c._likeCounter.textContent=c._likeCount,c._setEventListeners()})),y(this,"showElement",(function(){return c._createCard(),c._element})),this._name=t.name,this._alt=this._name,this._link=t.link,this._templateSelector=r,this._handleCardClick=o,this._hendleRemoveCard=i,this._likeCount=t.likes?t.likes.length:0,this._isOwner=n===t.owner._id,this._isLiked=t.likes.some((function(e){return e._id===n})),this._handleLikeCard=u}var t,n;return t=e,(n=[{key:"getIsLiked",value:function(){return this._isLiked}},{key:"updateLikes",value:function(e){this._likeCounter.textContent=e}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addElement(t._renderer(e))}))}},{key:"addElement",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__closer"))&&o.close()},(n="_handleCurrentTarget")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupElement=document.querySelector(t),this._bindedEscCloseHandler=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._bindedEscCloseHandler)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._bindedEscCloseHandler)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){return e._handleCurrentTarget(t)}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c=function(){var e={};return n._inputElements.forEach((function(t){e[t.name]=t.value})),e},(o="_getInputValues")in(r=S(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._formElement=n._popupElement.querySelector(s.formSelector),n._inputElements=n._formElement.querySelectorAll(s.inputSelector),n._submitFunction=t,n._submitBtn=n._formElement.querySelector(s.submitButtonSelector),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;E(j(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault();var n=e._submitBtn.textContent;e._submitBtn.textContent="Сохранение...",e._submitFunction(e._getInputValues()).then((function(){e.close()})).catch((function(e){return console.error(e)})).finally((function(){e._submitBtn.textContent=n}))}))}},{key:"close",value:function(){E(j(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"getForm",value:function(){return this._formElement}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageElement=t._popupElement.querySelector(".popup__img"),t._imageFigcaption=t._popupElement.querySelector(".popup__figcaption"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._imageElement.alt=t,this._imageElement.src=n,this._imageFigcaption.textContent=t,R(B(u.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userAbout=document.querySelector(n),this._profileImage=document.querySelector(".profile__img")}var t,n;return t=e,(n=[{key:"getId",value:function(){return this._userId}},{key:"getUserInfo",value:function(){return{nameContent:this._userName.textContent,aboutContent:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e._id;this._userName.textContent=t,this._userAbout.textContent=n,this._userId=r}},{key:"setAvatar",value:function(e){this._profileImage.setAttribute("src",e)}},{key:"makeVisible",value:function(){this._profileImage.style.visibility="visible"}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function J(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function u(){return N(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._action=e}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._action()})),F(G(u.prototype),"setEventListeners",this).call(this)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new p,W=new b((function(e){return Z(e,".template")}),".cards");Promise.all([Q.fetchCardsList(),Q.fetchUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo(i),ne.setAvatar(i.avatar),ne.makeVisible(),W.renderItems(o)})).catch((function(e){return console.error(e)}));var X=new $(".popup_type_confirm");X.setEventListeners();var Y=new L(".popup_type_avatar-form",(function(e){return Q.patchAvatar(e.link).then((function(e){ne.setAvatar(e.avatar)}))}));Y.setEventListeners();var Z=function(e,t){var n=new d(e,ne.getId(),t,(function(){return te.open(e)}),(function(){X.setSubmitAction((function(){return Q.deleteCard(e._id).then((function(){n.deleteCard(),X.close()})).catch((function(e){return console.error(e)}))})),X.open()}),(function(){n.getIsLiked()?Q.deleteLike(e._id).then((function(e){n.likeCard(),n.updateLikes(e.likes.length)})).catch((function(e){return console.error(e)})):Q.putLike(e._id).then((function(e){n.likeCard(),n.updateLikes(e.likes.length)})).catch((function(e){return console.error(e)}))}));return n.showElement()},ee=new L(".popup_type_add-form",(function(e){return Q.postCard(e).then((function(e){return W.prependItem(e)}))}));ee.setEventListeners();var te=new x(".popup_type_show");te.setEventListeners();var ne=new D(".profile__title",".profile__subtitle"),re=new L(".popup_type_edit-form",(function(e){return Q.patchUserInfo(e.name,e.about).then((function(e){ne.setUserInfo(e)}))}));re.setEventListeners();var oe={};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var r=new n(e,t),o=t.getAttribute("name");oe[o]=r,r.enableValidation()}))}(s),u.addEventListener("click",(function(){oe["popup__avatar-form"].resetValidation(),Y.open()})),o.addEventListener("click",(function(){return t=(e=ne.getUserInfo()).nameContent,n=e.aboutContent,a.value=t,l.value=n,oe["popup__edit-form"].resetValidation(),void re.open();var e,t,n})),i.addEventListener("click",(function(){oe["popup__add-form"].resetValidation(),ee.open()}))})();