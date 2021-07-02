import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './services/js/currencyApi'

function displayCurrencyConverter(response){
  if (response) {
    $('.currencyconverter').empty();
    for (let i =0; i < response.conversion_rates.length; i++) {
  $('.currencyconverter').append(`
  <tr>
    <td>${response.conversion_rates[i]}</td>
  </tr>`);
  }
  } else 
  {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


$(document).ready(function() {
  
  });

  