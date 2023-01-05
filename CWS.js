
let index = - 1;
const nextCountry = document.getElementById("nextBtn")
const prevCountry = document.getElementById("prevBtn")


const countries = [
    {
        country: 'England',
        city: 'London',
        population: '56 miljoner',
        democracy: true,
        language: 'English',
        religion: 'Christianity',
        continent: 'Europe',
        flag: 'england.png',
    },
    {
        country: 'France',
        city: 'Paris',
        population: '68 miljoner',
        democracy: true,
        language: 'French',
        religion: 'Christianity',
        continent: 'Europe',
        flag: 'france.png',
    },
    {
        country: 'Uganda',
        city: 'Kampala',
        population: '44 miljoner',
        democracy: true,
        language: 'Swahili and English',
        religion: 'Indigenous religions, Islam, Christianity',
        continent: 'Africa',
        flag: 'uganda.png'
    },
];

document.getElementById("prevBtn").disabled = true;
let ArrayLength = countries.length




nextCountry.addEventListener("click", nextBtn);

function nextBtn() {
    
    
    index++;
    // if (index == 3) {
        //     document.getElementById("nextBtn").disabled = true;
        //     // document.addEventListener("click").disabled = true;
        // } else if (index < 3) {
    //     document.getElementById("nextBtn").disabled = false;
    // }
    let countryNames = document.getElementById("li1");
    countryNames.innerText = "Country: " + countries[index].country;

    let cityNames = document.getElementById("li2");
    cityNames.innerText = "Capital: " + countries[index].city;

    let populations = document.getElementById("li3");
    populations.innerText = "Population: " + countries[index].population;

    let democracys = document.getElementById("li4");
    democracys.innerText = "Democracy: " + countries[index].democracy;

    let languages = document.getElementById("li5");
    languages.innerText = "Language: " + countries[index].language;

    let religions = document.getElementById("li6");
    religions.innerText = "Religion: " + countries[index].religion;

    let continents = document.getElementById("li7");
    continents.innerText = "Continent: " + countries[index].continent;
    
    let flags = document.getElementById("flagga")
    flags.src = countries[index].flag;


    //console.log(index)
    
    console.log(index)
    console.log(countries.length)
    if ((index + 1)  == countries.length) {
        document.getElementById("nextBtn").disabled = true;
    }
    else if (index < countries.length) {
        document.getElementById("nextBtn").disabled = false;
    } if (index == -1) {
        document.getElementById("prevBtn").disabled = true;
    }
    else if (index > -1) {
        document.getElementById("prevBtn").disabled = false;
    }
}

prevCountry.addEventListener("click", prevBtn);


function prevBtn() {

    // if (index == -1) {
    //     document.getElementById("prevBtn").disabled = true;
    // } else if (index > -1) {
    //     document.getElementById("prevBtn").disabled = false;
    // }

    index--;
    let countryNames = document.getElementById("li1");
    countryNames.innerText = "Country: " + countries[index].country;

    let cityNames = document.getElementById("li2");
    cityNames.innerText = "Capital: " + countries[index].city;

    let populations = document.getElementById("li3");
    populations.innerText = "Population: " + countries[index].population;

    let democracys = document.getElementById("li4");
    democracys.innerText = "Democracy: " + countries[index].democracy;

    let languages = document.getElementById("li5");
    languages.innerText = "Language: " + countries[index].language;

    let religions = document.getElementById("li6");
    religions.innerText = "Religion: " + countries[index].religion;

    let continents = document.getElementById("li7");
    continents.innerText = "Continent: " + countries[index].continent;

    let flags = document.getElementById("flagga")
    flags.src = countries[index].flag;


    if (index == 0) {
        document.getElementById("prevBtn").disabled = true;
    }
    else if (index > 0) {
        document.getElementById("prevBtn").disabled = false;
    } if (index == countries.length) {
        document.getElementById("nextBtn").disabled = true;
    }
    else if (index < countries.length) {
        document.getElementById("nextBtn").disabled = false;
    }
    console.log(index)

}


let NewCountry = document.getElementById("NewCountry");
let NewCapital = document.getElementById("NewCapital");
let NewPopulation = document.getElementById("NewPopulation");
let NewDemocracy = document.getElementById("NewDemocracy");
let NewLanguage = document.getElementById("NewLanguage");
let NewReligion = document.getElementById("NewReligion");
let NewContinent = document.getElementById("NewContinent");
let NewFlag = document.getElementById("Maxnejdan.png")
let NewButton = document.getElementById("NewBtn");
let ButtonPress = 0;

NewButton.onclick = function () {   //Klickar på knapp så lägger den till alla värden i countries arrayen
    ButtonPress++;
    const AddCountry = {
        country: NewCountry.value,
        city: NewCapital.value,
        population: NewPopulation.value,
        democracy: NewDemocracy.value,
        language: NewLanguage.value,
        religion: NewReligion.value,
        continent: NewContinent.value,
        flag: "Maxnejdan.png",
    }
    countries.push(AddCountry)
    ArrayLength++;

    NewCountry.value = '';      //tömmer alla värden
    NewCapital.value = '';
    NewPopulation.value = '';
    NewDemocracy.value = '';
    NewLanguage.value = '';
    NewReligion.value = '';
    NewContinent.value = '';
}





































//let html = ``;

// vilketCountry.forEach(function (info) {
//     //skapa html templaten
//     html += `<li>${info}</li>`;
// })

// ul.innerHTML = html;
    // vilketCountry.forEach(function (country, city, population) {
    //     //skapa html templaten
    //     html += `<li>${country}</li>`, `<li>${city}</li>`, `<li>${population}</li>`;
    // });
