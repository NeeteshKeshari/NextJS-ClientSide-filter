import React from 'react';
import Text from '../../atoms/Text';

const Price = ({ amount }) => {
	return (
        <Text content={amount} weight="bold" size="base" color='primary' />
	);
};

export default Price;