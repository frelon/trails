"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            document.getElementById(this.startScreenId).style.display = 'none';
            document.getElementById(this.mainScreenId).style.display = 'block';
            this.CurrentTrail = this.Store.CreateTrail();
            this.WatchId = navigator.geolocation.watchPosition(this.PositionUpdated);
        };
        App.prototype.PositionUpdated = function (position) {
            this.CurrentTrail.Positions.push(position);
        };
        App.prototype.StopHike = function () {
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