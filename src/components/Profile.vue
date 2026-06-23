<script setup>
const user =JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <h1>{{ user.lastname }}</h1>
</template> 