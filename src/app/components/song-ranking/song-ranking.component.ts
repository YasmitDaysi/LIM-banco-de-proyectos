import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {DataMusicService } from 'src/app/services/data-music.service';


@Component({
  selector: 'app-song-ranking',
  templateUrl: './song-ranking.component.html',
  styleUrls: ['./song-ranking.component.scss']
})
export class SongRankingComponent implements OnInit {
public newArr: any[];
public songRanking: any;
public arrSong: any;
// personas = Array(500).fill(0);

  constructor(private dtMusic: DataMusicService) { }

  ngOnInit(): void {
    this.dtMusic.getChartTopArtist().subscribe(data => {
      console.log(data);
    });


    let allSong = [];
    this.dtMusic.getChartTopTracks().subscribe(data => {
     this.songRanking = data;
     console.log(this.songRanking);
     this.arrSong = this.songRanking.tracks.track;
    // console.log(this.arrSong);
     this.newArr = [] ;
     allSong = this.arrSong.forEach((element) => {
     this.newArr.push({
      nameArtist: element.artist.name,
      album: element.artist.mbid,
      nameSong: element.name,
     });
    //  const arrImage = element.image;
    //  arrImage.forEach((img) => {
    //      this.newArr.push({
    //               image: img['#text'],
    //               size: img.size

    //      });
    //    });

   });
     console.log(this.newArr);

});

  }

   getArrSongs() {
//      let allSong = [];
//      this.dtMusic.getChartTopTracks().subscribe(data => {
//       this.songRanking = data;
//       console.log(this.songRanking);
//       this.arrSong = this.songRanking.albums.album;
//       console.log(this.arrSong);

//       allSong = this.arrSong.forEach((element) => {
//      this.newArr.push({
//       nameAlbum: element.name,



//      });
//    });

//  });
   }
}
