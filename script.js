const data = {
  Telekom: {
    "Kein Empfang im Ausland": {
      de: {
        text: "Bitte stelle sicher, dass Roaming in den Einstellungen aktiviert ist. Weitere Infos findest du auf der Telekom-Website.",
        link: "https://www.telekom.de/hilfe/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: "Please ensure that roaming is enabled in your settings. For more info, visit Telekom's website.",
        link: "https://www.telekom.de/hilfe/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      }
    }
  },
  "1&1": {
    "Kein Empfang im Ausland": {
      de: {
        text: "Roaming muss in deinem Kundenportal freigeschaltet sein. Gehe dazu in den Bereich 'Meine Karte'.",
        link: "https://www.1und1.de/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/1%261_Logo.svg"
      },
      en: {
        text: "Roaming must be enabled via your customer account. Visit the 'My SIM card' section.",
        link: "https://www.1und1.de/roaming",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/1%261_Logo.svg"
      }
    }
  }
};

const languageSelect = document.getElementById("language-select");
const providerSelect = document.getElementById("provider-select");
const topicSelect = document.getElementById("topic-select");
const solutionDiv = document.getElementById("solution");
const themeSelect = document.getElementById("theme-select");

// Textübersetzungen
const texts = {
  de: {
    chooseProvider: "Anbieter wählen",
    chooseTopic: "Thema wählen",
    noSolution: "Keine Lösung für diese Kombination vorhanden.",
    chooseBoth: "Bitte Anbieter und Thema auswählen."
  },
  en: {
    chooseProvider: "Select provider",
    chooseTopic: "Select topic",
    noSolution: "No solution found for this combination.",
    chooseBoth: "Please select a provider and topic."
  }
};

function getText(key) {
  const lang = languageSelect.value || "de";
  return texts[lang][key] || "";
}

function fillProviders() {
  providerSelect.innerHTML = `<option value="">${getText('chooseProvider')}</option>`;
  Object.keys(data).forEach(provider => {
    const opt = document.createElement("option");
    opt.value = provider;
    opt.textContent = provider;
    providerSelect.appendChild(opt);
  });
}

function fillTopics() {
  topicSelect.innerHTML = `<option value="">${getText('chooseTopic')}</option>`;
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
  const lang = languageSelect.value;

  if (!provider || !topic) {
    solutionDiv.innerHTML = `<p>${getText("chooseBoth")}</p>`;
    return;
  }

  const solution = data[provider]?.[topic]?.[lang];
  if (!solution) {
    solutionDiv.innerHTML = `<p>${getText("noSolution")}</p>`;
    return;
  }

  solutionDiv.innerHTML = `
    <p>${solution.text}</p>
    <p><a href="${solution.link}" target="_blank" rel="noopener noreferrer">${solution.link}</a></p>
    <img src="${solution.logo}" alt="${provider} Logo" />
  `;
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("mobilcheck-theme", theme);
}

function applyLanguage(lang) {
  localStorage.setItem("mobilcheck-lang", lang);
  fillProviders();
  fillTopics();
  showSolution();
}

function loadSettings() {
  const savedLang = localStorage.getItem("mobilcheck-lang") || "de";
  languageSelect.value = savedLang;

  const savedTheme = localStorage.getItem("mobilcheck-theme") || "light";
  themeSelect.value = savedTheme;
  applyTheme(savedTheme);
  applyLanguage(savedLang);
}

// Events
languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
providerSelect.addEventListener("change", () => {
  fillTopics();
  showSolution();
});
topicSelect.addEventListener("change", showSolution);
themeSelect.addEventListener("change", () => applyTheme(themeSelect.value));

// Init
loadSettings();