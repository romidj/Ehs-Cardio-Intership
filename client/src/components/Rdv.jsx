import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import downlad from '../assets/download.pdf';


const Rdv = () => {


  const [step, setStep] = useState(1);
  const [selectedSexe, setSelectedSexe] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    date_naissance: "",
    sexe: "",
    wilaya: "",
    commentaire: "",
    ordonnance: null,
  });

  const handleNext = () => {
    if (step === 1 && !selectedService) return alert("Choisissez un service");
    if (step === 2 && Options[selectedService] && !selectedOption)
      return alert("Choisissez un type");
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);



  const sexe = [
    {
      type: "Homme"
    },
    {
      type: "Femme"
    }
  ]
  const Wilayas = [
    { nbr: 1, name: "Adrar" },
    { nbr: 2, name: "Chlef" },
    { nbr: 3, name: "Laghouat" },
    { nbr: 4, name: "Oum El Bouaghi" },
    { nbr: 5, name: "Batna" },
    { nbr: 6, name: "Béjaïa" },
    { nbr: 7, name: "Biskra" },
    { nbr: 8, name: "Béchar" },
    { nbr: 9, name: "Blida" },
    { nbr: 10, name: "Bouira" },
    { nbr: 11, name: "Tamanrasset" },
    { nbr: 12, name: "Tébessa" },
    { nbr: 13, name: "Tlemcen" },
    { nbr: 14, name: "Tiaret" },
    { nbr: 15, name: "Tizi Ouzou" },
    { nbr: 16, name: "Alger" },
  ]
  const Services = [
    { value: "Cardiology", label: "Consultation Cardiologie" },
    { value: "Chirurgie_Cardiaque", label: "Chirurgie Cardiaque" },
    { value: "Laboratoire", label: "Laboratoire" },
    { value: "Radiologie", label: "Radiologie" },
    { value: "Anestésie Rhéanimation", label: "Anestésie Rhéanimation" }


  ]
  const Options = {
    Radiologie: [
      { value: "IRM", label: "IRM" },
      { value: "Scanner", label: "Scanner" },
    ],
    Laboratoire: [
      { value: "Sang", label: "Analyse de sang" },
      { value: "ush", label: "Ush" },
      { value: "Urine", label: "Analyse d'urine" },
    ]
  };
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


        <section id='about' className='overflow-hidden pb-10 bg-gradient-to-r from-blue-100 to-red-100'>
          <div className='container mx-auto px-4'>
            <aside className='bg-white rounded-2xl p-5 md:p-10 shadow-lg relative overflow-hidden'>
              {step === 1 && (
                <>
                  <header className="flex justify-between">
                    <h2 className="text-2xl text-blue-950 font-bold mb-4">Choisissez le service</h2>
                    <h2 className='text-red-700 text-2xl font-bold mb-2 '>Etape 1/2</h2>
                  </header>
                  <select
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      setSelectedOption("");
                    }}
                    className="border p-2 rounded w-full"
                  >
                    <option value="">-- Choisissez --</option>
                    {Services.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>

                  {Options[selectedService] && (
                    <div className="mt-4">
                      <label className="block text-blue-950 font-medium mb-2">Type</label>
                      <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="border p-2 rounded w-full"
                      >
                        <option value="">-- Choisissez --</option>
                        {Options[selectedService].map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="mt-4 text-right">
                    <button
                      onClick={() => {
                        if (!selectedService) return alert("Choisissez un service");
                        if (Options[selectedService] && !selectedOption) return alert("Choisissez un type");
                        setStep(2);
                      }}
                      className="px-4 py-2 bg-red-700 text-white rounded"
                    >
                      Suivant
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>

                  <header className="flex justify-between">
                    <h2 className="text-2xl text-blue-950 font-bold mb-4">Informations personnelles</h2>
                    <h2 className='text-red-700 text-2xl font-bold mb-2 '>Etape 2/2</h2>
                  </header>                  <form className="space-y-6">
                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-blue-950 font-medium mb-2">Nom et Prénom</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="Nom et Prénom"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-blue-950 font-medium mb-2">Numéro de téléphone</label>
                        <input
                          type="tel"
                          id="tel"
                          name="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="0X XX XX XX XX"
                          required
                        />
                      </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-blue-950 font-medium mb-2">Date de Naissace</label>
                        <input
                          type="date"
                          id="date_naissance"
                          name="date_naissance"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="Nom et Prénom"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-blue-950 font-medium mb-2">Sexe</label>
                        <select
                          id="sexe"
                          name="sexe"
                          value={selectedSexe}
                          onChange={(e) => setSelectedSexe(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        >
                          <option value="" disabled>Veuillez choisir</option>
                          {sexe.map((Sexe) => (
                            <option key={Sexe.type} value={Sexe.type}>
                              {Sexe.type}
                            </option>
                          ))}
                        </select>

                      </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <div>
                        <label className="block text-blue-950 font-medium">Wilaya</label>
                        <select
                          id="wilaya"
                          name="wilaya"
                          value={selectedWilaya}
                          onChange={(e) => setSelectedWilaya(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        >
                          <option value="" disabled>Veuillez choisir</option>
                          {Wilayas.map((wilaya) => (
                            <option key={wilaya.nbr} value={wilaya.name}>
                              {wilaya.name}
                            </option>
                          ))}
                        </select>

                      </div>
                      <div>
                        <label className="block text-blue-950 font-medium mb-2">Joindre une ordonnance</label>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          capture="environment"
                          className="w-full text-blue-950 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-700 file:text-white hover:file:bg-red-600"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Vous pouvez sélectionner un fichier ou prendre une photo avec votre appareil.
                        </p>
                      </div>

                    </fieldset>
                    <fieldset>
                      {selectedService === "Radiologie" && selectedOption === "IRM" && (
                        <div>
                          <a
                            href={downlad}  // <-- put your file path here
                            download="Formulaire_IRM.pdf"
                            className="inline-block px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
                          >
                            Télécharger le formulaire IRM
                          </a>
                        </div>
                      )}
                    </fieldset>
                    <fieldset className="space-y-6">
                      <div>
                        <label className="block text-blue-950 font-medium mb-2">Commentaire</label>
                        <textarea
                          id="commentaire"
                          name="commentaire"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                          placeholder="Quelque chose à ajouter ? Préference de date ou d'heure ? ..."
                        />
                      </div>


                    </fieldset>

                    <div className='flex justify-between items-center mt-6'>
                      <button
                        onClick={handlePrev}
                        className="px-4 py-2 bg-gray-400 text-white rounded-full"
                      >
                        Retour
                      </button>
                      <button
                        type="submit"
                        className=" bg-red-700 border-red-700 text-white font-medium px-8 py-3 rounded-full 
                        hover:bg-transparent hover:text-red-700 hover:border hover:border-red-700 transition shadow-lg"
                      >
                        Prendre Rendez-vous
                      </button>

                    </div>

                  </form>
                </>
              )}
            </aside>
          </div>


        </section>
      </div>
    </article >
  );
};

export default Rdv;
