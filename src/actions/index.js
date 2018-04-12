import * as types from '../constants/ActionsType';
export const listAll = () => {
  return {
    type: types.LIST_ALL
  };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task: task
  }
};

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS,
    id: id
  }
};

export const toogleForm = () => {
  return {
    type: types.TOOGLE_FORM
  };
};

export const hideForm = () => {
  return {
    type: types.HIDE_FORM
  }
};

export const deleteItem = (id) => {
  return {
    type: types.DELETE_ITEM,
    id: id
  };
};

export const showFormEdit = () => {
  return {
    type: types.EDIT_ITEM
  }
};

export const hideFormEdit = () => {
  return {
    type: types.HIDE_FORM_EDIT
  }
};

export const showDataToForm = (task) => {
  return {
    type: types.EDIT_SHOW_DATA_ITEM,
    task: task
  }
};

export const updateDataForm = (task) => {
  return {
    type: types.UPDATE_DATA_SUBMIT_FORM,
    task: task
  }
};

export const fillterChangeTable = (fillterTable) => {
  return {
    type: types.FILLTER_TABLE,
    fillterTable: fillterTable
  };
};

export const searchTop = (fillter) => {
  return {
    type: types.SEARCH_TOP,
    fillter: fillter
  };
};

export const sortTop = (sortObj) => {
  return {
    type: types.SORT_TOP,
    sortObj: sortObj
  };
};
