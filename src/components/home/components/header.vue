<template>
  <div class="header">
    <span>报障</span>
    <img src="../../../assets/img/tong_zhi.png" @click="handleto()">
  </div>
</template>


<script>
export default {
  methods: {
    handleto() {
      this.$router.push("notice");
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 1rem;
  background: #0396fd;
  display: flex;
  margin-bottom: .4rem;
  span {
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: 0.32rem;
    margin: 0 auto;
    margin-left: 3.4rem;
  }
  img {
    height: 0.6rem;
    width: 0.6rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    margin-right: 0.3rem;
  }
}
</style>