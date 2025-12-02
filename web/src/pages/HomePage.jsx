import React from 'react'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import ContactUs from '../components/GetQuote'
import FAQs from '../components/Faqs'
import SafePackingMoving from '../components/SafePackingMoving'
import TrustBrandConnection from '../components/TrustBrandConnection'
import  OurOfficeMovingService from '../components/OurOfficeMovingServices'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SafePackingMoving/>
      
      <TrustBrandConnection/>
      <FAQs/>
      <ContactUs/>
      <Blog/>
      <OurOfficeMovingService/>
    </div>
  )
}

export default HomePage
