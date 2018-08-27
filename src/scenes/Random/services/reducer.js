import * as actions from "./actions";

const defaultState = {
  loading: false,
  error: null,
  item: null
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.RANDOM_LOAD_ITEMS.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case actions.RANDOM_LOAD_ITEMS.SUCCESS: {
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    }

    case actions.RANDOM_LOAD_ITEMS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  }

  return state;
};
