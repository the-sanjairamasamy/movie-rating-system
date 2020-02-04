import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as taskActions from '../store/app-action';
import { Movie } from '../movies/entity/movie';
import { Observable } from 'rxjs';

@Injectable()
export class MovieStoreService {

  tasks$: Observable<Movie[]>;

  constructor(
    private store: Store<any>
  ) {
    this.tasks$ = store.select('movie') as Observable<Movie[]>;
    store.dispatch(new taskActions.LoadAction());
  }

  createTask(title: string,rating:number,review:string) {
    this.store.dispatch(
      new taskActions.CreateAction(new taskActions.TaskPayload(new Movie(-1,title,rating,review)))
    );
  }

  updateTask(item: Movie, updates: any) {
    this.store.dispatch(
      new taskActions.UpdateAction(new taskActions.TaskUpdatePayload(item.id, updates))
    );
  }

  removeTask(item: Movie) {
    this.store.dispatch(
      new taskActions.RemoveAction(new taskActions.TaskRemovePayload(item.id))
    );
  }
}