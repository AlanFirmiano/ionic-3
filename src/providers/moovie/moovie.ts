import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?page="+page+"&api_key=519741be98533625d627854cb36d090f");
  }

  getMovieDetails(filmeID){
    return this.http.get('https://api.themoviedb.org/3/movie/'+filmeID+'?api_key=519741be98533625d627854cb36d090f');
  }
}
