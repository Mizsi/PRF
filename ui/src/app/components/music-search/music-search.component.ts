import { Component, OnInit } from '@angular/core';
import {Musics} from '../../shared/database/musics';
import {Music} from "../../shared/model/music";

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {
  musics=Musics;
  detailData: any;
  page='';
  favorites= [];
  constructor() { }

  ngOnInit(): void {
  }
  onFavorite(event:Music){
    //  if (event && event.star) {
    //  this.favorites.push(event);
    // }
    // this.favorites = this.favorites.filter(favorite => favorite.star);
  }

}
