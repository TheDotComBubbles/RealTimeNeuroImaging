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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "./node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _Med3Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Med3Controller */ "./src/client/components/Med3Controller.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var messageDisplay = "";

var EntryForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EntryForm, _React$Component);

  function EntryForm(props) {
    var _this;

    _classCallCheck(this, EntryForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntryForm).call(this, props));

    _this.componentWillUnmount = function () {
      _this.props.socket.off("patients");
    };

    _this.componentWillMount = function () {
      document.body.style.backgroundImage = null;
    };

    _this.getPatients = function () {
      _this.props.socket.emit('get', {});
    };

    _this.getPatientData = function (patientIndex) {
      _this.props.socket.emit('get', {
        patient: patientIndex
      });
    };

    _this.removeImaging = function () {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "RenderedHtml"
      }), document.getElementById("imaging"));
    };

    _this.displayPatient = function (patientData) {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "RenderedHtml"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Patient Data:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "patientData"
      }, "ID:"), " ", patientData.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "patientData"
      }, "Name:"), patientData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "patientData"
      }, "Sex:"), patientData.sex), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "patientData"
      }, "Condition:"), patientData.medical_condition)), document.getElementById("outputDiv"));
    };

    _this.state = {
      username: '',
      searchQuery: '',
      message: '',
      readOnly: false,
      imageURL: '',
      altImageText: '',
      patients: [{
        label: "No Patients Available",
        value: 1
      }],
      patient: '',
      patientData: []
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EntryForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.socket.on('patients', function (data) {
        _this2.setState({
          patientData: data.patientData
        });

        var patientList = [];
        data.patientData.map(function (x) {
          if (!isNaN(x.id)) {
            patientList.push({
              label: x.name,
              value: x.id
            });
          }
        });

        _this2.setState({
          patients: patientList
        }); //Display Patient Data if a Patient has been selected


        if (_this2.state.patient) {
          var record = _this2.state.patientData.find(function (x) {
            return x.id == _this2.state.patient.value;
          });

          _this2.displayPatient(record);
        }
      });
      document.body.style.backgroundImage = "url('')";
      this.getPatients();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.removeImaging();
      this.setState({
        patient: event
      });
      this.getPatientData(event.value);
    }
  }, {
    key: "render",
    //
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "patientList"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Welcome! Dr. ", this.props.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Please, select an available patient", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "patientSelect",
        theme: function theme(_theme) {
          return _objectSpread({}, _theme, {
            colors: _objectSpread({}, _theme.colors, {
              //one of these fixes accessibility 
              neutral1: 'black',
              neutral2: 'black',
              neutral3: 'black',
              neutral4: 'black',
              neutral5: 'black',
              neutral10: 'black',
              neutral20: 'black',
              neutral30: 'black',
              neutral40: 'black',
              neutral50: 'black',
              neutral60: 'black',
              neutral70: 'black',
              neutral80: 'black',
              neutral90: 'black',
              neutral100: 'black',
              neutral1a: 'black',
              neutral2a: 'black',
              neutral3a: 'black',
              neutral4a: 'black',
              neutral5a: 'black',
              neutral10a: 'black',
              neutral20a: 'black',
              neutral30a: 'black',
              neutral40a: 'black',
              neutral50a: 'black',
              neutral60a: 'black',
              neutral70a: 'black',
              neutral80a: 'black',
              neutral90a: 'black'
            })
          });
        },
        className: "padded blackText",
        options: this.state.patients,
        onChange: this.handleChange,
        value: this.state.patient
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Med3Controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
        patient: this.state.patient
      }));
    }
  }]);

  return EntryForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EntryForm);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW50cnlGb3JtLmpzIl0sIm5hbWVzIjpbIm1lc3NhZ2VEaXNwbGF5IiwiRW50cnlGb3JtIiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInNvY2tldCIsIm9mZiIsImNvbXBvbmVudFdpbGxNb3VudCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0UGF0aWVudHMiLCJlbWl0IiwiZ2V0UGF0aWVudERhdGEiLCJwYXRpZW50SW5kZXgiLCJwYXRpZW50IiwicmVtb3ZlSW1hZ2luZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5UGF0aWVudCIsInBhdGllbnREYXRhIiwiaWQiLCJuYW1lIiwic2V4IiwibWVkaWNhbF9jb25kaXRpb24iLCJzdGF0ZSIsInVzZXJuYW1lIiwic2VhcmNoUXVlcnkiLCJtZXNzYWdlIiwicmVhZE9ubHkiLCJpbWFnZVVSTCIsImFsdEltYWdlVGV4dCIsInBhdGllbnRzIiwibGFiZWwiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJvbiIsImRhdGEiLCJzZXRTdGF0ZSIsInBhdGllbnRMaXN0IiwibWFwIiwieCIsImlzTmFOIiwicHVzaCIsInJlY29yZCIsImZpbmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFsMSIsIm5ldXRyYWwyIiwibmV1dHJhbDMiLCJuZXV0cmFsNCIsIm5ldXRyYWw1IiwibmV1dHJhbDEwIiwibmV1dHJhbDIwIiwibmV1dHJhbDMwIiwibmV1dHJhbDQwIiwibmV1dHJhbDUwIiwibmV1dHJhbDYwIiwibmV1dHJhbDcwIiwibmV1dHJhbDgwIiwibmV1dHJhbDkwIiwibmV1dHJhbDEwMCIsIm5ldXRyYWwxYSIsIm5ldXRyYWwyYSIsIm5ldXRyYWwzYSIsIm5ldXRyYWw0YSIsIm5ldXRyYWw1YSIsIm5ldXRyYWwxMGEiLCJuZXV0cmFsMjBhIiwibmV1dHJhbDMwYSIsIm5ldXRyYWw0MGEiLCJuZXV0cmFsNTBhIiwibmV1dHJhbDYwYSIsIm5ldXRyYWw3MGEiLCJuZXV0cmFsODBhIiwibmV1dHJhbDkwYSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUcsRUFBckI7O0lBR01DLFM7Ozs7O0FBRUYscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixtRkFBTUEsS0FBTjs7QUFEZSxVQWlEbkJDLG9CQWpEbUIsR0FpREksWUFBTTtBQUN6QixZQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQXRCO0FBQ0gsS0FuRGtCOztBQUFBLFVBcURuQkMsa0JBckRtQixHQXFERSxZQUFNO0FBQ3ZCQyxjQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsZUFBcEIsR0FBb0MsSUFBcEM7QUFDSCxLQXZEa0I7O0FBQUEsVUE2RG5CQyxXQTdEbUIsR0E2REwsWUFBTTtBQUNoQixZQUFLVCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JRLElBQWxCLENBQXVCLEtBQXZCLEVBQThCLEVBQTlCO0FBQ0gsS0EvRGtCOztBQUFBLFVBaUVuQkMsY0FqRW1CLEdBaUVGLFVBQUNDLFlBQUQsRUFBa0I7QUFFL0IsWUFBS1osS0FBTCxDQUFXRSxNQUFYLENBQWtCUSxJQUFsQixDQUF1QixLQUF2QixFQUE4QjtBQUUxQkcsZUFBTyxFQUFFRDtBQUZpQixPQUE5QjtBQUlILEtBdkVrQjs7QUFBQSxVQTBFbkJFLGFBMUVtQixHQTBFSCxZQUFNO0FBRWxCQyxzREFBUSxDQUFDQyxNQUFULENBQ0k7QUFBSyxVQUFFLEVBQUM7QUFBUixRQURKLEVBR0lYLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixTQUF4QixDQUhKO0FB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QUUsT0E3Qk47QUE4Qk5DLHdCQUFVLEVBQUUsT0E5Qk47QUErQk5DLHdCQUFVLEVBQUU7QUEvQk47QUFGSDtBQUFBLFNBRFg7QUFxQ0ksaUJBQVMsRUFBQyxrQkFyQ2Q7QUFzQ0ksZUFBTyxFQUFHLEtBQUt2RCxLQUFMLENBQVdPLFFBdEN6QjtBQXVDSSxnQkFBUSxFQUFFLEtBQUtLLFlBdkNuQjtBQXdDSSxhQUFLLEVBQUUsS0FBS1osS0FBTCxDQUFXWDtBQXhDdEIsUUFGSixDQUZKLEVBK0NJLDJEQUFDLHVEQUFEO0FBQWdCLGVBQU8sRUFBRSxLQUFLVyxLQUFMLENBQVdYO0FBQXBDLFFBL0NKLENBREo7QUFtREg7Ozs7RUFwS21CbUUsNENBQUssQ0FBQ0MsUzs7QUF1S2ZsRix3RUFBZixFIiwiZmlsZSI6ImhvdC9ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeHNzIGZyb20gXCJ4c3NcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBNZWQzQ29udHJvbGxlciBmcm9tIFwiLi9NZWQzQ29udHJvbGxlclwiO1xyXG5cclxubGV0IG1lc3NhZ2VEaXNwbGF5ID0gXCJcIjtcclxuXHJcblxyXG5jbGFzcyBFbnRyeUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICAgICAgICAgICAgaW1hZ2VVUkw6ICcnLFxyXG4gICAgICAgICAgICBhbHRJbWFnZVRleHQ6ICcnLFxyXG4gICAgICAgICAgICBwYXRpZW50czogW3tsYWJlbDogXCJObyBQYXRpZW50cyBBdmFpbGFibGVcIiwgdmFsdWU6IDF9XSxcclxuICAgICAgICAgICAgcGF0aWVudDogJycsXHJcbiAgICAgICAgICAgIHBhdGllbnREYXRhOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdwYXRpZW50cycsIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aWVudERhdGE6IGRhdGEucGF0aWVudERhdGF9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXRpZW50TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGF0YS5wYXRpZW50RGF0YS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighaXNOYU4oeC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50TGlzdC5wdXNoKHtsYWJlbDogeC5uYW1lLCB2YWx1ZTogeC5pZH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aWVudHM6IHBhdGllbnRMaXN0fSk7IFxyXG5cclxuICAgICAgICAgICAgLy9EaXNwbGF5IFBhdGllbnQgRGF0YSBpZiBhIFBhdGllbnQgaGFzIGJlZW4gc2VsZWN0ZWRcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVjb3JkID0gdGhpcy5zdGF0ZS5wYXRpZW50RGF0YS5maW5kKHg9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHguaWQgPT0gdGhpcy5zdGF0ZS5wYXRpZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlQYXRpZW50KHJlY29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybCgnJylcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQYXRpZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9mZihcInBhdGllbnRzXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9bnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhdGllbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2dldCcsIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXRpZW50RGF0YSA9IChwYXRpZW50SW5kZXgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdnZXQnLCB7XHJcblxyXG4gICAgICAgICAgICBwYXRpZW50OiBwYXRpZW50SW5kZXhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJlbW92ZUltYWdpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiUmVuZGVyZWRIdG1sXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnaW5nXCIpXHJcbiAgICAgICAgKSBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUltYWdpbmcoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRpZW50OiBldmVudH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0UGF0aWVudERhdGEoZXZlbnQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQYXRpZW50ID0gKHBhdGllbnREYXRhKSA9PiB7XHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiUmVuZGVyZWRIdG1sXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGF0aWVudCBEYXRhOjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwYXRpZW50RGF0YVwiPklEOjwvbGFiZWw+IHtwYXRpZW50RGF0YS5pZH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicGF0aWVudERhdGFcIj5OYW1lOjwvbGFiZWw+e3BhdGllbnREYXRhLm5hbWV9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInBhdGllbnREYXRhXCI+U2V4OjwvbGFiZWw+e3BhdGllbnREYXRhLnNleH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwYXRpZW50RGF0YVwiPkNvbmRpdGlvbjo8L2xhYmVsPntwYXRpZW50RGF0YS5tZWRpY2FsX2NvbmRpdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0RGl2XCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhdGllbnRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+V2VsY29tZSEgRHIuIHt0aGlzLnByb3BzLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlLCBzZWxlY3QgYW4gYXZhaWxhYmxlIHBhdGllbnRcclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGlkPVwicGF0aWVudFNlbGVjdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17KHRoZW1lKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoZW1lLmNvbG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25lIG9mIHRoZXNlIGZpeGVzIGFjY2Vzc2liaWxpdHkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMjpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMzpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsNDpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsNTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMTA6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDIwOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWwzMDpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsNDA6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDUwOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw2MDpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsNzA6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDgwOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw5MDpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMTAwOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWwxYTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMmE6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDNhOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw0YTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsNWE6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDEwYTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsMjBhOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWwzMGE6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDQwYTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsNTBhOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw2MGE6XHQnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDcwYTpcdCdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXV0cmFsODBhOlx0J2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw5MGE6XHQnYmxhY2snICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZGRlZCBibGFja1RleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IHRoaXMuc3RhdGUucGF0aWVudHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhdGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNZWQzQ29udHJvbGxlciBwYXRpZW50PXt0aGlzLnN0YXRlLnBhdGllbnR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudHJ5Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9