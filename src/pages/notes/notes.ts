import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit) {}


}
