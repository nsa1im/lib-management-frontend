<template>
    <div>
        <label for="isbn">ISBN: </label>
        <input type="number" v-model="isbn" required/>

        <label for="quantity">Quantity: </label>
        <input type="number" v-model="quantity" required/>
        
        <Button type="submit" label="UPDATE BOOK" v-on:click="updateBook"/>
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
    name: 'UpdateBook',
    data() {
      return {
        books: '',
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
      updateBook() {
        const path = 'https://lib-management-backend.onrender.com/updatebook';
        axios.put(path,{
            "isbn": this.isbn,
            "quantity": this.quantity
        })
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