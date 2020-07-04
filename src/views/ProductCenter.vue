<template>
  <div class="about">
    <div class="container">
      <div class="thumb" ref="thumb">
        <img src="../assets/about_us_img01.png" alt="" />
        <div class="thumb-box">
          <div class="thumb-tit">
            产品中心
          </div>
          <div class="thumb-sub">
            Cable Union
          </div>
        </div>
      </div>
      <div class="product" ref="product">
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
              <div class="pro-bot">
                了解详情
              </div>
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
      local: "typeList",
    };
  },
  mounted() {
    this.$refs.proList.style.height = 0;

    let that = this;
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      if (that.local == "proList") {
        that.backTo("type");
      } else if (that.local == "proDetail") {
        that.backTo("proList");
      }
      history.pushState(null, null, document.URL);
    });
  },
  destroyed() {
    window.removeEventListener("popstate", function() {});
  },
  methods: {
    //进入详情页
    goProDetail(id) {
      this.proId = id;
      this.local = "proDetail";

      this.$refs.typeList.style.display = "none";
      this.$refs.proList.style.display = "none";
      this.$refs.proDetail.style.display = "block";
      this.$refs.thumb.style.display = "none";
    },
    hoverx(id, res) {
      let num = this.$refs.typeList.children.length;
      if (document.body.clientWidth > 768) {
        for (let i = 0; i < num; i++) {
          this.$refs.typeList.children[i].style.filter = res;
        }
        this.$refs.typeList.children[id - 1].style.filter = "none";
      }
    },
    openProList(id) {
      this.proTypeId = id;
      this.local = "proList";
      // this.$refs.proList.style.display = "block";
      this.$refs.proList.style.height = "auto";
      this.$refs.proList.style.zIndex = 1;
      this.$refs.proList.style.opacity = 1;
      this.$refs.thumb.style.display = "block";
      let clientW = document.body.clientWidth;
      if (clientW > 576 && clientW < 768) {
        this.$refs.product.style.minHeight = "1724px";
      } else if (clientW <= 567) {
        this.$refs.product.style.minHeight = "850px";
      }
    },
    //返回操作
    backTo(res) {
      if (res == "type") {
        this.local = "typeList";
        this.$refs.proList.style.height = "0";

        this.$refs.proList.style.zIndex = -1;
        this.$refs.proList.style.opacity = 0;
        this.$refs.thumb.style.display = "block";
        this.$refs.typeList.style.display = "flex";

        if (document.body.clientWidth < 576) {
          this.$refs.product.style.minHeight = "410px";
        }
      } else if (res == "proList") {
        this.local = "proList";
        this.$refs.thumb.style.display = "block";

        this.$refs.proDetail.style.display = "none";
        this.$refs.proList.style.display = "flex";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 50px) {
  .about {
    width: 100%;
    text-align: center;
    .container {
      //start
      //end
      width: 100%;
      margin: 0 auto;
      .thumb {
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        // width: 420px;
        img {
          width: 100%;
        }
        .thumb-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          width: 350px;
          height: 100px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;

          .thumb-tit {
            //start
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 10px;
            //end
            transition: 0.2s;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            position: relative;
            &::after {
              content: "";

              position: absolute;
              top: 50%;
              height: 2px;
              background: #ffffff;
              transform: translateY(-50%);
              //start
              left: -50px;
              width: 35px;
              //end
            }
            &::before {
              content: "";
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              height: 2px;
              background: #ffffff;
              //start
              right: -50px;
              width: 35px;

              //end
            }
          }
          .thumb-sub {
            //start
            height: 10px;
            font-size: 10px;
            line-height: 10px;
            //end
            transition: 0.2s;

            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #ffffff;
          }
        }
      }
      .product {
        width: 100%;
        //start
        min-height: 410px;
        //end
        position: relative;
        transition: 0.2s;
        .type-list {
          width: 100%;
          //start
          min-height: 410px;
          flex-wrap: wrap;
          //end
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s;

          .type-item {
            //start
            width: 50%;
            height: 205px;
            flex-direction: column;
            flex-wrap: wrap;
            //end
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s;
            position: relative;
            cursor: pointer;
            transition: 0.2s;

            img {
              //start
              width: 111px;
              height: 83px;

              //end
              transition: 0.2s;
            }
            .type-tit {
              width: 100%;
              position: relative;
              //start
              font-size: 59px;
              line-height: 59px;
              //end
              font-family: Source Han Sans CN Heavy,
                Source Han Sans CN Heavy-Heavy;
              font-weight: 800;
              color: #f1f1f1;
              transition: 0.2s;

              .type-num {
                position: absolute;
                left: 50%;
                top: 50%;
                transition: 0.2s;

                transform: translate(-50%, -50%);
                //start
                font-size: 10px;

                //end
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
                color: #333333;
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
          opacity: 0;
          transition: opacity 0.2s;
          display: flex;
          .pro-main {
            display: none;
          }

          .pro-body {
            flex: 1;
            // max-height: 100%;
            background: #ffffff;
            display: flex;
            justify-content: space-evenly;
            transition: 0.2s;

            //start
            flex-direction: column;
            align-items: center;
            padding: 50px 0;
            box-sizing: border-box;

            //end
            position: relative;
            .pro-item {
              position: relative;
              cursor: pointer;
              transition: 0.2s;

              //start
              width: 90%;
              height: auto;
              margin-bottom: 34px;
              //end
              display: flex;
              transition: 0.2s;
              .pro-left {
                //start
                width: 35%;
                min-height: 125px;
                margin-bottom: 30px;
                //end
                transition: 0.2s;
              }
              .pro-bot {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                transition: 0.2s;

                //start
                height: 30px;
                line-height: 30px;
                font-size: 16px;

                //end
                background: #333333;
                text-align: center;
                color: white;
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
              }
              .pro-right {
                box-sizing: border-box;
                transition: 0.2s;

                //start
                padding-left: 15px;
                //end
                flex: 1;
                background: #f5f5f5;

                .pro-right-tit {
                  width: 100%;
                  //start
                  height: 30px;
                  font-size: 14px;
                  line-height: 30px;

                  //end
                  transition: 0.2s;

                  font-family: Source Han Sans CN Bold,
                    Source Han Sans CN Bold-Bold;
                  font-weight: 700;
                  text-align: left;
                  color: #333333;
                }
                .pro-right-ind {
                  transition: 0.2s;

                  width: 100%;
                  //start
                  min-height: 33px;
                  font-size: 11px;
                  line-height: 18px;
                  //end
                  font-family: Source Han Sans CN Regular,
                    Source Han Sans CN Regular-Regular;
                  font-weight: 400;
                  text-align: left;
                  color: #666666;
                }
                .pro-right-detail {
                  display: none;
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
          overflow: hidden;
          transition: 0.2s;
          .pro-detail-tit {
            //start
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            padding-top: 25px;
            margin-bottom: 10px;
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
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 27px;
            //end
            transition: 0.2s;

            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            color: #000000;
          }
          .detail-tit {
            //start
            flex-direction: column;
            //end
            width: 100%;
            background: #f9f9f9;
            display: flex;

            justify-content: center;
            align-items: center;
            .detail-tit-left {
              height: 100%;
              width: 100%;
              //start
              margin: 25px 0;
              padding: 10px;
              //end
              background: white;
              box-sizing: border-box;
              img {
                //start
                height: 160px;
                width: 260px;
                //end
              }
            }
            .detail-tit-right {
              //start
              width: 100%;
              padding: 15px 35px;
              margin-bottom: 25px;
              //end
              background: white;
              box-sizing: border-box;
              p {
                margin: 0;
                border-bottom: 1px solid #e2e2e2;
                //start
                font-size: 10px;
                line-height: 19px;
                margin-bottom: 13px;
                //end
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #000000;
              }
              .tit-right-body {
                //start
                min-height: 100px;
                font-size: 10px;
                line-height: 12px;
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
            padding-bottom: 50px;
            .executive-main {
              display: flex;
              align-items: center;
              margin: 0 auto;
              //start
              max-width: 1099px;
              width: 90%;
              //end
              flex-wrap: wrap;

              .main-item {
                box-sizing: border-box;
                //start
                width: 40%;
                font-size: 10px;
                line-height: 16px;
                margin: 0 5%;
                margin-bottom: 10px;
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
            //start
            padding-bottom: 15px;

            min-height: 150px;
            //start
            width: 100%;
            background: #f9f9f9;
            .use-body {
              text-align: center !important;
              margin: 0 auto;
              //start
              font-size: 10px;
              line-height: 23px;
              width: 60%;
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
            padding: 25px 7%;
            box-sizing: border-box;
            .canshu-top {
              width: 100%;
              max-width: 1110px;
              //start
              margin-bottom: 10px;
              //start
              margin: 0 auto;
              p {
                text-align: left;

                //start
                font-size: 10px;
                line-height: 10px;
                //end
                font-family: Source Han Sans CN Light,
                  Source Han Sans CN Light-Light;
                font-weight: 300;
                text-align: left;
                color: #333333;
              }
            }
            .canshu-table {
              max-width: 1110px;
              background: #e2e2e2;
              //start
              width: 100%;

              font-size: 6px;
              line-height: 6px;
              //end
              font-family: Source Han Sans CN Light,
                Source Han Sans CN Light-Light;
              font-weight: 300;
              text-align: center;
              color: #333333;
              .frist-line {
                //start
                height: 37px;
              }
              .frist-row {
                width: 152px;
              }
              tr {
                box-sizing: border-box;
                height: 31px;
                width: 200px;
                //end
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
}
@media screen and (min-width: 576px) {
  .about {
    .container {
      .thumb {
        .thumb-box {
          .thumb-tit {
            height: 36px;
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 20px;
          }
          .thumb-sub {
            height: 20px;
            font-size: 20px;
            line-height: 20px;
          }
        }
      }
      .product {
        min-height: 820px;
        .type-list {
          min-height: 410px;
          .type-item {
            min-height: 410px;
            img {
              width: 222px;
              height: 170px;
            }
            .type-tit {
              font-size: 118px;
              line-height: 118px;
              .type-num {
                font-size: 20px;
              }
            }
          }
        }
        .pro-list {
          .pro-body {
            padding: 100px 0;
            // .backt {
            //   height: 80px;
            //   width: 80px;
            //   line-height: 80px;
            //   font-size: 80px;
            //   border-radius: 40px;
            // }
            .pro-item {
              margin-bottom: 70px;
              .pro-left {
                margin-bottom: 55px;
                min-height: 257px;
              }
              .pro-bot {
                height: 55px;
                line-height: 55px;
                font-size: 24px;
              }
              .pro-right {
                padding-left: 15px;
                .pro-right-tit {
                  height: 60px;
                  font-size: 28px;
                  line-height: 60px;
                  padding: 20px 0;
                }
                .pro-right-ind {
                  font-size: 22px;
                  line-height: 28px;
                }
              }
            }
          }
        }
        .pro-detail {
          .pro-detail-tit {
            height: 36px;
            font-size: 36px;
            line-height: 36px;
            padding-top: 50px;
            margin-bottom: 20px;
          }
          .pro-detail-sub {
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 50px;
          }
          .detail-tit {
            .detail-tit-left {
              padding: 20px 0;
              margin: 50px 0;
              img {
                width: 519px;
                height: 327px;
              }
            }
            .detail-tit-right {
              padding: 30px 70px;
              margin-bottom: 50px;
              p {
                font-size: 28px;
                line-height: 58px;
                margin-bottom: 26px;
              }
              .tit-right-body {
                font-size: 20px;
                line-height: 38px;
              }
            }
          }
          .executive {
            .executive-main {
              .main-item {
                // width: ;
                font-size: 20px;
                line-height: 36px;
                margin-bottom: 20px;
              }
            }
          }
          .product-use {
            padding-bottom: 30px;
            min-height: 300px;
            .use-body {
              font-size: 20px;
              line-height: 46px;
            }
          }
          .pro-canshu {
            .canshu-top {
              margin-bottom: 20px;
              p {
                font-size: 20px;
                line-height: 20px;
              }
            }
            .canshu-table {
              font-size: 11px;
              line-height: 11px;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
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
        .thumb-box {
          .thumb-tit {
            //start
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 10px;
            //end
          }
          .thumb-sub {
            //start
            height: 10px;
            font-size: 10px;
            line-height: 10px;
            //end
          }
        }
      }
      .product {
        width: 100%;

        //start
        min-height: 420px;
        //end
        position: relative;
        .type-list {
          //start
          height: 426px;
          //end
          display: flex;
          justify-content: center;
          align-items: center;
          .type-item {
            //start
            width: 111px;
            height: 154px;
            padding: 0 32px;
            //end
            min-height: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-left: 1px solid #ebebeb;

            align-items: center;
            transition: all 0.5s;
            position: relative;
            cursor: pointer;
            img {
              //start
              width: 100%;
              height: auto;
              margin-bottom: 8px;
              //end
            }
            &:last-child {
              border-right: 1px solid #ebebeb;
            }
            &:hover {
              border: 0px solid #ffffff;
            }
            .type-tit {
              width: 100%;
              position: relative;
              //start
              font-size: 59px;
              line-height: 59px;
              //end
              font-family: Source Han Sans CN Heavy,
                Source Han Sans CN Heavy-Heavy;
              font-weight: 800;
              color: #f1f1f1;

              .type-num {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                //start
                height: 10px;
                font-size: 10px;
                line-height: 10px;

                //end
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
                color: #333333;
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
          flex-direction: row;
          .pro-main {
            background: #ffffff;
            //start
            width: 250px;
            height: 420px;
            //end
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
              //start
              height: 30px;
              width: 15px;
              border-radius: 15px 0 0 15px;

              //end
              transform: translateY(-50%);
              background: black;
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
              //start
              margin-bottom: 32px;
              height: 20px;
              width: 65px;
              border-radius: 10px;
              line-height: 20px;
              font-size: 10px;
              //end
              background: gray;
            }
            img {
              //start
              width: 111px;
              height: 83px;
              //end
            }
            .pro-tit {
              width: 100%;
              position: relative;

              .num {
                //start
                font-size: 59px;
                line-height: 59px;
                //end
                font-family: Source Han Sans CN Heavy,
                  Source Han Sans CN Heavy-Heavy;
                font-weight: 800;
                color: #13b0ea;
                opacity: 0.3;
              }
              .pro-num {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                //start
                height: 10px;
                font-size: 10px;
                line-height: 10px;
                //end
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 700;
                color: #333333;
              }
            }
          }
          .pro-body {
            flex: 1;
            max-height: 100%;
            background: #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
            align-items: center;
            box-sizing: border-box;
            //start
            padding: 50px 0;

            //end
            .pro-item {
              //start
              width: 247px;
              height: 102px;
              //end
              display: flex;
              transition: 0.2s;
              margin-bottom: 0;
              .pro-bot {
                display: none;
              }
              &:hover {
                // transform: scale(1.1);
                box-shadow: 0px 1px 5px 3px rgba(11, 4, 8, 0.07);
              }
              .pro-left {
                //start
                width: 94px;
                min-height: 0;
                height: 100%;
                //end
              }
              .pro-right {
                box-sizing: border-box;
                //start
                padding: 0 15px;
                //end
                flex: 1;
                background: #fcfcfc;

                .pro-right-tit {
                  width: 100%;
                  //start
                  height: 10px;
                  font-size: 10px;
                  margin: 18px 0;
                  padding: 0;
                  line-height: 10px;
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
                  min-height: 33px;
                  font-size: 8px;
                  line-height: 8px;
                  //end
                  font-family: Source Han Sans CN Regular,
                    Source Han Sans CN Regular-Regular;
                  font-weight: 400;
                  text-align: left;
                  color: #666666;
                }
                .pro-right-detail {
                  display: block;
                  //start
                  min-height: 8px;
                  font-size: 8px;
                  line-height: 20px;
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
          overflow: hidden;
          transition: 0.2s;
          .pro-detail-tit {
            //start
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            padding-top: 25px;
            margin-bottom: 10px;
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
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 27px;
            //end
            transition: 0.2s;

            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            color: #000000;
          }
          .detail-tit {
            //start
            height: 240px;
            //end
            width: 100%;
            background: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            // padding: 40px 0;
            .detail-tit-left {
              margin: 0;
              padding: 0;
              //start
              height: 180px;
              width: 300px;
              padding: 10px 20px;
              margin-right: 10px;

              //end
              background: white;
              box-sizing: border-box;
              img {
                //start
                height: 160px;
                width: 260px;
                //end
              }
            }
            .detail-tit-right {
              margin: 0;
              padding: 0;
              //start
              height: 180px;
              width: 250px;
              padding: 10px 20px;

              //end
              background: white;

              box-sizing: border-box;
              p {
                margin: 0;
                border-bottom: 1px solid #e2e2e2;
                //start
                height: 11px;
                font-size: 11px;
                line-height: 16px;
                padding-bottom: 12px;
                margin-bottom: 10px;
                //end
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #000000;
              }
              .tit-right-body {
                //start
                min-height: 100px;
                font-size: 7px;
                line-height: 12px;
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
            padding-bottom: 50px;
            .executive-main {
              display: flex;
              align-items: center;
              justify-content: start;
              flex-direction: column;
              margin: 0 auto;

              //start
              max-width: 1099px;
              width: 100%;
              height: 60px;
              //end
              flex-wrap: wrap;

              .main-item {
                box-sizing: border-box;
                //start
                width: 215px;
                height: 10px;
                font-size: 10px;
                line-height: 10px;
                padding: 0 30px;
                margin-bottom: 10px;
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
            //start
            padding-bottom: 15px;
            min-height: 0px;
            height: 126px;
            //start
            width: 100%;
            background: #f9f9f9;
            .use-body {
              text-align: center !important;
              //start
              height: 10px;
              font-size: 10px;
              line-height: 10px;
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
            padding-bottom: 25px;
            .canshu-top {
              width: 100%;
              max-width: 1110px;
              //start
              margin-bottom: 10px;
              //start
              margin: 0 auto;
              p {
                text-align: left;

                //start
                height: 10px;
                font-size: 10px;
                line-height: 10px;
                //end
                font-family: Source Han Sans CN Light,
                  Source Han Sans CN Light-Light;
                font-weight: 300;
                text-align: left;
                color: #333333;
              }
            }
            .canshu-table {
              margin: 0 auto;
              max-width: 1110px;
              width: 100%;
              background: #e2e2e2;
              //start
              font-size: 10px;
              line-height: 10px;
              //end
              font-family: Source Han Sans CN Light,
                Source Han Sans CN Light-Light;
              font-weight: 300;
              text-align: center;
              color: #333333;
              .frist-line {
                //start
                height: 37px;
              }
              .frist-row {
                width: 152px;
              }
              tr {
                box-sizing: border-box;
                height: 31px;
                width: 200px;
                //end
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
}
@media screen and (min-width: 992px) {
  .about {
    .container {
      .thumb {
        .thumb-box {
          .thumb-tit {
            height: 28px;
            font-size: 28px;
            line-height: 28px;
            margin-bottom: 16px;
            &::after {
              width: 55px;
              left: -70px;
            }
            &::before {
              width: 55px;
              right: -70px;
            }
          }
          .thumb-sub {
            height: 14px;
            font-size: 15px;
            line-height: 15px;
          }
        }
      }
      .product {
        .type-list {
          height: 100%;
          .type-item {
            width: 146px;
            height: 203px;
            padding: 0 42px;
            img {
              margin-bottom: 12px;
            }
          }
        }
        .pro-list {
          .pro-main {
            height: 582px;
          }
          .pro-body {
            padding: 66px 0;
            .pro-main {
              height: 582px;
            }
            .pro-item {
              width: 362px;
              height: 133px;
              .pro-left {
                width: 124px;
                margin-bottom: 40px;
              }
              .pro-right {
                padding-left: 20px;
                .pro-right-tit {
                  font-size: 13px;
                  line-height: 20px;
                  height: 20px;
                }
                .pro-right-ind {
                  font-size: 11px;
                  line-height: 16px;
                }
              }
            }
          }
        }
        .pro-detail {
          .pro-detail-tit {
            height: 24px;
            font-size: 24px;
            line-height: 24px;
            padding-top: 32px;
            margin-bottom: 14px;
          }
          .pro-detail-sub {
            height: 24px;
            font-size: 24px;
            line-height: 24px;
            margin-bottom: 38px;
          }
          .detail-tit {
            height: 316px;
            .detail-tit-left {
              height: 240px;
              width: 400px;
              margin-right: 20px;
              img {
                height: 220px;
                width: 360px;
              }
            }
            .detail-tit-right {
              height: 240px;
              width: 400px;
              p {
                height: 14px;
                font-size: 14px;
                line-height: 20px;
                padding-bottom: 15px;
                margin-bottom: 13px;
              }
              .tit-right-body {
                font-size: 10px;
                line-height: 16px;
              }
            }
          }
          .executive {
            .executive-main {
              height: 90px;
              .main-item {
                width: 215px;
                font-size: 15px;
                line-height: 15px;
                margin-bottom: 15px;
                padding: 0 30px;
              }
            }
          }
          .product-use {
            height: 166px;
            padding-bottom: 20px;
            .use-body {
              height: 15px;
              font-size: 15px;
              line-height: 15px;
            }
          }
          .pro-canshu {
            padding-bottom: 35px;
            .canshu-top {
              margin-bottom: 15px;
              p {
                height: 15px;
                font-size: 15px;
                line-height: 15px;
              }
            }
            .canshu-table {
              font-size: 15px;
              line-height: 15px;
              .frist-line {
                height: 50px;
              }
              tr {
                height: 33px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .about {
    .container {
      .thumb {
        .thumb-box {
          .thumb-tit {
            height: 36px;
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 20px;
            &::after {
              width: 70px;
              left: -90px;
            }
            &::before {
              width: 70px;
              right: -90px;
            }
          }
          .thumb-sub {
            height: 20px;
            font-size: 20px;
            line-height: 20px;
          }
        }
      }
      .product {
        @media screen and (min-width: 1350px) {
          min-height: 853px;
          .pro-list {
            .pro-main {
              height: 853px;
              width: 400px;
              .backto {
                height: 50px;
                width: 25px;
                border-radius: 25px 0 0 25px;
              }
              .main-tit {
                margin-bottom: 60px;
                height: 30px;
                width: 110px;
                font-size: 17px;
                line-height: 30px;
              }
              img {
                width: 200px;
                height: 140px;
              }
            }
            .pro-body {
              .pro-item {
                width: 469px;
                height: 178px;
                margin-bottom: 59px;
                .pro-left {
                  width: 165px;
                  margin-bottom: 52px;
                }
                .pro-right {
                  padding-left: 24px;
                  .pro-right-tit {
                    font-size: 17px;
                    line-height: 52px;
                    height: 44px;
                  }
                  .pro-right-ind {
                    font-size: 14px;
                    line-height: 20px;
                  }
                }
              }
            }
          }
          @media screen and (min-width: 1450px) {
            .type-list {
              .type-item {
                width: 222px;
                height: 309px;
                padding: 0 64px;
                img {
                  margin-bottom: 16px;
                }
              }
            }
          }
          @media screen and (min-width: 1700px) {
            .pro-list {
              .pro-main {
                height: 853px;
                width: 500px;
                .backto {
                  height: 60px;
                  width: 30px;
                  border-radius: 30px 0 0 30px;
                }
                .main-tit {
                  margin-bottom: 75px;
                  height: 40px;
                  width: 130px;
                  font-size: 20px;
                  line-height: 40px;
                }
                img {
                  width: 222px;
                  height: 166px;
                }
              }
              .pro-body {
                .pro-item {
                  width: 534px;
                  height: 203px;
                  margin-bottom: 68px;
                  .pro-left {
                    width: 188px;
                    margin-bottom: 60px;
                  }
                  .pro-right {
                    padding-left: 30px;
                    .pro-right-tit {
                      font-size: 20px;
                      line-height: 60px;
                      height: 50px;
                    }
                    .pro-right-ind {
                      font-size: 16px;
                      line-height: 23px;
                    }
                  }
                }
              }
            }
          }
        }
        .pro-detail {
          .pro-detail-tit {
            height: 36px;
            font-size: 36px;
            line-height: 36px;
            padding-top: 40px;
            margin-bottom: 18px;
          }
          .pro-detail-sub {
            height: 36px;
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 52px;
          }
          .detail-tit {
            height: 480px;
            .detail-tit-left {
              height: 360px;
              width: 600px;
              img {
                height: 320px;
                width: 560px;
              }
            }
            .detail-tit-right {
              height: 360px;
              width: 600px;
              padding: 38px 50px;
              p {
                height: 22px;
                font-size: 22px;
                line-height: 30px;
                padding-bottom: 17px;
                margin-bottom: 25px;
              }
              .tit-right-body {
                font-size: 14px;
                line-height: 28px;
              }
            }
          }
          .executive {
            .executive-main {
              height: 90px;
              .main-item {
                font-size: 20px;
                line-height: 20px;
                margin-bottom: 20px;
                padding: 0;
              }
            }
          }
          .product-use {
            height: 252px;
            padding-bottom: 20px;
            .use-body {
              height: 20px;
              font-size: 20px;
              line-height: 20px;
            }
          }
          .pro-canshu {
            padding-bottom: 35px;
            .canshu-top {
              margin-bottom: 20px;
              p {
                height: 20px;
                font-size: 20px;
                line-height: 20px;
              }
            }
            .canshu-table {
              font-size: 20px;
              line-height: 20px;
              .frist-line {
                height: 75px;
              }
              tr {
                height: 50px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
