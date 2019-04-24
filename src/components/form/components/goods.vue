<template>
  <div class="goods">
    <div class="good-top">
      <span>时间选择</span>
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
  height: 1.45rem;
  background: #fff;
  position: absolute;
  top: 1.5rem;
  left: 0.2rem;
  border-radius: 0.1rem;
  .good-top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.45rem;
    span {
      font-size: 0.28rem;
      color: #0394fd;
      border: 1px solid #0394fd;
      border-radius: 10px;
      height: .6rem;
      width: 3.15rem;
      text-align: center;
      line-height: .6rem;
    }
  }
}
</style>