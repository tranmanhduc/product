import * as types from '../constants/ActionsType';

var findIndexStatus = (tasks, id) => {
  let result = -1;
  for (let task in tasks){
    if(tasks[task].id === id) {
      result = task;
    }
  }
  return result;

};

var guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
var init = JSON.parse(localStorage.getItem('tasks'));
var initalState = init ? init : [];
var id;
var index;



var myReducers = ( state = initalState, action ) => {
  switch (action.type) {
    case types.LIST_ALL: return state;

    case types.ADD_TASK:
      const newState = Object.assign([], state);
      var newTask = {
        id: guid(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
        price: action.task.price,
        description: action.task.description
      };
      newState.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(newState));

      return [...newState];

    case types.UPDATE_STATUS:
      id = action.id;
      index = findIndexStatus(state, id);
      state[index] = {
        ...state[index],
        status: !state[index].status
      };
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];

    case types.DELETE_ITEM:
      id = action.id;
      index = findIndexStatus(state, id);
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];

    case types.UPDATE_DATA_SUBMIT_FORM:
      id = action.task.id;
      index = findIndexStatus(state, id);

      var newObj = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status === 'true' || action.task.status === true ? true : false,
        price: action.task.price,
        description: action.task.description
      };
      state[index] = newObj;

      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];

    default: return state;
  }

};
export default myReducers;