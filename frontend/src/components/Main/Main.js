import { useEffect, useState } from "react";
import Search from "../Search/Search";
import ImageGrid from "../ImageGrid/ImageGrid";
import axios from "axios";

const Main = () => {
  const [curatedPage, setCuratedPage] = useState(1);

  const getCurated = async () => {
    const images = await axios.get(
      `/api/pexels/curated?page=${curatedPage}&per_page=10`
    );
    console.log(images);
  };

  useEffect(() => {
    getCurated();
  }, []);

  return <div>Main</div>;
};

export default Main;
