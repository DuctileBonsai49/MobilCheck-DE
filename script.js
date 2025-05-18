// script.js

const loesungen = {
  "SIMon mobile|Kein Empfang": `
    <ul>
      <li>Datenroaming aktivieren</li>
      <li>Netz manuell z. B. auf KPN, Vodafone NL oder T-Mobile NL einstellen</li>
      <li>Flugmodus an/aus schalten</li>
      <li>SIM-Karte neu einsetzen</li>
      <li>Gerät neu starten</li>
      <li>Kundendienst kontaktieren, falls kein Empfang</li>
    </ul>
  `,
  "SIMon mobile|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming in der SIMon-App oder Einstellungen aktivieren</li>
      <li>Netz manuell auswählen</li>
      <li>APN prüfen und ggf. manuell einstellen</li>
      <li>Gerät neu starten</li>
    </ul>
  `,
  "SIMon mobile|SIM wird nicht erkannt": `
    <ul>
      <li>SIM-Karte richtig einsetzen</li>
      <li>Handy neu starten</li>
      <li>SIM in anderem Gerät testen</li>
      <li>Bei Defekt SIMon kontaktieren</li>
    </ul>
  `,
  "SIMon mobile|Mobile Daten zu langsam": `
    <ul>
      <li>Netztyp manuell auf 4G/LTE stellen</li>
      <li>Datenvolumen prüfen (Highspeed aufgebraucht?)</li>
      <li>Netzabdeckung am Standort prüfen</li>
    </ul>
  `,

  "Telekom|Kein Empfang": `
    <ul>
      <li>Flugmodus an/aus schalten</li>
      <li>Netz manuell wählen</li>
      <li>SIM-Karte prüfen</li>
      <li>Telekom-Support kontaktieren</li>
    </ul>
  `,
  "Telekom|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming im Kundencenter aktivieren</li>
      <li>APN auf internet.telekom prüfen</li>
      <li>Netz manuell auf Partnernetz (z. B. Orange) wählen</li>
    </ul>
  `,
  "Telekom|SIM wird nicht erkannt": `
    <ul>
      <li>SIM neu einsetzen</li>
      <li>Handy neustarten</li>
      <li>SIM in anderem Gerät testen</li>
      <li>Telekom-Shop aufsuchen bei Defekt</li>
    </ul>
  `,
  "Telekom|Mobile Daten zu langsam": `
    <ul>
      <li>APN auf internet.telekom prüfen</li>
      <li>Netzmodus auf 4G/LTE forcieren</li>
      <li>Speed-Optionen im Tarif prüfen</li>
    </ul>
  `,

  "Vodafone|Kein Empfang": `
    <ul>
      <li>Netzabdeckung prüfen</li>
      <li>Manuelle Netzwahl auf Vodafone NL oder Partner</li>
      <li>SIM testen oder tauschen</li>
    </ul>
  `,
  "Vodafone|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming in MeinVodafone aktivieren</li>
      <li>Netz manuell wählen</li>
      <li>APN prüfen: web.vodafone.de</li>
    </ul>
  `,
  "Vodafone|SIM wird nicht erkannt": `
    <ul>
      <li>SIM korrekt einsetzen</li>
      <li>SIM in anderem Handy testen</li>
      <li>Ersatzkarte bei Vodafone anfordern</li>
    </ul>
  `,
  "Vodafone|Mobile Daten zu langsam": `
    <ul>
      <li>Datenvolumen prüfen (Highspeed verbraucht?)</li>
      <li>Netztyp auf LTE stellen</li>
    </ul>
  `,

  "o2|Kein Empfang": `
    <ul>
      <li>Manueller Netzsuchlauf</li>
      <li>Partnernetz auswählen</li>
      <li>Roaming aktivieren</li>
      <li>SIM prüfen</li>
    </ul>
  `,
  "o2|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming in o2 App oder Kundencenter prüfen</li>
      <li>APN auf internet setzen</li>
      <li>Netz manuell wählen</li>
    </ul>
  `,
  "o2|SIM wird nicht erkannt": `
    <ul>
      <li>SIM neu einlegen</li>
      <li>Gerät neu starten</li>
      <li>SIM in anderem Gerät testen</li>
      <li>Ersatzkarte bei o2 bestellen</li>
    </ul>
  `,
  "o2|Mobile Daten zu langsam": `
    <ul>
      <li>Netzmodus auf 4G/LTE stellen</li>
      <li>Datenvolumen prüfen</li>
      <li>Netzabdeckung am Standort prüfen</li>
    </ul>
  `,

  "1&1|Kein Empfang": `
    <ul>
      <li>Flugmodus an/aus</li>
      <li>Netz manuell wählen (z. B. Telekom oder Vodafone)</li>
      <li>SIM korrekt einsetzen</li>
      <li>1&1 Kundendienst kontaktieren</li>
    </ul>
  `,
  "1&1|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming im 1&1 Kundenportal aktivieren</li>
      <li>Datenroaming einschalten</li>
      <li>Netz manuell auswählen</li>
    </ul>
  `,
  "1&1|SIM wird nicht erkannt": `
    <ul>
      <li>SIM neu einsetzen</li>
      <li>Gerät neustarten</li>
      <li>SIM in anderem Handy testen</li>
      <li>1&1 Ersatzkarte anfordern</li>
    </ul>
  `,
  "1&1|Mobile Daten zu langsam": `
    <ul>
      <li>Netzmodus auf LTE einstellen</li>
      <li>Datenvolumen prüfen</li>
      <li>Netzabdeckung prüfen</li>
    </ul>
  `,

  "Congstar|Kein Empfang": `
    <ul>
      <li>Flugmodus an/aus</li>
      <li>Netz manuell wählen</li>
      <li>SIM prüfen</li>
      <li>Congstar Service kontaktieren</li>
    </ul>
  `,
  "Congstar|Roaming funktioniert nicht": `
    <ul>
      <li>Roaming in Kundencenter aktivieren</li>
      <li>Datenroaming aktivieren</li>
      <li>Netz manuell wählen</li>
    </ul>
  `,
  "Congstar|SIM wird nicht erkannt": `
    <ul>
      <li>SIM herausnehmen und neu einsetzen</li>
      <li>Gerät neu starten</li>
      <li>SIM in anderem Gerät testen</li>
      <li>Congstar Ersatzkarte anfordern</li>
    </ul>
  `,
  "Congstar|Mobile Daten zu langsam": `
    <ul>
      <li>Netztyp auf LTE einstellen</li>
      <li>Datenvolumen prüfen</li>
      <li>Netzabdeckung prüfen</li>
    </ul>
  `
};

document.getElementById("zeigeBtn").addEventListener("click", () => {
  const anbieter = document.getElementById("anbieter").value;
  const problem = document.getElementById("problem").value;
  const key = `${anbieter}|${problem}`;
  const container = document.getElementById("loesung");

  if (loesungen[key]) {
    container.innerHTML = `<h3>Lösung für ${anbieter} – ${problem}</h3>${loesungen[key]}`;
  } else {
    container.innerHTML = `<p>Für diese Kombination liegt noch keine Lösung vor.</p>`;
  }
});