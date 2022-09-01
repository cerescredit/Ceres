<template>
  <div class="did">
    <Yheader></Yheader>
    <div class="content">
      <div class="box">
        <img class="iconlogs" src="../../assets/imgs/icon-logs.svg" alt="" />
        <img class="didbg" src="../../assets/imgs/icon-didbg.png" alt="" />
        <p class="title">My DID</p>
        <div class="Yname">
          <p>DID Name</p>
          <p class="active" v-if="isExists">*Username already exists</p>
        </div>
        <input v-if="didDetails.image" class="Yinput" type="text" disabled :value="didDetails.attributes[0].value" maxlength="30" placeholder="Please enter your DID name." name="" id="" />
        <input v-else class="Yinput" type="text" v-model="didName" @input="didNameInput" maxlength="30" placeholder="Please enter your DID name." name="" id="" />
        <p class="title">My portrait</p>
        <div v-if="didDetails.image" class="didImage">
          <img  :src="didDetails.image" alt="">
        </div>
        
        <template v-else>
          <el-upload class="upload-demo" drag action="" :multiple="false" :disabled="uploadLoading" accept="image/*" :on-success="uploadSuccess" :on-error="uploadError" :on-progress="onProgress">

            <van-loading size="20" v-if="uploadLoading" />
            <img v-else-if="imageUrl" :src="imageUrl" alt="">
            <img v-else src="../../assets/imgs/icon-upload.svg" alt="" />
          </el-upload>

          <div class="btn" @click="didMint">
            Confirm
            <van-loading size="20" v-if="loading" /><img v-else src="../../assets/imgs/arrow.svg" alt="" />
          </div>
        </template>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Yheader from "./Yheader.vue";
import Foot from "./foot.vue";
import { commonMixin } from "@/mixins/commonMixin";
export default {
  Type: "did",
  mixins: [commonMixin],
  components: { Yheader, Foot },
  data() {
    return {
      mintFee: '',
      mintedTokenId: '0',
      didName: '',
      time: null,
      isExists: false,
      loading: false,
      didDetails: {},
      imageUrl: '',
      uploadLoading: false,
    };
  },
  created() { },
  methods: {
    refreshData() {
      this.didDetails = {}
      this.didInfos()
    },
    didInfos() {
      this.ercMethods.didInfos(res => {
        console.log(res)
        if (res.code == 200) {
          this.mintFee = res.data._mintBNBFee
          this.mintedTokenId = res.data._mintedTokenId
          if (this.mintedTokenId !== '0') {
            this.getDidDetails()
          }
        }
      })
    },
    getDidDetails(){
      this.ercMethods.didDetails(this.mintedTokenId,res=>{
        if(res.code==200){
          // this.didDetails = JSON.parse(window.atob(res.data.split('base64,')[1]))
          this.didDetails =  JSON.parse(this.b64DecodeUnicode(res.data.split('base64,')[1]))
          console.log(this.didDetails)
        }
      })
    },
    b64DecodeUnicode(str) {
      return decodeURIComponent(atob(str).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    },
    didExists(){
      this.ercMethods.didExists(this.didName,res=>{
        console.log(res)
        if (res.code == 200 && res.data) {
          this.isExists = true
        } else {
          this.isExists = false
        }
      })
    },
    didNameInput() {
      // console.log(!this.didName.trim())
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        this.didExists()
      }, 1000)
    },
    didMint() {
      if (!this.didName.trim() || this.loading || this.isExists) return
      this.loading = true
      this.ercMethods.didMint(this.didName, this.imageUrl, this.mintFee, res => {
        if (res.code == 200) {
          this.receipt(res.data)
        } else {
          this.$toast.fail({
            message: 'Minter failed',
            position: 'top',
          })
          this.loading = false
        }
      })
    },
    receipt(hash) {
      this.ercMethods.receipt(hash, res => {
        if (res.code == 200) {
          if (res.msg) {
            this.$toast.success({
              message: 'Minter successfully',
              position: 'top',
            })
            this.refreshData()
          } else {
            this.$toast.fail({
              message: 'Minter failed',
              position: 'top',
            })
          }
          // console.log(res)
          this.loading = false
        } else {
          setTimeout(() => {
            this.receipt(hash)
          }, 2000)
        }
      })
    },
    uploadSuccess(response, file, fileList) {
      this.uploadLoading = false
      if (response) {
        this.imageUrl = response
      }
    },
    uploadError(err, file, fileList) {
      this.uploadLoading = false
      if (err) {
        this.imageUrl = ''
        this.$toast.fail({
          message: 'upload Error',
          position: 'top',
        })
        // console.log('upload Error')
      }
      // console.log(file)
      // console.log(fileList)
    },
    onProgress() {
      this.uploadLoading = true
    }
  },
  watch: {},
};
</script>
<style lang="less" scoped>
.did {
  // height: 10.48rem;
  background: linear-gradient(87.68deg, #000000 31.53%, #000000 94.36%);
  // border: 1px solid #000000;
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  .content {
    min-height: 10rem;
    background: 
    url("../../assets/imgs/icon-invitation1.png") no-repeat top left,
      url("../../assets/imgs/icon-invitation2.png") no-repeat top 2% right,
      url("../../assets/imgs/icon-invitation3.png") no-repeat left 10% bottom;
      background-size: 100%,30%,30%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    padding: 2rem 0;
    box-sizing: border-box;

    .box {
      width: 6.41rem;
      margin: 0 auto;
      // height: 6.4rem;
      background: url("../../assets/imgs/icon-box1.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 0.36rem;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      padding: 0.6rem;
      box-sizing: border-box;
      position: relative;
      .iconlogs {
        width: 0.74rem;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
      }
      .didbg {
        width: 2.5rem;
        position: absolute;
        bottom: 1rem;
        right: 0.3rem;
      }
      .title {
        font-weight: 600;
        font-size: 0.36rem;
        line-height: 0.44rem;
        color: #ffffff;
        margin-bottom: 0.3rem;
      }
      .Yname {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 0.22rem;
        line-height: 0.27rem;
        color: #ffffff;
        .active {
          font-size: 0.16rem;
          color: #ff4242;
        }
      }
      .Yinput {
        width: 100%;
        height: 0.66rem;
        background: #000000;
        border: 1px solid #4f4f4f;
        border-radius: 0.15rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 0.28rem;
        color: #ffffff;
        margin: 0.2rem 0;
        &::placeholder {
          font-size: 0.22rem;
          color: #423f3f;
        }
      }
      .btn {
        width: 2rem;
        height: 0.6rem;
        margin: 0.4rem auto;
        background: url("../../assets/imgs/btn-bg1.png") top left no-repeat;
        background-size: 100% 100%;
        border-radius: 0.68rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 0.24rem;
        line-height: 0.29rem;
        color: #ffffff;
        cursor: pointer;
        img {
          margin-left: 0.15rem;
          position: relative;
          top: 2px;
        }
      }
    }
  }
  .didImage{
    width: 280px;
    height: 280px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /deep/.el-upload-dragger {
    width: 1.77rem;
    height: 1.77rem;
    background: #000000;
    border: 1px solid #4f4f4f;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/.el-upload-list {
    display: none;
  }
  @media screen and(min--width: 2100px) {
  }
  @media screen and(max-width: 750px) {
  }
  @media screen and(max-width: 600px) {
    height: 13rem;
    .content {
      height: 13rem;
    }
  }
}
</style>