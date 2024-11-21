// Stockage dans une constante APIKY qui est le code apiky  pris sur mon compte Openweather

const APIKEY = '6a549aebb49129d73a594c7b39d1cfc7';


// Appel de l'APIKEY avec fetch avec l'url recupré sur Openweather pour créer ma ville par défaut ou l'on aurra ces coordonées météorologique
//Appel a l'API openweather avec ville en parametre de fonction

let apicall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data)

            // On recupére maintenant les élements qui vont constituer nos box
            //On télécharche les icones pour accompagner les élements

            document.querySelector('#Ville').innerHTML = data.name;
            document.querySelector('#temp').innerHTML =
                "<i class='fa-solid fa-temperature-low'></i>" + data.main.temp + '°';
            document.querySelector('#Humidité').innerHTML =
                "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
            document.querySelector('#vent').innerHTML =
                "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
        })
    );
};

//Ecouteur d'évémement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apicall(ville);
});

// Appel par défaut au charchement de la page
apicall('lyon');



