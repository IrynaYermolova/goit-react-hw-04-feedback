import propTypes from 'prop-types';
import css from '../section/sectionTitle.module.css';

export function Title({ title }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
}
Title.propTitle = {
  title: propTypes.string.isRequired,
};
