import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { CardsPage } from '../pages/cards/cards';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav;
  pages=[{
     title: "Mi Cuenta",
     descripcion: "Edita tu cuenta",
     content: MenuPage 
    },{
     title: "Mi Flowid",
     descripcion: "Edita tu Flowid",
     content: CardsPage 
    },{
     title: "Opcion 1",
     descripcion: "Descripcion de lo¿a opcion 1",
     content: MenuPage 
    },{
     title: "Opcion 2",
     descripcion: "Descripcion de lo¿a opcion 2",
     content: MenuPage 
    },{
     title: "Opcion 3",
     descripcion: "Descripcion de lo¿a opcion 3",
     content: MenuPage 
    }]

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page){
   this.nav.setRoot(page.content);
  }
  
}


