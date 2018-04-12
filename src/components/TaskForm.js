import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false,
      price: '',
      description: ''
    };
  }

  updateInputValue = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.onAddTask(this.state);
    this.onClearForm();
    this.onCloseForm();
  };


  onCloseForm = () => {
    this.props.onHideForm();
  };

  onClearForm = () => {
    this.setState({
      name: '',
      status: false,
      price: '',
      description: ''
    });
  };

  render() {
    if (!this.props.isDisplayForm){ return ''}

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">

          <h3 className="panel-title" onClick={this.onCloseForm}>
            Thêm Sản phẩm
          </h3>

        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <label>Tên Sản Phẩm:</label>
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
              <button type="button" onClick={this.onCloseForm} className="btn btn-danger">Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.toogleForm
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task));
    },
    onHideForm: () => {
      dispatch(action.hideForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);