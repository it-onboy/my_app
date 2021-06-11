<template>
  <div class="bgc">
    <van-search
      v-model="value"
      shape="round"
      show-action
      autofocus
      placeholder="请输入搜索关键词"
      @input="search"
    >
    
      <template #action>
        <div class="search-div">
          <span class="search">搜索</span>
        </div>
      </template>
      <template #left>
        <van-icon
          name="arrow-left"
          size="26"
          color="#ddd"
          style="margin-right: 10px;"
          @click="goBack"
        />
      </template>
    </van-search>
    <router-view></router-view>
    <!-- 最近搜索 -->
    <div class="zuijin" >
      <div class="top">
        <span>最近搜索</span>
        <van-icon name="delete-o" style="font-size:25px;color:#ddd;" @click="clear" />
      </div>
      <div class="footer">
        <van-tag
        type="primary"
        size="medium"
        mark
          plain
          closeable
          v-for="(item,index) in $store.state.history"
          :key="index"
          @close="popCurrent(item)"
        >{{item}}</van-tag>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="box">
      <div class="hotSearch">
        <span class="left">热门搜索</span>
        <span class="r-span">隐藏</span>
      </div>
      <div class="tag">
        <van-tag
          size="large"
          plain
          type="primary"
          v-for="(item,index) in hotWords"
          :key="index"
        >{{item}}</van-tag>
      </div>
    </div>
    <!-- 关键词展示 -->
    <div class="ss" v-show="list.length !== 0 ? true : false">
      <van-cell-group>
      <van-cell v-for="(item,index) in list" :key="index" :title="item.kw" value="内容" @click="addHistory(item.kw)"/>
    </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: [],//搜索关键词
      hotWords: [] //热搜词
    };
  },
  created() {
    this.$http({
      url: "/taobao/top100"
    }).then(res => {
      // console.log(res.data.hotWords);
      this.hotWords = res.data.hotWords.splice(0, 10);
      // console.log(this.hotWords);
    });
  },
  methods: {
    // 清空搜索记录
    clear(){
      this.$dialog.confirm({
        title:'清空记录',
        message:'嘿！小子，确定要清空吗？'
      })
      .then(() => {
        this.$store.commit('clearHistory')
        console.log('hah');
      })
      .catch(() => {

      })
    },
    // 删除单个搜索记录
    popCurrent(item){
      this.$store.commit('popCurrent',item)
    },
    // 添加搜索记录
    addHistory(item){
      this.$store.commit('addHistory',item)
      this.$router.push({
        name:'Detail'
        // params:{
        //   kw:item
        // }
      })
    },
    goBack() {
      this.$router.back();
    },
    // 发送搜索请求
    search(kw) {
      this.$http({
        url: "/taobao/guess",
        params: {
          kw
        }
      }).then(res => {
        this.list = res.data;
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
.search {
  display: inline-block;
  padding: 6px;
  line-height: 14px;
  font-size: 14px;
  color: white;
  background-color: red;
  border-radius: 3px;
}
.van-search {
  border-bottom: 1px solid #eee;
}
.box {
  height: 200px;
  background-color: white;
  border-bottom: 1px solid #ddd;
}
.hotSearch {
  padding: 14px;
  display: flex;
  justify-content: space-between;
}
.r-span {
  font-size: 16px;
  color: #ddd;
}
.tag {
  padding: 14px;
  height: 100%;
  background-color: white;
}
.van-tag {
  height: 30px;
  margin-right: 30px;
  margin-bottom: 5px;
  border-radius: 3px;
  padding: 3px 10px;
}
.ss{
  position: fixed;
  top: 8%;
  bottom: 100%;
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  background-color: white;
}
.zuijin{
  padding: 14px;
}
.top{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>