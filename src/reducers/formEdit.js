import * as types from '../constants/ActionsType';

var initalState = false;

var myReducers = ( state = initalState, action ) => {
  switch (action.type) {
    case types.EDIT_ITEM: return true;
    case types.HIDE_FORM_EDIT: return false;
    default: return state;
  }
};
export default myReducers;