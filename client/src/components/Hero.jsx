import React from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
    const stats = [
        { value: '10 ans+', label: "D'experience" },
        { value: '40+', label: 'Médecins' },
        { value: '30+', label: 'Machines' },
        { value: '80+', label: "Lits d'hospitaisation" },
    ];

    return (
        <section
            id="home"
            className="bg-gradient-to-r from-blue-100 to-red-100 flex items-start pt-4"
        >
            <article className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-start gap-8">
                {/* Left: Text */}
                <div className="md:w-1/2 text-center my-12 md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">
                        EHS <mark className="text-blue-800 bg-transparent">Yacef Omar</mark>
                    </h1>
                    <p className="text-lg text-blue-950 mb-6 max-w-xl mx-auto md:mx-0">
                        L’EHS Yacef Omar, situé à Draâ Ben Khedda, est un hôpital spécialisé
                        en cardiologie et chirurgie cardiaque.
                    </p>
                    <nav className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <a
                            href="/rdv"
                            className="bg-red-700 border-red-700 text-white font-medium px-6 py-3 rounded-full shadow
             hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700 transition-colors duration-200"
                        >
                            Prendre Un Rendez-vous
                        </a>

                        <a
                            href="/dossier"
                            className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-6 py-3 rounded-full shadow"
                        >
                            Dossier à fournir
                        </a>
                    </nav>

                    <ul className="flex flex-wrap justify-center md:justify-start gap-6">
                        {stats.map((item, idx) => (
                            <li key={idx}>
                                <strong className="text-2xl font-bold text-blue-800">{item.value}</strong>
                                <p className="text-sm text-blue-900">{item.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Image */}
                <figure className="md:w-1/2 flex justify-center">
                    <div className="relative my-2 w-full max-w-sm">
                        <span className="absolute bg-blue-400 rounded-full w-62 h-62 -top-7 -left-6 opacity-20"></span>
                        <span className="absolute bg-red-400 rounded-full w-55 h-55 -bottom-0.5 -right-10 opacity-20"></span>
                        <img
                            src={hero}
                            alt="Heart Illustration"
                            className="relative z-10 rounded-full  w-58 md:w-80 object-cover"
                            width="200"
                            height="200"
                            loading="eager"
                        />
                    </div>
                </figure>
            </article>
        </section>

    );
};

export default Hero;
