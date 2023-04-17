"use strict";
exports.id = 8544;
exports.ids = [8544];
exports.modules = {

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R0": () => (/* binding */ testimonialslidertwo),
/* harmony export */   "YE": () => (/* binding */ testimonialsliderone),
/* harmony export */   "G1": () => (/* binding */ clientCarousel),
/* harmony export */   "G8": () => (/* binding */ testimonialslidervertical),
/* harmony export */   "l6": () => (/* binding */ pricingcenterslide),
/* harmony export */   "OA": () => (/* binding */ relatedproductslider),
/* harmony export */   "iu": () => (/* binding */ logocarouselactive),
/* harmony export */   "Vd": () => (/* binding */ portfolioslider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PrvArrow = ({ className , style , onClick , extraClass , icon  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "client-carousel-arrows prevArrow",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `${className} ${extraClass}`,
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: icon
            })
        })
    });
};
const NextArrow = ({ className , style , onClick , extraClass , icon  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "client-carousel-arrows",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `${className} ${extraClass}`,
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: icon
            })
        })
    });
};
const testimonialslidertwo = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialsliderone = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};
const clientCarousel = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrvArrow, {
        extraClass: "prev-arrow",
        icon: "fas fa-long-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        extraClass: "next-arrow",
        icon: "fas fa-long-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 2
            }
        }, 
    ]
};
const testimonialslidervertical = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }, 
    ]
};
const pricingcenterslide = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    centerMode: true,
    centerPadding: "170px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: "120px"
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                centerPadding: "0"
            }
        }, 
    ]
};
const relatedproductslider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const logocarouselactive = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const portfolioslider = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};


/***/ })

};
;