<template>
    <div>
            <label for="title">Book Title: </label>
            <input type="text" v-model="title" required/>

            <label for="isbn">ISBN: </label>
            <input type="number" v-model="isbn" required/>

            <label for="author">Author: </label>
            <input type="text" v-model="author" required/>
            
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
  import PopulateTable from '../components/PopulateTable.vue'
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
* {
  box-sizing: border-box;
}

html.open, body.open {
  height: 100%;
  overflow: hidden;
}

html {
  padding: 40px;
  font-size: 62.5%;
}

body {
  padding: 20px;
  background-color: #5BB9B8;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
}

h3 {
  text-align: center;
  font-weight: 300;
  clear: both;
}
  label,input{
    float:left;
    clear: both;
  }
  input{
    height: 5vh;
    border-radius: 8px;
    border: 2px solid #5468ff;
    padding: 1em;
    width: 100%;
  }
  input:hover {
    border: 2px solid grey;
  }
  #message{
    margin: 1em;
    margin-top: 2em;
    color: #000000;
    font-weight: bolder;
  }
</style>