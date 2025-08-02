import React from 'react'
import med from '../assets/med.jpg'

const Medecins = () => {
    const Medecins = [
        {
            id: 1,
            name: "Dr.Djouzi",
            role: 'Chirugien Cardiaque',
            image: med,
            bio: 'lorem ipsum hello ican do it again even though it s hard description i deserve i ri la mia amica simpatica con la mia sorello io vado '
        },
        {
            id: 1,
            name: "Dr.Djouzi",
            role: 'Chirugien Cardiaque',
            image: med,
            bio: 'lorem ipsum hello ican do it again even though it s hard description i deserve i ri la mia amica simpatica con la mia sorello io vado '
        },
        {
            id: 1,
            name: "Dr.Djouzi",
            role: 'Chirugien Cardiaque',
            image: med,
            bio: 'lorem ipsum hello ican do it again even though it s hard description i deserve i ri la mia amica simpatica con la mia sorello io vado '
        },
        {
            id: 1,
            name: "Dr.Djouzi",
            role: 'Chirugien Cardiaque',
            image: med,
            bio: 'lorem ipsum hello ican do it again even though it s hard description i deserve i ri la mia amica simpatica con la mia sorello io vado '
        },
        {
            id: 1,
            name: "Dr.Djouzi",
            role: 'Chirugien Cardiaque',
            image: med,
            bio: 'lorem ipsum hello ican do it again even though it s hard description i deserve i ri la mia amica simpatica con la mia sorello io vado '
        },
    ]
    return (
        <section id='specialists' className='py-20 overflow-hidden bg-gradient-to-r from-blue-100 to-red-100 ' >
            <div className='container mx-auto px-4'>
                <header className='text-center mb-16 relatice'>
                    <span className='absolute -top-10 -left-1/2 transform -translate-x-0.5 w-20 h-20 rounded-full bg-red-100 opacity-30 z-0 ' aria-hidden='true'></span>
                    <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4 relative z-10'> Rencontrez notre  <span className='text-red-700'>Equipe d'experts</span></h2>
                    <p className='text-lg text-blue-950 maw-w-2xl mx-auto relative z-10'>Des professionnels dévoués au service de votre santé</p>
                </header>
                <ul className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 '>
                    {Medecins.map((doctor) => (
                        <li key={doctor.id} className='group relative'>
                            <article className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl  transition-all duration-300 h-full '>
                                <figure className='relative h-80 overflow-hidden'>
                                    <img src={doctor.image} alt="doctor image" className='w-full h-full object-cover transition-transform duration-500
                                    group-hover:scale-105 '
                                        loading='lazy' />
                                    <span className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' aria-hidden='true'>
                                    </span>
                                </figure>
                                <div className='p-6 relative -mt-10'>
                                    <div className='bg-blue-50 rounded-lg shadow-md p-6'>
                                        <header>
                                            <h3 className='text-xl font-bold text-blue-950 mb-1'>{doctor.name}</h3>
                                            <p className='text-red-700 font-medium mb-3'>{doctor.role}</p>
                                        </header>
                                        <p className='text-gray-600'>{doctor.bio}</p>

                                        <figure className='absolute -top-6 -left-6 bg-red-700 text-white p-3 rounded-full shadow-lg' aria-hidden='true'>
                                        </figure>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Medecins