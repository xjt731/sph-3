<template>
  <div>
    <TypeNav></TypeNav>
    <h1>params的参数:{{$route.params.keyWord}}----------{{$route.params.keyword}}</h1>
    <h1>query的参数:{{$route.query.y}}----------{{$route.query.y}}</h1>
    <h1>query的参数:{{$route.query.k}}----------{{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  /* props: ["keyword", "y"] */
};
</script>

<style scoped>
</style>
