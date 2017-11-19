/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Trail = (function () {
    function Trail(Id) {
        this.Id = Id;
        this.Points = new Array();
    }
    return Trail;
}());
exports.Trail = Trail;
var Point = (function () {
    function Point() {
    }
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=trail.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var trail_1 = __webpack_require__(0);
var storage_1 = __webpack_require__(2);
var Trails;
(function (Trails) {
    var HistoryApp = (function () {
        function HistoryApp(tableId) {
            var table = document.getElementById(tableId);
            var storage = new storage_1.Storage();
            var trails = storage.GetAll();
            this.ShowTrails(table, trails);
        }
        HistoryApp.prototype.ShowTrails = function (table, trails) {
            for (var _i = 0, trails_1 = trails; _i < trails_1.length; _i++) {
                var trail = trails_1[_i];
                var element = '';
                element += "<td>" + trail.Id + "</td>";
                element += "<td>" + this.GetFirstLatLng(trail) + "</td>";
                element += "<td>" + this.GetLastLatLng(trail) + "</td>";
                element += "<td>" + trail.Points.length + "</td>";
                var tr = document.createElement('tr');
                tr.innerHTML = element;
                table.appendChild(tr);
                console.log('added child!');
            }
        };
        HistoryApp.prototype.GetFirstLatLng = function (trail) {
            if (trail.Points.length < 1) {
                return "n/a";
            }
            console.log('GetFirstLatLng');
            console.log(trail);
            var pos = (trail.Points[0] || new trail_1.Point());
            return pos.Latitude + ", " + pos.Longitude;
        };
        HistoryApp.prototype.GetLastLatLng = function (trail) {
            if (trail.Points.length < 1) {
                return "n/a";
            }
            var index = trail.Points.length - 1;
            var pos = trail.Points[index];
            return pos.Latitude + ", " + pos.Longitude;
        };
        return HistoryApp;
    }());
    Trails.HistoryApp = HistoryApp;
})(Trails || (Trails = {}));
new Trails.HistoryApp('historyTable');
//# sourceMappingURL=history-app.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var trail_1 = __webpack_require__(0);
var Storage = (function () {
    function Storage() {
    }
    Storage.prototype.CreateTrail = function () {
        var id = 1;
        if (localStorage.length > 0) {
            var ids = this.GetAll().map(function (x) { return x.Id; });
            id = Math.max.apply(null, ids) + 1;
        }
        var trail = new trail_1.Trail(id);
        this.Store(trail);
        return trail;
    };
    Storage.prototype.GetAll = function () {
        var trails = new Array();
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf('trail:') === 0) {
                var value = this.Deserialize(localStorage.getItem(key));
                trails.push(value);
            }
        }
        return trails;
    };
    Storage.prototype.Deserialize = function (json) {
        console.log('deserialize');
        console.log(json);
        return JSON.parse(json);
    };
    Storage.prototype.Store = function (trail) {
        var json = JSON.stringify(trail);
        console.log('serialize');
        console.log(json);
        localStorage.setItem('trail:' + trail.Id, json);
    };
    return Storage;
}());
exports.Storage = Storage;
//# sourceMappingURL=storage.js.map

/***/ })
/******/ ]);