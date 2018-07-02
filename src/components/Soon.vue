<template>
  <div>
  		<child :arrs="arr"></child>
  </div>
</template>

<script>
import child from "@/components/template" 
import {soon} from "../api/api"
export default {
	components:{
		child
	},
  data () {
    return {
      arr:[]

    }
  },
  methods:{
    async getData(){
        let res= await soon();
        this.arr=res.data.subjects;
    },
  },
  
  mounted(){
      let that=this;
       setTimeout(()=>{
         that.getData();
       },200)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
