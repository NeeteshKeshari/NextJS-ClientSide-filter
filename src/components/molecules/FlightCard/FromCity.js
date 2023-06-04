import React from 'react';
import Text from '../../atoms/Text';

const FromCity = ({ origin }) => {
	return (
        <Text content={origin} weight="bold" size="2xl" color='body' />
	);
};

export default FromCity;