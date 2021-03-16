<template lang="">
    <div class="home-page">
        <p class="tips">请输入需要上链的hash,多个hash请以,(英文逗号)分割</p>
        <textarea class="hash-input" v-model="hash"></textarea>
        <!-- <div>{{hash.split(',')}}</div> -->
        <div class="submit-button">
            <Button @click="uploadHash">push</Button>
        </div>
        <input type="text" v-model="id">
        <div class="submit-button">
            <Button @click="get">get</Button>
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue';

export default {
    components: { Button },
    data() {
        return {
            hash: "",
            id: ''
        }
    },
    mounted() {
       
    },
    methods: {
        uploadHash() {
            console.log(this.hash);
            let exp1 = { "account":"123456", "mktree":[] }
            exp1.mktree = this.hash.split(',')
            this.$api.post('/cargo', exp1)
                .then(res => console.log)
                .catch(err => console.log)
        },
        get() {
            this.$api.get('/cargo/'+this.id)
            .then(res => console.log)
            .catch(err => console.log)
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