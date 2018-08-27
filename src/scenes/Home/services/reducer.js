import * as actions from "./actions";

const defaultState = {
  loading: false,
  error: null,
  items: null
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.HOME_LOAD_ITEMS.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case actions.HOME_LOAD_ITEMS.SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    }

    case actions.HOME_LOAD_ITEMS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  }

  return state;
};
