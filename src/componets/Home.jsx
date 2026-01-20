import { Linkedin, Github, Twitter, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

function HomePage({ setActiveSection }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => setIsVisible(true), 50);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Git'];

  const handleGetInTouch = () => {
    if (setActiveSection) {
      setActiveSection('contact');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 px-6">
      {/* Animated background gradient blob */}
      <div 
        className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
          transition: 'all 0.3s ease-out'
        }}
      />
      <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000 right-0 bottom-0" />
      
      {/* Content */}
      <div className={`relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Profile Image Section with Rotating Border */}
        <div className="relative group">
          {/* Rotating gradient border */}
          <div className="absolute inset-0 rounded-full animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 blur-md opacity-75"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
          
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300 bg-white">
            <div className="w-full h-full relative">
              <img 
                src="/kaasa.png" 
                alt="Kaasa Asthme" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping animation-delay-1000" />
            </div>
          </div>
          
          {/* Orbiting tech icons */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-purple-200">
              <span className="text-purple-600 font-bold text-xs">JS</span>
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow animation-delay-1000">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-200">
              <span className="text-blue-600 font-bold text-xs">TS</span>
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow animation-delay-2000">
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-cyan-200">
              <span className="text-cyan-600 font-bold text-xs">⚛️</span>
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow animation-delay-3000">
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-pink-200">
              <span className="text-pink-600 font-bold text-xs">CSS</span>
            </div>
          </div>
          
          {/* Status badge */}
          <div className="absolute bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Available for work
          </div>
        </div>

        {/* Text Content Section */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          {/* Greeting */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Sparkles className="text-purple-600 animate-pulse" size={20} />
            <p className="text-purple-600 font-bold text-sm tracking-widest uppercase">
              Hi there! I'm
            </p>
          </div>

          {/* Name with gradient */}
          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              KAASA ASTHME
            </span>
          </h1>

          {/* Subtitle with typing effect visual */}
          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 flex items-center justify-center lg:justify-start gap-2">
              Front-End Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Crafting pixel-perfect, responsive web experiences with modern technologies. 
            I transform ideas into elegant, user-friendly interfaces that make an impact.
          </p>

          {/* Skills badges - Interactive buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {skills.map((skill, index) => (
              <button 
                key={skill}
                className="px-5 py-2.5 bg-white/90 backdrop-blur-sm text-purple-700 rounded-full text-sm font-bold shadow-md border-2 border-purple-200 hover:shadow-xl hover:scale-110 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 cursor-pointer active:scale-95"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="/src/assets/KaasaAsthmeCV.docx" 
              download="KaasaAsthme_Resume.docx"
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
              <ArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <button 
              onClick={handleGetInTouch}
              className="group px-8 py-4 rounded-full font-bold border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="https://www.linkedin.com/in/kaasa-asthme-4b335634b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-full hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Linkedin className="text-purple-600 group-hover:text-white transition-colors" size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-full hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Github className="text-purple-600 group-hover:text-white transition-colors" size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-full hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Twitter className="text-purple-600 group-hover:text-white transition-colors" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-purple-600" size={32} />
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}

export default HomePage;