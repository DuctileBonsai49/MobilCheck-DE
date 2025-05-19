// Lösungstexte in Deutsch & Englisch inkl. ausführlichem Text + Logo-URL
const loesungen = {
  SIMON: {
    Roaming: {
      de: {
        text: `Stelle sicher, dass Datenroaming in deinen Smartphone-Einstellungen aktiviert ist. 
          Ohne aktiviertes Roaming kannst du im Ausland keine mobilen Daten nutzen.<br>
          Logge dich außerdem in das <a href="https://www.simonmobile.de/mein-simon" target="_blank" rel="noopener">SIMON Kundenportal</a> ein, um zu prüfen, ob Roaming für deine SIM freigeschaltet ist.<br>
          Solltest du weiterhin Probleme haben, kontaktiere den <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank" rel="noopener">SIMON Kundenservice</a> direkt.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      },
      en: {
        text: `Make sure that data roaming is enabled in your smartphone settings. 
          Without roaming enabled, you won't be able to use mobile data abroad.<br>
          Also, log in to the <a href="https://www.simonmobile.de/mein-simon" target="_blank" rel="noopener">SIMON customer portal</a> to check if roaming is activated for your SIM.<br>
          If you still have issues, contact the <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank" rel="noopener">SIMON customer service</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      }
    },
    Netzprobleme: {
      de: {
        text: `Prüfe die Netzabdeckung in deiner Region auf der <a href="https://www.simonmobile.de/netz" target="_blank" rel="noopener">SIMON Netzinfo-Seite</a>.<br>
          Ein Neustart des Smartphones und das kurzzeitige Aktivieren des Flugmodus kann oft helfen.<br>
          Falls weiterhin Probleme bestehen, wende dich an den <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank" rel="noopener">SIMON Support</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      },
      en: {
        text: `Check the network coverage in your area on the <a href="https://www.simonmobile.de/netz" target="_blank" rel="noopener">SIMON network info page</a>.<br>
          Restarting your smartphone and toggling airplane mode on and off often helps.<br>
          If issues persist, contact <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank" rel="noopener">SIMON support</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      }
    },
    Vertragsdaten: {
      de: {
        text: `Du kannst deine Vertragsdaten jederzeit im <a href="https://www.simonmobile.de/mein-simon" target="_blank" rel="noopener">Kundenportal</a> einsehen.<br>
          Für Vertragsänderungen kontaktiere bitte den <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank" rel="noopener">SIMON Support</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      },
      en: {
        text: `You can view your contract details anytime in the <a href="https://www.simonmobile.de/mein-simon" target="_blank" rel="noopener">customer portal</a>.<br>
          For contract changes, please contact <a href="https://www.simonmobile.de/hilfe/kontakt" target="_blank" rel="noopener">SIMON support</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      }
    },
    "SIM-Aktivierung": {
      de: {
        text: `Die SIM-Aktivierung erfolgt in der Regel automatisch.<br>
          Sollte das nicht passieren, findest du hier eine Anleitung: <a href="https://www.simonmobile.de/hilfe/sim-aktivierung" target="_blank" rel="noopener">SIMON SIM-Aktivierung</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      },
      en: {
        text: `SIM activation usually happens automatically.<br>
          If it does not, you can find instructions here: <a href="https://www.simonmobile.de/hilfe/sim-aktivierung" target="_blank" rel="noopener">SIMON SIM Activation</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SIMon_mobile_Logo.svg/512px-SIMon_mobile_Logo.svg.png"
      }
    }
  },

  TELEKOM: {
    Roaming: {
      de: {
        text: `Bei der Telekom solltest du im Ausland Roaming in den Einstellungen aktivieren.<br>
          Prüfe auch, ob dein Vertrag Roaming unterstützt.<br>
          Mehr Infos findest du im <a href="https://www.telekom.de/hilfe/mobilfunk/roaming" target="_blank" rel="noopener">Telekom Roaming Hilfebereich</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `For Telekom, enable roaming in your settings when abroad.<br>
          Also check if your contract supports roaming.<br>
          More info at the <a href="https://www.telekom.de/hilfe/mobilfunk/roaming" target="_blank" rel="noopener">Telekom roaming help page</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      }
    },
    Netzprobleme: {
      de: {
        text: `Telekom Netzprobleme können oft durch einen Neustart des Geräts behoben werden.<br>
          Falls nicht, kontaktiere den <a href="https://www.telekom.de/kontakt" target="_blank" rel="noopener">Telekom Kundenservice</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `Telekom network issues can often be solved by restarting your device.<br>
          If not, contact <a href="https://www.telekom.de/kontakt" target="_blank" rel="noopener">Telekom customer service</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      }
    },
    Vertragsdaten: {
      de: {
        text: `Deine Vertragsdaten kannst du im <a href="https://www.telekom.de/mein-telekom" target="_blank" rel="noopener">Telekom Kundenportal</a> einsehen.<br>
          Für Vertragsänderungen wende dich an den Kundenservice.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `You can view your contract details in the <a href="https://www.telekom.de/mein-telekom" target="_blank" rel="noopener">Telekom customer portal</a>.<br>
          For contract changes, contact customer service.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      }
    },
    "SIM-Aktivierung": {
      de: {
        text: `SIM-Aktivierung bei Telekom erfolgt meist automatisch.<br>
          Falls nicht, findest du Hilfe im <a href="https://www.telekom.de/hilfe/mobilfunk/sim-aktivierung" target="_blank" rel="noopener">Telekom Hilfe-Bereich</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      },
      en: {
        text: `SIM activation usually happens automatically at Telekom.<br>
          If not, find help in the <a href="https://www.telekom.de/hilfe/mobilfunk/sim-aktivierung" target="_blank" rel="noopener">Telekom help section</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Deutsche_Telekom_2013_logo.svg"
      }
    }
  },

  VODAFONE: {
    Roaming: {
      de: {
        text: `Vodafone Roaming muss in den Einstellungen aktiviert werden.<br>
          Prüfe deinen Vertrag auf Roaming-Optionen.<br>
          Hilfe findest du unter <a href="https://www.vodafone.de/hilfe/roaming" target="_blank" rel="noopener">Vodafone Roaming</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Enable Vodafone roaming in your settings.<br>
          Check your contract for roaming options.<br>
          Help at <a href="https://www.vodafone.de/hilfe/roaming" target="_blank" rel="noopener">Vodafone roaming</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    },
    Netzprobleme: {
      de: {
        text: `Bei Netzproblemen hilft oft ein Neustart des Handys.<br>
          Weitere Hilfe unter <a href="https://www.vodafone.de/hilfe/netzprobleme" target="_blank" rel="noopener">Vodafone Netzprobleme</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Restart your phone to solve network issues.<br>
          More help at <a href="https://www.vodafone.de/hilfe/netzprobleme" target="_blank" rel="noopener">Vodafone network issues</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    },
    Vertragsdaten: {
      de: {
        text: `Vertragsdaten kannst du im <a href="https://www.vodafone.de/mein-vodafone" target="_blank" rel="noopener">Vodafone Kundenportal</a> prüfen.<br>
          Änderungen über Kundenservice.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `Check your contract details in the <a href="https://www.vodafone.de/mein-vodafone" target="_blank" rel="noopener">Vodafone customer portal</a>.<br>
          Changes via customer service.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    },
    "SIM-Aktivierung": {
      de: {
        text: `SIM wird meistens automatisch aktiviert.<br>
          Hilfe hier: <a href="https://www.vodafone.de/hilfe/sim-aktivierung" target="_blank" rel="noopener">Vodafone SIM Aktivierung</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      },
      en: {
        text: `SIM usually activates automatically.<br>
          Help here: <a href="https://www.vodafone.de/hilfe/sim-aktivierung" target="_blank" rel="noopener">Vodafone SIM activation</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vodafone_icon.svg"
      }
    }
  },

  O2: {
    Roaming: {
      de: {
        text: `Aktiviere Roaming in deinen Geräteeinstellungen.<br>
          Prüfe, ob dein O2-Vertrag Roaming enthält.<br>
          Mehr dazu im <a href="https://www.o2online.de/hilfe/roaming" target="_blank" rel="noopener">O2 Roaming Bereich</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      },
      en: {
        text: `Enable roaming in your device settings.<br>
          Check if your O2 contract includes roaming.<br>
          More at <a href="https://www.o2online.de/hilfe/roaming" target="_blank" rel="noopener">O2 roaming info</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      }
    },
    Netzprobleme: {
      de: {
        text: `Starte dein Handy neu, um Netzprobleme zu beheben.<br>
          Kontakt bei anhaltenden Problemen: <a href="https://www.o2online.de/hilfe/kontakt" target="_blank" rel="noopener">O2 Kontakt</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      },
      en: {
        text: `Restart your phone to fix network issues.<br>
          Contact if problems persist: <a href="https://www.o2online.de/hilfe/kontakt" target="_blank" rel="noopener">O2 contact</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      }
    },
    Vertragsdaten: {
      de: {
        text: `Vertragsdaten findest du im <a href="https://www.o2online.de/mein-o2" target="_blank" rel="noopener">Mein O2 Kundenportal</a>.<br>
          Änderungen über Kundenservice.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      },
      en: {
        text: `Find contract details in the <a href="https://www.o2online.de/mein-o2" target="_blank" rel="noopener">Mein O2 customer portal</a>.<br>
          Changes via customer service.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      }
    },
    "SIM-Aktivierung": {
      de: {
        text: `SIM wird normalerweise automatisch aktiviert.<br>
          Falls nicht, siehe <a href="https://www.o2online.de/hilfe/sim-aktivierung" target="_blank" rel="noopener">O2 SIM Aktivierung</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      },
      en: {
        text: `SIM usually activates automatically.<br>
          If not, see <a href="https://www.o2online.de/hilfe/sim-aktivierung" target="_blank" rel="noopener">O2 SIM activation</a>.`,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/O2_logo_2014.svg"
      }
    }
  }
};