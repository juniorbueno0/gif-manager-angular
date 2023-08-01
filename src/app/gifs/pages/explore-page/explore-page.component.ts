import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gifs } from '../../interfaces/gif.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styles: [
  ]
})
export class ExplorePageComponent implements OnInit {
  gifs: Gifs[] = [];

  constructor(private gifservice: GifService){}

  ngOnInit(): void {
    this.gifservice.emitGifSearchList().subscribe((gifs: Gifs[]) => {
      this.gifs = gifs;    
    })
  }

  searchTag(inputTag: NgForm){
    this.gifservice.searchTag(inputTag.value);
  }

  likeGif(gif: Gifs){
    this.gifservice.setLIkedGif(gif);
  }

}
