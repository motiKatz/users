(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-login></app-login>\n\n\n<app-navi></app-navi>\n\n\n\n\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/albums/albums.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/albums/albums.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"svc.data\" class=\"pageName\">\n    <fieldset>\n    <legend><h1>albums search:</h1></legend>\n    <label>userId</label><br>\n    <input (blur)=\"userId =$event.target.value\">\n    <br>\n    <label>title</label><br>\n    <input (blur)=\"title =$event.target.value\">\n    <br>\n    </fieldset>\n    <div *ngIf=\"userId && title; then myPipe else normal\"> </div>\n    <ng-template #normal ><h1>this is the albums list</h1>\n        <ul *ngFor=\"let a of svc.data | async\">\n            <mat-card>\n                <li>userId:{{a.userId}}</li>\n            <li>id:{{a.id}}</li>\n            <li>title:{{a.title}}</li>\n            </mat-card>\n            \n        </ul>\n    </ng-template>\n\n    <ng-template #myPipe>\n        <ul *ngFor=\"let a of svc.data | async |  search:userId : title\">\n            <mat-card>\n            <li>userId:{{a.userId}}</li>\n            <li>id:{{a.id}}</li>\n            <li>title:{{a.title}}</li>\n            </mat-card>\n        </ul>\n    </ng-template>\n\n</div>\n\n<h3>to add a new album :\n<a mat-stroked-button routerLink=\"/addAlbum\">click here</a></h3>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    \n<!-- <div class=\"whole-page\"> -->\n<div  *ngIf=\"logSvc.x == false\" >\n\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input [formControl]=\"userName\" name=\"userName\" matInput placeholder=\"userName\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <input [formControl]=\"password\" name=\"password\" matInput placeholder=\"password\">\n          </mat-form-field>\n          \n          \n          <button mat-raised-button color=\"primary\" (click)=\"CheckLogin()\">login</button>\n          \n           \n\n        \n      </form> \n\n \n    \n</div>\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navi/navi.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navi/navi.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"svc.x\">\n\n  <nav class=\"mat-elevation-z6\">\n    <a mat-button routerLink=\"/app-users\">Users</a>\n    <a mat-button routerLink=\"/posts\">Posts</a>\n    <a mat-button routerLink=\"/todos\">Todos</a>\n    <a mat-button routerLink=\"/albums\">Albums</a>\n    <h3>{{svc.name}}</h3>\n  </nav>\n\n \n\n\n  <!-- <header>\n  page name from service\n</header> -->\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/posts/posts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/posts/posts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"svc.data\" class=\"pageName\">\n    <fieldset>\n    <legend><h1>post search:</h1></legend>\n    <label>userId</label><br>\n    <input (blur)=\"userId =$event.target.value\">\n    <br>\n    <label>title</label><br>\n    <input (blur)=\"title =$event.target.value\">\n    <br>\n    </fieldset>\n    <div *ngIf=\"userId && title; then myPipe else normal\"> </div>\n    <ng-template #normal ><h1>this is the posts list</h1>\n        <ul *ngFor=\"let p of svc.data | async\">\n            <mat-card>\n                <li>userId:{{p.userId}}</li>\n                <li>id:{{p.id}}</li>\n                <li>title:{{p.title}}</li>\n                <li>body:{{p.body}}</li>\n            </mat-card>\n            \n        </ul>\n    </ng-template>\n\n    <ng-template #myPipe>\n        <ul *ngFor=\"let p of svc.data | async |  search: 'userId' : userId | search: 'title' :  title\">\n            <mat-card>\n            <li>userId:{{p.userId}}</li>\n            <li>id:{{p.id}}</li>\n            <li>title:{{p.title}}</li>\n            <li>body:{{p.body}}</li>\n            </mat-card>\n        </ul>\n    </ng-template>\n\n</div>\n\n<h3>to add a new post :\n<a mat-stroked-button routerLink=\"/addPost\">click here</a></h3>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/to-dos/to-dos.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/to-dos/to-dos.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"svc.api\" class=\"pageName\">\n    <fieldset>\n    <legend><h1>todo search:</h1></legend>\n    <label>userId</label><br>\n    <input (blur)=\"userId =$event.target.value\">\n    <br>\n    <label>title</label><br>\n    <input (blur)=\"title =$event.target.value\">\n    <br>\n    </fieldset>\n    <div *ngIf=\"userId && title; then myPipe else normal\"> </div>\n    <ng-template #normal ><h1>this is the todos list</h1>\n        <ul *ngFor=\"let t of svc.api\">\n            <mat-card>\n            <li>userId:{{t.userId}}</li>\n            <li>id:{{t.id}}</li>\n            <li>title:{{t.title}}</li>\n            <li>completed:{{t.completed}}</li>\n            </mat-card>\n            \n        </ul>\n    </ng-template>\n\n    <ng-template #myPipe>\n        <ul *ngFor=\"let t of svc.api |  search:userId : title\">\n            <mat-card>\n            <li>userId:{{t.userId}}</li>\n            <li>id:{{t.id}}</li>\n            <li>title:{{t.title}}</li>\n            <li>completed:{{t.completed}}</li>\n            </mat-card>\n        </ul>\n    </ng-template>\n\n</div>\n\n\n<h3>to add a new todo :\n<a mat-stroked-button routerLink=\"/addToDo\">click here</a></h3>\n\n<router-outlet></router-outlet>\n\n\n    \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"logSvc.x == true\">\n<div *ngIf=\"svc.data\" class=\"pageName\">\n\n    \n    <h3>Active users <mat-icon matBadge={{users}} matBadgeColor=\"warn\">group</mat-icon></h3>\n    <fieldset>\n    <legend><h1>user search:</h1></legend>\n    <label>id</label><br>\n    <input (blur)=\"id =$event.target.value\">\n    <br>\n    <label>name</label><br>\n    <input (blur)=\"name =$event.target.value\">\n    <br>\n    </fieldset>\n    <div *ngIf=\"id && name; then myPipe else normal\"> </div>\n    <ng-template #normal ><h1>this is the users list</h1>\n        <ul *ngFor=\"let u of svc.data | async\">\n             <mat-card>\n            <li>id:{{u.id}}</li>\n            <li>name:{{u.name}}</li>\n            <li>userName:{{u.username}}</li>\n            <li>email:{{u.email}}</li>\n            </mat-card>\n            \n        </ul>\n    </ng-template>\n    \n\n    <ng-template #myPipe>\n        <ul *ngFor=\"let u of svc.data | async |  search:id : name\">\n            <mat-card>\n            <li>id:{{u.id}}</li>\n            <li>name:{{u.name}}</li>\n            <li>userName:{{u.username}}</li>\n            <li>email:{{u.email}}</li>\n            </mat-card>\n        </ul>\n    </ng-template>\n\n</div>\n\n\n<h2>to add a new user :\n<a mat-stroked-button routerLink=\"/addUser\">click here</a></h2>\n\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/album-form/album-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/album-form/album-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"add-album\">\n\n  <h1>Please fill in your Akbum details</h1>\n    <mat-form-field>\n      <input [formControl]=\"userId\" matInput placeholder=\"userId\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea [formControl]=\"id\" matInput placeholder=\"id\"></textarea>\n      </mat-form-field>\n  \n    <mat-form-field>\n      <textarea [formControl]=\"title\" matInput placeholder=\"title\"></textarea>\n    </mat-form-field>\n\n    <button (click)=\"addAlbum()\" mat-stroked-button color=\"primary\">submit</button>\n\n   \n    <h3>to see the new list :\n    <a mat-stroked-button routerLink=\"/albums\">click here</a></h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/post-form/post-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/post-form/post-form.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"add-post\">\n\n  <h1>Please fill in your Post details</h1>\n    <mat-form-field>\n      <input [formControl]=\"userId\" matInput placeholder=\"userId\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea [formControl]=\"id\" matInput placeholder=\"id\"></textarea>\n      </mat-form-field>\n  \n    <mat-form-field>\n      <textarea [formControl]=\"title\" matInput placeholder=\"title\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field>\n        <input [formControl]=\"body\" matInput placeholder=\"body\">\n    </mat-form-field>\n\n    <button (click)=\"addPost()\" mat-stroked-button color=\"primary\">submit</button>\n\n   \n    <h3>to see the new list :\n    <a mat-stroked-button routerLink=\"/posts\">click here</a></h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/the-users-forms/the-users-forms.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/the-users-forms/the-users-forms.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"add-user\">\n\n  <h1>Please fill in your User details</h1>\n    <mat-form-field>\n      <input [formControl]=\"id\" matInput placeholder=\"id\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <textarea [formControl]=\"name\" matInput placeholder=\"name\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field>\n        <input [formControl]=\"username\" matInput placeholder=\"username\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input [formControl]=\"email\" matInput placeholder=\"email\">\n    </mat-form-field>\n\n    <button (click)=\"addUser()\" mat-stroked-button color=\"primary\">submit</button>\n\n   \n    <h3>to see the new list :\n    <a mat-stroked-button routerLink=\"/app-users\">click here</a></h3>\n</div> \n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/to-do-form/to-do-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/to-do-form/to-do-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-form\">\n\n  <h1>Please fill in your Todo details</h1>\n    <mat-form-field>\n      <input [formControl]=\"userId\" matInput placeholder=\"userId\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <textarea [formControl]=\"title\" matInput placeholder=\"title\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field>\n        <input [formControl]=\"completed\" matInput placeholder=\"completed\">\n    </mat-form-field>\n\n    <button (click)=\"addTodo()\" mat-stroked-button color=\"primary\">submit</button>\n\n   \n    <h3>to see the new list :\n    <a mat-stroked-button routerLink=\"/todos\">click here</a></h3>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _comps_to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/to-dos/to-dos.component */ "./src/app/comps/to-dos/to-dos.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _forms_to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/to-do-form/to-do-form.component */ "./src/app/forms/to-do-form/to-do-form.component.ts");
/* harmony import */ var _comps_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/users/users.component */ "./src/app/comps/users/users.component.ts");
/* harmony import */ var _forms_the_users_forms_the_users_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/the-users-forms/the-users-forms.component */ "./src/app/forms/the-users-forms/the-users-forms.component.ts");
/* harmony import */ var _forms_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/post-form/post-form.component */ "./src/app/forms/post-form/post-form.component.ts");
/* harmony import */ var _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/posts/posts.component */ "./src/app/comps/posts/posts.component.ts");
/* harmony import */ var _forms_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/album-form/album-form.component */ "./src/app/forms/album-form/album-form.component.ts");
/* harmony import */ var _comps_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/albums/albums.component */ "./src/app/comps/albums/albums.component.ts");
/* harmony import */ var _comps_navi_navi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/navi/navi.component */ "./src/app/comps/navi/navi.component.ts");
/* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");














const routes = [
    { path: 'addToDo', component: _forms_to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_5__["ToDoFormComponent"] },
    { path: 'todos', component: _comps_to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_3__["ToDosComponent"] },
    { path: 'search', component: _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"] },
    { path: 'app-users', component: _comps_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"] },
    { path: 'addUser', component: _forms_the_users_forms_the_users_forms_component__WEBPACK_IMPORTED_MODULE_7__["TheUsersFormsComponent"] },
    { path: 'addPost', component: _forms_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_8__["PostFormComponent"] },
    { path: 'posts', component: _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"] },
    { path: 'addAlbum', component: _forms_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_10__["AlbumFormComponent"] },
    { path: 'albums', component: _comps_albums_albums_component__WEBPACK_IMPORTED_MODULE_11__["AlbumsComponent"] },
    { path: 'navi', component: _comps_navi_navi_component__WEBPACK_IMPORTED_MODULE_12__["NaviComponent"] },
    { path: 'login', component: _comps_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: '', redirectTo: 'app-users', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-login{\r\n    height:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1sb2dpbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularProject';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/to-dos/to-dos.component */ "./src/app/comps/to-dos/to-dos.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _forms_to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/to-do-form/to-do-form.component */ "./src/app/forms/to-do-form/to-do-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _module_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module/module */ "./src/app/module/module.ts");
