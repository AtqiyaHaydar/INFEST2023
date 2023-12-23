import React from 'react'

const Ketentuan = () => {
  return (
    <section className='mx-auto bg-primary h-[700px] md:h-[560px] py-[28px] md:py-0 flex flex-col items-center px-10 md:px-0 w-full'>
      <div data-aos='zoom-in' className='relative
        before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 before:rounded
        after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1 flex items-center justify-center after:rounded
        md:min-w-[75vw]'>
          <div className='relative z-10 bg-primary rounded w-[99%] h-[99%] p-10'>
            <p className='text-center text-5xl font-medium text-white'>Ketentuan Perlombaan</p>
            <div className='lg:w-[100%] md:w-[100%] mt-[28px] text-white font-book md:text-[16px] text-justify flex flex-col gap-y-2 md:gap-y-0 text-[12px]' >
              <p>1. Tim beranggotakan 3 orang mahasiswa aktif program Diploma/ S1 di Indonesia yang berasal dari perguruan tinggi yang sama.</p>
              <p>2. Setiap anggota tim harus memiliki Kartu Tanda Mahasiswa (KTM) yang akan dikumpulkan melalui form registrasi.</p>
              <p>3. Satu perguruan tinggi boleh mengirim lebih dari 1 tim.</p>
              <p>4. Setiap peserta tidak diperbolehkan berada pada lebih dari 1 tim.</p>
              <p>5. Anggota dalam tim tidak boleh digantikan oleh siapa pun dengan alasan apa pun.</p>
              <p>6. Satu tim hanya boleh mengirimkan 1 karya.</p>
              <p>7. Peserta tidak sedang bekerja di sekuritas.</p>
              <p>8. Peserta tidak diperbolehkan menuliskan nama institusi asal peserta.</p>
              <p>9. Peserta wajib melakukan registrasi dan membayar biaya pendaftaran sesuai mekanisme pendaftaran.</p>
              <p>10. Peserta wajib mengikuti akun Instagram @infest.bdg untuk mendapatkan informasi mengenai perlombaan.</p>
              <p>11. Peserta wajib mem-posting twibbon yang disediakan oleh panitia untuk mengikuti lomba.</p>
              <p>12. Peserta wajib mengikuti ketentuan panitia dan keputusan panitia tidak dapat diganggu gugat.</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Ketentuan