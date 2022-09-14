<template>
  <div class="Foot" :class="topList - scrollTop < (availHeight * 2) / 5 && 'show'" ref="Foot">
    <div class="Animation content Animation">
      <div class="Yicon">
        <img src="../../assets/imgs/icon-Yicon.svg" alt="" />
      </div>
      <p class="title">Acceleration - Developers&Web3</p>
      <p class="title">into a Trusted Crypto Society</p>
      <div class="contents Ycontent">
        If you want to use Ceres' basic protocols and facilities for more scale
        and
      </div>
      <div class="contents">
        application implementation, welcome to apply for our Ceres Grant
        support.
      </div>
      <div class="contents Ycontent">Contact now ></div>
    </div>
    <div class="Animation Foots Animation">
      <div class="left">
        <img src="../../assets//imgs/Ylogs.svg" alt="" class="logo" />
        <p>The Infrastructure of web 3.0 decentralized credit system</p>
        <div>Contact us：business@ceres.credit</div>
      </div>
      <div class="right">
        <div class="h5">
          <img src="../../assets/imgs/icon-app1.svg" alt="" />
          <img src="../../assets/imgs/icon-app2.svg" alt="" />
          <img src="../../assets/imgs/icon-app3.svg" alt="" />
          <img src="../../assets/imgs/icon-app4.svg" alt="" />
        </div>
        <ul>
          <li @click="_change(item, index)" v-for="(item, index) in menu" :key="index">
            {{ item.desc }}
          </li>
        </ul>
        <div class="pc">
          <img src="../../assets/imgs/icon-app1.svg" alt="" />
          <img src="../../assets/imgs/icon-app2.svg" alt="" />
          <img src="../../assets/imgs/icon-app3.svg" alt="" />
          <img src="../../assets/imgs/icon-app4.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="Animation about">
      <p>© 2022 Ceres. All right reserved.</p>
      <p>Privacy Policy Terms of Service Cookies Settings</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
  components: {},
  data() {
    return {
      topList: "",
      availHeight: 0,
      scrollTop: 0,
      menu: [
        { desc: "Home", tar: "", link: "", router: "/" },
        { desc: "Oracle", tar: "", link: "", router: "Oracle" },
        { desc: "DID", tar: "", link: "", router: "did" },
        { desc: "SDK", tar: "", link: "https://github.com/cerescredit/Ceres", },
        // { desc: "Intro", tar: "", link: "" },
        {
          desc: "Whitepaper",
          tar: "",
          link: "https://ceresdid.gitbook.io/nft/",
        },
      ],
      topLists: [],
    };
  },
  created() { },
  mounted() {
    this.availHeight = window.screen.availHeight;
    this.topList = this.$refs["Foot"].offsetTop;
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.topLists = localStorage.getItem("topList").split(",");
    }, 2000)
  },
  methods: {
    open(url) {
      window.open(url);
    },
    _change(item, index) {
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
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this._scrollToTop);
  },
  watch: {},
};
</script>
<style lang="less" scoped>
.Foot {
  background: #ffffff;
  // height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  padding-top: 1rem;
  box-sizing: border-box;
  .content {
    width: 12rem;
    height: 4.74rem;
    background: linear-gradient(180deg, #000000 0%, #070331 100%);
    box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0.35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
    box-sizing: border-box;
    .Yicon {
      width: 0.74rem;
      height: 0.74rem;
      background: linear-gradient(90deg, #58b3fa 2%, #0bfffc 51%, #0af0a8 100%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.4rem;
      img {
        width: 0.46rem;
      }
    }
    .title {
      font-size: 0.44rem;
      line-height: 0.54rem;
      text-align: center;
      color: #ffffff;
    }
    .contents {
      font-weight: 400;
      font-size: 0.2rem;
      line-height: 0.24rem;
      text-align: center;
    }
    .Ycontent {
      margin-top: 0.4rem;
    }
  }
  .Foots {
    width: 12rem;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0 0.8rem;
    box-sizing: border-box;
    border-bottom: 1px solid #000000;
    .left {
      display: flex;
      flex-direction: column;
      color: #000000;
      img {
        width: 1.46rem;
        margin-bottom: 0.42rem;
      }
      p {
        width: 2.71rem;
        font-weight: 400;
        font-size: 0.24rem;
        line-height: 0.29rem;
      }
      div {
        margin-top: 10px;
        font-weight: 400;
        font-size: 0.18rem;
      }
    }
    .right {
      display: flex;
      ul {
        li {
          font-weight: 400;
          font-size: 0.2rem;
          line-height: 0.24rem;
          color: #000000;
          margin-bottom: 0.2rem;
          cursor: pointer;
        }
      }
      div {
        display: flex;
        align-items: baseline;
        img {
          width: 0.25rem;
          margin-right: 0.2rem;
        }
      }
      .h5 {
        display: none;
      }
    }
  }
  .about {
    width: 12rem;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    box-sizing: border-box;
    p {
      font-weight: 400;
      font-size: 0.16rem;
      line-height: 0.2rem;
      color: #000000;
    }
  }

  @media screen and(min-width: 1920px) {
  }

  @media screen and(min-width: 800px) {
  }

  @media screen and(max-width: 750px) {
    .content {
      width: 6.5rem;
      height: 7rem;
      padding: 0.5rem 0.3rem;
      box-sizing: border-box;
    }
    .Foots {
      width: 6.5rem;
      flex-direction: column;
      .left {
        display: flex;
        flex-direction: column;
        img {
          width: 1.46rem;
          margin-bottom: 0.42rem;
        }
        p {
          width: 4rem;
          font-size: 0.28rem;
          line-height: 0.32rem;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        ul {
          li {
            font-size: 0.28rem;
            line-height: 0.28rem;
          }
        }

        .h5 {
          display: block;
          display: flex;
          margin: 0.4rem 0;
        }
        .pc {
          display: none;
        }
      }
    }
    .about {
      width: 6.5rem;
      flex-direction: column;
      p {
        font-size: 0.28rem;
        &:nth-child(2) {
          width: 4rem;
          margin-top: 0.3rem;
          font-size: 0.2rem;
          line-height: 0.23rem;
        }
      }
    }
  }
}
.Animation {
  transform: translateY(100px);
  opacity: 0;
  transition: all ease-out 0.3s;
}
.Animations {
  transform: translateY(0px);
  opacity: 1;
  transition: all ease-out 0.3s;
}
.show {
  .Animation {
    transform: translateY(0px);
    opacity: 1;
    transition: all ease-out 0.3s;
  }
}
</style>