import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListViewComponent } from './movies/components/list-view/movies-list-view.component';
import { HomeComponent } from './home/components/home/home.component';



const routes: Routes = [ 
  { path:"Rating", component:HomeComponent },
   { path:"Home", component:HomeComponent },
   { path:"**", redirectTo:'Home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
