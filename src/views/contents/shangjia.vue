<template>
  <div class="sj">
    <top></top>
    <div class="padd">
      <div class="one">
        <div class="top clearfix">
          <div class="top-left">
            <div class="title" v-text="detas.name"></div>
            <div class="pf">
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_off@2x.png" />
              <span v-text="'月售'+detas.sellCount+'单'"></span>
            </div>
          </div>
          <div class="top-right">
            <div v-on:click="lives">❤</div>
            <div>已收藏</div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <p class="lignt">起送价</p>
            <p class="ligntx">
              <span v-text="detas.minPrice"></span>&emsp;元
            </p>
          </div>
          <div class="center">
            <p class="lignt">商家配送</p>
            <p class="ligntx">
              <span v-text="detas.deliveryPrice"></span>&emsp;元
            </p>
          </div>
          <div class="right">
            <p class="lignt">平均配送时间</p>
            <p class="ligntx">
              <span v-text="detas.deliveryTime"></span>&emsp;分钟
            </p>
          </div>
        </div>
      </div>

      <div class="jiange"></div>

      <div class="ggyhd">
        <p class="blod">公告与活动</p>
        <p class="red" v-text="detas.bulletin"></p>
      </div>

      <ul class="yh">
        <li v-for="(k) in detas.supports" :key="k.type">
          <div class="img">
            <img src="../../assets/img/decrease_3@2x.png" />
          </div>
          <div v-text="k.description"></div>
        </li>
      </ul>

      <div class="jiange"></div>

      <div class="sjsj">
        <p class="blod">商家实景</p>
        <div>
          <ul>
            <li v-for="(k) in detas.pics" :key="k">
              <img :src="k" />
            </li>
          </ul>
        </div>
      </div>

      <div class="jiange"></div>

      <div class="sjxx">
        <p class="blod">商家信息</p>
        <ul>
          <li v-for="(k) in detas.infos" :key="k">
            <div v-text="k"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detas: {},
    };
  },
  created() {
    this.$ajax
      .get("./json/seller.json")
      .then((res) => {
        this.detas = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
      lives(e) {
          e.target.classList.toggle("acti");
      }
  }
};
</script>

<style scoped>
.padd {
  width: 100%;
  height: 100%;
  padding-top: 3.27rem;
  padding-bottom: 2.5rem;
}
.one {
  width: 100%;
  height: 100%;
  padding: 0.36rem;
}

.top {
  width: 100%;
  height: 100%;
  margin-bottom: 0.36rem;
}
.top > .top-left {
  float: left;
}
.top > .top-left > .title {
  font-size: 0.24rem;
  font-weight: bold;
}

.top > .top-left > .pf {
  margin-top: 0.35rem;
  display: flex;
}
.pf > img {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.08rem;
}
.pf > span {
  font-size: 0.2rem;
  margin-top: 0.01rem;
  margin-left: 0.2rem;
  color: rgb(147, 153, 159);
}
.top > .top-right {
  text-align: center;
  float: right;
}
.top > .top-right > div:first-child {
  color: rgba(77, 85, 93, 0.575);
  font-size: 0.48rem;
}
.top > .top-right > .acti {
  color: red !important;
}
.top > .top-right > div:last-child {
  font-size: 0.2rem;
  color: rgb(77, 85, 93);
}

.top > .top-right > img {
  width: 0.4rem;
  height: 0.4rem;
}

.one > .bottom {
  margin: 0 auto;
  width: 100%;
  border-top: 0.01rem solid #aeaeaf;
  display: flex;
  text-align: center;
}

.bottom > div {
  margin: 0.2rem 0 0 0;
  padding: 0.2rem;
  flex: 1;
}
.bottom .lignt {
  font-size: 0.2rem;
  color: rgb(147, 153, 159);
}
.bottom .ligntx {
  font-size: 0.2rem;
}
.bottom .ligntx > span {
  font-size: 0.48rem;
}
.bottom > .center {
  border-left: 0.01rem solid #aeaeaf;
  border-right: 0.01rem solid #aeaeaf;
}

.ggyhd {
  width: 100%;
  height: 100%;
  padding: 0.36rem;
}
.ggyhd > .blod {
  font-size: 0.3rem;
  text-align: left;
  margin-bottom: 0.16rem;
}

.ggyhd > .red {
  padding: 0 0.24rem;
  font-size: 0.2rem;
  text-align: left;
  line-height: 0.35rem;
  font-weight: 200;
}

.yh {
  width: 100%;
}

.yh > li {
  padding: 0.2rem;
  margin: 0 auto;
  width: 90%;
  display: flex;
  border-top: 0.01rem solid #dddddd;
}

.yh > li > div {
  margin: 0 0 0 0.1rem;
}
.yh .img > img {
  margin-top: 0.05rem;
  width: 0.32rem;
  height: 0.32rem;
}
.sjsj {
  width: 100%;
  height: 100%;
  padding: 0.36rem;
  overflow: hidden;
}
.sjsj > .blod {
  font-size: 0.3rem;
  text-align: left;
  margin-bottom: 0.24rem;
}

.sjsj > div {
  width: 100%;
  height: 1.8rem;
  overflow-x: scroll;
  white-space: nowrap;
}
.sjsj > div > ul {
  width: 10.1rem;
  height: 100%;
}
.sjsj > div > ul > li {
  float: left;
  width: 2.4rem;
  height: 100%;
  margin-right: 0.12rem;
}
.sjsj > div > ul > li > img {
  width: 100%;
  height: 100%;
}
.sjxx {
  padding: 0.36rem;
  height: 4rem;
}
.sjxx > .blod {
  font-size: 0.3rem;
  text-align: left;
  margin-bottom: 0.24rem;
}
.sjxx > ul {
}
.sjxx > ul > li {
  padding: 0.32rem 0.24rem;
  display: flex;
  border-top: 0.01rem solid #dddddd;
}
.sjxx > ul > li > div {
  font-size: 0.24rem;
  font-weight: 200;
}
</style>