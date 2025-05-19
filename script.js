const data = {
  "Telekom": {
    "Kein Empfang im Ausland": {
      de: {
        text: "Aktiviere Datenroaming im Handy und im Kundencenter.",
        link: "https://www.telekom.de/hilfe/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: "Enable data roaming in your device and customer portal.",
        link: "https://www.telekom.de/hilfe/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      }
    }
  },
  "1&1": {
    "Kein Empfang im Ausland": {
      de: {
        text: "Roaming im Kundenbereich aktivieren – unter 'Meine Karte'.",
        link: "https://www.1und1.de/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/1%261_Logo.svg"
      },
      en: {
        text: "Enable roaming in customer portal under 'My SIM card'.",
        link: "https://www.1und1.de/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/1%261_Logo.svg"
      }
    }
  }
};

const providerSelect = document.getElementById("provider-select");
const topicSelect = document.getElementById("topic-select");
const languageSelect = document.getElementById("language-select");
const themeSelect = document.getElementById("theme-select");
const solutionBox = document.getElementById("solution");

const texts = {
  de: {
    chooseProvider: "Anbieter wählen",
    chooseTopic: "Thema wählen",
    noSolution: "Keine Lösung für diese Kombination vorhanden.",
    chooseBoth: "Bitte wähle einen Anbieter und ein Thema aus."
  },
  en: {
    chooseProvider: "Select provider",
    chooseTopic: "Select topic",
    noSolution: "No solution found for this combination.",
    chooseBoth: "Please select a provider and topic."
  }
};

function getLang() {
  return languageSelect.value || "de";
}

function fillProviders() {
  const lang = getLang();
  providerSelect.innerHTML = `<option value="">${texts[lang].chooseProvider}</option>`;
  Object.keys(data).forEach(p => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    providerSelect.appendChild(opt);
  });
}

function fillTopics() {
  const lang = getLang();
  topicSelect.innerHTML = `<option value="">${texts[lang].chooseTopic}</option>`;
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

function showSolution() {
  const provider = providerSelect.value;
  const topic = topicSelect.value;
  const lang = getLang();

  if (!provider || !topic) {
    solutionBox.innerHTML = `<p>${texts[lang].chooseBoth}</p>`;
    return;
  }

  const entry = data[provider]?.[topic]?.[lang];
  if (!entry) {
    solutionBox.innerHTML = `<p>${texts[lang].noSolution}</p>`;
    return;
  }

  solutionBox.innerHTML = `
    <p>${entry.text}</p>
    <p><a href="${entry.link}" target="_blank">${entry.link}</a></p>
    <img src="${entry.logo}" alt="${provider} Logo">
  `;
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("mobilcheck-theme", theme);
}

function setLanguage(lang) {
  localStorage.setItem("mobilcheck-lang", lang);
  fillProviders();
  fillTopics();
  showSolution();
}

function loadSettings() {
  const savedLang = localStorage.getItem("mobilcheck-lang") || "de";
  const savedTheme = localStorage.getItem("mobilcheck-theme") || "blue";

  languageSelect.value = savedLang;
  themeSelect.value = savedTheme;

  setTheme(savedTheme);
  setLanguage(savedLang);
}

// Events
languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
themeSelect.addEventListener("change", () => setTheme(themeSelect.value));
providerSelect.addEventListener("change", () => {
  fillTopics();
  showSolution();
});
topicSelect.addEventListener("change", showSolution);

// Init
loadSettings();