import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {PortalModule} from '@angular/cdk/portal';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { MoviesListViewComponent } from './movies/components/list-view/movies-list-view.component';
import { ModalPopupComponent } from './common/components/modal-popup/modal-popup.component';
import { RatingComponent } from './common/components/rating/rating.component';

import { TaskReducer } from './store/app-reducer';
import { TaskEffects } from './store/app-effects';

import { MovieService } from './movies/service/movie-services';
import { MovieStoreService } from './service/movie-store-service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesListViewComponent,
    ModalPopupComponent,
    RatingComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    PortalModule,
    StoreModule.forRoot({ movie: TaskReducer }),
    EffectsModule.forRoot([TaskEffects])
  ],
  providers: [MovieService,MovieStoreService,
    TaskEffects],
  bootstrap: [AppComponent],
  entryComponents: [ModalPopupComponent,MoviesListViewComponent] 
})
export class AppModule { }
