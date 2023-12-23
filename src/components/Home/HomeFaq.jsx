import React from 'react'
// import reusable
import FaqBox from '../Reusable/FaqBox'

const question = [
  {
      id: 1,
      title: 'INFEST itu acara apa sih?',
      answer: 'INFEST atau Investment Festival adalah kegiatan yang bertujuan untuk mengajak masyarakat berinvestasi. INFEST memiliki rangkaian perlombaan dengan puncak acara berupa seminar dan diskusi panelis mengenai hal-hal seputar investasi.        '
  },
  {
      id: 2,
      title: 'Acara INFEST bakal diadain online/offline?',
      answer: 'Acara INFEST akan diadakan secara hybrid di mana audiens dapat mengikuti secara offline maupun online melalui media Zoom Meeting.'
  },
  {
      id: 3,
      title: 'Kapan acara INFEST dilaksanakan?',
      answer: 'Timeline rangkaian acara dan main event INFEST akan dipublish melalui akun Instagram @infest.bdg dan website infestitb2023.com, jadi stay tuned yaa!'
  },
  {
      id: 4,
      title: 'Kenapa sih harus ikut acara INFEST?',
      answer: 'Acara INFEST punya banyak banget benefit. Sebagai pemula dalam berinvestasi, INFEST memberikan banyak pengetahuan dasar mengenai langkah-langkah menjadi investor yang baik. Selain itu, INFEST juga berfokus pada isu dalam dunia perekonomian yang sedang naik daun, sehingga bukan hanya pemula yang dapat menambah wawasan baru melalui acara ini.'
  },
  {
      id: 5,
      title: 'Siapa aja speaker acara INFEST?',
      answer: 'Materi dan topik yang seru ini pastinya akan dibawakan oleh speaker yang handal dan seru juga. Jadi pantengin terus akun Instagram @infest.bdg, yaa!'
  }
]

const HomeFaq = () => {
  return (
    <section className='mx-auto w-full min-h-[500px] bg-primary flex flex-col items-center gap-y-5 pb-[56px]'>
      <p className='text-3xl font-bold text-white mb-[28px] text-center'>Frequently Asked Questions</p>
      <FaqBox title={question[0].title} answer={question[0].answer} />
      <FaqBox title={question[1].title} answer={question[1].answer} />
      <FaqBox title={question[2].title} answer={question[2].answer} />
      <FaqBox title={question[3].title} answer={question[3].answer} />
      <FaqBox title={question[4].title} answer={question[4].answer} />
    </section>
  )
}

export default HomeFaq