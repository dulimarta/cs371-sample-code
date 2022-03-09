<template>
  <LMap style="height: 300px" :zoom="4" :center="mapCenter"
    @click="onMapClicked">
    <LTileLayer :url="mapUrl" :attribution="mapAttribution"></LTileLayer>
  </LMap>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

@Component({ components: { LMap, LTileLayer, LMarker } })
export default class WorldMap extends Vue {
  mapCenter = [0.0, 118.0];
  mapUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  mapAttribution =
    "&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a>";

  onMapClicked(e: any): void {
    // Emit an event to notify the parent element
    this.$emit("map-clicked", e.latlng);
  }
}
</script>