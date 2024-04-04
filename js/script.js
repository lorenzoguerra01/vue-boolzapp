import {isRanDOMImage} from './utility.js';
import {contacts} from './data.js';

const {createApp} = Vue;
createApp({
    data(){
        return{
            contacts,
            activeContactId : 1
        }
    },
    methods :{
        isRanDOMImage,
        activeContact(id) {
            this.activeContactId = id;
            console.log(this.activeContactId);
        }
    },
    mounted() {
    }
}).mount('#app');
