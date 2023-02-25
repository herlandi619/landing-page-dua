import React from 'react'
import tombol from "../img/tombol.png"
import awan from "../img/awan.png"
import shadow from "../img/shadow.png"
import hero from "../img/hero.png"

const Hero = () => {
  return (
    
    <div className='py-20 md:flex 2xl:bg-red-300'>

        <div className='p-20 '>
            <h1 className='text-2xl font-semibold font-[Roboto] text-white text-center md:text-3xl lg:text-4xl'>Atur Kasir Lebih Mudah</h1>

            <h1 className='text-4xl font-semibold font-[Roboto] text-white text-center  md:text-5xl lg:text-5xl'>Dengan <span className='text-[#8FE4FF]'>MOKA</span> POS</h1>

            <h3 className='text-white font-[Poppins] text-center my-5 md:text-md lg:text-xl'>Kami Membantu Bisnis Anda Mempercepat Proses Penjualan Dengan Aplikasi Kasir MOKA</h3>

            <span className='flex justify-center'>
            <button className='py-3 px-3 bg-black text-white rounded-xl shadow-xl items-center my-2 hover:scale-105 duration-300 '>COBA GRATIS SEKARANG</button>
            </span>

                <div className='flex justify-center'>
                    <img src={tombol} alt="tombol" className='w-6 my-5' />
                    <h3 className='font-semibold self-center px-2'>Tonton Video Kami</h3> 
                </div>

            </div>

            <div className='relativ'>
               
                 <img src={hero} alt="hero" className='max-w-auto mx-auto w-1/2  md:w-full lg:w-3/4 sm:bottom-1 hover:scale-105 duration-300'/>         

                <span className='absolute -bottom-80 -z-10 sm:-bottom-96 md:-bottom-1 lg:-bottom-28'>
                    <img src={awan} alt="awan" className='max-w-auto mx-auto w-4/4 md:w-full md:top-48'  />

                    <img src={shadow} alt="shadow" className='max-w-auto mx-auto w-1/2 md:w-full lg:w-3/4' />    
                </span>    
             
            </div>


    </div>
    
  )
}

export default Hero
