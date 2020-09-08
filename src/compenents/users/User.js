import React, { Fragment, Component } from "react";
import Spinner from "./../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      company,
      website,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    return this.props.loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fa fa-check text-success"></i>
        ) : (
          <i className="fa fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "150px" }}
              alt=""
            />
            <h1>{name}</h1>
            <p>location : {location}</p>
          </div>
          <div className="">
            {bio && (
              <Fragment>
                <h3>Bio: </h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit github profile
            </a>
            <ul>
              <li>{login && <Fragment>Username: {login}</Fragment>}</li>
              <li>{company && <Fragment>Company: {company}</Fragment>}</li>
              <li>{blog && <Fragment>Blog: {blog}</Fragment>}</li>
              <li>{website && <Fragment>website: {website}</Fragment>}</li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers : {followers}</div>
          <div className="badge badge-success">Follwing : {following}</div>
          <div className="badge badge-light">Public repos : {public_repos}</div>
          <div className="badge badge-dark">Public gists : {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
