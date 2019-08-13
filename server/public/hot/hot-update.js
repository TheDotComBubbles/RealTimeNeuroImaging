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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      var username = _this.state.username;
      var password = _this.state.password;
      return client('login', {
        body: {
          username: username,
          password: password
        }
      }).then(handleUserResponse);
    };

    _this.register = function () {
      izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.settings({
        position: 'center',
        closeOnClick: true,
        closeOnEscape: true,
        progressBar: false,
        overlay: false,
        animateInside: false,
        color: "green"
      });
      if (!_this.state.newUsername) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Please enter a username'
      });else if (!_this.state.newPassword) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Please enter a Password'
      });else if (_this.state.newPassword !== _this.state.passwordConf) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Confirmation Password Did Not Match'
      });else if (!_this.state.phyCheckbox) izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
        title: 'Error',
        message: 'Physicians and Graders Only Please'
      });else {
        react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AuthenticatedApp__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById("app"));
        /*return client('register', {body: {username, password}}).then(
        handleUserResponse,
        )*/
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
    key: "getUser",
    value: function getUser() {
      var token = getToken();

      if (!token) {
        return Promise.resolve(null);
      }

      return client('me')["catch"](function (error) {
        logout();
        return Promise.reject(error);
      });
    }
  }, {
    key: "handleUserResponse",
    value: function handleUserResponse(_ref) {
      var _ref$user = _ref.user,
          token = _ref$user.token,
          user = _objectWithoutProperties(_ref$user, ["token"]);

      window.localStorage.setItem(localStorageKey, token);
      return user;
    }
  }, {
    key: "logout",
    value: function logout() {
      window.localStorage.removeItem(localStorageKey);
      return Promise.resolve();
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return window.localStorage.getItem(localStorageKey);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rubix"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-dark fixed-top bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, "Homepage")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Please Login with Your Credentials to Access Patient Records and Real-time Images"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "password",
        name: "style",
        type: "password",
        value: this.state.password,
        onChange: this.passwordChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        onClick: this.login
      }, "Submit")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row borders"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        id: "register"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Alternatively, you may registed for a new account:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
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
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "phyCheckbox"
      }, "Please Confirm that you are either a Practicing Physician and/or Phil Barresi:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "informationTextEntry centered",
        id: "phyCheckbox",
        name: "style",
        type: "checkbox",
        value: this.state.phyCheckbox,
        onChange: this.phyCheckboxChange
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        onClick: this.register
      }, "Submit")))))))))
      /*
          <Centered>
              <Modal button={<Button css={{marginRight: 6}}>Login</Button>}>
                <ModalTitle>Login</ModalTitle>
                <LoginForm onSubmit={this.login} buttonText="Login" />
              </Modal>
              <Modal button={<Button variant="secondary">Register</Button>}>
                <ModalTitle>Register</ModalTitle>
                <LoginForm onSubmit={this.register} buttonText="Register" />
              </Modal>
            </div>
          </Centered>*/
      ;
    }
  }]);

  return LoginApp;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginApp);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTG9naW5BcHAuanMiXSwibmFtZXMiOlsiTG9naW5BcHAiLCJwcm9wcyIsImxvZ2luIiwidXNlcm5hbWUiLCJzdGF0ZSIsInBhc3N3b3JkIiwiY2xpZW50IiwiYm9keSIsInRoZW4iLCJoYW5kbGVVc2VyUmVzcG9uc2UiLCJyZWdpc3RlciIsInRvYXN0Iiwic2V0dGluZ3MiLCJwb3NpdGlvbiIsImNsb3NlT25DbGljayIsImNsb3NlT25Fc2NhcGUiLCJwcm9ncmVzc0JhciIsIm92ZXJsYXkiLCJhbmltYXRlSW5zaWRlIiwiY29sb3IiLCJuZXdVc2VybmFtZSIsImVycm9yIiwidGl0bGUiLCJtZXNzYWdlIiwibmV3UGFzc3dvcmQiLCJwYXNzd29yZENvbmYiLCJwaHlDaGVja2JveCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJuYW1lQ2hhbmdlIiwiYmluZCIsInBhc3N3b3JkQ2hhbmdlIiwibmV3VXNlcm5hbWVDaGFuZ2UiLCJuZXdQYXNzd29yZENoYW5nZSIsInBhc3N3b3JkQ29uZkNoYW5nZSIsInBoeUNoZWNrYm94Q2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInhzcyIsInRhcmdldCIsInZhbHVlIiwidG9rZW4iLCJnZXRUb2tlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwibG9nb3V0IiwicmVqZWN0IiwidXNlciIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhbFN0b3JhZ2VLZXkiLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLFE7Ozs7O0FBRUYsb0JBQVlDLEtBQVos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QUFLVztBQUxuQixRQURGLENBRkYsQ0FERixDQWhCRixFQThCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYscUNBRUUsd0VBQ0E7QUFBTyxpQkFBUyxFQUFDLCtCQUFqQjtBQUNJLFVBQUUsRUFBQyxjQURQO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxZQUFJLEVBQUMsVUFIVDtBQUlJLGFBQUssRUFBRSxLQUFLL0IsS0FBTCxDQUFXcUIsWUFKdEI7QUFLSSxnQkFBUSxFQUFFLEtBQUtXO0FBTG5CLFFBREEsQ0FGRixDQURGLENBOUJGLEVBNENFLHdFQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYsMkZBRUU7QUFBTyxpQkFBUyxFQUFDLCtCQUFqQjtBQUNJLFVBQUUsRUFBQyxhQURQO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxZQUFJLEVBQUMsVUFIVDtBQUlJLGFBQUssRUFBRSxLQUFLaEMsS0FBTCxDQUFXc0IsV0FKdEI7QUFLSSxnQkFBUSxFQUFFLEtBQUtXO0FBTG5CLFFBRkYsQ0FERixDQTVDRixFQXdERSx3RUFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFFLEtBQUszQjtBQUZoQixrQkFERixDQXhERixDQUZGLENBREYsQ0FERixDQXZDRixDQVBGLENBTkY7QUErSEo7Ozs7Ozs7Ozs7OztBQWhJRTtBQTZJRDs7OztFQS9Qb0JnRCw0Q0FBSyxDQUFDQyxTOztBQWlRZDNELHVFQUFmLEUiLCJmaWxlIjoiaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9hc3QgZnJvbSBcIml6aXRvYXN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHhzcyBmcm9tICd4c3MnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXV0aGVudGljYXRlZEFwcCBmcm9tICcuL0F1dGhlbnRpY2F0ZWRBcHAnO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICBuZXdVc2VybmFtZTogJycsXHJcbiAgICAgICAgIG5ld1Bhc3N3b3JkOiAnJyxcclxuICAgICAgICAgcGFzc3dvcmRDb25mOiAnJyxcclxuICAgICAgICAgcGh5Q2hlY2tib3g6IGZhbHNlLFxyXG4gICAgICAgICBsb2dpbjogJycsXHJcbiAgICAgICAgIHJlZ2lzdGVyOiAnJ1xyXG4gIH07XHJcblxyXG4gIHRoaXMudXNlcm5hbWVDaGFuZ2UgPSB0aGlzLnVzZXJuYW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgdGhpcy5wYXNzd29yZENoYW5nZSA9IHRoaXMucGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB0aGlzLm5ld1VzZXJuYW1lQ2hhbmdlID0gdGhpcy5uZXdVc2VybmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHRoaXMubmV3UGFzc3dvcmRDaGFuZ2UgPSB0aGlzLm5ld1Bhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgdGhpcy5wYXNzd29yZENvbmZDaGFuZ2UgPSB0aGlzLnBhc3N3b3JkQ29uZkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHRoaXMucGh5Q2hlY2tib3hDaGFuZ2UgPSB0aGlzLnBoeUNoZWNrYm94Q2hhbmdlLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbiAgdXNlcm5hbWVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgbmV3VXNlcm5hbWVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe25ld1VzZXJuYW1lOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgbmV3UGFzc3dvcmRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe25ld1Bhc3N3b3JkOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcGFzc3dvcmRDb25mQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZENvbmY6IHhzcyhldmVudC50YXJnZXQudmFsdWUpfSk7XHJcbiAgfVxyXG5cclxuICBwaHlDaGVja2JveENoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGh5Q2hlY2tib3g6IHhzcyhldmVudC50YXJnZXQudmFsdWUpfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0VXNlcigpIHtcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKVxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xpZW50KCdtZScpLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgbG9nb3V0KClcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVVzZXJSZXNwb25zZSh7dXNlcjoge3Rva2VuLCAuLi51c2VyfX0pIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIHRva2VuKVxyXG4gICAgcmV0dXJuIHVzZXJcclxuICB9XHJcblxyXG4gIGxvZ2luID0gKCkgPT4ge1xyXG4gICAgbGV0IHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZTtcclxuICAgIGxldCBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmQ7XHJcblxyXG4gICAgcmV0dXJuIGNsaWVudCgnbG9naW4nLCB7Ym9keToge3VzZXJuYW1lLCBwYXNzd29yZH19KS50aGVuKGhhbmRsZVVzZXJSZXNwb25zZSlcclxuICB9XHJcbiAgXHJcbiAgcmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgdG9hc3Quc2V0dGluZ3Moe1xyXG4gICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgY2xvc2VPbkVzY2FwZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBvdmVybGF5OiBmYWxzZSxcclxuICAgICAgYW5pbWF0ZUluc2lkZTogZmFsc2UsXHJcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgfSk7XHJcblxyXG4gICAgaWYoIXRoaXMuc3RhdGUubmV3VXNlcm5hbWUpIHRvYXN0LmVycm9yKHt0aXRsZTogJ0Vycm9yJywgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHVzZXJuYW1lJ30pO1xyXG4gICAgZWxzZSBpZighdGhpcy5zdGF0ZS5uZXdQYXNzd29yZCkgdG9hc3QuZXJyb3Ioe3RpdGxlOiAnRXJyb3InLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgUGFzc3dvcmQnfSk7XHJcbiAgICBlbHNlIGlmKHRoaXMuc3RhdGUubmV3UGFzc3dvcmQgIT09IHRoaXMuc3RhdGUucGFzc3dvcmRDb25mKSB0b2FzdC5lcnJvcih7dGl0bGU6ICdFcnJvcicsIG1lc3NhZ2U6ICdDb25maXJtYXRpb24gUGFzc3dvcmQgRGlkIE5vdCBNYXRjaCd9KTtcclxuICAgIGVsc2UgaWYoIXRoaXMuc3RhdGUucGh5Q2hlY2tib3gpIHRvYXN0LmVycm9yKHt0aXRsZTogJ0Vycm9yJywgbWVzc2FnZTogJ1BoeXNpY2lhbnMgYW5kIEdyYWRlcnMgT25seSBQbGVhc2UnfSk7XHJcbiAgICBlbHNle1xyXG4gICAgICBSZWFjdERPTS5yZW5kZXIoPEF1dGhlbnRpY2F0ZWRBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuICAgICAgICAgIC8qcmV0dXJuIGNsaWVudCgncmVnaXN0ZXInLCB7Ym9keToge3VzZXJuYW1lLCBwYXNzd29yZH19KS50aGVuKFxyXG4gICAgICBoYW5kbGVVc2VyUmVzcG9uc2UsXHJcblxyXG4gICAgKSovXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gIH0gXHJcbiAgXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUtleSlcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gIH1cclxuICBcclxuICBnZXRUb2tlbigpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5yZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1Yml4XCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItZGFyayBmaXhlZC10b3AgYmctZGFya1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICBIb21lcGFnZVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8bWFpbiByb2xlPVwibWFpblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgUmVhbHRpbWUgTmV1cm9pbWFnaW5nIFZpZXdlciE8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPkFuYWx5emUsIERpYWdub3NlLCBhbmQgUmVzcG9uZCBpbiBSZWFsLVRpbWU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib3JkZXJzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGgyPlBsZWFzZSBMb2dpbiB3aXRoIFlvdXIgQ3JlZGVudGlhbHMgdG8gQWNjZXNzIFBhdGllbnQgUmVjb3JkcyBhbmQgUmVhbC10aW1lIEltYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwibG9naW5Gb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZm9ybWF0aW9uVGV4dEVudHJ5IGNlbnRlcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R5bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXNlcm5hbWVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeSBjZW50ZXJlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib3JkZXJzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVwicmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyPkFsdGVybmF0aXZlbHksIHlvdSBtYXkgcmVnaXN0ZWQgZm9yIGEgbmV3IGFjY291bnQ6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJyZWdpc3RyYXRpb25Gb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld1VzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBVc2VybmFtZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeSBjZW50ZXJlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1VzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3VXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5ld1VzZXJuYW1lQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdQYXNzd29yZFwiICBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgUGFzc3dvcmQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeSBjZW50ZXJlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uZXdQYXNzd29yZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZENvbmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIENvbmZpcm0gUGFzc3dvcmQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5mb3JtYXRpb25UZXh0RW50cnkgY2VudGVyZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRDb25mXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBoeUNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBDb25maXJtIHRoYXQgeW91IGFyZSBlaXRoZXIgYSBQcmFjdGljaW5nIFBoeXNpY2lhbiBhbmQvb3IgUGhpbCBCYXJyZXNpOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uVGV4dEVudHJ5IGNlbnRlcmVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBoeUNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBoeUNoZWNrYm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucGh5Q2hlY2tib3hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gIC8qXHJcbiAgICAgIDxDZW50ZXJlZD5cclxuICAgICAgICAgIDxNb2RhbCBidXR0b249ezxCdXR0b24gY3NzPXt7bWFyZ2luUmlnaHQ6IDZ9fT5Mb2dpbjwvQnV0dG9uPn0+XHJcbiAgICAgICAgICAgIDxNb2RhbFRpdGxlPkxvZ2luPC9Nb2RhbFRpdGxlPlxyXG4gICAgICAgICAgICA8TG9naW5Gb3JtIG9uU3VibWl0PXt0aGlzLmxvZ2lufSBidXR0b25UZXh0PVwiTG9naW5cIiAvPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDxNb2RhbCBidXR0b249ezxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiPlJlZ2lzdGVyPC9CdXR0b24+fT5cclxuICAgICAgICAgICAgPE1vZGFsVGl0bGU+UmVnaXN0ZXI8L01vZGFsVGl0bGU+XHJcbiAgICAgICAgICAgIDxMb2dpbkZvcm0gb25TdWJtaXQ9e3RoaXMucmVnaXN0ZXJ9IGJ1dHRvblRleHQ9XCJSZWdpc3RlclwiIC8+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NlbnRlcmVkPiovXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=