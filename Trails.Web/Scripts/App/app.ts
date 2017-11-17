import { Trail } from './trail';
import { Storage } from './storage';

namespace Trails {
    export class App {
        constructor(private startScreenId: string, private mainScreenId: string, startButtonId: string, stopButtonId: string) {
            let startBtn = document.getElementById(startButtonId);
            startBtn.addEventListener('click', (e: Event) => this.StartHike());

            let stopBtn = document.getElementById(stopButtonId);
            stopBtn.addEventListener('click', (e: Event) => this.StopHike());

            this.Store = new Storage();
        }

        WatchId: number;
        CurrentTrail: Trail;
        Store: Storage;

        StartHike() {
            document.getElementById(this.startScreenId).style.display = 'none';
            document.getElementById(this.mainScreenId).style.display = 'block';

            this.CurrentTrail = this.Store.CreateTrail();
            this.WatchId = navigator.geolocation.watchPosition(this.PositionUpdated);
        }

        PositionUpdated(position: Position) {
            this.CurrentTrail.Positions.push(position);
        }

        StopHike() {
            document.getElementById(this.startScreenId).style.display = 'block';
            document.getElementById(this.mainScreenId).style.display = 'none';

            navigator.geolocation.clearWatch(this.WatchId);
        }

        //initMap() {
        //    var uluru = { lat: 58.0, lng: 18.0 };
        //    var map = new google.maps.Map(document.getElementById('map'), {
        //        zoom: 4,
        //        center: uluru
        //    });
        //    var marker = new google.maps.Marker({
        //        position: uluru,
        //        map: map
        //    });
        //}
}
}

new Trails.App('startScreen', 'mainScreen', 'startHikeButton', 'stopHikeButton');