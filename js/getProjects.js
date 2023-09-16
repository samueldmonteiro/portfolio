export default function getProjects(category, qt) {

    return projects[category];
}

function createProject(name, about, image, repository, url, techs) {
    return {
        name, about, image, repository, url, techs
    }
}

const projects = {  
    frontend: [
        createProject(
            "Gerador de Senhas",
            "Gerador de senhas desenvolvido em JavaScript. Possui opções de senhas personalizadas, utilizando letras maiúsculas, minúsculas, números e caracteres especiais. O objetivo do projeto foi o treinamento de lógica de programação, manipulação do DOM em tempo real, e desenvolvimento de aplicações que fossem úteis para o dia a dia.",
            "../assets/images/screenshots/Captura de tela de 2023-09-15 11-38-28.png",
            "https://github.com/samueldmonteiro/pass-generator-js",
            "https://pass-generator-js.netlify.app/",
            ['HTML', 'CSS', 'JavaScript']
        ),

        createProject(
            "Starbucks Homepage Clone",
            "esse projeto é um clone da homepage do StarBucks",
            "../assets/images/screenshots/Captura de tela_2023-09-15_12-23-19.png",
            "https://github.com/samueldmonteiro/pass-generator-js",
            "https://starb-home.netlify.app/",
            ['HTML', 'CSS', 'JavaScript']
        ),

        createProject(
            'Form Validator',
            'Validador de formulário desenvolvido em JavaScript. As regras são implementadas aos inputs dos formulários que possuem a classe (validate-form). Os inputs por sua vez devem possuir o atributo (validate).',
            '../assets/images/screenshots/Captura de tela de 2023-09-15 13-07-17.png',
            'https://github.com/samueldmonteiro/form-validator',
            'https://form-js-validator.netlify.app/',
            ['HTML', 'CSS', 'JavaScript']
        )
    ],

    backend: [
        createProject(
            "Notes Api",
            "esta é uma API para gerenciamento de notas, utilizando o Framework Laravel. Possui controle baseado em autenticação, contém todas as ações e validações CRUD, necessárias para proteção das informações.",
            null,
            "https://github.com/samueldmonteiro/notes_api",
            null,
            ['PHP 8', "Laravel 10"]
        )
    ]
}