webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar/index.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Search */ "./src/components/Search/index.js");
/* harmony import */ var _components_Book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Book */ "./src/components/Book/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/lynntang/Desktop/UT BOOTCAMP/homework/react-google-book-search/client/src/App.js";








var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    _this.handleChange = function (e) {
      _this.setState({
        searchValue: e.target.value
      });
    };

    _this.getBooks = function (e) {
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.request({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + _this.state.searchValue
      }).then(function (response) {
        console.log("response: ", response.data.items);

        _this.setState({
          books: response.data.items
        });
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.state = {
      searchValue: '',
      books: []
    };
    return _this;
  }

  Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_react_google_book_search_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7___default.a, {
        body: true,
        className: 'cardClass',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'titleText',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "(React) Google Books Search"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'subTitleText',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Search for and Save Books of Interest")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
        handleChange: this.handleChange,
        getBooks: this.getBooks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7___default.a, {
        body: true,
        className: 'cardClass',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: 'resultsTitle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Results"), this.state.books.map(function (book, idx) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Book__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: idx,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          thumbnail: book.volumeInfo.imageLinks.thumbnail,
          canonicalVolumeLink: book.volumeInfo.canonicalVolumeLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        });
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.1204d0a522a3bd2ef2c0.hot-update.js.map