<script setup>
import {  RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';                               //NB THIS IS THE PARENT COMPONENT AND WITHIN IT CHILDREN COMPONENTS ARE FITTED E.G NAVBAR, SIGNUP,BOOKS etc etc 
</script>

<template>
  <v-app>
    <NavBar/>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>


</template>




