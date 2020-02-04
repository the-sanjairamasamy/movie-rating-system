
import { Action } from '@ngrx/store';
import { Movie } from '../movies/entity/movie';
import { type } from '../app-util';

export const ActionTypes = {
    LOAD: type('[Movie] -LOAD Requested-'),
    LOAD_COMPLETED: type('[Movie] -LOAD Completed-'),
    LOAD_ERROR: type('[Movie] -LOAD Error-'),

    CREATE: type('[Movie] -CREATE Requested-'),
    CREATE_COMPLETED: type('[Movie] -CREATE Completed-'),
    CREATE_ERROR: type('[Movie] -CREATE Error-'),

    UPDATE: type('[Movie] -UPDATE Requested-'),
    UPDATE_COMPLETED: type('[Movie] -UPDATE Completed-'),
    UPDATE_ERROR: type('[Movie] -UPDATE Error-'),

    REMOVE: type('[Movie] -REMOVE Requested-'),
    REMOVE_COMPLETED: type('[Movie] -REMOVE Completed-'),
    REMOVE_ERROR: type('[Movie] -REMOVE Error-')
};

export class TaskPayload {
    constructor(public task: Movie) { }
}

export class TaskUpdatePayload {
    constructor(public taskId: number, public task: Movie) { }
}

export class TaskRemovePayload {
    constructor(public taskId: number) { }
}

export class TasksPayload {
    constructor(public tasks: Movie[]) { }
}

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: any = null) { }
}

export class LoadCompletedAction implements Action {
    type = ActionTypes.LOAD_COMPLETED;

    constructor(public payload: TasksPayload) { }
}

export class LoadErrorAction implements Action {
    type = ActionTypes.LOAD_ERROR;

    constructor(public payload: string) { }
}

export class CreateAction implements Action {
    type = ActionTypes.CREATE;

    constructor(public payload: TaskPayload) { }
}

export class CreateCompletedAction implements Action {
    type = ActionTypes.CREATE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class CreateErrorAction implements Action {
    type = ActionTypes.CREATE_ERROR;

    constructor(public payload: string) { }
}

export class UpdateAction implements Action {
    type = ActionTypes.UPDATE;

    constructor(public payload: TaskUpdatePayload) { }
}

export class UpdateCompletedAction implements Action {
    type = ActionTypes.UPDATE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class UpdateErrorAction implements Action {
    type = ActionTypes.UPDATE_ERROR;

    constructor(public payload: string) { }
}

export class RemoveAction implements Action {
    type = ActionTypes.REMOVE;

    constructor(public payload: TaskRemovePayload) { }
}

export class RemoveCompletedAction implements Action {
    type = ActionTypes.REMOVE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class RemoveErrorAction implements Action {
    type = ActionTypes.REMOVE_ERROR;

    constructor(public payload: string) { }
}

export type TaskAction
    = LoadAction
    | LoadCompletedAction
    | LoadErrorAction
    | CreateAction
    | CreateCompletedAction
    | CreateErrorAction
    | UpdateAction
    | UpdateCompletedAction
    | UpdateErrorAction
    | RemoveAction
    | RemoveCompletedAction
    | RemoveErrorAction;