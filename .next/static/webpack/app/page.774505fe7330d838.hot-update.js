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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineFileUpload_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineFileUpload!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [demographic, setDemographic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const selectDemographic = (option)=>{\n        setDemographic(option);\n        setIsDropdownOpen(false);\n    };\n    const handleFileUpload = (event)=>{\n        const file = event.target.files[0];\n        if (file && file.type === \"text/csv\") {\n            setSelectedFile(file);\n        } else {\n            alert(\"Please upload a CSV file\");\n            event.target.value = null;\n        }\n    };\n    const handleUploadClick = ()=>{\n        fileInputRef.current.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-5xl text-white font-light pt-10\",\n                    children: \"Hello World\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-64 my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white text-2xl font-light pb-3\",\n                        children: \"Summarize the Dataset Usage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Describe your dataset here...\",\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value),\n                            className: \"w-full border-2 border-gray-400 rounded-[15px] p-4 pb-20 bg-transparent focus:outline-none focus:border-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-xl font-light pr-5\",\n                                        children: \"Select Demographic\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"border-2 border-gray-400 rounded-[10px] p-2 w-48 cursor-pointer\",\n                                                onClick: toggleDropdown,\n                                                children: demographic || \"Choose...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 15\n                                            }, this),\n                                            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute top-full left-0 mt-2 border-2 border-gray-400 rounded-[10px] p-4 w-48 text-white z-10\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Ethnicity\"),\n                                                        children: \"Ethnicity\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Sex\"),\n                                                        children: \"Sex\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Age\"),\n                                                        children: \"Age\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4\",\n                                children: [\n                                    selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-sm\",\n                                        children: selectedFile.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        ref: fileInputRef,\n                                        onChange: handleFileUpload,\n                                        accept: \".csv\",\n                                        className: \"hidden\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleUploadClick,\n                                        className: \"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineFileUpload_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineFileUpload, {\n                                                size: 24\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 15\n                                            }, this),\n                                            \"Upload\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors\",\n                    children: \"Check Bias\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kFD97Tat800asWsks8FOCBpR+5c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNrdG9wL3Byb2plY3RzL2xvbmRvbi1oYWNrYXRob24vZnJvbnRlbmQvYXBwL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1kT3V0bGluZUZpbGVVcGxvYWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RlbW9ncmFwaGljLCBzZXREZW1vZ3JhcGhpY10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0RGVtb2dyYXBoaWMgPSAob3B0aW9uKSA9PiB7XG4gICAgc2V0RGVtb2dyYXBoaWMob3B0aW9uKTtcbiAgICBzZXRJc0Ryb3Bkb3duT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlID09PSBcInRleHQvY3N2XCIpIHtcbiAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdXBsb2FkIGEgQ1NWIGZpbGVcIik7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRDbGljayA9ICgpID0+IHtcbiAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHQtMTBcIj5cbiAgICAgICAgICBIZWxsbyBXb3JsZFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02NCBteS0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1saWdodCBwYi0zXCI+XG4gICAgICAgICAgU3VtbWFyaXplIHRoZSBEYXRhc2V0IFVzYWdlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIGRhdGFzZXQgaGVyZS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1bMTVweF0gcC00IHBiLTIwIGJnLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1saWdodCBwci01XCI+XG4gICAgICAgICAgICAgIFNlbGVjdCBEZW1vZ3JhcGhpY1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1bMTBweF0gcC0yIHctNDggY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RlbW9ncmFwaGljIHx8IFwiQ2hvb3NlLi4uXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0wIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtWzEwcHhdIHAtNCB3LTQ4IHRleHQtd2hpdGUgei0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiRXRobmljaXR5XCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFdGhuaWNpdHlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiU2V4XCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZXhcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiQWdlXCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZ2VcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAge3NlbGVjdGVkRmlsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtXCI+e3NlbGVjdGVkRmlsZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgYWNjZXB0PVwiLmNzdlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWRDbGlja31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZE91dGxpbmVGaWxlVXBsb2FkIHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LThcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC04IHB5LTMgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIENoZWNrIEJpYXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlUmVmIiwiTWRPdXRsaW5lRmlsZVVwbG9hZCIsIkhvbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZGVtb2dyYXBoaWMiLCJzZXREZW1vZ3JhcGhpYyIsImlzRHJvcGRvd25PcGVuIiwic2V0SXNEcm9wZG93bk9wZW4iLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJmaWxlSW5wdXRSZWYiLCJ0b2dnbGVEcm9wZG93biIsInNlbGVjdERlbW9ncmFwaGljIiwib3B0aW9uIiwiaGFuZGxlRmlsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwidHlwZSIsImFsZXJ0IiwidmFsdWUiLCJoYW5kbGVVcGxvYWRDbGljayIsImN1cnJlbnQiLCJjbGljayIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJvbkNsaWNrIiwibmFtZSIsInJlZiIsImFjY2VwdCIsImJ1dHRvbiIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});