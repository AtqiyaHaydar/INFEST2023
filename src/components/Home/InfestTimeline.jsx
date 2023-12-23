import React from 'react'
import Timeline from '../Reusable/Timeline'

const timeline = [
  {
    id: 1,
    date: '10 - 18 Juni ',
    title: 'Early-Bid Registration'
  },
  {
    id: 2,
    date: '19 - 26 Juni ',
    title: 'Normal Registration'
  },
  {
    id: 3,
    date: '29 Juni',
    title: 'Case Distribution BCC'
  },
  {
    id: 4,
    date: '29 Juni - 12 Juli',
    title: 'Pengerjaan Paper BCC',
  },
  {
    id: 5,
    date: '9 Juli',
    title: 'Pengumpulan Paper ERC'
  },
  {
    id: 6,
    date: '23 Juli',
    title: 'Pengumuman Finalis'
  },
  {
    id: 7,
    date: '23 Juli - 11 Agustus',
    title: 'Pengerjaan Presentasi BCC'
  },
  {
    id: 8,
    date: '19 Agustus',
    title: 'Pitching (Final Stage) BCC'
  },
  {
    id: 9,
    date: '23 Juli - 25 Agustus',
    title: 'Pengerjaan Presentasi ERC'
  },
  {
    id: 10,
    date: '16 Agustus - 10 September',
    title: 'Pendaftaran Main Event'
  },
  {
    id: 11,
    date: '16 September',
    title: 'Final ERC & Main Event INFEST'
  }
]

const InfestTimeline = () => {
  return (
    <Timeline array={timeline} />
  )
}

export default InfestTimeline