/*****************
    DEFINIZIONI
******************/
const enpointPictures = "https://lanciweb.github.io/demo/api/pictures/";                /* Endpoint API */
const containerSezioneCard = document.getElementById("container-sezione-card");         /* Recupero contenitore sezione card dal DOM */
let items = "";                                                                          /* Stringa che conterrà gli elementi da aggiungere al DOM */


/********************
    ELABORAZIONE
********************/

// Chiamata Ajax con Axios
axios.get(enpointPictures)

    /* Codice da eseguire in caso di successo */
    .then( (rispostaApiSuccess) => {
        
        /********************
            CREAZIONE CARD
        ********************/

        // Recupero array di oggetti da API
        const datiCards = rispostaApiSuccess.data

        // Ciclo per creare le cards
        datiCards.forEach( (datoCard) => {
            generaMarkupCard(datoCard);
        });

        // Inserisco card nel DOM
        containerSezioneCard.innerHTML = items;
        
        /**************
            OVERLAY
        ***************/

        /* Recupero tutte le card dal DOM */
        const cardCreate = document.querySelectorAll(".card");

        /* Chiamata funzione per gestire l'overlay*/
        gestioneOverlay(cardCreate);

    })

    /* Codice da eseguire in caso di errore */
    .catch((rispostaApiError) => {
        console.error(rispostaApiError);
    })



/***************
    FUNZIONI
****************/

// Funzione che riceve i dati di una card e li concatena in una stringa "item"
function generaMarkupCard(datoCard) {

    // Inverto stringa data per inserirla nell'attributo datetime di time
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
function gestioneOverlay(cardCreate) {

    /* Recupero elementi dal DOM per gestire overlay */
    const overlaySfondo = document.getElementById("overlay-sfondo");
    const containerOverlayContent = document.getElementById("container-overlay-content");

    /*******************
        OVERLAY CARD
    *******************/

    /* Ciclo per associare evento (click) ad ogni card */
    cardCreate.forEach((cardCreata) => {

        // Associo evento (click) alla card corrente */
        cardCreata.addEventListener("click", () => {
        
            /* Rimuovo classe display-none per gestire l' overlay */
            overlaySfondo.classList.remove("display-none");
            containerOverlayContent.classList.remove("display-none");

            /* Cambio immagine in base alla foto selezionata */
            cambiaImmagineCardCliccata(cardCreata);
        })
    });


    /*********************
        OVERLAY BOTTONE
    **********************/

    /* Recupero bottone dal DOM per gestire overlay */
    const btn = document.getElementById("bottone");
    btn.addEventListener("click", () => { 

        /* Aggiungo classe display-none per gestire l'overlay */
        overlaySfondo.classList.add("display-none");
        containerOverlayContent.classList.add("display-none");
    }) 
}

/* Funzione che recupera titolo dalla card corrente e sostituisce l'immagine */
function cambiaImmagineCardCliccata(cardCreata) {

    // Recupero testo (titolo card) dell'h2 dalla card corrente 
    const titoloCard = cardCreata.querySelector("h2").textContent.trim();

    /* Recupero l'elemento <img> dell'overlay dal DOM */
    const imgOverlay = document.querySelector(".img-overlay");

    /* Confronto il titolo e sostituisco l'immagine */
    if (titoloCard === "Skate Park") {
        imgOverlay.src = "https://marcolanci.it/boolean/assets/pictures/1.png";
        imgOverlay.alt = titoloCard;
    }

     else if (titoloCard === "Passeggiata") {
        imgOverlay.src = "https://marcolanci.it/boolean/assets/pictures/2.png";
        imgOverlay.alt = titoloCard;
    }

    else if (titoloCard === "Alpi") {
        imgOverlay.src = "https://marcolanci.it/boolean/assets/pictures/3.png";
        imgOverlay.alt = titoloCard;
    }

     else if (titoloCard === "Sagra") {
        imgOverlay.src = "https://marcolanci.it/boolean/assets/pictures/4.png";
        imgOverlay.alt = titoloCard;
    }

    else if (titoloCard === "Watergun") {
        imgOverlay.src = "https://marcolanci.it/boolean/assets/pictures/5.png";
        imgOverlay.alt = titoloCard;
    }

    else if (titoloCard === "Riviera") {
        imgOverlay.src = "https://marcolanci.it/boolean/assets/pictures/6.png";
        imgOverlay.alt = titoloCard;
    }
}