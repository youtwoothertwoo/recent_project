<template>
  <div class="product-add">
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="200px">
      <!--店员修改-->
      <div class="common-form">会员编辑</div>
      <el-form-item label="昵称" prop="nickName">
        <el-input class="max-w460" v-model="form.nickName" placeholder="请输入昵称"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-row>
          <el-button icon="el-icon-picture-outline" @click="openUpload('avatarUrl')">选择图片</el-button>
          <div v-if="form.avatarUrl!=''" class="img">
            <img :src="form.avatarUrl" width="100" height="100" />
          </div>
        </el-row>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
          <el-radio :label="2">保密</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input class="max-w460" v-model="form.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>

      <el-form-item label="当前余额" >
          <el-input class="max-w460" v-model="form.balance" autocomplete="off" disabled="disabled"></el-input>
          <el-button type="primary" @click="addClick"> 充值</el-button>
      </el-form-item>
      <el-form-item label="等级" >
        <el-select v-model="form.grade_id" placeholder="-请选择等级-">
          <el-option v-for="(item,index) in gradeList" :key="index" :label="item.name" :value="item.grade_id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="上级推荐人ID" >
        <div style="display: flex; gap: 20px;">
          <div v-if="form.referee_id!=0" >
            {{ form.referee_id  }}
          </div>
          <el-button  @click="userClick()">选择用户</el-button>
        </div>
      </el-form-item>

      <el-form-item label="我的团队">
        <div style="display: flex;margin-bottom: 20px;font-size: 14px; gap: 20px;">
          <div>总人数：{{ all_num }}</div>
          <div>直推人数：{{ zhitui_num }}</div>
          <div>总业绩：{{ all_money }}</div>
          <div>月新增：{{ month_money }}</div>
          <div>日新增：{{ today_money }}</div>
        </div>

        <el-radio-group v-model="level" size="small" @change="changFunc">
        <el-radio-button label="1">一级</el-radio-button>
        <el-radio-button label="2">二级</el-radio-button>
        <el-radio-button label="3">三级</el-radio-button>
      </el-radio-group>
              <!--table-->
      <div class="mt16">
        <el-table
          size="small"
          :data="tableData"
          border
          style="width: 100%"
          @row-dblclick="handleRowDblClick"
        >
          <el-table-column prop="user_id" label="用户ID"></el-table-column>
          <el-table-column label="微信头像">
            <template slot-scope="scope">
              <img
                class="radius"
                v-img-url="scope.row.avatarUrl"
                width="30"
                height="30"
              />
            </template>
          </el-table-column>
          <el-table-column prop="nickName" label="	微信昵称"></el-table-column>
          <el-table-column prop="mobile" label="手机号"></el-table-column>
          <el-table-column
            prop="create_time"
            label="加入时间"
          ></el-table-column>
        </el-table>
      </div>

      <!--分页-->
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="curPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalDataNumber"
        ></el-pagination>
      </div>
      </el-form-item>

      <div class="common-button-wrapper">
        <el-button size="small" type="info" @click="cancelFunc">取消</el-button>
        <el-button size="small" type="primary" @click="onSubmit" :loading="loading">提交</el-button>
      </div>
    </el-form>
    <!--上传图片组件-->
    <Upload v-if="isupload" :isupload="isupload" :type="type" @returnImgs="returnImgsFunc">上传图片</Upload>

        <!--会员充值-->
        <Recharge v-if="open_add" :open_add="open_add" :form="userModel"
      @closeDialog="closeDialogFunc($event, 'add')"></Recharge>
      <GetUser :is_open="open_user" @close="closeDialogUserFunc($event, 'add')"></GetUser>
  </div>
</template>

