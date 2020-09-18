<template>
  <v-container class="d-flex">
    <div class="pb">
      <div class="pb-title d-flex align-center justify-center">
        문제: 참말, 거짓말
      </div>
      <v-card
        class="pb-card d-flex align-center justify-center"
      >
      두 갈래의 길이 두마을과 연결되어 있습니다. <br/>
      한마을에는 참말만 하는 사람들이 살고 있고 <br/>
      다른 마을에는 거짓말만 하는 사람들이 살고있습니다.<br/>
      철수는 참말만 하는 마을을 찾아가다가 중간에 갈림길에서 한사람을 만났는데,<br/>
      두 마을중 한마을에 사는 것은 확실하나 어디사는지 모릅니다.<br/>
      이사람에게 한가지만 질문하여 참마을로 가는 방법은?<br/>
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
      class="pb-solution d-flex justify-center align-center"
    >
      TO DO!
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Problem",
  data: () => ({
    showTextArea: true
  }),
  methods: {
    clickBtn() {
      this.showTextArea = !this.showTextArea;
    }
  },
  computed: {
    btnName() {
      return this.showTextArea? "Submit":"Solution";
    }
  }
};
</script>
<style scoped>
*{
  font-family: 'Gamja Flower', cursive;
}
.pb {
  margin: 20px auto 30px;
  width: 50%;
}
.pb-title {
  font-size: 50px;
  margin: 40px auto 10px;
}
.pb-card {
  width: 100%;
  height: 90%;
  max-height: 500px;
  font-size: 24px;
  margin: 0px auto 20px;
}
.pb-solution {
  width: 50%;
  font-size: 24px;
}
</style>