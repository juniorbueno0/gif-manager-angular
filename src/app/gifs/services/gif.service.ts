import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gif.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {
    private apiKeyGhipy:string = 'uxrUjLar5f5gvX5CRCNudIy2vrSY5Ss1';
    private serviceUrl:string = 'https://api.giphy.com/v1/gifs/search?';
  
    private gifList: Gifs[] = [];
    private gifsLiked: Gifs[] = [];

    // suscrite to..
    private gifListUpdated: EventEmitter<Gifs[]> = new EventEmitter<Gifs[]>();
    private gifSubject: BehaviorSubject<Gifs[]> = new BehaviorSubject<Gifs[]>([]);

    constructor(private http:HttpClient) { }
  
    searchTag(tag:string):void {
      const params = new HttpParams()
        .set('api_key', this.apiKeyGhipy)
        .set('q', tag)
        .set('limit', '16')
  
      this.http.get<SearchResponse>(this.serviceUrl + params)
        .subscribe( resp => {
          this.gifList = resp.data;
          this.gifListUpdated.emit(this.gifList);
        }
      )
    }

    emitGifSearchList(){ return this.gifListUpdated; }

    setLIkedGif(newGif: Gifs){
        console.log('service: ',newGif);
        this.gifsLiked.unshift(newGif);
        this.gifSubject.next(this.gifsLiked);
    }

    gifBehaviorSubjectListener(){ return this.gifSubject.asObservable(); }
    
}