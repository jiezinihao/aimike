<template>
  <div class="container">
    <div class="center">
      <div class="left">
        <div class="detail">
          <span class="detail-tit">电缆联盟 </span>
          <span>组织简介</span>
          <span>政策法规</span>
          <span>组织架构</span>
          <span>企业展示</span>
          <span>项目推介</span>
          <span>服务中心</span>
        </div>
        <div class="detail">
          <span class="detail-tit">产品中心</span>
          <span>电线电缆</span>
          <span>智能数据传输电缆</span>
          <span>电子电气产品</span>
          <span>连接器</span>
          <span>......</span>
        </div>
        <div class="detail">
          <span class="detail-tit">服务支持</span>
          <span>设计研发</span>
          <span>产品服务</span>
          <span>合作伙伴</span>
        </div>
        <div class="detail">
          <span class="detail-tit">新闻动态</span>
          <span>公司简介</span>
          <span>企业文化</span>
          <span>荣誉资质</span>
        </div>
        <div class="detail">
          <span class="detail-tit">关于我们</span>
          <span>公司新闻</span>
          <span>行业资讯</span>
        </div>
        <div class="detail">
          <span class="detail-tit">联系我们</span>
          <span>加入我们</span>
          <span>在线留言</span>
        </div>
      </div>
      <div class="right">
        <div class="r-tit">
          联系方式
        </div>
        <div class="r-item"><span class="iconfont icondianhua1"></span>联系电话：0553-6616699 6608555（传真）</div>
        <div class="r-item"><span class="iconfont iconshouji"></span>手机：18158819777 13966359366</div>
        <div class="r-item"><span class="iconfont iconyoujian" ></span>邮箱：jmrhcableunlon@163.com</div>
        <div class="r-item"><span class="iconfont icondizhi"></span>
          地址：安徽省芜湖市无为市城南高新大道与凯帆路交叉口
        </div>
      </div>
    </div>
    <div class="other">
      <span class="left">
        皖公网安备34022502021351号 皖ICP备11004092© anhuiaimike.com
        版权所有：艾密克电联科技有限公司 技术支持：朝华科技
      </span>
      <span class="right">
        <span class="iconfont iconweixin2"></span>
        <span class="iconfont iconQQ"></span>
        <span class="iconfont iconxinlang"></span>
      </span>
    </div>
    <div class="m-center">
      <div class="fiexed">
        <span
        class="iconfont iconshouye1"
          >
          <p>首页</p>
        </span>
        <span
        class="iconfont iconQQ"
          >
          <p>QQ</p></span
        >
        <span
        class="iconfont icondianhua1"

        ><P>电话</P></span>
        <span
        class="iconfont iconliuyan"
          >
          <p>留言</p></span
        >
        <span
        class="iconfont iconfanhuidingbu"
          >
          <p>返回顶部</p></span
        >
      </div>
      <div class="c-tit">
        联系方式
      </div>
      <div class="c-item">联系电话：0553-6616699 6608555（传真）</div>
      <div class="c-item">手机：18158819777 13966359366</div>
      <div class="c-item">邮箱：jmrhcableunlon@163.com</div>
      <div class="c-item">
        地址：安徽省芜湖市无为市城南高新大道与凯帆路交叉口
      </div>
      <div class="c-other">
        皖公网安备34022502021351号 皖ICP备11004092© anhuiaimike.com
        版权所有：艾密克电联科技有限公司 技术支持：朝华科技
      </div>
      <div class="foot-icon">
        <span class="iconfont iconweixin2"></span>
        <span class="iconfont iconQQ"></span>
        <span class="iconfont iconxinlang"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 398px;
  background-color: #333333;
  text-align: center;
  //移动端576px
  @media screen and (min-width: 50px) {
    height: 414px;
    .center {
      display: none;
    }
    .other {
      display: none;
    }

    .m-center {
      margin: 0 auto;
      height: 100%;
      width: 100%;
      text-align: center;
      //移动端底部fixed
      .fiexed {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #0284f2;
        display: flex;
        z-index: 10;
        span {
          height: 50px;
          font-size: 20px;
          color: white;
          width: 25%;
          padding: 5px 0;
          box-sizing: border-box;
          border-right: 1px solid white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            margin: 0;

            font-size: 15px;
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: center;
            color: #ffffff;
            line-height: 20px;
            letter-spacing: 0px;
          }
          &:last-child {
            border: none;
          }
        }
      }
      .c-tit {
        height: 16px;
        font-size: 15px;
        font-family: Source Han Sans CN Medium, Source Han Sans CN Medium-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 16px;
        margin: 0 auto;
        text-align: center;
        padding-top: 18px;
        margin-bottom: 20px;
      }
      .c-item {
        height: 23px;
        font-size: 14px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        color: #9a9a9a;
        line-height: 20px;
        margin-bottom: 16px;
      }
      .c-other {
        max-width: 300px;
        height: 30px;
        font-size: 12px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        text-align: center;
        color: #9a9a9a;
        line-height: 23px;
        margin: 0 auto;
        letter-spacing: 0px;
        margin-bottom: 60px;
      }
      .foot-icon {
        width: 213px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        span {
          color: #9a9a9a;
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (min-width: 576px) {
    height: 600px;
    .m-center {
      .c-tit {
        height: 23px;
        font-size: 24px;
        line-height: 20px;
        margin-bottom: 40px;
      }
      .c-item {
        height: 23px;
        font-size: 24px;
        line-height: 20px;
        margin-bottom: 32px;
      }
      .c-other {
        max-width: 600px;
        height: 50px;
        font-size: 18px;
        line-height: 33px;
        letter-spacing: 0px;
        margin-bottom: 72px;
      }
      .fiexed {
        span {
          box-sizing: border-box;
          height: 100px;
          font-size: 30px;
          img {
            height: 35px;
            width: 40px;
          }
          p {
            margin-top: 10px;

            font-size: 25px;
          }
        }
      }
      .foot-icon {
        width: 343px;
        span {
          font-size: 30px !important;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    height: auto;
    .m-center {
      display: none;
    }
    .center {
      width: 100%;
      height: 344px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      border-bottom: 1px solid #ffffff;

      .left {
        padding-top: 81px;
        height: 272px;
        display: flex;
        position: relative;
        margin: 0 auto;

        .detail {
          text-align: left;
          width: 110px;
          .detail-tit {
            height: 13px;
            width: 100%;
            font-size: 14px;
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #ffffff;
          }
          span {
            cursor: pointer;

            height: 12px;
            display: block;
            width: 100px;
            font-size: 12px;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            margin-bottom: 21px;
            color: #9a9a9a;
          }
        }
      }
      .right {
        display: none;
        width: 400px;
        height: 272px;
        padding-top: 81px;
        padding-left: 54px;
        .r-tit {
          height: 14px;
          font-size: 14px;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 20px;
          margin-bottom: 16px;
        }
        .r-item {
          height: 12px;
          width: 100%;
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #9a9a9a;
          line-height: 20px;
          margin-bottom: 20px;
          span{
            font-size: 12px;
            line-height: 20px;
            margin-right: 11px;
          }
        }
      }
    }
    .other {
      width: 100%;
      height: 32px;
      padding-top: 19px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .left {
        height: 12px;
        font-size: 10px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        text-align: center;
        color: #9a9a9a;
        line-height: 20px;
        letter-spacing: 0px;
        margin-right: 60px;
      }
      .right {
        display: block;
        height: 30px;
        text-align: left;
        span{
          color: #9A9A9A;
          font-size: 20px;
          margin-right: 20px;
          position: relative;
          &:first-child::after{
            transition: .2s;
            content: "";
            opacity: 0;
            position: absolute;
            top: -110px;
            right: -10px;
            height: 101px;
            width: 98px;
            background: url("../assets/erweima.png") no-repeat center center;

          }
          &:first-child:hover::after{
            opacity: 1;
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .center {
      .left {
      width: 900px;
        
        &::after {
          content: "";
          position: absolute;
          top: 81px;
          right: 0;
          width: 1px;
          height: 142px;
          background: #737375;
        }
      }
      .right {
        display: block !important;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      min-width: 1200px;
      max-width: 1400px;
      .left {
        .detail {
          width: 156px;
          span {
            width: 156px;
          }
        }
      }

    }
          .other{
        .left{
          margin-right: 119px !important;
        }
      }
  }
  
}
</style>
