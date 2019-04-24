<template>
  <div class="form">
    <div class="top-1">
      <img src="../../assets/img/right.png" @click="handleback()">
      <span>故障描述</span>
    </div>
     <Goods-com/>
     <Top-com/>
  </div>
</template>

<script>
import Goods from "./components/goods";
import Top from "./components/top";
export default {
  components: {
    "Goods-com": Goods,
    "Top-com": Top,
  },
   methods:{
        handleback() {
      this.$router.back();
    },
   }
}
</script>

<style  scoped lang="scss">
.form{
  background: #f1f1f1;
  height: 100%;
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
      margin-top: 0.5rem;
    }
    span {
      text-align: center;
      line-height: 1.5rem;
      color: #fff;
      font-size: 0.32rem;
      margin-left: 2.5rem;
    }
  }
}
// .form{
// height: 100%;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
//   .top-1 {
//     height: 2.5rem;
//     width: 100%;
//     height: 2.5rem;
//     background: #0396fd;
//     display: flex;
//     img {
//       height: 0.44rem;
//       width: 0.27rem;
//       margin-left: 0.3rem;
//       margin-top: 0.24rem;
//     }
//     span {
//      text-align: center;
//       line-height: 1rem;
//       color: #fff;
//       font-size: 0.32rem;
//       margin-left: 2.5rem;
//     }
//   }
// }
</style>