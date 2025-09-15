<template>
	<view class="qrcode">
		<image :src="qrcode_url" mode="widthFix"></image>
		<view style="margin: 100rpx 40rpx;">
			<radio-group style="display: flex;justify-content: space-between;text-align: center;" @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view style="margin-top: 20rpx;">{{item.name}}</view>
				</label>
			</radio-group>
		</view>
		<view class="btns-wrap">
			<!-- #ifdef MP || APP-PLUS -->
			<button class="btn-red" type="default" @click="savePosterImg">保存图片</button>
			<!-- #endif  -->
			<!-- #ifdef H5 -->
			<view class="f34 tc ww100" type="default">长按保存图片</view>
			<!-- #endif -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qrcode_url: '',
				items:[
					{
						value:0,
						name:'样式一'
					},
					{
						value:1,
						name:'样式二'
					},
					{
						value:2,
						name:'样式三'
					},
				],
				current:0,
				qrcode:'qrcode1'
			}
		},
		mounted() {
			/*获取数据*/
			this.getData();
		},
		methods: {

			/*获取数据*/
			getData() {
				let self = this;
				uni.showLoading({
					title: '加载中',
				});
				let source = self.getPlatform();
				self._get('plus.agentnew.qrcode/poster', {
					source: source,
					option: this.qrcode
				}, function(data) {
					uni.hideLoading();
					self.qrcode_url = data.data.qrcode;
				});
			},
			radioChange(e){
				console.log(e)
				if(e.detail.value==='0'){
					this.qrcode='qrcode1'
				}else if(e.detail.value==='1'){
					this.qrcode='qrcode2'
				}else if(e.detail.value==='2'){
					this.qrcode='qrcode3'
				}
				this.getData()
			},
			/*保存图片*/
			savePosterImg() {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
				// 下载海报图片
				uni.downloadFile({
					url: self.qrcode_url,
					success(res) {
						uni.hideLoading();
						// 图片保存到本地
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success(data) {
								uni.showToast({
									title: '保存成功',
									icon: 'success',
									duration: 2000
								});
								// 关闭商品海报
								self.isCreatedImg = false;
							},
							fail(err) {
								console.log(err.errMsg);
								if (err.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
									uni.showToast({
										title: '请允许访问相册后重试',
										icon: 'none',
										duration: 1000
									});
									setTimeout(() => {
										uni.openSetting();
									}, 1000);
								}
							},
							complete(res) {
								console.log('complete');
							}
						});
					}
				});
			}
		}
	}
</script>

<style>
	.qrcode {}

	.qrcode image {
		width: 100%;
	}

	.btns-wrap {
		position: fixed;
		height: 88rpx;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		z-index: 10;
	}

	.btns-wrap .btn-red {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 0;
	}
</style>