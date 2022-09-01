<template>
  <div class="home">
    <Yheader></Yheader>
    <div class="parts">
      <div class="left">
        <p>Decentralized</p>
        <p>Credit Protocol</p>
        <div class="Copywriting">A trusted infrastructure</div>
        <p style="font-size: 0.3rem; line-height: 0.37rem">
          Based on DID & Oracle
        </p>
        <div class="btn">
          <div class="btns" @click="Jump('Oracle',1)">
            Oracle <img src="../assets/imgs/arrow.svg" alt="" />
          </div>
          <div class="btns btny" @click="Jump('did',2)">
            Mint DID <img src="../assets/imgs/icon-arrow.svg" alt="" />
          </div>
        </div>
        <div class="last">Learn more about Ceres.</div>
      </div>
    </div>
    <div class="parts1" :class="topList[0] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts1">
      <img class="imgtitle Animation" src="../assets/imgs/title.png" alt="" />
      <img class="imgleft Animationleft" src="../assets/imgs/parts2-icon1.png" alt="" />
      <img class="imgright Animationright" src="../assets/imgs/parts2-icon2.png" alt="" />
      <p class="Animation">
        <span>Ceres</span> is Infrastructure of web 3.0 decentralized credit
        system
      </p>
    </div>
    <div class="parts2" :class="topList[1] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts2">
      <div class="Writtenby Animation">
        Written by <img src="../assets/imgs/parts2-title.png" alt="" />
      </div>
      <p class="title Animation">What can Ceres offer?</p>
      <p class="titles Animation">
        Ceres can offer oracle protocol,DID,Credit System
      </p>
      <ul class="list">
        <li class="lists Animation" style="transition-delay: 0.1s">
          <img src="../assets/imgs/icon-title1.svg" alt="" />
          <p class="LItitle">DID</p>
          <div class="LIcontent">
            Web 3.0 identity pass, constitute a decentralized reputation system,
            support to decentralized credit system.
          </div>
          <div class="imgs">
            <img src="../assets/imgs/icon-did1.svg" alt="" />
            <img src="../assets/imgs/icon-did2.svg" alt="" />
            <img src="../assets/imgs/icon-did3.png" alt="" />
          </div>
          <div class="btn Ybtn" @click="Jump('did',2)">
            Learn More<img src="../assets/imgs/icon-arrow.svg" alt="" />
          </div>
        </li>
        <li class="lists Animation" style="transition-delay: 0.2s">
          <p class="LItitle active">Oracle Protocol</p>
          <div class="LIcontent actives">
            Decentralized and open user operation tools for Dapps developers,
            avoid Sybil attacks. Record data of more than 200,000 addresses and
            relationship between these addresses.
          </div>
          <p class="Contain">Contain：</p>
          <ul>
            <li><img src="../assets/imgs/icon-yes.svg" alt="" />Recording</li>
            <li><img src="../assets/imgs/icon-yes.svg" alt="" />Querying</li>
            <li><img src="../assets/imgs/icon-yes.svg" alt="" />Indexing</li>
            <li><img src="../assets/imgs/icon-yes.svg" alt="" />Distributing</li>
            <li><img src="../assets/imgs/icon-yes.svg" alt="" />Rewarding</li>
          </ul>
          <div class="btn" @click="Jump('Oracle',1)">
            Learn More<img src="../assets/imgs/icon-arrow.svg" alt="" />
          </div>
        </li>
        <li class="lists Animation" style="transition-delay: 0.3s">
          <div class="top">
            <img src="../assets/imgs/icon-title2.svg" alt="" />
            <p class="LItitle Yactive">Decentralized Credit System</p>
            <div class="LIcontent" style="color: #ffffff">
              Decentralized credit score Default penalty mechanism
            </div>
            <div class="btn">
              Coming Soon<img src="../assets/imgs/icon-arrow.svg" alt="" />
            </div>
          </div>
          <div class="bottom">
            <img src="../assets/imgs/doubt.svg" alt="" />
            <p class="LItitle act">More info</p>
            <div class="LIcontent">Check more info about Ceres</div>
            <div class="Lookhere">Look here ></div>
          </div>
        </li>
      </ul>
      <div class="btn btns">
        Watch Video <img src="../assets/imgs/arrow.svg" alt="" />
      </div>
    </div>
    <div class="parts3" :class="topList[2] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts3">
      <ul class="Animation">
        <li :class="topList[3] > topList[2]? topList[3]  - scrollTop < (availHeight * 3) / 5 && 'YAnimationS':topList[3] + topList[2] - scrollTop < (availHeight * 3) / 5 && 'YAnimationS'" ref="parts4">
          <div class="YAnimation" style="transition-delay: 0.1s">
            <p class="title">Oracle protocol</p>
            <div class="content">
              Based on the oracle protocol, Ceres provides data query and
              indexing services. The oracle protocol has been announced on the
              official website, and application developers can call and query
              through technical documents.
            </div>
            <div class="btns" @click="Jump('Oracle',1)">
              Learn More<img src="../assets/imgs/arrow.svg" alt="" />
            </div>
          </div>
          <img class="right YAnimation" style="transition-delay: 0.3s" src="../assets/imgs/parts3-right1.png" alt="" />
        </li>
        <li :class="topList[4] > topList[2]? topList[4]  - scrollTop < (availHeight * 3) / 5 && 'YAnimationS':topList[4] + topList[2] - scrollTop < (availHeight * 3) / 5 && 'YAnimationS'" ref="parts5">
          <img class="right pcright YAnimation" style="transition-delay: 0.1s" src="../assets/imgs/parts3-right2.png" alt="" />
          <div class="left YAnimation" style="transition-delay: 0.3s">
            <p class="title">Decentralized identity(DID)</p>
            <div class="content contents">
              User Cast into DID with names,pictures and etc;
            </div>
            <div class="content">
              The pass of decentralized reputation system.
            </div>
            <div class="btns" @click="Jump('did',2)">
              Mint DID<img src="../assets/imgs/arrow.svg" alt="" />
            </div>
            <p class="Small">*Coming soon</p>
          </div>
          <img class="right YAnimation h5right" style="transition-delay: 0.1s" src="../assets/imgs/parts3-right2.png" alt="" />
        </li>
        <li :class="topList[5] > topList[2]? topList[5]  - scrollTop < (availHeight * 3) / 5 && 'YAnimationS':topList[5] + topList[2] - scrollTop < (availHeight * 3) / 5 && 'YAnimationS'" ref="parts6">
          <div class="YAnimation" style="transition-delay: 0.1s">
            <p class="title">Decentralized Credit system</p>
            <div class="content">
              <p class="active">Decentralized credit score mechanism:</p>
              Behaviors on decentralized the social graph and others decide and
              influence Decentralized credit score for users.
            </div>
            <div class="content">
              <p class="active">Default punishment mechanism:</p>
              when the user defaults, the future revenue from the decentralized
              social graph will be terminated and used to pay back.
            </div>
            <div class="btns">
              coming soon<img src="../assets/imgs/arrow.svg" alt="" />
            </div>
          </div>
          <img class="rights YAnimation" style="transition-delay: 0.3s" src="../assets/imgs/parts3-right3.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="parts7 Animation" :class="topList[6] - scrollTop < (availHeight * 3) / 5 && 'Animations'" ref="parts7">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="Subscribe">
        <div class="Subscribe-title">Subscribe Ceres</div>
        <p>Learn more about Ceres</p>
        <div class="mailbox">
          <input type="text" v-model="input" placeholder="Email" />
          <div @click="SignUp">Sign Up</div>
        </div>
        <p v-if="Subscription">*Thank you for subscription!</p>
      </div>
    </div>
    <div class="parts8 " :class="topList[7] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts8">
      <p class="titile Animation">Ceres SDK</p>
      <div class="content Animation">
        Basic services are complete. The relationship graph can now
      </div>
      <div class="content Animation">
        be used by developers for more advanced application.
      </div>
      <el-carousel class="Animation" indicator-position="outside" :autoplay="false" arrow="never" @change="MyChange">
        <el-carousel-item :class="!SDKkey&&topList[7] - scrollTop < (availHeight * 3) / 5&&'Ytypewriter'">
          <div class="sdk">
            <p class="sdktitle">This is Our SDK</p>
            <ul>
              <li>
                <div class="circular"></div>
                <div>
                  <p class="typewriter"># Ceres development document</p>
                  <p class="typewriter" style="animation-delay: 3s;">## instructions</p>
                </div>
              </li>
              <li>
                <div class="circular"></div>
                <div>
                  <p class="typewriter" style="animation-delay: 6s;">import 'ICeresRelation.sol'</p>
                </div>
              </li>
              <li class="active">
                <div class="circular"></div>
                <div>
                  <p class="typewriter" style="animation-delay: 9s;">## functions</p>
                  <p class="typewriter" style="animation-delay: 12s;">### **monthScale**</p>
                  <p class="typewriter" style="animation-delay: 15s;">- Returns how many seconds a month equals</p>
                  <p class="typewriter" style="animation-delay: 18s;">#### Parameters</p>
                  <p class="active typewriter" style="animation-delay: 21s;">- none</p>
                  <p class="typewriter " style="animation-delay: 24s;">#### Returns</p>
                  <p class="typewriter " style="animation-delay: 27s;">- `uint256` - Seconds of a month</p>
                  <p class="typewriter" style="animation-delay: 30s;">{{ sdk }}</p>
                </div>
              </li>
            </ul>
          </div>
        </el-carousel-item>
        <el-carousel-item :class="SDKkey&&topList[7] - scrollTop < (availHeight * 3) / 5&&'Ytypewriter'">
          <div class="sdk">
            <p class="sdktitle">This is Our SDK</p>
            <ul>
              <li>
                <div class="circular"></div>
                <div>
                  <p class="typewriter">### **maxStakeAmount**</p>
                  <p class="typewriter" style="animation-delay: 3s;">- Query the maximum quantity that can be pledged.</p>
                </div>
              </li>
              <li>
                <div class="circular"></div>
                <div>
                  <p class="typewriter" style="animation-delay: 6s;">When the pledge reaches this quantity, it is considered</p>
                  <p class="typewriter" style="animation-delay: 9s;">as long-term availability</p>
                </div>
              </li>
              <li class="active">
                <div class="circular"></div>
                <div>
                  <p class="typewriter" style="animation-delay: 12s;">#### Parameters</p>
                  <p class="typewriter" style="animation-delay: 15s;">- none</p>
                  <p class="typewriter" style="animation-delay: 18s;">#### Returns</p>
                  <p class="typewriter" style="animation-delay: 21s;">- `uint256` - Maximum quantity that can be pledged</p>
                  <p class="typewriter" style="animation-delay: 24s;">{{ sdk }}</p>
                  <p class="active typewriter" style="animation-delay: 27s;">### **globalTrial**</p>
                  <p class="typewriter" style="animation-delay: 30s;">- Query global trial time ，unit：second</p>
                  <p class="typewriter" style="animation-delay: 33s;">#### Parameters</p>
                  <p class="typewriter" style="animation-delay: 36s;">- none</p>
                  <p class="typewriter" style="animation-delay: 39s;">#### Returns</p>
                </div>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="parts9 Animation" :class="topList[8] - scrollTop < (availHeight * 3) / 5 && 'Animations'" ref="parts9">
      <p class="titile">How does Ceres work？</p>
      <div class="content">
        Ceres consists of Oracle and DID,and finally provides credit system.
      </div>
      <div class="content">
        All based on decentralized web3.0 infrastructure.
      </div>
      <el-carousel indicator-position="outside" arrow="never">
        <el-carousel-item v-for="(item, key) in url" :key="key">
          <img class="workimg" :src="item.photo" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="parts10" :class="topList[9] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts10">
      <!-- <p class="titile Animation">NEWS</p>
      <div class="switch Animation">
        <img @click="swipeNext" src="../assets/imgs/upper-s.png" alt="" />
        <img @click="swipePrev" src="../assets/imgs/lower-s.png" alt="" />
      </div>
      <van-swipe ref="swipeBox" class="myswipe Animation" :loop="false" :width="Ywidth">
        <van-swipe-item>
          <div class="cardbox">
            <img src="../assets/imgs/icon-new.png" alt="" />
            <div class="Copywriting">
              <p>Rewards For DAO governance</p>
              <div>You can get NFT cards</div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="cardbox">
            <img src="../assets/imgs/icon-new1.png" alt="" />
            <div class="Copywriting">
              <p>Rewards For DAO governance</p>
              <div>You can get NFT cards</div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="cardbox">
            <img src="../assets/imgs/icon-new2.png" alt="" />
            <div class="Copywriting">
              <p>Rewards For DAO governance</p>
              <div>You can get NFT cards</div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="cardbox">
            <img src="../assets/imgs/icon-new3.png" alt="" />
            <div class="Copywriting">
              <p>Rewards For DAO governance</p>
              <div>You can get NFT cards</div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe> -->
    </div>
    <div class="parts11" :class="topList[10] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts11">
      <div class="top Animation">
        <!-- <p v-for="(item, key) in 5" :key="key">Portfolio</p> -->
        <img src="../assets/imgs/Cooperation1.svg" alt="">
        <img src="../assets/imgs/Cooperation2.svg" alt="">
        <img src="../assets/imgs/Cooperation3.svg" alt="">
        <img src="../assets/imgs/Cooperation4.svg" alt="">
        <img src="../assets/imgs/Cooperation5.svg" alt="">
      </div>
      <div class="bottom Animation"></div>
    </div>
    <div class="parts12" :class="topList[11] - scrollTop < (availHeight * 3) / 5 && 'show'" ref="parts12">
      <!-- <p class="title Animation">Q&A</p>
      <div class="content Animation">More About Ceres</div>
      <el-collapse class="Animation">
        <el-collapse-item title="What does Ceres do？" name="1">
          <div>
            Provide readable user identities for native DApps, and a more
            human-acceptable user system. Provide decentralized user systems and
            decentralized data access services for traditional centralized
            applications
          </div>
        </el-collapse-item>
        <el-collapse-item title="What does Ceres do？" name="2">
          <div>
            Provide readable user identities for native DApps, and a more
            human-acceptable user system. Provide decentralized user systems and
            decentralized data access services for traditional centralized
            applications
          </div>
        </el-collapse-item>
        <el-collapse-item title="What does Ceres do？" name="3">
          <div>
            Provide readable user identities for native DApps, and a more
            human-acceptable user system. Provide decentralized user systems and
            decentralized data access services for traditional centralized
            applications
          </div>
        </el-collapse-item>
        <el-collapse-item title="What does Ceres do？" name="4">
          <div>
            Provide readable user identities for native DApps, and a more
            human-acceptable user system. Provide decentralized user systems and
            decentralized data access services for traditional centralized
            applications
          </div>
        </el-collapse-item>
      </el-collapse> -->
      <div class="Startusing" :class="
          topList[12] - scrollTop < availHeight * 3 / 5 &&
          'YAnimationS'
        " ref="parts13">
        <p class="content YAnimation">Start using</p>
        <p class="content contents YAnimation">
          Ceres today. <img src="../assets/imgs/Startusing.png" alt="" />
        </p>
        <ul class="YAnimation">
          <li class="Protocol Yhover" @click="Jump('Oracle',1)">
            <div class="imgs"></div>
            <div class="right">
              <p>Oracle Protocol</p>
              <div>Check my link</div>
            </div>
          </li>
          <li class="DID Yhover" @click="Jump('did',2)">
            <div class="imgs"></div>
            <div class="right">
              <p>DID</p>
              <div>Learn more</div>
            </div>
          </li>
          <li class="CreditSystem Yhover">
            <div class="imgs"></div>
            <div class="right">
              <p>Credit System</p>
              <div>Coming soon</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Yheader from "./components/Yheader.vue";
