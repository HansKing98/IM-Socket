<template>
	<view class="content">
		<view class="main">
			<view v-for="(item,index) in arr" :key="index">
				{{item}}
			</view>
		</view>
		<view class="foot">
			<input type="text" class="cont" v-model="cont" />
			<button type="default" @tap="send">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cont: '',
				arr: []
			}
		},
		onLoad() {
			this.getmsg()
		},
		methods: {
			send: function() {
				if (this.cont.length > 0) {
					// 发送
					let aa = this.cont
					this.socket.emit('message', aa)
					this.arr.push(this.cont)
				}
			},
			// 接收信息
			getmsg: function() {
				this.socket.on('gbmsg', data => {
					this.arr.push(data)
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;

		.cont {
			width: 100%;
			height: 80rpx;
			background-color: #eee;
		}
	}
</style>
