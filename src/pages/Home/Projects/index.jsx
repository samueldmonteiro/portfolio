import React, { useState } from 'react';
import { Container, Grid, Button, Card, CardContent, Typography, ButtonGroup } from '@mui/material';
import ProjectItem from './ProjectItem';

import PImage1 from "../../../assets/images/projects/1.png";
import PImage2 from "../../../assets/images/projects/2.png";
import PImage3 from "../../../assets/images/projects/3.png";
import PImage6 from "../../../assets/images/projects/6.png";
import PImage5 from "../../../assets/images/projects/5.png";
import PImage7b from "../../../assets/images/projects/7b.png";
import PImage8 from "../../../assets/images/projects/8.png";

const projects = [
  {
    image: PImage6,
    title: 'Painel Administrativo Completo',
    text: 'Painel administrativo completo para a gestão e controle financeiro de igrejas. Com ele, é possível registrar e acompanhar dízimos, ofertas e despesas de forma organizada, além de gerenciar membros e congregações de maneira eficiente. O sistema também conta com um painel intuitivo para a administração monitorar o fluxo de caixa, gerar relatórios detalhados e garantir total transparência na gestão financeira da igreja.',
    tags: ['PHP', 'Symfony', 'ReactJS', 'Docker'],
    accessLink: 'https://adcampodaponte.site/',
    codeLink: 'https://github.com/samueldmonteiro/sistema-gestao-igreja',
    category: 'Full-stack',
  },
  {
    image: PImage1,
    title: 'Escola Técnica',
    text: 'Sistema completo desenvolvido para uma escola técnica. Com ele, os alunos podem se inscrever online nos cursos, realizar o pagamento com confirmação imediata, e acompanhar todo o processo. Além disso, o sistema inclui um painel de controle para que a administração possa gerenciar facilmente as informações do site e as inscrições dos alunos.',
    tags: ['PHP', 'Laravel', 'JavaScript'],
    accessLink: 'https://institutoiep.net.br/',
    category: 'Full-stack',
  },
  {
    image: PImage2,
    title: 'Páginas de Entregas',
    text: 'Esta é uma homepage de um site Entregas Online, com a finalidade de fixar conhecimentos em web design, responsividade, animações e criação de aplicações úteis do dia-a-dia',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accessLink: 'https://entregas-app.netlify.app/',
    codeLink: 'https://github.com/samueldmonteiro/Entregas',
    category: 'Front-end',
  },
  {
    image: PImage5,
    title: 'Pizzaria Online',
    text: 'Site de compras de pizza é dinâmico, intuitivo e projetado para proporcionar uma experiência de uso rápida e simples.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accessLink: 'https://buy-pizza-app.netlify.app/',
    codeLink: 'https://github.com/samueldmonteiro/buy-pizza',
    category: 'Front-end',
  },
  {
    image: PImage3,
    title: 'Clone do StarBucks',
    text: 'Esta homepage é uma simulação fiel da página do Starbucks, destacando conhecimentos em design, estilo e organização de elementos na tela para proporcionar uma experiência visual atraente e intuitiva.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accessLink: 'https://starb-home.netlify.app/',
    codeLink: 'https://github.com/samueldmonteiro/starbucks-homepage',
    category: 'Front-end',
  },
  {
    image: PImage7b,
    title: 'Planejador de Viagem AI',
    text: 'Aplicação desenvolvida em PHP utilizando o framework Symfony e integração com IA. Ela ajuda usuários a planejarem suas viagens de forma prática e segura, oferecendo as seguintes funcionalidades: tinerário Personalizado, estimativa de gastos, e informações sobre a criminalidade no local. Integração com Google Gemini.',
    tags: ['Symfony', 'PHP', 'AI'],
    codeLink: 'https://github.com/samueldmonteiro/api-planejador-viagem-IA',
    category: 'Back-end',
  },
  {
    image: PImage8,
    title: 'Reserva de mesas',
    text: 'Este projeto é uma API desenvolvida em PHP Symfony para gerenciar a reserva de mesas em restaurantes. A API permite que os clientes façam reservas online, que os administradores gerenciem a disponibilidade das mesas e que o restaurante otimize seu fluxo de atendimento.',
    tags: ['Symfony', 'PHP', 'Mysql', 'Docker'],
    codeLink: 'https://github.com/samueldmonteiro/reserva-de-mesas-restaurante',
    category: 'Back-end',
  },
];

const Projects = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const filtrarProjetos = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const filteredProjects = projects.filter(
    (project) => categoriaSelecionada === 'Todos' || project.category === categoriaSelecionada
  );

  return (
    <Container sx={{ marginTop: '40px', padding: '20px' }} id='projects'>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, marginBottom: '30px' }}>
        Meus Projetos
      </Typography>

      {/* Barra de filtros */}
      <Grid container justifyContent="center" gap={5} rowGap={2}>
        <ButtonGroup aria-label="Basic button group">
          {['Todos', 'Front-end', 'Back-end', 'Full-stack'].map((categoria) => (
            <Button
              key={categoria}
              onClick={() => filtrarProjetos(categoria)}
              variant={categoriaSelecionada === categoria ? 'contained' : 'outlined'}
              color="primary"
              sx={{ fontSize: 13 }}
            >
              {categoria}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>

      {/* Exibição dos projetos */}
      <Grid mt={5} mb={5} container justifyContent="center">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
