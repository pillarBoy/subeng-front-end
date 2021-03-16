<template lang="">
    <div class="header">
        <Logo />
        <div class="nav-list">
            <router-link class="nav-item" active-class="active-nav" to="/">push</router-link>
            <router-link class="nav-item" active-class="active-nav" to="/list">list</router-link>
            <router-link class="nav-item" active-class="active-nav" to="/check">check</router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineComponent } from 'vue';
import Logo from './Logo.vue';

defineComponent({
    components: {Logo}
})

defineProps({
    title: String
});

</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        padding: 30px;
        
    }
    .nav-list {
        margin-left: 100px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }

    .nav-item {
        display: inline-block;
        margin: 0 20px;
        color: #333;
        text-transform: uppercase;
        text-decoration: none;

        &:hover {
            color: #d4247a;
        }

        &.active-nav {
            color: #d4247a;
        }
    }
</style>