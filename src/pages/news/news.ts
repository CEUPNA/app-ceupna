import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { NewPage } from '../new/new';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  posts: any;
  /*Petición a WP de las entradas*/
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: HttpClient, private storage: Storage) {
    this.http.get('http://www.ceupna.es/wp-json/wp/v2/posts?lang' + this.storage.get('lang') + '').subscribe(data => {
         this.posts = data;
    });

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.http.get('http://www.ceupna.es/wp-json/wp/v2/posts?lang' + this.storage.get('lang') + '').subscribe(data => {
         this.posts = data;
           refresher.complete();
    });
  }
  OpenSingleNew(postid){
  this.navCtrl.push(NewPage, {postid: postid});
  console.log(postid);
  }


}
