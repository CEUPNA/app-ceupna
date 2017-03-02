import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import { ComplaintsPage } from '../complaints/complaints';
import { ContactPage } from '../contact/contact';
import { AppInit } from '../../providers/app-init';
/*
  Generated class for the Ceupna page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad CeupnaPage');
  }

}
