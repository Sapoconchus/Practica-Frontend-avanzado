/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/routes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/*! exports provided: getBeers, getDetails, addLike, postComment, userRegister, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBeers\", function() { return getBeers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDetails\", function() { return getDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLike\", function() { return addLike; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRegister\", function() { return userRegister; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./js/storage.js\");\n\n\nconst {setItem, getItem} = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst API_KEY = \"99EQ1ZG-SK9M3J0-NEZGPFS-KK42VJ3\";\nconst endpoint = \"https://beerflix-api.herokuapp.com/api/v1\"\n\nconst getBeers = async (query, limit = 10) => {\n    const URL = query ? `${endpoint}/beers?search=${query}&limit=${limit}` : API_URL;\n    try {\n    \n      const response = await fetch(URL, {\n          method: 'GET', \n          headers: {\n          'X-API-KEY': API_KEY,\n          },\n        });\n\n      if (!response.ok) {\n        throw new Error('Error brewing your request!');\n      }\n    \n      const data = await response.json();\n      const {beers} = data;\n      return beers;\n  \n  }catch (err){\n        console.log(err)\n        throw error;\n    }\n\n}\n\n\nconst getDetails = async id => {\n  const URL = `${endpoint}${id}`\n  try {\n    const response = await fetch(URL, {\n      method: 'GET',\n      headers: {\n        'X-API-KEY': API_KEY\n      },\n    });\n\n    const data = await response.json();\n    const {beer} = data;\n    return beer;\n\n  } catch (err) {\n    console.log(err);\n    throw error\n  }\n\n}\n\nconst addLike = async id => {\n  const URL = `${endpoint}${id}/like`\n try { const like = await fetch(URL, {\n    method: 'POST',\n    headers: {\n      'X-API-KEY': API_KEY,\n      'Content-type': 'application/json',\n    }\n  });\n  setItem(id, \"liked\")\n} catch (err) {\n  console.log(err);\n  throw error\n};\n\n}\n\nconst postComment = async (id, comment) => {\n  const URL = `${endpoint}${id}/comment`;\n try { const postComment = await fetch(URL, {\n    method: 'POST',\n    headers: {\n      'X-API-KEY': API_KEY,\n      'content-type': 'application/json',\n\n    },\n    body: JSON.stringify({\n      'comment': comment,\n    })\n  })\n} catch (err) {\n  console.log(err);\n  throw error;\n};\n\n};\n\nconst userRegister = async (name, email) => {\n  const URL = `${endpoint}/user/register`;\n  try{\n    const user = await fetch(URL, {\n      method: 'POST',\n      headers: {\n        'X-API-KEY': API_KEY,\n        'content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        name,\n        email,\n      })\n    })\n\n  } catch (err) {\n    console.log(err);\n    throw error;\n  }\n};\n\nconst getUser = async email => {\n  const URL = `${endpoint}/user/login`;\n  try {\n    const response = await fetch(URL, {\n      method: 'POST',\n      headers: {\n        'X-API-KEY': API_KEY,\n        'content-type': 'application/json'\n      },\n      body: JSON.stringify({\n        email,\n      })\n    })  \n    const data = await response.json();\n    return data;\n\n  } catch (err) {\n    console.log(err);\n    throw error;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/beerCards.js":
/*!*************************!*\
  !*** ./js/beerCards.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./js/storage.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./js/ui.js\");\n\n\n\n\nconst { setItem, getItem } = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst container = document.querySelector(\".card-container\")\n\nconst cardTemplate = beer => {\n    return `\n    <div class=\"beer-card\" id=\"${beer.beerId}\">\n        <div class=\"beer-pic\">\n            <a href=\"/beers/${beer.beerId}\"><img src=\"${beer.image}\"></a>\n        </div>\n            <div class=\"info-container\">\n                <div class = \"beer-info\">\n                   <a href=\"/beers/${beer.beerId}\"> <h1 id=\"beer-name\">${beer.name}</h1></a>\n                    <article class=\"first-rendered\">${beer.description.length < 170 ? beer.description : beer.description.slice(0, 170) + ' [...]'}.</br><span class=\"brew-year\"> First brewed on ${beer.firstBrewed}.</span></article>\n                </div>\n                <div class =\"card-pills\">\n                    <div id=\"social-pills\">\n                        <i class=\"pill icofont-like\"></i>\n                        <i id=\"likes-num\" class =\"pill\">${beer.likes}</i>\n                        <i class=\"pill icofont-speech-comments\"></i>\n                        <i id=\"comments-num\" class =\"pill\">${beer.comments.length}</i>\n                    </div>\n                    <div id=\"link-pill\">\n                    <a href=\"/beers/${beer.beerId}\" class=\"pill\"><p> Go to details </p></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>`\n}\n\n\nconst renderBeers = async input => {\n    try {\n        const beers = await Object(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"getBeers\"])(input);\n\n        const main = document.querySelector(\"main\");\n        const dates = [];\n        const prices = [];\n        const htmlBeers = beers.map(beer => {\n            dates.push(beer.firstBrewed);\n           // prices.push(beer.price)\n            return cardTemplate(beer);\n        }).join(\"\");\n\n        // const priceFiltered = [...new Set(prices)];\n\n        const cardContainer = document.createElement(\"section\")\n        cardContainer.classList.add(\"card-container\");\n\n        cardContainer.innerHTML = `${htmlBeers}`;\n        main.appendChild(cardContainer);\n\n        //oberver for displaying logo on navbar\n        const cardObserved = document.querySelector(\".beer-card:nth-child(5)\");\n        Object(_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"launchIo\"])(cardObserved);\n\n        // filter logic\n        // #1 : by date\n\n        Object(_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"renderFilter\"])(dates);\n       // renderFilter(priceFiltered) // to be implemented on next versions\n        \n    } catch (err) {\n        console.log(err);\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderBeers);\n\n\n\n//# sourceURL=webpack:///./js/beerCards.js?");

/***/ }),

