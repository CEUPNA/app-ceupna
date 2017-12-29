import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { HttpClient } from '@angular/common/http';
import { MentoringPage } from '../mentoring/mentoring';


@Component({
  selector: 'page-mentTeacherPage',
  templateUrl: 'mentTeacherPage.html'
})
export class mentTeacherPage {
idteacher:any;
name:any;
email:any;
timetable:any;
web:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit,  public http: HttpClient) {
    this.idteacher = navParams.get("teacherid");
    console.log(this.idteacher);
    this.http.get('http://'+AppInit.api+'/teachers/'+this.idteacher+'').subscribe(data => {
         console.log(data);
         this.name = data['name'];
         this.email = data['email'];
         this.timetable = data['timetable'];
         this.web = data['web'];
    });
  }

  OpenMentPage(){
    this.navCtrl.push(MentoringPage);
  }


}
