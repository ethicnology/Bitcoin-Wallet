export default class Utils {
    static languageBigName(l : string) : string {
        if (l == "en") {
          return 'English'
        }
    
        else if (l == "es") {
          return 'Español'
        }
    
        else if (l == "fr") {
          return 'Français'
        }
        
        else if(l == "ja") {
          return '日本語'
        }
        
        else if(l == "ca") {
           return 'Catalan'
        }
    
        else {
          return 'English'
        }
      }
    
      static languageShortCode(l : string) : string {
    
        if (l == "English") {
          return 'en'
        }
    
        else if (l == "Español") {
          return 'es'
        }
    
        else if (l == "Français") {
          return 'fr'
        }
        
        else if(l == "日本語") {
          return 'ja'
        }
        
        else if(l == "Catalan") {
           return 'ca'
        }
    
        else {
          return 'en'
        }
    
      }
}