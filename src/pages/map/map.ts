import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/umd/gestures/gesture-controller';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map :any;
  //start = 'chicago, il';
  //end = 'chicago, il';
  //directionsService = new google.maps.DirectionsService;
  //directionsDisplay = new google.maps.DirectionsRenderer;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

   this.showMap();
   // console.log('ionViewDidLoad MapPage');
  }
  showMap(){
    const location= new google.maps.LatLng('33.886917','9.537499');
    const options ={
      center:location,
      zoom:10,
      streetViewControl:false,
      mapTypeId:'roadmap'
    };
     const map = new google.maps.Map(this.mapElement.nativeElement,options);
     this.addMarker(location,map) ;
      //zoom: 7,
     // center: {lat: 41.85, lng: -87.65}
    }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
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
