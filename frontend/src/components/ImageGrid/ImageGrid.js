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



  return (
    <ImageList gap={12} cols={small ? 1 : medium ? 2 : 3}>
      {(loading ? Array.from(new Array(10)) : images).map((item, index) => (
        <Card sx={{ height: "350px" }} >
          {item ? (
            <ImageListItem key={index} sx={{ height: "100% !important" }}>
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
