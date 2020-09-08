import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, userslength, clearUsers }) => {
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
      {userslength !== 0 ? (
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
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