/* harmony import */ var _comps_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/users/users.component */ "./src/app/comps/users/users.component.ts");
/* harmony import */ var _forms_the_users_forms_the_users_forms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/the-users-forms/the-users-forms.component */ "./src/app/forms/the-users-forms/the-users-forms.component.ts");
/* harmony import */ var _comps_albums_albums_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/albums/albums.component */ "./src/app/comps/albums/albums.component.ts");
/* harmony import */ var _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/posts/posts.component */ "./src/app/comps/posts/posts.component.ts");
/* harmony import */ var _forms_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/post-form/post-form.component */ "./src/app/forms/post-form/post-form.component.ts");
/* harmony import */ var _forms_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forms/album-form/album-form.component */ "./src/app/forms/album-form/album-form.component.ts");
/* harmony import */ var _comps_navi_navi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comps/navi/navi.component */ "./src/app/comps/navi/navi.component.ts");
/* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _comps_to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_6__["ToDosComponent"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"],
            _forms_to_do_form_to_do_form_component__WEBPACK_IMPORTED_MODULE_9__["ToDoFormComponent"],
            _comps_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
            _forms_the_users_forms_the_users_forms_component__WEBPACK_IMPORTED_MODULE_13__["TheUsersFormsComponent"],
            _comps_albums_albums_component__WEBPACK_IMPORTED_MODULE_14__["AlbumsComponent"],
            _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_15__["PostsComponent"],
            _forms_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_16__["PostFormComponent"],
            _forms_album_form_album_form_component__WEBPACK_IMPORTED_MODULE_17__["AlbumFormComponent"],
            _comps_navi_navi_component__WEBPACK_IMPORTED_MODULE_18__["NaviComponent"],
            _comps_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _module_module__WEBPACK_IMPORTED_MODULE_11__["Module"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comps/albums/albums.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/albums/albums.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\r\n    background-color: lightgray;\r\n    width: 50%;\r\n    margin: 10px;\r\n}\r\nh1{\r\n    width: 50%;   \r\n}\r\nfieldset{\r\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMsUJYvNkwoF_JiyrgSO2t1i8tgHcb8r6Up3vZZNvXo-VNCmhHYz3Hfzb&s\") ;\r\n    background-repeat:no-repeat;\r\n    background-position:right top;\r\n    width: 20%;\r\n    margin: 70px;\r\n}\r\nh3{\r\n    margin: 40px;\r\n}\r\nmat-card li{\r\n    margin: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDRJQUE0STtJQUM1SSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgd2lkdGg6IDUwJTsgICBcclxufVxyXG5maWVsZHNldHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1R5TXNVSll2Tmt3b0ZfSml5cmdTTzJ0MWk4dGdIY2I4cjZVcDN2WlpOdlhvLVZOQ21oSFl6M0hmemImc1wiKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IHRvcDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IDcwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn1cclxubWF0LWNhcmQgbGl7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/albums/albums.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/albums/albums.component.ts ***!
  \**************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/album.service */ "./src/app/services/album.service.ts");



