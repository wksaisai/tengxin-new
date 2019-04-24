<template>
  <div class="clearfix">
    <a-upload
      action="http://192.168.8.217:8058/dcc-oms/work/workwork/save/?token=d06ff1f0a91450870175a8c3c5a8ed5a"
      listType="picture-card"
      name="files"
      :data="datas"
      :fileList="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 4">
        <a-icon type="plus"/>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage">
    </a-modal>
  </div>
</template>
<script>
import request from "../../utils/http.js";
import "@/utils/Date.js";
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      datas: {
        faultTypeId: "1",
        description: "asdsdasd",
        serveTime: "2019-04-02 08:12:22",
        address: "123231"
      },
      fileList: [
        {
          uid: "-1",
          name: "xxx.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
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
  //       address: "123123",
  //       avatar: "3232323",
  //       createTime: new Date("2019-04-23T00:31:13.311Z").Format(
  //         "yyyy-MM-dd hh:mm:ss"
  //       )
  //     }
  //   }).then(({ data }) => {
  //     console.log(data);
  //   });
  // },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    }
  }
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>