import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const Rdv = () => {
  const contactItems = [
    {
      icon: faLocationDot,
      title: "Notre Localisation",
      content: (
        <p className='text-blue-950'>Bd KASRI Ahmed, Draâ Ben Khedda <br />
          Tizi Ouzou
        </p>
      )
    },
    {
      icon: faPhoneVolume,
      title: "Numéros de télephone",
      content: (
        <p className='text-blue-950'>
          Urgences: <a href="#" className='hover:text-red-700'>555-555-555</a>
          Rendez-vous: <a href="#" className='hover:text-red-700'>555-555-555</a>

        </p>
      )
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: (
        <p className='text-blue-950'>
          <a href="#" className='hover:text-red-700'>ehs@gmail.com</a>

        </p>
      )
    },
    {
      icon: faClock,
      title: "Horaires de travail",
      content: (
        <p className='text-blue-950'>
          Dimanche - JeuFdi : 8:30 - 16:00 <br />
          Vendredi - Samedi : Fermé
          Urgences: 24/24 et 7/7
        </p>
      )
    },

  ];
  const services = [
    { value: "Consultation_Cardiaque", label: "Consultation Cardiaque" },
    { value: "Chirurgie_Cardiaque", label: "Chirurgie Cardiaque" },
    { value: "laboratoire", label: "Labratoire" },
    { value: "Radiologie", label: "Radiologie" },
    { value: "Anesthésie Rheanimation", label: " Anesthésie Rheanimation" },
  ]
  return (
    <article className='py-20 overflow-hidden bg-gradient-r from-red-100 to-blue-100'>
      <div className='container mx-auto px-4'>
        <header className='text-center mb-6 relative'>
          <div className='absolute -top-10 -left-1/2 transform -traslate-x-1/2 w-24 h-24 rounded-full
          bg-red-100 opacity-30 z-0 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-950 mb-4 relative z-10'>
              Contactez Nous
            </h1>
            <p className='text-lg text-blue-950 maw-w-2xlmx-auto relative z-10'>hopj d e  rfuez ze ud oi rur duiru  frifu efu </p>
          </div>
        </header>
        <main className='flex flex-col lg-flex-row gap-12'>
          <aside className='bg-white rounded-2xl shadow-xl p-8 h-full'>
            <h2 className='text-2xl font-bold text-blue-950 mb-6 '>Get in touch</h2> 
            <address className='space-y-6'>
              {
                contactItems.map(item, index)=>(
                  <article key={index} className='flex items-start'>
                    <figure className='bg-red-100 p-3 rounded-full mr-4 flex-shrink-0'>
                      {item.icon}
                    </figure>
                    <div>
                    <h3 className='font-medium text-blue-950 mb-1'>{item.title}</h3>
                    {item.content}
                    </div>
                  </article>
                )
              }
            </address>
            </aside>
        </main>
      </div>
    </article>
  )
}

export default Rdv