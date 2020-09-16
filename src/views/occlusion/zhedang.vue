<template>
  <div class="zhedangceng">
    <h2 v-text="list.name"></h2>
    <ul class="xing clearfix">
      <li>
        <img src="../../assets/img/star48_on@2x.png" />
      </li>
      <li>
        <img src="../../assets/img/star48_on@2x.png" />
      </li>
      <li>
        <img src="../../assets/img/star48_on@2x.png" />
      </li>
      <li>
        <img src="../../assets/img/star48_on@2x.png" />
      </li>
      <li>
        <img src="../../assets/img/star48_off@2x.png" />
      </li>
    </ul>
    <div class="youhui">
      <div></div>优惠信息<div></div>
    </div>
    <div class="manjian">
        <ul>
            <li v-for="(k,i) in list.supports" 
            :key="i"
            ><img src='../../assets/img/decrease_1@2x.png'>{{ k.description }}</li>
        </ul>
    </div>
    <div class="youhui">
      <div></div>商家公共<div></div>
    </div>
    <div class="font" v-text="list.bulletin">

    </div>
    <div class="guanbi" v-on:click="guanbi()">
        X
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ["list","blag"],
  //   conputed: {
  //       xingxing() {
  //           return
  //       }
  //   }
  methods: {
      guanbi() {
        //   alert(this.blag)
        this.$emit('gaiblag', false)
      }
      
  }
};
</script>

<style scoped>
.zhedangceng {
  position: fixed;
  color: white;
  padding: 0 0.72rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.zhedangceng::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(7, 17, 27, 0.8);
  filter: blur(10px);
  margin: -30px;
}
.zhedangceng > h2 {
  margin-top: 1.28rem;
  text-align: center;
  font-size: 0.32rem;
}
.zhedangceng > .xing {
  width: 100%;
  margin: 0 1rem;
}
.zhedangceng > .xing > li {
  float: left;
  padding: 0.32rem 0.15rem 0;
}
.zhedangceng > .xing > li > img {
  width: 0.48rem;
  height: 0.48rem;
}
.youhui {
  text-align: center;
  font-weight: bold;
  margin: .56rem 0 .48rem;
}
.youhui > div {
  width: 2.24rem;
  margin-top: 0.2rem;
  border-bottom: 0.02rem solid rgba(255, 255, 255, 0.2);
}
.youhui > div:first-of-type {
  float: left;
}
.youhui > div:last-of-type {
  float: right;
}
.manjian{
    /* margin-top: .48rem; */
    width: 100%;
    padding: 0 .24rem;
}
.manjian > ul{
    
}
.manjian > ul > li{
    font-size: .24rem;
    font-weight: 200;
    margin-bottom: .24rem;
    vertical-align: middle;
}
.manjian > ul > li:last-child{
    margin-bottom: 0;
}
.manjian > ul > li > img{
    width: .32rem;
    height: .32rem;
    vertical-align: middle;
    margin-right: .12rem;
}
.font{
    width: 100%;
    padding: 0 .24rem;
    font-size: .24rem;
    font-weight: 200;
    line-height: .48rem;
}
.guanbi{
    position: fixed;
    bottom: .64rem;
    left: 50%;
    margin-left: -.3rem;
    font-size: .64rem;
    color: rgba(255, 255, 255, 0.5);
}
</style>
