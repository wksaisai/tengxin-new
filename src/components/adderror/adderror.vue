<template>
  <div class="header">
    <div class="top-1">
      <img src="../../assets/img/right.png" @click="handleback()">
      <span>故障描述</span>
    </div>
    <Goods-com/>
    <!-- <span>{{qq}}</span> -->
    <div class="wrapper homeWrapper" ref="homeWrapper">
      <div class="error">
        <div class="show">
          <div>
            <img src="../../assets/img/error.png">
            <span>常见故障</span>
          </div>
          <div>
            <!-- <span v-for="(item,index) in con" :key="index" @click="handleget()">{{item}}</span> -->
            <span
              v-for="(item,index) in con"
              :class="index == activeIndex?'active':'' "
              @click="handleToggle(index)"
              :key="index"
            >{{item}}</span>
          </div>
          <div>
            <textarea v-sliceString="titleMaxLength" v-model="title" width="100%"></textarea>
            <span>{{this.title.length >= 0 ?this.title.length : 0 }}/140</span>
            <img src="../../assets/img/add.png">
            <span @click="add()">添加故障照片</span>
          </div>
          <div>
            <ul>
              <li v-for="(item,index) in img" :key="index">
                <img :src="item">
              </li>
            </ul>
          </div>
        </div>
        <div class="show-next">
          <ul>
            <li>
              <img src="../../assets/img/time.png">
              <span>时间 :</span>
              <span>2019-4-15</span>
            </li>
            <li>
              <img src="../../assets/img/phone.png">
              <span>电话 :</span>
              <span>13800000000</span>
            </li>
            <li>
              <img src="../../assets/img/dizhi.png">
              <span>地址 :</span>
              <span>
                <input type="text" placeholder="第一次请输入">
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer" @click="handleto()">提交</div>
  </div>
</template>


<script>
import Goods from "./components/goods";
import request from "../../utils/http.js";
import "@/utils/Date.js";
export default {
  components: {
    "Goods-com": Goods,
  },
  data() {
    return {
      qq: [],
      a: [],
      activeIndex: 0,
      title: "",
      titleMaxLength: 140,
      con: [
        "不读数值",
        "不工作"
        // "不工作不运作",
        // "开机慢还有噪音",
        // "开机速度慢不读取数值",
        // "其他"
      ],
      img: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg"
      ]
    };
  },

  // mounted() {
  //   console.log(this.$http.adornUrl("/work/workwork/save"));

  //   var a = new Date();
  //   console.log(a);
  //   this.$http({
  //     url: this.$http.adornUrl("/work/workwork/save"),
  //     method: "post",
  //     data: {
  //       faultTypeId: "1",
  //       description: "asdsdasd",
  //       serveTime: "2019-04-02 08:12:22",
  //       address: "123231",
  //       FaultCommonId:"",
  //       // createTime: new Date("2019-04-23T00:31:13.311Z").Format(
  //       //   "yyyy-MM-dd hh:mm:ss"
  //       // ),
  //     }
  //   }).then(({ data }) => {
  //     console.log(data);
  //   });
  // },
  methods: {
    add() {
      console.log(1111);
    },
    handleback() {
      this.$router.back();
    },
    handleto() {
      this.$router.push("/success");
    },
    handleToggle(params) {
      this.activeIndex = params;
    }
  },
  directives: {
    sliceString: {
      update(el, binding) {
        if (el.value.length >= binding.value) {
          el.value = el.value.slice(0, binding.value);
        }
      }
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
      height: 0.44rem;
      width: 0.27rem;
      margin-left: 0.3rem;
      margin-top: 0.24rem;
    }
    span {
      text-align: center;
      line-height: 1rem;
      color: #fff;
      font-size: 0.32rem;
      margin-left: 2.5rem;
    }
  }
}
.header > .homeWrapper {
  height: 9.74rem;
  overflow-y: scroll;
  .error {
    background: #f1f1f1;
    overflow: hidden;
    height: 11rem;
    .show {
      background: #fff;
      width: 7.1rem;
      border-radius: 0.1rem;
      margin: 0 auto;
      margin-top: 1.1rem;
      div:nth-of-type(1) {
        display: flex;
        align-items: center;
        img {
          margin-top: 0.1rem;
          height: 0.5rem;
          width: 0.58rem;
          margin-left: 0.22rem;
        }
        span {
          font-size: 0.28rem;
          color: black;
          margin-left: 0.2rem;
          line-height: 35px;
        }
      }
      div:nth-of-type(2) {
        padding: 0 0.48rem;
        span {
          display: inline-block;
          border: 1px solid #d6d6d6;
          border-radius: 0.5rem;
          color: #5a5a5a;
          font-size: 0.25rem;
          margin-right: 0.24rem;
          margin-top: 0.12rem;
          line-height: 0.55rem;
          padding: 0 0.33rem;
        }
        .active {
          border: 1px solid #ffa63d;
        }
      }
      div:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        textarea {
          width: 6.12rem;
          height: 2.54rem;
          margin: 0 auto;
          margin-left: 0.55rem;
          margin: 0.24rem 0;
          border: 1px solid #d6d6d6;
          border-radius: 0.2rem;
          background: url(../../assets/img/null.png) no-repeat center 0.2rem;
          background-size: 1.3rem 1.4rem;
          outline: none;
        }
        span:nth-of-type(1) {
          color: #e1e1e1;
          font-size: 0.23rem;
          position: absolute;
          right: 0.66rem;
          top: 2.3rem;
        }
        span:nth-of-type(2) {
          color: #e1e1e1;
          font-size: 0.23rem;
          position: absolute;
          left: 1.2rem;
          top: 2.25rem;
        }
        img {
          width: 0.5rem;
          height: 0.38rem;
          position: absolute;
          top: 2.2rem;
          left: 0.64rem;
        }
      }
      div:nth-of-type(4) {
        padding: 0 0.48rem;
        ul {
          display: flex;
          justify-content: space-around;
          li {
            width: 1.35rem;
            height: 1.35rem;
            border-radius: 5px;
            margin-bottom: 0.1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .show-next {
      background: #fff;
      height: 2.05rem;
      width: 7.1rem;
      border-radius: 0.1rem;
      margin: 0 auto;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      font-size: 0.24rem;
      ul {
        padding-top: 0.1rem;
        li {
          display: flex;
          align-items: center;
          margin-top: 0.2rem;
          margin-left: 0.5rem;
          line-height: 0.35rem;
          img {
            width: 0.3rem;
            height: 0.3rem;
          }
          span:nth-of-type(1) {
            font-size: 0.28rem;
            margin-left: 0.24rem;
          }
          span:nth-of-type(2) {
            margin-left: 0.24rem;
            color: #5a5a5a;
            font-size: 0.24rem;
            input {
              width: 100%;
              font-size: 0.24rem;
            }
          }
        }
      }
    }
  }
}
.header > .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #0396fd;
  width: 100%;
  height: 1.1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.32rem;
  color: #fff;
  overflow: hidden;
}
</style>