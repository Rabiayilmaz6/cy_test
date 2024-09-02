import { defineConfig } from "cypress";
import fs from 'fs-extra';

export default defineConfig({
  projectId: 'vsbu46',
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  env: {
    "email": "enessusan1@gmail.com",
    "password": "asdfasdf"
  },
  e2e: {
    screenshotOnRunFailure: false,
    baseUrl: 'https://istabot.com',
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    testIsolation: false,
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('task', {
        log(message: any) {
          console.log(message);
          return null;
        },
        copyFile({ source, destination }: { source: string; destination: string }) {
          return new Promise<null>((resolve, reject) => {
            fs.copy(source, destination, (err: Error | null) => {
              if (err) {
                reject(err);
              } else {
                resolve(null);
              }
            });
          });
        },
      });
      return config;
    },
  },
});