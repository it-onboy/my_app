<template>
  <div class="bgc">
    <router-view></router-view>
    <van-tabbar v-model="active" @change="changes">
      <van-tabbar-item icon="home-o" >首页</van-tabbar-item>
      <van-tabbar-item icon="search" >搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购买</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  
  <!-- <van-tabbar route>
    <route-view></route-view>
    <van-tabbar-item  to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item  to="/search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item  to="/buy" icon="shopping-cart-o">购买</van-tabbar-item>
    <van-tabbar-item  to="/my" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar> -->
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods:{
    changes(active){
      switch(active){
        case 0 : this.$router.push('/main'); break;
        case 1 : this.$router.push('/search'); break;
        case 2 : this.$router.push('/buy'); break;
        case 3 : this.$router.push('/my'); break;
      }
    }
  }
};
</script>

<style>
.bgc{
  height: 100%;
  background-color: #eee;
}
</style>