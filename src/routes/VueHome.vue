<template>
  
      <AgGrid/>
      <TabulatorGrid/>
      <ExcelEditor/>
</template>

<script>


import AgGrid from '../components/AgGrid.vue'
import ExcelEditor from '../components/ExcelEditor.vue'
import TabulatorGrid from '../components/TabulatorGrid.vue'
export default {
  components: {
    AgGrid,
    ExcelEditor,
    TabulatorGrid
  },
  created() {
    //this.$store.commit('movie/resetMovies')
  }
};
</script>
