import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { Http } from '@angular/http';
import { MentoringPage } from '../mentoring/mentoring';
import { mentTeacherPage } from '../mentTeacherPage/mentTeacherPage';

@Component({
  selector: 'page-mentSingleSubject',
  templateUrl: 'mentSingleSubject.html'
})
export class mentSingleSubject {
subject: any;
teachers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit,  public http: Http) {
  this.subject = navParams.get("subject");
  this.http.get('http://'+AppInit.api+'/teachers/?format=json&subject_id=' + this.subject + '').map(res => res.json()).subscribe(data => {
       this.teachers = data;

  });
  }
  OpenMentPage(){
    this.navCtrl.push(MentoringPage);
  }

  OpenSingleTeacher(teacher){
   this.navCtrl.push(mentTeacherPage, {teacherid: teacher});
  }

}
