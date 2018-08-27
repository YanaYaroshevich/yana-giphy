import { combineEpics } from "redux-observable";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as actions from "./actions";

export const homeLoadItems = (action$, store, { api }) =>
  action$.ofType(actions.HOME_LOAD_ITEMS.REQUEST).pipe(
    switchMap(action => {
      return api.home().pipe(
        map(({ response }) => {
          return actions.homeLoadItemsSuccess(response.data);
        }),
        catchError(error => {
          return of(actions.homeLoadItemsError(error));
        })
      );
    })
  );

export default combineEpics(homeLoadItems);
