<template>
  <div class="details">
    <Yheader></Yheader>
    <div class="content">
      <div class="box">
        <img
          class="back"
          @click="$router.go(-1)"
          src="../../assets/imgs/back.png"
          alt=""
        />
        <img class="iconlogs" src="../../assets/imgs/icon-logs.svg" alt="" />
        <div class="list">
          <div class="left">
            <div class="friend">
              <p>0</p>
              <div>Direct friend</div>
            </div>
            <div class="friend friends">
              <p>0</p>
              <div>Indirect friend</div>
            </div>
          </div>
          <div class="right">
            <!-- <el-table :data="tableData" style="width: 100%">
              <el-table-column label="Address">
                <template slot-scope="scope">
                  <p class="Address">{{ scope.row.Address }}</p>
                </template>
              </el-table-column>
              <el-table-column label="Type">
                <template slot-scope="scope">
                  <p class="Type">{{ scope.row.Type }}</p>
                </template>
              </el-table-column>
              <el-table-column label="TransactionID">
                <template slot-scope="scope">
                  <p class="Address">{{ scope.row.TransactionID }}</p>
                </template>
              </el-table-column>
            </el-table> -->
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              class="Ylist"
            >
              <div class="title">
                <p>Address</p>
                <p>Type</p>
                <p>Transaction ID</p>
              </div>
              <div
                class="listdata"
                v-for="item in list"
                :key="item"
                :title="item"
              >
                <div>{{ item }}</div>
                <p>{{ item }}</p>
                <div>{{ item }}</div>
              </div>
            </van-list>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Yheader from "./Yheader.vue";
import Foot from "./foot.vue";
export default {
  Type: "Ydetails",
  components: { Yheader, Foot },
  data() {
    return {
      tableData: [
        {
          Address: "2016-05-02",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1518 弄",
        },
        {
          Address: "2016-05-04",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1517 弄",
        },
        {
          Address: "2016-05-01",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1519 弄",
        },
        {
          Address: "2016-05-01",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1519 弄",
        },
        {
          Address: "2016-05-03",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1516 弄",
        },
        {
          Address: "2016-05-03",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1516 弄",
        },
        {
          Address: "2016-05-03",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1516 弄",
        },
        {
          Address: "2016-05-03",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1516 弄",
        },
        {
          Address: "2016-05-03",
          Type: "王小虎",
          TransactionID: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      list: [],
      loading: false,
      finished: false,
    };
  },
  created() {},
  methods: {
    copySuccess() {
      this.$toast.success(this.$t("Copy succeeded"));
    },
    copyError() {
      this.$toast.fail(this.$t("Copy failed"));
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  watch: {},
};
</script>
<style lang="less" scoped>
.details {
  height: 10.48rem;
  background: linear-gradient(87.68deg, #000000 31.53%, #000000 94.36%);
  border: 1px solid #000000;
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  .content {
    height: 10rem;
    background: url("../../assets/imgs/icon-invitation1.png") no-repeat top left,
      url("../../assets/imgs/icon-invitation2.png") no-repeat top 1rem right,
      url("../../assets/imgs/icon-invitation3.png") no-repeat left 5rem bottom;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 12.01rem;
      height: 6rem;
      background: url("../../assets/imgs/icon-box.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 0.36rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .iconlogs {
        width: 0.74rem;
        margin-bottom: 0.4rem;
      }
      .back {
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        width: 0.55rem;
      }
      .list {
        display: flex;
        .left {
          margin-right: 0.4rem;
          .friend {
            // display: flex;
            text-align: center;
            p {
              font-family: "Lanterosy Sans Serif";
              font-weight: 400;
              font-size: 0.64rem;
              line-height: 0.77rem;
              color: #ffffff;
              margin-bottom: 0.2rem;
            }
            div {
              font-weight: 400;
              font-size: 0.22rem;
              line-height: 0.27rem;
              color: #ffffff;
            }
          }
          .friends {
            margin-top: 0.7rem;
          }
        }
        .right {
          width: 8.25rem;
          height: 3.6rem;
          background: #262626;
          border-radius: 21px;

          padding: 0.2rem;
          box-sizing: border-box;
          position: relative;

          .Ylist {
            height: 3rem;
            overflow-y: scroll;
            // 滚动条
            &::-webkit-scrollbar {
              /*滚动条整体样式*/
              width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
              height: 10px;
            }
            &::-webkit-scrollbar-thumb {
              /*滚动条里面小方块*/
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              background: #c1c1c1;
            }
            &::-webkit-scrollbar-track {
              /*滚动条里面轨道*/
              -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              background: #161616;
            }
          }
          .title {
            display: flex;
            justify-content: space-around;
            padding: 0.2rem 0;
            box-sizing: border-box;
            border-bottom: 1px solid #444343;
            font-size: 0.22rem;
            line-height: 0.27rem;
            text-align: center;
            color: #ffffff;
          }
          .listdata {
            display: flex;
            justify-content: space-around;
            padding: 0.2rem 0;
            box-sizing: border-box;
            font-weight: 400;
            font-size: 0.2rem;
            line-height: 0.24rem;
            color: #ffffff;
            div {
              color: #97d1ff;
            }
          }
        }
      }
    }
  }

  @media screen and(min--width: 2100px) {
  }
  @media screen and(max-width: 800px) {
    height: 13rem;
    .content {
      height: 13rem;

      .box {
        width: 6.55rem;
        height: auto;
        background: url("../../assets/imgs/icon-boxbg.png") no-repeat;
        background-size: 100% 100%;
        border-radius: 0.36rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 0.8rem 0 2px;
        box-sizing: border-box;
        .iconlogs {
          width: 0.74rem;
          margin-bottom: 0.4rem;
        }
        .back {
          position: absolute;
          top: 0.3rem;
          left: 0.3rem;
          width: 0.55rem;
        }
        .list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .left {
            width: 6.55rem;
            margin-right: 0rem;
            display: flex;
            justify-content: space-around;
            margin-bottom: 0.4rem;
            .friend {
              // display: flex;
              text-align: center;
              p {
                font-family: "Lanterosy Sans Serif";
                font-weight: 400;
                font-size: 0.64rem;
                line-height: 0.77rem;
                color: #ffffff;
                margin-bottom: 0.2rem;
              }
              div {
                font-weight: 400;
                font-size: 0.22rem;
                line-height: 0.27rem;
                color: #ffffff;
              }
            }
            .friends {
              margin-top: 0rem;
            }
          }
          .right {
            width: 6.4rem;
            height: 6.3rem;
            background: #262626;
            border-radius: 0.66rem;
            padding: 0.2rem;
            box-sizing: border-box;
            // 滚动条
            .Ylist {
                 height: 6rem;
              overflow-y: scroll;
              &::-webkit-scrollbar {
                /*滚动条整体样式*/
                width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 0px;
              }
              &::-webkit-scrollbar-thumb {
                /*滚动条里面小方块*/
                border-radius: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>