/**
 * Created by kevin on 12/03/2016.
 */
import {Component} from "angular2/core";
import {ChallengersList} from "./challengers-list/challengers-list";
import {Challenger} from "./common/entity/challenger";
import {Battle} from "./battle/battle";

@Component({
    selector: 'my-app',
    template: `
        <div class="horizontal layout">
            <challengers-list #CATeam [challengers]="captainAmericaTeam" [teamName]="'Captain America Team'" class="flex-3"></challengers-list>
            <challengers-list #IMTeam [challengers]="ironManTeam" [teamName]="'Iron Man Team'" class="flex-3"></challengers-list>
            <battle class="flex-6"
                [CaptainAmericaChallenger]="CATeam.getChallenger()" 
                [IronManChallenger]="IMTeam.getChallenger()"
                (winner)="CATeam.updateStatus($event); IMTeam.updateStatus($event)"
            ></battle>
        </div>
    `,
    directives : [ ChallengersList, Battle]
})
export class AppComponent {
    
    captainAmericaTeam : Array<Challenger> = [];
    ironManTeam : Array<Challenger> = [];
    
    constructor() {
        this.captainAmericaTeam.push(
            { name : 'Hawkeye', thumbnail : 'img/characters/Hawkeye.jpg', status : 'OK'},
            { name : 'Sharon Carter', thumbnail : 'img/characters/SharonCarter.jpg', status : 'OK'},
            { name : 'Falcon', thumbnail : 'img/characters/Falcon.jpg', status : 'OK'},
            { name : 'Bucky Barnes', thumbnail : 'img/characters/BuckyBarnes.jpg', status : 'OK'},
            { name : 'Captain America', thumbnail : 'img/characters/CaptainAmerica.jpg', status : 'OK'}
        );
        this.ironManTeam.push(
            { name : 'Black Widow', thumbnail : 'img/characters/BlackWidow.jpg', status : 'OK'},
            { name : 'Black Panther', thumbnail : 'img/characters/BlackPanther.jpg', status : 'OK'},
            { name : 'War Machine', thumbnail : 'img/characters/WarMachine.jpg', status : 'OK'},
            { name : 'The Vision', thumbnail : 'img/characters/TheVision.jpg', status : 'OK'},
            { name : 'Iron Man', thumbnail : 'img/characters/IronMan.jpg', status : 'OK'}
        );
    }
}

