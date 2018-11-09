var Noms = [
    "Michel Varuk",
    "Jim Carrey",
    "Albert Einstein",
    "Vivaldi",
    "Emma Watson",
    "Renaud",
    "Eminem",
    "Paul Kudd",
    "Jacques",
    "Bernadette",
    "Johnny Depp",
    "The Rock",
    "Léa",
    "Nina",
    "Julien Lepers",
    "Hugh Jackmann",
    "Jacquie",
    "Michel",
    "Gotaga",
    "Philipe",
    "HP Lovecraft",
    "Bill gates"
];

var Objets = [
    "avec son Ordinateur",
    "avec son Telephone Portable",
    "avec sa Montre",
    "avec son Dé à coudre",
    "avec son Décapsuleur",
    "avec son Ballon de foot",
    "avec son Clavier",
    "avec sa Pièce",
    "avec son Marteaux",
    "avec ses Lunettes de soleil",
    "avec son Sabre",
    "avec sa Cuillère",
    "avec sa Fourchette",
    "avec sa Tasse",
    "avec sa Manette",
    "avec son Avion",
    "avec son Vélo"
];

var Temperature = [
    "+10°",
    "+30°",
    "+37,2",
    "-5°",
    "-50°",
    "+5°",
    "+22°",
    "+69°",
    "+18°",
    "+37°",
    "+25°",
    "+40°",
    "+28°",
    "+24°",
    "+70°"
];

var Lieux = [
    "à Floyon",
    "à Wignehies",
    "à Barcelona",
    "à Paris",
    "à Tokyo",
    "à Reykjairk",
    "à Bondy",
    "à Rio de Janiero",
    "à Mons",
    "à Trélon",
    "à Big Ben",
    "à Mont Fuji",
    "à Palais de l'élysée",
    "à Mairie de Paris",
    "à Macdo",
    "à KFC",
    "à Burger King",
    "à Montcuq",
    "à Chute de Niagara",
    "à Hide Park"
];

var Verbe = [
    "Passionner",
    "Developper",
    "Jouer",
    "Coder",
    "Copier",
    "Coordonner",
    "Nager",
    "Monter",
    "Aimer",
    "Soulever",
    "Evaluer",
    "Voter",
    "Arnaquer",
    "Manger",
    "S'envoyer",
    "Enfourner",
    "Accomplir",
    "Communiquer"
];



// Genérée aléatoirement une entrée des tableaux


var aleatoireNoms =
    Noms[Math.floor(Math.random()* Noms.length)];

var aleatoireObjets =
    Objets[Math.floor(Math.random()* Objets.length)];

var aleatoireTemperature =
    Temperature[Math.floor(Math.random()* Temperature.length)];

var aleatoireLieux =
    Lieux[Math.floor(Math.random()* Lieux.length)];

var aleatoireVerbe =
    Verbe[Math.floor(Math.random()* Verbe.length)];


//Demandez à L'utilisateur son prénom



var Div = document.createElement('div');

document.getElementById('Entrez').appendChild(Div);

Div.innerHTML = "Entrez votre prénom :";

Div.style.color = "blue";

Div.style.fontSize = "30px";

Div.style.fontFamily = "Roboto";

Div.style.textAlign = 'center';

Div.style.textDecoration = 'underline black';

var Input = document.createElement('input');

document.body.appendChild(Input);

Input.style.height= "44px";

Input.style.marginLeft = "40%";

Input.style.marginTop = "5%";

//Récuperer le nom de l'utilisateur

function Inpuut () {

    var Prenom = Input.value;

    var cinquantepourcent = Math.random();

    if (cinquantepourcent < 0.5) {
        aleatoireNoms = Prenom;
    }

}


// Bouton pour Générer l'histoire

var Bouton = document.createElement('button');

document.body.appendChild(Bouton);

Bouton.innerHTML = "Découvre ton histoire";

Bouton.style.backgroundColor = 'blue';

Bouton.style.color = 'white';

Bouton.style.height = "50px";

Bouton.style.marginLeft = "5%";

Bouton.style.marginTop = "5%";

// Afficher l'histoire générée

var Histoire = document.createElement('div');

document.body.appendChild(Histoire);

Histoire.style.color = 'blue';

Histoire.style.textAlign = 'center';

Histoire.style.marginTop = "5%";

Inpuut ();


Bouton.addEventListener("click", function () {

    // Genérée aléatoirement une entrée des tableaux

     aleatoireNoms =
        Noms[Math.floor(Math.random()* Noms.length)];

     aleatoireObjets =
        Objets[Math.floor(Math.random()* Objets.length)];

    aleatoireTemperature =
        Temperature[Math.floor(Math.random()* Temperature.length)];

     aleatoireLieux =
        Lieux[Math.floor(Math.random()* Lieux.length)];

    aleatoireVerbe =
        Verbe[Math.floor(Math.random()* Verbe.length)];


    Inpuut ();

    Histoire.innerHTML = aleatoireNoms + " " + "a/est" + " " +aleatoireVerbe + " " + 'Il faisait' + " " + aleatoireTemperature + " " + "Il/Elle était à" + " " + aleatoireLieux + " " + "en utilisant un/une" + " " + aleatoireObjets;


});



