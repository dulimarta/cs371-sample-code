<template>
  <div>
    <p>This sample requires an API Key from <a
        href="https://timezonedb.com">TimeZoneDB</a>.
      Once you sign up and get your API key, save it in
      <code>.env.local</code> (in the same directory with
      <code>package.json</code>) in the following format:

    <pre>
        VUE_APP_TIMEZONE_API_KEY=xxxxxxxx
    </pre>
    </p>

    <div>
      <WorldMap @map-clicked="what" />
    </div>
    <input type="text" :value="geoPosition">
    <button @click="searchCity">Add</button>
    <div id="clocks">
      <Clock v-for="(c,pos) in selectedCities" :key="pos"
        :time-zone="c.timeZone" :label="c.name">
      </Clock>
    </div>
  </div>
</template>

<script setup lang="ts">
// import ChildComponent from "./60-props-child.vue";
import { ref, computed, onMounted } from "vue";
import axios, { AxiosResponse } from "axios";
import Clock from "./70-clock.vue";
import WorldMap from "./70-world-map.vue";

const timezoneDBUrl = "http://api.timezonedb.com/v2.1";
type City = {
  name: string;
  timeZone: string;
};

type TimeZoneData = {
  countryName: string;
  gmtOffset: number;
  regionName: string;
  zoneName: string;
};

const geoPos = ref<{ lat?: number; lng?: number }>({ lat: 0, lng: 0 });
const selectedCities = ref<Array<City>>([]);
let apiKey = "";
onMounted((): void => {
  // Insert your TimeZoneDB API key here 
  apiKey = import.meta.env.VITE_APP_TIMEZONE_API_KEY;
  console.log("Component mounted?", apiKey);
});
const geoPosition = computed((): string => {
  if (geoPos.value.lat && geoPos.value.lng)
    return `${geoPos.value.lat.toPrecision(5)},${geoPos.value.lng.toPrecision(
      5
    )}`;
  else return "N/A";
});
function searchCity(): void {
  const param = new URLSearchParams();
  param.append("key", apiKey);
  param.append("format", "json");
  param.append("by", "position");
  param.append("lat", geoPos.value.lat!.toString());
  param.append("lng", geoPos.value.lng!.toString());
  const tzUrl = `${timezoneDBUrl}/get-time-zone?` + param.toString();
  // Use a Web Proxy Server to get around CORS issue
  // since timezonedb.com does not allow CORS
  axios
    .request({
      method: "GET",
      url: "https://api.allorigins.win/raw",
      params: {
        url: tzUrl,
      },
    })
    .then((r: AxiosResponse) => r.data)
    .then((r: TimeZoneData) => {
      // Add the selected location to our array
      selectedCities.value.push({ name: r.regionName, timeZone: r.zoneName });
    });
}

function what(pos: { lat: number; lng: number }): void {
  // When the user pans the map left/right the longitude
  // angle can be out of the [-180,+180] range
  console.log("Cliced at", geoPos);
  geoPos.value = { lat: pos.lat, lng: pos.lng };
}
</script>

<style scoped>
#clocks {
  margin-top: 1em;
}
pre {
  white-space: normal;
  padding: 0.5em;
  border: 2px solid gray;
}
</style>