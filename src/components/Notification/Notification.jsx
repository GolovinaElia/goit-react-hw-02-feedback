// import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <div className={styles.notification}>
    {message ? <p className={styles.notificate}>{message}</p> : null}
  </div>
);

// Notification.propTypes = {
//   text: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['success', 'error']),
// };

export default Notification;
