<template>
  <div class="recipes">
    <div class="wechat-img">
      <img src="../assets/images/recipes.png" alt="">
      <p class="wechat-bottom iconfont icon-cry"> 我是有底线的</p>
    </div>
    <!-- <h1 class="recipes-title">甜甜圈幼儿园</h1> -->
    <div class="recipes-data">
      <p>{{date}}</p>
      <p @click="toCookbook">周二食谱</p>
    </div>
    <div class="logistics"  @click="toComestible">
      <p>查看详情 ></p>
    </div>
    <div class="recipes-dietician" @click="toDietician">
      222222222222
      <img src="" alt="">
      <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      date:'',
    }
  },
  methods: {
    toComestible() {
      this.$router.push({path: '/logistics'})
    },
    toDietician() {
      this.$router.push({path: '/dietician'})
    },
    toCookbook() {
      this.$router.push({path: '/cookbook'})
    }
  },
  mounted() {
    this.date = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDate()
  },
}
</script>

<style lang="less" scoped>
.recipes{
  height: 22.1rem;
  position: relative;
  .recipes-title{
    margin-top: 0.16rem;
    text-align: center;
    font-size:22px;
  }
  .recipes-data{
    position: absolute;
    top: 1.26rem;
    color: #607fa6;
    font-size: 14px;
    p{
      float: left;
    }
    :nth-child(1){
      color: #a1a1a1;
      margin-right: 0.4rem;
      margin-left: 0.3rem;
    }
  }
  .logistics{
    font-size: 16px;
    position: absolute;
    right: 0.3rem;
    top: 10.28rem;
    p{
      font-size: 14px;
      color: #ff9800;
    }
  }
  .recipes-dietician{
    font-size: 14px;
    position: absolute;
    bottom: 5.18rem;
    left: 0.15rem;
    width: 3.45rem;
    height: 1.41rem;
    background: green;
    opacity: 0;
  }
}
</style>
