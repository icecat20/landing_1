"use strict";
exports.id = 1239;
exports.ids = [1239];
exports.modules = {

/***/ 1239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348);



const NiceSelect = ({ value , extraClass , disable  })=>{
    let domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        setToggle(false);
    });
    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: activeValue , 1: setActiveValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(disable ? disable : value[0]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `nice-select ${toggle ? "open" : ""} ${extraClass ? extraClass : ""}`,
            onClick: ()=>setToggle(!toggle)
            ,
            ref: domNode,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "current",
                    children: activeValue
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "list",
                    children: [
                        disable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "option disabled",
                            children: disable
                        }),
                        value && value.map((v, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                "data-value": v,
                                className: "option",
                                onClick: ()=>setActiveValue(v)
                                ,
                                children: v
                            }, i)
                        )
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NiceSelect);


/***/ })

};
;