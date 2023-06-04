import React from 'react'
import styles from './styles.module.css'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Label from '../../atoms/Label'

const OfferType = ({selectedOfferType, showClassOption, setShowClassOption, setSelectedOfferType, uniqueOfferTypes}) => {
    
    // This function is used to toggle the Offer type options
    const openClassHandler = () => {
        setShowClassOption(!showClassOption);
    }

    // Function to set the offerType value in 'selectedOfferType' state & show the offer type option
	const offerTypeHandler = (data) => {
		setSelectedOfferType(Object.values(data).toString());
		setShowClassOption(false);
	};

    return (
        <div className={styles.efInputWrapper}>
            <Label className={styles.efInputLabel} content='CLASS' />
            <button onClick={openClassHandler} className="text-offwhite uppercase w-[85%] text-left focus:outline-none rounded-md text-base md:text-lg font-bold">{selectedOfferType ? <span className='text-lightdark'>{selectedOfferType}</span> : 'All'}</button>
            {showClassOption &&
                <ul className={styles.efOfferTypeList}>
                    <li key="All" className={selectedOfferType === '' ? `${styles.efOfferType_active}` : `${styles.efOfferType}`} onClick={() => offerTypeHandler("")}>
                        <label className={styles.efOfferTypeLabel}>
                            <Text content='All' size="sm" />
                        </label>
                    </li>
                    {uniqueOfferTypes.map(offerType => (
                        <li key={offerType} className={selectedOfferType === offerType ? `${styles.efOfferType_active}` : `${styles.efOfferType}`} onClick={() => offerTypeHandler({offerType})}>
                            <label className={styles.efOfferTypeLabel}>
                                <Text content={offerType} size="sm" />
                            </label>
                        </li>
                    ))}
                </ul>
            }
            <Icon name='MdFlightClass' className="text-2xl absolute right-3 text-lightdark top-5" />
        </div>
    )
}

export default OfferType;