<template>
  <div calss="change">
    <div>
      <button @click="handleback()">返回</button>
      <h2>变更记录</h2>
    </div>
    <div class="new">
      <i>原</i>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <!-- <router-link to="/detail"> -->
          <div>
            <img src="##" alt>
            <span>{{item.name}}</span>
            <span>{{item.time}}</span>
            <button @click="handleto()">变更记录</button>
          </div>
          <div>
            <span>故障类型：{{item.class}}</span>
            <span>服务时间：{{item.time2}}</span>
            <span>故障单号：{{item.num}}</span>
          </div>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
    <div calss="old">
      <div class="new">
        <i>新</i>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <!-- <router-link to="/detail"> -->
            <div>
              <img src="##" alt>
              <span>{{item.name}}</span>
              <span>{{item.time}}</span>
              <button @click="handleto()">变更记录</button>
            </div>
            <div>
              <span>故障类型：{{item.class}}</span>
              <span>服务时间：{{item.time2}}</span>
              <span>故障单号：{{item.num}}</span>
            </div>
            <!-- </router-link> -->
          </li>
        </ul>
      </div>
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
  }
};
</script>

<style scoped>
</style>