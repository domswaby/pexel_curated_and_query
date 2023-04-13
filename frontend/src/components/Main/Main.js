import { useEffect, useState } from "react";
import Search from "../Search/Search";
import ImageGrid from "../ImageGrid/ImageGrid";
import Paginator from "../Paginator/Paginator";
import Container from "@mui/material/Container";
import axios from "axios";
import { Box } from "@mui/system";
import "./Main.css";

const Main = ({ myRef }) => {
  const [curatedPage, setCuratedPage] = useState(
    localStorage.getItem("curatedPage")
      ? Number(localStorage.getItem("curatedPage"))
      : 1
  );
  const [searchedPage, setSearchedPage] = useState(
    localStorage.getItem("searchedPage")
      ? Number(localStorage.getItem("searchedPage"))
      : 1
  );
  const [search, setSearch] = useState(
    localStorage.getItem("query")
      ? localStorage.getItem("query")
      : ""
  );
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCuratedResults, setTotalCuratedResults] = useState(0);
  const [totalSearchedResults, setTotalSearchedResults] = useState(0);

  const getCurated = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `/api/pexels/curated?page=${curatedPage}&per_page=10`
    );
    setTotalCuratedResults(data.total_results);
    setImages(data.photos);
    setLoading(false);
  };

  const getSearched = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `/api/pexels/search?page=${searchedPage}&per_page=10&query=dog`
    );
    setTotalSearchedResults(data.total_results);
    setImages(data.photos);
    console.log(data);
    setLoading(false);
  };

//   useEffect(() => {
//     localStorage.setItem("firstRender", "true");
//     let savedCuratedPage = localStorage.getItem("curatedPage") || "1";
//     localStorage.setItem("curatedPage", savedCuratedPage);
//     let savedSearchedPage = localStorage.getItem("searchedPage") || "1";
//     localStorage.setItem("searchedPage", savedSearchedPage);
//   }, []);

  useEffect(() => {
    // if (localStorage.getItem("firstRender") === "true") {
    //   localStorage.setItem("firstRender", "false");
    //   if (localStorage.getItem("query")) {
    //     getSearched(Number(localStorage.getItem("searchedPage")));
    //   } else {
    //     getCurated(Number(localStorage.getItem("curatedPage")));
    //   }
    // } else {
      if (search) {
        localStorage.setItem("query", search);
        localStorage.setItem("searchedPage", String(searchedPage));
        getSearched();
      } else {
        localStorage.setItem("query", "");
        localStorage.setItem("searchedPage", "1");
        localStorage.setItem("curatedPage", String(curatedPage));
        getCurated();
      }
    // }
  }, [search, curatedPage, searchedPage]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "12px",
      }}
    >
      <Search search={search} setSearch={setSearch} />
      <Box className="current-results-description">
        <span>
          {search
            ? `Search results page ${searchedPage}:`
            : `Curated feed page ${curatedPage}:`}
        </span>
      </Box>
      <ImageGrid images={images} loading={loading} />
      <Paginator
        search={search}
        curatedPage={curatedPage}
        searchedPage={searchedPage}
        setCuratedPage={setCuratedPage}
        setSearchedPage={setSearchedPage}
        totalCuratedResults={totalCuratedResults}
        totalSearchedResults={totalSearchedResults}
        myRef={myRef}
      />
    </Container>
  );
};

export default Main;
