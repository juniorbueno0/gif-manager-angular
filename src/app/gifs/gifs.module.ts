import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsRoutingModule } from './gifs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';
import { GifService } from './services/gif.service';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ExplorePageComponent,
    LikedPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    LayoutPageComponent,
    ExplorePageComponent,
    LikedPageComponent
  ]
})
export class GifsModule { }
