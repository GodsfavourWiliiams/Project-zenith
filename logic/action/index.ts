import actionTypes from './types';

export const setCheckBox = (payload: boolean) => ({
  type: actionTypes.SET_CHECKBOX,
  payload,
});
