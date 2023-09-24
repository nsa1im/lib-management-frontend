<template>
    <div>
        <label for="title">Book Title: </label>
        <input type="text" v-model="title" required/>

        <label for="author">Author: </label>
        <input type="text" v-model="author" required/>
        
        <Button type="submit" label="SEARCH BOOK" v-on:click="getBook"/>
        <label id="message">
            {{ msg }}
        </label>
      <h3>
        List of Books
      </h3>
      <table>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book[2]">
            <td v-for="attr in book">
                {{ attr }}
            </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
  
  <script setup>
  import Button from '../components/Button.vue'
  import axios from 'axios';
  </script>

  <script>
  export default {
    name: 'SearchBook',
    data() {
      return {
        books: '',
        title: '',
        author: '',
        msg: ''
      };
    },
    methods: {
      getBooks() {
        const path = 'https://lib-management-backend.onrender.com/allbooks';
        axios.get(path)
          .then((res) => {
            if(res.data.length!=0){
              this.books = res.data;
            }
          })
          .catch((error) => {
  
            console.error(error);
          });
      },
      getBook() {
        const path = `https://lib-management-backend.onrender.com/getbook?author=${this.author}&title=${this.title}`;
        axios.get(path)
          .then((res) => {
            if(res.data['message']==='No such book exists!'){
              this.msg = res.data['message'];
              this.getBooks();
            }
            else{
                this.books = res.data[0];
            }
          })
          .catch((error) => {
  
            console.error(error);
          });
      },

    },
    created() {
      this.getBooks();
    },
  };
  </script>

  <style scoped>
@import url(../assets/views.css);
</style>