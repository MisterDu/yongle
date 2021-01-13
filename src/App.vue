<template>
  <div id="app">
    <div id="nav">
   
    </div>
      <router-view/>
      <Footer v-show="isShow"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Navigation/Footer'

export default {
    computed: {
        isShow(){
            return this.$store.state.global.isShowFooter
        }
    },
    components: {
        Footer
    },
    
}
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        
    }
    // body,
    // html {
    //     margin: 0 auto;
    //     text-align: center;
    // }
    
</style>
