<template>
  <div class="container">
    <div class="center">
      <div class="tit">
        <div class="tit-left">SERVICE</div>
        <div class="tit-right">
          <span class="serve-active">设计研发</span><span>查看更多</span>
        </div>
      </div>
      <div class="serve" ref="Mserve">
        <div class="menban"></div>
        <div class="m-serve-item">
          <div class="serve-img"></div>
          <div class="serve-tit">航空航天用电线电缆</div>
          <div class="serve-induce">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
        </div>
        <div class="m-serve-item">
          <div class="serve-img"></div>
          <div class="serve-tit">航空航天用电线电缆</div>
          <div class="serve-induce">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
        </div>
        <div class="m-serve-item">
          <div class="serve-img"></div>
          <div class="serve-tit">航空航天用电线电缆</div>
          <div class="serve-induce">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
        </div>
        <div class="m-serve-item">
          <div class="serve-img"></div>
          <div class="serve-tit">航空航天用电线电缆</div>
          <div class="serve-induce">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
        </div>
        <div class="opreation">
          <div :class="['o-item', itemIndex == 1 ? 'o-active' : '']"></div>
          <div :class="['o-item', itemIndex == 2 ? 'o-active' : '']"></div>
          <div :class="['o-item', itemIndex == 3 ? 'o-active' : '']"></div>
          <div :class="['o-item', itemIndex == 4 ? 'o-active' : '']"></div>
        </div>
      </div>
    </div>
    <div class="pc-serve">
      <div
        :class="['serve-item', itemIndex == 1 ? 'serve-active' : '']"
        @click="changeActive(1)"
      >
        <div class="default-ind">
          <div class="default-tit">航空航天用电线电缆</div>
          <div class="default-body">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
          <div class="default-detail">了解详情</div>
        </div>
        <div class="active-ind">
          <div class="iconfont iconchuan"></div>
          <div class="active-tit">
            舰船用线缆研发
          </div>
          <div class="active-main">
            适用于各种河海船舶及海上石油平台、钻井平台等水上建筑电气设备及仪表线路连接。
          </div>
        </div>
      </div>
      <div
        :class="['serve-item', itemIndex == 2 ? 'serve-active' : '']"
        @click="changeActive(2)"
      >
        <div class="default-ind">
          <div class="default-tit">航空航天用电线电缆</div>
          <div class="default-body">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
          <div class="default-detail">了解详情</div>
        </div>
        <div class="active-ind">
          <div class="iconfont iconchuan"></div>

          <div class="active-tit">
            舰船用线缆研发
          </div>
          <div class="active-main">
            适用于各种河海船舶及海上石油平台、钻井平台等水上建筑电气设备及仪表线路连接。
          </div>
        </div>
      </div>
      <div
        :class="['serve-item', itemIndex == 3 ? 'serve-active' : '']"
        @click="changeActive(3)"
      >
        <div class="default-ind">
          <div class="default-tit">航空航天用电线电缆</div>
          <div class="default-body">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
          <div class="default-detail">了解详情</div>
        </div>
        <div class="active-ind">
          <div class="iconfont icontezhongyixueyujunshiyixueke"></div>

          <div class="active-tit">
            舰船用线缆研发
          </div>
          <div class="active-main">
            适用于各种河海船舶及海上石油平台、钻井平台等水上建筑电气设备及仪表线路连接。
          </div>
        </div>
      </div>
      <div
        :class="['serve-item', itemIndex == 4 ? 'serve-active' : '']"
        @click="changeActive(4)"
      >
        <div class="default-ind">
          <div class="default-tit">航空航天用电线电缆</div>
          <div class="default-body">
            适用于航空、航天及电子等军工领域的高温、低温、高腐蚀、高辐射等苛刻环境下的电气设备及仪表线路连接。
          </div>
          <div class="default-detail">了解详情</div>
        </div>
        <div class="active-ind">
          <div class="iconfont iconguancai"></div>

          <div class="active-tit">
            舰船用线缆研发
          </div>
          <div class="active-main">
            适用于各种河海船舶及海上石油平台、钻井平台等水上建筑电气设备及仪表线路连接。
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
      itemIndex: 1,
      startX: 0,
    };
  },
  mounted() {
    this.$refs.Mserve.children[this.itemIndex].style.right = 0;
    this.$refs.Mserve.children[this.itemIndex].style.opacity = 1;

    document.addEventListener("touchstart", this.touch, false);
    document.addEventListener("touchend", this.touch, false);
  },
  destroyed() {
    document.removeEventListener("touchstart");
    document.removeEventListener("touchend");
  },
  methods: {
    touch(event) {
      if (event.target.className == "menban") {
        if (event.type == "touchstart") {
          this.startX = event.changedTouches[0].pageX;
        } else if (event.type == "touchend") {
          if (this.startX - event.changedTouches[0].pageX > 50) {
            if (this.itemIndex >= 1 && this.itemIndex <= 3) {
              this.$refs.Mserve.children[this.itemIndex].style.right = "150%";
              this.$refs.Mserve.children[this.itemIndex].style.opacity = 0;

              this.itemIndex += 1;
              this.$refs.Mserve.children[this.itemIndex].style.right = 0;
              this.$refs.Mserve.children[this.itemIndex].style.opacity = 1;
            }
          } else if (this.startX - event.changedTouches[0].pageX < -50) {
            if (this.itemIndex >= 2 && this.itemIndex <= 4) {
              this.$refs.Mserve.children[this.itemIndex].style.right = "-150%";
              this.$refs.Mserve.children[this.itemIndex].style.opacity = 0;

              this.itemIndex -= 1;
              this.$refs.Mserve.children[this.itemIndex].style.right = 0;
              this.$refs.Mserve.children[this.itemIndex].style.opacity = 1;
            }
          }
        }
      }
    },
    changeActive(res) {
      this.itemIndex = res;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 50px) {
  .container {
    box-sizing: border-box;
    width: 100%;
    //
    height: 580px;
    @media screen and (min-width: 480px) {
      height: 700px;
    }
    //
    text-align: center;
    .center {
      box-sizing: border-box;
      height: 100%;
      //
      max-width: 1437px;
      width: 90%;
      padding: 30px 0;
      //
      margin: 0 auto;
      padding-bottom: 20px;
      .tit {
        //
        height: 58px;
        //
        display: flex;
        justify-content: space-between;
        .tit-left {
          height: 25px;
          //
          font-size: 30px;
          //
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-weight: 700;
          text-align: left;
          -webkit-text-fill-color: #ffffff;
          color: transparent;
          -webkit-text-stroke: 1px #eaeaea;
          position: relative;
          &::after {
            position: absolute;
            content: "服务支持";
            //
            top: -13px;
            left: 0;
            width: 183px;
            height: 35px;
            font-size: 18px;
            //
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: left;
            -webkit-text-fill-color: #333333;
            -webkit-text-stroke: 0px #333333;

            color: #333333 !important;
          }
        }
        .tit-right {
          .serve-active {
            color: #0285f2;
            border-bottom: 2px solid #0285f2;
          }
          span {
            width: 79px;
            height: 19px;

            //
            padding-bottom: 5px;
            font-size: 14px;
            line-height: 34px;
            margin-left: 20px;

            //
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: right;
            color: #191c26;
          }
        }
      }
      .serve {
        position: relative;
        height: 90%;
        overflow: hidden;
        .opreation {
          width: 100%;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          .o-item {
            //
            width: 6px;
            height: 6px;
            margin-right: 10px;
            //
            border-radius: 50%;
            background: #8e8e8e;

            &:last-child {
              margin-right: 0;
            }
          }
          .o-active {
            background: #0284f2;
          }
        }
        .menban {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 6;
        }

        .m-serve-item {
          position: absolute;
          top: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          right: -140%;
          transition: 0.2s;
          // opacity: 0;

          .serve-img {
            //
            width: 100%;
            height: 300px;
            margin-bottom: 18px;
            //
            background: url("../assets/serve_img01.png") no-repeat center center;
            background-size: cover;
            @media screen and (min-width: 480px) {
              height: 400px;
            }
          }
          .serve-tit {
            //
            height: 29px;
            font-size: 17px;
            margin-bottom: 20px;

            //
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #333333;
          }
          .serve-induce {
            height: 68px;
            //
            margin-bottom: 20px;
            line-height: 25px;
            font-size: 13px;
            //
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #666666;
            padding-right: 10%;
            overflow: hidden;
          }
        }
      }
    }
  }
  .pc-serve {
    display: none;
  }
}
@media screen and (min-width: 576px) {
  .container {
    height: 1000px;
    .center {
      padding: 74px 0;
      padding-bottom: 0;
      height: 100%;
      .tit {
        height: 90px;
        .tit-left {
          font-size: 59px;
          &::after {
            top: -28px;
            font-size: 36px;
          }
        }
        .tit-right {
          span {
            padding-bottom: 10px;
            font-size: 20px;
            line-height: 54px;
            margin-left: 55px;
          }
        }
      }
      .serve {
        height: 90%;
        .menban {
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 6;
        }
        .opreation {
          .o-item {
            width: 12px;
            height: 12px;
            margin-right: 20px;
          }
        }
        .m-serve-item {
          .serve-img {
            height: 550px;
            width: 100%;
            margin-bottom: 38px;
          }
          .serve-tit {
            font-size: 30px;
            margin-bottom: 30px;
          }
          .serve-induce {
            font-size: 20px;
            line-height: 45px;
            margin-bottom: 38px;
            height: 100px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .container {
    text-align: center;
    height: auto;
    .center {
      .tit {
        .tit-right {
          .serve-active {
            border-bottom: 3px solid #0285f2;
          }
          span {
            height: 23px;
            font-size: 24px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: left;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  .serve {
    display: none !important;
  }
  .pc-serve {
    display: flex;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
    .serve-item {
      width: 20.5%;
      position: relative;
      background: url("../assets/serve_img01.png") no-repeat center center;
      background-size: cover;
      transition: 0.2s;
      &:nth-child(2) {
        background: url("../assets/serve_img02.png") no-repeat center center;
        background-size: cover;
      }
      &:nth-child(3) {
        background: url("../assets/serve_img04.png") no-repeat center center;
        background-size: cover;
      }
      &:nth-child(4) {
        background: url("../assets/serve_img03.png") no-repeat center center;
        background-size: cover;
      }
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.65;
        z-index: 2;
      }
      .default-ind {
        display: none;
      }
      .active-ind {
        position: absolute;
        bottom: 0;
        left: 10%;
        width: 80%;
        height: 30%;
        z-index: 5;
        .iconfont {
          width: 30px;
          height: 30px;
          font-size: 25px;
          line-height: 30px;
          color: #0284f2;
          background-color: white;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .active-tit {
          width: 100%;
          height: 19px;
          font-size: 18px;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          margin-bottom: 40px;
        }
        .active-main {
          height: 53px;
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #ffffff;
          line-height: 20px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: -20px;
            left: 0;
            height: 2px;
            width: 20px;
            background: white;
          }
        }
      }
    }
    .serve-active {
      .active-ind {
        display: none;
      }
      width: 37.5%;
      &::after {
        opacity: 0;
      }

      .default-ind {
        z-index: 3;
        position: absolute;
        // bottom: 0;
        top: 50%;
        box-sizing: border-box;
        transform: translateY(-50%);
        left: 0;
        width: 80%;
        height: 40%;
        background-color: white;
        padding-right: 20%;
        display: flex;
        flex-direction: column;
        text-align: right;
        justify-content: space-evenly;
        align-items: flex-end;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          border-radius: 50%;
          top: 50%;
          transform: translate(50%, -50%);
          height: 59px;
          width: 59px;
          background: url("../assets/firearrow.png") no-repeat center center;
          background-color: #0284f2;
        }
        .default-tit {
          width: 100%;
          height: 19px;
          font-size: 20px;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          color: #333333;
        }
        .default-body {
          width: 80%;
          height: 54px;
          font-size: 14px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: right;
          color: #666666;
          line-height: 20px;
        }
        .default-detail {
          width: 100%;
          height: 11px;
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: right;
          color: #0285f2;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 8px;
            right: 50px;
            height: 2px;
            width: 19px;
            background: #0285f2;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .pc-serve {
    height: 650px;
  }
}
@media screen and (min-width: 1200px) {
  .pc-serve {
    max-width: 1920px;
    height: 709px;
    .serve-item {
      .active-ind {
        .iconfont {
          width: 60px;
          height: 60px;
          font-size: 40px;
          line-height: 60px;
        }
        .active-tit{
          font-size: 20px;
        }
        .active-main{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
