// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD_-KhG7YbEnfRaVkl25QkkI1LpW3rjHTk',
    authDomain: 'kleider-2f5b6.firebaseapp.com',
    databaseURL: 'https://kleider-2f5b6.firebaseio.com',
    projectId: 'kleider-2f5b6',
    storageBucket: 'kleider-2f5b6.appspot.com',
    messagingSenderId: '129498300728'
  },

  mapbox: {
    accessToken: 'pk.eyJ1Ijoia2ltdG9hbjE5OTgiLCJhIjoiY2p2bmFuY2g0MWw5NjQzbXVsdnFhdm8xMiJ9.wFCCmFNXo5Nk6nTQexMyvQ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
