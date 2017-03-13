import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';



declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit,private platform:Platform) {
    this.platform = platform;

		this.initializeMap();
     }
     initializeMap() {

		this.platform.ready().then(() => {
		    var minZoomLevel = 17;

		    this.map = new google.maps.Map(document.getElementById('map'), {
		        zoom: minZoomLevel,
		        center: new google.maps.LatLng(42.800783,-1.63668),
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
		});
	}
 }
