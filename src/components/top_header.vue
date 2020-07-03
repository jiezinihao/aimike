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
        <a
          :class="{ 'top-active': modelType == 1 }"
          @click="goCom('Home')"
          >首页</a
        >
        <a href="">电缆联盟</a>
        <a
          :class="{ 'top-active': modelType == 3 }"
          @click="goCom('ProductCenter')"
          >产品中心</a
        >
        <a href="">服务支持</a>
        <a href="">新闻动态</a>
        <a
          :class="{ 'top-active': modelType == 6 }"
          @click="goCom('About')"
          >关于我们</a
        >
        <a href="">联系我们</a>
      </div>
    </div>
    <div class="m-container">
      <div class="left">
        <img class="top-icon" src="../assets/m_top_img01.png" alt="" />
      </div>
      <div class="right">
        <img src="../assets/manu.png" alt="" @click="openManu(1)" />
      </div>
    </div>
    <div class="open-manu" ref="manu">
      <div class="manu-nav">
        <img src="../assets/m_top_img01.png" />
        <div class="iconfont iconcha" @click="openManu(0)"></div>
      </div>
      <div class="manu-search">
        <input type="text" placeholder="请输入您想检索的内容" />
        <div class="search-btn">搜索</div>
      </div>
      <div class="manu-list" ref="manuList">
        <div class="list-item">
          <div
            :class="['list-tit', currenDetail == 0 ? 'tit-active' : '']"
            @click="openDetail(0)"
          >
            产品中心
          </div>
          <div class="list-body">
            <div class="list-main">电线电缆</div>
            <div class="list-main">智能数据传输电缆</div>
            <div class="list-main">电子电器产品</div>
          </div>
        </div>
        <div class="list-item">
          <div
            :class="['list-tit', currenDetail == 1 ? 'tit-active' : '']"
            @click="openDetail(1)"
          >
            电缆联盟
          </div>
          <div class="list-body">
            <div class="list-main">电线电缆</div>
            <div class="list-main">智能数据传输电缆</div>
            <div class="list-main">电子电器产品</div>
          </div>
        </div>
        <div class="list-item">
          <div
            :class="['list-tit', currenDetail == 2 ? 'tit-active' : '']"
            @click="openDetail(2)"
          >
            服务支持
          </div>
          <div class="list-body">
            <div class="list-main">电线电缆</div>
            <div class="list-main">智能数据传输电缆</div>
            <div class="list-main">电子电器产品</div>
          </div>
        </div>
        <div class="list-item">
          <div
            :class="['list-tit', currenDetail == 3 ? 'tit-active' : '']"
            @click="openDetail(3)"
          >
            新闻动态
          </div>
          <div class="list-body">
            <div class="list-main">电线电缆</div>
            <div class="list-main">智能数据传输电缆</div>
            <div class="list-main">电子电器产品</div>
          </div>
        </div>
        <div class="list-item">
          <div
            :class="['list-tit', currenDetail == 4 ? 'tit-active' : '']"
            @click="openDetail(4)"
          >
            关于我们
          </div>
          <div class="list-body">
            <div class="list-main">电线电缆</div>
            <div class="list-main">智能数据传输电缆</div>
            <div class="list-main">电子电器产品</div>
          </div>
        </div>
        <div class="list-item">
          <div
            :class="['list-tit', currenDetail == 5 ? 'tit-active' : '']"
            @click="openDetail(5)"
          >
            联系我们
          </div>
          <div class="list-body">
            <div class="list-main">电线电缆</div>
            <div class="list-main">智能数据传输电缆</div>
            <div class="list-main">电子电器产品</div>
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
      currenDetail: -1,
      modelType: 1,
    };
  },
  watch: {},
  mounted() {
    
  },
  methods: {
    goCom(res) {
      this.$router.push({ name: res });
      switch (res) {
        case "Home": {
          this.modelType = 1;
          break;
        }
        case "11141": {
          this.modelType = 2;
          break;
        }
        case "ProductCenter": {
          this.modelType = 3;
          break;
        }
        case "11211": {
          this.modelType = 4;
          break;
        }
        case "11131": {
          this.modelType = 5;
          break;
        }
        case "About": {
          this.modelType = 6;
          break;
        }
      }
    },
    openDetail(res) {
      let deta = this.$refs.manuList.children[res].children[1].style.height;
      if (deta == 0 || deta == "0px") {
        if (this.currenDetail != -1) {
          this.$refs.manuList.children[
            this.currenDetail
          ].children[1].style.height = 0;
        }
        if (document.body.clientWidth > 566) {
          this.$refs.manuList.children[res].children[1].style.height = "240px";
        } else {
          this.$refs.manuList.children[res].children[1].style.height = "135px";
        }
        this.currenDetail = res;
      } else {
        this.$refs.manuList.children[res].children[1].style.height = 0;
        this.currenDetail = -1;
      }
    },
    openManu(res) {
      if (res) {
        document.body.style.position = "fixed";
        document.body.style.overflowY = "hidden";
        this.$refs.manu.style.opacity = "1";

        this.$refs.manu.style.width = "100%";
      } else {
        document.body.style.position = "relative";
        document.body.style.overflowY = "auto";
        this.$refs.manu.style.width = "0";
        this.$refs.manu.style.opacity = "0";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  text-align: center;
  height: 100px;
}
//移动端样式

@media screen and (min-width: 50px) {
  .open-manu {
    display: block;
    opacity: 0;
    width: 0;
    box-sizing: border-box;
    height: 101vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.1s;
    background: #fff;
    overflow-y: scroll !important;
    overflow-x: hidden !important ;
    z-index: 11;
    .manu-nav {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      background: #0284f2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 28px;
      }
      .iconcha {
        cursor: pointer;

        margin-right: 30px;
        font-size: 20px;
        color: white;
      }
    }
    .manu-search {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.5px solid #cccccc;
      input {
        box-sizing: border-box;
        width: 220px;
        height: 35px;
        border: 1px solid #999999;
        color: #cccccc;
        width: 228px;
        padding: 12px;

        &::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #cccccc;
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #cccccc;
          letter-spacing: 1px;
        }
        &::-moz-placeholder {
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #cccccc;
          letter-spacing: 1px;
          /* Firefox 19+ */
          color: #ccc;
        }
        &:-ms-input-placeholder {
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #cccccc;
          letter-spacing: 1px;
          /* IE 10+ */
          color: #ccc;
        }
        &:-moz-placeholder {
          font-size: 12px;
          font-family: Source Han Sans CN Light, Source Han Sans CN Light-Light;
          font-weight: 300;
          text-align: left;
          color: #cccccc;
          letter-spacing: 1px;
          /* Firefox 18- */
          color: #ccc;
        }
      }
      .search-btn {
        cursor: pointer;

        width: 60px;
        height: 35px;
        background-color: #0284f2;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
    }
    .manu-list {
      width: 100%;
      text-align: center;
      .list-item {
        width: 100%;
        cursor: pointer;
        .tit-active {
          color: #0284f2;
        }
        .list-tit {
          height: 52px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-family: Source Han Sans CN Regular,
            Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: left;
          letter-spacing: 1px;
        }
        .list-body {
          height: 0;
          width: 100%;
          overflow: hidden;
          transition: height 0.2s ease;
          .list-main {
            width: 100%;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-family: Source Han Sans CN Light,
              Source Han Sans CN Light-Light;
            font-weight: 300;
            text-align: left;
            color: #666666;
            letter-spacing: 1px;
            background: #f4f4f4;
          }
        }
      }
    }
  }

  .container {
    position: relative;
    height: 50px;
  }
  .pc-center {
    display: none;
  }
  .m-container {
    width: 100%;
    height: 50px;
    background: #0284f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      margin-left: 10px;

      img {
        height: 28px;
      }
    }
    .right {
      margin-right: 10px;
      width: 28px;
      height: 26px;
      cursor: pointer;
      img {
        width: 28px;
        height: 26px;
      }
    }
  }
}
@media screen and (min-width: 567px) {
  .open-manu {
    .manu-nav {
      height: 70px;
      padding: 0 10px;
      img {
        height: 38px;
      }
      .iconcha {
        cursor: pointer;

        font-size: 28px;
      }
    }
    .manu-search {
      height: 130px;
      input {
        width: 390px;
        height: 52px;
        padding: 20px;
        font-size: 21px;
        &::-webkit-input-placeholder {
          color: #ccc;
          font-size: 21px;
          line-height: 21px;
        }

        &::-moz-placeholder {
          color: #ccc;
          font-size: 21px;
          line-height: 21px;
        }

        &:-ms-input-placeholder {
          color: #ccc;
          font-size: 21px;
        }

        &:-moz-placeholder {
          color: #ccc;
          font-size: 21px;
        }
      }
      .search-btn {
        min-width: 90px;

        height: 52px;
        font-size: 19px;
        font-family: Source Han Sans CN Regular,
          Source Han Sans CN Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        letter-spacing: 1px;
      }
    }
    .manu-list {
      cursor: pointer;

      .list-item {
        .list-tit {
          height: 84px;
          font-size: 27px;
        }
        .list-body {
          .list-main {
            height: 80px;
            font-size: 24px;
          }
        }
      }
    }
  }
  .container {
    height: 80px;
  }
  .pc-center {
    display: none;
  }
  .m-container {
    width: 100%;
    height: 80px;
    background: #0284f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      margin-left: 30px;

      img {
        height: 38px;
        width: 88px;
      }
    }
    .right {
      margin-right: 36px;
      width: 54px;
      height: 38px;

      img {
        width: 54px;
        height: 38px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .open-manu {
    display: none;
  }
  .m-container {
    display: none;
  }
  .container {
    height: 100px;
  }
  .pc-center {
    max-width: 1399px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

    .left {
      @media screen and (max-width: 1300px) {
        width: 250px;
        padding-left: 60px;

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
      min-width: 800px;
      text-align: left;

      .top-active {
        color: #05acf7;
        position: relative;
        border-bottom: 3px solid #05acf7;
        // &::after {
        //   content: "";
        //   position: absolute;
        //   bottom: -6px;
        //   left: 50%;
        //   transform: translateX(-50%);
        //   width: 28px;
        //   height: 2px;
        //   background: #05acf7;
        // }
      }
      a {
        transition: 0.2s;

        cursor: pointer;
        line-height: 20px;
        height: 16px;
        text-decoration: none;
        color: #333333;
        font-size: 16px;
        height: 15px;
        margin-left: 30px;
        padding: 5px 0;
        &:hover {
          color: #05acf7;
        }
        &:nth-child(2) {
          margin-left: 58px;
        }
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
}

//pc端样式

@media screen and (min-width: 992px) {
  .pc-center {
    .right {
      text-align: center;
      a {
        margin-left: 40px;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .pc-center {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
