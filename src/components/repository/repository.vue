<template>
  <div class="repository">
    <div class="header">
      <span>记录</span>
      <img src="../../assets/img/tong_zhi.png" @click="handletonotice()">
    </div>
    <div class="content">
      <div @click="handleto()"><img src="../../assets/img/10.png"></div>
      <div @click="handleto()"><img src="../../assets/img/11.png"></div>
      <div @click="handleto()"><img src="../../assets/img/12.png"></div>
      <div @click="handleto()"><img src="../../assets/img/13.png"></div>
      <div @click="handleto()"><img src="../../assets/img/14.png"></div>
      <div @click="handleto()"><img src="../../assets/img/15.png"></div>
    </div>
    <Footer-com/>
  </div>
</template>

<script>
import Footer from "../common/footer";
export default {
  components: {
    "Footer-com": Footer
  },
  data() {
    return {};
  },
  methods: {
    handletonotice() {
      this.$router.push("notice");
    },
    handleto() {
      this.$router.push("/book");
    }
  }
};
</script>


<style scoped lang="scss">
.repository {
  width: 100%;
  height: 100%;
}
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
.repository > .content {
  padding: 0 .15rem;
}
.repository > .content > div {
  width: 50%;
  float: left;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    width: 90%;
    height: 90%;;
  }
}
</style>