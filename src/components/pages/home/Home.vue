<template>
  <div>
    <div :class="{'area': showSolutionArea}">
      <Solution
        class="area-sol"
        v-if="showSolutionArea"
      />
      <Problem 
        :class="[showSolutionArea? 'area-pb' : 'pb-only']"
        :mini="showSolutionArea? true : false"
      />
    </div>
    <div>
      <div class="btn">
        <div 
          class="btn-sol"
          @click="clickBtn"
        >
          {{btnName}}
        </div>
        <div 
          v-if="showSolutionArea"
          class="btn-submit"
          @click="clickBtn"
        >
          submit
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "Home",
  
  data: () => ({
    showSolutionArea: false,
  }),
  methods: {
    clickBtn() {
      this.showSolutionArea = !this.showSolutionArea;
    },
  },
  computed: {
    btnName() {
      return this.showSolutionArea? "Cancel":"Solution";
    },
    ...mapState({
      pb: state => state.problem,
    })
  },
  components: {
    Problem: () => import("@/components/pages/home/items/Problem"),Solution: () => import("@/components/pages/home/items/Solution")
  }
};
</script>
<style lang='scss' scoped>
$shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
.pb-only {
  margin: 11vh auto 1.6rem;
  width: 37vw;
}
.area {
  display: flex;
  overflow: auto;
  &-pb {
    margin: 1rem;
  }
  &-sol {
    width: 70vw;
    margin: 1rem;
  }
}
%btn-style {
  margin: 1rem;
  padding: 0 .2rem;
  width: 14rem;
  text-align: center;
  border-radius: 2rem;
  box-shadow: $shadow;
}
.btn {
  margin: 0 auto;
  font-size: 3rem;
  display: flex;
  width: 30rem;
  &-sol {
    @extend %btn-style;
    background-color: tomato;
    &:hover {
      cursor: pointer;
      color: beige;
      background-color: rgb(209, 65, 39);
    }
  }
  &-submit {
    @extend %btn-style;
    background-color: blueviolet;
    &:hover {
      cursor: pointer;
      color: beige;
      background-color: rgb(113, 35, 185);
    }
  }
}
</style>