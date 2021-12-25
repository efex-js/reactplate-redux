import { SET_LOADING_DATA } from './contants';

export const setLoadingData = (loading) => ({
  type: SET_LOADING_DATA,
  payload: loading,
});
