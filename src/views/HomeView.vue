<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- search / results -->
    <div class="flex justify-center relative bg-hero-pattern px-4 pt-8 pb-32">
      <!-- search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
                  type="text"
                  placeholder="Search for any IP address or leave empty to get your IP info"
          >
          <i class="cursor-pointer bg-black text-white px-4 h-12 rounded-tr-md rounded-br-md fas fa-chevron-right"></i>
        </div>
      </div>
      <!-- IP Info -->
      <IPInfo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import IPInfo from '../components/IPInfo.vue'

export default {
  name: 'HomeView',
  components: {
    IPInfo
  }
}
</script>
