/*****************
    DEFINIZIONI
******************/
const enpointPictures = "https://lanciweb.github.io/demo/api/pictures/";                /* Endpoint API */
const containerSezioneCard = document.getElementById("container-sezione-card");         /* Recupero contenitore sezione card dal DOM */
let items = "";                                                                          /* Stringa che conterrà gli elementi da aggiungere al DOM */


/*******************
    CREAZIONE CARD
*******************/

// Chiamata Ajax con Axios
axios.get(enpointPictures)

    /* Codice da eseguire in caso di successo */
    .then( (rispostaApiSuccess) => {
        
        // Recupero array di oggetti da API
        const datiCards = rispostaApiSuccess.data

        // Ciclo per creare le cards
        datiCards.forEach( (datoCard) => {
            creaCard(datoCard);
        });

        // Aggiungo card al DOM
        containerSezioneCard.innerHTML = items;
        
        /**************
            OVERLAY
        ***************/
        /* Recupero card dal DOM */
        const cardCreate = document.querySelectorAll(".card");  
        
        /* Chiamata funzione per associare l'evento alle card */
        associaEventoCard(cardCreate);

    })

    /* Codice da eseguire in caso di errore */
    .catch((rispostaApiError) => {
        console.error(rispostaApiError);
    })



/*****************
    FUNZIONI
******************/

// Funzione che riceve i dati di una card e li concatena in una stringa "item"
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

// Funzione che gestisce l'overlay
function associaEventoCard(cardCreate) {

    /* Ciclo le card per associare un evento (click) */
    cardCreate.forEach((cardCreata) => {

        // Associo evento (click) alla card corrente */
        cardCreata.addEventListener("click", () => {
        
            /* Recupero elementi dal DOM per gestire overlay */
            const overlaySfondo = document.getElementById("overlay-sfondo");
            const containerOverlayContent = document.getElementById("container-overlay-content");

            /* Rimuovo classe display-none per gestire l' overlay */
            overlaySfondo.classList.remove("display-none");
            containerOverlayContent.classList.remove("display-none");
        })
    });
}