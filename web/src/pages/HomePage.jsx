import React from 'react'
import Hero from '../components/Hero'
import ContactUs from '../components/GetQuote'
import FAQs from '../components/Faqs'
import SafePackingMoving from '../components/SafePackingMoving'
import TrustBrandConnection from '../components/TrustBrandConnection'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SafePackingMoving/>
      
      <TrustBrandConnection/>
      <FAQs/>
      <ContactUs/>
    </div>
  )
}

export default HomePage
