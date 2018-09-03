import { Component, OnInit } from '@angular/core';
import { TauxChange } from '../data/tauxChange';
import { RestChangeService } from '../rest-change.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  source : string = "EUR"; //par defaut

  
  listeTauxChange : Array<TauxChange> = [];

  onLoadTauxChange(){
    console.log("source=" + this.source);
    this.listeTauxChange = [];
    /*
    //V1 (sans appel de WS REST)
    this.listeTauxChange.push(new TauxChange("EUR",1.0));
    this.listeTauxChange.push(new TauxChange("USD",1.1));
    this.listeTauxChange.push(new TauxChange("GBP",1.2));
    this.listeTauxChange.push(new TauxChange("JPY",100.82));
    */
   //V2 avec appel de Ws REST:
   this.restChangeService.getTabTauxChangeObservable(this.source)
       .subscribe((liste) => { this.listeTauxChange = liste;},
                  (error) => {console.log("error:" + error);});
  }

  constructor(public restChangeService : RestChangeService) { 
    //pour injection de Service
  }

  ngOnInit() {
  }

}
