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
              <li   (click)="setKo(challenger)" 
                    class="list-group-item" 
                    *ngFor="#challenger of challengers; #i = index" 
                    [class.list-group-item-danger]="challenger.status === 'KO'"
                    [class.list-group-item-warning]="i === 0"
                    >
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

    getChallenger() {
        return this.challengers[0];
    }
    
    updateStatus(winner : Challenger) {
        let currentChallenger = this.getChallenger();
        if ( currentChallenger === winner) {
            return;
        }
        currentChallenger.status = 'KO';
        this.sortChallengers();
    }

    private sortChallengers() {
        this.challengers.sort((c1, c2) => c1.status === c2.status ? 0 : c1.status === 'OK' ? -1 : 1 )
    }

}