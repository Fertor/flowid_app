import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetallePage } from '../detalle/detalle';


/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }  openCards(id){
  	this.navCtrl.push(DetallePage, { id_g: id});
  }

}
