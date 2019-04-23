<template>
    <div class="top-1">
        <img src="../../../assets/img/right.png" @click="handleback()">
        <span>故障描述</span>
      </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .top {
    width: 100%;
    height: 2.5rem;
    background: #0396fd;
    display: flex;
   
     
      align-items: center;
      img {
        height: 0.44rem;
        width: 0.27rem;
        margin-left: 0.3rem;
      }
      span {
        text-align: center;
        line-height: 1rem;
        color: #fff;
        font-size: 0.32rem;
        margin-left: 2.5rem;
      }
    
  }
</style>