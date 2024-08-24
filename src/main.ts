import { bootstrapApplication } from '@angular/platform-browser';
import { startServer } from '@planess/train-a-backend';
import appConfig from './app/app.config';
import AppComponent from './app/app.component';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startServer().then(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    bootstrapApplication(AppComponent, appConfig)
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err)),
  // eslint-disable-next-line function-paren-newline
);
