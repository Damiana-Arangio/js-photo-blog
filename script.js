/*****************
    DEFINIZIONI
******************/
const enpointPictures = "https://lanciweb.github.io/demo/api/pictures/";    /* Endpoint API */
const sezioneCard = document.getElementById("sezione-card");                /* Recupero elementi dal DOM */
let items = "";                                                             /* Stringa che conterrà gli elementi da aggiungere al DOM */
/* 
    Testata API su Postman: 
    restituisce un array di 6 oggetti, 
    ognuno contenente 4 proprietà: id, title, date, url
*/

// Chiamata Ajax con Axios
axios.get(enpointPictures)

    /* Codice da eseguire in caso di successo */
    .then((rispostaApiSuccess) => {
        const datiCards = rispostaApiSuccess.data        // Recupero array di oggetti da API

        // Ciclo per creare le cards
        datiCards.forEach(datoCard => {
            creaCard(datoCard);
        });

        // Aggiungo le cards al DOM
        // sezioneCard.innerHTML = items;
    })

    /* Codice da eseguire in caso di errore */
    .catch((rispostaApiError) => {
        console.error(rispostaApiError);
    })

/*****************
    FUNZIONI
******************/
function creaCard(datoCard) {
    items += ` ${datoCard.id}`;
}