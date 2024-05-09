import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='rounded-3xl bg-gray-100 grid grid-cols-1 sm:grid-cols-2 w-full h-autto gap-5 p-8'>
        <div className='col-span-1'>Talup 2023. All rights reserved</div>
        <div className='col-span-1 flex justify-end items-center gap-4'>
            <a href="https://captainjay.xyz/" className='underline underline-offset-1'>Terms & condition</a>
            <a href="https://captainjay.xyz/" className='underline underline-offset-1'>Privacy policy</a>
        </div>
    </div>
    </>
  )
}
