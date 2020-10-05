<template>
  <div>
    <div class="p-menu" id="a">a오답노트보기</div>
    <div class="p-menu" id="b">b화이트보드</div>
    <div class="p-menu" id="c">c친구</div>
    <div class="p-menu" id="d">d설정</div>
    <div class="p-menu" id="e">e로그인</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.p-menu {
  display: inline-block;
  width: 20%;
  height: 50px;
  font-size: 5px;
  line-height: 60px;
}
#a {
  background-color: aqua;
}
#b {
  background-color: bisque;
}
#c {
  background-color: coral;
}
#d {
  background-color: white;
}
#e {
  background-color: teal;
}
</style>