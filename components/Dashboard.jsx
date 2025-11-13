import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-indigo-600">UtopiaHire</h1>
        <nav className="space-x-4 text-sm text-gray-700">
          <a href="#" className="hover:text-indigo-500">Dashboard</a>
          <a href="#" className="hover:text-indigo-500">Analyse CV</a>
          <a href="#" className="hover:text-indigo-500">Entretien IA</a>
          <a href="#" className="hover:text-indigo-500">Offres d'emploi</a>
          <a href="#" className="hover:text-indigo-500">Profil</a>
        </nav>
      </header>

      {/* Welcome Message */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Bonjour ! Prêt à booster votre carrière ? 🚀</h2>
        <p className="text-gray-600">Utilisez l'intelligence artificielle pour optimiser votre recherche d'emploi</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'CV analysés', value: 2847 },
          { label: 'Entretiens simulés', value: 1293 },
          { label: 'Offres matchées', value: 5621 },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-sm text-gray-700">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Interactive Options */}
      <section className="grid grid-cols-3 gap-4 mb-6">
        {[
          {
            title: 'Analyser mon CV',
            desc: 'Obtenez une analyse détaillée et des suggestions d\'amélioration',
          },
          {
            title: 'Simuler un entretien',
            desc: 'Pratiquez avec notre IA pour être prêt le jour J',
          },
          {
            title: 'Voir les offres',
            desc: 'Découvrez les opportunités qui correspondent à votre profil',
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-indigo-600">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Commencer</button>
          </div>
        ))}
      </section>

      {/* Progress Tracking */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Suivi de progression</h3>
        {[
          { label: 'Profil complété', value: 75 },
          { label: 'CV optimisé', value: 60 },
          { label: 'Préparation entretien', value: 40 },
        ].map((item, i) => (
          <div key={i} className="mb-2">
            <div className="text-sm text-gray-600">{item.label}</div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div className="bg-indigo-500 h-2 rounded" style={{ width: `${item.value}%` }}></div>
            </div>
          </div>
        ))}
      </section>

      {/* Daily Recommendations */}
      <section>
        <h3 className="font-semibold text-gray-700 mb-2">Recommandations du jour</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Améliorez votre section compétences : Ajoutez des compétences techniques recherchées</li>
          <li>Pratiquez les entretiens comportementaux : Préparez-vous aux questions sur vos expériences</li>
          <li>3 nouvelles offres correspondent à votre profil</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;