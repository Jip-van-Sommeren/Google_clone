import React from "react";
import "../css/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import GoogleLogo from "../assets/Google_logo.png";
import { Link } from "react-router-dom";
import Search from "../components/Search";

import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
  const [{ term = "tesla" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // Live API CALL
  //   const data = Response;
  //   console.log(data);
  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <img src={GoogleLogo} alt="" className="search-page__logo" />
        </Link>
        <div className="search-page__header--body">
          <Search hideButtons />
          <div className="search-page__options">
            <div className="search-page__options--left">
              <div className="search-page__option">
                <Link to="/all">
                  <SearchIcon />
                  All
                </Link>
              </div>
              <div className="search-page__option">
                <Link to="/images">
                  <ImageIcon />
                  Images
                </Link>
              </div>
              <div className="search-page__option">
                <Link to="/news">
                  <NewspaperIcon />
                  News
                </Link>
              </div>

              <div className="search-page__option">
                <Link to="/shopping">
                  <LocalOfferIcon />
                  Shopping
                </Link>
              </div>
              <div className="search-page__option">
                <Link to="/maps">
                  <FmdGoodOutlinedIcon />
                  Maps
                </Link>
              </div>
              <div className="search-page__option">
                <Link to="/more">
                  <MoreVertIcon />
                  More
                </Link>
              </div>
            </div>
            <div className="search-page__options--right">
              <div className="search-page__option">
                <Link to="/setting">Settings</Link>
              </div>
              <div className="search-page__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="search-page__results">
          <p className="search-page__result--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item) => (
            <div>
              <div className="search-page__result">
                <div className="search-page__result--anchor-wrapper">
                  <a className="search-page__result--anchor" href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="search-page__result--img"
                          src={
                            item.pagemap?.cse_image?.length > 0 &&
                            item.pagemap?.cse_image[0]?.src
                          }
                          alt=""
                        />
                      )}
                    {item.displayLink}{" "}
                    <span className="search-page__result--span">▼</span>
                  </a>
                  <a className="search-page__result--title" href={item.link}>
                    <h2>{item.title}</h2>{" "}
                  </a>
                </div>

                <p className="search-page__result--snippet">{item.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
