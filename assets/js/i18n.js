// Translations for MRK Corp Website
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // Hero Section
    "hero.subtitle": "SHIPBUILDING & INDUSTRIAL CONTRACTING",
    "hero.title": "Full-Cycle <em>Shipbuilding</em> & <span>Industrial Contracting</span>",
    "hero.description": "European team delivering shipbuilding, refit, retrofit and heavy-industry projects with precision, reliability and strict quality control.",
    "hero.services_btn": "Our Services",
    "hero.or": "or",
    "hero.contact_btn": "Contact Us",

    // Services Section
    "services.title": "Our <em>Core</em> <span>Services</span>",
    "services.description": "Full-spectrum shipbuilding and industrial contracting solutions delivered by certified professionals.",
    "services.welding": "Welding, Structural & Hull Works",
    "services.electrical": "Electrical Systems & Automation",
    "services.piping": "Piping Systems & Installation",
    "services.interior": "Interior Outfitting & Insulation",

    // Projects Section
    "projects.title": "Selected <em>Projects</em> & <span>Experience</span>",
    "projects.description": "Delivering excellence across Europe and the USA with teams from 30 to 150 specialists.",
    "projects.disney": "Disney Adventure - Meyer Werft, Germany",
    "projects.fincantieri": "Fincantieri Marine Repair - USA, Florida",
    "projects.vigor": "Vigor Marine Group - USA, Florida",
    "projects.heavy": "Heavy Industry - Welding Factory, Estonia",
    "projects.teknikum": "Teknikum Group - Polymer Factory, Finland",

    // About Section
    "about.title": "Who <em>We Are</em> & What <span>We Deliver</span>",
    "about.description": "MRK Corp is an international shipbuilding and industrial contracting company based in Tallinn, Estonia. We deliver turnkey teams and full-cycle solutions for shipyards and heavy-industry facilities across the globe.",
    "about.turnkey": "Turnkey Service",
    "about.quality": "Quality & Safety",
    "about.delivery": "On-Time Delivery",
    "about.more_info": "Our core strength is the combination of certified professionals, strict supervision, transparency, and delivering projects on time. We work across EU, UK, US and offshore sectors.",

    // Contact Section
    "contact.title": "<em>Contact Us</em> & Start Your <span>Project</span>",
    "contact.name_placeholder": "Your Name...",
    "contact.surname_placeholder": "Your Surname...",
    "contact.email_placeholder": "Your E-mail...",
    "contact.subject_placeholder": "Subject...",
    "contact.message_placeholder": "Your Message",
    "contact.submit_btn": "Send Message Now",
    "contact.europe_title": "Projects in Europe",
    "contact.europe_director": "Mark Shchegolev - Director",
    "contact.us_title": "Projects in US",
    "contact.location": "Tallinn, Estonia",

    // Footer
    "footer.copyright": "Copyright © 2025 <a href=\"#\">MRK Corp OÜ</a>. All rights reserved."
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.services": "Leistungen",
    "nav.projects": "Projekte",
    "nav.about": "Über Uns",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.subtitle": "SCHIFFBAU & INDUSTRIEDIENSTLEISTUNGEN",
    "hero.title": "Kompletter <em>Schiffbau</em> & <span>Industriedienstleistungen</span>",
    "hero.description": "Europäisches Team für Schiffbau, Refit, Retrofit und Schwerindustrieprojekte mit Präzision, Zuverlässigkeit und strenger Qualitätskontrolle.",
    "hero.services_btn": "Unsere Leistungen",
    "hero.or": "oder",
    "hero.contact_btn": "Kontaktieren Sie uns",

    // Services Section
    "services.title": "Unsere <em>Kern</em><span>leistungen</span>",
    "services.description": "Umfassende Schiffbau- und Industriedienstleistungen, erbracht von zertifizierten Fachleuten.",
    "services.welding": "Schweiß-, Struktur- & Rumpfarbeiten",
    "services.electrical": "Elektrische Systeme & Automatisierung",
    "services.piping": "Rohrleitungssysteme & Installation",
    "services.interior": "Innenausbau & Isolierung",

    // Projects Section
    "projects.title": "Ausgewählte <em>Projekte</em> & <span>Erfahrung</span>",
    "projects.description": "Exzellenz in Europa und den USA mit Teams von 30 bis 150 Spezialisten.",
    "projects.disney": "Disney Adventure - Meyer Werft, Deutschland",
    "projects.fincantieri": "Fincantieri Marine Repair - USA, Florida",
    "projects.vigor": "Vigor Marine Group - USA, Florida",
    "projects.heavy": "Schwerindustrie - Schweißwerk, Estland",
    "projects.teknikum": "Teknikum Group - Polymerfabrik, Finnland",

    // About Section
    "about.title": "Wer <em>Wir Sind</em> & Was <span>Wir Liefern</span>",
    "about.description": "MRK Corp ist ein internationales Schiffbau- und Industriedienstleistungsunternehmen mit Sitz in Tallinn, Estland. Wir liefern schlüsselfertige Teams und Komplettlösungen für Werften und Schwerindustrieanlagen weltweit.",
    "about.turnkey": "Schlüsselfertige Lösungen",
    "about.quality": "Qualität & Sicherheit",
    "about.delivery": "Pünktliche Lieferung",
    "about.more_info": "Unsere Kernstärke ist die Kombination aus zertifizierten Fachleuten, strenger Überwachung, Transparenz und termingerechter Projektabwicklung. Wir arbeiten in der EU, Großbritannien, den USA und im Offshore-Bereich.",

    // Contact Section
    "contact.title": "<em>Kontaktieren Sie uns</em> & Starten Sie Ihr <span>Projekt</span>",
    "contact.name_placeholder": "Ihr Name...",
    "contact.surname_placeholder": "Ihr Nachname...",
    "contact.email_placeholder": "Ihre E-Mail...",
    "contact.subject_placeholder": "Betreff...",
    "contact.message_placeholder": "Ihre Nachricht",
    "contact.submit_btn": "Nachricht senden",
    "contact.europe_title": "Projekte in Europa",
    "contact.europe_director": "Mark Shchegolev - Direktor",
    "contact.us_title": "Projekte in den USA",
    "contact.location": "Tallinn, Estland",

    // Footer
    "footer.copyright": "Copyright © 2025 <a href=\"#\">MRK Corp OÜ</a>. Alle Rechte vorbehalten."
  }
};

// Current language
let currentLang = localStorage.getItem('mrkcorp-lang') || 'en';

// Apply translations to the page
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('mrkcorp-lang', lang);

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Initialize language switcher
function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
    });
  });

  // Apply saved language on page load
  applyTranslations(currentLang);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
