<template>
  <div>
    <pq-navi id="pq-navi"/>
    <div id="login-btn">
      L<span class="font-size-small">og</span>
      <span class="font-size-small line-height-0"><br/>in</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CoreHeader',
  components: {
    PqNavi: () => import("@/components/core/header/items/PqNavi")
  }
}
</script>
<style scoped>
#pq-navi {
  position: absolute;
  left: 0;
  display: inline-block;
  width: 20%;
}
#login-btn {
  position: absolute;
  right: 2.5rem;
  display: inline-block;
  margin: 2.5rem auto;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border: 2px solid black;
  border-radius: .8rem;
}
</style>