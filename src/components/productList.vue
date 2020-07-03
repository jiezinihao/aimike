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
          <span :class="{'product-active':typeId == 1}" @click="typeId = 1">电线电缆</span>
          <span :class="{'product-active':typeId == 2}" @click="typeId = 2">智能数据传输电缆</span>
          <span :class="{'product-active':typeId == 3}" @click="typeId = 3">电子电气产品</span>
          <span :class="{'product-active':typeId == 4}" @click="typeId = 4">连接器</span>
        </div>
      </div>
      <div class="c-main">
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
          <div class="add"></div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list02.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>

          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list03.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list03.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
      </div>
      <div class="pc-main" ref="cMain">
        <div class="pro-item">
          <img src="../assets/product_List01.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="induce">产品型号：QX-8952132</div>
          <div class="add"></div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list03.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img :src="srcsss" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list02.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>

          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list03.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
        <div class="pro-item">
          <img src="../assets/product_list03.png" alt="" />
          <div class="pro-tit">航空航天电缆</div>
          <div class="add"></div>
          <div class="induce">产品型号：QX-8952132</div>
        </div>
      </div>

      <div class="page">
        <div class="left" @click="changePro(-1)"></div>
        <div
          :class="['page-number', proIndex == 0 ? 'page-active' : '']"
          @click="changePro(0)"
        >
          1
        </div>
        <div
          :class="['page-number', proIndex == 1 ? 'page-active' : '']"
          @click="changePro(1)"
        >
          2
        </div>
        <div
          :class="[
            'page-number',
            'hidden-thr',
            proIndex == 2 ? 'page-active' : '',
          ]"
          @click="changePro(2)"
        >
          3
        </div>
        <div class="right" @click="changePro(-2)"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proIndex: 0,
      maxSize: 6,
      screenWidth: 0,
      typeId:1,
      srcsss : ""
    };
  },
  watch:{
    typeId:function(){
      this.srcsss = require("../assets/product_list0"+this.typeId+".png")
    }
  },
  mounted() {
    this.srcsss = require("../assets/product_List01.png")
  },
  /* eslint-enable */
  methods: {
    //res :-1是下一页
    //     -2是上一页
    //      其他为页面数 ~0
    changePro(res) {
      for (let i = 0; i < this.maxSize; i++) {
        this.$refs.cMain.childNodes[i].style.display = "none";
      }

      if (res == -1) {
        if (this.proIndex <= 0) {
          if (document.documentElement.clientWidth < 1450) {
            this.proIndex = 2;
          } else {
            this.proIndex = 1;
          }
        } else {
          this.proIndex -= 1;
        }
      } else if (res == -2) {
        if (document.documentElement.clientWidth < 1450) {
          if (this.proIndex >= 2) {
            this.proIndex = 0;
          } else {
            this.proIndex += 1;
          }
        } else {
          if (this.proIndex >= 1) {
            this.proIndex = 0;
          } else {
            this.proIndex += 1;
          }
        }
      } else {
        this.proIndex = res;
      }

      if (document.documentElement.clientWidth < 1450) {
        this.$refs.cMain.childNodes[this.proIndex * 2].style.display = "block";
        this.$refs.cMain.childNodes[this.proIndex * 2 + 1].style.display =
          "block";
          if(this.$refs.cMain.childNodes[this.proIndex * 2 + 2]){
          this.$refs.cMain.childNodes[this.proIndex * 2 + 2].style.display =
          "block";
          }

      } else {
        this.$refs.cMain.childNodes[this.proIndex * 3].style.display = "block";
        this.$refs.cMain.childNodes[this.proIndex * 3 + 1].style.display =
          "block";
        this.$refs.cMain.childNodes[this.proIndex * 3 + 2].style.display =
          "block";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// @media screen and (min-width: 567px) {
.container {
  height: 473px;
  width: 100%;

  text-align: center;
  background: url("../assets/product_img01.png") no-repeat center center;
  .center {
    margin: 0 auto;
    width: 90%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    position: relative;
    .c-title {
      width: 100%;
      height: 115px;
      display: flex;
      padding-top: 10px;
      margin-bottom: 10px;
      justify-content: space-between;
      align-items: center;

      .main-title {
        width: 279px;
        height: 45px;
        font-size: 59px;
        font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
        font-weight: 700;
        text-align: left;
        -webkit-text-fill-color: #ffffff;
        color: transparent;
        -webkit-text-stroke: 1px #eaeaea;
        position: relative;
        transition: .2s;
        &::after {
          position: absolute;
          content: "产品中心";
          top: -15px;
          left: 0;
          width: 183px;
          height: 35px;
          font-size: 36px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-weight: 700;
          text-align: left;
          -webkit-text-fill-color: #333333;
          -webkit-text-stroke: 0px #333333;

          color: #333333 !important;
        }
      }
      .m-more {
        width: 80px;
        height: 19px;
        font-size: 20px;
        font-family: Source Han Sans CN Regular,
          Source Han Sans CN Regular-Regular;
        font-weight: 400;
        text-align: right;
        color: #0284f2;
        line-height: 10px;
        cursor: pointer;
      }
      .select-tit {
        display: none;
      }
    }

    .page {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 180px;
      height: 23px;
      z-index: -1;
      .page-number {
        cursor: pointer;
        width: 9px;
        font-size: 18px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        text-align: left;
        color: #666666;
        letter-spacing: 1px;
        transition: .2s;
      }
      .page-active {
        color: #0284f2;
      }
      .left {
        cursor: pointer;
        line-height: 13px;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 14px solid #a4a4a4;
      }
      .right {
        cursor: pointer;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 14px solid #a4a4a4;
      }
    }
  }
}
// }
@media screen and (min-width: 50px) {
  .container {
    height: 278px;
    .center {
      .pc-main {
        display: none;
      }
      .c-title {
        box-sizing: border-box;
        height: 63px;
        padding-top: 64px;
        padding-bottom:20px;
        .main-title {
          width: 160px;
          font-size: 30px;
          &::after {
            font-size: 18px;
          }
        }
        .m-more {
          font-size: 10px;
        }
      }
      .c-main {
        height: 150px;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        margin: 0 auto;
        padding-bottom: 20px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none !important;
        }
        .pro-item {
          box-sizing: border-box;
          height: 145x;
          width: 157px;
          text-align: center;
          background-color: #fff;
          box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.14);
          margin-right: 21px;
          padding: 0 5px;
          padding-top: 10px;
          border-radius: 10px;
          position: relative;
        cursor: pointer;

          .add {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -12px;
            height: 23px;
            width: 23px;
            border-radius: 50%;
            background: url("../assets/add.png") no-repeat center center;
            background-color: #0284f2;
          }
          &:last-child {
            margin-right: 0 !important;
          }
          img {
            width: 125px;
            height: 74px;
          }
          .pro-tit {
            margin: 0 auto;
            //   width: 108px;
            height: 21px;
            font-size: 11px;
            font-family: Source Han Sans CN Medium,
              Source Han Sans CN Medium-Medium;
            font-weight: 500;
            text-align: center;
            color: #333333;
          }
          .add {
            bottom: -8px;
            width: 20px;
            height: 20px
          }
          .induce {
            height: 19px;
            font-size: 9px;
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
@media screen and (min-width: 578px) {
  .container {
    height: 458px;
    .center {
      .c-title {
        margin-bottom: 50px;
        height: 113px;
        .main-title {
          font-size: 59px;
          &::after {
            font-size: 28px;
          }
        }

        .m-more {
          font-size: 20px;
        }
      }
            .c-main {
        height: 300px;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        margin: 0 auto;
        padding-bottom: 20px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none !important;
        }
        .pro-item {
          box-sizing: border-box;
          height: 240px;
          width: 260px;
          margin-right: 42px;
          padding: 0 20px;
          padding-top: 10px;
          img {
            width: 220px;
            height: 130px;
          }
          .pro-tit {
            height: 21px;
            font-size: 22px;
            line-height: 15px;
            margin-bottom: 15px;

          }
          .add {
            bottom: -16px;
            width: 33px;
            height: 33px
          }
          .induce {
            height: 19px;
            font-size: 18px;
            line-height: 15px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 798px) {
    .container {
    height: 503px;
    .center {
      width: 90%;

      position: relative;

      //隐藏移动端主体
      .c-main {
        display: none;
      }

      .c-title {
        padding-top: 51px;
        margin-bottom: 47px;
        width: 100%;
        transition: .2s;
        //隐藏更多
        .m-more {
          display: none;
        }



        .select-tit {
          margin: 20px 0;
          display: block;
        .product-active {
          color: #0284f2;
          border-bottom: 3px solid #0284f2;
        }
          span {
            margin-left: 20px;
            font-size: 17px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: center;
            color: #333333;
            padding: 8px 0;
            cursor: pointer;
            transition:.2s;
            &:hover{
              color: #0284f2;
            }
          }
        }
      }
      .pc-main {
        width: auto;
        height: 235px;
        display: flex;
        margin: 0 auto;
        overflow: hidden;
        padding-bottom: 10px;
        justify-content: center;
        flex-wrap: wrap;
        scrollbar-width: none;
        .pro-item {
          width: 240px;
          height: 220px;
          text-align: center;
          background-color: #fff;
          box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.14);
          margin-right: 42px;
          padding: 0 20px;
          border-radius: 10px;
          margin-bottom: 35px;
        cursor: pointer;

          position: relative;
          .add {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background: url("../assets/add.png") no-repeat center center;
            background-color: #0284f2;
            bottom: -16px;
            width: 33px;
            height: 33px;
          }

          img {
            height: 138px;
            width: 200px;
            margin: 0 auto;
            margin-bottom: 10px;
          }
          .pro-tit {
            margin: 0 auto;
            //   width: 108px;
            height: 17px;
            font-size: 18px;
            font-family: Source Han Sans CN Medium,
              Source Han Sans CN Medium-Medium;
            font-weight: 500;
            text-align: center;
            color: #333333;
            line-height: 15px;
            margin-bottom: 14px;
          }
          .induce {
            height: 19px;
            font-size: 15px;
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: center;
            color: #666666;
            line-height: 17px;
          }
        }
      }

      .page {
        z-index: 1;
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .container {
    height: 623px;
    .center {
      box-sizing: border-box;
      max-width: 1437px;
      .c-title {
        box-sizing: border-box;
        padding-top: 41px ;
        margin-bottom: 25px;
        height:180px;
        width: 100%;
        .m-more {
          display: none;
        }
        .select-tit {
          display: block;
          span {
            margin-left: 47px;
            font-size: 20px;
            padding: 13px 0;
          }
        }
      }
      .pc-main {
        height: 280px;
        width: 105%;
        .pro-item{
          box-sizing: border-box;
          width: 320px;
          height: 270px;
          // display: block ;
          padding: 0 20px;
          img{
            margin-top: 10px;
            height: 150px;
            width: 190px;
            margin-bottom: 10px;
          }
          .pro-tit{
            margin-bottom: 19px;
          }

        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .container {
    height: 773px;
    .center {
      box-sizing: border-box;
      max-width: 1437px;
      .c-title {
        box-sizing: border-box;
        padding-top: 71px !important;
        margin-bottom: 42px;
        height: 210px;
        width: 100%;
        .main-title{
          &::after{
            font-size: 36px;
          }
        }
        .m-more {
          display: none;
        }
        .select-tit {
          display: block;
          span {
            margin-left: 47px;
            font-size: 24px;
            padding: 13px 0;
          }
        }
      }
      .pc-main {
        height: 395px;
        width: 105%;
        .pro-item{
          box-sizing: border-box;
          width: 420px;
          height: 388px;
          img{
            margin-top: 30px;
            height: 211px;
            width: 332px;
            margin-bottom: 30px;
          }
          .pro-tit{
            margin-bottom: 19px;
          }

        }
      }
      .page{
        width: 140px;
      }
    }
  }
}
@media screen and(min-width:1450px) {
  .hidden-thr {
    display: none;
  }
}
</style>
