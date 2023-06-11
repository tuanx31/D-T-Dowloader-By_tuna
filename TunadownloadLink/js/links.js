webpackJsonp([ 0 ], [ , , , , , , , , , , function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function domainPattern(domains) {
        if (!domains || domains.length <= 0) return new RegExp("(?!x)x");
        for (var i = 0; i < domains.length; i++) domains[i] = domains[i].replace(/\./g, "\\.");
        var s = "^(?:[\\w-]+\\.)*(?:" + domains.join("|") + ")+$";
        return new RegExp(s, "i");
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
    __webpack_require__(3)), _reactDom2 = _interopRequireDefault(_reactDom), _LinkList = __webpack_require__(21), _LinkList2 = _interopRequireDefault(_LinkList), target = document.getElementById("LinkList"), _ref = _jsx(_LinkList2.default, {
        expired: !0
    });
    _chrome2.default.tabs.query({
        active: !0,
        windowId: _chrome2.default.windows.WINDOW_ID_CURRENT
    }, function(tabs) {
        _chrome2.default.storage.sync.get(null, function(options) {
            _chrome2.default.runtime.getBackgroundPage(function(page) {
                var data = page.tabData[tabs[0].id];
                data ? (document.title = "Tunadownload link " + data.source, _reactDom2.default.render(_jsx(_LinkList2.default, {
                    blockPattern: domainPattern(options.blockedDomains),
                    expired: !1,
                    links: data.links,
                    source: data.source
                }), target)) : _reactDom2.default.render(_ref, target);
            });
        });
    });
}, , , , , , , , , , , function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
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
    function filterLinks(links, s) {
        var lowerS = s.toLowerCase();
        return links.reduce(function(memo, link) {
            return link.href.toLowerCase().indexOf(lowerS) >= 0 && memo.push(link), memo;
        }, []);
    }
    function findBlockedLinks(links, pattern) {
        return links.reduce(function(acc, link) {
            return pattern && pattern.exec(link.hostname) ? acc.push(!0) : acc.push(!1), acc;
        }, []);
    }
    function findDuplicates(links) {
        var uniq = {};
        return links.reduce(function(memo, link) {
            return uniq[link.href] ? memo.push(!0) : (memo.push(!1), uniq[link.href] = !0), 
            memo;
        }, []);
    }
    function groupByDomain(links) {
        var mapped = links.map(function(link, i) {
            return {
                index: i,
                reverseHostname: link.hostname.split(".").reverse().join(".")
            };
        });
        return mapped.sort(function(a, b) {
            return a.reverseHostname < b.reverseHostname ? -1 : a.reverseHostname > b.reverseHostname ? 1 : a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
        }), mapped.map(function(v) {
            return links[v.index];
        });
    }
    function hideSameHost(links, sourceUrl) {
        if (!sourceUrl) return links;
        if (!sourceUrl.startsWith("http://") && !sourceUrl.startsWith("https://")) return links;
        var parser = document.createElement("a");
        return parser.href = sourceUrl, parser.hostname ? links.filter(function(link) {
            return link.hostname !== parser.hostname;
        }) : links;
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
    }(), _react = __webpack_require__(0), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(22), _classnames2 = _interopRequireDefault(_classnames), _lodash = __webpack_require__(23), _lodash2 = _interopRequireDefault(_lodash), _LinkListEmpty = __webpack_require__(25), _LinkListEmpty2 = _interopRequireDefault(_LinkListEmpty), _LinkListExpired = __webpack_require__(26), _LinkListExpired2 = _interopRequireDefault(_LinkListExpired);
    __webpack_require__(27);
    var _ref2 = _jsx(_LinkListExpired2.default, {}), LinkList = function(_React$Component) {
        function LinkList() {
            var _ref, _temp, _this, _ret;
            _classCallCheck(this, LinkList);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return _temp = _this = _possibleConstructorReturn(this, (_ref = LinkList.__proto__ || Object.getPrototypeOf(LinkList)).call.apply(_ref, [ this ].concat(args))), 
            _this.state = {
                filter: "",
                groupByDomain: !1,
                hideSameHost: !1,
                nextFilter: "",
                showDuplicates: !1,
                showBlockedDomains: !1
            }, _this.applyFilter = function() {
                _this.setState({
                    filter: _this.state.nextFilter
                });
            }, _this.copyLinks = function(event) {
                for (var selection = window.getSelection(), prevRange = selection.rangeCount ? selection.getRangeAt(0).cloneRange() : null, tmp = document.createElement("div"), links = _this.linkList.querySelectorAll("a"), i = 0; i < links.length; i++) {
                    var clone = links[i].cloneNode(!0);
                    delete clone.dataset.reactid, tmp.appendChild(clone), tmp.appendChild(document.createElement("br"));
                }
                document.body.appendChild(tmp);
                var copyFrom = document.createRange();
                copyFrom.selectNodeContents(tmp), selection.removeAllRanges(), selection.addRange(copyFrom), 
                document.execCommand("copy"), document.body.removeChild(tmp), selection.removeAllRanges(), 
                prevRange && selection.addRange(prevRange);
            }, _this.filterChanged = function(event) {
                _this.setState({
                    nextFilter: event.target.value
                }, _this.applyFilter);
            }, _this.toggleBlockedLinks = function() {
                _this.setState({
                    showBlockedDomains: !_this.state.showBlockedDomains
                });
            }, _this.toggleDedup = function() {
                _this.setState({
                    showDuplicates: !_this.state.showDuplicates
                });
            }, _this.toggleGroupByDomain = function() {
                _this.setState({
                    groupByDomain: !_this.state.groupByDomain
                });
            }, _this.toggleHideSameHost = function() {
                _this.setState({
                    hideSameHost: !_this.state.hideSameHost
                });
            }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
        }
        return _inherits(LinkList, _React$Component), _createClass(LinkList, [ {
            key: "componentWillMount",
            value: function() {
                this.applyFilter = (0, _lodash2.default)(this.applyFilter, 100, {
                    trailing: !0
                });
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var _this2 = this;
                window.document.addEventListener("copy", function(event) {
                    var selection = window.getSelection();
                    "None" !== selection.type && "Caret" !== selection.type || _this2.copyLinks();
                });
            }
        }, {
            key: "render",
            value: function() {
                var _this3 = this;
                if (this.props.expired) return _ref2;
                var links = this.props.links.slice(0);
                if (0 === links.length) return _jsx(_LinkListEmpty2.default, {
                    source: this.props.source
                });
                this.state.hideSameHost && (links = hideSameHost(links, this.props.source)), this.state.groupByDomain && (links = groupByDomain(links)), 
                this.state.filter && (links = filterLinks(links, this.state.filter));
                var blocked = findBlockedLinks(links, this.props.blockPattern), duplicates = findDuplicates(links), items = links.reduce(function(memo, link, index) {
                    if (!_this3.state.showDuplicates && duplicates[index]) return memo;
                    if (!_this3.state.showBlockedDomains && blocked[index]) return memo;
                    var itemClassName = (0, _classnames2.default)("LinkListItem", {
                        "LinkListItem--blocked": blocked[index],
                        "LinkListItem--duplicate": duplicates[index]
                    });
                    return memo.push(_jsx("li", {
                        className: itemClassName
                    }, index, _jsx("a", {
                        href: link.href,
                        target: "_blank"
                    }, void 0, link.href))), memo;
                }, []);
                return _jsx("div", {
                    className: "container-fluid"
                }, void 0, _jsx("h1", {
                    className: "LinkPageHeader"
                }, void 0, this.props.source), _jsx("div", {
                    className: "clearfix"
                }, void 0, _jsx("div", {
                    className: "form-inline LinkPageOptionsForm"
                }, void 0, _jsx("div", {
                    className: "form-group"
                }, void 0, _jsx("label",
                
                
                //{
                //    className: "checkbox-inline"
                //}, 
           //     void 0, _jsx("input", {
                   // type: "checkbox",
                //    checked: this.state.showDuplicates,
                //    onChange: this.toggleDedup
                //}), " "
           //     )),
                
              //  _jsx("div", {
               //     className: "form-group"
              //  }, void 0, _jsx("label", {
               //     className: "checkbox-inline"
              //  },
                
              //  void 0, _jsx("input", {
               //     type: "checkbox",
               //     checked: this.state.showBlockedDomains,
               //     onChange: this.toggleBlockedLinks
             //   }), " Hiển thị link bị chặn")), _jsx("div", {
              //      className: "form-group"
              //  }, void 0, _jsx("label", {
              //      className: "checkbox-inline"
             //   }, 
                
                
             //   void 0, _jsx("input", {
               //     type: "checkbox",
   ///                 checked: this.state.groupByDomain,
      //              onChange: this.toggleGroupByDomain
        //        }), " Nhóm theo domain")), _jsx("div", {
          //          className: "form-group"
 //               }, void 0, _jsx("label", {
            //        className: "checkbox-inline"
   //             }, 
                
                
  //              void 0, _jsx("input", {
    //                type: "checkbox",
      ///              checked: this.state.hideSameHost,
         //           onChange: this.toggleHideSameHost
           //     }), " Ẩn cùng hostname"
                
                )),
                
                
                _jsx("div",
                
                
                {
                    className: "form-group"
                }, void 0, _jsx("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Lọc từ khóa",
                    autoFocus: !0,
                    value: this.state.nextFilter,
                    onChange: this.filterChanged
                })), _jsx("div", {
                    className: "form-group LinkPageStatus"
                }, void 0, _jsx("button", {
                    className: "btn btn-default",
                    disabled: 0 === items.length,
                    onClick: this.copyLinks
                }, void 0, "Copy ", items.length, " / ", this.props.links.length)))), _react2.default.createElement("ul", {
                    ref: function(n) {
                        return _this3.linkList = n;
                    },
                    className: "LinkList"
                }, items));
            }
        } ]), LinkList;
    }(_react2.default.Component);
    exports.default = LinkList;
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !function() {
        "use strict";
        function classNames() {
            for (var classes = [], i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (arg) {
                    var argType = typeof arg;
                    if ("string" === argType || "number" === argType) classes.push(arg); else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg)); else if ("object" === argType) for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
                }
            }
            return classes.join(" ");
        }
        var hasOwn = {}.hasOwnProperty;
        void 0 !== module && module.exports ? module.exports = classNames : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return classNames;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }();
}, function(module, exports, __webpack_require__) {
    (function(global) {
        function debounce(func, wait, options) {
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                return lastArgs = lastThis = void 0, lastInvokeTime = time, result = func.apply(thisArg, args);
            }
            function leadingEdge(time) {
                return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                return timerId = void 0, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = void 0, 
                result);
            }
            function cancel() {
                void 0 !== timerId && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = void 0;
            }
            function flush() {
                return void 0 === timerId ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
                    if (void 0 === timerId) return leadingEdge(lastCallTime);
                    if (maxing) return timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
                }
                return void 0 === timerId && (timerId = setTimeout(timerExpired, wait)), result;
            }
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            return wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, 
            maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, 
            trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = cancel, 
            debounced.flush = flush, debounced;
        }
        function isObject(value) {
            var type = typeof value;
            return !!value && ("object" == type || "function" == type);
        }
        function isObjectLike(value) {
            return !!value && "object" == typeof value;
        }
        function isSymbol(value) {
            return "symbol" == typeof value || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        function toNumber(value) {
            if ("number" == typeof value) return value;
            if (isSymbol(value)) return NAN;
            if (isObject(value)) {
                var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other;
            }
            if ("string" != typeof value) return 0 === value ? value : +value;
            value = value.replace(reTrim, "");
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        var FUNC_ERROR_TEXT = "Expected a function", NAN = NaN, symbolTag = "[object Symbol]", reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), objectProto = Object.prototype, objectToString = objectProto.toString, nativeMax = Math.max, nativeMin = Math.min, now = function() {
            return root.Date.now();
        };
        module.exports = debounce;
    }).call(exports, __webpack_require__(24));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
}, function(module, exports, __webpack_require__) {
    "use strict";
    function LinkListEmpty(props) {
        return _jsx("div", {
            className: "container-fluid"
        }, void 0, _jsx("h1", {
            className: "LinkPageHeader"
        }, void 0, props.source), _ref);
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
    }();
    exports.default = LinkListEmpty;
    var _react = __webpack_require__(0), _ref = (function(obj) {
        obj && obj.__esModule;
    }(_react), _jsx("p", {}, void 0, "Không tìm thấy link."));
}, function(module, exports, __webpack_require__) {
    "use strict";
    function LinkListExpired(props) {
        return _ref;
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
    }();
    exports.default = LinkListExpired;
    var _react = __webpack_require__(0), _ref = (function(obj) {
        obj && obj.__esModule;
    }(_react), _jsx("div", {
        className: "container-fluid"
    }, void 0, _jsx("h1", {
        className: "LinkPageHeader"
    }, void 0, "Expired"), _jsx("p", {}, void 0, "Link information has expired and is no longer available. Please close this tab and try again.")));
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(28);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
    var options = {
        hmr: !0
    };
    options.transform = void 0;
    __webpack_require__(7)(content, options);
    content.locals && (module.exports = content.locals);
}, function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(6)(void 0), exports.push([ module.i, ".LinkPageHeader {\n  white-space: nowrap;\n  line-height: normal;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.LinkPageStatus {\n  float: right;\n}\n\n.LinkList {\n  list-style: none;\n  padding-left: 0;\n}\n\n.LinkListItem {\n  border-bottom: 1px solid #ddd;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  word-wrap: break-word;\n}\n\n.LinkListItem:nth-child(odd) {\n  background-color: #F5F5F5;\n}\n\n.LinkListItem--blocked > a {\n  color: #a94442;\n}\n\n.LinkListItem--duplicate > a {\n  color: #aaa;\n}\n\n.LinkListItem--blocked.LinkListItem--duplicate > a {\n  color: #ebccd1;\n}\n\n.LinkPageOptionsForm {\n  margin-bottom: 1em;\n}\n\n.LinkPageOptionsForm > .form-group + .form-group {\n  margin-left: 1em;\n}\n@media (max-width: 767px) {\n  .LinkPageOptionsForm {\n    margin-bottom: 0em;\n  }\n  .LinkPageOptionsForm > .form-group + .form-group {\n    margin-left: 0;\n  }\n}\n\n.LinkPageOptionsForm .checkbox-inline {\n  user-select: none;\n}", "" ]);
} ], [ 10 ]);