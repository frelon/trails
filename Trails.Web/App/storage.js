"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trail_1 = require("./trail");
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