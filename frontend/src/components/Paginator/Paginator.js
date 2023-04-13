import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Paginator.css"

const Paginator = ({ search, curatedPage, searchedPage, setCuratedPage, setSearchedPage, myRef }) => {

  const changePage = (e, pageNumber) => {
    if (search) {
      setSearchedPage(pageNumber);
    } else {
      setCuratedPage(pageNumber);
    }
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Stack spacing={2} className="paginator-stack">
      <Pagination
        count={10}
        page={search ? searchedPage : curatedPage}
        color="secondary"
        onChange={changePage}
        size="large"
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default Paginator;
