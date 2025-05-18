const loesungen = {
  SIMON: {
    Roaming: [
      "Überprüfe, ob Roaming in deinem Vertrag aktiviert ist.",
      "Setze dein Handy einmal aus und wieder an.",
      "Kontaktiere den SIMON-Kundendienst, falls kein Empfang vorhanden ist."
    ],
    Netzprobleme: [
      "Versuche manuell ein anderes Netz auszuwählen in den Einstellungen.",
      "Prüfe, ob ein Netzstörung vorliegt (SIMON Webseite).",
      "Wechsle ggf. den Standort oder suche einen besseren Empfangsplatz."
    ],
    Rechnung: [
      "Kontrolliere deine Rechnung online im Kundenbereich.",
      "Bei Unklarheiten den Kundendienst kontaktieren.",
      "Prüfe, ob alle gebuchten Leistungen korrekt abgerechnet wurden."
    ],
    Vertragswechsel: [
      "Informiere dich über Tarifoptionen auf der SIMON-Webseite.",
      "Kundenservice bei Fragen zum Wechsel kontaktieren.",
      "Beachte Kündigungsfristen und Vertragsbedingungen."
    ],
    Kündigung: [
      "Sende deine Kündigung schriftlich per E-Mail oder Post.",
      "Bestätige den Eingang der Kündigung.",
      "Kläre offene Rechnungen vor Vertragsende."
    ]
  },
  TELEKOM: {
    Roaming: [
      "Roaming muss für deinen Tarif aktiviert sein.",
      "Stelle sicher, dass dein Handy das EU-Roaming unterstützt.",
      "Kontaktiere Telekom, wenn du im Ausland keinen Empfang hast."
    ],
    Netzprobleme: [
      "Manueller Netzwechsel kann helfen.",
      "Netzstörungen werden auf der Telekom-Statusseite angezeigt.",
      "Deaktiviere und aktiviere den Flugmodus einmal."
    ],
    Rechnung: [
      "Rechnungen findest du im MeinMagenta Bereich.",
      "Fragen zum Tarif klärt der Kundenservice.",
      "Kontrolliere auf nicht autorisierte Zusatzdienste."
    ],
    Vertragswechsel: [
      "Tarifwechsel online im Kundenkonto möglich.",
      "Telefonische Beratung bei Vertragsänderungen.",
      "Prüfe Sonderangebote und Rabatte vor Wechsel."
    ],
    Kündigung: [
      "Kündigungsfristen beachten.",
      "Kündigung schriftlich einreichen.",
      "Nach Vertragsende SIM-Karte entsorgen oder zurückgeben."
    ]
  },
  VODAFONE: {
    Roaming: [
      "Roaming ist in deinem Vertrag enthalten?",
      "Handy neu starten kann Empfangsprobleme lösen.",
      "Vodafone Kundenservice bei anhaltenden Problemen kontaktieren."
    ],
    Netzprobleme: [
      "Manuelle Netzwahl probieren.",
      "Netzstörungen unter vodafone.de/status prüfen.",
      "SIM-Karte ggf. neu einsetzen oder prüfen lassen."
    ],
    Rechnung: [
      "Rechnungen online im Kundenportal abrufen.",
      "Unklarheiten direkt mit Vodafone klären.",
      "Auf unerwartete Zusatzkosten achten."
    ],
    Vertragswechsel: [
      "Online im Kundenbereich Tarifoptionen prüfen.",
      "Vodafone Hotline für Beratung nutzen.",
      "Informiere dich über Mindestlaufzeiten."
    ],
    Kündigung: [
      "Kündigung schriftlich oder per Onlineformular einreichen.",
      "Bestätigungs-E-Mail abwarten.",
      "SIM-Karte nach Vertragsende deaktivieren lassen."
    ]
  },
  O2: {
    Roaming: [
      "Roaming in den Einstellungen aktivieren.",
      "Überprüfe, ob dein Tarif Roaming abdeckt.",
      "Bei Problemen O2 Kundenservice kontaktieren."
    ],
    Netzprobleme: [
      "Manueller Netzwechsel zu anderen Partnernetzen versuchen.",
      "Aktuelle Netzstörungen auf o2online.de prüfen.",
      "Flugmodus kurz an- und ausschalten."
    ],
    Rechnung: [
      "Rechnungen im Mein O2 Portal einsehen.",
      "Fragen zur Abrechnung telefonisch klären.",
      "Unerwartete Gebühren überprüfen."
    ],
    Vertragswechsel: [
      "Tarifwechsel online im Kundenkonto möglich.",
      "Sonderangebote bei Vertragsverlängerung prüfen.",
      "Kundenberater telefonisch kontaktieren."
    ],
    Kündigung: [
      "Schriftliche Kündigung fristgerecht senden.",
      "Kündigungsbestätigung aufbewahren.",
      "SIM-Karte nach Vertragsende zurückgeben."
    ]
  }
};

const anbieterSelect = document.getElementById("anbieter");
const themaSelect = document.getElementById("thema");
const loesungDiv = document.getElementById("loesung");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {
  const anbieter = anbieterSelect.value;
  const thema = themaSelect.value;

  if (!anbieter || !thema) {
    loesungDiv.style.opacity = 1;
    loesungDiv.innerHTML = "<p>Bitte wähle sowohl Anbieter als auch Thema aus.</p>";
    return;
  }

  const vorschlaege = loesungen[anbieter]?.[thema];

  if (vorschlaege && vorschlaege.length > 0) {
    let html = `<h3>Lösungsvorschläge für ${anbieter} - ${thema}</h3><ul>`;
    for (const tipp of vorschlaege) {
      html += `<li>${tipp}</li>`;
    }
    html += "</ul>";
    loesungDiv.innerHTML = html;
  } else {
    loesungDiv.innerHTML = "<p>Für diese Kombination liegt kein Lösungsvorschlag vor.</p>";
  }
  loesungDiv.style.opacity = 1;
});