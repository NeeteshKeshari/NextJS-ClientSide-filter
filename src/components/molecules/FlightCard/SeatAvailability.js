import React from 'react';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const SeatAvailability = ({ title, seatCount }) => {
	return (
        <div className="flex flex-row items-center gap-3 text-xs">
            <Text content={title} />
            <span className="text-sm flex flex-row items-center">
                <Icon name='MdAirlineSeatReclineNormal' className="" />
                <Text content={seatCount} />
            </span>
        </div>
	);
};

export default SeatAvailability;