import React from 'react'

import Discount from '../../components/Discount/Discount'
import MyBookings from '../../components/MyBookings/MyBookings'
import Contacts from '../../components/Contacts/Contacts'

const Bookings = ({ booked }) => {
    return (
        <>
            <Discount/>
            <MyBookings booked={booked} />
            <Contacts />
        </>
    )
}

export default Bookings