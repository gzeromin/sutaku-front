<template>
  <div>
    <div 
      :class="[pqNavi == 'problem' ? 'selected':'non-selected']"
      id="problem"
      @click="switchView('problem')"
    >
      P<span class="font-size-small">roblem</span>
    </div>
    <div 
      :class="[pqNavi == 'question' ? 'selected':'non-selected']"
      id="question"
      @click="switchView('question')"
    >
      Q<span class="font-size-small">question</span>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  methods: {
    switchView(path) {
      this.SET_PQ_NAVI(path);
      this.SET_FUNC_NAVI('');
    },
    ...mapMutations([
      'SET_PQ_NAVI',
      'SET_FUNC_NAVI'
    ])
  },
  computed: {
    ...mapState({
      pqNavi: state => state.pqNavi
    })
  }
}
</script>
<style lang="scss" scoped>
#problem, #question {
  display: inline-block;
  width: 50%;
  text-align: center;
  height: 10rem;
  line-height: 10rem;
  font-size: 5rem;
  font-weight: bold;
  border: outset;
}
#problem {
  background-color: mediumslateblue;
}
#question {
  background-color: lightcoral;
}
.selected {
  box-sizing: border-box;
  border: inset;
  color: black !important;
}
.non-selected {
  border: outset;
  color: white !important;
}
</style>