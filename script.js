// Lösungsvorschläge mit Logo und Links, auch für 1&1 komplett
const loesungen = {
  "SIMON": {
    "Roaming": {
      text: `Stelle sicher, dass Datenroaming in deinen Smartphone-Einstellungen aktiviert ist. Prüfe im <a href="https://www.simonmobile.de/mein-simon" target="_blank">SIMON Kundenportal</a>, ob Roaming freigeschaltet ist. Bei Problemen wende dich an den <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank">SIMON Support</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
    },
    "Netzprobleme": {
      text: `Prüfe die Netzabdeckung auf <a href="https://www.simonmobile.de/netz" target="_blank">SIMON Netzinfo</a>. Starte dein Handy neu und schalte den Flugmodus kurz an und aus. Bleiben Probleme, kontaktiere den <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank">Kundendienst</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
    },
    "Vertragsdaten": {
      text: `Logge dich im <a href="https://www.simonmobile.de/mein-simon" target="_blank">Kundenportal</a> ein, um deine Vertragsdaten einzusehen. Für Änderungen wende dich an den <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank">Support</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
    },
    "SIM-Aktivierung": {
      text: `Die SIM-Aktivierung erfolgt automatisch innerhalb von 24 Stunden nach Erhalt. Falls nicht, überprüfe die Aktivierungsanleitung auf <a href="https://www.simonmobile.de/hilfe/sim-aktivierung" target="_blank">SIMON Hilfe</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
    }
  },
  "TELEKOM": {
    "Roaming": {
      text: `Aktiviere Daten-Roaming in den Einstellungen. Infos zu Roaming-Tarifen findest du auf <a href="https://www.telekom.de/hilfe/mobilfunk/roaming" target="_blank">Telekom Roaming</a>. Support: <a href="https://www.telekom.de/kontakt" target="_blank">Telekom Kontakt</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Deutsche_Telekom_Logo_2022.svg/512px-Deutsche_Telekom_Logo_2022.svg.png"
    },
    "Netzprobleme": {
      text: `Prüfe die Netzabdeckung auf <a href="https://www.telekom.de/netzausbau" target="_blank">Telekom Netzinfo</a>. Versuche Neustart und Flugmodus an/aus. Support über <a href="https://www.telekom.de/kontakt" target="_blank">Telekom Kontakt</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Deutsche_Telekom_Logo_2022.svg/512px-Deutsche_Telekom_Logo_2022.svg.png"
    },
    "Vertragsdaten": {
      text: `Vertragsdetails findest du im <a href="https://www.telekom.de/mein-mobilfunk" target="_blank">Telekom Kundenportal</a>. Änderungen über <a href="https://www.telekom.de/kontakt" target="_blank">Support</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Deutsche_Telekom_Logo_2022.svg/512px-Deutsche_Telekom_Logo_2022.svg.png"
    },
    "SIM-Aktivierung": {
      text: `SIM-Aktivierung erfolgt meist automatisch. Falls nicht, folge der Anleitung auf <a href="https://www.telekom.de/hilfe/sim-aktivierung" target="_blank">Telekom Hilfe</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Deutsche_Telekom_Logo_2022.svg/512px-Deutsche_Telekom_Logo_2022.svg.png"
    }
  },
  "VODAFONE": {
    "Roaming": {
      text: `Aktiviere Roaming in den Einstellungen. Infos zu Roaming-Tarifen unter <a href="https://www.vodafone.de/hilfe/roaming.html" target="_blank">Vodafone Roaming</a>. Support: <a href="https://www.vodafone.de/hilfe/kontakt.html" target="_blank">Vodafone Kontakt</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vodafone_2017_logo.svg/512px-Vodafone_2017_logo.svg.png"
    },
    "Netzprobleme": {
      text: `Prüfe Netzabdeckung unter <a href="https://www.vodafone.de/hilfe/netzabdeckung.html" target="_blank">Vodafone Netz</a>. Neustart und Flugmodus helfen oft. Support: <a href="https://www.vodafone.de/hilfe/kontakt.html" target="_blank">Kontakt</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vodafone_2017_logo.svg/512px-Vodafone_2017_logo.svg.png"
    },
    "Vertragsdaten": {
      text: `Details im <a href="https://www.vodafone.de/meinkonto" target="_blank">MeinVodafone Kundenportal</a>. Änderungen über Support.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vodafone_2017_logo.svg/512px-Vodafone_2017_logo.svg.png"
    },
    "SIM-Aktivierung": {
      text: `SIM-Aktivierung erfolgt automatisch oder per Anleitung auf <a href="https://www.vodafone.de/hilfe/sim-aktivierung.html" target="_blank">Vodafone Hilfe</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vodafone_2017_logo.svg/512px-Vodafone_2017_logo.svg.png"
    }
  },
  "O2": {
    "Roaming": {
      text: `Datenroaming aktivieren. Infos zu EU-Roaming unter <a href="https://www.o2online.de/service/roaming/eu-roaming/" target="_blank">O2 EU-Roaming</a>. Support: <a href="https://www.o2online.de/service/kontakt/" target="_blank">O2 Kontakt</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/O2_Logo_2014.svg/512px-O2_Logo_2014.svg.png"
    },
    "Netzprobleme": {
      text: `Netzabdeckung prüfen auf <a href="https://www.o2online.de/service/netz/netzabdeckung/" target="_blank">O2 Netzabdeckung</a>. Neustart/Flugmodus probieren. Support kontaktieren.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/O2_Logo_2014.svg/512px-O2_Logo_2014.svg.png"
    },
    "Vertragsdaten": {
      text: `Vertragsdetails im <a href="https://www.o2online.de/mein-o2/" target="_blank">MeinO2 Portal</a>. Änderungen per Support.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/O2_Logo_2014.svg/512px-O2_Logo_2014.svg.png"
    },
    "SIM-Aktivierung": {
      text: `SIM-Aktivierung via Anleitung auf <a href="https://www.o2online.de/service/hilfe/sim-karte-aktivieren/" target="_blank">O2 Hilfe</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/O2_Logo_2014.svg/512px-O2_Logo_2014.svg.png"
    }
  },
  "1&1": {
    "Roaming": {
      text: `Datenroaming in den Einstellungen aktivieren. Infos und FAQs findest du im <a href="https://www.1und1.de/hilfe/mobilfunk/roaming" target="_blank">1&1 Roaming Bereich</a>. Bei Problemen hilft der <a href="https://www.1und1.de/hilfe/kontakt" target="_blank">Kundensupport</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/1und1_Logo_2020.svg/512px-1und1_Logo_2020.svg.png"
    },
    "Netzprobleme": {
      text: `Prüfe die Netzabdeckung auf <a href="https://www.1und1.de/hilfe/mobilfunk/netz" target="_blank">1&1 Netzinfo</a>. Starte dein Gerät neu, aktiviere kurz Flugmodus. Hilfe bekommst du vom <a href="https://www.1und1.de/hilfe/kontakt" target="_blank">Support</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/1und1_Logo_2020.svg/512px-1und1_Logo_2020.svg.png"
    },
    "Vertragsdaten": {
      text: `Vertragsdetails findest du in deinem <a href="https://www.1und1.de/login" target="_blank">1&1 Kundenportal</a>. Änderungen oder Fragen klärst du mit dem <a href="https://www.1und1.de/hilfe/kontakt" target="_blank">Kundendienst</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/1und1_Logo_2020.svg/512px-1und1_Logo_2020.svg.png"
    },
    "SIM-Aktivierung": {
      text: `SIM-Aktivierung erfolgt meist automatisch. Falls nicht, findest du eine Anleitung im <a href="https://www.1und1.de/hilfe/mobilfunk/sim-aktivierung" target="_blank">1&1 Hilfe-Bereich</a>.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/1und1_Logo_2020.svg/512px-1und1_Logo_2020.svg.png"
    }
  }
};

// Elemente aus HTML
const anbieterSelect = document.getElementById("anbieter");
const themaSelect = document.getElementById("thema");
const loesungContainer = document.getElementById("loesung");
const logoImg = document.getElementById("anbieter-logo");

// Wenn Anbieter sich ändert, Thema zurücksetzen und Lösung löschen
anbieterSelect.addEventListener("change", () => {
  themaSelect.selectedIndex = 0;
  loesungContainer.innerHTML = "";
  logoImg.src = "";
});

// Wenn Thema sich ändert, Lösung anzeigen
themaSelect.addEventListener("change", () => {
  const anbieter = anbieterSelect.value;
  const thema = themaSelect.value;

  if (anbieter && thema && loesungen[anbieter] && loesungen[anbieter][thema]) {
    const info = loesungen[anbieter][thema];
    loesungContainer.innerHTML = info.text;
    logoImg.src = info.logo;
    logoImg.alt = anbieter + " Logo";
  } else {
    loesungContainer.innerHTML = "<p>Für diese Kombination sind noch keine Lösungen vorhanden.</p>";
    logoImg.src = "";
    logoImg.alt = "";
  }
});