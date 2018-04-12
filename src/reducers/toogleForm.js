import * as types from '../constants/ActionsType';

var initalState = false;

var myReducers = ( state = initalState, action ) => {
  switch (action.type) {
    case types.TOOGLE_FORM: return !state;
    case types.HIDE_FORM: return false;
    default: return state;
  }
};
export default myReducers;