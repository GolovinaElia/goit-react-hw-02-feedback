// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './Counter.module.css';
class Counter extends Component {
    // static defaultProps = {
    // good: 0,
    // neutral: 0,
    // bad: 0,
    // };
// static propTypes = {
    //     good: PropTypes.number,
    //     neutral: PropTypes.number,
    //     bad: PropTypes.number
    //     };
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrementGood = () => {
        this.setState(prevState => ({
        good: prevState.good + 1,
        }))
    };

    handleIncrementNeutral = () => {
        this.setState(prevState => ({
        neutral: prevState.neutral + 1,
        }))
    };

     handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    };

    // countTotalFeedback(total) {
    //    const total = good + neutral + bad;
    // };

    // countPositiveFeedbackPercentage(positiveFeedback) {
    //     const positiveFeedback = Math.round(good * 100 / total);
    // };

    render() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positiveFeedback = Math.round(good * 100 / total);

    return (
        <div className={style.counter}>
            <h2 className={style.title}>Please leave feedback</h2>
            <button className={style.button} type='button' onClick={this.handleIncrementGood}>Good</button>
            <button className={style.button} type='button' onClick={this.handleIncrementNeutral}>Neutral</button>
            <button className={style.button} type='button' onClick={this.handleIncrementBad}>Bad</button>
       <div className={style.statistics}>
        <h2 className={style.title}>Statistics</h2>
        <ul className={style.statList}>
                <li className={style.good}>Good: {good}</li>
                <li className={style.neutral}>Neutral: {neutral}</li>
                <li className={style.bad}>Bad: {bad}</li>
                <li className={style.total}>Total: {total}</li>
                <li className={style.positiveFeedback}>Positive feedback: {positiveFeedback}%</li>
        </ul>
            </div>
            </div>
);
    }

}

export default Counter;