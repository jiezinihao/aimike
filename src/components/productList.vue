<template>
  <div class="container">
    <div class="bgc"></div>
    <div class="center">
      <div class="c-title">
        <div class="main-title">
          PRODUCT
        </div>
        <div class="m-more">查看更多</div>
        <div class="select-tit">
          <span class="product-active">电线电缆</span>
          <span>智能数据传输电缆</span>
          <span>电子电气产品</span>
          <span>连接器</span>
        </div>
      </div>
      <div class="c-main">
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list02.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list03.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

@media screen and (min-width: 567px) {
  .container {
    height: 473px;
    width: 100%;
    text-align: center;
    background: url("../assets/product_img01.png") no-repeat center center;
    .center {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-align: center;
      .c-title {
        width: 95%;
        height: 115px;
        display: flex;
        padding-top: 10px;
        margin: 0 auto;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;

        .main-title {
          width: 279px;
          height: 45px;
          border: NaNpx solid #eaeaea;
          font-size: 59px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-weight: 700;
          text-align: left;
          color: #ffffff;
          position: relative;
          &::after {
            position: absolute;
            content: "产品中心";
            top: -25px;
            left: 0;
            width: 183px;
            height: 35px;
            font-size: 36px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: left;
            color: #333333;
          }
        }
        .m-more {
          width: 80px;
          height: 19px;
          font-size: 20px;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: justifyLeft;
          color: #0284f2;
          line-height: 36px;
        }
        .select-tit {
          display: none;
        }
      }
      .c-main {
        height: 300px;
        width: 90%;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        margin: 0 auto;
        padding-bottom: 10px;
        .pro-item {
          width: 240px;
          height: 290px;
          text-align: center;
          background-color: #fff;
          box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.14);
          margin-right: 42px;
          padding: 0 40px;
          border-radius: 10px;
          img {
            height: 158px;
            width: 249px;
            margin: 0 auto;
            margin-bottom: 15px;
          }
          .pro-tit {
            margin: 0 auto;
            //   width: 108px;
            height: 21px;
            font-size: 22px;
            font-family: Source Han Sans CN Medium,
              Source Han Sans CN Medium-Medium;
            font-weight: 500;
            text-align: center;
            color: #333333;
            line-height: 15px;
            margin-bottom: 17px;
          }
          .induce {
            height: 19px;
            font-size: 18px;
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: center;
            color: #666666;
            line-height: 20px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {

}
@media screen and (min-width: 992px) {
  .container {
    .center {
      max-width: 1396px;
      .c-title {
        .m-more {
          display: none;
        }
        .select-tit {
          display: block;
          margin: 20px 0;
          .product-active {
            color: #0284f2;
            border-bottom: 3px solid #0284f2;
          }
          span {
            margin-left: 27px;
            font-size: 20px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: center;
            color: #333333;
            padding: 8px 0;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .container {
    .center {
      .c-title {
        .select-tit {
          span {
            margin-left: 47px ;
            font-size: 24px;
            padding: 13px 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .container {
    .center {
    }
  }

  .c-title {
  }
}
</style>
