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

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
