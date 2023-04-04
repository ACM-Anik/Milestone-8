const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = (countries) => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country)).join(' ');
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML;
}

const getCountryHTML = ({name, flags, area, region}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <h4>Area: ${area}sq</h4>
            <h4>Continent: ${region}</h4>
            <img src="${flags.png}">
        </div>
    `;
};


// --> Option-1:
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `;
// };


// --> Option-2:
// const getCountryHTML = country => {
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `;
// };


// --> Option-3:
// const getCountryHTML = ({name, flags}) => {
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `;
// };