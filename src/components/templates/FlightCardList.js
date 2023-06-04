import React from 'react';
import FlightCard from '../organisms/FlightCard';
import NoResultComponent from '../organisms/NoResultComponent';

const FlightCardList = (props) => {
	return (
        <>
            {Object.values(props).length === 0 ? (
                <NoResultComponent title='No Result Found' subtitle='Please try different filter combination' />
            ) : (
                <ul className="flex flex-row flex-wrap gap-5 my-5">
                    {Object.values(props).map((flight, index) => (
                        <FlightCard {...flight} key={index} />
                    ))}
                </ul>
            )}
        </>
	);
};

export default FlightCardList;