// components/projects/project-card.jsx
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import placeholder from '@/public/png/placeholder.png';

const ProjectCard = ({ project, index }) => {
  const hasCode = project.code !== null;

  return (
    <div 
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Imagem do projeto */}
      <div className="relative h-40 lg:h-70 overflow-hidden">
        <Image
          src={project.image || placeholder}
          alt={project.name}
          fill
          className="
          object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

        
        {/* Overlay de informações */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {hasCode && (
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <FaGithub className="text-white text-lg" />
              </div>
            )}
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <FaExternalLinkAlt className="text-white text-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold text-lg line-clamp-1">
            {project.name}
          </h3>
          <span className="text-xs text-[#16f2b3] bg-[#16f2b3]/10 px-2 py-1 rounded-full">
            {project.role}
          </span>
        </div>

        <p className="text-gray-300 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool, i) => (
            <span
              key={i}
              className="text-xs text-amber-300 bg-amber-300/10 px-2 py-1 rounded-md"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-xs text-gray-400 bg-gray-400/10 px-2 py-1 rounded-md">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Indicador de clique */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-violet-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          Ver detalhes
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;