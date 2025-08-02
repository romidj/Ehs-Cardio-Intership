import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { faAward } from '@fortawesome/free-solid-svg-icons'

import labo from '../assets/labo.jpg'
import cardio from '../assets/cardio.jpg'
import sergery from '../assets/sergery.jpg'
import radio from '../assets/radio.jpg'
import anesthesia from '../assets/anesthesia.jpg'

const Services = () => {
  const serviceData = [
    { icon: faAward, title: "Radiology", content: "Lorem ipsum dolor sit amet.", backgroundImage: radio },
    { icon: faAward, title: "Cardiologie", content: "Lorem ipsum dolor sit amet.", backgroundImage: cardio },
    { icon: faAward, title: "Laboratoire", content: "Lorem ipsum dolor sit amet.", backgroundImage: labo },
    { icon: faAward, title: "Chirurgie Cardiaque", content: "Lorem ipsum dolor sit amet.", backgroundImage: sergery },
    { icon: faAward, title: "Anesthésie Réanimation", content: "Lorem ipsum dolor sit amet.", backgroundImage: anesthesia },
  ]

  return (
    <section id='about' className='py-14 overflow-hidden bg-gradient-to-r from-blue-100 to-red-100'>
      <div className='container mx-auto px-4'>
        <aside className='bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden'>
          <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-300 opacity-40' aria-hidden='true'></span>
          <span className='absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-300 opacity-40' aria-hidden='true'></span>

          <header>
            <h2 className='z-10 text-3xl md:text-4xl font-bold text-red-700 mb-2'>Explorez nos services</h2>
            <p className='text-lg text-blue-950 mb-6'>
              Une diversite de specialite permettant un <span className='font-bold'>meuilleur</span> traitement
            </p>
          </header>

          <Swiper
            breakpoints={{
              340: { slidesPerView: 1.5, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="max-w-[95%] lg:max-w-[90%] mx-auto"
          >
            {serviceData.map((item) => (
              <SwiperSlide key={item.title} className="flex justify-center">
                <div className="group relative shadow-lg text-white rounded-xl overflow-hidden h-[250px] w-full max-w-[215px] lg:h-[300px] lg:max-w-[250px] cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition duration-300" />
                  <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
                    <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
                    <p className="text-sm">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </aside>
      </div>
    </section>
  )
}

export default Services
