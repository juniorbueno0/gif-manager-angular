import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'gifs', loadChildren:() => import('./gifs/gifs-routing.module').then(m => m.GifsRoutingModule)},
  {path:'', redirectTo:'gifs', pathMatch:'full'},
  {path:'**', redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
