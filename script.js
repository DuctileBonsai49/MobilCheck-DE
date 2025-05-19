const loesungDiv = document.getElementById("loesung");
const anbieterSelect = document.getElementById("anbieter");
const themaSelect = document.getElementById("thema");
const logoContainer = document.getElementById("logoContainer");

const logos = {
  telekom: "https://upload.wikimedia.org/wikipedia/commons/8/89/Telekom_Logo_2022.svg",
  vodafone: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Vodafone_2017_logo.svg",
  o2: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Telef%C3%B3nica_O2_Deutschland_2019_logo.svg",
  simon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/SIMon_Mobile_Logo.svg",
  "1und1": "https://upload.wikimedia.org/wikipedia/commons/d/d3/1%261_Logo_2021.svg"
};

const loesungen = {
  telekom: {
    keinEmpfang: "Starte dein Gerät neu und prüfe, ob Netzprobleme in deiner Region vorliegen.",
    roaming: "Stelle sicher, dass Roaming in den Einstellungen aktiviert ist.",
    smsProbleme: "Überprüfe die SMS-Zentrale unter den Netzwerkeinstellungen.",
    internetLangsam: "Deaktiviere kurzzeitig mobile Daten oder wechsle den Standort."
  },
  vodafone: {
    keinEmpfang: "Manchmal hilft ein kurzer Flugmodus. Prüfe auch Störungen auf der Website.",
    roaming: "Roaming muss sowohl im Gerät als auch im Kundenkonto aktiviert sein.",
    smsProbleme: "Setze die Netzwerkeinstellungen zurück und teste erneut.",
    internetLangsam: "Führe einen Speedtest durch – ggf. hilft ein Netzwechsel (2G/4G/5G)."
  },
  o2: {
    keinEmpfang: "In Grenzregionen kann manuelle Netzwahl helfen.",
    roaming: "Achte auf korrekte APN-Einstellungen für Auslandsverbindungen.",
    smsProbleme: "Ein Neustart und Netzwechsel (Auto auf manuell) kann helfen.",
    internetLangsam: "Zu Stoßzeiten kann das Netz überlastet sein. Standort wechseln."
  },
  simon: {
    keinEmpfang: "SIMon nutzt das Vodafone-Netz. Prüfe, ob dieses verfügbar ist.",
    roaming: "Roaming ist oft standardmäßig aus. Aktiviere es in den Einstellungen.",
    smsProbleme: "Prüfe die SIMon-Hilfe zur SMS-Konfiguration oder wende dich an den Support.",
    internetLangsam: "Tarifbedingt kann die Geschwindigkeit begrenzt sein – siehe Tarifdetails."
  },
  "1und1": {
    keinEmpfang: "1&1 verwendet teils o2 oder Vodafone – prüfe, welches Netz du nutzt.",
    roaming: "Aktiviere Roaming im Handy & Kundencenter. Bei Problemen Netz manuell wählen.",
    smsProbleme: "Vergewissere dich, dass SMS-Zentrale korrekt eingestellt ist: +491720310000 (Vodafone) oder +491760000443 (o2).",
    internetLangsam: "1&1 kann unterschiedliche Netze und Tarife nutzen – wechsle z. B. von 5G zu 4G."
  }
};

function zeigeLoesung() {
  const anbieter = anbieterSelect.value;
  const thema = themaSelect.value;

  logoContainer.innerHTML = "";
  loesungDiv.innerHTML = "";

  if (anbieter && logos[anbieter]) {
    const img = document.createElement("img");
    img.src = logos[anbieter];
    img.alt = anbieter + " Logo";
    img.className = "logo";
    logoContainer.appendChild(img);
  }

  if (anbieter && thema && loesungen[anbieter] && loesungen[anbieter][thema]) {
    loesungDiv.innerHTML = `<p>${loesungen[anbieter][thema]}</p>`;
  } else if (anbieter && thema) {
    loesungDiv.innerHTML = `<p>Für diese Kombination liegt kein Lösungsvorschlag vor.</p>`;
  }
}

anbieterSelect.addEventListener("change", zeigeLoesung);
themaSelect.addEventListener("change", zeigeLoesung);