import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { HttpClient } from '@angular/common/http';
import { mentTeacherPage } from '../mentTeacherPage/mentTeacherPage';


@Component({
  selector: 'page-mentResultsPage',
  templateUrl: 'mentResultsPage.html'
})

export class mentResultsPage {
search: any;
resultado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit,  public http: HttpClient) {
    this.search = navParams.get("search");
    this.http.get('http://'+AppInit.api+'/teachers/?format=json&name='+this.search+'').subscribe(data => {
         console.log(data);
         this.resultado = data;
    });
  }

  OpenTeacher(teacherid){
    this.navCtrl.push(mentTeacherPage, {teacherid: teacherid});
  }


}
