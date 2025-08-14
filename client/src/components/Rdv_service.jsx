import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import contactImg from '../assets/contactImg.jpg';

const Rdv_service = () => {

    const [selectedService, setSelectedService] = useState('');


    const Services = [
        { value: "Cardiology", label: "Consultation Cardiologie" },
        { value: "Chirurgie_Cardiaque", label: "Chirurgie Cardiaque" },
        { value: "Laboratoire", label: "Laboratoire" },
        { value: "Radiologie", label: "Radiologie" },
        { value: "Anestésie Rhéanimation", label: "Anestésie Rhéanimation" }


    ]
    const contactItems = [
        {
            icon: faLocationDot,
            title: 'Localisation',
            content: (
                <p className="text-blue-950">
                    Bd KASRI Ahmed, Draâ Ben Khedda,Tizi Ouzou
                </p>
            ),
        },
        {
            icon: faPhoneVolume,
            title: 'Numéros de télephone',
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
        <article className="py-20 overflow-hidden bg-gradient-to-r from-blue-100 to-red-100">
            <div className="container mx-auto px-4">
                <header className="text-center mb-6 relative">
                    <div className="absolute -top-10 -left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-red-100 opacity-30 z-0" />
                    <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 relative z-10">
                        Prendre Rendez-vous
                    </h1>
                    <p className="text-lg text-blue-950 max-w-2xl mx-auto font-medium relative z-10">
                        Pour toute question ou pour prendre un rendez-vous, n'hésitez pas à nous contacter.
                    </p>
                </header>

                <main className="flex flex-col-reverse lg:flex-row gap-12">
                    <aside className="bg-white rounded-2xl shadow-xl p-8 h-full">
                        <section>
                            <h2 className="text-2xl font-bold text-blue-950 mb-6">Contactez Nous</h2>
                            <address className="space-y-6">
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
                            <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={contactImg}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    width="400"
                                    height="200"
                                    loading="lazy"
                                    alt="Contact location"
                                />
                            </figure>
                        </section>
                    </aside>

                    <section className="lg:w-3/5">
                        <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center">
                            <h2 className="text-2xl font-bold text-blue-950 mb-6">Veuillez choisir un service</h2>
                            <form className="space-y-6 w-full max-w-md">
                                <fieldset className="grid grid-cols-1 gap-6">
                                    <div className="w-full">
                                        <label className="block text-blue-950 font-medium mb-2 text-left">Service</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={selectedService}
                                            onChange={(e) => setSelectedService(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        >
                                            <option value="" disabled>Veuillez choisir un service</option>
                                            {Services.map((service) => (
                                                <option key={service.value} value={service.value}>
                                                    {service.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </fieldset>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-700 border-red-700 text-white font-medium px-8 py-3 rounded-full 
          hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700 transition shadow-lg"
                                    >
                                        Suivant
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>

                </main>
            </div>
        </article >
    );
};

export default Rdv_service