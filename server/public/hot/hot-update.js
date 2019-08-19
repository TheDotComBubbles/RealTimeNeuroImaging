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
          username: _this.state.newUsername,
          password: _this.state.newPassword
        });

        react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AuthenticatedApp__WEBPACK_IMPORTED_MODULE_4__["default"], {
          socket: _this.props.socket,
          username: _this.state.username
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.socket.off("loginAttempt");
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
        className: "centered",
        id: "username",
        name: "style",
        type: "text",
        value: this.state.username,
        onChange: this.usernameChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "centered",
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
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "newUsername",
        className: "col-12 centered"
      }, "New Username:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "centered col-lg-4 col-md-8 col-sm-12",
        id: "newUsername",
        name: "style",
        type: "text",
        value: this.state.newUsername,
        onChange: this.newUsernameChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "newPassword",
        className: "col-12 centered"
      }, "New Password:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "centered col-lg-4 col-md-8 col-sm-12",
        id: "newPassword",
        name: "style",
        type: "password",
        value: this.state.newPassword,
        onChange: this.newPasswordChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "passwordConf",
        className: "col-12 centered"
      }, "Please Confirm Password:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "centered col-lg-4 col-md-8 col-sm-12",
        id: "passwordConf",
        name: "style",
        type: "password",
        value: this.state.passwordConf,
        onChange: this.passwordConfChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "phyCheckbox",
        className: "centered col-8"
      }, "Please Confirm that you are either a Practicing Physician and/or Phil Barresi:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "col-12 centered",
        id: "phyCheckbox",
        name: "style",
        type: "checkbox",
        value: this.state.phyCheckbox,
        onChange: this.phyCheckboxChange
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit" //type=submit veresus type=button?
        ,
        onClick: this.register
      }, "Submit")))))))));
    }
  }]);

  return LoginApp;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginApp);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTG9naW5BcHAuanMiXSwibmFtZXMiOlsiTG9naW5BcHAiLCJwcm9wcyIsImxvZ2luIiwic29ja2V0IiwiZW1pdCIsInVzZXJuYW1lIiwic3RhdGUiLCJwYXNzd29yZCIsInJlZ2lzdGVyIiwidG9hc3QiLCJzZXR0aW5ncyIsImNsb3NlT25DbGljayIsImNsb3NlT25Fc2NhcGUiLCJwcm9ncmVzc0JhciIsIm92ZXJsYXkiLCJhbmltYXRlSW5zaWRlIiwiY29sb3IiLCJuZXdVc2VybmFtZSIsImVycm9yIiwicG9zaXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJuZXdQYXNzd29yZCIsInBhc3N3b3JkQ29uZiIsInBoeUNoZWNrYm94IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlcm5hbWVDaGFuZ2UiLCJiaW5kIiwicGFzc3dvcmRDaGFuZ2UiLCJuZXdVc2VybmFtZUNoYW5nZSIsIm5ld1Bhc3N3b3JkQ2hhbmdlIiwicGFzc3dvcmRDb25mQ2hhbmdlIiwicGh5Q2hlY2tib3hDaGFuZ2UiLCJvbiIsImRhdGEiLCJhdXRoIiwib2ZmIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInhzcyIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQUVGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGtGQUFNQSxLQUFOOztBQURpQixVQXNDckJDLEtBdENxQixHQXNDYixZQUFNO0FBQ1Y7QUFDQSxZQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDO0FBQzlCQyxnQkFBUSxF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VDtBQUdJLFlBQUksRUFBQyxVQUhUO0FBSUksYUFBSyxFQUFFLEtBQUsxQixLQUFMLENBQVdnQixXQUp0QjtBQUtJLGdCQUFRLEVBQUUsS0FBS1c7QUFMbkIsUUFKRixDQWRGLEVBMEJFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUErQixpQkFBUyxFQUFDO0FBQXpDLG9DQURGLEVBSUU7QUFBTyxpQkFBUyxFQUFDLHNDQUFqQjtBQUNJLFVBQUUsRUFBQyxjQURQO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxZQUFJLEVBQUMsVUFIVDtBQUlJLGFBQUssRUFBRSxLQUFLM0IsS0FBTCxDQUFXaUIsWUFKdEI7QUFLSSxnQkFBUSxFQUFFLEtBQUtXO0FBTG5CLFFBSkYsQ0ExQkYsRUFzQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQTZCLGlCQUFTLEVBQUM7QUFBdkMsMkZBRUU7QUFDRSxpQkFBUyxFQUFDLGlCQURaO0FBRUksVUFBRSxFQUFDLGFBRlA7QUFHSSxZQUFJLEVBQUMsT0FIVDtBQUlJLFlBQUksRUFBQyxVQUpUO0FBS0ksYUFBSyxFQUFFLEtBQUs1QixLQUFMLENBQVdrQixXQUx0QjtBQU1JLGdCQUFRLEVBQUUsS0FBS1c7QUFObkIsUUFGRixDQURGLENBdENGLEVBbURFLHdFQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFAsQ0FDZTtBQURmO0FBRUUsZUFBTyxFQUFFLEtBQUszQjtBQUZoQixrQkFERixDQW5ERixDQUZGLENBREYsQ0FERixDQXpDRixDQVBGLENBTkYsQ0FERjtBQThIRDs7OztFQXZPb0J1Qyw0Q0FBSyxDQUFDQyxTOztBQTJPZGhELHVFQUFmLEUiLCJmaWxlIjoiaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9hc3QgZnJvbSBcIml6aXRvYXN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHhzcyBmcm9tICd4c3MnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRlZEFwcCBmcm9tICcuL0F1dGhlbnRpY2F0ZWRBcHAnO1xyXG5cclxuY2xhc3MgTG9naW5BcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgIG5ld1VzZXJuYW1lOiAnJyxcclxuICAgICAgICAgbmV3UGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICBwYXNzd29yZENvbmY6ICcnLFxyXG4gICAgICAgICBwaHlDaGVja2JveDogZmFsc2UsXHJcbiAgICAgICAgIGxvZ2luOiAnJyxcclxuICAgICAgICAgcmVnaXN0ZXI6ICcnXHJcbiAgfTtcclxuXHJcbiAgdGhpcy51c2VybmFtZUNoYW5nZSA9IHRoaXMudXNlcm5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB0aGlzLnBhc3N3b3JkQ2hhbmdlID0gdGhpcy5wYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHRoaXMubmV3VXNlcm5hbWVDaGFuZ2UgPSB0aGlzLm5ld1VzZXJuYW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgdGhpcy5uZXdQYXNzd29yZENoYW5nZSA9IHRoaXMubmV3UGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB0aGlzLnBhc3N3b3JkQ29uZkNoYW5nZSA9IHRoaXMucGFzc3dvcmRDb25mQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgdGhpcy5waHlDaGVja2JveENoYW5nZSA9IHRoaXMucGh5Q2hlY2tib3hDaGFuZ2UuYmluZCh0aGlzKTtcclxufVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICB0aGlzLnByb3BzLnNvY2tldC5vbignbG9naW5BdHRlbXB0JywgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YS5hdXRoKSBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgICA8QXV0aGVudGljYXRlZEFwcCBcclxuICAgICAgICAgICAgc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH1cclxuICAgICAgICAgICAgdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gICAgICAgIGVsc2UgdG9hc3QuZXJyb3Ioe2NvbG9yOiAncmVkJywgdGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdJbnZhbGlkIFVzZXJuYW1lIGFuZCBQYXNzd29yZCBDb21iaW5hdGlvbicsIHBvc2l0aW9uOiAnY2VudGVyJ30pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5zb2NrZXQub2ZmKFwibG9naW5BdHRlbXB0XCIpXHJcbiAgfVxyXG5cclxuICBsb2dpbiA9ICgpID0+IHtcclxuICAgICAgLy9hdXRoZW50aWNhdGUgaGVyZSB3aXRoIHNvY2tldGlvIHNlbmRcclxuICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdChcImxvZ2luXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZXJuYW1lQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIG5ld1VzZXJuYW1lQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuZXdVc2VybmFtZTogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIG5ld1Bhc3N3b3JkQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuZXdQYXNzd29yZDogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICB9XHJcblxyXG4gIHBhc3N3b3JkQ29uZkNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmRDb25mOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcGh5Q2hlY2tib3hDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3BoeUNoZWNrYm94OiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgdG9hc3Quc2V0dGluZ3Moe1xyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIGNsb3NlT25Fc2NhcGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgb3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIGFuaW1hdGVJbnNpZGU6IGZhbHNlLFxyXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoIXRoaXMuc3RhdGUubmV3VXNlcm5hbWUpIHRvYXN0LmVycm9yKHtcclxuICAgICAgcG9zaXRpb246J2NlbnRlcicsXHJcbiAgICAgIHRpdGxlOiAnRXJyb3InLCBcclxuICAgICAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHVzZXJuYW1lJ1xyXG4gICAgfSk7XHJcbiAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkKSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBQYXNzd29yZCcscG9zaXRpb246J2NlbnRlcicsIGNvbG9yOidyZWQnfSk7XHJcbiAgICBlbHNlIGlmKHRoaXMuc3RhdGUubmV3UGFzc3dvcmQgIT09IHRoaXMuc3RhdGUucGFzc3dvcmRDb25mKSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdDb25maXJtYXRpb24gUGFzc3dvcmQgRGlkIE5vdCBNYXRjaCcscG9zaXRpb246J2NlbnRlcicsIGNvbG9yOidyZWQnfSk7XHJcbiAgICBlbHNlIGlmKCF0aGlzLnN0YXRlLnBoeUNoZWNrYm94KSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdQaHlzaWNpYW5zIGFuZCBHcmFkZXJzIE9ubHkgUGxlYXNlJyxwb3NpdGlvbjonY2VudGVyJywgY29sb3I6J3JlZCd9KTtcclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoXCJuZXdVc2VyXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS5uZXdVc2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5uZXdQYXNzd29yZFxyXG4gICAgICB9KVxyXG4gICAgICBSZWFjdERPTS5yZW5kZXIoPEF1dGhlbnRpY2F0ZWRBcHAgc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH0gdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbnJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItZGFyayBmaXhlZC10b3AgYmctZGFyayBmcm9udFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBjZW50ZXJlZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBOZXVyb1RlY2hcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIFJlYWx0aW1lIE5ldXJvaW1hZ2luZyBWaWV3ZXIhPC9oMT5cclxuICAgICAgICAgICAgICA8cD5BbmFseXplLCBEaWFnbm9zZSwgYW5kIFJlc3BvbmQgaW4gUmVhbC1UaW1lPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm9yZGVyc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBpZD1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5QbGVhc2UgTG9naW4gd2l0aCBZb3VyIENyZWRlbnRpYWxzIHRvIEFjY2VzcyBQYXRpZW50IFJlY29yZHMgYW5kIFJlYWx0aW1lIEltYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwibG9naW5Gb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXNlcm5hbWVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNlbnRlcmVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJvcmRlcnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgaWQ9XCJyZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5BbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IHJlZ2lzdGVyIGZvciBhIG5ldyBhY2NvdW50OjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwicmVnaXN0cmF0aW9uRm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3VXNlcm5hbWVcIiBjbGFzc05hbWU9XCJjb2wtMTIgY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFVzZXJuYW1lOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJlZCBjb2wtbGctNCBjb2wtbWQtOCBjb2wtc20tMTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld1VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uZXdVc2VybmFtZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgUGFzc3dvcmQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjZW50ZXJlZCBjb2wtbGctNCBjb2wtbWQtOCBjb2wtc20tMTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5ld1Bhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZENvbmZcIiAgY2xhc3NOYW1lPVwiY29sLTEyIGNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBDb25maXJtIFBhc3N3b3JkOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2VudGVyZWQgY29sLWxnLTQgY29sLW1kLTggY29sLXNtLTEyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZENvbmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRDb25mfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBoeUNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY2VudGVyZWQgY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIENvbmZpcm0gdGhhdCB5b3UgYXJlIGVpdGhlciBhIFByYWN0aWNpbmcgUGh5c2ljaWFuIGFuZC9vciBQaGlsIEJhcnJlc2k6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgY2VudGVyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaHlDaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waHlDaGVja2JveH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBoeUNoZWNrYm94Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiLy90eXBlPXN1Ym1pdCB2ZXJlc3VzIHR5cGU9YnV0dG9uP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5BcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==