/***/ "./js/beerDetail.js":
/*!**************************!*\
  !*** ./js/beerDetail.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./js/storage.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./js/ui.js\");\n\n\n\n\nconst {setItem, getItem} = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst detailTemplate = ({name, image, likes, comments, description, firstBrewed, price, brewersTips} = {}, malt, hops) => {\n    return `\n    <div id=\"main-detail-container\">\n    <section class=\"detail-wrapper\">\n    <div class=\"img-container\">\n        <img src=\"${image}\">\n    </div>\t\n    <header class=\"beer-header\">\n    <h1>${name}</h1>\n    <div class=\"underlying\">\n        <div class=\"social-info\">\n         <i class=\"pill icofont-like\"></i>\n         <p class=\"pill likes-num\">${likes}</p>\n         <label for=\"text-area\"><i class=\"pill icofont-speech-comments\"></i></label>\n         <p class=\"pill comments-num\">${comments.length}</p>\n     </div>\n     <div class=\"price-tag\">\n         <h2 class=\"price\">${price}€</h2>\n     </div>\n    </div>\n <article>${description}</article>\n</header>\n<div class=\"more-info\">\n    <p class=\"beer-date\"> <span class=\"info-header\">Firstly brewed on: </span>${firstBrewed}</p>\n    <p class=\"brewers-tip\"><span class=\"info-header\">Brewer tip: </span>${brewersTips}</p>\n    <p class=\"ingredients\"><span class=\"info-header\">Ingredients:</span> malt (<span class=\"ingredients-detail\">${malt} </span>), hops (<span class=\"ingredients-detail\">${hops}</span>)</p>      \t\t\t\n</div>\n</section>\n<section class=\"comment-container\">\n    <form id=\"comment-form\" class=\"comment-form\">\n        <div class=\"comment-input\">\n            <label for=\"text-area\">Any comment? </br> Go ahead and let us know</label>\n            <textarea required id=\"text-area\" placeholder=\"Add your beer review here\" form=\"comment-form\" minlength=10 maxlength=250></textarea>\n        </div>\n        <div class=\"lds-ellipsis no-display\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n        <button type=\"submit\" class=\"send-button\">Add comment</button>\n    </form>\n    \n    <div class=\"comments-list\">\n    </div>\n</section>\n</div>\n`};\n\nconst renderDetails = async id => {\n    const detail = await Object(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"getDetails\"])(id);\n\n    const {ingredients: {malt, hops}} = detail;\n\n    const maltList = malt.map(item => item.name);\n    const maltFiltered = [...new Set(maltList)].join(\", \"); //cool! Found it on StackOverflow. I use both methods on purpose.\n    const hopsList = hops.map(item => item.name).sort(); //can't chain the filter, throws an error (\"It is not initializated\")\n    const hopsFiltered = hopsList.filter((item,i) => hopsList.indexOf(item) == i).join(\", \");\n\n    const mainContainer = document.querySelector(\"main\");    \n\n    mainContainer.innerHTML = detailTemplate(detail, maltFiltered, hopsFiltered);\n\n        // get and display likes\n\n    const thumbUp = document.querySelector(\".icofont-like\");\n    const likesNum = document.querySelector(\".likes-num\")\n\n    const liker = evt => {\n        \n    Object(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"addLike\"])(id); \n    thumbUp.classList.add(\"liked\")\n    likesNum.innerText = parseInt(likesNum.innerText) + 1;\n    thumbUp.removeEventListener('click', liker)\n\n    }\n   \n    getItem(id) !== \"liked\" ?  thumbUp.addEventListener(\"click\", liker) : thumbUp.classList.add(\"liked\");\n        \n        // get and display comments\n\n    const comments = detail.comments;\n    console.log(comments);\n    console.log(comments.comment, comments.dateComment)\n    \n    renderComments(comments);\n\n    const postForm = document.querySelector('#comment-form');\n    const commentInput = document.querySelector('#text-area');\n    const loader = document.querySelector(\".lds-ellipsis\");\n\n    postForm.addEventListener('submit', async evt => {\n        evt.preventDefault();\n        if(commentInput.validity.valid) {\n           loader.classList.toggle(\"no-display\") \n           await Object(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"postComment\"])(id, commentInput.value);\n           renderDetails(id); \n        }\n\n    })\n\n        // navbar logo behaviour\n\n        const elementObserved = document.querySelector(\".underlying\");\n        Object(_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"launchIo\"])(elementObserved);\n    \n};\n\nconst commentTemplate = comment => {\n    return `\n<div class=\"single-comment\">        \n<p class=\"comment-date\"> <span class=\"date\">${new Date(comment.dateComment).getDate()}/${new Date(comment.dateComment).getMonth()+1}/${new Date(comment.dateComment).getFullYear()} </span><span class=\"comment-time\">${new Date(comment.dateComment).getHours()}:${new Date(comment.dateComment).getMinutes()}</span></p>\n<p class=\"comment-text\"> ${comment.comment} </p>\n</div>\n`;\n}\n\nconst renderComments = array => {\n   const HTMLComments = array.slice(0).reverse().map(comment => commentTemplate(comment)).join(\"\");\n   const container = document.querySelector(\".comments-list\");\n\n   container.innerHTML = `${HTMLComments}`;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderDetails);\n\n//# sourceURL=webpack:///./js/beerDetail.js?");

/***/ }),

