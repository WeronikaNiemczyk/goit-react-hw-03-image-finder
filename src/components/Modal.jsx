import * as basicLightbox from 'basiclightbox';

export const Modal = () => {
  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

  instance.show();
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};
