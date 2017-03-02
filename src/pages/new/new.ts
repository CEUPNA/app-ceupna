import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { NewsPage } from '../news/news';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the New page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  postid: any;
  content: any;
  date: any;
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: Http) {
    this.postid = navParams.get("postid");
    this.http.get('http://www.ceupna.es/wp-json/wp/v2/posts/'+this.postid).map(res => res.json()).subscribe(data => {
         this.date = data.date;
         this.content = data.content.rendered;
         this.title = data.title.rendered
    });
  }
  OpenNews(){
  this.navCtrl.push(NewsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
