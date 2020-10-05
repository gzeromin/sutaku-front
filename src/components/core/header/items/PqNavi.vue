<template>
  <div>
    <div 
      :class="[pqNavi == 'p' ? 'selected':'non-selected']"
      id="problem"
      @click="clickPqNavi('p')"
    >
      P<span class="text-small">roblem</span>
    </div>
    <div 
      :class="[pqNavi == 'q' ? 'selected':'non-selected']"
      id="question"
      @click="clickPqNavi('q')"
    >
      Q<span class="text-small">question</span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pqNavi: "p"
  }),
  methods: {
    clickPqNavi(naviName) {
      this.pqNavi = naviName;
    }
  }
}
</script>
<style scoped>
#problem {
  display: inline-block;
  width: 50%;
  text-align: center;
  background-color: royalblue;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  font-weight: bold;
}
#question {
  display: inline-block;
  width: 50%;
  text-align: center;
  background-color: lightcoral;
  height: 100px;
  line-height: 100px;
  font-size: 50px;
  font-weight: bold;
}
.text-small {
  font-size: 20px;
}
.selected {
  color: black !important;
}
.non-selected {
  color: white !important;
}
</style>