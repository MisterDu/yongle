<template>
    <div>
        <div class="bodybg"></div>
        <h3 class="head-tit">
            <a href="javascript:;" class="goback" @click="goto('center')"></a>
            收货地址
        </h3>
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>
<script>
import '@/assets/css/order.css'
import Vue from 'vue';
import { AddressList , Toast} from 'vant';

Vue.use(AddressList);
Vue.use(Toast)
export default {
    data() {
        return {
            chosenAddressId: '1',
            list:[]
        }
    },  
    created(){
       this.list = JSON.parse(localStorage.getItem('address'))

    },
     methods: {
          goto(url){
            this.$router.push(url)
        },
    onAdd() {
      this.$router.push('/addressedit')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
}
</script>