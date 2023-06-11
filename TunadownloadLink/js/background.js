!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 8);
}({
    1: function(module, exports) {
        module.exports = chrome;
    },
    8: function(module, exports, __webpack_require__) {
        "use strict";
        function warnLastError() {
            _chrome2.default.runtime.lastError && console.warn(_chrome2.default.runtime.lastError);
        }
        var _chrome = __webpack_require__(1), _chrome2 = function(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }(_chrome), DEFAULT_SETTINGS = {
            blockedDomains: [ "bad.example.com" ]
        }, tabData = {};
        window.tabData = tabData, _chrome2.default.runtime.onInstalled.addListener(function() {
            _chrome2.default.storage.sync.get(DEFAULT_SETTINGS, function(options) {
                _chrome2.default.storage.sync.set(options);
            }), _chrome2.default.contextMenus.create({
                id: "Link Grabber",
                title: "Tuna download TopTop",
                contexts: [ "page" ],
                documentUrlPatterns: [ "http://*/*", "https://*/*", "file://*/*" ]
            }, warnLastError);
        }), _chrome2.default.browserAction.onClicked.addListener(function(tab) {
            _chrome2.default.tabs.executeScript(tab.id, {
                file: "js/contentscript.js"
            });
        }), _chrome2.default.contextMenus.onClicked.addListener(function(info, tab) {
            _chrome2.default.tabs.executeScript(tab.id, {
                file: "js/contentscript.js"
            });
        }), _chrome2.default.tabs.onRemoved.addListener(function(tabId, removeInfo) {
            delete tabData[tabId];
        }), _chrome2.default.extension.onMessage.addListener(function(links, sender, sendResponse) {
            var tab = sender.tab;
            _chrome2.default.tabs.create({
                index: tab.index + 1,
                openerTabId: tab.id,
                url: _chrome2.default.extension.getURL("html/links.html")
            }, function(newTab) {
                tabData[newTab.id] = {
                    source: tab.url,
                    links: links
                };
            });
        });
    }
});