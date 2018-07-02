<template>
  <div>
  	<child :arrs="arr"></child>
   </div>
</template>

<script>
import child from "@/components/template"
import {top250} from "../api/api"
export default {
  data () {
    return {
      arr:[]

    }
  },
  components:{
  	child
  },
  methods:{
    async getData(){
        let res= await top250();
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
