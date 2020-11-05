<template>
  <div class="wrapper">
    ...
    {{item.title}}
    <div class="wrapper-contents">
      <span 
        class="font-size-medium"
        v-for="i in 50" :key=i>
        {{item.content}}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'unit',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 2rem;
  &-contents {
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 1rem;
    box-shadow: .1rem .1rem .1rem rgba(0,0,0,0.2);
    min-height: 25rem;
  }
}
</style>