<template>
  <div>

    <div class="bg-img">
      <img :src=" 'https://static.228.cn' + this.list.product.PBIGIMG ">
    </div>
    <div class="head-con">
      <div class="left">
        <img :src=" 'https://static.228.cn' + this.list.product.PBIGIMG ">
      </div>
      <div class="right">
        <h3>{{list.product.NAME}}</h3>
      </div>
      <div class="price">
        <b>￥{{list.product.MINPRICE}} - ￥{{list.product.MAXPRICE}}</b>
      </div>
    </div>
    <div class="black"></div>
    <div class="button">
      <div class="fanhui">
        <a href="javascript:;" @click="goback" class="goback">
          &lt;
        </a>
      </div>
      <div class="love">
        <strong>☆</strong>
      </div>
      <div class="fenxiang">
        ➦
      </div>
      
    </div>
    <div class="about">
        <h6>{{list.product.TAKEINVOICEMSG}}</h6>
        <h5>{{list.product.BEGINDATE}}</h5>
        <h4>{{list.product.VNAME}}</h4>
    </div>

    <div class="import">
      <h2>注意事项</h2>
        <div v-html="list.product.PRECAUTIONS"></div>
      <h2>演出详情</h2>
        <div v-html="list.product.INTRODUCTION" id="introduction"></div>
        
      <div class="btn">
        <b>FAQ</b>
        <span>
          &gt;
        </span>
      </div>
      <div class="btn">
        <b>在线问答</b><span>&gt;</span>
      </div>
      <div class="null"></div>
    </div>
    <div class="real-btn">
      <div class="btns">
        <a href="/login.html" class="service">
          <img src="https://wx4.sinaimg.cn/mw690/005IaBwvly1gmmcc7dkpyj304g04gglo.jpg" width="40px">
        </a>
        <div class="btn2">
          预约登记
        </div>
      </div>
    </div>
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
  updated() {
    let obj = document.getElementById('introduction')
    let imgs = obj.getElementsByTagName('img')
    for(let i = 0; i < imgs.length; i++) {
      imgs[i].style.width = '90%'
      imgs[i].style.height = 'auto'
    }
  },
  created() {

    this.$http.get(uri.getDetail + this.$route.params.PRODUCTID + ".json?pid=" + this.$route.params.PRODUCTID + ".html").then((ret) => {
      if (ret.result.status == 200) {
        // 请求成功
        console.log(ret);
        this.list = ret.data
      } 
    })
    this.$store.commit("setFooter", false)
  },
  beforeDestroy() {
    this.$store.commit("setFooter", true)
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
    top: -280px;
    left: -90px;
  }
  .black {
    background-color: rgba(66, 66, 66, 0.8);
    width: 100%;
    height: 200px;
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
  .head-con {
    position: relative;
  }
  .left {
    position: relative;
    float: left;
  }
  .left > img {
    z-index: 999;
    border-radius: 10%;
    width: 120px;
    position: absolute;
    top: -80px;
    left: 25px;
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
    top: -200px;
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
    top: -200px;
  }
  .fenxiang {
    width: 30px;
    height: 30px;
    background-color: rgba(1, 8, 6, 0.3);
    position: absolute;
    border-radius: 50%;
    right: 13px;
    top: -200px;
  }
  .product .head-con .right {
    float: left;
    margin-left: .15rem;
    width: calc(100% - 1.35rem);
    position: relative;
  }
  .right h3 {
    height: .63rem;
    z-index: 999;
    color: #fff;
    width: 200px;
    position: absolute;
    right: 15px;
    top: -60px;
  }
  .price {
    margin-left: 150px;
    margin-top: 15px;
    font-size: 18px;
  }
  .about {
    width: 335px;
    height: 100px;
    background-color: rgb(163, 161, 161);
    position: absolute;
    top: 320px;
    left: 20px;
    border-radius: 10px;
  }
  .about > h6 {
    font-size: 13px;
    color: #5f646a;
    text-indent: 15px;
    position: absolute;
    top: 10px;
  }
  .about > h5 {
    font-size: 16px;
    color: #5f646a;
    text-indent: 33px;
    position: absolute;
    top: 39px;
  }
  .about > h4 {
    font-size: 16px;
    color: #5f646a;
    text-indent: 33px;
    position: absolute;
    top: 70px;
  }
  .import {
    width: 100%;
    background-color: #e9e6e6;
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 230px;
  }
  .import > p {
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
    line-height: 20px;
    font-size: 15px;
    color: #7b8187;
    margin-top: 20px;
  }
  .import > img {
    width: 335px;
    margin-top: 20px;
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
  .null {
    width: 100%;
    height: 30px;
    margin-top: 30px;
  }
  .real-btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0px 0px 15px 0px rgba(95, 100, 106, 0.2);
}
  .btns {
    display: flex;
  }
  .service {
    width: 44px;
    height: 44px;
    display: block;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
    position: relative;
    margin-left: 10px;
  }
  .btn2 {
    width: 300px;
    height: 40px;
    margin-left: 30px;
    background-image: linear-gradient(to right, rgb(255, 126, 111), rgb(255, 41, 89));
    position: absolute;
    left: 35px;
    top: 5px;
    border-radius: 10px;
    text-align: center;
    line-height: 44px;
    color: #fff;
  }
</style>

