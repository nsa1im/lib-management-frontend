<template>
    <div>
            <label for="member_id">Member ID: </label>
            <input type="number" v-model="member_id" required/>

            <label for="first_name">First Name: </label>
            <input type="text" v-model="first_name" required/>
            
            <label for="last_name">Last Name: </label>
            <input type="text" v-model="last_name" required/>

            <Button type="submit" label="ADD MEMBER" v-on:click="addMember"/>
            <label id="message">
                {{ msg }}
            </label>
      <h3>
        List of Members
      </h3>
      <table>
      <thead>
        <tr>
          <th>Member ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member[0]">
            <td v-for="attr in member">
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
    name: 'AddMember',
    data() {
      return {
        members: '',
        member_id: '',
        first_name: '',
        last_name: '',
        msg: ''
      };
    },
    methods: {
      getMembers() {
        const path = 'https://lib-management-backend.onrender.com/allmembers';
        axios.get(path)
          .then((res) => {
            if(res.data.length!=0){
              this.members = res.data;
            }
          })
          .catch((error) => {
  
            console.error(error);
          });
      },
      addMember() {
        const path = 'https://lib-management-backend.onrender.com/addmember';
        axios.post(path, {
            "member_id": this.member_id,
            "first_name": this.first_name,
            "last_name": this.last_name
        })
          .then((res) => {
            if(res.data.length!=0){
              this.msg = res.data['message'];
              this.getMembers();
            }
          })
          .catch((error) => {
  
            console.error(error);
          });
      },

    },
    created() {
      this.getMembers();
    },
  };
  </script>

  <style scoped>
@import url(../assets/views.css);
</style>