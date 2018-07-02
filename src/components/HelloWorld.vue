<template>
  <div class="hello">
     <div class="head flex justify-between">
         <router-link :to="list.path" v-for="(list,i) in arr" :key="i" class="head-list ">{{list.text}}</router-link>
     </div>
     <keep-alive>
        <router-view class="container"></router-view>
     </keep-alive>
   </div>
</template>

<script>
export default {
  data () {
    return {
      arr:[
          {
              path:'hot',
              text:"正在热映"
          },
          {
              path:'soon',
              text:'即将上映'
          },
          {
              path:'top250',
              text:"Top250"
          }
      ]

    }
  },
  methods:{
  },
  beforeRouteLeave (to, from, next) {
      from.meta.keepAlive=false;
      next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
}
.head{
    width:100%;
    position: absolute;
    height: 40px;
    background: #D3CBB7;
    box-shadow: 0 10px 15px 0 rgba(217,210,194,1);
}
.head-list{
    width:100px;
    text-align: center;
    line-height: 40px;
    color:skyblue; 
}
.router-link-active{
    background: #FDF6E3;
}
.container{
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    top:40px;
    overflow: auto;
}
</style>
