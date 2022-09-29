import React, { useState } from "react";
import "../css/Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigation = useNavigate();

  function search(event) {
    event.preventDefault();
    dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input });
    navigation("/search");
  }
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          className="search__input--field"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            type="submit"
            onClick={(event) => search(event)}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__button--hidden"
            type="submit"
            onClick={(event) => search(event)}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__button--hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
