<template>
  <div class="book">
    <div class="top-1">
      <img src="../../assets/img/right.png" @click="handleback()">
      <span>液位仪</span>
    </div>
    <div class="content">
      <div class="content-com">
        <div>
          <img class="img" src="../../assets/img/one.png">
        </div>

        <div class="content-com-co" v-for="(item,index) in com" :key="index">
          <div class="content-one">
            <!-- <img v-bind:src="item.url"> -->
            <span>{{item.span1}}</span>
            <p>{{item.p}}</p>
          </div>
          <div class="content-two">
            <div>
              <img src="../../assets/img/time-1.png">
              <span>{{item.span2}}分钟前</span>
            </div>
            <div>
              <img src="../../assets/img/zan.png">
              <span>{{item.span3}}</span>
            </div>
            <div>
              <img src="../../assets/img/fensi.png">
              <span>{{item.span4}}</span>
            </div>
          </div>
        </div>
      </div>
       <div class="content-com">
        <div>
          <img class="img" src="../../assets/img/two.png">
        </div>

        <div class="content-com-co" v-for="(item,index) in com" :key="index">
          <div class="content-one">
            <!-- <img v-bind:src="item.url"> -->
            <span>{{item.span1}}</span>
            <p>{{item.p}}</p>
          </div>
          <div class="content-two">
            <div>
              <img src="../../assets/img/time-1.png">
              <span>{{item.span2}}分钟前</span>
            </div>
            <div>
              <img src="../../assets/img/zan.png">
              <span>{{item.span3}}</span>
            </div>
            <div>
              <img src="../../assets/img/fensi.png">
              <span>{{item.span4}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      com: [
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
          // require("../../assets/img/one.png"),
          span1: "各种故障怎么解决",
          p:
            "我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你我来告诉你",
           span2 : "10",
           span3 : "30",
           span4 : "10",
        }
      ]
    };
  },
  methods: {
    handleback() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
.book {
  height: 100%;
  width: 100%;
  .top-1 {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    background: #0396fd;
    img {
      height: 0.4rem;
      width: 0.27rem;
      margin-left: 0.3rem;
    }
    span {
      text-align: center;
      color: black;
      font-size: 0.32rem;
      margin-left: 2.6rem;
      color: #fff;
    }
  }
  .content {
    height: 12.34rem;
    overflow-y: scroll;
    padding: 0 0.15rem;
    .content-com {
      height: 2.85rem;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      // align-items: center;
      .img {
        margin-top: 0.38rem;
        width: 1.75rem;
        height: 1.82rem;
      }
      .content-com-co {
        margin-left: 0.23rem;
        margin-top: 0.48rem;
        .content-one {
          span {
            font-size: 0.28rem;
            color: black;
          }
          p {
            font-size: 0.23rem;
            color: #8a8a8a;
            margin-top: 0.1rem;
            overflow: hidden;
            -webkit-line-clamp: 3;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-height: .4rem;
          }
        }
        .content-two {
          display: flex;
          margin-top: .24rem;
          // div:nth-of-type(1){
           
          // }
          div:nth-of-type(2){
            margin-left: 1.3rem;
          }
          div:nth-of-type(3){
           margin-left: 1rem;
          }
          div {
            display: flex;
            img {
              width: 0.37rem;
              height: 0.37rem;
            }
            span{
              margin-left: .1rem;
              margin-top: .05rem;
              color :#d8d8d8;
              font-size: .23rem;            }
          }
        }
      }
    }
  }
}
</style>