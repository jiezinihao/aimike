<template>
  <div class="home">
    <topHeader></topHeader>
    <cerousel></cerousel>
    <div class="about">
      <div class="left"></div>
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
      <div class="left"></div>
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
    <news></news>
    <foot></foot>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
  width: 100%;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
  scrollbar-width: none;
  // border: none;
  -ms-overflow-style: none;
  // ::-webkit-scrollbar-track{
  //   background: none;
  // }
  ::-webkit-resizer {
    display: none;
  }
  @media screen and (max-width: 567px) {
    .about {
      display: none;
    }
    .m-about {
      width: 100%;
      height: 833px;
      display: block;
      margin: 60px auto;
      .left {
        height: 200px;
        width: 100%;
        margin-bottom: 40px;
        background: url("../assets/about_img01.png") no-repeat center center;
      }
      .right {
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
          height: auto;
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
  //移动端
  @media screen and (min-width: 567px) {
    .about {
      display: none;
    }
    .m-about {
      height: 833px;
      display: block;
      margin: 40px auto;
      .left {
        height: 420px;
        width: 100%;
        margin-bottom: 40px;
        background: url("../assets/about_img01.png") no-repeat center center;
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
          height: auto;
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
      width: 747px;
      height: 360px;
      margin: 80px auto;
      padding: 0 10px;
      display: flex;
      // align-items: center;

      .left {
        // float: left;
        display: inline-block;
        height: 100%;
        width: 400px;
        position: relative;
        background: url("../assets/about_img01.png") no-repeat center center;
        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          top: 0;
          right: -347px;
          height: 100%;
          width: 347px;
          background: #f6f6f6;
        }
      }
      .right {
        z-index: 10;
        display: inline-block;
        text-align: left;
        height: 578px;
        font-weight: 700;
        // text-align: justifyLeft;
        line-height: 32px;
        margin-left: 50px;
        h6 {
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-size: 28px;
          margin-top: 20px;
          margin-bottom: 21px;
          font-size: 23px;
          span {
            &:first-child {
              color: #0284f2;
            }
          }
        }
        .subtitle {
          width: 100%;
          height: 29px;
          font-size: 25px;
          font-weight: 700;
          text-align: left;
          color: #333333;
          margin-bottom: 22px;
        }
        .about-body {
          font-family: Source Han Sans CN Light;
          width: 400px;
          height: 176px;
          font-size: 11px;
          font-weight: 300;
          color: #333333;
          line-height: 32px;
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
  @media screen and (min-width: 992px) {
    .about {
      min-width: 992px;
      height: 478px;
      overflow: hidden;
      .left {
        width: 654px;
      }
      .right {
        margin-left: 50px;
        height: 100%;
        width: 450px;
        h6 {
          margin-top: 20px;
        }
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .about {
      min-width: 1400px;
      max-width: 1471px;
      height: 578px;
      margin: 80px auto;

      .left {
        width: 654px;
      }
      .right {
        margin-left: 210px;
        height: 100%;
        width: 550px;
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
          width: 537px;
          height: 226px;
          font-size: 16px;
          font-weight: 300;
          color: #333333;
          line-height: 42px;
          margin-bottom: 26px;
        }
        .in-detail {
        }
      }
    }
  }
}
</style>
<style lang="scss"></style>
