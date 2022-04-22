<template>
  <div id="face">
    <div>{{ time }}</div>
    <div>{{ date }}</div>
    <h3 class="truncate">{{ label }}</h3>
  </div>
</template>
<script setup lang="ts">
import Vue, { computed } from "vue";
import { ZonedDateTime, ZoneId, DateTimeFormatter } from "@js-joda/core";
import "@js-joda/timezone";
import "@js-joda/locale_en-us";
import { Locale } from "@js-joda/locale_en-us";

export type ClockArg = {
  timeZone: string;
  label: string;
};
const timeFormatter = DateTimeFormatter.ofPattern("HH:mm");

// To show the month name, the Locale must be set
const dateFormatter = DateTimeFormatter.ofPattern("MMM d").withLocale(
  Locale.US
);

const args = defineProps<ClockArg>();

let zdt: ZonedDateTime | null = ZonedDateTime.now();
let timer: number | null = null;
const time = computed<string>(() => zdt?.format(timeFormatter) ?? "00:00");

const date = computed<string>(
  () =>
    // console.log("Local date", this.zdt?.format(dateFormatter));
    zdt?.toLocalDate().format(dateFormatter) ?? "what"
);

function onMounted(): void {
  zdt = ZonedDateTime.now(ZoneId.of(args.timeZone));
  timer = setInterval(() => {
    zdt = ZonedDateTime.now(ZoneId.of(args.timeZone));
  }, 1000);
  // console.log("here", this.timeZone, zdt.toString());
}

function onUnmounted(): void {
  if (timer) {
    console.log("Delete timer");
    clearInterval(timer);
    timer = null;
  }
}
</script>

<style scoped>
#face {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 4px;
  width: 6em;
}
#face:hover {
  transform: scale(1.05);
}
#face div:first-child {
  font-size: 200%;
}
.truncate {
  max-width: 5em;
  white-space: nowrap; /* disable text wrap */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>