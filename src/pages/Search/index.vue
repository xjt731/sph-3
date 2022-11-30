<template>
  <div>
       <h1>params的参数:{{$route.params.keyWord}}----------{{$route.params.keyWord}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  props:['keyWord']
}
</script>

<style scoped>

</style>
