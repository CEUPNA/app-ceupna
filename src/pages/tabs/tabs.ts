import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { CeupnaPage } from '../ceupna/ceupna';
import { UniPage } from '../uni/uni';
import { AlertsPage } from '../alerts/alerts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  news: any = NewsPage;
  ceupna: any = CeupnaPage;
  uni: any = UniPage;
  alerts: any = AlertsPage;

  constructor() {

  }
}
