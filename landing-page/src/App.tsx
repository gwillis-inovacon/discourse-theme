import React from 'react';
import { Code2, Users, Zap, Globe, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-yodev-orange" />
              <span className="ml-2 text-2xl font-bold text-gray-900">YoDev</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-yodev-orange transition-colors">Características</a>
              <a href="#community" className="text-gray-600 hover:text-yodev-orange transition-colors">Comunidad</a>
              <a href="#about" className="text-gray-600 hover:text-yodev-orange transition-colors">Acerca de</a>
            </nav>
            <button className="bg-yodev-orange text-white px-6 py-2 rounded-lg hover:bg-yodev-orange-dark transition-colors">
              Únete Ahora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            La comunidad de
            <span className="text-yodev-orange"> desarrolladores</span>
            <br />más grande de América Latina
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conecta con miles de desarrolladores, comparte conocimiento, encuentra oportunidades 
            y haz crecer tu carrera en tecnología junto a la comunidad más vibrante de la región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yodev-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yodev-orange-dark transition-all transform hover:scale-105 flex items-center justify-center">
              Comenzar Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-yodev-orange hover:text-yodev-orange transition-colors">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir YoDev?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos las mejores herramientas y recursos para que puedas crecer como desarrollador
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-yodev-orange hover:text-white transition-all duration-300 group">
              <Users className="h-12 w-12 mx-auto mb-4 text-yodev-orange group-hover:text-white" />
              <h3 className="text-xl font-semibold mb-4">Comunidad Activa</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Más de 50,000 desarrolladores activos compartiendo conocimiento y experiencias
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-yodev-orange hover:text-white transition-all duration-300 group">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yodev-orange group-hover:text-white" />
              <h3 className="text-xl font-semibold mb-4">Aprendizaje Rápido</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Tutoriales, workshops y mentorías para acelerar tu crecimiento profesional
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-yodev-orange hover:text-white transition-all duration-300 group">
              <Globe className="h-12 w-12 mx-auto mb-4 text-yodev-orange group-hover:text-white" />
              <h3 className="text-xl font-semibold mb-4">Red Global</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Conecta con desarrolladores de toda América Latina y expande tu red profesional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-r from-yodev-orange to-yodev-orange-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Únete a miles de desarrolladores
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-yodev-orange-light">Desarrolladores</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-yodev-orange-light">Países</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-yodev-orange-light">Interacciones</div>
            </div>
          </div>
          <button className="bg-white text-yodev-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Explorar Comunidad
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Code2 className="h-8 w-8 text-yodev-orange" />
                <span className="ml-2 text-2xl font-bold">YoDev</span>
              </div>
              <p className="text-gray-400">
                La comunidad de desarrolladores más grande de América Latina
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Comunidad</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Foros</a></li>
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Eventos</a></li>
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Mentorías</a></li>
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Jobs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Tutoriales</a></li>
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yodev-orange transition-colors">Newsletter</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Github className="h-6 w-6 text-gray-400 hover:text-yodev-orange cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-yodev-orange cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-yodev-orange cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 YoDev. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;