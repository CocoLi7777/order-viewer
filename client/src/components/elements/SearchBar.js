import React, { useRef, useState } from 'react';
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  // useRef() to keep the mutable value like setTimeout and setInterval
  const timeOut = useRef();

  const searchItem = (e) => {
    //console.log(e.target.value);
    setState(e.target.value);
    clearTimeout(timeOut.current);

    //console.log(state);
    timeOut.current = setTimeout(() => {
      callback(state);
    }, 1000);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <input
          name="search"
          type="text"
          placeholder="Search order"
          onChange={searchItem}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