import Foot from "./components/foot.vue";
export default {
  name: "Home",
  components: { Foot, Yheader },
  inject: ["reload"],
  data() {
    return {
      sdk: "<h1></h1>",
      Isshow: false,
      langshow: false,
      actIndex: 0,
      topList: [],
      scrollTop: 0,
      availHeight: 0,
      dialogVisible: false,
      url: [
        {
          photo: require("../assets/imgs/icon-work1.png"),
        },
        {
          photo: require("../assets/imgs/icon-work2.png"),
        },
        {
          photo: require("../assets/imgs/icon-work3.png"),
        },
      ],
      wallet: [
        {
          url: require("../assets/imgs/icon-wallet1.svg"),
          title: "MetaMask",
          content: "Connect to your MetaMask wallet",
        },
        {
          url: "",
          title: "",
          content: "",
        },
        {
          url: require("../assets/imgs/icon-wallet2.svg"),
          title: "WalletConnect",
          content: "Connect Rainbow,Trust,Ledger Gnosis,or scan QR code",
        },
        {
          url: "",
          title: "",
          content: "",
        },
        {
          url: require("../assets/imgs/icon-wallet3.svg"),
          title: "Coinbase",
          content: "Connect to your Coinbase wallet",
        },
      ],
      chain: [
        {
          url: require("../assets/imgs/icon-bsc.svg"),
          title: "bsc",
        },
        {
          url: require("../assets/imgs/icon-Matic.svg"),
          title: "Matic",
        },
        {
          url: require("../assets/imgs/icon-op.svg"),
          title: "op",
        },
        {
          url: require("../assets/imgs/icon-Zksync.svg"),
          title: "Zksync",
        },
      ],
      Ychain: "bsc",
      SDKkey: 0,
      Ywidth: 0,
      input: "",
      Subscription: false
    };
  },
  methods: {
    _change(item, index) {
      this.actIndex = index;
      sessionStorage.setItem("actIndex", index);
      if (item.link) {
        window.open(item.link);
      }
      if (this.show) {
        this.show = false;
      }
      if (!item.tar) return;
      let pos = document.getElementById(item.tar).offsetTop - 120;
      if (item.tar) {
        this.$nextTick(() => {
          window.scrollTo(0, pos);
        }, 500);
      }
    },
    _open(link) {
      if (link) {
        window.open(link);
      } else {
        this.$toast.fail(this.$t("messages[0]"));
      }
    },
    Jump(item, index) {
      document.documentElement.scrollTop = 0;
      sessionStorage.setItem("actIndex", index);
      this.$router.push(item);
    },
    setScrollTop(value) {
      document.documentElement.scrollTop = this.$refs[value].offsetTop;
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(this.scrollTop)
    },
    // 切换
    swipePrev() {
      this.$refs.swipeBox.next();
    },
    swipeNext() {
      this.$refs.swipeBox.prev();
    },
    MYchain(item) {
      this.Ychain = item.title;
      this.Isshow = false;
    },
    MyChange(index) {
      this.SDKkey = index
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    SignUp() {
      var szReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

      if (!szReg.test(this.input)) {
        this.$toast.fail({
          message: 'Please enter correct email',
          position: 'top',
        })
      } else {
        this.Subscription = true
        this.input = ''
        this.$toast.success({
          message: 'Subscription succeeded',
          position: 'top',
        })
      }
    }
  },
  mounted() {
    setTimeout(() => {
      for (let i = 0; i < 13; i++) {
        const item = this.$refs["parts" + (i + 1)];
        this.topList.push(item.offsetTop);
      }
      localStorage.setItem("topList", this.topList);
      this.availHeight = window.screen.availHeight;
    }, 1000);
    window.addEventListener("scroll", this.handleScroll);
    if (!this._isMobile()) {
      this.Ywidth = 400
    }

  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  // background: #f1f1f1;
  font-family: "Montserrat";
  font-style: normal;
  .act {
    color: #71b6ff;
  }
  .parts {
    position: relative;
    height: 10.48rem;
    background: url("../assets/imgs/parts-bg1.svg") top left no-repeat,
      url("../assets/imgs/parts-right.png") top right no-repeat, #000;
    background-size: contain;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      color: #ffffff;
      white-space: nowrap;
      position: relative;
      left: -4rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      p {
        font-weight: 700;
        font-size: 0.7rem;
        line-height: 1rem;
      }
      .Copywriting {
        font-family: "Meddon";
        font-size: 0.4rem;
        line-height: 0.84rem;
      }
      .btn {
        display: flex;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 0.24rem;
        line-height: 0.29rem;
        color: #ffffff;
        margin: 0.3rem 0;
        cursor: pointer;
        .btns {
          width: 1.82rem;
          height: 0.63rem;
          border-radius: 0.68rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("../assets/imgs/btn-bg.png") top left no-repeat,
            #000000;
          background-size: 100% 100%;
          img {
            margin-left: 0.15rem;
            position: relative;
            top: 2px;
          }
          &:hover {
            transform: scale(1.1); //原本的图片的大小，图片原来的大小不变
            transition: all 0.6s;
            img {
              transform: translateX(10px);
              transition: all 0.8s;
            }
          }
        }
        .btny {
          background: url("") top left no-repeat, #fff;
          color: #010101;
          margin-left: 0.3rem;
        }
      }
      .last {
        font-size: 0.15rem;
        line-height: 0.18rem;
        color: #ffffff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .parts1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 7rem;
    position: relative;
    overflow: hidden;
    // background: url("../assets/imgs/parts2-icon1.png") no-repeat top 110px left,
    //   url("../assets/imgs/parts2-icon2.png") no-repeat top 110px right;
    .imgtitle {
      width: 9rem;
      margin: 0.8rem 0;
    }
    .imgleft {
      width: 2.3rem;
      position: absolute;
      top: 1.1rem;
      left: 0;
    }
    .imgright {
      width: 2.52rem;
      position: absolute;
      top: 1.3rem;
      right: 0;
    }
    p {
      width: 9rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 0.64rem;
      line-height: 0.78rem;
      text-align: center;
      color: #010101;
      span {
        background: linear-gradient(90deg, #51bafb -3.1%, #0af2b3 29.5%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
  .parts2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    color: #565656;
    .Writtenby {
      width: 3.16rem;
      height: 0.68rem;
      background: #ededed;
      border-radius: 0.39rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.24rem;
      line-height: 0.29rem;

      img {
        margin-left: 0.2rem;
        width: 0.93rem;
      }
    }
    .title {
      font-size: 0.64rem;
      line-height: 0.78rem;
      color: #010101;
      margin: 0.3rem 0;
    }
    .titles {
      font-weight: 400;
      font-size: 0.32rem;
      line-height: 0.39rem;
      color: #010101;
    }
    .list {
      display: flex;
      margin-top: 0.7rem;
      .lists {
        width: 3.77rem;
        height: 7.24rem;
        background: #ffffff;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
        border-radius: 0.48rem;
        padding: 0.5rem;
        box-sizing: border-box;
        .LItitle {
          font-size: 0.36rem;
          line-height: 0.44rem;
          color: #000000;
          text-align: center;
          margin: 0.3rem 0;
        }
        .LIcontent {
          font-weight: 400;
          font-size: 0.2rem;
          line-height: 0.24rem;
          color: #000000;
        }
        .Contain {
          font-weight: 400;
          font-size: 0.2rem;
          line-height: 0.15rem;
          color: #ffffff;
          margin: 0.4rem 0 0.25rem;
        }
        .imgs {
          height: 1.4rem;
          position: relative;
          margin-top: 0.6rem;
          img {
            width: 300px;
            &:nth-child(1) {
              position: absolute;
              top: -10px;
              left: -10px;
            }
            &:nth-child(3) {
              position: absolute;
              top: 10px;
              left: 10px;
            }
          }
        }

        .active {
          color: #ffffff;
          margin: 0 0 0.4rem 0;
          white-space: nowrap;
        }
        .Yactive {
          color: #ffffff;
          margin: 0.2rem 0;
        }
        .actives {
          color: #ffffff;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 0.25rem;
          box-sizing: border-box;
        }
        ul {
          li {
            display: flex;
            margin-top: 0.1rem;
            font-weight: 400;
            font-size: 0.2rem;
            line-height: 0.24rem;
            color: #ffffff;
            img {
              margin-right: 0.15rem;
            }
          }
        }
        .top {
          width: 100%;
          height: 4.04rem;
          border-radius: 0.48rem;
          background: url("../assets/imgs/top-bg.png") no-repeat;
          background-size: 100% 100%;
          padding: 0.4rem;
          box-sizing: border-box;
        }
        .bottom {
          width: 100%;
          height: 2.8rem;
          background: #ffffff;
          box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
          border-radius: 0.48rem;
          padding: 0.3rem 0.5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          .Lookhere {
            width: 100%;
            font-weight: 400;
            font-size: 0.24rem;
            line-height: 0.29rem;
            color: #189aff;
            text-align: right;
            cursor: pointer;
          }
          .act {
            margin: 0.2rem 0;
          }
        }
        &:nth-child(2) {
          background: #272626;
          border: 2px solid #000000;
          margin: 0 0.5rem;
        }
        &:nth-child(3) {
          background: transparent;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05);
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
    .btn {
      width: 2.5rem;
      height: 0.58rem;
      margin: 0.5rem auto 0;
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
      &:hover {
        transform: scale(1.1); //原本的图片的大小，图片原来的大小不变
        transition: all 0.6s;
        img {
          transform: translateX(10px);
          transition: all 0.8s;
        }
      }
    }
    .Ybtn {
      margin: 0.9rem auto;
    }
    .btns {
      width: 2.8rem;
      height: 0.7rem;
      background: url("../assets/imgs/btn-bg1.png") top left no-repeat;
      background-size: 100% 100%;
      color: #ffffff;
      border: 0;
      margin: 0.7rem auto 1rem;
    }
  }
  .parts3 {
    // height: 25.76rem;
    ul {
      padding: 0.1rem 0 1.97rem;
      box-sizing: border-box;
      background: url("../assets/imgs/parts3-bg.svg") no-repeat top right,
        url("../assets/imgs/parts3-bg.svg") no-repeat top 8.5rem left, #090b14;
      border-radius: 1.16rem 1.16rem 0px 0px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      li {
        width: 13rem;
        margin: 1.97rem auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .left {
          margin-left: 0.3rem;
        }
        .title {
          font-size: 0.64rem;
          line-height: 0.78rem;
          color: #ffffff;
        }
        .active {
          font-weight: 600;
          white-space: nowrap;
        }
        .content {
          font-weight: 400;
          font-size: 0.28rem;
          line-height: 34px;
          color: #ffffff;
          margin: 0.2rem 0 0.4rem;
        }
        .contents {
          margin: 0.2rem 0 0;
        }
        .Small {
          width: 2.8rem;
          text-align: center;
          font-weight: 400;
          font-size: 0.13rem;
          line-height: 0.16rem;
          color: #a5a5a5;
          margin-top: 0.1rem;
        }
        .btns {
          width: 2.8rem;
          height: 0.7rem;
          background: url("../assets/imgs/btn-bg1.png") top left no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 400;
          color: #ffffff;
          border: 0;
          img {
            margin-left: 0.15rem;
            position: relative;
            top: 2px;
          }
          &:hover {
            transform: scale(1.1); //原本的图片的大小，图片原来的大小不变
            transition: all 0.6s;
            img {
              transform: translateX(10px);
              transition: all 0.8s;
            }
          }
        }
        .right {
          width: 6rem;
        }
        .h5right {
          display: none;
        }
        .rights {
          width: 7rem;
        }
      }
    }
  }
  .parts7 {
    height: 2.24rem;
    background: #0af1ad;
    position: relative;

    .box1 {
      width: 2.4rem;
      height: 2.24rem;
      background: #1bf0fc;
      position: absolute;
      right: 0;
    }
    .box2 {
      width: 6rem;
      height: 0.32rem;
      position: absolute;
      background: #ffffff;
      top: 0;
      right: 2.4rem;
    }
    .box3 {
      width: 2.4rem;
      height: 1.16rem;
      background: #252525;
      position: absolute;
      bottom: 0;
      right: 2.4rem;
    }
    .Subscribe {
      width: 13rem;
      margin: 0 auto;
      padding: 0.35rem 0;
      box-sizing: border-box;
      &-title {
        font-weight: 600;
        font-size: 0.24rem;
        line-height: 0.29rem;
        color: #000000;
      }
      P {
        font-weight: 400;
        font-size: 0.16rem;
        line-height: 0.2rem;
        /* identical to box height */
        color: #000000;
        margin: 0.1rem 0;
      }
      .mailbox {
        display: flex;
        align-items: center;
        input {
          width: 3.2rem;
          height: 0.74rem;
          font-size: 0.16rem;
          background: #ffffff;
          color: #000;
          padding-left: 0.2rem;
          box-sizing: border-box;
          border-radius: 0 !important;
        }
        div {
          width: 1.86rem;
          height: 0.72rem;
          background: #030303;
          border: 1px solid #000000;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
  .parts8 {
    background: #ffffff;
    height: 11rem;
    padding: 1.2rem 0;
    box-sizing: border-box;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    .titile {
      font-size: 0.64rem;
      line-height: 0.78rem;
      text-align: center;
      color: #000000;
    }
    .content {
      font-weight: 400;
      font-size: 0.32rem;
      line-height: 0.39rem;
      text-align: center;
      color: #000000;
    }
    .sdk {
      padding: 0.4rem 0.47rem;
      box-sizing: border-box;
      .sdktitle {
        font-size: 0.32rem;
        line-height: 0.39rem;
        color: #ffffff;
        border-bottom: 1px solid #ffffff;
        padding-bottom: 0.2rem;
        box-sizing: border-box;
      }
      ul {
        margin-top: 0.4rem;
        li {
          display: flex;
          .circular {
            width: 0.18rem;
            height: 0.18rem;
            background: #565656;
            border-radius: 50%;
            margin-right: 0.8rem;
          }
          p {
            font-weight: 400;
            font-size: 0.21rem;
            // line-height: 0.26rem;
            color: #ffffff;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .active {
          margin-top: 0.2rem;
        }
      }
    }

    /deep/ .el-carousel--horizontal {
      width: 9.82rem;
      margin: 0.6rem auto;
      .el-carousel__container {
        height: 5.73rem !important;
      }
      .el-carousel__item {
        width: 9.82rem;
        height: 5.73rem;
        background: #272727;
        border-radius: 35px;
      }
      .el-carousel__button {
        width: 0.19rem;
        height: 0.19rem;
        border-radius: 50%;
      }
    }
  }
  .parts9 {
    padding: 1.2rem 0;
    box-sizing: border-box;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    .titile {
      font-size: 0.64rem;
      line-height: 0.78rem;
      text-align: center;
      color: #000000;
    }
    .content {
      font-weight: 400;
      font-size: 0.32rem;
      line-height: 0.39rem;
      text-align: center;
      color: #000000;
    }
    .workimg {
      width: 100%;
    }
    /deep/ .el-carousel--horizontal {
      width: 12rem;
      margin: 0.6rem auto;
      .el-carousel__container {
        height: 6.58rem !important;
      }
      .el-carousel__item {
        width: 11.8rem;
        height: 6.58rem;
      }
      .el-carousel__button {
        width: 0.19rem;
        height: 0.19rem;
        border-radius: 50%;
      }
    }
  }
  .parts10 {
    box-sizing: border-box;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    position: relative;
    .titile {
      font-size: 0.64rem;
      line-height: 0.78rem;
      text-align: center;
      color: #000000;
    }
    .switch {
      display: flex;
      position: absolute;
      right: 2rem;
      top: 1rem;
    }
    .myswipe {
      margin: 2rem 0 0 3rem;
      .cardbox {
        width: 333px;
        height: 533px;
        background: #e4e4e4;
        border-radius: 42px 42px 42px 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100%;
        }
        .Copywriting {
          flex: 1;
          padding: 0.4rem;
          box-sizing: border-box;
          p {
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #000000;
          }
          div {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #000000;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
  .parts11 {
    .top {
      min-height: 1.59rem;

      background: #0f0f0f;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      img {
        &:nth-child(1) {
          width: 1.18rem;
        }
        &:nth-child(2) {
          width: 1.77rem;
        }
        &:nth-child(3) {
          width: 2.3rem;
        }
        &:nth-child(4) {
          width: 2.3rem;
        }
        &:nth-child(5) {
          width: 0.75rem;
        }
      }
    }
    .bottom {
      height: 0.15rem;
      background: linear-gradient(90deg, #0af4bd 18.91%, #53b9fb 81.18%);
    }
  }
  .parts12 {
    background: #ffffff;
    padding: 1.2rem 0 0.3rem;
    box-sizing: border-box;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 0.4rem;
      line-height: 0.49rem;
      color: #000000;
    }
    .content {
      font-weight: 700;
      font-size: 0.64rem;
      line-height: 0.78rem;
      color: #000000;
    }
    .Startusing {
      width: 12rem;
      text-align: left;
      .contents {
        display: flex;
        img {
          width: 0.42rem;
          height: 0.4rem;
          position: relative;
          top: 0.3rem;
        }
      }
    }
    ul {
      display: flex;
      margin-top: 0.6rem;
      li {
        width: 3.68rem;
        display: flex;
        border-top: 1px solid #bcbcbc;
        padding: 0.26rem 0;
        box-sizing: border-box;
        .right {
          margin-left: 0.25rem;
          p {
            font-weight: 700;
            font-size: 0.24rem;
            color: #bcbcbc;
            margin-bottom: 0.2rem;
          }
          div {
            font-weight: 300;
            font-size: 0.16rem;
            color: #bcbcbc;
          }
        }
      }
      .Protocol {
        .imgs {
          width: 0.95rem;
          height: 0.95rem;
          background: url("../assets/imgs/icon-q1.svg") no-repeat;
          background-size: 100% 100%;
        }
        &:hover {
          .imgs {
            background: url("../assets/imgs/icon-s1.svg") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .DID {
        margin: 0 0.5rem;
        .imgs {
          width: 0.95rem;
          height: 0.95rem;
          background: url("../assets/imgs/icon-q2.svg") no-repeat;
          background-size: 100% 100%;
        }
        &:hover {
          .imgs {
            background: url("../assets/imgs/icon-s2.svg") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .CreditSystem {
        .imgs {
          width: 0.95rem;
          height: 0.95rem;
          background: url("../assets/imgs/icon-q3.svg") no-repeat;
          background-size: 100% 100%;
        }
        &:hover {
          .imgs {
            background: url("../assets/imgs/icon-s3.svg") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .Yhover:hover {
        border-top: 1px solid #000000;
        .right {
          p {
            color: #000000;
          }
          div {
            color: #000000;
          }
        }
      }
      cursor: url("../assets/imgs/cursor.svg"), pointer;
    }
    /deep/.el-collapse {
      border-top: 0;
      width: 8.89rem;
      margin: 0.8rem auto 1.5rem;
      .el-collapse-item__header {
        font-size: 0.32rem;
        line-height: 0.39rem;

        color: #000000;
      }
      .el-collapse-item__content {
        text-align: left;
        padding: 0.25rem 0;
        box-sizing: border-box;
        font-size: 0.2rem;
        line-height: 0.24rem;

        color: #000000;
      }
    }
  }
  .Ypopup {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    li {
      width: 100%;
      height: 50px;
      font-family: "Dotted Songti Square";
      font-style: normal;
      font-weight: 500;
      font-size: 0.3rem;
      line-height: 20px;
      color: #ffffff;
      margin-bottom: 0.5rem;
      text-align: center;
      line-height: 50px;
    }
    .active {
      background: linear-gradient(180deg, #ff3d00 0%, #ff7a00 100%);
    }
  }
  .typewriter {
  }
  /*下一段延时执行动画*/
  @keyframes grow {
    from {
      width: 0;
    }
    to {
      width: 100%; /*段落长度 */
      border-right-color: transparent;
    }
    0% {
      border-right: 0;
    } /*光标起始位置不显示*/
    1% {
      border-right: 2px solid #fff;
    } /*光标显示*/
    99% {
      border-right: 2px solid #fff;
    }
    100% {
      border-right: 0;
    } /*结束位置光标不显示*/
  }
  @keyframes blink {
    from {
      border-right-color: #fff;
    }
    to {
      border-right-color: transparent; /*文字透明化*/
    }
  }
  .Animationleft {
    transform: translateX(-150px);
    opacity: 0;
    transition: all ease-out 0.3s;
  }
  .Animationright {
    transform: translateX(150px);
    opacity: 0;
    transition: all ease-out 0.3s;
  }
  .Animation {
    transform: translateY(150px);
    opacity: 0;
    transition: all ease-out 0.3s;
  }
  .YAnimation {
    transform: translateY(150px);
    opacity: 0;
    transition: all ease-out 0.3s;
  }
  .Animations {
    transform: translateY(0px);
    opacity: 1;
    transition: all ease-out 0.3s;
  }

  .YAnimationS {
    .YAnimation {
      transform: translateY(0px) !important;
      opacity: 1 !important;
      transition: all ease-out 0.3s !important;
    }
  }
  .show {
    .Animation {
      transform: translateY(0px);
      opacity: 1;
    }
    .Animationleft {
      transform: translateX(0px);
      opacity: 1;
      transition: all ease-out 0.3s;
    }
    .Animationright {
      transform: translateX(0px);
      opacity: 1;
      transition: all ease-out 0.3s;
    }
  }
  .Ytypewriter {
    .typewriter {
      animation: grow 2s steps(70) 1s normal both, blink 200ms infinite normal;
    } /*对动画设置时间和分段，对右边框设置动画样式*/
  }

  /deep/.van-popup--right {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: -10px 0px 29px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(100px);
  }
  /deep/.van-overlay {
    background-color: rgba(0, 0, 0, 0.4);
  }
  /deep/.van-swipe__indicators,
  /deep/.el-dialog__header,
  /deep/.el-dialog__footer {
    display: none;
  }

  @media screen and(max-width: 1440px) {
    .header {
      padding: 0 0.4rem;
      &-content ul {
        width: calc(100% - 3.2rem);
      }
    }
  }

  @media screen and(max-width: 1200px) {
    .parts11 {
      .top {
        p {
          font-size: 0.5rem;
        }
      }
    }
  }
  @media screen and(max-width: 980px) {
    .parts2 {
      .list {
        .lists {
          height: 8rem;
        }
      }
      .Ybtn {
        margin: 1.3rem auto;
      }
    }
  }
  @media screen and(min-width: 800px) {
  }
  @media screen and(max-width: 800px) {
    .parts {
      height: 15rem;
      background: url("../assets/imgs/parts-bg1.svg") left -2rem bottom -3rem
          no-repeat,
        url("../assets/imgs/parts-bg1.png") top 1rem right no-repeat,
        url("../assets/imgs/parts-right.png") right bottom no-repeat, #000;
      background-size: contain;

      .left {
        top: -3.5rem;
        left: 0rem;
      }
    }
    .parts1 {
      .imgleft {
        width: 1.3rem;
        top: 3.7rem;
      }
      .imgright {
        width: 1.3rem;
        top: 4.2rem;
      }
    }
    .parts2 {
      .title {
        font-size: 0.54rem;
      }
      .titles {
        width: 85%;
        text-align: center;
      }
      .list {
        display: flex;
        margin-top: 0.7rem;
        flex-direction: column;
        .lists {
          width: 6.5rem;
          height: 9rem;
          .LItitle {
            line-height: 0.44rem;
          }
          .Contain {
            margin: 0.8rem 0 0.25rem;
          }
          ul {
            li {
              margin-top: 0.2rem;
            }
          }
          .top {
            height: 4.5rem;
          }
          .bottom {
            height: 3rem;
          }
          &:nth-child(2) {
            margin: 0.6rem 0rem;
          }
        }
      }

      .Ybtn {
        margin: 2.5rem auto;
      }
    }
    .parts3 {
      // height: 25.76rem;
      ul {
        li {
          width: 6.5rem;
          flex-direction: column;
          .left {
            margin-left: 0rem;
          }
          .right {
            margin-top: 0.4rem;
          }
          .h5right {
            display: block;
          }
          .pcright {
            display: none;
          }
        }
      }
    }
    .parts7 {
      height: 4rem;
      .box1 {
        width: 50%;
        height: 1.16rem;
        bottom: 0;
        right: 0;
      }
      .box2 {
        width: 2rem;
        height: 0.4rem;
        top: 0;
        right: 0;
      }
      .box3 {
        width: 50%;
        height: 1.16rem;
        bottom: 0;
        left: 0;
      }
      .Subscribe {
        width: 6.5rem;
      }
    }
    .parts8 {
      .content {
        width: 6.5rem;
        margin: 0.1rem auto 0;
      }
      height: 12rem;
      .sdk {
        padding: 0.4rem 0.2rem;

        ul {
          li {
            .circular {
              margin-right: 0.2rem;
            }
          }
        }
      }
      /deep/ .el-carousel--horizontal {
        width: 6.5rem !important;
        margin: 0.6rem auto;
        height: 8.5rem !important;
        .el-carousel__container {
          height: 7rem !important;
        }
        .el-carousel__item {
          width: 6.5rem !important;
          height: 7rem !important;
        }
        .el-carousel__button {
          width: 0.19rem;
          height: 0.19rem;
          border-radius: 50%;
        }
      }
    }
    .parts9 {
      .content {
        width: 6.5rem;
        margin: 0.1rem auto 0;
      }
      /deep/ .el-carousel--horizontal {
        width: 6.5rem !important;
        .el-carousel__container {
          height: 4rem !important;
        }
        .el-carousel__item {
          width: 6.5rem !important;
          height: 4rem !important;
        }
      }
    }
    .parts10 {
      .switch {
        display: flex;
        position: absolute;
        top: 1rem;
        right: 50%;
        transform: translateX(50%);
      }
      .myswipe {
        margin: 2rem 0 0 0.4rem;
        .cardbox {
          margin: 0 auto;
        }
      }
    }
    .parts11 {
      .top {
        padding: 0.2rem;
        box-sizing: border-box;
      }
    }
    .parts12 {
      .content {
        display: flex;
        justify-content: center;
      }
      .Startusing {
        width: 6.5rem;
      }
      ul {
        margin-top: 0.8rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          width: 6.5rem;
          padding: 0.5rem 0 0.6rem;
        }
      }
      /deep/.el-collapse {
        border-top: 0;
        width: 6.5rem;
        margin: 0.8rem auto 1.5rem;
        .el-collapse-item__header {
          font-size: 0.32rem;
          line-height: 0.39rem;

          color: #000000;
        }
        .el-collapse-item__content {
          text-align: left;
          padding: 0.25rem 0;
          box-sizing: border-box;
          font-size: 0.2rem;
          line-height: 0.24rem;

          color: #000000;
        }
      }
    }
  }
  @media screen and(max-width: 630px) {
    .parts {
      position: relative;
      height: 12.48rem;
      .left {
        top: -2rem;
      }
    }
    .parts1 {
      p {
        width: 6rem;

        font-size: 0.44rem;
      }
    }
  }
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  