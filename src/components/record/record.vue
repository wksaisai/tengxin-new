<template>
  <div>
    <div class="header">
      <span>记录</span>
      <img src="../../assets/img/tong_zhi.png" @click="handleto()">
    </div>
    <div class="body">
      <mt-navbar v-model="selected">
        
        <mt-tab-item id="1">进行中</mt-tab-item>
        <mt-tab-item id="2">已完成</mt-tab-item>
        <mt-tab-item id="3">已取消</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n"/> -->
          <div class="com" v-for="(item,index) in list" :key="index">
             
              <router-link to="/detail">
                <div>
                  <img src="##" alt>
                  <span>{{item.name}}</span>
                  <span>{{item.time}}</span>
                </div>
                <div>
                  <span>故障类型：{{item.class}}</span>
                  <span>服务时间：{{item.time2}}</span>
                  <span>故障单号：{{item.num}}</span>
                </div>
              </router-link>
           
          </div>
           
          
        </mt-tab-container-item>

        <mt-tab-container-item id="2">
            <div class="com" v-for="(item,index) in list" :key="index">
             
              <router-link to="/detail">
                <div>
                  <img src="##" alt>
                  <span>{{item.name}}</span>
                  <span>{{item.time}}</span>
                </div>
                <div>
                  <span>故障类型：{{item.class}}</span>
                  <span>服务时间：{{item.time2}}</span>
                  <span>故障单号：{{item.num}}</span>
                </div>
              </router-link>
             <button @click="handleapp()">评价</button>
              <button @click="handletask()">任务记录</button>
          </div>

            
              <!-- </router-link> -->
        </mt-tab-container-item>

        <mt-tab-container-item id="3">
          <div class="com" v-for="(item,index) in list" :key="index">
             
              <!-- <router-link to="/detail"> -->
                <div>
                  <img src="##" alt>
                  <span>{{item.name}}</span>
                  <span>{{item.time}}</span>
                </div>
                <div>
                  <span>故障类型：{{item.class}}</span>
                  <span>服务时间：{{item.time2}}</span>
                  <span>故障单号：{{item.num}}</span>
                </div>
              <!-- </router-link> -->
           
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <Footer-com/>
  </div>
</template>

<script>
import Footer from "../common/footer";
export default {
  data() {
    return {
      selected: "1",
      list: [
        {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
        {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
         {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
        {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
         {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
        {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
         {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
        {
          path: "",
          img: "",
          name: "李小刚",
          time: "2019-4-15",
          class: "液位仪",
          time2: "2019-4-15",
          num: "210922199312202112"
        },
      ]
    };
  },
  components: {
    "Footer-com": Footer
  },
  methods: {
    handletask() {
      this.$router.push("/task");
    },
    handleapp() {
      this.$router.push("/appraise");
    },
     handleto() {
        this.$router.push("/notice");
      }
  }
};
</script>


<style scoped lang="scss">
div {
  .header {
    width: 100%;
    height: 1rem;
    background: #0396fd;
    display: flex;
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
      margin-right: 0.3rem;
    }
  }
  .body {
    .mint-navbar {
      height: 1.1rem;
      .mint-tab-item {
        display: block;
        margin: 0 0.4rem;
      }
    }
    .mint-tab-container{
      background: #f1f1f1;
      height: 10.3rem;
      overflow-y: scroll;
      .mint-tab-container-wrap{
       .mint-tab-container-item{
         .com{
           background: #fff;
           margin: .3rem .36rem;
           border-radius: .1rem;
         }
       }
      }
    }
  }
}
</style>