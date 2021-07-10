import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './services/js/currencyApi.js';

function getElements(response) {
  let country = $('#country').val();

  if (response.result !== "success") {
    const errorTypeIfExists = (response && response['error-type']) ? response['error-type'] : null;
    $(".showErrors").html(`There was an error and the type was ${errorTypeIfExists}!`);
  }
  else if (country === 'United Emirates') {
    let AEDConversion = $('#dollar').val() * response.conversion_rates.AED;
    $('#currency').html(`The conversion in AMD is ${AEDConversion}`);
  }
  else if (country === 'Afghanistan') {
    let AFNConversion = $('#dollar').val() * response.conversion_rates.AFN;
    $('#currency').html(`The conversion in AFN is ${AFNConversion}`);
  }
  else if (country === 'Albania') {
    let ALLConversion = $('#dollar').val() * response.conversion_rates.ALL;
    $('#currency').html(`The conversion in ALL is ${ALLConversion}`);
  }
  else if (country === 'Armenia') {
    let AMDConversion = $('#dollar').val() * response.conversion_rates.AMD;
    $('#currency').html(`The conversion in ALL is ${AMDConversion}`);
  }
  else if (country === 'Netherlands') {
    let ANGConversion = $('#dollar').val() * response.conversion_rates.ANG;
    $('#currency').html(`The conversion in ANG is ${ANGConversion}`);
  }
  else if (country === 'Puddleland') {
    let PUDConversion = $('#dollar').val() * response.conversion_rates.PUD;
    $('#currency').html(`The conversion in PUD is ${PUDConversion}`);
  }
  else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function () {
  $('#currency').click(function () {
    CurrencyConverter.getNewCurrency()
      .then(function (response) {
        getElements(response);
      }).catch(function () {
        $('.showErrors').text(`There was an error fetching information from the API.`);
      });
  });
});

