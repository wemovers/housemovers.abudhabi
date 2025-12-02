import React from 'react'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
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
      <Blog/>
    </div>
  )
}

export default HomePage
