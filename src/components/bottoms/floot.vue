<template>
  <div class="floot">
    <!-- 右内容 -->
    <div class="floot-left">
      <div class="yuan">
        <div class="nei-yuan"></div>
      </div>
      <div class="font">
          <h2 v-text="jiage"></h2>
          <div class="xian"></div>
          <span>另需配送费￥4元</span>
      </div>
    </div>
    <!-- 左按钮 -->
    <div class="floot-right">￥20起送</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jiage: '￥'+ 0
        }
    },
};
</script>

<style scoped>
.floot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background-color: #141d27;
}
.floot-left {
    
}
.floot-left .yuan {
    position: absolute;
    bottom: 0;
    left: .36rem;
    width: 1.16rem;
    height: 1.16rem;
    border-radius: 50%;
    background-color: #141d27;
}
.floot-left .yuan .nei-yuan{
    position: absolute;
    bottom: .16rem;
    left: .15rem;
    width: .88rem;
    height: .88rem;
    border-radius: 50%;
    background-color: rgba(255,255, 255, 0.2);
}
.floot-left .font{
    float: left;
    padding-left: 1.8rem;
    color: rgba(255,255, 255, 0.4);;
    line-height: 1rem;
}
.floot-left .font > h2{
    float: left;
    font-size: .45rem;
}

.floot-left .font > .xian{
    float: left;
    height: .5rem;
    margin: .25rem .24rem 0;
    border-right: .01rem solid rgba(255,255, 255, 0.1);

}
.floot-left .font > span{
    font-size: .2rem;
    font-weight: 100;
}



.floot-right {
    float: right;
    width: 2.1rem;
    height: 1rem;
    font-size: .24rem;
    font-weight: 700;
    color: rgba(255,255, 255, 0.4);
    background-color: rgba(255,255, 255, 0.2);;
    text-align: center;
    line-height: 1rem;
}
</style>