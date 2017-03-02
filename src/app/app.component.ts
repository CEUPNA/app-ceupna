import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate';


import { TabsPage } from '../pages/tabs/tabs';
import { AppInit } from '../providers/app-init'

@Component({
  templateUrl: 'app.html',
  providers: [AppInit]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, translate: TranslateService) {
    translate.setDefaultLang('es');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
