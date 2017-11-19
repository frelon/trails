import { Trail } from './trail'

export class Storage {

    CreateTrail(): Trail {
        let id = 1;
        if (localStorage.length > 0) {
            let ids = this.GetAll().map(x => x.Id);
            id = Math.max.apply(null, ids) + 1;
        }

        let trail = new Trail(id);
        this.Store(trail);
        return trail;
    }

    GetAll() {
        let trails = new Array<Trail>();
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);

            if (key.indexOf('trail:') === 0) {
                let value = this.Deserialize(localStorage.getItem(key));
                trails.push(value);
            }
        }
        return trails;
    }

    Deserialize(json: string): Trail {
        console.log('deserialize');
        console.log(json);
        return JSON.parse(json);
    }

    Store(trail: Trail) {
        let json = JSON.stringify(trail);
        console.log('serialize');
        console.log(json);
        localStorage.setItem('trail:' + trail.Id, json);
    }
}