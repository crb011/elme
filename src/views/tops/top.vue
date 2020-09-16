<template>
  <div>
    <!-- 遮挡 -->
    <zhedang :list="list" v-if="blag" v-on:gaiblag="gaiblag"></zhedang>
    <div class="top">
      <div class="top-bj">
        <div class="hang">
          <img :src="list.avatar" class="img-left" />
          <div class="txt-right">
            <div>
              <img src="../../assets/img/brand@2x.png" />
              <span v-text="list.name"></span>
            </div>
            <div v-text="list.description"></div>
            <div>
              <img src="../../assets/img//decrease_1@2x.png" />
              <!-- v-text="list.supports[0].description" -->
              <span>在线支持</span>
            </div>
          </div>
          <div class="yuan-right">
            <div v-on:click="dianji">5个 ></div>
          </div>
        </div>

        <div class="guanggao">
          <img src="../../assets/img//bulletin@2x.png" />
          <div v-text="list.bulletin" class="cutFont"></div>
          <span>></span>
        </div>
      </div>

      <div class="backrgound-img">
        <div></div>
        <img :src="list.avatar">
      </div>

    </div>

    <!-- 点击 -->
    <ul class="menu">
      <router-link to="/shangpin" tag="li" exact>商品</router-link>
      <router-link :to="{ name:'pingjia' }" tag="li">评价</router-link>
      <router-link :to="{ name:'shangjia' }" tag="li">商家</router-link>
    </ul>


  </div>
</template>

<script>
import zhedang from "../occlusion/zhedang.vue";
export default {
  data() {
    return {
      //图片
      list: {},
      blag: false,
    };
  },
  methods: {
    dianji() {
      this.blag = true;
    },
    gaiblag(a) {
      this.blag = a;
    }
  },
  components: {
    zhedang,
  },
  created() {
    const hder = this;
    this.$ajax.get("./json/seller.json").then((res) => {
      hder.list = res.data.data;
    });
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 2.65rem;
  position: fixed;
  top: 0;
  overflow: hidden;
}
.backrgound-img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
  overflow: hidden;
}
.backrgound-img > div{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);

}
.backrgound-img > img{
   height: 10rem;
  width: 100%;
  margin: -30px 0;
  filter: blur(10px);
}
/* .backrgound-img > img::after{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z
} */

.top .top-bj {
  width: 100%;
  height: 100%;
  padding-top: 0.48rem;
}
.hang {
  width: 100%;
  height: 1.28rem;
  position: relative;
}
.hang .img-left {
  display: block;
  float: left;
  border-radius: 0.04rem;
  margin-left: 0.48rem;
  width: 1.28rem;
  height: 1.28rem;
}
.hang .txt-right {
  float: left;
  margin-left: 0.32rem;
  color: white;
}
.hang .yuan-right {
  position: absolute;
  bottom: 0;
  right: 0.24rem;
  border-radius: 0.3rem;
  width: 0.85rem;
  height: 0.48rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
}
.hang .yuan-right > div {
  font-size: 0.1rem;
  font-weight: 200;
  text-align: center;
  line-height: 0.5rem;
}
.txt-right > div:nth-child(1) {
  width: 100%;
}
.txt-right > div:nth-child(1) > img {
  width: 0.6rem;
  height: 0.36rem;
  vertical-align: middle;
}
.txt-right > div:nth-child(1) > span {
  font-size: 0.26rem;
  font-weight: bold;
  margin-left: 0.12rem;
  vertical-align: middle;
}
.txt-right > div:nth-child(2) {
  font-size: 0.24rem;
  font-weight: 200;
  margin-top: 0.05rem;
}
.txt-right > div:nth-child(3) > img {
  width: 0.24rem;
  height: 0.24rem;
  vertical-align: middle;
}
.txt-right > div:nth-child(3) > span {
  font-weight: 200;
  font-size: 0.15rem;
  margin-left: 0.08rem;
}
.guanggao {
  margin-top: 0.35rem;
  width: 100%;
  height: 0.56rem;
  color: white;
  font-weight: 200;
  background-color: rgba(7, 17, 27, 0.3);
}
.guanggao > img {
  position: absolute;
  left: 0.24rem;
  margin-top: 0.15rem;
  width: 0.44rem;
  height: 0.26rem;
}
.guanggao > div {
  width: 100%;
  font-size: 0.2rem;
  line-height: 0.6rem;
  padding-left: 0.8rem;
  padding-right: 0.5rem;
}
.guanggao > span {
  position: absolute;
  bottom: 0.08rem;
  right: 0.24rem;
  float: right;
}
</style>
