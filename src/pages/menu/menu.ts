import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetallePage } from '../detalle/detalle';
import { ScannerPage } from '../scanner/scanner';
import { MapaPage } from '../mapa/mapa';
import { CardsServiceProvider } from '../../providers/cards-service/cards-service';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
	ver= true;
	ver_s = false;
  cards: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cardsService: CardsServiceProvider
  ) {
      this.getCards();
}

getCards(){
  this.cardsService.getCards().subscribe(data => this.cards= data);

}


  verr(){
  	if (this.ver == true) {
  		this.ver = false;
  		this.ver_s= true;
  	}else{
  		this.ver= true;
  		this.ver_s= false;
  	}

  }
  openCards(id){
    this.navCtrl.push(DetallePage, { id_g: id});
  }

openScanner(){
    this.navCtrl.push(ScannerPage);
  }
  openMapa(){
    this.navCtrl.push(MapaPage);
  }



}
