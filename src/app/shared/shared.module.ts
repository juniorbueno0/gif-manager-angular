import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { GifService } from '../gifs/services/gif.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavbarComponent
  ], 
  providers:[
    GifService
  ]
})
export class SharedModule { }
