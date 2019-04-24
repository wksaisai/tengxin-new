<template>
  <div class="top">
    <span class="wek">本周统计</span>
    <div class="top-box">
      <div class="top-box1">
        <span>上报 73次</span>
        <span>平均耗时 10分钟</span>
      </div>
      <ve-bar :data="chartData"></ve-bar>
    </div>
    <div>表2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["日期", "上报次数", "平均耗时"],
        rows: [
          { 日期: "其他", 上报次数: 15, 平均耗时: 6 },
          { 日期: "液位仪", 上报次数: 16, 平均耗时: 11 },
          { 日期: "加管云", 上报次数: 17, 平均耗时: 10 },
          { 日期: "桌面云", 上报次数: 25, 平均耗时: 15 }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 100%;
  margin-top: 0.45rem;
  padding: 0 0.2rem;
  .wek {
    text-align: center;
    line-height: 1rem;
    color: #484848;
    font-size: 0.28rem;
    margin-left: 3.15rem;
  }
  .top-box {
    margin-top: -10px;
    .top-box1 {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0394fd;
      color: #fff;
      font-size: 0.32rem;
      height: 0.8rem;
      border-radius: 10px;
    }
  }
}
</style>