<script setup>
const user =JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <v-container>
        <v-card>
            <v-avatar icon="$vuetify" image="loginMsymbol.jpg"></v-avatar>
            <h1 align="center" mr="10">About Me</h1>
            <p>Manage your personal info and control how you connect with the community across our bookstore services. Update your reading preferences, track your orders, and choose what others see on your public profile.</p>
            
        </v-card>

    </v-container>
</template> 