let AlbumsComponent = class AlbumsComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
    }
};
AlbumsComponent.ctorParameters = () => [
    { type: src_app_services_album_service__WEBPACK_IMPORTED_MODULE_2__["AlbumService"] }
];
AlbumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-albums',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./albums.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/albums/albums.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./albums.component.css */ "./src/app/comps/albums/albums.component.css")).default]
    })
], AlbumsComponent);



/***/ }),

/***/ "./src/app/comps/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ndiv{\r\n  background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPC0dYIYHSmBiCLdh_RRVQHFspEnla0aPjlbJLv8cNYfyiekBv&s\") ;\r\n  background-repeat:no-repeat;\r\n  background-size:100% 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.example-form{\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n}\r\n/* .example-full-width {\r\n    width: 100%;\r\n  } */\r\n/* .example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;s\r\n  \r\n} */\r\nbutton{\r\n  width: 20%;\r\n  background-color:grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxvSUFBb0k7RUFDcEksMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBR0U7O0tBRUc7QUFDSDs7OztHQUlDO0FBQ0g7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXZ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUlBDMGRZSVlIU21CaUNMZGhfUlJWUUhGc3BFbmxhMGFQamxiSkx2OGNOWWZ5aWVrQnYmc1wiKSA7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZXhhbXBsZS1mb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4gIFxyXG4gIC8qIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSAqL1xyXG4gIC8qIC5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O3NcclxuICBcclxufSAqL1xyXG5idXR0b257XHJcbiAgd2lkdGg6IDIwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(svc, logSvc) {
        this.svc = svc;
        this.logSvc = logSvc;
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.users = [];
    }
    ngOnInit() {
    }
    CheckLogin() {
        this.svc.data.subscribe(da => { this.users = da; });
        console.log("this is the form username", this.userName.value);
        console.log(this.users);
        let y = this.users.filter(user => { return user.username == this.userName.value; });
        console.log(y);
        try {
            if (y[0].id == this.password.value) {
                this.logSvc.x = true;
            }
        }
        catch (error) {
            alert('wrong user name or password , try again');
            this.logSvc.x = false;
        }
        this.logSvc.name = this.userName.value;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/comps/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/comps/navi/navi.component.css":
/*!***********************************************!*\
  !*** ./src/app/comps/navi/navi.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nnav {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding: 50px;\r\n    background:cadetblue;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\nh3{\r\n    margin-left:80%;\r\n}\r\n\r\n\r\n\r\n/* header{\r\n    background:cadetblue;\r\n    padding: 70px 16px 16px;\r\n    color: white;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbmF2aS9uYXZpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUdBOzs7O0dBSUciLCJmaWxlIjoic3JjL2FwcC9jb21wcy9uYXZpL25hdmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJhY2tncm91bmQ6Y2FkZXRibHVlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5oM3tcclxuICAgIG1hcmdpbi1sZWZ0OjgwJTtcclxufVxyXG5cclxuXHJcbi8qIGhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6Y2FkZXRibHVlO1xyXG4gICAgcGFkZGluZzogNzBweCAxNnB4IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/comps/navi/navi.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/navi/navi.component.ts ***!
  \**********************************************/
/*! exports provided: NaviComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviComponent", function() { return NaviComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");



let NaviComponent = class NaviComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
    }
};
NaviComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
NaviComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navi/navi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navi.component.css */ "./src/app/comps/navi/navi.component.css")).default]
    })
], NaviComponent);