/***/ "./js/login.js":
/*!*********************!*\
  !*** ./js/login.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./js/storage.js\");\n/* harmony import */ var _beerCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beerCards.js */ \"./js/beerCards.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./js/ui.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n\n\n\n\n\nconst cookie = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cookieStore\");\nconst session = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"sessionStore\");\nconst local = Object(_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"localStore\");\n\nconst logInDialog = `\n\t\t<div class=\"user-mgmt\">\n\t\t\t<div class=\"logo-container\">\n\t\t\t\t<h1 class=\"logo\"> Beer<span>Flix</span></h1>\n\t\t\t</div>\n\t\t\t<div class=\"intro-message\">\n\t\t\t\t<p> Our network is available only for registered and authorized users. Please leave your user name and e-mail and we'll provide you and account user and password.</p>\n\t\t\t\t<p class=\"changer-paragraph\"> Are you already registered?</br> <span class=\"form-changer\"> Sign up / log in </span></p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-container\">\n\t\t\t\t<form id=\"register-form\" class=\"register\">\n\t\t\t\t\t<h2> Register form </h2>\n\t\t\t\t\t<label for=\"username\" class=\"form-label\"> Username </label>\n\t\t\t\t\t<input name=\"username\" id=\"username\" class=\"form-input\" type=\"text\" placeholder=\"username\" required></input>\n\t\t\t\t\t<label for=\"email\" class=\"form-label\"> e-mail </label>\n\t\t\t\t\t<input name=\"email\" id=\"reg-email\" class=\"email form-input\"\" type=\"email\" placeholder=\"e-mail\" required></input>\n\t\t\t\t\t<button type=\"submit\">Submit</button>\n\t\t\t\t</form>\n\t\t\t\t<form id=\"login-form\" class=\"login no-display\">\n\t\t\t\t\t<h2> Login form </h2>\n\t\t\t\t\t<label for=\"log-email\" class=\"form-label\"> e-mail </label>\n\t\t\t\t\t<input name=\"email\" id=\"log-email\" class=\"email form-input\"\" type=\"email\" placeholder=\"e-mail\" required></input>\n\t\t\t\t\t<label id=\"keep-logged-label\"> keep me logged \n\t\t\t\t\t<input id =\"keep-logged\" type=\"checkbox\" name=\"logged\">\t\t\t\t\t\n\t\t\t\t\t</label>\n\t\t\t\t\t<button type=\"submit\">Submit</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"problem-logging\">\n\t\t\t<a href=\"\">Forgot password?</a>\n\t\t\t<a href=\"\">Report an issue</a>\n\t\t\t</div>\n\t\t</div>`;\n\nconst renderLogin = () => {\n\n\tconst container = document.querySelector(\"main\");\n\tcontainer.innerHTML = logInDialog;\n\t\t// register form elements\n\tconst registerForm = document.querySelector('#register-form')\n\tconst userName = document.querySelector(\"#username\");\n\tconst regEmail = document.querySelector(\"#reg-email\");\n\t\t// login form elements\n\tconst loginForm = document.querySelector(\"#login-form\");\n\tconst logEmail = document.querySelector(\"#log-email\");\n\t\t//hanger of forms\n\tconst changeForm = document.querySelector(\".form-changer\");\n\t\t//keep logged checkbox\n\tconst keepLogged = document.querySelector(\"#keep-logged\");\n\t\n\tregisterForm.addEventListener('submit', evt => {\n\t\tevt.preventDefault();\n\t\tif(userName.validity.valid && regEmail.validity.valid) {\n\t\t\tObject(_api_js__WEBPACK_IMPORTED_MODULE_3__[\"userRegister\"])(username.value, regEmail.value)\n\t\t\tcontainer.innerHTML = \"\";\n\t\t\twindow.alert(\"user correctly created! Now you can proceed to log in\")\n\t\t\trenderLogin();\n\t\t};\n\t})\t\n\n\tchangeForm.addEventListener('click', evt =>{\n\t\tregisterForm.classList.toggle(\"no-display\");\n\t\tloginForm.classList.toggle(\"no-display\");\n\n\t})\n\n\tloginForm.addEventListener('submit', async evt => {\n\t\tevt.preventDefault();\n\n\t\tif(logEmail.validity.valid) {\n\n\t\t\tconst apiUser = await Object(_api_js__WEBPACK_IMPORTED_MODULE_3__[\"getUser\"])(logEmail.value);\n\n\t\t\tconst {user: {apiKey}} = apiUser;\n\t\t\t\n\t\t\t\t//checking if the user exists on DB\n\t\t\tif (apiUser.success) {\t\t\t\n\t\t\t\t//keep logged on cookieStorage or session only\n\t\t\t\tif(keepLogged.checked) {\n\t\t\t\t\tcookie.setItem(logEmail.name, logEmail.value, 365);\n\t\t\t\t\tcookie.setItem(\"user_key\", apiKey);\n\t\t\t\t} else {\n\t\t\t\t\tsession.setItem(logEmail.name, logEmail.value);\n\t\t\t\t\tsession.setItem(\"user_key\", apiKey);\t\n\t\t\t\t}\n\t\t\tcontainer.innerHTML = \"\";\n\t\t\tawait Object(_beerCards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(local.getItem(_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"SEARCH_INPUT\"]));\n\t\t\tdocument.querySelector(\".filters-container\").classList.remove(\"no-display\");\n\t\t\t} else {\n\t\t\t\tconsole.error(\"user not found\");\n\t\t\t\twindow.alert(\"User unknown. Please register.\")\n\t\t\t};\n\t\t};\t\n\t});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderLogin);\n\n//# sourceURL=webpack:///./js/login.js?");

