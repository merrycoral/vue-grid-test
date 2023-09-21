<template>
  <grid
    :data="gridProps.data"
    :columns="gridProps.columns"
    @click="onClick"
    @check="onCheck"
  />
</template>
<script>
import 'tui-grid/dist/tui-grid.css'
import { Grid } from '@toast-ui/vue-grid';

export default {
  name: 'myGrid',
  components: {
    'grid': Grid
  },
  created() {
    this.gridProps = {
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
    }
  },
  methods: {
    onClick(evt) {
      alert(evt)
      // implement your code
    },
    onCheck(evt) {
      console.log(evt)
    }
  }
};
</script>