import React, { useState } from "react";
import Icon from '../../atoms/Icon';
import InputText from '../../atoms/InputText';
import Label from '../../atoms/Label';
import styles from './styles.module.css'
const InputField = ({ placeholder, id, value, onChange, labelContent, name, labelFor}) => {
	return (
        <div className="flex flex-col min-w-[180px] w-full">
            <div className={styles.efInputWrapper}>
                <Label htmlFor={labelFor} content={labelContent} />
                <InputText placeholder={placeholder} className={styles.efInput} type="text" id={id} value={value} onChange={onChange} />
                <Icon name={name} className={styles.efInputIcon} />
            </div>
        </div>
	);
};

export default InputField;