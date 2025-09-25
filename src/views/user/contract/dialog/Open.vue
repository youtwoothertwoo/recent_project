<template>
  <!--
      	作者：luoyiming
      	时间：2020-06-01
      	描述：插件中心-分销-分销商审核
      -->
      <el-dialog title="合同审核" :visible.sync="dialogVisible" @close="dialogFormVisible" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form :model="form">
        <el-form-item label="是否开启门店" :label-width="formLabelWidth">
          <div>
            <el-radio v-model="form.is_store" label="1">开启</el-radio>
            <el-radio v-model="form.is_store" label="0">关闭</el-radio>
          </div>
        </el-form-item>
        <el-form-item label="是否开启补贴" :label-width="formLabelWidth">
          <div>
            <el-radio v-model="form.is_subsidy" label="1">开启</el-radio>
            <el-radio v-model="form.is_subsidy" label="0">关闭</el-radio>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible">取 消</el-button>
        <el-button type="primary" @click="editApplyStatus">确 定</el-button>
      </div>
    </el-dialog>


</template>

<script>
import PlusApi from '@/api/plus.js';
export default {
  data() {
    return {
      status: '',
      reject_reason: '',
      /*左边长度*/
      formLabelWidth: '120px',
      /*是否显示*/
      dialogVisible: false
    };
  },
  props: ['open_edit', 'form'],
  created() {
    this.dialogVisible = this.open_edit;
    this.status = this.form.apply_status.value;
    if (this.status == 30) {
      this.reject_reason = this.form.reject_reason;
    }
  },
  methods: {
    /*修改用户*/
    editApplyStatus() {
      let self = this;
      let params = this.form;
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
        this.$emit('closeDialog', {
          type: 'success',
          openDialog: false
        });
      } else {
        this.$emit('closeDialog', {
          type: 'error',
          openDialog: false
        });
      }
    }
  }
};
</script>

<style></style>
