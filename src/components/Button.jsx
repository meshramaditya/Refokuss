import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

function Button({titel = "Get Strted"}) {
  return (
    <div className='w-fit gap-10 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{titel}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button