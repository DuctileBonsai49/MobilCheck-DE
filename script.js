// Daten: Anbieter, Themen, Lösungen (de/en) + Logo URLs
const data = {
  "1&1": {
    "SIM-Aktivierung": {
      de: {
        text: `Bei 1&1 aktivierst du deine SIM-Karte im Kundencenter unter <a href="https://www.1und1.de/login" target="_blank" rel="noopener noreferrer">1und1.de/login</a>.<br>
        Alternativ kannst du den Kundenservice anrufen: 0721 9600 196.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      },
      en: {
        text: `Activate your 1&1 SIM card in the customer center at <a href="https://www.1und1.de/login" target="_blank" rel="noopener noreferrer">1und1.de/login</a>.<br>
        Or call customer service: +49 721 9600 196.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      }
    },
    "Roaming": {
      de: {
        text: `Roaming ist bei 1&1 automatisch aktiv, aber du solltest in den Einstellungen prüfen, ob Daten-Roaming eingeschaltet ist.<br>
        Infos: <a href="https://hilfe.1und1.de/mobilfunk/roaming-53337.html" target="_blank" rel="noopener noreferrer">1&1 Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      },
      en: {
        text: `Roaming is automatically enabled at 1&1, but check if data roaming is enabled in your settings.<br>
        Info: <a href="https://hilfe.1und1.de/mobilfunk/roaming-53337.html" target="_blank" rel="noopener noreferrer">1&1 Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      }
    }
  },
  "Vodafone": {
    "SIM-Aktivierung": {
      de: {
        text: `Aktiviere deine Vodafone SIM über die App oder unter <a href="https://www.vodafone.de/aktivierung" target="_blank" rel="noopener noreferrer">vodafone.de/aktivierung</a>.<br>
        Kundenservice: 0800 172 1212.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Activate your Vodafone SIM via the app or at <a href="https://www.vodafone.de/aktivierung" target="_blank" rel="noopener noreferrer">vodafone.de/aktivierung</a>.<br>
        Customer service: 0800 172 1212.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    },
    "Roaming": {
      de: {
        text: `Für Roaming bei Vodafone muss es in den Einstellungen aktiviert sein.<br>
        Prüfe deinen Vertrag auf Roamingoptionen.<br>
        Hilfe: <a href="https://www.vodafone.de/hilfe/roaming" target="_blank" rel="noopener noreferrer">Vodafone Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Vodafone roaming needs to be enabled in settings.<br>
        Check your contract for roaming options.<br>
        Find help at <a href="https://www.vodafone.de/hilfe/roaming" target="_blank" rel="noopener noreferrer">Vodafone roaming</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    }
  },
  "Telekom": {
    "SIM-Aktivierung": {
      de: {
        text: `Telekom SIM-Karten aktivierst du unter <a href="https://www.telekom.de/hilfe/mobilfunk-sim-karte" target="_blank" rel="noopener noreferrer">telekom.de/hilfe</a>.<br>
        Kundenservice: 0800 330 1000.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `Activate Telekom SIM cards at <a href="https://www.telekom.de/hilfe/mobilfunk-sim-karte" target="_blank" rel="noopener noreferrer">telekom.de/hilfe</a>.<br>
        Customer service: 0800 330 1000.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      }
    },
    "Roaming": {
      de: {
        text: `Telekom Roaming wird automatisch aktiviert, aber überprüfe deine Einstellungen.<br>
        Infos: <a href="https://www.telekom.de/hilfe/mobilfunk-roaming" target="_blank" rel="noopener noreferrer">Telekom Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `Telekom roaming is automatically enabled, but check your settings.<br>
        Info: <a href="https://www.telekom.de/hilfe/mobilfunk-roaming" target="_blank" rel="noopener noreferrer">Telekom Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      }
    }
  }
};

const languageSelect = document.getElementById("language-select");
const providerSelect = document.getElementById("provider-select");
const topicSelect = document.getElementById("topic-select");
const solutionDiv = document.getElementById("solution");
const themeSelect = document.getElementById("theme-select");

// Füllt Anbieter Dropdown
function fillProviders() {
  providerSelect.innerHTML = `<option value="" disabled selected>${getText('chooseProvider')}</option>`;
  Object.keys(data).forEach(provider => {
    const opt = document.createElement("option");
    opt.value = provider;
    opt.textContent = provider;
    providerSelect.appendChild(opt);
  });
}

// Füllt Themen Dropdown basierend auf Anbieter
function fillTopics() {
  topicSelect.innerHTML = `<option value="" disabled selected>${getText('chooseTopic')}</option>`;
  topicSelect.disabled = true;
  const provider = providerSelect.value;
  if (!provider || !data[provider]) return;
  Object.keys(data[provider]).forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  });
  topicSelect.disabled = false;
}

