import React, { useState } from 'react';

function Buy() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        productDetails: '',
        paymentMethod: 'cash-on-delivery',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100 p-4'>
            <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-lg'>
                <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>Order Your Product</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='font-semibold'>Name <span className='text-red-600'>*</span></label>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} className='w-full border p-2 rounded focus:ring focus:ring-blue-300' placeholder='Full Name' required/>
                    </div>

                    <div>
                        <label className='font-semibold'>Address <span className='text-red-600'>*</span></label>
                        <input type='text' name='address' value={formData.address} onChange={handleChange} className='w-full border p-2 rounded focus:ring focus:ring-blue-300' placeholder='House number, city, state, PIN' required/>
                    </div>

                    <div>
                        <label className='font-semibold'>Phone Number <span className='text-red-600'>*</span></label>
                        <input type='number' name='phone' value={formData.phone} onChange={handleChange} className='w-full border p-2 rounded focus:ring focus:ring-blue-300' placeholder='Contact Number' required/>
                    </div>

                    <div>
                        <label className='font-semibold'>Email <span className='text-red-600'>*</span></label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full border p-2 rounded focus:ring focus:ring-blue-300' placeholder='Email' required />
                    </div>

                    <div>
                        <label className='font-semibold'>Product Details <span className='text-red-600'>*</span></label>
                        <textarea name='productDetails' value={formData.productDetails} onChange={handleChange} className='w-full border p-2 rounded focus:ring focus:ring-blue-300' placeholder='Product Name, Quantity, etc.' required></textarea>
                    </div>

                    <div>
                        <label className='font-semibold'>Payment Method <span className='text-red-600'>*</span></label>
                        <select name='paymentMethod' value={formData.paymentMethod} onChange={handleChange} className='w-full border p-2 rounded focus:ring focus:ring-blue-300' required>
                            <option value='credit-card'>Credit Card</option>
                            <option value='debit-card'>Debit Card</option>
                            <option value='paypal'>PayPal</option>
                            <option value='bank-transfer'>Bank Transfer</option>
                            <option value='cash-on-delivery'>Cash on Delivery</option>
                        </select>
                    </div>

                    <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition'>Submit Order</button>
                </form>
            </div>
        </div>
    );
}

export default Buy;