/***/ }),

/***/ "./src/app/comps/posts/posts.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/posts/posts.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\r\n    background-color: lightgray;\r\n    width: 50%;\r\n    margin: 10px;\r\n}\r\nh1{\r\n    width: 50%;   \r\n}\r\nfieldset{\r\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMsUJYvNkwoF_JiyrgSO2t1i8tgHcb8r6Up3vZZNvXo-VNCmhHYz3Hfzb&s\") ;\r\n    background-repeat:no-repeat;\r\n    background-position:right top;\r\n    width: 20%;\r\n    margin: 70px;\r\n}\r\nh3{\r\n    margin: 40px;\r\n}\r\nmat-card li{\r\n    margin: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSw0SUFBNEk7SUFDNUksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuaDF7XHJcbiAgICB3aWR0aDogNTAlOyAgIFxyXG59XHJcbmZpZWxkc2V0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVHlNc1VKWXZOa3dvRl9KaXlyZ1NPMnQxaTh0Z0hjYjhyNlVwM3ZaWk52WG8tVk5DbWhIWXozSGZ6YiZzXCIpIDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246cmlnaHQgdG9wO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbjogNzBweDtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbjogNDBweDtcclxufVxyXG5tYXQtY2FyZCBsaXtcclxuICAgIG1hcmdpbjogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");



