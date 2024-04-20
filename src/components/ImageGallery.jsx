import React from 'react';
import { nanoid } from 'nanoid';
import { ImageGalleryItem } from './ImageGalleryItem';
import css from './styles.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <div>
        <ul className={css.imageGallery}>
          {images.map(({ webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={nanoid()}
              imageUrl={webformatURL}
              onClick={() => onImageClick(largeImageURL)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
