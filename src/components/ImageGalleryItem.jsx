import css from './styles.module.css';
export const ImageGalleryItem = ({ imageUrl, tags, onClick }) => {
  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={imageUrl}
          alt={tags}
          onClick={onClick}
        />
      </li>
    </>
  );
};
