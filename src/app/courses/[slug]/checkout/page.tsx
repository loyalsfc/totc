import FormInput from '@/components/form-input/form-input'
import React from 'react'

function Page() {
    return (
        <main>
            <section className='container mx-auto flex py-10'>
                <div className="w-3/5 rounded-2xl bg-white shadow-boxed p-8">
                    <h1 className='text-blue font-semibold text-2xl'>Checkout</h1>
                    <h4 className='text-[#5B5B5B] font-semibold text-sm'>Card Type</h4>
                    <div className='flex gap-4 pb-10 pt-5'>
                        <div className='payment-card-wrapper'>
                            <img src="/payment-cards/Paypal.png" alt="" />
                        </div>
                        <div className='payment-card-wrapper'>
                            <img src="/payment-cards/america-visa.jpg" alt="" />
                        </div>
                        <div className='payment-card-wrapper'>
                            <img src="/payment-cards/visa.png" alt="" />
                        </div>
                        <div className='payment-card-wrapper'>
                            <img src="/payment-cards/master-card.png" alt="" />
                        </div>
                    </div>

                    <form action="">
                        <FormInput
                            label='Name on Card'
                            type='text'
                            id='name-on-card'
                            placeholder='Enter Name on Card'
                        />
                        <FormInput
                            label='Card Number'
                            type='number'
                            id='card-number'
                            placeholder='Enter Card Number'
                        />
                        <div className='grid grid-cols-2 gap-10'>
                            <FormInput
                                label='Expiration Date (MM/YY)'
                                type='month'
                                id='expiry-date'
                                placeholder='Enter Expiry Date'
                            />
                            <FormInput
                                label='CVV'
                                type='number'
                                id='cvv'
                                placeholder='Enter CVV'
                            />
                        </div>
                        <div className='flex items-center gap-2'>
                            <input
                                type='checkbox'
                                id='save-card'
                            />
                            <label htmlFor="save-card">Save my information for faster checkout</label>
                        </div>
                        <button className='bg-primary rounded-md py-2.5 w-full mt-8 text-white'>Confirm Payment</button>
                    </form>
                </div>
                <div className="w-2/5 rounded-2xl p-8 bg-wrapper-background">
                    <h2 className='mb-5'>SUMMARY</h2>

                    <ul>
                        <li>
                            <div className="rounded-3xl"></div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Page