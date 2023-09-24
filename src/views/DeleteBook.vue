<template>
    <div>
        <label for="isbn">ISBN: </label>
        <input type="number" v-model="isbn" required/>
        
        <Button type="submit" label="DELETE BOOK" v-on:click="deleteBook"/>
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
    name: 'DeleteBook',
    data() {
      return {
        books: '',
        isbn: '',
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
      deleteBook() {
        const path = `https://lib-management-backend.onrender.com/deletebook/${this.isbn}`;
        axios.delete(path)
          .then((res) => {
            if(res.data['message']==='No such book exists!'){
              this.msg = res.data['message'];
              this.getBooks();
            }
            else{
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