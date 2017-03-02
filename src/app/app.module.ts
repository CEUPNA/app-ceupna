import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {
  TranslateModule,
  TranslateStaticLoader,
  TranslateLoader } from 'ng2-translate/ng2-translate';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { CeupnaPage } from '../pages/ceupna/ceupna';
import { UniPage } from '../pages/uni/uni';
import { AlertsPage } from '../pages/alerts/alerts';
import { NotesPage } from '../pages/notes/notes';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { ContactPage } from '../pages/contact/contact';
import { MentoringPage } from '../pages/mentoring/mentoring';
import { SchedulePage } from '../pages/schedule/schedule';
import { TicPage } from '../pages/tic/tic';
import { SettingsPage } from '../pages/settings/settings';
import { NewPage } from '../pages/new/new';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NewsPage,
    CeupnaPage,
    UniPage,
    AlertsPage,
    NotesPage,
    ComplaintsPage,
    ContactPage,
    MentoringPage,
    SchedulePage,
    TicPage,
    SettingsPage,
    NewPage

  ],
  imports: [
     IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'}),
     TranslateModule.forRoot({
       provide: TranslateLoader,
       useFactory: (createTranslateLoader),
       deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    NewsPage,
    CeupnaPage,
    UniPage,
    AlertsPage,
    NotesPage,
    ComplaintsPage,
    ContactPage,
    MentoringPage,
    SchedulePage,
    TicPage,
    SettingsPage,
    NewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
