import React from 'react'
import styles from './styles.module.css'
import Icon from '../../atoms/Icon'
import Label from '../../atoms/Label'
import { dateFormatter } from '../../../utility'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({isDeparture, selectDepartureDate, setSelectDepartureDate, showDepartueRemove, setShowDepartureRemove, setSelectReturnDate, setShowReturnRemove, selectReturnDate, showReturnRemove}) => {
    
    // Function to convert departure date into 'yyyy-MM-dd' (dateFormatter Util) format & set the value in 'selectDepartureDate' state
	const departureDateHandler = (date) => {
		setSelectDepartureDate(dateFormatter(date));
		setShowDepartureRemove(true);
	};

	// Function to erase the departure date
	const eraseDepartureDateHandler = () => {
		setSelectDepartureDate('');
		setShowDepartureRemove(false);
	}

	// Function to convert return date into 'yyyy-MM-dd' (dateFormatter Util) format & set the value in 'selectReturnDate' state
	const returnDateHandler = (date) => {
		setSelectReturnDate(dateFormatter(date));
		setShowReturnRemove(true);
	};

	// Function to erase the return date
	const eraseReturnDateHandler = () => {
		setSelectReturnDate('');
		setShowReturnRemove(false);
	}

    return (
        <div className="flex flex-col sm:min-w-[180px] w-full">
            <div className={styles.efInputWrapper}>
                <Label htmlFor="departureDateFilter" className={styles.efInputLabel} content='Departure' />
                <div className="absolute h-5 left-3 top-7">
                    <DatePicker
                        onChange={isDeparture ? departureDateHandler : returnDateHandler}
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none"
                    />
                </div>
                {isDeparture ?
                    <input placeholder="depart date" className={`${styles.efInput}`} type="text" id="departureDateFilter" value={selectDepartureDate} onChange={(e) => setSelectDepartureDate(e.target.value)} />
                :
                    <input placeholder="return date" className={`${styles.efInput}`} type="text" id="returnDateFilter" value={selectReturnDate} onChange={(e) => setSelectReturnDate(e.target.value)} />
                }
                {isDeparture ?
                    <>
                    {showDepartueRemove ?
                        <button onClick={eraseDepartureDateHandler}><Icon name='MdOutlineCancel' className={`${styles.efInputIcon} hover:text-primary focus:text-primary`} /></button>
                        :
                        <Icon name='MdCalendarMonth' className={styles.efInputIcon} />
                    }
                    </>
                :
                    <>
                    {showReturnRemove ?
                        <button onClick={eraseReturnDateHandler}><Icon name='MdOutlineCancel' className={`${styles.efInputIcon} hover:text-primary`} /></button>
                        :
                        <Icon name='MdCalendarMonth' className={styles.efInputIcon} />
                    }
                    </>
                }
            </div>
        </div>
    )
}

export default DateFilter;