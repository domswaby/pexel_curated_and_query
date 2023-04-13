import React from 'react'

const Image = ({image}) => {

  return (
    
      <img
        style={{width: "100%", height: "auto"}}
        alt={image.alt}
        src={image.src.large}
      />
    
  );
}

export default Image