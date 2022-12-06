<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- <Floor></Floor> -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floorInfo="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import ListContainer from "./ListContainer";
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import Rank from "./Rank";
import Recommend from "./Recommend";

export default {
  name: "",
  components: {
    
    ListContainer,
    Brand,
    Floor,
    Like,
    Rank,
    Recommend
  },
  mounted(){
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList: state =>state.home.floorList
    })
  }
};
</script>

<style scoped>
</style>
