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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineFileUpload_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineFileUpload!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [demographic, setDemographic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const selectDemographic = (option)=>{\n        setDemographic(option);\n        setIsDropdownOpen(false);\n    };\n    const handleFileUpload = (event)=>{\n        const file = event.target.files[0];\n        if (file && file.type === \"text/csv\") {\n            setSelectedFile(file);\n        } else {\n            alert(\"Please upload a CSV file\");\n            event.target.value = null;\n        }\n    };\n    const handleUploadClick = ()=>{\n        fileInputRef.current.click();\n    };\n    const handleCheckBias = async ()=>{\n        // Validate inputs\n        if (!selectedFile) {\n            alert(\"Please upload a CSV file first\");\n            return;\n        }\n        if (!demographic) {\n            alert(\"Please select a demographic\");\n            return;\n        }\n        if (!description.trim()) {\n            alert(\"Please provide a dataset description\");\n            return;\n        }\n        // Create FormData object\n        const formData = new FormData();\n        formData.append(\"file\", selectedFile);\n        formData.append(\"demographic\", demographic);\n        formData.append(\"description\", description);\n        setIsLoading(true);\n        try {\n            const response = await fetch(\"http://localhost:5000/api/bias\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                const errorData = await response.json();\n                throw new Error(errorData.error || \"Failed to analyze bias\");\n            }\n            const result = await response.json();\n            // Navigate to results page with the analysis data\n            const encodedResult = encodeURIComponent(JSON.stringify(result));\n            router.push(\"/results?result=\".concat(encodedResult));\n        } catch (error) {\n            console.error(\"Error analyzing bias:\", error);\n            alert(error.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-5xl text-white font-light pt-10\",\n                    children: \"Hello World\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-64 my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white text-2xl font-light pb-3\",\n                        children: \"Summarize the Dataset Usage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Describe your dataset here...\",\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value),\n                            className: \"w-full border-2 border-gray-400 rounded-[15px] p-4 pb-20 bg-transparent focus:outline-none focus:border-blue-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-xl font-light pr-5\",\n                                        children: \"Select Demographic\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"border-2 border-gray-400 rounded-[10px] p-2 w-48 cursor-pointer\",\n                                                onClick: toggleDropdown,\n                                                children: demographic || \"Choose...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 15\n                                            }, this),\n                                            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute top-full left-0 mt-2 border-2 border-gray-400 rounded-[10px] p-4 w-48 text-white z-10\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Race\"),\n                                                        children: \"Ethnicity\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Sex\"),\n                                                        children: \"Sex\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 125,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"cursor-pointer hover:bg-gray-700 p-2 rounded-md\",\n                                                        onClick: ()=>selectDemographic(\"Age\"),\n                                                        children: \"Age\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                        lineNumber: 131,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 118,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4\",\n                                children: [\n                                    selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-sm\",\n                                        children: selectedFile.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        ref: fileInputRef,\n                                        onChange: handleFileUpload,\n                                        accept: \".csv\",\n                                        className: \"hidden\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleUploadClick,\n                                        className: \"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineFileUpload_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdOutlineFileUpload, {\n                                                size: 24\n                                            }, void 0, false, {\n                                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                                lineNumber: 156,\n                                                columnNumber: 15\n                                            }, this),\n                                            \"Upload\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleCheckBias,\n                    disabled: isLoading,\n                    className: \"px-8 py-3 bg-blue-500 text-white text-lg font-light rounded-lg transition-colors\\n            \".concat(isLoading ? \"opacity-50 cursor-not-allowed\" : \"hover:bg-blue-600\"),\n                    children: isLoading ? \"Analyzing...\" : \"Check Bias\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                    lineNumber: 163,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1cium3d6DxHGtJCK2a78Bn/i3P4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnMvYWxleGZhcm91ei9EZXNrdG9wL3Byb2plY3RzL2xvbmRvbi1oYWNrYXRob24vZnJvbnRlbmQvYXBwL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZE91dGxpbmVGaWxlVXBsb2FkIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVtb2dyYXBoaWMsIHNldERlbW9ncmFwaGljXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3REZW1vZ3JhcGhpYyA9IChvcHRpb24pID0+IHtcbiAgICBzZXREZW1vZ3JhcGhpYyhvcHRpb24pO1xuICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUgPT09IFwidGV4dC9jc3ZcIikge1xuICAgICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB1cGxvYWQgYSBDU1YgZmlsZVwiKTtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZENsaWNrID0gKCkgPT4ge1xuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tCaWFzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIFZhbGlkYXRlIGlucHV0c1xuICAgIGlmICghc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB1cGxvYWQgYSBDU1YgZmlsZSBmaXJzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFkZW1vZ3JhcGhpYykge1xuICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZGVtb2dyYXBoaWNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZGVzY3JpcHRpb24udHJpbSgpKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBwcm92aWRlIGEgZGF0YXNldCBkZXNjcmlwdGlvblwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgRm9ybURhdGEgb2JqZWN0XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHNlbGVjdGVkRmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZGVtb2dyYXBoaWNcIiwgZGVtb2dyYXBoaWMpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcblxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9iaWFzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckRhdGEuZXJyb3IgfHwgXCJGYWlsZWQgdG8gYW5hbHl6ZSBiaWFzXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIE5hdmlnYXRlIHRvIHJlc3VsdHMgcGFnZSB3aXRoIHRoZSBhbmFseXNpcyBkYXRhXG4gICAgICBjb25zdCBlbmNvZGVkUmVzdWx0ID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHRzP3Jlc3VsdD0ke2VuY29kZWRSZXN1bHR9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbmFseXppbmcgYmlhczpcIiwgZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHQtMTBcIj5cbiAgICAgICAgICBIZWxsbyBXb3JsZFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02NCBteS0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1saWdodCBwYi0zXCI+XG4gICAgICAgICAgU3VtbWFyaXplIHRoZSBEYXRhc2V0IFVzYWdlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIGRhdGFzZXQgaGVyZS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1bMTVweF0gcC00IHBiLTIwIGJnLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1saWdodCBwci01XCI+XG4gICAgICAgICAgICAgIFNlbGVjdCBEZW1vZ3JhcGhpY1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1bMTBweF0gcC0yIHctNDggY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RlbW9ncmFwaGljIHx8IFwiQ2hvb3NlLi4uXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0wIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtWzEwcHhdIHAtNCB3LTQ4IHRleHQtd2hpdGUgei0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdERlbW9ncmFwaGljKFwiUmFjZVwiKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRXRobmljaXR5XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS03MDAgcC0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3REZW1vZ3JhcGhpYyhcIlNleFwiKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2V4XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS03MDAgcC0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3REZW1vZ3JhcGhpYyhcIkFnZVwiKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWdlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZEZpbGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbVwiPntzZWxlY3RlZEZpbGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9XG4gICAgICAgICAgICAgIGFjY2VwdD1cIi5jc3ZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkQ2xpY2t9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWRPdXRsaW5lRmlsZVVwbG9hZCBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGVja0JpYXN9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC04IHB5LTMgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtbGlnaHQgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9yc1xuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZFwiIDogXCJob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkFuYWx5emluZy4uLlwiIDogXCJDaGVjayBCaWFzXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJNZE91dGxpbmVGaWxlVXBsb2FkIiwidXNlUm91dGVyIiwiSG9tZSIsInJvdXRlciIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkZW1vZ3JhcGhpYyIsInNldERlbW9ncmFwaGljIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZpbGVJbnB1dFJlZiIsInRvZ2dsZURyb3Bkb3duIiwic2VsZWN0RGVtb2dyYXBoaWMiLCJvcHRpb24iLCJoYW5kbGVGaWxlVXBsb2FkIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJ0eXBlIiwiYWxlcnQiLCJ2YWx1ZSIsImhhbmRsZVVwbG9hZENsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlQ2hlY2tCaWFzIiwidHJpbSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsIkVycm9yIiwiZXJyb3IiLCJyZXN1bHQiLCJlbmNvZGVkUmVzdWx0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJjb25zb2xlIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJvbkNsaWNrIiwibmFtZSIsInJlZiIsImFjY2VwdCIsImJ1dHRvbiIsInNpemUiLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});