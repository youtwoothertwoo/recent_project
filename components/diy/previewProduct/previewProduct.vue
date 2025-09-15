<template>
	<view class="diy-previewProduct" v-if="itemData.data.length > 0">
		<view class="sharpproduct-head d-b-c" :style="'background-image: url(' + itemData.style.background_image + ');'">
			<view class="left d-s-c"></view>
			<view class="right d-e-c" @click="gotoList">
				<text class="white f26">更多</text>
				<text class="iconfont icon-jiantou mr10"></text>
			</view>
		</view>
		<view class="sharpproduct-body column__3" :style="'background:' + itemData.style.background_color + ';'">
			<scroll-view scroll-x="true">
				<view class="product-list">
					<view class="product-item bg-white" v-for="(item, index) in itemData.data" :key="index" @click="gotoDetail(item.product_id)">
						<view class="datetime d-s-s" :style="'background:' + itemData.style.countdown_back_color + ';'">
							<view class="top_image"><image :src="itemData.style.top_image" mode="aspectFit"></image></view>
							<Countdown
								activeName="previewProduct"
								:back_color="'none'"
								:color="itemData.style.countdown_color"
								:cut_color="itemData.style.countdown_color"
								:config="{ startstamp: new Date().valueOf() / 1000, endstamp: item.preview_time, title: ' ' }"
								:start_name="'距开始:'"
								:end_name="'距开始:'"
							></Countdown>
						</view>
						<!-- 两列三列 -->
						<view class="d-b-c p10">
							<view class="product-info flex-1">
								<view class="" :style="{ color: itemData.style.color }">
									<text class="f18">¥</text>
									<text class="f22">{{ item.product_price }}</text>
									<text class="f22">起</text>
								</view>
								<view class="f20 text-ellipsis">{{ item.product_name }}</view>
								<view class="gray9 f18 text-d-line">¥{{ item.line_price }}</view>
							</view>
							<view class="product-cover"><image :src="item.product_image" mode="aspectFit"></image></view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Countdown from '@/components/countdown/countdown-act.vue';
export default {
	components: {
		Countdown
	},
	data() {
		return {
			/*倒计时配置*/
			countdownConfig: {
				/*开始时间*/
				startstamp: 0,
				/*结束时间*/
				endstamp: 0,
				/*标题*/
				title: ' '
			}
		};
	},
	props: ['itemData'],
	created() {
		this.countdownConfig.endstamp = this.itemData.data.end_time;
		this.countdownConfig.startstamp = this.itemData.data.start_time;
	},
	methods: {
		scroll(e) {},

		/*跳转列表*/
		gotoList() {
			let url = '/pages/plus/preview/list';
			this.gotoPage(url);
		},

		/*跳转产品详情*/
		gotoDetail(e) {
			let url = '/pages/product/detail/detail?product_id=' + e;
			this.gotoPage(url);
		}
	}
};
</script>

<style lang="scss">
.diy-previewProduct {
	margin: 20rpx 20rpx;
	border-radius: 6rpx;
	@include background_linear('bg-bargain', 'text_color1', 180deg, 0%, 100%);
	overflow: hidden;
	box-shadow: 0px 8rpx 3rpx 0px rgba(6, 0, 1, 0.03);
}

.diy-previewProduct .sharpproduct-head {
	height: 90rpx;
	color: #000000;
	background-size: 100% 100%;
}

.diy-previewProduct .name {
	width: 200rpx;
}

.diy-previewProduct .sharpproduct-body {
}

.diy-previewProduct .sharpproduct-head .name {
	font-size: 32rpx;
	font-weight: bold;
}

.diy-previewProduct .product-item .datetime::v-deep text {
	font-size: 18rpx;
}

.diy-previewProduct .product-item .datetime::v-deep .box {
	padding: 0;
	font-size: 18rpx;
	background: none;
}
.diy-previewProduct .product-item .datetime::v-deep .daybox {
	padding: 0;
	font-size: 18rpx;
	background: none;
}
.diy-previewProduct .product-item .datetime::v-deep .countdown {
	border: none;
	padding: 0;
	font-size: 18rpx;
	white-space: nowrap;
}
.diy-previewProduct .sharpproduct-head .icon-jiantou {
	margin-left: 8rpx;
	color: #ffffff;
	font-size: 22rpx;
}

.diy-previewProduct .product-list .product-item {
	overflow: hidden;
	flex-shrink: 0;
}

.diy-previewProduct .product-list .product-cover image {
	width: 100%;
	height: 100%;
	background-color: #f4f4f4;
	border-radius: 12rpx;
}

.diy-previewProduct .product-list .price {
	font-size: 20rpx;
	color: #ff4c01;
	line-height: 26rpx;
	padding-top: 16rpx;
	padding-bottom: 8rpx;
}

.diy-previewProduct .product-list .product-title {
	margin-top: 10rpx;
	height: 24rpx;
	line-height: 24rpx;
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	font-size: 22rpx;
}

.diy-previewProduct .column__3 .product-list .product-title {
	font-size: 22rpx;
}

.diy-previewProduct .column__3 .product-list {
	display: flex;
	justify-content: flex-start;
	max-height: 370rpx;
	flex-direction: column;
	padding: 0 20rpx;
	align-items: flex-start;
}

.diy-previewProduct .column__3 .product-item {
	width: 300rpx;
	margin-right: 20rpx;
	border-radius: 15rpx;
	overflow: hidden;
	margin-bottom: 20rpx;
}

.diy-previewProduct .column__3 .product-cover {
	width: 88rpx;
	height: 88rpx;
	margin: 0 auto;
	margin-bottom: 16rpx;
	border-radius: 12rpx;
	overflow: hidden;
}

.diy-assembleproduct .product-list {
	flex-wrap: nowrap;
}
.top_image {
	width: 102rpx;
	height: 38rpx;
	margin-right: 5rpx;
	image {
		width: 102rpx;
		height: 38rpx;
	}
}
</style>
