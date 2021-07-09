export default class CurrencyConverter {
  static getNewCurrency() {
    let checkFetch = function(response) {
      if (!response.ok) {
        throw  Error(response.statusText + " - " + response.url);
      }
      return response;
    };

    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(checkFetch)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
}
