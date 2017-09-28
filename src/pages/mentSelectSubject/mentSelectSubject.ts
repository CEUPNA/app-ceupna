import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { Http } from '@angular/http';
import { mentSingleSubject } from '../mentSingleSubject/mentSingleSubject';


@Component({
  selector: 'page-mentSelectSubject',
  templateUrl: 'mentSelectSubject.html'
})
export class mentSelectSubjectPage {
idGrado: any;
subjects: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {
  this.idGrado = navParams.get("grado");
  this.http.get('http://'+AppInit.api+'/subjects/?format=json&upna_degree_id=' + this.idGrado + '').map(res => res.json()).subscribe(data => {
       this.subjects = data;
       console.log(this.idGrado);
       console.log(this.subjects);
  });
  }

  OpenSingleSubject(subject){
  this.navCtrl.push(mentSingleSubject, {subject: subject})
  }


}
