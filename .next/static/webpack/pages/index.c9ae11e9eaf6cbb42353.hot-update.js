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



var _jsxFileName = "C:\\Users\\katod\\Desktop\\nextjs-blog\\components\\MiddleSection.js",
    _this = undefined,
    _s = $RefreshSig$();




var MiddleSection = function MiddleSection() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState2 = Object(C_Users_katod_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  useEffect(function () {
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
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_clock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaWRkbGVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk1pZGRsZVNlY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiRGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSx3QkFDUEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQUlDLElBQUosRUFBZixDQURPO0FBQUE7QUFBQSxNQUMxQkMsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUI7O0FBR2pDQyxXQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUMxQjtBQUFBLGFBQU1ILFFBQVEsQ0FBQyxJQUFJRixJQUFKLEVBQUQsQ0FBZDtBQUFBLEtBRDBCLEVBRTFCLElBRjBCLENBQTVCO0FBS0EsV0FBTyxZQUFNO0FBQ1hNLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsbURBQUQ7QUFBTyxXQUFLLEVBQUVIO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FwQk07O0dBQU1KLGE7O0tBQUFBLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzlhZTExZTllYWY2Y2JiNDIzNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2xvY2tDb20gfSBmcm9tICcuL0Nsb2NrJ1xyXG5pbXBvcnQgQ2xvY2sgZnJvbSAncmVhY3QtY2xvY2snO1xyXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICgpID0+IHNldFZhbHVlKG5ldyBEYXRlKCkpLFxyXG4gICAgICAxMDAwXHJcbiAgICApO1xyXG4gXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+Q3VycmVudCB0aW1lOjwvcD5cclxuICAgICAgPENsb2NrIHZhbHVlPXt2YWx1ZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==