// Gibt Text für UI Elemente in der aktuellen Sprache zurück
function getText(key) {
  const texts = {
    de: {
      chooseProvider: "Bitte Anbieter wählen",
      chooseTopic: "Bitte Thema wählen",
      selectLang: "Sprache auswählen",
      selectTheme: "Theme auswählen",
      noSolution: "Wähle Anbieter und Thema, um eine Lösung zu sehen."
    },
    en: {
      chooseProvider: "Please choose provider",
      chooseTopic: "Please choose topic",
      selectLang: "Select language",
      selectTheme: "Select theme",
      noSolution: "Choose provider and topic to see solution."
    }
  };
  return texts[languageSelect.value]?.[key] || texts['de'][key];
}

// Zeigt Lösung an
function showSolution() {
  const lang = languageSelect.value;
  const provider = providerSelect.value;
  const topic = topicSelect.value;

  if (!provider || !topic) {
    solutionDiv.innerHTML = `<p>${getText('noSolution')}</p>`;
    return;
  }
  const solution = data[provider]?.[topic]?.[lang];
  if (!solution) {
    solutionDiv.innerHTML = `<p>${getText('noSolution')}</p>`;
    return;
  }

  solutionDiv.innerHTML = `<div>${solution.text}</div>`;
  // Logo hinzufügen
  let logoImg = document.getElementById("solution-logo");
  if (!logoImg) {
    logoImg = document.createElement("img");
    logoImg.id = "solution-logo";
    logoImg.alt = provider + " Logo";
    solutionDiv.appendChild(logoImg);
  }
  logoImg.src = solution.logo;
}

// Sprache auf Emojis im Select einstellen
function setLanguageSelectVisual() {
  for (const opt of languageSelect.options) {
    if (opt.value === "de") opt.textContent = "🇩🇪 Deutsch";
    else if (opt.value === "en") opt.textContent = "🇬🇧 English";
  }
}

// Theme laden/speichern
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("mobilfunk-theme", theme);
}

// Sprache laden/speichern
function applyLanguage(lang) {
  languageSelect.value = lang;
  setLanguageSelectVisual();
  localStorage.setItem("mobilfunk-language", lang);
  // UI Texte aktualisieren
  providerSelect.options[0].textContent = getText('chooseProvider');
  topicSelect.options[0].textContent = getText('chooseTopic');
  showSolution();
}

function loadSettings() {
  const savedLang = localStorage.getItem("mobilfunk-language");
  if (savedLang) applyLanguage(savedLang);
  else applyLanguage("de");

  const savedTheme = localStorage.getItem("mobilfunk-theme");
  if (savedTheme) applyTheme(savedTheme);
  else applyTheme("light");
}

// Event-Listener
languageSelect.addEventListener("change", () => {
  applyLanguage(languageSelect.value);
});

providerSelect.addEventListener("change", () => {
  fillTopics();
  solutionDiv.innerHTML = `<p>${getText('noSolution')}</p>`;
});

topicSelect.addEventListener("change", () => {
  showSolution();
});

themeSelect.addEventListener("change", () => {
  applyTheme(themeSelect.value);
});

// Init
fillProviders();
loadSettings();