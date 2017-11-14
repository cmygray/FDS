webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Todos</title>\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n        rel=\"stylesheet\">\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n</head>\n<body>\n<div class=\"container mat-typography\">\n  <h1 class=\"mat-h1\">Todos</h1>\n  <mat-form-field>\n    <input (keyup)=\"addTodo($event, $event.currentTarget.value)\" matInput class=\"todo-input\"\n      placeholder=\"What needs to be done?\" type=\"text\" autofocus>\n  </mat-form-field>\n  <mat-tab-group (click)=\"changeTabState($event.target)\">\n    <mat-tab label=\"All\"></mat-tab>\n    <mat-tab label=\"Active\"></mat-tab>\n    <mat-tab label=\"Completed\"></mat-tab>\n  </mat-tab-group>\n  <ul>\n    <li\n      *ngFor=\"let todo of todos\" class=\"todo-item\"\n      [style.display]=\"filterByComplete(todo.completed) ? '' : 'none'\">\n      <mat-card class=\"todo-item-content\">\n        <span>\n          <mat-checkbox (change)=\"checkTodo($event, todo.id)\" class=\"todo-item-check\"\n                      [checked]=\"todo.completed\"></mat-checkbox>{{ todo.content }}\n        </span>\n        <mat-icon (click)=\"removeTodo(todo.id)\" class=\"hover-action\">&#xE14C;</mat-icon>\n      </mat-card>\n    </li>\n  </ul>\n  <mat-checkbox (change)=\"completeAll($event)\"></mat-checkbox>\n  <span>Mark all as complete</span>\n  <button mat-button [disabled]=\"countCompleted() === 0\" (click)=\"clearCompleted()\" color=\"primary\">\n    Clear completed({{ countCompleted() }})</button>\n  <strong id=\"leftTodos\">{{ todos.length - countCompleted() }}</strong>items left\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "body {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px; }\n\n.material-icons {\n  cursor: pointer;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga'; }\n\n.container {\n  max-width: 720px;\n  margin: 0 auto; }\n\n.mat-form-field {\n  width: 100%;\n  font-size: 1.2rem; }\n\n.mat-tab-label {\n  width: 50px !important; }\n\nul {\n  padding: 0; }\n\nli {\n  list-style: none; }\n\n.mat-list .mat-list-item {\n  height: 100%;\n  font-size: 1rem; }\n\nli .mat-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-card span {\n  font-size: 1.2rem;\n  display: inline-block;\n  width: 100%;\n  height: 24px; }\n\nspan .mat-checkbox {\n  margin-right: 15px; }\n\n.hover-action {\n  display: none; }\n\n.todo-item:hover .hover-action {\n  display: inline-block;\n  transition: all .3s; }\n\n.container > .mat-checkbox {\n  width: 30px;\n  margin-left: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Todo = (function () {
    function Todo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return Todo;
}());
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.tabState = 'All';
        this.url = 'http://localhost:4500/todos';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.http.get(this.url)
            .subscribe(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.changeTabState = function (tab) {
        this.tabState = tab.textContent;
    };
    AppComponent.prototype.filterByComplete = function (completed) {
        switch (this.tabState) {
            case 'Active':
                return !completed;
            case 'Completed':
                return completed;
            case 'All':
                return true;
        }
    };
    AppComponent.prototype.countCompleted = function () {
        return this.todos.filter(function (todo) { return todo.completed; }).length;
    };
    AppComponent.prototype.getNewId = function () {
        return this.todos.length ? Math.max.apply(Math, this.todos.map(function (todo) { return todo.id; })) + 1 : 1;
    };
    AppComponent.prototype.addTodo = function (e, content) {
        var _this = this;
        if (e.code === 'Enter') {
            var payload = { id: this.getNewId(), content: content, completed: false };
            e.currentTarget.value = '';
            this.http.post(this.url, payload)
                .subscribe(function () { return _this.getTodos(); });
        }
    };
    AppComponent.prototype.removeTodo = function (id) {
        var _this = this;
        this.http.delete(this.url + "/id/" + id)
            .subscribe(function () { return _this.getTodos(); });
    };
    AppComponent.prototype.checkTodo = function (e, id) {
        var _this = this;
        var payload = { completed: e.checked };
        this.http.patch(this.url + "/" + id, payload)
            .subscribe(function () { return _this.getTodos(); });
    };
    AppComponent.prototype.completeAll = function (e) {
        var _this = this;
        this.http.patch("" + this.url, e.checked)
            .subscribe(function () { return _this.getTodos(); });
    };
    AppComponent.prototype.clearCompleted = function () {
        var _this = this;
        this.http.delete(this.url + "/completed")
            .subscribe(function () { return _this.getTodos(); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'todo-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map