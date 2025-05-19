// Mapping der Anbieter zu ihren Logo-URLs
const anbieterLogos = {
  SIMON: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/SIMon_Mobile_logo.svg',
  TELEKOM: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Deutsche_Telekom_2022.svg',
  VODAFONE: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Vodafone_2017_logo.svg',
  O2: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/O2_logo.svg'
};

// Funktion zum Anzeigen des Logos
function zeigeAnbieterLogo(anbieter) {
  const logoUrl = anbieterLogos[anbieter];
  const logoContainer = document.getElementById('anbieter-logo');
  
  if (logoUrl) {
    logoContainer.innerHTML = `<img src="${logoUrl}" alt="${anbieter} Logo" style="max-width: 150px; height: auto;">`;
  } else {
    logoContainer.innerHTML = '';
  }
}

// Beispiel: Aufruf der Funktion bei Auswahl eines Anbieters
document.getElementById('anbieter-select').addEventListener('change', function() {
  const ausgewählterAnbieter = this.value;
  zeigeAnbieterLogo(ausgewählterAnbieter);
});