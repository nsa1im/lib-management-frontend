<template>
    <div>
        <label for="first_name">First Name: </label>
        <input type="text" v-model="first_name" required/>
        
        <label for="last_name">Last Name: </label>
        <input type="text" v-model="last_name" required/>
        
        <Button type="submit" label="SEARCH MEMBER" v-on:click="getMember"/>
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
    name: 'SearchMember',
    data() {
      return {
        members: '',
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
      getMember() {
        const path = `https://lib-management-backend.onrender.com/getmember?first_name=${this.first_name}&last_name=${this.last_name}`;
        axios.get(path)
          .then((res) => {
            if(res.data['message']==='No such member exists!'){
              this.msg = res.data['message'];
              this.getMembers();
            }
            else{
                this.members = res.data[0];
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