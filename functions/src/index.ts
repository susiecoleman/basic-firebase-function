import * as functions from 'firebase-functions';

exports.basicFunction = functions
  .region('europe-west1')
  .https.onRequest((request, response) => {
    response.send('OK');
  });
