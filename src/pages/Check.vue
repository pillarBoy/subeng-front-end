<template lang="">
    <div class="home-page">
        <div class="check-group">
            <input class="hash-input" v-model="hash" placeholder="请输入需要查询的hash,多个hash请以,(英文逗号)分割" />
            <Button class="hash-check-btn" @click="uploadHash">push</Button>
        </div>
        <p class="tips" v-if="hash">请输入需要查询的hash,多个hash请以,(英文逗号)分割</p>

        <div class="list-container">
            <Table :list="list" v-if="list.length>0" />
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue';
import Table from '../components/Table.vue';

export default {
    components: { Button, Table },
    data() {
        return {
            hash: "",
            list: [
                {id: 1, hash: 'alksjdlkf', dec: ''}
            ]
        }
    },
    methods: {
        uploadHash() {
            console.log(this.hash);
        }
    }
}

</script>
<style lang="scss" scoped>
    .home-page {
        margin: 0 auto;
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tips {
            margin: 10px 0 20px;
            width: 600px;
            font-size: 14px;
            color: #999;
            /* text-align: center; */
        }
        .check-group {
            display: flex;
            height: 48px;
            width: 100%;
        }

        .hash-input {
            box-sizing: border-box;
            padding: 0 10px;
            height: 48px;
            width: 100%;
            resize: none;
            font-size: 16px;
            border-radius: 5px 0 0 5px;
            border: 1px solid #ffb5d9;
            border-right: none;

            &:focus {
                border: 1px solid #d4247a;
                outline: #d4247a;
            }
            &::placeholder {
                font-size: 14px;
            }
        }

        .hash-check-btn {
            width: 120px;
            border-radius: 0 5px 5px 0;
            border: none;
        }

        .list-container {
            margin-top: 30px;
        }
    }
</style>