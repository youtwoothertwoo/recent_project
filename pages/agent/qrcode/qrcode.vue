<template>
	<view class="qrcode">
		<swiper class="swiper" @change="swiperChange" :current="current">
			<swiper-item v-for="(url, index) in qrcodes" :key="index">
				<view class="swiper-item">
					<image :src="url"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="dots">
			<view
				class="dot"
				:class="{ active: index === current }"
				v-for="(item, index) in items"
				:key="item.value"
			></view>
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
				qrcodes: [],
				mapName:['qrcode1', 'qrcode2', 'qrcode3'],
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
			}
		},
		mounted() {
			/*获取数据*/
			this.getAllData();
		},
		methods: {
			/*获取数据*/
			getAllData() {
				let self = this;
				uni.showLoading({
					title: '加载中',
				});
				let source = self.getPlatform();
                // const options = ['qrcode1', 'qrcode2', 'qrcode3'];
				
				
				self._get('plus.agentnew.qrcode/poster', {
				    source: source,
				}, function(data) {
					uni.hideLoading();
					self.qrcodes = data.data.qrcode
				}, function(err) {
				    uni.hideLoading();
				    uni.showToast({
				        title: '加载失败',
				        icon: 'none'
				    });
				});
				
			},
			swiperChange(e){
				this.current = e.detail.current;
			},
			/*保存图片*/
			savePosterImg() {
				let self = this;
                if (!self.qrcodes[self.mapName[self.current]]) {
                    uni.showToast({
                        title: '图片不存在',
                        icon: 'none'
                    });
                    return;
                }
				uni.showLoading({
					title: '加载中'
				});
				// 下载海报图片
				uni.downloadFile({
					url: self.qrcodes[self.mapName[self.current]],
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
	.qrcode {
		height: calc(100vh - 88rpx);
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
	
		width: 100%;
		height: 100%;
	}

	.swiper-item image {
		width: 100%;
		height:auto;
		object-fit: contain;
	}

	.dots {
		position:absolute;
		top:80%;
		left:50%;
		display: flex;
		justify-content: center;
		transform:translateX(-50%);
		

	}

	.dot {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background-color: #ccc;
		margin: 0 10rpx;
		transition: background-color 0.3s;
	}

	.dot.active {
		background-color: #333;
	}

	.btns-wrap {
		position: fixed;
		height: 88rpx;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		z-index: 99;
	}

	.btns-wrap .btn-red {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		border-radius: 0;
	}
</style>
