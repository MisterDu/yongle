<template>
    <div class="center-view">
        <div class="header">
            <div class="head-bg"></div>
            <div class="head-icon">
                <a href="javascript:;" class="goback" @click="this.goback"></a>
            </div>
            <div class="con">
                <div class="top">
                    <div class="head_photo">
                        <img src="https://m2static.228.cn/images/head-photo.png" alt="" v-if="!userInfo.headIcon">
                        <img :src="userInfo.headIcon" alt="" v-if="userInfo.headIcon">
                        <h4 v-if="userInfo.userId">{{userInfo.mobile}}</h4>
                        <h4 v-if="!userInfo.userId" @click="gotoLogin">请登录</h4>
                    </div>
                    <div class="right fr">
                        <span>
                            <a href="###" class="serviceIcon"></a>
                            <b></b>
                        </span>
                        <a href="#" class="setUpIcon"></a>
                    </div>
                </div>
                <div class="bot tc">
                    <span>
                        <a href="/person/myCashCoupon" class="shengou-order">
                            0张
                            <br>
                            现金券
                        </a>
                    </span> 
                    <span>
                        <span>未启用</span>
                        <br>
                        电子钱包
                    </span> 
                    <span> 
                        0
                        <br> 
                        积分
                    </span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="orders_btn">
                <a href="javascript:;" class="order_from" @click="goto('order')">
                    <i></i>
                    我的订单
                </a>
                <a href="#" class="cash_card">
                    <i></i>
                    现金卷
                </a>
            </div>
            <div class="btn_list">
                <p>
                    <a href="#" class="shopping_address" @click="goto('address')">
                        <i></i>
                        收货地址
                    </a>
                    <a href="#" class="my_collection">
                        <i></i>
                        我的收藏
                    </a>
                    <a href="#" class="shortage_registration">
                        <i></i>
                        我的登记
                    </a>
                </p>
                <p>
                    <a href="#" class="my_question">
                        <i></i>
                        我的提问
                    </a>
                    <a href="#" class="vouchers">
                        <i></i>
                        观演凭证
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/css/reset.css'
import '@/assets/css/center.css'
export default {
    data(){
        return{
            userInfo:{}
        }
    },
    methods:{
        gotoLogin(){
            this.$router.push('/login')
        },
        goto(url){
            this.$router.push(url)
        },
    },
    created(){
        let jwt = this.$store.state.global._token
        if(jwt){
            this.$http
            .get('http://127.0.0.1:2004/backend/get_user_info')
            .then(ret => {this.userInfo = ret.data})
        }
    },
}
</script>