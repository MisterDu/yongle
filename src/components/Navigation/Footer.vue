<template>
  <div>
    <van-tabbar @change="changeItem" v-model="active" active-color="#ff2959" inactive-color="#000">
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-shouye" slot="icon" size="0.3rem" />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-category" slot="icon" size="0.2rem" />
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-sousuo" slot="icon" size="0.2rem" />
        <span>搜索</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon class-prefix="iconfont icon-wode" slot="icon" size="0.2rem" />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import '@/assets/font/iconfont.css'
import Vue from 'vue';
import { Tabbar, TabbarItem, Icon, } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
  data () {
    return {
      active: 0,
      urls: ["/home/recommend", "/category", "/sousuo", "/center"]

    }
  },
  created () {
      console.log(this.urls.indexOf(this.$route.path));
    this.active = this.urls.indexOf(this.$route.path) >= 0 ? this.urls.indexOf(this.$route.path) : 0
  },
  methods: {
    changeItem (index) {
      this.$router.push(this.urls[index])
    }
  },
};
</script>
