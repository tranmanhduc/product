import * as types from '../constants/ActionsType';

var initalState = {};
var myReducers = ( state = initalState, action ) => {
  switch (action.type) {
    case types.EDIT_SHOW_DATA_ITEM:
      return action.task;
    default: return state;
  }

};
export default myReducers;