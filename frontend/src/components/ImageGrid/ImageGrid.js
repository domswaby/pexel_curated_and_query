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
} from "@mui/material";

const ImageGrid = ({ images, loading }) => {
  //   const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ImageList sx={{ width: { md: 1000 } }} cols={3}>
      {(loading ? Array.from(new Array(10)) : images).map((item, index) => (
        <Card>
          <ImageListItem key={index} sx={{ height: "100% !important" }}>
            {item ? (
              <>
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
              </>
            ) : (
              <Skeleton variant="rectangular" />
            )}
          </ImageListItem>
        </Card>
      ))}
    </ImageList>
  );
};

export default ImageGrid;
