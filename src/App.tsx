import React, { useState } from 'react';
import { Search, TrendingUp, MessageSquare, Users, Plus, ChevronUp, ChevronDown, Share, Bookmark, MoreHorizontal } from 'lucide-react';
import { LanguageSelector } from './components/LanguageSelector';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './translations';

interface Post {
  id: number;
  title: string;
  author: string;
  community: string;
  timeAgo: string;
  votes: number;
  comments: number;
  content?: string;
  isUpvoted?: boolean;
  isDownvoted?: boolean;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "¿Cuál es la mejor manera de aprender React en 2025?",
      author: "devlatino",
      community: "r/ReactJS",
      timeAgo: "hace 2 horas",
      votes: 127,
      comments: 45,
      content: "Estoy empezando en el desarrollo web y quiero enfocarme en React. ¿Qué recursos recomiendan para este año?"
    },
    {
      id: 2,
      title: "Nuevo framework CSS que está revolucionando el diseño web",
      author: "designpro",
      community: "r/WebDev",
      timeAgo: "hace 4 horas",
      votes: 89,
      comments: 23,
      content: "He estado probando este nuevo framework y los resultados son increíbles..."
    },
    {
      id: 3,
      title: "Comparación: Next.js vs Astro vs SvelteKit en 2025",
      author: "fullstackdev",
      community: "r/JavaScript",
      timeAgo: "hace 6 horas",
      votes: 234,
      comments: 78,
      content: "Después de usar los tres frameworks en proyectos reales, aquí está mi análisis completo..."
    },
    {
      id: 4,
      title: "Tutorial: Cómo implementar autenticación con Supabase",
      author: "backendmaster",
      community: "r/Supabase",
      timeAgo: "hace 8 horas",
      votes: 156,
      comments: 34,
      content: "Guía paso a paso para implementar autenticación segura usando Supabase Auth..."
    }
  ]);

  const handleVote = (postId: number, voteType: 'up' | 'down') => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        let newVotes = post.votes;
        let isUpvoted = post.isUpvoted;
        let isDownvoted = post.isDownvoted;

        if (voteType === 'up') {
          if (isUpvoted) {
            newVotes -= 1;
            isUpvoted = false;
          } else {
            newVotes += isDownvoted ? 2 : 1;
            isUpvoted = true;
            isDownvoted = false;
          }
        } else {
          if (isDownvoted) {
            newVotes += 1;
            isDownvoted = false;
          } else {
            newVotes -= isUpvoted ? 2 : 1;
            isDownvoted = true;
            isUpvoted = false;
          }
        }

        return { ...post, votes: newVotes, isUpvoted, isDownvoted };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Header */}
      <header className="bg-white border-b-2 border-orange-500 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YD</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">YoDev</span>
              </div>
              
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
                <Search size={20} className="text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Buscar en YoDev..."
                  className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
                <TrendingUp size={20} />
                <span>Popular</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
                <MessageSquare size={20} />
                <span>Reciente</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
                <Users size={20} />
                <span>Comunidades</span>
              </button>
              <LanguageSelector language={language} onLanguageChange={setLanguage} />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <Plus size={16} />
                <span>Crear Post</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Search size={24} className="text-gray-600" />
              <LanguageSelector language={language} onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                    <TrendingUp size={16} />
                    <span>Popular</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 px-4 py-2 rounded-full transition-colors">
                    <MessageSquare size={16} />
                    <span>Nuevo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 px-4 py-2 rounded-full transition-colors">
                    <TrendingUp size={16} />
                    <span>Top</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex">
                    {/* Vote Section */}
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-l-lg">
                      <button 
                        onClick={() => handleVote(post.id, 'up')}
                        className={`p-1 rounded hover:bg-gray-200 transition-colors ${
                          post.isUpvoted ? 'text-orange-500' : 'text-gray-400'
                        }`}
                      >
                        <ChevronUp size={20} />
                      </button>
                      <span className={`font-bold text-sm ${
                        post.isUpvoted ? 'text-orange-500' : 
                        post.isDownvoted ? 'text-blue-500' : 'text-gray-700'
                      }`}>
                        {post.votes}
                      </span>
                      <button 
                        onClick={() => handleVote(post.id, 'down')}
                        className={`p-1 rounded hover:bg-gray-200 transition-colors ${
                          post.isDownvoted ? 'text-blue-500' : 'text-gray-400'
                        }`}
                      >
                        <ChevronDown size={20} />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <span className="font-bold text-gray-700">{post.community}</span>
                        <span>•</span>
                        <span>Por u/{post.author}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                      
                      <h2 className="text-lg font-bold text-gray-900 mb-2 hover:text-orange-500 cursor-pointer transition-colors">
                        {post.title}
                      </h2>
                      
                      {post.content && (
                        <p className="text-gray-700 mb-4 line-clamp-2">
                          {post.content}
                        </p>
                      )}

                      {/* Post Actions */}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                          <MessageSquare size={16} />
                          <span>{post.comments} comentarios</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                          <Share size={16} />
                          <span>Compartir</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                          <Bookmark size={16} />
                          <span>Guardar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Create Post Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-3">Crear una publicación</h3>
                <button className="w-full bg-orange-500 text-white py-2 rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                  <Plus size={16} />
                  <span>Crear Post</span>
                </button>
              </div>

              {/* Popular Communities */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-4">Comunidades Populares</h3>
                <div className="space-y-3">
                  {[
                    { name: 'r/ReactJS', members: '2.1M', icon: '⚛️' },
                    { name: 'r/JavaScript', members: '3.4M', icon: '🟨' },
                    { name: 'r/WebDev', members: '1.8M', icon: '🌐' },
                    { name: 'r/Frontend', members: '956K', icon: '🎨' },
                    { name: 'r/Backend', members: '743K', icon: '⚙️' }
                  ].map((community, index) => (
                    <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{community.icon}</span>
                        <div>
                          <div className="font-bold text-sm text-gray-900">{community.name}</div>
                          <div className="text-xs text-gray-500">{community.members} miembros</div>
                        </div>
                      </div>
                      <button className="text-orange-500 hover:text-orange-600 text-sm font-bold">
                        Unirse
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Stats */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-4">Estadísticas de YoDev</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Desarrolladores activos</span>
                    <span className="font-bold text-orange-500">10,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posts hoy</span>
                    <span className="font-bold text-orange-500">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comunidades</span>
                    <span className="font-bold text-orange-500">47</span>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-bold text-gray-900 mb-4">Reglas de la Comunidad</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-orange-500">1.</span>
                    <span>Mantén el respeto y la cortesía</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-orange-500">2.</span>
                    <span>No spam ni autopromoción excesiva</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-orange-500">3.</span>
                    <span>Usa títulos descriptivos</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-orange-500">4.</span>
                    <span>Comparte código con formato adecuado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;