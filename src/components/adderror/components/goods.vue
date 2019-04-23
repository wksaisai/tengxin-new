<template>
  <div class="goods">
    <div class="good-top">
      <img src="../../../assets/img/yeweiyi.png">
      <span>液位仪</span>
    </div>
    <div class="good-bot">
      <span>准缺的添加故障信息可以更快的解决问题</span>
    </div>
  </div>
</template>
<script>
export default {};
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
  .good-top {
    display: flex;
    img {
      width: 0.6rem;
      height: 0.47rem;
      margin-top: 0.22rem;
      margin-left: 0.22rem;
    }
    span {
      font-size: 0.28rem;
      color: black;
      line-height: 0.95rem;
      margin-left: 0.2rem;
    }
  }
  .good-bot {
    text-align: center;
    span {
      font-size: 0.22rem;
      color: #b7b7b7;
    }
  }
}
</style>