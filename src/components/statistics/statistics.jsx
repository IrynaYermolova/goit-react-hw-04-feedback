import propTypes from 'prop-types';
import css from '../statistics/statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.statisticContainer}>
    <li className={css.statistic}>Good: {good}</li>
    <li className={css.statistic}>Neutral: {neutral}</li>
    <li className={css.statistic}>Bad: {bad}</li>
    <li className={css.statistic}>Total: {total}</li>
    <li className={css.statistic}>Positive feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
