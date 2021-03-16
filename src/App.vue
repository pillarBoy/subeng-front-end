<template>
    <div class="app-vue">
      <Header />
      <div class="layout-content">
        <router-view />
      </div>
    </div>
</template>

<script setup>
import {defineComponent} from 'vue';
import Header from './components/Header.vue';


defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style>
body {
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.layout-content {
  margin: 0 auto;
  width: 600px;
}
</style>