/**
 * Created by kevin on 12/03/2016.
 */
import {Component} from "angular2/core";
import {Challenger} from "./common/entity/challenger";

@Component({
    selector: 'civil-war-app',
    template: `
        <div class="horizontal layout">
            Hello Toulouse !!
        </div>
    `,
    directives : [ ]
})
export class CivilWarApp {
    
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

