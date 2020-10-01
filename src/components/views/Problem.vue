<template>
  <v-container class="d-flex" style="border: 1px solid orange;">
    <div class="pb">
      <v-card
        class ="pb-card"
      >
        <v-list-item>
          <v-list-item-avatar 
            size="50px"
            @click="clicked"
          >
            <v-img src="@/assets/img/jordy.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <span style="font-size:50px;">참말, 거짓말</span>
            <v-list-item-subtitle>by J Min</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        
          두 갈래의 길이 두마을과 연결되어 있습니다. <br/>
          한마을에는 참말만 하는 사람들이 살고 있고 <br/>
          다른 마을에는 거짓말만 하는 사람들이 살고있습니다.<br/>
          철수는 참말만 하는 마을을 찾아가다가 중간에 갈림길에서 한사람을 만났는데,<br/>
          두 마을중 한마을에 사는 것은 확실하나 어디사는지 모릅니다.<br/>
          이사람에게 한가지만 질문하여 참마을로 가는 방법은?<br/>
<br/><br/><br/>
          두 갈래의 길이 두마을과 연결되어 있습니다. <br/>
          한마을에는 참말만 하는 사람들이 살고 있고 <br/>
          다른 마을에는 거짓말만 하는 사람들이 살고있습니다.<br/>

        <v-card-actions>
          <v-btn
            text
            color="deep-purple accent-4"
          >
            Read
          </v-btn>
          <v-btn
            text
            color="deep-purple accent-4"
          >
            Bookmark
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <center>
        <v-btn
          color="light-green darken-2 white--text" 
          @click="clickBtn"
        >
          {{btnName}}
        </v-btn>
      </center>
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
  </v-container>
</template>

<script>
export default {
  name: "Problem",
  data: () => ({
    showTextArea: true,
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
    }
  },
  components: {
    CanvasSutaku: () => import("@/components/common/CanvasSutaku.vue")
  }
};
</script>
<style scoped>
*{
  font-family: 'Gamja Flower', cursive;
}
.pb {
  margin: 0 auto;
  width: 50%;
  border: 1px solid teal;
}
.pb-card {
  width: 100%;
  font-size: 24px;
  margin: 50px auto 20px;
  border: 1px solid slateblue;
}
.sol {
  width: 50%;
  height: 100vh;
  font-size: 24px;
  border: 1px solid deeppink;
}
#sol-canvas {
  margin: 0 auto;
  border: 1px solid coral;
}
</style>