<template>
    <grid
      :data="gridProps.data"
      :columns="gridProps.columns"
      @click="onClick"
    ></grid>
</template>

<script>
import 'tui-grid/dist/tui-grid.css';
import { ref, onBeforeMount } from "vue";
import { Grid } from '@toast-ui/vue-grid';

export default {
  components: {
    grid: Grid
  },
  setup() {
    const gridProps = ref(null); 
    onBeforeMount(() => {
    gridProps.value = {
      data: [
        // for rowData prop
        {
          name: 'Beautiful Lies',
          artist: 'Birdy'
        },
        {
          name: 'X',
          artist: 'Ed Sheeran'
        }
      ],
      columns: [
        // for columnData prop
        {
          header: 'Name',
          name: 'name'
        },
        {
          header: 'Artist',
          name: 'artist'
        }
      ]
    };
  })
}
};


</script>

<style>
</style>