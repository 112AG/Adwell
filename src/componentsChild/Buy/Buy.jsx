import React from 'react'

function Buy() {
  return (
    <div className='w-full h-full py-6'>
        <div className='max-w-2xl mx-auto p-2'>
            <form>
                <label htmlFor="full-name" className='flex flex-col'>
                   <div> Name <span className='text-red-600'>*</span></div>
                    <input type="text" placeholder='Full Name' className='border-2 rounded p-1' />
                </label>

                <label htmlFor="address" className='flex flex-col'>
                    <div> Name <span className='text-red-600'>*</span></div>
                    <input type="text" placeholder='House number/name, city, state, PIN' className='border-2 rounded p-1' />
                </label>

                <label htmlFor="contact" className='flex flex-col'>
                    <div> Phone Number <span className='text-red-600'>*</span></div>
                    <input type="number" placeholder='Contact Number' className='border-2 rounded p-1' />
                </label>

                <label htmlFor="address" className='flex flex-col'>
                    <div> Email <span className='text-red-600'>*</span></div>
                    <input type="email" placeholder='Email' className='border-2 rounded p-1' />
                </label>

                
            </form>
            <div></div>
        </div>
    </div>
  )
}

export default Buy