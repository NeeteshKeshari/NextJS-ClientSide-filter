import React from 'react';
import styles from './styles.module.css'
const Label = ({ content, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={styles.efInputLabel}>
      {content}
    </label>
  );
};

export default Label;