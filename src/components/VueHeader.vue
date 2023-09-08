<template>
  <header>
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item"
      >
        <RouterLink
          :to="nav.href"
          
          class="nav-link"
        >
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
//import { mapState } from "vuex"

export default {
  components: {
  },
  data() {
    return {
      navigations: [
        {
          name: 'ag',
          href: '/aggrid'
        },
        {
          name: 'tabulator',
          href: '/tabulator',
        },
        {
          name: 'exceleditor',
          href: '/exceleditor'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    toAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #555;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover {
      background-color: darken(#555, 10%);
    }
    img {
      width: 100%;
    }
  }

}
</style>