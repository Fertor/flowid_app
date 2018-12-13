import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';


import { ImgPage } from '../img/img';

/**
 * Generated class for the NovedadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novedad',
  templateUrl: 'novedad.html',
})
export class NovedadPage {

	 imgs=['assets/imgs/perro8.jpg', 'assets/imgs/perro.jpg', 'assets/imgs/perro1.jpg', 
  'assets/imgs/perro2.jpg', 'assets/imgs/perro3.jpg', 'assets/imgs/perro4.jpg',
  'assets/imgs/perro5.jpg', 'assets/imgs/perro6.jpg', 'assets/imgs/perro7.jpg'];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public pop: PopoverController
  	) {
  }

openGaleria(){
   let popover = this.pop.create(ImgPage, { imgs: this.imgs}, { showBackdrop:true });
  popover.present();

}
}
 


