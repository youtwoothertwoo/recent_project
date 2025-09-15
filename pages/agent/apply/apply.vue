<template>
	<view class="apply-agent">
		<view class="banner d-c-c d-c" v-if="top_background!=''">
			<image :src="top_background" mode="aspectFill"></image>
		</view>
		<!--申请成功-->
		<template v-if="!is_applying ">
			<view class="form-wrap p30 f30">
				<view class="p30 d-c-c gray3 f36 fb">
					{{words.apply.words.title.value || ''}}
				</view>
				<form @submit="formSubmit" @reset="formReset">
					<view class="form-item border-b">
						<view class="field-name">邀请人</view>
						{{referee_name || ''}}
					</view>
					<view style="display: grid;height: 180rpx;" class="form-item border-b">
						<view class="field-name">会员等级</view>
						<radio-group style="display: flex;gap: 20rpx;margin-top: 20rpx;" @change="radioChange">
							<label style="display: flex;align-items: center;" v-for="(item, index) in items" :key="item.value">
								<view>
									<radio :value="item.value" :checked="item.value == current" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="form-item border-b">
						<view class="field-name">姓名</view>
						<input class="flex-1 ml20" name="name" type="text" value="" placeholder-class="grary"
							placeholder="请输入姓名" />
					</view>
					<view class="form-item border-b">
						<view class="field-name">手机号</view>
						<input class="flex-1 ml20" name="mobile" type="number" value="" placeholder-class="grary"
							placeholder="请输入手机" />
					</view>
					<view class="" v-if="current=='1'||current=='2'">
						<view class="form-item border-b">
							<view class="field-name">门店位置</view>
							<input class="flex-1 ml20" name="business_license" type="text" value="" placeholder-class="grary" v-model="selectStore"
								placeholder="请选择门店位置" @click="handleLocation"/>
						</view>
						<view class="form-item border-b">
							<view class="field-name">所在地区</view>
							<input class="flex-1 ml20" name="business_license" type="text" value="" placeholder-class="grary" v-model="selectCity"
								placeholder="请选择省市区" @click="showMulLinkageThreePicker"/>
						</view>
						<view class="form-item border-b">
							<view class="field-name">详细地址</view>
							<input class="flex-1 ml20" name="store_address" type="text" value="" placeholder-class="grary"
								placeholder="请输入详细地址" />
						</view>
						<view class="form-item border-b">
							<view class="field-name">执照编号</view>
							<input class="flex-1 ml20" name="business_license" type="text" value="" placeholder-class="grary"
								placeholder="请输入执照编号" />
						</view>
						<view style="height: 160rpx;" class="form-item border-b">
							<view class="field-name">店铺照片</view>
							<view class="image-list">
								<view class="upload-item" v-for="(item, index) in imageList" :key="index">
									<image :src="item" mode="aspectFill" class="preview-image" @click="previewImage(index)" />
									<view class="delete-btn" @click="deleteImage(index)">×</view>
								</view>
								<view class="upload-item upload-btn" @click="chooseImage">
									<text class="iconfont icon-add">+</text>
								</view>
							</view>
						</view>
						<view style="height: 160rpx;" class="form-item border-b">
							<view class="field-name">身份证正面</view>
							<view class="image-list">
								<view class="upload-item" v-if="id_card_front.length!==0">
									<image :src="id_card_front[0]" mode="aspectFill" class="preview-image" @click="previewImage('id_card_front')" />
									<view class="delete-btn" @click="deleteImage('id_card_front')">×</view>
								</view>
								<view v-else class="upload-item upload-btn" @click="chooseImage('id_card_front')">
									<text class="iconfont icon-add">+</text>
								</view>
							</view>
						</view>
						<view style="height: 160rpx;" class="form-item border-b">
							<view class="field-name">身份证反面</view>
							<view class="image-list">
								<view class="upload-item" v-if="id_card_back.length!==0">
									<image :src="id_card_back[0]" mode="aspectFill" class="preview-image" @click="previewImage('id_card_back')" />
									<view class="delete-btn" @click="deleteImage('id_card_back')">×</view>
								</view>
								<view v-else class="upload-item upload-btn" @click="chooseImage('id_card_back')">
									<text class="iconfont icon-add">+</text>
								</view>
							</view>
						</view>
						<view style="height: 160rpx;" class="form-item border-b">
							<view class="field-name">门店logo</view>
							<view class="image-list">
								<view class="upload-item" v-if="file_id.length!==0">
									<image :src="file_id[0]" mode="aspectFill" class="preview-image" @click="previewImage('file_id')" />
									<view class="delete-btn" @click="deleteImage('file_id')">×</view>
								</view>
								<view v-else class="upload-item upload-btn" @click="chooseImage('file_id')">
									<text class="iconfont icon-add">+</text>
								</view>
							</view>
						</view>
						<view class="form-item border-b">
							<view class="field-name">合同内容</view>
							<input class="flex-1 ml20" name="contract_content" type="text" value="" placeholder-class="grary"
								placeholder="请输入合同内容" />
						</view>
						<view class="form-item border-b">
							<view class="field-name">签名</view>
							<input class="flex-1 ml20" name="user_signature" type="text" value="" placeholder-class="grary"
								placeholder="请输入详细地址" />
						</view>
						<view class="form-item border-b">
							<view class="field-name">代理区域</view>
							<input class="flex-1 ml20" name="agent_region" type="text" value="" placeholder-class="grary"
								placeholder="请输入区域" />
						</view>
						<view class="form-item border-b">
							<view class="field-name">店名</view>
							<input class="flex-1 ml20" name="store_name" type="text" value="" placeholder-class="grary"
								placeholder="请输入店名" />
						</view>
						<view class="form-item border-b">
							<view class="field-name">营业时间</view>
							<input class="flex-1 ml20" name="shop_hours" type="text" value="" placeholder-class="grary"
								placeholder="请输入区域" />
						</view>
					</view>
					<view class="d-s-c p-20-0 f24">
						<checkbox-group @change="changeFunc">
							<checkbox style="transform:scale(0.7)" value="checkbox" :checked="is_read" />
						</checkbox-group>
						<text>我已阅读并了解</text>
						<text class="red" @click="isPopup=true">
							【{{ words.apply.words.license.value || '' }}】
						</text>
					</view>
					<view class="d-c-c mt30">
						<button class="btn-red" form-type="submit">{{ words.apply.words.submit.value || '' }}</button>
					</view>
				</form>
			</view>
		</template>
		<!--分销商审核中-->
		<template v-if="is_applying">
			<view class="d-c-c pt30">
				<image style="width: 532rpx;height: 340rpx;margin: 0 auto;" src="/static/agen_applay.png" mode=""></image>
			</view>
			<view class="p-30-0 d-c-c gray9 f26">
				{{ words.apply.words.wait_audit.value || '' }}
			</view>
			<view class="p30 mt30 d-c-c">
				<button type="primary" class="btn-red"
					@click="gotoShop">{{ words.apply.words.goto_mall.value || '' }}</button>
			</view>
		</template>

		<!--协议-->
		<Popup :show="isPopup" msg="申请协议">
			<view class="agreement-content f28 lh150">
				{{agreement}}
			</view>
			<view class="ww100 pt20 d-c-c">
				<button type="primary" class="btn-red" @click="isPopup=false">我已阅读</button>
			</view>
		</Popup>
		<mpvue-city-picker v-if="is_load" ref="mpvueCityPicker" :province="province" :city="city" :area="area" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import Popup from '@/components/uni-popup.vue'
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
	export default {
		components: {
			Popup,
			mpvueCityPicker
		},
		data() {
			return {
				cityPickerValueDefault: [0, 0, 0],
				selectCity: '选择省,市,区',
				selectStore:'选择门店位置',
				/*弹窗是否打开*/
				isPopup: false,
				/*是否阅读了规则*/
				is_read: false,
				agreement: '',
				is_applying: false,
				is_load: false,
				referee_name: '',
				/*地址id*/
				address_id: 2,
				province_id: 0,
				city_id: 0,
				region_id: 0,
				words: {},
				is_agent: '',
				/*顶部背景*/
				top_background: '',
				/*小程序订阅消息*/
				temlIds: [],
				imageList:[],
				id_card_front:[],
				id_card_back:[],
				file_id:[],
				province: [],
				city: [],
				area: [],
				items:[
					{
						value:1,
						name:'区县'
					},
					{
						value:2,
						name:'店中店'
					},
					{
						value:3,
						name:'星级会员'
					},
					{
						value:4,
						name:'会员'
					},
				],
				current:'1',
				longitude:0,
				latitude:0
			}
		},
		mounted() {
			/*数据*/
			this.getData();
			this.getData1();
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				})
				self._get('user.agent/apply', {
					platform: self.getPlatform(),
					referee_id: uni.getStorageSync('referee_id')
				}, function(res) {
					uni.hideLoading();
					self.top_background = res.data.background;
					self.is_applying = res.data.is_applying;
					self.referee_name = res.data.referee_name != null ? res.data.referee_name : '平台';
					self.is_agent = res.data.is_agent;
					self.words = res.data.words;
					self.temlIds = res.data.template_arr;
					self.agreement = res.data.license;
					/*设置标题*/
					uni.setNavigationBarTitle({
						title: self.words.apply.title.value
					});
					if (self.is_agent) {
						uni.navigateBack({});
					}
				});
			},
			getData1() {
				let self = this;
				let address_id = self.address_id;
				self._get(
					'user.address/detail', {
						address_id: address_id
					},
					function(res) {
						self.address = res.data.detail;
						self.address_id = res.data.detail.address_id;
						// self.province_id = res.data.detail.province_id;
						// self.city_id = res.data.detail.city_id;
						// self.region_id = res.data.detail.region_id;
						self.region = res.data.region;
						let add = '';
						var b = self.region.forEach(item => {
							add += item;
						});
						// self.selectCity = add;
						self.province = res.data.regionData[0];
						self.city = res.data.regionData[1];
						self.area = res.data.regionData[2];
						self.is_load = true;
					}
				);
			},
			radioChange(e){
				this.current=e.target.value
			},
			/*三级联动选择*/
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show();
			},
			// 选择图片
			chooseImage(type) {
			let that = this
				// #ifndef H5
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						that.uploadFile(res.tempFilePaths[0],type);
			
					},
					fail: (err) => {
						console.log('选择失败：', err)
						uni.showToast({
							title: '选择图片失败',
							icon: 'none'
						})
					}
				})
				// #endif
			},
			uploadFile(filePath,type) {
				
				uni.showLoading({
					title: '上传中'
				});
				let params = {
					token: uni.getStorageSync('token'),
					app_id: this.getAppId()
				};
				let that = this
				uni.uploadFile({
					url: that.websiteUrl + '/index.php?s=/api/file.upload/image',
					filePath: filePath,
					name: 'iFile',
					formData: params,
					success: function(res) {
						let data = JSON.parse(res.data)
						if(type==='id_card_front'){
							that.id_card_front.push(data.data.file_path)
						}else if(type==='id_card_back'){
							that.id_card_back.push(data.data.file_path)
						}else if(type==='file_id'){
							that.file_id.push(data.data.file_path)
						}else{
							that.imageList=[...that.imageList,data.data.file_path]
						}
						
					},
					complete: function() {
						uni.hideLoading();
					}
				});
			},
			// 预览图片
			previewImage(index) {
				if(index==='id_card_front'){
					uni.previewImage({
						urls: this.id_card_front,
						current: 0
					})
				}else if(index==='id_card_back'){
					uni.previewImage({
						urls: this.id_card_back,
						current: 0
					})
				}else if(index==='file_id'){
					uni.previewImage({
						urls: this.file_id,
						current: 0
					})
				}else{
					uni.previewImage({
						urls: this.imageList,
						current: index
					})
				}
			
			},
			// 删除图片
			deleteImage(index) {
				if(index==='id_card_front'){
					this.id_card_front.splice(0, 1)
				}else if(index==='id_card_back'){
					this.id_card_back.splice(0, 1)
				}else if(index==='file_id'){
					this.file_id.splice(0, 1)
				}else{
					this.imageList.splice(index, 1)
				}
			},
			handleLocation() {
				// 处理定位选择
			
				uni.chooseLocation({
					success: (res) => {
						console.log('位置选择成功：', res);
						this.selectStore=res.address
						this.longitude=res.longitude
						this.latitude=res.latitude
					},
					fail: (err) => {
						console.log('位置选择失败：', err);
						uni.showToast({
							title: '位置选择失败',
							icon: 'none'
						});
					}
				});
			},
			/*申请*/
			formSubmit: function(e) {
				let formdata = e.detail.value;
				formdata.referee_id = uni.getStorageSync('referee_id');
				formdata.store_photos=this.imageList
				formdata.province_id=this.province_id
				formdata.city_id=this.city_id
				formdata.region_id=this.region_id
				formdata.id_card_front=this.id_card_front[0]
				formdata.id_card_back=this.id_card_back[0]
				formdata.agent_level=this.current
				formdata.file_id=this.file_id[0]
				formdata.longitude=this.longitude
				formdata.latitude=this.latitude
				console.log(formdata)
				let self = this;

				if (formdata.name == '') {
					uni.showToast({
						title: '请输入姓名！',
						icon: 'none'
					});
					return;
				}
				if (formdata.mobile.length == '') {
					uni.showToast({
						title: '请输入手机号！',
						icon: 'none'
					});
					return;
				}
				if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(formdata.mobile)) {
					uni.showToast({
						title: '手机有误,请重填！',
						icon: 'none'
					});
					return;
				}
				if(this.current=='1'||this.current=='2'){
					if (formdata.longitude == '') {
						uni.showToast({
							title: '请选择门店位置！',
							icon: 'none'
						});
						return;
					}
					if (formdata.longitude == '') {
						uni.showToast({
							title: '请选择门店位置！',
							icon: 'none'
						});
						return;
					}
					if (formdata.longitude == '') {
						uni.showToast({
							title: '请选择门店位置！',
							icon: 'none'
						});
						return;
					}
					if (formdata.province_id ==0) {
						uni.showToast({
							title: '请选择所在地区！',
							icon: 'none'
						});
						return;
					}
					if (formdata.store_address ==0) {
						uni.showToast({
							title: '请输入详细地址！',
							icon: 'none'
						});
						return;
					}
					if (formdata.business_license ==0) {
						uni.showToast({
							title: '请输入执照编号！',
							icon: 'none'
						});
						return;
					}
					if (formdata.store_photos.length ==0) {
						uni.showToast({
							title: '请上传店铺照片！',
							icon: 'none'
						});
						return;
					}
					if (!formdata.id_card_front) {
						uni.showToast({
							title: '请上传身份证正面照！',
							icon: 'none'
						});
						return;
					}
					if (!formdata.id_card_back) {
						uni.showToast({
							title: '请上传身份证反面照！',
							icon: 'none'
						});
						return;
					}
					if (!formdata.file_id) {
						uni.showToast({
							title: '请上传门店logo！',
							icon: 'none'
						});
						return;
					}
					if (formdata.contract_content ==0) {
						uni.showToast({
							title: '请输入合同内容！',
							icon: 'none'
						});
						return;
					}
					if (formdata.user_signature ==0) {
						uni.showToast({
							title: '请输入签名！',
							icon: 'none'
						});
						return;
					}
					if (formdata.agent_region ==0) {
						uni.showToast({
							title: '请输入代理区域！',
							icon: 'none'
						});
						return;
					}
					if (formdata.store_name ==0) {
						uni.showToast({
							title: '请输入店名！',
							icon: 'none'
						});
						return;
					}
					if (formdata.shop_hours ==0) {
						uni.showToast({
							title: '请输入营业时间！',
							icon: 'none'
						});
						return;
					}
				}
				if (!self.is_read) {
					uni.showToast({
						title: '请同意协议！',
						icon: 'none'
					});
					return;
				}

				let callback = function() {
					uni.showLoading({
						title: '正在提交',
						mask: true
					})
					self._post('plus.agent.apply/submit', formdata, function(res) {
						uni.hideLoading();
						uni.showToast({
							title: '申请成功'
						});
						self.getData();
					});
				};
				self.subMessage(self.temlIds, callback);
			},

			/*去商城看看*/
			gotoShop() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},

			/*同意协议*/
			changeFunc(e) {
				if (e.target.value.length > 0) {
					this.is_read = true;
				} else {
					this.is_read = false;
				}
			},
			/*选择之后绑定*/
			onConfirm(e) {
				console.log(e)
				let params={
					province_id:e.cityCode[0],
					city_id:e.cityCode[1],
					region_id:e.cityCode[2]
				}
				this._post('plus.agent.apply/check', params, function(res) {
				
				});
				this.region = e.label.split(',');
				this.selectCity = e.label;
				this.province_id = e.cityCode[0];
				this.city_id = e.cityCode[1];
				this.region_id = e.cityCode[2];
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.apply-agent .banner {
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.apply-agent .banner image {
		width: 750rpx;
		height: 348rpx;
	}

	.form-wrap {
		background: #FFFFFF;
		box-shadow: 0 0 8rpx 0 rgba(0, 0, 0, .2);
	}

	.form-item {
		padding: 20rpx 0;
		/* margin-bottom: 20rpx; */
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 28rpx;
		height: 100rpx;
		box-sizing: border-box;
	}

	.form-item .field-name {
		width: 180rpx;
	}

	.form-item input {
		font-size: 28rpx;
	}

	.agreement-content {
		max-height: 60vh;
		overflow-y: auto;
	}

	.apply-agent .btn-red {
		width: 600rpx;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 44rpx;
		background: #FF5649;
		border-color: #FF5649;
	}
	.image-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;
		margin-top: 20rpx;
		margin-bottom: -20rpx;
	
		.upload-item {
			position: relative;
			width: 100rpx;
			height: 100rpx;
			background-color: #F8F8F8;
			border-radius: 8rpx;
			overflow: hidden;
	
			.preview-image {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
	
			.delete-btn {
				position: absolute;
				top: 0;
				right: 0;
				width: 40rpx;
				height: 40rpx;
				background: rgba(0, 0, 0, 0.5);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 32rpx;
				border-bottom-left-radius: 8rpx;
			}
	
			&.upload-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				border: 2rpx dashed #ddd;
	
				.icon-add {
					font-size: 60rpx;
					color: #999;
				}
			}
		}
	}
</style>
