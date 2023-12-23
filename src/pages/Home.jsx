import React from 'react'
// import components from home
import HomeBanner from '../components/Home/HomeBanner'
import AfterMovie from '../components/Home/AfterMovie'
import WhatIs from '../components/Home/WhatIs'
import Promotion from '../components/Home/Promotion'
import InfestTheme from '../components/Home/InfestTheme'
import AcaraKami from '../components/Home/AcaraKami'
import InfestTimeline from '../components/Home/InfestTimeline'
import HomeFaq from '../components/Home/HomeFaq'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <HomeBanner />
      <AfterMovie />
      <WhatIs />
      <Promotion />
      <InfestTheme />
      <AcaraKami />
      <InfestTimeline />
      <HomeFaq />
    </div>
  )
}

export default Home