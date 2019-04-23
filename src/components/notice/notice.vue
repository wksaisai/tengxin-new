<template>
  <div>
    <div class="top-1">
      <img src="../../assets/img/right-1.png" @click="handleback()">
      <span>通知</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleback() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
div {
  .top-1 {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ececec;
    img {
      height: 0.4rem;
      width: 0.27rem;
      margin-left: 0.3rem;
    }
    span {
      text-align: center;
      color: black;
      font-size: 0.32rem;
      margin-left: 2.9rem;
    }
  }
}
</style>

