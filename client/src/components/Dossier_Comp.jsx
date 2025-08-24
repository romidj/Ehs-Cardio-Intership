import React from 'react'

const Dossier_Comp = () => {
  return (
    <section
      id="specialists"
      className="py-20 overflow-hidden bg-gradient-to-r from-blue-100 to-red-100"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 relative">
          <span
            className="absolute -top-10 -left-1/2 transform -translate-x-0.5 w-20 h-20 rounded-full bg-red-100 opacity-30 z-0"
            aria-hidden="true"
          ></span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 relative z-10">
            Dossier à fournir pour demander Hospitalisation dans le service
            Chirurgical
          </h2>
        </header>

        <aside className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-300 opacity-40"
            aria-hidden="true"
          ></span>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-red-700">
              Préparez votre dossier, sans vous déplacer!
            </h2>
            <p className="text-lg text-blue-900 mb-6">
              Avant votre chirurgie, préparez tous vos documents médicaux à
              l'avance.
            </p>
            <p className="text-lg text-blue-900 mb-6 font-medium">
              Consultez la liste complète ici :
            </p>

            <ul className="list-disc pl-6 space-y-2 text-blue-900">
              <li>Lettre d’orientation (Referral letter)</li>
              <li>Electrocardiogramme (ECG) – ne dépasse pas 1 mois</li>
              <li>Écho doppler cardiaque – ne dépasse pas 3 mois</li>
              <li>Écho doppler du TSA (tronc supra aortique)</li>
              <li>Télé thorax de face numérique – ne dépasse pas 3 mois</li>
              <li>Exploration fonctionnelle respiratoire – ne dépasse pas 3 mois</li>
              <li>Expertise dentaire</li>
              <li>Écho abdominale avec compte rendu – ne dépasse pas 3 mois</li>
              <li>
                <strong>Bilan sanguin :</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>Groupage sanguin</li>
                  <li>FNS</li>
                  <li>TP, TCK, INR</li>
                  <li>Glycémie</li>
                  <li>Urée, Créatinine</li>
                  <li>Sérologies: HIV, HBs, HCV</li>
                  <li>Chimie urinaire</li>
                  <li>Fibrinogène, HbA1C, VS, CRP</li>
                  <li>Bilan lipidique-ionogramme sanguin</li>
                  <li>TSHus</li>
                  <li>FT3, FT4</li>
                </ul>
              </li>
              <li>Sérologie COVID-19 IGM/IGG</li>
              <li>
                Numéro de téléphone personnel + 2 numéros de personnes à
                contacter
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Dossier_Comp
