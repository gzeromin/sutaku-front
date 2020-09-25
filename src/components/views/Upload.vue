<template>
  <div>
    <v-icon @click="backToPbl" size="50px">mdi-reply-circle</v-icon>
    <br/>
    <canvas-sutaku />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'upload',
  methods: {
    ...mapActions(['backToPbl'])
  },
  components: {
    CanvasSutaku: () => import("@/components/common/CanvasSutaku.vue")
  }
}
</script>