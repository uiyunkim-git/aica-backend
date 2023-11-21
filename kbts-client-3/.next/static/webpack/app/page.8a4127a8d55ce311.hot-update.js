"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/templates/Chat/Chat.tsx":
/*!************************************************!*\
  !*** ./src/components/templates/Chat/Chat.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chat: function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _Chat_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.styled */ \"(app-client)/./src/components/templates/Chat/Chat.styled.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const { isError, data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({\n        queryKey: [\n            \"courseData\"\n        ],\n        queryFn: async ()=>{\n            const { data } = await fetch(\"http://localhost:8000/\").then((res)=>res.json());\n            return data;\n        },\n        refetchInterval: 100\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Background, {\n        children: isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Container, {\n            children: \"에러 발생\"\n        }, void 0, false, {\n            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.TextContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                            children: \"원본 텍스트\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            isOrigin: true,\n                            children: data === null || data === void 0 ? void 0 : data.original_text\n                        }, void 0, false, {\n                            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.TextContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                            children: \"번역 텍스트\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            isOrigin: false,\n                            children: data === null || data === void 0 ? void 0 : data.translated_text\n                        }, void 0, false, {\n                            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.TextContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                            children: \"몰라 텍스트\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            isOrigin: false,\n                            children: data === null || data === void 0 ? void 0 : data.translated_text\n                        }, void 0, false, {\n                            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n            lineNumber: 33,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/uiyunkim/Documents/GitHub/aica-backend/kbts-client/src/components/templates/Chat/Chat.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"kGz73S/3n486rH590WjS92nJzxA=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL0NoYXQvQ2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEO0FBUTFCO0FBT2hCLFNBQVNNOztJQUNaLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBR1IsK0RBQVFBLENBQWU7UUFDN0NTLFVBQVU7WUFBQztTQUFhO1FBQ3hCQyxTQUFTO1lBQ0wsTUFBTSxFQUFFRixJQUFJLEVBQUUsR0FBRyxNQUFNRyxNQUFPLDBCQUF5QkMsS0FDbkQsQ0FBQ0MsTUFBUUEsSUFBSUM7WUFFakIsT0FBT047UUFDWDtRQUNBTyxpQkFBaUI7SUFDckI7SUFFQSxxQkFDSSw4REFBQ2Qsb0RBQVVBO2tCQUNOTSx3QkFDRyw4REFBQ0wsbURBQVNBO3NCQUFDOzs7OztpQ0FFWCw4REFBQ0EsbURBQVNBOzs4QkFDTiw4REFBQ0csdURBQWFBOztzQ0FDViw4REFBQ0YsK0NBQUtBO3NDQUFDOzs7Ozs7c0NBQ1AsOERBQUNDLDhDQUFJQTs0QkFBQ1ksUUFBUTtzQ0FBRVIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUzs7Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQ1osdURBQWFBOztzQ0FDViw4REFBQ0YsK0NBQUtBO3NDQUFDOzs7Ozs7c0NBQ1AsOERBQUNDLDhDQUFJQTs0QkFBQ1ksVUFBVTtzQ0FBUVIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVTs7Ozs7Ozs7Ozs7OzhCQUVsQyw4REFBQ2IsdURBQWFBOztzQ0FDViw4REFBQ0YsK0NBQUtBO3NDQUFDOzs7Ozs7c0NBQ1AsOERBQUNDLDhDQUFJQTs0QkFBQ1ksVUFBVTtzQ0FBUVIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0FsQ2dCWjs7UUFDY04sMkRBQVFBOzs7S0FEdEJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9DaGF0L0NoYXQudHN4P2QyMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuXG5pbXBvcnQge1xuICAgIEJhY2tncm91bmQsXG4gICAgQ29udGFpbmVyLFxuICAgIExhYmVsLFxuICAgIFRleHQsXG4gICAgVGV4dENvbnRhaW5lcixcbn0gZnJvbSAnLi9DaGF0LnN0eWxlZCc7XG5cbnR5cGUgUmVzcG9uc2VUeXBlID0ge1xuICAgIG9yaWdpbmFsX3RleHQ6IHN0cmluZztcbiAgICB0cmFuc2xhdGVkX3RleHQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0KCkge1xuICAgIGNvbnN0IHsgaXNFcnJvciwgZGF0YSB9ID0gdXNlUXVlcnk8UmVzcG9uc2VUeXBlPih7XG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2NvdXJzZURhdGEnXSxcbiAgICAgICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ApLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlcykgPT4gcmVzLmpzb24oKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXRjaEludGVydmFsOiAxMDAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmFja2dyb3VuZD5cbiAgICAgICAgICAgIHtpc0Vycm9yID8gKFxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+7JeQ65+sIOuwnOyDnTwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD7sm5Drs7gg7YWN7Iqk7Yq4PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGlzT3JpZ2luPntkYXRhPy5vcmlnaW5hbF90ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD7rsojsl60g7YWN7Iqk7Yq4PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGlzT3JpZ2luPXtmYWxzZX0+e2RhdGE/LnRyYW5zbGF0ZWRfdGV4dH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+66qw6528IO2FjeyKpO2KuDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBpc09yaWdpbj17ZmFsc2V9PntkYXRhPy50cmFuc2xhdGVkX3RleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0JhY2tncm91bmQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIkJhY2tncm91bmQiLCJDb250YWluZXIiLCJMYWJlbCIsIlRleHQiLCJUZXh0Q29udGFpbmVyIiwiQ2hhdCIsImlzRXJyb3IiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlZmV0Y2hJbnRlcnZhbCIsImlzT3JpZ2luIiwib3JpZ2luYWxfdGV4dCIsInRyYW5zbGF0ZWRfdGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/templates/Chat/Chat.tsx\n"));

/***/ })

});