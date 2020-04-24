import { Component, OnInit } from '@angular/core';
import {DataMusicService } from 'src/app/services/data-music.service'


@Component({
  selector: 'app-song-ranking',
  templateUrl: './song-ranking.component.html',
  styleUrls: ['./song-ranking.component.scss']
})
export class SongRankingComponent implements OnInit {

  constructor(private dtMusic: DataMusicService) { }

  ngOnInit(): void {
    this.dtMusic.getToptags()
    
    
  }

}
