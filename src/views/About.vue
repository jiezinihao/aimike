<template>
  <div class="about" ref="about">
    <div class="thumb">
      <img src="../assets/about_us_img01.png" alt="" />
      <div class="thumb-box">
        <div class="thumb-tit">
          关于我们
        </div>
        <div class="thumb-sub">
          About Us
        </div>
      </div>
      <div class="top-bar">
        <div class="bar-main">
          <span
            :class="{ 'bar-active': culture == 1 }"
            @click="(culture = 1), changeBar()"
            >公司简介</span
          >
          <span
            :class="{ 'bar-active': culture == 2 }"
            @click="(culture = 2), changeBar()"
            >企业文化</span
          >
          <span
            :class="{ 'bar-active': culture == 3 }"
            @click="(culture = 3), changeBar()"
            >荣誉资质</span
          >
        </div>
      </div>
    </div>
    <div class="synopsis">
      <div class="introduction">
        <div class="int-left">
          <div class="int-left-tit">
            安徽艾密克电联科技有限公司
          </div>
          <div class="int-left-int">
            <p>
              安徽艾密克电联科技有限公司是集电线电缆生产、销售、研发于一体的特种电缆重点企业，公司通过实施高端化、集成化、国际化战略，优化产业结构、不断提高产品质量，努力把公司建设成管理先进、技术密集、品牌卓著的国内一流、国际知名的电缆行业标杆。
            </p>
            <p>
              同时公司协同引导无为市优质的电缆研发、技术、生产和销售资源，防范恶意竞争
            </p>
            <p>
              更加高效的让科研院校和企业研发的先进研究成果投入到实际生产中，服务于国防军事建设；更加安全的让先进的军事技术运用到改善民生中，服务于国民经济建设
            </p>
          </div>
        </div>
        <img src="../assets/about_img01.png" alt="" class="int-right" />
      </div>

      <div class="course">
        <img src="../assets/about_us_img01.png" alt="" />
        <div class="mengban">
          <div class="course-item">
            <div class="course-tit"><span>10 </span>年</div>
            <div class="course-body">我司从2010年创业至今已有10年辉煌历程</div>
          </div>
          <div class="course-item">
            <div class="course-tit"><span>3200 </span>平方米</div>
            <div class="course-body">我司产业总占地面积3200平方米</div>
          </div>
          <div class="course-item">
            <div class="course-tit"><span>550 </span>+</div>
            <div class="course-body">公司发展至今已有500+产品</div>
          </div>
          <div class="course-item">
            <div class="course-tit"><span>150 </span>家</div>
            <div class="course-body">公司服务企业已达150家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="civilization">
      <div class="civ-tit">
        <span>C</span>ORPORATE CULTURE
        <p>企业文化</p>
      </div>
      <div class="dirction">
        <img src="../assets/test_img01.jpg" alt="" />
        <img src="../assets/test_img01.jpg" alt="" />
        <img src="../assets/test_img01.jpg" alt="" />
      </div>
      <div class="civ-ind">
        <img src="../assets/about_us_img01.png" alt="" />
        <div class="civ-menban">
          <div class="civ-item">
            <div class="item-tit">真北精益战略</div>
            <div class="item-subtit">安全、质量、效率、创新、队伍</div>
          </div>
          <div class="civ-item">
            <div class="item-tit">安全观</div>
            <div class="item-subtit">建设更美好的生活从安全开始</div>
          </div>
          <div class="civ-item">
            <div class="item-tit">品牌承诺</div>
            <div class="item-subtit">
              以不断创新的精神和终身信赖的品质助力客户成功
            </div>
          </div>
          <div class="civ-item">
            <div class="item-tit">愿景</div>
            <div class="item-subtit">成为智能注塑机全球领导者</div>
          </div>
        </div>
      </div>
    </div>
    <div class="road"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //页面导航
      culture: 1,
    };
  },
  methods: {
    changeBar() {
      for (let i = 1; i < 4; i++) {
        if (i == this.culture) {
          this.$refs.about.children[i].style.display = "block";
        } else {
          this.$refs.about.children[i].style.display = "none";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .about {
    width: 100%;
    text-align: center;
    .thumb {
      max-width: 1920px;
      width: 100%;
      margin: 0 auto;
      position: relative;
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

          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #ffffff;
        }
      }
      .top-bar {
        //start
        height: 40px;
        //end
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: 0.5;
        background: #ffffff;
        transition: 0.2s;

        .bar-main {
          //start
          padding: 0 10px;
          //end
          box-sizing: border-box;

          max-width: 700px;
          width: 100%;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          transition: 0.2s;

          span {
            //start
            transition: 0.2s;
            padding: 0 10px;

            height: 12px;
            font-size: 12px;
            line-height: 12px;
            //end
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #333333;
            cursor: pointer;
            &:hover {
              color: #0284f2;
            }
          }
          .bar-active {
            color: #0284f2;
          }
        }
      }
    }
    .synopsis {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;

      .introduction {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        //start
        height: 275px;
        padding: 35px 0;
        //end
        .int-left {
          height: 100%;
          //start
          width: 389px;
          margin-right: 22px;
          //end
          .int-left-tit {
            //start
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            //end
            font-family: Source Han Sans CN Medium,
              Source Han Sans CN Medium-Medium;
            font-weight: 500;
            text-align: left;
            color: #0284f2;
            transition: 0.2s;
          }
          .int-left-int {
            width: 100%;
            transition: 0.2s;

            //start
            line-height: 21px;
            font-size: 10px;
            //end
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #333333;
          }
        }
        .int-right {
          //start
          height: 205px;
          width: 255px;
          //end
          transition: 0.2s;
        }
      }
      .course {
        margin: 0 auto;
        transition: 0.2s;
        //start
        width: 700px;
        height: 150px;
        margin-bottom: 35px;
        //end
        position: relative;

        img {
          width: 100%;
          height: 100%;
          transition: 0.2s;
        }
        .mengban {
          transition: 0.2s;

          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 132, 242, 0.8);
          display: flex;
          justify-content: space-around;
          align-items: center;
          .course-item {
            transition: 0.2s;

            width: 25%;
            height: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            //start
            font-size: 9px;
            line-height: 9px;
            //end
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 700;
            text-align: center;
            color: #ffffff;
            .course-tit {
              transition: 0.2s;

              width: 80%;
              margin: 0 auto;
              //start
              margin-bottom: 20px;
              //end
              span {
                transition: 0.2s;

                //start
                height: 21px;
                line-height: 21px;
                font-size: 21px;
                //end
                font-family: Source Han Sans CN Bold,
                  Source Han Sans CN Bold-Bold;
                // position: relative;
                // .tail {
                //   position: absolute;
                //   left: 100%;
                //   bottom: 0;
                //   font-size: 9px;
                //   line-height: 9px;
                //   font-family: Source Han Sans CN Light,
                //     Source Han Sans CN Light-Light;
                //   font-weight: 700;
                //   width: 100%;
                //   text-align: left;
                // }
              }
            }
            .course-body {
              transition: 0.2s;

              width: 75%;
              margin: 0 auto;
              //start
              //end
            }
          }
        }
      }
    }
    .civilization {
      display: none;
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
      //start
      margin: 0 auto;
            margin-top: 34px;
      margin-bottom: 50px;
      //end
      transition: 0.2s;
      .civ-tit {
        width: 100%;
        text-align: center;
        transition: 0.2s;

        //start
        font-size: 18px;
        line-height: 18px;
        //end
        font-family: Source Han Sans CN Medium, Source Han Sans CN Medium-Medium;
        font-weight: 500;
        span {
          color: #0284f2;
        }
        p {
          color: #0284f2;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          //start
          margin: 9px 0 25px 0;
          //end
          transition: 0.2s;
        }
      }
      .dirction {
        //start
        width: 650px;
        height: 120px;
        margin: 0 auto;
        margin-bottom: 25px;
        //end
        transition: 0.2s;

        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          transition: 0.2s;

          height: 100%;
          //start
          width: 200px;
          //end
        }
      }
      .civ-ind {
        transition: 0.2s;

        width: 100%;
        //start
        max-width: 650px;
        height: 165px;
        //end
        margin: 0 auto;
        position: relative;
        img {
          height: 100%;
          width: 100%;
        }
        .civ-menban {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 132, 242, 0.8);
          transition: 0.2s;

          //start
          padding: 37px 60px;
          //end
          box-sizing: border-box;
          display: flex;
          align-items: center;
          .civ-item {
            width: 25%;
            height: 100%;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            border-left: 1px solid rgba($color: #ffffff, $alpha: 0.4);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .item-tit {
              width: 85%;
              transition: 0.2s;

              height: 20%;
              //start
              font-size: 13px;
              line-height: 13px;
              margin-bottom: 6px;
              //end
            }
            .item-subtit {
              width: 85%;
              height: 20%;
              transition: 0.2s;

              //start
              font-size: 8px;
              line-height: 12px;
              //end
            }
          }
        }
      }
    }
    .road {
      display: none;

      width: 100%;
      min-height: 100vh;
      background: lemonchiffon;
    }
  }
}
@media screen and (min-width: 992px) {
  .about {
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
      .top-bar {
        height: 60px;
        .bar-main {
          max-width: 924px;
          span {
            padding: 0 20px;
            height: 16px;
            font-size: 16px;
            line-height: 16px;
          }
        }
      }
    }
    .synopsis {
      .introduction {
        height: 362px;
        margin: 46px auto;
        margin-bottom: 0;
        .int-left {
          width: 518px;
          margin-right: 32px;
          .int-left-tit {
            height: 23.7px;
            font-size: 23.7px;
            line-height: 23.7px;
          }
          .int-left-int {
            line-height: 32px;
            font-size: 13px;
          }
        }
        .int-right {
          height: 270px;
          width: 330px;
        }
      }
      .course {
        width: 924px;
        height: 200px;
        margin-bottom: 55px;
        .mengban {
          .course-item {
            font-size: 12px;
            line-height: 12px;
            .course-tit {
              margin-bottom: 30px;
              span {
                height: 27px;
                line-height: 27px;
                font-size: 27px;
              }
            }
          }
        }
      }
    }
    .civilization {
      margin: 0auto;
            margin-top: 45px;
      margin-bottom: 66px;
      .civ-tit {
        font-size: 24px;
        line-height: 24px;
        p {
          margin: 12px 0 34px;
        }
      }
      .dirction {
        width: 858px;
        height: 158px;
        margin-bottom: 34px;
        img {
          width: 264px;
        }
      }
      .civ-ind {
        max-width: 858px;
        height: 220px;
        .civ-menban {
          padding: 50px 78px;
          .civ-item {
            .item-tit {
              font-size: 17px;
              line-height: 17px;
              margin-bottom: 8px;
            }
            .item-subtit {
              font-size: 10.5px;
              line-height: 15px;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .about {
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
      .top-bar {
        height: 80px;
        .bar-main {
          max-width: 1400px;
          padding: 0;
          span {
            padding: 0 35px;

            height: 20px;
            font-size: 20px;
            line-height: 20px;
          }
        }
      }
    }
    .synopsis {
      @media screen and (min-width: 1400px) {
        .introduction {
          padding: 0 10px;

          height: 480px;
          margin: 70px auto;
          margin-bottom: 0;
          .int-left {
            width: 778px;
            margin-right: 42px;
            .int-left-tit {
              height: 36px;
              font-size: 36px;
              line-height: 36px;
            }
            .int-left-int {
              line-height: 44px;
              font-size: 16px;
            }
            p {
              margin: 40px 0;
            }
          }
          .int-right {
            height: 410px;
            width: 555px;
          }
        }
        .course {
          width: 1400px;
          height: 300px;
          margin-bottom: 70px;
          .mengban {
            .course-item {
              font-size: 16px;
              line-height: 16px;
              .course-tit {
                margin-bottom: 30px;
                span {
                  height: 42px;
                  line-height: 42px;
                  font-size: 42px;
                }
              }
            }
          }
        }
      }
    }
    .civilization {
      margin: 0 auto;
      margin-top: 68px;
      margin-bottom: 100px;
      .civ-tit {
        font-size: 36px;
        line-height: 36px;
        p {
          margin: 18px 0 50px;
        }
      }
      .dirction {
        width: 1300px;
        height: 240px;
        margin-bottom: 50px;
        img {
          width: 400px;
        }
      }
      .civ-ind {
        max-width: 1300px;
        height: 330px;
        .civ-menban {
          padding: 74px 120px;
          .civ-item {
            .item-tit {
              font-size: 26px;
              line-height: 26px;
              margin-bottom: 12px;
            }
            .item-subtit {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
