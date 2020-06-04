import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataMusicService {
  public url: string;

  constructor( private http: HttpClient) {

   }
  getChartTopTracks() {
   return this.http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1d02cc0db176257b1482f581def48470&format=json');

  }

  getChartTopArtist() {
    return this.http.get
    ('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1d02cc0db176257b1482f581def48470&format=json');
  }
}
