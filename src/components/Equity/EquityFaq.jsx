import React from 'react'
// import components
import FaqBox from '../Reusable/FaqBox'

const question = [
  {
      id: 1,
      title: 'Bagaimana skema perlombaan yang akan dilakukan?',
      answer: 'Equity Research Competition akan melalui dua sesi, yaitu sesi preliminary dan sesi final. Pada sesi preliminary, peserta membuat paper dan dikumpulkan secara online sedangkan pada sesi final, peserta membuat paper dan melakukan presentasi secara offline di ITB'
  },
  {
      id: 2,
      title: 'Apa saja emiten yang akan dianalisis?',
      answer: '"MAPI, DMAS, dan INKP"'
  },
  {
      id: 3,
      title: 'Berapa kelompok yang akan maju ke sesi final?',
      answer: 'Setelah melalui sesi preliminary, akan ada 5 kelompok yang maju ke sesi final'
  },
  {
      id: 4,
      title: 'Apakah dari pihak penyelenggara menyediakan biaya transport?',
      answer: 'Biaya transportasi sepenuhnya ditanggung oleh peserta. Panitia hanya menyediakan konsumsi makan siang.'
  },
  {
      id: 5,
      title: 'Untuk Equity Research Competition, apakah tim dapat memilih salah satu dari 3 pilihan emiten yang disediakan secara bebas?',
      answer: 'Ya, tim dapat memilih salah satu emiten secara bebas.'
  },
  {
    id: 6,
    title: 'Apakah peserta dapat mengikuti Equity Research Competition dan Business Case Competition sekaligus?',
    answer: 'Ya, peserta diperbolehkan mengikuti 2 lomba sekaligus.'
  },
  {
    id: 7,
    title: 'Sejak kapan tim dapat mulai mengerjakan paper?',
    answer: 'Untuk Equity Research Competition, peserta dapat langsung mengerjakan setelah melakukan pembayaran. Sedangkan, untuk Business Case Competition, peserta baru dapat mengerjakan setelah case didistribusikan pada 29 Juni 2023.',
  },
  {
    id: 8,
    title: 'Apakah seluruh peserta akan mendapatkan sertifikat?',
    answer: 'Ya, semua peserta akan mendapatkannya. Sertifikat akan dikirimkan melalui e-mail ketua kelompok.'
  },
  {
    id: 9,
    title: 'Di mana lokasi pelaksanaan kedua lomba?',
    answer: 'Equity Research Competition akan dilaksanakan secara online untuk babak penyisihan dan secara onsite di Institut Teknologi Bandung untuk babak final. Sedangkan, Business Case Competition akan dilaksanakan secara full online.'
  }
]

const EquityFaq = () => {
  return (
    <section className='mx-auto w-full min-h-[500px] bg-primary flex flex-col items-center gap-y-5 pb-[56px]'>
      <p className='text-3xl font-bold text-white mb-[28px] text-center'>Frequently Asked Questions</p>
      <FaqBox title={question[0].title} answer={question[0].answer} />
      <FaqBox title={question[1].title} answer={question[1].answer} />
      <FaqBox title={question[2].title} answer={question[2].answer} />
      <FaqBox title={question[3].title} answer={question[3].answer} />
      <FaqBox title={question[4].title} answer={question[4].answer} />
      <FaqBox title={question[5].title} answer={question[5].answer} />
      <FaqBox title={question[6].title} answer={question[6].answer} />
      <FaqBox title={question[7].title} answer={question[7].answer} />
      <FaqBox title={question[8].title} answer={question[8].answer} />
    </section>
  )
}

export default EquityFaq