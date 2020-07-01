<template>
  <div class="home">
    <v-touch>
      <cerousel></cerousel>
    </v-touch>
    <div class="about">
      <div class="left">
        <div class="iconfont iconABOUT"></div>
        <div class="iconfont iconjuxing48kaobei"></div>
        <div class="img-btn">
          <div class="btn-left">
            <img src="../assets/top_icon01.png" alt="" /><span>电缆联盟</span>
          </div>
          <div class="btn-right">
            <img src="../assets/m_top_img01.png" alt="" /><span>艾密克</span>
          </div>
        </div>
      </div>
      <div class="right">
        <h6><span>ABOUT </span>US</h6>
        <div class="subtitle">
          关于艾密克
        </div>
        <div class="about-body">
          安徽艾密克电联科技有限公司是集电线电缆生产、销售、研发于一体的特种电缆重点企业，公司通过实施高端化、集成化、国际化战略，优化产业结构、不断提高产品质量，努力把公司建设成管理先进、技术密集、品牌卓著的国内一流、国际知名的电缆行业标杆。
          同时公司协同引导无为市优质的电缆研发、技术、生产和销售资源，防范恶意竞争。
        </div>
        <div class="in-detail">
          <span class="icon"></span>
          <span>了解详情</span>
        </div>
      </div>
    </div>
    <div class="m-about">
      <div class="left">
        <div class="img-btn">
          <div class="btn-left">
            <img src="../assets/top_icon01.png" alt="" /><span>电缆联盟</span>
          </div>
          <div class="btn-right">
            <img src="../assets/m_top_img01.png" alt="" /><span>艾密克</span>
          </div>
        </div>
      </div>
      <div class="right">
        <h6><span>ABOUT </span>US</h6>
        <div class="subtitle">
          关于艾密克
        </div>
        <div class="about-body">
          安徽艾密克电联科技有限公司是集电线电缆生产、销售、研发于一体的特种电缆重点企业，公司通过实施高端化、集成化、国际化战略，优化产业结构、不断提高产品质量，努力把公司建设成管理先进、技术密集、品牌卓著的国内一流、国际知名的电缆行业标杆。
          同时公司协同引导无为市优质的电缆研发、技术、生产和销售资源，防范恶意竞争。
        </div>
        <div class="in-detail">
          <span class="icon"></span>
          <span>了解详情</span>
        </div>
      </div>
    </div>
    <product-list></product-list>
    <serveCenter></serveCenter>
    <news></news>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  width: 100%;
    overflow: hidden;
  scrollbar-width: none !important;
  // border: none;
  -ms-overflow-style: none !important;
  // ::-webkit-scrollbar-track{
  //   background: none;
  // }
  ::-webkit-resizer {
    display: none;
  }
  @media screen and (max-width: 568px) {
    .about {
      display: none;
    }
    .m-about {
      width: 90%;
      height: 553px;
      padding-bottom: 30px;
      display: block;
      margin: 20px auto;
      .left {
        height: 250px;
        width: 100%;
        margin-bottom: 20px;
        background: url("../assets/about_img01.png") no-repeat center center;
        background-size: cover;
        position: relative;
        .img-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40px;
          display: flex;

          .btn-left {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 2;
              background: white;
              opacity: 0.3;
            }
            span {
              color: white;
            }
            img {
              z-index: 3;
              width: 40px;
              height: 30px;
              margin-right: 10px;
              opacity: 1 !important;
            }
          }
          .btn-right {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 2;
              background: #0284f2;
            }
            span {
              z-index: 3;
              color: white;
            }
            img {
              z-index: 3;
              width: 60px;
              height: 24px;
              margin-right: 10px;
            }
          }
        }
      }
      .right {
        height: 374px;
        width: 100%;
        // margin: ;
        font-weight: 700;
        line-height: 22px;
        text-align: left;

        h6 {
          margin: 0;
          margin-bottom: 12px;
          height: 21px;
          font-size: 17px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          span {
            &:first-child {
              color: #0284f2;
            }
          }
        }
        .subtitle {
          width: 100%;
          height: 29px;
          font-size: 19px;
          font-weight: 700;
          text-align: left;
          color: #333333;
          margin-bottom: 12px;
        }
        .about-body {
          font-family: Source Han Sans CN Light;
          width: 100%;
          max-height: 194px;
          font-size: 12px;
          margin-bottom: 19px;
          overflow: hidden;
          font-weight: 300;
          color: #333333;
          line-height: 32px;
        }
        .in-detail {
          font-family: Source Han Sans CN Light;
          color: #0284f2;
          font-size: 13px;
          font-weight: 300;
          line-height: 26px;
          .icon {
            display: inline-block;
            width: 19px;
            height: 2px;
            margin-right: 6px;
            background: #0284f2;
            margin-bottom: 3px;
          }
        }
      }
    }
  }
  //移动端
  @media screen and (min-width: 568px) {
    .about {
      display: none;
    }
    .m-about {
      height: 833px;
      display: block;
      width: 90%;
      margin: 40px auto;
      .left {
        height: 450px;
        width: 100%;
        margin-bottom: 40px;
        background: url("../assets/about_img01.png") no-repeat center center;
        position: relative;
                .img-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          display: flex;

          .btn-left {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 2;
              background: white;
              opacity: 0.3;
            }
            span {
              color: white;
            }
            img {
              z-index: 3;
              width: 60px;
              height: 44px;
              margin-right: 10px;
              opacity: 1 !important;
            }
          }
          .btn-right {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 2;
              background: #0284f2;
            }
            span {
              z-index: 3;
              color: white;
            }
            img {
              z-index: 3;
              width: 70px;
              height: 30px;
              margin-right: 10px;
            }
          }
        }
      }
      .right {
        margin: 0 auto;
        height: 374px;
        width: 96%;
        // margin: ;
        font-weight: 700;
        line-height: 42px;
        text-align: left;
        h6 {
          margin: 0;
          margin-bottom: 26px;
          height: 21px;
          font-size: 28px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          span {
            &:first-child {
              color: #0284f2;
            }
          }
        }
        .subtitle {
          width: 100%;
          height: 29px;
          font-size: 30px;
          font-weight: 700;
          text-align: left;
          color: #333333;
          margin-bottom: 23px;
        }
        .about-body {
          font-family: Source Han Sans CN Light;
          width: 100%;
          height: 176px;
          font-size: 16px;
          margin-bottom: 19px;

          font-weight: 300;
          color: #333333;
          line-height: 42px;
        }
        .in-detail {
          font-family: Source Han Sans CN Light;
          color: #0284f2;
          font-size: 16px;
          font-weight: 300;
          line-height: 36px;
          .icon {
            display: inline-block;
            width: 38px;
            height: 3px;
            margin-right: 12px;
            background: #0284f2;
            margin-bottom: 3px;
          }
        }
      }
    }
  }
  //pc端
  @media screen and (min-width: 768px) {
    .m-about {
      display: none;
    }
    .about {
      overflow: hidden;
      margin: 0 auto;
      width: 687px;
      height: 290px;
      margin: 80px auto;
      padding: 0 10px;
      display: flex;
      position: relative;
      // align-items: center;

      .left {
        // float: left;
        display: inline-block;
        height: 100%;
        width: 300px;
        position: relative;
        background: url("../assets/about_img01.png") no-repeat center center;
        background-size: cover;
        .iconABOUT {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -50px;
          // height: 100%;
          width: 93px;
          font-size: 200px;
          color: #e6e6e6;
          z-index: 2;
        }
        .iconjuxing48kaobei {
          position: absolute;
          top: 20px;
          right: -110px;
          font-size: 14px;
          z-index: 3;
          color: #0284f2;
        }
        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          top: 0;
          right: -187px;
          height: 100%;
          width: 187px;
          background: #f6f6f6;
        }
        .img-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40px;
          display: flex;

          .btn-left {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 2;
              background: white;
              opacity: 0.3;
            }
            span {
              color: white;
              font-size: 11px;
            }
            img {
              z-index: 3;
              width: 30px;
              height: 18px;
              margin-right: 10px;
              opacity: 1 !important;
            }
          }
          .btn-right {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 2;
              background: #0284f2;
            }
            span {
              z-index: 3;
              color: white;
              font-size: 11px;
            }
            img {
              z-index: 3;
              width: 50px;
              height: 16px;
              margin-right: 10px;
            }
          }
        }
      }
      .right {
        z-index: 1;
        display: inline-block;
        text-align: left;
        height: 578px;
        font-weight: 700;
        // text-align: justifyLeft;
        line-height: 32px;
        margin-left: 110px;
        h6 {
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          margin-top: 50px;
          margin-bottom: 5px;
          font-size: 15px;
          line-height: 19px;
          span {
            &:first-child {
              color: #0284f2;
            }
          }
        }
        .subtitle {
          width: 100%;
          height: 29px;
          font-size: 16px;
          font-weight: 700;
          text-align: left;
          color: #333333;
          margin-bottom: 5px;
        }
        .about-body {
          font-family: Source Han Sans CN Light;
          width: 300px;
          height: 136px;
          font-size: 8px;
          font-weight: 300;
          color: #333333;
          line-height: 22px;

          margin-bottom: 12px;
        }
        .in-detail {
          font-family: Source Han Sans CN Light;
          color: #0284f2;
          font-size: 7px;
          font-weight: 300;
          line-height: 26px;
          .icon {
            display: inline-block;
            width: 28px;
            height: 2px;
            margin-right: 6px;
            background: #0284f2;
            margin-bottom: 1px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .about {
      min-width: 992px;
      height: 398px;
      overflow: hidden;
      .left {
        width: 554px;
        background-size: cover;
        .iconABOUT {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -20px;
          // height: 100%;
          width: 93px;
          font-size: 270px;
          color: #e6e6e6;
          z-index: 2;
        }
        .iconjuxing48kaobei {
          right: -150px;
          font-size: 25px;
        }
        &::after {
          width: 267px;
          right: -267px;
        }
        .img-btn {
          height: 50px;

          .btn-left {
            span {
              font-size: 14px;
            }
            img {
              width: 40px;
              height: 30px;
            }
          }
          .btn-right {
            span {
              font-size: 14px;
            }
            img {
              width: 60px;
              height: 24px;
            }
          }
        }
      }
      .right {
        margin-left: 170px;
        height: 100%;
        width: 450px;
        h6 {
          margin-top: 80px;
          margin-bottom: 11px;
          font-size: 20px;
        }
        .about-body {
          height: 216px;
          line-height: 32px;
          font-size: 14px;
          width: 400px;
        }
        .subtitle {
          font-size: 21px;
        }
        .in-detail {
          font-size: 16px;
          .icon {
            width: 38px;
            height: 3px;
            margin-bottom: 6px;
            margin-right: 12px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1300px) {
    .about {
      min-width: 1300px;
      height: 578px;
      margin: 80px auto;

      .left {
        width: 568px !important;
        .iconABOUT {
          font-size: 350px;
        }
        .iconjuxing48kaobei {
          top: 40px;
          right: -230px;
          font-size: 40px;
        }
        &::after {
          width: 347px;
          right: -347px;
        }
                .img-btn {
          height: 60px;

          .btn-left {
            span {
              font-size: 17px;
            }
            img {
              width: 69px;
              height: 44px;
            }
          }
          .btn-right {
            span {
              font-size: 17px;
            }
            img {
              width: 70px;
              height: 30px;
            }
          }
        }
      }
      .right {
        margin-left: 210px;
        height: 100%;
        min-width: 500px;
        h6 {
          margin-top: 124px;
          height: 21px;
          font-size: 28px;
          line-height: 42px;
          margin-bottom: 31px;
        }
        .subtitle {
          height: 29px;
          font-size: 30px;
          margin-bottom: 32px;
        }
        .about-body {
          width: 480px;
          height: 226px;
          font-size: 16px;
          font-weight: 300;
          color: #333333;
          line-height: 42px;
          margin-bottom: 36px;
        }
        .in-detail {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
<style lang="scss"></style>
