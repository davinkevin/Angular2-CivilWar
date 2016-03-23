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
        <nav class="navbar navbar-default navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Angular2 - Civil War
              </a>
            </div>
          </div>
        </nav>
        <challengers-list #CATeam [challengers]="captainAmericaTeam" [teamName]="'Captain America Team'" (select)="battle.select()"></challengers-list>
        <challengers-list #IMTeam [challengers]="ironManTeam" [teamName]="'Iron Man Team'" (select)="battle.select()"></challengers-list>
        <battle 
            [CaptainAmericaChallenger]="CATeam.getFirstChallengerAvailable()" 
            [IronManChallenger]="IMTeam.getFirstChallengerAvailable()"
            (winner)="CATeam.updateStatus($event); IMTeam.updateStatus($event)"
            ></battle>
    `,
    directives : [ ChallengersList, Battle]
})
export class AppComponent {
    
    captainAmericaTeam : Array<Challenger> = [];
    ironManTeam : Array<Challenger> = [];
    
    constructor() {
        this.captainAmericaTeam.push(
            { name : 'Captain America', thumbnail : 'http://foo/bar.png', status : 'OK'},
            { name : 'Hawk Eye', thumbnail : 'http://foo/bar.png', status : 'OK'}
        );
        this.ironManTeam.push(
            { name : 'Iron Man', thumbnail : 'http://foo/bar.png', status : 'OK'},
            { name : 'Thor', thumbnail : 'http://foo/bar.png', status : 'OK'}
        );
    }
}

