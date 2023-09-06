<template>
  <AgGrid/>
  <!-- <TabulatorGrid/> -->
  <!-- <ExcelEditor/> -->

</template>
<script>
import AgGrid from './components/AgGrid.vue'
//import ExcelEditor from './components/ExcelEditor.vue'
//import TabulatorGrid from './components/TabulatorGrid.vue'
export default {
  name: 'App',
  data(){
    return {
       products : 1
      , modalNum : 0
    }
  },

  methods : {

  },
  components: {
    AgGrid : AgGrid,
    //TabulatorGrid: TabulatorGrid,
    //ExcelEditor: ExcelEditor,
  }
}
</script>
<style>
</style>