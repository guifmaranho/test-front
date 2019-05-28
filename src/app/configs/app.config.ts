import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    heroes: 'heroes',
    boards: 'boards',
    error404: '404'
  },
  votesLimit: 30,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/junqueira/head',
  sentryDSN: 'https://dcf185ea459d428083eed867858b81ad@sentry.io/1361726'
};
