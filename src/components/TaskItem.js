import React, { Component } from 'react';
import * as action from '../actions/index';
import { connect } from 'react-redux';

class TaskItem extends Component {

  handleUpdateStatus = (id) => {
    this.props.onUpdateStatus(id);
  };

  onDeleteItem = (id) => {
    this.props.onDeleteItem(id);
  };
  editItem = (task) => {
   // show form
    this.props.onHideForm();
    this.props.onShowFormEdit();
   // fill data enter form
    this.props.onShowDataToForm(task);
  };

  render() {
    let { task, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td>{task.price}</td>
        <td>{task.description}</td>
        <td className="text-center">
          <span
            className={task.status ? 'label label-danger' : 'label label-success'}
            onClick={() => {
              this.handleUpdateStatus(task.id);
            }}
          >
            {task.status ? 'Kích Hoạt' : 'Ẩn'}
          </span>
        </td>
        <td className="text-center">
          <button
            onClick={() => {this.editItem(task)}}
            type="button"
            className="btn btn-warning">
            <span className="fa fa-pencil mr-5" />Sửa
          </button>
          &nbsp;

          <button type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.onDeleteItem(task.id);
                  }}
          >
            <span className="fa fa-trash mr-5" />Xóa
          </button>

        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(action.updateStatus(id));
    },
    onDeleteItem: (id) => {
      dispatch(action.deleteItem(id));
    },

    onHideForm: () => {
      dispatch(action.hideForm());
    },
    onShowFormEdit: () => {
     dispatch(action.showFormEdit());
    },
    onShowDataToForm: (task) => {
      dispatch(action.showDataToForm(task));
    }


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);