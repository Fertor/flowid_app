import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  data={};
  options: BarcodeScannerOptions ;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private toast : Toast
  	) {
  	// Optionally request the permission early

  }

openScanner(){
  this.options= {
    prompt: "Por Favor Scannee"
  }
this.barcodeScanner.scan(this.options).then((barcodeData) => {
 this.data = barcodeData;
}, (err) => {
    this.toast.show('A Ocorrido un error con el scanner', '5000', 'bottom').subscribe(
  toast => {
    console.log(toast);
  }
  )}
); 
}

}
