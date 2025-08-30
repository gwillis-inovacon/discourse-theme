import React, { useState } from 'react';
import { Code2, Users, MessageSquare, Zap, ArrowRight, Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
import { LanguageSelector } from './components/LanguageSelector';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './translations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-yellow-400 bg-black relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 border-2 border-black transform rotate-12"></div>
              <span className="text-2xl font-bold text-yellow-400">YoDev</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-yellow-400 transition-colors border-2 border-transparent hover:border-yellow-400 px-3 py-1">
                {t.nav.features}
              </a>
              <a href="#community" className="text-white hover:text-yellow-400 transition-colors border-2 border-transparent hover:border-yellow-400 px-3 py-1">
                {t.nav.community}
              </a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors border-2 border-transparent hover:border-yellow-400 px-3 py-1">
                {t.nav.about}
              </a>
              <LanguageSelector language={language} onLanguageChange={setLanguage} />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSelector language={language} onLanguageChange={setLanguage} />
              <button 
                className="text-yellow-400 border-2 border-yellow-400 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t-2 border-yellow-400 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-white hover:text-yellow-400 transition-colors border-2 border-transparent hover:border-yellow-400 px-3 py-2">
                  {t.nav.features}
                </a>
                <a href="#community" className="text-white hover:text-yellow-400 transition-colors border-2 border-transparent hover:border-yellow-400 px-3 py-2">
                  {t.nav.community}
                </a>
                <a href="#about" className="text-white hover:text-yellow-400 transition-colors border-2 border-transparent hover:border-yellow-400 px-3 py-2">
                  {t.nav.about}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block bg-yellow-400 text-black px-6 py-2 transform -rotate-2 border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
                <span className="font-bold">{t.hero.badge}</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">{t.hero.title.where}</span>
              <span className="block text-yellow-400 transform rotate-1">{t.hero.title.developers}</span>
              <span className="block text-white">{t.hero.title.connect}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-yellow-400 text-black px-8 py-4 font-bold text-lg border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center space-x-2">
                <span>{t.hero.joinCommunity}</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="border-4 border-yellow-400 text-yellow-400 px-8 py-4 font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 flex items-center space-x-2">
                <Code2 size={20} />
                <span>{t.hero.exploreTopics}</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Geometric Background Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 transform rotate-45 opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-4 border-yellow-400 transform rotate-12 opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white transform -rotate-12 opacity-10"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-black border-t-8 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-black text-yellow-400 px-4 py-2 transform rotate-1 inline-block border-4 border-black">
                {t.features.title}
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare size={32} />,
                title: t.features.items.discussions.title,
                description: t.features.items.discussions.description
              },
              {
                icon: <Users size={32} />,
                title: t.features.items.experts.title,
                description: t.features.items.experts.description
              },
              {
                icon: <Code2 size={32} />,
                title: t.features.items.reviews.title,
                description: t.features.items.reviews.description
              },
              {
                icon: <Zap size={32} />,
                title: t.features.items.help.title,
                description: t.features.items.help.description
              },
              {
                icon: <Github size={32} />,
                title: t.features.items.showcase.title,
                description: t.features.items.showcase.description
              },
              {
                icon: <Users size={32} />,
                title: t.features.items.career.title,
                description: t.features.items.career.description
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                <div className="text-yellow-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section id="community" className="py-20 bg-yellow-400 text-black border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-black text-yellow-400 px-4 py-2 transform -rotate-1 inline-block border-4 border-black">
                {t.community.title}
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "10K+", label: t.community.stats.developers },
              { number: "50K+", label: t.community.stats.discussions },
              { number: "24/7", label: t.community.stats.support }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-black text-yellow-400 p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:rotate-1 transition-transform duration-200"
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t-8 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-white">{t.cta.title.ready}</span>
            <br />
            <span className="text-yellow-400 transform inline-block rotate-1">{t.cta.title.levelUp}</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.cta.description}
          </p>
          
          <button className="bg-yellow-400 text-black px-12 py-6 font-bold text-xl border-4 border-black shadow-[12px_12px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center space-x-3 mx-auto">
            <span>{t.cta.getStarted}</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black border-t-8 border-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-black border-2 border-black transform rotate-12"></div>
                <span className="text-2xl font-bold">YoDev</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-black inline-block">{t.footer.quickLinks.title}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-black border-2 border-transparent hover:border-black px-2 py-1 transition-all">{t.footer.quickLinks.guidelines}</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black border-2 border-transparent hover:border-black px-2 py-1 transition-all">{t.footer.quickLinks.help}</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black border-2 border-transparent hover:border-black px-2 py-1 transition-all">{t.footer.quickLinks.privacy}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-black inline-block">{t.footer.connect}</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-black text-white p-3 border-2 border-black hover:bg-yellow-400 hover:text-black transition-all duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-black text-white p-3 border-2 border-black hover:bg-yellow-400 hover:text-black transition-all duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-black text-white p-3 border-2 border-black hover:bg-yellow-400 hover:text-black transition-all duration-200">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-black mt-12 pt-8 text-center">
            <p className="text-gray-700 font-bold">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;