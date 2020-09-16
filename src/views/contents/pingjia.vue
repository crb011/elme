<template>
  <div class="about">
    <top></top>
    <div class="pf">
      <div class="left">
        <p class="pfaa" v-text="pingfen.score"></p>
        <p class="title">综合评分</p>
        <p class="gy" v-text="'高于周边商家'+ pingfen.rankRate+'%'"></p>
      </div>
      <div class="right">
        <ul>
          <li>
            <div class="left">服务态度</div>
            <div class="center">
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_off@2x.png" />
            </div>
            <div class="right-font" v-text="pingfen.score"></div>
          </li>
          <li>
            <div class="left">服务态度</div>
            <div class="center">
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_on@2x.png" />
              <img src="../../assets/img/star36_off@2x.png" />
            </div>
            <div class="right-font" v-text="pingfen.serviceScore"></div>
          </li>
          <li>
            <div class="left">送达时间</div>
            <div class="right-time" v-text="pingfen.deliveryTime+'分钟'"></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="jiange"></div>

    <div class="pingjia">
      <ul class="clearfix">
        <li>
          全部&emsp;
          <span></span>
        </li>
        <li>
          推荐&emsp;
          <span>20</span>
        </li>
        <li>
          吐槽&emsp;
          <span>20</span>
        </li>
      </ul>
    </div>
    <div class="bian-xian"></div>
    <div class="dianji">
      <span>√</span>
      <span>只看有内容的评价</span>
    </div>

    <div class="p-floots" v-for="(k,i) in pingjia" :key="i">
      <div class="clearfix">
        <div class="fl-left">
          <img :src="k.avatar" />
        </div>
        <div class="fl-left">
          <div v-text="k.username"></div>
          <div v-text="k.deliveryTime+'分钟送达'"></div>
        </div>
        <div class="fl-right">{{ k.rateTime | convertData }}</div>
      </div>
      <div class="conten">
        <div v-text="k.text"></div>
        <ul class="clearfix">
          <li v-for="(it,i) in k.recommend" :key="i" class="cutFont" v-text="it"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pingfen: {},
      pingjia: [],
    };
  },
  methods: {},
  created() {
    this.$ajax
      .get("./json/seller.json")
      .then((res) => {
        this.pingfen = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });

    this.$ajax
      .get("./json/ratings.json")
      .then((res) => {
        this.pingjia = res.data.data;
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style  scoped>
.about {
  width: 100%;
  height: 100%;
  padding-top: 3.27rem;
}
.pf {
  display: flex;
  text-align: center;
}

.pf > .left {
  padding: 0.2rem;
  flex: 1;
}

.pf > .left > .pfaa {
  font-size: 0.48rem;
  color: rgb(245, 142, 51);
}

.pf > .left > .title {
  font-size: 0.24rem;
}

.pf > .left > .gy {
  font-size: 0.2rem;
  color: #bcbfc1;
}

.pf > .right {
  padding: 0.2rem;
  flex: 2;
}
.right-font {
  color: rgb(245, 142, 51);
  font-size: 0.24rem;
}
.right-time {
  font-size: 0.24rem;
  color: rgb(147, 153, 159);
}
.right .center {
}
.right .center > img {
  width: 0.26rem;
  height: 0.26rem;
}
.pf > .right > ul > li {
  display: flex;
  border-left: 0.01rem solid #eaebed;
}

.pf > .right > ul > li > div {
  margin: 0.1rem 0 0 0.1rem;
}

.pf > .right > ul > li > .left {
  font-size: 0.18rem;
  margin: 0.1rem 0 0 0.8rem;
}

.k {
  height: 0.4rem;
  background: #f4f5f7;
  border-top: 0.01rem solid #b7babf;
  border-bottom: 0.01rem solid #b7babf;
}

.type {
  width: 100%;
  height: 0.8rem;
  display: flex;
}

.type > li {
  padding: 0 0.1rem;
  text-align: center;
  margin: 0.2rem 0 0 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.05rem;
}

.type > .one {
  background: #00a0dc;
  color: #ffffff;
}

.type > .two {
  background: #ccecf7;
}

.type > .there {
  background: #eaebed;
}

.sx {
  margin: 0 auto;
  width: 90%;
  height: 0.6rem;
  border-top: 0.02rem solid #f0f1f2;
  line-height: 0.5rem;
  color: #b6b9be;
  display: flex;
}

.sx > img {
  margin: 0.1rem 0 0 0;
  width: 0.3rem;
  height: 0.3rem;
}

.sx > div {
  margin: 0 0 0 0.1rem;
}
.p-floots {
  padding: 0.36rem;
  font-size: 0.2rem;
  color: rgb(147, 153, 159);
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}
.p-floots > div:first-child{
  
}
.p-floots .fl-left {
  float: left;
  margin-right: 0.24rem;
}
.p-floots .fl-left > img {
  margin-left: 0.12rem;
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 50%;
}
.p-floots .fl-right {
  float: right;
  font-weight: 200;
}
.p-floots .conten{
  padding: 0 .90rem;
}
.p-floots .conten > div:first-child{
  color: black;
  font-size: .24rem;
}
.p-floots .conten > ul {
  margin-top: .16rem;
  font-size: .18rem;
}
.p-floots .conten > ul > li{
  float: left;
  width: 1.5rem;
  padding: .04rem .12rem;
  text-align: center;
  border: 0.01rem solid rgba(7, 17, 27, 0.1);
  margin-right: .16rem;
  margin-bottom: .1rem;

}
</style>