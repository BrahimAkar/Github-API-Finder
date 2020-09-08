import React, { Component } from "react";
import "./App.css";
import Navbar from "./compenents/layout/Navbar";
import Users from "./compenents/users/Users";
import Search from "./compenents/users/Search";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ loading: false, users: res.data });
  // }

  // Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar title=" Github finder" icon="fab fa-github" />
        <Search
          userslength={users.length}
          clearUsers={this.clearUsers}
          searchUsers={this.searchUsers}
        />

        <div className="container">
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
