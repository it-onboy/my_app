<template>
  <div>
    <van-search v-model="value" 
                shape="round"
                show-action
                background="red"
                placeholder="请输入搜索关键词"
                @focus="goSearch">
      <template #action>
        <div class="search-div">
          <span>搜索</span>
        </div>
      </template>
      <template #left>
          <van-icon name="wap-nav" size="26" color="#ddd" style="margin-right: 10px;"/>
      </template>
      <template #left-icon>
          <van-icon name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=" size="16" color="#888" style="margin-right: 10px;"/>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods:{
    goSearch(){
      this.$router.push('/Search')
    }
  }
}
</script>

<style scoped>
span{
  width: 100%;
  font-size: 16px;
  color: white;
  background-color: red;
}
.van-search__action{
  background-color: red;
}
</style>