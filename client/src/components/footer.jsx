import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white">
            <div className="container mx-auto grid gap-10 px-6 py-12 sm:px-8 md:grid-cols-3 lg:px-12">
                <section>
                    <a href="/#home" className="mb-4 inline-flex items-center">
                        <img src={logo} alt="EHS Yacef Omar" className="h-16 w-auto rounded bg-white p-1" />
                    </a>
                    <p className="max-w-sm text-blue-100">
                        Établissement hospitalier spécialisé en cardiologie et chirurgie cardiaque,
                        situé à Draâ Ben Khedda.
                    </p>
                </section>

                <nav aria-label="Liens de pied de page">
                    <h2 className="mb-4 text-lg font-semibold">Liens rapides</h2>
                    <ul className="space-y-2 text-blue-100">
                        <li><a href="/#home" className="hover:text-white">Accueil</a></li>
                        <li><a href="/#services" className="hover:text-white">Nos services</a></li>
                        <li><a href="/medecins" className="hover:text-white">Nos médecins</a></li>
                        <li><a href="/rdv" className="hover:text-white">Prendre rendez-vous</a></li>
                        <li><a href="/dossier" className="hover:text-white">Dossier à fournir</a></li>
                    </ul>
                </nav>

                <section>
                    <h2 className="mb-4 text-lg font-semibold">Nous contacter</h2>
                    <address className="space-y-3 not-italic text-blue-100">
                        <p>
                            <a href="/#location" className="hover:text-white">
                                Bd KASRI Ahmed, Draâ Ben Khedda, Tizi Ouzou
                            </a>
                        </p>
                        <p>
                            Urgences: <a href="tel:555555555" className="hover:text-white">555-555-555</a>
                            <br />
                            Rendez-vous: <a href="tel:555555555" className="hover:text-white">555-555-555</a>
                        </p>
                        <p><a href="mailto:ehs@gmail.com" className="hover:text-white">ehs@gmail.com</a></p>
                        <p>Dimanche - Jeudi : 8:30 - 16:00<br />Urgences : 24/24 et 7/7</p>
                    </address>
                </section>
            </div>

            <div className="border-t border-blue-800 px-6 py-4 text-center text-sm text-blue-200 sm:px-8 lg:px-12">
                © {new Date().getFullYear()} EHS Yacef Omar. Tous droits réservés.
            </div>
        </footer>
    )
}

export default Footer
