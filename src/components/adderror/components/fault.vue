<template>
  <div class="error">
    <div class="show">
      <div>
        <img src="../../../assets/img/error.png">
        <span>常见故障</span>
      </div>
      <div>
        <span v-for="(item,index) in con" :key="index">{{item}}</span>
      </div>
      <div>
        <textarea v-sliceString="titleMaxLength" v-model="title" width="100%"></textarea>
        <span>{{this.title.length >= 0 ?this.title.length : 0 }}/140</span>
        <img src="../../../assets/img/add.png">
        <span>添加故障照片</span>
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
          <img src="../../../assets/img/time.png">
          服务时间 : 2019-4-15
          <span></span>
        </li>
        <li>
          <img src="../../../assets/img/phone.png">
          联系方式 : 13800000000
          <span></span>
        </li>
        <li>
          <img src="../../../assets/img/dizhi.png">
          地址
          <input type="text" placeholder="第一次请输入">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      titleMaxLength: 140,
      con: [
        "不读数值",
        "不工作",
        "不工作不运作",
        "开机慢还有噪音",
        "开机速度慢不读取数值",
        "其他"
      ],
      img: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555654788218&di=c252edda7bc994d2e5096a378ddf904b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201403%2F29%2F20140329150319_Lj3YQ.thumb.700_0.jpeg"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.error {
  background: #f1f1f1;
  overflow: hidden;
  height: 9.94rem;
  .show {
    background: #fff;
    width: 7.1rem;
    height: 7.5rem;
    border-radius: 0.1rem;
    margin: 0 auto;
    margin-top: 1.1rem;
    div:nth-of-type(1) {
      display: flex;

      align-items: center;
      img {
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
        background: url(../../../assets/img/null.png) no-repeat center 10px;
        background-size: 65px 72px;
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
        left: 65px;
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
    margin-bottom: 0.1rem;
    font-size: 0.24rem;
  }
}
</style>