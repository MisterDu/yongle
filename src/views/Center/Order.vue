<template>
    <div>
        <div class="bodybg"></div>
        <h3 class="head-tit">
            <a href="javascript:;" class="goback" @click="this.goback"></a>
            我的订单
        </h3>
        <div class="errors unOrder tc mt100">
            <i></i>
            <p class="f14 red">您目前没有下单</p>
        </div>
    </div>
</template>
<script>
import '@/assets/css/reset.css'
import '@/assets/css/order.css'
export default {
   created(){
      this.$store.commit('global/setFooter',false)
  },
  beforeDestroy(){
      this.$store.commit('global/setFooter',true)
  }
}
</script>