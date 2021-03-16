<template lang="">
    <div class="home-page">
        <p class="tips">请输入需要上链的hash,多个hash请以,(英文逗号)分割</p>
        <textarea class="hash-input" v-model="hash"></textarea>
        <!-- <div>{{hash.split(',')}}</div> -->
        <div class="submit-button">
            <Button @click="uploadHash">push</Button>
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue';

export default {
    components: { Button },
    data() {
        return {
            hash: ""
        }
    },
    mounted() {
        console.log(this.$api);
        this.$api.get('http://www.baidu.com')
            .then(res => console.log)
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
            margin: 30px 0 20px;
            width: 600px;
            font-size: 14px;
            color: #de5704;
            text-align: center;
        }

        .hash-input {
            
            padding: 8px;
            width: 480px;
            height: 120px;
            resize: none;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ffb5d9;

            &:focus {
                border: 1px solid #d4247a;
                outline: #d4247a;
            }
        }

        .submit-button {
            margin: 30px auto 0;
            display: flex;
            justify-content: center;
        }
    }
</style>