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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineFileUpload_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineFileUpload!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [demographic, setDemographic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const selectDemographic = (option)=>{\n        setDemographic(option);\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-5xl text-white font-light pt-10\",\n                    children: \"Hello World\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-64 my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white text-2xl font-light pb-3\",\n                        children: \"Summarize the Dataset Usage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Describe your dataset here...\",\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value),\n                            className: \"w-full border-2 border-gray-400 rounded-[15px] p-4 pb-20 bg-transparent focus:outline-none focus:border-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-xl font-light pr-5\",\n                                        children: \"Select Demographic\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"border-2 border-gray-400 rounded-[10px] p-2 w-48 cursor-pointer\",\n                                                onClick: toggleDropdown,\n                                                children: demographic || \"Choose...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            }, this),\n                                            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute top-full left-0 mt-2 border-2 border-gray-400 rounded-[10px] p-4 w-48 text-white z-10\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Ethnicity\"),\n                                                        children: \"Ethnicity\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Sex\"),\n                                                        children: \"Sex\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Age\"),\n                                                        children: \"Age\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineFileUpload_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineFileUpload, {\n                                        size: 24\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Upload\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Zi9T8TRPZ2jDHpm18cNYD1NGD2w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0U7QUFDb0I7QUFFdEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNUyxpQkFBaUI7UUFDckJELGtCQUFrQixDQUFDRDtJQUNyQjtJQUVBLE1BQU1HLG9CQUFvQixDQUFDQztRQUN6QkwsZUFBZUs7UUFDZkgsa0JBQWtCO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQW1EOzs7Ozs7Ozs7OzswQkFJcEUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXNDOzs7Ozs7a0NBR3JELDhEQUFDRDtrQ0FDQyw0RUFBQ0U7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU9kOzRCQUNQZSxVQUFVLENBQUNDLElBQU1mLGVBQWVlLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDOUNKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQXFDOzs7Ozs7a0RBR3BELDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWUSxTQUFTWjswREFFUkosZUFBZTs7Ozs7OzRDQUVqQkUsZ0NBQ0MsOERBQUNLO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0Q7d0RBQ0NDLFdBQVU7d0RBQ1ZRLFNBQVMsSUFBTVgsa0JBQWtCO2tFQUNsQzs7Ozs7O2tFQUdELDhEQUFDRTt3REFDQ0MsV0FBVTt3REFDVlEsU0FBUyxJQUFNWCxrQkFBa0I7a0VBQ2xDOzs7Ozs7a0VBR0QsOERBQUNFO3dEQUNDQyxXQUFVO3dEQUNWUSxTQUFTLElBQU1YLGtCQUFrQjtrRUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPVCw4REFBQ1k7Z0NBQU9ULFdBQVU7O2tEQUNoQiw4REFBQ1osMEdBQW1CQTt3Q0FBQ3NCLE1BQU07Ozs7OztvQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83QztHQTlFd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FsZXhmYXJvdXovRGVza3RvcC9wcm9qZWN0cy9sb25kb24taGFja2F0aG9uL2Zyb250ZW5kL2FwcC9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWRPdXRsaW5lRmlsZVVwbG9hZCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVtb2dyYXBoaWMsIHNldERlbW9ncmFwaGljXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdERlbW9ncmFwaGljID0gKG9wdGlvbikgPT4ge1xuICAgIHNldERlbW9ncmFwaGljKG9wdGlvbik7XG4gICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHQtMTBcIj5cbiAgICAgICAgICBIZWxsbyBXb3JsZFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02NCBteS0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1saWdodCBwYi0zXCI+XG4gICAgICAgICAgU3VtbWFyaXplIHRoZSBEYXRhc2V0IFVzYWdlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIGRhdGFzZXQgaGVyZS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1bMTVweF0gcC00IHBiLTIwIGJnLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1saWdodCBwci01XCI+XG4gICAgICAgICAgICAgIFNlbGVjdCBEZW1vZ3JhcGhpY1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1bMTBweF0gcC0yIHctNDggY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RlbW9ncmFwaGljIHx8IFwiQ2hvb3NlLi4uXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0wIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtWzEwcHhdIHAtNCB3LTQ4IHRleHQtd2hpdGUgei0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiRXRobmljaXR5XCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFdGhuaWNpdHlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiU2V4XCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZXhcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiQWdlXCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZ2VcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICA8TWRPdXRsaW5lRmlsZVVwbG9hZCBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJNZE91dGxpbmVGaWxlVXBsb2FkIiwiSG9tZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkZW1vZ3JhcGhpYyIsInNldERlbW9ncmFwaGljIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsInRvZ2dsZURyb3Bkb3duIiwic2VsZWN0RGVtb2dyYXBoaWMiLCJvcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsImJ1dHRvbiIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});