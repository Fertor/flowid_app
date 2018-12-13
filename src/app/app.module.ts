import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps, Geocoder } from '@ionic-native/google-maps';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { CardsPage } from '../pages/cards/cards';
import { DetallePage } from '../pages/detalle/detalle';
import { NovedadPage } from '../pages/novedad/novedad';
import { CompartirPage } from '../pages/compartir/compartir';
import { ScannerPage } from '../pages/scanner/scanner';
import { MapaPage } from '../pages/mapa/mapa';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { ImgPage } from '../pages/img/img';
import { CardsServiceProvider } from '../providers/cards-service/cards-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CardsPage,
    DetallePage,
    NovedadPage,
    CompartirPage,
    ScannerPage,
    MapaPage,
    UbicacionPage,
    ImgPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CardsPage,
    DetallePage,
    NovedadPage,
    CompartirPage,
    ScannerPage,
    MapaPage,
    UbicacionPage,
    ImgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    GoogleMaps,
    Geocoder,
    Toast,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardsServiceProvider
  ]
})
export class AppModule {}
