import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GifsRoutingModule } from './gifs/gifs-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

import { GifService } from './gifs/services/gif.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsRoutingModule,
    SharedModule,
    GifsModule,
    FormsModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
