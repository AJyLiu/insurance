<template>
    <div class='head'>
        <div>
            <span @click='goBack'>《</span>
        </div>
        <div>{{title}}</div>
        <div class='right'>
            <span v-if='flag == true' @click='toInsurance'>保单</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'HeaderComponent',
    props:['title','flag'],
    data() {
        return{
         
        }
    },
    mounted:function () {
        
    },
    methods:{
        goBack(){
            history.back(-1);
        },
        toInsurance(){

        }
    }
    
}
</script>
<style lang="scss">
    .head{
        border-bottom: solid 0.01rem #e5e5e5;
        height: 0.89rem;
        font-size: 0.36rem;
        font-family: 'PingFang';
        font-weight: 600;
        display: flex;
        align-items:center;
        justify-content: space-between;
        .right{
            color: #f08700;
            margin-right: 0.35rem;
        }
    }
</style>
