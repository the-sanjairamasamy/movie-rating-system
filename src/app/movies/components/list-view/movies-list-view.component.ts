import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Movie } from '../../entity/movie';

import { MovieStoreService } from 'src/app/service/movie-store-service';


@Component({
  selector: 'app-list-movie-view',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.css']

})

export class MoviesListViewComponent implements OnInit {

  items$: Observable<Movie[]>;
  MoviesSubscription: Subscription;
  MovieList: Movie[] = [];
  constructor(private movieStoreService: MovieStoreService) {
  }

  ngOnInit() {
    this.items$ = this.movieStoreService.tasks$;
     this.MoviesSubscription = this.items$
      .pipe(
         map(x => {
           this.MovieList = x;
         })
       )
       .subscribe();
  }

  updateRating($event: any) {
    var foundIndex = this.MovieList.findIndex(x => x.id == $event.itemId);
    var item = this.MovieList[foundIndex];
    this.MovieList[foundIndex].rating = $event.rating;
    this.MovieList[foundIndex].review = $event.review;
    this.MovieList[foundIndex].modified = new Date();
    this.movieStoreService.updateTask(item, $event);
  }

  ngOnDestroy() {
    if (this.MoviesSubscription) {
      this.MoviesSubscription.unsubscribe();
    }
  }

}
