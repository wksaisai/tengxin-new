<template>
  <div class="detail">
    
      <div class="top-1">
        <img src="../../assets/img/right.png" @click="handleback()">
        <span>任务详情</span>
      </div>
       <Goods-com/>
   
    <div>
      <button @click="handleapp()">通过</button>
      <!-- 拒绝和取消任务两个按钮作用一样-->
      <button>拒绝</button>
      <button>取消任务</button>
    </div>
  </div>
</template>

<script>
import Goods from "./components/goods";
export default {
  components: {
    "Goods-com": Goods,
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleback() {
      this.$router.back();
    },
    handleto() {
      this.$router.push("/change");
    },
    handletask() {
      this.$router.push("/task");
    },
    handleapp() {
      this.$router.push("/appraise");
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  .top-1 {
    height: 2.5rem;
    width: 100%;
    height: 2.5rem;
    background: #0396fd;
    display: flex;
    img {
      height: 0.44rem;
      width: 0.27rem;
      margin-left: 0.3rem;
      margin-top: 0.24rem;
    }
    span {
      text-align: center;
      line-height: 1rem;
      color: #fff;
      font-size: 0.32rem;
      margin-left: 2.5rem;
    }
  }
}
</style>
