<template>
  <div class="longing">
    <div class="wechat-img">
      <img src="../assets/images/longing.png" alt="">
    </div>
    <div class="longin-input">
      <input v-model="input" type="password" placeholder="需要先输入密码"></input>
      <p></p>
    </div>
    <div class="longing-button">
      <button :plain="true" :showClose="true" @click="register">确定</button>
    </div>
    <div class="longing-shut" @click="shut">
      <p>关闭</p>
    </div>
  </div>
</template>

<script>
export default {
data() {
return{
  input:'',
}
},
methods: {
        register() {
          if (this.input =="123456") {
            this.$router.push({path: '/recipes'})
          }
        },
        shut() {
            this.$router.push({path: '/'})
        }
}
}
</script>

<style lang="less" scoped>
.longing{
  font-size: 14px;
  position: relative;
  .longin-input{
    position: absolute;
    top: 3.8rem;
    left: 1.2rem;
    input{
      color: #999999;
      font-size: 16px;
      font-weight: 600;
      width:1.37rem;
      height: 0.43rem;
      border-radius: 3px;
      border: 0;
      opacity: 0.8;
      text-indent: 0.1rem;
    }
    p{
      width: 1.13rem;
      border-bottom: 1px solid #cfa972;
      position: absolute;
      left: 0.1rem;
      bottom: 0.05rem;
    }
  }
  .longing-button{
    position: absolute;
    top: 5.2rem;
    left:0.29rem;
    button{
      width: 3.15rem;
      height: 0.47rem;
      border: 0;
      background: #a7d5d4;
      font-size:20px;
      color: #fff;
    }
  }
  .longing-shut{
    opacity: 0;
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 20px;
    background: red;
    top: 0.82rem;
    right: 0.24rem;
  }
}
</style>


