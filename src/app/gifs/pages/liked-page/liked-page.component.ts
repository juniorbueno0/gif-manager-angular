import { Component, OnInit, OnDestroy } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gifs } from '../../interfaces/gif.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-liked-page',
  templateUrl: './liked-page.component.html',
  styles: [
  ]
})
export class LikedPageComponent implements OnInit, OnDestroy {
  likedGifs: Gifs[] = [];
  newSub: Subscription | undefined;

  constructor(private gifservice:GifService){}

  ngOnInit(): void {
    this.newSub = this.gifservice.gifBehaviorSubjectListener().subscribe((likedList: Gifs[]) => {
        console.log('liked: ',likedList);
        this.likedGifs = likedList;
      }
    )
  }

  ngOnDestroy(): void {
    this.newSub?.unsubscribe();
  }

  deleteLIkedGif(gif: Gifs){
    const indexToRemove = this.likedGifs.indexOf(gif);
    if (indexToRemove !== -1) {
      this.likedGifs.splice(indexToRemove, 1);
    }
  }
}
