import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import aboutImg from '../assets/aboutImg.png'

const About = () => {
    const stats = [
        { value: "10+", label: "Années d'expérience", icon: <FontAwesomeIcon icon={faAward} /> }
    ]

    return (
        <section id='about' className='py-14 overflow-hidden bg-gradient-to-r from-blue-100 to-red-100'> {/* ✅ "bg-gradient", not "bg-gradinet" */}
            <div className='container mx-auto px-4'>
                <article className='flex flex-col lg:flex-row items-center gap-12'>

                    {/* Image Section */}
                    <figure className='hidden lg:block lg:w-5/12 relative'>
                        <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto'>
                            <img
                                src={aboutImg}
                                alt=""
                                className="w-full h-auto object-cover max-h-[400px]" // Set any max height you prefer
                                loading="lazy"
                            />


                            {/* ❌ Typo: insert-0 → ✅ inset-0 */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' aria-hidden='true'></div>
                        </div>

                        {/* Background Blobs */}
                        {/* ❌ -buttom → ✅ -bottom */}
                        <span className='hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-300 opacity-20 z-0' aria-hidden="true"></span>
                        {/* ❌ -rihgt → ✅ -right */}
                        <span className='hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-red-400 opacity-20 z-0' aria-hidden="true"></span>

                        {/* ❌ abslute → ✅ absolute | ❌ z-2O → ✅ z-20 */}
                        <aside className='absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
                            <strong className='text-2xl font-bold text-blue-700'>10+</strong>
                            <small className='block text-xs font-medium text-blue-950'>Années d'expérience</small>
                        </aside>
                    </figure>

                    {/* Text Section */}
                    <div className='lg:w-7/12'>
                        <header>
                            <h2 className='text-3xl md:text-4xl font-bold text-red-700 mb-6'>Plus besoin de vous déplacer !</h2>
                            <p className='text-lg text-blue-950 mb-6'>
                                <span className='text-2xl md:text-xl font-bold text-blue-900'>Prendre rendez-vous n’a jamais été aussi simple</span> Remplissez le court formulaire en ligne, choisissez la date qui vous convient,
                                et recevez votre convocation par e-mail. En quelques clics, votre rendez-vous est <span className='font-bold'>confirmé.</span>
                            </p>
                        </header>
                        <section>
                            <a
                                href="#dossier"
                                className="border-2 border-red-700 text-red-700 font-medium hover:bg-red-700 hover:text-white px-6 py-3 rounded-full shadow"
                            >
                                Prendre Rendez-vous
                            </a>
                        </section>
                    </div>
                </article>

                {/*  */}
                <aside className='mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden'>
                    <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-300 opacity-40' aria-hidden='true'></span>
                    <div className='relative z-10'>
                        <h2 className='text-3xl font-bold text-red-700'> Préparez votre dossier, sans vous déplacer! </h2>
                        <span className='text-lg text-blue-900 mb-6'>
                            Avant votre chirurgie, préparez tous vos documents médicaux à l'avance.
                        </span>
                        <p className='text-lg text-blue-900 mb-6 font-medium'>Consultez la liste complète ici.</p>
                    </div>
                    <a
                        href="#dossier"
                        className="inline-block w-full sm:w-auto text-center border-2 border-red-700 text-red-700 font-medium hover:bg-red-700 hover:text-white px-4 py-3 rounded-full shadow sm:whitespace-nowrap"
                    >
                        Consulter les documents nécessaires
                    </a>


                </aside>
            </div>
        </section>
    )
}

export default About
