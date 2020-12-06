<template>
    <div></div>
</template>
<script>

import axios from 'axios';

export default {
    name: SectionApi,
    data(){
        return{
            books: null
        }
    },
    mounted(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyA5eVpCATIM5V94Mozw7AzR0AC2teYbF68').then(response => (this.books = response.data.items))
        console.log(this.books)
    }
}
</script>
<style scoped>

</style>