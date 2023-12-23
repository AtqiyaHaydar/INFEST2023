import React from 'react'
// import components
import BusinessBanner from '../components/Business/BusinessBanner'
import TentangBusiness from '../components/Business/TentangBusiness'
import KetentuanBusiness from '../components/Business/KetentuanBusiness'
import Biaya from '../components/Reusable/Biaya'
import BusinessTimeline from '../components/Business/BusinessTimeline'

const biaya = [
  {
    id: 1,
    title: 'Early Bid Registration: Rp150.000,00.',
  },
  {
    id: 2,
    title: 'Normal Registration: Rp200.000,00.',
  }
]

const hadiah = [
  {
    id: 1,
    title: 'Juara 1: Rp5.000.000,00 + e-sertifikat'
  },
  {
    id: 2,
    title: 'Juara 2: Rp3.000.000,00 + e-sertifikat'
  },
  {
    id: 3,
    title: 'Juara 3: Rp2.000.000,00 + e-sertifikat'
  },
]

const Business = () => {
  return (
    <div>
      <BusinessBanner />
      <TentangBusiness /> 
      <Biaya title='Hadiah' list={hadiah} />
      <KetentuanBusiness />
      <Biaya title='Biaya Pendaftaran' list={biaya} />
      <BusinessTimeline />
    </div>
  )
}

export default Business