import style from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={style.statistics}>
    <h2 className={style.title}>Statistics</h2>
    <ul className={style.statList}>
      {good === 0 ? null : <li className={style.good}>Good: {good}</li>}
      {neutral === 0 ? null : (
        <li className={style.neutral}>Neutral: {neutral}</li>
      )}
      {bad === 0 ? null : <li className={style.bad}>Bad: {bad}</li>}
      {total === 0 ? null : <li className={style.total}>Total: {total}</li>}
      {positivePercentage !== 0 ? null : (
        <li className={style.positiveFeedback}>
          Positive feedback: {positivePercentage}%
        </li>
      )}
    </ul>
  </div>
);
export default Statistics;
