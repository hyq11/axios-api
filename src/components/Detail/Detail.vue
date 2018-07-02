<template>
	<div class="detail-page">
		<h1><span @click="back()" class="back">返回</span><span>{{obj.title}}</span></h1>
		<div class="wrapper" ref="wrapper">
			<div class="contain">
				<div class="detail flex justify-center">
					<img class="img" :src='obj.images.large' alt="" />
					<div class="description">
						<div class="detail-name"><span class="same-style">电影名称：</span>{{obj.title}}(原名：{{obj.original_title}})</div>
						<p><span class="same-style">导 &nbsp; &nbsp; &nbsp; 演：</span><span v-for="(dir,ik) in obj.directors" :key="ik">{{dir.name}}</span></p>
						<div><span class="same-style">演 &nbsp; &nbsp; &nbsp; 员：</span><span v-for="(sum,k) in obj.casts" :key="k">{{sum.name}}、</span></div>
						<p class="type"><span class="same-style">类 &nbsp; &nbsp; &nbsp; 型 ：</span><span v-for="(ty,m) in obj.genres" :key="m">{{ty}}/</span></p>
						<p class="country"><span class="same-style">地 &nbsp; &nbsp; &nbsp; 区 ：</span><span v-for="(cy,n) in obj.countries" :key="n">{{cy}}、</span></p>	
						<p><span class="same-style">评 &nbsp; &nbsp; &nbsp; 分 ：</span>{{obj.rating.average}}</p>
						<div class="flex justify-between">
							<p>
								<span>评分人数：</span>{{obj.ratings_count}}
							</p>
							<p>
								<span>影评数量：</span>{{obj.reviews_count}}
							</p></div>
						<div class="flex justify-between">
							<p>
							<span>年代：{{obj.year}}</span>
							</p>
								<p>
								<span>想看人数：{{obj.wish_count}}</span>
							</p>
						</div>
					</div>
				</div>
				<p class="story"><span>故事情节</span>：{{obj.summary}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll"
	import {detail} from '../../api/api'
	export default{
		data(){
			return{
				obj:{},
			}
		},
		mounted(){
			setTimeout(()=>{
				this.getData();
			},200)
			let wrapper=this.$refs.wrapper;
		  	// this.$nextTick(()=>{
		  		let scroll=new BScroll(wrapper,{
		  			scrollY:true,
		  			click:true
		  		})
		  	// })
		 },
		methods:{
			async getData(){
				let a=await detail(this.$route.params.id);
				this.obj=a.data;
				console.log(a);
			},
			back(){
				this.$router.go(-1);
			}
		},
		beforeRouteLeave (to, from, next) {
			if(to.path=="/"){
				to.meta.keepAlive=true;
			}else{
				to.meta.keepAlive=false;
			
			}
			next();
		}
		
	}
</script>
		
<style scoped>
	.detail-page{
		position: absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		background:#eee;
		overflow: auto;
	}
	.detail{
		box-sizing: border-box;
		width: 100%;
		padding:30px 20px 0;
	}
	.img{
		width:200px;
		height: 300px;
	}
	.description{
		margin-top:20px;
		font-size: 14px;
		color: #333;
	}
	.description p, .description div{
		line-height: 26px;
	}
	.story{
		padding:10px 30px;
		font-size: 14px;
		line-height: 25px;
	}
	.story>span{
		color:#999999;
		font-size: 16px;
	}
	h1{
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: linear-gradient(150deg,#FFE680,#FF8080);
		position: absolute;
		top:0;
		left:0;
		width:100%;
	}
	h1>span:last-child{
		font-size: 20px;
		font-weight: 600;
		background: linear-gradient(30deg,#80B3FF,#8DD35F);
		-webkit-background-clip:text;
		color: transparent;
		
	}
	.back{
		color:#ccc;
		float: left;
	}
	.wrapper{
		position: absolute;
		top:40px;
		left:0;
		right:0;
		bottom:0;
		overflow: auto;
	}
	.same-style{
		color:#999999;
	}
</style>