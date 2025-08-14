import React from 'react'

const Dossier_Comp = () => {
    return (

        <section id='specialists' className='py-20 overflow-hidden bg-gradient-to-r from-blue-100 to-red-100 ' >
            <div className='container mx-auto px-4'>
                <header className='text-center mb-16 relatice'>
                    <span className='absolute -top-10 -left-1/2 transform -translate-x-0.5 w-20 h-20 rounded-full bg-red-100 opacity-30 z-0 ' aria-hidden='true'></span>
                    <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-2 relative z-10'> Dossier à fournir pour demander Hospitalisation dans le service Chirurgical</h2>
                </header>
                                <aside className='mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden'>
                    <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-300 opacity-40' aria-hidden='true'></span>
                    <div className='relative z-10'>
                        <h2 className='text-3xl font-bold text-red-700'> Préparez votre dossier, sans vous déplacer! </h2>
                        <span className='text-lg text-blue-900 mb-6'>
                            Avant votre chirurgie, préparez tous vos documents médicaux à l'avance.
                        </span>
                        <p className='text-lg text-blue-900 mb-6 font-medium'>Consultez la liste complète ici.</p>
                    </div>
                   


                </aside>
            </div>
        </section>
    )
}

export default Dossier_Comp