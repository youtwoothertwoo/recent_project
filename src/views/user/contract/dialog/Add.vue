<template>
  <!--
      	作者：luoyiming
      	时间：2020-06-01
      	描述：插件中心-分销-分销商审核
      -->
  <el-dialog
    title="合同详情"
    :visible.sync="dialogVisible"
    @close="dialogFormVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="80%"
  >
    <el-form ref="form" :model="dataList" label-width="100px">
      <el-form-item label="姓名：">
        <el-input v-model="dataList.real_name"></el-input>
      </el-form-item>
      <el-form-item label="手机：">
        <el-input v-model="dataList.mobile"></el-input>
      </el-form-item>
      <el-form-item label="详细地址：">
        <el-input v-model="dataList.store_address"></el-input>
      </el-form-item>


      <el-form-item label="店铺照片：">
        <template  v-if="dataList.store_photos_image">
          <el-image
            v-for="value in dataList.store_photos_image"
            :key="value.file_path"
            style="width: 50px; height: 50px; cursor: pointer"
            :src="value.file_path"
            :preview-src-list="[value.file_path]"
          />
        </template>
        <i
          v-else
          class="el-icon-plus"
          style="
            width: 50px;
            height: 50px;
            border: 1px dashed #d9d9d9;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          "

        ></i>
      </el-form-item>

      <el-form-item label="营业执照">
        <el-image
          v-if="dataList.business_license_image"
          style="width: 50px; height: 50px; cursor: pointer"
          :src="dataList.business_license_image[0].file_path"
          :preview-src-list="[dataList.business_license_image[0].file_path]"
         
        ></el-image>
        <i
          v-else
          class="el-icon-plus"
          style="
            width: 50px;
            height: 50px;
            border: 1px dashed #d9d9d9;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          "
        ></i>
      </el-form-item>

      <el-form-item label="合同详情：">
        <template  v-if="dataList.contract_image">
          <el-image
            v-for="value in dataList.contract_image"
            :key="value.file_path"
            style="width: 50px; height: 50px; cursor: pointer"
            :src="value.file_path"
            :preview-src-list="[value.file_path]"
          />
        </template>
        <i
          v-else
          class="el-icon-plus"
          style="
            width: 50px;
            height: 50px;
            border: 1px dashed #d9d9d9;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          "

        ></i>
      </el-form-item>

      <el-form-item label="身份证正面：">
        <el-image
          v-if="dataList.id_card_front_image"
          style="width: 50px; height: 50px; cursor: pointer"
          :src="dataList.id_card_front_image[0].file_path"
          :preview-src-list="[dataList.id_card_front_image[0].file_path]"
         
        ></el-image>
        <i
          v-else
          class="el-icon-plus"
          style="
            width: 50px;
            height: 50px;
            border: 1px dashed #d9d9d9;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          "
        ></i>
      </el-form-item>
      <el-form-item label="身份证背面：">
        <el-image
          v-if="dataList.id_card_back_image"
          style="width: 50px; height: 50px; cursor: pointer"
          :src="dataList.id_card_back_image[0].file_path"
         :preview-src-list="[dataList.id_card_back_image[0].file_path]"
        ></el-image>
        <i
          v-else
          class="el-icon-plus"
          style="
            width: 50px;
            height: 50px;
            border: 1px dashed #d9d9d9;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
          "
        ></i>
      </el-form-item>


      <el-form-item label="代理区域：">
        <el-input v-model="dataList.agent_region"></el-input>
      </el-form-item>
      <el-form-item label="店名：">
        <el-input v-model="dataList.store_name"></el-input>
      </el-form-item>
      <el-form-item label="营业时间：">
        <el-input v-model="dataList.shop_hours"></el-input>
      </el-form-item>
      <el-form-item label="是否开启门店">
        <el-radio-group v-model="dataList.is_store">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否开启补贴">
        <el-radio-group v-model="dataList.is_subsidy">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible">取 消</el-button>
      <el-button type="primary" @click="editApplyStatus">确 定</el-button>
    </div>
    <!--上传图片组件-->
    <Upload
      v-if="isupload"
      :isupload="isupload"
      :type="type"
      @returnImgs="returnImgsFunc"
      >上传图片</Upload
    >
  </el-dialog>
</template>

<script>
import PlusApi from "@/api/plus.js";
import Upload from "@/components/file/Upload";
export default {
  components: {
    Upload: Upload,
  },
  data() {
    return {
      status: "",
      reject_reason: "",
      /*左边长度*/
      formLabelWidth: "120px",
      /*是否显示*/
      dialogVisible: false,
      dataList: {},
      /*是否上传图片*/
      isupload: false,
    };
  },
  props: ["open_edit", "form"],
  created() {
    this.dialogVisible = this.open_edit;
  },
  mounted() {
    PlusApi.editContract({ apply_id: this.form.apply_id }, true).then((res) => {
     
      this.dataList = res.data.model;
    });
  },
  methods: {
    /*修改用户*/
    editApplyStatus() {
      let self = this;
      let params = this.dataList;

      PlusApi.editContract1(params, true)
        .then(data => {
          self.$message({
            message: '恭喜你，修改成功',
            type: 'success'
          });
          self.dialogFormVisible(true);
        })
        .catch(error => {});
    },

    /*关闭弹窗*/
    dialogFormVisible(e) {
      if (e) {
        this.$emit("closeDialog", {
          type: "success",
          openDialog: false,
        });
      } else {
        this.$emit("closeDialog", {
          type: "error",
          openDialog: false,
        });
      }
    },
    /*上传*/
    openUpload(e) {
      this.type = e;
      this.isupload = true;
    },
    /*获取图片*/
    returnImgsFunc(e) {
      console.log(e);
      if (e != null) {
        if (this.type == 1) {
          this.form.store_photos = e[0].file_path;
        }
        if (this.type == 2) {
          this.form.id_card_front = e[0].file_path;
        }
        if (this.type == 3) {
          this.form.id_card_back = e[0].file_path;
        }
        if (this.type == 4) {
          this.form.file_id = e[0].file_path;
        }
      }
      this.isupload = false;
    },
  },
};
</script>

<style></style>
