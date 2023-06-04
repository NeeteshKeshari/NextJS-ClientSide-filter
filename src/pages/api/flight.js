export default function handler(req, res) {
    res.status(200).json(
        [
            {
            "origin": "JFK",
            "destination": "LHR",
            "departureDate": "2023-03-23",
            "returnDate": "2023-03-27",
            "seatAvailability": 5,
            "price": {
            "amount": 899.99,
            "currency": "EUR"
            },
            "offerType": "First Class",
            "uuid": "SA00082-cf07dc02-731a-4626-99d3-c82dc3db0ab3"
            },
            {
            "origin": "CDG",
            "destination": "BOS",
            "departureDate": "2023-04-15",
            "returnDate": "2023-04-22",
            "seatAvailability": 10,
            "price": {
            "amount": 649.5,
            "currency": "EUR"
            },
            "offerType": "Economy",
            "uuid": "SA00091-162f6d54-6c43-4b3f-819a-7e249a9056c9"
            },
            {
            "origin": "MUC",
            "destination": "LAX",
            "departureDate": "2023-03-23",
            "returnDate": "2023-03-26",
            "seatAvailability": 6,
            "price": {
            "amount": 1125,
            "currency": "EUR"
            },
            "offerType": "Business",
            "uuid": "SA00102-9f0b4d96-4d95-4df4-8b09-0d1ba54790ed"
            },
            {
            "origin": "FCO",
            "destination": "DXB",
            "departureDate": "2023-04-01",
            "returnDate": "2023-04-05",
            "seatAvailability": 2,
            "price": {
            "amount": 1400.25,
            "currency": "EUR"
            },
            "offerType": "First Class",
            "uuid": "SA00116-5d5a514c-83b1-43d9-9b37-10940a4db4f4"
            },
            {
            "origin": "SFO",
            "destination": "HND",
            "departureDate": "2023-04-13",
            "returnDate": "2023-04-15",
            "seatAvailability": 9,
            "price": {
            "amount": 899.99,
            "currency": "EUR"
            },
            "offerType": "Economy",
            "uuid": "SA00127-7bbce8f2-1787-41ee-979e-0d07eb16f727"
            },
            {
            "origin": "ORD",
            "destination": "PEK",
            "departureDate": "2023-04-10",
            "returnDate": "2023-04-17",
            "seatAvailability": 3,
            "price": {
            "amount": 899.5,
            "currency": "EUR"
            },
            "offerType": "Business",
            "uuid": "SA00138-24ad4e4b-4fb4-4be8-94e5-7dbf23873eb5"
            },
            {
            "origin": "LHR",
            "destination": "JFK",
            "departureDate": "2023-03-27",
            "returnDate": "2023-03-31",
            "seatAvailability": 12,
            "price": {
            "amount": 599.99,
            "currency": "EUR"
            },
            "offerType": "Business",
            "uuid": "SA00007-f0d181d5-7fc1-4fc9-a9e5-5bc5d5c5bb5e"
            },
            {
            "origin": "NRT",
            "destination": "SIN",
            "departureDate": "2023-04-10",
            "returnDate": "2023-04-15",
            "seatAvailability": 4,
            "price": {
            "amount": 450.75,
            "currency": "EUR"
            },
            "offerType": "Premium Economy",
            "uuid": "SA00019-024d125b-94c9-4a56-b5a5-5f5e049c5a20"
            },
            {
            "origin": "SYD",
            "destination": "LAX",
            "departureDate": "2023-04-12",
            "returnDate": "2023-04-19",
            "seatAvailability": 8,
            "price": {
            "amount": 750.5,
            "currency": "EUR"
            },
            "offerType": "Economy",
            "uuid": "SA00036-971431dd-5849-4f60-95d9-9bf693d0346f"
            },
            {
            "origin": "MUC",
            "destination": "LHR",
            "departureDate": "2023-04-19",
            "returnDate": "2023-04-23",
            "seatAvailability": 5,
            "price": {
            "amount": 299.99,
            "currency": "EUR"
            },
            "offerType": "Best Price",
            "uuid": "SA00045-158bb1db-1eb7-4b49-a2d7-94bde6e9f6e8"
            },
            {
            "origin": "CDG",
            "destination": "JFK",
            "departureDate": "2023-03-30",
            "returnDate": "2023-03-31",
            "seatAvailability": 9,
            "price": {
            "amount": 899.99,
            "currency": "EUR"
            },
            "offerType": "First Class",
            "uuid": "SA00051-2c2b82f6-0645-4441-95e8-8a0d57c1fcd9"
            },
            {
            "origin": "HND",
            "destination": "ICN",
            "departureDate": "2023-03-03",
            "returnDate": "2023-04-15",
            "seatAvailability": 3,
            "price": {
            "amount": 350,
            "currency": "EUR"
            },
            "offerType": "Business",
            "uuid": "SA00062-42cdd8e9-1d7c-4b92-a6a9-7d51a10a4431"
            },
            {
            "origin": "LAX",
            "destination": "LHR",
            "departureDate": "2023-04-15",
            "returnDate": "2023-04-20",
            "seatAvailability": 5,
            "price": {
            "amount": 399.99,
            "currency": "EUR"
            },
            "offerType": "Best Price",
            "uuid": "SA00045-158bb1db-1eb7-4b49-a2d7-94bde3d5fk28"
            },
            {
            "origin": "LAX",
            "destination": "SYD",
            "departureDate": "2023-03-23",
            "returnDate": "2023-04-01",
            "seatAvailability": 6,
            "price": {
            "amount": 1100,
            "currency": "EUR"
            },
            "offerType": "Premium Economy",
            "uuid": "SA00075-37f5be6a-55f9-47d1-bc97-67a6ee15fae1"
            },
            {
            "origin": "DEL",
            "destination": "LHR",
            "departureDate": "2023-03-22",
            "returnDate": "2023-03-23",
            "seatAvailability": 2,
            "price": {
            "amount": 500,
            "currency": "EUR"
            },
            "offerType": "Economy",
            "uuid": "SA00082-bfe29a20-24e4-4d7a-9e83-fad3d4c01dd4"
            },
            {
            "origin": "DXB",
            "destination": "JFK",
            "departureDate": "2023-04-10",
            "returnDate": "2023-04-20",
            "seatAvailability": 4,
            "price": {
            "amount": 1200,
            "currency": "EUR"
            },
            "offerType": "First Class",
            "uuid": "SA00095-dfde9b08-24b8-4017-a1f5-1b414d54f063"
            }
        ]
    )
}