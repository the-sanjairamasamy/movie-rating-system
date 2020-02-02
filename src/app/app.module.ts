import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/components/home/home.component';
import { ListMovieViewComponent } from './movies/components/list-movie-view/list-movie-view.component';
import { MovieService } from './movies/service/movie-services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListMovieViewComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
