<template>
  <div>
    <button @click="handleback()">返回</button>
    <h2>评价</h2>
    <ul>
        服务度
    </ul>
    <ul>
        专业度
    </ul>
    <button>提交</button>
  </div>
</template>

<script>
export default {
    methods: {
    handleback() {
      this.$router.back();
    },
  }
};
</script>

<style lang="" scoped>
</style>