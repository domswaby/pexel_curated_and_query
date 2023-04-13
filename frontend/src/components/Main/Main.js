import { useEffect, useState } from "react";
import Search from "../Search/Search";
import ImageGrid from "../ImageGrid/ImageGrid";
import Container from "@mui/material/Container";
import axios from "axios";

const Main = () => {
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
      getSearched();
    } else {
      getCurated();
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <Search />
      <ImageGrid images={images} loading={loading} />
    </Container>
  );
};

export default Main;
