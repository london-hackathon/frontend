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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Results)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_PieChartComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PieChartComponent */ \"(app-pages-browser)/./app/components/PieChartComponent.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Results() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const result = searchParams.get(\"result\");\n    let analysisResult = null;\n    try {\n        if (result) {\n            console.log(\"Raw result received:\", result); // Log the raw result string\n            analysisResult = JSON.parse(decodeURIComponent(result));\n            console.log(\"Parsed analysis result:\", analysisResult); // Log the parsed result\n        }\n    } catch (error) {\n        console.error(\"Error parsing analysis result:\", error);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-light mb-8\",\n                    children: \"Analysis Results\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                analysisResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-2 border-blue-400 rounded-lg p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-light mb-4\",\n                                    children: \"Dataset Information\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Demographic:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                analysisResult.demographic\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Description:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                analysisResult.description\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-2 border-blue-400 rounded-lg p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-light mb-4\",\n                                    children: \"Bias Analysis\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-300\",\n                                    children: analysisResult.explanation\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-300 mt-4 text-xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: [\n                                            \"Bias Score: \",\n                                            analysisResult.score,\n                                            \"%\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-light mb-4\",\n                                    children: \"Data Visualization\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PieChartComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    data: analysisResult.processed_data\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-gray-400\",\n                        children: \"No analysis results available\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/results/page.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Results, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = Results;\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXN1bHRzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tEO0FBQ2M7QUFFakQsU0FBU0U7O0lBQ3RCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxTQUFTRCxhQUFhRSxHQUFHLENBQUM7SUFFaEMsSUFBSUMsaUJBQWlCO0lBQ3JCLElBQUk7UUFDRixJQUFJRixRQUFRO1lBQ1ZHLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JKLFNBQVMsNEJBQTRCO1lBQ3pFRSxpQkFBaUJHLEtBQUtDLEtBQUssQ0FBQ0MsbUJBQW1CUDtZQUMvQ0csUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkYsaUJBQWlCLHdCQUF3QjtRQUNsRjtJQUNGLEVBQUUsT0FBT00sT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsa0NBQWtDQTtJQUNsRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQTJCOzs7Ozs7Z0JBRXhDUiwrQkFDQyw4REFBQ087b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFHRixXQUFVOzhDQUEyQjs7Ozs7OzhDQUN6Qyw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRzs0Q0FBRUgsV0FBVTs7OERBQ1gsOERBQUNJO29EQUFLSixXQUFVOzhEQUFZOzs7Ozs7Z0RBQW9CO2dEQUMvQ1IsZUFBZWEsV0FBVzs7Ozs7OztzREFFN0IsOERBQUNGOzRDQUFFSCxXQUFVOzs4REFDWCw4REFBQ0k7b0RBQUtKLFdBQVU7OERBQVk7Ozs7OztnREFBb0I7Z0RBQy9DUixlQUFlYyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU1qQyw4REFBQ1A7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBMkI7Ozs7Ozs4Q0FDekMsOERBQUNHO29DQUFFSCxXQUFVOzhDQUFpQlIsZUFBZWUsV0FBVzs7Ozs7OzhDQUN4RCw4REFBQ0o7b0NBQUVILFdBQVU7OENBQ1gsNEVBQUNJO3dDQUFLSixXQUFVOzs0Q0FBWTs0Q0FDYlIsZUFBZWdCLEtBQUs7NENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNeEMsOERBQUNUOzs4Q0FDQyw4REFBQ0c7b0NBQUdGLFdBQVU7OENBQTJCOzs7Ozs7OENBQ3pDLDhEQUFDYixxRUFBaUJBO29DQUFDc0IsTUFBTWpCLGVBQWVrQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FJMUQsOERBQUNYO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRzt3QkFBRUgsV0FBVTtrQ0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakQ7R0FoRXdCWjs7UUFDREYsNERBQWVBOzs7S0FEZEUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZmFyb3V6L0Rlc2t0b3AvcHJvamVjdHMvbG9uZG9uLWhhY2thdGhvbi9mcm9udGVuZC9hcHAvcmVzdWx0cy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFBpZUNoYXJ0Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1BpZUNoYXJ0Q29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoKSB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByZXN1bHQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicmVzdWx0XCIpO1xuXG4gIGxldCBhbmFseXNpc1Jlc3VsdCA9IG51bGw7XG4gIHRyeSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2coXCJSYXcgcmVzdWx0IHJlY2VpdmVkOlwiLCByZXN1bHQpOyAvLyBMb2cgdGhlIHJhdyByZXN1bHQgc3RyaW5nXG4gICAgICBhbmFseXNpc1Jlc3VsdCA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdCkpO1xuICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYW5hbHlzaXMgcmVzdWx0OlwiLCBhbmFseXNpc1Jlc3VsdCk7IC8vIExvZyB0aGUgcGFyc2VkIHJlc3VsdFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBhbmFseXNpcyByZXN1bHQ6XCIsIGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmxhY2sgdGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtbGlnaHQgbWItOFwiPkFuYWx5c2lzIFJlc3VsdHM8L2gxPlxuXG4gICAgICAgIHthbmFseXNpc1Jlc3VsdCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgey8qIERhdGFzZXQgSW5mb3JtYXRpb24gU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbGcgcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IG1iLTRcIj5EYXRhc2V0IEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5EZW1vZ3JhcGhpYzo8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAge2FuYWx5c2lzUmVzdWx0LmRlbW9ncmFwaGljfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5EZXNjcmlwdGlvbjo8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAge2FuYWx5c2lzUmVzdWx0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEJpYXMgQW5hbHlzaXMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsdWUtNDAwIHJvdW5kZWQtbGcgcC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IG1iLTRcIj5CaWFzIEFuYWx5c2lzPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPnthbmFseXNpc1Jlc3VsdC5leHBsYW5hdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgbXQtNCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICBCaWFzIFNjb3JlOiB7YW5hbHlzaXNSZXN1bHQuc2NvcmV9JVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBQaWUgQ2hhcnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0IG1iLTRcIj5EYXRhIFZpc3VhbGl6YXRpb248L2gyPlxuICAgICAgICAgICAgICA8UGllQ2hhcnRDb21wb25lbnQgZGF0YT17YW5hbHlzaXNSZXN1bHQucHJvY2Vzc2VkX2RhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgTm8gYW5hbHlzaXMgcmVzdWx0cyBhdmFpbGFibGVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsIlBpZUNoYXJ0Q29tcG9uZW50IiwiUmVzdWx0cyIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsImdldCIsImFuYWx5c2lzUmVzdWx0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsInAiLCJzcGFuIiwiZGVtb2dyYXBoaWMiLCJkZXNjcmlwdGlvbiIsImV4cGxhbmF0aW9uIiwic2NvcmUiLCJkYXRhIiwicHJvY2Vzc2VkX2RhdGEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/results/page.js\n"));

/***/ })

});