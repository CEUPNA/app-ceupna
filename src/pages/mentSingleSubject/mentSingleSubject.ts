import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { HttpClient } from '@angular/common/http';
import { MentoringPage } from '../mentoring/mentoring';
import { mentTeacherPage } from '../mentTeacherPage/mentTeacherPage';

@Component({
  selector: 'page-mentSingleSubject',
  templateUrl: 'mentSingleSubject.html'
})
export class mentSingleSubject {
subject: any;
teachers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit,  public http: HttpClient) {
    this.subject = navParams.get("subject");
    this.http.get('http://'+AppInit.api+'/teachers/?format=json&subject_id=' + this.subject + '').subscribe(data => {
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
