<template>
  <div class="logo">
    <img class="se-logo" src="../assets/logo.png" alt="" />
    <div class="logo-text">
      <h3>SEEE</h3>
      <h3>能源联盟链</h3>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  msg: String
})

</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 60px;
  
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #d4247a;
  }
}
.se-logo {
  margin-right: 10px;
  width: 60px;
  height: 60px;
}
.logo-text {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 120px;
}
</style>