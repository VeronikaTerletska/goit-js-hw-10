export function countryСardMarkup(country) {
  return country
    .map(({ flags, name, capital, population, languages }) => {
      return `
      <ul class="country-info__list">
            <li class="country-info__item">
              <img class="country-info__item--flag" src="${
                flags.svg
              }" alt="Flag of ${name.official}" width="50" />
              <h2 class="country-info__item--name">${name.official}</h2>
            </li>
            <li class="country-info__item"><span class="country-info__item--property">Capital: </span>${capital}</li>
            <li class="country-info__item"><span class="country-info__item--property">Population: </span>${population}</li>
            <li class="country-info__item"><span class="country-info__item--property">Languages: </span>${Object.values(
              languages
            )}</li>
        </ul>
    `;
    })
    .join('');
}

export function countriesListMarkup(country) {
  return country
    .map(({ flags, name }) => {
      return `
    <li class="country-list__item">
      <img class="country-list__flags" src="${flags.svg}" alt="${name.official}" width="25" />
      <h2 class="country-list__name">${name.official}</h2>
    </li>
    `;
    })
    .join('');
}
