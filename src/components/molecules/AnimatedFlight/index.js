import React from 'react';
import Icon from '../../atoms/Icon';
import styles from './styles.module.css'

const Icons = () => {
	return (
        <div className={styles.efFlightAnimation}>
            <Icon name='MdFlight' className="text-8xl rotate-45 text-primary ml-[1px] mt-[18px]" />
        </div>
	);
};

export default Icons;
