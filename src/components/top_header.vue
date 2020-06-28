<template>
  <div class="container">
    <div class="pc-center">
      <div class="left">
        <img
          class="top-icon"
          src="../assets/top_icon01.png"
          alt=""
          style="margin-right:58px;"
        />
        <img class="top-icon" src="../assets/top_icon02.png" alt="" />
      </div>
      <div class="right">
        <a href="" class="top-active">首页</a>
        <a href="">电缆联盟</a>
        <a href="">产品中心</a>
        <a href="">服务支持</a>
        <a href="">新闻动态</a>
        <a href="">关于我们</a>
        <a href="">合作伙伴</a>
        <a href="">联系我们</a>
      </div>
    </div>
    <div class="m-container">
      <div class="left">
        <img class="top-icon" src="" alt="" />
      </div>
      <div class="right">
        <span class="manu"></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  text-align: center;
  height: 100px;
}
//移动端样式

@media screen and (max-width: 567px) {
  .pc-center {
    display: none;
  }
  .m-container {
    width: 100%;
    height: 100px;
    background: #0284f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      margin-left: 5px;
      height: 48px;
      width: 118px;
      background-color: #fff;
      img {
      }
    }
    .right {
      margin-right: 5px;
      width: 54px;
      height: 38px;
      background-color: #fff;
      .manu {
      }
    }
  }
}
@media screen and (min-width: 567px) {
  .pc-center {
    display: none;
  }
  .m-container {
    width: 100%;
    height: 100px;
    background: #0284f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      margin-left: 30px;
      height: 48px;
      width: 118px;
      background-color: #fff;
      img {
      }
    }
    .right {
      margin-right: 36px;
      width: 54px;
      height: 38px;
      background-color: #fff;

      .manu {
      }
    }
  }
}
@media screen and (min-width: 768px) {
  
}

//pc端样式

@media screen and (min-width: 1200px) {
  .m-container {
    display: none;
  }
  .pc-center {
    width: 1399px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    .left {
      width: 508px;

      @media screen and (max-width: 1400px) {
        width: 250px;
        padding: 0 60px;
        .top-icon:last-child {
          display: none;
        }
      }
      .top-icon {
        height: 55px;
      }
    }
    .right {
      font-family: Source Han Sans CN Light;
      min-width: 900px;
      .top-active {
        color: #05abf6;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 2px;
          background: #05abf6;
        }
      }
      a {
        line-height: 20px;
        height: 16px;
        text-decoration: none;
        color: #333333;
        font-size: 16px;
        height: 15px;
        margin-left: 40px;
        &:nth-child(2) {
          margin-left: 58px;
        }
      }
    }
  }
}
@media screen and (max-width: 1400px) {
  .pc-center {
    width: 100%;
  }
}
</style>
