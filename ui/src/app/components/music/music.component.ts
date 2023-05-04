import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Music} from "../../shared/model/music";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  @Input() music: Music;
  @Input() hasAction=true;
  @Output() getMusic=new EventEmitter<Music>();
  @Output() callFav=new EventEmitter<Music | null>();
  constructor() { }

  ngOnInit(): void {
  }
  toggleStar(event:any){
    event.stopPropagation();
    this.music.star=!this.music.star;
    this.callFav.emit(this.music);
  }

}
