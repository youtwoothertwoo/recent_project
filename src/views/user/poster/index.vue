<template>
  <!--
      	作者：luoyiming
      	时间：2020-06-01
      	描述：插件中心-分销-分销海报
      -->
  <div class="">
    <!--基本信息-->
    <div class="common-form">分销海报设置</div>
    <div style="margin: 20px 30px;">
      <el-radio-group v-model="radio">
      <el-radio :label="1">样式1</el-radio>
      <el-radio :label="2">样式2</el-radio>
      <el-radio :label="3">样式3</el-radio>
    </el-radio-group>
    </div>
    <div class="poster-box d-s-s" v-loading="loading" v-show="radio===1">
      <div class="left-box" >
        <div v-if="qrcode1.backdrop" class="img">
          <img v-img-url="qrcode1.backdrop.src" />
        </div>
        <div class="userinfo">
          <div
            class="photo pa"
            v-drag="{ type: 'photo', obj: curObj }"
            :class="{ radius: qrcode1.avatar.style == 'circle' }"
            :style="
              'width:' +
              qrcode1.avatar.width +
              'px;height:' +
              qrcode1.avatar.width +
              'px;top:' +
              qrcode1.avatar.top +
              'px;left:' +
              qrcode1.avatar.left +
              'px;'
            "
          >
            <span class="icon iconfont icon-yonghu"></span>
          </div>
          <div
            class="name pa"
            v-drag="{ type: 'name', obj: curObj }"
            :style="
              'font-size:' +
              qrcode1.nickName.fontSize +
              'px;color:' +
              qrcode1.nickName.color +
              ';top:' +
              qrcode1.nickName.top +
              'px;left:' +
              qrcode1.nickName.left +
              'px;'
            "
          >
            昵称
          </div>
          <div
            class="code pa"
            v-drag="{ type: 'code', obj: curObj }"
            :class="{ radius: qrcode1.qrcode.style == 'circle' }"
            :style="
              'width:' +
              qrcode1.qrcode.width +
              'px;height:' +
              qrcode1.qrcode.width +
              'px;top:' +
              qrcode1.qrcode.top +
              'px;left:' +
              qrcode1.qrcode.left +
              'px;'
            "
          >
        
            <img src="@/assets/img/qrcode.png" alt="" />
          </div>
        </div>
      </div>

      <div class="right-box flex-1">
        <el-form size="small" ref="qrcode1" :model="qrcode1" label-width="200px">
          <el-form-item label="海报背景图">
            <el-button type="primary" @click="openUpload(1)"
              >上传图片</el-button
            >
            <div class="tips">尺寸：宽750像素 高大于(等于)1200像素</div>
          </el-form-item>
          <el-form-item
            label="头像宽度"
            prop="avatar.width"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode1.avatar.width"
              min="30"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像样式">
            <el-radio v-model="qrcode1.avatar.style" label="square"
              >正方形</el-radio
            >
            <el-radio v-model="qrcode1.avatar.style" label="circle">圆形</el-radio>
          </el-form-item>
          <el-form-item
            label="昵称字体大小"
            prop="nickName.fontSize"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode1.nickName.fontSize"
              min="12"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="昵称字体颜色">
            <div class="d-s-c">
              <el-color-picker v-model="qrcode1.nickName.color"></el-color-picker>
              <el-button
                type="button"
                style="margin-left: 10px"
                @click.stop="
                  $parent.onEditorResetColor(
                    curItem.style,
                    'btnColor',
                    '#ffffff'
                  )
                "
                >重置</el-button
              >
            </div>
          </el-form-item>
          <el-form-item
            label="小程序码宽度 "
            prop="qrcode.width"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode1.qrcode.width"
              min="50"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="小程序码样式 ">
            <el-radio v-model="qrcode1.qrcode.style" label="square"
              >正方形</el-radio
            >
            <el-radio v-model="qrcode1.qrcode.style" label="circle">圆形</el-radio>
          </el-form-item>
          <!--提交-->
          <div class="common-button-wrapper">
            <el-button type="primary" @click="onSubmit('qrcode1')" :loading="loading"
              >提交</el-button
            >
          </div>
        </el-form>
      </div>
    </div>

    <div class="poster-box d-s-s" v-loading="loading" v-show="radio===2">
      <div class="left-box" >
        <div v-if="qrcode2.backdrop" class="img">
          <img v-img-url="qrcode2.backdrop.src" />
        </div>
        <div class="userinfo">
          <div
            class="photo pa"
            v-drag="{ type: 'photo', obj: curObj }"
            :class="{ radius: qrcode2.avatar.style == 'circle' }"
            :style="
              'width:' +
              qrcode2.avatar.width +
              'px;height:' +
              qrcode2.avatar.width +
              'px;top:' +
              qrcode2.avatar.top +
              'px;left:' +
              qrcode2.avatar.left +
              'px;'
            "
          >
            <span class="icon iconfont icon-yonghu"></span>
          </div>
          <div
            class="name pa"
            v-drag="{ type: 'name', obj: curObj }"
            :style="
              'font-size:' +
              qrcode2.nickName.fontSize +
              'px;color:' +
              qrcode2.nickName.color +
              ';top:' +
              qrcode2.nickName.top +
              'px;left:' +
              qrcode2.nickName.left +
              'px;'
            "
          >
            昵称
          </div>
          <div
            class="code pa"
            v-drag="{ type: 'code', obj: curObj }"
            :class="{ radius: qrcode2.qrcode.style == 'circle' }"
            :style="
              'width:' +
              qrcode2.qrcode.width +
              'px;height:' +
              qrcode2.qrcode.width +
              'px;top:' +
              qrcode2.qrcode.top +
              'px;left:' +
              qrcode2.qrcode.left +
              'px;'
            "
          >
          <img src="@/assets/img/qrcode.png" alt="" />
          </div>
        </div>
      </div>

      <div class="right-box flex-1">
        <el-form size="small" ref="qrcode2" :model="qrcode2" label-width="200px">
          <el-form-item label="海报背景图">
            <el-button type="primary" @click="openUpload(2)"
              >上传图片</el-button
            >
            <div class="tips">尺寸：宽750像素 高大于(等于)1200像素</div>
          </el-form-item>
          <el-form-item
            label="头像宽度"
            prop="avatar.width"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode2.avatar.width"
              min="30"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像样式">
            <el-radio v-model="qrcode2.avatar.style" label="square"
              >正方形</el-radio
            >
            <el-radio v-model="qrcode2.avatar.style" label="circle">圆形</el-radio>
          </el-form-item>
          <el-form-item
            label="昵称字体大小"
            prop="nickName.fontSize"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode2.nickName.fontSize"
              min="12"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="昵称字体颜色">
            <div class="d-s-c">
              <el-color-picker v-model="qrcode2.nickName.color"></el-color-picker>
              <el-button
                type="button"
                style="margin-left: 10px"
                @click.stop="
                  $parent.onEditorResetColor(
                    curItem.style,
                    'btnColor',
                    '#ffffff'
                  )
                "
                >重置</el-button
              >
            </div>
          </el-form-item>
          <el-form-item
            label="小程序码宽度 "
            prop="qrcode.width"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode2.qrcode.width"
              min="50"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="小程序码样式 ">
            <el-radio v-model="qrcode2.qrcode.style" label="square"
              >正方形</el-radio
            >
            <el-radio v-model="qrcode2.qrcode.style" label="circle">圆形</el-radio>
          </el-form-item>
          <!--提交-->
          <div class="common-button-wrapper">
            <el-button type="primary" @click="onSubmit('qrcode2')" :loading="loading"
              >提交</el-button
            >
          </div>
        </el-form>
      </div>
    </div>

    <div class="poster-box d-s-s" v-loading="loading" v-show="radio===3">
      <div class="left-box" >
        <div v-if="qrcode3.backdrop" class="img">
          <img v-img-url="qrcode3.backdrop.src" />
        </div>
        <div class="userinfo">
          <div
            class="photo pa"
            v-drag="{ type: 'photo', obj: curObj }"
            :class="{ radius: qrcode3.avatar.style == 'circle' }"
            :style="
              'width:' +
              qrcode3.avatar.width +
              'px;height:' +
              qrcode3.avatar.width +
              'px;top:' +
              qrcode3.avatar.top +
              'px;left:' +
              qrcode3.avatar.left +
              'px;'
            "
          >
            <span class="icon iconfont icon-yonghu"></span>
          </div>
          <div
            class="name pa"
            v-drag="{ type: 'name', obj: curObj }"
            :style="
              'font-size:' +
              qrcode3.nickName.fontSize +
              'px;color:' +
              qrcode3.nickName.color +
              ';top:' +
              qrcode3.nickName.top +
              'px;left:' +
              qrcode3.nickName.left +
              'px;'
            "
          >
            昵称
          </div>
          <div
            class="code pa"
            v-drag="{ type: 'code', obj: curObj }"
            :class="{ radius: qrcode1.qrcode.style == 'circle' }"
            :style="
              'width:' +
              qrcode3.qrcode.width +
              'px;height:' +
              qrcode3.qrcode.width +
              'px;top:' +
              qrcode3.qrcode.top +
              'px;left:' +
              qrcode3.qrcode.left +
              'px;'
            "
          >
          <img src="@/assets/img/qrcode.png" alt="" />
          </div>
        </div>
      </div>

      <div class="right-box flex-1">
        <el-form size="small" ref="qrcode3" :model="qrcode3" label-width="200px">
          <el-form-item label="海报背景图">
            <el-button type="primary" @click="openUpload(3)"
              >上传图片</el-button
            >
            <div class="tips">尺寸：宽750像素 高大于(等于)1200像素</div>
          </el-form-item>
          <el-form-item
            label="头像宽度"
            prop="avatar.width"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode3.avatar.width"
              min="30"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像样式">
            <el-radio v-model="qrcode3.avatar.style" label="square"
              >正方形</el-radio
            >
            <el-radio v-model="qrcode3.avatar.style" label="circle">圆形</el-radio>
          </el-form-item>
          <el-form-item
            label="昵称字体大小"
            prop="nickName.fontSize"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode3.nickName.fontSize"
              min="12"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="昵称字体颜色">
            <div class="d-s-c">
              <el-color-picker v-model="qrcode3.nickName.color"></el-color-picker>
              <el-button
                type="button"
                style="margin-left: 10px"
                @click.stop="
                  $parent.onEditorResetColor(
                    curItem.style,
                    'btnColor',
                    '#ffffff'
                  )
                "
                >重置</el-button
              >
            </div>
          </el-form-item>
          <el-form-item
            label="小程序码宽度 "
            prop="qrcode.width"
            :rules="[{ required: true, message: ' ' }]"
          >
            <el-input
              v-model="qrcode3.qrcode.width"
              min="50"
              type="number"
              class="max-w460"
            ></el-input>
          </el-form-item>
          <el-form-item label="小程序码样式 ">
            <el-radio v-model="qrcode3.qrcode.style" label="square"
              >正方形</el-radio
            >
            <el-radio v-model="qrcode3.qrcode.style" label="circle">圆形</el-radio>
          </el-form-item>
          <!--提交-->
          <div class="common-button-wrapper">
            <el-button type="primary" @click="onSubmit('qrcode3')" :loading="loading"
              >提交</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
    <!--上传图片组件-->
    <Upload
      v-if="isupload"
      :isupload="isupload"
      :type="type"
      @returnImgs="returnImgsFunc"
      >上传图片</Upload
    >
  </div>