/***/ }),

/***/ "./js/routes.js":
/*!**********************!*\
  !*** ./js/routes.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _beerCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beerCards.js */ \"./js/beerCards.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./js/storage.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./js/ui.js\");\n/* harmony import */ var _beerDetail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beerDetail.js */ \"./js/beerDetail.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.js */ \"./js/login.js\");\n\n\n\n\n\n\n\nconst local = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('localStore');\nconst cookie = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('cookieStore');\nconst session = Object(_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('sesionStore')\n\npage('/', () => {\n\n    if(cookie.getItem(\"user_key\") || sessionStorage.getItem(\"user_key\")){\n\n        document.querySelector(\".filters-container\").classList.remove(\"no-display\");\n        document.querySelector(\"main\").innerHTML = \"\";\n        Object(_beerCards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(local.getItem(_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"SEARCH_INPUT\"]));\n\n    } else {\n\n        Object(_login_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    }\n    \n});\n\npage('/beers/:id', ctxt => {\n\n\tif(cookie.getItem(\"user_key\") || sessionStorage.getItem(\"user_key\")){\n\n    document.querySelector(\".filters-container\").classList.add(\"no-display\")\n    Object(_beerDetail_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ctxt.path);\n\n    } else {\n\n        Object(_login_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n    }\n});\n\npage();\n\n//# sourceURL=webpack:///./js/routes.js?");

