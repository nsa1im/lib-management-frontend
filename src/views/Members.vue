<script setup>
import Button from '../components/Button.vue'
</script>

<template>
  <main>
    <RouterLink to="/addmember"><Button label="ADD A MEMBER" /></RouterLink>
    <RouterLink to="/searchmember"><Button label="SEARCH FOR A MEMBER" /></RouterLink>
    <RouterLink to="/updatemember"><Button label="UPDATE A MEMBER'S NAME" /></RouterLink>
    <RouterLink to="/deletemember"><Button label="DELETE A MEMBER" /></RouterLink>
  </main>
</template>
