<template>
    <div>
        <van-nav-bar
        title="分类"
        left-text=""
        left-arrow
        nav-bar-text-color="#ff2959"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        >
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <van-dropdown-menu active-color="#FF2959" >
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <div class="card">
            <van-card tag="标签" v-for="item in list" :key="item.productid">
            <template #thumb>
                <img :src="'https://static.228.cn/' + item.pbigimg" width="66">
            </template>
            <template #title>
                <div class="title">
                    {{item.name}} 
                    
                </div>
            </template>
                <template #desc>
               <div class="desc">
                    <div>
                    {{item.begindate}} ~ {{item.enddate}}
                </div>
                <div>
                    {{item.vname}}
                </div>
                <div>
                    {{item.minprice}} - {{item.maxprice}}元
                </div>
               </div>
                </template>
        </van-card>
        <van-button class="v-button" round type="info" size="small" color="#ff2959"  plain @click="loading">加载更多</van-button>
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue';
import Qs from 'qs';
import { NavBar,Toast, DropdownMenu, DropdownItem, Card, Button} from 'vant';
import  uri from '@/config/uri'

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Card);
Vue.use(Button);
export default {
    data() {
        return {
            value1: 0,
            value2: 'a',
            value3: 'A',
            option1: [
                { text: '全国', value: 0 },
                { text: '北京', value: 1, py:'bj' },
                { text: '成都', value: 2, py:'cd' },
                { text: '海口', value: 3, py:'hk'},
                { text: '青岛', value: 4, py:'qd'},
                { text: '日本', value: 5, py:'riben'},
                { text: '上海', value: 6, py:'sh'},
                { text: '深圳', value: 7, py:'sz'},
                { text: '天津', value: 8, py:'tj'},
            ],
            option2: [
                { text: '全部分类', value: 'a' },
                { text: '演唱会', value: 'b' },
                { text: '话剧舞台剧', value: 'c' },
                { text: '音乐会', value: 'd' },
                { text: '舞蹈芭蕾', value: 'e' },
                { text: '戏曲综艺', value: 'f' },
                { text: '体育赛事', value: 'g' },
                { text: '儿童亲子', value: 'h' },
                { text: '休闲娱乐', value: 'i' },
            ],
            option3: [
                { text: '全部时间', value: 'A' },
                { text: '今天', value: 'B' },
                { text: '明天', value: 'C' },
                { text: '本周内', value: 'D' },
                { text: '本周末', value: 'E' },
                { text: '下周', value: 'F' },
                { text: '本月', value: 'G' },
            ],
            list: [],
            pageNum: 1,
        }
    },
    filters: {

    },
    methods: {
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        },
        loading(){
            this.getMore()
        },
        getDate(){
            this.$http.get(uri.getAll).then(ret => {
                console.log(ret.data);
                if(ret.result.status == 200) {
                    if(this.pageNum <= Math.ceil(ret.data.pagerMemory.total / 10)){
                        this.list = [...ret.data.pagerMemoryList,...this.list]
                        this.pageNum++
                        console.log(123);
                    }else{
                        Toast.fail('网络繁忙!')
                    }
                }
            })
        },
        getMore(){
            let params = {'params':"pagenum=2"}
            this.$http.post(uri.getMore,Qs.stringify(params)
                
            ).then(ret => {
                console.log(ret.data);
                if(ret.result.status == 200) {
                        this.list = [...this.list,...ret.data.pagerMemoryList]
                        this.pageNum++
                        console.log(123);
                }
                })
        },
    },
    created(){
        this.getDate()
    }
}
</script>
<style lang="scss" >
.card{
    margin-bottom: 70px;
}
.card div{
    height: 100%;
}
.van-card__thumb img{
    width: 85px;
    height: 113px;
}
.v-button{
    width:90px;
    height:30px; 
    margin:30px auto; 
    position: relative;
    right: -50%;
    transform: translateX(-50%);
}
</style>