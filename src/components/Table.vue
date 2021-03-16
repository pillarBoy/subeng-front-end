<template lang="">
    <table class="hash-contain" cellspacing="0" cellspadding="0">
        <thead>
            <tr>
                <th>id</th>
                <th>hash</th>
                <th>other</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.hash}}</td>
                <td>{{item.dec}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="scss" scoped>
    .hash-contain {
        width: 600px;
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
    }
</style>