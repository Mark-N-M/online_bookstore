import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {                                 //HERE WE CREATED AN OBJECT IN ORDER TO CALL FROM ANOTHER FUNCTION IN ADMIN AS WE HAVE THE TAB WINDOWS THERE
          0:{                                           //NB:The short answer: book_id isn't a variable you declared anywhere. It's a property name — a key inside the order objects that live in your orders store's data.
            id:1,
            customer_id:1,
            book_id:2,
            quantity:1,
            total_paid: 2035,
            status:"processing"
          },
           1:{
            id:2,
            customer_id:2,
            book_id:4,
            quantity:1,
            total_paid: 1600,
            status:"fulfilled"
          },
           2:{
            id:3,
            customer_id:3,
            book_id:5,
            quantity:2,
            total_paid: 3100,
            status:"processing"
          },
           3:{
            id:4,
            customer_id:4,
            book_id:6,
            quantity:1,
            total_paid: 1675,
            status:"fulfilled"
          },
           4:{
            id:5,
            customer_id:5,
            book_id:7,
            quantity:1,
            total_paid: 1775,
            status:"fulfilled"
          },
           5:{
            id:6,
            customer_id:6,
            book_id:8,
            quantity:1,
            total_paid: 1750,
            status:"processing"
          },
        }

        return{
            orders
        }
   },
   actions:{
     
           
       },
   
   
})