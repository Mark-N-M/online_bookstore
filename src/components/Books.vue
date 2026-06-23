<script setup>


import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

// wishlist
import { useWishlistStore } from '../stores/wishlist'                       //sourcing the variable useWishlistStore allowing the books component to use the variable from the store
const wishlistStore = useWishlistStore()                                    //<--sourced variable from wishlist store

function addToWishlist(book){
    wishlistStore.addToWishlist(book)
}

const router = useRouter()
const booksStore = useBooksStore()
const books= booksStore.books

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(book){
    book.quantity = quantity.value
        cartStore.updateCart(book)
}

</script>


<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 mt-12 text-center">
                Browse Books
                </div>
            </v-col>
        </v-row> 
        <v-row>
            <v-col v-for="(book, index) in books" :key="index">
                <v-card class="h-100 d-flex flex-column" width="250">
                    <v-img :src="book.image" height="200px" class="mt-4" ></v-img>
                    <v-card-title class="">{{ book.name }}</v-card-title>                       <!--HERE WE ARE DOING DATA BINDING BY EMBEDDING DATA WITHIN DOUBLE CURLY BRACES AND AFTER THE COMPUTER READS THE DATA IT SWAPS THE DATA WITH A CERTAIN VALUE IN REFERAL TO THE DOUBLE CURLY BRACES OR RATHER WHAT SHOULD BE THERE-->
                    <v-card-subtitle>{{ book.price }}</v-card-subtitle>                                                                         
                    <v-card-text>{{ book.description }}</v-card-text>  <!--description tab-->
                    <v-card-text>By:{{ book.author }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="elevated" @click="buy(book)">Add to Cart</v-btn>
                          <v-btn color="primary" variant="elevated" @click="view(book)">View Book</v-btn>
                          <v-btn @click="addToWishlist(book)" color="secondary">Add to Wishlist</v-btn>                         <!--On click it adds an object called book which contains key and value-->
                    </v-card-actions>
                </v-card>
                        
            </v-col>
            
        </v-row>
    </v-container>
    
</template>