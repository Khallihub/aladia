import { defineConfig } from "cypress";
import {installPlugin} from "@chromatic-com/cypress"


export default defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:3000',  
    experimentalStudio: true,  
    setupNodeEvents(on, config) {
      installPlugin(on, config);     
    },
  },
});
