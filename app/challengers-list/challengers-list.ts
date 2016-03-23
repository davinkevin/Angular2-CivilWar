/**
 * Created by kdavin on 23/03/2016.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Challenger} from "../common/entity/challenger";

@Component({
    selector : 'challengers-list',
    template : `
        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3">
            <h3>{{ teamName }}</h3>
            <ul class="list-group">
              <li (click)="setKo(challenger)" class="list-group-item" *ngFor="#challenger of challengers">
                <span class="badge">{{ challenger.status }}</span>
                {{ challenger.name }}
              </li>
            </ul>        
        </div>
    `
})
export class ChallengersList {
    @Input() challengers : Array<Challenger>;
    @Input() teamName : String;

    getFirstChallengerAvailable() {
        let available = this.challengers.filter(c => c.status === "OK");
        if (available.length > 0) {
            return available[0]
        }
        return null;
    }
    
    updateStatus(winner : Challenger) {
        if (this.challengers.includes(winner)) {
            return;
        }

        this.getFirstChallengerAvailable() && (this.getFirstChallengerAvailable().status = "KO");
    }

}