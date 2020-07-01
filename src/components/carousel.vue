<template>
  <div class="container" >
    <div class="pc-top-block">
      <img src="../assets/thumb_title.png" class="block-tit" />
      <el-carousel  :interval="lalala" trigger="click" >
        <el-carousel-item
          ><img class="thumb" src="../assets/thumb_icon01.png" alt="" />
        </el-carousel-item>
        <el-carousel-item
          ><img class="thumb" src="../assets/thumb_icon01.png" alt="" />
        </el-carousel-item>
        <el-carousel-item
          ><img class="thumb" src="../assets/thumb_icon01.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="m-top-block" >
    <img src="../assets/thumb_title.png" class="block-tit" />
      <el-carousel :interval="lalala" trigger="click" ref="coures">
        <el-carousel-item
          ><img class="thumb" src="../assets/thumb_icon01.png" alt="" />
        </el-carousel-item>
        <el-carousel-item
          ><img class="thumb" src="../assets/thumb_icon01.png" alt="" />
        </el-carousel-item>
        <el-carousel-item
          ><img class="thumb" src="../assets/thumb_icon01.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lalala:3000,
      startX:0,
      endX:0
    }
  },
  mounted(){
    document.addEventListener('touchstart',this.touch,false)
    document.addEventListener('touchend',this.touch,false)

  },
  destroyed(){
    document.removeEventListener('touchstart')
    document.removeEventListener('touchend')

  },
  methods:{
      touch(event){
        if(event.target.className == "thumb"){
          if(event.type == "touchstart"){
            this.startX = event.changedTouches[0].pageX
          }else if(event.type == "touchend"){
              if(this.startX - event.changedTouches[0].pageX>50){
                this.$refs.coures.next()
              }else if(this.startX - event.changedTouches[0].pageX<-50){
                this.$refs.coures.prev()
              }
          }
        }
      }
  }
};
</script>
<style lang="scss" scoped>
//移动端样式
@media screen and (max-width: 567px) {
  .pc-top-block {
    display: none;
  }
  .m-top-block {
    display: block;
    width: 100%;
    .block-tit {
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
      height: 70px;
      z-index: 5;
      // width: 170px;
      text-align: center;
      // background: url("../assets/thumb_title.png") no-repeat center center;
    }
    .thumb {
      height: 240px;
        min-width: 100%;
    }
  }
}
@media screen and (min-width: 567px) {
  .pc-top-block {
    display: none;
  }
  .m-top-block {
    display: block;
    height: 400px;
    width: 100%;
    .block-tit {
      position: absolute;
      left: 50%;
      top: 180px;
      transform: translateX(-50%);
      height: 100px;
      text-align: center;
      z-index: 5;
      // background: url("../assets/thumb_title.png") no-repeat center center;
    }
    .thumb {
      height: 400px;
      //   width: 1920px;
    }
  }
}
@media screen and (min-width: 768px) {
  .m-top-block {
    height: 500px;
    .block-tit{
      top: 240px;
    }
    .thumb {
      height: 500px;
    }
  }
}
@media screen and (min-width: 992px) {
  .m-top-block {
    height: 600px;
        .block-tit{
      top: 260px;
      height: 120px;
    }
    .thumb {
      height: 600px;
    }
  }
}

//pc端样式
@media screen and (min-width: 1200px) {
  .container {
    text-align: center;
    overflow: hidden;
  }
  .pc-top-block {
    display: block;
    position: relative;
    height: 650px;
    width: 100%;
    margin: 0 auto;
    .block-tit {
      position: absolute;
      top: 115px;
      left: 50%;
      transform: translateX(-50%);
      height: 198px;
      width: 698px;
      z-index: 5;
    }
    .thumb {
      height: 650px;
      width: 1920px;
    }
  }
  .m-top-block {
    display: none;
  }
}
@media screen and (min-width: 1400px) {
  .pc-top-block {
    height: 900px;
    position: relative;
    .thumb {
      width: 1920px;
      height: 900px;
    }
  }
}
</style>
<style lang="scss">
.el-carousel {
  z-index: 1;
}
.el-carousel__container {
  @media screen and (max-width: 567px) {
    height: 210px !important;
  }
  @media screen and (min-width: 567px) {
    height: 400px !important;
  }
  @media screen and (min-width: 768px) {
    height: 500px !important;
  }
  @media screen and (min-width: 992px) {
    height: 600px !important;
  }
  @media screen and (min-width: 1200px) {
    height: 650px !important;
  }
  @media screen and (min-width: 1400px) {
    height: 900px !important;
  }
}
.pc-top-block {
  .el-carousel__button {
    height: 6px !important;
    width: 30px !important;
    background: none !important;
    border: 1px solid #ffffff;
  }
  .is-active {
    .el-carousel__button {
      height: 4px !important;
      background: #fff !important;
    }
  }
}
.m-top-block {
  .el-carousel__button {
    height: 6px;
    width: 30px;
    background: none !important;
    border: 1px solid #ffffff;
  }
  .is-active {
    .el-carousel__button {
      height: 4px !important;
      background: #fff !important;
    }
  }
}
</style>
