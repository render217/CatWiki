import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='py-3'>
            <Link to='/'>
                <img src="/CatwikiLogo.svg" alt="" />
            </Link>
        </header>
    )
}
