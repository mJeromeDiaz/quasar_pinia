import { defineStore } from 'pinia';
import axios from 'axios'

export const authStore = defineStore('authStorage', {
  state: () => {
    return {
      user: {}
    };
  },
  actions: {
    async logUser(){
     console.info('pinia was here')
      // await axios({
      //   method: 'POST',
      //   url: 'auth/login',
      //   data: {"username":"","password":""},
      //   headers: { Accept: "application/json", "Content-Type": "application/json" }

      // })
      // .then(response => {
      //   console.log(response.data)
      // })
    }
  },

});
