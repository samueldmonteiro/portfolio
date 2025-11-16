// components/projects/ProjectSlider.jsx

import Image from "next/image";
import { FaTimes, FaGithub, FaPlay } from "react-icons/fa";

const ProjectSlider = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex justify-end">

      <div className="w-[90%] md:w-[480px] h-full bg-[#0d0b22] border-l border-violet-800/50 p-6 overflow-y-auto animate-slideLeft relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
        >
          <FaTimes />
        </button>

        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="rounded-lg mb-6"
        />

        <h2 className="text-2xl text-[#16f2b3] mb-4 font-semibold">
          {project.title}
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h3 className="text-white text-lg mb-2">Tecnologias:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#1a1443] rounded border border-violet-700/40 text-gray-200 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-md text-white"
            >
              <FaPlay /> Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md text-white"
            >
              <FaGithub /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
