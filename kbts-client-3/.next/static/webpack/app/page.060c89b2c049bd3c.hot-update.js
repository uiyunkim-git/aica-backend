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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chat: function() { return /* binding */ Chat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _Chat_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.styled */ \"(app-client)/./src/components/templates/Chat/Chat.styled.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({\n        queryKey: [\n            \"courseData\"\n        ],\n        queryFn: async ()=>{\n            const { data } = await fetch(\"http://localhost:8000/\").then((res)=>res.json());\n            return data;\n        },\n        refetchInterval: 100\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Background, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.TextContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                            children: \"원본 텍스트\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            isOrigin: true,\n                            children: [\n                                data === null || data === void 0 ? void 0 : data.original_text,\n                                \"dffdffdafdwefaaf;a;nvgofafo\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.TextContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                            children: \"번역 텍스트\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            isOrigin: false,\n                            children: data === null || data === void 0 ? void 0 : data.translated_text\n                        }, void 0, false, {\n                            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.TextContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                            children: \"몰라 텍스트\"\n                        }, void 0, false, {\n                            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_styled__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            isOrigin: false,\n                            children: data === null || data === void 0 ? void 0 : data.third_text\n                        }, void 0, false, {\n                            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/huik0/Desktop/projects/aica-backend/kbts-client-3/src/components/templates/Chat/Chat.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Chat;\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL0NoYXQvQ2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEO0FBUTFCO0FBUWhCLFNBQVNNOztJQUNaLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdQLCtEQUFRQSxDQUFlO1FBQ3BDUSxVQUFVO1lBQUM7U0FBYTtRQUN4QkMsU0FBUztZQUNMLE1BQU0sRUFBRUYsSUFBSSxFQUFFLEdBQUcsTUFBTUcsTUFBTywwQkFBeUJDLEtBQUssQ0FBQ0MsTUFDekRBLElBQUlDO1lBRVIsT0FBT047UUFDWDtRQUNBTyxpQkFBaUI7SUFDckI7SUFFQSxxQkFDSSw4REFBQ2Isb0RBQVVBO2tCQUNQLDRFQUFDQyxtREFBU0E7OzhCQUNOLDhEQUFDRyx1REFBYUE7O3NDQUNWLDhEQUFDRiwrQ0FBS0E7c0NBQUM7Ozs7OztzQ0FDUCw4REFBQ0MsOENBQUlBOzRCQUFDVyxRQUFROztnQ0FBRVIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUztnQ0FBYzs7Ozs7Ozs7Ozs7Ozs4QkFFeEMsOERBQUNYLHVEQUFhQTs7c0NBQ1YsOERBQUNGLCtDQUFLQTtzQ0FBQzs7Ozs7O3NDQUNQLDhEQUFDQyw4Q0FBSUE7NEJBQUNXLFVBQVU7c0NBQVFSLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVU7Ozs7Ozs7Ozs7Ozs4QkFFbEMsOERBQUNaLHVEQUFhQTs7c0NBQ1YsOERBQUNGLCtDQUFLQTtzQ0FBQzs7Ozs7O3NDQUNQLDhEQUFDQyw4Q0FBSUE7NEJBQUNXLFVBQVU7c0NBQVFSLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xEO0dBOUJnQlo7O1FBQ0tOLDJEQUFRQTs7O0tBRGJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlcy9DaGF0L0NoYXQudHN4P2QyMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuXG5pbXBvcnQge1xuICAgIEJhY2tncm91bmQsXG4gICAgQ29udGFpbmVyLFxuICAgIExhYmVsLFxuICAgIFRleHQsXG4gICAgVGV4dENvbnRhaW5lcixcbn0gZnJvbSAnLi9DaGF0LnN0eWxlZCc7XG5cbnR5cGUgUmVzcG9uc2VUeXBlID0ge1xuICAgIG9yaWdpbmFsX3RleHQ6IHN0cmluZztcbiAgICB0cmFuc2xhdGVkX3RleHQ6IHN0cmluZztcbiAgICB0aGlyZF90ZXh0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhdCgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFJlc3BvbnNlVHlwZT4oe1xuICAgICAgICBxdWVyeUtleTogWydjb3Vyc2VEYXRhJ10sXG4gICAgICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9gKS50aGVuKChyZXMpID0+XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXRjaEludGVydmFsOiAxMDAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmFja2dyb3VuZD5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD7sm5Drs7gg7YWN7Iqk7Yq4PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgaXNPcmlnaW4+e2RhdGE/Lm9yaWdpbmFsX3RleHR9ZGZmZGZmZGFmZHdlZmFhZjthO252Z29mYWZvPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPuuyiOyXrSDthY3siqTtirg8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBpc09yaWdpbj17ZmFsc2V9PntkYXRhPy50cmFuc2xhdGVkX3RleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPuuqsOudvCDthY3siqTtirg8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBpc09yaWdpbj17ZmFsc2V9PntkYXRhPy50aGlyZF90ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9CYWNrZ3JvdW5kPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJCYWNrZ3JvdW5kIiwiQ29udGFpbmVyIiwiTGFiZWwiLCJUZXh0IiwiVGV4dENvbnRhaW5lciIsIkNoYXQiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlZmV0Y2hJbnRlcnZhbCIsImlzT3JpZ2luIiwib3JpZ2luYWxfdGV4dCIsInRyYW5zbGF0ZWRfdGV4dCIsInRoaXJkX3RleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/templates/Chat/Chat.tsx\n"));

/***/ })

});