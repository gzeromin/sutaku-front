<template>
  <div>
    <div class="user">
      <br>
      <div 
        class="user-photo"
        :style="{'background-image': 'url('+require('@/assets/img/jordy.png')+')'}"
      >
      </div>
      <div class="user-name">J.Min</div>
    </div>
    <div class="navi">
      <div 
        class="navi-menu"
        id="list"
        :class="[funcNavi == 'list' ? 'selected':'']"
        @click="switchView('list')"
      >list</div>
      <div 
        class="navi-menu"
        id="upload"
        :class="[funcNavi == 'upload' ? 'selected':'']"
        @click="switchView('upload')"
      >upload</div>
    </div> 
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'CorePersonal',
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Upload', icon: 'fas fa-pen-square', path: "upload" },
          { title: 'Incorrect Note', icon: 'fas fa-book-open', path: "incrrNote" },
          { title: 'Questions', icon: 'far fa-question-circle', path: "questions" },
          { title: 'Answers & Solutions', icon: 'fas fa-archive', path: "ansNSol" },
        ],
        mini: false,
      }
    },
    methods: {
      switchView(path) {
        this.SET_FUNC_NAVI(path);
      },
      ...mapMutations(['SET_FUNC_NAVI'])
    },
    computed: {
      ...mapState({
        funcNavi: state => state.funcNavi
      })
    }
  }
</script>