<template>
  <div>
    <div class="top">提交成功</div>
    <div class="bot">
      <div class="bot-top">
        <img src="../../assets/img/wait.png" alt>
      </div>

      <div class="bot-bot">
        <button @click="handleto()">继续报障</button>
        <button @click="handletoto()">查看故障单</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleto() {
      this.$router.push("/home");
    },
    handletoto() {
      this.$router.push("/record");
    }
  }
};
</script>
<style scoped lang="scss">
div {
  .top {
    height: 1.67rem;
    background: #118eea;
    text-align: center;
    line-height: 1.67rem;
    font-size: 0.32rem;
    color: #fff;
  }
  .bot {
    .bot-top {
      height: 9.17rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70%;
        height: 70%;
      }
    }

    .bot-bot {
      height: 2.5rem;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      button:nth-of-type(1) {
        width: 2.44rem;
        height: 0.84rem;
        border: 1px solid #ff8740;
        border-radius: 0.5rem;
        color: #ff8740;
        background: #fff;
        font-size: 0.32rem;
      }
      button:nth-of-type(2) {
        width: 2.44rem;
        height: 0.84rem;
        border: 1px solid #118eea;
        border-radius: 0.5rem;
        color: #118eea;
        background: #fff;
        font-size: 0.32rem;
      }
    }
  }
}
</style>