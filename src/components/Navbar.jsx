import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/searched/${movieName}`);
    setMovieName("");
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }
  return (
    <div className="navbar">
      <p
        className="heading"
        onClick={() => {
          navigate("/");
        }}
      >
        MovieDb
      </p>
      <div className="nav-links">
        <NavLink to="/">Popular</NavLink>
        <NavLink to="/top-rated">Top Rated</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="Movie Name"
            value={movieName}
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
