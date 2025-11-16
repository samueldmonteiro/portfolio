// components/projects/project-modal.jsx
import { useEffect } from 'react';
import Image from 'next/image';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import placeholder from '@/public/png/placeholder.png';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const hasCode = project?.code;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Slide */}
      <div 
        className={`fixed right-0 top-0 h-full w-full lg:w-1/2 xl:w-2/5 bg-gradient-to-b from-[#0d1224] to-[#0a0d37] z-50 shadow-2xl border-l border-[#1b2c68a0] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1b2c68a0]">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
          >
            <FaTimes className="text-xl" />
          </button>
          <h2 className="text-white text-xl font-semibold">Detalhes do Projeto</h2>
          <div className="w-10"></div> {/* Espaçamento para centralizar */}
        </div>

        {/* Conteúdo com scroll */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto">
          {/* Imagem principal */}
          <div className="relative h-60 lg:h-80">
            <Image
              src={project.image || placeholder}
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent"></div>
          </div>

          {/* Informações do projeto */}
          <div className="p-6 lg:p-8">
            {/* Título e role */}
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {project.name}
              </h1>
              <span className="text-[#16f2b3] bg-[#16f2b3]/10 px-3 py-1 rounded-full text-sm">
                {project.role}
              </span>
            </div>

            {/* Descrição */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3 text-lg">Sobre o Projeto</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tecnologias */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3 text-lg">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-amber-300 bg-amber-300/10 px-3 py-2 rounded-lg text-sm border border-amber-300/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {hasCode && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#0d1224] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex-1 justify-center"
                >
                  <FaGithub className="text-lg" />
                  Ver Código
                </a>
              )}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-200 flex-1 justify-center"
              >
                <FaExternalLinkAlt className="text-lg" />
                Ver Demo
              </a>
            </div>

            {/* Recursos adicionais (se existirem) */}
            {project.features && (
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-3 text-lg">Funcionalidades</h3>
                <ul className="text-gray-300 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#16f2b3] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;