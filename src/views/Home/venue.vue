<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index" @click="godetail(item.PRODUCTID)">
        <img :src="'http://static.228.cn/' + item.IMG" />
        <p class="name">{{item.VNAME | parseADDRESS}}</p>
        <p class="site">{{item.ADDRESS | parseVNAME}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import uri from '@/config/uri'
export default {
  data () {
    return {
      dataList: [],
    }
  },
  methods: {
    godetail (id) {
      console.log(id);
      this.$router.push('/detail' + id)
    }
  },
  created () {
    this.$http.get(uri.venue).then(ret => {
      console.log(ret.data.venuePage.list);
      console.log(ret.result.status);
      if (ret.result.status == 200) {
        this.dataList = ret.data.venuePage.list
      }
    })

  },
  mounted () {
    // console.log(this.dataList.NAME);
  },
  filters: {
    parseVNAME (name) {
      return name.substr(0, 6) + '...'
    },
    parseADDRESS (name) {
      return name.substr(0, 6) + '...'
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
  font-size: 14px;
  width: 105px;
  height: 5px;
  line-height: 1px;
  font-weight: 800;
}

.site {
  font-size: 12px;
  color: #999;
  line-height: 1px;
}

.qian span {
  color: #b5bbc1;
}
</style>