<template>
  <div class="goodsList">
    <img src="../../../assets/img/nav-cloud.png" @click="handleto()">
    <img src="../../../assets/img/nav-waterlevel.png" @click="handleto()">
    <img src="../../../assets/img/nav-cloud-manager.png" @click="handleto()">
    <img src="../../../assets/img/nav-others.png" @click="handleto()">
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    handleto() {
      this.$router.push("adderror");
    }
  }
};
</script>

<style scoped lang="scss">
.goodsList {
  margin: 6px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0;
  // padding: 0 .15rem;
  img{
    width: 3.26rem;
    height: 2.78rem;
    margin: 9px;
  }
}

</style>