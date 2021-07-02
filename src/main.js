import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './services/js/currencyApi.js'

function getElements(response) {
  let country = $('#country').val();
  let AEDConversion = $('#dollar').val() * response.conversion_rates.AED
  let AFNConversion = $('#dollar').val() * response.conversion_rates.AFN
  let ALLConversion = $('#dollar').val() * response.conversion_rates.ALL
  let AMDConversion = $('#dollar').val() * response.conversion_rates.AMD
  let ANGConversion = $('#dollar').val() * response.conversion_rates.ANG
  let PUDConversion = $('#dollar').val() * response.conversion_rates.PUD
  if (response) {
    if(country === 'United Emirates') {
      $('#currency').html(`The conversion in AMD is ${AEDConversion}`)
    }
    else if(country === 'Afghanistan') {
      $('#currency').html(`The conversion in AFN is ${AFNConversion}`)
    }
    else if(country === 'Albania') {
      $('#currency').html(`The conversion in ALL is ${ALLConversion}`)
    }
    else if(country === 'Armenia') {
      $('#currency').html(`The conversion in ALL is ${AMDConversion}`)
    }
    else if(country === 'Netherlands') {
      $('#currency').html(`The conversion in ANG is ${ANGConversion}`)
    }
    else if(country === 'Puddleland') {
      $('#currency').html(`The conversion in PUD is ${PUDConversion}`)
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function() {
  $('#currency').click(function() {
    CurrencyConverter.getNewCurrency()
    .then(function(response) {
      getElements(response)
    })
  })
  });

