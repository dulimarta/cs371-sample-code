import { defineStore } from "pinia"
import {ref} from "vue"

export const useAppStore = defineStore('puzzle', () => {
  const accessCode = ref(0)
  const favColor = ref("blue")

  function updateAccess(val: number) {
    accessCode.value = val
  }
  function updateColor(col: string) {
    favColor.value = col
  }
  return {accessCode, updateAccess, favColor, updateColor}
})