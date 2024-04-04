import {isRanDOMImage} from './utility.js';
import {contacts} from './data.js';

const {createApp} = Vue;
createApp({
    data(){
        return{
            contacts
        }
    },
    methods :{
        isRanDOMImage
    },
    mounted() {

    }
}).mount('#app');
