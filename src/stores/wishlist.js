import { defineStore } from 'pinia'

//<this a state being defined allowing and individual to source data from this specific store all over all of the components
export const useWishlistStore = defineStore('wishlist', {
  state: () => {
    const wishlist = []
    return { wishlist }
  },
//<this a state being defined allowing and individual to source data from this specific store all over all of the components


  actions: {
    addToWishlist(payload) {
      const alreadyAdded = this.wishlist.some(item => item.id === payload.id) 
      if (!alreadyAdded) {
        this.wishlist.push(payload)  //payload refers to the item that we want to add to wishlist in our case books from the Books.vue component
      }
    },
    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter(item => item.id !== id)
    }
  },
})