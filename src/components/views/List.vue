<template>
  <div>
    <unit 
      v-for="pb in pbs" 
      :key="pb.index"
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
      Unit: () => import("@/components/views/items/Unit.vue"),
    }
  }
</script>
<style scoped>

</style>