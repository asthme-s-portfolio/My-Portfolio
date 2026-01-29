import { useState, useEffect } from 'react';
import { Code2, Sparkles, Users, Award } from 'lucide-react';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Sparkles,
      title: 'Modern Stack',
      description: 'React, TypeScript, Next.js, Tailwind CSS'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Focused on accessibility and great UX'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards and patterns'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple-600">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with passion and precision
          </p>
        </div>

        {/* Bio Card */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Hi, I'm Kaasa Asthme
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I'm a passionate software developer specializing in creating beautiful, responsive, and user-friendly web applications. With a keen eye for design and a strong foundation in modern web technologies, I transform ideas into engaging digital experiences.
            </p>
            
            <p className="text-lg">
              My journey in web development has equipped me with expertise in React, TypeScript, and modern frameworks. I believe in writing clean, maintainable code while following industry best practices and accessibility standards.
            </p>
            
            <p className="text-lg">
              Beyond coding, I'm committed to continuous learning, contributing to open-source projects, and sharing knowledge with the developer community. I stay current with emerging technologies and industry trends to deliver cutting-edge solutions.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;