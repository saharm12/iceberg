import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/umd/gestures/gesture-controller';
import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//declare var google: any;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map :any;
  lat = 37.75;
  lng = -122.41;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  //style = 'mapbox://styles/mapbox/streets-v11';

  //start = 'chicago, il';
  //end = 'chicago, il';
  //directionsService = new google.maps.DirectionsService;
  //directionsDisplay = new google.maps.DirectionsRenderer;


  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNqdjg1d243YjBlbms0NW50M3ZvaGlhbG8ifQ.JvWxv9X81IW7k64zGXEY2Q';
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [pos.coords.longitude, pos.coords.latitude]
   
     // console.log('ionViewDidLoad MapPage');
    })
    
    });
    
   
  
  }

    //this.directionsDisplay.setMap(this.map);
  
  
 // calculateAndDisplayRoute() {
    ////this.directionsService.route({
     // origin: this.start,
      //destination: this.end,
      //travelMode: 'DRIVING'
   // }, (response, status) => {
     // if (status === 'OK') {
       // this.directionsDisplay.setDirections(response);
      //} else {
      //  window.alert('Directions request failed due to ' + status);
     // }
    //});
 // }

}