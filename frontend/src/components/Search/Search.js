import React from 'react'
import { TextField } from '@mui/material';
import { styled } from "@mui/material/styles";
import './Search.css';
import {debounce} from "lodash";

// these styles are used to override the default MUI text field input styles
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#282c34",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#282c34",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#282c34",
    },
    "&:hover fieldset": {
      borderColor: "#282c34",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#282c34",
    },
  },
  color: "#282c34",
  width: "100%"
});

const Search = ({search, setSearch, setSearchedPage}) => {

    // this search input is debounced to avoid an unnecessary number of network requests being sent
    const debouncedSearch = debounce((val) => {
        setSearch(val)
        setSearchedPage(1)
    }, 500)

  return (
    <>
      <CssTextField
        label="🔍 Search Images"
        type="search"
        id="custom-css-outlined-input"
        defaultValue={search}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </>
  );
}

export default Search