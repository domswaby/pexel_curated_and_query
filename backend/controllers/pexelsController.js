import { createClient } from "pexels";

export const searchImages = async (req, res) => {
  const client = createClient(`${process.env.PEXELS_KEY}`);
  
  let page = req.query.page || 1;
  let per_page = req.query.per_page;
  let query = req.query.query;

  const photos = await client.photos.search({ query, page, per_page });
  res.json(photos);
};

export const curatedImages = async (req, res) => {
  const client = createClient(`${process.env.PEXELS_KEY}`);
  
  let page = req.query.page;
  let per_page = req.query.per_page;

  const photos = await client.photos.curated({ page, per_page });
  res.json(photos);
};
