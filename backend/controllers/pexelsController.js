import { createClient } from "pexels";

// this route wraps the Pexels search for photos route (e.g. https://api.pexels.com/v1/search?query=nature&per_page=1) using the Pexels JS client
// this route gets all images matching the user's search input and page
export const searchImages = async (req, res) => {
  const client = createClient(`${process.env.PEXELS_KEY}`);
  
  // default to page #1 if page not provided
  let page = req.query.page || 1;
  let per_page = req.query.per_page;
  let query = req.query.query;

  const photos = await client.photos.search({ query, page, per_page });
  res.json(photos);
};

// this route wraps the Pexels curated photos route (e.g. https://api.pexels.com/v1/curated?per_page=1) using the Pexels JS client
// this route gets curated images based on the user's current page 
export const curatedImages = async (req, res) => {
  const client = createClient(`${process.env.PEXELS_KEY}`);
  
  let page = req.query.page;
  let per_page = req.query.per_page;

  const photos = await client.photos.curated({ page, per_page });
  res.json(photos);
};
