import React, {Component} from 'react';
import * as action from '../actions/index';
import {connect} from 'react-redux';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'name',
      value: 1

    };
  }

  sortData = (type, value) => {
    this.setState({
      type: type,
      value: value
    });
    var obj = {
      type: type,
      value: value
    };
    this.props.onSearchTop(obj);

  };

  render() {
    var {type, value } = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button"
                  id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="true">
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.sortData('name', 1)} className={type === 'name' && value === 1 ? 'sort_selected' : ''}>
              <a role="button">
                <span className="fa fa-sort-alpha-asc pr-5 ">
                  Tên A-Z
                </span>
              </a>
            </li>
            <li onClick={() => this.sortData('name', -1)} className={type === 'name' && value === -1 ? 'sort_selected' : ''}>
              <a role="button">
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={() => this.sortData('status', -1)} className={type === 'status' && value === -1 ? 'sort_selected' : ''}>
              <a role="button">Trạng Thái Kích Hoạt</a>
            </li>
            <li className={type === 'status' && value === 1 ? 'sort_selected' : ''}>
              <a role="button" onClick={() => this.sortData('status', 1)}>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {

  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearchTop : (sortObj) => {
      dispatch(action.sortTop(sortObj));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Sort);