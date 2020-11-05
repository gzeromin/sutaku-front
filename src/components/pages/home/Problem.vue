<template>
  <div class="font-size-medium">
    <div class="pb">
      <div class="user-avatar"
            :style="{'background-image': 'url('+require('@/assets/img/jordy.png')+')'}">
      </div>
      <table>
        <tr>
          <td class="font-size-big">{{pb.title}}</td>
        </tr>
        <tr>
          <td>
            {{pb.content}}
          </td>
        </tr>
      </table>
        <button 
          @click="clickBtn"
        >
          {{btnName}}
        </button>
    </div>
    <div 
      v-if="showTextArea"
      class="sol"
    >
      <v-btn @click="openCanvas">Drawing</v-btn>
      TO DO!
      <br>
      <canvas-sutaku v-if="showCanvasArea"/>
      <v-textarea
        rows="20"
          name="input-7-4"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Problem",
  data: () => ({
    showTextArea: false,
    showCanvasArea: false,
  }),
  methods: {
    clicked() {
      alert("clicked");
    },
    clickBtn() {
      this.showTextArea = !this.showTextArea;
    },
    openCanvas() {
      this.showCanvasArea = !this.showCanvasArea;
      
    },
  },
  computed: {
    btnName() {
      return this.showTextArea? "Submit":"Solution";
    },
    ...mapState({
      pb: state => state.problem,
    })
  },
  components: {
    CanvasSutaku: () => import("@/components/common/CanvasSutaku.vue")
  }
};
</script>
<style scoped>
</style>