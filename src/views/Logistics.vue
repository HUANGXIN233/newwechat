<template>
  <div class="logistics">
    <div class="wechat-img">
      <img src="../assets/images/logistics.png" alt="">
      <p class="wechat-bottom iconfont icon-cry"> 我是有底线的</p>
    </div>
    <div class="logistics-button" @click="toLogisticsSystem">
      <p>了解更多</p>
    </div>
    <div class="logistics-staff">
      <ul >
        <li class="fl" v-for="(item,index) in list" :key="index" @click="toPrincipal">{{item.name}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return{
        list:[
          {"name":"张三","id":1},
          {"name":"李四","id":1},
          {"name":"王五","id":1},
          {"name":"李六","id":1},
        ]
      }
    },
    methods: {
    toLogisticsSystem() {
      this.$router.push({path: '/logisticsSystem'})
    },
    toPrincipal() {
      this.$router.push({path:'/principal'})
    }
  }
}
</script>

<style lang="less" scoped>
  .logistics{
    position: relative;
    .logistics-button{
      font-size: 14px;
      position: absolute;
      bottom: 5.66rem;
      left: 1.16rem;
      opacity: 0;
      p{
        text-align: center;
        background: #a7d5d4;
        width: 1.41rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-radius: 20px;
        color: #fff;
      }
    }
    .logistics-staff{
      opacity: 0;
      position: absolute;
      bottom: 3.53rem;
      left: 0.15rem;
      font-size: 14px;
      ul{
        li{
          width: 0.79rem;
          height: 1rem;
          margin-right: 0.09rem;
          background: red;
        }
      }
    }

  }
</style>