</template>

<script>
import Upload from "@/components/file/Upload";
import PlusApi from "@/api/plus.js";
export default {
  components: {
    Upload: Upload,
  },
  data() {
    return {
      qrcode1: {
        nickName: {
          fontSize: 20,
          color: "",
          left: 0,
          top: 0,
        },
        avatar: {
          width: 30,
          style: "square",
          left: 0,
          top: 0,
        },
        qrcode: {
          width: 50,
          style: "square",
          left: 0,
          top: 0,
        },
        backdrop: {
          src: "",
        },
      },
      qrcode2: {
        nickName: {
          fontSize: 20,
          color: "",
          left: 0,
          top: 0,
        },
        avatar: {
          width: 30,
          style: "square",
          left: 0,
          top: 0,
        },
        qrcode: {
          width: 50,
          style: "square",
          left: 0,
          top: 0,
        },
        backdrop: {
          src: "",
        },
      },
      qrcode3: {
        nickName: {
          fontSize: 20,
          color: "",
          left: 0,
          top: 0,
        },
        avatar: {
          width: 30,
          style: "square",
          left: 0,
          top: 0,
        },
        qrcode: {
          width: 50,
          style: "square",
          left: 0,
          top: 0,
        },
        backdrop: {
          src: "",
        },
      },
      /**/
      loading: true,
      /*是否上传图片*/
      isupload: false,
      /*当前对象*/
      curObj: this,
      radio: 1,
    };
  },
  created() {
    /*获取数据*/
    this.getData();
  },
  directives: {
    /*拖动指令*/
    drag: {
      inserted: function (el, binding) {
        let self = this;
        el.onmousedown = function (event) {
          event = event || window.event;
          let diffX = event.clientX - el.offsetLeft;
          let diffY = event.clientY - el.offsetTop;

          /*鼠标移动*/
          document.onmousemove = function (event) {
            event = event || window.event;
            let moveX = event.clientX - diffX;
            let moveY = event.clientY - diffY;
            binding.value.obj.dragDiv(moveX, moveY, binding.value.type);
          };

          /*鼠标弹起*/
          document.onmouseup = function (event) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      },
    },
  },
  methods: {
    /*拖动赋值*/
    dragDiv(x, y, type) {
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      let qr = "qrcode" + this.radio;
      if (type == "photo") {
        this[qr].avatar.left = x;
        this[qr].avatar.top = y;
      } else if (type == "code") {
        this[qr].qrcode.left = x;
        this[qr].qrcode.top = y;
      } else if (type == "name") {
        this[qr].nickName.left = x;
        this[qr].nickName.top = y;
      }
    },

    /*上传*/
    openUpload(e) {
      this.type = e;
      this.isupload = true;
    },

    /*获取图片*/
    returnImgsFunc(e) {
    console.log(this.type,e)
      if (e != null) {
        if (this.type == 1) {
          this.qrcode1.backdrop.src = e[0].file_path;
        }
        if (this.type == 2) {
          this.qrcode2.backdrop.src = e[0].file_path;
        }
        if (this.type == 3) {
          this.qrcode3.backdrop.src = e[0].file_path;
        }
      }
      this.isupload = false;
    },

    /*获取数据*/
    getData() {
      let self = this;
      PlusApi.GetPoster({}, true)
        .then((data) => {
          self.qrcode1 = data.data.data.qrcode1;
          self.qrcode2 = data.data.data.qrcode2;
          self.qrcode3 = data.data.data.qrcode3;
          self.loading = false;
        })
        .catch((error) => {});
    },

    //提交表单
    onSubmit(val) {
      let self = this;
      let form = self[val];
      form.option=val
      self.$refs[val].validate((valid) => {
        if (valid) {
          self.loading = true;
          PlusApi.SavePoster(
            {
              form,
            },
            true
          )
            .then((data) => {
              self.loading = false;
              self.$message({
                message: "恭喜你，保存成功",
                type: "success",
              });
              self.getData();
            })
            .catch((error) => {
              self.loading = false;
            });
        }
      });
    },
  },
};
</script>

<style>
.poster-box .left-box {
  position: relative;
  width: 375px;
  min-height: 640px;
  overflow: hidden;
  margin: 0 30px;
  border: 1px solid #cccccc;
  border-radius: 18px;
}
.poster-box .left-box .userinfo {
  position: absolute;
  top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.poster-box .left-box .userinfo .photo {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
}
.poster-box .left-box .userinfo .photo .svg-icon {
  width: 80%;
  height: 80%;
  font-size: 60px;
  color: #3a8ee6;
}
.poster-box .left-box .userinfo .photo img {
  width: 80%;
  height: 80%;
}
.poster-box .left-box img {
  width: 100%;
}
.poster-box .left-box .userinfo .name {
  min-height: 30px;
  line-height: 100%;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.poster-box .left-box .userinfo .code {
  cursor: pointer;
  overflow: hidden;
}
.poster-box .left-box .userinfo .code img {
  width: 100%;
  height: 100%;
}
</style>
