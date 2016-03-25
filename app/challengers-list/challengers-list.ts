/**
 * Created by kdavin on 23/03/2016.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Challenger} from "../common/entity/challenger";

@Component({
    selector : 'challengers-list',
    template : `
        <div>
            <h3>{{ teamName }}</h3>
            <div role="listbox">
              <paper-item  *ngFor="#challenger of challengers; #i = index" 
                    [class.ko]="challenger.status === 'KO'"
                    [class.current]="i === 0">
                    <iron-icon [icon]="challenger.status === 'OK' ? 'social:person' : 'close'" item-icon></iron-icon>
                    {{ challenger.name }}
                </paper-item>
            </div>
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