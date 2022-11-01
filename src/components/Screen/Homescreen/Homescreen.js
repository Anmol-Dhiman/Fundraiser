import React from 'react'
import CampaignSection from './CampaignSection'
// import Header from './Header'
import HomeLayout from './HomeLayout'
import SupportSection from './SupportSection'
import Footer from './Footer'
const Homescreen = (props) => {

  return (
    <div>
        {/* <Header onLogin={props.onLogin} onLogout={props.onLogout} /> */}
        <HomeLayout />
        <CampaignSection />
        <SupportSection />
        <Footer />
      
    </div>
  )
}

export default Homescreen
