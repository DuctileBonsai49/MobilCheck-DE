// Anbieter und Probleme (integriert)
const anbieterListe = [
  "SIMon mobile",
  "Telekom",
  "Vodafone",
  "o2",
  "1&1",
  "Congstar",
  "ALDI Talk",
  "Lidl Connect",
  "Blau"
];

const problemListe = [
  "Kein Empfang",
  "Roaming funktioniert nicht",
  "SIM wird nicht erkannt",
  "Mobile Daten zu langsam"
];

// Lösungen
const loesungen = {
  "SIMon mobile|Kein Empfang": `
    1. *Datenroaming aktivieren*: Einstellungen > Mobile Daten > Datenroaming  
    2. *Netz manuell wählen*: z. B. KPN, Vodafone NL, T-Mobile NL  
    3. *Gerät neu starten* oder *Flugmodus ein/aus*  
    4. *SIM neu einsetzen*  
    5. *SIMon Support kontaktieren*, falls das Problem länger besteht
  `,
  "Telekom|Roaming funktioniert nicht": `
    1. *Roaming aktivieren* unter Einstellungen  
    2. *APN-Einstellungen prüfen*  
    3. Netz manuell wählen, z. B. Orange, Vodafone  
    4. Telekom-Kundendienst kontaktieren, wenn nötig
  `
  // Weitere Kombinationen können ergänzt werden
};

// Dropdowns füllen, wenn DOM geladen
document.addEventListener("DOMContentLoaded", () => {
  const anbieterSelect = document.getElementById("anbieter");
  const problemSelect = document.getElementById("problem");

  anbieterListe.forEach(anbieter => {
    const opt = document.createElement("option");
    opt.value = anbieter;
    opt.textContent = anbieter;
    anbieterSelect.appendChild(opt);
  });

  problemListe.forEach(problem => {
    const opt = document.createElement("option");
    opt.value = problem;
    opt.textContent = problem;
    problemSelect.appendChild(opt);
  });
});

// Lösungsanzeige
document.getElementById("zeigeBtn").addEventListener("click", () => {
  const anbieter = document.getElementById("anbieter").value;
  const problem = document.getElementById("problem").value;
  const key = `${anbieter}|${problem}`;
  const ausgabe = document.getElementById("loesung");

  if (loesungen[key]) {
    ausgabe.innerHTML = `
      <h3>Lösung für ${anbieter} – ${problem}</h3>
      <p>${loesungen[key].replace(/\n/g, "<br>").replace(/\*(.*?)\*/g, "<strong>$1</strong>").replace(/_(.*?)_/g, "<em>$1</em>")}</p>
    `;
  } else {
    ausgabe.innerHTML = `<p>Für diese Kombination liegt noch keine Lösung vor. Bitte überprüfe deine Auswahl oder kontaktiere den Anbieter direkt.</p>`;
  }
});