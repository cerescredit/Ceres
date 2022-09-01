
import { mapMutations,mapState } from "vuex";
export const commonMixin = {
    data() {
        return {
          refreshLoading:false,
        }
    },
    created() {
      this.refreshLoading = false
    },
    computed: { ...mapState(['userInfo']) },
    mounted() {
      if(this.userInfo.isNetwork){
        this.refreshLoading = true
        setTimeout(()=>{
          this.refreshLoading = false
        },500)
        this.refreshData();
      }
    },
    methods: {
        refreshData(){
        },
        verify(){
          if(!this.userInfo.address){
            this.$toast.fail( 'Please connect the wallet first' )
            return true
          }else if(!this.userInfo.isNetwork){
            this.$toast.fail( 'Network error, please switch network' )
            return true
          }
          return false
        },
        copySuccess() {
          this.$toast.success(this.$t('Copy succeeded'))
        },
        copyError() {
          this.$toast.fail(this.$t('Copy failed'))
        }
    },
    watch:{
        "userInfo.chainId": {
          deep: true,
          handler: function (newValue, oldValue) {
            if(newValue){
              if(!this.userInfo.isNetwork||!this.userInfo.address||this.refreshLoading){
                return
              }
              this.refreshLoading = true
              setTimeout(()=>{
                this.refreshLoading = false
              },500)
              this.refreshData()
            }
           
          }
        },
        "userInfo.address": {
          deep: true,
          handler: function (newValue, oldValue) {
            if(!this.userInfo.isNetwork||!this.userInfo.address||this.refreshLoading){
              return
            }
            this.refreshLoading = true
            setTimeout(()=>{
              this.refreshLoading = false
            },500)
            this.refreshData()
          }
        }
    }
}