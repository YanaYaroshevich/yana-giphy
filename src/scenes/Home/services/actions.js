export const HOME_LOAD_ITEMS = {
  REQUEST: "HOME_LOAD_ITEMS_REQUEST",
  SUCCESS: "HOME_LOAD_ITEMS_SUCCESS",
  ERROR: "HOME_LOAD_ITEMS_ERROR"
};

export const homeLoadItemsRequest = () => ({
  type: HOME_LOAD_ITEMS.REQUEST
});

export const homeLoadItemsSuccess = payload => ({
  type: HOME_LOAD_ITEMS.SUCCESS,
  payload
});

export const homeLoadItemsError = payload => ({
  type: HOME_LOAD_ITEMS.ERROR,
  payload
});
