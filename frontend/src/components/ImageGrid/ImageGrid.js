import React from "react";
import Image from "../Image/Image";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Skeleton,
  useMediaQuery,
  Card,
  useTheme
} from "@mui/material";

const ImageGrid = ({ images, loading }) => {
  const theme = useTheme();
  const small = useMediaQuery("(max-width:500px)");
  const medium = useMediaQuery(theme.breakpoints.down("md"));

// this ImageList MUI component maps through a list of images if the data is available
// if not available it generates a dummy list of length 10 (i.e. the number of photos on each page)
// the dummy list is used to display "skeleton" placeholders for the pictures which are loading
// the ImageListItemBar component is used to display a semi transparent bar of information including photographer name and url 

  return (
    <ImageList gap={12} cols={small ? 1 : medium ? 2 : 3}>
      {(loading ? Array.from(new Array(10)) : images).map((item, index) => (
        <Card sx={{ height: "350px" }} key={index}>
          {item ? (
            <ImageListItem sx={{ height: "100% !important" }}>
              <div>
                <Image image={item} />
                <ImageListItemBar
                  title={item.photographer}
                  subtitle={item.photographer_url}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.photographer}`}
                    ></IconButton>
                  }
                />
              </div>
            </ImageListItem>
          ) : (
            <Skeleton variant="rectangular" width={350} height={350} />
          )}
        </Card>
      ))}
    </ImageList>
  );
};

export default ImageGrid;
