webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.less */ "./styles/index.less");
/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Social */ "./components/Social.js");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tags */ "./components/Tags.js");
/* harmony import */ var _components_Personal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Personal */ "./components/Personal.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/constants */ "./util/constants.js");


var _jsxFileName = "/Users/andoni/projects/pf/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// DEPENDENCIES
 // STYLES

 // COMPONENTS



 // UTILS



var Home = function Home(props) {
  var lang = 'es_ES';
  var data = props.langs[lang];
  return __jsx("div", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Personal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: props.name,
    location: data.location,
    description: data.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Lenguajes en los que disfruto desarrollar: ", __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elements: data.dev.langs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Con tecnolog\xEDa como: ", __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elements: data.dev.tech,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Estoy prendiendo: ", __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elements: data.dev.learning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pasiones: ", __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elements: data.passions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Social media: ", __jsx(_components_Social__WEBPACK_IMPORTED_MODULE_5__["default"], {
    elements: props.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //const response = await fetch(GITHUB_GIST_URL_V1);
          response = {
            "name": "Andoni Abedul",
            "social": {
              "github": "https://github.com/andoniabedul",
              "linkedin": "https://www.linkedin.com/in/andoniabedul"
            },
            "langs": {
              "es_ES": {
                "description": "Nacido en Caracas, Venezuela. Desarrollador FullStack. Apasionado por la tecnología, y lo que podemos crear desarrollando software. En mis tiempos libres me gusta jugar en la PS4, ver películas/series y leer.",
                "location": {
                  "city": "Madrid",
                  "country": "España",
                  "code": "ES"
                },
                "passions": [{
                  "name": "₿itcoin",
                  "link": "https://bitcoin.org/es/"
                }, {
                  "name": "Cypherpunk",
                  "link": "https://en.wikipedia.org/wiki/Cypherpunk"
                }, {
                  "name": "Cyberpunk",
                  "link": "https://en.wikipedia.org/wiki/Cyberpunk"
                }, {
                  "name": "Política",
                  "link": "https://en.wikipedia.org/wiki/Liberalism"
                }, {
                  "name": "Economía",
                  "link": "https://en.wikipedia.org/wiki/Austrian_School"
                }, {
                  "name": "Sociología",
                  "link": ""
                }],
                "dev": {
                  "langs": ["JavaScript", "Python"],
                  "tech": ["NodeJS", "ExpressJS", "ReactJS", "Less"],
                  "learning": ["Next.js", "Rust", "Cargo"]
                }
              },
              "en_US": {
                "description": "Born in Caracas, Venezuela. FullStack Developer. Apassionated by technology and what we can make developing software",
                "location": {
                  "city": "Madrid",
                  "country": "Spain",
                  "code": "ES"
                },
                "passions": [{
                  "name": "₿itcoin",
                  "link": "https://bitcoin.org/es/"
                }, {
                  "name": "Cypherpunk",
                  "link": "https://en.wikipedia.org/wiki/Cypherpunk"
                }, {
                  "name": "Cyberpunk",
                  "link": "https://en.wikipedia.org/wiki/Cyberpunk"
                }, {
                  "name": "Política",
                  "link": "https://en.wikipedia.org/wiki/Liberalism"
                }, {
                  "name": "Economía",
                  "link": "https://en.wikipedia.org/wiki/Austrian_School"
                }, {
                  "name": "Sociología",
                  "link": ""
                }],
                "dev": {
                  "langs": ["JavaScript", "Python"],
                  "tech": ["NodeJS", "ExpressJS", "ReactJS", "Less"],
                  "learning": ["Next.js", "Rust", "Cargo"]
                }
              },
              "en_GB": {
                "description": "Born in Caracas, Venezuela. FullStack Developer. Apassionated by technology and what we can make developing software.",
                "location": {
                  "city": "Madrid",
                  "country": "Spain",
                  "code": "ES"
                },
                "passions": [{
                  "name": "₿itcoin",
                  "link": "https://bitcoin.org/es/"
                }, {
                  "name": "Cypherpunk",
                  "link": "https://en.wikipedia.org/wiki/Cypherpunk"
                }, {
                  "name": "Cyberpunk",
                  "link": "https://en.wikipedia.org/wiki/Cyberpunk"
                }, {
                  "name": "Política",
                  "link": "https://en.wikipedia.org/wiki/Liberalism"
                }, {
                  "name": "Economía",
                  "link": "https://en.wikipedia.org/wiki/Austrian_School"
                }, {
                  "name": "Sociología",
                  "link": ""
                }],
                "dev": {
                  "langs": ["JavaScript", "Python"],
                  "tech": ["NodeJS", "ExpressJS", "ReactJS", "Less"],
                  "learning": ["Next.js", "Rust", "Cargo"]
                }
              }
            }
          };
          return _context.abrupt("return", response);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.366d9348a224864506c4.hot-update.js.map