const logoURLs = {
  SIMON: "https://upload.wikimedia.org/wikipedia/commons/7/75/Simon_Mobile_Logo_2022.svg",
  TELEKOM: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Telekom_Logo_2013.svg",
  VODAFONE: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Vodafone_icon_2022.svg",
  O2: "https://upload.wikimedia.org/wikipedia/commons/6/6b/O2-Logo.svg",
  "1&1": "https://upload.wikimedia.org/wikipedia/commons/9/98/1%261_Logo.svg"
};

const loesungen = {
  SIMON: {
    Roaming: [
      "Stelle sicher, dass Roaming in deinem Vertrag aktiviert ist. Das kannst du im <a href='https://www.simonmobile.de/mein-simon' target='_blank'>SIMON Kundenportal</a> überprüfen.",
      "Aktiviere Roaming in den Handy-Einstellungen: <em>Einstellungen > Mobiles Netz > Datenroaming</em>.",
      "Starte dein Smartphone neu.",
      "Kontaktiere den <a href='https://www.simonmobile.de/hilfe/kontakt' target='_blank'>SIMON Support</a> bei Problemen."
    ]
  },
  TELEKOM: {
    Roaming: [
      "Logge dich ins <a href='https://www.telekom.de/kundencenter' target='_blank'>Telekom Kundencenter</a> ein und prüfe deine Roaming-Einstellungen.",
      "Datenroaming am Gerät aktivieren.",
      "Starte dein Gerät neu.",
      "Weitere Hilfe findest du auf der <a href='https://www.telekom.de/hilfe' target='_blank'>Telekom Hilfe-Seite</a>."
    ]
  },
  VODAFONE: {
    Roaming: [
      "Roaming aktivierst du unter <a href='https://www.vodafone.de/meinvodafone' target='_blank'>MeinVodafone</a>.",
      "Auch auf deinem Handy musst du Datenroaming aktivieren.",
      "Starte das Gerät neu.",
      "Mehr Infos unter <a href='https://www.vodafone.de/hilfe' target='_blank'>Vodafone Hilfe</a>."
    ]
  },
  O2: {
    Roaming: [
      "Logge dich bei <a href='https://www.o2online.de' target='_blank'>Mein O2</a> ein und prüfe, ob Roaming aktiv ist.",
      "Auf deinem Handy: <em>Datenroaming</em> aktivieren.",
      "Starte das Gerät neu.",
      "Bei Fragen hilft die <a href='https://www.o2online.de/service' target='_blank'>O2 Service-Seite</a>."
    ]
  },
  "1&1": {
    Roaming: [
      "Rufe das <a href='https://kundenshop.1und1.de/login' target='_blank'>1&1 Control-Center</a> auf und prüfe, ob Roaming aktiviert ist.",
      "Aktiviere zusätzlich Roaming auf deinem Handy: <em>Einstellungen > Mobile Daten > Datenroaming</em>.",
      "Starte dein Handy neu.",
      "Bei Problemen kannst du den <a href='https://www.1und1.de/service' target='_blank'>1&1 Kundenservice</a> kontaktieren."
    ],
    Netzprobleme: [
      "Überprüfe die Netzabdeckung auf der <a href='https://www.1und1.de/netz' target='_blank'>1&1 Netzabdeckungskarte</a>.",
      "Schalte den Flugmodus kurz ein und wieder aus.",
      "Wähle manuell ein anderes verfügbares Netz.",
      "Falls weiterhin kein Empfang: Kontaktiere den 1&1 Support."
    ]
  }
};

// DOM
const anbieterSelect = document.getElementById("anbieter");
const themaSelect = document.getElementById("thema");
const loesungDiv = document.getElementById("loesung");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {
  const anbieter = anbieterSelect.value;
  const thema = themaSelect.value;

  if (!anbieter || !thema) {
    loesungDiv.innerHTML = "<p>Bitte wähle sowohl Anbieter als auch Thema aus.</p>";
    loesungDiv.classList.add("visible");
    return;
  }

  const vorschlaege = loesungen[anbieter]?.[thema];
  const logoURL = logoURLs[anbieter];

  if (vorschlaege && vorschlaege.length > 0) {
    let html = `
      <div style="text-align:center;margin-bottom:10px;">
        <img src="${logoURL}" alt="${anbieter} Logo" style="max-height:60px;">
      </div>
      <h3>Lösungsvorschläge für ${anbieter} – ${thema}</h3>
      <ul>`;
    vorschlaege.forEach(tipp => html += `<li>${tipp}</li>`);
    html += "</ul>";
    loesungDiv.innerHTML = html;
  } else {
    loesungDiv.innerHTML = `
      <div style="text-align:center;margin-bottom:10px;">
        <img src="${logoURL}" alt="${anbieter} Logo" style="max-height:60px;">
      </div>
      <p>Für diese Kombination liegt aktuell kein Lösungsvorschlag vor.</p>`;
  }

  loesungDiv.classList.add("visible");
});