<script>
  import UserApi from '@/api/user.js';
  import PlusApi from "@/api/plus.js";
  import Upload from '@/components/file/Upload';
  import GetUser from '@/components/user/GetUser.vue';
  import {
    formatModel
  } from '@/utils/base.js'
  import Recharge from './dialog/Recharge.vue';
  export default {
    components: {
      /*上传组件*/
      Upload,
      Recharge,
      GetUser
    },
    data() {
      return {
        form: {
          user_id: 0,
          nickName: '',
          avatarUrl: '',
          gender: '',
          mobile: '',
          balance:'',
          grade_id:'',
          referee_id:0
        },
        loading: false,
        /*是否打开添加弹窗*/
        open_add: false,
        /*当前编辑的对象*/
        userModel: {},
        gradeList:[],
        /*是否上传图片*/
        isupload: false,
        open_user: false,
        /*当前第几级*/
        level: "1",
        /*列表数据*/
        tableData: [],
        /*一页多少条*/
        pageSize: 20,
        /*一共多少条数据*/
        totalDataNumber: 0,
        /*当前是第几页*/
        curPage: 1,
        all_num: 0,
        zhitui_num: 0,
        all_money: 0,
        month_money: 0,
        today_money: 0,
      };
    },
    created() {
      this.form.user_id = this.$route.query.user_id;
    
      this.getParams()
    },

    watch: {
      '$route.query.user_id': function(n, o) {
        this.form.user_id = n;
       
        this.getParams()
      }
    },

    methods: {
      getParams() {
        let self = this;
        // 取到路由带过来的参数
        UserApi.getuser({
            user_id: self.form.user_id
          }, true)
          .then(data => {
            // 将数据放在当前组件的数据内
            self.form = formatModel(self.form, data.data.model);
            self.userModel =  data.data.model
            self.gradeList = data.data.grade

            self.getData();

          })
          .catch(error => {

          });

      },
      onSubmit() {
        let self = this;
        let form = self.form;
        self.$refs.form.validate((valid) => {
          if (valid) {
            self.loading = true;
            UserApi.edituser(form, true)
              .then(data => {
                self.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
                self.$router.push('/user/user/index');
              })
              .catch(error => {
                self.loading = false;
              });
          }
        });
      },
      /*上传*/
      openUpload(e) {
        this.type = e;
        this.isupload = true;
      },
      /*获取图片*/
      returnImgsFunc(e) {
        if (e != null && e.length > 0) {
          if (this.type == 'avatarUrl') {
            this.form.avatarUrl = e[0].file_path;
          }
        }
        this.isupload = false;
      },
      /*取消*/
      cancelFunc() {
        this.$router.back(-1);
      },
      /*充钱*/
        addClick() {
        this.open_add = true;
      },

            /*关闭弹窗*/
        closeDialogFunc(e, f) {
          this.open_add = e.openDialog;
          this.getParams()
      },

    /*切换等级*/
    changFunc(e) {
      this.getData();
    },

    /*选择第几页*/
    handleCurrentChange(val) {
      let self = this;
      self.curPage = val;
      self.loading = true;
      self.getData();
    },

    /*获取数据*/
    getData() {
      let self = this;
      let Params = {};
      Params.page = self.curPage;
      Params.list_rows = self.pageSize;
      Params.user_id = self.userModel.user_id;
      Params.level = self.level;
      PlusApi.getUserFans(Params, true)
        .then((data) => {
          console.log(data);
          self.loading = false;
          self.tableData = data.data.list[this.level];
          self.all_num = data.data.list.all_num
					self.zhitui_num = data.data.list.zhitui_num
					self.all_money = data.data.performance.all_money
					self.month_money = data.data.performance.month_money
					self.today_money = data.data.performance.today_money
        })
        .catch((error) => {});
    },

    /*每页多少条*/
    handleSizeChange(val) {
      this.curPage = 1;
      this.pageSize = val;
      this.getData();
    },
    handleRowDblClick(row){
        this.$router.push(`/user/user/edit?user_id=${row.user_id}`);
      },

      userClick() {
        this.open_user = true;
      },

            /*关闭获取用户弹窗*/
          closeDialogUserFunc(e) {
        if (e.type != 'error') {
          this.form.referee_id = e.params[0].user_id;
          // this.user_info = e.params[0];
          UserApi.fixRefer({referee_id: this.form.referee_id,user_id: this.form.user_id}).then(res =>{
            if(res.code == 1){
              this.$message({
                 type: 'success',
                  message: '修改成功'
            })
           
            }
          })
          
        }
        this.open_user = false;
   
      },

    }

  };
</script>

<style lang="scss" scoped>
  .basic-setting-content {}

  .product-add {
    padding-bottom: 50px;
  }
</style>
