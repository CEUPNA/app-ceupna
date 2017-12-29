import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
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
import { TicsPage } from '../pages/ticpage/ticpage';
import { SettingsPage } from '../pages/settings/settings';
import { mentSelectSubjectPage } from '../pages/mentSelectSubject/mentSelectSubject';
import { mentResultsPage } from '../pages/mentResultsPage/mentResultsPage';
import { mentTeacherPage } from '../pages/mentTeacherPage/mentTeacherPage';
import { mentSingleSubject } from '../pages/mentSingleSubject/mentSingleSubject';
import { NewPage } from '../pages/new/new';
import { TransportPage } from '../pages/transport/transport';
import { ParadaPage } from '../pages/parada/parada';

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
    NewPage,
    TicsPage,
    mentSelectSubjectPage,
    mentResultsPage,
    mentTeacherPage,
    mentSingleSubject,
    TransportPage,
    ParadaPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
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
    NewPage,
    TicsPage,
    mentSelectSubjectPage,
    mentResultsPage,
    mentTeacherPage,
    mentSingleSubject,
    TransportPage,
    ParadaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})

export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
