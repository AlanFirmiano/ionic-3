import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MoovieProvider} from "../../providers/moovie/moovie";
import {FilmeDetalhesPage} from "../filme-detalhes/filme-detalhes";

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

  public list_moovies = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moovieProvider:MoovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }
  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Filmes..."
    });
    this.loader.present();
  }

  fecharCarregando(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme:any){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }
  carregarFilmes(){
    this.abrirCarregando();
    this.moovieProvider.getLatestMovies().subscribe(
      res=>{
        const response = (res as any);
        const objeto = JSON.parse(response._body);
        this.list_moovies = objeto.results;
        this.fecharCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      err=>{
        console.log(err);
        this.fecharCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    );
  }

}
