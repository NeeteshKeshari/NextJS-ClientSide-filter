import React from 'react';
import Text from '../../atoms/Text';

const ToCity = ({ destination }) => {
	return (
        <Text content={destination} weight="bold" size="2xl" color='body' />
	);
};

export default ToCity;