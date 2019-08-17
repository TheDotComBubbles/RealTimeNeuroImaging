webpackHotUpdate("app",{

/***/ "./src/client/components/LoginApp.js":
/*!*******************************************!*\
  !*** ./src/client/components/LoginApp.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "./node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthenticatedApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthenticatedApp */ "./src/client/components/AuthenticatedApp.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var LoginApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginApp, _React$Component);

  function LoginApp(props) {
    var _this;

    _classCallCheck(this, LoginApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginApp).call(this, props));

    _this.login = function () {
      //authenticate here with socketio send
      _this.props.socket.emit("login", {
        username: _this.state.username,
        password: _this.state.password
      });
    };

    _this.register = function () {
      izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.settings({
        closeOnClick: true,
        closeOnEscape: true,
        progressBar: false,
        overlay: false,
        animateInside: false,
        color: "green"
      });
      if (!_this.state.newUsername) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        position: 'center',
        title: 'Error',
        message: 'Please enter a username'
      });else if (!_this.state.newPassword) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Please enter a Password',
        position: 'center',
        color: 'red'
      });else if (_this.state.newPassword !== _this.state.passwordConf) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Confirmation Password Did Not Match',
        position: 'center',
        color: 'red'
      });else if (!_this.state.phyCheckbox) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Physicians and Graders Only Please',
        position: 'center',
        color: 'red'
      });else {
        _this.props.socket.emit("newUser", {
          username: _this.state.username,
          password: _this.state.newPassword
        });

        react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AuthenticatedApp__WEBPACK_IMPORTED_MODULE_4__["default"], {
          socket: _this.props.socket
        }), document.getElementById("app"));
      }
    };

    _this.state = {
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      passwordConf: '',
      phyCheckbox: false,
      login: '',
      register: ''
    };
    _this.usernameChange = _this.usernameChange.bind(_assertThisInitialized(_this));
    _this.passwordChange = _this.passwordChange.bind(_assertThisInitialized(_this));
    _this.newUsernameChange = _this.newUsernameChange.bind(_assertThisInitialized(_this));
    _this.newPasswordChange = _this.newPasswordChange.bind(_assertThisInitialized(_this));
    _this.passwordConfChange = _this.passwordConfChange.bind(_assertThisInitialized(_this));
    _this.phyCheckboxChange = _this.phyCheckboxChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.socket.on('loginAttempt', function (data) {
        if (data.auth) react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AuthenticatedApp__WEBPACK_IMPORTED_MODULE_4__["default"], {
          socket: _this2.props.socket,
          username: _this2.state.username
        }), document.getElementById("app"));else izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          color: 'red',
          title: 'Error',
          message: 'Invalid Username and Password Combination',
          position: 'center'
        });
      });
    }
  }, {
    key: "usernameChange",
    value: function usernameChange(event) {
      this.setState({
        username: xss__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value)
      });
    }
  }, {
    key: "passwordChange",
    value: function passwordChange(event) {
      this.setState({
        password: xss__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value)
      });
    }
  }, {
    key: "newUsernameChange",
    value: function newUsernameChange(event) {
      this.setState({
        newUsername: xss__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value)
      });
    }
  }, {
    key: "newPasswordChange",
    value: function newPasswordChange(event) {
      this.setState({
        newPassword: xss__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value)
      });
    }
  }, {
    key: "passwordConfChange",
    value: function passwordConfChange(event) {
      this.setState({
        passwordConf: xss__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value)
      });
    }
  }, {
    key: "phyCheckboxChange",
    value: function phyCheckboxChange(event) {
      this.setState({
        phyCheckbox: xss__WEBPACK_IMPORTED_MODULE_2___default()(event.target.value)
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "navbar navbar-expand-sm navbar-dark fixed-top bg-dark front"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "navbar-brand centered",
        href: "#"
      }, "NeuroTech")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jumbotron"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Welcome to the Realtime Neuroimaging Viewer!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Analyze, Diagnose, and Respond in Real-Time"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row borders"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        id: "login"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Please Login with Your Credentials to Access Patient Records and Realtime Images"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        id: "loginForm",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "username"
      }, "Username:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "username",
        name: "style",
        type: "text",
        value: this.state.username,
        onChange: this.usernameChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "password",
        name: "style",
        type: "password",
        value: this.state.password,
        onChange: this.passwordChange
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        onClick: this.login
      }, "Submit")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row borders"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        id: "register"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "centered"
      }, "Alternatively, you may register for a new account:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        id: "registrationForm",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "centered"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "newUsername"
      }, "New Username:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "centered"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "newUsername",
        name: "style",
        type: "text",
        value: this.state.newUsername,
        onChange: this.newUsernameChange
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "centered"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "newPassword",
        className: "centered"
      }, "New Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "newPassword",
        name: "style",
        type: "password",
        value: this.state.newPassword,
        onChange: this.newPasswordChange
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "centered"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "passwordConf"
      }, "Please Confirm Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "passwordConf",
        name: "style",
        type: "password",
        value: this.state.passwordConf,
        onChange: this.passwordConfChange
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "centered"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "phyCheckbox",
        className: "centered"
      }, "Please Confirm that you are either a Practicing Physician and/or Phil Barresi:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry",
        id: "phyCheckbox",
        name: "style",
        type: "checkbox",
        value: this.state.phyCheckbox,
        onChange: this.phyCheckboxChange
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        onClick: this.register
      }, "Submit")))))))));
    }
  }]);

  return LoginApp;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginApp);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTG9naW5BcHAuanMiXSwibmFtZXMiOlsiTG9naW5BcHAiLCJwcm9wcyIsImxvZ2luIiwic29ja2V0IiwiZW1pdCIsInVzZXJuYW1lIiwic3RhdGUiLCJwYXNzd29yZCIsInJlZ2lzdGVyIiwidG9hc3QiLCJzZXR0aW5ncyIsImNsb3NlT25DbGljayIsImNsb3NlT25Fc2NhcGUiLCJwcm9ncmVzc0JhciIsIm92ZXJsYXkiLCJhbmltYXRlSW5zaWRlIiwiY29sb3IiLCJuZXdVc2VybmFtZSIsImVycm9yIiwicG9zaXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJuZXdQYXNzd29yZCIsInBhc3N3b3JkQ29uZiIsInBoeUNoZWNrYm94IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlcm5hbWVDaGFuZ2UiLCJiaW5kIiwicGFzc3dvcmRDaGFuZ2UiLCJuZXdVc2VybmFtZUNoYW5nZSIsIm5ld1Bhc3N3b3JkQ2hhbmdlIiwicGFzc3dvcmRDb25mQ2hhbmdlIiwicGh5Q2hlY2tib3hDaGFuZ2UiLCJvbiIsImRhdGEiLCJhdXRoIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInhzcyIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQUVGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGtGQUFNQSxLQUFOOztBQURpQixVQWlDckJDLEtBakNxQixHQWlDYixZQUFNO0FBQ1Y7QUFDQSxZQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDO0FBQzlCQyxnQkFBUSxFQUFFLE1B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REYsQ0FoQkYsRUE4QkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFPLGVBQU8sRUFBQztBQUFmLHFDQUVFLHdFQUNBO0FBQU8saUJBQVMsRUFBQywrQkFBakI7QUFDSSxVQUFFLEVBQUMsY0FEUDtBQUVJLFlBQUksRUFBQyxPQUZUO0FBR0ksWUFBSSxFQUFDLFVBSFQ7QUFJSSxhQUFLLEVBQUUsS0FBSzNCLEtBQUwsQ0FBV2lCLFlBSnRCO0FBS0ksZ0JBQVEsRUFBRSxLQUFLVztBQUxuQixRQURBLENBRkYsQ0FERixDQTlCRixFQTRDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBNkIsaUJBQVMsRUFBQztBQUF2QywyRkFFRTtBQUFPLGlCQUFTLEVBQUMsc0JBQWpCO0FBQ0ksVUFBRSxFQUFDLGFBRFA7QUFFSSxZQUFJLEVBQUMsT0FGVDtBQUdJLFlBQUksRUFBQyxVQUhUO0FBSUksYUFBSyxFQUFFLEtBQUs1QixLQUFMLENBQVdrQixXQUp0QjtBQUtJLGdCQUFRLEVBQUUsS0FBS1c7QUFMbkIsUUFGRixDQURGLENBNUNGLEVBd0RFLHdFQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUUsS0FBSzNCO0FBRmhCLGtCQURGLENBeERGLENBRkYsQ0FERixDQURGLENBekNGLENBUEYsQ0FQRixDQURGO0FBb0lEOzs7O0VBek9vQnNDLDRDQUFLLENBQUNDLFM7O0FBNk9kL0MsdUVBQWYsRSIsImZpbGUiOiJob3QvaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2FzdCBmcm9tIFwiaXppdG9hc3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeHNzIGZyb20gJ3hzcyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBdXRoZW50aWNhdGVkQXBwIGZyb20gJy4vQXV0aGVudGljYXRlZEFwcCc7XHJcblxyXG5jbGFzcyBMb2dpbkFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgbmV3VXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICBuZXdQYXNzd29yZDogJycsXHJcbiAgICAgICAgIHBhc3N3b3JkQ29uZjogJycsXHJcbiAgICAgICAgIHBoeUNoZWNrYm94OiBmYWxzZSxcclxuICAgICAgICAgbG9naW46ICcnLFxyXG4gICAgICAgICByZWdpc3RlcjogJydcclxuICB9O1xyXG5cclxuICB0aGlzLnVzZXJuYW1lQ2hhbmdlID0gdGhpcy51c2VybmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHRoaXMucGFzc3dvcmRDaGFuZ2UgPSB0aGlzLnBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgdGhpcy5uZXdVc2VybmFtZUNoYW5nZSA9IHRoaXMubmV3VXNlcm5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB0aGlzLm5ld1Bhc3N3b3JkQ2hhbmdlID0gdGhpcy5uZXdQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHRoaXMucGFzc3dvcmRDb25mQ2hhbmdlID0gdGhpcy5wYXNzd29yZENvbmZDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB0aGlzLnBoeUNoZWNrYm94Q2hhbmdlID0gdGhpcy5waHlDaGVja2JveENoYW5nZS5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2xvZ2luQXR0ZW1wdCcsIGRhdGEgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEuYXV0aCkgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgPEF1dGhlbnRpY2F0ZWRBcHAgXHJcbiAgICAgICAgICAgIHNvY2tldD17dGhpcy5wcm9wcy5zb2NrZXR9XHJcbiAgICAgICAgICAgIHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuICAgICAgICBlbHNlIHRvYXN0LmVycm9yKHtjb2xvcjogJ3JlZCcsIHRpdGxlOiAnRXJyb3InLCBtZXNzYWdlOiAnSW52YWxpZCBVc2VybmFtZSBhbmQgUGFzc3dvcmQgQ29tYmluYXRpb24nLCBwb3NpdGlvbjogJ2NlbnRlcid9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbiA9ICgpID0+IHtcclxuICAgICAgLy9hdXRoZW50aWNhdGUgaGVyZSB3aXRoIHNvY2tldGlvIHNlbmRcclxuICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdChcImxvZ2luXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZXJuYW1lQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIG5ld1VzZXJuYW1lQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuZXdVc2VybmFtZTogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIG5ld1Bhc3N3b3JkQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuZXdQYXNzd29yZDogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZkNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmRDb25mOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcGh5Q2hlY2tib3hDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3BoeUNoZWNrYm94OiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgdG9hc3Quc2V0dGluZ3Moe1xyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIGNsb3NlT25Fc2NhcGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgb3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIGFuaW1hdGVJbnNpZGU6IGZhbHNlLFxyXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIXRoaXMuc3RhdGUubmV3VXNlcm5hbWUpIHRvYXN0LmVycm9yKHtcclxuICAgICAgcG9zaXRpb246J2NlbnRlcicsXHJcbiAgICAgIHRpdGxlOiAnRXJyb3InLCBcclxuICAgICAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHVzZXJuYW1lJ1xyXG4gICAgfSk7XHJcbiAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkKSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBQYXNzd29yZCcscG9zaXRpb246J2NlbnRlcicsIGNvbG9yOidyZWQnfSk7XHJcbiAgICBlbHNlIGlmKHRoaXMuc3RhdGUubmV3UGFzc3dvcmQgIT09IHRoaXMuc3RhdGUucGFzc3dvcmRDb25mKSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdDb25maXJtYXRpb24gUGFzc3dvcmQgRGlkIE5vdCBNYXRjaCcscG9zaXRpb246J2NlbnRlcicsIGNvbG9yOidyZWQnfSk7XHJcbiAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLnBoeUNoZWNrYm94KSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdQaHlzaWNpYW5zIGFuZCBHcmFkZXJzIE9ubHkgUGxlYXNlJyxwb3NpdGlvbjonY2VudGVyJywgY29sb3I6J3JlZCd9KTtcclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoXCJuZXdVc2VyXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5uZXdQYXNzd29yZFxyXG4gICAgICB9KVxyXG4gICAgICBSZWFjdERPTS5yZW5kZXIoPEF1dGhlbnRpY2F0ZWRBcHAgc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gICAgfVxyXG5cclxuICB9IFxyXG5cclxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbnJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItZGFyayBmaXhlZC10b3AgYmctZGFyayBmcm9udFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBjZW50ZXJlZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBOZXVyb1RlY2hcclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxtYWluIHJvbGU9XCJtYWluXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBSZWFsdGltZSBOZXVyb2ltYWdpbmcgVmlld2VyITwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+QW5hbHl6ZSwgRGlhZ25vc2UsIGFuZCBSZXNwb25kIGluIFJlYWwtVGltZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJvcmRlcnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgaWQ9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+UGxlYXNlIExvZ2luIHdpdGggWW91ciBDcmVkZW50aWFscyB0byBBY2Nlc3MgUGF0aWVudCBSZWNvcmRzIGFuZCBSZWFsdGltZSBJbWFnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImxvZ2luRm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWU6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeSBjZW50ZXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVzZXJuYW1lQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeSBjZW50ZXJlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib3JkZXJzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVwicmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+QWx0ZXJuYXRpdmVseSwgeW91IG1heSByZWdpc3RlciBmb3IgYSBuZXcgYWNjb3VudDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInJlZ2lzdHJhdGlvbkZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3VXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFVzZXJuYW1lOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZm9ybWF0aW9uVGV4dEVudHJ5IGNlbnRlcmVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmV3VXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmV3VXNlcm5hbWVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld1Bhc3N3b3JkXCIgIGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBQYXNzd29yZDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uVGV4dEVudHJ5IGNlbnRlcmVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5ld1Bhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkQ29uZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgQ29uZmlybSBQYXNzd29yZDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeSBjZW50ZXJlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZENvbmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRDb25mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25mQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaHlDaGVja2JveFwiIGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBDb25maXJtIHRoYXQgeW91IGFyZSBlaXRoZXIgYSBQcmFjdGljaW5nIFBoeXNpY2lhbiBhbmQvb3IgUGhpbCBCYXJyZXNpOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uVGV4dEVudHJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBoeUNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBoeUNoZWNrYm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGh5Q2hlY2tib3hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=