<template>
    <div>
            <label for="member_id">Member ID: </label>
            <input type="number" v-model="member_id" required/>
            
            <label for="isbn">ISBN: </label>
            <input type="number" v-model="isbn" required/>

            <label for="date">Date: </label>
            <input type="date" v-model="date" required/>

            <Button type="submit" label="ISSUE BOOK" v-on:click="addIssue"/>
            <label id="message">
                {{ msg }}
            </label>
      <h3>
        List of Issued Books
      </h3>
      <table>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Member ID</th>
          <th>Date</th>
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
    name: 'IssueBook',
    data() {
      return {
        books: '',
        member_id: '',
        isbn: '',
        date: '',
        msg: ''
      };
    },
    methods: {
      getIssues() {
        const path = 'https://lib-management-backend.onrender.com/allissues';
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
      addIssue() {
        const path = 'https://lib-management-backend.onrender.com/issue';
        axios.post(path, {
            "member_id": this.member_id,
            "isbn": this.isbn,
            "date": this.date
        })
          .then((res) => {
            if(res.data.length!=0){
              this.msg = res.data['message'];
              this.getIssues();
            }
          })
          .catch((error) => {
  
            console.error(error);
          });
      },

    },
    created() {
      this.getIssues();
    },
  };
  </script>

  <style scoped>
@import url(../assets/views.css);
</style>