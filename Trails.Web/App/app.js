"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trail_1 = require("./trail");
var storage_1 = require("./storage");
var Trails;
(function (Trails) {
    var App = (function () {
        function App(startScreenId, mainScreenId, startButtonId, stopButtonId) {
            var _this = this;
            this.startScreenId = startScreenId;
            this.mainScreenId = mainScreenId;
            var startBtn = document.getElementById(startButtonId);
            startBtn.addEventListener('click', function (e) { return _this.StartHike(); });
            var stopBtn = document.getElementById(stopButtonId);
            stopBtn.addEventListener('click', function (e) { return _this.StopHike(); });
            this.Store = new storage_1.Storage();
        }
        App.prototype.StartHike = function () {
            var _this = this;
            document.getElementById(this.startScreenId).style.display = 'none';
            document.getElementById(this.mainScreenId).style.display = 'block';
            this.CurrentTrail = this.Store.CreateTrail();
            this.WatchId = navigator.geolocation.watchPosition(function (position) { return _this.PositionUpdated(position); }, function (error) { return _this.PositionError(error); });
        };
        App.prototype.PositionUpdated = function (position) {
            if (!this.CurrentTrail) {
                console.error('No current trail!?');
                return;
            }
            var point = new trail_1.Point();
            point.Latitude = position.coords.latitude;
            point.Longitude = position.coords.longitude;
            point.Altitude = position.coords.altitude;
            point.TimeStamp = new Date();
            this.CurrentTrail.Points.push(point);
            this.Store.Store(this.CurrentTrail);
        };
        App.prototype.PositionError = function (error) {
            console.error(error.message);
        };
        App.prototype.StopHike = function () {
            this.Store.Store(this.CurrentTrail);
            document.getElementById(this.startScreenId).style.display = 'block';
            document.getElementById(this.mainScreenId).style.display = 'none';
            navigator.geolocation.clearWatch(this.WatchId);
        };
        return App;
    }());
    Trails.App = App;
})(Trails || (Trails = {}));
new Trails.App('startScreen', 'mainScreen', 'startHikeButton', 'stopHikeButton');
//# sourceMappingURL=app.js.map