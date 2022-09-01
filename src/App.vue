<template>
  <div id="app">
    <router-view v-if="isShow" />
  </div>
</template>
<script>
import { mapMutations,mapState } from "vuex";
export default {
  provide() {
    return {
      reload: this.reload,
      time:null
    };
  },
  data() {
    return { isShow: true };
  },
  computed: { ...mapState(['userInfo']) },
  mounted() { 
    if(window.ethereum){
      window.ethereum.on('accountsChanged', res=>{
        console.log(res)
        this.getNetwork()
      })
      // window.ethereum.on('networkChanged', res=>{
      //   // console.log(this.$children[0].$children)
      //   this.$children[0].$children[0].login()
      // })
    }
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
    getNetwork(){
      clearTimeout(this.time)
      let chainId = window.ethereum.chainId
      if(chainId!=this.userInfo.chainId){
        this.$children[0].$children[0].login()
      }
      this.time = setTimeout(()=>{
        this.getNetwork()
      },2000)
    }
  },
  watch:{
    "userInfo.address": {
      deep: true,
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue)
        if(newValue){
          this.getNetwork()
        }else{
          clearTimeout(this.time)
        }
      }
    }
  }
};
</script>
<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-size: 0.24rem;
  line-height: 0.28rem;
}
</style>
