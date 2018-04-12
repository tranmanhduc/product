import React, {Component} from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TaskList extends Component {

  constructor(props){
    super(props);
    // Gán defaut giá trị dùng để search kết quả
    this.state = {
      fillterName: '',
      fillterStatus: -1
    };
  }
  fillterResult = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    let objFilleter = {
      name:  name === "fillterName" ? value : this.state.fillterName,
      status: name === "fillterStatus" ? value : this.state.fillterStatus
    };

    this.props.onFillterTable(objFilleter);
    this.setState({
      [name]: value
    });
  };
  render() {

    var tasks = this.props.tasks;
    var taskCompare;
    var fillterOnCLick = this.props.fillterOnCLick;
    var sortOnClick = this.props.sortOnClick;

    if (this.props.fillterSearch.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(this.props.fillterSearch.name.toLowerCase()) !== -1;
      });
    }
    tasks = tasks.filter((task) => {
      if (this.props.fillterSearch.status === -1) {
        return true;
      } else {
        taskCompare = task.status ? 1 : 0;
        return taskCompare === this.props.fillterSearch.status;
      }
    });

    if (fillterOnCLick) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(this.props.fillterOnCLick.toLowerCase()) !== -1;
      });
    }
    var value = sortOnClick.value;
    if (sortOnClick.type === 'name' ) {
      tasks.sort(function (a, b) {
        if (a.name > b.name) {
          return -value;
        }
        if (a.name < b.name) {
          return value;
        }
        return 0;
      })
    }

    if (sortOnClick.type === 'status') {
      tasks.sort(function (a, b) {
        if (a.status > b.status) {
          return value;
        }
        if (a.status < b.status) {
          return -value;
        }
        return 0;
      });
    }

    return (
      <table className="table table-bordered table-hover">
        <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Giá</th>
          <th className="text-center">Mô Tả</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td />
          <td>
            <input
              onChange={this.fillterResult}
              type="text" className="form-control" name="fillterName" value={this.state.fillterName}/>
          </td>
          <td></td>
          <td></td>
          <td>
            <select
              onChange={this.fillterResult}
              className="form-control" name="fillterStatus" value={this.state.fillterStatus}>
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td />
        </tr>
        {/*Task item*/}
        {
          tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              onUpdateStatus={this.props.onUpdateStatus}
              onDeleteItem={this.props.onDeleteItem}
              editItem={this.props.editItem}
              index={index} />
          ))
        }

        {/*Task item*/}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    fillterSearch: state.fillterTable,
    fillterOnCLick: state.search,
    sortOnClick: state.sort
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFillterTable: (fillterTable) => {
      dispatch(action.fillterChangeTable(fillterTable));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);