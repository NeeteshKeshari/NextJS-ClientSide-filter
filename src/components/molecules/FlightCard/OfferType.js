import React from 'react';
import Text from '../../atoms/Text';

const OfferType = ({ flightType }) => {
	return (
        <div className="rounded-2xl uppercase p-2 py-1 bg-light leading-[22px] font-semibold">
            <Text content={flightType} weight="semibold" size='xs' color='body' />
        </div>
	);
};

export default OfferType;