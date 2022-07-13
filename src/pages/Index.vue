<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>

import { defineComponent } from 'vue';
import { authStore } from '../stores/auth.js';
import { mapStores } from 'pinia';

export default defineComponent({
  mounted () {
    console.log(this.authStorageStore) // store name "authStorage" + the "Store" suffix
    this.authStorageStore.logUser()
  },
  computed: {
    ...mapStores(authStore)
  }
});
</script>
