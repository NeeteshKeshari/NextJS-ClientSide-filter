import React from 'react';
import styles from './styles.module.css'
import SeatAvailability from '../../molecules/FlightCard/SeatAvailability';
import OfferType from '../../molecules/FlightCard/OfferType';
import Price from '../../molecules/FlightCard/Price';
import FromCity from '../../molecules/FlightCard/FromCity';
import ToCity from '../../molecules/FlightCard/ToCity';
import Icon from '../../atoms/Icon';

const FlightCard = (props) => {
	return (
        <li key={props.uuid} className={`${styles.efTicketWrapper}`}>
            <div className="flex flex-row justify-between items-center">
                <FromCity origin={props.origin} />
                <span className="flex flex-row justify-evenly items-center px-5 w-full">
                    <span className={`${styles.efTicketRoot}`}></span>
                    <span className={`${styles.efTicketPlane}`}><Icon name='MdFlight' className="rotate-90" /></span>
                    <span className={`${styles.efTicketRoot}`}></span>
                </span>
                <ToCity destination={props.destination} />
            </div>
            <SeatAvailability title='Seat Availability' seatCount={props.seatAvailability} />
            <div className="border-t border-dashed border-offwhite w-full mt-[5px]"></div>
            <div className="flex flex-row justify-between items-center mt-5">
                <OfferType flightType={props.offerType} />
                <span><span className='font-semibold text-primary'>€</span><Price amount={props.price.amount} /></span>
            </div>
            <div className='flex flex-row justify-between mt-4'>
                <div className='text-xs'>
                    <div className='font-semibold'>Departure Date</div>
                    {props.departureDate} 
                </div>
                <div className='text-xs'>
                    <div className='font-semibold'>Return Date</div>
                    {props.returnDate} 
                </div>
            </div>
        </li>
	);
};

export default FlightCard;