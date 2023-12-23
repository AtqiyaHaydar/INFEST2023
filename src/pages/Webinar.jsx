import React from 'react'
// import components
import Carousel from '../components/Main-Event/Carousel'
import MainEventDesc from '../components/Main-Event/MainEventDesc'
import Speaker from '../components/Main-Event/Speaker'
import MainEventPromotion from '../components/Main-Event/MainEventPromotion'
import MainEventPrice from '../components/Main-Event/MainEventPrice'

const Webinar = () => {
  return (
    <div>
      <Carousel />
      <MainEventDesc />
      <Speaker />
      <MainEventPromotion />
      <MainEventPrice />
    </div>
  )
}

export default Webinar