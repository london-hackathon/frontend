"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/results/page",{

/***/ "(app-pages-browser)/./app/results/page.js":
/*!*****************************!*\
  !*** ./app/results/page.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Results)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// app/results/page.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Results() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const result = searchParams.get(\"result\");\n    let analysisResult = null;\n    try {\n        if (result) {\n            analysisResult = JSON.parse(decodeURIComponent(result));\n        }\n    } catch (error) {\n        console.error(\"Error parsing analysis result:\", error);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-light mb-8\",\n                    children: \"Analysis Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                analysisResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-2 border-gray-400 rounded-lg p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-light mb-4\",\n                                children: \"Dataset Information\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-medium\",\n                                                children: \"File:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            analysisResult.filename\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-medium\",\n                                                children: \"Demographic:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            analysisResult.demographic\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-medium\",\n                                                children: \"Description:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            analysisResult.description\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-gray-400\",\n                        children: \"No analysis results available\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Results, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = Results;\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXN1bHRzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0JBQXNCOzs7QUFFNEI7QUFFbkMsU0FBU0M7O0lBQ3RCLE1BQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxNQUFNRyxTQUFTRCxhQUFhRSxHQUFHLENBQUM7SUFFaEMsSUFBSUMsaUJBQWlCO0lBQ3JCLElBQUk7UUFDRixJQUFJRixRQUFRO1lBQ1ZFLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxtQkFBbUJMO1FBQ2pEO0lBQ0YsRUFBRSxPQUFPTSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO0lBQ2xEO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBMkI7Ozs7OztnQkFFeENQLCtCQUNDLDhEQUFDTTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBMkI7Ozs7OzswQ0FDekMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQUVILFdBQVU7OzBEQUNYLDhEQUFDSTtnREFBS0osV0FBVTswREFBYzs7Ozs7OzRDQUFhOzRDQUMxQ1AsZUFBZVksUUFBUTs7Ozs7OztrREFFMUIsOERBQUNGO3dDQUFFSCxXQUFVOzswREFDWCw4REFBQ0k7Z0RBQUtKLFdBQVU7MERBQWM7Ozs7Ozs0Q0FBb0I7NENBQ2pEUCxlQUFlYSxXQUFXOzs7Ozs7O2tEQUU3Qiw4REFBQ0g7d0NBQUVILFdBQVU7OzBEQUNYLDhEQUFDSTtnREFBS0osV0FBVTswREFBYzs7Ozs7OzRDQUFvQjs0Q0FDakRQLGVBQWVjLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQVFuQyw4REFBQ1I7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFFSCxXQUFVO2tDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRDtHQWxEd0JYOztRQUNERCw0REFBZUE7OztLQURkQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FsZXhmYXJvdXovRGVza3RvcC9wcm9qZWN0cy9sb25kb24taGFja2F0aG9uL2Zyb250ZW5kL2FwcC9yZXN1bHRzL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL3Jlc3VsdHMvcGFnZS5qc1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoKSB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByZXN1bHQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicmVzdWx0XCIpO1xuXG4gIGxldCBhbmFseXNpc1Jlc3VsdCA9IG51bGw7XG4gIHRyeSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgYW5hbHlzaXNSZXN1bHQgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHQpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgYW5hbHlzaXMgcmVzdWx0OlwiLCBlcnJvcik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJsYWNrIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWxpZ2h0IG1iLThcIj5BbmFseXNpcyBSZXN1bHRzPC9oMT5cblxuICAgICAgICB7YW5hbHlzaXNSZXN1bHQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IG1iLTRcIj5EYXRhc2V0IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkZpbGU6PC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHthbmFseXNpc1Jlc3VsdC5maWxlbmFtZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5EZW1vZ3JhcGhpYzo8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAge2FuYWx5c2lzUmVzdWx0LmRlbW9ncmFwaGljfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkRlc2NyaXB0aW9uOjwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7YW5hbHlzaXNSZXN1bHQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQWRkIG1vcmUgc2VjdGlvbnMgZm9yIGFjdHVhbCBiaWFzIGFuYWx5c2lzIHJlc3VsdHMgd2hlbiBhdmFpbGFibGUgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgIE5vIGFuYWx5c2lzIHJlc3VsdHMgYXZhaWxhYmxlXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZWFyY2hQYXJhbXMiLCJSZXN1bHRzIiwic2VhcmNoUGFyYW1zIiwicmVzdWx0IiwiZ2V0IiwiYW5hbHlzaXNSZXN1bHQiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwicCIsInNwYW4iLCJmaWxlbmFtZSIsImRlbW9ncmFwaGljIiwiZGVzY3JpcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/results/page.js\n"));

/***/ })

});