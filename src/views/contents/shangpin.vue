<template>
  <div>
    <top></top>
    <div class="caidan">
      <!-- 左边 -->
      <div class="shangp-left">
        <ul>
          <li v-for="(k,i) in list" :key="i" :class="i==0?'actions':''">
            <a :href="'#'+k.name" v-text="k.name" @click="action"></a>
          </li>
        </ul>
      </div>

      <!-- 右边 -->
      <div class="shangp-right">
        <div v-for="k in list" :key="k.name">
          <div class="rexiao" v-text="k.name" :id="k.name"></div>
          <div class="shangp" v-for="(item,i) in k.foods" :key="i">
            <div class="f-content">
              <router-link
                tag="img"
                :src="item.icon"
                :to="{name:'detail', params:{id: item} }"
                class="f-left"
              ></router-link>
              <div class="f-right">
                <div v-text="item.name"></div>
                <div v-text="item.description"></div>
                <div>
                  <span>
                    月售
                    <span v-text="item.sellCount"></span>份
                  </span>
                  <span>
                    好评率
                    <span v-text="item.rating "></span>%
                  </span>
                </div>
                <div class="jiage">
                  <span>
                    ￥
                    <span v-text="item.price"></span>
                  </span>
                  <del v-if="item.oldPrice!=''">
                    ￥
                    <span v-text="item.oldPrice"></span>
                  </del>
                </div>
                <div class="cart">
                  <transition>
                    <div class="jcart" v-if="item.count>0" @click="del(item)">-</div>
                  </transition>
                  <div class="count" v-if="item.count>0" v-text="item.count"></div>
                  <div class="addcart" @click="add(item)">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="div7" v-show="isno"> 
        <div class="div8">
          <span class="span4">购物车</span>
          <span class="fr span5" @click="close">清空</span>
        </div>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <ul>
                   <-注释 v-if="a.count!=undefined && a.count!=0" 
              <li v-for="(a,b) in item.foods" :key="b" class="li2"><span class="span6">{{a.name}}</span>
              <div class="cart fr div9">
                    <transition>
                      <div class="jcart" v-if="a.count>0" @click="jcart(a)">-</div>
                    </transition>
                    <div class="count" v-if="a.count>0">{{a.count}}</div>
                    <div class="addcart" @click="addcart(a)">+</div>
                </div>
                <div class="fr div10">￥{{a.count*a.price}}</div>
              
              </li>
            </ul>
          </li>
        </ul>
      </div>-->
      <!-- <div class="div35"></div>
      <div class="div4"  @click="isno=!isno">
        <div class="div5" :style="{background:add==0?'#2b343d':'#00a0dc'}"><span>🛒</span></div>
        <span class="span2">￥{{add}}</span>
        <span class="span3">另需配送费￥4元</span>
        <div class="div6">￥20起送</div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isno: false,
      index: 0,
    };
  },
  methods: {
    action(e) {
      let li = e.target.parentNode.parentNode.children;
      for (var i = 0; i < li.length; i++) {
        li[i].classList.remove("actions");
        //点击获取当前元素
        e.target.parentNode.classList.add("actions");
      }
    },
    add(t) {
      if (!t.count) {
        this.$set(t, "count", 1);
        this.$emit("toFather", t);
      } else {
        ++t.count;
        this.$emit("toFather", t);
      }
    },

    del(t) {
      --t.count;
      this.$emit("toFather", t);
    },

    //购物车样式
    // addcart(t) {
    //   if (!t.count) {
    //     this.$set(t, "count", 1);
    //   } else {
    //     t.count++;
    //   }
    // },
    // // 减去购物车数量
    // jcart(t) {
    //   t.count--;
    // },
    // close() {
    //   this.list.forEach((food) => {
    //     for (var i = 0; i < food.foods.length; i++) {
    //       food.foods[i].count = undefined;
    //     }
    //   });
    // },
    // fun(i) {
    //   this.index = i;
    // },
  },
  created() {
    this.$ajax
      .get("./json/goods.json")
      .then((res) => {
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
/* 购物车开始 */
/* .div7{
  position: fixed;
  bottom: 0.96rem;
  left: 0;
  width: 100%;
  height: 6.11rem;
  background: white;
}
.div8{
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}
.span4{
  padding-left: 0.36rem;
  font-size: 0.28rem;
  line-height: 0.8rem;
  font-weight: 200;
  color: rgb(7, 17, 27);
}
.span5{
  padding-right: 0.36rem;
  font-size: 0.24rem;
  color: rgb(0, 160, 220);
  line-height: 0.8rem;
}
.li2{
  padding-left: 0.36rem;
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}
.li2>.span6{
  line-height: 0.96rem;
  font-size: 0.28rem;
  color: rgb(7, 17, 27);
}
.div9{
  padding-top: 0.45rem;
  padding-right: 0.36rem;
}
.div10{
  position: relative;
  top: 0.25rem;
  margin-right: 0.7rem;
  font-size: 0.28rem;
  font-weight: 700;
  color: rgb(240, 20, 20);
}
.cart {
  position: relative;
  height: 0.2rem;
  left: -0.5rem;
  top: -0.2rem;
}
.count {
  display: inline-block;
  margin: 0 0.1rem;
  font-size: 0.2rem;
}
.jcart,
.addcart {
  display: inline-block;
  width: 0.2rem;
  line-height: 0.2rem;
  height: 0.2rem;
  background-color: #71fef4;
  text-align: center;
} */
/* 购物车结束 */

.v-leave,
.v-enter-active {
  transition: all 1s;
  opacity: 1;
  transform: translateX(0) rotate(0);
}
/*元素退场*/
.v-enter,
.v-leave-active {
  transition: all 1s;
  opacity: 0;
  /*transform，将多个连续的动画写在一个属性中*/
  transform: translateX(0.2rem) rotate(180deg);
}

/* 加减 */
.cart {
  display: flex;
  position: relative;
  top: -0.4rem;
  float: right;
}
.cart .jcart {
  position: absolute;
  right: 0.8rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  font-size: 0.3rem;
  text-align: center;
  text-align: center;
  line-height: 0.2rem;
  color: rgb(0, 160, 220);
  border: 0.04rem solid rgb(0, 160, 220);
}
.cart .count {
  position: absolute;
  right: 0.5rem;
}
.cart .addcart {
  position: absolute;
  right: 0rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.34rem;
  background-color: rgb(0, 160, 220);
  color: white;
}
/* ---加减--- */

.caidan {
  width: 100%;
  height: 100%;
}
.actions {
  width: 100%;
  height: 100%;
  background-color: white;
  color: #000;
}
.actions > a {
  border-bottom: 0.01rem solid white !important;
}

.shangp-left {
  position: fixed;
  top: 3.27rem;
  width: 1.6rem;
  height: 100%;
  background-color: #f3f5f7;
  overflow-x: hidden;
  overflow-y: auto;
  height: 9rem;
}
.shangp-left > ul {
}
.shangp-left > ul > li {
  padding: 0 0.24rem;
  height: 1.08rem;
  font-size: 0.24rem;
  font-weight: 200;
}
.shangp-left > ul > li > a {
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}

.shangp-right {
  position: fixed;
  top: 3.27rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  margin-left: 1.6rem;
  height: 9rem;
}
.shangp-right .rexiao {
  height: 0.52rem;
  font-size: 0.24rem;
  color: rgb(147, 153, 159);
  background-color: #f3f5f7;
  line-height: 0.52rem;
  border-left: 0.02rem solid #d9dde1;
  padding-left: 0.28rem;
}
.shangp {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.f-content {
  width: 100%;
  height: 100%;
  padding: 0.36rem;
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}
.f-left {
  width: 1.08rem;
  height: 1.08rem;
  float: left;
}
.f-right {
  overflow: hidden;
  padding-left: 0.2rem;
}
.f-right > div {
  font-size: 0.2rem;
}
.f-right > div:nth-child(1) {
  font-size: 0.26rem;
  color: rgb(7, 17, 27);
}
.f-right > div:nth-child(2) {
  color: rgb(147, 153, 159);
  line-height: 0.3rem;
}
.f-right > div:nth-child(3) {
  color: rgb(147, 153, 159);
}
.f-right > div:nth-child(3) > span:first-child {
  margin-right: 0.24rem;
}
.jiage {
}
.jiage > span:nth-child(1) {
  font-weight: bold;
  font-size: 0.28rem;
  color: rgb(219, 10, 10);
  margin-right: 0.16rem;
}
.jiage > del {
  font-weight: bold;
  font-size: 0.2rem;
  color: rgb(147, 153, 159);
}
</style>
