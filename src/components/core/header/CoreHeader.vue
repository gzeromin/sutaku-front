<template>
  <div>
    <pq-navi id="pq-navi"/>
    <personal-menu id="personal-menu"/>
  </div>
</template>
<script>
export default {
  name: 'CoreHeader',
  components: {
    PqNavi: () => import("@/components/core/header/items/PqNavi"),
    PersonalMenu: () => import("@/components/core/header/items/menu/Menu"),
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
#personal-menu {
  position: absolute;
  right: 1%;
  display: inline-block;
  width: 25%;
  height: 50px;
  background-color: pink;
  margin: 25px auto;
}
</style>