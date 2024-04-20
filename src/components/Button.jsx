import css from './styles.module.css'
export const Button = ({ children, onClick }) => {
  return (
    <>
      <button className={css.button} onClick={onClick}>{children}</button>
    </>
  );
};
