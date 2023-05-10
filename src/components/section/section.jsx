import propTypes from 'prop-types';
import css from '../section/sectionTitle.module.css';

export function Section({ title, children }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
