<template>
    <div>
        <label for="member_id">Member ID: </label>
        <input type="number" v-model="member_id" required/>
        
        <Button type="submit" label="DELETE MEMBER" v-on:click="deleteMember"/>
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
    name: 'DeleteMember',
    data() {
      return {
        members: '',
        member_id: '',
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
      deleteMember() {
        const path = `https://lib-management-backend.onrender.com/deletemember/${this.member_id}`;
        axios.delete(path)
          .then((res) => {
            if(res.data['message']==='No such member exists!'){
              this.msg = res.data['message'];
              this.getMembers();
            }
            else{
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