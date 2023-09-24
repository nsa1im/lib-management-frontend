<script setup>
import Button from '../components/Button.vue'
</script>

<template>
  <main>
    <RouterLink to="/addbook"><Button label="ADD A BOOK" /></RouterLink>
    <RouterLink to="/searchbook"><Button label="SEARCH FOR A BOOK" /></RouterLink>
    <RouterLink to="/updatebook"><Button label="UPDATE A BOOK" /></RouterLink>
    <RouterLink to="/deletebook"><Button label="DELETE A BOOK" /></RouterLink>
    <RouterLink to="/issuebook"><Button label="ISSUE A BOOK" /></RouterLink>
    <RouterLink to="/returnbook"><Button label="RETURN A BOOK" /></RouterLink>
  </main>
</template>
