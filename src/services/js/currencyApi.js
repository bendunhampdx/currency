export default class CurrencyConverter {
  static getNewCurrency() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
}
