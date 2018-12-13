import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	user = "admin";
	pass = "12345";
	datos={
		users:"",
		pass:""
	};
	usersFb= null;

  constructor(
  	public navCtrl: NavController,
  	private toast : Toast
  		) {

  }
  loginFB(){
  
  }

entrar(){
	if(this.datos.users == this.user && this.datos.pass == this.pass){
		this.navCtrl.setRoot(MenuPage);
	}else{
		this.toast.show(`Usuario o clave invalida`, '5000', 'bottom').subscribe(
  toast => {
    console.log(toast);
  }
	)}
}

}
