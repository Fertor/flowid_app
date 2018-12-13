import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { NovedadPage } from '../novedad/novedad';
import { CompartirPage } from '../compartir/compartir';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { ImgPage } from '../img/img';


/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

	save="";
	ver=false;
  imgs=['assets/imgs/perro8.jpg', 'assets/imgs/perro.jpg', 'assets/imgs/perro1.jpg', 
  'assets/imgs/perro2.jpg', 'assets/imgs/perro3.jpg', 'assets/imgs/perro4.jpg',
  'assets/imgs/perro5.jpg', 'assets/imgs/perro6.jpg', 'assets/imgs/perro7.jpg'];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public pop: PopoverController
   
  	) {
    
  	  var num = this.navParams.get('id_g');
if (num == 2) {
	this.save ="Guardada";

}else{
	this.save= "Guardar";

}


  }


openNovedad(id_card, id_nov){
this.navCtrl.push(NovedadPage, {id_cards: id_card, id_novs: id_nov});
}
  
presentPopover(myEvent){
	let popover = this.pop.create(CompartirPage, {}, {showBackdrop:true});
	popover.present({
		 ev: myEvent
	});
}


openMapa(){
this.navCtrl.push(UbicacionPage);

}
openGaleria(){
   let popover = this.pop.create(ImgPage, {imgs: this.imgs}, {showBackdrop:true});
  popover.present();

}

}
