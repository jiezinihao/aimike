<template>
  <div class="container">
    <div class="center">
      <div class="c-title">
        <div class="main-title">
          INFORMATION
        </div>
        <div class="select-tit">
          <span class="product-active">公司新闻</span>
          <span>行业资讯</span>
        </div>
      </div>
      <div class="news">
        <div class="news-item news-active">
          <img src="../assets/news_img01.png" alt="" />
          <div class="news-tit">以色列国防部来我公司进行技术交流</div>
          <div class="news-induce">
            2017年度营销经理联谊会，热烈欢送抗洪抢险子弟兵，抗洪真英雄
          </div>
          <div class="new-time">05-10</div>
        </div>
        <div class="news-item">
          <img src="../assets/news_img02.png" alt="" />
          <div class="news-tit">以色列国防部来我公司进行技术交流</div>
          <div class="news-induce">
            2017年度营销经理联谊会，热烈欢送抗洪抢险子弟兵，抗洪真英雄
          </div>
          <div class="new-time">05-10</div>
        </div>
        <div class="news-item" ref="lastItem" style="display:none">
          <img src="../assets/news_img03.png" alt="" />
          <div class="news-tit">以色列国防部来我公司进行技术交流</div>
          <div class="news-induce">
            2017年度营销经理联谊会，热烈欢送抗洪抢险子弟兵，抗洪真英雄
          </div>
          <div class="new-time">05-10</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      screenw:document.documentElement.clientWidth
    }
  },
  watch:{
    screenw:function(){
      if(this.screenw > 1550){
        this.$refs.lastItem.style.display = "block"
      }else{
        this.$refs.lastItem.style.display = "none"

      }
    }
  },
  mounted(){
    window.onresize = () =>{
      return (()=>{
        this.screenw = document.documentElement.clientWidth
      })()
    }
  }
};
</script>
<style lang="scss" scoped>
.main-title {
  -webkit-text-fill-color: #ffffff;
  color: transparent;
  -webkit-text-stroke: 1px #eaeaea;
  &::after {
    -webkit-text-fill-color: #333333;
    -webkit-text-stroke: 0px #333333;
  }
}
@media screen and (min-width: 50px) {
  .center {
    margin: 0 auto;
    width: 90%;
    padding: 0 10px;

    .c-title {
      width: 100%;
      height: 45px;
      display: flex;
      padding-top: 25px;
      justify-content: space-between;
      .main-title {
        // height: 55px;
        font-size: 30px;
        @media screen and (max-width:375px){
          font-size: 25px;
        }
        font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
        font-weight: 700;
        text-align: left;
        position: relative;
        // -webkit-text-fill-color: #ffffff;
        // color: transparent;
        // -webkit-text-stroke: 1px #eaeaea;
        &::after {
          position: absolute;
          content: "新闻动态";
          // -webkit-text-fill-color: #333333;
          top: -18px;
          left: 0;
          height: 35px;
          width: 90px;
          font-size: 19px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-weight: 700;
          text-align: left;
          color: #333333;
        }
      }
      .select-tit {
        width: 100%;
        // padding-right: 20px;
        overflow: hidden;
        text-align: right;
        .product-active {
          color: #0284f2;
          border-bottom: 2px solid #0284f2;
          margin-right: 10px
        }
        span {
          font-size: 14px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-weight: 400;
          text-align: center;
          color: #666666;
          padding: 11px 0;
        }
      }
    }
    .news {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      
      overflow: hidden;
      margin-bottom: 24px;
      scrollbar-width: none !important;
      &::-webkit-scrollbar{
        display: none;
      }
      .news-item {
        width: 100%;
        margin: 20px 0;

        img {
          height: auto;
          width: 100%;
          margin-bottom: 16px;
        }
        .news-tit {
          width: 100%;
          height: 29px;
          font-size: 16px;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          line-height: 35px;
          margin-bottom: 20px;
        }
        .news-induce {
          overflow: hidden;

          width: 100%;
          height: 21px;
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #666666;
          line-height: 29px;
          margin-bottom: 25px;
        }
        .new-time {
          width: 100%;
          height: 14px;
          font-size: 13x;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: left;
          color: #666666;
          line-height: 20px;
          padding-top: 13px;
          border-top: 2px solid #e8e8e8;
          position: relative;
          &::after {
            display: none;
            content: ">";
            position: absolute;
            right: 10px;
            bottom: 0;
            width: 9px;
            height: 18px;
            font-size: 25px;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            color: #0285f2;
          }
        }
      }
    }
    .news-active {
      .news-tit {
        color: #0285f2 !important;
      }
      .new-time {
        border-top: 2px solid #0285f2 !important;
        &::after {
          display: block !important;
        }
      }
    }
  }
}
@media screen and (min-width: 576px) {
  .center {
    .c-title {
      margin-bottom: 20px;

      height: 65px;
      .main-title {
        font-size: 50px;
        &::after {
          top: -28px;
          width: 200px;
          font-size: 36px;
        }
      }
      .select-tit {
        padding-right: 0;

        .product-active {
          color: #0284f2;
          border-bottom: 3px solid #0284f2;
          margin-right: 20px;
        }
        span {
          height: 20px;
          font-size: 20px;
          font-weight: 400;
          text-align: right;
          line-height: 54px;
        }
      }
    }
  }
}
@media screen and (min-width: 750px) {
  .container {
    width: 100%;
    text-align: center;

    .center {
      margin: 0 auto;
      width: 90%;
      height: 683px;
      overflow: hidden;
      text-align: center;
      .c-title {
        width: 100%;
        height: 85px;
        display: flex;
        padding-top: 32px;
        margin-bottom: 62px !important;
        justify-content: space-between;
        align-items: center;
        .main-title {
          height: 49px;
          font-size: 59px;
          font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
          font-weight: 700;
          text-align: left;
          color: #ffffff;
          position: relative;
          &::after {
            position: absolute;
            content: "新闻动态";
            top: -24px;
            left: 0;
            height: 35px;
            width: 170px;
            font-size: 36px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: left;
            color: #333333;
          }
        }
        .select-tit {
          margin-right: 20px;
          .product-active {
            color: #0284f2;
            border-bottom: 3px solid #0284f2 !important;
            margin-right: 20px;
          }
          span {
            font-size: 20px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 400;
            text-align: center;
            color: #333333;
            padding: 11px 0;
          }
        }
      }
      .news {
        flex-direction: row;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        // overflow-x: auto;
        overflow: hidden;

        .news-item {
          width: 350px;
          height: 110%;
          margin-right: 33px;

          &:last-child {
            margin-right: 0;
          }
          img {
            width: 350px;
            margin-bottom: 34px;
          }
          .news-tit {
            width: 100%;
            font-size: 18px;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #333333;
            margin-bottom: 23px;
          }
          .news-induce {
            width: 100%;
            height: 44px;
            font-size: 14px;
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #666666;
            line-height: 20px;
            margin-bottom: 18px;
          }
          .new-time {
            width: 100%;
            height: 14px;
            font-size: 18px;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #666666;
            line-height: 20px;
            padding-top: 23px;
            padding-bottom: 20px;
            border-top: 2px solid #e8e8e8;
            position: relative;
            &::after {
              display: none;
              content: ">";
              position: absolute;
              right: 10px;
              bottom: 0;
              width: 9px;
              height: 18px;
              font-size: 25px;
              font-family: Source Han Sans CN Regular,
                Source Han Sans CN Regular-Regular;
              font-weight: 400;
              color: #0285f2;
            }
          }
        }
      }
      .news-active {
        .news-tit {
          color: #0285f2 !important;
        }
        .new-time {
          border-top: 2px solid #0285f2 !important;
          &::after {
            display: block !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .container {
    .center {
      height: 743px;
      .c-title {
        margin-bottom: 79px;
        .select-tit {
          .product-active {
            border-bottom: 3px solid #0284f2;
            margin-right: 50px;
          }
          span {
            font-size: 24px;
            font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
            font-weight: 700;
            text-align: left;
            color: #222222;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .container {
    .center {
      max-width: 1437px;

      .news {
        width: 100%;
        .news-item {
          width: 460px;
          img {
            width: 458px;
            height: 258px;
          }
        }
      }
    }
  }
}
</style>
