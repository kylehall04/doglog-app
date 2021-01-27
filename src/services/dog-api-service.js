import config from '../config';

const DogApiService = {
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getDog(dogId) {
    return fetch(`${config.API_ENDPOINT}/dogs/${dogId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default DogApiService;
