import { useEffect, useState } from "react";
import Search from "../Search/Search";
import ImageGrid from "../ImageGrid/ImageGrid";
import Paginator from "../Paginator/Paginator";
import Container from "@mui/material/Container";
import axios from "axios";

const Main = ({ myRef }) => {
  const [curatedPage, setCuratedPage] = useState(1);
  const [searchedPage, setSearchedPage] = useState(1);
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurated = async () => {
    setLoading(true);
    const {
      data: { photos },
    } = await axios.get(`/api/pexels/curated?page=${curatedPage}&per_page=10`);
    setImages(photos);
    setLoading(false);
    console.log(photos);
  };

  const getSearched = async () => {
    setLoading(true);
    const {
      data: { photos },
    } = await axios.get(
      `/api/pexels/search?page=${searchedPage}&per_page=10&query=dog`
    );
    setImages(photos);
    console.log(photos);
    setLoading(false);
  };

  useEffect(() => {
    if (search) {
      setSearchedPage(1);
      getSearched();
    } else {
      getCurated();
    }
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
      <ImageGrid images={images} loading={loading} />
      <Paginator
        search={search}
        curatedPage={curatedPage}
        searchedPage={searchedPage}
        setCuratedPage={setCuratedPage}
        setSearchedPage={setSearchedPage}
        myRef={myRef}
      />
    </Container>
  );
};

export default Main;
