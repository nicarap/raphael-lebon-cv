const messages = {
    fr:
    {
        title: 'Développeur Web / Mobile Full Stack',
        presentation: {
            label: 'Profil personnel', 
            items:[
                "Dynamique, ambitieux et curieux, je ne recule pas devant les obstacles !",
                "Avec 3 ans d'expériences dans le domaine de l'informatique, je suis à la recherche d'un emploi de développeur web."
            ],
        },
        timeline: [
            {date:'Déc 2021 - Mars 2023', name:'TESSI RÉUNION', department:'Pôle Solution et Innovation', icon:'code', mission: 
                {
                label: 'Développeur',
                activities: [
                    "Développement d'applications web",
                    "Support aux utilisateurs",
                    "Développement d'automate / Deamon",
                    "Correction de la dette technique",
                    "Vérifier la faisabilité des prototypes logiciels",
                    "Correction de bugs",
                    "Ajout de features",
                ]
            }, logo:'/images/tessi.jpeg'},
            {date:'Déc 2019 - Nov 2021', name:'PÔLE EMPLOI RÉUNION', department:'Appui au pilotage de la performance', icon:'code', mission: 
                {
                label: 'Développeur Web Fullstack',
                activities: [
                    "Développement d'applications web",
                    "Production de données à l'aide d'un ETL",
                    "Amélioration des applications existantes",
                    "Refonte d'application",
                ]
                }, logo:'/images/pole_emploi.png'},
            {date:'Novembre 2021', name:"Concepteur de Système d'Information", department:'3iL et l\'Ecole Régionale Supérieur du Numérique au CCI de La Réunion, ', icon:'user-graduate', logo:'images/3iL.png'},
            {date:'Juillet 2011', name:'BTS Informatique et Réseau pour l\'Industrie et les Services', icon:'user-graduate', department:'LYCÉE Roland Garros'}
        ],
        skills: {
            languages: {
                label: 'Languages', 
                items:[
                    'Php', 'JavaScript', 'HTML', 'CSS', 'Java',
                ]
            }, 
            technologies: { 
                label: 'Framework pincipalement utilisés',
                items: [
                    'Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS', 'React.js',
                ],
            },
            utilities : {
                label: 'Outils de développement',
                items: [
                    'Git', 'Github', 'MySQL', 'PgSQL',
                ]
            }
        }
    },
    en:
    {
        title: 'Web / Mobile Developer Full Stack',
        presentation: {
            label: 'Personnal profil', 
            items: [
                "Dynamic, ambitious and curious, I do not back down from obstacles!",
                "With 3 years of experience in the IT field, I am looking for a job as a web developer."
            ],
        },
        timeline: [
            {date:'Dec 2021 - March 2023', name:'TESSI RÉUNION', department:'Solution and Innovation Division', icon:'code', mission: 
                {
                label: 'Developer',
                activities: [
                    "Web app development",
                    "User support",
                    "Deamon development",
                    "Correction of technical debt",
                    "Production of proof of concept",
                    "Bug fix",
                    "Addition of features",
                ]
            }, logo:'/images/tessi.jpeg'},
            {date:'Dec 2019 - Nov 2021', name:'PÔLE EMPLOI RÉUNION', department:'Support for performance management', icon:'code', mission: 
                {
                label: 'Developer Web Fullstack',
                activities: [
                    "Web app development",
                    "Data production using an ETL",
                    "Improvement of existing applications",
                    "Application redesign",
                ]
                }, logo:'/images/pole_emploi.png'},
            {date:'November 2021', name:"Information System Designer", department:'3iL and l\'Ecole Régionale Supérieur du Numérique at CCI de La Réunion, ', icon:'user-graduate', logo:'images/3iL.png'},
            {date:'July 2011', name:'BTEC IT and Network for Industry and Services', icon:'user-graduate', department:'LYCÉE Roland Garros'}
        ],
        skills: {
            languages: {
                label: 'Languages', 
                items:[
                    'Php', 'JavaScript', 'HTML', 'CSS', 'Java',
                ]
            }, 
            technologies: { 
                label: 'Framework mainly used',
                items: [
                    'Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS', 'React.js',
                ],
            },
            utilities : {
                label: 'Dev tools',
                items: [
                    'Git', 'Github', 'MySQL', 'PgSQL',
                ]
            }
        }
    }
}

export {messages};