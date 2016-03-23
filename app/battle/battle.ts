/**
 * Created by kdavin on 23/03/2016.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Challenger} from "../common/entity/challenger";

@Component({
    selector : 'battle',
    template : `
            <div *ngIf="cachallenger !== null && imchallenger != null" class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <div class="col-md-6">
                    {{ cachallenger.name }}
                    <button (click)="win(cachallenger)">Win !</button>
                </div>
                <div class="col-md-6">
                    {{ imchallenger.name }}
                    <button (click)="win(imchallenger)">Win !</button>
                </div>
            </div>
            <div *ngIf="cachallenger === null && imchallenger !== null">
                <h3>Iron Man Team wins !</h3>
            </div>
            <div *ngIf="imchallenger === null && cachallenger !== null">
                <h3>Captain America Team wins !</h3>
            </div>
        `
})
export class Battle {
    @Input('CaptainAmericaChallenger') cachallenger : Challenger;
    @Input('IronManChallenger') imchallenger : Challenger;
    @Output('winner') winnerEmitter = new EventEmitter<Challenger>();

    win(challenger : Challenger) {
        this.winnerEmitter.emit(challenger);
    }

}