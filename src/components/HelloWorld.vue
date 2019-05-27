<template>
	<div>
			<div v-for="(item,index) in list" :key="index" class="container">
				<div class="date"><span>{{item.date}}</span></div>
				<div class="main">
					<div class="content">
						<h4>{{item.title}}</h4>
						<p class="information">{{item.name}}</p>
						<p class="remark">{{item.remark}}</p>
						<div class="detail">
							<span @click="User"> 张三张三张三张三张三</span>
							<van-icon name="arrow" />
						</div>
					</div>
				</div>
			</div>
</div>
</template>

<script>
	import { getusers } from "@/api/users";
	export default {
		name: 'HelloWorld',
		data() {
			return {
				list: []
			}
		},
		mounted(){
			getusers().then(res=>{
				console.log(res.data);
					this.list= res.data.list;
				})
		},
		props: {
			msg: String,
			test1: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>