import { isRanDOMImage } from './utility.js';
import { contacts } from './data.js';

const dt = luxon.DateTime;

const { createApp } = Vue;
createApp({
    data() {
        return {
            contacts,
            activeContactId: 1,
            chatText: '',
            searchText: '',
        }
    },
    methods: {
        isRanDOMImage,
        activeContact(id) {
            this.activeContactId = id;
            console.log(this.activeContactId);
        },
        getTimeFromDate(dateString) {
            const dateTime = dt.fromFormat(dateString, 'dd/MM/yyyy HH:mm:ss');
            const hours = dateTime.hour;
            const minutes = dateTime.minute.toString().padStart(2, '0');
            return `${hours}:${minutes}`;
            },
        enterText() {
            if (this.chatText !== '') {
                let newText = {
                    date: new Date().toLocaleString(),
                    message: this.chatText,
                    status: 'sent'
                };
                this.contacts[this.activeContactId - 1].messages.push(newText);
                console.log(newText);
                console.log(contacts[this.activeContactId - 1].messages);
                setTimeout(() => {
                    let newText = {
                        date: new Date().toLocaleString(),
                        message: 'Ok',
                        status: 'received'
                    }
                    this.contacts[this.activeContactId - 1].messages.push(newText);
                }, 1000);
                this.chatText = '';
            }
        },
        deleteText(i) {
            this.contacts[this.activeContactId - 1].messages.splice(i, 1);
        },
        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.message : 'Nessun messaggio';
        },
        getLastDate(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? this.getTimeFromDate(lastMessage.date) : 'N/A';
        },
        truncateMessage(message) {
            const maxLength = 35;
            return message.length > maxLength ? `${message.slice(0, maxLength)}...` : message;
        }
    

    },
    computed: {
        computedContact() {
            return this.contacts.find((contact) => contact.id === this.activeContactId)
        },
        searchedContacts() {
            let searchText = this.searchText.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchText));
        },
        getLastAccess() {
            const lastSentMessage = this.computedContact.messages
                .filter(message => message.status === 'received')
                .pop();
            return lastSentMessage ? 'Ultimo accesso oggi alle' + this.getTimeFromDate(lastSentMessage.date) : 'Ultimo accesso nascosto';
        }
    },
    mounted() {
    }
}).mount('#app');
