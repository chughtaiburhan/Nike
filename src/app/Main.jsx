import Navbar from '@/components/Navbar'
import CustomerReviews from '@/Sections/CustomerReviews'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import PopularProduct from '@/Sections/PopularProduct'
import Services from '@/Sections/Services'
import SpecialOffer from '@/Sections/SpecialOffer'
import Subscribe from '@/Sections/Subscribe'
import SuperQuality from '@/Sections/SuperQuality'
import React from 'react'

const Main = () => {
  return (
    <main className='relative '>
        <Navbar/> 
      <section className='xl:padding-1 wide:padding-r padding-b '> 
        <section className='padding'>
        <Hero/>
        </section>
    <section className='padding '>
    <PopularProduct/>
    </section>

    <section className='padding'>
    <SuperQuality/>
    </section>

    <section className='padding-x padding-y'>
    <Services/>
    </section>

    <section className='padding'>
    <SpecialOffer/>
    </section>

    <section className='padding bg-pale-blue '>
    <CustomerReviews/>
    </section>

    <section className='padding-x sm:py-32 py-16 w-full'>
    <Subscribe/>
    </section>

    <section className='bg-black padding-x padding-t pb-81 '>
    <Footer/>
    </section>

      </section>
    </main>
  )
}

export default Main
