import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import { ComplaintsPage } from '../complaints/complaints';
import { ContactPage } from '../contact/contact';
import { AppInit } from '../../providers/app-init';
import { TranslateService } from 'ng2-translate';



@Component({
  selector: 'page-ceupna',
  templateUrl: 'ceupna.html'
})
export class CeupnaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}
  OpenNotes(){
  this.navCtrl.push(NotesPage);
  }
  OpenComplaints(){
  this.navCtrl.push(ComplaintsPage);
  }
  OpenContact(){
  this.navCtrl.push(ContactPage);
  }


}
