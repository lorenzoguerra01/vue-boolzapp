import { isRanDOMImage } from './utility.js';
import { contacts } from './data.js';

const { createApp } = Vue;
createApp({
    data() {
        return {
            contacts,
            activeContactId: 1,
            chatText: '',
            searchText: ''
        }
    },
    methods: {
        isRanDOMImage,
        activeContact(id) {
            this.activeContactId = id;
            console.log(this.activeContactId);
        },
        getTimeFromDate(dateString) {
            let date = new Date(dateString);
            let hours = date.getHours();
            let minutes = date.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },
        enterText() {
            let newText = {
                date: new Date().toLocaleString(),
                message: this.chatText,
                status: 'sent'
            }
            contacts[this.activeContactId - 1].messages.push(newText);
            console.log(newText);
            console.log(contacts[this.activeContactId - 1].messages);
            this.$forceUpdate();
            setTimeout(() => {
                let newText = {
                    date: new Date().toLocaleString(),
                    message: 'Ok',
                    status: 'received'
                }
                contacts[this.activeContactId - 1].messages.push(newText);
                this.$forceUpdate();
            }, 1000)
        },
    },
    computed: {
        searchedContacts() {
            let searchText = this.searchText.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchText));
        }
    },
    mounted() {
    }
}).mount('#app');
