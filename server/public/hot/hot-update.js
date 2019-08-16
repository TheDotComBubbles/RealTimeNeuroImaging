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

    _this.componentWillUnmount = function () {};

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
      this.props.socket.on("broadcast", function (response) {
        _this2.displayImage(response);
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Welcome! Dr. ", this.props.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please, select an available patient"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "patientSelect",
        className: "padded",
        options: this.state.patients,
        onChange: this.handleChange,
        value: this.state.patient
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Med3Controller__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return EntryForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EntryForm);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW50cnlGb3JtLmpzIl0sIm5hbWVzIjpbIm1lc3NhZ2VEaXNwbGF5IiwiRW50cnlGb3JtIiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNvbXBvbmVudFdpbGxNb3VudCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0UGF0aWVudHMiLCJzb2NrZXQiLCJlbWl0IiwiZ2V0UGF0aWVudERhdGEiLCJwYXRpZW50SW5kZXgiLCJwYXRpZW50IiwicmVtb3ZlSW1hZ2luZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5UGF0aWVudCIsInBhdGllbnREYXRhIiwiaWQiLCJuYW1lIiwic2V4IiwibWVkaWNhbF9jb25kaXRpb24iLCJzdGF0ZSIsInVzZXJuYW1lIiwic2VhcmNoUXVlcnkiLCJtZXNzYWdlIiwicmVhZE9ubHkiLCJpbWFnZVVSTCIsImFsdEltYWdlVGV4dCIsInBhdGllbnRzIiwibGFiZWwiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJvbiIsImRhdGEiLCJzZXRTdGF0ZSIsInBhdGllbnRMaXN0IiwibWFwIiwieCIsImlzTmFOIiwicHVzaCIsInJlY29yZCIsImZpbmQiLCJyZXNwb25zZSIsImRpc3BsYXlJbWFnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUcsRUFBckI7O0lBR01DLFM7Ozs7O0FBRUYscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixtRkFBTUEsS0FBTjs7QUFEZSxVQW9EbkJDLG9CQXBEbUIsR0FvREksWUFBTSxDQUM1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QUFLSyxZQUhuQjtBQUlJLGFBQUssRUFBRSxLQUFLWixLQUFMLENBQVdYO0FBSnRCLFFBSEosRUFTSSwyREFBQyx1REFBRCxPQVRKLENBREo7QUFhSDs7OztFQWhJbUJzQyw0Q0FBSyxDQUFDQyxTOztBQW1JZnBELHdFQUFmLEUiLCJmaWxlIjoiaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB4c3MgZnJvbSBcInhzc1wiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IE1lZDNDb250cm9sbGVyIGZyb20gXCIuL01lZDNDb250cm9sbGVyXCI7XHJcblxyXG5sZXQgbWVzc2FnZURpc3BsYXkgPSBcIlwiO1xyXG5cclxuXHJcbmNsYXNzIEVudHJ5Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbWFnZVVSTDogJycsXHJcbiAgICAgICAgICAgIGFsdEltYWdlVGV4dDogJycsXHJcbiAgICAgICAgICAgIHBhdGllbnRzOiBbe2xhYmVsOiBcIk5vIFBhdGllbnRzIEF2YWlsYWJsZVwiLCB2YWx1ZTogMX1dLFxyXG4gICAgICAgICAgICBwYXRpZW50OiAnJyxcclxuICAgICAgICAgICAgcGF0aWVudERhdGE6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ3BhdGllbnRzJywgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRpZW50RGF0YTogZGF0YS5wYXRpZW50RGF0YX0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhdGllbnRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhLnBhdGllbnREYXRhLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFpc05hTih4LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnRMaXN0LnB1c2goe2xhYmVsOiB4Lm5hbWUsIHZhbHVlOiB4LmlkfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRpZW50czogcGF0aWVudExpc3R9KTsgXHJcblxyXG4gICAgICAgICAgICAvL0Rpc3BsYXkgUGF0aWVudCBEYXRhIGlmIGEgUGF0aWVudCBoYXMgYmVlbiBzZWxlY3RlZFxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnBhdGllbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSB0aGlzLnN0YXRlLnBhdGllbnREYXRhLmZpbmQoeD0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geC5pZCA9PSB0aGlzLnN0YXRlLnBhdGllbnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVBhdGllbnQocmVjb3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbihcImJyb2FkY2FzdFwiLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZT1cInVybCgnJylcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQYXRpZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9bnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhdGllbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2dldCcsIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXRpZW50RGF0YSA9IChwYXRpZW50SW5kZXgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdnZXQnLCB7XHJcblxyXG4gICAgICAgICAgICBwYXRpZW50OiBwYXRpZW50SW5kZXhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJlbW92ZUltYWdpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiUmVuZGVyZWRIdG1sXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnaW5nXCIpXHJcbiAgICAgICAgKSBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUltYWdpbmcoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXRpZW50OiBldmVudH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0UGF0aWVudERhdGEoZXZlbnQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQYXRpZW50ID0gKHBhdGllbnREYXRhKSA9PiB7XHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiUmVuZGVyZWRIdG1sXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+UGF0aWVudCBEYXRhOjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwYXRpZW50RGF0YVwiPklEOjwvbGFiZWw+IHtwYXRpZW50RGF0YS5pZH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicGF0aWVudERhdGFcIj5OYW1lOjwvbGFiZWw+e3BhdGllbnREYXRhLm5hbWV9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInBhdGllbnREYXRhXCI+U2V4OjwvbGFiZWw+e3BhdGllbnREYXRhLnNleH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwYXRpZW50RGF0YVwiPkNvbmRpdGlvbjo8L2xhYmVsPntwYXRpZW50RGF0YS5tZWRpY2FsX2NvbmRpdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0RGl2XCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInBhdGllbnRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+V2VsY29tZSEgRHIuIHt0aGlzLnByb3BzLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5QbGVhc2UsIHNlbGVjdCBhbiBhdmFpbGFibGUgcGF0aWVudDwvcD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgaWQ9XCJwYXRpZW50U2VsZWN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFkZGVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IHRoaXMuc3RhdGUucGF0aWVudHN9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXRpZW50fVxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICA8TWVkM0NvbnRyb2xsZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudHJ5Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9