<template>
  <div class="goods">
    <div class="goods-con">
      <ul>
        <li>
          <img src="../../../assets/img/number.png">
        </li>
        <li>
          <img src="../../../assets/img/man.png">
        </li>
        <li>
          <img src="../../../assets/img/time.png">
        </li>
        <li>
          <img src="../../../assets/img/phone.png">
        </li>
        <li>
          <img src="../../../assets/img/dizhi.png">
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div>
            <span>{{item.num}}</span>
            <span>{{item.name}}</span>
            <span>{{item.time}}</span>
            <span>{{item.time}}</span>
            <span>{{item.time}}</span>
            <button @click="handleto()">变更记录</button>
            <button @click="handletask()">现场处理</button>
          </div>
        </li>
      </ul>
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
          num: "210922199312202112",
          phone:"138 0000 0000",
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.goods {
  z-index: 10;
  width: 7.1rem;
  height: 2.95rem;
  background: #fff;
  position: absolute;
  top: 1.1rem;
  left: 0.2rem;
  border-radius: 0.1rem;
  .goods-con {
    display: flex;
  }
}
</style>