import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faPhoneVolume,
    faEnvelope,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import contactImg from '../assets/contactImg.jpg'
const Contact = () => {
    const contactItems = [
        {
            icon: faLocationDot,
            title: 'Localisation',
            content: (
                <p className="text-blue-950">
                    Bd KASRI Ahmed, Draâ Ben Khedda, Tizi Ouzou
                </p>
            ),
        },
        {
            icon: faPhoneVolume,
            title: 'Numéros de téléphone',
            content: (
                <p className="text-blue-950">
                    Urgences:{' '}
                    <a href="#" className="hover:text-red-700">
                        555-555-555
                    </a>{' '}
                    <br />
                    Rendez-vous:{' '}
                    <a href="#" className="hover:text-red-700">
                        555-555-555
                    </a>
                </p>
            ),
        },
        {
            icon: faEnvelope,
            title: 'Email',
            content: (
                <p className="text-blue-950">
                    <a href="#" className="hover:text-red-700">
                        ehs@gmail.com
                    </a>
                </p>
            ),
        },
        {
            icon: faClock,
            title: 'Horaires de travail',
            content: (
                <p className="text-blue-950">
                    Dimanche - Jeudi : 8:30 - 16:00 <br />
                    Vendredi - Samedi : Fermé <br />
                    Urgences: 24/24 et 7/7
                </p>
            ),
        },
    ];

    return (
        <section id='about' className='overflow-hidden pb-10 bg-gradient-to-r from-blue-100 to-red-100'>
            <div className='container mx-auto px-4'>
                <aside className='bg-white rounded-2xl p-2 md:p-5 shadow-lg relative overflow-hidden'>
                    {/* Flex container: column on small screens, row on md+ */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

                        {/* Left side - Text */}
                        <div className="flex-1 pl-6 py-5">
                            <h2 className="text-2xl font-bold text-blue-950 mb-6">Contactez Nous</h2>
                            <address className="space-y-6 not-italic">
                                {contactItems.map((item, index) => (
                                    <article key={index} className="flex items-start">
                                        <figure className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </figure>
                                        <div>
                                            <h3 className="font-medium text-blue-950 mb-1">{item.title}</h3>
                                            {item.content}
                                        </div>
                                    </article>
                                ))}
                            </address>
                        </div>

                        {/* Right side - Image */}
                        <div className="flex-1 hidden md:block">
                            <figure className="rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={contactImg}
                                    className="w-full h-100 object-cover hover:scale-105 transition-transform duration-500"
                                    width="400"
                                    height="200"
                                    loading="lazy"
                                    alt="Contact location"
                                />
                            </figure>
                        </div>

                    </div>
                </aside>
            </div>
        </section>

    )
}

export default Contact
