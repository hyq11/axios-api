<template>
  <div class="hello" ref="wrapper">
      <div class="box flex"> 
        <div v-for="(item,i) in arrs" :key="i" class="box-item" @click="detail(item.id)">
            <div>
              <img v-lazy="item.images.medium" alt="" class="img">
            </div>
            <div class="flex title">
              <p class="title-name">片名:{{item.title}}</p>
              <p class="time">上映时间:{{item.year}}</p>
            </div>
            <div class="flex type">
              <p class="type-type">
                类型:<span v-for="(lis, k) in item.genres" :key="k">{{lis}}</span>
              </p>
              <p class="type-rate">评分:{{item.rating.average}}</p>
            </div>
        </div>
      </div>
      <img src="../../static/img/Blocks-1s-200px.gif" alt=""  v-show="!arrs.length" class="load">
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
	props:{
		arrs:{
			type:Array,
			default:[""]			// 可以设置默认值
		}
	},
  data () {
    return {
    }
  },
  mounted(){
	let that=this;
	let wrapper=this.$refs.wrapper;
  	this.$nextTick(()=>{
  		let scroll=new BScroll(wrapper,{
  			scrollY:true,
  			click:true
  		})
  	})
  },
  methods:{
  	detail(id){
  		console.log(id);
  		this.$router.push(`/detail/${id}`)
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  justify-content: space-around; 
}
.box-item{
  width:150px;
  height:324px; 
}
.img{
  width: 150px;
  height: 225px;
  border:5px solid #ACBBCD;
  border-radius: 5px;
   animation: show 0.8s 0s linear infinite normal;
}
@keyframes show{
  0%{
    border-color:rgba(172,188,205,1);
  }
  50%{
    border-color:rgba(172,188,205,0.3);
  }
  100%{
    border-color:rgba(172,188,205,1);
    
  }
}
.title,.type{
  flex-direction: column;
  font-size:14px;
}

.load{
  display: block;
  margin: 30% auto;
  width: 50px;
  height: 50px; 

}
.hello{
	position: absolute;
	left:0;
	top:0;
	right:0;
	bottom:0;
	overflow: auto;
}
</style>
