import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setsearchstr] = useSearchStr();
  const [searchOption,setSearchOption] = useState("shows");

 
  

  const onSearchInputChange = (ev) => {
    setsearchstr(ev.target.value);
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

 

  const onSubmit = (ev) => {
    ev.preventDefault();
    const options = {
        q: searchStr,
        searchOption
      };
    onSearch(options);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input type="text" onChange={onSearchInputChange} value={searchStr} />

      <label htmlFor="">
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={onRadioChange}
        />
      </label>
      <label htmlFor="">
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === "actors"}
          onChange={onRadioChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
