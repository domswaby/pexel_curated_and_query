import { createClient } from "pexels";

const client = createClient(
  "tW63Ibum32iszaRYyxq5BNt8WlXsSuqfT0dfk03sXXacygbFRNRyexuz"
);

export const searchImages = async (req, res) => {
    let page = req.query.page || 1;
    let per_page = req.query.per_page;
    let query = req.query.query

    const photos = await client.photos.search({ query, page, per_page })
    res.json(photos);
};

export const curatedImages = async (req, res) => {
  let page = req.query.page;
  let per_page = req.query.per_page;

  const photos = await client.photos.curated({ page, per_page });
  res.json(photos);
};
