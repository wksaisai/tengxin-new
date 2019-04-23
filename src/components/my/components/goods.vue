<template>
  <div class="goods">
    <div class="good-top">
      <img src="../../../assets/img/yeweiyi.png">
    </div>
    <div class="good-bot">
      <span>王笑笑</span>
      <span>138 0000 0000</span>
    </div>
  </div>
</template>
<script>

export default {

};
</script>
<style lang="scss" scoped>
.goods {
  z-index: 10;
  width: 7.1rem;
  height: 2.3rem;
  background: #fff;
  position: absolute;
  top: 1.1rem;
  left: 0.2rem;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  .good-top {
   
    img {
      width: .98rem;
      height: 0.98rem;
      border-radius: 50%;
      margin-left: .42rem;
    }
   
  }
  .good-bot {
   
     span {
      font-size: .26rem;
      color: #3f3f3f;
      margin-left: 0.2rem;
      display: block;
      margin-top: .1rem;
    }
  }
}
</style>