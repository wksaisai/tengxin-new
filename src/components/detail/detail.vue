<template>
  <div class="detail">
    <div>
      <button @click="handleback()">返回</button>
      <h2>任务详情</h2>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <!-- <router-link to="/detail"> -->
            <div>
              <img src="##" alt>
              <span>{{item.name}}</span>
              <span>{{item.time}}</span>
              <button @click="handleto()">变更记录</button>
            </div>
            <button @click="handletask()">现场处理</button>
            <div>
              <span>故障类型：{{item.class}}</span>
              <span>服务时间：{{item.time2}}</span>
              <span>故障单号：{{item.num}}</span>
            </div>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
    <div>
      <button @click="handleapp()">通过</button>
      <!-- 拒绝和取消任务两个按钮作用一样-->
      <button>拒绝</button>
      <button>取消任务</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    handleback() {
      this.$router.back();
    },
    handleto() {
      this.$router.push("/change");
    },
     handletask() {
      this.$router.push("/task");
    },
    handleapp() {
      this.$router.push("/appraise");
    },
  }
};
</script>

<style scoped>
.detail > div {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
