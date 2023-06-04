import React from 'react'
import Link from "next/link";
import Icon from '../atoms/Icon';

const Header = () => {
  return (
    <Link href='/' className='w-[60px] m-auto flex'>
        <h1 className="text-lg font-bold pt-5 text-center text-primary hover:text-secondary">
          <Icon name='MdAirplaneTicket' className="text-6xl m-auto" />
        </h1>
    </Link>
  )
}

export default Header