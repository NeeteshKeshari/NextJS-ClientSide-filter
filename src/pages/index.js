import React, { useState } from "react";
import Head from 'next/head';
import AnimatedFlight from '../components/molecules/AnimatedFlight'
import FlightCardList from "../components/templates/FlightCardList";
import Icon from "../components/atoms/Icon";
import InputField from "../components/molecules/InputField";
import OfferType from "../components/organisms/OfferType";
import DateFilter from "../components/organisms/DateFilter";

export const getServerSideProps = async () => {
	const apiUrl = 'http://localhost:3000/api/flight';
	const res = await fetch(apiUrl);
	const flightData = await res.json();
	return {
		props: { flightData }
	};
}
const Home = ({ flightData }) => {
	const [originFilter, setOriginFilter] = useState("");
	const [destinationFilter, setDestinationFilter] = useState("");
	const [selectedOfferType, setSelectedOfferType] = useState("");
	const [selectDepartureDate, setSelectDepartureDate] = useState("");
	const [selectReturnDate, setSelectReturnDate] = useState("");
	const [showClassOption, setShowClassOption] = useState(false);
	const [showDepartueRemove, setShowDepartureRemove] = useState(false);
	const [showReturnRemove, setShowReturnRemove] = useState(false);
	const uniqueOfferTypes = flightData ? [...new Set(flightData.map(offer => offer.offerType))] : [];

	// This function is used to toggle the values of departure & return
	const toggleInputValue = (value) => {
		if (value) {
		  setOriginFilter(destinationFilter);
		  setDestinationFilter(originFilter);
		} else {
		  setOriginFilter(originFilter);
		  setDestinationFilter(destinationFilter);
		}
	}

	// This function returns the filter flight data
	const filteredFlightsData = flightData ? flightData.filter((flight) => {
		return (
			flight.origin.toLowerCase().includes(originFilter.toLowerCase()) &&
			flight.destination.toLowerCase().includes(destinationFilter.toLowerCase()) &&
			flight.offerType.includes(selectedOfferType) &&
			flight.departureDate.includes(selectDepartureDate) &&
			flight.returnDate.includes(selectReturnDate)
		);
	})
	: [];

	return (
		<main className="w-full p-5 m-auto xl:w-[1300px]">
			<Head>
                <title>Flights</title>
			</Head>
			<div className="page_container">
				<div className="flex flex-col lg:flex-row gap-5 gap-y-3 mt-5 w-full flight_filter">
					<section className="flex flex-col sm:flex-row gap-1.5 lg:gap-2.5">
						<InputField placeholder='origin' labelFor='originFilter' data-testid="input-field" id='originFilter' value={originFilter} onChange={(e) => setOriginFilter(e.target.value)} labelContent='FROM' name='MdFlightTakeoff' />
						<div className="relative"><button onClick={() => toggleInputValue(true)} className='border bg-light z-10 border-lightgrey w-8 h-8 right-[6px] top-[-15px] sm:-left-[15px] sm:top-[18px] rounded-full block absolute text-body hover:text-primary'><Icon name='RiArrowLeftRightLine' className="m-auto rotate-90 sm:rotate-0"/></button></div>
						<InputField placeholder='destination' labelFor='destinationFilter' id='destinationFilter' value={destinationFilter} onChange={(e) => setDestinationFilter(e.target.value)} labelContent='TO' name='MdFlightLand' />
					</section>
					<section className="flex flex-row gap-5 gap-x-3 lg:gap-x-5">
						<DateFilter selectDepartureDate={selectDepartureDate} setSelectDepartureDate={setSelectDepartureDate} showDepartueRemove={showDepartueRemove} setShowDepartureRemove={setShowDepartureRemove} isDeparture={true} />
						<DateFilter selectReturnDate={selectReturnDate} setSelectReturnDate={setSelectReturnDate} showReturnRemove={showReturnRemove} setShowReturnRemove={setShowReturnRemove} />
					</section>
					<section className="flex flex-col min-w-[180px] w-full sm:w-[calc(50%-12px)] lg:max-w-[241px]">
						<OfferType showClassOption={showClassOption} selectedOfferType={selectedOfferType} setSelectedOfferType={setSelectedOfferType} setShowClassOption={setShowClassOption} uniqueOfferTypes={uniqueOfferTypes} />
					</section>
				</div>
				<div className="flight_filteredData">
					<FlightCardList {...filteredFlightsData} />
					<AnimatedFlight/>
				</div>
			</div>
		</main>
	);
}

export default Home;