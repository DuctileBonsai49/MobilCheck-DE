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
      <li>Datenroaming in den Handy-Einstellungen einschalten</li>
      <li>Netz manuell auswählen</li>
    </ul>
  `,
  "SIMon mobile|SIM wird nicht erkannt": `
    <ul>
      <li>SIM neu einsetzen</li>
      <li>Handy neu starten</li>
      <li>SIM in anderem Gerät testen</li>
    </ul>
  `,
  "SIMon mobile|Mobile Daten zu langsam": `
    <ul>
      <li>Netzmodus auf 4G/LTE stellen</li>
      <li>Datenvolumen prüfen</li>
    </ul>
  `,
  "Telekom|Kein Empfang": `
    <ul>
      <li>Flugmodus deaktivieren und wieder aktivieren</li>
      <li>Netz manuell wählen</li>
      <li>Gerät neu starten</li>
    </ul>
  `,
  "Telekom|Roaming funktioniert nicht": `
    <ul>
      <li>Im Kundencenter prüfen, ob Roaming aktiviert ist</li>
      <li>Netz manuell wählen</li>
      <li>APN-Einstellungen überprüfen</li>
    </ul>
  `,
  "Telekom|SIM wird nicht erkannt": `
    <ul>
      <li>SIM neu einsetzen</li>
      <li>Gerät neu starten</li>
      <li>SIM in anderem Gerät testen</li>
    </ul>
  `,
  "Telekom|Mobile Daten zu langsam": `
    <ul>
      <li>Netzmodus auf LTE einstellen</li>
      <li>Datenverbrauch prüfen</li>
    </ul>
  `,
  // Weitere Anbieter & Probleme können hier ergänzt werden
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