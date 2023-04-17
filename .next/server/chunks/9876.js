"use strict";
exports.id = 9876;
exports.ids = [9876];
exports.modules = {

/***/ 9876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pages_ShopDetailsPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/ProductSlider.js



const ProductSlider = ()=>{
    const { 0: nav1 , 1: setNav1  } = (0,external_react_.useState)(null);
    const { 0: nav2 , 1: setNav2  } = (0,external_react_.useState)(null);
    const { 0: slider1 , 1: setSlider1  } = (0,external_react_.useState)(null);
    const { 0: slider2 , 1: setSlider2  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setNav1(slider1);
        setNav2(slider2);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "product-gallery-wrapper",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                asNavFor: nav2,
                ref: (slider)=>setSlider1(slider)
                ,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                className: "product-main-gallery",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "single-thumbnail",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "../assets/img/shop/shop-gallery-01.jpg",
                            alt: "Gallery"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "single-thumbnail",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "../assets/img/shop/shop-gallery-01.jpg",
                            alt: "Gallery"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "single-thumbnail",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "../assets/img/shop/shop-gallery-01.jpg",
                            alt: "Gallery"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                asNavFor: nav1,
                ref: (slider)=>setSlider2(slider)
                ,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                className: "product-thumb-gallery",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "single-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "../assets/img/shop/shop-gallery-thumb-01.jpg",
                                alt: "Image"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "single-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "../assets/img/shop/shop-gallery-thumb-02.jpg",
                                alt: "Image"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "single-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "../assets/img/shop/shop-gallery-thumb-03.jpg",
                                alt: "Image"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProductSlider = (ProductSlider);

// EXTERNAL MODULE: ./src/layout/PageTitle.js
var PageTitle = __webpack_require__(2879);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(8544);
;// CONCATENATED MODULE: ./src/pages/ShopDetailsPage.js








const ShopDetailsPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageTitle/* default */.Z, {
                pageName: "Shop Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "shop-area section-gap",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "product-details-wrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "product-summary-area",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "product-gallery-wrapper",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_ProductSlider, {})
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-summery-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "summery-top-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "summery-top-left",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                            className: "title",
                                                                            children: "Green Table Light "
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "subtitle",
                                                                            children: "Feature flexible, Cotton-covered"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "summery-top-right",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "price",
                                                                            children: "$75"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            className: "rating",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-star"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-star"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-star"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fas fa-star"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "far fa-star"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "(12)"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "product-short-descriptions",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "A collection of textile samples lay spread out on the table - Samosa was travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "product-meta",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "product-categories",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Categories:"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Essentials,"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Lights"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "product-tags",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Tags:"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Decor,"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#",
                                                                                children: "Interior"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "product-cart-form",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                action: "#",
                                                                onSubmit: (e)=>e.preventDefault()
                                                                ,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "quantity",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                            type: "number",
                                                                            defaultValue: 1,
                                                                            min: 1
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "submit-btn",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            type: "submit",
                                                                            className: "template-btn",
                                                                            children: "Add to Cart"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "wishlist",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "far fa-heart"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab.Container, {
                                    defaultActiveKey: "descriptions",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "product-details-tab",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                                                as: "ul",
                                                className: "nav nav-tabs",
                                                id: "productTab",
                                                role: "tablist",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                        as: "li",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                            as: "a",
                                                            className: "nav-link",
                                                            href: "#descriptions",
                                                            eventKey: "descriptions",
                                                            children: "Descriptions"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                        as: "li",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                            as: "a",
                                                            className: "nav-link",
                                                            href: "#information",
                                                            eventKey: "information",
                                                            role: "tab",
                                                            children: "Information"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                                                        as: "li",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                                            as: "a",
                                                            className: "nav-link",
                                                            href: "#reviews",
                                                            eventKey: "reviews",
                                                            role: "tab",
                                                            children: "Reviews(5k)"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Content, {
                                                className: "tab-content",
                                                id: "productTabContent",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Pane, {
                                                        className: "tab-pane fade",
                                                        eventKey: "descriptions",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "tab-title",
                                                                children: "About Product"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit atis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Pane, {
                                                        className: "tab-pane fade",
                                                        eventKey: "information",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "tab-title",
                                                                children: "Information"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                                                className: "information-table",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Model"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                    children: "Microsoft Surface Pro 6"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Processor"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                    children: "Intel\xae Core\u2122 8th Gen i5-8250U or i7-8650U"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Memory"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                    children: "8GB or 16GB RAM "
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Storage"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                    children: "Solid-state drive (SSD) options: 128GB, 256GB, 512GB, or 1TB"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Battery life"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                    children: "Up to 13.5 hours of local video playback"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Graphics"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                                    children: [
                                                                                        "Intel\xae UHD Graphics 620 (i5) ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                                        " Intel\xae UHD Graphics 620 (i7)",
                                                                                        " "
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                                    children: "Warranty"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                                    children: "1-year limited hardware warranty "
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Pane, {
                                                        className: "tab-pane fade",
                                                        eventKey: "reviews",
                                                        role: "tabpanel",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "tab-title",
                                                                children: "Reviews"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "review-area",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                className: "review-lists",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                        className: "single-review",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                className: "thumb",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                    src: "/assets/img/author/01.png",
                                                                                                    alt: "image"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "review-desc",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                                        className: "name",
                                                                                                        children: "Rosalina Kelian"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "date",
                                                                                                        children: "19th May 2018"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                        children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cu sociis natoque"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                                        className: "rating",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star-half-alt"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "far fa-star"
                                                                                                                })
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                        href: "#",
                                                                                                        className: "reply-btn",
                                                                                                        children: "Reply"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                        className: "single-review",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                className: "thumb",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                    src: "/assets/img/author/02.png",
                                                                                                    alt: "image"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                className: "review-desc",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                                        className: "name",
                                                                                                        children: "Rosalina Kelian"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                        className: "date",
                                                                                                        children: "19th May 2018"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                        children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cu sociis natoque"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                                        className: "rating",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "fas fa-star-half-alt"
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                                    className: "far fa-star"
                                                                                                                })
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                        href: "#",
                                                                                                        className: "reply-btn",
                                                                                                        children: "Reply"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "reviews-form content-mt-md-50",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        children: "Add Your Review"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                                                        action: "#",
                                                                                        onSubmit: (e)=>e.preventDefault()
                                                                                        ,
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                            className: "row",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "col-md-6",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                        type: "text",
                                                                                                        placeholder: "Your Name"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "col-md-6",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                                        type: "email",
                                                                                                        placeholder: "Your Email"
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "col-12",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                                                        placeholder: "Your Review",
                                                                                                        defaultValue: ""
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    className: "col-12",
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                                        type: "submit",
                                                                                                        className: "template-btn",
                                                                                                        children: "Submit Review"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "related-product-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "related-product-title",
                                    children: "Related Products"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                    ...sliderProps/* relatedproductslider */.OA,
                                    className: "product-loop row related-product-slider",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/01.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/02.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/03.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/04.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/05.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/06.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "single-product",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-thumb",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../assets/img/shop/07.jpg",
                                                            alt: "Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "product-action",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-shopping-cart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-heart"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "far fa-expand"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "product-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/shop-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Wood Home Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "$23.97"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const pages_ShopDetailsPage = (ShopDetailsPage);


/***/ })

};
;