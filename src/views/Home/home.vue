<template>
  <div class="home">
    <van-nav-bar title="永乐票务" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="img" />
      </van-swipe-item>
    </van-swipe>
    <div class="grid">
      <div>
        <img src="../../assets/yongleIMG/儿童.png" alt />
        <p>儿童亲子</p>
      </div>
      <div @click="duo">
        <img src="../../assets/yongleIMG/更多.png" alt />
        <p>更多</p>
      </div>
      <div>
        <img src="../../assets/yongleIMG/话剧.png" alt />
        <p>话剧</p>
      </div>
      <div>
        <img src="../../assets/yongleIMG/活动.png" alt />
        <p>活动</p>
      </div>
      <div>
        <img src="../../assets/yongleIMG/扇子.png" alt />
        <p>永乐说</p>
      </div>
      <div>
        <img src="../../assets/yongleIMG/体育赛事.png" alt />
        <p>体育赛事</p>
      </div>
      <div>
        <img src="../../assets/yongleIMG/演唱会.png" alt />
        <p>演唱会</p>
      </div>
      <div @click="center">
        <img src="../../assets/yongleIMG/我的.png" alt />
        <p>我的</p>
      </div>
    </div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Navigation/Header'
import uri from '@/config/uri'
import Vue from 'vue';
import { NavBar, Icon, Swipe, swipeItem, Lazyload, } from 'vant';

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(swipeItem);
Vue.use(Lazyload);
export default {
  data () {
    return {
      images: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2412772329,783754855&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3258450131,54192065&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=388592551,2562195626&fm=26&gp=0.jpg',
      ],
    }
  },
  components: {
    Header
  },
  methods: {
    center () {
      this.$router.push('/center')
    },
    duo () {
      this.$router.push('/category')
    }
  },
  created () {

  },
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  //   background-color: #39a9ed;
  width: 100%;
}
.img {
  width: 100%;
  height: 200px;
  margin: auto;
}

.grid {
  width: 100%;
  height: 145.4px;
  text-align: center;
}

.grid div {
  width: 21%;
  margin: 0 5px;
  height: 55.2px;
  float: left;
  margin-top: 5px;
  margin-bottom: 10px;
}

.grid p {
  line-height: 1px;
  font-size: 12px;
}

.grid img {
  width: 36px;
}
</style>