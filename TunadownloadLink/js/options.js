webpackJsonp([ 1 ], {
    30: function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function setBlockedDomains(domains) {
            _chrome2.default.storage.sync.set({
                blockedDomains: domains
            });
        }
        function render(storage) {
            _reactDom2.default.render(_jsx(_Options2.default, {
                blockedDomains: storage.blockedDomains,
                setBlockedDomains: setBlockedDomains
            }), document.getElementById("Options"));
        }
        var _jsx = function() {
            var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
            return function(type, props, key, children) {
                var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3;
                if (props || 0 === childrenLength || (props = {}), props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]); else props || (props = defaultProps || {});
                if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
                    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3];
                    props.children = childArray;
                }
                return {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: type,
                    key: void 0 === key ? null : "" + key,
                    ref: null,
                    props: props,
                    _owner: null
                };
            };
        }(), _chrome = __webpack_require__(1), _chrome2 = _interopRequireDefault(_chrome), _react = __webpack_require__(0), _reactDom = (_interopRequireDefault(_react), 
        __webpack_require__(3)), _reactDom2 = _interopRequireDefault(_reactDom), _Options = __webpack_require__(31), _Options2 = _interopRequireDefault(_Options), stored = {};
        _chrome2.default.storage.onChanged.addListener(function(changes, areaName) {
            for (var key in changes) stored[key] = changes[key].newValue;
            render(stored);
        }), _chrome2.default.storage.sync.get(null, function(items) {
            stored = items, null == stored.blockedDomains && (stored.blockedDomains = []), render(stored);
        });
    },
    31: function(module, exports, __webpack_require__) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _jsx = function() {
            var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
            return function(type, props, key, children) {
                var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3;
                if (props || 0 === childrenLength || (props = {}), props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]); else props || (props = defaultProps || {});
                if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
                    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3];
                    props.children = childArray;
                }
                return {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: type,
                    key: void 0 === key ? null : "" + key,
                    ref: null,
                    props: props,
                    _owner: null
                };
            };
        }(), _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(0), _react2 = function(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }(_react);
        __webpack_require__(32);
        var _ref2 = _jsx("h1", {}, void 0, "Tunadownload TopTop"), _ref3 = _jsx("h2", {}, void 0, "Blocked Domains"), _ref4 = _jsx("p", {}, void 0, "Links from blocked domains will be hidden by default."), _ref5 = _jsx("thead", {}, void 0, _jsx("tr", {}, void 0, _jsx("th", {}, void 0, "domain"), _jsx("th", {}))), Options = function(_React$Component) {
            function Options() {
                var _ref, _temp, _this, _ret;
                _classCallCheck(this, Options);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                return _temp = _this = _possibleConstructorReturn(this, (_ref = Options.__proto__ || Object.getPrototypeOf(Options)).call.apply(_ref, [ this ].concat(args))), 
                _this.state = {
                    newBlockedDomain: ""
                }, _this.blockDomain = function(event) {
                    event.preventDefault();
                    var val = _this.state.newBlockedDomain.toLowerCase().trim();
                    if ("" !== val) {
                        var blockedDomains = _this.props.blockedDomains.slice(0);
                        blockedDomains.push(val), _this.setState({
                            newBlockedDomain: ""
                        }), _this.props.setBlockedDomains(blockedDomains);
                    }
                }, _this.handleNewBlockDomainChange = function(event) {
                    _this.setState({
                        newBlockedDomain: event.target.value
                    });
                }, _this.removeDomain = function(index) {
                    var blockedDomains = _this.props.blockedDomains.slice(0);
                    blockedDomains.splice(index, 1), _this.props.setBlockedDomains(blockedDomains);
                }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
            }
            return _inherits(Options, _React$Component), _createClass(Options, [ {
                key: "render",
                value: function() {
                    var _this2 = this, blockedDomains = this.props.blockedDomains.map(function(domain, index) {
                        return _jsx("tr", {}, domain, _jsx("td", {
                            className: "txtM"
                        }, void 0, domain), _jsx("td", {
                            className: "BadDomainsActionCol"
                        }, void 0, _jsx("button", {
                            className: "btn btn-block btn-danger",
                            onClick: _this2.removeDomain.bind(_this2, index)
                        }, void 0, "remove")));
                    }, this);
                    return _jsx("div", {
                        className: "container-fluid"
                    }, void 0, _ref2, _jsx("div", {
                        className: "row"
                    }, void 0, _jsx("div", {
                        className: "col-sm-6"
                    }, void 0, _ref3, _ref4, _jsx("table", {
                        className: "table table-striped"
                    }, void 0, _ref5, _jsx("tbody", {}, void 0, blockedDomains, _jsx("tr", {}, void 0, _jsx("td", {}, void 0, _jsx("form", {
                        onSubmit: this.blockDomain
                    }, void 0, _jsx("input", {
                        type: "text",
                        className: "form-control",
                        value: this.state.newBlockedDomain,
                        onChange: this.handleNewBlockDomainChange
                    }))), _jsx("td", {
                        className: "BadDomainsActionCol"
                    }, void 0, _jsx("button", {
                        className: "btn btn-block btn-primary",
                        onClick: this.blockDomain
                    }, void 0, "add"))))))));
                }
            } ]), Options;
        }(_react2.default.Component);
        exports.default = Options;
    },
    32: function(module, exports, __webpack_require__) {
        var content = __webpack_require__(33);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
        var options = {
            hmr: !0
        };
        options.transform = void 0;
        __webpack_require__(7)(content, options);
        content.locals && (module.exports = content.locals);
    },
    33: function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(6)(void 0), exports.push([ module.i, ".BadDomainsActionCol {\n  width: 5em;\n}\n", "" ]);
    }
}, [ 30 ]);