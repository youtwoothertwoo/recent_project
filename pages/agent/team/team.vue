<template>
	<view>
		<view class="top-container">
			<view class="top-tabbar">
				<view v-for="(item,index) in tabList" :key="index"
					:class="state_active == index ? 'tab-item active' : 'tab-item'" @click="stateFunc(index)">
					{{item.text}}
				</view>
			</view>

			<!-- 统计卡片：第一行 2 个，第二行 3 个 -->
			<view class="stat-grid p-0-30">
			<view class="stat-card span-2">
				<text class="stat-label">团队总人数</text>
				<text class="stat-num red">{{ teamTotal }}</text>
			</view>
			<view class="stat-card span-2">
				<text class="stat-label">直推人数</text>
				<text class="stat-num red">{{ zhitui_num }}</text>
			</view>

			<view class="stat-card span-3">
				<text class="stat-label">总业绩</text>
				<text class="stat-num red">{{ all_money }}元</text>
			</view>
			<view class="stat-card span-3">
				<text class="stat-label">月新增</text>
				<text class="stat-num red">{{ month_money }}元</text>
			</view>
			<view class="stat-card span-3">
				<text class="stat-label">日新增</text>
				<text class="stat-num red">{{ today_money }}元</text>
			</view>
			</view>
		</view>

		<!--列表-->
		<scroll-view scroll-y="true" class="scroll-Y" :style="'height:' + scrollviewHigh + 'px;'" lower-threshold="50"
			@scrolltolower="scrolltolowerFunc">
			<view class="p-0-30 bg-white">
				<view class="border-b p-20-0" v-for="(item,index) in tableData" :key="index" @tap = "showMemberCard(item)">
					<view class="d-b-c">
						<view class="agent-team-photo">
							<image :src="item.avatarUrl" mode="aspectFill"></image>
						</view>
						<view class="flex-1 ml20 f24">
							<view class="d-b-c mb16">
								<text class="f28 gray3">{{ item.nickName }}</text>
								<view class="">
									<text class="gray9">ID:</text>
									<text class="gray3">{{item.suiji_id}}</text>
								</view>
							</view>
							<view class="d-b-c">
								<text class="gray9">手机号:{{ item.mobile }}</text>
								<!-- <text class="gray9" v-if="item.agent">
									{{ item.agent.first_num + item.agent.second_num + item.agent.third_num }}个成员</text> -->
							</view>
						</view>
					</view>
				</view>
				<!-- 没有记录 -->
				<view class="d-c-c p30" v-if="tableData.length==0 && !loading">
					<text class="iconfont icon-wushuju"></text>
					<text class="cont">亲，暂无相关记录哦</text>
				</view>
				<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
			</view>
		</scroll-view>

		<!-- 成员详情弹窗 -->
		<Popup :show="isOpen" type="middle"  @hidePopup="()=> isOpen = false">
			<view class="pop-card">
				<view class="pop-header">
				<text class="pop-title">成员概况</text>
				<text class="iconfont icon-guanbi" @click="()=> isOpen = false"></text>
				</view>

				<view class="pop-body">
				<view class="pop-row">
					<text class="pop-label">直推人数</text>
					<text class="pop-val">{{ popupData.zhitui || 0 }}</text>
				</view>
				<view class="pop-row">
					<text class="pop-label">总业绩</text>
					<text class="pop-val">{{ popupData.all_money || 0 }} 元</text>
				</view>
				<view class="pop-row">
					<text class="pop-label">月新增</text>
					<text class="pop-val">{{ popupData.month_money || 0 }} 元</text>
				</view>
				<view class="pop-row">
					<text class="pop-label">日新增</text>
					<text class="pop-val">{{ popupData.today_money || 0 }} 元</text>
				</view>
				</view>
			</view>
		</Popup>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more.vue";
	import Popup from '@/components/uni-popup.vue';
	export default {
		components: {
			uniLoadMore,
			Popup
		},
		data() {
			return {
				/*手机高度*/
				phoneHeight: 0,
				/*可滚动视图区域高度*/
				scrollviewHigh: 0,
				/*状态选中*/
				state_active: 0,
				/*数据列表*/
				tableData: [],
				setting: [],
				teamTotal: 0,
				page: 1,
				no_more: false,
				tabList: [],
				list_rows: 15,
				loading: true,
				zhitui_num:0,
				all_money:0,
				month_money:0,
				today_money:0,
				isOpen:false,
				popupData:{}
			}
		},
		computed: {
			/*加载中状态*/
			loadingType() {
				if (this.loading) {
					return 1;
				} else {
					if (this.tableData.length != 0 && this.no_more) {
						return 2;
					} else {
						return 0;
					}
				}
			}
		},
		mounted() {
			/*初始化*/
			this.init();
			/*获取数据*/
			this.getData();
		},
		methods: {

			/*初始化*/
			init() {
				let self = this;
				uni.getSystemInfo({
					success(res) {
						self.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().select('.top-container');
						view.boundingClientRect(data => {
							let h = self.phoneHeight - data.height;
							self.scrollviewHigh = h;
						}).exec();
					}
				});
			},

			showMemberCard(item) {
				let self = this
			// 这里先 mock 数据，后续换成 this._get('plus.agentnew.team/userPerf', { user_id: item.user_id }, res => {})
			self.popupData = {
				zhitui: item.zhitui_num,
				all_money: item.performance.all_money,
				month_money: item.performance.month_money,
				today_money: item.performance.today_money
			};
			self.isOpen = true
			},
			/*获取数据*/
			getData() {
				let self = this;
				self.loading = true;
				self._get('plus.agentnew.team/lists', {
					level: self.state_active + 1,
					page: self.page || 1,
					list_rows: self.list_rows,
				}, function(res) {
					self.loading = false;
					self.teamTotal = res.data.list.all_num
					self.zhitui_num = res.data.list.zhitui_num
					self.all_money = res.data.performance.all_money
					self.month_money = res.data.performance.month_money
					self.today_money = res.data.performance.today_money
					let data = res.data;
					// 导航栏数据
					self.tabList = [{
						value: 1,
						text: data.words.team.words.first.value,
						total: data.agent?.first_num
					}];
					if (data.setting.level >= 2) {
						self.tabList.push({
							value: 2,
							text: data.words.team.words.second.value,
							total: data.agent?.second_num
						});
						self.teamTotal = res.data.list.all_num
					}
					/** 
					 * 三级团队
					 * */
					// if (data.setting.level == 3) {
					// 	self.tabList.push({
					// 		value: 3,
					// 		text: data.words.team.words.third.value,
					// 		total: data.agent?.third_num
					// 	});
					// 	self.teamTotal = res.data.list.all_num
					// }
					self.tableData = self.tableData.concat(data.list[self.state_active + 1]);
					self.last_page = data.list.last_page;
					if (self.last_page <= 1) {
						self.no_more = true;
					}
				}, null, function() {
					self.loading = false;
				});
			},

			/*切换类别*/
			stateFunc(e) {
				let self = this;
				if (e != self.state_active) {
					self.tableData = [];
					self.page = 1;
					self.state_active = e;
					self.getData();
				}
			},

			/*可滚动视图区域到底触发*/
			scrolltolowerFunc() {
				let self = this;
				if (self.no_more) {
					return;
				}
				self.page++;
				if (self.page <= self.last_page) {
					self.getData();
				} else {
					self.no_more = true;
				}
			}
		}
	}
