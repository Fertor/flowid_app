import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage {
	map: GoogleMap;
    long: any;
    lat:any;
    dir:any;
    posicion:any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private googleMaps: GoogleMaps,
    private geolocation: Geolocation
    ) {
  this.geolocation.getCurrentPosition().then((resp) => {
 this.long = resp.coords.longitude;
 this.lat=  resp.coords.latitude;
 this.posicion= {lat: this.lat, long: this.long};

 this.loadMap(this.lat, this.long);
 
}).catch((error) => {
  console.log('Error getting location', error);
});

  }
  
loadMap(lat, long) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: long
        },
        zoom: 18,
        tilt: 30
      }, 
       mapType: 'MAP_TYPE_SATELLITE'
      
    };
     this.map = this.googleMaps.create('map_ubicacion', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
       
        this.map.addMarker({
            title: 'Nombre de la Tarjeta\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat,
              lng: long 
            }
          })
          .then(marker => {
      // Show the info window
      marker.showInfoWindow();

            });

});



}
}