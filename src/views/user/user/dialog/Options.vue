<template>
  <el-dialog
    title="快捷操作"
    :visible.sync="dialogVisible"
    width="400px"
    :before-close="handleClose"
    center
    append-to-body
  >
    <div class="options-buttons">
      <el-button @click="handleAction('recharge')" type="primary" size="small" v-auth="'/user/user/recharge'">充值</el-button>
      <el-button @click="handleAction('edit')" type="primary" size="small" v-auth="'/user/user/edit'">编辑</el-button>
      <el-button @click="handleAction('grade')" type="primary" size="small" v-auth="'/user/user/grade'">等级</el-button>
      <el-button @click="handleAction('tag')" type="primary" size="small" v-auth="'/user/user/delete'">标签</el-button>
      <el-button @click="handleAction('subUser')" type="primary" size="small">下级用户</el-button>
      <el-button @click="handleAction('delete')" type="danger" size="small" v-auth="'/user/user/delete'">删除</el-button>
    </div>
  
  </el-dialog>
</template>

<script>
export default {
  props: {
    open_options: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    open_options: {
      handler(val) {
        this.dialogVisible = val;
      },
      immediate: true
    }
  },
  methods: {
    handleAction(action) {
      this.$emit('close', { type: 'action', action: action });
    },
    handleClose() {
      this.$emit('close', { type: 'cancel' });
    }
  }
};
</script>

<style scoped>
.options-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
