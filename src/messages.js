const messages = {
    fr:
    {
        title: 'Développeur Web / Mobile Full Stack',
        presentation: {
            label: 'Profil personnel', 
            items:[
                "Dynamique, ambitieux et curieux, je ne recule pas devant les obstacles !",
                "Vivant à l'île de La Réunion, Département d'Outre Mer français, et exercant en tant que Développeur, "+
                    "je suis à la recherche de nouvelles opportunités. J'ai pour projet de quitter mon île natale pour "+
                    "me faire de nouvelles expériences et relevé de nouveaux défis !",
                "J'éxerce depuis plus de 3 ans le métier de Développeur (web et logiciel) "+
                    "où j'ai eu l'occasion de développer plusieurs applications web, avec le Framework Laravel et Vue.js en mode SPA à l'aide de Inertia.js. "+
                    "J'ai également pu créer une application Form scratch, d'autres en full js avec Node.js et React.js ou encore avec Windev. "+
                    "De plus, j'ai egélament travaillé à l'automatisation de tâches répétitive et chronophage avec les technologies Java et VBA.",
                "Mes expériences m'ont beaucoup apporté jusqu'à maintenant et, puisque le métier de développeur est en perpétuel évolution, "+
                    "je suis très motivé à poursuivre mon apprentissage dans un nouveaux pays."
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
                    "Rédaction de documents utilisateurs",
                    "Réalisation de proposition commercial en réponse aux appels d'offre",
                    "Création de cahier des charges et de spécificités",
                    "Correction de bugs",
                    "Ajout de features",
                ]
            }, logo:'images/tessi.jpeg'},
            {date:'Nov 2019 - Nov 2021', name:'PÔLE EMPLOI RÉUNION', department:'Appui au pilotage de la performance', icon:'code', mission: 
                {
                label: 'Développeur Web Fullstack',
                activities: [
                    "Développement d'applications web",
                    "Production de données à l'aide d'un ETL",
                    "Automatisation de processus",
                    "Amélioration des applications existantes",
                    "Refonte d'application",
                ]
                }, logo:'images/pole_emploi.png'},
            {date:'Novembre 2019', name:"Concepteur de Système d'Information", department:'3iL et l\'Ecole Régionale Supérieur du Numérique au CCI de La Réunion', icon:'user-graduate', logo:'images/3iL.png', badge:true},
            {date:'Nov 2012 - Août 2018', name:"Rectorat de La Réunion", department:'Collège Juliette Dodu', icon:'user-tie', logo:'images/rectorat.png', mission: 
                {
                label: "Assistant d'éducation",
                activities: [
                    "Encadrement et surveillance des élèves",
                    "Gestion de situations de crise",
                    "Aide à l'accueil et l'intégration des élèves",
                ]
            }},
            {date:'Oct 2013 - Dec 2013', name:'Quick', department:'Saint Denis de La Réunion',  icon:'burger', logo:'images/quick.png' ,mission: 
                {
                label: "Equipier polyvalent",
                activities: [
                    "Accueillir et servire les clients",
                    "Préparation des hamburgers dans le respect des normes d'hygiènes",
                    "Plonge, nettoyage des locaux",
                ]
            }},
            {date:'Juillet 2011', name:'BTS Informatique et Réseau pour l\'Industrie et les Services', icon:'user-graduate', department:'LYCÉE Roland Garros', badge:true}
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
                    'Git', 'Github', 'MySQL', 'PgSQL', 'Docker'
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
                "Living on Reunion Island, French Overseas Department, and working as a Developer, "+
                                    "I am looking for new new opportunities. I plan to leave my native island for "+
                                    "To gain new experiences and take on new challenges!",
                "I have been working as a Developer (web and software) for more than 3 years "+
                "where I had the opportunity to develop several web applications, with the Laravel Framework and Vue.js in SPA mode using Inertia.js. "+
                "I was also able to create a Form scratch application, others in full js with Node.js and React.js or even with Windev. "+
                "In addition, I also worked on the automation of repetitive and time-consuming tasks with Java and VBA technologies.",
                "My experiences have brought me a lot so far and, since the developer profession is constantly evolving, "+
                "I am very motivated to continue my learning in a new country."
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
                    "Writing user documents",
                    "Realization of commercial proposal in response to calls for tenders",
                    "Creation of specifications and specificities",
                    "Bug fix",
                    "Addition of features",
                ]
            }, logo:'images/tessi.jpeg'},
            {date:'Nov 2019 - Nov 2021', name:'PÔLE EMPLOI RÉUNION', department:'Support for performance management', icon:'code', mission: 
                {
                label: 'Developer Web Fullstack',
                activities: [
                    "Web app development",
                    "Data production using an ETL",
                    "Process Automation",
                    "Improvement of existing applications",
                    "Application redesign",
                ]
                }, logo:'images/pole_emploi.png'},
            {date:'November 2019', name:"Information System Designer", department:'3iL and l\'Ecole Régionale Supérieur du Numérique at CCI de La Réunion, ', icon:'user-graduate', logo:'images/3iL.png', badge:true},
            {date:'Nov 2012 - August 2018', name:"Rectorate of La Réunion", department:'Middle school Juliette Dodu', icon:'user-tie', logo:'images/rectorat.png', mission: 
                {
                label: "Educational assistant",
                activities: [
                    "Supervision of students",
                    "Crisis situation management",
                    "Assistance with the reception and integration of students",
                ]
            }},
            {date:'Oct 2013 - Dec 2013', name:'Quick', department:'Saint Denis of La Réunion',  icon:'burger', logo:'images/quick.png' ,mission: 
                {
                label: "Versatile crew",
                activities: [
                    "Greet and serve customers",
                    "Preparation of hamburgers in compliance with hygiene standards",
                    "Diving, cleaning of premises",
                ]
            }},
            {date:'July 2011', name:'BTEC IT and Network for Industry and Services', icon:'user-graduate', department:'LYCÉE Roland Garros', badge:true}
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
                    'Git', 'Github', 'MySQL', 'PgSQL', 'Docker'
                ]
            }
        }
    }
}

export {messages};