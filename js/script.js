/*
Viene fornito un layout di base in cui è presente una card di 
esempio inserita staticamente nell’html.
Questa card serve solo come timbro del markup necessario per 
ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
Aggiungere un file js in cui definire un array di oggetti che 
rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa 
card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento 
la card di esempio presente nell’html, stampare dinamicamente una 
card per ogni membro del team.
*/


//selezionare il container dove appendere ogni team-card
const contenitore = document.querySelector('.team-container');


// dichiarare l'array che conterra tutte le card
const arrayCard = [
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphics Designer",
        "foto": "img/barbara-ramos-graphics-designer.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg"
    },
];






// creare un ciclo che per ogni posizione dell'array 
for (let i = 0; i < arrayCard.length; i++){
    let oggettoIesimo = arrayCard[i];

    // 1. crea la team-card(usando una funzione)
    const divElTeamCard = document.createElement("div");
    divElTeamCard.classList.add('team-card');

    // 2. crea la card-image(usando una funzione)
    const divElCardImage = document.createElement("div");
    divElCardImage.classList.add('card-image');

    // 3. crea la card-text(usando una funzione)
    const divElCardText = document.createElement("div");
    divElCardText.classList.add('card-text');

    // 4. crea il tag img
    const imgEl = document.createElement("img");

    // 5. crea il tag per il titolo
    const titleEl = document.createElement("h3");

    // 6. crea il tag per il ruolo
    const roleEl = document.createElement("p");
    
    // sfogliare ogni oggetto dell'array
    // e per ogni oggetto eseguire le seguenti istruzioni:
    for (let chiave in oggettoIesimo){
        // 1. assegnare l'immagine al tag img + alt
        imgEl.src = oggettoIesimo["foto"];

        console.log(oggettoIesimo["foto"]);

        // 2. assegnare il nome al tag per il titolo


        // 3. assegnare il ruolo al tag per il ruolo
        

    }

    
    // dopo appendere il tutto nel div con classe team-container selezionato come contenitore
    
    
}





// creare tutti gli elementi per poi appendere alla fine la card

// // creare elemento div con classe team-card
// const divElTeamCard = document.createElement("div");
// divElTeamCard.className = "team-card";
// console.log(divElTeamCard);

// // creare elemento con classe card-image
// const divElCardImage = document.createElement("div");
// divElCardImage.className = "card-image";
// console.log(divElCardImage);


// // creare elemento div con classe card-text
// const divElText = document.createElement("div");
// divElText.className = "card-text";




// // creare elemento img 
// const cardImg = document.createElement("img");
// cardImg.src = arrayCard[0].foto
// cardImg.alt = arrayCard[0].nome
// console.log(cardImg);

// // creare elemento che contiene il nome ed un elemento che contiene il Ruolo
// const elNome = document.createElement('h3');
// elNome.append(arrayCard[0].nome);
// console.log(elNome);
// const elRole = document.createElement('p');
// elRole.append(arrayCard[0].ruolo);
// console.log(elRole);


// contenitore.append(divElTeamCard);
// divElTeamCard.append(divElCardImage);
// divElCardImage.append(cardImg);
// divElText.append(elNome);
// divElText.append(elRole);
// divElTeamCard.append(divElText);


// console.log(divElTeamCard);
