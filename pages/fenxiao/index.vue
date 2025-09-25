<template>
	<view class="index">
		
		<view class="certification">
			<form @submit="formSubmit" @reset="formReset">
				<view class="certification_head">
					<view class="certification_head_body">
						<view class="certification_head_body_item">
							<view class="icon iconfont icon-qiye"></view>
							<input type="text" name="store_name" v-model="form.store_name" placeholder='请输入店名' />
						</view>
						<view class="certification_head_body_item">
							<view class="icon iconfont icon-ziyuan1"></view>
							<input type="text" name="name" v-model="form.name" placeholder='请输入姓名' />
						</view>
						<view class="certification_head_body_item">
							<view class="icon iconfont icon-phone"></view>
							<input type="text" name="mobile" v-model="form.mobile" placeholder='请输入手机号码' />
						</view>

						<view class="certification_head_body_item">
							<input class="ml20 f32 flex-1 p-30-0" type="text" value="" placeholder-class="grary9" placeholder="" v-model="selectCity"
							disabled="true" @click="showMulLinkageThreePicker" />
						</view>

						<view class="certification_head_body_item">
							<view class="icon iconfont icon-dizhi"></view>
							<input type="text" name="store_address" v-model="form.store_address" placeholder='请输入详细地址' />
						</view>

						<view class="certification_head_body_item">
							<text>营业时间：</text>
							<picker mode="time" :value="startTime" @change="onStartTimeChange">
							<view>{{ startTime || '00:00' }}</view>
							</picker>
							<text style="margin-right: 10rpx;"> - </text>
							<picker mode="time" :value="endTime" @change="onEndTimeChange">
							<view>{{ endTime ||  '00:00' }}</view>
							</picker>
						</view>

						<view class="certification_head_body_item">
							<input type="text" name="agent_region" v-model="form.agent_region" placeholder='代理区域' />
						</view>

		
					</view>
				</view>
				<view class="certification_body">
	
					<view class="login_index_updata_updata">
						<view class="login_index_updata_updata_item2" @click="openUpload('store_photos')">
							<view class="login_index_updata_updata_item_body">
								<view v-if="store_photos_preview.length" class="img thumbs">
									<image v-for="(url,idx) in store_photos_preview" :key="idx" :src="url" mode="aspectFill"></image>
								</view>
								<view v-else>点击上传店铺照片</view>
							</view>
						</view>
					</view>

					<view class="login_index_updata_updata">
						<view class="login_index_updata_updata_item2" @click="openUpload('business_license')">
							<view class="login_index_updata_updata_item_body">
								<view v-if="form.business_license" class="img single">
									<image :src="business_license_preview" mode="aspectFill"></image>
								</view>
								<view v-else>点击上传营业执照</view>
							</view>
						</view>
					</view>

					<view class="login_index_updata_updata">
						<view class="login_index_updata_updata_item2" @click="openUpload('id_card_front')">
							<view class="login_index_updata_updata_item_body">
								<view v-if="form.id_card_front" class="img single">
									<image :src="id_card_front_preview" mode="aspectFill"></image>
								</view>
								<view v-else>点击上传身份证正面</view>
							</view>
						</view>
						<view class="login_index_updata_updata_item2" style="margin-top: 20rpx;" @click="openUpload('id_card_back')">
							<view class="login_index_updata_updata_item_body">
								<view v-if="form.id_card_back" class="img single">
									<image :src="id_card_back_preview" mode="aspectFill"></image>
								</view>
								<view v-else>点击上传身份证背面</view>
							</view>
						</view>
					</view>
					
					<view class="login_index_updata_updata">
						<view style="margin-bottom: 10px; ">
							<button @click="downloadContract" type="primary" plain size="mini">下载合同模板</button>
						</view>
						<view class="login_index_updata_updata_item2" @click="openUpload('contract')">
							<view class="login_index_updata_updata_item_body">
								<view v-if="contract_preview.length" class="img thumbs">
									<image v-for="(url,idx) in contract_preview" :key="idx" :src="url" mode="aspectFill"></image>
								</view>
								<view v-else>点击上传合同</view>
							</view>
						</view>
					</view>
				</view>
				<view class="login_index_btn">
					<button form-type="submit" type="default">确定</button>
				</view>
				<Upload v-if="isupload" :num="uploadNum" @getImgs="getImgsFunc">上传图片</Upload>
			</form>
		</view>
		<mpvue-city-picker v-if="is_load" ref="mpvueCityPicker" :province="province" :city="city" :area="area" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import Upload from '@/components/upload/upload';
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
	export default {
		components: {
			/*编辑组件*/
			Upload,
			mpvueCityPicker
		},
		
		data() {
			return {
				form: {
					business_license: '',
					store_photos: [],
					store_address: '',
					province_id: '',
					city_id: '',
					region_id: '',
					id_card_front: '',
					id_card_back: '',
					agent_region: '',
					name: '',
					mobile: '',
					// longitude: '',
					// latitude: '',
				
					store_name: '',
					shop_hours: '',
					contract: []
				},
				/*省市区*/
				is_load: false,
				cityPickerValueDefault: [0, 0, 0],
				selectCity: '选择省,市,区',
				province: [],
				city: [],
				area: [],
				/*时间*/
				startTime: '',
      			endTime: '',
				isupload: false,
				uploadNum: 1,
				type: '',
				business_license_preview:'',
				id_card_front_preview: '',
				id_card_back_preview: '',
				store_photos_preview: [],
				contract_preview: [],
				contract_template: ''
			}
		},
		created() {
			this.getData()
			this.getContract()
		},
		methods: {
			// 获取省市区
			getData(){
				let self = this;
				self._post('settings/getRegion', {}, function(res) {
					self.province = res.data.regionData[0];
					self.city = res.data.regionData[1];
					self.area = res.data.regionData[2];
					self.is_load = true;
				});
			},
			/*获取数据*/
			getContract() {
				let self = this;
				
				self._get('user.index/detail', {
					url: self.url
				}, function(res) {
					self.contract_template = res.data.setting.contract
				});
			},
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show();
			},
			/*确定选择的省市区*/
			onConfirm(e) {

				let self = this

				self._post('plus.agentnew.apply/check',{
					province_id:e.cityCode[0],
					city_id:e.cityCode[1],
					region_id:e.cityCode[2]
				},res => {
					if(res.code == 1){
						self.selectCity = e.label;
						self.form.province_id = e.cityCode[0];
						self.form.city_id = e.cityCode[1];
						self.form.region_id = e.cityCode[2];
					}
				})
				
			},

			onStartTimeChange(e) {
			this.startTime = e.detail.value;
			},
			onEndTimeChange(e) {
				this.endTime = e.detail.value;
			},

			downloadContract() {
				if(!this.contract_template){
					uni.showToast({
						title: '暂无合同模板',
						icon: 'none'
					})
					return;
				}
				// #ifdef MP-WEIXIN
			
				uni.downloadFile({
					url: this.contract_template,
					success: (res) => {
					if (res.statusCode === 200) {
						uni.openDocument({
						filePath: res.tempFilePath,
						showMenu: true,
						fileType: 'pdf', // 或 pdf、xls 等
						success: () => console.log('打开文档成功'),
						fail: (err) => console.error('打开文档失败', err)
						});
					} else {
						uni.showToast({ title: '下载失败', icon: 'none' });
					}
					},
					fail: (err) => {
					console.error('下载失败', err);
					uni.showToast({ title: '下载失败', icon: 'none' });
					}
				});
      			// #endif
			},
			/*提交*/
			formSubmit: function(e) {
				let self = this;
				self.form.shop_hours =  `${self.startTime}-${self.endTime}`
				// 直接使用当前表单数据，无必填校验
				let formdata = Object.assign({}, self.form);
				uni.showLoading({
					title: '正在提交',
					mask: true
				});
				self._post('plus.agentnew.apply/submit', formdata, function(res) {
		
					self.showSuccess(res.msg, function() {
						self.gotoPage('/pages/shop/application_status')
					}, null, function(){
						uni.hideLoading();
					});
				});
			},
			/*上传*/
			openUpload(e) {
				this.type = e;
				this.uploadNum = e === 'store_photos' || e === 'contract' ? 9 : 1;
				this.isupload = true;
			},

			/*获取图片*/
			getImgsFunc(e) {
				if (e != null && e.length > 0) {
					if (this.type == 'store_photos') {
						this.form.store_photos = e.map(i => i.file_id);
						this.store_photos_preview = e.map(i => i.file_path);
				
					} else if (this.type == 'id_card_front') {
						this.form.id_card_front = e[0].file_id;
						this.id_card_front_preview = e[0].file_path;
					} else if (this.type == 'id_card_back') {
						this.form.id_card_back = e[0].file_id;
						this.id_card_back_preview = e[0].file_path;
					} else if (this.type == 'contract') {
						this.form.contract = e.map(i => i.file_id);
						this.contract_preview = e.map(i => i.file_path);
					}else if (this.type == 'business_license'){
						this.form.business_license = e[0].file_id;
						this.business_license_preview = e[0].file_path;
					}
				}
				this.isupload = false;
			}
		}
	}
