import React from 'react'

const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Quem sou eu!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Me chamo Samuel, sou desenvolvedor web/software, com foco em desenvolvimento de sistemas completos, sites e
                API's RESTful . Há 1 ano, venho criando soluções reais e úteis para pessoas e
                empresas.
              </p>

              <p className="about__content-details-para">
              Minha trajetória é marcada pela capacidade de resolver problemas de forma estratégica, desenvolvendo soluções que realmente atendem às necessidades dos clientes. Estou sempre em busca de aprimoramento e inovação para entregar resultados cada vez melhores.
              </p>

            </div>
            <a href="./#projects" className="btn btn--med btn--theme dynamicBgClr">Meus Projetos</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">Skills</h3>

            <div className="section-skills">

              <div className="skills-type">
                <h3 className="about__content-title">Front-End.</h3>
                <div className="skills"></div>
                <div className="skills__skill">
                  <i className="devicon-html5-plain colored"></i>
                  HTML
                </div>
                <div className="skills__skill">
                  <i className="devicon-css3-plain colored"></i>
                  CSS
                </div>

                <div className="skills__skill">
                  <i className="devicon-react-original colored"></i>
                  ReactJS
                </div>

                <div className="skills__skill">
                  <i className="devicon-javascript-plain colored"></i>
                  Javascript
                </div>

                <div className="skills__skill">
                  <i className="devicon-sass-original colored"></i>
                  Sass
                </div>
                <div className="skills__skill">
                  <i className="devicon-bootstrap-plain colored"></i>
                  Bootstrap
                </div>
              </div>

              <div className="skills-type">
                <h3 className="about__content-title">Back-End.</h3>
                <div className="skills"></div>
                <div className="skills__skill">
                  <i className="devicon-php-plain colored"></i>
                  PHP (Moderno)
                </div>
                <div className="skills__skill">
                  <i className="devicon-laravel-original colored"></i>
                  Laravel
                </div>
                <div className="skills__skill">
                  <i className="devicon-symfony-original"></i>
                  Symfony
                </div>
                <div className="skills__skill">
                  <i className="devicon-azuresqldatabase-plain colored"></i>
                  Banco de Dados
                </div>

                <div className="skills__skill">
                  <i className="devicon-docker-plain colored"></i>
                  Docker
                </div>

                <div className="skills__skill">
                  <i className="devicon-git-plain colored"></i>
                  GIT - Github
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  )
}

export default About