/***/ }),

/***/ "./js/storage.js":
/*!***********************!*\
  !*** ./js/storage.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst localStore = {\n    setItem: (key, value) => localStorage.setItem(key, value),\n    getItem: key => localStorage.getItem(key)\n};\n\nconst cookieStore = {\n    setItem: (key, value) => Cookies.set(key, value),\n    getItem: key => Cookies.get(key)\n};\n\nconst sessionStore = {\n    setItem: (key, value) => sessionStorage.setItem(key, value),\n    getItem: key => sessionStorage.getItem(key)\n};\n\n\nconst storage = (type = \"localStore\") => {\n    const types = {\n        localStore,\n        sessionStore,\n        cookieStore\n    };\n    return types[type];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (storage);\n\n//# sourceURL=webpack:///./js/storage.js?");

/***/ }),

/***/ "./js/ui.js":
/*!******************!*\
  !*** ./js/ui.js ***!
  \******************/
/*! exports provided: SEARCH_INPUT, launchIo, renderFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_INPUT\", function() { return SEARCH_INPUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchIo\", function() { return launchIo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFilter\", function() { return renderFilter; });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _beerCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beerCards.js */ \"./js/beerCards.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./js/storage.js\");\n\n\n\n\nconst { setItem, getItem } = Object(_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst SEARCH_INPUT = 'search_input';\n\n// NAVBAR UI --> manages navbar input and prints beers\n\nconst input = document.querySelector(\".input.search\");\nconst form = document.getElementById(\"search-form\");\nconst button = document.querySelector(\"button\");\nconst searchGlass = document.querySelector(\".navbar-icon\");\nconst closeButton = document.querySelector(\".close\")\nconst navLogo = document.getElementById(\"nav-logo\");\n\nsearchGlass.addEventListener(\"click\", evt =>{\n\tnavLogo.classList.add(\"no-display\");\n\tform.classList.toggle(\"no-display\");\n\tsearchGlass.classList.toggle(\"no-display\");\n});\n\ncloseButton.addEventListener(\"click\", evt =>{\n\tform.classList.toggle(\"no-display\");\n\tsearchGlass.classList.toggle(\"no-display\");\n});\n\nform.addEventListener(\"submit\", evt => {\n\t evt.preventDefault();\n\n\tif(input.validity.valid) {\n\t\tObject(_beerCards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input.value);\n\t\twindow.location.replace(\"/\");\n\t\tsetItem(SEARCH_INPUT, input.value)\n\t}\n\n});\n\n// Intersection observer navbar\nconst launchIo = (element) => {\n\n    const navLogo = document.getElementById(\"nav-logo\");\n    const options = {};\n    const cb = (entries, observer) => {\n\t    entries.forEach(entry => {\n\t\t    if(entry.isIntersecting) {\n\t\t\t    navLogo.classList.toggle(\"no-display\");\n\t\t    }\n\t    });\n    };\n\n    const io = new IntersectionObserver(cb, options);\n    io.observe(element);\n\n    navLogo.addEventListener('click', evt => {\n\n\t    evt.preventDefault();\n\t    window.scrollTo(0,0);\n\t    navLogo.classList.add(\"no-display\")\n    });\n}\n\nconst filterTemplate = (input, index) => {\n    return `\n    <li><label><input class =\"${index}\" type=\"checkbox\" name=${input} value=${input} checked> ${input}</label></li></br>`\n}\n\n\n//Home page filter render\n\nconst renderFilter = array => {\n    \n    //render filter\n    const container = document.querySelector(\"#date-filter-list\");\n    const checkBoxes = array.map((item, index) => filterTemplate(item, index)).join(\"\");\n    const list = document.createElement(\"ul\");\n\n    list.innerHTML = `${checkBoxes} <button class=\"close-filter no-display\"> close </button>`;\n    container.appendChild(list);\n    \n    //add behaviour to the checkboxes printed\n\n    const checkers = document.querySelectorAll(\"input[type=checkbox]\");\n    const beerCard = document.querySelectorAll(\".beer-card\");\n    const checkAll = document.querySelector(\".check-all\");\n    const uncheckAll = document.querySelector(\".uncheck-all\");\n\n    checkers.forEach((item, index) => item.addEventListener(\"click\", evt => beerCard[index].classList.toggle(\"no-display\")));\n\n    checkAll.addEventListener(\"click\", evt =>{\n        checkers.forEach((item, index) => {\n            if(!item.checked) { item.checked = true;};\n            beerCard[index].classList.remove(\"no-display\");\n            });\n    });\n\n    uncheckAll.addEventListener(\"click\", evt =>{\n        checkers.forEach((item, index) => {\n            if(item.checked) { item.checked = false;};\n            beerCard[index].classList.add(\"no-display\");\n            });\n    });\n};\n\n// FILTER UI --> manages beer filter behaviour @ home page\n\nconst listContainer = document.querySelector(\".date-filter\")\nconst expand = document.querySelector(\".open-filter\");\nconst list = document.querySelector(\"#date-filter-list\");\n\nexpand.addEventListener(\"click\", evt => {\n\tlist.classList.toggle(\"no-display\");\n\tlistContainer.classList.toggle(\"expand-list\");\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/ui.js?");

/***/ })

/******/ });