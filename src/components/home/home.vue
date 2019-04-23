<template>
  <div class="home">
     <Header/>
     <Goods/>
     <Footer-com/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Header from "./components/header";
import Goods from "./components/goods";
import Footer from "../common/footer";
export default {
  components: {
    Header: Header,
    Goods: Goods,
    "Footer-com":Footer
    
  },
};
</script>


<style scoped>
.home,
.homeWrapper {
  height: 100%;
  /* background: #f2f2f2; */
}

.content {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
