import React from 'react';
import styles from './styles.module.css'
const InputText = ({ placeholder, id, value, onChange }) => {
  return (
    <input placeholder={placeholder} className={styles.efInput} type="text" id={id} value={value} onChange={onChange} />
  );
};

export default InputText;