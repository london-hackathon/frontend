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

/***/ "(app-pages-browser)/./app/components/PieChartComponent.jsx":
/*!**********************************************!*\
  !*** ./app/components/PieChartComponent.jsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PieChartComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/PieChart.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/polar/Pie.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Cell.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Legend.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#0088FE\",\n    \"#00C49F\",\n    \"#FFBB28\",\n    \"#FF8042\",\n    \"#A020F0\"\n];\nfunction PieChartComponent(param) {\n    let { data } = param;\n    // Transform the data into a format Recharts can use\n    const chartData = Object.entries(data).map((param)=>{\n        let [key, value] = param;\n        return {\n            name: key,\n            value\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-80\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_3__.PieChart, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                        data: chartData,\n                        dataKey: \"value\",\n                        nameKey: \"name\",\n                        cx: \"50%\",\n                        cy: \"50%\",\n                        outerRadius: 100,\n                        fill: \"#8884d8\",\n                        label: (param)=>{\n                            let { name, value } = param;\n                            return \"\".concat(name, \": \").concat(value);\n                        },\n                        labelLine: false,\n                        children: chartData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_5__.Cell, {\n                                fill: COLORS[index % COLORS.length]\n                            }, \"cell-\".concat(index), false, {\n                                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {}, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_7__.Legend, {\n                        verticalAlign: \"bottom\",\n                        height: 36\n                    }, void 0, false, {\n                        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alexfarouz/Desktop/projects/london-hackathon/frontend/app/components/PieChartComponent.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = PieChartComponent;\nvar _c;\n$RefreshReg$(_c, \"PieChartComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BpZUNoYXJ0Q29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMwQjtBQVFSO0FBRWxCLE1BQU1PLFNBQVM7SUFBQztJQUFXO0lBQVc7SUFBVztJQUFXO0NBQVU7QUFFdkQsU0FBU0Msa0JBQWtCLEtBQVE7UUFBUixFQUFFQyxJQUFJLEVBQUUsR0FBUjtJQUN4QyxvREFBb0Q7SUFDcEQsTUFBTUMsWUFBWUMsT0FBT0MsT0FBTyxDQUFDSCxNQUFNSSxHQUFHLENBQUM7WUFBQyxDQUFDQyxLQUFLQyxNQUFNO2VBQU07WUFDNURDLE1BQU1GO1lBQ05DO1FBQ0Y7O0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNaLHFJQUFtQkE7c0JBQ2xCLDRFQUFDTCwwSEFBUUE7O2tDQUNQLDhEQUFDQyxxSEFBR0E7d0JBQ0ZPLE1BQU1DO3dCQUNOUyxTQUFRO3dCQUNSQyxTQUFRO3dCQUNSQyxJQUFHO3dCQUNIQyxJQUFHO3dCQUNIQyxhQUFhO3dCQUNiQyxNQUFLO3dCQUNMQyxPQUFPO2dDQUFDLEVBQUVULElBQUksRUFBRUQsS0FBSyxFQUFFO21DQUFLLEdBQVlBLE9BQVRDLE1BQUssTUFBVSxPQUFORDs7d0JBQ3hDVyxXQUFXO2tDQUVWaEIsVUFBVUcsR0FBRyxDQUFDLENBQUNjLE9BQU9DLHNCQUNyQiw4REFBQ3pCLHNIQUFJQTtnQ0FFSHFCLE1BQU1qQixNQUFNLENBQUNxQixRQUFRckIsT0FBT3NCLE1BQU0sQ0FBQzsrQkFEOUIsUUFBYyxPQUFORDs7Ozs7Ozs7OztrQ0FLbkIsOERBQUN2Qix5SEFBT0E7Ozs7O2tDQUNSLDhEQUFDRCx3SEFBTUE7d0JBQUMwQixlQUFjO3dCQUFTQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pEO0tBbkN3QnZCIiwic291cmNlcyI6WyIvVXNlcnMvYWxleGZhcm91ei9EZXNrdG9wL3Byb2plY3RzL2xvbmRvbi1oYWNrYXRob24vZnJvbnRlbmQvYXBwL2NvbXBvbmVudHMvUGllQ2hhcnRDb21wb25lbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUGllQ2hhcnQsXG4gIFBpZSxcbiAgQ2VsbCxcbiAgTGVnZW5kLFxuICBUb29sdGlwLFxuICBSZXNwb25zaXZlQ29udGFpbmVyLFxufSBmcm9tIFwicmVjaGFydHNcIjtcblxuY29uc3QgQ09MT1JTID0gW1wiIzAwODhGRVwiLCBcIiMwMEM0OUZcIiwgXCIjRkZCQjI4XCIsIFwiI0ZGODA0MlwiLCBcIiNBMDIwRjBcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpZUNoYXJ0Q29tcG9uZW50KHsgZGF0YSB9KSB7XG4gIC8vIFRyYW5zZm9ybSB0aGUgZGF0YSBpbnRvIGEgZm9ybWF0IFJlY2hhcnRzIGNhbiB1c2VcbiAgY29uc3QgY2hhcnREYXRhID0gT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgbmFtZToga2V5LFxuICAgIHZhbHVlLFxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTgwXCI+XG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgPFBpZUNoYXJ0PlxuICAgICAgICAgIDxQaWVcbiAgICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YX1cbiAgICAgICAgICAgIGRhdGFLZXk9XCJ2YWx1ZVwiXG4gICAgICAgICAgICBuYW1lS2V5PVwibmFtZVwiXG4gICAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgICBjeT1cIjUwJVwiXG4gICAgICAgICAgICBvdXRlclJhZGl1cz17MTAwfVxuICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxuICAgICAgICAgICAgbGFiZWw9eyh7IG5hbWUsIHZhbHVlIH0pID0+IGAke25hbWV9OiAke3ZhbHVlfWB9IC8vIENvbWJpbmUgbmFtZSBhbmQgdmFsdWUgZm9yIGJldHRlciBjbGFyaXR5XG4gICAgICAgICAgICBsYWJlbExpbmU9e2ZhbHNlfSAvLyBEaXNhYmxlIHRoZSBsYWJlbCBsaW5lIHRvIGF2b2lkIGNsdXR0ZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hhcnREYXRhLm1hcCgoZW50cnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDZWxsXG4gICAgICAgICAgICAgICAga2V5PXtgY2VsbC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BpZT5cbiAgICAgICAgICA8VG9vbHRpcCAvPlxuICAgICAgICAgIDxMZWdlbmQgdmVydGljYWxBbGlnbj1cImJvdHRvbVwiIGhlaWdodD17MzZ9IC8+XG4gICAgICAgIDwvUGllQ2hhcnQ+XG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQaWVDaGFydCIsIlBpZSIsIkNlbGwiLCJMZWdlbmQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkNPTE9SUyIsIlBpZUNoYXJ0Q29tcG9uZW50IiwiZGF0YSIsImNoYXJ0RGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhS2V5IiwibmFtZUtleSIsImN4IiwiY3kiLCJvdXRlclJhZGl1cyIsImZpbGwiLCJsYWJlbCIsImxhYmVsTGluZSIsImVudHJ5IiwiaW5kZXgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEFsaWduIiwiaGVpZ2h0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PieChartComponent.jsx\n"));

/***/ })

});