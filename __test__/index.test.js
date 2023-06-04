import { render, waitFor, screen } from '@testing-library/react';
import FlightCardList from '../src/components/templates/FlightCardList';
import Home from '../src/pages';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

describe('Home', () => {
    it('Updates state when origin & destination input value changes', async () => {
        const { getByPlaceholderText, getByText } = render(<Home />);
        const data = [
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
            }
        ]
        const flightJSON = render(<FlightCardList {...data}  />);
    
        const inputOriginField = getByPlaceholderText('origin');
        fireEvent.change(inputOriginField, { target: { value: 'muc' } });
        expect(inputOriginField.value).toBe('muc');

        const inputDestinationField = getByPlaceholderText('destination');
        fireEvent.change(inputDestinationField, { target: { value: 'lax' } });
        expect(inputDestinationField.value).toBe('lax');

        await waitFor(() => {
            expect(getByText('MUC')).toBeInTheDocument(flightJSON);
            expect(getByText('Business')).toBeInTheDocument(flightJSON);
        }, { timeout: 1000 });
    });
});