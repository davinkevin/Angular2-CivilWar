/**
 * Created by kdavin on 23/03/2016.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Challenger} from "../common/entity/challenger";

@Component({
    selector : 'battle',
    template : `
            <div *ngIf="!isKo(cachallenger) && !isKo(imchallenger)" class="horizontal around-justified layout">
              <paper-card [heading]="cachallenger.name" [image]="cachallenger.thumbnail" >
                <div class="card-actions">
                    <paper-button raised class="green" (click)="win(cachallenger)">Win !</paper-button>
                </div>
              </paper-card>
              <paper-card [heading]="imchallenger.name" [image]="imchallenger.thumbnail">
                <div class="card-actions">
                    <paper-button raised class="green" (click)="win(imchallenger)">Win !</paper-button>
                </div>
              </paper-card>
            </div>
            <div class="horizontal around-justified layout">
                <paper-card class="victory" *ngIf="isKo(cachallenger)" heading="Iron Man Team wins !" image="img/ironmanteam.jpg"></paper-card>
                <paper-card class="victory" *ngIf="isKo(imchallenger)" heading="Captain America Team wins !" image="img/captainamericateam.jpg"></paper-card>            
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

    isKo(challenger : Challenger) {
        return challenger.status === 'KO';
    }
}