import React from 'react'
import PImage1 from "../../../assets/images/projects/1.png"
import PImage2 from "../../../assets/images/projects/2.png"
import PImage3 from "../../../assets/images/projects/3.png"
import PImage6 from "../../../assets/images/projects/6.png"
import PImage5 from "../../../assets/images/projects/5.png"
import ProjectItem from './ProjectItem'


const projects = [
  {
    image: PImage6,
    title: 'Painel Administrativo Completo',
    text: 'Painel administrativo completo para a gestão e controle financeiro de igrejas. Com ele, é possível registrar e acompanhar dízimos, ofertas e despesas de forma organizada, além de gerenciar membros e congregações de maneira eficiente. O sistema também conta com um painel intuitivo para a administração monitorar o fluxo de caixa, gerar relatórios detalhados e garantir total transparência na gestão financeira da igreja.',
    tags: ['Symfony', 'ReactJS', 'Docker'],
    accessLink: 'https://adcampodaponte.site/',
    codeLink: 'https://github.com/samueldmonteiro/sistema-gestao-igreja'
  },

  {
    image: PImage1,
    title: 'Escola Técnica',
    text: 'Sistema completo desenvolvido para uma escola técnica. Com ele, os alunos podem se inscrever online nos cursos, realizar o pagamento com confirmação imediata, e acompanhar todo o processo. Além disso, o sistema inclui um painel de controle para que a administração possa gerenciar facilmente as informações do site e as inscrições dos alunos.',
    tags: ['PHP', 'Laravel', 'JavaScript'],
    accessLink: 'https://institutoiep.net.br/',
  },

  {
    image: PImage2,
    title: 'Páginas de Entregas',
    text: 'Esta é uma homepage de um site Entregas Online, com a finalidade de fixar conhecimentos em web design, responsividade, animações e criação de aplicações úteis do dia-a-dia',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accessLink: 'https://entregas-app.netlify.app/',
    codeLink: 'https://github.com/samueldmonteiro/Entregas'
  },

  {
    image: PImage5,
    title: 'Pizzaria Online',
    text: 'Site de compras de pizza é dinâmico, intuitivo e projetado para proporcionar uma experiência de uso rápida e simples.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accessLink: 'https://buy-pizza-app.netlify.app/',
    codeLink: 'https://github.com/samueldmonteiro/buy-pizza'
  },
  {
    image: PImage3,
    title: 'Clone do StarBucks',
    text: 'Esta homepage é uma simulação fiel da página do Starbucks, destacando conhecimentos em design, estilo e organização de elementos na tela para proporcionar uma experiência visual atraente e intuitiva.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accessLink: 'https://starb-home.netlify.app/',
    codeLink: 'https://github.com/samueldmonteiro/starbucks-homepage'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projetos</span>
          <span className="heading-sec__sub">

          </span>
        </h2>

        <div className="projects__content">
          {projects.map(project => (
            <ProjectItem project={project} />
          ))}


        </div>
      </div>
    </section>
  )
}

export default Projects