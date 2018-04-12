import React, {Component} from 'react';
import * as action from '../actions/index';
import {connect} from 'react-redux';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  searchInput = (event) => {
    let target = event.target;
    let value = target.value;
    this.setState({
      searchInput: value
    });

  };

  searchText = () => {
    let value = this.state.searchInput;
    this.props.onSerachClick(value);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input type="text"
                 className="form-control"
                 onChange={this.searchInput}
                 value={this.state.searchInput}
                 placeholder="Nhập từ khóa..." />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              onClick={this.searchText}
              type="button">
              <span className="fa fa-search mr-5" />Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {

  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSerachClick: (fillter) => {
      dispatch(action.searchTop(fillter));
    }


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);