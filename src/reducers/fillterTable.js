import * as types from '../constants/ActionsType';

var initalState = {
  name: '',
  status: -1
};
var myReducers = ( state = initalState, action ) => {

  switch (action.type) {
    case types.FILLTER_TABLE:
      return {
        name: action.fillterTable.name,
        status: parseInt(action.fillterTable.status, 10)
      };
    default: return state;
  }


};
export default myReducers;