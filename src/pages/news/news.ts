import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { NewPage } from '../new/new';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the News page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {
    this.http.get('http://www.ceupna.es/wp-json/wp/v2/posts').map(res => res.json()).subscribe(data => {
         this.posts = data;
    });

  }

  OpenSingleNew(postid){
  this.navCtrl.push(NewPage, {postid: postid});
  console.log(postid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
