const loesungen = {
  "SIMON": {
    "Roaming": {
      text: "Bitte stelle sicher, dass *Datenroaming* in deinen Smartphone-Einstellungen aktiviert ist. Falls weiterhin kein Empfang besteht, prüfe im Kundenportal, ob Roaming freigeschaltet ist. Bei Problemen wende dich an den Kundenservice.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
    },
    "Netzprobleme": {
      text: "SIMon nutzt das Vodafone-Netz. Bitte prüfe auf der Vodafone-Webseite, ob eine Netzstörung vorliegt. Stelle sicher, dass dein Smartphone nicht im Flugmodus ist und starte es ggf. neu.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
    }
  },
  "TELEKOM": {
    "Roaming": {
      text: "Im Ausland muss *Roaming* im Handy aktiviert sein. Logge dich ins Kundencenter ein, um zu prüfen, ob Roaming für deinen Vertrag aktiv ist.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Telekom_Logo_2013.svg/512px-Telekom_Logo_2013.svg.png"
    }
  },
  "VODAFONE": {
    "Netzprobleme": {
      text: "Bitte rufe die Vodafone-Netzabdeckungskarte auf und prüfe aktuelle Störungen in deiner Region. Ein Neustart des Handys hilft oft.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vodafone_icon_2022.svg/512px-Vodafone_icon_2022.svg.png"
    }
  },
  "O2": {
    "Vertragsdaten": {
      text: "Logge dich in die Mein O2 App oder Website ein, um deine Vertragsdaten und eventuelle Sperrungen einzusehen.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Telef%C3%B3nica_O2_Deutschland_2011_logo.svg/512px-Telef%C3%B3nica_O2_Deutschland_2011_logo.svg.png"
    }
  },
  "1&1": {
    "SIM-Aktivierung": {
      text: "Deine SIM-Karte kann online über das 1&1 Control-Center aktiviert werden. Achte darauf, die Identifikation vollständig abzuschließen.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/1%261_Logo_2021.svg/512px-1%261_Logo_2021.svg.png"
    }
  }
};

const translations = {
  de: {
    title: "Mobilfunkhilfe",
    description: "Wähle deinen Anbieter und ein Thema, um passende Lösungsvorschläge zu erhalten.",
    labelProvider: "Anbieter:",
    labelTopic: "Thema:",
    noSolution: "Für diese Kombination liegt kein Lösungsvorschlag vor.",
    buttonText: "Lösungen anzeigen"
  },
  en: {
    title: "Mobile Support",
    description: "Select your provider and a topic to see available solutions.",
    labelProvider: "Provider:",
    labelTopic: "Topic:",
    noSolution: "No solution available for this combination.",
    buttonText: "Show Solutions"
  }
};

document.getElementById("checkBtn").addEventListener("click", () => {
  const anbieter = document.getElementById("anbieter").value;
  const thema = document.getElementById("thema").value;
  const box = document.getElementById("loesung");

  if (loesungen[anbieter] && loesungen[anbieter][thema]) {
    const info = loesungen[anbieter][thema];
    box.innerHTML = `<p>${info.text}</p><img src="${info.logo}" alt="${anbieter} Logo">`;
  } else {
    const lang = document.getElementById("languageSwitch").value;
    box.innerHTML = `<p>${translations[lang].noSolution}</p>`;
  }
});

// Sprachumschaltung
document.getElementById("languageSwitch").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("description").innerText = translations[lang].description;
  document.getElementById("labelProvider").innerText = translations[lang].labelProvider;
  document.getElementById("labelTopic").innerText = translations[lang].labelTopic;
  document.getElementById("checkBtn").innerText = translations[lang].buttonText;
});

// Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Live-Suche
document.getElementById("searchInput").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  const resultBox = document.getElementById("loesung");
  for (let provider in loesungen) {
    for (let topic in loesungen[provider]) {
      const info = loesungen[provider][topic];
      if (info.text.toLowerCase().includes(val)) {
        resultBox.innerHTML = `<p>${info.text}</p><img src="${info.logo}" alt="${provider} Logo">`;
        return;
      }
    }
  }
  resultBox.innerHTML = `<p>Keine passende Lösung gefunden.</p>`;
});