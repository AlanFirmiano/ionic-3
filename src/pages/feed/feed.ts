import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MoovieProvider} from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private moovieProvider:MoovieProvider) {
  }

  ionViewDidLoad() {
    this.moovieProvider.getLatestMovies().subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
