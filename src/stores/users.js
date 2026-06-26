import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {                                      //HERE WE CREATED AN OBJECT IN ORDER TO CALL FROM ANOTHER FUNCTION IN ADMIN AS WE HAVE THE TAB WINDOWS THERE
          0:{
            id:1,                                            //these id's are very important when calling data as it kinda saves us the burden of rewritting the code again
            firstname:"Billy",
            lastname: "Jean",
            email: "billy@example.com",
            phone:"0726551661",
            location: "Nakuru",
            address: "123, Main Street"
          },
      

          1:{
            id:2,
            firstname:"John",
            lastname: "Micheal",
            email: "john@example.com",
            phone:"0725551661",
            location: "Kajiado",
            address: "132, Main Street"
          },
        
          2:{
            id:3,
            firstname:"Jim",
            lastname: "Dave",
            email: "jim@example.com",
            phone:"0724551661",
            location: "Thika",
            address: "321, Main Street"
          },
        
          3:{
            id:4,
            firstname:"Gabe",
            lastname: "Christopher",
            email: "gabe@example.com",
            phone:"0723551661",
            location: "Narok",
            address: "345, Main Street"
          },
      
          4:{
            id:5,
            firstname:"Erwin",
            lastname: "Zendeya",
            email: "erwin@example.com",
            phone:"0722551661",
            location: "Meru",
            address: "361, Main Street"
          },
        
          5:{
            id:6,
            firstname:"Scott",
            lastname: "Holland",
            email: "scott@example.com",
            phone:"0721551661",
            location: "Nairobi",
            address: "309, Main Street"
          }
        }

        return{
            users
        }
   },
   actions:{
  },
  persist: true,
  })
           
