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
        <div class="r-item">联系电话：0553-6616699 6608555（传真）</div>
        <div class="r-item">手机：18158819777 13966359366</div>
        <div class="r-item">邮箱：jmrhcableunlon@163.com</div>
        <div class="r-item">
          地址：安徽省芜湖市无为市城南高新大道与凯帆路交叉口
        </div>
      </div>
    </div>
    <div class="other">
      <span class="left">
        皖公网安备34022502021351号 皖ICP备11004092© anhuiaimike.com
        版权所有：艾密克电联科技有限公司 技术支持：朝华科技
      </span>
      <span class="right"></span>
    </div>
    <div class="m-center">
      <div class="fiexed">
        <span>首页</span>
        <span>QQ</span>
        <span>电话</span>
        <span>留言</span>
        <span>返回顶部</span>
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
  @media screen and (min-width: 576px) {
    height: 514px;
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
        height: 100px;
        background: #0284f2;
        display: flex;
        span {
          width: 25%;
          height: 100px;
          border-right: 1px solid white;
          font-size: 20px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: center;
          color: #ffffff;
          line-height: 20px;
          letter-spacing: 0px;
          //临时效果
          padding-top: 70px;
          &:last-child {
            border: none;
          }
        }
      }
      .c-tit {
        height: 29px;
        font-size: 30px;
        font-family: Source Han Sans CN Medium, Source Han Sans CN Medium-Medium;
        font-weight: 500;
        color: #ffffff;
        line-height: 20px;
        margin: 0 auto;
        text-align: center;
        padding-top: 34px;
        margin-bottom: 40px;
      }
      .c-item {
        height: 23px;
        font-size: 24px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        color: #9a9a9a;
        line-height: 20px;
        margin-bottom: 32px;
      }
      .c-other {
        width: 567px;
        height: 50px;
        font-size: 18px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        text-align: center;
        color: #9a9a9a;
        line-height: 33px;
        margin: 0 auto;
        letter-spacing: 0px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .m-center {
      .fiexed {
        display: none;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .m-center {
      display: none;
    }
    height: 398px;
    .m-center {
      display: none;
    }
    .center {
      width: 100%;
      height: 344px;
      margin: 0 auto;
      display: flex;
      border-bottom: 1px solid #ffffff;
      .left {
        padding-top: 81px;
        width: 900px;
        height: 272px;
        display: flex;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 81px;
          right: 0;
          width: 1px;
          height: 142px;
          background: #737375;
        }
        .detail {
          text-align: left;
          width: 130px;
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
            width: 120px;
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
        }
      }
    }
    .other {
      width: 947px;
      height: 32px;
      padding-top: 19px;
      margin: 0 auto;
      display: flex;
      .left {
        width: 718px;
        height: 12px;
        font-size: 12px;
        font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
        font-weight: 300;
        text-align: center;
        color: #9a9a9a;
        line-height: 20px;
        letter-spacing: 0px;
      }
      .right {
        display: block;
        width: 229px;
        height: 30px;
        background-color: #fff;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .center{
      min-width: 1200px;
      max-width: 1400px;
      .left{
        .detail{
          width: 156px;
          span{
          width: 156px;
          }
        }
      }
    }
  }
  // @media screen and (max-width: 1400px) {
  //   .center {
  //     width: 100%;
  //     .left {
  //       width: 800px;
  //       .detail {
  //         width: 130px;
  //         span {
  //           width: 100px;
  //         }
  //       }
  //     }
  //     .right {
  //       padding-left: 54px;
  //     }
  //   }
  // }
}
</style>
