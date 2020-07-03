<template>
  <div class="about">
    <div class="container">
      <div class="thumb">
        <div class="thumb-tit">
          产品中心
        </div>
        <div class="thumb-sub">
          Cable Union
        </div>
      </div>
      <div class="product">
        <div class="type-list" ref="typeList">
          <div
            class="type-item"
            v-for="item in typeDate"
            :key="item.id"
            @mouseenter="hoverx(item.id, 'blur(4px)')"
            @mouseleave="hoverx(item.id, 'none')"
            @click="openProList(item.id)"
          >
            <img :src="item.img" alt="" />
            <div class="type-tit">
              0{{ item.id }}
              <div class="type-num">{{ item.tit }}</div>
            </div>
          </div>
        </div>
        <div class="pro-list" ref="proList">
          <div class="pro-main">
            <div class="backto" @click="backTo('type')">
              <svg
                t="1593675934266"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="793"
                width="18"
                height="18"
              >
                <path
                  d="M748.804657 1023.999977a38.297142 38.297142 0 0 1-27.154285-11.245714L248.004668 539.177131a38.388571 38.388571 0 0 1 0-54.297142L721.604658 11.28a38.422856 38.422856 0 0 1 54.399999 54.274284L329.501809 511.999989 776.004657 958.457121A38.399999 38.399999 0 0 1 748.850371 1023.999977z"
                  p-id="794"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            <div class="main-tit">
              产品列表
            </div>
            <img :src="proDate[proTypeId].img" alt="" />
            <div class="pro-tit">
              <div class="num">0{{ proTypeId }}</div>
              <div class="pro-num">{{ proDate[proTypeId].tit }}</div>
            </div>
          </div>
          <div class="pro-body">
            <div
              class="pro-item"
              v-for="item in proDate"
              :key="item.id"
              @click="goProDetail(item.id)"
            >
              <img :src="item.img" alt="" class="pro-left" />
              <div class="pro-right">
                <div class="pro-right-tit">{{ item.tit }}</div>
                <div class="pro-right-ind">{{ item.induce }}</div>
                <div class="pro-right-detail">了解详情 ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pro-detail" ref="proDetail">
          <div class="detail-tit">
            <div class="detail-tit-left">
              <img src="../assets/test_img01.jpg" alt="" />
            </div>
            <div class="detail-tit-right">
              <p>硅橡胶绝缘及护套电缆</p>
              <div class="tit-right-body">
                本产品以国军标GJB1916总规范为依据，参照美国军用标准MIL-DTL-24643,结合使用单位的实际情况设计开发的新一代交联聚乙烯绝缘舰船用电力电缆，该电缆应用在军舰、河海船舶以及海上石油平台等海上浮动建筑物环境中，用于设备、仪器、仪表、仪表动力及能量传输。电缆具有电性能优越、耐老化、抗撕裂、耐油、高阻燃、耐火、低烟、无卤、低毒等特性，能在恶劣的环境中保持优异的电气性能及机械性能。其绝缘、填充和护套材料的卤素含量、酸气含量、烟指数和毒性指数等性能均大大优于普通电缆。且结构外形稳定，使用寿命长。可提供更安全的、稳定、可靠的高性能服务。
              </div>
            </div>
          </div>
          <div class="executive">
            <div class="pro-detail-tit"><span>E</span>xecutive Standards</div>
            <div class="pro-detail-sub">执行标准</div>
            <div class="executive-main">
              <div class="main-item">
                <span>GJB1916-94</span><span>--设计</span>
              </div>
              <div class="main-item">
                <span>IEC 60332-3-22</span><span>--阻燃</span>
              </div>
              <div class="main-item">
                <span>IEC 60092-360</span><span>--材料</span>
              </div>
              <div class="main-item">
                <span>MIL-DTL-24643</span><span>--设计</span>
              </div>
              <div class="main-item">
                <span>IEC 60331</span><span>--耐火</span>
              </div>
              <div class="main-item">
                <span>IEC 61034</span><span> --低烟</span>
              </div>
              <div class="main-item">
                <span>IEC 60092-353</span><span>--设计</span>
              </div>
              <div class="main-item">
                <span>IEC 60754</span><span>--无卤</span>
              </div>
            </div>
          </div>
          <div class="product-use">
            <div class="pro-detail-tit"><span>P</span>roduct use</div>
            <div class="pro-detail-sub">产品用途</div>
            <div class="use-body">
              本产品适合于各种军舰河海船舶及海上石油平台等水上建筑的电力、照明和一般控制装置用。
            </div>
          </div>
          <div class="pro-canshu">
            <div class="pro-detail-tit"><span>P</span>roduct use</div>
            <div class="pro-detail-sub">使用特性</div>
            <div class="canshu-top">
              <p>额定电压0.6/1kV；</p>
              <p>导体长期允许最高工作温度90℃；</p>
              <p>固定敷设时，电缆最小弯曲半径见表 1 规定</p>
            </div>
            <table class="canshu-table" cellspacing="1">
              <tr class="frist-line">
                <th class="frst-row">电缆结构特征</th>
                <th>电缆外径 D（mm)</th>
                <th>弯曲内半径最小（mm)</th>
              </tr>
              <tr>
                <th>金属编织铠装型</th>
                <td>任何值</td>
                <td>6D</td>
              </tr>
              <tr>
                <th rowspan="2">非铠装型</th>
                <td>D≤25</td>
                <td>4D</td>
              </tr>
              <tr>
                <td>D>25</td>
                <td>6D</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeDate: [
        { img: require("../assets/test_img01.jpg"), tit: "电线电缆", id: 1 },
        { img: require("../assets/test_img01.jpg"), tit: "电线电缆", id: 2 },
        { img: require("../assets/test_img01.jpg"), tit: "电线电缆", id: 3 },
        { img: require("../assets/test_img01.jpg"), tit: "电线电缆", id: 4 },
      ],
      proDate: [
        {
          img: require("../assets/test_img01.jpg"),
          tit: "航空航天用电缆",
          induce:
            "该电缆应用在军舰、河海船舶以及海上石油平台等海上浮动建筑物环境中，用于设备、仪器及仪表。",
          id: 1,
        },
        {
          img: require("../assets/test_img01.jpg"),

          tit: "航空航天用电缆",
          induce:
            "该电缆应用在军舰、河海船舶以及海上石油平台等海上浮动建筑物环境中，用于设备、仪器及仪表。",
          id: 2,
        },
        {
          img: require("../assets/test_img01.jpg"),
          tit: "航空航天用电缆",
          induce:
            "该电缆应用在军舰、河海船舶以及海上石油平台等海上浮动建筑物环境中，用于设备、仪器及仪表。",
          id: 3,
        },
        {
          img: require("../assets/test_img01.jpg"),
          tit: "航空航天用电缆",
          induce:
            "该电缆应用在军舰、河海船舶以及海上石油平台等海上浮动建筑物环境中，用于设备、仪器及仪表。",
          id: 4,
        },
      ],
      proTypeId: 1,
      proId: 1,
    };
  },
  methods: {
    //进入详情页
    goProDetail(id) {
      this.proId = id;
      this.$refs.typeList.style.display = "none";
      this.$refs.proList.style.display = "none";
      this.$refs.proDetail.style.display = "block";
    },
    hoverx(id, res) {
      let num = this.$refs.typeList.children.length;
      for (let i = 0; i < num; i++) {
        this.$refs.typeList.children[i].style.filter = res;
      }
      this.$refs.typeList.children[id - 1].style.filter = "none";
    },
    openProList(id) {
      this.proTypeId = id;
      this.$refs.proList.style.zIndex = 1;
      this.$refs.proList.style.opacity = 1;
    },
    //返回操作
    backTo(res) {
      if (res == "type") {
        this.$refs.proList.style.zIndex = -1;
        this.$refs.proList.style.opacity = 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  text-align: center;
  .container {
    //start
    max-width: 1920px;
    //end
    min-width: 200px;
    width: 100%;
    margin: 0 auto;
    .thumb {
      //start
      height: 600px;
      //end
      background: #bdc3c7;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .thumb-tit {
        height: 34px;
        font-size: 36px;
        font-family: Source Han Sans CN Regular,
          Source Han Sans CN Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 39px;
      }
      .thumb-sub {
        height: 17px;
        font-size: 20px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        text-align: left;
        color: #ffffff;
        line-height: 39px;
      }
    }
    .product {
      width: 100%;
      min-height: 820px;
      position: relative;
      .type-list {
        width: 100%;
        height: 820px;
        display: flex;
        justify-content: center;
        align-items: center;
        .type-item {
          width: 350px;
          height: 310px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid #ebebeb;

          align-items: center;
          transition: all 0.5s;
          position: relative;
          cursor: pointer;

          &:last-child {
            border-right: 1px solid #ebebeb;
          }
          &:hover {
            border: 0px solid #ffffff;
          }
          .type-tit {
            width: 100%;
            position: relative;
            font-size: 118px;
            font-family: Source Han Sans CN Heavy,
              Source Han Sans CN Heavy-Heavy;
            font-weight: 800;
            color: #f1f1f1;
            line-height: 118px;

            .type-num {
              position: absolute;
              left: 50%;
              top: 40%;
              transform: translate(-50%);
              height: 20px;
              font-size: 20px;
              font-family: Source Han Sans CN Regular,
                Source Han Sans CN Regular-Regular;
              font-weight: 400;
              color: #333333;
              line-height: 47px;
            }
          }
        }
      }
      .pro-list {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.2s;
        display: flex;
        .pro-main {
          height: 100%;
          background: #ffffff;
          width: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          box-shadow: 0px 2px 32px 9px rgba(19, 4, 8, 0.1);
          .backto {
            position: absolute;
            right: 0;
            top: 50%;
            height: 60px;
            width: 30px;
            background: black;
            border-radius: 30px 0 0 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s;
            cursor: pointer;
            &:hover {
              background: cornflowerblue;
            }
          }
          .main-tit {
            margin-bottom: 75px;
            height: 40px;
            width: 130px;
            background: gray;
            border-radius: 10px;
            line-height: 40px;
          }
          img {
            width: 222px;
            height: 167px;
          }
          .pro-tit {
            width: 100%;
            position: relative;

            .num {
              font-size: 118px;
              font-family: Source Han Sans CN Heavy,
                Source Han Sans CN Heavy-Heavy;
              font-weight: 800;
              color: #13b0ea;
              line-height: 118px;
              opacity: 0.3;
            }
            .pro-num {
              position: absolute;
              left: 50%;
              top: 40%;
              transform: translate(-50%);
              height: 20px;
              font-size: 20px;
              font-family: Source Han Sans CN Regular,
                Source Han Sans CN Regular-Regular;
              font-weight: 700;
              line-height: 47px;
              color: #333333;
            }
          }
        }
        .pro-body {
          flex: 1;
          max-height: 100%;
          background: #ffffff;
          display: flex;
          justify-content: space-evenly;
          // align-items: stretch;
          flex-wrap: wrap;
          padding: 100px 20px;
          overflow-y: scroll;
          .pro-item {
            cursor: pointer;
            box-shadow: 0px 1px 5px 3px rgba(11, 4, 8, 0.07);
            //start
            width: 520px;
            height: 203px;
            margin: 20px;

            //end
            display: flex;
            transition: 0.2s;
            &:hover {
              transform: scale(1.1);
            }
            .pro-left {
              height: 100%;
              max-width: 188px;
            }
            .pro-right {
              box-sizing: border-box;
              padding: 0 30px;
              flex: 1;
              background: #fcfcfc;

              .pro-right-tit {
                width: 100%;
                //start
                height: 20px;
                font-size: 20px;
                margin: 36px 0;
                line-height: 20px;
                //end
                font-family: Source Han Sans CN Bold,
                  Source Han Sans CN Bold-Bold;
                font-weight: 700;
                text-align: left;
                color: #0284f2;
              }
              .pro-right-ind {
                width: 100%;
                //start
                min-height: 66px;
                font-size: 16px;
                line-height: 16px;
                //end
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #666666;
              }
              .pro-right-detail {
                //start
                min-height: 16px;
                font-size: 16px;
                line-height: 40px;
                //end
                font-family: Source Han Sans CN Normal,
                  Source Han Sans CN Normal-Normal;
                font-weight: Normal;
                text-align: right;
                color: #999999;
                letter-spacing: -1px;
              }
            }
          }
        }
      }
      .pro-detail {
        width: 100%;
        z-index: 2;
        background: #ffffff;
        display: none;
        min-height: 1000px;
        overflow: hidden;

        transition: 0.2s;
        .pro-detail-tit {
          //start
          height: 36px;
          font-size: 36px;
          line-height: 36px;
          padding-top: 50px;
          margin-bottom: 19px;
          //end
          transition: 0.2s;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          color: #000000;

          span {
            color: #0284f2;
          }
        }
        .pro-detail-sub {
          //start
          height: 36px;
          font-size: 36px;
          line-height: 36px;
          margin-bottom: 54px;
          //end
          transition: 0.2s;

          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          color: #000000;
        }
        .detail-tit {
          height: 480px;
          width: 100%;
          background: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
          .detail-tit-left {
            height: 360px;
            width: 500px;
            background: white;
            margin-right: 20px;
            padding: 20px 40px;
            box-sizing: border-box;
            img {
              height: 320px;
              width: 420px;
            }
          }
          .detail-tit-right {
            height: 360px;
            width: 500px;
            background: white;
            padding: 20px 40px;
            box-sizing: border-box;
            p {
              margin: 0;
              border-bottom: 1px solid #e2e2e2;
              //start
              height: 22px;
              font-size: 22px;
              line-height: 22px;
              padding-bottom: 17px;
              margin-bottom: 25px;
              //end
              font-family: Source Han Sans CN Regular,
                Source Han Sans CN Regular-Regular;
              font-weight: 400;
              text-align: left;
              color: #000000;
            }
            .tit-right-body {
              //start
              min-height: 198px;
              font-size: 14px;
              line-height: 26px;
              //end
              font-family: Source Han Sans CN Light,
                Source Han Sans CN Light-Light;
              font-weight: 300;
              text-align: left;
              color: #000000;
            }
          }
        }
        .executive {
          width: 100%;
          text-align: center;
          padding-bottom: 100px;
          .executive-main {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            // justify-content: space-between;
            margin: 0 auto;
            //start
            max-width: 1099px;
            min-width: 900px;
            width: 100%;
            //end

            .main-item {
              box-sizing: border-box;
              //start
              width: 33.3%;
              height: 20px;
              font-size: 20px;
              line-height: 20px;
              padding: 0 60px;
              margin-bottom: 20px;
              //end
              font-family: Source Han Sans CN Light,
                Source Han Sans CN Light-Light;
              font-weight: 300;
              text-align: left;
              color: #333333;
              display: flex;
              justify-content: space-between;
            }
          }
        }
        .product-use {
          height: 252px;
          width: 100%;
          background: #f9f9f9;
          padding-bottom: 30px;
          .use-body {
            text-align: center !important;
            //start
            height: 20px;
            font-size: 20px;
            line-height: 20px;
            //end
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #333333;
          }
        }
        .pro-canshu {
          max-width: 1920px;
          width: 100%;
          min-width: 900px;
          padding-bottom: 50px;
          .canshu-top {
            width: 100%;
            max-width: 1110px;
            margin-bottom: 20px;
            margin:0 auto;
            p {
              text-align: left;

              //start
              height: 20px;
              font-size: 20px;
              line-height: 20px;
              //end
              font-family: Source Han Sans CN Light,
                Source Han Sans CN Light-Light;
              font-weight: 300;
              text-align: left;
              color: #333333;
            }
          }
          .canshu-table {
            margin:0 auto;
            max-width: 1110px;
            width: 100%;
            background: #e2e2e2;

            font-size: 20px;
            line-height: 20px;

            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: center;
            color: #333333;
            .frist-line {
              height: 75px;
            }
            .frist-row {
              width: 305px;
            }
            tr {
              box-sizing: border-box;
              height: 62px;
              width: 400px;
            }

            th {
              box-sizing: border-box;

              background: white;
            }
            td {
              box-sizing: border-box;

              background: white;
            }
          }
        }
      }
    }
  }
}
</style>
