<template>
	<view>

		<view class="index-body">
			<view class="index-body-top">
				<view class="">用户ID</view>
				<input type="text" v-model="formData.user_id" placeholder="请输入您要转账的用户ID" />
			</view>
			<view class="index-body-top" >
				<view class="">
					<view class="">转账金额</view>
					<view style="font-size: 18rpx;">
						金额不能低于100
					</view>
				</view>
				<input type="text" v-model="formData.amount" placeholder="请输入您要转账的金额" />
			</view>
			<view class="index-body-top">
				<view class="">手机号码</view>
				<input type="text" v-model="formData.mobile" placeholder="请输入您要转账的手机号" />
			</view>
		<!-- 	<view class="index-body-top">
				<view class="">支付密码</view>
				<input type="text" password="true" v-model="formData.pay_password" placeholder="请输入您的支付密码" />
			</view> -->
		</view>
		<view class="btn">
			<button type="default" @click="payFunc">确认支付</button>
		</view>
	</view>
</template>

<script>
	import {
		pay
	} from '@/common/pay.js';
	export default {
		data() {
			return {
				formData: {
					user_id: '',
					amount: '',
					pay_password: '',
					mobile:'',
					isHedui:true
				}
			}
		},
		mounted() {

		},
		methods: {
			payFunc() {
				if (this.formData.user_id === '') {
					uni.showToast({
						title: '请填写用户ID',
						icon: 'none'
					})
					return
				}
				if (this.formData.amount === '') {
					uni.showToast({
						title: '请填写转账金额',
						icon: 'none'
					})
					return
				}
				this.formData.user_id = Number(this.formData.user_id)
				this.formData.amount = Number(this.formData.amount)
				console.log(this.formData)
				if (this.formData.mobile === '') {
					uni.showToast({
						title: '请填写手机号码',
						icon: 'none'
					})
					return
				}
				if(this.isHedui){
					uni.showModal({
						title:'请核对支付密码',
						confirmText:'确定',
						editable:true,
						success(res) {
							if(res.confirm){
								let params={pay_password:res.content}
								self._post('user.user/checkPayPassword', params, function(res) {
									self.showSuccess(
										'核对成功'
									);
									self.isHedui=false
								});	
							}
						}
					})
					return
				}
				let self = this;
				uni.showLoading({
					title: '加载中',
					mask: true
				});


				self._post('user.user/balanceTransaction', this.formData, function(result) {

					self.showSuccess(
						'交易成功',
						function() {
							uni.hideLoading();
						},
						function(err) {
							uni.hideLoading();
						}
					);

				});
			},
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}

	.gray {
		color: #808080;
	}

	.font-28 {
		font-size: 28rpx;
	}

	.font-36 {
		font-size: 36rpx;
	}

	.index {
		width: 750rpx;
	}

	.index-head {
		width: 750rpx;
		margin: 0 auto;
		padding: 30rpx 20rpx;
		padding-bottom: 50rpx;
		box-sizing: border-box;
		background-color: white;
		border-top: 16rpx solid #f2f2f2;
	}

	.index-head-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-direction: column;
	}

	.head-top-botm {
		color: #999999;
		font-size: 26rpx;
		margin-top: 20rpx;
	}

	.index-head-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.index-head-bottom-item {
		position: relative;
		width: 220rpx;
		height: 128rpx;
		border: 1rpx solid #999999;
		background-color: #FFFFFF;
		color: #333333;
		text-align: center;
		border-radius: 15rpx;
		line-height: 128rpx;
		margin-top: 20rpx;
		font-size: 48rpx;
	}

	.index-head-bottom-item-active {
		position: relative;
		width: 220rpx;
		height: 128rpx;
		color: #323333;
		background: #FFE6E3;
		border: 1rpx solid #F6220C;
		text-align: center;
		border-radius: 12rpx;
		line-height: 128rpx;
		margin-top: 20rpx;
		font-size: 48rpx;
	}

	.givemoney {
		position: absolute;
		top: 0;
		left: 0;
		width: 90rpx;
		height: 33rpx;
		background-color: #F6220C;
		color: #FFFFFF;
		font-size: 20rpx;
		line-height: 33rpx;
		text-align: center;
		border-top-left-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
	}

	.index-body {
		width: 750rpx;
	}

	.index-body-top {
		/* width: 660rpx; */
		height: 100rpx;
		padding: 0 20rpx;
		border: 1rpx solid #f7f7f7;
		border-radius: 15rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #4b4b4b;
		margin-bottom: 15rpx;
	}

	.active {
		background-color: #FDE34880;
		color: #323333;
	}

	.index-body-top view {
		width: 50%;
	}

	.index-body-top input {
		width: 50%;
		text-align: right;
	}

	.index-body-bottom {
		width: 750rpx;
		padding: 30rpx 20rpx;
		background-color: white;
		border-top: 16rpx solid #f2f2f2;
		margin-top: 20rpx;
		box-sizing: border-box;
	}

	.checkbox {
		display: flex;
		align-items: center;
	}

	.index-body-bottom-info {
		/* margin-top: 65rpx; */
	}

	.index-body-bottom-info view {
		margin-top: 10rpx;
	}

	.btn {
		margin-top: 50rpx;
	}

	.btn button {
		width: 710rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
		margin: 0 auto;
		color: white;
		font-size: 32rpx;
		background: linear-gradient(90deg, #FF6B6B 4%, #F6220C 100%);
	}

	.rule text {
		margin-left: 15rpx;
		color: #88B5D1;
	}
</style>