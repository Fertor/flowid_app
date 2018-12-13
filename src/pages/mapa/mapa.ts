import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

    	map: GoogleMap;
      mark: Marker;
    long: any;
    lat:any;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private googleMaps: GoogleMaps,
    private geolocation: Geolocation
  	) {
this.geolocation.getCurrentPosition().then((resp) => {
 this.long = resp.coords.longitude;
 this.lat=  resp.coords.latitude;
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
     this.map = this.googleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.

        this.map.addMarker({
            title: 'Nombre de la Tarjeta 1\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0087500,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });

          this.map.addMarker({
            title: 'Nombre de la Tarjeta 2\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0082500,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          this.map.addMarker({
            title: 'Nombre de la Tarjeta 10\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0012500,
          lng: long - 0.0092500
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          this.map.addMarker({
            title: 'Nombre de la Tarjeta 3\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0002500,
          lng: long + 0.0000025
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          

          this.map.addMarker({
            title: 'Nombre de la tarjeta 9\n',
            snippet: 'Resumen de la tarjeta \nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          this.map.addMarker({
            title: 'Nombre de la Tarjeta 4\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0065500,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          this.map.addMarker({
            title: 'Nombre de la Tarjeta 5\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0080500,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          this.map.addMarker({
            title: 'Nombre de la Tarjeta 6\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0092500,
          lng: long - 0.0002530
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          this.map.addMarker({
            title: 'Nombre de la Tarjeta 7\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat - 0.0012500,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });
          

          this.map.addMarker({
            title: 'Nombre de la Tarjeta 8\n',
            snippet: 'Resumen de la tarjeta\nResumen e la tarjeta',
            icon: '#e66c9d',
            animation: 'DROP',
            position: {
              lat: lat + 0.0558751,
          lng: long 
            },
            
          })
          .then(marker => {
           marker.showInfoWindow();
          });

      });

}

}
