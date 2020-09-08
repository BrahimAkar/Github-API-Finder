import React, { Component } from "react";
import PropTypes from "prop-types";
export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    const { userslength, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            required
            name="text"
            placeholder="Search"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
        {userslength !== 0 ? (
          <button onClick={clearUsers} className="btn btn-success btn-block">
            Clear
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Search;
