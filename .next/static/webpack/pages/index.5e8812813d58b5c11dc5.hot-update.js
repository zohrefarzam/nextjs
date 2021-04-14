webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: ClockCom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockCom", function() { return ClockCom; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clock */ "./node_modules/react-clock/dist/esm/index.js");
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-clock/dist/Clock.css */ "./node_modules/react-clock/dist/Clock.css");
/* harmony import */ var react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_clock_dist_Clock_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\katod\\Desktop\\nextjs-blog\\components\\Clock.js",
    _s = $RefreshSig$();




function ClockCom() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()),
      value = _useState[0],
      setValue = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      return setValue(new Date());
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: 'red'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Current time:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        zIndex: -1
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_clock__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(ClockCom, "H1BX8o8YjT8zfL/MJZc9xOZY6E4=");

_c = ClockCom;

var _c;

$RefreshReg$(_c, "ClockCom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay5qcyJdLCJuYW1lcyI6WyJDbG9ja0NvbSIsInVzZVN0YXRlIiwiRGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ1EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQURSO0FBQUEsTUFDbkJDLEtBRG1CO0FBQUEsTUFDWkMsUUFEWTs7QUFHMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUMxQjtBQUFBLGFBQU1ILFFBQVEsQ0FBQyxJQUFJRixJQUFKLEVBQUQsQ0FBZDtBQUFBLEtBRDBCLEVBRTFCLElBRjBCLENBQTVCO0FBS0EsV0FBTyxZQUFNO0FBQ1hNLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0cscUJBQWUsRUFBQztBQUFqQixLQUFaO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBQyxDQUFDO0FBQVQsT0FBWjtBQUFBLDZCQUNBLHFFQUFDLG1EQUFEO0FBQU8sYUFBSyxFQUFFUDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0F0QmdCSCxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlODgxMjgxM2Q1OGI1YzExZGM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENsb2NrIGZyb20gJ3JlYWN0LWNsb2NrJztcclxuaW1wb3J0ICdyZWFjdC1jbG9jay9kaXN0L0Nsb2NrLmNzcyc7XHJcbmV4cG9ydCAgZnVuY3Rpb24gQ2xvY2tDb20oKSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKFxyXG4gICAgICAoKSA9PiBzZXRWYWx1ZShuZXcgRGF0ZSgpKSxcclxuICAgICAgMTAwMFxyXG4gICAgKTtcclxuIFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JlZCd9fSA+XHJcbiAgICAgIDxwPkN1cnJlbnQgdGltZTo8L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3t6SW5kZXg6LTF9fT5cclxuICAgICAgPENsb2NrIHZhbHVlPXt2YWx1ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9