import { Trail, Point } from './trail';
import { Storage } from './storage';

namespace Trails {
    export class HistoryApp {
        constructor(tableId: string) {
            let table = document.getElementById(tableId);

            const storage = new Storage();
            const trails = storage.GetAll();

            this.ShowTrails(table, trails);
        }

        ShowTrails(table: Element, trails: Trail[]) {
            for (let trail of trails) {
                let element = '';

                element += "<td>" + trail.Id + "</td>";

                element += "<td>" + this.GetFirstLatLng(trail) + "</td>";
                element += "<td>" + this.GetLastLatLng(trail) + "</td>";

                element += "<td>" + trail.Points.length + "</td>";
                
                let tr = document.createElement('tr');
                tr.innerHTML = element;
                table.appendChild(tr);

                console.log('added child!');
            }
        }

        GetFirstLatLng(trail: Trail): string {
            if (trail.Points.length < 1) {
                return "n/a";
            }
            console.log('GetFirstLatLng');
            console.log(trail);

            const pos = (trail.Points[0] || new Point());
            return pos.Latitude + ", " + pos.Longitude;
        }

        GetLastLatLng(trail: Trail) {
            if (trail.Points.length < 1) {
                return "n/a";
            }

            const index = trail.Points.length - 1;
            const pos = trail.Points[index];
            return pos.Latitude + ", " + pos.Longitude;
        }
    }
}

new Trails.HistoryApp('historyTable');