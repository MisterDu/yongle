<template>
    <div>
        详情
    </div>
</template>

<script>
// 导入地址模板
import uri from '@/config/uri'
// 导入moment
import moment from 'moment'

export default {
  data() {
    return {
      list: {}
    }
  }, 
  // filters: {
  //   parsePermiereAt(timestamp) {
  //     return moment(timestamp * 1000).format('YYYY-MM-DD')
  //   }
  // },
  created() {
    this.$http.get(uri.getDetail + this.$route.params.PRODUCTID + ".json?pid=" + this.$route.params.PRODUCTID + ".html").then((ret) => {
      if (ret.result.status == 200) {
        // 请求成功
        console.log(ret);
        this.list = ret.data
      } 
    })
  }
}
</script>

<style scoped lang="scss">
  
  .bg-img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .bg-img > img {
    width: 150%;
    position: absolute;
    top: -150px;
    left: -90px;
  }
  .black {
    background-color: rgba(66, 66, 66, 0.8);
    width: 100%;
    height: 250px;
    position: absolute;
    top: 0;
  }
  .button {
    width: 100%;
    color: white;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    position: relative;
  }
  .fanhui {
    width: 30px;
    height: 30px;
    background-color: rgba(1, 8, 6, 0.3);
    position: absolute;
    top: -170px;
    left: 15px;
    border-radius: 50%;
  }
  .love {
    width: 30px;
    height: 30px;
    background-color: rgba(1, 8, 6, 0.3);
    border-radius: 50%;
    font-weight: 900;
    font-size: 25px;
    position: absolute;
    right: 55px;
    top: -170px;
  }
  .fenxiang {
    width: 30px;
    height: 30px;
    background-color: rgba(1, 8, 6, 0.3);
    position: absolute;
    border-radius: 50%;
    right: 13px;
    top: -170px;
  }
  .head-con {
    width: 100%;
    height: 180px;
    background-color: rgb(233, 230, 230);
    position: relative;
  }
  .left {
    width: 120px;
    height: 160px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 20px;
    top: -100px;
  }
  .left > img {
    width: 120px;
    height: 160px;
    border-radius: 10px;
  }
  .right {
    width: 186px;
    position: absolute;
    right: 30px;
    top: -105px;
    color: #fff;
    line-height: 25px;
  }
  .money {
    position: absolute;
    right: 120px;
    top: 20px;
  }
  .about {
    width: 335px;
    height: 92px;
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: 20px;
    border-radius: 10px;
  }
  .about > h6 {
    font-size: 13px;
    color: #999;
    text-indent: 15px;
    position: absolute;
    top: -20px;
  }
  .about > h5 {
    font-size: 16px;
    color: #5f646a;
    text-indent: 33px;
    position: absolute;
    top: 10px;
  }
  .about > h4 {
    font-size: 16px;
    color: #5f646a;
    text-indent: 33px;
    position: absolute;
    top: 40px;
  }
  .import {
    width: 100%;
    background-color: #e9e6e6;
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
  }
  .import > p {
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
    line-height: 20px;
    font-size: 15px;
    color: #7b8187;
  }
  .import > img {
    width: 335px;
  }
  .btn {
    width: 335px;
    height: 45px;
    border: 1px solid #ffffff;
    margin-top: 20px;
    line-height: 45px;
    text-indent: 15px;
    border-radius: 10px;
    background-color: #fff;
  }
  .btn > span {
    float: right;
    margin-right: 30px;
    color: #ff8c9b;
  }
  // .go {
  //   width: 100%;
  //   height: 60px;
  //   position: relative;
  // }
  // .kefu {
  //   width: 42px;
  //   height: 42px;
  //   border: 1px solid #ff8c9b;
  //   position: fixed;
  //   bottom: 0;
  // }
  // .kefu > img {
  //   width: 33px;
  //   height: 33px;
  // }
</style>

