import React from 'react'

const Maps = () => {
    return (
        <section id='about' className=' overflow-hidden bg-gradient-to-r from-blue-100 to-red-100'>
            <div className='container mx-auto px-4'>
                <aside className='bg-white rounded-2xl p-2  md:p-5 shadow-lg relative overflow-hidden'>

                    <header className='px-6 pt-5'>
                        <h2 className='z-10 text-3xl md:text-4xl font-bold text-red-700 mb-2'>Localisation de notre établissement hospétlier </h2>
                        <p className='text-lg text-blue-950  mb-6'>
                            Retrouvez notre établissement sur <span className='font-medium'> la carte ci-dessous</span> et accédez facilement à nos services.                        </p>
                    </header>
                    <figure className='mt-2 bg-white rounded-2xl shadow-xl overflow-hidden z-10'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204658.49502668527!2d3.704488624999996!3d36.7276288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc5ed45c8cb95%3A0xf0350728eb771d90!2sEHS%20En%20Cardiologie%20Et%20Chirurgie%20Cardiaque!5e0!3m2!1sfr!2sdz!4v1753881041236!5m2!1sfr!2sdz"
                            width="100%" height="450" style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            title='clinic'
                            referrerpolicy="no-referrer-when-downgrade"
                            className='rounded-2xl z-10'
                            aria-label='Localisation ESH Cardio'></iframe>

                    </figure>

                </aside>
            </div>
        </section >
    )
}

export default Maps