let PostsComponent = class PostsComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
    }
};
PostsComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/comps/posts/posts.component.css")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/comps/to-dos/to-dos.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/to-dos/to-dos.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\r\n    background-color: lightgray;\r\n    width: 50%;\r\n    margin: 10px;\r\n}\r\nh1{\r\n    width: 50%;   \r\n}\r\nfieldset{\r\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMsUJYvNkwoF_JiyrgSO2t1i8tgHcb8r6Up3vZZNvXo-VNCmhHYz3Hfzb&s\") ;\r\n    background-repeat:no-repeat;\r\n    background-position:right top;\r\n    width: 20%;\r\n    margin: 70px;\r\n}\r\nh3{\r\n    margin: 40px;\r\n}\r\nmat-card li{\r\n    margin: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdG8tZG9zL3RvLWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDRJQUE0STtJQUM1SSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvdG8tZG9zL3RvLWRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgd2lkdGg6IDUwJTsgICBcclxufVxyXG5maWVsZHNldHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1R5TXNVSll2Tmt3b0ZfSml5cmdTTzJ0MWk4dGdIY2I4cjZVcDN2WlpOdlhvLVZOQ21oSFl6M0hmemImc1wiKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IHRvcDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IDcwcHg7XHJcbn1cclxuaDN7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn1cclxubWF0LWNhcmQgbGl7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/to-dos/to-dos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/to-dos/to-dos.component.ts ***!
  \**************************************************/
