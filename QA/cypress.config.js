import { defineConfig } from "cypress";
import {installPlugin} from "@chromatic-com/cypress"


export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',  
    experimentalStudio: true,  
    setupNodeEvents(on, config) {
      installPlugin(on, config);     
    },
  },
});
