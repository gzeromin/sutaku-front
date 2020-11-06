<template>
  <div>
    <div class="card">
      <div class="card-title">
        <v-icon
          large
          left
        >
          mdi-alien-outline
        </v-icon>
        {{pb.title}}
      </div>
      <div class="content">
        <div class="content-tool">
          <v-btn
            icon
            @click="showCanvasArea = !showCanvasArea"
          >
            <v-icon :color="color">mdi-brush</v-icon>
          </v-btn>
        </div>
        <canvas-sutaku
          v-if="showCanvasArea" 
          class="content-canvas"
        />
        <textarea
          class="content-text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Problem",
  data: () => ({
    showCanvasArea: false,
  }),
  methods: {
  },
  computed: {
    ...mapState({
      pb: state => state.problem,
    })
  },
  components: {
    CanvasSutaku: () => import("@/components/common/CanvasSutaku.vue")
  }
};
</script>
<style lang="scss" scoped>
.card {
  height: 80vh;
  border-radius: .4rem;
  &-title {
    font-size: 3rem;
  }
}
.content {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  &-tool {
    width: 100%;
    height: 4vh;
    border: 1px solid gray;
    border-radius: .4rem .4rem 0 0;
  }
  &-canvas {
    width: 17vw;
  }
  &-text {
    font-size: 1.8rem;
    height: 15vh;
    white-space: pre-line;
    border: 1px solid gray;
    border-radius: 0 0 .4rem .4rem;
  }
}
</style>