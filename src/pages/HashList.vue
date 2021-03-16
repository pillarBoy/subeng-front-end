<template lang="">
    <div class="hash-list">
        <h2>hash list</h2>
        <Table :list="hashList"></Table>
    </div>
</template>
<script>
    import Table from '../components/Table.vue'

    export default {
        components: {Table},
        data() {
            return {
                hashList: [
                    {id: 1, hash: 'alksjdlkf', dec: '...'}
                ]
            }
        }
    }
</script>
<style lang="scss">
    .hash-list {
        display: flex;
        flex-direction: column;
    }
    
    /* .hash-contain {
        text-align: left;
        border-collapse:collapse;

        th {
            background: #eee;
        }

        td,th {
            height: 28px;
            padding: 0 5px;
            border: 1px solid #ccc;
        }
    } */
</style>