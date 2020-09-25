<template>
    <v-container>
      <br/>
      <v-list-item class="px-2">
        <v-list-item-avatar size="70px">
          <v-img src="@/assets/img/jordy.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>J Min</v-list-item-title>
          <v-list-item-subtitle>1,000dallars</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <br/>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="switchView(item.path)"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-container>
</template>
<script>
import { mapMutations } from 'vuex'
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
    }
  }
</script>