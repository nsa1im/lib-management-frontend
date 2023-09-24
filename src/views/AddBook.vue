<template>
    <div>
            <label for="title">Book Title: </label>
            <input type="text" v-model="title" required/>

            <label for="author">Author: </label>
            <input type="text" v-model="author" required/>
            
            <label for="isbn">ISBN: </label>
            <input type="number" v-model="isbn" required/>

            <label for="quantity">Quantity: </label>
            <input type="number" v-model="quantity" required/>

            <Button type="submit" label="ADD BOOK" v-on:click="addBook"/>
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
    name: 'AddBook',
    data() {
      return {
        books: '',
        title: '',
        author: '',
        isbn: '',
        quantity: '',
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
      addBook() {
        const path = 'https://lib-management-backend.onrender.com/addbook';
        axios.post(path, {
            "title": this.title,
            "author": this.author,
            "isbn": this.isbn,
            "quantity": this.quantity
        })
          .then((res) => {
            if(res.data.length!=0){
              this.msg = res.data['message'];
              this.getBooks();
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