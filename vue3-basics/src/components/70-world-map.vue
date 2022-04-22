<template>
  <LMap
    style="height: 300px"
    :zoom="4"
    :center="mapCenter"
    @click="onMapClicked"
  >
    <LTileLayer :url="mapUrl" :attribution="mapAttribution"></LTileLayer>
  </LMap>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

const mapCenter = ref([0.0, 118.0]);
const mapUrl = ref("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
const mapAttribution = ref(
  "&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a>"
);
const emit =
  defineEmits<{ (e: "map-clicked", geopos: {lat: number, lng: number}):void }>();
function onMapClicked(e: any): void {
  // Emit an event to notify the parent element
  if (e.latlng) {
    while (e.latlng.lng > 360) e.latlng.lng -= 360; 
    while (e.latlng.lng < 0) e.latlng.lng += 360; 
    emit("map-clicked", e.latlng);
  }
}
</script>