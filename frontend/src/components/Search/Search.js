import React from 'react'
import { TextField } from '@mui/material';
import { alpha, styled } from "@mui/material/styles";
import './Search.css';


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

const Search = ({search, setSearch}) => {


  return (
    <>
      <CssTextField
        // id="standard-search"
        label="🔍 Search Images"
        type="search"
        id="custom-css-outlined-input"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default Search