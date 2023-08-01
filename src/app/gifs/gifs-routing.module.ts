import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {
    path:'', 
    component:LayoutPageComponent, 
    children:[
      {path:'', component:HomePageComponent},
      {path:'explore', component:ExplorePageComponent},
      {path:'liked', component:LikedPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
