webpackHotUpdate("main",{

/***/ "./src/pages/Create/index.js":
/*!***********************************!*\
  !*** ./src/pages/Create/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../history */ "./src/history.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/NavigationBar */ "./src/components/NavigationBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles.css */ "./src/pages/Create/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_19__);






var _jsxFileName = "/Users/lynntang/Desktop/UT BOOTCAMP/homework/Project-3/client/src/pages/Create/index.js";














var styles = {
  root: {
    backgroundColor: "white",
    marginRight: "10px"
  },
  input: {
    color: "black"
  },
  containedPrimary: {
    marginLeft: "20px"
  },
  submitButton: {
    // flex: "1",
    marginLeft: "100px"
  },
  fabButton: {// flex: "0.5",
  }
};
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["createMuiTheme"])({
  palette: {
    primary: {
      500: '#093E0A'
    }
  }
});
var theme2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#9e9d24'
    }
  }
});
var theme3 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#3e2723'
    }
  }
});

var InputForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InputForm, _React$Component);

  function InputForm() {
    var _this;

    Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InputForm);

    _this = Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(InputForm).call(this));

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          title = _this$state.title,
          clue = _this$state.clue,
          code = _this$state.code;
    };

    _this.handleTitleChange = function (e) {
      _this.setState({
        title: e.target.value
      });
    };

    _this.handleClueChange = function (idx) {
      return function (e) {
        var newClue = _this.state.clue.map(function (clue, sidx) {
          if (idx !== sidx) return clue;
          return Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, clue, {
            value: e.target.value
          });
        });

        _this.setState({
          clue: newClue
        });
      };
    };

    _this.handleCodeChange = function (idx) {
      return function (e) {
        var newCode = _this.state.code.map(function (code, sidx) {
          if (idx !== sidx) return code;
          return Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, code, {
            value: e.target.value
          });
        });

        _this.setState({
          code: newCode
        });
      };
    };

    _this.handleAddClueandCode = function () {
      _this.setState({
        clue: _this.state.clue.concat([{
          value: ""
        }]),
        code: _this.state.code.concat([{
          value: ""
        }])
      });
    };

    _this.handleRemoveClueAndCode = function (idx) {
      return function () {
        _this.setState({
          clue: _this.state.clue.filter(function (s, sidx) {
            return idx !== sidx;
          }),
          code: _this.state.code.filter(function (s, sidx) {
            return idx !== sidx;
          })
        });
      };
    };

    _this.saveGame = function (e) {
      e.preventDefault();
      var title = _this.state.title;
      var game = [];

      for (var i = 0; i < _this.state.clue.length; i++) {
        var clue = _this.state.clue[i].value;
        var code = _this.state.code[i].value;
        game.push({
          clue: clue,
          code: code
        });
      }

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.request({
        method: 'get',
        url: "/api/users/" + window.localStorage.sub
      }).then(function (response) {
        var newGame = {
          title: title,
          game: game,
          createdBy: window.localStorage.sub,
          nickname: response.data[0].nickname
        };
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.request({
          method: 'post',
          url: "/api/games",
          data: newGame
        }).then(function (response) {
          console.log(response.config.data);
          _history__WEBPACK_IMPORTED_MODULE_9__["default"].replace('/home');
        }).catch(function (error) {
          console.log(error);
        });
      });
    };

    _this.state = {
      title: "",
      clue: [{
        value: ""
      }],
      code: [{
        value: ""
      }]
    };
    return _this;
  }

  Object(_Users_lynntang_Desktop_UT_BOOTCAMP_homework_Project_3_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InputForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/users/" + window.localStorage.sub).then(function (response) {
        console.log(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        auth: this.props.auth,
        history: this.props.history,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "createGame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Create a Game")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "createContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["MuiThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
        required: true,
        id: "filled-required",
        label: "Required",
        className: this.props.classes.root,
        margin: "normal",
        variant: "filled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Clue and Code"), this.state.clue.map(function (clue, idx) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "clueinput",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["MuiThemeProvider"], {
          theme: theme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
          id: "outlined-textarea",
          label: "Enter clue here",
          multiline: true,
          className: _this2.props.classes.root,
          margin: "normal",
          variant: "filled",
          placeholder: "Clue #".concat(idx + 1),
          value: _this2.state.clue[idx].value,
          onChange: _this2.handleClueChange(idx),
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
          id: "outlined-textarea",
          label: "Enter code here",
          multiline: true,
          className: _this2.props.classes.root,
          margin: "normal",
          variant: "filled",
          placeholder: "Code #".concat(idx + 1),
          value: _this2.state.code[idx].value,
          onChange: _this2.handleCodeChange(idx),
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
          onClick: _this2.handleRemoveClueAndCode(idx),
          className: "trashcanButton",
          "aria-label": "Delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        })));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["MuiThemeProvider"], {
        theme: theme2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_17___default.a, {
        color: "primary",
        "aria-label": "Add",
        className: this.props.classes.fabButton,
        onClick: this.handleAddClueandCode,
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["MuiThemeProvider"], {
        theme: theme3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onClick: this.onSave,
        variant: "contained",
        color: "primary",
        className: this.props.classes.submitButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Send", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: "newIcon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "send")))))));
    }
  }]);

  return InputForm;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(styles)(InputForm));

/***/ })

})
//# sourceMappingURL=main.02eaa234847fd343dd68.hot-update.js.map