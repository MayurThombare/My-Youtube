import hamburgerImg from "../assets/hamburger.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!searchQuery) return; // 🚀 stop empty calls

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    // make an api call after every keypress
    // but if difference between 2 api calls is less than < 200 ms
    // Decline the api call

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Api call for search suggestions " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };
  return (
    <div className="grid grid-flow-col p-2 my-2 shadow-lg">
      <div className="flex justify-center col-span-1 gap-10 items-center">
        <img
          className="h-8"
          src={hamburgerImg}
          onClick={handleSidebarToggle}
          alt=""
        />
        <img
          className="h-12"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          type="text"
          name=""
          id=""
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100 mt-12 ml-60 w-[35%]">
          <ul>
            {suggestions.map((suggestion) => (
              <li className="py-2 px-3 shadow-sm border border-gray-100">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                {suggestion}{" "}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <img
          className="h-8"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
