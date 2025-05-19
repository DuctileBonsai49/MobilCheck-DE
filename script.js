// logos aus dem Internet (Wikipedia Commons etc.)
const logos = {
  Telekom: "https://upload.wikimedia.org/wikipedia/commons/8/89/Deutsche_Telekom_AG_Logo_2013.svg",
  Vodafone: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Vodafone_icon.svg",
  O2: "https://upload.wikimedia.org/wikipedia/commons/6/6f/O2_Logo.svg",
  "1und1": "https://upload.wikimedia.org/wikipedia/commons/2/2d/1%261_Logo.svg",
  simonmobile: "https://simonmobile.de/assets/images/logo.svg"
};

// Lösungstexte für Anbieter + Themen
const loesungen = {
  Telekom: {
    Empfang: "Wenn du bei Telekom in der EU keinen Empfang hast, überprüfe, ob Roaming aktiviert ist und dein Gerät Netz von Partneranbietern nutzt.",
    Rechnung: "Bei Telekom Rechnung gibt es eine EU-Roaming-Gebühr nicht, aber prüfe, ob eventuell Extras abgerechnet wurden."
  },
  Vodafone: {
    Empfang: "Vodafone-Kunden brauchen oft manuelles Netz-Suchen im Ausland, um Empfang zu bekommen.",
    Rechnung: "Vodafone verrechnet keine Roaming-Gebühren in der EU – außer bei bestimmten Tarifoptionen."
  },
  O2: {
    Empfang: "Bei O2 solltest du im Ausland das Netz manuell wählen und Roaming aktiviert haben.",
    Rechnung: "O2-Roaming wird standardmäßig in EU-Tarifen abgedeckt, überprüfe aber deine Rechnungsdetails."
  },
  "1und1": {
    Empfang: "1&1 nutzt Netzpartner in der EU, bei Problemen solltest du den APN prüfen oder den Kundenservice kontaktieren.",
    Rechnung: "Roaming-Gebühren fallen bei 1&1 EU-Tarifen normalerweise nicht an."
  },
  simonmobile: {
    Empfang: "Simon Mobile funktioniert nur teilweise im EU-Ausland, da es kein echtes Roaming-Netz gibt.",
    Rechnung: "Simon Mobile berechnet keine Roaming-Gebühren, da oft gar kein Netz verfügbar ist."
  }
};

// Funktion zum Anzeigen der Lösung + Logo
function zeigeLoesung() {
  const anbieter = document.getElementById("anbieter").value;
  const thema = document.getElementById("thema").value;
  const loesungDiv = document.getElementById("loesung");

  if (!anbieter || !thema) {
    loesungDiv.innerHTML = "<p>Bitte wähle Anbieter und Thema aus.</p>";
    return;
  }

  const text = loesungen[anbieter]?.[thema] || "Für diese Kombination liegt kein Lösungsvorschlag vor.";
  const logoUrl = logos[anbieter];

  let html = `<p>${text}</p>`;
  if (logoUrl) {
    html += `<img src="${logoUrl}" alt="${anbieter} Logo" style="max-height: 40px; margin-top: 10px;">`;
  }

  loesungDiv.innerHTML = html;
}

// Event-Listener für Auswahländerungen
document.getElementById("anbieter").addEventListener("change", zeigeLoesung);
document.getElementById("thema").addEventListener("change", zeigeLoesung);