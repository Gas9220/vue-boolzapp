const { createApp } = Vue

createApp({
    data() {
        return {
            selectedUser: null,
            messageText: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            searchText: ''
        }
    },
    methods: {
        // MESSAGGI ------------------------
        // Metodo che permette di recuperare i messaggi scambiati con un determinato contatto
        getContactMessages(contact) {
            this.selectedUser = contact
        },
        // Metodo che determina se il messaggio è stato ricevuto o inviato e assegna la classe CSS corrispondente
        isMessageReceived(index) {
            // Se il messaggio ha come status 'received' inmposto la classe corrispondente
            if (this.selectedUser.messages[index].status === 'received') {
                return 'message-rec'
            }
            // Altrimenti inposto la classe per i messaggi inviati
            return 'message-send'
        },
        // Metodo che permette di inviare messaggi
        sendNewMessage() {
            // Conservo la conversazione attuale in una constante
            const conversation = this.selectedUser.messages

            // Creo un nuovo messaggio
            const newMessage = {
                date: this.addDateToMessage(),
                message: this.messageText,
                status: 'sent'
            }
            // Aggiungo il messaggio alla conversazione
            conversation.push(newMessage)
            // Svuoto il campo di testo
            this.messageText = ''
            // Richiamo la risposta automatica
            this.automaticAnswer(conversation)
        },
        // Metodo che invia una risposta automatica dopo l'invio di un messaggio
        automaticAnswer(conversation) {
            // Creo un timeout di 3 secondi
            setTimeout(() => {
                // Creo un nuovo messaggio
                const newMessage = {
                    date: this.addDateToMessage(),
                    message: 'Ti ho risposto dopo 3 secondi',
                    status: 'received'
                }
                // Lo appendo alla conversazione passata come argomento
                conversation.push(newMessage)
            }, 3 * 1000);
        },
        // Metodo che permette di cancellare un messaggio
        deleteMessage(index, event) {
            // Rimuovo la classe visiible al parent dell'elemento che al click ha scatenato l'evento
            this.hideMessageOptions()
            // Rimuovo il messaggio
            this.selectedUser.messages.splice(index, 1);
        },
        // Metodo che permette di controllare se una conversazione è vuota
        isConversationEmpty(messages) {
            // Controllo la lunghezza dell'array che contiene i messaggi
            if (messages.length === 0) {
                // Se è vuoto ritorno true
                return true
            }
            // Se ci sono elementi ritorno false
            return false
        },
        // Metodo che aggiunge la classe 'visible' all'elemento HTML successivo che ha scatenato l'evento
        showMessageOptions(event) {
            event.target.nextElementSibling.classList.toggle('visible')
        },
        hideMessageOptions() {
            document.querySelector('.visible').classList.remove('visible');
        },
        // Contatti -------------------------
        // Medoto che permette di ricercare i contatti
        filteredContacts() {
            this.contacts.forEach((contact) => {
                // Se i caratteri inseriti nella ricerca non contengono un nome presente dei contatti
                if (!contact.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                    // Imposto la visibilità su false
                    contact.visible = false
                } else {
                    // Altrimenti la imposto su true
                    contact.visible = true
                }
            })
        },
        // Funzione che permette di recuperare l'ultimo messaggio inviato/ricevuto (se esiste) e mostrarlo nella lista
        checkLastMessage(messages) {
            // Controllo se sono stati scambiati messaggi
            if (messages.length !== 0) {
                // Recupero l'ultimo messaggio
                const lastMessage = messages[messages.length - 1]
                // se il messaggio è stato ricevuto
                if (lastMessage.status === 'received') {
                    //... Ritorno un messaggio adeguato
                    return `Messaggio ricevuto: ${lastMessage.message}`
                }
                // se il messaggio è stato inviato
                return `Messaggio inviato: ${lastMessage.message}`
            }
            // se non sono stati scambiati messaggi
            return 'Nessun messaggio inviato / ricevuto'
        },
        // Metodo che salva la data di invio/ricezione messaggio nello stesso formato presente nel database
        addDateToMessage() {
            let DateTime = luxon.DateTime
            // Creo una nuova data
            const newDate = DateTime.now().setZone('Europe/Rome')

            // Mi prendo tutti i componenti della data, assicurandomi che siano sempre a due cifre
            const year = String(newDate.year)
            const month = String(newDate.month).padStart(2, "0")
            const day = String(newDate.day).padStart(2, "0")
            const hours = String(newDate.hour).padStart(2, "0")
            const minutes = String(newDate.minute).padStart(2, "0")
            const seconds = String(newDate.second).padStart(2, "0")

            // Ritorno la stringa formattata come da database
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
        },
        // Metodo ricava l'ora e i minuti da una data
        getMessageTime(date) {
            let DateTime = luxon.DateTime;

            // Creo la data
            const formattedDate = DateTime.fromFormat(date, 'dd/mm/yyyy hh:mm:ss')
            // Mi prendo i componenti ora e minuti
            const hours = String(formattedDate.hour).padStart(2, "0")
            const minutes = String(formattedDate.minute).padStart(2, "0")

            return `${hours}:${minutes}`
        },
        lastMessageTime(messages) {
            // Controllo se sono stati scambiati messaggi
            if (messages.length !== 0) {
                // se ci sono messaggi mi ricavo l'ora e i minuti dall'ultimo
                return this.getMessageTime(messages[messages.length - 1].date)
            }
            // altrimenti ritorno questa stringa
            return '--:--'
        },
        // Metodo che calcola l'ultimo accesso di un utente
        lastAccess(contact) {
            //Se non la chat con il contatto è vuota, genero una data random e la uso come ultimo accesso
            if (contact.messages.length === 0) {
                const randomDate = this.randomDate(new Date(2020, 0, 1), new Date())
                return `Ultima volta online: ${randomDate.toLocaleString()}`
            } else {
            // Se la chat con il contatto non è vuota, mi prendo l'ultimo messaggio e uso la data come ultimo accesso
                const lastMessage = contact.messages[contact.messages.length - 1].date
                return `Ultima volta online: ${lastMessage}`
            }
        },
        // Funzione che genera una data random tra due date
        randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
    }
}).mount('#app')