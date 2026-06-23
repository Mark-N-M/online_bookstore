<script setup>
import {useAuth}  from '../services/auth'
import { useRouter } from "vue-router";

const router = useRouter();
const { logout } = useAuth()
const isAuthenticated = localStorage.getItem('isAuthenticated')
const user = JSON.parse(localStorage.getItem('user'))                                       //logout item

let letter = ''
if(user){
    letter = user.firstname[0]
}

function logOut(){
    logout()
    router.push('/').then(() => {
        router.go(0)
    });
}
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
    <v-btn icon="mdi-account" v-if="isAuthenticated" variant="tonal">{{letter}}
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="()=> { logOut(); }">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
            </v-btn>
    <v-btn to="/login" v-else="">Login</v-btn>                      <!--in the user has not signed up yet its going to bring them to the login page-->
  </v-app-bar>
   
</template>