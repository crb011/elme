<template>
  <div class="detail">
    <!-- 图片 -->
    <div class="images">
      <div v-on:click="shouye">&lt;</div>
      <img :src="details.image" />
    </div>

    <div class="font-wenzi">
      <div v-text="details.name"></div>
      <div class="font-color">
        月售
        <span v-text="details.sellCount"></span>份&emsp;&emsp;好评率
        <span v-text="details.rating"></span>%
      </div>
      <div class="font-bott">
        <span>
          ￥
          <span v-text="details.price"></span>
        </span>
        <del v-if="details.oldPrice!=''">
          ￥
          <span v-text="details.oldPrice"></span>
        </del>
        <div class="but">加入购物车</div>
      </div>
    </div>

    <div class="jiange"></div>

    <div class="jshao">
      <div class="size">商品介绍</div>
      <div v-text="details.info"></div>
    </div>

    <div class="jiange"></div>

    <div class="pingjia">
      <div>商品介绍</div>
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

  
    <div class="floots" v-for="(k,i) in details.ratings" :key="i">
      <span>{{ k.rateTime | convertData }}</span>
      <div class="fl-right">
        <span v-text="k.username"></span>
        <img :src="k.avatar" />
      </div>
      <div v-text="k.text" class="fl-txt"></div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {},
    };
  },
  created() {
    const shuju = this.$route.params;
    this.details = shuju.id;
  },
  methods: {
    shouye() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.detail {
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
}
.images {
  width: 100%;
}
.images > div{
  position: absolute;
  top: .2rem;
  left: 0.2rem;
  width: .6rem;
  height: .6rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color:  rgba(255, 255, 255, 0.8);
  line-height: .58rem;
  font-size: .4rem;
  text-align: center;
}
.images > img {
  width: 100%;
  height: 7.5rem;
}
.font-wenzi {
  padding: 0.36rem;
}
.font-wenzi > div:first-child {
  font-size: 0.28rem;
  font-weight: 700;
  color: black;
}
.font-wenzi .font-color {
  font-size: 0.2rem;
  color: rgb(147, 153, 159);
}
.font-bott > span:nth-child(1) {
  font-weight: bold;
  font-size: 0.28rem;
  color: rgb(219, 10, 10);
  margin-right: 0.16rem;
}
.font-bott > del {
  font-weight: bold;
  font-size: 0.2rem;
  color: rgb(147, 153, 159);
}
.font-bott .but {
  border-radius: 0.24rem;
  width: 1.48rem;
  height: 0.48rem;
  color: white;
  font-size: 0.2rem;
  background-color: rgb(0, 160, 220);
  text-align: center;
  line-height: 0.48rem;
  float: right;
}
.jshao {
  width: 100%;
  padding: 0.36rem;
  background-color: white;
}
.size {
  font-size: 0.3rem;
  margin-bottom: 0.12rem;
}
.jshao > div:last-child {
  font-size: 0.24rem;
  font-weight: 200;
  color: rgb(147, 153, 159);
}

.floots {
  padding: 0.32rem 0.36rem;
  font-size: 0.2rem;
  color: rgb(147, 153, 159);
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}

.floots .fl-right {
  float: right;
}
.floots .fl-right > img {
  margin-left: 0.12rem;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 50%;
}
.fl-txt {
  color: black;
  margin-left: 0.12rem;
  font-size: 0.24rem;
}
</style>