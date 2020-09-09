import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const { searchUsers, clearUsers } = githubContext;
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);

    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          required
          name="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length !== 0 ? (
        <button onClick={clearUsers} className="btn btn-success btn-block">
          Clear
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
