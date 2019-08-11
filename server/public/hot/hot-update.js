webpackHotUpdate("app",{

/***/ "./src/client/components/EntryForm.js":
/*!********************************************!*\
  !*** ./src/client/components/EntryForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xss */ "./node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var messageDisplay = "";
var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3000');

var EntryForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EntryForm, _React$Component);

  function EntryForm(props) {
    var _this;

    _classCallCheck(this, EntryForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryForm).call(this, props));

    _this.displayImage = function (results) {
      var images = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = results.searchResponse.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              value = _step$value[1];

          if (index == 1) {
            images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "https://pixabay.com/"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              className: "image",
              src: xss__WEBPACK_IMPORTED_MODULE_3___default()(value.url),
              alt: xss__WEBPACK_IMPORTED_MODULE_3___default()(value.alt),
              height: "25px"
            }))));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ;

      if (images.length == 0) {
        images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\"Sorry, your request did not return any images\""));
      }

      react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "RenderedHtml"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, results.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "italics"
      }, results.message), images), document.getElementById("outputDiv"));
    };

    _this.state = {
      username: '',
      searchQuery: '',
      message: '',
      readOnly: false,
      imageURL: '',
      altImageText: ''
    };
    _this.usernameChange = _this.usernameChange.bind(_assertThisInitialized(_this));
    _this.searchQueryChange = _this.searchQueryChange.bind(_assertThisInitialized(_this));
    _this.messageChange = _this.messageChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.submitQuery = _this.submitQuery.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EntryForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      socket.on('news', function (data) {
        socket.emit('my other event', {
          my: 'data'
        });
      });
      socket.on("broadcast", function (response) {
        _this2.displayImage(response);
      });
    }
  }, {
    key: "usernameChange",
    value: function usernameChange(event) {
      this.setState({
        username: xss__WEBPACK_IMPORTED_MODULE_3___default()(event.target.value)
      });
    }
  }, {
    key: "searchQueryChange",
    value: function searchQueryChange(event) {
      this.setState({
        searchQuery: xss__WEBPACK_IMPORTED_MODULE_3___default()(event.target.value)
      });
    }
  }, {
    key: "messageChange",
    value: function messageChange(event) {
      this.setState({
        message: xss__WEBPACK_IMPORTED_MODULE_3___default()(event.target.value)
      });
      messageDisplay = xss__WEBPACK_IMPORTED_MODULE_3___default()(event.target.value);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "submitQuery",
    value: function submitQuery() {
      socket.emit('search', {
        message: this.state.message,
        searchQuery: this.state.searchQuery,
        username: this.state.username
      });
      this.setState({
        message: '',
        searchQuery: '',
        readOnly: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "username"
      }, "Username:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "informationTextEntry",
        id: "username",
        name: "style",
        type: "text",
        readOnly: this.state.readOnly,
        value: this.state.username,
        onChange: this.usernameChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "searchQuery"
      }, "Search Term:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "informationTextEntry",
        id: "searchQuery",
        name: "style",
        type: "text",
        value: this.state.searchQuery,
        onChange: this.searchQueryChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "message"
      }, "Message:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "informationTextEntry",
        id: "message",
        name: "style",
        type: "text",
        value: this.state.message,
        onChange: this.messageChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        onClick: this.submitQuery
      }, "Submit")));
    }
  }]);

  return EntryForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EntryForm);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW50cnlGb3JtLmpzIl0sIm5hbWVzIjpbIm1lc3NhZ2VEaXNwbGF5Iiwic29ja2V0IiwiaW8iLCJFbnRyeUZvcm0iLCJwcm9wcyIsImRpc3BsYXlJbWFnZSIsInJlc3VsdHMiLCJpbWFnZXMiLCJzZWFyY2hSZXNwb25zZSIsImVudHJpZXMiLCJpbmRleCIsInZhbHVlIiwicHVzaCIsInhzcyIsInVybCIsImFsdCIsImxlbmd0aCIsIlJlYWN0RE9NIiwicmVuZGVyIiwidXNlcm5hbWUiLCJtZXNzYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YXRlIiwic2VhcmNoUXVlcnkiLCJyZWFkT25seSIsImltYWdlVVJMIiwiYWx0SW1hZ2VUZXh0IiwidXNlcm5hbWVDaGFuZ2UiLCJiaW5kIiwic2VhcmNoUXVlcnlDaGFuZ2UiLCJtZXNzYWdlQ2hhbmdlIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0UXVlcnkiLCJvbiIsImRhdGEiLCJlbWl0IiwibXkiLCJyZXNwb25zZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGNBQWMsR0FBRyxFQUFyQjtBQUVBLElBQUlDLE1BQU0sR0FBR0MsdURBQUUsQ0FBQyx1QkFBRCxDQUFmOztJQUVNQyxTOzs7OztBQUVGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsbUZBQU1BLEtBQU47O0FBRGUsVUFnRW5CQyxZQWhFbUIsR0FnRUosVUFBQ0MsT0FBRCxFQUFhO0FBRXhCLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBRndCO0FBQUE7QUFBQTs7QUFBQTtBQUl4Qiw2QkFBNkJELE9BQU8sQ0FBQ0UsY0FBUixD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YUFBSyxFQUFFLEtBQUtQLEtBQUwsQ0FBV0gsT0FKdEI7QUFLSSxnQkFBUSxFQUFFLEtBQUtXO0FBTG5CLFFBRkosQ0F2QkosRUFpQ0ksd0VBQ0k7QUFDSSxZQUFJLEVBQUMsUUFEVDtBQUVJLGVBQU8sRUFBRSxLQUFLRTtBQUZsQixrQkFESixDQWpDSixDQURKO0FBNENIOzs7O0VBakptQlUsNENBQUssQ0FBQ0MsUzs7QUFvSmZ6Qyx3RUFBZixFIiwiZmlsZSI6ImhvdC9ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHhzcyBmcm9tIFwieHNzXCI7XHJcblxyXG5sZXQgbWVzc2FnZURpc3BsYXkgPSBcIlwiO1xyXG5cclxudmFyIHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcclxuXHJcbmNsYXNzIEVudHJ5Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbWFnZVVSTDogJycsXHJcbiAgICAgICAgICAgIGFsdEltYWdlVGV4dDogJydcclxuICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXNlcm5hbWVDaGFuZ2UgPSB0aGlzLnVzZXJuYW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeUNoYW5nZSA9IHRoaXMuc2VhcmNoUXVlcnlDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMubWVzc2FnZUNoYW5nZSA9IHRoaXMubWVzc2FnZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdFF1ZXJ5ID0gdGhpcy5zdWJtaXRRdWVyeS5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzb2NrZXQub24oJ25ld3MnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbXkgb3RoZXIgZXZlbnQnLCB7IG15OiAnZGF0YScgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiYnJvYWRjYXN0XCIsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlcm5hbWVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogeHNzKGV2ZW50LnRhcmdldC52YWx1ZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hRdWVyeUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFF1ZXJ5OiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1lc3NhZ2VDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiB4c3MoZXZlbnQudGFyZ2V0LnZhbHVlKX0pO1xyXG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5ID0geHNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRRdWVyeSgpIHtcclxuXHJcblxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdzZWFyY2gnLCB7IFxyXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxyXG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5SW1hZ2UgPSAocmVzdWx0cykgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiByZXN1bHRzLnNlYXJjaFJlc3BvbnNlLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBpZihpbmRleD09MSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGl4YWJheS5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3hzcyh2YWx1ZS51cmwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17eHNzKHZhbHVlLmFsdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYoaW1hZ2VzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGltYWdlcy5wdXNoKDxwPlwiU29ycnksIHlvdXIgcmVxdWVzdCBkaWQgbm90IHJldHVybiBhbnkgaW1hZ2VzXCI8L3A+KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiUmVuZGVyZWRIdG1sXCI+XHJcbiAgICAgICAgICAgICAgICA8cD57cmVzdWx0cy51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGFsaWNzXCI+e3Jlc3VsdHMubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VzfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXREaXZcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lOiBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51c2VybmFtZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFF1ZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIFRlcm06IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaFF1ZXJ5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvblRleHRFbnRyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0eWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubWVzc2FnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0UXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudHJ5Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9