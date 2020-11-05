<template>
  <div>
    <unit 
      v-for="pb in pbs" 
      :key="pb.title"
      :item="pb"
    ></unit>
  </div>
</template>
<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        pbs: state => state.problems
      })
    },
    components: {
      Unit: () => import("@/components/pages/list/items/Unit.vue"),
    }
  }
</script>
<style scoped>

</style>