<template>
  <div>
    <!-- 渲染视图 -->
    <router-view></router-view>
    <floot></floot>
  </div>
</template>

<style>
.home {
  width: 100%;
  height: 100%;
}
.action {
  color: red;
}

.menu {
  display: flex;
  position: fixed;
  top: 2.65rem;
  width: 100%;
  background-color: white;
  text-align: center;
  font-size: 0.28rem;
  border-bottom: 0.01rem rgba(0, 0, 0, 0.3) solid;
}
.menu li {
  height: 0.6rem;
  line-height: 0.6rem;
  flex: 1;
}
.jiange {
  width: 100%;
  height: 0.32rem;
  background-color: #f3f5f7;
  border-top: 0.01rem solid rgba(7, 17, 27, 0.1);
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}

.pingjia {
  width: 100%;
  padding: 0.36rem;
  background-color: white;
}
.pingjia > div:first-child {
  margin-bottom: 0.24rem;
}
.pingjia > ul {
}
.pingjia ul > li {
  float: left;
  width: 1.2rem;
  height: 0.6rem;
  border-radius: 0.02rem;
  font-size: 0.24rem;
  color: rgb(77, 85, 93);
  text-align: center;
  line-height: 0.6rem;
  margin-right: 0.16rem;
}
.pingjia ul > li > span {
  font-size: 0.16rem;
}
.pingjia ul > li:nth-child(1) {
  color: white;
  background-color: rgb(0, 160, 220);
}
.pingjia ul > li:nth-child(2) {
  background-color: rgba(0, 160, 220, 0.2);
}
.pingjia ul > li:nth-child(3) {
  background-color: rgba(77, 85, 93, 0.2);
}
.bian-xian {
  margin: 0 auto;
  width: 90%;
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
}
.dianji {
  padding: 0.24rem 0.36rem;
  border-bottom: 0.02rem solid rgba(7, 17, 27, 0.1);
}
.dianji > span:nth-child(1) {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-color: rgb(77, 85, 93, 0.5);
  border-radius: 50%;
  line-height: 0.4rem;
  text-align: center;
  color: white;
}
.dianji > span:nth-child(2) {
  margin-left: 0.08rem;
  font-size: 0.24rem;
  color: rgb(147, 153, 159);
}
</style>
