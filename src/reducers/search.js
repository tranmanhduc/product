import * as types from '../constants/ActionsType';

var initalState = '';
var myReducers = ( state = initalState, action ) => {
  switch (action.type) {
    case types.SEARCH_TOP:
      return action.fillter;
    default: return state;
  }

};
export default myReducers;