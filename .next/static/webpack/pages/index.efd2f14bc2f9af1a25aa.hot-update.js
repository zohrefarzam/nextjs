webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MiddleSection.js":
/*!*************************************!*\
  !*** ./components/MiddleSection.js ***!
  \*************************************/
/*! exports provided: MiddleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleSection", function() { return MiddleSection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_katod_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Clock */ "./components/Clock.js");
/* harmony import */ var react_clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-clock */ "./node_modules/react-clock/dist/esm/index.js");
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-clock/dist/Clock.css */ "./node_modules/react-clock/dist/Clock.css");
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\katod\\Desktop\\nextjs-blog\\components\\MiddleSection.js",
    _this = undefined,
    _s = $RefreshSig$();





var MiddleSection = function MiddleSection() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState2 = Object(C_Users_katod_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var interval = setInterval(function () {
      return setValue(new Date());
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Current time:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_clock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(MiddleSection, "H1BX8o8YjT8zfL/MJZc9xOZY6E4=");

_c = MiddleSection;

var _c;

$RefreshReg$(_c, "MiddleSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-clock/dist/Clock.css":
/*!*************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/react-clock/dist/Clock.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".react-clock {\n  display: block;\n  position: relative;\n}\n.react-clock,\n.react-clock *,\n.react-clock *:before,\n.react-clock *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-clock__face {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid black;\n  border-radius: 50%;\n}\n.react-clock__hand {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__hand__body {\n  position: absolute;\n  background-color: black;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.react-clock__mark {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__mark__body {\n  position: absolute;\n  background-color: black;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.react-clock__mark__number {\n  position: absolute;\n  left: -40px;\n  width: 80px;\n  text-align: center;\n}\n.react-clock__second-hand__body {\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://node_modules/react-clock/dist/Clock.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;;;;EAKE,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,mCAA2B;UAA3B,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,mCAA2B;UAA3B,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB","sourcesContent":[".react-clock {\n  display: block;\n  position: relative;\n}\n.react-clock,\n.react-clock *,\n.react-clock *:before,\n.react-clock *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-clock__face {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid black;\n  border-radius: 50%;\n}\n.react-clock__hand {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__hand__body {\n  position: absolute;\n  background-color: black;\n  transform: translateX(-50%);\n}\n.react-clock__mark {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__mark__body {\n  position: absolute;\n  background-color: black;\n  transform: translateX(-50%);\n}\n.react-clock__mark__number {\n  position: absolute;\n  left: -40px;\n  width: 80px;\n  text-align: center;\n}\n.react-clock__second-hand__body {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-clock/dist/Clock.css":
/*!*************************************************!*\
  !*** ./node_modules/react-clock/dist/Clock.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./Clock.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-clock/dist/Clock.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./Clock.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-clock/dist/Clock.css",
      function () {
        content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./Clock.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-clock/dist/Clock.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaWRkbGVTZWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY2xvY2svZGlzdC9DbG9jay5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jbG9jay9kaXN0L0Nsb2NrLmNzcz81N2Q3Il0sIm5hbWVzIjpbIk1pZGRsZVNlY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiRGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsd0JBQ1BDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFJQyxJQUFKLEVBQWYsQ0FETztBQUFBO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUdqQ0osOENBQUssQ0FBQ0ssU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUMxQjtBQUFBLGFBQU1ILFFBQVEsQ0FBQyxJQUFJRixJQUFKLEVBQUQsQ0FBZDtBQUFBLEtBRDBCLEVBRTFCLElBRjBCLENBQTVCO0FBS0EsV0FBTyxZQUFNO0FBQ1hNLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQVRELEVBU0csRUFUSDtBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLG1EQUFEO0FBQU8sV0FBSyxFQUFFSDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBcEJNOztHQUFNSixhOztLQUFBQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmI7QUFBQTtBQUFBO0FBQUE7QUFDcUY7QUFDckYsOEJBQThCLDRFQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGlCQUFpQixtQkFBbUIsdUJBQXVCLEdBQUcsZ0ZBQWdGLG1DQUFtQywyQkFBMkIsR0FBRyxzQkFBc0IsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIsV0FBVyxjQUFjLGNBQWMsZUFBZSxHQUFHLDRCQUE0Qix1QkFBdUIsNEJBQTRCLHdDQUF3Qyx3Q0FBd0MsR0FBRyxzQkFBc0IsdUJBQXVCLFdBQVcsY0FBYyxjQUFjLGVBQWUsR0FBRyw0QkFBNEIsdUJBQXVCLDRCQUE0Qix3Q0FBd0Msd0NBQXdDLEdBQUcsOEJBQThCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHVCQUF1QixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyxTQUFTLHdHQUF3RyxVQUFVLFlBQVksTUFBTSxRQUFRLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksd0NBQXdDLG1CQUFtQix1QkFBdUIsR0FBRyxnRkFBZ0YsZ0NBQWdDLG1DQUFtQywyQkFBMkIsR0FBRyxzQkFBc0IsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIsV0FBVyxjQUFjLGNBQWMsZUFBZSxHQUFHLDRCQUE0Qix1QkFBdUIsNEJBQTRCLGdDQUFnQyxHQUFHLHNCQUFzQix1QkFBdUIsV0FBVyxjQUFjLGNBQWMsZUFBZSxHQUFHLDRCQUE0Qix1QkFBdUIsNEJBQTRCLGdDQUFnQyxHQUFHLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLGdCQUFnQix1QkFBdUIsR0FBRyxtQ0FBbUMsMEJBQTBCLEdBQUcscUJBQXFCO0FBQ3pxRjtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNOdkMsVUFBVSxtQkFBTyxDQUFDLHlNQUE4RjtBQUNoSCwwQkFBMEIsbUJBQU8sQ0FBQywyU0FBNkk7O0FBRS9LOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLDJTQUE2STtBQUNuSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJTQUE2STs7QUFFdks7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZmQyZjE0YmMyZjlhZjFhMjVhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDbG9ja0NvbSB9IGZyb20gJy4vQ2xvY2snXHJcbmltcG9ydCBDbG9jayBmcm9tICdyZWFjdC1jbG9jayc7XHJcbmltcG9ydCAncmVhY3QtY2xvY2svZGlzdC9DbG9jay5jc3MnO1xyXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICgpID0+IHNldFZhbHVlKG5ldyBEYXRlKCkpLFxyXG4gICAgICAxMDAwXHJcbiAgICApO1xyXG4gXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+Q3VycmVudCB0aW1lOjwvcD5cclxuICAgICAgPENsb2NrIHZhbHVlPXt2YWx1ZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3QtY2xvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5yZWFjdC1jbG9jayxcXG4ucmVhY3QtY2xvY2sgKixcXG4ucmVhY3QtY2xvY2sgKjpiZWZvcmUsXFxuLnJlYWN0LWNsb2NrICo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnJlYWN0LWNsb2NrX19mYWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ucmVhY3QtY2xvY2tfX2hhbmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG59XFxuLnJlYWN0LWNsb2NrX19oYW5kX19ib2R5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLnJlYWN0LWNsb2NrX19tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcbi5yZWFjdC1jbG9ja19fbWFya19fYm9keSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5yZWFjdC1jbG9ja19fbWFya19fbnVtYmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC00MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yZWFjdC1jbG9ja19fc2Vjb25kLWhhbmRfX2JvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3JlYWN0LWNsb2NrL2Rpc3QvQ2xvY2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBOzs7O0VBS0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJlYWN0LWNsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucmVhY3QtY2xvY2ssXFxuLnJlYWN0LWNsb2NrICosXFxuLnJlYWN0LWNsb2NrICo6YmVmb3JlLFxcbi5yZWFjdC1jbG9jayAqOmFmdGVyIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5yZWFjdC1jbG9ja19fZmFjZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnJlYWN0LWNsb2NrX19oYW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcbi5yZWFjdC1jbG9ja19faGFuZF9fYm9keSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLnJlYWN0LWNsb2NrX19tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcbi5yZWFjdC1jbG9ja19fbWFya19fYm9keSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLnJlYWN0LWNsb2NrX19tYXJrX19udW1iZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJlYWN0LWNsb2NrX19zZWNvbmQtaGFuZF9fYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL0Nsb2NrLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL0Nsb2NrLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9DbG9jay5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==