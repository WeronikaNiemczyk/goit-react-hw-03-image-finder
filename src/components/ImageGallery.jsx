import React from 'react';
import { nanoid } from 'nanoid';
import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <>
      <div>
        <ul className="gallery">
          {images.map(({ webformatURL }) => (
            <ImageGalleryItem key={nanoid()} imageUrl={webformatURL} />
          ))}
        </ul>
      </div>
    </>
  );
};
