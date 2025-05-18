const loesungen = {
  "SIMon mobile|Kein Empfang": `
    <ul>
      <li>Datenroaming aktivieren</li>
      <li>Netz manuell z. B. auf KPN/Vodafone NL einstellen</li>
      <li>Flugmodus ein/aus</li>
      <li>SIM korrekt eingesetzt?</li>
      <li>Gerät neu starten</li>
    </ul>
  `,
  "SIMon mobile|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming in SIMon-App aktivieren</li>
      <li>Datenroaming in Handy-Einstellungen einschalten</li>
      <li>Netz manuell auswählen</li>
    </ul>
  `,
  "SIMon mobile|SIM wird nicht erkannt": `
    <ul>
      <li>SIM neu einsetzen</li>
      <li>Gerät neu starten</li>
      <li>SIM in anderem Gerät testen</li>
    </ul>
  `,
  "SIMon mobile|Mobile Daten zu langsam": `
    <ul>
      <li>Netzmodus auf 4G/LTE einstellen</li>
      <li>Datenvolumen prüfen</li>
    </ul>
  `,
  "Telekom|Kein Empfang": `
    <ul>
      <li>Flugmodus aus/an</li>
      <li>Netz manuell auswählen</li>
      <li>Gerät neustarten</li>
    </ul>
  `,
  "Telekom|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming im Kundencenter aktivieren</li>
      <li>APN-Einstellungen prüfen</li>
      <li>Netz manuell wählen</li>
    </ul>
  `,
  "Telekom|SIM wird nicht erkannt": `
    <ul>
      <li>SIM erneut einsetzen</li>
      <li>Gerät neustarten</li>
      <li>SIM in anderem Gerät testen</li>
    </ul>
  `,
  "Telekom|Mobile Daten zu langsam": `
    <ul>
      <li>Netzmodus auf LTE einstellen</li>
      <li>Datenverbrauch prüfen</li>
    </ul>
  `
  // Weitere Anbieter + Probleme kannst du hier ergänzen
};

document.getElementById("zeigeBtn").addEventListener("click", () => {
  const anbieter = document.getElementById("anbieter").value;
  const problem = document.getElementById("problem").value;
  const key = `${anbieter}|${problem}`;
  const container = document.getElementById("loesung");

  if (loesungen[key]) {
    container.innerHTML = `<h3>Lösung für ${anbieter} – ${problem}</h3>${loesungen[key]}`;
  } else {
    container.innerHTML = `<p>Für diese Kombination liegt kein Lösungsvorschlag vor.</p>`;
  }
});