</script>

<style>
	page {
		background: #FF3D19;
	}

	.iconfont {
		font-size: 48rpx;
	}

	.index {
		width: 750rpx;
	}

	.certification {
		width: 675rpx;
		margin: 0 auto;
		border-radius: 30rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: white;
		position: absolute;
		top: 100rpx;
		left: 37.5rpx;
		margin-bottom: 50rpx;
	}

	.certification_head {
		width: 100%;
	}

	.certification_head_body {
		width: 100%;
	}

	.certification_head_body_item {
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		font-size: 32rpx !important;
	}

	.certification_head_body_item view {
		margin-right: 10rpx;
	}

	.certification_head_body_item button {
		width: 172rpx;
		height: 56rpx;
		line-height: 56rpx;
		border: 1rpx #E2231A solid;
		border-radius: 40rpx;
		font-size: 26rpx;
		color: #E2231A;
		padding: 0 20rpx;
	}

	.certification_body {}

	.login_index_updata_name {
		margin-top: 28rpx;
		margin-left: 48rpx;
	}

	.login_index_updata_updata {
		width: 90%;
		height: auto;
		margin: 0 auto;
		margin-top: 35rpx;
	}

	.login_index_updata_updata_item2 {
		width: 100%;
		min-height: 200rpx;
		border: 1rpx #9a9a9a dotted;
		border-radius: 15rpx;
		text-align: center;
	}

	.login_index_updata_updata_item_body {
		width: 100%;
		height: auto;
		text-align: center;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 20rpx 0;
	}

	/* thumbnails in multi-image area */
	.img.thumbs image {
		width: 200rpx;
		height: 200rpx;
		margin: 10rpx;
		border-radius: 12rpx;
	}

	/* single preview (ID cards) */
	.img.single image {
		width: 554rpx;
		height: 360rpx;
		position: relative;
		border-radius: 12rpx;
	}

	.login_index_btn {
		position: relative;
		top: 30rpx;
		margin-bottom: 30rpx;
	}

	.login_index_btn button {
		width: 90%;
		height: 80rpx;
		background-color: #F36A24;
		border-radius: 50rpx;
		line-height: 80rpx;
		margin: 0 auto;
		color: white;
		font-size: 30rpx;
	}

	.certification_rule {
		position: relative;
		left: 500rpx;
		top: -10rpx;
	}

	.certification_rule text {
		color: #8a8a8a;
	}

	.certification_rule image {
		width: 24rpx;
		height: 24rpx;
		display: inline-block;
	}

	.classify_text {
		color: #808080;
		margin-left: 40rpx;
	}

	.select input {
		padding-left: 60rpx;
		color: #808080;
	}
	.make-item{
		padding-left: 60rpx;
	}
</style>
