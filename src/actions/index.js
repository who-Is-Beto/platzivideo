/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multi-assign */
export const setFavorite = (payLoad) => ({
  type: 'SET_FAVORITE',
  payLoad,
});

export const deleteFavorite = (payLoad) => ({
  type: 'DELETE_FAVORITE',
  payLoad,
});

export const loginRequest = (payLoad) => ({
  type: 'LOGIN_REQUEST',
  payLoad,
});
