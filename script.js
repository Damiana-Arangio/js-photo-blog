/*****************
    DEFINIZIONI
******************/
const enpointPictures = "https://lanciweb.github.io/demo/api/pictures/";    /* Endpoint API */
const containerSezioneCard = document.getElementById("container-sezione-card");                /* Recupero elementi dal DOM */
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

        // Aggiungo elementi al DOM
        containerSezioneCard.innerHTML = items;                  
    })

    /* Codice da eseguire in caso di errore */
    .catch((rispostaApiError) => {
        console.error(rispostaApiError);
    })

/*****************
    FUNZIONI
******************/
function creaCard(datoCard) {
    // Inverto stringa data per inserirla nell'attributo date time
    const dataReverse = datoCard.date.split("-").reverse().join("-");
    
    // Aggiungo elementi card alla variabile items
    items += ` 
            <article class="card">
            <img src="img/pin.svg" alt="immagine pin" class="pin-card">
            <figure class="container-foto">
                <img src="${datoCard.url}" alt=${datoCard.title} class="foto">
            </figure>
            <h2 class="padding-left-10"> ${datoCard.title} </h2>
            <time datetime=${dataReverse} class="data padding-left-10">${datoCard.date}</time>

        </article>`
    ;
}