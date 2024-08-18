import HeaderBox from '@/components/ui/HeaderBox'
import ImageSlider from '@/components/ui/ImageSlider'
import RightSidebar from '@/components/ui/RightSidebar'
import { sliders } from '@/constants'
import React from 'react'
 
const Home = () => {
  
  const loggedIn = {
  firstName: 'Marcus',
  lastName: 'Oware',
  email:'email'
  }

  return (
    <section  className='home'>
      <div className='home-content'>
        <div className='home-header'>

        <HeaderBox 
          subtext='A New Craft of Taste'
          title="Caters Cathering"
        />
        </div>
        <div>
          <ImageSlider images={sliders}/>
        </div>
      </div>
      <RightSidebar user={loggedIn}/>
    </section>
  )
}

export default Home
