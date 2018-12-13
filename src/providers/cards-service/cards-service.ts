import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the CardsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsServiceProvider {

  constructor(private http: Http) {

  }
  getCards(){
  return  this.http.get('https://www.flowidcards.com/flowid_code/index.php/cards')
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.errorResponse)
  }
  getCardsId(id){
  return  this.http.get('https://www.flowidcards.com/flowid_code/index.php/cards_id/?id='+ id)
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.errorResponse)
  }

  private logResponse(res: Response){
    console.log(res);
    return res.json();
  }

  private extractData(res: Response){
    return res.json();

  }

  private errorResponse(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Error en el servidor.")
  }

}
