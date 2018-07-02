<template>
	<div>
		<keep-alive include="detail">
			<child :arrs="arr"></child>
		</keep-alive>
	</div>
</template>
<script>
	import child from "@/components/template"
	export default{
		components:{
			child
		},
		data(){
			return{
				arr:[]
			}
		},
		methods:{
		getData(){
      let that=this;
      this.$http.get('/movie/in_theaters').then(res=>{
	            that.arr=res.data.subjects;
	            console.log(that.arr); 
	      })
	    }
		},
		mounted(){
		    setTimeout(()=>{
		      this.getData();
		    },20)
			}
	}
</script>
<style scoped="scoped">
	
</style>