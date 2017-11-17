import { Trail } from './trail'

export class Storage {

    CreateTrail(): Trail {
        let trail = new Trail(localStorage.length + 1);
        this.Store(trail);
        return trail;
    }

    GetAll() {
        let trails = new Array<Trail>();
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);

            if (key.indexOf('trail:') === 0) {
                let value = localStorage.getItem(key);
                console.log(key, value);
            }
        }
        return trails;
    }

    Store(trail: Trail) {
        localStorage.setItem('trail:' + trail.Id, JSON.stringify(trail));
    }
}