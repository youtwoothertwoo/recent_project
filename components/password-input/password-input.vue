<template>
	<view class="password-modal" v-if="show" @click="close">
		<view class="modal-content" @click.stop>
			<view class="modal-header">
				<text class="close-btn" @click="close">×</text>
				<text class="title">请输入支付密码</text>
			</view>
			<view class="modal-body">
				<view class="password-input-area" @click="focusInput">
					<view class="password-boxes">
						<view class="box" v-for="(item, index) in 6" :key="index">
							<text v-if="password.length > index" class="dot">●</text>
						</view>
					</view>
					<input
						type="number"
						:focus="isFocus"
						@blur="isFocus=false"
						v-model="password"
						:maxlength="6"
						class="real-input"
					/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			password: '',
			isFocus:false
		};
	},
	watch:{
		show(val){
			if(val){
				this.isFocus = true;
			} else {
				this.password = '';
			}
		},
		password(val){
			if (val.length === 6) {
				this.$emit('confirm', val);
			}
		}
	},
	methods: {
		close() {
			this.$emit('close');
		},
		focusInput(){
			this.isFocus = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.password-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;

	.modal-content {
		width: 80%;
		background-color: #fff;
		border-radius: 16rpx;
		padding: 30rpx;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #eee;

		.title {
			font-size: 32rpx;
			font-weight: bold;
		}

		.close-btn {
			position: absolute;
			left: 0;
			top: -10rpx;
			font-size: 40rpx;
			color: #999;
            cursor: pointer;
		}
	}

	.modal-body {
		padding: 40rpx 0;
	}

	.password-input-area {
		position: relative;
	}

	.password-boxes {
		display: flex;
		justify-content: space-between;
		border: 1px solid #ccc;
		border-radius: 8rpx;

		.box {
			width: calc(100% / 6);
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 1px solid #ccc;

			&:last-child {
				border-right: none;
			}

			.dot {
				font-size: 40rpx;
			}
		}
	}

	.real-input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
        z-index: 1;
	}
}
</style>
