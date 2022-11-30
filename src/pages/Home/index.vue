<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>

import TypeNav from "./TypeNav";
import ListContainer from "./ListContainer";
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import Rank from "./Rank";
import Recommend from "./Recommend";

export default {
  name: "",
  components: {
    TypeNav,
    ListContainer,
    Brand,
    Floor,
    Like,
    Rank,
    Recommend
  },

};
</script>

<style scoped>
</style>
