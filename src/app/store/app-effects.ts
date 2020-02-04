import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Movie } from '../movies/entity/movie';
import * as taskActions from './app-action';
import { MovieService } from '../movies/service/movie-services';


@Injectable()
export class TaskEffects {

    constructor(
        private api: MovieService,
        private actions$: Actions
    ) { }

    @Effect()
    loadAction$ = this.actions$.pipe(
      ofType(taskActions.ActionTypes.LOAD),
      switchMap((action: taskActions.LoadAction) =>
        this.api
          .getAllMovies()
          .pipe(
            map(
              (moviedata: Movie[]) => new taskActions.LoadCompletedAction({tasks: moviedata}),
              catchError(error => of(new taskActions.LoadErrorAction(error)))
            )
         )
      )
    );


    // @Effect()
    // createAction$: Observable<Action> = this.actions$.pipe(
    //     ofType(taskActions.ActionTypes.CREATE)
    //     .map(action => action.payload.task)
    //     .switchMap(payload => this.api.createTask(payload)
    //         .map(res => new taskActions.CreateCompletedAction({task: res}))
    //         .catch(() => Observable.of({ type: taskActions.ActionTypes.CREATE_ERROR })))
    // );

    @Effect()
    createAction$ = this.actions$.pipe(
      ofType(taskActions.ActionTypes.CREATE),
      switchMap((action: taskActions.CreateAction) =>
        this.api
          .createMovie(action.payload.task)
          .pipe(
            map(
              (moviedata: Movie) => new taskActions.CreateCompletedAction({task: moviedata}),
              catchError(error => of(new taskActions.CreateErrorAction(error)))
            )
         )
    )
);
    @Effect()
    updateAction$ = this.actions$.pipe(
        ofType(taskActions.ActionTypes.UPDATE),
        switchMap((action: taskActions.UpdateAction) =>
            this.api
                .updateMovie(action.payload.task)
                .pipe(
                    map(
                        (moviedata: Movie) => new taskActions.UpdateCompletedAction({ task: moviedata }),
                        catchError(error => of(new taskActions.UpdateErrorAction(error)))
                    )
                )
        )
    );

    @Effect()
    removeAction$ = this.actions$.pipe(
        ofType(taskActions.ActionTypes.REMOVE),
        switchMap((action: taskActions.RemoveAction) =>
            this.api
                .deleteMovie(action.payload.taskId)
                .pipe(
                    map(
                        (moviedata: Movie) => new taskActions.RemoveCompletedAction({ task: moviedata }),
                        catchError(error => of(new taskActions.RemoveErrorAction(error)))
                    )
                )
        )
    );
}