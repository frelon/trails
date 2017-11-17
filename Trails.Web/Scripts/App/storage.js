"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trail_1 = require("./trail");
var Storage = (function () {
    function Storage() {
    }
    Storage.prototype.CreateTrail = function () {
        var trail = new trail_1.Trail(localStorage.length + 1);
        this.Store(trail);
        return trail;
    };
    Storage.prototype.GetAll = function () {
        var trails = new Array();
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf('trail:') === 0) {
                var value = localStorage.getItem(key);
                console.log(key, value);
            }
        }
        return trails;
    };
    Storage.prototype.Store = function (trail) {
        localStorage.setItem('trail:' + trail.Id, JSON.stringify(trail));
    };
    return Storage;
}());
exports.Storage = Storage;
//# sourceMappingURL=storage.js.map