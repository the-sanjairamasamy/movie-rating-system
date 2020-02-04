import { Movie } from '../movies/entity/movie';
import { Action, ActionReducer } from '@ngrx/store';
import { ActionTypes, TaskAction } from './app-action';


export const TaskReducer: ActionReducer<Movie[]> = (
        state: Movie[] = [], action: TaskAction) => {

    switch (action.type) {

        case ActionTypes.LOAD_COMPLETED:
            return [...state, ...action.payload.tasks];

        case ActionTypes.CREATE_COMPLETED:
            return [...state, action.payload.task];

        case ActionTypes.UPDATE_COMPLETED:
            return state.map((task: Movie) => {
                return task.id === action.payload.task.id ? action.payload.task : task;
        });    

        case ActionTypes.REMOVE_COMPLETED:
            return state.filter((task: Movie) => {
                return task.id !== action.payload.task.id;
            });

        default:
            return state;
    }
};