import React from 'react'
// import components
import Timeline from '../Reusable/Timeline'

const timeline = [
  {
    id: 1,
    date: '10 - 18 Juni',
    title: 'Early-Bid Registration'
  },
  {
    id: 2,
    date: '19 - 26 Juni',
    title: 'Normal Registration'
  },
  {
    id: 3,
    date: '9 Juli',
    title: 'Pengumpulan Paper'
  },
  {
    id: 4,
    date: '23 Juli',
    title: 'Pengumuman Finalis'
  },
  {
    id: 5,
    date: '23 Juli - 25 Agustus',
    title: 'Pengerjaan Presentasi ERC'
  },
  {
    id: 6,
    date: 'To Be Announce',
    title: 'Technical Meeting Finalis'
  },
  {
    id: 7,
    date: '2 September',
    title: 'Final & Pengumuman Pemenang'
  },
]

const EquityTimeline = () => {
  return (
    <div className='pt-[5rem] bg-primary'>
      <Timeline array={timeline} />
    </div>
  )
}

export default EquityTimeline