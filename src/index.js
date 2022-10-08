import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { refs } from './JS/refs';
import { fetchCountries } from './JS/fetchCountries';
import { countryСardMarkup, countriesListMarkup } from './JS/createMarkup';

// var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
  event.preventDefault();
  //   const countryName = refs.searchBox.value.trim();
  const name = event.target.value.trim();
  //   console.log(name);

  if (name === '') {
    return (refs.countryList.innerHTML = ''), (refs.countryInfo.innerHTML = '');
  }

  fetchCountries(name)
    .then(country => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';

      if (country.length === 1) {
        refs.countryInfo.insertAdjacentHTML(
          'beforeend',
          countryСardMarkup(country)
        );
      } else if (country.length >= 10) {
        Alert();
      } else {
        refs.countryList.insertAdjacentHTML(
          'beforeend',
          countriesListMarkup(country)
        );
      }
    })
    .catch(onError);
}

function Alert() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function onError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
