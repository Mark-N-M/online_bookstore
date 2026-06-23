<script setup>
const isAuthenticated = localStorage.getItem('isAuthenticated')
</script>

<template>
  <v-app-bar color= "primary">
  
    <v-app-bar-title>
      <router-link to="/">
        <v-img src="/logo.png" width="13%" height="11%"></v-img>
      </router-link>
    </v-app-bar-title>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/books">Books</v-btn>
    <v-btn to="/cart">Cart</v-btn>
    <v-btn to="/library">Library</v-btn>
    <v-btn to="/wish-list">WishList</v-btn>
    <v-btn to="/admin">Admin</v-btn>
    <v-btn to="/profile" v-if="isAuthenticated">Profile</v-btn>
    <v-btn to="/login" v-else="">Login</v-btn>                      <!--in the user has not signed up yet its going to bring them to the login page-->
  </v-app-bar>
   
</template>