"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trail_1 = require("./trail");
var storage_1 = require("./storage");
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