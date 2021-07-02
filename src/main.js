import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './services/js/currencyApi.js'

function getNewCurrency(response) {
  let country = $('#country').val();
  let AEDConversion = $('#dollar').val() * response.conversion_rates.AED
  if (response) {
    if(country === 'United Emirates Dirham') {
      $('#currency').html(`The conversion in AMD is ${AEDConversion}`)
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function() {
  $('#currency').click(function() {
    CurrencyConverter.getNewCurrency()
    .then(function(response) {
      getNewCurrency(response)
    })
  })
  });

  