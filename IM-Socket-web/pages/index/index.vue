<template>
	<view class="content">
		<view class="main">
			<view v-for="(item,index) in arr" :key="index">
				{{item}}
			</view>
		</view>
		<view class="foot">
			<input type="text" class="cont" v-model="cont"/>
			<button type="default" @tap="send">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cont: '',
				arr:['asdad', 'asdasd', 'asdasdasdd']
			}
		},
		onLoad() {

		},
		methods: {
			send: function () {
				this.arr.push(this.cont)
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
	
	.foot{
		position: fixed;
		bottom: 0;
		width: 100%;
		.cont{
			width: 100%;
			height: 80rpx;
			background-color: #eee;
		}
	}
	
	
</style>
