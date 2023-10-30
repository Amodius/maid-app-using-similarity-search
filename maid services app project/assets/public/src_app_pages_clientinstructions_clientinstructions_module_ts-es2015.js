(self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_clientinstructions_clientinstructions_module_ts"],{

/***/ 25452:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/clientinstructions/clientinstructions-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientinstructionsPageRoutingModule": function() { return /* binding */ ClientinstructionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clientinstructions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientinstructions.page */ 79742);




const routes = [
    {
        path: '',
        component: _clientinstructions_page__WEBPACK_IMPORTED_MODULE_0__.ClientinstructionsPage
    }
];
let ClientinstructionsPageRoutingModule = class ClientinstructionsPageRoutingModule {
};
ClientinstructionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientinstructionsPageRoutingModule);



/***/ }),

/***/ 48282:
/*!***********************************************************************!*\
  !*** ./src/app/pages/clientinstructions/clientinstructions.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientinstructionsPageModule": function() { return /* binding */ ClientinstructionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _clientinstructions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientinstructions-routing.module */ 25452);
/* harmony import */ var _clientinstructions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientinstructions.page */ 79742);







let ClientinstructionsPageModule = class ClientinstructionsPageModule {
};
ClientinstructionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clientinstructions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientinstructionsPageRoutingModule
        ],
        declarations: [_clientinstructions_page__WEBPACK_IMPORTED_MODULE_1__.ClientinstructionsPage]
    })
], ClientinstructionsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_clientinstructions_clientinstructions_module_ts-es2015.js.map