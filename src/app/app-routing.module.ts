import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMovieViewComponent } from './movies/components/list-movie-view/list-movie-view.component';
import { HomeComponent } from './home/components/home/home.component';


const routes: Routes = [ 
   { path:"Movies", component:ListMovieViewComponent },
   { path:"Home", component:HomeComponent },
   { path:"**", redirectTo:'Home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
