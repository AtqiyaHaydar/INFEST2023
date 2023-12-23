import React from 'react'
// import components
import EquityBanner from '../components/Equity/EquityBanner'
import TentangEquity from '../components/Equity/TentangEquity'
import Ketentuan from '../components/Reusable/Ketentuan'
import Biaya from '../components/Reusable/Biaya'
import EquityTimeline from '../components/Equity/EquityTimeline'
import EquityFaq from '../components/Equity/EquityFaq'

const biaya = [
  {
    id: 1,
    title: 'Early Bid Registration: Rp145.000,00.',
  },
  {
    id: 2,
    title: 'Normal Registration: Rp195.000,00.',
  }
]

const hadiah = [
  {
    id: 1,
    title: 'Juara 1: Rp4.500.000,00 + e-sertifikat'
  },
  {
    id: 2,
    title: 'Juara 2: Rp2.500.000,00 + e-sertifikat'
  },
  {
    id: 3,
    title: 'Juara 3: Rp1.500.000,00 + e-sertifikat'
  },
]

const Equity = () => {
  return (
    <div>
      <EquityBanner />
      <TentangEquity />
      <Biaya title='Hadiah' list={hadiah} />
      <Ketentuan />
      <Biaya title='Biaya Pendaftaran' list={biaya} />
      <EquityTimeline />
      <EquityFaq />
    </div>
  )
}

export default Equity