/*! exports provided: ToDosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDosComponent", function() { return ToDosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/todos.service */ "./src/app/services/todos.service.ts");



let ToDosComponent = class ToDosComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
    }
};
ToDosComponent.ctorParameters = () => [
    { type: src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] }
];
ToDosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-to-dos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./to-dos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/to-dos/to-dos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./to-dos.component.css */ "./src/app/comps/to-dos/to-dos.component.css")).default]
    })
], ToDosComponent);



/***/ }),

/***/ "./src/app/comps/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\r\n    background-color: lightgray;\r\n    width: 35%;\r\n    margin: 10px;\r\n}\r\nh1{\r\n    width: 25%; \r\n    padding: 50px;  \r\n}\r\nfieldset{\r\n    background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMsUJYvNkwoF_JiyrgSO2t1i8tgHcb8r6Up3vZZNvXo-VNCmhHYz3Hfzb&s\") ;\r\n    background-repeat:no-repeat;\r\n    background-position:right top;\r\n    width: 20%;\r\n    margin-left: 70px;\r\n    margin-top: 4px;\r\n}\r\nh3{\r\n    padding-top: 45px;\r\n    margin-bottom: -75px;\r\n    margin-left: 1700px;\r\n}\r\nmat-card li{\r\n    margin: 15px;\r\n}\r\nh2{\r\n    margin: 75px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLDRJQUE0STtJQUM1SSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgd2lkdGg6IDI1JTsgXHJcbiAgICBwYWRkaW5nOiA1MHB4OyAgXHJcbn1cclxuZmllbGRzZXR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUeU1zVUpZdk5rd29GX0ppeXJnU08ydDFpOHRnSGNiOHI2VXAzdlpaTnZYby1WTkNtaEhZejNIZnpiJnNcIikgO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCB0b3A7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC03NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3MDBweDtcclxufVxyXG5tYXQtY2FyZCBsaXtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5oMntcclxuICAgIG1hcmdpbjogNzVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/comps/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