</script>

<style lang="scss">
/* ========== 简洁大方版样式 ========== */
page {
	background-color: #f5f6fa;
}

.top-container {
	background-color: #fff;
	border-radius: 0 0 16rpx 16rpx;
	overflow: hidden;
}

/* 统计卡片：第一行 2 个，第二行 3 个 */
.stat-grid{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 24rpx 32rpx;
  background: #fff;
  border-radius: 16rpx;
  margin: 24rpx 24rpx 0;
}
.stat-card{
  background: #fafbfc;
  border-radius: 12rpx;
  padding: 24rpx 0;
  margin-bottom: 16rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-card.span-2{ width: 48%; }   /* 第一行 2 个 */
.stat-card.span-3{ width: 31.5%; } /* 第二行 3 个 */

.stat-label{
  font-size: 26rpx;
  color: #666;
  margin-bottom: 8rpx;
}
.stat-num{
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}
.stat-num.red{ color: #ff5649; }

/* Tab 栏 */
.top-tabbar {
	display: flex;
	justify-content: center;
	padding: 24rpx 0 16rpx;
	background: #fff;
}
.tab-item {
	position: relative;
	padding: 0 40rpx;
	font-size: 30rpx;
	color: #999;
	line-height: 64rpx;
	transition: color 0.2s;
}
.tab-item.active {
	color: #ff5649;
	font-weight: 600;
}
.tab-item.active::after {
	content: "";
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	width: 40rpx;
	height: 4rpx;
	background: #ff5649;
	border-radius: 2rpx;
}

/* 列表卡片 */
.scroll-Y {
	background-color: #f5f6fa;
}
.p-0-30 {
	padding: 0 32rpx;
	background: #fff;
	border-radius: 16rpx;
	margin: 24rpx 24rpx 0;
}
.border-b {
	padding: 32rpx 0;
	border-bottom: 1rpx solid #f0f0f0;
}
.border-b:last-child {
	border: 0;
}

/* 头像 */
.agent-team-photo image {
	width: 88rpx;
	height: 88rpx;
	border-radius: 50%;
	border: 1rpx solid #eee;
}

/* 文字 */
.gray3 {
	color: #333;
}
.gray9 {
	color: #999;
}
.f28 {
	font-size: 30rpx;
}
.f24 {
	font-size: 26rpx;
}

/* 空态 */
.d-c-c.p30 {
	flex-direction: column;
	padding: 80rpx 0;
	color: #c0c4cc;
	font-size: 26rpx;
}
.d-c-c .iconfont {
	font-size: 80rpx;
	margin-bottom: 16rpx;
}

/* 弹窗卡片 */
.pop-card{
  width: 500rpx;
  background: #fff;
  border-radius: 24rpx;
  padding: 32rpx;
}
.pop-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40rpx;
}
.pop-title{
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}
.icon-guanbi{
  font-size: 40rpx;
  color: #999;
}
.pop-body .pop-row{
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0;
  font-size: 28rpx;
}
.pop-label{ color: #666; }
.pop-val{ color: #ff5649; font-weight: 500; }
</style>
