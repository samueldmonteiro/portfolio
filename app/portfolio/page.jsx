'use client';

import { useState, useEffect } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import Image from 'next/image';
import { FiArrowRight, FiTrendingUp, FiX, FiExternalLink, FiCheck } from 'react-icons/fi';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'web', label: 'Websites' },
    { id: 'mobile', label: 'Apps Mobile' },
    { id: 'design', label: 'Design & UI/UX' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1224] via-[#0a0e1f] to-[#0d1224]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,60,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(200,60,255,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight px-2">
            <span className="bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
              Projetos que
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Geram Resultados
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
            Soluções digitais desenvolvidas para empresas que buscam crescimento,
            inovação e resultados mensuráveis.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            {[
              { number: '3', label: 'Projetos Entregues' },
              { number: '3', label: 'Clientes Satisfeitos' },
              { number: '100%', label: 'Taxa de Sucesso' },
              { number: '1', label: 'Ano de Mercado' },
            ].map((stat, idx) => (
              <div key={idx} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-violet-950/30 to-purple-950/30 border border-violet-500/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-br from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-4 md:py-6 sticky top-0 z-40 bg-[#0d1224]/95 backdrop-blur-xl border-b border-violet-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 scale-105'
                  : 'bg-violet-950/30 text-gray-400 hover:text-white hover:bg-violet-950/50 border border-violet-500/20'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                index={index}
                isActive={activeProject === project.id}
                onActivate={() => setActiveProject(project.id)}
                onDeactivate={() => setActiveProject(null)}
                onOpenModal={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-purple-600/10 to-pink-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,60,255,0.1),transparent_70%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-full mb-6 md:mb-8">
            <FiTrendingUp className="text-violet-400 text-sm md:text-base" />
            <span className="text-violet-300 font-medium text-sm md:text-base">Próximo Nível</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight px-2">
            <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              Pronto para Transformar
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Seu Negócio?
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Vamos criar uma solução digital que coloque sua empresa à frente da concorrência
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center px-2">
            <a
              href="https://wa.me/5598970051778?text=Olá!%20Quero%20iniciar%20um%20novo%20projeto!"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-full text-white font-bold text-sm md:text-base transition-all duration-300 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 flex items-center justify-center gap-2 md:gap-3"
            >
              Iniciar Projeto
              <FiArrowRight className="text-base md:text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const ProjectShowcase = ({ project, index, onActivate, onDeactivate, onOpenModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = project.images || [project.image]; // Fallback para compatibilidade

  const changeImage = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    changeImage(newIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
  };

  return (
    <article
      className="w-full group relative overflow-hidden rounded-[12px] bg-gradient-to-br from-[#1a1443] to-[#0d1224] border border-violet-500/10 hover:border-violet-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      {/* Image with Overlay */}
      <div className="relative w-full aspect-video overflow-hidden cursor-pointer group/image bg-gradient-to-br from-violet-950/20 to-purple-950/20" onClick={onOpenModal}>
        <div className="absolute inset-0 "></div>

        <Image
          src={images[currentImageIndex]}
          alt={`${project.name} - Imagem ${currentImageIndex + 1}`}
          fill
          className={`object-contain transition-all duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          style={{ transition: 'opacity 300ms ease-in-out, transform 700ms ease-out' }}
          priority={index < 2}
        />

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              disabled={isTransitioning}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-1.5 md:p-2 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-all duration-300 disabled:opacity-50"
            >
              <FiArrowRight className="text-white text-base md:text-xl rotate-180" />
            </button>
            <button
              onClick={nextImage}
              disabled={isTransitioning}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-1.5 md:p-2 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-all duration-300 disabled:opacity-50"
            >
              <FiArrowRight className="text-white text-base md:text-xl" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 md:gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isTransitioning) changeImage(idx);
                  }}
                  disabled={isTransitioning}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                    ? 'w-8 bg-violet-400'
                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 md:top-4 right-3 md:right-6 z-20">
          <div className="px-3 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white text-xs md:text-sm font-bold shadow-lg backdrop-blur-sm">
            {project.role}
          </div>
        </div>

        {/* Quick Stats Overlay - Hidden on mobile */}
        <div className="hidden md:flex absolute bottom-6 left-6 right-6 z-20 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          {project.metrics?.map((metric, idx) => (
            <div key={idx} className="flex-1 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
              <div className="text-violet-400 text-lg font-black">{metric.value}</div>
              <div className="text-white/80 text-xs font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-black mb-3 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">
          {project.name}
        </h3>


        {/* Key Features/Benefits */}
        {project.highlights && (
          <div className="mb-4 md:mb-5 space-y-1.5 md:space-y-2">
            {project.highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 md:gap-3">
                <div className="mt-1 p-1 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex-shrink-0">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <button

          onClick={onOpenModal}
          className="cursor-pointer group/btn inline-flex items-center gap-2 md:gap-3 w-full justify-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-lg md:rounded-xl text-white font-bold text-sm md:text-base transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02]"
        >
          <span>Ver Detalhes do Projeto</span>
          <FiArrowRight className="text-base md:text-lg transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none"></div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = project.images || [project.image]; // Fallback para compatibilidade

  // Bloquear scroll do body quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const changeImage = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    changeImage(newIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
  };

  // Fechar modal ao clicar no backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1443] to-[#0d1224] rounded-lg md:rounded-[5px] border border-violet-500/20 shadow-2xl shadow-violet-500/20 scrollbar-thin scrollbar-thumb-violet-500/50 scrollbar-track-transparent">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
        >
          <FiX className="text-xl md:text-2xl text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Header Image Carousel */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-lg md:rounded-t-[5px] group/carousel bg-gradient-to-br from-violet-950/20 to-purple-950/20">
          {/**<div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent z-10"></div>**/}

          <Image
            src={images[currentImageIndex]}
            alt={`${project.name} - Imagem ${currentImageIndex + 1}`}
            fill
            className={`object-contain ${isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            style={{ transition: 'opacity 300ms ease-in-out' }}
          />

          {/* Navigation Arrows - Only show if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                disabled={isTransitioning}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-50"
              >
                <FiArrowRight className="text-white text-lg md:text-2xl rotate-180" />
              </button>
              <button
                onClick={nextImage}
                disabled={isTransitioning}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-50"
              >
                <FiArrowRight className="text-white text-lg md:text-2xl" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 md:gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isTransitioning) changeImage(idx);
                    }}
                    disabled={isTransitioning}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                      ? 'w-8 md:w-10 bg-violet-400'
                      : 'w-1.5 md:w-2 bg-white/40 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-3 left-3 md:top-6 md:left-6 z-30 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md rounded-full">
                <span className="text-white font-semibold text-xs md:text-sm">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </>
          )}

          {/* Badge - Hidden on small mobile when close button is present */}
          <div className="hidden sm:block absolute top-3 md:top-6 right-14 md:right-20 z-20">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white text-xs md:text-base font-bold shadow-lg backdrop-blur-sm">
              {project.role}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Title */}
          <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-black mb-4 md:mb-6 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
            {project.name}
          </h2>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border border-violet-500/20 rounded-xl md:rounded-2xl text-center backdrop-blur-sm">
                  <div className="text-xl md:text-2xl font-black bg-gradient-to-br from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">Sobre o Projeto</h3>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-6 md:mb-10">
              <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">Principais Funcionalidades</h3>
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-violet-950/20 border border-violet-500/10 rounded-lg md:rounded-xl">
                    <div className="mt-0.5 md:mt-1 p-1.5 md:p-2 bg-gradient-to-br from-violet-600 to-purple-600 rounded-md md:rounded-lg flex-shrink-0">
                      <FiCheck className="text-white text-sm md:text-base" />
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6 md:mb-10">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-br from-violet-950/50 to-purple-950/50 border border-violet-500/30 rounded-lg md:rounded-xl text-violet-300 text-xs md:text-sm lg:text-sm font-semibold backdrop-blur-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-lg md:rounded-xl text-white font-bold text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02]"
            >
              <span>Visitar Projeto</span>
              <FiExternalLink className="text-base md:text-lg lg:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={project.whatsappMsgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 lg:py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg md:rounded-xl text-white font-bold text-sm md:text-base lg:text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span>Iniciar Projeto Semelhante</span>
              <FiArrowRight className="text-base md:text-lg lg:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;