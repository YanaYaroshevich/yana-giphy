import { combineEpics } from "redux-observable";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as actions from "./actions";

export const randomLoadItems = (action$, store, { api }) =>
  action$.ofType(actions.RANDOM_LOAD_ITEMS.REQUEST).pipe(
    switchMap(action => {
      return api.random().pipe(
        map(({ response }) => {
          return actions.randomLoadItemsSuccess(response.data);
        }),
        catchError(error => {
          return of(actions.randomLoadItemsError(error));
        })
      );
    })
  );

export default combineEpics(randomLoadItems);
