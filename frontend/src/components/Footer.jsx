import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-black text-white rounded-t-3xl px-4 pt-5'>
            <div className='flex flex-wrap gap-4 items-center justify-between mx-auto max-w-6xl px-4 pb-5'>
                <img className='h-10 invert contrast-[150%]' src="CatwikiLogo.svg" alt="" />
                <p className='text-sm'>&copy; created by <b>Beamlak</b>-devChallanegs.io 2023</p>
            </div>
        </footer>
    )
}
