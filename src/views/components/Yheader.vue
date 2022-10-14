<template>
  <div class="header" ref="header" @scroll="_scrollToTop">
    <div class="header-content">
      <img src="../../assets/imgs/logs.svg" alt="" class="logo" />
      <ul class="menu">
        <li @click="_change(item, index)" :class="{ act: actIndex == index }" v-for="(item, index) in menu" :key="index">
          {{ item.desc }}
        </li>
      </ul>
      <div class="right">
        <div @click="Isshow = !Isshow" class="bread" v-if="userInfo.address">
          <template v-if="Ychain.url">
            <img :src="Ychain.url" class="ico" />
            <span>{{Ychain.title}}</span>
          </template>
          <span v-else>网络错误</span>
          <img class="arrow" :class="Isshow && 'active'" src="../../assets/imgs/pull.png" alt="" />
        </div>
        <div class="Connect">
          <span v-if="userInfo.address">{{
            `${userInfo.address.substring(0, 5)}...${
              userInfo.address.substring(
                userInfo.address.length,
                userInfo.address.length - 5
              )
            }`
            }}
          </span>

          <span v-else @click="requestAccount">Connect Wallet</span>
        </div>
        <!-- <div class="Connect" @click="dialogVisible = true">Connect Wallet</div> -->
        <ul v-if="Isshow">
          <li v-for="(item, key) in chain" :key="key" @click="switchNetwork(item)">
            <img :src="item.url" alt="" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
      <img class="iconmenu" @click="show = true" src="../../assets/imgs/icon-menu.png" alt="" />
    </div>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <ul class="connect">
        <li v-for="(item, key) in wallet" :key="key">
          <img :src="item.url" alt="" />
          <p>{{ item.title }}</p>
          <div>{{ item.content }}</div>
        </li>
      </ul>
    </el-dialog>
    <van-popup v-model="show" position="top" round>
      <ul class="Ypopup">
        <li @click="_change(item, index)" v-for="(item, index) in menu" :key="index">
          {{ item.desc }}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Yheader",
  components: {},
  computed: { ...mapState(['userInfo']) },
  data() {
    return {
      show: false,
      Isshow: false,
      actIndex: 0,
      topList: [],
      scrollTop: 0,
      availHeight: 0,
      dialogVisible: false,
      menu: [
        { desc: "Home", tar: "", link: "", router: "/" },
        { desc: "Oracle", tar: "", link: "", router: "Oracle" },
        { desc: "SBT", tar: "", link: "", router: "did" },
        { desc: "SDK", tar: "", link: "https://github.com/cerescredit/SDK", router: "" },
        // { desc: "Intro", tar: "", link: "" },
        // { desc: "Q&A", tar: 11, link: "" },
      ],
      url: [
        {
          photo: require("../../assets/imgs/icon-work1.png"),
        },
        {
          photo: require("../../assets/imgs/icon-work2.png"),
        },
        {
          photo: require("../../assets/imgs/icon-work3.png"),
        },
      ],
      wallet: [
        {
          url: require("../../assets/imgs/icon-wallet1.svg"),
          title: "MetaMask",
          content: "Connect to your MetaMask wallet",
        },
        {
          url: "",
          title: "",
          content: "",
        },
        {
          url: require("../../assets/imgs/icon-wallet2.svg"),
          title: "WalletConnect",
          content: "Connect Rainbow,Trust,Ledger Gnosis,or scan QR code",
        },
        {
          url: "",
          title: "",
          content: "",
        },
        {
          url: require("../../assets/imgs/icon-wallet3.svg"),
          title: "Coinbase",
          content: "Connect to your Coinbase wallet",
        },
      ],
      chain: [
        {
          url: require("../../assets/imgs/icon-chain.svg"),
          title: "ETH",
          chainData: {
            dev: {
              chainId: "0x5",
              chainName: 'ETH',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://goerli.infura.io/v3/'],
              blockExplorerUrls: ['https://goerli.etherscan.io'],
            },
            prod: {
              chainId: "0x1",
              chainName: 'ETH',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://mainnet.infura.io/v3/'],
              blockExplorerUrls: ['https://etherscan.io'],
            }
          }
        },
        {
          url: require("../../assets/imgs/icon-bsc.svg"),
          title: "BSC",
          chainData: {
            dev: {
              chainId: "0x61",
              chainName: 'BSC',
              nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18
              },
              rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
              blockExplorerUrls: ['https://testnet.bscscan.com/'],
            },
            prod: {
              chainId: "0x38",
              chainName: 'BSC',
              nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18
              },
              rpcUrls: ['https://bsc-dataseed.binance.org/'],
              blockExplorerUrls: ['https://bscscan.com/'],
            }
          }
        },
        {
          url: require("../../assets/imgs/icon-Matic.svg"),
          title: "Matic",
          chainData: {
            dev: {
              chainId: "0x13881",
              chainName: 'Matic',
              nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18
              },
              rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
              blockExplorerUrls: ['https://mumbai.polygonscan.com'],
            },
            prod: {
              chainId: "0x89",
              chainName: 'Matic',
              nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18
              },
              rpcUrls: ['https://polygon-rpc.com'],
              blockExplorerUrls: ['https://polygonscan.com'],
            }
          }
        },
        {
          url: require("../../assets/imgs/icon-op.svg"),
          title: "op",
          chainData: {
            dev: {
              chainId: "0x1a4",
              chainName: 'Optimism',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://goerli.optimism.io/'],
              blockExplorerUrls: ['https://optimism.io'],
            },
            prod: {
              chainId: "0xa",
              chainName: 'Optimism',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://mainnet.optimism.io'],
              blockExplorerUrls: ['https://optimistic.etherscan.io'],
            }
          }
        },
        {
          url: require("../../assets/imgs/icon-Zksync.svg"),
          title: "Zksync",
          chainData: {
            dev: {
              chainId: "0x118",
              chainName: 'ZK',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://zksync2-testnet.zksync.dev'],
              blockExplorerUrls: ['https://zksync2-testnet.zkscan.io/'],
            },
            prod: {
              chainId: "0x118",
              chainName: 'ZK',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://zksync2-testnet.zksync.dev'],
              blockExplorerUrls: ['https://zksync2-testnet.zkscan.io/'],
            }
          }
        },
      ],

      Ychain: {},
      timer: null,
      topLists: [],
    };
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
    async requestAccount() {
      let Account = await this.ercMethods.requestAccount()
      if (Account) {
        console.log(Account, window.ethereum.chainId)
        // this.accountsChanged()
        this.login()
      }
    },
    // accountsChanged(){
    //   window.ethereum.on('accountsChanged', res=>{
    //     console.log(res)
    //     this.login()
    //   })
    //   window.ethereum.on('networkChanged', res=>{
    //     console.log(res)
    //     this.login()
    //   })
    // },
    login() {
      if (!window.ethereum.selectedAddress) {
        this.setUserInfo({
          address: '',
          chainId: '',
          isNetwork: ''
        })
        localStorage.removeItem('isLogin')
        return
      }
      let hasChain = false
      for (let i = 0; i < this.chain.length; i++) {
        const item = this.chain[i];
        if (window.location.href.indexOf('ceres.') > 0) {
          if (item.chainData.prod.chainId === window.ethereum.chainId) {
            this.Ychain = item
            hasChain = true
            break
          }
        } else {
          if (item.chainData.dev.chainId === window.ethereum.chainId || item.chainData.prod.chainId === window.ethereum.chainId) {
            this.Ychain = item
            hasChain = true
            break
          }
        }
      }
      if (!hasChain) {
        this.Ychain = {}
        this.setUserInfo({
          address: window.ethereum.selectedAddress,
          chainId: window.ethereum.chainId,
          isNetwork: false
        })
      } else {
        this.setUserInfo({
          address: window.ethereum.selectedAddress,
          chainId: window.ethereum.chainId,
          isNetwork: true
        })
      }

      localStorage.setItem('isLogin', true)
    },
    async switchNetwork(item) {
      if(this.Ychain.title===item.title){
        this.Isshow = false;
        return
      }
      if (item.title === 'ETH') {
        this.$toast.fail('Please switch to ETH network manually')
        return
      }
      let ethereum = window.ethereum;
      let data = item.chainData.dev
      if (window.location.href.indexOf('ceres.') > 0) {
        data = item.chainData.prod
      }
      // console.log(item)
      const tx = await ethereum.request({ method: 'wallet_addEthereumChain', params: [data] }).then(() => {
        this.Isshow = false;
      })
    },
    _change(item, index) {
      this.actIndex = index;
      sessionStorage.setItem("actIndex", index);
      if (item.router) {
        document.documentElement.scrollTop = 0;
        this.$router.push(item.router);
      }
      if (item.link) {
        window.open(item.link);
      }
      if (item.tar) {
        if (this.$route.path != "/") {
          document.documentElement.scrollTop = 0;
          this.$router.push("/");
        }
        setTimeout(() => {
          document.documentElement.scrollTop = localStorage.getItem("topList").split(",")[item.tar];
        }, 50);
      }
      this.show = false;
    },
    _open(link) {
      if (link) {
        window.open(link);
      } else {
        this.$toast.fail(this.$t("messages[0]"))
      }
    },
    _scrollToTop(value) {
      if (
        this.$route.path == "/" &&
        document.documentElement.scrollTop < (window.screen.availHeight * 3) / 5
      ) {
        sessionStorage.setItem("actIndex", 0);
        this.actIndex = 0;
      }
    },
  },
  mounted() {
    if (localStorage.getItem('isLogin')) {
      this.requestAccount()
    }
    if (sessionStorage.getItem("actIndex")) {
      this.actIndex = sessionStorage.getItem("actIndex");
    } else {
      this.actIndex = 0;
    }
    window.addEventListener("scroll", this._scrollToTop);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this._scrollToTop);
  },
  created() { },
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 1rem;
  background: rgba(0, 0, 0, 0);
  padding: 0 1.19rem 0 1.55rem;
  box-sizing: border-box;
  position: absolute;

  z-index: 999;
  &-content {
    width: 100%;
    max-width: 16.5rem;
    height: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 1.71rem;
      height: 0.66rem;
    }
    .right {
      display: flex;
      position: relative;
      .bread {
        // width: 1.5rem;
        padding: 0 0.2rem;
        background: rgba(0, 0, 0, 1);
        border: 1px solid #ffffff;
        border-radius: 13px;
        display: block;
        font-weight: 400;
        font-size: 0.2rem;
        text-align: center;
        color: #ffffff;
        // padding: 0.1rem 0.4rem;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-right: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .arrow {
          margin-left: 0.15rem;
          width: 0.18rem;
        }
        .ico {
          width: 0.3rem;
          margin-right: 4px;
        }
        .active {
          transform: rotate(180deg);
        }
        & > span {
          font-size: 14px;
        }
      }
      .Connect {
        background: #fff;
        font-weight: 400;
        font-size: 0.18rem;
        /* identical to box height */
        text-align: center;
        color: #010101;
        border-radius: 0.5rem;

        span {
          display: block;
          padding: 0.1rem 0.4rem;
          cursor: pointer;
        }
      }
      ul {
        width: 1.5rem;
        background: rgba(0, 0, 0, 1);
        border: 1px solid #ffffff;
        border-radius: 13px;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50px;
        padding: 0.1rem 0.2rem;
        box-sizing: border-box;
        li {
          display: flex;
          align-items: center;
          margin-top: 0.1rem;
          cursor: pointer;
          img {
            width: 23px;
          }
          p {
            font-weight: 500;
            font-size: 12px;
            color: #ffffff;
            margin-left: 0.15rem;
          }
        }
      }
    }

    .menu {
      height: 0.66rem;
      width: calc(100% - 7rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0rem 0 3rem;
      box-sizing: border-box;
      li {
        font-size: 0.2rem;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        cursor: pointer;
        padding: 0 0.08rem;
        white-space: nowrap;
        color: #fff;
        &:hover {
          color: #51bafb;
        }
      }
      .act {
        color: #51bafb;
      }
      .language {
        display: flex;
        align-items: center;
        margin-left: 1rem;
        img {
          width: 0.14rem;
          height: 0.14rem;
          margin-left: 0.1rem;
        }
        .drop-com {
          position: absolute;
          top: 1.2rem;
          width: 1.68rem;
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0px 4px 8px 0px rgba(49, 128, 238, 0.05);
          border-radius: 16px;
          z-index: 8;
          height: 0;
          overflow: hidden;
          transition: 0.4s;
          -webkit-transition: 0.4s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 0rem;
          li {
            width: 100%;
            height: 0.48rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.16rem;
            padding: 0 4px;
            text-align: center;
            box-sizing: border-box;
            cursor: pointer;
            color: #eaf9ec;
            &:hover {
              // background: rgba(255, 255, 255, 0.4);
              color: #71b6ff;
            }
          }
        }
        .yyy {
          display: none;
        }
        &:hover {
          .xxx {
            display: none;
          }
          .yyy {
            display: block;
          }
          .drop-com {
            height: 100px;
          }
        }
      }
    }
    .iconmenu {
      width: 0.42rem;
      display: none;
    }
  }
}
.Ypopup {
  padding: 20px 0;
  box-sizing: border-box;
  li {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 49px;
    /* identical to box height */
    text-align: center;
    color: #000000;
  }
}
.connect {
  display: flex;
  align-items: center;
  li {
    width: 4rem;
    height: 2.72rem;
    border-radius: 0.32rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    box-sizing: border-box;
    p {
      font-weight: 700;
      font-size: 0.24rem;
      line-height: 0.8rem;
      color: #111010;
    }
    div {
      font-weight: 400;
      font-size: 0.18rem;
      color: #9d9d9d;
      text-align: center;
    }
    &:nth-child(2n) {
      width: 1px;
      padding: 0;
      background: #cac7c7;
      height: 2.4rem;
      margin: 0 0.1rem;
    }
    &:hover {
      background: #f2f2f2;
    }
  }
}
@media screen and(max-width: 1440px) {
  .header {
    padding: 0 0.4rem;
    &-content ul {
      width: calc(100% - 3.2rem);
    }
  }
}
@media screen and(min-width: 800px) {
  .connect {
    li {
      flex-direction: column;
    }
  }
}
@media screen and(max-width: 800px) {
  .header {
    padding: 0 0.4rem;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    &-content {
      .menu {
        display: none;
      }
      .iconmenu {
        display: block;
      }
    }
  }
  .connect {
    flex-direction: column;
    li {
      width: 3rem;
      height: 1rem;

      justify-content: flex-start;

      img {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.2rem;
      }

      div {
        display: none;
      }
      &:nth-child(2n) {
        display: none;
      }
      &:hover {
        background: #f2f2f2;
      }
    }
  }
}
@media screen and(max-width: 800px) {
  .header {
    &-content {
      .right {
        ul {
          top: 35px;
          width: 1.9rem;
        }
        .bread {
          margin-right: 0.2rem;
        }
      }
    }
  }
}
/deep/.el-dialog__header {
  display: none;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  display: none;
}
</style>