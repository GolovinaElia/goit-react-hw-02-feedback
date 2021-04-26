import style from './FeedbackOption.module.css';
const FeedbackOption = ({
  onLeaveFeedback,
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <div className={style.feedbackOptions}>
    <h2 className={style.title}>{onLeaveFeedback}</h2>
    <button className={style.button} type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button className={style.button} type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button className={style.button} type="button" onClick={onIncrementBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOption;
