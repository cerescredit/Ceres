<template>
  <div class="Oracle">
    <Yheader></Yheader>
    <div class="invitation">
      <div class="box">
        <img class="iconlogs" src="../../assets/imgs/icon-logs.svg" alt="">
        <p class="title">You can bind the invitation relationship here or invite your friends to join.</p>
        <p class="title">If the invitation relationship is successfully bound. </p>
        <p class="title">you will be rewarded with tokens.</p>
        <template v-if="isBoundInviter">
          <input type="text" :value="`Your inviter:${youParent.substring(0, 15)}...${
              youParent.substring(
                youParent.length,
                youParent.length - 15
              )
            }`" disabled>
        </template>
        <template v-else>
          <input type="text" v-model="parentAddress" placeholder="Enter inviter address">
          <div class="btn btns" @click="bindParent">Binding inviter <van-loading size="20" v-if="loading" /><img v-else src="../../assets/imgs/arrow.svg" alt=""></div>
        </template>
        
        <div class="nvitelink" >{{inviteLink.substring(0, 10) + ' ****** ' + inviteLink.substring(inviteLink.length - 10, inviteLink.length)}}</div>
        <div class="btn btns"  v-clipboard:copy="inviteLink" v-clipboard:success="copySuccess" v-clipboard:error="copyError">Copy invite link </div>
        <!-- <div class="btn"  @click="$router.push('details')">Invite Details <img src="../../assets/imgs/icon-arrow.svg" alt=""></div> -->
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import { commonMixin } from "@/mixins/commonMixin";
import Yheader from "./Yheader.vue";
import Foot from "./foot.vue";
export default {
  name: "Oracle",
  components: { Yheader, Foot },
  mixins: [commonMixin],
  data() {
    return {
      inviteLink: '',
      isBoundInviter:false,
      youParent:'',
      parentAddress:'',
      loading:false
    };
  },
  created() {
    console.log()
    if(this.$route.query.inviteCode){
      localStorage.setItem('inviteCode',this.$route.query.inviteCode)
    }
    if(localStorage.getItem('inviteCode')){
      this.parentAddress = localStorage.getItem('inviteCode')
    }
  },
  methods: {
    refreshData(){
      console.log('refreshData')
      this.inviteLink = window.location.origin+'/#/Oracle?inviteCode='+this.userInfo.address
      this.ercMethods.getParentOf(res=>{
        console.log(res)
        if(res.code==200&&res.data!='0x0000000000000000000000000000000000000000'){
          this.youParent = res.data
          this.isBoundInviter = true
        }else{
          this.isBoundInviter = false
        }
      })
    },
    bindParent () { // 绑定邀请人
      if(this.verify()) return
      if (this.loading) {
          return false
      }
      if (this.parentAddress.indexOf('0x') !== 0 || this.parentAddress.length !== 42) {
          this.$toast.fail('Please enter the correct inviter address')
          return false
      }
      if (this.parentAddress.toLowerCase() === this.userInfo.address.toLowerCase() ) {
        this.$toast.fail('Cannot bind oneself as the superior address')
          // this.$toast.fail({
          //   message:'Cannot bind oneself as the superior address',
          //   position: 'top',
          //   duration:'200000'
          // })
        return false
      }

      // 判断当前地址是否已经绑定了上级, 没有绑定上级才可进行下一步
      if (this.isBoundInviter) {
        this.$toast.fail('The current address has been bound to the superior')
        return false
      }

      this.loading = true
      // 查询自己是不是当前输入地址的父级
      this.ercMethods.getParentOf(res=>{// 是true则证明是当前输入地址的父级，不能再绑定了
        if(res.code==200){
            if(res.data.toLowerCase()!==this.userInfo.address.toLowerCase()){
                this.ercMethods.addRelation(this.parentAddress,res=>{
                    // console.log(res)
                    if(res.code==200){
                        this.receipt(res.data)
                    }else{
                      this.$toast.fail('Binding failed')
                      this.loading = false
                    }
                })
            }else{
              this.$toast.success('Bind successfully')
              this.loading = false
            }
        }else{
          this.$toast.fail('Binding failed')
          this.loading = false
        }
          
      },this.parentAddress)
    },
    receipt(hash){
        this.ercMethods.receipt(hash,res=>{
            // console.log(res)
            if(res.code == 200){
                if(res.msg){
                  this.$toast.success('Bind successfully')
                  this.refreshData()
                }else{
                  this.$toast.fail('Binding failed')
                }
                // console.log(res)
                this.loading = false
            }else{
                setTimeout(()=>{
                    this.receipt(hash)
                },2000)
            }
        })
    },
    
  },
 
};
</script>
<style lang="less" scoped>
.Oracle {
  // height: 10.48rem;
  background: linear-gradient(87.68deg, #000000 31.53%, #000000 94.36%);
  // border: 1px solid #000000;
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  .invitation {
    height: 10rem;
    background: url("../../assets/imgs/icon-invitation1.png") no-repeat top left,
      url("../../assets/imgs/icon-invitation2.png") no-repeat top 1rem right,
      url("../../assets/imgs/icon-invitation3.png") no-repeat left 5rem bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 8.98rem;
      // height: 6rem;
      background: url("../../assets/imgs/icon-box.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 0.36rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconlogs {
        width: 0.74rem;
        margin-bottom: 0.4rem;
      }
      .title {
        font-weight: 400;
        font-size: 0.2rem;
        line-height: 0.24rem;
        text-align: center;
        color: #ffffff;
      }
      input {
        width: 5.27rem;
        height: 0.66rem;
        background: #000000;
        border: 1px solid #4f4f4f;
        border-radius: 15px;
        padding: 0 0.2rem;
        font-weight: 400;
        font-size: 0.22rem;
        line-height: 0.27rem;
        color: #ffffff;
        margin: 0.3rem 0;
      }
      .btn {
        width: 2.5rem;
        height: 0.5rem;
        margin: 0.2rem 0;
        background: #ffffff;
        border: 2px solid #000000;
        border-radius: 0.68rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 0.24rem;
        line-height: 0.29rem;
        color: #000000;
        cursor: pointer;
        img {
          margin-left: 0.15rem;
          position: relative;
          top: 2px;
        }
      }
      .btns {
        height: 0.58rem;
        background: url("../../assets/imgs/btn-bg1.png") top left no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        border: 0;
      }
      .nvitelink {
        width: 5.27rem;
        height: 0.66rem;
        background: #000000;
        border: 1px solid #4f4f4f;
        border-radius: 15px;
        margin: 0.3rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media screen and(min--width: 2100px) {
  }
  @media screen and(max-width: 750px) {
  }
  @media screen and(max-width: 600px) {
    height: 13rem;
    .invitation {
      height: 13rem;
      .box {
        width: 6.55rem;
        height: 7rem;

        .btn {
          img {
            width: 0.23rem;
          }
        }
      }
    }
  }
}
</style>