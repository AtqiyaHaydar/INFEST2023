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
    date: '29 Juni',
    title: 'Case distribution'
  },
  {
    id: 4,
    date: '29 Juni - 12 Juli',
    title: 'Pengerjaan Paper'
  },
  {
    id: 5,
    date: '13 - 22 Juli',
    title: 'Pemeriksaan Oleh Juri'
  },
  {
    id: 6,
    date: '23 Juli',
    title: 'Pengumuman Finalis'
  },
  {
    id: 7,
    date: '23 Juli - 11 Agustus',
    title: 'Pengerjaan Presentasi'
  },
  {
    id: 8,
    date: '19 Agustus',
    title: 'Pitching'
  },
]

const BusinessTimeline = () => {
  return (
    <div className='pt-[5rem] bg-primary'>
      <Timeline array={timeline} />
    </div>
  )
}

export default BusinessTimeline