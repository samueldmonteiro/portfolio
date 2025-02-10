import React from 'react'

const ProjectItem = ({ project }) => {
  return (
    <div key={project.title} className="projects__row">
      <div className="projects__row-img-cont">
        <img src={project.image} alt="Software Screenshot" className="projects__row-img" loading="lazy" />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">{project.title}</h3>

        <p className="projects__row-content-desc">
          {project.text}
        </p>
        <div className="project-skills">
          {project.tags.map(tag => (
            <div key={tag} className="skills__skill">
              {tag}
            </div>
          ))}
        </div>
        <div className="buttons-action" style={{ gap:'20px', display:`flex`}}>
          {project.accessLink && <a className='btn btn--med btn--theme dynamicBgClr' href={project.accessLink}
            target='_blank'>Acessar</a>}
          {project.codeLink && <a className='btn btn--med btn--theme dynamicBgClr'
            href={project.codeLink} target='_blank'>Código Fonte</a>}

        </div>

      </div>
    </div>
  )
}

export default ProjectItem