<template lang="">
    <button class="see-button">
        <slot />
    </button>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .see-button {
        width: 280px;
        height: 48px;
        font-size: 18px;
        border-radius: 8px;
        font-weight: bold;
        color: white;
        border: 1px solid #a20b54;
        background: #e62f88;
        outline: none;
        transform: all .5s;

        &:active {
            background: #e470a8;
            transform: all .5s;
        }
    }
</style>