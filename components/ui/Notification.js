// Using CreatePortal here is more correct semantically to not just 
// dump notification in main content section but below all content

import ReactDOM from 'react-dom';

import styles from './notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusstyles = '';

  if (status === 'success') {
    statusstyles = styles.success;
  }

  if (status === 'error') {
    statusstyles = styles.error;
  }

  const cssStyles = `${styles.notification} ${statusstyles}`;

  return ReactDOM.createPortal(
    <div className={cssStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;

