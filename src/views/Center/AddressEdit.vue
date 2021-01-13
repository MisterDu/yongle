<template>
    <div>
      <div class="bodybg"></div>
        <h3 class="head-tit">
            <a href="javascript:;" class="goback" @click="goback"></a>
            新增收货地址
        </h3>
        <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </div>
</template>
<script>
import areaData from '@/assets/area.js'
import Vue from 'vue';
import { AddressEdit , Toast} from 'vant';

Vue.use(AddressEdit);
Vue.use(Toast)
export default {
    data() {
    return {
      areaList:{},
      searchResult: [],
      address:[]
    };
  },
  created(){
      this.areaList = areaData
      this.address = JSON.parse(window.localStorage.getItem('address')) || []
      this.$store.commit('global/setFooter',false)
  },
  methods: {
    onSave(content) {
    this.address.push(content)
    localStorage.setItem('address',JSON.stringify(this.address))
    this.$router.push('/address')

    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  beforeDestroy(){
      this.$store.commit('global/setFooter',true)
  }
}
</script>