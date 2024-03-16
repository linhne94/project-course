import React from 'react';

const Iframe = ({ src, width, height, title }) => {
  return (
    <iframe
      src={src}
      width={width || '100%'} 
      height={height || 400} 
      title={title || "Embedded Content"}
      frameborder="0"
    ></iframe>
  );
}

export default Iframe;
