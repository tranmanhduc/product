import * as types from '../constants/ActionsType';

var initalState = {
  type: 'name',
  value: 1
};
var myReducers = ( state = initalState, action ) => {
  switch (action.type) {
    case types.SORT_TOP:
      return action.sortObj;
    default: return state;
  }

};
export default myReducers;