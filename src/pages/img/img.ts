import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-img',
  templateUrl: 'img.html',
})
export class ImgPage {


	imgs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imgs= navParams.get('imgs');
  	
  }

  
}
