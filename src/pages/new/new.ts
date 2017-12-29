import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppInit } from '../../providers/app-init';
import { NewsPage } from '../news/news';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  postid: any;
  content: any;
  date: any;
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private AppInit: AppInit, public http: HttpClient) {
    this.postid = navParams.get("postid");
    /* HACEMOS PETICIÓN A WP CON EL ID DE LA ENTRADA Y DEFINIMOS VARIABLES*/
    this.http.get('http://www.ceupna.es/wp-json/wp/v2/posts/'+this.postid).subscribe(data => {
         this.date = data['date'];
         this.content = data['content'].rendered;
         this.title = data['title'].rendered
    });
  }

  OpenNews(){
  this.navCtrl.push(NewsPage);
  }

}
