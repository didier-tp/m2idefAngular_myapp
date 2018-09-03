import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TauxChange } from './data/tauxChange';

@Injectable({
  providedIn: 'root'
})
export class RestChangeService {

  constructor(private http: HttpClient){ } //injection de dépendance

  public getTabTauxChangeObservable(base : string) : Observable< TauxChange[] > {
    let tauxChangeUrl : string = null;
    tauxChangeUrl = "tauxChange/ws/rest/change?base="+base ;
    //NB:cette URL relative commencant par "tauxChange"
    //(correspondant au nom de l'application java)
    //fonctionnera via le paramétrage de lancement de ng serve

    //ng serve --proxy-config proxy.conf.json
    //ou le fichier proxy.conf.json (à créer à coté de package.json)
    //comporte:
    //{ "/tauxChange" : { "secure" : "false" ,
    //   "target" : "http://localhost:8080" }
    //}

    console.log( "tauxChangeUrl = " + tauxChangeUrl);
    return this.http.get<TauxChange[]>(tauxChangeUrl );
    }

}
