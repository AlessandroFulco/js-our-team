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
const arrayCard = [];
// creare l'oggetto che contiene tutte le caratteristiche del teamMember
let teamMember = {
    "nome": "Angela Caroll",
    "ruolo": "Chief Editor",
    "foto": "../img/angela-carol-chief-editor.png" 
};
arrayCard.push(teamMember);
// inserire l'oggetto creato all'interno dell'array

// creare tutti gli elementi per poi appendere alla fine la card


console.log("oggetto creato", teamMember);
console.log("array aggiornato", arrayCard);