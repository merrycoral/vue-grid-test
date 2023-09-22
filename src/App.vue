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
div.nav{
  display: flex;
}
.nav-item{
  background-color: deepskyblue;
  text-align: center;
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 5px;
}
a.nav-link{
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}

div.down-btns{
  margin: 0 0 10px 0;
}

div.down-btns button{
  background-color: #a8a8a8;
  text-align: center;
  padding: 5px 10px;
  margin: 0px 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

</style>