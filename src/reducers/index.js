import {combineReducers} from 'redux';
import tasks from './tasks';
import toogleForm from './toogleForm';
import editItem from './formEdit';
import task from './task';
import fillterTable from './fillterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
  tasks: tasks,
  toogleForm: toogleForm,
  editItem: editItem,
  task: task,
  fillterTable: fillterTable,
  search: search,
  sort: sort
});

export default myReducer;