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
        isMessageReceived(index) {
            if (this.selectedUser.messages[index].status === 'received') {
                return 'message-rec'
            }
            return 'message-send'
        },
        getContactMessages(contact) {
            this.selectedUser = contact
        },
        sendNewMessage() {
            const conversation = this.selectedUser.messages

            const newMessage = {
                date: "17/03/2023 18:15:15",
                message: this.messageText,
                status: 'sent'
            }
            conversation.push(newMessage)
            this.messageText = ''

            this.automaticAnswer(conversation)
        },
        automaticAnswer(conversation) {
            setTimeout(() => {
                const newMessage = {
                    date: "17/03/2023 18:15:17",
                    message: 'Ti ho risposto dopo 3 secondi',
                    status: 'received'
                }
                conversation.push(newMessage)
            }, 3 * 1000);
        },
        filteredContacts() {
            let filteredArray = this.checkExistingUser()
            if (this.searchText !== '') {
                return filteredArray;
            } else {
                return this.contacts;
            }
        },
        checkExistingUser() {
            let filtered = this.contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(this.searchText.toLowerCase())
            });

            if (filtered.length === 0) {
                const exampleUser = {
                    name: 'Utente esempio',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:51:15',
                            message: 'Questo è un messaggio inviato di prova',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:15',
                            message: 'Questo è un messaggio ricevuto di prova',
                            status: 'received'
                        }
                    ]
                }
                filtered.push(exampleUser)
            }
            return filtered
        },
        getMessageTime(date) {
            var DateTime = luxon.DateTime;

            const formattedDate = DateTime.fromFormat(date, 'dd/mm/yyyy hh:mm:ss')

            const hours = formattedDate.hour
            const minutes = formattedDate.minute

            return `${hours}:${minutes}`
            //return formattedDate.toLocaleString(DateTime.TIME_SIMPLE) NON FUNZIONA
        },
        checkLastMessage(messages) {
            if (messages.length !== 0) {
                const lastMessage = messages[messages.length - 1]
                console.log(lastMessage)
                if (lastMessage.status === 'received') {
                    return `Ultimo messaggio ricevuto ${this.getMessageTime(lastMessage.date)}`
                }
                return `Ultimo messaggio inviato ${this.getMessageTime(lastMessage.date)}`
            }
            return 'Nessun messaggio inviato / ricevuto'
        },
        deleteMessage(index, event) {
            console.log(event.target.parentElement)
            event.target.parentElement.classList.remove('visible')
            this.selectedUser.messages.splice(index, 1);
        },
        emptyConversation(messages) {
            if (messages.length === 0) {
                return true
            }

            return false
        },
        showMessageOptions(event) {
            event.target.nextElementSibling.classList.toggle('visible')
        }
    }
}).mount('#app')