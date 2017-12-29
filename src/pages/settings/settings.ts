import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  language: any;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams,
              private AppInit: AppInit, public translateService: TranslateService) {}

  changeLanguage(language){
    this.storage.set('lang', language);
    this.storage.get('lang').then((val) => {
      this.translateService.use(val);
    });
  }

}
