(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkv1cleaners"] = self["webpackChunkv1cleaners"] || []).push([["src_app_pages_community_community_module_ts"], {
    /***/
    20601:
    /*!*************************************************************!*\
      !*** ./src/app/pages/community/community-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityPageRoutingModule": function CommunityPageRoutingModule() {
          return (
            /* binding */
            _CommunityPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _community_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./community.page */
      83718);

      var routes = [{
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_0__.CommunityPage
      }];

      var _CommunityPageRoutingModule = /*#__PURE__*/_createClass(function CommunityPageRoutingModule() {
        _classCallCheck(this, CommunityPageRoutingModule);
      });

      _CommunityPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CommunityPageRoutingModule);
      /***/
    },

    /***/
    93591:
    /*!*****************************************************!*\
      !*** ./src/app/pages/community/community.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityPageModule": function CommunityPageModule() {
          return (
            /* binding */
            _CommunityPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _community_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./community-routing.module */
      20601);
      /* harmony import */


      var _community_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./community.page */
      83718);

      var _CommunityPageModule = /*#__PURE__*/_createClass(function CommunityPageModule() {
        _classCallCheck(this, CommunityPageModule);
      });

      _CommunityPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _community_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunityPageRoutingModule],
        declarations: [_community_page__WEBPACK_IMPORTED_MODULE_1__.CommunityPage]
      })], _CommunityPageModule);
      /***/
    },

    /***/
    83718:
    /*!***************************************************!*\
      !*** ./src/app/pages/community/community.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityPage": function CommunityPage() {
          return (
            /* binding */
            _CommunityPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_community_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./community.page.html */
      38903);
      /* harmony import */


      var _community_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./community.page.scss */
      67950);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/local.service */
      85298);
      /* harmony import */


      var _services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/utility.service */
      67278);

      var _CommunityPage = /*#__PURE__*/function () {
        function CommunityPage(localService, utilityService) {
          _classCallCheck(this, CommunityPage);

          this.localService = localService;
          this.utilityService = utilityService;
          this.data = this.localService.getSettings().community;
        }

        _createClass(CommunityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CommunityPage;
      }();

      _CommunityPage.ctorParameters = function () {
        return [{
          type: _services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService
        }, {
          type: _services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService
        }];
      };

      _CommunityPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-community',
        template: _raw_loader_community_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_community_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CommunityPage);
      /***/
    },

    /***/
    67950:
    /*!*****************************************************!*\
      !*** ./src/app/pages/community/community.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tdW5pdHkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    38903:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/community/community.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase\">Community</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding general-page\" [innerHTML]=\"data\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_community_community_module_ts-es5.js.map