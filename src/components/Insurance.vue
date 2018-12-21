<template>
  <div>
    <headerComponent :title='title' :flag='true'></headerComponent>
    <div class="content-header">
      <p @click="showBrandCheck">{{brandTitle}}</p>
      <yd-actionsheet :items="brandCheckItems" v-model="show" cancel="取消"></yd-actionsheet>
    </div>
    <div class="content">
      <ul class="tabList">
        <li :class="{active: isActive == index}" @click="tabMeal(index)" v-for='(item,index) in tabList' :key='index'>{{item.name}}</li>
      </ul>
      <ul class="brandList">
        <li>
          <div class="left">
            <div class="top">
              <img src="../assets/images/timg.jpg">
            </div>
            <div class="bottom">三者险超赔</div>
          </div>
          <div class="right">
            <div class='one'>乐享国寿司乘安(货专车罐车医疗版)</div>
            <div class='two'>保险期限1年</div>
            <div class='three' style='color: #ff7f0e;'>
              <span class='money'>1500</span>
              <span class='lab'>起</span>
            </div>
          </div>
        </li>
         <li>
          s
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent.vue'
export default {
  name: 'Insurance',
  components: {
    headerComponent
  },
  data () {
    return {
      title:'找车险',
      show: false,
      brandTitle:'全部品牌',
      isActive:'',
      brandCheckItems: [{
          label: '全部品牌',
          callback: () => {
              this.brandTitle = '全部品牌'
              this.$dialog.toast({mes: '全部品牌'});
          }
        },{
          label: '珠峰保险',
          callback: () => {
            this.brandTitle = '珠峰保险'
              this.$dialog.toast({mes: '珠峰保险'});
          }
        },{
          label: '国寿保险',
          callback: () => {
            this.brandTitle = '国寿保险';
            this.$dialog.toast({mes: '国寿保险'});
          }
        }
      ],
      tabList:[
        {name:'所有车险',code:'all'},
        {name:'驾乘意外险',code:'all1'},
        {name:'三者险超赔险',code:'all2'}
      ]                      
    }
  },
  methods:{
    tabMeal(index){
      this.isActive = index;
    },
    showBrandCheck(){
      this.show = true;
    }
  }
}
</script>
<style lang="scss">
  .content-header{
    height: 1rem;
    font-size: 0.3rem;
    font-family: 'PingFang';
    font-weight: normal;
    border-bottom: solid 0.01rem #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      font-family: 'PingFang';
      font-weight: normal;
      font-size: 0.3rem;
      margin-left: 0.24rem;
    }
  }
  .content{
    padding-left: 0.25rem;
    .tabList{
      display: flex;
      margin-top: 0.34rem;
      margin-bottom: 0.43rem;
      li{
        color: #999999;;
        margin-right: 0.39rem;
        padding-bottom: 0.2rem;
      }
    }
    .brandList {
      display: flex;
      flex-direction: column;
      li{
        display: flex;
        height: 2.52rem;
        justify-content: flex-start;
        .left{
          width: 2.8rem;
          height: 2rem;
          margin-right: 0.27rem;
          .top{
            height: 1.34rem;
            img{
               width: 2.80rem;
               height: 1.34rem;
            }
          }
          .bottom{
            display: flex;
            height: 0.76rem;
            background-color: #f3a33c;
            color: #ffffff;
            font-size: 0.3rem;
            align-items:center;
            justify-content: center;
          }
        }
        .right{
          width: 3.9rem;
          height: 2rem;
          .one{
            margin-bottom: 0.05rem;
            font-weight: bold;
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
          }
          .two{
            color:#666666;
            margin-bottom: 0.1rem;
          }
          .three{
            color: #ff7f0e;
            .money{
              font-size: 0.42rem;
              font-weight: bold;
            }
            .lab{
              font-size: 0.24rem;
            }
          }
          .three::before{
              content: '¥'
            }
        }
      }
    }
  }
  .active{
    font-weight: bold;
    color: #000000!important;
    border-bottom: solid 0.06rem #f08700;
  }
</style>
