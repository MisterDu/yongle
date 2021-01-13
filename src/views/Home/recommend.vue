<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index" @click="godetail(item.PRODUCTID)">
        <img :src="'http://static.228.cn/' + item.PBIGIMG" />
        <p class="name">{{item.NAME | parseName}}</p>
        <p class="qian">
          ￥
          {{item.MINPRICE}}
          <span>起</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import uri from '@/config/uri'
export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    godetail (id) {
      console.log(id);
      this.$router.push('/detail/' + id)
    }
  },
  created () {
    this.$http.get(uri.home).then(ret => {
      console.log(ret.data.recommendPage.list);
      // console.log(ret.result.status);
      if (ret.result.status == 200) {
        this.dataList = ret.data.recommendPage.list
      } else {

      }
    })
  },
  mounted () {
    // console.log(this.dataList.NAME);

  },
  filters: {
    parseName (name) {
      return name.substr(0, 15) + '...'
    }
  }
}
//  this.$http.get(uri.home).then(ret => {
//         console.log(ret.data.recommendPage.list)
//       }
</script>

<style lang="scss" scoped>
.list {
  //   display: flex;
  width: 100%;
  text-align: left;
  margin: auto;
}

.list li {
  width: 30%;
  height: 140px;
  display: block;
  float: left;
  margin: 0 5px;
  margin-bottom: 60px;
}

.list li img {
  width: 100%;
  height: 100%;
  display: block;
}

.name {
  font-size: 12px;
  width: 105px;
  height: 30px;
  //   line-height: 0.18rem;
  font-weight: 800;
}

.qian {
  font-size: 12px;
  color: #ff3a56;
  line-height: 19px;
  height: 12px;
}

.qian span {
  color: #b5bbc1;
}
</style>