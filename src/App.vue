<template>
    <VueHeader />
    <RouterView />
    <!-- 
      <AgGrid/>
      <TabulatorGrid/>
      <ExcelEditor/>
    -->

</template>
<script>
import VueHeader from "./components/VueHeader";
 //import AgGrid from './components/AgGrid.vue'
//import ExcelEditor from './components/ExcelEditor.vue'
//import TabulatorGrid from './components/TabulatorGrid.vue'
export default {
  name: 'App',
  data(){
    return {
      currentTab: 0,
    }
  },

  methods : {

  },
  components: {
    
    VueHeader
    //AgGrid,
    //TabulatorGrid,
    //ExcelEditor,
  }
}
</script>
<style>
</style>