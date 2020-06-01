import originalFetch from 'isomorphic-fetch';
import fetchRetry from 'fetch-retry';

const fetch = fetchRetry(originalFetch, {
  retries: 5,
  retryDelay: 1000
});

const http = {
  get: (url) => fetch(url, {
    retryOn: function(attemp, error, response) {
      if (error !== null || response.status >= 400) {
        console.log(`retrying, attempt number ${attemp + 1}`);
        return true;
      }
    }
  }).then(resp => resp.json()),
};

export default http;
export const URL = `https://jsonplaceholder.typicode.com/`;