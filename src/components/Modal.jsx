import css from './styles.module.css';

export const Modal = ({ largeImageUrl, onClose }) => {
  return (
    <>
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageUrl} alt="img" onClick={onClose} />
        </div>
      </div>
    </>
  );
};
