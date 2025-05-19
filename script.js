const loesungen = {
  Telekom: {
    keinEmpfang: "Stelle sicher, dass du dich in einem versorgten Gebiet befindest. Starte dein Gerät neu und prüfe die Netzwerkeinstellungen.",
    roaming: "Aktiviere Datenroaming in den Einstellungen. Telekom-Kunden haben EU-weites Roaming inklusive. Bei Problemen *+49 1806 330100* kontaktieren.",
    rechnung: "Logge dich in dein Telekom-Kundencenter ein, um deine Rechnung einzusehen. Bei Unklarheiten hilft der Support.",
    netzprobleme: "Prüfe die Netzabdeckung unter telekom.de/netzabdeckung. Störungen kannst du dort direkt melden."
  },
  Vodafone: {
    keinEmpfang: "Schalte dein Handy aus und wieder ein. Kontrolliere in der MeinVodafone-App deinen Status oder SIM-Kartensitz.",
    roaming: "Roaming muss in den Einstellungen aktiv sein. Bei Auslandskosten → Vodafone-Hotline kontaktieren.",
    rechnung: "Alle Rechnungen findest du in der MeinVodafone-App oder auf vodafone.de im Kundenbereich.",
    netzprobleme: "Nutze die Netzkarte unter vodafone.de/netz. Störungen kannst du dort melden."
  },
  O2: {
    keinEmpfang: "SIM-Karte prüfen, Standort wechseln, ggf. Netz manuell auf O2 stellen.",
    roaming: "In Mein O2 Roaming aktivieren. EU-Roaming ist standardmäßig dabei.",
    rechnung: "Alle Rechnungen sind über die Mein O2 App oder im Online-Portal abrufbar.",
    netzprobleme: "Netzabdeckung prüfen auf o2online.de/service/netz. Störung melden möglich."
  },
  "1und1": {
    keinEmpfang: "Stelle sicher, dass dein Handy im 1&1-Netz eingebucht ist. SIM prüfen & Netzsuche manuell starten.",
    roaming: "Roaming muss in der 1&1 Control-Center App aktiviert sein. Achte auf manuelle Netzwahl im Ausland.",
    rechnung: "Deine Rechnungen findest du im Control-Center unter 'Meine Daten'.",
    netzprobleme: "Unter status.1und1.de kannst du Netzstörungen prüfen oder melden."
  },
  simonmobile: {
    keinEmpfang: "Simon mobile nutzt das Vodafone-Netz. Stelle sicher, dass deine SIM korrekt eingelegt ist. Manuelle Netzsuche: Vodafone wählen.",
    roaming: "Datenroaming muss aktiv sein. Simon mobile unterstützt EU-Roaming. Bei Problemen Support kontaktieren.",
    rechnung: "Alle Rechnungen findest du im Kundenbereich unter simonmobile.de.",
    netzprobleme: "Nutze die Vodafone Netzkarte zur Prüfung. Simon mobile ist davon abhängig."
  }
};

const logos = {
  Telekom: "https://upload.wikimedia.org/wikipedia/commons/8/89/Deutsche_Telekom_AG_Logo_2013.svg",
  Vodafone: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Vodafone_icon.svg",
  O2: "https://upload.wikimedia.org/wikipedia/commons/6/6f/O2_Logo.svg",
  "1und1": "https://upload.wikimedia.org/wikipedia/commons/2/2d/1%261_Logo.svg",
  simonmobile: "https://simonmobile.de/assets/images/logo.svg"
};

function zeigeLoesung() {
  const anbieter = document.getElementById("anbieter").value;
  const thema = document.getElementById("thema").value;
  const loesungContainer = document.getElementById("loesung");
  const logoContainer = document.getElementById("logoContainer");

  loesungContainer.innerHTML = "";
  logoContainer.innerHTML = "";

  if (anbieter && thema) {
    const text = loesungen[anbieter]?.[thema];
    const logoURL = logos[anbieter];

    if (text) {
      loesungContainer.textContent = text;

      if (logoURL) {
        const img = document.createElement("img");
        img.src = logoURL;
        img.alt = anbieter + " Logo";
        img.className = "logo";
        logoContainer.appendChild(img);
      }
    } else {
      loesungContainer.textContent = "Für diese Kombination liegt kein Lösungsvorschlag vor.";
    }
  }
}