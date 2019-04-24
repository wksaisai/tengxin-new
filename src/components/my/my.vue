<template>
  <!-- <div class="my">
    <div class="head">
      <h2>我的</h2>
      <router-link to="/notice">
        <i class="iconfont">&#xe677</i>
      </router-link>
    </div>
    <div class="info">
      <div class="info-show">头像</div>
      <div>
        <span>王笑笑</span>
        <p>13800000000</p>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <router-link :to="item.path">
            <div>
              <i></i>
              <span>{{item.con}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Footer-com/>
  </div>-->

  <div class="header">
    <div class="top-1">
      <span>我的</span>
      <img src="../../assets/img/tong_zhi.png" @click="handleto()">
    </div>
    <Goods-com/>
    <div class="wrapper homeWrapper" ref="homeWrapper">
      <div class="content">
        <div class="content-com">
          <div v-for="(item,index) in list" :key="index">
            <router-link :to="{name:item.path}">
              <img src="../../assets/img/shujutongji.png">
              <span>{{item.con}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer-com/>
  </div>
</template>

<script>
import Goods from "./components/goods";
import Footer from "../common/footer";

export default {
  components: {
    "Footer-com": Footer,
    "Goods-com": Goods
  },
  data() {
    return {
      list: [
        {
          path: "form",
          img: "哈哈",
          con: "数据统计"
        },
        {
          path: "plan",
          img: "呵呵",
          con: "巡检计划"
        }
      ]
    };
  },
  methods: {
    handleto() {
      this.$router.push("notice");
    }
  }
};
</script>


<style scoped lang="scss">
.header {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .top-1 {
    height: 2.5rem;
    width: 100%;
    height: 2.5rem;
    background: #0396fd;
    display: flex;
    img {
      height: 0.6rem;
      width: 0.6rem;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      margin-right: 0.3rem;
    }
    span {
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      color: #fff;
      font-size: 0.32rem;
      margin: 0 auto;
      margin-left: 3.4rem;
    }
  }
  .homeWrapper {
    height: 9.84rem;
    .content {
      background: #f1f1f1;
      overflow: hidden;
      height: 100%;
      .content-com {
        background: #fff;
        width: 7.1rem;
        border-radius: 0.1rem;
        margin: 0 auto;
        margin-top: 1.1rem;
        padding: 0 0.11rem;
        div {
          a {
            height: 1.15rem;
            border-bottom: 1px solid #dadada;
            display: flex;
            align-items: center;
            img{
              margin-left: .6rem;
            }
            span{
              font-size: .28rem;
              color: black;
              margin-left: .5rem;
            }
          }
        }
      }
    }
  }
}
</style>