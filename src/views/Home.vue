<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- search / results -->
    <div class="z-20 flex justify-center relative bg-hero-pattern px-4 pt-8 pb-32">
      <!-- search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            v-model="queryIP"
            class="flex-1 py-2 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Search for any IP address or leave empty to get your IP info"
          >
          <button @click="getIPInfo" class="h-12">
            <i class="cursor-pointer bg-black text-white px-4 h-12 rounded-tr-md rounded-br-md fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <!-- IP Info -->
      <IPInfo v-if="infoIP" :infoIP="infoIP" />
    </div>
    <!-- Map -->
    <div id="mapid" class="h-full z-10"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import { onMounted, ref } from 'vue'
import IPInfo from '../components/IPInfo.vue'
import leaflet from 'leaflet'
import axios from 'axios'

export default {
  name: "Home",
  components: {
    IPInfo
  },
  setup() {
    let mapview

    const queryIP = ref("")
    const infoIP = ref(null)

    onMounted(() => {
      mapview = leaflet.map("mapid").setView([42.5145, -83.0147], 9)

      leaflet.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_MAPBOX_ACCESS_TOKEN}`,
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
        }
      ).addTo(mapview)
    })

    const getIPInfo = async () => { // 8.8.8.8 // 45.77.87.22 // 46.31.23.60
      try {
        const { data } = await axios.get(`https://ipapi.co/${queryIP.value}/json/`, { mode: 'no-cors' })
        infoIP.value = {
          address: data.ip,
          state: data.country_name,
          timezone: data.utc_offset,
          isp: data.org,
          lat: data.latitude,
          lng: data.longitude,
        }
        leaflet.marker([infoIP.value.lat, infoIP.value.lng]).addTo(mapview)
        mapview.setView([infoIP.value.lat, infoIP.value.lng], 13)
      } catch(err) {
        alert(err.message)
      }      
    }

    return {
      queryIP,
      infoIP,
      getIPInfo
    }

  },
}
</script>