let UsersComponent = class UsersComponent {
    constructor(svc, logSvc) {
        this.svc = svc;
        this.logSvc = logSvc;
        this.svc.data.subscribe(d => this.users = d.length);
        console.log(this.users);
        console.log(this.svc.data);
    }
    ngOnInit() {
    }
};
UsersComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/comps/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/forms/album-form/album-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forms/album-form/album-form.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-album{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  div{\r\n    width: 50%;\r\n    margin:20%;\r\n  }\r\n  \r\n  button{\r\n    /* margin-right: 8px;    */\r\n    width: 20%;\r\n    background-color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvYWxidW0tZm9ybS9hbGJ1bS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvYWxidW0tZm9ybS9hbGJ1bS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWFsYnVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIGRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46MjAlO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDhweDsgICAgKi9cclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/forms/album-form/album-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/album-form/album-form.component.ts ***!
  \**********************************************************/
/*! exports provided: AlbumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumFormComponent", function() { return AlbumFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/album.service */ "./src/app/services/album.service.ts");




let AlbumFormComponent = class AlbumFormComponent {
    constructor(svc) {
        this.svc = svc;
        this.userId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
    }
    addAlbum() {
        let newAlbum = { userId: this.userId.value, id: this.id.value, title: this.title.value };
        console.log('ainsid addAlbum');
        console.log(this.svc.data);
        this.svc.addNewItem(newAlbum);
    }
};
AlbumFormComponent.ctorParameters = () => [
    { type: src_app_services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"] }
];
AlbumFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/album-form/album-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-form.component.css */ "./src/app/forms/album-form/album-form.component.css")).default]
    })
], AlbumFormComponent);



/***/ }),

/***/ "./src/app/forms/post-form/post-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/forms/post-form/post-form.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-post{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  div{\r\n    width: 50%;\r\n    margin:20%;\r\n  }\r\n  \r\n  button{\r\n    /* margin-right: 8px;    */\r\n    width: 20%;\r\n    background-color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvcG9zdC1mb3JtL3Bvc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3Bvc3QtZm9ybS9wb3N0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcG9zdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICBkaXZ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOjIwJTtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiA4cHg7ICAgICovXHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/forms/post-form/post-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/post-form/post-form.component.ts ***!
  \********************************************************/
/*! exports provided: PostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormComponent", function() { return PostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PostFormComponent = class PostFormComponent {
    constructor(svc) {
        this.svc = svc;
        this.userId = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.body = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    ngOnInit() {
    }
    addPost() {
        let newPost = { userId: this.userId.value, id: this.id.value, title: this.title.value, body: this.body.value };
        console.log('ainsid addPost');
        console.log(this.svc.data);
        this.svc.addNewItem(newPost);
    }
};
PostFormComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
PostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/post-form/post-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-form.component.css */ "./src/app/forms/post-form/post-form.component.css")).default]
    })
], PostFormComponent);



/***/ }),

/***/ "./src/app/forms/the-users-forms/the-users-forms.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/forms/the-users-forms/the-users-forms.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-user{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n div{\r\n    width: 50%;\r\n    margin:20%;\r\n  }\r\n  \r\n button{\r\n    /* margin-right: 8px;    */\r\n    width: 20%;\r\n    background-color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdGhlLXVzZXJzLWZvcm1zL3RoZS11c2Vycy1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7Q0FFRDtJQUNHLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0NBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3RoZS11c2Vycy1mb3Jtcy90aGUtdXNlcnMtZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtdXNlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuIGRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46MjAlO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDhweDsgICAgKi9cclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/forms/the-users-forms/the-users-forms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/the-users-forms/the-users-forms.component.ts ***!
  \********************************************************************/
/*! exports provided: TheUsersFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheUsersFormsComponent", function() { return TheUsersFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");




let TheUsersFormsComponent = class TheUsersFormsComponent {
    constructor(svc) {
        this.svc = svc;
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
    }
    addUser() {
        let newUser = { id: this.id.value, name: this.name.value, username: this.username.value, email: this.email.value };
        console.log('ainsid addUser');
        console.log(this.svc.data);
        this.svc.addNewItem(newUser);
    }
};
TheUsersFormsComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
TheUsersFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-the-users-forms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./the-users-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/the-users-forms/the-users-forms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./the-users-forms.component.css */ "./src/app/forms/the-users-forms/the-users-forms.component.css")).default]
    })
], TheUsersFormsComponent);



