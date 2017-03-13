import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { CeupnaPage } from '../ceupna/ceupna';
import { UniPage } from '../uni/uni';
import { AlertsPage } from '../alerts/alerts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // Definimos las páginas de cada variable
  news: any = NewsPage;
  ceupna: any = CeupnaPage;
  uni: any = UniPage;
  alerts: any = AlertsPage;
  valueforngif=true;
  constructor() {

  }

}
