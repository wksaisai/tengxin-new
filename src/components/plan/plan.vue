<template>
  <div>
    <div>
      <button @click="handleback()">返回</button>
      <h2>巡检计划</h2>
    </div>
  </div>
</template>

<script>
export default {
   methods:{
        handleback() {
      this.$router.back();
    },
   }
}
</script>

<style  scoped>
</style>