/***/ }),

/***/ "./src/app/forms/to-do-form/to-do-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forms/to-do-form/to-do-form.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  div{\r\n    width: 50%;\r\n    margin:20%;\r\n  }\r\n  \r\n  button{\r\n    /* margin-right: 8px;    */\r\n    width: 20%;\r\n    background-color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdG8tZG8tZm9ybS90by1kby1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvdG8tZG8tZm9ybS90by1kby1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgZGl2e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjoyMCU7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIC8qIG1hcmdpbi1yaWdodDogOHB4OyAgICAqL1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/forms/to-do-form/to-do-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/to-do-form/to-do-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ToDoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoFormComponent", function() { return ToDoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/todos.service */ "./src/app/services/todos.service.ts");




let ToDoFormComponent = class ToDoFormComponent {
    constructor(svc) {
        this.svc = svc;
        this.userId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.completed = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
    }
    addTodo() {
        console.log(this.userId, this.title, this.completed);
        if (this.userId.value != "" && this.title.value != "" && this.completed.value != "") {
            let id = this.svc.api.length;
            this.svc.api.push({
                userId: this.userId.value,
                id: id,
                title: this.title.value,
                completed: this.completed.value
            });
        }
        console.log(this.svc.api);
        this.userId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.completed = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.addToLocalS();
    }
    addToLocalS() {
        let value = JSON.stringify(this.svc.api);
        localStorage.setItem('toDosArry', value);
        console.log('toDosArry', localStorage.getItem('toDosArry'));
    }
};
ToDoFormComponent.ctorParameters = () => [
    { type: src_app_services_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"] }
];
ToDoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-to-do-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./to-do-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/to-do-form/to-do-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./to-do-form.component.css */ "./src/app/forms/to-do-form/to-do-form.component.css")).default]
    })
], ToDoFormComponent);



/***/ }),

/***/ "./src/app/module/module.ts":
/*!**********************************!*\
  !*** ./src/app/module/module.ts ***!
  \**********************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let Module = class Module {
};
Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], Module);



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(arr, fieldName, value) {
        console.log('filterField', fieldName, value);
        if (arr && arr.length && arr.length > 0 && fieldName && value) {
            return arr.filter(item => item[fieldName] == (value));
        }
        return null;
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/services/album.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/album.service.ts ***!
  \*******************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AlbumService = class AlbumService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http, "albums");
        this.http = http;
    }
};
AlbumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AlbumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlbumService);



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class BaseService {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.data = this.dataSubject.asObservable();
        this.api = "https://jsonplaceholder.typicode.com/" + this.api;
        this.http.get(this.api).subscribe(arr => this.dataSubject.next(arr));
    }
    addNewItem(item) {
        let dynamicItems = localStorage[this.api] ?
            JSON.parse(localStorage[this.api]) : [];
        let apiItems = this.dataSubject.value;
        dynamicItems.push(item);
        localStorage[this.api] = JSON.stringify(dynamicItems);
        console.log('localArr', localStorage.getItem(this.api));
        apiItems.push(item);
        this.dataSubject.next(apiItems);
    }
}


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/services/users.service.ts");



let LoginService = class LoginService {
    constructor(svc) {
        this.svc = svc;
        this.users = [];
        this.x = false;
    }
};
LoginService.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginService.prototype, "userName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginService.prototype, "password", void 0);
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PostService = class PostService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http, "posts");
        this.http = http;
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/services/todos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/todos.service.ts ***!
  \*******************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TodosService = class TodosService {
    constructor(http) {
        this.http = http;
        this.http.get('https://jsonplaceholder.typicode.com/todos/')
            .subscribe(data => this.api = data);
        console.log(this.api, ' You see the TodosService');
    }
};
TodosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodosService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let UsersService = class UsersService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http, "users");
        this.http = http;
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Owner\Desktop\angular\angularProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map