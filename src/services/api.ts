import axios, { AxiosResponse } from 'axios';

export function getProducts() {
  return new Promise((resolve, reject) => {
    async () => {
      axios
        .get(
          'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
        )
        .then((response: AxiosResponse) => {
          const data = response.data;

          if (response.status === 200 || response.status === 201) {
            resolve(data.products);
          } else {
            reject(data.message);
          }
        })
        .catch((error) => reject(error));
    };
  });
}
