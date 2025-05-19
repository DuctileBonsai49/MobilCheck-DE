// Daten: Anbieter, Themen, Lösungen (de/en) + Logo URLs
const data = {
  "1&1": {
    "SIM-Aktivierung": {
      de: {
        text: `Bei 1&1 aktivierst du deine SIM-Karte im Kundencenter unter <a href="https://www.1und1.de/login" target="_blank" rel="noopener noreferrer">1und1.de/login</a>.<br>
        Alternativ kannst du den Kundenservice anrufen: 0721 9600 196.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      },
      en: {
        text: `Activate your 1&1 SIM card in the customer center at <a href="https://www.1und1.de/login" target="_blank" rel="noopener noreferrer">1und1.de/login</a>.<br>
        Or call customer service: +49 721 9600 196.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      }
    },
    "Roaming": {
      de: {
        text: `Roaming ist bei 1&1 automatisch aktiv, aber du solltest in den Einstellungen prüfen, ob Daten-Roaming eingeschaltet ist.<br>
        Infos: <a href="https://hilfe.1und1.de/mobilfunk/roaming-53337.html" target="_blank" rel="noopener noreferrer">1&1 Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      },
      en: {
        text: `Roaming is automatically enabled at 1&1, but check if data roaming is enabled in your settings.<br>
        Info: <a href="https://hilfe.1und1.de/mobilfunk/roaming-53337.html" target="_blank" rel="noopener noreferrer">1&1 Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/1und1_Logo.svg"
      }
    }
  },
  "Vodafone": {
    "SIM-Aktivierung": {
      de: {
        text: `Aktiviere deine Vodafone SIM über die App oder unter <a href="https://www.vodafone.de/aktivierung" target="_blank" rel="noopener noreferrer">vodafone.de/aktivierung</a>.<br>
        Kundenservice: 0800 172 1212.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Activate your Vodafone SIM via the app or at <a href="https://www.vodafone.de/aktivierung" target="_blank" rel="noopener noreferrer">vodafone.de/aktivierung</a>.<br>
        Customer service: 0800 172 1212.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    },
    "Roaming": {
      de: {
        text: `Für Roaming bei Vodafone muss es in den Einstellungen aktiviert sein.<br>
        Prüfe deinen Vertrag auf Roamingoptionen.<br>
        Hilfe: <a href="https://www.vodafone.de/hilfe/roaming" target="_blank" rel="noopener noreferrer">Vodafone Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Vodafone roaming needs to be enabled in settings.<br>
        Check your contract for roaming options.<br>
        Find help at <a href="https://www.vodafone.de/hilfe/roaming" target="_blank" rel="noopener noreferrer">Vodafone roaming</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    }
  },
  "Telekom": {
    "SIM-Aktivierung": {
      de: {
        text: `Telekom SIM-Karten aktivierst du unter <a href="https://www.telekom.de/hilfe/mobilfunk-sim-karte" target="_blank" rel="noopener noreferrer">telekom.de/hilfe</a>.<br>
        Kundenservice: 0800 330 1000.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `Activate Telekom SIM cards at <a href="https://www.telekom.de/hilfe/mobilfunk-sim-karte" target="_blank" rel="noopener noreferrer">telekom.de/hilfe</a>.<br>
        Customer service: 0800 330 1000.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      }
    },
    "Roaming": {
      de: {
        text: `Telekom Roaming wird automatisch aktiviert, aber überprüfe deine Einstellungen.<br>
        Infos: <a href="https://www.telekom.de/hilfe/mobilfunk-roaming" target="_blank" rel="noopener noreferrer">Telekom Roaming</a>`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `Telekom roaming is automatically enabled, but check your settings.<br>
        Info: <a href="https://www.telekom.de/hilfe/mobilfunk-roaming" target="_blank"