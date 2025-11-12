/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "cs357-demo.firebaseapp.com",
  projectId: "cs357-demo",
  storageBucket: "cs357-demo.firebasestorage.app",
  messagingSenderId: "520110768371",
  appId: "1:520110768371:web:2448afd555a48eac8f7786"
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig);
console.log("API key", fapp.options.apiKey)
const app = createApp(App)
const pinia = createPinia()
registerPlugins(app)

app.use(pinia)
app.mount('#app')
