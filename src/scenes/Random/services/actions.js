export const RANDOM_LOAD_ITEMS = {
  REQUEST: "RANDOM_LOAD_ITEMS_REQUEST",
  SUCCESS: "RANDOM_LOAD_ITEMS_SUCCESS",
  ERROR: "RANDOM_LOAD_ITEMS_ERROR"
};

export const randomLoadItemsRequest = () => ({
  type: RANDOM_LOAD_ITEMS.REQUEST
});

export const randomLoadItemsSuccess = payload => ({
  type: RANDOM_LOAD_ITEMS.SUCCESS,
  payload
});

export const randomLoadItemsError = payload => ({
  type: RANDOM_LOAD_ITEMS.ERROR,
  payload
});
