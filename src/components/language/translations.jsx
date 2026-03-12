import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            /* Barra de navegación */
            home: "HOME",
            aiVideos: "AI VIDEOS",
            blog: "BLOG",
            about: "ABOUT US",
            contact: "CONTACT",
            languageSelect: "LANGUAGE",

            /* Portada */
            portadaTitle: "We're AI",
            portadaSubtitle: "Success Factors, SAP HCM, Spanish Payroll",

            /* Sección de servicios */
            servicio1Title: "Mission",
            servicio1Text: "To be the preferred destination for professionals seeking continuous growing within the SAP HR technologies to provide additional value to our clients.",
            servicio2Title: "Vision",
            servicio2Text: "To build exceptional teams and enhance their performance in SAP consulting, constantly raising their level of expertise.",
            servicio3Title: "Values",
            servicio3Text: "Specializing in SAP HR solutions with senior expertise in Spanish legal requirements.",

            /* Sección About Us */
            aboutUsTitle: "What We Know to Do",
            aboutUs1Title: "Artificial Intelligence",
            aboutUs1Text: "AI applied to Human Resources processes",
            aboutUs2Title: "SAP HCM and Employee Central Payroll",
            aboutUs2Text: "New Implementations and Maintenances",
            aboutUs3Title: "Success Factors Employee Central",
            aboutUs3Text: "Employee Central Core, Workshops, Requirements Definition, Functional Design, Business Blue Print, Build",
            aboutUs4Title: "Human Resources Processes",
            aboutUs4Text: "Spanish Payroll, Social Security, Taxes HR Processes",

            /* Sección de clientes */
            clientsTitle: "Our Clients",
            clientsTitleIT: "Contracted by the best IT companies",

            /* Sección del equipo */
            teamTitle: "Our Team",
            teamDescPrincipal: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc1: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc2: "Spanish Payroll Specialist & SAP HXM Consultant",
            teamDesc3: "SAP SuccessFactors Junior Consultant",
            teamDesc4: "HR Generalist & SAP HXM Consultant",
            teamDescTrainee: "SAP Trainee",

            /* Footer */
            footerPrivacyStatement: "Privacy statement",
            footerPrivacyNotice: "Privacy notice",
            footerIndustryNews: "Industry news",
            footerCompany: "OKSAP Spain",
            footerCopyright: "Copyright 2025 © OKSAP Spain"
        }
    },
    es: {
        translation: {
            /* Barra de navegación */
            home: "HOME",
            aiVideos: "VIDEOS IA",
            blog: "BLOG",
            about: "SOBRE NOSOTROS",
            contact: "CONTACTO",
            languageSelect: "IDIOMA",

            /* Portada */
            portadaTitle: "Somos IA",
            portadaSubtitle: "Success Factors, SAP HCM, Nómina Española",

            /* Sección de servicios */
            servicio1Title: "Misión",
            servicio1Text: "Ser el destino preferido por los profesionales en busca de aprendizaje continuo y desarrollo de habilidades dentro del sector de consultoría SAP.",
            servicio2Title: "Visión",
            servicio2Text: "Formar equipos excepcionales y potenciar su rendimiento en consultoría SAP, elevando constantemente su nivel de competencia.",
            servicio3Title: "Valores",
            servicio3Text: "Especializados en el asesoramiento de SAP con un enfoque experto en las leyes laborales españolas.",

            /* Sección About Us */
            aboutUsTitle: "Qué sabemos hacer",
            aboutUs1Title: "Inteligencia Artificial",
            aboutUs1Text: "IA aplicada a los procesos de Recursos Humanos",
            aboutUs2Title: "SAP HCM y Employee Central Payroll",
            aboutUs2Text: "Nuevas implementaciones y Mantenimientos",
            aboutUs3Title: "Success Factors Employee Central",
            aboutUs3Text: "Employee Central Core, Toma de requerimientos, Configuración, Formación, Arranque y Mantenimiento",
            aboutUs4Title: "Procesos de Recursos Humanos",
            aboutUs4Text: "Nómina Española, Seguridad Social, Modelos AEAT, Reorganización de procesos de RRHH",

            /* Sección de clientes */
            clientsTitle: "Clientes Finales",
            clientsTitleIT: "Colaboración con Consultoras Internacionales",

            /* Sección del equipo */
            teamTitle: "Nuestro Equipo",
            teamDescPrincipal: "Ingeniero en Informática, Consultor SAP SuccessFactors y HCM",
            teamDesc1: "Ingeniero en Informática, Consultor SAP SuccessFactors y HCM",
            teamDesc2: "Especialista en nómina española y Consultora SAP HXM",
            teamDesc3: "Consultor Junior SAP SuccessFactors",
            teamDesc4: "Especialista en Gestión de RRHH y Consultora SAP HXM",
            teamDescTrainee: "Aprendiz SAP",

            /* Footer */
            footerPrivacyStatement: "Declaración de privacidad",
            footerPrivacyNotice: "Aviso de privacidad",
            footerIndustryNews: "Noticias del sector",
            footerCompany: "OKSAP Spain",
            footerCopyright: "Copyright 2025 © OKSAP Spain"
        }
    },
    de: {
        translation: {
            /* Barra de navegación */
            home: "STARTSEITE",
            aiVideos: "KI-VIDEOS",
            blog: "BLOG",
            about: "ÜBER UNS",
            contact: "KONTAKT",
            languageSelect: "SPRACHE",

            /* Portada */
            portadaTitle: "Wir sind KI",
            portadaSubtitle: "Success Factors, SAP HCM, Spanische Gehaltsabrechnung",

            /* Sección de servicios */
            servicio1Title: "Mission",
            servicio1Text: "Das bevorzugte Ziel für Fachleute sein, die innerhalb der SAP HR-Technologien kontinuierlich wachsen möchten, um unseren Kunden zusätzlichen Wert zu bieten.",
            servicio2Title: "Vision",
            servicio2Text: "Außergewöhnliche Teams aufbauen und deren Leistung in der SAP-Beratung verbessern, indem ihr Expertenniveau kontinuierlich erhöht wird.",
            servicio3Title: "Werte",
            servicio3Text: "Spezialisierung auf SAP HR-Lösungen mit Senior-Expertise in den spanischen gesetzlichen Anforderungen.",

            /* Sección About Us */
            aboutUsTitle: "Was wir können",
            aboutUs1Title: "Künstliche Intelligenz",
            aboutUs1Text: "KI angewandt auf Personalprozesse",
            aboutUs2Title: "SAP HCM und Mitarbeiterzentrale Gehaltsabrechnung",
            aboutUs2Text: "Neue Implementierungen und Wartungen",
            aboutUs3Title: "Erfolgsfaktoren Mitarbeiterzentrale",
            aboutUs3Text: "Employee Central Core, Workshops, Anforderungsdefinition, Funktionsdesign, Business Blue Print, Build",
            aboutUs4Title: "Personalprozesse",
            aboutUs4Text: "SSpanische Gehaltsabrechnung, Sozialversicherung, Steuern HR-Prozesse",

            /* Sección de clientes */
            clientsTitle: "Unsere Kunden",
            clientsTitleIT: "Beauftragt von den besten IT-Unternehmen",

            /* Sección del equipo */
            teamTitle: "Unsere Leute",
            teamDescPrincipal: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc1: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc2: "Spanish Payroll Specialist & SAP HXM Consultant",
            teamDesc3: "SAP SuccessFactors Junior Consultant",
            teamDesc4: "HR Generalist & SAP HXM Consultant",
            teamDescTrainee: "SAP Trainee",

            /* Footer */
            footerPrivacyStatement: "Datenschutzerklärung",
            footerPrivacyNotice: "Datenschutzhinweis",
            footerIndustryNews: "Branchennachrichten",
            footerCompany: "OKSAP Spain",
            footerCopyright: "Copyright 2025 © OKSAP Spain"
        }
    },
    fr: {
        translation: {
            /* Barra de navegación */
            home: "ACCUEIL",
            aiVideos: "VIDÉOS IA",
            blog: "BLOG",
            about: "PROPOS DE NOUS",
            contact: "CONTACT",
            languageSelect: "LANGUE",

            /* Portada */
            portadaTitle: "Nous sommes IA",
            portadaSubtitle: "Success Factors, SAP HCM, Paie Espagnole",

            /* Sección de servicios */
            servicio1Title: "Mission",
            servicio1Text: "Être la destination préférée des professionnels recherchant une croissance continue dans les technologies SAP HR pour fournir une valeur ajoutée à nos clients.",
            servicio2Title: "Vision",
            servicio2Text: "Construire des équipes exceptionnelles et améliorer leurs performances dans le conseil SAP, en augmentant constamment leur niveau d'expertise.",
            servicio3Title: "Valeurs",
            servicio3Text: "Spécialisation dans les solutions SAP HR avec une expertise senior dans les exigences légales espagnoles.",

            /* Sección About Us */
            aboutUsTitle: "Ce que nous savons faire",
            aboutUs1Title: "Intelligence Artificielle",
            aboutUs1Text: "IA appliquée aux processus de ressources humaines",
            aboutUs2Title: "SAP HCM et Employee Central Payroll",
            aboutUs2Text: "Nouvelles implémentations et maintenances",
            aboutUs3Title: "Facteurs de succès Employee Central",
            aboutUs3Text: "Noyau central des employés, Ateliers, Définition des exigences, Conception fonctionnelle, Plan directeur métier, Construction",
            aboutUs4Title: "Ressources humaines Processus",
            aboutUs4Text: "Paie Espagnole, Sécurité sociale, Taxes Processus RH",

            /* Sección de clientes */
            clientsTitle: "Nos clients",
            clientsTitleIT: "Engagé par les meilleures entreprises informatiques",

            /* Sección del equipo */
            teamTitle: "Nos gens",
            teamDescPrincipal: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc1: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc2: "Spanish Payroll Specialist & SAP HXM Consultant",
            teamDesc3: "SAP SuccessFactors Junior Consultant",
            teamDesc4: "HR Generalist & SAP HXM Consultant",
            teamDescTrainee: "SAP Trainee",

            /* Footer */
            footerPrivacyStatement: "Déclaration de confidentialité",
            footerPrivacyNotice: "Avis de confidentialité",
            footerIndustryNews: "Actualités sectorielles",
            footerCompany: "OKSAP Spain",
            footerCopyright: "Copyright 2025 © OKSAP Spain"
        }
    },
    nk: {
        translation: {
            /* Barra de navegación */
            home: "JEM",
            aiVideos: "KI-VIDEOER",
            blog: "BLOGG",
            about: "OM OSS",
            contact: "KONTAKT",
            languageSelect: "SPRÅK",

            /* Portada */
            portadaTitle: "Vi er AI",
            portadaSubtitle: "Success Factors, SAP HCM, Spansk Lønn",

            /* Sección de servicios */
            servicio1Title: "Oppdrag",
            servicio1Text: "Å være det foretrukne reisemålet for fagpersoner som søker kontinuerlig vekst innen SAP HR-teknologier for å tilby ekstra verdi til våre kunder.",
            servicio2Title: "Visjon",
            servicio2Text: "Å bygge eksepsjonelle team og forbedre deres prestasjoner innen SAP-konsultasjon, og stadig øke deres kompetansenivå.",
            servicio3Title: "Verdier",
            servicio3Text: "Spesialisering innen SAP HR-løsninger med senior ekspertise innenfor spanske juridiske krav.",

            /* Sección About Us */
            aboutUsTitle: "Hva vi kan gjøre",
            aboutUs1Title: "Kunstig Intelligens",
            aboutUs1Text: "AI brukt på HR-prosesser",
            aboutUs2Title: "SAP HCM og Employee Central Payroll",
            aboutUs2Text: "Nye implementeringer og vedlikehold",
            aboutUs3Title: "Suksessfaktorer Employee Central",
            aboutUs3Text: "Kjerne i ansattsentralen, Workshop, Kravdefinisjon, Funksjonell design, Forretningsblåkopi, Bygg",
            aboutUs4Title: "Human Resources Prosesser",
            aboutUs4Text: "Spansk Lønn, Trygdeordning, Skatter HR-prosesser",

            /* Sección de clientes */
            clientsTitle: "Våre kunder",
            clientsTitleIT: "Kontrahert av de beste IT-selskapene",

            /* Sección del equipo */
            teamTitle: "Våre folk",
            teamDescPrincipal: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc1: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc2: "Spanish Payroll Specialist & SAP HXM Consultant",
            teamDesc3: "SAP SuccessFactors Junior Consultant",
            teamDesc4: "HR Generalist & SAP HXM Consultant",
            teamDescTrainee: "SAP Trainee",

            /* Footer */
            footerPrivacyStatement: "Personvernerklæring",
            footerPrivacyNotice: "Personvernerklæring",
            footerIndustryNews: "Bransjenyheter",
            footerCompany: "OKSAP Spain",
            footerCopyright: "Copyright 2025 © OKSAP Spain"
        }
    },
    sv: {
        translation: {
            /* Barra de navegación */
            home: "HEM",
            aiVideos: "AI-VIDEOR",
            blog: "BLOGG",
            about: "OM OSS",
            contact: "KONTAKT",
            languageSelect: "SPRÅK",

            /* Portada */
            portadaTitle: "Vi är AI",
            portadaSubtitle: "Success Factors, SAP HCM, Spansk Lön",

            /* Sección de servicios */
            servicio1Title: "Uppdrag",
            servicio1Text: "Att vara det föredragna målet för yrkesverksamma som söker kontinuerlig tillväxt inom SAP HR-teknik för att tillhandahålla ytterligare värde till våra kunder.",
            servicio2Title: "Vision",
            servicio2Text: "Att bygga exceptionella team och förbättra deras prestanda inom SAP-konsultation, ständigt höja deras expertnivå.",
            servicio3Title: "Värderingar",
            servicio3Text: "Specialiserar sig på SAP HR-lösningar med senior expertis inom spanska lagkrav.",

            /* Sección About Us */
            aboutUsTitle: "Vad vi vet att göra",
            aboutUs1Title: "Artificiell Intelligens",
            aboutUs1Text: "AI tillämpad på personalresursprocesser",
            aboutUs2Title: "SAP HCM och Employee Central Payroll",
            aboutUs2Text: "Nya implementeringar och underhåll",
            aboutUs3Title: "Success Factors Employee Central",
            aboutUs3Text: "Employee Central Core, Workshops, Kravdefinition, Funktionell design, Business Blue Print, Bygg",
            aboutUs4Title: "Human Resources Processer",
            aboutUs4Text: "Spansk Lön, socialförsäkring, skatter HR-processer",

            /* Sección de clientes */
            clientsTitle: "Våra kunder",
            clientsTitleIT: "Kontrakterad av de bästa IT-företagen",

            /* Sección del equipo */
            teamTitle: "Våra människor",
            teamDescPrincipal: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc1: "Computer Engineer, SAP SuccessFactors & HCM Consultant",
            teamDesc2: "Spanish Payroll Specialist & SAP HXM Consultant",
            teamDesc3: "SAP SuccessFactors Junior Consultant",
            teamDesc4: "HR Generalist & SAP HXM Consultant",
            teamDescTrainee: "SAP Trainee",

            /* Footer */
            footerPrivacyStatement: "Integritetsförklaring",
            footerPrivacyNotice: "Integritetsmeddelande",
            footerIndustryNews: "Branschnyheter",
            footerCompany: "OKSAP Spain",
            footerCopyright: "Copyright 2025 © OKSAP Spain"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // idioma por defecto
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;