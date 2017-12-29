import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { mentSelectSubjectPage } from '../mentSelectSubject/mentSelectSubject';
import { mentResultsPage } from '../mentResultsPage/mentResultsPage';
import { AppInit } from '../../providers/app-init';
import { UniPage } from '../uni/uni';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-mentoring',
  templateUrl: 'mentoring.html'
})

export class MentoringPage {
grados:any;
grado:any;
busqueda = "";
placeholder = "Busca a tu profesor";
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: HttpClient) {
    this.http.get('http://'+AppInit.api+'/degrees/').subscribe(data => {
         this.grados = data;
         console.log(data);
    });
  }

  onChange(){
    console.log(this.grado);
    this.navCtrl.push(mentSelectSubjectPage, {grado: this.grado});
  }

  onInput($event){
    console.log($event.srcElement.value);
    this.navCtrl.push(mentResultsPage, {search: $event.srcElement.value});
  }

  OpenUni(){
    this.navCtrl.push(UniPage);
  }

}
