<script setup>

</script>

<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'

const booksStore = useBooksStore()
const books= booksStore.books

const tab = ref(null)

</script>

<template>
    <v-container class="text-center mt-12" bg="secondary">
        <v-card>
            <v-tabs v-model="tab" align-tabs="center" color="primary" >
                <v-tab :value="1">Books</v-tab>
                <v-tab :value="2">Users</v-tab>                                             <!--allowing someone to move btwn users eg tab one tab two etc etc-->
                <v-tab :value="3">Orders</v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
                <!-- Books -->
                <v-tabs-window-item :value="1">
                    <div v-if="books == null||books==undefined||Object.keys(books).length == 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12" >
                                <div class="text-h6">No books found</div>
                            </v-col>
                            <v-col cols="12" md="6" sm="12" >
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddUserDialog = true"></v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-else>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="12" sm="12" align="right">
                                    <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddUserDialog = true"></v-btn>
                                </v-col>
                            </v-row>
                        <v-row>
                        <v-col>
                            <v-table class="border">
                                <thead>
                                    <tr>
                                        <th class="text-left"> Name </th>
                                        <th class="text-left"> Price </th>
                                        <th class="text-left"> Author </th>
                                        <th class="text-left"> Genre </th>
                                        <th class="text-center" colspan="3"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in books" :key="item.id" >
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.price }}</td>
                                        <td>{{ item.author }}</td>
                                        <td>{{ item.genre }}</td>
                                        <td> <v-btn color="warning" size="small"><v-icon icon="mdi-account-check" ></v-icon> View</v-btn> </td>
                                        <td> <v-btn color="primary" size="small" @click="editBook(item)"><v-icon icon="mdi-pencil" ></v-icon> Edit User</v-btn> </td>
                                        <td> <v-btn color="error" size="small"><v-icon icon="mdi-account-cancel" ></v-icon> Delete</v-btn> </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-container>
</template>
