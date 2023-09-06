//import './style.css'
import App from './App.vue'
import {
  createApp
} from "vue";
import VueExcelEditor from "vue3-excel-editor";
import {
  ApexGrid
} from 'apex-grid';
ApexGrid.register();


const app = createApp(App);
app.use(VueExcelEditor);
app.mount("#app");