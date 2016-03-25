/**
 * Created by kdavin on 23/03/2016.
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Challenger} from "../common/entity/challenger";

@Component({
    selector : 'battle',
    template : `
            <div *ngIf="!isKo(cachallenger) && !isKo(imchallenger)" class="versus col-lg-6 col-sm-6 col-md-6 col-xs-6">
                  <div class="col-sm-6 col-md-6">
                    <div class="thumbnail">
                      <img [src]="cachallenger.thumbnail">
                      <div class="caption text-center">
                        <h3>{{ cachallenger.name }}</h3>
                        <button class="btn btn-success" (click)="win(cachallenger)">Win !</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="thumbnail">
                      <img [src]="imchallenger.thumbnail">
                      <div class="caption text-center">
                        <h3>{{ imchallenger.name }}</h3>
                        <button class="btn btn-success" (click)="win(imchallenger)">Win !</button>
                      </div>
                    </div>
                  </div>
            </div>
            <div *ngIf="isKo(cachallenger)" class="text-center col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <h3>Iron Man Team wins !</h3>
                <img src="img/ironmanteam.jpg" height="300">
            </div>
            <div *ngIf="isKo(imchallenger)" class="text-center col-lg-6 col-sm-6 col-md-6 col-xs-6">
                <h3>Captain America Team wins !</h3>
                <img src="img/captainamericateam.jpg" height="300">
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