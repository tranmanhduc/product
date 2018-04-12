import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';

class TaskFormEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false,
      price: '',
      description: ''
    }
  }

  updateInputValue = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onClearForm = () => {
    this.setState({
      id: '',
      name: '',
      status: false,
      price: '',
      description: ''
    });

  };

  onSubmitForm = (even) => {
    even.preventDefault();
    this.props.updateDataForm(this.state);
    this.onClearForm();
    // this.props.onHideFormEdit();
  };

  // Khi thay đổi prop, nhận new prop mới sẽ chạy
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.task.id,
      name: nextProps.task.name,
      status: nextProps.task.status,
      price: nextProps.task.price,
      description: nextProps.task.description
    });
  }

  onCloseForm = () => {
    this.props.onHideFormEdit();
  };

  render() {
    if (!this.props.editItem) {return ''}
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">

          <h3 className="panel-title">
            Sửa Sản Phẩm
          </h3>

        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text"
                     className="form-control"
                     name="name"
                     value={this.state.name}
                     onChange={this.updateInputValue}

              />
            </div>

            <div className="form-group">
              <label>Giá Sản Phẩm:</label>
              <input type="text"
                     className="form-control"
                     name="price"
                     value={this.state.price}
                     onChange={this.updateInputValue}
              />
            </div>

            <div className="form-group">
              <label>Mô Tả Sản Phẩm:</label>
              <input type="text"
                     className="form-control"
                     name="description"
                     value={this.state.description}
                     onChange={this.updateInputValue}
              />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control"
                    name="status"
                    required="required"
                    value={this.state.status}
                    onChange={this.updateInputValue}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>

            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Thêm</button>
              &nbsp;
              <button type="submit" onClick={this.onCloseForm} className="btn btn-danger">Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.toogleForm,
    editItem: state.editItem,
    task: state.task
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateDataForm: (task) => {
     dispatch(action.updateDataForm(task));
    },
    onHideFormEdit: () => {
      dispatch(action.hideFormEdit());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormEdit);