import React from 'react'

function TrackOrder() {
  return (
    <div className='py-6'>
      <h1 className='font-bold text-4xl text-gray-800 text-center py-2'>Track Your Order</h1>
      <p className='leading-6 text-[18px] px-14'>Thank you for your order through our website! You can track the status of your order using your order ID. Please note that it may take up to 48 hours for the status to be updated from the time the order was placed. To check the current status and expected delivery date, please enter your order ID into our tracking system. We appreciate your business and look forward to delivering your order soon!</p>
      <div className='border-2 mt-6 rounded-[8px] text-gray-500 shadow-md hover:shadow-sm transition mx-11 flex flex-col p-2 gap-2'>
        <p >Order ID</p>
        <input type="text" placeholder='Enter ID' className='outline-none border border-red-600 rounded-[4px] py-1 px-3' />
        <div className='w-full flex justify-between '>  <p className='text-gray-500'>Enter your order id to track your orders.</p>       <button className='font-bold text-white bg-red-700 w-[54px] py-1 rounded-[4px] '>Track</button>        </div>
      </div>
    </div>
  )
}

export default TrackOrder