import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import TaskFormEdit from './components/TaskFormEdit';
import * as action from './actions/index';
import {connect} from 'react-redux';

class App extends Component {

  toogleForm = () => {
    this.props.onToogleForm();
    this.props.onHideFormEdit();
  };


  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Sản phẩm</h1>
          <hr />
        </div>
        <div className="row">

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/*Task form*/}
            <TaskForm />
            {/*Task form*/}
            <TaskFormEdit />
          </div>

          {/*{checkShowFormEdit}*/}

          <div
            className={this.props.isDisplayForm || this.props.editDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button onClick={this.toogleForm} type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />Thêm Sản Phẩm
            </button>

            {/*Control*/}
            <Control
              sortFillter={this.sortFillter}
              searchInput={this.searchInput} />
            {/*Control*/}

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/*Task list*/}
                <TaskList
                  fillterTask={this.fillterTask}
                  onUpdateStatus={this.onUpdateStatus}
                  onDeleteItem={this.onDeleteItem}
                  editItem={this.editItem}
                />
                {/*Task list*/}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.toogleForm,
    editDisplayForm: state.editItem
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToogleForm: () => {
      dispatch(action.toogleForm());
    },
    onHideFormEdit: () => {
      dispatch(action.hideFormEdit());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
