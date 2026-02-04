import { motion } from "framer-motion";
import { Award, TrendingUp, Zap, Code2 } from "lucide-react";
import { useState } from 'react';

// Logo component for tech stack
const TechLogo = ({ name, level, color, delay = 0 }) => {
  const [imageError, setImageError] = useState(false);
  
  // Map tech names to logo URLs (using CDN for real logos)
  const logoMap = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Material UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative"
    >
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
        {/* Logo */}
        <div className="w-16 h-16 mx-auto mb-4 relative">
          {!imageError ? (
            <img 
              src={logoMap[name]} 
              alt={`${name} logo`}
              className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-purple-600">
              {name[0]}
            </div>
          )}
        </div>
        
        {/* Tech Name */}
        <h4 className="text-center font-semibold text-gray-800 mb-3 text-sm">
          {name}
        </h4>
        
        {/* Progress Ring */}
        <div className="relative w-20 h-20 mx-auto">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-200"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="32"
              stroke={color}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 32}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - level / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-800">
              {level}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function SkillsPage() {
  const techStack = [
    { name: "React", level: 80, color: "#61DAFB" },
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "HTML5", level: 95, color: "#E34F26" },
    { name: "CSS3", level: 95, color: "#1572B6" },
    { name: "Tailwind CSS", level: 65, color: "#06B6D4" },
    { name: "Oracle", level: 80, color: "#764ABC" },
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "Express", level: 78, color: "#000000" },
    { name: "PostgreSQL", level: 70, color: "#4169E1" },
    { name: "GitHub", level: 90, color: "#181717" },
    { name: "VS Code", level: 95, color: "#007ACC" },
    { name: "Figma", level: 70, color: "#F24E1E" },
    { name: "NestJS", level: 60, color: "#C21325" },
    { name: "Material UI", level: 75, color: "#8DD6F9" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 inline-flex items-center gap-3 justify-center">
              Technology Stack
            </h3>
            <p className="text-gray-600 mt-2">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <TechLogo
                key={tech.name}
                {...tech}
                delay={index * 0.05}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        

        {/* Call to Action */}
        
      </div>
    </section>
  );
}

export default SkillsPage;