<template>
  <div>
    <van-tabs @click="onClick" v-model="active">
      <van-tab title="推荐"></van-tab>
      <van-tab title="场馆"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data () {
    return {
      active: 0,
      uri: ['/home/recommend', '/home/venue']
    }
  },

  methods: {
    onClick (index) {
      //   console.log(index);
      this.$router.push(this.uri[index])
    }
  },
  created () {
    //   this.uri = this.$route
    // console.log(this.uri.indexOf(this.$route.path));
    this.active = this.uri.indexOf(this.$route.path) >= 0 ? this.uri.indexOf(this.$route.path) : 0
  },
}
</script>